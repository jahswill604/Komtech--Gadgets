import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import './Checkout.css';

function Checkout() {
    const navigate = useNavigate();
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: ''
    });

    const subtotal = getCartTotal();
    const deliveryFee = subtotal > 100000 ? 0 : 2500;
    const total = subtotal + deliveryFee;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        setStep(2);
        window.scrollTo(0, 0);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setTimeout(() => {
            clearCart();
            setStep(3);
            window.scrollTo(0, 0);
        }, 1500);
    };

    if (cartItems.length === 0 && step !== 3) {
        navigate('/cart');
        return null;
    }

    if (step === 3) {
        return (
            <div className="checkout-page success-page">
                <div className="container">
                    <div className="success-content">
                        <div className="success-icon">
                            <CheckCircle size={80} />
                        </div>
                        <h1>Order Placed Successfully!</h1>
                        <p>Thank you for your purchase via Komtech Gadgets.</p>
                        <p className="order-number">Order #KG-{Math.floor(100000 + Math.random() * 900000)}</p>
                        <p className="success-msg">We've sent a confirmation email to {formData.email}.</p>
                        <button onClick={() => navigate('/products')} className="btn btn-primary btn-lg">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="container">
                    <h1>Checkout</h1>
                </div>
            </div>

            <div className="container checkout-container">
                <div className="checkout-grid">
                    {/* Left Column: Forms */}
                    <div className="checkout-forms">
                        {/* Steps Indicator */}
                        <div className="checkout-steps">
                            <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                                <div className="step-number">1</div>
                                <span>Shipping</span>
                            </div>
                            <div className="step-line"></div>
                            <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                                <div className="step-number">2</div>
                                <span>Payment</span>
                            </div>
                            <div className="step-line"></div>
                            <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                                <div className="step-number">3</div>
                                <span>Done</span>
                            </div>
                        </div>

                        {step === 1 && (
                            <form onSubmit={handleInfoSubmit} className="checkout-form">
                                <h2>Shipping Information</h2>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block btn-lg">
                                    Continue to Payment
                                </button>
                            </form>
                        )}

                        {step === 2 && (
                            <form onSubmit={handlePaymentSubmit} className="checkout-form">
                                <h2>Payment Method</h2>
                                <div className="payment-options">
                                    <label className="payment-option selected">
                                        <input type="radio" name="payment" defaultChecked />
                                        <div className="payment-details">
                                            <span className="payment-name">Pay via Bank Transfer</span>
                                            <span className="payment-desc">Transfer to our corporate account</span>
                                        </div>
                                    </label>
                                    <label className="payment-option">
                                        <input type="radio" name="payment" />
                                        <div className="payment-details">
                                            <span className="payment-name">Pay on Delivery</span>
                                            <span className="payment-desc">Pay cash when you receive items</span>
                                        </div>
                                    </label>
                                </div>

                                <div className="payment-info-box">
                                    <h3>Bank Details</h3>
                                    <p>Bank: <strong>Not available</strong></p>
                                    <p>Account Name: <strong>Komtech Gadgets</strong></p>
                                    <p>Account Number: <strong>0000000000</strong></p>
                                    <p className="payment-note">Please use your Order name as reference.</p>
                                </div>

                                <div className="checkout-actions">
                                    <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                                        Back
                                    </button>
                                    <button type="submit" className="btn btn-cta btn-block btn-lg">
                                        Complete Order ({formatPrice(total)})
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="checkout-summary-col">
                        <div className="checkout-summary-card">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="summary-item">
                                        <div className="summary-item-img">
                                            <img src={item.image} alt={item.name} />
                                            <span className="summary-qty">{item.quantity}</span>
                                        </div>
                                        <div className="summary-item-info">
                                            <p className="summary-name">{item.name}</p>
                                            <p className="summary-price">{formatPrice(item.price)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-totals">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery</span>
                                    <span>{deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>{formatPrice(total)}</span>
                                </div>
                            </div>
                            <div className="checkout-trust">
                                <div className="trust-row">
                                    <Shield size={16} /> Secure Payment
                                </div>
                                <div className="trust-row">
                                    <Truck size={16} /> Fast Delivery
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
