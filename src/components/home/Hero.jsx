import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Phone, ChevronRight } from 'lucide-react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    {/* Rating Badge */}
                    <div className="hero-rating animate-fade-in-up">
                        <div className="rating-badge">
                            <Star size={18} fill="#F59E0B" color="#F59E0B" />
                            <span className="rating-score">4.1</span>
                            <span className="rating-text">• 14 Reviews</span>
                        </div>
                    </div>

                    <h1 className="hero-title animate-fade-in-up stagger-1">
                        Your Trusted <span className="text-gradient">Tech Partner</span> in Port Harcourt
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up stagger-2">
                        Discover authentic smartphones, tablets, and accessories from top brands.
                        Enjoy competitive prices, fast delivery, and expert support.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta animate-fade-in-up stagger-3">
                        <Link to="/products" className="btn btn-cta btn-lg">
                            Shop Now
                            <ChevronRight size={20} />
                        </Link>
                        <a href="tel:+2347034088743" className="btn btn-white btn-lg">
                            <Phone size={20} />
                            Call Us
                        </a>
                    </div>

                    {/* Trust Features */}
                    <div className="hero-features animate-fade-in-up stagger-4">
                        <div className="hero-feature">
                            <div className="feature-icon">
                                <Shield size={20} />
                            </div>
                            <span>Authentic Products</span>
                        </div>
                        <div className="hero-feature">
                            <div className="feature-icon">
                                <Truck size={20} />
                            </div>
                            <span>Same-Day Delivery</span>
                        </div>
                        <div className="hero-feature">
                            <div className="feature-icon">
                                <Phone size={20} />
                            </div>
                            <span>Expert Support</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-in-up">
                    <div className="hero-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
                            alt="Latest Smartphones"
                            className="hero-image"
                        />
                        <div className="hero-image-glow"></div>
                    </div>

                    {/* Floating Cards */}
                    <div className="floating-card floating-card-1 animate-float">
                        <span className="floating-card-emoji">📱</span>
                        <div className="floating-card-text">
                            <span className="floating-card-title">iPhone 15 Pro</span>
                            <span className="floating-card-price">₦1,850,000</span>
                        </div>
                    </div>

                    <div className="floating-card floating-card-2 animate-float" style={{ animationDelay: '1s' }}>
                        <span className="floating-card-emoji">🎧</span>
                        <div className="floating-card-text">
                            <span className="floating-card-title">AirPods Pro</span>
                            <span className="floating-card-price">₦320,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
