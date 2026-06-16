import React from 'react';
import Hero from '../components/sections/Hero';
import ProductGrid from '../components/sections/ProductGrid';
import Features from '../components/sections/Features';
import Philosophy from '../components/sections/Philosophy';
import Banner from '../components/sections/Banner';
import ModuleSchematics from '../components/sections/ModuleSchematics';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProductGrid />
      <Features />
      <Philosophy />
      <Banner />
      <ModuleSchematics />
      <Pricing />
      <FAQ />
    </div>
  );
}