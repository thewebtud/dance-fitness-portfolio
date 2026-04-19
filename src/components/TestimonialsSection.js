import { useState } from 'react';
import SectionHeader from './SectionHeader';

function TestimonialsSection({ testimonialContent, testimonials }) {
    const itemsPerSlide = 2;
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
    const [activeSlide, setActiveSlide] = useState(0);
    const visibleTestimonials = testimonials.slice(
        activeSlide * itemsPerSlide,
        activeSlide * itemsPerSlide + itemsPerSlide
    );

    const showPrevious = () => {
        setActiveSlide((currentSlide) =>
            currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
        );
    };

    const showNext = () => {
        setActiveSlide((currentSlide) =>
            currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
        );
    };

    return (
        <section className="content-section testimonial-section" id="reviews">
            <SectionHeader
                eyebrow={testimonialContent.eyebrow}
                title={testimonialContent.title}
            />
            <div className="testimonial-carousel" aria-label="Client testimonials carousel">
                <div className="testimonial-carousel-header">
                    <p className="testimonial-counter">
                        {String(activeSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                    </p>
                    <div className="testimonial-controls">
                        <button
                            className="testimonial-control-button"
                            type="button"
                            aria-label="Show previous testimonials"
                            onClick={showPrevious}
                        >
                            ←
                        </button>
                        <button
                            className="testimonial-control-button"
                            type="button"
                            aria-label="Show next testimonials"
                            onClick={showNext}
                        >
                            →
                        </button>
                    </div>
                </div>

                <div className="testimonial-card-list">
                    {visibleTestimonials.map((testimonial) => (
                        <blockquote className="testimonial-card testimonial-card-active" key={testimonial.author}>
                            <p>“{testimonial.quote}”</p>
                            <footer>{testimonial.author}</footer>
                        </blockquote>
                    ))}
                </div>

                <div className="testimonial-indicators" aria-label="Testimonial navigation dots">
                    {Array.from({ length: totalSlides }, (_, index) => (
                        <button
                            key={`testimonial-slide-${index + 1}`}
                            type="button"
                            className={`testimonial-indicator${index === activeSlide ? ' is-active' : ''}`}
                            aria-label={`Show testimonial slide ${index + 1}`}
                            aria-pressed={index === activeSlide}
                            onClick={() => setActiveSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;