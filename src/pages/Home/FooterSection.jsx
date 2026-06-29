import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FooterSection = () => {
  const footerRef = useScrollAnimation();

  const navLinks = ['About Me', 'Contact', 'Portfolio', 'Privacy Policy'];

  const socialIcons = [
    { src: '/images/img_vector_gray_900.svg', alt: 'Behance', width: 18, height: 12 },
    { src: '/images/img_vector_gray_900_16x20.svg', alt: 'Twitter', width: 20, height: 16 },
    { src: '/images/img_vector_gray_900_18x18.svg', alt: 'LinkedIn', width: 18, height: 18 },
    { src: '/images/img_vector_gray_900_14x20.svg', alt: 'Zerply', width: 20, height: 14 },
    { src: '/images/img_vector_gray_900_22x22.svg', alt: 'Instagram', width: 22, height: 22 },
  ];

  return (
    <footer className="footer-section">
      <div ref={footerRef} className="footer-bg anim-fade-up">
        <div className="footer-layout">
          {/* Left: Decorative star/clock element */}
          <div className="footer-left-decor">
            <div className="footer-clock-ring">
              <div className="footer-clock-ticks">
                {Array.from({ length: 24 })?.map((_, i) => (
                  <span
                    key={i}
                    className="footer-tick"
                    style={{ transform: `rotate(${i * 15}deg)` }}
                  />
                ))}
              </div>
              <div className="footer-star-center">
                <svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#fe481c" />
                </svg>
              </div>
            </div>
            {/* Bottom partial ring */}
            <div className="footer-bottom-decor">
              <div className="footer-clock-ring footer-clock-ring--small">
                <div className="footer-clock-ticks">
                  {Array.from({ length: 16 })?.map((_, i) => (
                    <span
                      key={i}
                      className="footer-tick footer-tick--small"
                      style={{ transform: `rotate(${i * 22.5}deg)` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center: Nav links + social icons */}
          <div className="footer-center-col">
            <nav className="footer-nav-links">
              {navLinks?.map((link) => (
                <a key={link} href="#" className="footer-nav-link">
                  {link}
                </a>
              ))}
            </nav>
            <div className="footer-socials">
              {socialIcons?.map((icon, index) => (
                <a key={index} href="#" className="footer-social-circle">
                  <img
                    src={icon?.src}
                    alt={icon?.alt}
                    style={{ width: `${icon?.width}px`, height: `${icon?.height}px` }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Subscribe + copyright */}
          <div className="footer-right-col">
            <div className="footer-subscribe-block">
              <h3 className="footer-subscribe-heading">Subscribe</h3>
              <div className="footer-email-row">
                <input
                  type="email"
                  placeholder="Enter Email Address Here"
                  className="footer-email-input"
                />
                <button className="footer-email-btn" aria-label="Subscribe">
                  <img src="/images/img_edit.svg" alt="send" width="18" height="18" />
                </button>
              </div>
            </div>
            <p className="footer-copyright-text">
              © Copyright 2022&nbsp; All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;