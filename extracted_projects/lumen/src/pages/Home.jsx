import React from 'react';
import Hero from '../components/Hero';
import Exploration from '../components/Exploration';
import CaseStudy from '../components/CaseStudy';
import Methodology from '../components/Methodology';
import Awards from '../components/Awards';
import Journal from '../components/Journal';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Exploration />
      <CaseStudy />
      <Methodology />
      <Awards />
      <Journal />
    </div>
  );
}