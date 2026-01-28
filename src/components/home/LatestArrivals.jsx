import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import { getNewArrivals } from '../../data/products';
import './LatestArrivals.css';

function LatestArrivals() {
    const newProducts = getNewArrivals().slice(0, 4);

    return (
        <section className="latest-arrivals section">
            <div className="container">
                <div className="section-header-row">
                    <div className="section-header-left">
                        <div className="new-badge">
                            <Sparkles size={16} />
                            Just Arrived
                        </div>
                        <h2 className="section-title">Latest Arrivals</h2>
                        <p className="section-subtitle">
                            Check out the newest gadgets in our store
                        </p>
                    </div>
                    <Link to="/products?sort=newest" className="view-all-link">
                        View All New
                        <ChevronRight size={20} />
                    </Link>
                </div>

                <div className="products-grid">
                    {newProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestArrivals;
