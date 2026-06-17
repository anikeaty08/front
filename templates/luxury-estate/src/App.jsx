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
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
colors: {
brand: {
black: '#121212',
dark: '#1A3C34', // Deep green from footer
cream: '#F9F8F4', // Light background
gold: '#C5A67C',
}
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
      

<header className="relative w-full h-[110vh] overflow-hidden flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Mansion" className="w-full h-full object-cover brightness-[0.85]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c7b1a5d-75c3-4ed1-97c3-9d30b637ed83_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/60"></div>
</div>

<nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 w-full text-white">
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:crown-star-linear" width="28"></iconify-icon>
<span className="font-serif text-xl tracking-widest uppercase">Lumina Estate</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase font-light opacity-90">
<a className="hover:opacity-100 transition-opacity" href="#">Suites</a>
<a className="hover:opacity-100 transition-opacity" href="#">Experience</a>
<a className="hover:opacity-100 transition-opacity" href="#">Heritage</a>
<a className="hover:opacity-100 transition-opacity" href="#">Journal</a>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-sm hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="bg-brand-dark text-white px-6 py-2.5 text-sm uppercase tracking-wider font-light rounded-sm hover:bg-[#142e28] transition-colors backdrop-blur-md border border-white/10">
                    Reserve
                </button>
</div>
</nav>

<div className="relative z-10 flex-1 flex items-center justify-center px-4 mt-20">
<h1 className="font-serif text-[13vw] leading-[0.85] text-white tracking-tighter text-center mix-blend-overlay opacity-90 select-none">
                LUMINA<span className="font-light italic px-4">-</span>ESTATE
            </h1>
</div>

<div className="relative z-20 w-full px-6 md:px-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-white">
<div className="max-w-md">
<p className="text-lg font-light leading-relaxed opacity-90">
                    Curated for those who seek silence in luxury. Our sanctuaries are designed to merge historic grandeur with modern tranquility.
                </p>
</div>
<button className="bg-brand-dark/90 backdrop-blur-md text-white px-8 py-4 text-base uppercase tracking-widest font-light rounded-sm hover:bg-brand-dark transition-all border border-white/10">
                Explore The Estate
            </button>
</div>
</header>

<section className="relative px-6 py-24 md:px-12 md:py-32 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-2">
<span className="text-sm font-light uppercase tracking-widest text-stone-500 border-t border-stone-300 pt-4 block w-max">Our Philosophy</span>
</div>

<div className="md:col-span-6 md:pr-12">
<p className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-stone-800 font-light tracking-tight">
                    We are guided by a devotion to <span className="text-brand-dark italic">refined serenity</span> and timeless service. Our spaces are sculpted to blend heritage with modern grace, offering an atmosphere where luxury meets simplicity.
                </p>
<p className="mt-12 text-xl font-light text-stone-500 leading-relaxed max-w-xl">
                    With meticulous attention to detail, we aim to deliver an unforgettable experience that exceeds expectations at every step, ensuring your stay is nothing short of perfection.
                </p>

<div className="grid grid-cols-3 gap-8 mt-20 border-t border-stone-200 pt-10">
<div>
<div className="font-serif text-5xl md:text-6xl text-brand-dark font-light tracking-tight">150<span className="text-3xl align-top">+</span></div>
<div className="text-sm uppercase tracking-widest text-stone-500 mt-2">Suites</div>
</div>
<div>
<div className="font-serif text-5xl md:text-6xl text-brand-dark font-light tracking-tight">98<span className="text-3xl align-top">%</span></div>
<div className="text-sm uppercase tracking-widest text-stone-500 mt-2">Satisfaction</div>
</div>
<div>
<div className="font-serif text-5xl md:text-6xl text-brand-dark font-light tracking-tight">40<span className="text-3xl align-top">+</span></div>
<div className="text-sm uppercase tracking-widest text-stone-500 mt-2">Awards</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4 pt-12 md:pt-0">
<div className="relative overflow-hidden rounded-sm h-[500px]">
<img alt="Interior Lobby" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03720c86-005f-4b78-b511-d75c3aa33aa2_1600w.webp"/>
</div>
<div className="flex items-center justify-between text-stone-400 text-sm font-light mt-2">
<span>The Grand Hall</span>
<span>01 / 05</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<span className="text-xs font-light uppercase tracking-[0.2em] text-stone-400 mb-4 block">Celebrations</span>
<h2 className="font-serif text-4xl md:text-6xl text-stone-800 font-light tracking-tight mb-16">
                Where Your Moments  Become <span className="italic text-brand-dark">Eternal Memories</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-16">

<div className="md:col-span-1 h-64 md:h-80 overflow-hidden rounded-sm translate-y-8">
<img alt="Wedding Details" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1573f5f6-6b70-43d2-b399-c65ec24447a7_800w.jpg"/>
</div>

<div className="md:col-span-2 h-96 md:h-[500px] overflow-hidden rounded-sm relative group">
<img alt="Banquet Hall" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f417b1ae-1f61-4f8a-81d4-bfb921b92124_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="md:col-span-1 h-64 md:h-80 overflow-hidden rounded-sm translate-y-8">
<img alt="Bride" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ec21609-07bb-41cb-a463-ed46cb108dcd_800w.jpg"/>
</div>
</div>
<button className="bg-brand-dark text-white px-10 py-4 text-sm uppercase tracking-widest font-light rounded-sm hover:bg-[#142e28] transition-all shadow-xl shadow-brand-dark/10">
                Plan Your Event
            </button>
</div>
</section>

<section className="py-24 md:py-32 bg-brand-cream border-t border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<span className="text-sm font-light uppercase tracking-widest text-stone-500 mb-12 block border-t border-stone-300 pt-4 w-max">Guest Stories</span>
<h2 className="font-serif text-3xl md:text-5xl text-stone-800 font-light tracking-tight mb-20 max-w-2xl">
                Discover why guests trust us to deliver exceptional stays.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="aspect-[4/5] overflow-hidden rounded-sm w-full md:w-4/5">
<img alt="Portrait" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9c20c8-e367-4ade-a102-dda55d03765d_800w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 md:right-[15%] w-24 h-24 bg-brand-dark flex items-center justify-center text-white">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
</div>

<div className="flex flex-col justify-between h-full py-4">
<iconify-icon className="text-brand-dark/20 mb-6" icon="solar:quote-up-linear" width="48"></iconify-icon>
<blockquote className="font-serif text-3xl md:text-4xl text-stone-700 leading-tight font-light mb-12">
                        "The room was beautifully designed and incredibly comfortable. Every detail felt thoughtfully crafted, and the service was truly exceptional from start to finish."
                    </blockquote>
<div className="flex items-end justify-between border-t border-stone-300 pt-8">
<div>
<div className="font-medium text-stone-900 text-lg">Julian Reed</div>
<div className="text-stone-500 font-light text-base mt-1">CEO, Horizon Ventures</div>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-200 hover:border-stone-400 transition-colors text-stone-600">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-stone-800 bg-stone-800 text-white flex items-center justify-center hover:bg-stone-700 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-b border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-stone-800" height="36" icon="simple-icons:ritzcarlton" width="96"></iconify-icon>
<iconify-icon className="text-stone-800" height="36" icon="simple-icons:marriott" width="96"></iconify-icon>
<iconify-icon className="text-stone-800" height="36" icon="simple-icons:hilton" width="96"></iconify-icon>
<iconify-icon className="text-stone-800" height="36" icon="simple-icons:fourseasons" width="96"></iconify-icon>
</div>
</section>

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
<img alt="Interior" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8283748-bbd5-41b3-9267-63bec4a6bb0b_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-stone-900/40"></div>
<div className="relative z-10 text-center text-white px-6">
<div className="w-px h-20 bg-white/50 mx-auto mb-8"></div>
<h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8">
                Begin Your  Journey Here
            </h2>
<button className="bg-white text-stone-900 px-10 py-4 text-sm uppercase tracking-widest font-medium rounded-sm hover:bg-stone-100 transition-all">
                Reserve Now
            </button>
</div>
</section>

<footer className="bg-brand-dark text-white pt-32 pb-12">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
<div className="mb-12">
<svg className="opacity-80 w-[48px] h-[48px]" data-icon-replaced="true" data-icon-set="solar" data-solar="crown-star-linear" height="48" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228Z"></path><path d="M11.146 12.523c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path></g></svg>
</div>
<h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-2 opacity-90">+1 (800) 654 - 3240</h3>
<a className="text-xl font-light text-white/70 hover:text-white transition-colors underline decoration-white/30 underline-offset-4 mb-20" href="mailto:concierge@luminaestate.com">
                concierge@luminaestate.com
            </a>
<div className="w-full border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-white/40 uppercase tracking-wider gap-6">
<div className="flex gap-8">
<span>© 2024 Lumina Estate</span>
<span>All Rights Reserved</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="flex gap-8 text-right">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span>Developed by Studio</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
