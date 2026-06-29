import Star from '../../components/ui/Star';
import React from 'react';
import Line from '../../components/ui/Line';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const PortfolioSection = () => {
  const headerRef = useScrollAnimation();
  const card1Ref  = useScrollAnimation();
  const card2Ref  = useScrollAnimation();
  const card3Ref  = useScrollAnimation();

  return (
    <section className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="portfolio-header anim-fade-up">
          <div className="portfolio-header-left">
            <span className="portfolio-badge">Make it Live</span>
            <div className="portfolio-categories">
              <span className="portfolio-category">Websites</span>
              <div className="portfolio-dot" />
              <span className="portfolio-category">Brandings</span>
              <div className="portfolio-dot" />
              <span className="portfolio-category">Appps</span>
            </div>
          </div>
          <span className="portfolio-number">01</span>
        </div>

        <span className="portfolio-page-num">01</span>

        {/* Portfolio Grid */}
        <div className="portfolio-grid-wrapper">
          <div className="portfolio-grid">
            {/* Card 1 */}
            <div ref={card1Ref} className="portfolio-card portfolio-card-1 anim-fade-up anim-delay-1">
              <img src="/images/img_sincerely_media.png" alt="Branding Website" className="cover" />
              <p className="portfolio-card-title">Branding Website</p>
            </div>

            {/* Card 2 - Center Featured */}
            <div ref={card2Ref} className="portfolio-card portfolio-card-2 anim-scale-in anim-delay-2">
              <div className="portfolio-card-2-bg">
                <div
                  className="portfolio-card-2-bg-overlay"
                  style={{ backgroundImage: 'url(/images/img_mask_group_blue_gray_100_404x547.png)' }}
                />
                <div className="portfolio-card-2-fg">
                  <img src="/images/img_mask_group_blue_gray_100.png" alt="Agency Branding" />
                </div>
              </div>

              <div className="portfolio-card-2-agency">Agency</div>
              <div className="portfolio-card-2-name">Branding Website</div>

              <button className="portfolio-projects-btn">
                <span>Projects</span>
                <img src="/images/img_vector_deep_orange_600_12x12.svg" alt="" />
              </button>
            </div>

            {/* Card 3 - Right Side with Icon */}
            <div ref={card3Ref} className="portfolio-card portfolio-card-3 anim-fade-up anim-delay-3">
              <div
                className="portfolio-card-3-icon"
                style={{ backgroundImage: 'url(/images/img_group_31.svg)' }}
              >
                <div className="star-inner" style={{ width: '64px', height: '64px' }}>
                  <Star fill_background_color="bg-background-blue-light" />
                </div>
              </div>

              <div className="portfolio-card-3-content">
                <p className="portfolio-card-3-agency">Agency</p>
                <p className="portfolio-card-3-mobile">Mobile</p>

                <button className="portfolio-projects-btn" style={{ margin: '0 auto' }}>
                  <span>Projects</span>
                  <img src="/images/img_vector_deep_orange_600_12x12.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Scroll Indicator Line */}
          <div className="portfolio-scroll-indicator">
            <div className="portfolio-scroll-track">
              <div className="portfolio-scroll-line" />
              <div className="portfolio-scroll-progress" />
            </div>
          </div>
        </div>

        {/* Bottom Pagination Indicators */}
        <div className="portfolio-pagination">
          <span>01</span>
          <span>01</span>
        </div>

        {/* Additional Image */}
        <div className="portfolio-extra-img">
          <img src="/images/img_thought_catalog.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;