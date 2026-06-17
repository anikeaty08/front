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
canada: {
red: '#FF0000',
}
}
}
},
plugins: [
function({ addUtilities }) {
const utilities = {
'.perspective-1000': { perspective: '1000px' },
'.transform-style-preserve-3d': { transformStyle: 'preserve-3d' },
};
addUtilities(utilities);
}
]
};

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
      

<main className="glass-panel overflow-hidden flex flex-col xl:max-w-[1300px] z-10 xl:border-white/50 border-none xl:border xl:rounded-[2.5rem] md:pt-10 md:pr-10 md:pb-10 md:pl-10 xl:pt-12 xl:pr-12 xl:pb-12 xl:pl-12 xl:shadow-2xl min-h-screen xl:min-h-[700px] w-full rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none animate-fade-scale">

<div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
<div className="h-full w-[1px] bg-zinc-950/5"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden md:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden lg:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden xl:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5"></div>
</div>

<header className="flex md:mb-16 md:gap-0 z-10 mb-16 relative gap-x-6 gap-y-6 items-center justify-between animate-fade-up">

<a className="flex items-center gap-2 text-zinc-900 group cursor-pointer" href="#">
<div className="flex text-white bg-gradient-to-b from-zinc-800 to-zinc-600 w-8 h-8 rounded-lg items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
<svg className="lucide lucide-briefcase" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">Business Consulting<span className="text-zinc-400 font-normal ml-1">Canada</span></span>
</a>

<nav className="hidden md:flex uppercase text-[10px] font-semibold text-zinc-500 tracking-widest bg-white/50 border-white/60 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm backdrop-blur-sm gap-x-8 items-center transition-all hover:shadow-md hover:bg-white/80">
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#about">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#services">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#testimonials">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#contact">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>

<a className="flex items-center gap-2 group hover:bg-zinc-50 text-xs font-medium text-zinc-700 tracking-wide bg-white border border-zinc-200 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0" href="tel:+16477083477">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="uppercase tracking-wide text-[10px] font-semibold">Open Now</span>
</a>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full flex-grow relative z-10 pb-8 lg:pb-0">

<div className="lg:col-span-7 flex flex-col pt-4 relative justify-center scroll-mt-32" id="about">

<a className="animate-fade-up delay-100 inline-flex bg-white/80 w-max rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-1.5 shadow-sm backdrop-blur-sm items-center border border-zinc-100 group cursor-pointer hover:border-zinc-300 transition-all hover:scale-105 duration-300" href="https://maps.app.goo.gl/RACPnZQXs5nXiPWB9" target="_blank">
<div className="flex -space-x-2 mr-3">
<div className="flex items-center justify-center bg-yellow-400 w-6 h-6 rounded-full border-2 border-white">
<svg className="text-white" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<span className="text-xs font-medium text-zinc-600 tracking-wide mr-1">
                    Rated <span className="text-zinc-900 font-semibold">5.0</span> based on 3 reviews
                </span>
<svg className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<h1 className="animate-fade-up delay-200 leading-[0.95] lg:text-[4.5rem] text-5xl font-semibold text-zinc-900 tracking-tighter mb-8">
                Business Consulting
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300 font-light block">Canada</span>
</h1>

<p className="animate-fade-up delay-300 text-sm text-zinc-600 font-normal max-w-lg mb-10 leading-relaxed tracking-wide border-l-2 border-zinc-200 pl-6 hover:border-zinc-400 transition-colors duration-500">
                We help individuals and companies navigate the complexities of the Canadian market. Providing professional development and management strategies tailored for sustainable growth.
            </p>

<div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16 gap-x-3 gap-y-3">
<a className="hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-300 flex group text-sm font-medium text-white bg-zinc-900 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-xl gap-x-3 gap-y-3 items-center justify-center min-w-[160px]" href="tel:+16477083477">
<span className="tracking-tight">Consult Now</span>
<svg className="group-hover:rotate-12 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
<a className="hover:bg-zinc-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm gap-x-2 items-center justify-center group" href="https://wa.me/16477083477">
<span className="tracking-tight">WhatsApp Us</span>
<svg className="group-hover:text-emerald-500 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</a>
</div>

<div className="animate-fade-up delay-500 flex flex-wrap gap-2 md:gap-6 mt-auto gap-x-2 gap-y-2 items-center">
<div className="flex items-center group cursor-default hover:-translate-y-0.5 transition-transform duration-300">
<div className="px-1">
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                            Experience</p>
<p className="text-sm text-zinc-900 font-medium">Professional</p>
</div>
<div className="curve-separator opacity-60 ml-4 md:ml-8"></div>
</div>
<div className="flex items-center group cursor-default hover:-translate-y-0.5 transition-transform duration-300">
<div className="px-1">
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                            Approach</p>
<p className="text-sm text-zinc-900 font-medium">Structured</p>
</div>
<div className="curve-separator md:ml-8 opacity-60 ml-4"></div>
</div>
<div className="flex items-center group cursor-default hover:-translate-y-0.5 transition-transform duration-300">
<div className="px-1">
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-zinc-600 transition-colors">
                            Results</p>
<p className="text-sm text-zinc-900 font-medium">Practical</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative group perspective-1000 animate-fade-scale delay-300">
<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10 transition-all duration-700 ease-out border border-white/60 bg-white group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">

<img alt="Toronto Skyline" className="transition-transform duration-[3s] ease-in-out group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-zinc-900/10 opacity-80 group-hover:opacity-70 transition-opacity duration-700"></div>

<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">

<div className="flex items-start justify-end">
<div className="flex gap-2 bg-black/30 backdrop-blur-md rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center border border-white/10 shadow-lg animate-float">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-[10px] uppercase font-semibold text-white tracking-wide">Toronto, ON</span>
</div>
</div>

<div className="self-start transform transition-transform duration-700 ease-out bg-white/10 w-full max-w-[240px] rounded-xl mt-60 pt-4 pr-4 pb-4 pl-4 backdrop-blur-md border border-white/20 shadow-lg animate-float delay-700 group-hover:scale-105">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<span className="text-xs text-white font-medium">Optimization</span>
</div>
<span className="text-[10px] text-emerald-300 font-mono">+24% Efficiency</span>
</div>
<div className="h-12 w-full mb-2 flex items-end gap-1">
<div className="w-1/5 bg-white/20 rounded-t-sm h-[40%] transition-all duration-1000 group-hover:h-[45%]"></div>
<div className="w-1/5 bg-white/20 rounded-t-sm h-[55%] transition-all duration-1000 delay-100 group-hover:h-[65%]"></div>
<div className="w-1/5 bg-white/20 rounded-t-sm h-[50%] transition-all duration-1000 delay-200 group-hover:h-[60%]"></div>
<div className="w-1/5 bg-white/30 rounded-t-sm h-[75%] transition-all duration-1000 delay-300 group-hover:h-[85%]"></div>
<div className="w-1/5 bg-blue-500 rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 delay-400 group-hover:h-[98%]"></div>
</div>
</div>

<a className="overflow-hidden w-full border-white/10 rounded-xl border-t mt-auto pt-4 relative group/link cursor-pointer transition-all duration-300 hover:bg-white/5" href="https://maps.app.goo.gl/RACPnZQXs5nXiPWB9" target="_blank">
<div className="flex items-center gap-3">
<div className="flex -space-x-3 transition-all duration-300 group-hover/link:space-x-[-8px]">
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-white flex items-center justify-center text-[10px] font-bold text-zinc-600">JD</div>
<div className="w-8 h-8 rounded-full bg-zinc-300 border border-white flex items-center justify-center text-[10px] font-bold text-zinc-600">AM</div>
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-white flex items-center justify-center text-[10px] font-bold text-zinc-600">RK</div>
</div>
<div className="flex flex-col">
<span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1">
                                    See our reviews
                                    <svg className="group-hover/link:translate-x-1 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</span>
<span className="text-white/60 text-[10px] uppercase tracking-wider">On Google Maps</span>
</div>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="flex flex-col gap-10 z-10 w-full relative gap-x-10 gap-y-10 animate-fade-up delay-200 scroll-mt-24" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
<div className="max-w-2xl">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
                    Our Expertise
                </h2>
<p className="leading-relaxed text-base font-normal text-zinc-500">
                    Comprehensive consulting solutions designed to elevate your business operations and strategy in the Canadian landscape.
                </p>
</div>
<a className="group flex items-center gap-2 hover:text-zinc-600 transition-colors text-sm font-medium text-zinc-900 pb-1" href="tel:+16477083477">
                Discuss a project
                <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-zinc-900/5 bg-zinc-200 rounded-[2rem] gap-px border border-zinc-200">

<div className="group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] bg-zinc-50 h-full p-8 relative justify-between hover:shadow-lg z-10">
<div>
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Business Strategy</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Data-driven strategic planning to identify market opportunities and define your competitive edge.
                    </p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-8 right-8">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 flex flex-col justify-between h-full min-h-[300px] md:col-span-2 overflow-hidden hover:shadow-lg z-10">
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Growth &amp; Optimization</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Scalable frameworks for expansion. We analyze your current models and implement optimization techniques to maximize revenue and efficiency.
                    </p>
</div>

<div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none"></div>
<div className="absolute bottom-8 right-8 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<svg className="w-full h-full animate-spin-slow" viewbox="0 0 100 100"><path d="M50 50 L50 0 A50 50 0 0 1 100 50 Z" fill="currentColor"></path></svg>
</div>
</div>

<div className="group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] bg-zinc-50 h-full p-8 relative justify-between hover:shadow-lg z-10">
<div>
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Operations &amp; Mgmt</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Streamlining workflows and management structures to reduce overhead and improve output.
                    </p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-8 right-8">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] bg-zinc-50 h-full p-8 relative justify-between hover:shadow-lg z-10">
<div>
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Startup &amp; SME</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Tailored guidance for startups and small-to-medium enterprises to navigate early-stage challenges.
                    </p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-8 right-8">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group hover:bg-white transition-all duration-300 flex flex-col min-h-[300px] bg-zinc-50 h-full p-8 relative justify-between hover:shadow-lg z-10">
<div>
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Business Planning</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Comprehensive roadmap development, financial forecasting, and risk assessment documentation.
                    </p>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-8 right-8">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="flex flex-col gap-16 z-10 w-full relative animate-fade-up delay-300 scroll-mt-24" id="testimonials">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="flex flex-col gap-4 group cursor-default">
<div className="text-zinc-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="23" y1="8" y2="11"></line><line x1="23" x2="17" y1="11" y2="11"></line></svg>
</div>
<h4 className="font-semibold text-zinc-900">Professional Team</h4>
<p className="leading-relaxed text-sm font-normal text-zinc-500">
                    Experienced consultants dedicated to your specific business needs.
                </p>
</div>

<div className="flex flex-col gap-4 group cursor-default">
<div className="text-zinc-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<h4 className="font-semibold text-zinc-900">Structured Approach</h4>
<p className="leading-relaxed text-sm font-normal text-zinc-500">
                    A clear, step-by-step methodology ensures measurable progress.
                </p>
</div>

<div className="flex flex-col gap-4 group cursor-default">
<div className="text-zinc-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h4 className="font-semibold text-zinc-900">Practical Solutions</h4>
<p className="leading-relaxed text-sm font-normal text-zinc-500">
                    We focus on strategies that can be implemented immediately.
                </p>
</div>

<div className="flex flex-col gap-4 group cursor-default">
<div className="text-zinc-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h4 className="font-semibold text-zinc-900">5.0 Star Rating</h4>
<p className="leading-relaxed text-sm font-normal text-zinc-500">
                    Trusted by clients with a perfect satisfaction record.
                </p>
</div>
</div>

<div className="overflow-hidden min-h-[400px] shadow-zinc-900/10 bg-zinc-900 rounded-[2rem] relative shadow-2xl group transition-all duration-500 hover:shadow-zinc-900/20 scroll-mt-24" id="contact">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 h-full relative z-10">

<div className="p-8 md:p-12 flex flex-col justify-center h-full relative z-10">
<h3 className="text-3xl font-medium text-white tracking-tight mb-8">Visit or Contact Us</h3>
<div className="space-y-6">

<div className="flex items-start gap-4 group/item">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors">
<svg className="text-zinc-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-wider font-medium mb-1">Location</p>
<p className="text-white font-normal">1 Rean Dr, Toronto, ON M2K 3C1, Canada</p>
<p className="text-zinc-500 text-sm mt-1">Area: QJ88+3J Toronto, Ontario</p>
</div>
</div>

<div className="flex items-start gap-4 group/item">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors">
<svg className="text-zinc-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-wider font-medium mb-1">Hours</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<p className="text-white font-normal">Closed · Opens at 9:30 AM</p>
</div>
<p className="text-zinc-500 text-xs mt-1 italic">Christmas Day might affect these hours</p>
</div>
</div>

<div className="flex items-start gap-4 group/item">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors">
<svg className="text-zinc-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-wider font-medium mb-1">Contact</p>
<a className="text-white font-medium text-lg hover:text-emerald-400 transition-colors block mb-2" href="tel:+16477083477">+1 647-708-3477</a>
<div className="flex gap-3">
<a className="text-xs bg-white text-black px-3 py-1.5 rounded-full font-medium hover:bg-zinc-200 transition-colors hover:scale-105 transform" href="tel:+16477083477">Call Now</a>
<a className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-full font-medium hover:bg-emerald-500 transition-colors hover:scale-105 transform" href="https://wa.me/16477083477">WhatsApp</a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-800 h-full min-h-[300px] relative overflow-hidden group/map">

<img className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 group-hover/map:scale-110" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex flex-col items-center shadow-2xl animate-float">
<div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute top-4 right-4"></div>
<span className="text-white font-semibold text-lg tracking-tight">Toronto</span>
<span className="text-zinc-300 text-xs">Headquarters</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<footer className="z-10 w-full relative animate-fade-up delay-500">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="flex flex-col gap-4">
<h2 className="text-xl font-semibold text-zinc-900 tracking-tight">Business Consulting<br/><span className="text-zinc-400">Canada</span></h2>
<p className="text-sm text-zinc-500 leading-relaxed">
                     Professional consulting services tailored for the Canadian market. Helping businesses achieve sustainable growth.
                 </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-zinc-900 text-sm">Services</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="#services">Strategy</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="#services">Planning</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="#services">Growth</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="#services">Operations</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-zinc-900 text-sm">Company</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="#about">About Us</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="#contact">Contact</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hover:translate-x-1 duration-300 inline-block" href="https://maps.app.goo.gl/RACPnZQXs5nXiPWB9">Reviews</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-medium text-zinc-900 text-sm">Location</h4>
<p className="text-sm text-zinc-500">1 Rean Dr<br/>Toronto, ON M2K 3C1<br/>Canada</p>
<a className="text-sm text-zinc-900 font-medium hover:underline" href="tel:+16477083477">+1 647-708-3477</a>
</div>
</div>

<div className="flex flex-col md:flex-row border-zinc-200 border-t pt-8 gap-4 items-center justify-between">
<p className="text-zinc-400 text-xs font-normal">
                © 2024 Business Consulting Canada. All rights reserved.
            </p>
<div className="flex items-center gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
