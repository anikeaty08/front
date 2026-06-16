import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Unbounded', 'sans-serif'],
},
colors: {
emerald: {
950: '#022c22', /* Deep Forest Green */
900: '#064e3b',
},
lime: {
400: '#a3e635', /* Neon Mint/Lime */
500: '#84cc16',
},
stone: {
50: '#fafaf9', /* Off-white */
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<i className="w-6 h-6 text-lime-600 group-hover:text-lime-500 transition-colors" data-lucide="activity"></i>
<span className="uppercase text-lg font-bold text-emerald-950 tracking-tighter font-display">RWP<span className="text-lime-600">26</span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold text-stone-600 hover:text-emerald-950 transition-colors" href="#distances">Distances</a>
<a className="text-sm font-semibold text-stone-600 hover:text-emerald-950 transition-colors" href="#program">Program</a>
<a className="text-sm font-semibold text-stone-600 hover:text-emerald-950 transition-colors" href="#map">Route</a>
<a className="text-sm font-semibold text-stone-600 hover:text-emerald-950 transition-colors" href="#gallery">Gallery</a>
</nav>

<a className="hover:bg-lime-300 md:text-sm uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-lime-400/20 text-xs font-bold text-emerald-950 tracking-tight bg-lime-400 rounded-none pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#">Open Soon!</a>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Marathon Start" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89d0e495-b3d3-48cf-9dd5-f78bc0c5c433_1600w.jpg" style={{}}/>

<div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 flex flex-col text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/30 bg-emerald-950/30 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
<span className="text-lime-400 text-xs font-semibold tracking-wider uppercase">Registration Open</span>
</div>
<h1 className="uppercase leading-[0.9] md:text-4xl lg:text-7xl text-5xl font-black text-stone-50 tracking-tighter font-display mb-4">
  Power
  Pulse<br/><span className="bg-clip-text text-lime-400/90 bg-gradient-to-r from-lime-400 to-emerald-200" style={{}}>Half Marathon</span>
</h1>
<p className="md:text-xl text-lg font-medium text-stone-300 tracking-tight max-w-2xl mr-auto mb-12 ml-auto">Squeeze Every Drop: Feel the Energy on the Capital’s Greenest Route.</p>
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 text-stone-50">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-400" data-lucide="map-pin"></i>
<span className="uppercase font-bold tracking-wide font-display">Bertam, Penang</span>
</div>
<div className="h-px w-12 bg-stone-50/20 hidden md:block"></div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-lime-400" data-lucide="calendar"></i>
<span className="uppercase font-bold tracking-wide font-display">October, 2026</span>
</div>
</div>

<div className="grid grid-cols-4 md:gap-8 border-stone-50/10 border-t pt-8 gap-x-4 gap-y-4">
<div className="text-center">
<span className="block text-3xl md:text-5xl font-display font-bold text-white tracking-tighter" style={{}}>45</span>
<span className="text-xs text-stone-400 uppercase tracking-widest">Days</span>
</div>
<div className="text-center">
<span className="block text-3xl md:text-5xl font-display font-bold text-white tracking-tighter" style={{}}>12</span>
<span className="text-xs text-stone-400 uppercase tracking-widest">Hours</span>
</div>
<div className="text-center">
<span className="block text-3xl md:text-5xl font-display font-bold text-white tracking-tighter" style={{}}>09</span>
<span className="text-xs text-stone-400 uppercase tracking-widest">Mins</span>
</div>
<div className="text-center">
<span className="block text-3xl md:text-5xl font-display font-bold text-lime-400 tracking-tighter" style={{}}>30</span>
<span className="text-xs text-stone-400 uppercase tracking-widest">Secs</span>
</div>
</div>
</div>
</section>


<section className="py-24 md:py-32 max-w-7xl mx-auto px-6" id="distances">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="font-display font-bold text-4xl md:text-5xl text-emerald-950 tracking-tighter uppercase mb-4" style={{}}>Choose Your<br/>Challenge</h2>
<p className="text-stone-500 max-w-md">Whether you are a beginner or a pro, we have a distance that will test your limits.</p>
</div>
<div className="flex gap-2">
<button className="p-3 border border-stone-200 rounded-full hover:bg-stone-100 transition-colors"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="p-3 border border-stone-200 rounded-full hover:bg-stone-100 transition-colors"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[500px] overflow-hidden bg-stone-900 cursor-pointer">
<img alt="5K Run" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b643a60-da13-4e37-add6-cc9aed02cff1_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">Fun Run</span>
</div>
<div className="">
<h3 className="font-display font-black text-6xl md:text-7xl text-white group-hover:text-lime-400 transition-colors tracking-tighter mb-2" style={{}}>5<span className="text-3xl align-top" style={{}}>KM</span></h3>
<div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
<p className="text-stone-200 text-sm mb-4 line-clamp-2">Perfect for beginners. A scenic route through the park zone without significant elevation.</p>
<div className="flex items-center justify-between text-white border-t border-white/20 pt-4">
<span className="font-display font-bold text-xl">850 ₴</span>
<span className="flex items-center gap-1 text-xs uppercase font-bold text-lime-400">Details <i className="w-4 h-4" data-lucide="arrow-up-right"></i></span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative h-[500px] overflow-hidden bg-stone-900 cursor-pointer">
<img alt="10K Run" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38c70b8c-0b0d-4042-8bb6-4e0bf853b196_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="inline-block px-3 py-1 bg-lime-400 text-emerald-950 text-xs font-semibold uppercase tracking-wider">Most Popular</span>
</div>
<div className="">
<h3 className="font-display font-black text-6xl md:text-7xl text-white group-hover:text-lime-400 transition-colors tracking-tighter mb-2" style={{}}>10<span className="text-3xl align-top" style={{}}>KM</span></h3>
<div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
<p className="text-stone-200 text-sm mb-4 line-clamp-2">The classic distance. Test your speed and endurance on a certified track.</p>
<div className="flex items-center justify-between text-white border-t border-white/20 pt-4">
<span className="font-display font-bold text-xl">1100 ₴</span>
<span className="flex items-center gap-1 text-xs uppercase font-bold text-lime-400">Details <i className="w-4 h-4" data-lucide="arrow-up-right"></i></span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative h-[500px] overflow-hidden bg-stone-900 cursor-pointer">
<img alt="21K Run" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ac381c0-ee94-4be0-8b26-85e9e16b9eb8_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">Pro</span>
</div>
<div className="">
<h3 className="font-display font-black text-6xl md:text-7xl text-white group-hover:text-lime-400 transition-colors tracking-tighter mb-2" style={{}}>21<span className="text-3xl align-top" style={{}}>KM</span></h3>
<div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
<p className="text-stone-200 text-sm mb-4 line-clamp-2">Half Marathon. Two laps of pure adrenaline and will power.</p>
<div className="flex items-center justify-between text-white border-t border-white/20 pt-4">
<span className="font-display font-bold text-xl">1400 ₴</span>
<span className="flex items-center gap-1 text-xs uppercase font-bold text-lime-400">Details <i className="w-4 h-4" data-lucide="arrow-up-right"></i></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 overflow-hidden">
<div className="flex flex-col md:flex-row h-auto md:h-[600px]">

<div className="w-full md:w-1/2 relative bg-emerald-900 group overflow-hidden">
<img alt="Medal" className="w-full h-full object-cover opacity-80 scale-100 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89c95cee-5e61-427a-8670-2dfcbe3e28db_1600w.jpg" style={{}}/>
<div className="bg-emerald-950/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-lime-400 text-emerald-950 text-xs font-bold uppercase tracking-wider rounded-full mb-2">Finisher Exclusive</span>
</div>
</div>

<div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white">
<h2 className="font-display font-bold text-4xl md:text-5xl text-emerald-950 tracking-tighter uppercase mb-6 leading-none" style={{}}>
                    A Reward<br/>Worth The Effort
                </h2>
<p className="text-stone-600 text-lg mb-8 leading-relaxed">
                    Every finisher receives a unique cast medal depicting the Kyiv skyline and a high-performance New Balance technical tee. Designed for speed, crafted for memory.
                </p>

<div className="flex gap-4 mb-10">
<div className="w-24 h-24 bg-stone-100 rounded-lg p-2 border border-stone-200 cursor-pointer hover:border-lime-400 transition-colors">
<img alt="T-shirt Front" className="w-full h-full object-contain opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" style={{}}/>
</div>
<div className="w-24 h-24 bg-stone-100 rounded-lg p-2 border border-stone-200 cursor-pointer hover:border-lime-400 transition-colors">
<img alt="T-shirt Back" className="w-full h-full object-contain opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<a className="inline-flex items-center gap-2 text-emerald-950 font-bold uppercase tracking-tight hover:gap-4 transition-all" href="#">
                    View Size Chart <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 relative" id="map">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-4xl text-emerald-950 tracking-tighter uppercase mb-3" style={{}}>The Course
    </h2>
<p className="text-stone-500">Certified by AIMS. Flat, fast, and incredibly green.</p>
</div>

<div className="relative w-full aspect-[16/9] bg-stone-200 rounded-xl overflow-hidden shadow-2xl border border-stone-300">

<div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Kyiv.svg/1200px-Map_of_Kyiv.svg.png')] bg-cover bg-center grayscale contrast-125">
</div>

<svg className="absolute top-0 right-0 bottom-0 left-0 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] w-[1230px] h-[691px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(28, 25, 23)', width: '1230px', height: '691px'}} viewbox="0 0 800 450">
<path className="animate-[dash_2s_linear_infinite]" d="M150,350 C200,340 250,380 300,300 S400,150 500,200 S700,100 700,250" fill="none" stroke="#a3e635" stroke-dasharray="10 0" strokeLinecap="round" strokeWidth="4">
</path>

<circle className="cursor-pointer hover:r-8 transition-all" cx="150" cy="350" fill="#022c22" r="6" stroke="#ffffff" strokeWidth="2"></circle>
<text className="text-[10px] fill-emerald-950 font-bold uppercase" x="130" y="380">Start</text>
<circle className="cursor-pointer hover:fill-lime-400 transition-colors" cx="500" cy="200" fill="#ffffff" r="6" stroke="#022c22" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-8 transition-all" cx="700" cy="250" fill="#022c22" r="6" stroke="#ffffff" strokeWidth="2"></circle>
<text className="text-[10px] fill-emerald-950 font-bold uppercase" x="680" y="280">Finish</text>
</svg>

<div className="absolute top-6 right-6 bg-white/90 backdrop-blur shadow-sm p-4 rounded-lg border border-stone-200">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_5px_rgba(163,230,53,1)]"></span>
<span className="text-xs font-bold text-stone-700 uppercase">Race Track</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-blue-400"></span>
<span className="text-xs font-bold text-stone-700 uppercase">Hydration</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-emerald-900"></span>
<span className="text-xs font-bold text-stone-700 uppercase">Music Point</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6" id="program">
<h2 className="font-display font-bold text-4xl text-center text-emerald-950 tracking-tighter uppercase mb-16" style={{}}>Race Day Schedule</h2>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 transform md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-2 md:mb-0">
<span className="group-hover:text-lime-600 transition-colors text-3xl font-bold text-emerald-950 tracking-tight font-display">02:00</span>
</div>
<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-50 border-4 border-emerald-950 rounded-full group-hover:border-lime-400 transition-colors z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h4 className="font-bold text-lg text-stone-800">Race Village Opens</h4>
<p className="text-sm text-stone-500">Locker rooms and registration desk active</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-2 md:mb-0 order-1 md:order-1">
<h4 className="text-lg font-bold text-stone-800">Warm-up and Subuh prayer</h4>
<p className="text-sm text-stone-500">With Nike Training Club coaches</p>
</div>
<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-50 border-4 border-emerald-950 rounded-full group-hover:border-lime-400 transition-colors z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-12 order-2 md:order-0 md:text-right">
<span className="group-hover:text-lime-600 transition-colors text-3xl font-bold text-emerald-950 tracking-tight font-display">06:00</span>
</div>
</div> 

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-2 md:mb-0">
<span className="group-hover:text-lime-600 transition-colors text-3xl font-bold text-emerald-950 tracking-tight font-display">07:00</span>
</div>
<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 border-4 border-lime-400 rounded-full z-10 shadow-[0_0_15px_rgba(163,230,53,0.6)]"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h4 className="font-bold text-lg text-stone-800">Start 21 KM</h4>
<p className="text-sm text-stone-500">Elite &amp; Wave A</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-2 md:mb-0">

<h4 className="font-bold text-lg text-stone-800 md:hidden">Start 5 KM &amp; 10 KM</h4>
</div>
<div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-50 border-4 border-emerald-950 rounded-full group-hover:border-lime-400 transition-colors z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<span className="text-3xl font-display font-bold text-emerald-950 tracking-tight group-hover:text-lime-600 transition-colors md:hidden" style={{}}>09:30</span>
<div className="hidden md:block">
<h4 className="font-bold text-lg text-stone-800">Start 5 KM &amp; 10 KM</h4>
<p className="text-sm text-stone-500">All waves</p>
</div>
</div>

<div className="hidden md:block absolute left-0 w-[45%] text-right pr-12 top-0">
<span className="group-hover:text-lime-600 transition-colors text-3xl font-bold text-emerald-950 tracking-tight font-display">07:30</span>
</div>
</div>
</div>
</section>

<section className="border-y bg-stone-100 border-stone-200 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-8">Official Partners</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500">

<span className="font-display font-black text-2xl tracking-tighter text-emerald-950" style={{}}></span>
<span className="font-display font-bold text-2xl tracking-tighter text-emerald-950 italic" style={{}}></span>
<span className="font-display font-black text-2xl tracking-tighter text-emerald-950" style={{}}>REVEAL SOON!</span>
<span className="font-display font-bold text-2xl tracking-tight text-emerald-950" style={{}}></span>
<span className="font-display font-black text-2xl tracking-tight text-emerald-950" style={{}}></span>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="gallery">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="uppercase text-4xl font-bold text-emerald-950 tracking-tighter font-display mb-2">#RunWithPower</h2>
<p className="text-stone-500">Join the community. Share your moments.</p>
</div>
<a className="text-emerald-950 font-bold border-b-2 border-lime-400 hover:text-lime-600 transition-colors" href="#">Follow on Instagram</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="relative group aspect-square overflow-hidden rounded-lg bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/438e28df-adc2-43a0-a6f4-6c83e6fc8e37_800w.webp"/>
<div className="group-hover:bg-emerald-950/40 transition-colors flex bg-emerald-950/0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<i className="group-hover:opacity-100 transition-opacity opacity-0 w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="instagram" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '32px', height: '32px'}}></i>
</div>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-stone-200 md:translate-y-8">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/654a1a8f-a354-49c4-b2fe-6476e914679f_800w.webp"/>
<div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-colors flex items-center justify-center">
<i className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" data-lucide="instagram"></i>
</div>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71988fb8-655e-45aa-8f45-a8e63d060bd4_800w.webp"/>
<div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-colors flex items-center justify-center">
<i className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" data-lucide="instagram"></i>
</div>
</div>
<div className="relative group aspect-square overflow-hidden rounded-lg bg-stone-200 md:translate-y-8">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/945ab0c6-ab8d-47af-9e55-79615ad17f51_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40 transition-colors flex items-center justify-center">
<i className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" data-lucide="instagram"></i>
</div>
</div>
</div>
</section>

<footer className="text-stone-400 bg-emerald-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-emerald-900 pb-12 mb-12">

<div className="md:col-span-4">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="uppercase text-2xl font-bold text-stone-50 tracking-tighter font-display">RWP<span className="text-lime-400">26</span></span>
</a>
<p className="leading-relaxed text-sm text-stone-500 max-w-sm mb-6">The Power Pulse Half Marathon is a running festival that unites amateurs and professionals. Organized by Power Pulse Malaysia.</p>
<div className="flex gap-4">
<a className="hover:text-lime-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-lime-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-lime-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>

<div className="md:col-span-2">
<h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Event</h5>
<ul className="space-y-4 text-sm font-medium">
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Results</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Photos</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Sponsors</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Volunteers</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Info</h5>
<ul className="space-y-4 text-sm font-medium">
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">FAQ</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Contact</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Medical Info</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get Training Plan</h5>
<p className="text-xs mb-4">Subscribe to receive a free 8-week training plan.</p>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-emerald-900/50 border border-emerald-800 text-stone-200 text-sm rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors placeholder-emerald-700" placeholder="Email address" type="email"/>
</div>
<button className="bg-stone-50 text-emerald-950 font-bold text-sm py-3 px-6 rounded uppercase tracking-tight hover:bg-lime-400 transition-colors" type="button">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-emerald-800 font-medium">
<p className="">© 2026 Power Pulse Half Marathon. All rights reserved.</p>
<p className="">Designed Power Pulse Solutions <span className="text-lime-50">©</span> in Malaysia</p>
</div>
</div>
</footer>



    </>
  );
}
