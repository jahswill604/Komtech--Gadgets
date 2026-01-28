import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import './Wishlist.css';

function Wishlist() {
    const { items: wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="wishlist-page wishlist-empty">
                <div className="container">
                    <div className="empty-wishlist">
                        <div className="empty-icon">
                            <Heart size={64} />
                        </div>
                        <h1>Your Wishlist is Empty</h1>
                        <p>Save items you love here to buy later.</p>
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Start Shopping <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <div className="container">
                    <h1>My Wishlist</h1>
                    <p>{wishlistItems.length} item{wishlistItems.length > 1 ? 's' : ''} saved for later</p>
                </div>
            </div>

            <div className="container wishlist-container">
                <div className="wishlist-actions-top">
                    <button className="clear-wishlist-btn" onClick={clearWishlist}>
                        <Trash2 size={16} /> Clear Wishlist
                    </button>
                </div>

                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="wishlist-item">
                            <div className="wishlist-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="wishlist-item-details">
                                <Link to={`/product/${item.id}`} className="item-name">
                                    {item.name}
                                </Link>
                                <span className="item-brand">{item.brand}</span>
                                <span className="item-price">{formatPrice(item.price)}</span>
                                <span className="item-stock in-stock">In Stock</span>
                            </div>
                            <div className="wishlist-item-actions">
                                <button
                                    className="btn btn-primary btn-add-cart"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    <ShoppingCart size={18} />
                                    Add to Cart
                                </button>
                                <button
                                    className="btn btn-outline btn-remove"
                                    onClick={() => removeFromWishlist(item.id)}
                                >
                                    <Trash2 size={18} />
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
