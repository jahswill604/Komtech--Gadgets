import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { categories, brands, priceRanges, sortOptions } from '../data/categories';
import './Products.css';

function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');

    // Get filter values from URL
    const searchQuery = searchParams.get('search') || '';
    const categoryFilter = searchParams.get('category') || '';
    const brandFilter = searchParams.get('brand') || '';
    const priceFilter = searchParams.get('price') || '';
    const sortBy = searchParams.get('sort') || 'featured';

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        // Category filter
        if (categoryFilter) {
            result = result.filter(p =>
                p.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter ||
                p.category.toLowerCase() === categoryFilter
            );
        }

        // Brand filter
        if (brandFilter) {
            result = result.filter(p => p.brand.toLowerCase() === brandFilter);
        }

        // Price filter
        if (priceFilter) {
            const range = priceRanges.find(r => r.id === priceFilter);
            if (range) {
                result = result.filter(p => p.price >= range.min && p.price <= range.max);
            }
        }

        // Sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew));
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
                result.sort((a, b) => b.reviews - a.reviews);
                break;
            default:
                result = result.filter(p => p.isFeatured).concat(result.filter(p => !p.isFeatured));
        }

        return result;
    }, [searchQuery, categoryFilter, brandFilter, priceFilter, sortBy]);

    const updateFilter = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        setSearchParams(newParams);
    };

    const clearFilters = () => {
        setSearchParams({});
    };

    const activeFiltersCount = [categoryFilter, brandFilter, priceFilter, searchQuery].filter(Boolean).length;

    return (
        <div className="products-page">
            {/* Page Header */}
            <div className="products-header">
                <div className="container">
                    <h1 className="products-title">
                        {categoryFilter ? categories.find(c => c.id === categoryFilter)?.name || 'Products' : 'All Products'}
                    </h1>
                    <p className="products-count">{filteredProducts.length} products found</p>
                </div>
            </div>

            <div className="container products-container">
                {/* Filter Sidebar */}
                <aside className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
                    <div className="filter-header">
                        <h3>Filters</h3>
                        <button className="close-filters hide-desktop" onClick={() => setIsFilterOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    {activeFiltersCount > 0 && (
                        <button className="clear-filters" onClick={clearFilters}>
                            Clear All Filters ({activeFiltersCount})
                        </button>
                    )}

                    {/* Search */}
                    <div className="filter-section">
                        <h4 className="filter-title">Search</h4>
                        <div className="search-filter">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => updateFilter('search', e.target.value)}
                                className="filter-search-input"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="filter-section">
                        <h4 className="filter-title">Categories</h4>
                        <div className="filter-options">
                            {categories.map(cat => (
                                <label key={cat.id} className="filter-option">
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={categoryFilter === cat.id}
                                        onChange={() => updateFilter('category', categoryFilter === cat.id ? '' : cat.id)}
                                    />
                                    <span>{cat.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Brands */}
                    <div className="filter-section">
                        <h4 className="filter-title">Brands</h4>
                        <div className="filter-options">
                            {brands.map(brand => (
                                <label key={brand.id} className="filter-option">
                                    <input
                                        type="radio"
                                        name="brand"
                                        checked={brandFilter === brand.id}
                                        onChange={() => updateFilter('brand', brandFilter === brand.id ? '' : brand.id)}
                                    />
                                    <span>{brand.logo} {brand.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="filter-section">
                        <h4 className="filter-title">Price Range</h4>
                        <div className="filter-options">
                            {priceRanges.map(range => (
                                <label key={range.id} className="filter-option">
                                    <input
                                        type="radio"
                                        name="price"
                                        checked={priceFilter === range.id}
                                        onChange={() => updateFilter('price', priceFilter === range.id ? '' : range.id)}
                                    />
                                    <span>{range.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="products-main">
                    {/* Product Grid */}
                    <main className="products-main">
                        {/* Mobile Search & Header */}
                        <div className="mobile-product-header hide-desktop">
                            <div className="mobile-search-wrapper">
                                <Search size={18} />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => updateFilter('search', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Check active filters summary for mobile */}
                        {activeFiltersCount > 0 && (
                            <div className="mobile-active-filters hide-desktop">
                                <span>{activeFiltersCount} filters active</span>
                                <button onClick={clearFilters}>Clear</button>
                            </div>
                        )}

                        {/* Desktop Toolbar */}
                        <div className="products-toolbar hide-mobile">
                            <button
                                className="filter-toggle"
                                onClick={() => setIsFilterOpen(true)}
                            >
                                <Filter size={20} />
                                Filters
                                {activeFiltersCount > 0 && <span className="filter-count">{activeFiltersCount}</span>}
                            </button>

                            <div className="toolbar-right">
                                <div className="sort-dropdown">
                                    <label>Sort by:</label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => updateFilter('sort', e.target.value)}
                                    >
                                        {sortOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.label}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={16} />
                                </div>

                                <div className="view-toggle">
                                    <button
                                        className={viewMode === 'grid' ? 'active' : ''}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <Grid size={20} />
                                    </button>
                                    <button
                                        className={viewMode === 'list' ? 'active' : ''}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <List size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Floating Action Bar (Sticky Bottom) */}
                        <div className="mobile-action-bar hide-desktop">
                            <button
                                className="mobile-action-btn"
                                onClick={() => setIsFilterOpen(true)}
                            >
                                <Filter size={20} />
                                <span>Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
                            </button>
                            <div className="mobile-action-divider"></div>
                            <div className="mobile-sort-wrapper">
                                <select
                                    value={sortBy}
                                    onChange={(e) => updateFilter('sort', e.target.value)}
                                    className="mobile-sort-select"
                                >
                                    {sortOptions.map(opt => (
                                        <option key={opt.id} value={opt.id}>{opt.label}</option>
                                    ))}
                                </select>
                                <button className="mobile-action-btn sort-btn">
                                    <List size={20} />
                                    <span>Sort</span>
                                </button>
                            </div>
                        </div>

                        {/* Products */}
                        {filteredProducts.length > 0 ? (
                            <div className={`products-grid ${viewMode}`}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-products">
                                <p>No products found matching your criteria.</p>
                                <button className="btn btn-primary" onClick={clearFilters}>
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </main>
            </div>

            {/* Mobile Filter Overlay */}
            {isFilterOpen && (
                <div className="filter-overlay" onClick={() => setIsFilterOpen(false)} />
            )}
        </div>
    );
}

export default Products;
