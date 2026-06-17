import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
lime: '#CCFF00',   // Primary Neon
black: '#0A0A0A',  // Deep Black
dark: '#121212',   // Secondary Dark
white: '#FFFFFF',
yellow: '#FFD600', // Accent
gray: '#F5F5F5',
}
},
backgroundImage: {
'noise': "url('https://www.transparenttextures.com/patterns/noise-lines.png')"
},
boxShadow: {
'brutal': '4px 4px 0px 0px #000000',
'brutal-lg': '8px 8px 0px 0px #000000',
'brutal-lime': '4px 4px 0px 0px #CCFF00',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-brand-white/90 backdrop-blur-md border-b-2 border-brand-black">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="text-brand-black border-brand-black group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-none transition-all bg-center w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c37a426b-123b-4524-9ecc-43954a5cee86_320w.png)] bg-cover border-2 rounded-lg pt-2 pr-2 pb-2 pl-2 shadow-[2px_2px_0px_0px_#000000]">
</div>
<div className="flex flex-col leading-none">
<span className="font-display font-bold text-xl uppercase tracking-tighter">Khatta Singh</span>
<span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Since 2025</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
<a className="hover:text-brand-lime hover:bg-brand-black px-2 py-1 rounded transition-colors" href="#about">Our Story</a>
<a className="hover:text-brand-lime hover:bg-brand-black px-2 py-1 rounded transition-colors" href="#menu">Flavours</a>
<a className="hover:text-brand-lime hover:bg-brand-black px-2 py-1 rounded transition-colors" href="#location">Location</a>
</div>

<a className="flex items-center gap-2 uppercase bg-brand-black text-brand-lime text-xs font-bold border-2 border-brand-black rounded-full px-5 py-2.5 hover:bg-brand-lime hover:text-brand-black transition-colors shadow-brutal hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" href="#location">
                Visit Us
                <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-6xl mx-auto relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="flex flex-col items-start space-y-6 z-10 order-2 md:order-1">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-black bg-brand-yellow/20 text-brand-black text-xs font-bold uppercase tracking-wider">
<iconify-icon className="text-brand-black" icon="solar:verified-check-bold"></iconify-icon>
                    Kanpur's Most Trusted
                </div>

<h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] text-brand-black tracking-tight">
                    Kya khaoge? <br/>
<span className="relative inline-block">
<span className="relative z-10 text-brand-black">Wahi purana paani?</span>
<span className="absolute bottom-1 left-0 w-full h-4 bg-brand-lime -z-0 rotate-1"></span>
</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 font-medium max-w-md leading-relaxed">
                    Street food that doesn’t compromise on health. <br/>
<span className="text-brand-black font-bold">Tasty bhi, Healthy bhi.</span>
</p>

<div className="flex flex-wrap gap-3 pt-2">
<div className="flex border-brand-black text-xs font-bold bg-white border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[2px_2px_0px_0px_#000000] gap-x-2 gap-y-2 items-center">💧 Mineral Water Only</div>
<div className="flex items-center gap-2 text-xs font-bold bg-white border border-brand-black px-4 py-2 rounded-full shadow-[2px_2px_0px_0px_#000000]">
<iconify-icon className="text-green-600 text-base" icon="solar:shield-check-bold"></iconify-icon>
                        No Preservatives
                    </div>
<div className="flex items-center gap-2 text-xs font-bold bg-white border border-brand-black px-4 py-2 rounded-full shadow-[2px_2px_0px_0px_#000000]">
<iconify-icon className="text-brand-yellow text-base" icon="solar:clock-circle-bold"></iconify-icon>
                        Fresh Daily Prep
                    </div>
</div>
<div className="pt-6">
<a className="inline-flex text-brand-black hover:bg-brand-black hover:text-brand-lime transition-all items-center gap-3 border-brand-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-lg font-bold h-14 border-2 rounded-xl pr-8 pl-8 shadow-brutal" href="/#location">
                        Visit Us Today
                        <iconify-icon icon="solar:map-arrow-right-bold" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="relative flex items-center justify-center order-1 md:order-2">

<iconify-icon className="absolute top-0 right-10 text-brand-yellow text-5xl animate-spin-slow" icon="solar:star-bold" style={{animationDuration: '10s'}}></iconify-icon>
<iconify-icon className="absolute bottom-10 left-0 text-brand-lime text-4xl opacity-50" icon="mdi:billiards-rack"></iconify-icon>

<div className="relative bg-white p-4 pb-16 shadow-brutal-lg border-2 border-brand-black rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-sm mx-auto">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-yellow/80 rotate-1 opacity-80 backdrop-blur-sm border-l border-r border-white/20"></div>
<div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 border border-gray-200">
<img alt="Khatta Singh Stall" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67fc7ea8-6b22-421b-8d36-d2cdbeccb4e1_800w.png"/>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="font-display font-bold text-xl text-brand-black">Authentic Taste</div>
<div className="text-xs font-mono text-gray-500">Motijheel, Kanpur</div>
</div>

<div className="absolute -right-4 top-1/2 bg-brand-black text-brand-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-brand-lime font-bold text-sm -rotate-12 shadow-md">
                        100%Pure
                    </div>
</div>
</div>
</div>
</section>

<div className="bg-brand-black text-brand-lime py-4 overflow-hidden border-y-2 border-brand-black transform -rotate-1 scale-105">
<div className="flex items-center gap-8 animate-marquee whitespace-nowrap font-display font-bold text-2xl uppercase tracking-wider">
<span>• Authentic Taste</span>
<span>• Mineral Water</span>
<span>• No Artificial Colors</span>
<span>• Family Friendly</span>
<span>• Authentic Taste</span>
<span>• Mineral Water</span>
<span>• No Artificial Colors</span>
<span>• Family Friendly</span>
<span>• Authentic Taste</span>
<span>• Mineral Water</span>
<span>• No Artificial Colors</span>
<span>• Family Friendly</span>
</div>
</div>

<section className="py-24 px-6 bg-brand-gray relative" id="about">
<div className="max-w-4xl mx-auto text-center">
<span className="text-brand-black font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
<h2 className="font-display font-bold text-4xl md:text-5xl text-brand-black mb-6">Why Khatta Singh?</h2>
<p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12">
                We started Khatta Singh with one simple idea — <span className="bg-brand-lime px-1 text-brand-black highlight">street food should be tasty, hygienic, and trustworthy.</span> Every plate is prepared fresh using mineral water and clean ingredients.
            </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-brutal hover:-translate-y-1 transition-transform">
<div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 border border-brand-black">
<iconify-icon icon="solar:waterdrops-bold" width="24"></iconify-icon>
</div>
<h3 className="font-display font-bold text-lg mb-2">Mineral Water Used</h3>
<p className="text-sm text-gray-500">We refuse to use tap water. Your health is our priority, every sip is safe.</p>
</div>

<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-brutal hover:-translate-y-1 transition-transform">
<div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 border border-brand-black">
<iconify-icon icon="solar:hand-stars-bold" width="24"></iconify-icon>
</div>
<h3 className="font-display font-bold text-lg mb-2">Hygienic Preparation</h3>
<p className="text-sm text-gray-500">Gloves, caps, and clean counters. We maintain restaurant-grade hygiene.</p>
</div>

<div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-brutal hover:-translate-y-1 transition-transform">
<div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4 border border-brand-black">
<iconify-icon icon="solar:heart-bold" width="24"></iconify-icon>
</div>
<h3 className="font-display font-bold text-lg mb-2">Loved by Locals</h3>
<p className="text-sm text-gray-500">Kanpur has spoken. The authentic taste keeps our customers coming back.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-black relative" id="menu">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/stardust.png\')'}}></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-display font-bold text-4xl md:text-5xl text-brand-white mb-2">Our Flavours</h2>
<p className="text-brand-lime font-medium">Har mood ke liye ek flavour.</p>
</div>
<div className="bg-brand-dark px-4 py-2 rounded-lg border border-white/20 flex items-center gap-3">
<iconify-icon className="text-brand-yellow" icon="solar:info-circle-bold"></iconify-icon>
<span className="text-gray-400 text-sm">Flavours available on rotation</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4">

<div className="group hover:bg-pink-900/40 transition-all duration-300 overflow-hidden bg-pink-900/20 border-pink-500 border-2 rounded-xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="aspect-square flex group-hover:bg-pink-500/30 transition-colors bg-center bg-pink-500/20 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb8f52af-c1a0-4068-84a7-c27d0f76c2cf_320w.jpg)] bg-cover rounded-full mb-4 items-center justify-center">
</div><div className="text-[10px] uppercase font-bold text-white bg-pink-500 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 absolute top-2 right-2">Must Try</div>
<h3 className="text-lg font-bold text-pink-400 text-center">Strawberry</h3>
<p className="text-xs text-pink-400 text-center mt-1">Sweet &amp; Unique</p>
</div><div className="group hover:border-brand-lime transition-all duration-300 border-lime-600 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-square flex group-hover:bg-green-500/20 transition-colors bg-green-500/10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0757aebb-c20a-4b5a-919f-6956286f12da_320w.jpg)] bg-cover bg-center rounded-full mb-4 translate-y-3 items-center justify-center">
</div>
<h3 className="text-brand-white text-lg font-bold text-lime-600 text-center">Guava </h3>
<p className="text-xs text-lime-300 text-center mt-1">Mild &amp; Fresh </p>
</div><div className="group hover:border-brand-lime transition-all duration-300 border-amber-500 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-square flex group-hover:bg-green-500/20 transition-colors bg-center bg-green-500/10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/872cff0c-b526-4a51-828b-24699e3398a4_320w.webp)] bg-cover rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-brand-white text-lg font-bold text-yellow-400 text-center">Pineapple </h3>
<p className="text-xs text-yellow-200 text-center mt-1">Sweet &amp; Tangy</p>
</div><div className="group hover:border-brand-lime transition-all duration-300 border-orange-600 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-square flex group-hover:bg-green-500/20 transition-colors bg-green-500/10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a001efe7-f86e-4608-a7ad-d67576a5bd87_320w.jpg)] bg-cover bg-center rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-brand-white text-lg font-bold text-orange-500 text-center">Orange </h3>
<p className="text-xs text-orange-300 text-center mt-1">Citrus Kick </p>
</div><div className="group hover:border-brand-lime transition-all duration-300 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-square flex group-hover:bg-yellow-500/20 transition-colors bg-yellow-500/10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f0b9627-dcf7-4623-826d-1daed164df8f_320w.jpg)] bg-cover bg-center rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-brand-white text-lg font-bold text-center">Hing</h3>
<p className="text-xs text-gray-500 text-center mt-1">Desi Punch</p>
</div>

<div className="group hover:border-brand-lime transition-all duration-300 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-square flex group-hover:bg-red-500/20 transition-colors bg-red-500/10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ae9b12b-3f63-44a4-915c-6bd23a95474e_320w.jpg)] bg-cover bg-center rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-brand-white text-lg font-bold text-center">Garlic </h3>
<p className="text-xs text-gray-500 text-center mt-1">For Spicy Lovers</p>
</div>


<div className="group hover:border-brand-lime transition-all duration-300 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-square flex group-hover:bg-green-500/20 transition-colors bg-green-500/10 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f327ad17-aa80-47b4-a41f-810f0c262813_320w.jpg)] bg-cover bg-center rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-brand-white bg-center text-lg font-bold text-center">Pure Imli</h3>
<p className="text-xs text-gray-500 text-center mt-1">Classic</p>
</div>

</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="location">
<div className="bg-brand-lime rounded-[3rem] p-8 md:p-12 border-2 border-brand-black shadow-brutal-lg">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="inline-flex w-3 h-3 rounded-full relative"></span>
</span>
<span className="font-bold text-brand-black uppercase tracking-wider text-sm">Open Now</span>
</div>
<h2 className="font-display font-bold text-5xl text-brand-black mb-4">Visit the Stall</h2>
<p className="text-brand-black/80 font-medium text-lg">
                            Experience the vibe yourself. Come say hello!
                        </p>
</div>
<div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-black/20 space-y-6">

<div className="flex gap-4">
<div className="mt-1 h-10 w-10 rounded-full bg-brand-black text-brand-lime flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-black text-lg">Motijheel, Kanpur</h4>
<p className="text-brand-black/70 text-sm font-medium">Near Kargil Park, In front of Swami Vivekananda Statue</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 h-10 w-10 rounded-full bg-brand-black text-brand-lime flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-black text-lg">4:00 PM – Till Sold Out</h4>
<div className="inline-block mt-1 bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold border border-red-200">
                                    Closed on Tuesdays
                                </div>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[300px] w-full bg-brand-gray rounded-3xl border-2 border-brand-black overflow-hidden relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.309095627236!2d80.3218!3d26.4778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3897b09831d3%3A0x6291a851d0822601!2sMotijheel%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%"></iframe>
<a className="-translate-x-1/2 hover:scale-105 transition-transform flex items-center gap-2 font-bold text-white bg-slate-950 rounded-full pt-3 pr-6 pb-3 pl-6 absolute bottom-6 left-1/2 shadow-lg" href="https://maps.app.goo.gl/yC6iEq9UKocoRghn7" target="_blank">
                        Get Directions
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-brand-white border-t-2 border-brand-black pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<h3 className="font-display font-bold text-3xl uppercase tracking-tighter mb-2">Khatta Singh</h3>
<p className="text-gray-500 font-medium">Authentic Street Food.<br/>Hygiene First.</p>
</div>

<div className="flex gap-x-4 gap-y-4">
<a className="border-brand-black flex items-center justify-center hover:bg-brand-lime hover:-translate-y-1 transition-all w-12 h-12 border-2 rounded-full shadow-[2px_2px_0px_0px_#000000]" href="https://www.instagram.com/khatta_singh_">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(10, 10, 10)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
<p className="">© 2025 Khatta Singh, Kanpur. All rights reserved.</p>
<p>Designed with <iconify-icon className="text-red-500 align-middle" icon="solar:heart-bold"></iconify-icon> for Golgappa Lovers</p>
</div>
</div>
</footer>
<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
    </style>

    </>
  );
}
