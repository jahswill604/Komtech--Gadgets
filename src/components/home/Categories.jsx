import { Link } from 'react-router-dom';
import {
    Smartphone,
    Tablet,
    Watch,
    Cable,
    Battery,
    Headphones,
    Gamepad2,
    ChevronRight
} from 'lucide-react';
import { categories } from '../../data/categories';
import './Categories.css';

const iconMap = {
    Smartphone,
    Tablet,
    Watch,
    Cable,
    Battery,
    Headphones,
    Gamepad2
};

function Categories() {
    return (
        <section className="categories section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Shop by Category</h2>
                    <p className="section-subtitle">
                        Browse our wide selection of gadgets and accessories
                    </p>
                </div>

                <div className="categories-grid">
                    {categories.map((category) => {
                        const IconComponent = iconMap[category.icon] || Smartphone;
                        return (
                            <Link
                                key={category.id}
                                to={`/products?category=${category.id}`}
                                className="category-card"
                            >
                                <div className="category-icon">
                                    <IconComponent size={32} />
                                </div>
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-desc">{category.description}</p>
                                <span className="category-link">
                                    Shop Now <ChevronRight size={16} />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Categories;
