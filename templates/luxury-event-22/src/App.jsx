import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
gold: '#C9A96E',
obsidian: '#050505',
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
'ultra-wide': '0.3em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 px-6 py-8 flex justify-center mix-blend-difference pointer-events-none">
<h1 className="font-serif text-sm tracking-ultra-wide text-stone-400 uppercase opacity-70">L C D R</h1>
</header>

<section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian">

<div className="absolute inset-0 z-0">
<img alt="Ambient lighting on water" className="w-full h-full object-cover drift-bg opacity-30 brightness-[0.2] contrast-[1.2] grayscale-[30%]" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-obsidian/60 vignette"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
<h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-stone-100 font-light seq-1">
                Le Château De Rosié
            </h2>
<p className="mt-8 text-lg md:text-xl text-stone-400 tracking-wide font-light seq-2 italic">
                A Private Luxury Backyard Estate
            </p>
<div className="mt-24 seq-3">
<a className="group flex flex-col items-center gap-3 cursor-pointer" href="#request">
<span className="text-xs font-sans tracking-widest uppercase text-stone-500 group-hover:text-gold transition-colors duration-700">Enter the Experience</span>
<iconify-icon className="text-stone-600 group-hover:text-gold transition-colors duration-700" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center px-6 relative bg-obsidian z-10">
<div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-24">
<h3 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-stone-400 font-light opacity-80 transition-opacity duration-1000 hover:opacity-100">
                Not open to everyone.
            </h3>
<h3 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-stone-200 font-light opacity-90 transition-opacity duration-1000 hover:text-gold">
                Only experienced by a few.
            </h3>
</div>
</section>

<section className="md:px-12 lg:px-24 pt-32 pr-4 pb-32 pl-4 relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
<div className="md:col-span-5 relative h-[60vh] md:h-[80vh] overflow-hidden group">
<img alt="Fabric in wind" className="w-full h-full object-cover brightness-[0.4] contrast-125 grayscale-[20%] group-hover:scale-105 transition-transform duration-[2s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
</div>
<div className="md:col-span-7 flex flex-col justify-center space-y-8 md:pl-12">
<p className="text-2xl md:text-4xl tracking-tight text-stone-300 font-light">
                    Designed for <span className="text-gold italic">presence.</span>
</p>
<div className="w-full h-px bg-stone-800"></div>
<p className="text-2xl md:text-4xl tracking-tight text-stone-300 font-light text-right">
                    Crafted for <span className="text-stone-100 italic">intimacy.</span>
</p>
<div className="pt-16 grid grid-cols-2 gap-4">
<img alt="Water reflection" className="w-full h-48 object-cover brightness-[0.3] contrast-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Light on glass" className="w-full h-48 object-cover brightness-[0.4] grayscale-[40%]" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col border-y border-stone-900/50 pt-32 pb-32 relative justify-center">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<img alt="Evening event blurred" className="w-full h-full object-cover filter blur-sm brightness-50 gradient-mask-b" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<h3 className="text-4xl md:text-6xl tracking-tighter text-center text-stone-200 font-light mb-24">
                Every moment here... <br/>
<span className="text-gold italic mt-4 block">becomes memory.</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-2">

<div className="relative aspect-[3/4] overflow-hidden group">
<img alt="Champagne toast" className="w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.5] transition-all duration-1000" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative aspect-[3/4] overflow-hidden group md:mt-12">
<img alt="Sparkler" className="w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.5] transition-all duration-1000" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative aspect-[3/4] overflow-hidden group md:-mt-12">
<img alt="Silhouette kiss" className="w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.5] transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto bg-obsidian">
<p className="text-xs font-sans tracking-widest text-stone-500 uppercase mb-16 ml-2">Curated Offerings</p>
<ul className="flex flex-col">

<li className="group border-b border-stone-800/50 py-8 flex justify-between items-center cursor-pointer transition-colors duration-500">
<span className="text-2xl md:text-4xl tracking-tight text-stone-400 group-hover:text-gold transition-colors duration-500 font-light">Private Estate Rentals</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0 text-gold">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</li>

<li className="group border-b border-stone-800/50 py-8 flex justify-between items-center cursor-pointer transition-colors duration-500">
<span className="text-2xl md:text-4xl tracking-tight text-stone-400 group-hover:text-gold transition-colors duration-500 font-light">Signature Celebrations</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0 text-gold">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</li>

<li className="group border-b border-stone-800/50 py-8 flex justify-between items-center cursor-pointer transition-colors duration-500">
<span className="text-2xl md:text-4xl tracking-tight text-stone-400 group-hover:text-gold transition-colors duration-500 font-light">Culinary Experiences</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0 text-gold">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</li>

<li className="group border-b border-stone-800/50 py-8 flex justify-between items-center cursor-pointer transition-colors duration-500">
<span className="text-2xl md:text-4xl tracking-tight text-stone-400 group-hover:text-gold transition-colors duration-500 font-light">Entertainment &amp; Atmosphere</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0 text-gold">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</li>

<li className="group border-b border-stone-800/50 py-8 flex justify-between items-center cursor-pointer transition-colors duration-500">
<span className="text-2xl md:text-4xl tracking-tight text-stone-400 group-hover:text-gold transition-colors duration-500 font-light">Concierge &amp; VIP Services</span>
<span className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0 text-gold">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</li>
</ul>
</section>

<section className="py-32 px-4 md:px-12 bg-[#030303]">
<div className="max-w-7xl mx-auto">
<h3 className="text-3xl md:text-5xl tracking-tight text-stone-400 font-light text-center mb-24">
                Every detail... <span className="text-stone-100 italic">intentional.</span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<div className="aspect-square overflow-hidden group">
<img alt="Gold texture" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.7] group-hover:scale-110 transition-all duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-square overflow-hidden group">
<img alt="Crystal glass macro" className="w-full h-full object-cover brightness-[0.3] contrast-125 group-hover:brightness-[0.6] group-hover:scale-110 transition-all duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="aspect-square overflow-hidden group">
<img alt="Candlelight" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.7] group-hover:scale-110 transition-all duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square overflow-hidden group">
<img alt="Linen texture" className="w-full h-full object-cover brightness-[0.3] grayscale-[30%] group-hover:brightness-[0.6] group-hover:scale-110 transition-all duration-[2s]" src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-32 bg-obsidian" id="request">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
<h1 className="text-[20vw] font-serif tracking-tighter text-white whitespace-nowrap">ROSIÉ</h1>
</div>
<div className="relative z-10 max-w-2xl w-full text-center space-y-24">
<div className="space-y-6">
<p className="text-2xl md:text-4xl tracking-tight text-stone-500 font-light">You don't book this place.</p>
<p className="text-3xl md:text-5xl tracking-tighter text-stone-200 font-light italic">You are invited into it.</p>
</div>
<div className="pt-16 border-t border-stone-900/50 text-left">
<h4 className="text-sm font-sans tracking-widest text-stone-500 uppercase mb-12 text-center">Request Access</h4>
<form className="space-y-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-800 py-3 text-stone-200 font-light focus:outline-none focus:border-gold transition-colors peer placeholder-transparent" id="event" placeholder="Event Type" type="text"/>
<label className="absolute left-0 top-3 text-stone-600 font-sans text-xs tracking-wider uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-stone-500" htmlFor="event">Event Type</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-800 py-3 text-stone-200 font-light focus:outline-none focus:border-gold transition-colors peer placeholder-transparent" id="guests" placeholder="Guest Count" type="text"/>
<label className="absolute left-0 top-3 text-stone-600 font-sans text-xs tracking-wider uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-stone-500" htmlFor="guests">Guest Count</label>
</div>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-800 py-3 text-stone-200 font-light focus:outline-none focus:border-gold transition-colors peer placeholder-transparent" id="date" placeholder="Desired Date / Season" type="text"/>
<label className="absolute left-0 top-3 text-stone-600 font-sans text-xs tracking-wider uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-stone-500" htmlFor="date">Desired Date / Season</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-stone-800 py-3 text-stone-200 font-light focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none" id="vision" placeholder="Share your vision..." rows="3"></textarea>
<label className="absolute left-0 top-3 text-stone-600 font-sans text-xs tracking-wider uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-stone-500" htmlFor="vision">Share your vision...</label>
</div>
<div className="pt-8 flex justify-center">
<button className="group relative px-8 py-3 overflow-hidden text-stone-300 font-sans text-xs tracking-[0.2em] uppercase hover:text-black transition-colors duration-500" type="button">
<span className="relative z-10">Begin</span>
<div className="absolute inset-0 bg-gold transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] z-0"></div>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-12 text-center bg-obsidian border-t border-stone-900/30">
<p className="text-[10px] font-sans tracking-widest text-stone-700 uppercase">© Le Château De Rosié. Confidential.</p>
</footer>

    </>
  );
}
