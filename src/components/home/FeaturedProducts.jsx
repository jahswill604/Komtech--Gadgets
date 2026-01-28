import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import './FeaturedProducts.css';

function FeaturedProducts() {
    const featuredProducts = getFeaturedProducts().slice(0, 8);

    return (
        <section className="featured-products section">
            <div className="container">
                <div className="section-header-row">
                    <div className="section-header-left">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">
                            Our best-selling gadgets loved by customers
                        </p>
                    </div>
                    <Link to="/products" className="view-all-link">
                        View All Products
                        <ChevronRight size={20} />
                    </Link>
                </div>

                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
