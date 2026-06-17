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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Navbar effect on scroll
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-sm');
                    nav.classList.replace('bg-white/90', 'bg-white/95');
                } else {
                    nav.classList.remove('shadow-sm');
                    nav.classList.replace('bg-white/95', 'bg-white/90');
                }
            });

            // Hero Entrance Animation
            const heroTl = gsap.timeline({delay: 0.2});
            heroTl.to(".hero-search-bar", {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // ScrollTrigger Animations for sections
            gsap.utils.toArray('.gsap-section').forEach(section => {
                gsap.fromTo(section, 
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
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
      

<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
<a className="bg-zinc-900 text-white flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300" href="https://wa.me/919130006999" target="_blank">
<iconify-icon className="text-xl md:text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>

<nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out backdrop-blur-md border-b border-zinc-200 bg-white/90" id="navbar">
<div className="w-full max-w-7xl mx-auto px-4 md:px-8 min-h-[70px] md:h-20 flex flex-col md:flex-row items-center justify-between py-3 md:py-0 gap-3 md:gap-0">

<div className="flex flex-col items-center justify-center w-full md:w-1/3 order-1 md:order-2 shrink-0">
<a className="font-sans text-lg md:text-2xl font-semibold tracking-tight text-black text-center leading-none" href="#">
                    VM LUXURY PG
                </a>
<span className="text-[10px] md:text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium hidden sm:block">Kharadi, Pune</span>
</div>

<div className="flex md:justify-start md:gap-8 lg:gap-12 md:w-1/3 order-2 md:order-1 flex-row w-full gap-x-4 md:gap-x-6 items-center justify-center">
<a className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#amenities">Amenities</a>
<a className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#rooms">Rooms</a>
<a className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300" href="#location">Location</a>
</div>

<div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 w-full md:w-1/3 order-3 md:order-3 hidden md:flex">
<a className="text-sm font-medium text-black hover:text-zinc-500 transition-colors duration-300 flex items-center gap-2" href="tel:09130006999">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 09130006999
                </a>
<a className="bg-black border border-black px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-white hover:bg-transparent hover:text-black transition-all duration-300 whitespace-nowrap" href="#book">
                    Book Visit
                </a>
</div>
</div>
</nav>

<header className="min-h-[100svh] md:min-h-[800px] flex flex-col pt-[100px] md:pt-0 md:pb-24 md:px-12 overflow-hidden bg-zinc-900 w-full px-4 pb-16 relative justify-end">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Premium PG Room" className="w-full h-full object-cover hero-bg-img opacity-80" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" style={{transform: 'scale(1.05)'}}/>
<div className="absolute inset-0 bg-zinc-900/50 md:bg-zinc-900/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 md:via-zinc-900/40 to-transparent"></div>
</div>

<div className="absolute top-28 md:top-32 left-4 md:left-12 z-10 w-full max-w-[1400px] mx-auto hidden md:block">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5">
<iconify-icon className="text-yellow-400" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs uppercase font-medium text-white tracking-widest">
                    4.7 Rating (70+ Reviews)
                </span>
</div>
</div>

<div className="z-10 w-full max-w-[1400px] mr-auto ml-auto relative flex flex-col justify-end h-full">
<div className="max-w-4xl mt-auto">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.1] mb-4 md:mb-6 tracking-tight text-white drop-shadow-sm">
                    Premium PG Near EON IT Park.
                    <span className="block text-white/80 font-normal mt-2 md:mt-0">Feel at home from day one.</span>
</h1>
<p className="text-base sm:text-lg md:text-xl text-white/80 font-light mb-8 md:mb-10 max-w-2xl leading-relaxed">
                    Fully furnished luxury rooms, home-style hygienic food, and a safe environment trusted by working professionals and students in Kharadi.
                </p>

<div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 hero-search-bar opacity-0 shadow-2xl p-5 md:p-8 relative" id="book">
<div className="absolute -top-3 left-4 md:left-6 bg-white text-black px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                        Limited Rooms Available
                    </div>
<form className="flex flex-col md:flex-row gap-5 md:gap-6 items-end mt-2">
<div className="flex-1 w-full">
<label className="block text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-medium mb-1.5 md:mb-2">Your Name</label>
<input className="w-full bg-transparent border-b border-white/40 py-2.5 md:py-2 text-white placeholder:text-white/50 font-normal focus:outline-none focus:border-white transition-colors rounded-none appearance-none" placeholder="John Doe" type="text"/>
</div>
<div className="flex-1 w-full relative">
<label className="block text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-medium mb-1.5 md:mb-2">Phone Number</label>
<input className="w-full bg-transparent border-b border-white/40 py-2.5 md:py-2 text-white placeholder:text-white/50 font-normal focus:outline-none focus:border-white transition-colors rounded-none appearance-none" placeholder="+91" type="tel"/>
</div>
<div className="flex-1 w-full relative">
<label className="block text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-medium mb-1.5 md:mb-2">Move-in Date</label>
<input className="w-full bg-transparent border-b border-white/40 py-2.5 md:py-2 text-white font-normal focus:outline-none focus:border-white transition-colors rounded-none appearance-none" type="date"/>
</div>
<div className="w-full md:w-auto mt-2 md:mt-0 flex gap-4">
<button className="w-full md:w-auto bg-white text-black border border-white px-8 py-3.5 md:py-3 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                                Inquire Now
                            </button>
</div>
</form>
<div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-white/20 flex flex-wrap items-center gap-4 md:gap-6">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70 font-medium w-full sm:w-auto hidden sm:block">Or connect directly:</span>
<a className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-zinc-300 transition-colors font-medium" href="tel:09130006999">
<iconify-icon className="text-base md:text-lg" icon="solar:phone-linear"></iconify-icon> Call 09130006999
                        </a>
<a className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-green-400 transition-colors font-medium" href="https://wa.me/919130006999" target="_blank">
<iconify-icon className="text-base md:text-lg" icon="solar:chat-round-line-linear"></iconify-icon> WhatsApp Us
                        </a>
<a className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-zinc-300 transition-colors font-medium" href="#location">
<iconify-icon className="text-base md:text-lg" icon="solar:map-point-linear"></iconify-icon> Directions
                        </a>
</div>
</div>
</div>
</div>
</header>

<div className="bg-zinc-900 py-3 md:py-4 overflow-hidden marquee-container flex items-center border-t border-white/10 relative z-20">
<div className="marquee-track flex gap-8 md:gap-20 items-center text-[10px] md:text-xs uppercase tracking-widest font-medium text-white/80 whitespace-nowrap">
<span className="flex items-center gap-2"><iconify-icon className="text-yellow-400" icon="solar:star-fall-linear"></iconify-icon> 4.7 Google Rating</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>Near EON IT Park &amp; WTC</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>Premium Home-Style Food</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>24/7 Security</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>Long-term Stay Friendly</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>

<span className="flex items-center gap-2"><iconify-icon className="text-yellow-400" icon="solar:star-fall-linear"></iconify-icon> 4.7 Google Rating</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>Near EON IT Park &amp; WTC</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>Premium Home-Style Food</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>24/7 Security</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
<span>Long-term Stay Friendly</span>
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
</div>
</div>

<section className="pt-16 md:pt-32 pb-16 md:pb-32 px-4 md:px-12 max-w-[1400px] mx-auto gsap-section bg-zinc-50" id="amenities">
<div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
<div className="w-full md:w-1/4 pt-2 border-t border-zinc-300">
<span className="block text-[10px] md:text-xs uppercase tracking-widest mt-4 text-zinc-600 font-medium">
                    01 The VM Advantage
                </span>
</div>
<div className="w-full md:w-3/4">
<h2 className="text-2xl sm:text-3xl md:text-5xl font-sans leading-tight mb-8 md:mb-12 font-medium tracking-tight text-zinc-900 max-w-3xl">
                    Unmatched comfort. A safe, homely environment designed for professionals.
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">

<div className="flex gap-3 md:gap-4 items-start">
<div className="mt-1 w-8 h-8 md:w-10 md:h-10 border border-zinc-300 rounded-full flex items-center justify-center shrink-0 bg-white">
<iconify-icon className="text-lg md:text-xl text-zinc-700" icon="solar:walking-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm md:text-base font-semibold text-zinc-900 mb-1 md:mb-2">Prime IT Hub Location</h4>
<p className="text-xs md:text-sm text-zinc-600 font-light leading-relaxed">Walking distance from EON IT Park and World Trade Center (WTC). Save hours on your daily commute.</p>
</div>
</div>

<div className="flex gap-3 md:gap-4 items-start">
<div className="mt-1 w-8 h-8 md:w-10 md:h-10 border border-zinc-300 rounded-full flex items-center justify-center shrink-0 bg-white">
<iconify-icon className="text-lg md:text-xl text-zinc-700" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm md:text-base font-semibold text-zinc-900 mb-1 md:mb-2">Quality Home-Style Food</h4>
<p className="text-xs md:text-sm text-zinc-600 font-light leading-relaxed">We serve healthy, hygienic, and delicious meals daily. Our residents love the food quality.</p>
</div>
</div>

<div className="flex gap-3 md:gap-4 items-start">
<div className="mt-1 w-8 h-8 md:w-10 md:h-10 border border-zinc-300 rounded-full flex items-center justify-center shrink-0 bg-white">
<iconify-icon className="text-lg md:text-xl text-zinc-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm md:text-base font-semibold text-zinc-900 mb-1 md:mb-2">Safe &amp; Secure</h4>
<p className="text-xs md:text-sm text-zinc-600 font-light leading-relaxed">24/7 security, CCTV surveillance, and a respectful community ensure you feel safe at all times.</p>
</div>
</div>

<div className="flex gap-3 md:gap-4 items-start">
<div className="mt-1 w-8 h-8 md:w-10 md:h-10 border border-zinc-300 rounded-full flex items-center justify-center shrink-0 bg-white">
<iconify-icon className="text-lg md:text-xl text-zinc-700" icon="solar:broom-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm md:text-base font-semibold text-zinc-900 mb-1 md:mb-2">Spotless Maintenance</h4>
<p className="text-xs md:text-sm text-zinc-600 font-light leading-relaxed">Daily housekeeping and prompt maintenance support. Cleanliness is our top priority.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-4 md:py-8">
<div className="w-full border-t border-zinc-300 relative flex justify-center">
<span className="absolute top-0 -translate-y-1/2 bg-zinc-50 px-4 text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 font-medium">
                Living Spaces
            </span>
</div>
</div>

<section className="w-full relative pt-12 md:pt-16 pb-16 md:pb-32 px-4 md:px-12 max-w-[1400px] mx-auto gsap-section bg-zinc-50" id="rooms">
<div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center flex-col-reverse md:grid">
<div className="md:col-span-7 order-2 md:order-1">
<div className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden relative border border-zinc-300 group shadow-sm bg-zinc-200">
<img alt="Furnished PG Room" className="w-full h-full object-cover transform transition duration-700 ease-out group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1598928506311-c55dd1b31443?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-10 bg-white/90 backdrop-blur-sm border border-zinc-300 px-3 md:px-4 py-1.5 md:py-2 shadow-sm">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-900 font-medium">
                            Fully Furnished Spaces
                        </span>
</div>
</div>
</div>
<div className="md:col-span-5 md:pl-12 max-w-md order-1 md:order-2">
<span className="block text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-zinc-600 font-medium">
                    02 Room Amenities
                </span>
<h3 className="font-sans text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-medium leading-tight tracking-tight text-zinc-900">
                    Everything you need, ready when you are.
                </h3>
<p className="text-zinc-600 font-light leading-relaxed mb-6 md:mb-8 text-xs md:text-sm">
                    Move in hassle-free. We provide premium amenities designed for long-term comfort, ensuring you can focus on work or studies while we handle the rest.
                </p>

<div className="border-t border-zinc-300 pt-5 md:pt-6 mt-6 md:mt-8 mb-8 md:mb-10 flex flex-col gap-3 md:gap-4">
<div className="flex items-center gap-3 md:gap-4 border-b border-zinc-200 pb-2 md:pb-3">
<iconify-icon className="text-lg md:text-xl text-zinc-800 shrink-0" icon="solar:bed-linear"></iconify-icon>
<span className="text-xs md:text-sm text-zinc-900 font-medium">Spacious Beds &amp; Premium Mattresses</span>
</div>
<div className="flex items-center gap-3 md:gap-4 border-b border-zinc-200 pb-2 md:pb-3">
<iconify-icon className="text-lg md:text-xl text-zinc-800 shrink-0" icon="solar:wi-fi-router-minimalistic-linear"></iconify-icon>
<span className="text-xs md:text-sm text-zinc-900 font-medium">High-Speed Uninterrupted WiFi</span>
</div>
<div className="flex items-center gap-3 md:gap-4 border-b border-zinc-200 pb-2 md:pb-3">
<iconify-icon className="text-lg md:text-xl text-zinc-800 shrink-0" icon="solar:plug-circle-linear"></iconify-icon>
<span className="text-xs md:text-sm text-zinc-900 font-medium">24/7 Power Backup</span>
</div>
<div className="flex items-center gap-3 md:gap-4 border-b border-zinc-200 pb-2 md:pb-3">
<iconify-icon className="text-lg md:text-xl text-zinc-800 shrink-0" icon="solar:washing-machine-linear"></iconify-icon>
<span className="text-xs md:text-sm text-zinc-900 font-medium">Washing Machine &amp; Geyser Facilities</span>
</div>
</div>
<div className="flex flex-col items-start gap-4 mt-6 md:mt-8">
<a className="text-[10px] md:text-xs uppercase tracking-widest border border-zinc-900 bg-zinc-900 px-8 py-3.5 font-semibold text-white hover:bg-zinc-800 transition-all duration-300 w-full md:w-auto text-center" href="tel:09130006999">
                        Check Availability
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 bg-zinc-900 text-white overflow-hidden gsap-section">
<div className="px-4 md:px-12 max-w-[1400px] mx-auto mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
<div>
<span className="block text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4 text-zinc-400 font-medium">
                    03 Resident Experiences
                </span>
<h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-medium tracking-tight">
                    Trusted by our community.
                </h2>
</div>
<div className="flex items-center gap-2 bg-white/10 px-4 py-2 border border-white/20 self-start md:self-auto">
<span className="text-lg md:text-xl font-semibold text-white">4.7</span>
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs text-zinc-400 ml-2">on Google</span>
</div>
</div>
<div className="flex gap-4 md:gap-6 px-4 md:px-12 pb-8 md:pb-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] max-w-[450px] shrink-0 snap-center bg-zinc-800/50 border border-zinc-700 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 text-sm mb-4 md:mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        "Amazing place with home vibes. I've been living here for over a year. The rooms are clean, and the food quality is exactly like home. The owner is very cooperative and friendly."
                    </p>
</div>
<div className="border-t border-zinc-700 pt-5 md:pt-6 flex items-center gap-3 md:gap-4">
<div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold">R</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-white">Rahul S.</h4>
<p className="text-zinc-500 text-[10px] md:text-xs font-light">IT Professional • Resident for 1.5 Years</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] max-w-[450px] shrink-0 snap-center bg-zinc-800/50 border border-zinc-700 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 text-sm mb-4 md:mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        "Best PG in Kharadi near EON. The daily cleaning is spotless, and the Wi-Fi speed is great for remote work. Highly recommend to anyone relocating to Pune."
                    </p>
</div>
<div className="border-t border-zinc-700 pt-5 md:pt-6 flex items-center gap-3 md:gap-4">
<div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold">A</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-white">Amit P.</h4>
<p className="text-zinc-500 text-[10px] md:text-xs font-light">Software Engineer • Resident for 8 Months</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] max-w-[450px] shrink-0 snap-center bg-zinc-800/50 border border-zinc-700 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 text-sm mb-4 md:mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-zinc-300 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        "Very safe and secure environment. The location is a huge plus, just a short walk to PMC bus stop and WTC. The management is quick to resolve any minor issues."
                    </p>
</div>
<div className="border-t border-zinc-700 pt-5 md:pt-6 flex items-center gap-3 md:gap-4">
<div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold">S</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-white">Snehal K.</h4>
<p className="text-zinc-500 text-[10px] md:text-xs font-light">Corporate Employee • Resident for 1 Year</p>
</div>
</div>
</div>

<div className="min-w-[10px] md:min-w-[48px] shrink-0"></div>
</div>
</section>

<section className="py-16 md:py-32 px-4 md:px-12 max-w-[1400px] mx-auto gsap-section bg-white" id="location">
<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
<div>
<span className="block text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4 text-zinc-600 font-medium">
                    04 Location &amp; Contact
                </span>
<h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-medium tracking-tight mb-6 md:mb-8 text-zinc-900">
                    Find us in the heart of Kharadi.
                </h2>
<div className="bg-zinc-50 border border-zinc-200 p-5 md:p-8 mb-6 md:mb-8">
<h4 className="text-[10px] md:text-sm uppercase tracking-widest font-semibold text-zinc-900 mb-5 md:mb-6 border-b border-zinc-200 pb-3 md:pb-4">Address Details</h4>
<ul className="space-y-5 md:space-y-6">
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-lg md:text-xl text-zinc-500 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<strong className="block text-xs md:text-sm font-medium text-zinc-900 mb-1">VM Luxury PG</strong>
<span className="text-xs md:text-sm text-zinc-600 font-light leading-relaxed block">Near PMC Bus Stop, Kharadi Gaon,<br/>Kharadi, Pune, Maharashtra 411014</span>
</div>
</li>
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-lg md:text-xl text-zinc-500 mt-1" icon="solar:routing-2-linear"></iconify-icon>
<div>
<strong className="block text-xs md:text-sm font-medium text-zinc-900 mb-1">Google Plus Code</strong>
<span className="text-xs md:text-sm text-zinc-600 font-light bg-zinc-200 px-2 py-1 rounded inline-block mt-1">GWXW+2X Pune</span>
</div>
</li>
<li className="flex items-start gap-3 md:gap-4">
<iconify-icon className="text-lg md:text-xl text-zinc-500 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<strong className="block text-xs md:text-sm font-medium text-zinc-900 mb-1">Availability</strong>
<span className="text-xs md:text-sm text-zinc-600 font-light block">Open 24 Hours</span>
</div>
</li>
</ul>
</div>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4">
<a className="flex-1 bg-zinc-900 text-white text-center border border-zinc-900 px-6 py-3.5 text-[10px] md:text-xs uppercase tracking-widest font-semibold hover:bg-zinc-800 transition-all duration-300" href="tel:09130006999">
                        Call 09130006999
                    </a>
<a className="flex-1 bg-transparent text-zinc-900 text-center border border-zinc-900 px-6 py-3.5 text-[10px] md:text-xs uppercase tracking-widest font-semibold hover:bg-zinc-100 transition-all duration-300" href="https://maps.google.com/?q=GWXW+2X+Pune" target="_blank">
                        Open in Maps
                    </a>
</div>
</div>
<div className="w-full h-[350px] md:h-full min-h-[350px] md:min-h-[500px] bg-zinc-200 border border-zinc-300 relative overflow-hidden pointer-events-none md:pointer-events-auto">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.40461822812!2d73.9405!3d18.5473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzUwLjMiTiA3M8KwNTYnMjUuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(0.8) contrast(1.2) opacity(0.9)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border-[6px] md:border-[8px] border-white/50 mix-blend-overlay"></div>
</div>
</div>
</section>

<footer className="bg-zinc-50 pt-16 md:pt-20 pb-24 md:pb-12 px-4 md:px-12 border-t border-zinc-300">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
<div className="md:col-span-2 pr-0 md:pr-12">
<a className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 block mb-2 md:mb-4" href="#">
                    VM LUXURY PG
                </a>
<span className="text-xs md:text-sm text-zinc-500 font-medium mb-4 md:mb-6 block">(वीएम लक्जरी पीजी)</span>
<p className="text-zinc-600 font-light leading-relaxed max-w-sm mb-6 md:mb-8 text-xs md:text-sm">
                    Premium paying guest accommodation in Kharadi, Pune. We provide fully furnished rooms with home-style food, designed for IT professionals and students seeking a comfortable, safe, and hassle-free stay.
                </p>
</div>
<div>
<h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-5 md:mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-zinc-600 hover:text-zinc-900 text-xs md:text-sm font-light transition-colors" href="#amenities">Amenities &amp; Facilities</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-xs md:text-sm font-light transition-colors" href="#rooms">View Rooms</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-xs md:text-sm font-light transition-colors" href="#location">Location Details</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900 text-xs md:text-sm font-light transition-colors" href="https://wa.me/919130006999">WhatsApp Us</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-5 md:mb-6">Direct Contact</h4>
<ul className="space-y-4">
<li>
<a className="text-zinc-900 hover:text-zinc-600 text-base md:text-lg font-medium transition-colors inline-block" href="tel:09130006999">
                            09130006999
                        </a>
</li>
<li className="text-zinc-600 text-xs md:text-sm font-light leading-relaxed">
                        Near PMC Bus Stop, Kharadi Gaon, Pune, 411014
                    </li>
</ul>
</div>
</div>

<div className="max-w-[1400px] mx-auto mb-8 md:mb-12">
<p className="text-[10px] md:text-xs text-zinc-400 font-light leading-relaxed text-justify">
                Keywords: Best PG in Kharadi, PG near EON IT Park Pune, Luxury PG in Pune with food, PG near WTC Pune, furnished accommodation Kharadi, IT professionals PG Pune, safe PG in Kharadi.
            </p>
</div>
<div className="max-w-[1400px] mx-auto border-t border-zinc-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
<p className="text-[10px] md:text-xs text-zinc-500 font-light uppercase tracking-widest text-center md:text-left">© 2024 VM Luxury PG. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
