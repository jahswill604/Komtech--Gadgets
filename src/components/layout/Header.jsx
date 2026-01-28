import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Search,
    ShoppingCart,
    Heart,
    User,
    Menu,
    X,
    Phone,
    MapPin
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { getCartCount } = useCart();
    const { getWishlistCount } = useWishlist();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <header className="header">
            {/* Top Bar */}
            <div className="header-top">
                <div className="container header-top-inner">
                    <div className="header-top-left">
                        <a href="tel:+2347034088743" className="header-contact">
                            <Phone size={14} />
                            <span>0703 408 8743</span>
                        </a>
                        <span className="header-divider">|</span>
                        <span className="header-location">
                            <MapPin size={14} />
                            <span className="hide-mobile">128, Old Aba Road, Port Harcourt</span>
                        </span>
                    </div>
                    <div className="header-top-right">
                        <span className="header-hours">Open until 6 PM</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="header-main">
                <div className="container header-main-inner">
                    {/* Logo */}
                    <Link to="/" className="header-logo">
                        <div className="logo-icon">
                            <span>K</span>
                        </div>
                        <div className="logo-text">
                            <span className="logo-name">Komtech</span>
                            <span className="logo-tagline">Gadgets</span>
                        </div>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <form className="header-search hide-mobile" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search for phones, tablets, accessories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="search-btn">
                            <Search size={20} />
                        </button>
                    </form>

                    {/* Desktop Navigation */}
                    <nav className="header-nav hide-mobile">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Header Actions */}
                    <div className="header-actions">
                        <Link to="/wishlist" className="header-icon-btn" title="Wishlist">
                            <Heart size={22} />
                            {getWishlistCount() > 0 && (
                                <span className="icon-badge">{getWishlistCount()}</span>
                            )}
                        </Link>
                        <Link to="/cart" className="header-icon-btn" title="Cart">
                            <ShoppingCart size={22} />
                            {getCartCount() > 0 && (
                                <span className="icon-badge">{getCartCount()}</span>
                            )}
                        </Link>
                        <button
                            className="header-icon-btn menu-toggle hide-desktop"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                <form className="header-search-mobile hide-desktop" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">
                        <Search size={18} />
                    </button>
                </form>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav-links">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <a href="tel:+2347034088743" className="mobile-call-btn">
                    <Phone size={20} />
                    Call Now: 0703 408 8743
                </a>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div className="mobile-nav-overlay" onClick={() => setIsMenuOpen(false)} />
            )}
        </header>
    );
}

export default Header;
