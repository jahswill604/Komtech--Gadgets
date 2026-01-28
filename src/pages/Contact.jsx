import { Link } from 'react-router-dom';
import {
    MapPin,
    Clock,
    Phone,
    Mail,
    Send,
    MessageCircle,
    ChevronRight
} from 'lucide-react';
import './Contact.css';

import { Link } from 'react-router-dom';
import {
    MapPin,
    Clock,
    Phone,
    Mail,
    Send,
    MessageCircle,
    ChevronRight,
    Instagram,
    Facebook,
    Twitter,
    Linkedin
} from 'lucide-react';
import './Contact.css';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Get in Touch</h1>
                        <p>We're here to help you finding the best gadgets for your needs.</p>
                    </div>
                </div>
            </div>

            <div className="container contact-container">
                <div className="contact-grid">
                    {/* Contact Info Column */}
                    <div className="contact-info-col">
                        <div className="section-header-left">
                            <span className="badge badge-primary">Contact Us</span>
                            <h2>Let's Start a Conversation</h2>
                            <p className="section-desc">
                                Have questions about our products, support services, or just want to say hello?
                                We'd love to hear from you.
                            </p>
                        </div>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="card-icon-wrapper">
                                    <MapPin size={24} />
                                </div>
                                <div className="card-details">
                                    <h3>Visit Our Store</h3>
                                    <p>128, Old Aba Road, By 1st Artillery<br />Port Harcourt, Rivers State, Nigeria</p>
                                </div>
                            </div>

                            <a href="tel:+2347034088743" className="contact-card clickable">
                                <div className="card-icon-wrapper">
                                    <Phone size={24} />
                                </div>
                                <div className="card-details">
                                    <h3>Call Us</h3>
                                    <p className="highlight">0703 408 8743</p>
                                    <span className="sub-text">Mon - Sat, 9am - 6pm</span>
                                </div>
                                <ChevronRight size={20} className="arrow-icon" />
                            </a>

                            <a href="mailto:info@komtechgadgets.com" className="contact-card clickable">
                                <div className="card-icon-wrapper">
                                    <Mail size={24} />
                                </div>
                                <div className="card-details">
                                    <h3>Email Support</h3>
                                    <p className="highlight">info@komtechgadgets.com</p>
                                    <span className="sub-text">24/7 Online Support</span>
                                </div>
                                <ChevronRight size={20} className="arrow-icon" />
                            </a>

                            <a href="https://wa.me/2347034088743" target="_blank" rel="noopener noreferrer" className="contact-card clickable whatsapp-card">
                                <div className="card-icon-wrapper">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="card-details">
                                    <h3>Chat on WhatsApp</h3>
                                    <p className="highlight">Chat with an Agent</p>
                                    <span className="sub-text">Instant Response</span>
                                </div>
                                <ChevronRight size={20} className="arrow-icon" />
                            </a>
                        </div>

                        <div className="social-connect">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#" className="social-btn"><Instagram size={20} /></a>
                                <a href="#" className="social-btn"><Facebook size={20} /></a>
                                <a href="#" className="social-btn"><Twitter size={20} /></a>
                                <a href="#" className="social-btn"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="contact-form-col">
                        <div className="form-card">
                            <h3>Send a Message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" required placeholder="John Doe" className="input" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" required placeholder="0803..." className="input" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" className="input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Inquiry about..." className="input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required placeholder="How can we help you today?" className="input textarea"></textarea>
                                </div>
                                <button type="submit" className="btn btn-cta btn-lg btn-block">
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section section">
                    <div className="section-header">
                        <h2>Locate Us</h2>
                        <p className="section-subtitle">Visit our physical store to experience our gadgets firsthand.</p>
                    </div>
                    <div className="map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6!2d7.02!3d4.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDknMTIuMCJOIDfCsDAxJzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Komtech Gadgets Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
