import { Link } from 'react-router-dom';
import {
    Trash2,
    Plus,
    Minus,
    ShoppingBag,
    ArrowRight,
    Truck,
    Shield,
    CreditCard
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import './Cart.css';

function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page cart-empty">
                <div className="container">
                    <div className="empty-cart">
                        <div className="empty-icon">
                            <ShoppingBag size={64} />
                        </div>
                        <h1>Your Cart is Empty</h1>
                        <p>Looks like you haven't added any items to your cart yet.</p>
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Start Shopping <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const subtotal = getCartTotal();
    const deliveryFee = subtotal > 100000 ? 0 : 2500;
    const total = subtotal + deliveryFee;

    return (
        <div className="cart-page">
            {/* Header */}
            <div className="cart-header">
                <div className="container">
                    <h1>Shopping Cart</h1>
                    <p>{cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart</p>
                </div>
            </div>

            <div className="container cart-container">
                <div className="cart-grid">
                    {/* Cart Items */}
                    <div className="cart-items">
                        <div className="cart-items-header">
                            <h2>Cart Items</h2>
                            <button className="clear-cart-btn" onClick={clearCart}>
                                <Trash2 size={16} />
                                Clear Cart
                            </button>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <Link to={`/product/${item.id}`} className="item-name">
                                        {item.name}
                                    </Link>
                                    <span className="item-brand">{item.brand}</span>
                                    <span className="item-price">{formatPrice(item.price)}</span>
                                </div>
                                <div className="item-quantity">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <div className="item-total">
                                    {formatPrice(item.price * item.quantity)}
                                </div>
                                <button
                                    className="remove-item"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-rows">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <span>
                                    {deliveryFee === 0 ? (
                                        <span className="free-delivery">FREE</span>
                                    ) : (
                                        formatPrice(deliveryFee)
                                    )}
                                </span>
                            </div>
                            {deliveryFee > 0 && (
                                <p className="free-delivery-note">
                                    Add {formatPrice(100000 - subtotal)} more for free delivery!
                                </p>
                            )}
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                        </div>

                        <Link to="/checkout" className="btn btn-cta btn-lg checkout-btn">
                            Proceed to Checkout
                            <ArrowRight size={20} />
                        </Link>

                        <div className="summary-trust">
                            <div className="trust-item">
                                <Truck size={18} />
                                <span>Free delivery over ₦100,000</span>
                            </div>
                            <div className="trust-item">
                                <Shield size={18} />
                                <span>Secure checkout</span>
                            </div>
                            <div className="trust-item">
                                <CreditCard size={18} />
                                <span>Multiple payment options</span>
                            </div>
                        </div>

                        <Link to="/products" className="continue-shopping">
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
