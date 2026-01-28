import {
    Users,
    Target,
    Award,
    Heart,
    CheckCircle,
    Star
} from 'lucide-react';
import './About.css';

function About() {
    const values = [
        {
            icon: CheckCircle,
            title: 'Authenticity',
            description: 'We sell only 100% genuine products from authorized distributors.'
        },
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Your satisfaction is our top priority. We go above and beyond.'
        },
        {
            icon: Award,
            title: 'Quality',
            description: 'Premium products with manufacturer warranty on every item.'
        },
        {
            icon: Target,
            title: 'Innovation',
            description: 'We stay updated with the latest tech trends to serve you better.'
        }
    ];

    const brands = ['Apple', 'Samsung', 'Xiaomi', 'Tecno', 'Infinix', 'Oppo', 'Anker', 'Oraimo'];

    return (
        <div className="about-page">
            {/* Header */}
            <div className="about-header">
                <div className="container">
                    <h1>About Komtech Gadgets</h1>
                    <p>Port Harcourt's trusted destination for authentic gadgets</p>
                </div>
            </div>

            {/* Story Section */}
            <section className="about-story section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600"
                                alt="Komtech Gadgets Store"
                            />
                            <div className="story-badge">
                                <Star size={20} fill="#F59E0B" color="#F59E0B" />
                                <span>4.1 Rating</span>
                            </div>
                        </div>
                        <div className="story-content">
                            <h2>Our Story</h2>
                            <p>
                                Komtech Gadgets was founded with a simple mission: to bring authentic,
                                quality gadgets to the people of Port Harcourt at competitive prices.
                            </p>
                            <p>
                                Located at 128, Old Aba Road, By 1st Artillery, we've built a reputation
                                for being the most trusted gadget store in the city. Our customers know
                                that when they shop with us, they're getting genuine products backed by
                                manufacturer warranties.
                            </p>
                            <p>
                                What sets us apart? It's our commitment to customer satisfaction. From
                                helping you choose the right device to providing after-sales support,
                                we're with you every step of the way.
                            </p>
                            <div className="story-stats">
                                <div className="stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Happy Customers</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">1000+</span>
                                    <span className="stat-label">Products Sold</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">14</span>
                                    <span className="stat-label">5-Star Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-section section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide Port Harcourt and Rivers State with access to the latest,
                                authentic technology products at fair prices, backed by excellent
                                customer service and support.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Users size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become Nigeria's most trusted gadget retailer, known for authenticity,
                                competitive pricing, and exceptional customer experience in every interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-subtitle">What drives us every day</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="value-card">
                                    <div className="value-icon">
                                        <IconComponent size={28} />
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Brands */}
            <section className="brands-section section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Brands We Carry</h2>
                        <p className="section-subtitle">Trusted partnerships with global brands</p>
                    </div>
                    <div className="brands-list">
                        {brands.map((brand, index) => (
                            <div key={index} className="brand-item">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
