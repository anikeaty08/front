import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import GridOverlay from '../components/layout/GridOverlay';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import SystemCards from '../components/sections/SystemCards';
import Details from '../components/sections/Details';
import Metrics from '../components/sections/Metrics';
import Topology from '../components/sections/Topology';
import Pricing from '../components/sections/Pricing';
import Logs from '../components/sections/Logs';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
  useEffect(() => {
    // Intro Animations
    gsap.fromTo(".gsap-fade", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(".gsap-scale", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2 });
    gsap.fromTo(".gsap-card", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );

    // Scroll Animations
    gsap.utils.toArray('.gsap-fade-right').forEach(el => {
      gsap.fromTo(el, 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 80%" } }
      );
    });

    gsap.utils.toArray('.gsap-fade-left').forEach(el => {
      gsap.fromTo(el, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 80%" } }
      );
    });

    gsap.fromTo('.gsap-list-item',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: ".gsap-list-item", start: "top 85%" } }
    );

    gsap.fromTo('.gsap-fade-up',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".gsap-fade-up", start: "top 85%" } }
    );

    gsap.fromTo('.gsap-carousel-item',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".gsap-carousel-item", start: "top 85%" } }
    );

    // Cleanup function for ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <GridOverlay />
      <Navbar />
      <Hero />
      <SystemCards />
      <Details />
      <Metrics />
      <Topology />
      <Pricing />
      <Logs />
      <Footer />
    </>
  );
}