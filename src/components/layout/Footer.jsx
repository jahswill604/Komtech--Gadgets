import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Send,
    ChevronRight
} from 'lucide-react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Shop All' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' }
    ];

    const categories = [
        { path: '/products?category=smartphones', label: 'Smartphones' },
        { path: '/products?category=tablets', label: 'Tablets' },
        { path: '/products?category=smartwatches', label: 'Smartwatches' },
        { path: '/products?category=accessories', label: 'Accessories' },
        { path: '/products?category=audio', label: 'Audio' }
    ];

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        alert('Thank you for subscribing to our newsletter!');
    };

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <div className="footer-logo-icon">
                                    <span>K</span>
                                </div>
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">Komtech</span>
                                    <span className="footer-logo-tagline">Gadgets</span>
                                </div>
                            </Link>
                            <p className="footer-description">
                                Your trusted tech partner in Port Harcourt. We offer authentic gadgets,
                                competitive prices, and expert support for all your tech needs.
                            </p>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map(link => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            <ChevronRight size={16} />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="footer-column">
                            <h4 className="footer-title">Categories</h4>
                            <ul className="footer-links">
                                {categories.map(link => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            <ChevronRight size={16} />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-column">
                            <h4 className="footer-title">Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <MapPin size={18} />
                                    <span>128, Old Aba Road, By 1st Artillery, Port Harcourt, Rivers State</span>
                                </li>
                                <li>
                                    <Phone size={18} />
                                    <a href="tel:+2347034088743">0703 408 8743</a>
                                </li>
                                <li>
                                    <Mail size={18} />
                                    <a href="mailto:info@komtechgadgets.com">info@komtechgadgets.com</a>
                                </li>
                                <li>
                                    <Clock size={18} />
                                    <span>Mon - Sat: 9 AM - 6 PM</span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-column footer-newsletter">
                            <h4 className="footer-title">Newsletter</h4>
                            <p className="newsletter-text">
                                Subscribe to get updates on new arrivals and exclusive offers.
                            </p>
                            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-btn">
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p className="copyright">
                        © {currentYear} Komtech Gadgets. All rights reserved.
                    </p>
                    <div className="footer-badges">
                        <span className="badge-item">🔒 Secure Payment</span>
                        <span className="badge-item">✓ Authentic Products</span>
                        <span className="badge-item">🚚 Fast Delivery</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
