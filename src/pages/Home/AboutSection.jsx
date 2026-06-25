import React from 'react';
import Button from '../../components/ui/Button';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container-narrow">
        <div className="about-inner">
          {/* Left - Badge */}
          <div>
            <span className="about-badge">Who Am I?</span>
          </div>

          {/* Center - Content */}
          <div className="about-center">
            <h2 className="about-title">
              From my experience, I saw<br />
              individuals perpetually<br />
              wish to induce an internet<br />
              site for their work or one<br />
              always be great
            </h2>

            <Button
              text="More About Me"
              variant="outline"
              border_border="1px solid border"
              fill_background_color="transparent"
              text_color="#000000"
              text_font_size="16px"
              onClick={() => {}}
            />
          </div>

          {/* Right - Info */}
          <div className="about-right">
            <p className="about-info">
              ZXC Studio<br />
              Washington, NYC
            </p>
            <p className="about-info">
              From my experience, I saw individuals perpetually wish to induce an internet site for their work or one
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;