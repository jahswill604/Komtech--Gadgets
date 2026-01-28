import { Shield, Truck, Headphones, CreditCard } from 'lucide-react';
import './WhyChooseUs.css';

function WhyChooseUs() {
    const features = [
        {
            icon: Shield,
            title: 'Authentic Products Only',
            description: 'We sell only 100% genuine products with manufacturer warranty. No fakes, no compromises.',
            color: 'primary'
        },
        {
            icon: CreditCard,
            title: 'Competitive Pricing',
            description: 'Best prices in Port Harcourt with regular discounts and deals you won\'t find elsewhere.',
            color: 'cta'
        },
        {
            icon: Truck,
            title: 'Fast Delivery Service',
            description: 'Same-day delivery within Port Harcourt. Your gadgets reach you quickly and safely.',
            color: 'accent'
        },
        {
            icon: Headphones,
            title: 'Expert Technical Support',
            description: 'Our team helps you choose the right device and provides after-sales support.',
            color: 'primary'
        }
    ];

    return (
        <section className="why-choose-us section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Komtech?</h2>
                    <p className="section-subtitle">
                        Port Harcourt's most trusted gadget store since day one
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`feature-card feature-${feature.color}`}
                            >
                                <div className="feature-icon-wrapper">
                                    <IconComponent size={28} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="stats-row">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1000+</span>
                        <span className="stat-label">Products Sold</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">4.1★</span>
                        <span className="stat-label">Customer Rating</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">WhatsApp Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
