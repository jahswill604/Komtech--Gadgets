import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star,
    Heart,
    ShoppingCart,
    Truck,
    Shield,
    RotateCcw,
    Minus,
    Plus,
    Share2,
    ChevronRight,
    Check,
    MapPin
} from 'lucide-react';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/common/ProductCard';
import './ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState('delivery');

    const { addToCart, isInCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    if (!product) {
        return (
            <div className="product-not-found">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>The product you're looking for doesn't exist.</p>
                    <Link to="/products" className="btn btn-primary">Browse Products</Link>
                </div>
            </div>
        );
    }

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: `Check out ${product.name} at Komtech Gadgets`,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="product-detail-page">
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <Link to={`/products?category=${product.category.toLowerCase()}`}>{product.category}</Link>
                        <ChevronRight size={16} />
                        <span>{product.name}</span>
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="product-detail-grid">
                    {/* Product Images */}
                    <div className="product-gallery">
                        <div className="gallery-main">
                            <img
                                src={product.images?.[selectedImage] || product.image}
                                alt={product.name}
                                className="main-image"
                            />
                            {discount > 0 && (
                                <span className="discount-badge">-{discount}%</span>
                            )}
                        </div>
                        {product.images && product.images.length > 1 && (
                            <div className="gallery-thumbs">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`thumb ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <img src={img} alt={`${product.name} ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="product-info-detail">
                        <div className="product-meta">
                            <span className="product-brand-tag">{product.brand}</span>
                            {product.isNew && <span className="new-tag">New Arrival</span>}
                        </div>

                        <h1 className="product-title">{product.name}</h1>

                        {/* Rating */}
                        <div className="product-rating-detail">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(product.rating) ? '#F59E0B' : 'none'}
                                        color={i < Math.floor(product.rating) ? '#F59E0B' : '#D1D5DB'}
                                    />
                                ))}
                            </div>
                            <span className="rating-score">{product.rating}</span>
                            <span className="rating-reviews">({product.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="product-price-detail">
                            <span className="current-price">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                                <>
                                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                                    <span className="save-badge">Save {formatPrice(product.originalPrice - product.price)}</span>
                                </>
                            )}
                        </div>

                        {/* Stock Status */}
                        <div className="stock-status">
                            {product.stock > 10 ? (
                                <span className="in-stock"><Check size={16} /> In Stock</span>
                            ) : product.stock > 0 ? (
                                <span className="low-stock">Only {product.stock} left in stock</span>
                            ) : (
                                <span className="out-of-stock">Out of Stock</span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="product-description">{product.description}</p>

                        {/* Delivery Options */}
                        <div className="delivery-options">
                            <h4>Delivery Options</h4>
                            <div className="delivery-radio-group">
                                <label className={`delivery-option ${deliveryOption === 'delivery' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="delivery"
                                        checked={deliveryOption === 'delivery'}
                                        onChange={() => setDeliveryOption('delivery')}
                                    />
                                    <Truck size={20} />
                                    <div className="option-info">
                                        <span className="option-title">Home Delivery</span>
                                        <span className="option-desc">Get it delivered to your doorstep</span>
                                    </div>
                                </label>
                                <label className={`delivery-option ${deliveryOption === 'pickup' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="pickup"
                                        checked={deliveryOption === 'pickup'}
                                        onChange={() => setDeliveryOption('pickup')}
                                    />
                                    <MapPin size={20} />
                                    <div className="option-info">
                                        <span className="option-title">In-Store Pickup</span>
                                        <span className="option-desc">128, Old Aba Road, Port Harcourt</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="product-actions-detail">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                                    <Minus size={18} />
                                </button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}>
                                    <Plus size={18} />
                                </button>
                            </div>

                            <button
                                className={`btn-add-to-cart ${isInCart(product.id) ? 'in-cart' : ''}`}
                                onClick={handleAddToCart}
                                disabled={product.stock === 0}
                            >
                                <ShoppingCart size={20} />
                                {isInCart(product.id) ? 'Add More' : 'Add to Cart'}
                            </button>

                            <button
                                className={`btn-wishlist ${isInWishlist(product.id) ? 'active' : ''}`}
                                onClick={() => toggleWishlist(product)}
                            >
                                <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                            </button>

                            <button className="btn-share" onClick={handleShare}>
                                <Share2 size={20} />
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="trust-badges-detail">
                            <div className="trust-badge">
                                <Shield size={20} />
                                <span>Authentic Product</span>
                            </div>
                            <div className="trust-badge">
                                <Truck size={20} />
                                <span>Fast Delivery</span>
                            </div>
                            <div className="trust-badge">
                                <RotateCcw size={20} />
                                <span>Easy Returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                {product.specs && (
                    <div className="product-specs-section">
                        <h2>Specifications</h2>
                        <div className="specs-grid">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="spec-item">
                                    <span className="spec-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    <span className="spec-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="related-products-section">
                        <h2>Related Products</h2>
                        <div className="related-products-grid">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
