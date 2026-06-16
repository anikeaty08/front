import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import LogicSection from './components/LogicSection';
import FrictionSection from './components/FrictionSection';
import Footer from './components/Footer';

function App() {
  // Setup global intersection observer for scroll reveals
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-item');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <ContentSection />
      <LogicSection />
      <FrictionSection />
      <Footer />
    </>
  );
}

export default App;