import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import GridSection from './components/GridSection';
import Roadmap from './components/Roadmap';
import Collab from './components/Collab';
import IssueTracking from './components/IssueTracking';
import CyclesTriage from './components/CyclesTriage';
import Integrations from './components/Integrations';
import Foundations from './components/Foundations';
import Footer from './components/Footer';

function App() {
  // Global Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <GridSection />
      <Roadmap />
      <Collab />
      <IssueTracking />
      <CyclesTriage />
      <Integrations />
      <Foundations />
      <Footer />
    </>
  );
}

export default App;