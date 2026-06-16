import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import clsx from 'clsx';

const ShopCard = ({ product, delay, onAdd }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={clsx(
        "bg-noise p-6 lg:p-8 border border-gray-100 flex flex-col group transition-all duration-1000 shadow-xl hover:shadow-2xl hover:-translate-y-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 relative mb-8">
        <img 
          src={product.image} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-serif text-2xl text-gray-900 tracking-tight leading-snug group-hover:text-[#e0281c] transition-colors">
              {product.title}
            </h2>
            <span className="font-serif text-xl text-gray-900 ml-4">{product.price}</span>
          </div>
          <div className="text-[#12c2e9] text-[9px] font-semibold tracking-widest uppercase mb-4">
            {product.type}
          </div>
          <p className="text-gray-500 font-serif text-sm mb-8">
            {product.edition}
          </p>
        </div>
        
        <button 
          onClick={() => onAdd(product)}
          className="w-full border border-gray-900 text-gray-900 py-4 text-[10px] font-semibold tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 flex justify-center items-center gap-2 group/btn"
        >
          Acquire
          <iconify-icon 
            icon="solar:cart-large-minimalistic-linear" 
            class="text-lg group-hover/btn:scale-110 transition-transform"
          ></iconify-icon>
        </button>
      </div>
    </div>
  );
};

export default ShopCard;