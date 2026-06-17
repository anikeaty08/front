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
                strokeWidth: 1.5
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
      

<div className="bg-[#00ff9d] text-black text-xs font-bold uppercase py-2 marquee-container z-50 relative">
<div className="marquee-content flex gap-8 items-center tracking-widest">
<span>Tighten Your Strings</span> • <span>Drink Beer &amp; Alcohol</span> • <span>Spend Time Girls</span> • <span>18+ Dance Bar</span> • <span>Luxury Night Club</span> • <span>Upcoming Performances</span> • <span>Tighten Your Strings</span> • <span>Drink Beer &amp; Alcohol</span> • <span>Spend Time Girls</span> • <span>18+ Dance Bar</span> • <span>Luxury Night Club</span> • <span>Upcoming Performances</span> • 
        </div>
</div>

<nav className="absolute top-10 left-0 w-full z-40 px-6 md:px-12 flex justify-between items-center bg-transparent pt-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-[#00ff9d] to-blue-500 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-black" data-lucide="disc-3"></i>
</div>
<span className="font-heading text-2xl font-bold tracking-tighter italic">DJSOUND</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
<a className="text-xs font-semibold uppercase tracking-wide hover:text-[#00ff9d] transition-colors" href="#">Home</a>
<a className="text-xs font-semibold uppercase tracking-wide hover:text-[#00ff9d] transition-colors" href="#">About Us</a>
<a className="text-xs font-semibold uppercase tracking-wide hover:text-[#00ff9d] transition-colors" href="#">Events</a>
<a className="text-xs font-semibold uppercase tracking-wide hover:text-[#00ff9d] transition-colors" href="#">Artists</a>
<a className="text-xs font-semibold uppercase tracking-wide hover:text-[#00ff9d] transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-wide hover:text-[#00ff9d]">
<i className="w-4 h-4" data-lucide="search"></i> Search
            </button>
<a className="bg-[#ff006e] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#d6005c] transition-all flex items-center gap-2" href="#">
                Book VIP <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<header className="relative w-full h-[110vh] min-h-[800px] bg-[#0b0b15] overflow-hidden flex flex-col justify-center items-center">

<div className="absolute inset-0 z-0">
<img alt="DJ Background" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b15] via-[#0b0b15]/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0b0b15] via-transparent to-[#0b0b15]"></div>
</div>

<div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
<div className="absolute bottom-0 left-10 w-96 h-96 bg-[#ff006e] rounded-full blur-[120px] opacity-20"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
<div className="relative">

<div className="absolute -left-12 top-0 hidden xl:flex flex-col gap-4">
<span className="text-[10px] text-[#00ff9d] uppercase tracking-[0.2em] -rotate-90 origin-bottom-left whitespace-nowrap">SXSW 2026 Music Festival</span>
</div>
<h1 className="font-heading text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-white mix-blend-overlay">
                    Tighten <br/>
<span className="text-transparent text-stroke-white relative">
                        Your
                        
<span className="absolute top-1/2 -translate-y-1/2 left-[32%] w-[15vw] h-[8vw] rounded-full overflow-hidden border-2 border-[#00ff9d] hidden md:block rotate-[-5deg]">
<img alt="Crowd" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</span>
</span> <br/>
                    Strings
                </h1>

<div className="mt-12 flex flex-wrap gap-4 items-center">
<a className="bg-[#00ff9d] text-black px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group" href="#">
                        View Tickets <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<div className="flex flex-col text-[10px] font-medium text-gray-400 uppercase tracking-wide leading-tight border-l border-gray-600 pl-4 ml-4">
<span>Let us help you give your ticket</span>
<span>The best energy</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-12 right-12 md:right-24 z-20">
<div className="relative w-24 h-24 flex items-center justify-center">

<svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewbox="0 0 100 100">
<defs>
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circlePath"></path>
</defs>
<text fill="white" fontFamily="Oswald" fontSize="11.5" font-weight="bold" letter-spacing="1.2">
<textpath xlink:href="#circlePath">SCROLL DOWN • DISCOVER MORE •</textpath>
</text>
</svg>
<i className="absolute w-6 h-6 text-[#00ff9d]" data-lucide="arrow-down"></i>
</div>
</div>
</header>

<section className="relative bg-[#f5f5f5] text-black py-32 overflow-hidden">

<div className="absolute top-20 left-10 text-[#ff006e] animate-spin-slow">
<i className="w-16 h-16" data-lucide="asterisk"></i>
</div>
<div className="absolute top-24 right-20 flex gap-2">
<i className="w-8 h-8 text-[#00ff9d] fill-[#00ff9d]" data-lucide="star"></i>
<i className="w-6 h-6 text-[#ff006e] fill-[#ff006e] mt-4" data-lucide="star"></i>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative h-[600px] w-full">
<div className="absolute top-0 left-0 w-3/4 h-3/4 bg-black overflow-hidden z-10 rounded-sm">
<img alt="DJ" className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=2952&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gray-900 overflow-hidden z-20 translate-x-4 translate-y-4 md:translate-x-0 md:translate-y-0 border-8 border-[#f5f5f5] rounded-sm">
<img alt="Party" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-1/4 left-10 z-30 bg-[#00ff9d] w-12 h-12 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-black fill-current" data-lucide="zap"></i>
</div>
</div>

<div className="flex flex-col justify-center">
<span className="text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-4">About Club</span>
<h2 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8">
                    Three Weeks <br/>
                    Of Sonic <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">Indulgence</span>
</h2>
<p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md font-medium">
                    Embark on a sonic adventure at our inaugural multi-genre Music Festival featuring electrifying performances across our iconic destination. From world-class concerts to eclectic live bands to liven up your dining experience.
                </p>
<div>
<a className="inline-flex items-center gap-2 bg-[#00ff9d] text-black px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all" href="#">
                        About Us <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full translate-y-1/2 opacity-10 pointer-events-none">
<div className="marquee-container">
<div className="marquee-content font-heading text-[12rem] leading-none uppercase font-bold text-transparent text-outline">
                    About Us • About Us • About Us • About Us •
                </div>
</div>
</div>
</section>

<section className="relative bg-[#0b0b15] py-32 px-6 md:px-12 overflow-hidden border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
<div>
<span className="text-[#00ff9d] font-heading font-bold text-xs uppercase tracking-widest mb-2 block">Calendar Event</span>
<h2 className="font-heading text-5xl md:text-7xl text-white font-bold uppercase leading-none tracking-tighter">
                        Upcoming <br/> Performances
                    </h2>
</div>

<div className="relative hidden md:block">
<svg className="w-24 h-24 animate-[spin_8s_linear_infinite]" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="badgePath"></path>
<text fill="#00ff9d" fontFamily="Oswald" fontSize="12" font-weight="bold" letter-spacing="1.2">
<textpath xlink:href="#badgePath">ALL EVENTS • UPCOMING •</textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="arrow-down-right"></i>
</div>
</div>
</div>

<div className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-900 overflow-hidden group rounded-sm border border-white/10">
<img alt="Concert" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex flex-col items-center justify-center z-20">
<h3 className="font-heading text-6xl md:text-8xl text-white uppercase font-bold tracking-tighter mb-4 text-center mix-blend-overlay">Galactic Fusion</h3>
<button className="w-20 h-20 bg-[#ff006e] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,0,110,0.5)] z-30">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</button>
</div>
<div className="absolute bottom-8 left-0 w-full text-center z-20 px-4">
<p className="font-heading text-4xl md:text-6xl uppercase font-bold text-white tracking-tighter">Sound And Spirit</p>
<p className="text-gray-400 text-xs md:text-sm mt-2 max-w-lg mx-auto">Music is the way to express your emotions and the thing you enjoyed most in life.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f0f0f0] py-32 px-6 md:px-12 text-black relative">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-start mb-16">
<div>
<span className="text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-2 block">What We Offer</span>
<h2 className="font-heading text-5xl md:text-6xl font-bold uppercase leading-none tracking-tighter">
                        Studio Services
                    </h2>
</div>

<div className="hidden lg:block relative w-32 h-32">
<div className="absolute inset-0 bg-[#00ff9d] rounded-full animate-pulse opacity-50 blur-xl"></div>
<div className="relative w-full h-full bg-[#00ff9d] rounded-full flex items-center justify-center border border-black overflow-hidden">
<svg className="w-full h-full animate-[spin_12s_linear_infinite] p-2" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="servicePath"></path>
<text fill="black" fontFamily="Oswald" fontSize="12" font-weight="bold" letter-spacing="1">
<textpath xlink:href="#servicePath">MUSIC FESTIVALS • BUY TICKETS •</textpath>
</text>
</svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/10">

<div className="border-r border-b border-black/10 p-8 md:p-12 hover:bg-white transition-colors duration-300 group relative overflow-hidden">
<div className="text-4xl font-heading font-bold text-transparent text-outline mb-8 opacity-30">04</div>
<div className="absolute top-8 right-8 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12">
<img alt="Service" className="w-full h-full object-cover rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-heading text-2xl uppercase font-bold mb-4">Music Production</h3>
<p className="text-xs text-gray-600 leading-relaxed">Something old, something new, something you've never experienced before.</p>
</div>

<div className="border-r border-b border-black/10 p-8 md:p-12 hover:bg-white transition-colors duration-300 group relative overflow-hidden">
<div className="text-4xl font-heading font-bold text-transparent text-outline mb-8 opacity-30">05</div>
<div className="absolute top-8 right-8 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-6">
<img alt="Service" className="w-full h-full object-cover rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-heading text-2xl uppercase font-bold mb-4">Recording Studio</h3>
<p className="text-xs text-gray-600 leading-relaxed">Top tier equipment for the crispest sound. Capture your creativity.</p>
</div>

<div className="border-r border-b border-black/10 p-8 md:p-12 hover:bg-white transition-colors duration-300 group relative overflow-hidden">
<div className="text-4xl font-heading font-bold text-transparent text-outline mb-8 opacity-30">06</div>
<div className="absolute top-8 right-8 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45">
<img alt="Service" className="w-full h-full object-cover rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-heading text-2xl uppercase font-bold mb-4">Birthday Parties</h3>
<p className="text-xs text-gray-600 leading-relaxed">Celebrate in style with our exclusive VIP lounges and private DJ sessions.</p>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#0b0b15] overflow-x-hidden py-0">
<div className="grid grid-cols-2 md:grid-cols-4 gap-0">
<div className="aspect-square relative group overflow-hidden border border-white/5">
<img alt="Party" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1574169208507-84376194878f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#00ff9d]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="aspect-square relative group overflow-hidden border border-white/5">
<img alt="Party" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1525362081669-2b4764d55c2d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
<div className="bg-white rounded-full w-24 h-24 flex items-center justify-center animate-spin-slow">
<svg className="w-20 h-20" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="galleryPath"></path>
<text fill="black" fontFamily="Oswald" fontSize="14" font-weight="bold" letter-spacing="2">
<textpath xlink:href="#galleryPath">LATEST PHOTOS •</textpath>
</text>
</svg>
<i className="absolute w-5 h-5 text-black" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="aspect-square relative group overflow-hidden border border-white/5">
<img alt="Party" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1642277648589-3990390f0556?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#ff006e]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="aspect-square relative group overflow-hidden border border-white/5">
<img alt="Party" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<section className="bg-[#f5f5f5] py-32 px-6 md:px-12 text-black relative overflow-hidden">

<div className="absolute top-20 left-[10%] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl animate-bounce duration-[3000ms]">
<img alt="Small 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl animate-pulse">
<img alt="Small 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-4 block">World Tour</span>
<h2 className="font-heading text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
                Underground <br/> Faves
            </h2>
<p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto mb-10">
                Maybe you're needing to blow off some serious steam with an all-night party, or wanting to impress someone special with a venue that's a little more discreet.
            </p>
<a className="inline-flex items-center gap-2 bg-[#00ff9d] text-black px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-xl" href="#">
                Get In Touch <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-5">
<div className="font-heading text-[10vw] leading-none uppercase font-bold text-center text-outline">
                Get In Touch • Get In Touch
            </div>
</div>
</section>

<section className="bg-[#0b0b15] py-32 px-6 md:px-12 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-1 flex flex-col justify-center mb-8 lg:mb-0">
<span className="text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-4">Our Party Host</span>
<h2 className="font-heading text-5xl font-bold uppercase leading-none tracking-tighter mb-6 text-white">
                        DJSOUND <br/> Disc Jockey
                    </h2>
<p className="text-xs text-gray-400 mb-8 max-w-xs">
                        A team of dreamers and doers building unique interactive music and art festivals.
                    </p>
<div>
<a className="inline-flex items-center gap-2 bg-[#00ff9d] text-black px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white transition-all" href="#">
                            All Residents <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900 rounded-sm overflow-hidden border border-white/5">
<div className="aspect-[3/4]">
<img alt="DJ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595971294624-92d6e302ec43?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="font-heading text-xl uppercase font-bold text-white mb-1">Cedric Gervais</h3>
<a className="text-[10px] font-bold uppercase text-[#00ff9d] flex items-center gap-1" href="#">Read More <i className="w-2 h-2" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="group relative bg-neutral-900 rounded-sm overflow-hidden border border-white/5 mt-0 md:-mt-8">
<div className="aspect-[3/4]">
<img alt="DJ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=2960&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="font-heading text-xl uppercase font-bold text-white mb-1">Afrojack</h3>
<a className="text-[10px] font-bold uppercase text-[#00ff9d] flex items-center gap-1" href="#">Read More <i className="w-2 h-2" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="group relative bg-neutral-900 rounded-sm overflow-hidden border border-white/5">
<div className="aspect-[3/4]">
<img alt="DJ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621784563330-ca12492c6632?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="font-heading text-xl uppercase font-bold text-white mb-1">Flo Rida</h3>
<a className="text-[10px] font-bold uppercase text-[#00ff9d] flex items-center gap-1" href="#">Read More <i className="w-2 h-2" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#f0f0f0]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative">
<div className="relative z-10 bg-black p-2 shadow-2xl rotate-[-2deg]">
<img alt="Cover" className="w-full h-auto grayscale" src="https://images.unsplash.com/photo-1459749411177-33450b52ea71?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-heading text-3xl uppercase font-bold">Electro Music <br/> <span className="text-outline-light text-5xl">Festival</span></h3>
<p className="text-xs mt-2 uppercase tracking-widest text-[#00ff9d]">Featuring DJ Night Club</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-4 block">Music Popular</span>
<h2 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter mb-8 text-black">
                    Recent <br/> DJ's Sets
                </h2>
<div className="space-y-6">

<div className="flex items-center justify-between border-b border-gray-300 pb-4 group cursor-pointer">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-[#00ff9d] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-black fill-black" data-lucide="play"></i>
</button>
<div>
<h4 className="font-heading text-lg font-bold uppercase text-black">Body Surgery</h4>
<p className="text-[10px] text-gray-500 uppercase">Elementum tempus egestas</p>
</div>
</div>
<span className="text-xs font-bold text-gray-400">00:00</span>
</div>

<div className="flex items-center justify-between border-b border-gray-300 pb-4 group cursor-pointer">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#00ff9d] transition-colors">
<i className="w-4 h-4 text-black fill-black" data-lucide="play"></i>
</button>
<div>
<h4 className="font-heading text-lg font-bold uppercase text-black">Migos Releases "Position To Win"</h4>
<p className="text-[10px] text-gray-500 uppercase">Listen here</p>
</div>
</div>
<span className="text-xs font-bold text-gray-400">00:00</span>
</div>

<div className="flex items-center justify-between border-b border-gray-300 pb-4 group cursor-pointer">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-[#00ff9d] transition-colors">
<i className="w-4 h-4 text-black fill-black" data-lucide="play"></i>
</button>
<div>
<h4 className="font-heading text-lg font-bold uppercase text-black">Body Surgery</h4>
<p className="text-[10px] text-gray-500 uppercase">Elementum tempus egestas</p>
</div>
</div>
<span className="text-xs font-bold text-gray-400">00:00</span>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 bg-[#00ff9d] text-black px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all" href="#">
                        Read More <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] pt-20 pb-32 px-6 md:px-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
<div>
<span className="text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-2 block">What's up Blog</span>
<h2 className="font-heading text-5xl font-bold uppercase leading-none tracking-tighter text-black">
                    Latest News
                </h2>
</div>
<div className="hidden md:block">
<div className="w-20 h-20 bg-[#00ff9d] rounded-full flex items-center justify-center animate-spin-slow">
<i className="w-8 h-8 text-black" data-lucide="move-up-right"></i>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

<div className="group">
<div className="aspect-[4/3] overflow-hidden mb-4">
<img alt="News" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-[10px] text-[#00ff9d] font-bold uppercase mb-2">
<span>Tracks Mixes</span>
<span className="text-gray-400">05 Oct 2023</span>
</div>
<h3 className="font-heading text-lg font-bold uppercase leading-tight text-black group-hover:text-[#ff006e] transition-colors mb-4">Drai's Guide: How to Prepare For a Dayclub</h3>
<a className="text-[10px] font-bold uppercase text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">Read More <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden mb-4">
<img alt="News" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-[10px] text-[#00ff9d] font-bold uppercase mb-2">
<span>Videos</span>
<span className="text-gray-400">05 Oct 2023</span>
</div>
<h3 className="font-heading text-lg font-bold uppercase leading-tight text-black group-hover:text-[#ff006e] transition-colors mb-4">Future Drops The Music Video For "Never Stop"</h3>
<a className="text-[10px] font-bold uppercase text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">Read More <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden mb-4">
<img alt="News" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-[10px] text-[#00ff9d] font-bold uppercase mb-2">
<span>DJ Equipment</span>
<span className="text-gray-400">05 Oct 2023</span>
</div>
<h3 className="font-heading text-lg font-bold uppercase leading-tight text-black group-hover:text-[#ff006e] transition-colors mb-4">Migos Releases "Position To Win," Listen Here</h3>
<a className="text-[10px] font-bold uppercase text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">Read More <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden mb-4">
<img alt="News" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-[10px] text-[#00ff9d] font-bold uppercase mb-2">
<span>DJ Tips &amp; Tricks</span>
<span className="text-gray-400">05 Oct 2023</span>
</div>
<h3 className="font-heading text-lg font-bold uppercase leading-tight text-black group-hover:text-[#ff006e] transition-colors mb-4">As Night Descends, Club Lights Ascend</h3>
<a className="text-[10px] font-bold uppercase text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">Read More <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
</div>
</section>

<footer className="bg-[#f0f0f0] text-black pt-20 relative overflow-hidden">

<div className="relative py-24 border-b border-gray-300">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
<div className="font-heading text-[10vw] leading-none uppercase font-bold text-center text-outline">
                    Subscribe • Follow • Newsletter
                </div>
</div>
<div className="max-w-3xl mx-auto text-center relative z-10 px-6">
<h2 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter mb-4">
                    Subscribe &amp; Follow
                </h2>
<p className="text-sm text-gray-500 mb-10">Would you like to receive up-to-date information about the festival Sign up for our newsletter</p>
<form className="flex flex-col md:flex-row gap-0 max-w-lg mx-auto bg-white p-1 rounded-sm shadow-xl">
<input className="flex-grow bg-transparent px-6 py-4 outline-none text-sm placeholder-gray-400 font-medium" placeholder="Email Address" type="email"/>
<button className="bg-[#00ff9d] text-black px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors">Subscribe <i className="inline w-3 h-3 ml-1" data-lucide="arrow-right"></i></button>
</form>
<div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-gray-400">
<input className="accent-black" id="privacy" type="checkbox"/>
<label htmlFor="privacy">By signing up you agree to our Privacy Policy</label>
</div>
</div>

<div className="absolute bottom-10 right-20 text-[#ff006e] animate-spin-slow">
<i className="w-16 h-16" data-lucide="asterisk"></i>
</div>
<div className="absolute top-10 left-20 flex gap-1">
<i className="w-6 h-6 text-[#00ff9d] fill-[#00ff9d]" data-lucide="star"></i>
<i className="w-4 h-4 text-black fill-black mt-4" data-lucide="star"></i>
</div>
</div>

<div className="bg-[#0b0b15] text-white py-16 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-[#00ff9d] rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-black" data-lucide="disc-3"></i>
</div>
<span className="font-heading text-xl font-bold tracking-tighter italic">DJSOUND</span>
</div>
<p className="text-xs text-gray-400 leading-relaxed max-w-xs mb-8">
                        2972 Westheimer Rd. Santa Ana, Illinois 85486 <br/>
                        support@example.com <br/>
                        +(084) 456-0789
                    </p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-[#00ff9d]" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-gray-500 hover:text-[#00ff9d]" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-[#00ff9d]" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-[#00ff9d]" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
<div className="md:w-1/3 text-center md:text-left">
<p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest border-t border-gray-800 pt-4 inline-block">
                        Filmmaking is the process by which a motion picture is produced. It's involves a number of complex &amp; discrete stages, starting with an initial story.
                     </p>
</div>
<div className="md:w-1/3 flex justify-end">
<div className="grid grid-cols-2 gap-x-12 gap-y-2 text-right">
<span className="col-span-2 text-[#ff006e] font-heading font-bold text-xs uppercase tracking-widest mb-2">Sitemap</span>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase" href="#">Home</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase" href="#">Menu</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase" href="#">About Us</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase" href="#">Buy Tickets</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase" href="#">Contacts</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-[10px] text-gray-600 uppercase tracking-widest">
                Copyright © 2023 <span className="text-[#00ff9d]">DJSOUND</span>. All rights reserved
            </div>
</div>
</footer>


    </>
  );
}
