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



        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
<button className="pointer-events-auto bg-red-600 hover:bg-red-700 text-white text-xs font-medium tracking-widest uppercase px-6 py-2 rounded-full transition-colors duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            Menu
        </button>
<div className="pointer-events-auto flex items-center gap-3 mix-blend-difference">
<span className="text-white text-sm tracking-[0.2em] font-medium uppercase border-b border-red-600 pb-1">
                JR CHAN
            </span>
</div>
</nav>

<header className="flex flex-col overflow-hidden w-full h-screen relative items-center justify-center">

<div className="absolute inset-0 z-0">

<img alt="DJ Background" className="w-full h-full object-cover opacity-40 scale-105 motion-safe:animate-pulse" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{animationDuration: '10s'}}/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="bg-gradient-to-r from-black/90 via-transparent to-black/90 absolute top-0 right-0 bottom-0 left-0"></div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] z-10 pointer-events-none select-none flex items-center justify-center">
<img alt="JR Chan Logo Background" className="w-full h-full object-contain opacity-30 blur-[60px] md:blur-[80px] mix-blend-screen animate-pulse duration-[8s] scale-110" src="https://placehold.co/800x800/000000/DC2626?text=JR+CHAN+LOGO"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-overlay"></div>
</div>

<div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
<h1 className="md:text-8xl lg:text-9xl uppercase inline-block text-6xl font-semibold text-white tracking-tighter mb-6 relative drop-shadow-2xl [--fx-filter:blur(10px)_liquid-glass(2.5,10)_saturate(1.25)_noise(0.5,1,0)]">
                DJ JR CHAN
                <div className="absolute top-1/2 left-0 w-full h-2 bg-red-600 -translate-y-1/2 mix-blend-multiply opacity-80 rotate-[-2deg] scale-110"></div>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 tracking-wide max-w-2xl mr-auto ml-auto drop-shadow-lg" style={{}}>Smooth RnB and timeless 80’s music.<br/>Creating atmospheric journeys for the soul till sunrise.</p>
<div className="flex flex-col sm:flex-row gap-6 mt-12 gap-x-6 gap-y-6 items-center justify-center">
<a className="group relative px-8 py-3 bg-neutral-100 text-black text-sm font-medium tracking-widest uppercase overflow-hidden" href="#schedule">
<span className="relative z-10 group-hover:text-red-600 transition-colors">See Tour Dates</span>
<div className="absolute inset-0 bg-white transform scale-x-100 group-hover:scale-x-0 transition-transform origin-right duration-500 ease-out"></div>
<div className="absolute inset-0 bg-black border border-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
</a>
<a className="flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-red-500 transition-colors" href="#music">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Latest Mix
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-20">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<svg className="lucide lucide-arrow-down w-4 h-4 text-red-500" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="py-24 px-6 bg-black relative z-10" id="schedule">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-6">
<div>
<span className="text-red-600 text-xs tracking-[0.3em] uppercase font-medium mb-2 block">Incoming</span>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">Gig Schedule</h2>
</div>
<p className="text-neutral-500 text-lg mt-4 md:mt-0 text-right">
                    Join the movement.<br/>Locations &amp; Tickets below.
                </p>
</div>
<div className="flex flex-col border-t border-neutral-900">

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-neutral-900 items-center hover:bg-neutral-900/30 transition-all duration-500 px-4">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="md:col-span-2 flex flex-col">
<span className="uppercase text-xs text-neutral-500 tracking-widest" style={{}}>dec 12, 2025</span>
<span className="text-2xl text-white font-medium">14</span>
</div>
<div className="md:col-span-4">
<h3 className="group-hover:text-red-500 transition-colors text-xl font-medium text-white tracking-tight" style={{}}>J.E.M Food Stop &amp; Bar</h3>
<span className="text-base text-neutral-500" style={{}}>feat. P.Diddy</span>
</div>
<div className="md:col-span-4 flex items-center gap-2 text-neutral-400">
<svg className="lucide lucide-map-pin w-4 h-4 text-red-900" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-lg" style={{}}>Toma Saco, CDO</span>
</div>
<div className="md:col-span-2 flex justify-start md:justify-end">
<button className="px-6 py-2 border border-neutral-700 text-xs uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-colors">
                            Tickets
                        </button>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-neutral-900 items-center hover:bg-neutral-900/30 transition-all duration-500 px-4">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="md:col-span-2 flex flex-col">
<span className="uppercase text-xs text-neutral-500 tracking-widest" style={{}}>dec 13, 2025</span>
<span className="text-2xl text-white font-medium">22</span>
</div>
<div className="md:col-span-4">
<h3 className="group-hover:text-red-500 transition-colors text-xl font-medium text-white tracking-tight" style={{}}>Traffik</h3>
<span className="text-base text-neutral-500" style={{}}>Bebe Girls</span>
</div>
<div className="md:col-span-4 flex items-center gap-2 text-neutral-400">
<svg className="lucide lucide-map-pin w-4 h-4 text-red-900" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-lg" style={{}}>Velez, CDO</span>
</div>
<div className="md:col-span-2 flex justify-start md:justify-end">
<button className="px-6 py-2 border border-neutral-700 text-xs uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-colors">
                            Tickets
                        </button>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-neutral-900 items-center hover:bg-neutral-900/30 transition-all duration-500 px-4">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="md:col-span-2 flex flex-col">
<span className="uppercase text-xs text-neutral-500 tracking-widest" style={{}}>Dec 14, 2025</span>
<span className="text-2xl text-white font-medium">05</span>
</div>
<div className="md:col-span-4">
<h3 className="group-hover:text-red-500 transition-colors text-xl font-medium text-white tracking-tight" style={{}}>Badabing Club</h3>
<span className="text-base text-neutral-500" style={{}}>Bukaka Girls</span>
</div>
<div className="md:col-span-4 flex items-center gap-2 text-neutral-400">
<svg className="lucide lucide-map-pin w-4 h-4 text-red-900" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-lg" style={{}}>Capistrano Sts.</span>
</div>
<div className="md:col-span-2 flex justify-start md:justify-end">
<button className="px-6 py-2 border border-neutral-700 text-xs uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-colors">
                            Sold Out
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-neutral-900 relative z-10" id="music">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<span className="text-red-600 text-xs tracking-[0.3em] uppercase font-medium mb-6 block">Latest Sounds</span>
<div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<svg className="lucide lucide-music text-neutral-800 w-12 h-12" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<div className="flex gap-6 items-start mb-8">
<div className="w-32 h-32 bg-red-900 shrink-0 relative overflow-hidden shadow-2xl">
<img alt="Album Art" className="w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-red-600/20"></div>
</div>
<div>
<h3 className="text-white text-2xl font-medium tracking-tight mb-1">Deep State</h3>
<p className="text-neutral-400 text-sm mb-4">EP • 2024</p>
<button className="bg-white text-black text-xs font-bold uppercase px-4 py-2 rounded tracking-wider hover:bg-neutral-200 transition">
                                Listen Now
                            </button>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between text-sm group/track cursor-pointer hover:bg-neutral-800/50 p-2 rounded transition">
<div className="flex items-center gap-4">
<span className="text-neutral-600 font-mono">01</span>
<div className="flex flex-col">
<span className="text-neutral-300 group-hover/track:text-white">Midnight Echoes</span>
<span className="text-neutral-600 text-xs">Original Mix</span>
</div>
</div>
<span className="text-neutral-600">07:24</span>
</div>
<div className="flex items-center justify-between text-sm group/track cursor-pointer hover:bg-neutral-800/50 p-2 rounded transition">
<div className="flex items-center gap-4">
<span className="text-neutral-600 font-mono">02</span>
<div className="flex flex-col">
<span className="text-neutral-300 group-hover/track:text-white">Red Sky</span>
<span className="text-neutral-600 text-xs">Club Edit</span>
</div>
</div>
<span className="text-neutral-600">06:45</span>
</div>
<div className="flex items-center justify-between text-sm group/track cursor-pointer hover:bg-neutral-800/50 p-2 rounded transition">
<div className="flex items-center gap-4">
<span className="text-neutral-600 font-mono">03</span>
<div className="flex flex-col">
<span className="text-neutral-300 group-hover/track:text-white">Resonance</span>
<span className="text-neutral-600 text-xs">JR Chan Remix</span>
</div>
</div>
<span className="text-neutral-600">08:12</span>
</div>
</div>
</div>
</div>

<div className="">
<span className="text-red-600 text-xs tracking-[0.3em] uppercase font-medium mb-6 block">Atmosphere</span>
<div className="grid grid-cols-2 gap-4 h-full">
<div className="relative overflow-hidden group h-64 md:h-auto">
<img alt="Crowd" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
</div>
<div className="relative overflow-hidden group h-64 md:h-auto">
<img alt="DJ Deck" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition"></div>
</div>
<div className="col-span-2 relative overflow-hidden group h-64 md:h-auto">
<img alt="Party" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
<span className="bg-black/80 backdrop-blur text-white px-4 py-2 text-xs uppercase tracking-widest border border-neutral-700">View Gallery</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-black pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/20 skew-x-12 pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative">
<div className="absolute -inset-4 border border-red-900/30 rounded-full blur-2xl"></div>
<div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur px-6 py-4 border-l-2 border-red-600">
<p className="text-white text-sm font-medium">JR CHAN</p>
<p className="text-neutral-500 text-xs uppercase tracking-wider">Producer / DJ</p>
</div><img alt="JR Chan Portrait" className="aspect-[4/5] hover:grayscale-0 transition duration-700 z-10 w-full object-cover relative shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3944b59-714a-4560-9e23-3bfceb33cb46_1600w.png"/>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight mb-8">
                    CRAFTING THE 
                    <span className="line-through decoration-red-600 decoration-2 text-neutral-700">NOISE</span> <span className="text-red-500">SOUND</span>.
                </h2>
<div className="space-y-6 text-lg text-neutral-400 font-light">
<p className="" style={{}}>Since 2000, JR Chan has been a rising force shaped by emotional melodies and RnB rhythms. From the very beginning, his unique approach to music set him apart in the underground scene, crafting journeys rather than just tracks.</p>
<p className="">
                        With releases on top-tier labels like SUDBEAT and The Soundgarden, JR Chan's performances are not just sets — they are stories filled with unreleased gems and emotionally charged grooves.
                    </p>
</div>
<div className="mt-10 flex gap-4">
<a className="w-12 h-12 flex items-center justify-center border border-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors duration-300" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-12 h-12 flex items-center justify-center border border-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors duration-300" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-12 h-12 flex items-center justify-center border border-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors duration-300" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-neutral-900 z-10 relative">
<div className="max-w-6xl mx-auto glass-panel border border-neutral-800 rounded-2xl p-8 md:p-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="flex flex-col justify-between">
<div className="">
<h2 className="text-3xl text-white font-medium tracking-tight mb-2">CONTACT INFORMATION</h2>
<p className="text-neutral-500 text-sm mb-10">Fill up the post and our team will get back to you within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 text-red-500">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="text-lg" style={{}}>0917-578 7390</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 text-red-500">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="text-lg" style={{}}>booking.jrchan@gmail.com</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 text-red-500">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-lg" style={{}}>Cagayan de Oro City</span>
</div>
</div>
</div>
<div className="mt-12">
<img alt="Footer vibe" className="w-full h-40 object-cover rounded-lg opacity-40 mix-blend-luminosity border border-neutral-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>

<form className="space-y-8 mt-4 md:mt-0">
<div className="grid grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-red-500 transition-colors">First Name</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-red-500 transition-colors">Last Name</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-red-500 transition-colors">Email</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-red-500 transition-colors">Phone</label>
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-red-500 transition-colors">Message</label>
<textarea className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" rows="3"></textarea>
</div>
<div className="flex justify-end pt-4">
<button className="bg-white text-black text-xs font-bold uppercase px-8 py-3 tracking-widest hover:bg-red-600 hover:text-white transition-colors duration-300" type="submit">
                            Send Message
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-neutral-900 bg-black text-center md:text-left z-10 relative">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 DJ JR CHAN - All Rights Reserved.</p>
<p className="mt-2 md:mt-0 uppercase tracking-widest">Designed by Linear Style</p>
</div>
</footer>


    </>
  );
}
