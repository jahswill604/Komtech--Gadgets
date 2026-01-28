import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice } from '../../data/products';
import './ProductCard.css';

function ProductCard({ product }) {
    const { addToCart, isInCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                    />
                </Link>

                {/* Badges */}
                <div className="product-badges">
                    {product.isNew && <span className="badge badge-new">New</span>}
                    {discount > 0 && <span className="badge badge-sale">-{discount}%</span>}
                </div>

                {/* Quick Actions */}
                <div className="product-actions">
                    <button
                        className={`action-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product);
                        }}
                        title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                        <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <Link to={`/product/${product.id}`} className="action-btn" title="Quick view">
                        <Eye size={18} />
                    </Link>
                </div>
            </div>

            <div className="product-info">
                <span className="product-brand">{product.brand}</span>
                <Link to={`/product/${product.id}`} className="product-name">
                    {product.name}
                </Link>

                {/* Rating */}
                <div className="product-rating">
                    <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                fill={i < Math.floor(product.rating) ? '#F59E0B' : 'none'}
                                color={i < Math.floor(product.rating) ? '#F59E0B' : '#D1D5DB'}
                            />
                        ))}
                    </div>
                    <span className="rating-count">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="product-price">
                    <span className="price-current">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                        <span className="price-original">{formatPrice(product.originalPrice)}</span>
                    )}
                </div>

                {/* Stock Status */}
                <div className="product-stock">
                    {product.stock > 10 ? (
                        <span className="stock-in">In Stock</span>
                    ) : product.stock > 0 ? (
                        <span className="stock-low">Only {product.stock} left</span>
                    ) : (
                        <span className="stock-out">Out of Stock</span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    className={`add-to-cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                >
                    <ShoppingCart size={18} />
                    {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
