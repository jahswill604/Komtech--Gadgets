import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST': {
            const exists = state.items.find(item => item.id === action.payload.id);
            if (exists) return state;
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        }
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case 'CLEAR_WISHLIST':
            return { ...state, items: [] };
        case 'LOAD_WISHLIST':
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

const initialState = {
    items: []
};

export function WishlistProvider({ children }) {
    const [state, dispatch] = useReducer(wishlistReducer, initialState);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('komtech_wishlist');
        if (savedWishlist) {
            try {
                const parsedWishlist = JSON.parse(savedWishlist);
                dispatch({ type: 'LOAD_WISHLIST', payload: parsedWishlist });
            } catch (e) {
                console.error('Error loading wishlist:', e);
            }
        }
    }, []);

    // Save wishlist to localStorage on change
    useEffect(() => {
        localStorage.setItem('komtech_wishlist', JSON.stringify(state.items));
    }, [state.items]);

    const addToWishlist = (product) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    };

    const removeFromWishlist = (productId) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
    };

    const clearWishlist = () => {
        dispatch({ type: 'CLEAR_WISHLIST' });
    };

    const isInWishlist = (productId) => {
        return state.items.some(item => item.id === productId);
    };

    const getWishlistCount = () => {
        return state.items.length;
    };

    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <WishlistContext.Provider value={{
            items: state.items,
            addToWishlist,
            removeFromWishlist,
            clearWishlist,
            isInWishlist,
            getWishlistCount,
            toggleWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
