import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function createPixels(containerId) {
      const container = document.getElementById(containerId);
      const pixelCount = 30;
      const gap = 15;
      for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        const size = 4;
        pixel.style.width = `${size}px`;
        pixel.style.height = `${size}px`;
        const x = Math.floor(Math.random() * (container.offsetWidth / gap)) * gap;
        const y = Math.floor(Math.random() * (container.offsetHeight / gap)) * gap;
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        const delay = Math.random() * 0.3;
        pixel.style.transitionDelay = `${delay}s`;
        pixel.style.backgroundColor = `rgba(120, 120, 120, 0.2)`;
        container.appendChild(pixel);
      }
    }
    createPixels('pixel-container-1');
    createPixels('pixel-container-2');
    createPixels('pixel-container-3');
    
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let positions = ['prev', 'active', 'next', 'hidden-card'];
    let currentIndex = 1;
    
    function updateCards() {
      cards.forEach((card, index) => {
        card.className = 'card card-container rounded-xl overflow-hidden';
        let position = (index - currentIndex + positions.length) % positions.length;
        card.classList.add(positions[position]);
      });
    }
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCards();
    });
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCards();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-sm w-full">

<div className="relative h-[400px]">
<div className="relative w-full h-full" id="rolodex">

<div className="card active card-container rounded-xl overflow-hidden">
<div className="absolute inset-0 overflow-hidden rounded-xl" id="pixel-container-1"></div>
<div className="bg-neutral-900 rounded-xl overflow-hidden relative z-10 h-full border border-neutral-800">
<div className="px-6 pt-6 pb-4 border-b border-neutral-800">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<h2 className="text-neutral-200 font-medium text-sm">Alex Morgan</h2>
</div>
<span className="text-xs text-neutral-400">UX/UI Designer</span>
</div>
</div>
<div className="px-6 py-8">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-4xl font-light text-neutral-200">Portfolio</span>
</div>
<p className="text-neutral-400 text-sm mt-1">Interface Design</p>
</div>
<div className="text-emerald-500 float">
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
<div className="px-6 py-4 bg-neutral-800/50 grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Projects</p>
<p className="text-neutral-300 font-medium mt-1">89+</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Clients</p>
<p className="text-neutral-300 font-medium mt-1">42</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Experience</p>
<p className="text-neutral-300 font-medium mt-1">7 yrs</p>
</div>
</div>
</div>
</div>

<div className="card next card-container rounded-xl overflow-hidden">
<div className="absolute inset-0 overflow-hidden rounded-xl" id="pixel-container-2"></div>
<div className="bg-neutral-900 rounded-xl overflow-hidden relative z-10 h-full border border-neutral-800">
<div className="px-6 pt-6 pb-4 border-b border-neutral-800">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<h2 className="text-neutral-200 font-medium text-sm">Jamie Chen</h2>
</div>
<span className="text-xs text-neutral-400">Motion Designer</span>
</div>
</div>
<div className="px-6 py-8">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-4xl font-light text-neutral-200">Portfolio</span>
</div>
<p className="text-neutral-400 text-sm mt-1">Motion Graphics</p>
</div>
<div className="text-blue-500 float">
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
<div className="px-6 py-4 bg-neutral-800/50 grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Projects</p>
<p className="text-neutral-300 font-medium mt-1">63</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Clients</p>
<p className="text-neutral-300 font-medium mt-1">29</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Experience</p>
<p className="text-neutral-300 font-medium mt-1">5 yrs</p>
</div>
</div>
</div>
</div>

<div className="card hidden-card card-container rounded-xl overflow-hidden">
<div className="absolute inset-0 overflow-hidden rounded-xl" id="pixel-container-3"></div>
<div className="bg-neutral-900 rounded-xl overflow-hidden relative z-10 h-full border border-neutral-800">
<div className="px-6 pt-6 pb-4 border-b border-neutral-800">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<h2 className="text-neutral-200 font-medium text-sm">Taylor Reed</h2>
</div>
<span className="text-xs text-neutral-400">3D Artist</span>
</div>
</div>
<div className="px-6 py-8">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-4xl font-light text-neutral-200">Portfolio</span>
</div>
<p className="text-neutral-400 text-sm mt-1">3D Visualization</p>
</div>
<div className="text-purple-500 float">
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
<div className="px-6 py-4 bg-neutral-800/50 grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Projects</p>
<p className="text-neutral-300 font-medium mt-1">47</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Clients</p>
<p className="text-neutral-300 font-medium mt-1">21</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-neutral-500 uppercase tracking-wide">Experience</p>
<p className="text-neutral-300 font-medium mt-1">4 yrs</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-6 space-x-4">
<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" id="prev">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" id="next">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>


    </>
  );
}
