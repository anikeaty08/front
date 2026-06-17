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



        lucide.createIcons();

        // High-performance smooth reveal animation observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px', // Triggers slightly before element enters view entirely
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Strip the utility classes holding it back to let CSS transitions take over smoothly
                        entry.target.classList.remove('opacity-0', 'translate-y-6', 'translate-y-4', '-translate-y-4', 'scale-[0.98]');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
            
            // Trigger critical load animations immediately for above-the-fold content
            requestAnimationFrame(() => {
                setTimeout(() => {
                    document.querySelectorAll('.reveal-load').forEach(el => {
                        el.classList.remove('opacity-0', 'translate-y-6', 'translate-y-4', '-translate-y-4', 'scale-[0.98]');
                    });
                }, 50);
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
      

<div className="reveal-load opacity-0 -translate-y-4 bg-black text-[#A1A1AA] py-2.5 px-6 text-sm font-normal tracking-wide" style={{transitionProperty: 'opacity, transform', transitionDuration: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0ms'}}>
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span>Emergency: 911</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span>Non-Emergency: 732-363-0200</span>
</div>
</div>
<div className="flex items-center gap-6 font-medium">
<a className="hover:text-white transition-colors duration-300" href="#">Translate</a>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors duration-300" href="#">Facebook</a>
<a className="hover:text-white transition-colors duration-300" href="#">X</a>
</div>
</div>
</div>
</div>

<header className="reveal-load opacity-0 -translate-y-4 bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-black/5" style={{transitionProperty: 'opacity, transform', transitionDuration: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-4 group" href="#">
<span className="text-2xl font-medium tracking-tight text-black leading-none">LTPD</span>
<div className="h-5 w-[1px] bg-neutral-200"></div>
<span className="text-sm text-neutral-500 font-medium tracking-tight group-hover:text-black transition-colors duration-300">Lakewood, NJ</span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-base font-medium text-neutral-500 hover:text-black transition-colors duration-300" href="#">About</a>
<a className="text-base font-medium text-neutral-500 hover:text-black transition-colors duration-300" href="#">Divisions</a>
<a className="text-base font-medium text-neutral-500 hover:text-black transition-colors duration-300" href="#">Transparency</a>
<a className="text-base font-medium text-neutral-500 hover:text-black transition-colors duration-300" href="#">News</a>
<a className="text-base font-medium text-neutral-500 hover:text-black transition-colors duration-300" href="#">Portal</a>
</nav>
<div className="hidden lg:flex items-center gap-5">
<a className="text-neutral-400 hover:text-black transition-colors duration-300 flex items-center" href="#">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</a>
<a className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.5)]" href="#">
                    Contact Us
                </a>
</div>
<button className="lg:hidden text-black p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="flex-grow">

<div className="reveal-load opacity-0 translate-y-4 bg-blue-50/80 backdrop-blur-md border-b border-blue-100/80 relative z-40" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
<span className="text-sm font-medium text-blue-900 tracking-tight">WINTER STORM WARNING: Severe blizzard conditions active. Non-essential travel is strongly discouraged.</span>
</div>
<a className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5 shrink-0" href="#blizzard-info">
                    Emergency Guidelines <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<section className="relative w-full pt-6 md:pt-10 pb-4 bg-[#FAFAFA] flex flex-col items-center z-10">
<div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="reveal-load opacity-0 scale-[0.98] translate-y-6 relative w-full rounded-[2rem] overflow-hidden min-h-[50vh] md:min-h-[65vh] flex flex-col shadow-sm border border-black/[0.04]" style={{transitionProperty: 'opacity, transform', transitionDuration: '1200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>

<div className="absolute inset-0 w-full h-full">

<img alt="Chief of Police" className="w-full h-full object-cover object-[center_top]" decoding="sync" fetchpriority="high" src="https://www.lakewoodpolicenj.com/wp-content/uploads/2019/05/Office-of-the-Chief-Picture.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
</div>

<div className="relative z-20 flex flex-col justify-center w-full h-full p-8 md:p-12 lg:p-20 flex-grow">

<div className="flex flex-col items-start w-full max-w-2xl lg:max-w-3xl">
<h1 className="reveal-load opacity-0 translate-y-6 text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-white leading-[1.05] mb-6" style={{textWrap: 'balance', transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms'}}>
                                Protecting our community with integrity.
                            </h1>
<p className="reveal-load opacity-0 translate-y-6 text-base md:text-lg text-neutral-200 font-normal mb-10 leading-relaxed max-w-2xl" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '650ms'}}>
                                Under the leadership of Chief Gregory H. Meyer, we are dedicated to providing professional, transparent, and compassionate law enforcement to the residents of Lakewood Township.
                            </p>

<div className="reveal-load opacity-0 translate-y-6 flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '800ms'}}>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors duration-300 shadow-[0_2px_15px_-4px_rgba(255,255,255,0.15)]" href="#">
                                    Report an Incident
                                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300" href="#">
                                    Submit a Tip
                                </a>
</div>
<div className="reveal-load opacity-0 translate-y-6 flex items-center gap-4" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '950ms'}}>
<div className="flex items-center">
<i className="text-yellow-400 fill-yellow-400 w-5 h-5" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-5 h-5" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-5 h-5" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-5 h-5" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-5 h-5" data-lucide="star"></i>
</div>
<span className="text-sm font-medium text-white">CALEA Accredited Agency</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-30 mt-6 md:mt-10">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal opacity-0 scale-[0.98] translate-y-6 relative flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-10 rounded-3xl bg-amber-50 border border-amber-200/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400"></div>
<div className="flex flex-col gap-3 max-w-4xl">
<div className="flex items-center gap-3 mb-1">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
</span>
<h3 className="text-sm font-medium text-amber-900 tracking-tight uppercase">Community Advisory</h3>
</div>
<p className="text-lg md:text-xl text-amber-950 font-medium leading-relaxed tracking-tight">
                            Route 9 Northbound will experience delays this weekend due to scheduled municipal events. Please plan alternate routes.
                        </p>
</div>
<a className="group shrink-0 flex items-center gap-2 text-sm font-medium text-amber-700 bg-amber-200/50 px-5 py-3 rounded-full hover:bg-amber-200 hover:text-amber-900 transition-colors" href="#">
                        Read details
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="pt-16 pb-12 bg-[#FAFAFA] relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<a className="h-full group relative p-8 bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] flex flex-col gap-8 overflow-hidden" href="#" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex justify-between items-start">
<i className="text-neutral-400 w-6 h-6 group-hover:text-black transition-colors duration-500" data-lucide="file-text" strokeWidth="1.5"></i>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" data-lucide="arrow-up-right" strokeWidth="1.5" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">File a Report</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">Submit non-emergency incident reports online securely.</p>
</div>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<a className="h-full group relative p-8 bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] flex flex-col gap-8 overflow-hidden" href="#" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex justify-between items-start">
<i className="text-neutral-400 w-6 h-6 group-hover:text-black transition-colors duration-500" data-lucide="ticket" strokeWidth="1.5"></i>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" data-lucide="arrow-up-right" strokeWidth="1.5" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">Pay a Ticket</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">Access the municipal court portal for rapid payments.</p>
</div>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<a className="h-full group relative p-8 bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] flex flex-col gap-8 overflow-hidden" href="#" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex justify-between items-start">
<i className="text-neutral-400 w-6 h-6 group-hover:text-black transition-colors duration-500" data-lucide="folder-open" strokeWidth="1.5"></i>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" data-lucide="arrow-up-right" strokeWidth="1.5" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">Document Center</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">OPRA requests, crash reports, and official forms.</p>
</div>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<a className="h-full group relative p-8 bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] flex flex-col gap-8 overflow-hidden" href="#" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex justify-between items-start">
<i className="text-neutral-400 w-6 h-6 group-hover:text-black transition-colors duration-500" data-lucide="crosshair" strokeWidth="1.5"></i>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" data-lucide="arrow-up-right" strokeWidth="1.5" style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">Firearms Apps</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">State required permits and registration documentation.</p>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="pb-24 pt-12 bg-[#FAFAFA] relative z-20" id="blizzard-info">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">

<div className="reveal opacity-0 translate-y-6 lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm font-medium text-blue-700 w-fit">
<i className="w-4 h-4" data-lucide="snowflake" strokeWidth="1.5"></i>
                        Active Emergency
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-tight">Blizzard Information &amp; Resources</h2>
<p className="text-base text-neutral-500 leading-relaxed font-normal">
                        A Severe Winter Storm Warning is currently in effect for Lakewood Township. We anticipate heavy snow accumulations alongside dangerous wind gusts. Please remain off the roadways to allow emergency and public works vehicles to operate safely.
                    </p>
<div className="mt-4 p-8 rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col gap-4">
<h3 className="text-base font-medium text-black tracking-tight">Warming Centers</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">
                            The Municipal Community Center is open 24/7 as a primary warming center. If you require emergency transport due to medical necessity, contact our non-emergency line.
                        </p>
<div className="h-[1px] w-full bg-black/[0.04] my-2"></div>
<h3 className="text-base font-medium text-black tracking-tight">Power Outages</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">
                            Do not call 911 for power outages unless there is an immediate life-threatening emergency or downed wire. Report all outages directly to JCP&amp;L.
                        </p>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">
<h2 className="reveal opacity-0 translate-y-6 text-sm font-medium tracking-tight text-neutral-400 uppercase" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>Winter Safety Guidelines</h2>
<div className="grid sm:grid-cols-2 gap-4">
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<div className="h-full p-8 rounded-2xl border border-black/[0.04] bg-white hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col gap-5">
<div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
<i className="text-blue-600 w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">Staying Warm Indoors</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">Close off unneeded rooms, seal drafty doors with towels, and cover windows at night. Never use a gas oven to heat your home.</p>
</div>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<div className="h-full p-8 rounded-2xl border border-black/[0.04] bg-white hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col gap-5">
<div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center">
<i className="text-amber-600 w-6 h-6" data-lucide="triangle-alert" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">Generator Safety</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">Always operate generators outdoors in well-ventilated spaces, positioned far from windows and doors to prevent carbon monoxide poisoning.</p>
</div>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<div className="h-full p-8 rounded-2xl border border-black/[0.04] bg-white hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col gap-5">
<div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center">
<i className="text-black w-6 h-6" data-lucide="route" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">Essential Travel Only</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">If you absolutely must drive, keep a winter survival kit in your vehicle. If stranded, stay in the car and keep the exhaust pipe clear of snow.</p>
</div>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms'}}>
<div className="h-full p-8 rounded-2xl border border-black/[0.04] bg-white hover:border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col gap-5">
<div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center">
<i className="text-red-600 w-6 h-6" data-lucide="briefcase-medical" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">Health &amp; Exposure</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed">Watch for early signs of frostbite and hypothermia. Avoid severe overexertion when shoveling snow to prevent cardiac events.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 bg-[#FAFAFA] relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="reveal opacity-0 scale-[0.98] translate-y-6 bg-[#0A0A0A] rounded-[2rem] p-8 md:p-16 border border-neutral-800 shadow-xl relative overflow-hidden" style={{transitionProperty: 'opacity, transform', transitionDuration: '1200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Dedicated to Excellence</h2>
<p className="text-neutral-400 text-base font-normal leading-relaxed">
                                Serving over 100,000 residents, the Lakewood Police Department operates with a commitment to maintaining order, protecting life, and improving community relations through data-driven and collaborative policing.
                            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors group border-b border-white/20 pb-1 shrink-0" href="#">
                            View our annual report <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-white">130<span className="text-neutral-600">+</span></span>
<span className="text-sm font-medium text-neutral-400 tracking-wide uppercase mt-2">Sworn Officers</span>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-white">125</span>
<span className="text-sm font-medium text-neutral-400 tracking-wide uppercase mt-2">Years Serving</span>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-white">41<span className="text-neutral-600 text-3xl ml-1">sq mi</span></span>
<span className="text-sm font-medium text-neutral-400 tracking-wide uppercase mt-2">Coverage Area</span>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms'}}>
<div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-white">100<span className="text-neutral-600 text-4xl">%</span></span>
<span className="text-sm font-medium text-neutral-400 tracking-wide uppercase mt-2">Accredited Standard</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
<div className="reveal opacity-0 translate-y-6 lg:col-span-5 flex flex-col gap-6" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black">Transparency &amp; Trust</h2>
<p className="text-base text-neutral-500 leading-relaxed font-normal mb-6">
                        We believe that effective law enforcement relies heavily on mutual trust and open dialogue. Access our policies, procedures, and accountability measures to see how we maintain the highest standards of integrity.
                    </p>
<div className="inline-flex">
<a className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shadow-[0_2px_10px_-4px_rgba(0,0,0,0.5)]" href="#">
                            Public Records Portal
                        </a>
</div>
</div>
<div className="lg:col-span-7 flex flex-col w-full">
<div className="reveal opacity-0 translate-y-4" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<a className="group flex items-center justify-between py-6 border-b border-black/[0.06] hover:border-black/[0.15] transition-colors duration-300" href="#">
<div className="flex items-center gap-5">
<div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
<i className="text-black w-6 h-6" data-lucide="shield-alert" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-black">Internal Affairs</span>
<span className="text-sm text-neutral-500 font-normal">Review complaint procedures and annual reports.</span>
</div>
</div>
<i className="text-neutral-300 w-5 h-5 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-4" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<a className="group flex items-center justify-between py-6 border-b border-black/[0.06] hover:border-black/[0.15] transition-colors duration-300" href="#">
<div className="flex items-center gap-5">
<div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
<i className="text-black w-6 h-6" data-lucide="video" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-black">Body Worn Cameras</span>
<span className="text-sm text-neutral-500 font-normal">Learn about our BWC policy and implementation.</span>
</div>
</div>
<i className="text-neutral-300 w-5 h-5 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-4" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<a className="group flex items-center justify-between py-6 border-b border-transparent hover:border-black/[0.15] transition-colors duration-300" href="#">
<div className="flex items-center gap-5">
<div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
<i className="text-black w-6 h-6" data-lucide="file-plus" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-black">Use of Force Policy</span>
<span className="text-sm text-neutral-500 font-normal">State guidelines and departmental adherence.</span>
</div>
</div>
<i className="text-neutral-300 w-5 h-5 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal opacity-0 translate-y-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">Department Divisions</h2>
<p className="text-base text-neutral-500 leading-relaxed font-normal">Specialized units working cohesively to provide comprehensive, modern law enforcement services.</p>
</div>
<a className="text-sm font-medium text-black hover:text-neutral-500 transition-colors shrink-0 flex items-center gap-1" href="#">
                        Explore all divisions <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<a className="h-full group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.04] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] flex items-center justify-between" href="#" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col">
<h3 className="text-base font-medium text-black tracking-tight mb-1">Patrol Division</h3>
<p className="text-sm text-neutral-500 font-normal">24/7 primary response unit</p>
</div>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<a className="h-full group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.04] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] flex items-center justify-between" href="#" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col">
<h3 className="text-base font-medium text-black tracking-tight mb-1">Detective Bureau</h3>
<p className="text-sm text-neutral-500 font-normal">Criminal investigations</p>
</div>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<a className="h-full group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.04] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] flex items-center justify-between" href="#" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col">
<h3 className="text-base font-medium text-black tracking-tight mb-1">Traffic Safety</h3>
<p className="text-sm text-neutral-500 font-normal">Crash investigation &amp; enforcement</p>
</div>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<a className="h-full group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.04] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] flex items-center justify-between" href="#" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col">
<h3 className="text-base font-medium text-black tracking-tight mb-1">K-9 Unit</h3>
<p className="text-sm text-neutral-500 font-normal">Specialized detection teams</p>
</div>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms'}}>
<a className="h-full group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.04] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] flex items-center justify-between" href="#" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col">
<h3 className="text-base font-medium text-black tracking-tight mb-1">Drone Unit</h3>
<p className="text-sm text-neutral-500 font-normal">Aerial support operations</p>
</div>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '600ms'}}>
<a className="h-full group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.04] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] flex items-center justify-between" href="#" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col">
<h3 className="text-base font-medium text-black tracking-tight mb-1">Strategic Response</h3>
<p className="text-sm text-neutral-500 font-normal">High-risk incident management</p>
</div>
<i className="text-neutral-300 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" data-lucide="arrow-right" strokeWidth="1.5" style={{transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
<div className="reveal opacity-0 translate-y-6 flex flex-col md:flex-row md:items-end justify-between gap-6" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">Latest Updates</h2>
<p className="text-base text-neutral-500 leading-relaxed font-normal">Stay informed with the newest press releases, community events, and departmental announcements.</p>
</div>
<a className="text-sm font-medium text-black hover:text-neutral-500 transition-colors shrink-0 flex items-center gap-1" href="#">
                        View all news <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<a className="h-full group flex flex-col gap-5" href="#">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100 border border-black/[0.04]">
<img alt="Community" className="w-full h-full object-cover group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}/>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm text-neutral-400 font-medium tracking-tight">Oct 12, 2025</span>
<h3 className="text-base md:text-lg font-medium text-black tracking-tight leading-snug group-hover:text-neutral-600 transition-colors duration-300">Annual National Night Out Sees Record Attendance</h3>
</div>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<a className="h-full group flex flex-col gap-5" href="#">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100 border border-black/[0.04]">
<img alt="Training" className="w-full h-full object-cover group-hover:scale-105" loading="lazy" src="https://www.lakewoodpolicenj.com/wp-content/uploads/2022/08/9-scaled.jpg" style={{transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}/>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm text-neutral-400 font-medium tracking-tight">Oct 05, 2025</span>
<h3 className="text-base md:text-lg font-medium text-black tracking-tight leading-snug group-hover:text-neutral-600 transition-colors duration-300">New De-escalation Training Facility Opens</h3>
</div>
</a>
</div>
<div className="reveal opacity-0 translate-y-6 h-full" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<a className="h-full group flex flex-col gap-5" href="#">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100 border border-black/[0.04]">
<img alt="Outreach" className="w-full h-full object-cover group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}/>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm text-neutral-400 font-medium tracking-tight">Sep 28, 2025</span>
<h3 className="text-base md:text-lg font-medium text-black tracking-tight leading-snug group-hover:text-neutral-600 transition-colors duration-300">LTPD Launches Autumn Neighborhood Watch Program</h3>
</div>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#0A0A0A] text-neutral-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="reveal opacity-0 translate-y-6 flex flex-col md:col-span-1" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<a className="text-2xl font-medium tracking-tight text-white mb-6 leading-none" href="#">LTPD</a>
<p className="text-sm leading-relaxed mb-6 font-normal text-neutral-500">
                        231 Third Street<br/>Municipal Building<br/>Lakewood, NJ 08701
                    </p>
<a className="text-sm hover:text-white transition-colors" href="mailto:info@lakewoodpolicenj.com">info@lakewoodpolicenj.com</a>
</div>
<div className="reveal opacity-0 translate-y-6 flex flex-col" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<h4 className="text-white text-sm font-medium tracking-tight mb-6 uppercase">Portal</h4>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li><a className="hover:text-white transition-colors" href="#">Pay a Ticket</a></li>
<li><a className="hover:text-white transition-colors" href="#">Crash Reports</a></li>
<li><a className="hover:text-white transition-colors" href="#">Firearms Applications</a></li>
<li><a className="hover:text-white transition-colors" href="#">Submit a Tip</a></li>
</ul>
</div>
<div className="reveal opacity-0 translate-y-6 flex flex-col" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '300ms'}}>
<h4 className="text-white text-sm font-medium tracking-tight mb-6 uppercase">Resources</h4>
<ul className="flex flex-col gap-4 text-sm font-normal">
<li><a className="hover:text-white transition-colors" href="#">Forms &amp; Documents</a></li>
<li><a className="hover:text-white transition-colors" href="#">OPRA Requests</a></li>
<li><a className="hover:text-white transition-colors" href="#">Body Worn Cameras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="reveal opacity-0 translate-y-6 flex flex-col" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms'}}>
<h4 className="text-white text-sm font-medium tracking-tight mb-6 uppercase">Connect</h4>
<div className="flex items-center gap-5 text-base">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Facebook</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">X</a>
</div>
</div>
</div>
<div className="reveal opacity-0 translate-y-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-normal text-neutral-600" style={{transitionProperty: 'opacity, transform', transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms'}}>
<div>© 2026 Lakewood Township Police Department.</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
