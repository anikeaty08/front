import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Reveal } from '../components/Reveal';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const templates = [
  { name: "Folio", type: "Portfolio", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" },
  { name: "Atlas", type: "Agency", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" },
  { name: "Nexus", type: "SaaS", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { name: "Canvas", type: "Blog", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80" },
  { name: "Lumina", type: "E-commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { name: "Vertex", type: "Startup", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" }
];

export default function Templates() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <Reveal 
            text="Start with a Template" 
            as="h1" 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4" 
          />
          <Reveal delay={200}>
            <p className="text-xl text-framer-muted max-w-2xl mt-4">
              Hundreds of beautifully crafted templates by top designers to kickstart your next project.
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {["All", "Portfolio", "Agency", "SaaS", "Blog"].map((cat, i) => (
              <button key={i} className={cn(
                "px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors border",
                i === 0 ? "bg-white text-black border-transparent" : "bg-white/5 text-white border-white/10 hover:bg-white/10"
              )}>
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl, idx) => (
          <Reveal key={idx} delay={100 + idx * 50}>
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-framer-panel border border-white/[0.06] mb-4">
                <img 
                  src={tpl.image} 
                  alt={tpl.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <h3 className="text-white font-semibold text-lg">{tpl.name}</h3>
                  <p className="text-framer-muted text-sm">{tpl.type}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-white"></iconify-icon>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}