import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Series",
    subtitle: "Urban Isolation",
    description: "A photographic study of solitude within the dense fabric of the modern metropolis. Capturing moments of silence amidst the noise.",
    img1: "https://cdn.midjourney.com/4a2fba13-1f73-4826-a8e4-614f757c5cbf/0_1.png",
    img2: "https://cdn.midjourney.com/dbe40a1a-ded3-4843-ba59-cf3357ed870b/0_0.png"
  },
  {
    title: "Portrait",
    subtitle: "Faces of Kyoto",
    description: "Intimate portraits captured on medium format film, exploring tradition and modernity in Japan's ancient capital.",
    img1: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=2670&auto=format&fit=crop",
    img2: "https://cdn.midjourney.com/deedb816-1e56-4b14-984f-328fb04010c1/0_0.png"
  },
  {
    title: "Light",
    subtitle: "Prism Studies",
    description: "Experimental abstract photography using refracted light and glass to create ethereal, painterly compositions.",
    img1: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
    img2: "https://images.unsplash.com/photo-1497290756760-23ac55edf36f?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Wild",
    subtitle: "Nordic Silence",
    description: "Minimalist landscapes from the Arctic Circle. A journey through ice, fog, and the absence of color.",
    img1: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop",
    img2: "https://cdn.midjourney.com/fca07dc0-250c-434d-b91c-9f99e50b62db/0_0.png"
  }
];

export default function Exploration() {
  const [currentIndex, setCurrentIndex] = useState(1); // Starting at 1 to match source "02" init state visually
  const totalSlides = projects.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const project = projects[currentIndex];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black/10">
      {/* Left: Gallery */}
      <div className="md:p-12 overflow-hidden group border-black/10 border-r pt-6 pr-6 pb-6 pl-6 relative">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="bg-zinc-200 w-full h-64 md:h-80 relative overflow-hidden">
            <img 
              src={project.img1} 
              key={project.img1}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" 
              alt={project.title}
            />
          </div>
          <div className="w-full h-64 md:h-80 relative overflow-hidden translate-y-8 bg-zinc-200">
            <img 
              src={project.img2} 
              key={project.img2}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700 delay-75" 
              alt={project.title}
            />
          </div>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="md:p-12 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
        <h2 className="text-7xl md:text-9xl font-semibold tracking-tighter mb-4 text-zinc-900">{project.title}</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-600">{project.subtitle}</h3>
        <p className="leading-relaxed md:text-base text-sm text-zinc-500 max-w-md mb-10">{project.description}</p>

        <div className="flex items-center justify-between mt-auto pt-8 border-t border-black/10">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold font-mono">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-base align-top ml-1 text-black/30">/ <span>{String(totalSlides).padStart(2, '0')}</span></span>
            </span>
            <div className="flex gap-2 ml-4 gap-x-2 gap-y-2">
              <button onClick={prevSlide} className="flex transition hover:bg-black hover:text-white w-8 h-8 border-black/20 border rounded-full items-center justify-center text-black">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={nextSlide} className="flex transition hover:bg-black hover:text-white w-8 h-8 border-black/20 border rounded-full items-center justify-center text-black">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <a href="#" className="px-6 py-3 border text-sm font-medium transition-colors flex items-center gap-2 border-black/20 hover:bg-black hover:text-white">
            All Projects
            <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}