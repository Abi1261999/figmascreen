import React from 'react';
import Star from '../../components/ui/Star';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Section Header */}
          <div className="testimonials-header">
            <div className="testimonials-header-left">
              <span className="testimonials-badge">Testimonials</span>
              <div className="testimonials-title-wrapper">
                <h2 className="testimonials-title">
                  What They Say<br />
                  About Me
                </h2>
                <div className="testimonials-title-dot" />
              </div>
            </div>

            <p className="testimonials-desc">
              From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One
            </p>
          </div>

          {/* Testimonials Content */}
          <div className="testimonials-content">
            {/* Left - Single Featured Image */}
            <div className="testimonials-images">
              <img src="/images/img_young_handsome.png" alt="Testimonial Featured" className="img-featured" />
            </div>

            {/* Center - Text Content */}
            <div className="testimonials-text-block">
              <div className="testimonials-author-row">
                <div className="testimonials-author-line" />
                <span className="testimonials-author-name-text">Robarto Alex</span>
              </div>

              <p className="testimonials-quote">
                From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One
              </p>
              <p className="testimonials-quote">
                From My Experience, I Saw Individuals Perpetually Wish To Induce An Internet Site For Their Work Or One
              </p>

              <div className="testimonials-rating">
                <img src="/images/img_group_43.svg" alt="Rating" />
              </div>
            </div>

            {/* Right - Small Photo + Circular Decorative */}
            <div className="testimonials-extras">
              <img src="/images/img_portrait_cool_m.png" alt="Additional Testimonial" className="portrait" />

              <div
                className="testimonials-star-icon"
                style={{ backgroundImage: 'url(/images/img_group_31.svg)' }}
              >
                <div className="star-inner">
                  <Star fill_background_color="bg-background-blue-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;