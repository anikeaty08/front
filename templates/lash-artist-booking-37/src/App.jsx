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
colors: {
pastel: {
bg: '#FFF0F5',      /* Slightly richer pink background */
surface: '#FFFAFC', /* Bright surface */
accent: '#FFD1DC',  /* More vibrant pink selection */
dark: '#0a0a0a',    /* Deep Black */
grey: '#4a4a4a',    /* Darker grey for text (less washed out) */
}
},
fontFamily: {
sans: ['Geist', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
letterSpacing: {
'tightest': '-0.05em',
'widest': '0.2em',
}
}
}
}



        lucide.createIcons();

        // Intersection Observer for Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
        
        // Simple Interaction for time slots
        const slots = document.querySelectorAll('.time-slot');
        slots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Remove selected from all
                slots.forEach(s => {
                    s.classList.remove('selected', 'bg-black', 'text-white', 'border-black');
                    s.classList.add('border-black/10', 'bg-white', 'text-black');
                });
                
                // Add to clicked
                if(!this.classList.contains('cursor-not-allowed')) {
                    this.classList.add('selected', 'bg-black', 'text-white', 'border-black');
                    this.classList.remove('border-black/10', 'bg-white', 'text-black');
                }
            });
        });
    
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
      

<nav className="fixed w-full z-50 top-0 bg-pastel-bg/90 backdrop-blur-md border-b border-black/10">
<div className="flex h-20 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="hidden md:flex gap-8 uppercase text-xs font-medium text-black/70 tracking-widest">
<a className="hover:text-black transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-black transition-colors" href="#services">Book</a>
</div>
<a className="absolute left-1/2 -translate-x-1/2 font-serif text-3xl tracking-tightest italic text-black" href="#">
                Lia Lashes
            </a>
<div className="flex gap-6 items-center">
<a className="hidden md:block text-xs uppercase tracking-widest font-medium text-black/70 hover:text-black transition-colors" href="#location">Location</a>
<button className="bg-black text-white text-[10px] font-semibold uppercase tracking-widest px-6 py-2.5 hover:bg-zinc-800 transition-all shadow-md">
                    Book Appointment
                </button>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center bg-gradient-to-b from-pastel-bg via-white to-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-screen-xl mr-auto ml-auto items-center">
<div className="md:col-span-5 relative z-10">
<span className="block text-[10px] uppercase tracking-[0.3em] mb-6 reveal-element text-black/60 font-semibold in-view">Independent Artist • Dublin</span>
<h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tightest mb-8 reveal-element delay-100 text-black in-view">
                    Precision <br/>
<span className="font-light italic text-black/60">meets</span> <br/>
                    Perfection.
                </h1>
<p className="text-pastel-grey leading-relaxed reveal-element delay-200 in-view text-sm font-medium max-w-sm mb-10">Specializing in lash architecture. Every set is mapped to your unique eye shape and natural lash health for a vibrant, lasting look.</p>
<div className="flex gap-4 reveal-element delay-300">
<a className="border-b-2 border-black pb-1 text-xs uppercase tracking-widest hover:text-black/70 transition-colors font-bold" href="#booking">Start Booking</a>
</div>
</div>
<div className="md:col-span-7 relative reveal-element delay-200 in-view">
<div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-white shadow-xl">

<img alt="Lash Close up" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 border border-black/10 shadow-lg max-w-xs hidden md:block">
<p className="font-serif text-2xl italic leading-none mb-2 text-black">"Lia is an artist."</p>
<div className="flex gap-1 text-yellow-500">

<svg className="w-3 h-3 fill-black" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3 h-3 fill-black" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3 h-3 fill-black" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3 h-3 fill-black" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3 h-3 fill-black" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white border-black/10 border-t pt-24 pb-24" id="booking">
<div className="max-w-screen-xl mx-auto px-6">
<div className="text-center mb-16 reveal-element">
<span className="text-[10px] uppercase tracking-widest text-black/60 font-semibold mb-3 block">Step 01</span>
<h2 className="md:text-5xl text-4xl text-black tracking-tight font-serif">Select your <span className="italic text-black/50">style</span></h2>
</div>
<form className="space-y-20">

<div className="reveal-element delay-100">

<h3 className="text-2xl italic text-black font-serif border-black/10 border-b mb-6 pb-2">Full Sets</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-16">

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="lash_style" type="radio"/>
<div className="bg-pastel-surface border border-black/10 p-4 transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black h-full flex flex-col">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-white relative shadow-sm">

<img alt="Angel Set" className="img-zoom w-full h-full object-cover" src="https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 transition-all duration-300 check-icon bg-black text-white rounded-full p-1">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-serif text-xl font-medium">Angel</h3>
<span className="text-sm font-semibold">€50</span>
</div>
<p className="text-xs text-pastel-grey leading-relaxed mb-4 flex-grow font-medium">Wet look lashes using closed fans for a textured mascara effect.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 mt-auto font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    90 Mins
                                </div>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="lash_style" type="radio"/>
<div className="transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black flex flex-col h-full border-black/10 border pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-white relative shadow-sm">

<img alt="Wispy Set" className="img-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8868c1c-c620-4c6f-a7fa-3607c4a6dd4c_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 transition-all duration-300 check-icon bg-black text-white rounded-full p-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-serif text-xl font-medium">Wispy</h3>
<span className="text-sm font-semibold">€50</span>
</div>
<p className="text-pastel-grey leading-relaxed flex-grow text-xs font-medium mb-4">A mix of spikes and fans for a strip-lash inspired textured look.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 mt-auto font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    105 Mins
                                </div>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="lash_style" type="radio"/>
<div className="bg-pastel-surface border border-black/10 p-4 transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black h-full flex flex-col">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-white relative shadow-sm">

<img alt="Anime Set" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9fde383-9349-425e-87ad-0cf4aa7a5665_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 transition-all duration-300 check-icon bg-black text-white rounded-full p-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-serif text-xl font-medium">Anime</h3>
<span className="text-sm font-semibold">€50</span>
</div>
<p className="text-xs text-pastel-grey leading-relaxed mb-4 flex-grow font-medium">Distinct exaggerated spikes mapping for a wide-eye doll effect.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 mt-auto font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    105 Mins
                                </div>
</div>
</label>

<label className="group cursor-pointer relative">
<input checked="" className="peer sr-only" name="lash_style" type="radio"/>
<div className="bg-pastel-surface border border-black/10 p-4 transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black h-full flex flex-col">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-white relative shadow-sm">

<img alt="Light Volume" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 transition-all duration-300 check-icon bg-black text-white rounded-full p-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-serif text-xl font-medium">Light Volume</h3>
<span className="text-sm font-semibold">€50</span>
</div>
<p className="text-xs text-pastel-grey leading-relaxed mb-4 flex-grow font-medium">Soft, fluffy fans. More than classic, but still natural and airy.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 mt-auto font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    110 Mins
                                </div>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="lash_style" type="radio"/>
<div className="bg-pastel-surface border border-black/10 p-4 transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black h-full flex flex-col">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-white relative shadow-sm">

<img alt="Volume +" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dffe4803-2e50-4be5-83ee-4ddc0457af59_1600w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 transition-all duration-300 check-icon bg-black text-white rounded-full p-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-serif text-xl font-medium">Volume +</h3>
<span className="text-sm font-semibold">€60</span>
</div>
<p className="text-xs text-pastel-grey leading-relaxed mb-4 flex-grow font-medium">High density hand-made fans. Maximum darkness and impact.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 mt-auto font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    130 Mins
                                </div>
</div>
</label>
</div>

<h3 className="font-serif text-2xl italic mb-6 border-b border-black/10 pb-2 text-black">Refill Sets</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="lash_style" type="radio"/>
<div className="bg-pastel-surface border border-black/10 p-6 transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black h-full">
<div className="flex justify-between items-center mb-4">
<h3 className="font-serif text-xl font-medium">2 Week Refill</h3>
<span className="text-sm font-semibold">€35</span>
</div>
<p className="text-xs text-pastel-grey leading-relaxed mb-6 font-medium">Must have at least 50% of lashes remaining. Recommended every 14 days.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    60 Mins
                                </div>
<div className="absolute top-6 right-6 opacity-0 transition-all duration-300 check-icon">
<svg fill="none" height="16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="lash_style" type="radio"/>
<div className="bg-pastel-surface border border-black/10 p-6 transition-all duration-300 hover:shadow-xl hover:border-black/30 hover:-translate-y-1 peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black h-full">
<div className="flex justify-between items-center mb-4">
<h3 className="font-serif text-xl font-medium">3 Week Refill</h3>
<span className="text-sm font-semibold">€45</span>
</div>
<p className="text-xs text-pastel-grey leading-relaxed mb-6 font-medium">Must have at least 40% of lashes remaining. Recommended every 21 days.</p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-black/50 font-semibold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    75 Mins
                                </div>
<div className="absolute top-6 right-6 opacity-0 transition-all duration-300 check-icon">
<svg fill="none" height="16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</label>
</div>
</div>

<div className="pt-12 border-t border-black/10 reveal-element delay-200">
<div className="text-center mb-10">
<span className="text-[10px] uppercase tracking-widest text-black/60 font-semibold mb-3 block">Step 02</span>
<h2 className="font-serif text-4xl tracking-tight text-black">Availability</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 bg-pastel-surface p-8 border border-black/10 shadow-sm">
<div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
<h4 className="font-serif text-xl font-medium">October 2023</h4>
<div className="flex gap-2">
<button className="p-2 hover:bg-pastel-accent rounded text-black" type="button"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-2 hover:bg-pastel-accent rounded text-black" type="button"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="grid grid-cols-7 text-center text-[10px] uppercase tracking-wider text-black/60 font-semibold mb-4">
<div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
</div>

<div className="grid grid-cols-7 gap-2 text-sm font-medium">

<div className="p-3 text-black/10">28</div><div className="p-3 text-black/10">29</div><div className="p-3 text-black/10">30</div>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">1</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">2</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">3</button>
<button className="p-3 text-black/20 line-through cursor-not-allowed" type="button">4</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">5</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">6</button>
<button className="p-3 bg-black text-white rounded-sm shadow-md" type="button">7</button> 
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">8</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">9</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">10</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">11</button>
<button className="p-3 text-black/20 line-through cursor-not-allowed" type="button">12</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">13</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">14</button>
<button className="p-3 hover:bg-pastel-accent rounded-sm text-black" type="button">15</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<h4 className="font-serif text-xl mb-6 text-black">Saturday, Oct 7th</h4>
<div className="grid grid-cols-2 gap-3">
<button className="time-slot border border-black/10 bg-white p-3 text-sm transition-colors text-center hover:border-black text-black" type="button">10:00 AM</button>
<button className="time-slot border border-black/10 bg-white p-3 text-sm transition-colors text-center hover:border-black text-black" type="button">11:30 AM</button>
<button className="time-slot selected border border-black bg-black text-white p-3 text-sm transition-colors text-center shadow-md" type="button">01:00 PM</button>
<button className="time-slot border border-black/10 bg-white p-3 text-sm transition-colors text-center hover:border-black text-black" type="button">03:30 PM</button>
</div>
</div>
<div className="mt-8 p-6 bg-pastel-bg border border-black/10 text-xs text-pastel-grey leading-relaxed rounded-sm">
<span className="font-bold text-black block mb-1">Cancellation Policy</span>
                                Please provide at least 24 hours notice for cancellations. Deposits are non-refundable for late cancellations or no-shows.
                            </div>
</div>
</div>
</div>

<div className="pt-12 border-t border-black/10 reveal-element delay-300">
<div className="text-center mb-10">
<span className="text-[10px] uppercase tracking-widest text-black/60 font-semibold mb-3 block">Step 03</span>
<h2 className="font-serif text-4xl tracking-tight text-black">Secure Booking</h2>
</div>
<div className="max-w-3xl mx-auto bg-white border border-black/10 p-8 md:p-12 relative overflow-hidden shadow-md">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-black/10 pb-12">
<div className="space-y-4">
<h4 className="font-serif text-xl mb-4 text-black">Your Details</h4>
<input className="w-full border-b border-black/10 py-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder:text-black/40 text-black" placeholder="Full Name" type="text"/>
<input className="w-full border-b border-black/10 py-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder:text-black/40 text-black" placeholder="Email Address" type="email"/>
<input className="w-full border-b border-black/10 py-2 text-sm outline-none focus:border-black transition-colors bg-transparent placeholder:text-black/40 text-black" placeholder="Phone Number" type="tel"/>
</div>
<div>
<h4 className="font-serif text-xl mb-4 text-black">Payment</h4>
<div className="bg-pastel-bg p-6 space-y-4 border border-black/10 rounded-sm">
<div className="flex justify-between text-sm font-medium text-black">
<span>Full Set (Deposit)</span>
<span>€20.00</span>
</div>
<div className="flex justify-between text-xs text-black/60">
<span>Due at appointment</span>
<span>€30.00</span>
</div>
<div className="pt-4 border-t border-black/10 flex justify-between font-bold text-black">
<span>Total Deposit</span>
<span>€20.00</span>
</div>
</div>
<div className="mt-6 flex items-center gap-3 border border-black/10 p-3 rounded-sm bg-white">
<svg className="text-black/50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<input className="w-full bg-transparent text-sm outline-none placeholder:text-black/40 text-black" placeholder="Card Number" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3 mt-3">
<input className="w-full border border-black/10 p-3 text-sm outline-none bg-white placeholder:text-black/40 text-black rounded-sm" placeholder="MM/YY" type="text"/>
<input className="w-full border border-black/10 p-3 text-sm outline-none bg-white placeholder:text-black/40 text-black rounded-sm" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<button className="w-full bg-black text-white font-medium uppercase tracking-widest text-xs py-5 hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2 group shadow-lg" type="button">
                            Pay €20.00 &amp; Confirm
                            <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[10px] text-black/50 text-center mt-4">Secured by Stripe. By booking you agree to our policies.</p>
</div>
</div>
</form>
</div>
</section>

<section className="relative h-[600px] border-t border-black/10" id="location">
<div className="absolute inset-0 z-0">

<iframe allowfullscreen="" className="opacity-80" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76208.76105436345!2d-6.385786523917454!3d53.32439167232338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1709923847231!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center md:justify-end md:pr-24">
<div className="bg-white p-10 max-w-sm pointer-events-auto border border-black/10 shadow-2xl reveal-element">
<div className="flex items-start justify-between mb-8">
<div>
<span className="text-[10px] uppercase tracking-widest text-black/60 font-semibold mb-2 block">Studio</span>
<h3 className="font-serif text-3xl text-black">Grafton St.</h3>
<p className="font-serif text-3xl italic text-black/30">Dublin 02</p>
</div>
<svg className="text-black" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="space-y-6 text-sm text-pastel-grey font-medium">
<div className="flex gap-4 items-center">
<span className="w-2 h-2 bg-black rounded-full"></span>
<p>Floor 2, Suite 4 (Buzz: 104)</p>
</div>
<div className="flex gap-4 items-center">
<span className="w-2 h-2 bg-pink-300 rounded-full"></span>
<p>lia@lialashes.ie</p>
</div>
<div className="flex gap-4 items-center">
<span className="w-2 h-2 bg-pink-300 rounded-full"></span>
<p>+353 87 123 4567</p>
</div>
</div>
<a className="block mt-8 text-xs font-bold uppercase tracking-widest border-b-2 border-black/20 pb-1 hover:border-black transition-colors w-max text-black" href="https://maps.google.com" target="_blank">Get Directions</a>
</div>
</div>
</section>

<footer className="bg-black text-white py-20 px-6">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<h4 className="font-serif text-4xl mb-4 italic text-white">Lia Lashes.</h4>
<p className="text-white/60 text-xs max-w-xs leading-relaxed font-medium">
                    Independent artistry focused on health, longevity, and bespoke design. Dublin based.
                </p>
</div>
<div className="flex gap-16 text-xs uppercase tracking-widest text-white/50 font-semibold">
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">TikTok</a></li>
</ul>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="max-w-screen-xl mx-auto mt-20 pt-8 border-t border-white/20 text-[10px] text-white/40 uppercase tracking-widest flex justify-between font-semibold">
<span>© 2024 Lia Lashes</span>
<span>Dublin, Ireland</span>
</div>
</footer>


    </>
  );
}
