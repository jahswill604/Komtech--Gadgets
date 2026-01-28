import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What Our Customers Say</h2>
                    <p className="section-subtitle">
                        Real reviews from real customers in Port Harcourt
                    </p>
                </div>

                {/* Rating Summary */}
                <div className="rating-summary">
                    <div className="rating-big">
                        <span className="rating-value">4.1</span>
                        <div className="rating-stars-big">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={24}
                                    fill={i < 4 ? '#F59E0B' : 'none'}
                                    color="#F59E0B"
                                />
                            ))}
                        </div>
                        <span className="rating-count-text">Based on 14 reviews</span>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="testimonials-carousel">
                    <button className="carousel-btn prev" onClick={prevTestimonial}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonials-track">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                    opacity: index === currentIndex ? 1 : 0
                                }}
                            >
                                <div className="testimonial-quote">
                                    <Quote size={32} />
                                </div>
                                <p className="testimonial-text">{testimonial.review}</p>
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < testimonial.rating ? '#F59E0B' : 'none'}
                                            color={i < testimonial.rating ? '#F59E0B' : '#D1D5DB'}
                                        />
                                    ))}
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.avatar}</div>
                                    <div className="author-info">
                                        <span className="author-name">{testimonial.name}</span>
                                        <span className="author-location">{testimonial.location}</span>
                                    </div>
                                </div>
                                <span className="testimonial-product">Purchased: {testimonial.product}</span>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn next" onClick={nextTestimonial}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots */}
                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
