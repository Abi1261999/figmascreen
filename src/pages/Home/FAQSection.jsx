import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const mainFAQ = {
    question: 'What is average cost of the project?',
    answer: 'From my experience, I saw individuals perpetually wish to induce an internet site for their work or one',
    additionalInfo: 'From my experience, I saw individuals perpetually wish to induce an internet site for their work or one'
  };

  const sideFAQs = [
    'How can i work with you?',
    'What kind of work you completed recently',
    'Have You done any kind of national work',
    'Hey i am nick nice yo meet you',
    'perpetually wish to induce an intern'
  ];

  return (
    <section className="faq-section">
      <div className="container-narrow">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-divider" />

        {/* FAQ Content */}
        <div className="faq-content">
          {/* Main FAQ */}
          <div className="faq-main">
            <div className="faq-main-header">
              <h3 className="faq-main-question">{mainFAQ?.question}</h3>
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === 0 ? -1 : 0)}
                className="faq-toggle-btn"
                aria-expanded={expandedFAQ === 0}
              >
                <img
                  src="/images/img_vector_white_a700_14x14.svg"
                  alt="Toggle answer"
                  className={expandedFAQ === 0 ? 'rotated' : ''}
                />
              </button>
            </div>

            {expandedFAQ === 0 && (
              <div className="faq-answer">
                <p>{mainFAQ?.answer}</p>
                <p>{mainFAQ?.additionalInfo}</p>
              </div>
            )}
          </div>

          {/* Side FAQs */}
          <div className="faq-side">
            {sideFAQs?.map((faq, index) => (
              <div key={index} className="faq-side-item">
                <span>{faq}</span>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index + 1 ? -1 : index + 1)}
                  className="faq-side-toggle"
                  aria-expanded={expandedFAQ === index + 1}
                >
                  <img
                    src="/images/img_vector_deep_orange_600_12x12.svg"
                    alt="Toggle answer"
                    className={expandedFAQ === index + 1 ? 'rotated' : ''}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;