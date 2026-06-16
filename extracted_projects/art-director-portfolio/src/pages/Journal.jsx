import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data';

export default function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto mb-24">
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8">
          Journal.
        </h1>
        <p className="text-xl md:text-2xl text-[#737373] font-light leading-relaxed max-w-2xl">
          A collection of thoughts on design, technology, and the intersection of physical and digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {articles.map((article) => (
          <Link key={article.id} to={`/journal/${article.id}`} className="group block">
            <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[16/10] bg-white border border-black/5">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl">
                   <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
                 </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white border border-black/5 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#737373]">
                {article.tag}
              </span>
              <span className="text-xs text-[#737373] font-medium">{article.date}</span>
            </div>
            <h3 className="text-2xl font-medium tracking-tight leading-tight group-hover:text-[#737373] transition-colors">
              {article.title}
            </h3>
            <p className="mt-4 text-[#737373] line-clamp-2 font-light leading-relaxed">
              Exploring the boundaries of modern aesthetics and how we perceive digital interfaces in an increasingly complex world.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}