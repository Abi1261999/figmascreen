import React from 'react';
import Button from '../../components/ui/Button';


const StatisticsSection = () => {
  const projectStats = [
    { label: 'Mobile Application', count: '60', icon: '/images/img_vector_white_a700.svg' },
    { label: 'Branding Design', count: '100', icon: '/images/img_vector_white_a700.svg' },
    { label: 'Projects Completed', count: '48', icon: '/images/img_vector_white_a700.svg' }
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-inner">
          {/* Left Stats - +100 */}
          <div className="stats-left">
            <h3 className="stats-number">+100</h3>
            <p className="stats-label">Client Works Developed In<br />World-Wide</p>
          </div>

          {/* Center Stats */}
          <div className="stats-center">
            {/* 457 Projects Completed */}
            <div className="stats-completed">
              <h3 className="stats-number">457</h3>
              <p className="stats-label">Projects<br />Completed</p>
            </div>

            {/* Project Statistics Card */}
            <div className="stats-card">
              {/* CTA Section */}
              <div className="stats-card-cta">
                <h4 className="stats-card-title">Project<br />Statistics 2022</h4>
                <Button
                  text="Case Studies"
                  fill_background_color="bg-secondary-background"
                  text_color="text-primary"
                  text_font_size="text-base"
                  border_border="none"
                  onClick={() => {}}
                />
              </div>

              {/* Stats List */}
              <div className="stats-list">
                {projectStats?.map((stat, index) => (
                  <div key={index}>
                    <div className="stats-list-item">
                      <div className="stats-list-item-label">
                        <span>{stat?.label}</span>
                        <img src={stat?.icon} alt="arrow" />
                      </div>
                      <span className="stats-list-item-count">{stat?.count}</span>
                    </div>
                    {index < projectStats?.length - 1 && (
                      <div className="stats-divider" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;