import React from 'react';
import Button from '../../components/ui/Button';
import Star from '../../components/ui/Star';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-inner">
          {/* Large UX Text Background */}
          <div className="hero-bg-text">
            <h2 aria-hidden="true">UX</h2>
          </div>

          {/* Main Content Container */}
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-left">
              <div className="hero-title-wrapper">
                <h1 className="hero-title">
                  Hi, I'm Tayler<br />
                  creative{' '}
                  <span className="hero-title-badge">
                    Designer
                    <span className="hero-badge-label">branding</span>
                  </span>
                  <br />
                  Based In Italy
                </h1>

                {/* Star Badge */}
                <div className="hero-star-badge">
                  <div className="hero-star-inner">
                    <Star fill_background_color="bg-background-blue-dark" />
                    <div className="hero-star-dot" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="hero-description">
                From my experience, I saw individuals perpetually wish to induce an internet site for their work or one
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <Button
                  text="Hire me"
                  onClick={() => {}}
                  fill_background_color="bg-background-blue-dark"
                  text_color="text-white"
                  text_font_size="text-base"
                  border_border="border-none"
                />

                <button className="hero-projects-btn">
                  <span>Projects</span>
                  <img src="/images/img_vector.svg" alt="" />
                </button>
              </div>

              {/* Star Icon with Background */}
              <div
                className="hero-star-icon"
                style={{ backgroundImage: 'url(/images/img_group_15.svg)' }}
              >
                <div className="star-inner">
                  <Star fill_background_color="bg-background-blue-medium" />
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="hero-right">
              <img
                src="/images/img_handsome_isolat.png"
                alt="Tayler - Creative Designer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;