import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import StatisticsSection from './StatisticsSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import FAQSection from './FAQSection';
import CaseStudySection from './CaseStudySection';
import TestimonialsSection from './TestimonialsSection';
import FooterSection from './FooterSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tayler - Creative Designer Portfolio | 100+ Worldwide Projects | Italy</title>
        <meta
          name="description"
          content="Explore Tayler's creative design portfolio from Italy featuring 457+ completed projects across websites, branding, and apps. View case studies, client testimonials, and innovative designs serving 100+ worldwide clients."
        />
        <meta property="og:title" content="Tayler - Creative Designer Portfolio | 100+ Worldwide Projects | Italy" />
        <meta property="og:description" content="Explore Tayler's creative design portfolio from Italy featuring 457+ completed projects across websites, branding, and apps. View case studies, client testimonials, and innovative designs serving 100+ worldwide clients." />
      </Helmet>

      <div className="page-wrapper">
        <Header />
        <main>
          <HeroSection />
          <StatisticsSection />
          <AboutSection />
          <PortfolioSection />
          <FAQSection />
          <CaseStudySection />
          <TestimonialsSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default Home;