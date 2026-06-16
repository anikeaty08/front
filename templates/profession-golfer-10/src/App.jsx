import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
<a className="tracking-tight text-xl font-normal pointer-events-auto" href="#">MR.</a>
<div className="hidden md:flex gap-8 pointer-events-auto text-sm uppercase tracking-widest font-normal opacity-80 hover:opacity-100 transition-opacity">
<a className="hover:text-[#E8ECE6] transition-colors" href="#about">About</a>
<a className="hover:text-[#E8ECE6] transition-colors" href="#stats">Stats</a>
<a className="hover:text-[#E8ECE6] transition-colors" href="#results">Results</a>
</div>
<button className="md:hidden pointer-events-auto">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<header className="relative w-full h-screen min-h-[80vh] flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">
<img alt="Mimi Rhodes Golf Swing" className="w-full h-full object-cover object-center opacity-70 hover:scale-105 transform transition-transform duration-[10s]" src="mimi-curtis.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>

<div className="relative z-10 text-white transition-opacity duration-1000">
<p className="text-sm md:text-base uppercase tracking-[0.2em] font-extralight text-neutral-300 mb-4 md:mb-6">LPGA Tour Professional</p>
<h1 className="font-['Playfair_Display',serif] text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight uppercase">
                Mimi <br/>
<span className="text-transparent" style={{WebkitTextStroke: '1px white'}}>Rhodes</span>
</h1>
</div>
</header>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-7">
<h2 className="font-['Playfair_Display',serif] font-normal text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-neutral-900">
                    Redefining the modern game with absolute <span className="italic text-[#7A8B71]">precision</span> and quiet power.
                </h2>
<div className="mt-12 flex gap-4 items-center group cursor-pointer w-max">
<span className="text-base uppercase tracking-widest font-normal text-neutral-900 group-hover:text-[#7A8B71] transition-colors">Read Full Biography</span>
<i className="w-5 h-5 text-neutral-900 group-hover:translate-x-2 group-hover:text-[#7A8B71] transition-all" data-lucide="arrow-right"></i>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-8">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden relative">
<img alt="Mimi celebrating on the green" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="Mimi-win.jpg"/>
</div>
<div className="grid grid-cols-2 gap-8 pt-4 border-t border-neutral-200">
<div>
<p className="text-sm uppercase tracking-widest text-neutral-400 mb-1">Turned Pro</p>
<p className="font-['Playfair_Display',serif] text-xl tracking-tight">2021</p>
</div>
<div>
<p className="text-sm uppercase tracking-widest text-neutral-400 mb-1">Hometown</p>
<p className="font-['Playfair_Display',serif] text-xl tracking-tight">Somerset, UK</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-24 md:py-40" id="stats">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
<h2 className="font-['Playfair_Display',serif] font-normal text-3xl md:text-5xl tracking-tight">Career<br/>Highlights</h2>
<p className="text-base font-extralight tracking-wide text-neutral-400 max-w-sm md:text-right">Metrics that define a trajectory of relentless improvement on the global stage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="flex flex-col border-l border-neutral-700 pl-6 hover:border-[#7A8B71] transition-colors duration-300">
<span className="font-['Playfair_Display',serif] font-normal text-6xl md:text-7xl tracking-tight">3</span>
<span className="text-sm uppercase tracking-widest text-neutral-400 mt-4">Professional Wins</span>
</div>

<div className="flex flex-col border-l border-neutral-700 pl-6 hover:border-[#7A8B71] transition-colors duration-300">
<span className="font-['Playfair_Display',serif] font-normal text-6xl md:text-7xl tracking-tight">14</span>
<span className="text-sm uppercase tracking-widest text-neutral-400 mt-4">Top 10 Finishes</span>
</div>

<div className="flex flex-col border-l border-neutral-700 pl-6 hover:border-[#7A8B71] transition-colors duration-300">
<div className="flex items-start">
<span className="text-2xl mt-2 mr-1 font-['Playfair_Display',serif] text-[#7A8B71] font-normal">$</span>
<span className="font-['Playfair_Display',serif] font-normal text-6xl md:text-7xl tracking-tight">1.2<span className="text-4xl">M</span></span>
</div>
<span className="text-sm uppercase tracking-widest text-neutral-400 mt-4">Career Earnings</span>
</div>

<div className="flex flex-col border-l border-neutral-700 pl-6 hover:border-[#7A8B71] transition-colors duration-300">
<span className="font-['Playfair_Display',serif] font-normal text-6xl md:text-7xl tracking-tight">42</span>
<span className="text-sm uppercase tracking-widest text-neutral-400 mt-4">World Ranking</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 max-w-[1400px] mx-auto px-6 md:px-12" id="results">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="lg:w-1/3">
<div className="sticky top-32">
<h2 className="font-['Playfair_Display',serif] font-normal text-4xl md:text-5xl tracking-tight mb-6">Recent<br/>Performances</h2>
<p className="text-base text-neutral-500 font-light mb-8 max-w-xs leading-relaxed">Tracking consistency and execution across the latest season events.</p>

<div className="relative w-max inline-block">
<select className="appearance-none bg-transparent border border-neutral-200 py-3 pl-4 pr-12 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer font-normal uppercase tracking-widest text-sm">
<option>2024 Season</option>
<option>2023 Season</option>
<option>Majors Only</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="lg:w-2/3 flex flex-col w-full">

<div className="hidden md:flex justify-between pb-4 border-b border-neutral-900 text-sm uppercase tracking-widest text-neutral-400 font-normal">
<div className="w-1/4">Date</div>
<div className="w-2/4">Tournament</div>
<div className="w-1/8 text-center">Pos</div>
<div className="w-1/8 text-right">Score</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-neutral-200 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></div>
<div className="w-full md:w-1/4 text-base font-light text-neutral-500 mb-2 md:mb-0 group-hover:text-neutral-900 transition-colors">Oct 12-15</div>
<div className="w-full md:w-2/4 font-['Playfair_Display',serif] text-xl md:text-2xl tracking-tight text-neutral-900 group-hover:pl-4 transition-all duration-300">Buick LPGA Shanghai</div>
<div className="flex justify-between md:contents mt-4 md:mt-0">
<div className="w-full md:w-1/8 font-normal text-base md:text-center text-[#7A8B71]">T4</div>
<div className="w-full md:w-1/8 font-['Playfair_Display',serif] text-lg md:text-right">-12</div>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-neutral-200 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></div>
<div className="w-full md:w-1/4 text-base font-light text-neutral-500 mb-2 md:mb-0 group-hover:text-neutral-900 transition-colors">Sep 29-Oct 1</div>
<div className="w-full md:w-2/4 font-['Playfair_Display',serif] text-xl md:text-2xl tracking-tight text-neutral-900 group-hover:pl-4 transition-all duration-300">Walmart NW Arkansas Championship</div>
<div className="flex justify-between md:contents mt-4 md:mt-0">
<div className="w-full md:w-1/8 font-normal text-base md:text-center text-neutral-900">T18</div>
<div className="w-full md:w-1/8 font-['Playfair_Display',serif] text-lg md:text-right">-8</div>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-neutral-200 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></div>
<div className="w-full md:w-1/4 text-base font-light text-neutral-500 mb-2 md:mb-0 group-hover:text-neutral-900 transition-colors">Aug 10-13</div>
<div className="w-full md:w-2/4 font-['Playfair_Display',serif] text-xl md:text-2xl tracking-tight text-neutral-900 group-hover:pl-4 transition-all duration-300">AIG Women's Open</div>
<div className="flex justify-between md:contents mt-4 md:mt-0">
<div className="w-full md:w-1/8 font-normal text-base md:text-center text-[#7A8B71]">2</div>
<div className="w-full md:w-1/8 font-['Playfair_Display',serif] text-lg md:text-right">-10</div>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-neutral-200 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></div>
<div className="w-full md:w-1/4 text-base font-light text-neutral-500 mb-2 md:mb-0 group-hover:text-neutral-900 transition-colors">Jul 27-30</div>
<div className="w-full md:w-2/4 font-['Playfair_Display',serif] text-xl md:text-2xl tracking-tight text-neutral-900 group-hover:pl-4 transition-all duration-300">Amundi Evian Championship</div>
<div className="flex justify-between md:contents mt-4 md:mt-0">
<div className="w-full md:w-1/8 font-normal text-base md:text-center text-neutral-900">T32</div>
<div className="w-full md:w-1/8 font-['Playfair_Display',serif] text-lg md:text-right">+1</div>
</div>
</div>
<button className="mt-12 w-max mx-auto md:mx-0 flex items-center gap-3 text-sm uppercase tracking-widest font-normal text-neutral-500 hover:text-neutral-900 transition-colors pb-1 border-b border-transparent hover:border-neutral-900">
                    Load More Events
                </button>
</div>
</div>
</section>

<footer className="bg-neutral-50 py-12 border-t border-neutral-200">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="tracking-tight text-xl font-normal text-neutral-900">MR.</div>
<div className="flex items-center gap-6 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="camera"></i>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="link"></i>
</a>
</div>
<p className="text-sm text-neutral-400 font-extralight">© 2024 Mimi Rhodes. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
