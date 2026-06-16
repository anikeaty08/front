import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';
import ShopCard from '../components/ui/ShopCard';

const products = [
  {
    id: 1,
    title: 'Fracture',
    type: 'Archival Pigment Print',
    price: '$850',
    edition: 'Limited Edition of 50',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80'
  },
  {
    id: 2,
    title: 'The Geometry of Silence',
    type: 'Exhibition Catalog',
    price: '$65',
    edition: 'Hardcover, 240 pages',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Structure',
    type: 'Silkscreen on Cotton Paper',
    price: '$1,200',
    edition: 'Artist Proof 3/5',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80'
  },
  {
    id: 4,
    title: 'Form & Void',
    type: 'Essay Collection',
    price: '$45',
    edition: 'Softcover, 120 pages',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80'
  }
];

const Shop = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (product) => {
    setToastMessage(`${product.title} added to collection`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="w-full relative pt-32 pb-40 px-6 max-w-6xl mx-auto min-h-screen z-10">
      <div 
        ref={headerRef}
        className={clsx(
          "mb-24 text-center transition-all duration-1000",
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6 tracking-tight">Editions</h1>
        <p className="text-white/60 text-[11px] font-medium tracking-[0.3em] uppercase">Prints & Publications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {products.map((product, index) => (
          <ShopCard 
            key={product.id} 
            product={product} 
            delay={index * 150} 
            onAdd={handleAddToCart}
          />
        ))}
      </div>

      {/* Toast Notification */}
      <div 
        className={clsx(
          "fixed bottom-8 right-8 z-50 bg-[#1e1b4b]/95 backdrop-blur-md border border-[#12c2e9]/30 text-white px-6 py-4 shadow-2xl flex items-center gap-4 transition-all duration-500",
          toastMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <iconify-icon icon="solar:check-circle-linear" class="text-[#12c2e9] text-xl"></iconify-icon>
        <span className="font-serif text-sm tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
};

export default Shop;