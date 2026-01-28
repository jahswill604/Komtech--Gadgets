import { Link } from 'react-router-dom';
import {
    Smartphone,
    Wrench,
    Shield,
    Truck,
    CreditCard,
    Headphones,
    RotateCcw,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import './Services.css';

function Services() {
    const services = [
        {
            icon: Smartphone,
            title: 'Gadget Sales',
            description: 'Wide range of authentic smartphones, tablets, smartwatches, and accessories from top brands.',
            features: ['Latest iPhone & Samsung models', 'Budget-friendly options', 'All accessories available']
        },
        {
            icon: Wrench,
            title: 'Phone Repairs',
            description: 'Professional repair services for all major smartphone brands with genuine parts.',
            features: ['Screen replacement', 'Battery replacement', 'Software fixes']
        },
        {
            icon: Shield,
            title: 'Device Protection',
            description: 'Keep your gadgets safe with our range of protective accessories and screen guards.',
            features: ['Tempered glass', 'Phone cases', 'Screen protectors']
        },
        {
            icon: Truck,
            title: 'Delivery Service',
            description: 'Fast and reliable delivery throughout Port Harcourt and Rivers State.',
            features: ['Same-day delivery in PH', 'Careful handling', 'Tracking available']
        },
        {
            icon: CreditCard,
            title: 'Flexible Payments',
            description: 'Multiple payment options to make your purchase convenient.',
            features: ['Bank transfer', 'Card payments', 'Pay on delivery']
        },
        {
            icon: Headphones,
            title: 'Customer Support',
            description: '24/7 support via WhatsApp and phone for all your queries.',
            features: ['Quick response time', 'Product guidance', 'After-sales support']
        }
    ];

    const guarantees = [
        { icon: CheckCircle, text: '100% Authentic Products' },
        { icon: RotateCcw, text: '7-Day Return Policy' },
        { icon: Shield, text: 'Manufacturer Warranty' },
        { icon: Truck, text: 'Fast Delivery' }
    ];

    return (
        <div className="services-page">
            {/* Header */}
            <div className="services-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Everything you need for your gadget lifestyle</p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="services-main section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="service-card">
                                    <div className="service-icon">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>
                                                <CheckCircle size={14} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="guarantees-section">
                <div className="container">
                    <div className="guarantees-grid">
                        {guarantees.map((guarantee, index) => {
                            const IconComponent = guarantee.icon;
                            return (
                                <div key={index} className="guarantee-item">
                                    <IconComponent size={28} />
                                    <span>{guarantee.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Upgrade Your Gadget?</h2>
                        <p>Visit our store or browse our products online. We're here to help you find the perfect device.</p>
                        <div className="cta-buttons">
                            <Link to="/products" className="btn btn-cta btn-lg">
                                Shop Now <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
