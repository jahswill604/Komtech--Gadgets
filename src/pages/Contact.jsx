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

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    };

    return (
        <div className="contact-page">
            {/* Header */}
            <div className="contact-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Get in touch with us today!</p>
                </div>
            </div>

            <div className="container contact-container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="contact-intro">
                            Have questions about our products or services? Need help choosing the right gadget?
                            Reach out to us through any of these channels.
                        </p>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="contact-card-content">
                                    <h3>Visit Our Store</h3>
                                    <p>128, Old Aba Road, By 1st Artillery<br />Port Harcourt, Rivers State, Nigeria</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <Phone size={24} />
                                </div>
                                <div className="contact-card-content">
                                    <h3>Call Us</h3>
                                    <a href="tel:+2347034088743">0703 408 8743</a>
                                    <p>Mon - Sat: 9 AM - 6 PM</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <Mail size={24} />
                                </div>
                                <div className="contact-card-content">
                                    <h3>Email Us</h3>
                                    <a href="mailto:info@komtechgadgets.com">info@komtechgadgets.com</a>
                                    <p>We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon whatsapp">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="contact-card-content">
                                    <h3>WhatsApp</h3>
                                    <a href="https://wa.me/2347034088743" target="_blank" rel="noopener noreferrer">
                                        Chat with us instantly
                                    </a>
                                    <p>Fastest response time</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="business-hours">
                            <h3><Clock size={20} /> Business Hours</h3>
                            <div className="hours-grid">
                                <div className="hours-row">
                                    <span className="day">Monday - Friday</span>
                                    <span className="time">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span className="day">Saturday</span>
                                    <span className="time">9:00 AM - 5:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span className="day">Sunday</span>
                                    <span className="time">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h2>Send Us a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required placeholder="Your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input type="tel" id="phone" name="phone" required placeholder="0803 XXX XXXX" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="your@email.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="What is this about?" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" name="message" rows="5" required placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-cta btn-lg">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="map-section">
                    <h2>Find Us</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6!2d7.02!3d4.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDknMTIuMCJOIDfCsDAxJzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '16px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Komtech Gadgets Location"
                        ></iframe>
                        <div className="map-overlay">
                            <div className="map-info">
                                <h3>Komtech Gadgets</h3>
                                <p>128, Old Aba Road, By 1st Artillery</p>
                                <a
                                    href="https://maps.google.com/?q=128+Old+Aba+Road+Port+Harcourt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Get Directions <ChevronRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
