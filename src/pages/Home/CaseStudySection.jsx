import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CaseStudySection = () => {
  const navigate  = useNavigate();
  const leftRef   = useScrollAnimation();
  const rightRef  = useScrollAnimation();

  return (
    <section className="case-study-section">
      <div className="container-narrow">
        <div className="case-study-inner">
          {/* Left Content */}
          <div ref={leftRef} className="case-study-left anim-fade-left">
            <span className="case-study-badge">Case Studies</span>

            <h2 className="case-study-title">
              Dotpixel Ageency<br />
              Website<br />
              &amp; Branding Design
            </h2>

            {/* Social Links */}
            <div className="case-study-socials">
              <img src="/images/img_vector_gray_900.svg" alt="Facebook" style={{ width: '18px', height: '12px' }} />
              <img src="/images/img_vector_gray_900_16x20.svg" alt="Twitter" style={{ width: '20px', height: '16px' }} />
              <img src="/images/img_vector_gray_900_18x18.svg" alt="Instagram" style={{ width: '18px', height: '18px' }} />
            </div>

            <Button
              text="View Case Study"
              onClick={() => navigate('/case-study/dotpixel')}
              fill_background_color="default"
              text_color="default"
              text_font_size="default"
              border_border="default"
            />
          </div>

          {/* Right Images Stack */}
          <div ref={rightRef} className="case-study-right anim-fade-right anim-delay-2">
            <div className="case-study-images">
              {/* Back Image */}
              <div className="case-study-img-back">
                <img src="/images/img_thought_catalog_418x700.png" alt="Case Study 1" />
                <img src="/images/img_library_of_cong.png" alt="Case Study Overlay 1" className="overlay" />
              </div>

              {/* Front Image */}
              <div className="case-study-img-front">
                <img src="/images/img_thought_catalog_396x716.png" alt="Case Study 2" />
                <img src="/images/img_sincerely_media_396x716.png" alt="Case Study Overlay 2" className="overlay" />
              </div>

              {/* Centered Overlay Image */}
              <div className="case-study-img-center">
                <img src="/images/img_thought_catalog_380x680.png" alt="Case Study Featured" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;