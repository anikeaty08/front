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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Search Tabs Toggle
            const tabBtns = document.querySelectorAll('.tab-btn');
            const forms = document.querySelectorAll('.search-form');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    tabBtns.forEach(b => {
                        b.classList.remove('tab-active');
                        b.classList.add('text-zinc-500');
                    });
                    forms.forEach(f => f.classList.add('hidden'));

                    btn.classList.add('tab-active');
                    btn.classList.remove('text-zinc-500');
                    
                    const targetId = btn.getAttribute('data-target');
                    const targetForm = document.getElementById(targetId);
                    if(targetForm) {
                        targetForm.classList.remove('hidden');
                    }
                });
            });

            // 2. Smooth Scroll Reveal
            const revealElements = document.querySelectorAll('.reveal');
            if ('IntersectionObserver' in window) {
                const revealObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

                revealElements.forEach(el => revealObserver.observe(el));
            } else {
                revealElements.forEach(el => el.classList.add('active'));
            }

            // 3. Spotlight Card Hover Effect (Mouse Tracking)
            document.querySelectorAll('.spotlight-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // 4. Header Blur on Scroll
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('border-white/10', 'bg-black/80');
                    header.classList.remove('border-white/5', 'bg-black/50');
                } else {
                    header.classList.remove('border-white/10', 'bg-black/80');
                    header.classList.add('border-white/5', 'bg-black/50');
                }
            }, { passive: true });
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="glow-orb bg-cyan-500 w-[600px] h-[600px] top-[-20%] left-[-10%]"></div>
<div className="glow-orb bg-amber-500 w-[500px] h-[500px] bottom-[-10%] right-[-10%] opacity-10"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a aria-label="WAYVO Home" className="flex items-center gap-2 group z-10" href="#">
<span className="font-display font-semibold text-xl tracking-tighter text-white">WAYVO</span>
</a>

<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#hotels">Hotels</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#flights">Flights</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#trains">Trains</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#packages">Packages</a>
</nav>

<div className="flex items-center gap-6 z-10">
<span className="hidden sm:block text-xs font-medium text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">USD</span>
<a className="hidden sm:block text-sm font-medium text-white hover:text-cyan-400 transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors" href="#">Sign Up</a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-32 overflow-hidden text-center">

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-50"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 mt-12">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 reveal backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-zinc-300 text-xs font-medium tracking-wide">Introducing WAYVO Pro</span>
<iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>

<h1 className="font-display font-semibold text-5xl sm:text-7xl md:text-8xl leading-tight tracking-tighter text-white mb-6 reveal delay-100">
                    Travel without <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">limits.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed reveal delay-200 font-light">
                    An ultra-refined booking experience. Discover curated hotels, seamless flights, and exclusive deals crafted for the modern explorer.
                </p>
</div>

<div className="relative z-20 w-full max-w-4xl px-4 reveal delay-300 animate-float">
<div className="bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-3 shadow-2xl">

<div className="flex items-center gap-2 mb-3 px-3">
<button className="tab-btn tab-active text-sm font-medium px-4 py-1.5 border-b-2 border-transparent transition-all flex items-center gap-2" data-target="form-hotels">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> Stays
                        </button>
<button className="tab-btn text-zinc-500 hover:text-zinc-300 text-sm font-medium px-4 py-1.5 border-b-2 border-transparent transition-all flex items-center gap-2" data-target="form-flights">
<iconify-icon icon="solar:plane-linear" width="16"></iconify-icon> Flights
                        </button>
</div>

<div className="bg-[#111] border border-white/5 rounded-3xl flex flex-col md:flex-row relative overflow-hidden">

<form className="search-form flex flex-col md:flex-row w-full w-full" id="form-hotels">

<div className="flex-1 p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/5 group hover:bg-white/[0.02] transition-colors cursor-text">
<label className="block text-xs text-zinc-500 font-medium mb-1">Where</label>
<input className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-700 font-medium" placeholder="Search destinations" type="text"/>
</div>

<div className="flex-1 p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/5 group hover:bg-white/[0.02] transition-colors cursor-pointer">
<label className="block text-xs text-zinc-500 font-medium mb-1">When</label>
<input className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-700 font-medium cursor-pointer" placeholder="Add dates" readonly="" type="text"/>
</div>

<div className="flex-1 p-4 md:p-5 group hover:bg-white/[0.02] transition-colors cursor-pointer flex justify-between items-center">
<div>
<label className="block text-xs text-zinc-500 font-medium mb-1">Who</label>
<button className="w-full text-left bg-transparent text-sm text-white focus:outline-none font-medium" type="button">2 guests</button>
</div>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 shrink-0" type="submit">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
</form>

<form className="search-form hidden flex flex-col md:flex-row w-full w-full" id="form-flights">
<div className="flex-1 p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/5">
<label className="block text-xs text-zinc-500 font-medium mb-1">From</label>
<input className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-700" placeholder="Origin city" type="text"/>
</div>
<div className="flex-1 p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/5">
<label className="block text-xs text-zinc-500 font-medium mb-1">To</label>
<input className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-700" placeholder="Destination" type="text"/>
</div>
<div className="flex-1 p-4 md:p-5 flex justify-between items-center">
<div>
<label className="block text-xs text-zinc-500 font-medium mb-1">Dates</label>
<input className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-700 cursor-pointer" placeholder="Select dates" readonly="" type="text"/>
</div>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shrink-0" type="submit">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
<div className="mb-16 reveal">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter text-white mb-4">Engineered for<br/>the modern traveler.</h2>
<p className="text-zinc-500 text-base max-w-md">We rebuilt the booking architecture from the ground up to provide unprecedented speed, clarity, and value.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="spotlight-card rounded-3xl p-8 md:col-span-2 reveal flex flex-col justify-between group">
<div className="relative z-10">
<iconify-icon className="text-cyan-400 mb-4" icon="solar:bolt-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-2xl text-white mb-2 tracking-tight">Real-time Price Engine</h3>
<p className="text-zinc-400 text-sm max-w-sm leading-relaxed">Our algorithm scans thousands of airlines and hotel databases in milliseconds, ensuring you secure the absolute lowest available rate instantly.</p>
</div>

<div className="relative z-10 flex items-end gap-1.5 h-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-full bg-white/5 rounded-t-sm h-[20%]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-cyan-500/80 rounded-t-sm h-[90%] shadow-[0_0_20px_rgba(0,212,255,0.4)] relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-cyan-300">Found</span>
</div>
<div className="w-full bg-white/5 rounded-t-sm h-[60%]"></div>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 reveal delay-100 flex flex-col justify-between">
<div className="relative z-10">
<iconify-icon className="text-white mb-4" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight">Zero Hidden Fees</h3>
<p className="text-zinc-400 text-sm leading-relaxed">What you see is exactly what you pay. No last-minute surprises at checkout.</p>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 reveal delay-100 flex flex-col justify-between">
<div className="relative z-10">
<iconify-icon className="text-white mb-4" icon="solar:smartphone-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight">Digital Boarding</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sync all your itineraries directly to your wallet. Travel completely paperless.</p>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 md:col-span-2 overflow-hidden reveal delay-200 relative">
<div className="relative z-10 max-w-sm">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-semibold mb-4 border border-amber-500/20">
<iconify-icon icon="solar:star-bold"></iconify-icon> Highly Rated
                        </div>
<h3 className="font-display font-semibold text-2xl text-white mb-2 tracking-tight">24/7 Concierge</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Connect with real human experts in seconds, not hours. Whether it's a flight change or a dinner recommendation.</p>
</div>

<iconify-icon className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64 object-cover rotate-12" icon="solar:headphones-round-sound-linear" width="250"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end reveal">
<div>
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tighter text-white mb-2">Curated Escapes.</h2>
<p className="text-zinc-500 text-sm">Hand-selected properties in the world's most sought-after locations.</p>
</div>
<div className="hidden md:flex gap-3">
<button aria-label="Scroll left" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="document.getElementById('dest-scroll').scrollBy({left: -400, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Scroll right" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="document.getElementById('dest-scroll').scrollBy({left: 400, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-6 max-w-7xl mx-auto hide-scrollbar reveal delay-100" id="dest-scroll">

<article className="snap-start shrink-0 w-[300px] md:w-[380px] h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/5">
<img alt="Kyoto, Japan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 image-mask-gradient opacity-90"></div>
<div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Kyoto, Japan
                    </div>
<div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="font-display font-semibold text-2xl text-white mb-1 tracking-tight">Aman Kyoto</h3>
<p className="text-sm text-zinc-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Hidden in a secret garden at the foot of Mount Hidari Daimonje.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<p className="text-white text-sm font-semibold">From $850<span className="text-xs text-zinc-500 font-normal"> / night</span></p>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[380px] h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/5">
<img alt="Paris, France" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 image-mask-gradient opacity-90"></div>
<div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Paris, France
                    </div>
<div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="font-display font-semibold text-2xl text-white mb-1 tracking-tight">Le Meurice</h3>
<p className="text-sm text-zinc-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">The original palace hotel in the heart of historic Paris.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<p className="text-white text-sm font-semibold">From $1,200<span className="text-xs text-zinc-500 font-normal"> / night</span></p>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[380px] h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/5">
<img alt="Dubai, UAE" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 image-mask-gradient opacity-90"></div>
<div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Dubai, UAE
                    </div>
<div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="font-display font-semibold text-2xl text-white mb-1 tracking-tight">Burj Al Arab</h3>
<p className="text-sm text-zinc-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Unparalleled luxury in a global architectural icon.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<p className="text-white text-sm font-semibold">From $1,500<span className="text-xs text-zinc-500 font-normal"> / night</span></p>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</article>

<article className="snap-start shrink-0 w-[300px] md:w-[380px] h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/5">
<img alt="Swiss Alps" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 image-mask-gradient opacity-90"></div>
<div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Zermatt, Switzerland
                    </div>
<div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="font-display font-semibold text-2xl text-white mb-1 tracking-tight">The Omnia</h3>
<p className="text-sm text-zinc-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">A contemporary lodge perched high above Zermatt.</p>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<p className="text-white text-sm font-semibold">From $650<span className="text-xs text-zinc-500 font-normal"> / night</span></p>
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</article>
</div>
</section>

<section className="border-y border-white/5 bg-[#080808] py-8 overflow-hidden flex items-center gap-6">
<div className="flex items-center gap-2 pl-6 md:pl-12 shrink-0 z-10 bg-[#080808] pr-4">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-semibold text-white tracking-widest uppercase">Live Deals</span>
</div>

<div className="flex overflow-hidden relative w-full mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)">
<div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap gap-10">
<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">JFK</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">LHR</span>
<span className="text-white font-semibold ml-2">$389</span>
</div>
<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">LAX</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">NRT</span>
<span className="text-white font-semibold ml-2">$540</span>
</div>
<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">MIA</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">BOG</span>
<span className="text-white font-semibold ml-2">$199</span>
</div>
<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">SFO</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">CDG</span>
<span className="text-white font-semibold ml-2">$420</span>
</div>

<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">JFK</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">LHR</span>
<span className="text-white font-semibold ml-2">$389</span>
</div>
<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">LAX</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">NRT</span>
<span className="text-white font-semibold ml-2">$540</span>
</div>
<div className="inline-flex items-center gap-3 text-sm">
<span className="text-zinc-500">MIA</span> <iconify-icon className="text-zinc-700" icon="solar:plane-linear"></iconify-icon> <span className="text-zinc-500">BOG</span>
<span className="text-white font-semibold ml-2">$199</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden bg-black border border-white/10 p-10 md:p-16 text-center reveal spotlight-card">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter text-white mb-4">Access the unlisted.</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-10">Join a private network of travelers. Receive exclusive, member-only pricing and early access to curated flash sales.</p>
<form aria-label="Newsletter signup" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<label className="sr-only" htmlFor="email">Email address</label>
<input className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors text-white placeholder-zinc-600" id="email" placeholder="name@example.com" required="" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">Request Access</button>
</form>
<p className="text-xs text-zinc-600 mt-6">Secure. No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="font-display font-semibold text-2xl tracking-tighter text-white mb-4 inline-block" href="#">WAYVO</a>
<p className="text-zinc-500 text-sm mb-6 max-w-xs leading-relaxed">Redefining modern travel architecture with uncompromising design and transparent algorithms.</p>
</div>

<div>
<h4 className="font-semibold text-sm text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Stays</a></li>
<li><a className="hover:text-white transition-colors" href="#">Flights</a></li>
<li><a className="hover:text-white transition-colors" href="#">Experiences</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wayvo Pro</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 WAYVO Inc. All rights reserved.</p>
<div className="flex gap-4 text-zinc-600">
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#"><iconify-icon icon="pajamas:twitter" width="16"></iconify-icon></a>
<a aria-label="GitHub" className="hover:text-white transition-colors" href="#"><iconify-icon icon="pajamas:github" width="16"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
