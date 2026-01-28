import { useState } from 'react';
import { Send, Gift, Bell } from 'lucide-react';
import './Newsletter.css';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter-wrapper">
                    <div className="newsletter-content">
                        <div className="newsletter-icon">
                            <Bell size={32} />
                        </div>
                        <h2 className="newsletter-title">
                            Get Exclusive Deals & Updates
                        </h2>
                        <p className="newsletter-text">
                            Subscribe to our newsletter and be the first to know about new arrivals,
                            exclusive offers, and special discounts.
                        </p>

                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <div className="newsletter-input-wrapper">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-btn">
                                    {isSubmitted ? 'Subscribed!' : 'Subscribe'}
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>

                        <div className="newsletter-perks">
                            <div className="perk">
                                <Gift size={16} />
                                <span>Get 10% off your first order</span>
                            </div>
                            <div className="perk">
                                <Bell size={16} />
                                <span>Early access to sales</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
