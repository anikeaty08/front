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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
teal: '#0d9488', // Teal-600
yellow: '#facc15', // Yellow-400
dark: '#0f172a', // Slate-900
}
},
spacing: {
'128': '32rem',
}
}
}
}



        // Dark Mode Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 glass-panel transition-colors duration-300">
<div className="max-w-[1440px] mx-auto px-6 xl:px-[120px]">
<div className="flex h-[88px] items-center justify-between">

<div className="flex items-center gap-2 w-[200px]">
<div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:paw-print" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle className="" cx="20" cy="16" r="2"></circle><path className="" d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z"></path></g></svg>
</div>
<span className="dark:text-white cursor-pointer text-lg font-semibold text-slate-900 tracking-tight" onclick="window.location.href='/home'" role="button">PawPilot Pet</span>
</div>

<div className="hidden lg:flex items-center gap-7">
<a className="dark:text-slate-400 hover:text-brand-teal transition-colors text-sm font-medium text-slate-600" href="/services">Services</a>
<a className="dark:text-slate-400 hover:text-brand-teal transition-colors text-sm font-medium text-slate-600" href="/pricing">Pricing</a>
<a className="dark:text-slate-400 hover:text-brand-teal transition-colors text-sm font-medium text-slate-600" href="/safety">Safety</a>
<a className="dark:text-slate-400 hover:text-brand-teal transition-colors text-sm font-medium text-slate-600" href="/gallery">Gallery</a>
<a className="dark:text-slate-400 hover:text-brand-teal transition-colors text-sm font-medium text-slate-600" href="/client-portal">Client Portal</a>
</div>

<div className="flex items-center gap-4 w-[240px] justify-end">

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" id="theme-toggle">
<svg aria-hidden="true" className="iconify dark:hidden iconify--lucide" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify hidden dark:inline iconify--lucide" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</button>
<div className="hidden sm:flex flex-col items-end">
<button className="dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity cursor-pointer text-sm font-semibold text-white bg-slate-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" onclick="window.location.href='/book'" role="button">
                            Book Now
                        </button>
<span className="text-[10px] text-left font-medium text-slate-500 tracking-wide mt-1">Call (512) 555-0198</span>
</div>

<button className="lg:hidden p-2 text-slate-600 dark:text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="overflow-hidden pt-[144px] pb-14 relative">
<div className="xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1200px] mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-6 flex flex-col gap-8">
<div className="">
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                    Modern pet care. <br/>
<span className="text-slate-400 dark:text-slate-500">Total peace of mind.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                    GPS-tracked walks, insured boarding, and daily photo updates—so you never have to wonder how they’re
                    doing.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<button className="bg-brand-teal text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/10">
                        Check Availability
                    </button>
<a className="text-slate-600 dark:text-slate-300 font-medium hover:text-brand-teal flex items-center gap-1 group" href="#safety">
                    See our Safety Protocols
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="flex flex-wrap gap-4 mt-2">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:shield-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
                    Insured up to $2M
                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:activity" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
                    CPR Certified
                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:user-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
                    Vetted Caregivers
                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    GPS Tracking
                </div>
</div>

<div className="flex gap-8 border-t border-slate-200 dark:border-slate-800 pt-6 mt-2">
<div>
<div className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                        4.9 <svg aria-hidden="true" className="iconify text-brand-yellow iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="text-xs text-slate-500">Average rating</div>
</div>
<div>
<div className="text-xl font-semibold text-slate-900 dark:text-white">1,284</div>
<div className="text-xs text-slate-500">Verified reviews</div>
</div>
<div>
<div className="text-xl font-semibold text-slate-900 dark:text-white">12k+</div>
<div className="text-xs text-slate-500">Walks completed</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200 dark:shadow-none">
<img alt="Dog walker in park" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa7a094a-032e-4c0f-ac10-6cbac3db8ac2_1600w.webp" style={{}}/>
</div>
</div>
</div>
</section>

<section className="py-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:shield" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-semibold text-slate-900 dark:text-white">Fully insured</h3>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Coverage up to <span className="text-slate-900 dark:text-slate-200 font-medium">$2,000,000</span> for incidents during service.</p>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:user-check-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 21a8 8 0 0 1 13.292-6"></path><circle cx="10" cy="8" r="5"></circle><path d="m16 19l2 2l4-4"></path></g></svg>
<h3 className="font-semibold text-slate-900 dark:text-white">Vetted caregivers</h3>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Background checks + reference calls for every hire.</p>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:heart-pulse" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
<h3 className="font-semibold text-slate-900 dark:text-white">Pet CPR trained</h3>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">CPR &amp; First Aid refreshers every <span className="text-slate-900 dark:text-slate-200 font-medium">6 months</span>.</p>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:ambulance" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10H6m8 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m14 0h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14M8 8v4m1 6h6"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
<h3 className="font-semibold text-slate-900 dark:text-white">Emergency-ready</h3>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Partner clinics within <span className="text-slate-900 dark:text-slate-200 font-medium">15 minutes</span> of service areas.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 dark:bg-slate-950" id="services">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0">

<div className="max-w-2xl mb-12">
<span className="text-brand-teal font-medium tracking-wide uppercase text-xs mb-2 block">Services</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Choose the care your pet actually needs</h2>
<p className="text-slate-600 dark:text-slate-400 text-lg">Book in under 60 seconds. Transparent pricing. No surprises.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dog Walking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fb87e57-114e-4baf-9876-693d03a33ee0_800w.webp" style={{}}/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-baseline mb-3">
<h3 className="font-semibold text-lg dark:text-white">Dog Walking</h3>
<span className="text-sm font-medium text-slate-500">From $28</span>
</div>
<ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 flex-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>30 min <span className="text-slate-900 dark:text-slate-200 font-medium ml-auto">$28</span></li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>60 min <span className="text-slate-900 dark:text-slate-200 font-medium ml-auto">$42</span></li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>GPS map + photo update</li>
</ul>
<button className="w-full py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">Book a Walk</button>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Daycare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11e6e3b7-e978-43b3-bc0c-a85169a1dd0f_800w.webp" style={{}}/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-baseline mb-3">
<h3 className="font-semibold text-lg dark:text-white">Daycare</h3>
<span className="text-sm font-medium text-slate-500">$55 / day</span>
</div>
<ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 flex-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>Drop-off 7:00–10:00</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>Pick-up 4:00–8:00</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>Max 8 dogs / group</li>
</ul>
<button className="w-full py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">Reserve Daycare</button>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Boarding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b7a4bd0-7834-41de-ab32-bcb759c6b781_800w.webp" style={{}}/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-baseline mb-3">
<h3 className="font-semibold text-lg dark:text-white">Overnight</h3>
<span className="text-sm font-medium text-slate-500">$95 / night</span>
</div>
<ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 flex-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>1:1 sleep space</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>3 photo updates daily</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>Meds support available</li>
</ul>
<button className="w-full py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">Request Boarding</button>
</div>
</div>

<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col group hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Drop In" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7a8edc9-aef8-4457-8143-385e0b065039_800w.webp" style={{}}/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-baseline mb-3">
<h3 className="font-semibold text-lg dark:text-white">Drop-In Visit</h3>
<span className="text-sm font-medium text-slate-500">$30</span>
</div>
<ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6 flex-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>20 min visit</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>Feeding, water, litter</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal rounded-full"></span>Great for shy pets</li>
</ul>
<button className="w-full py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">Schedule a Visit</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="portal">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 relative">

<div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none aspect-[3/2] w-full">
<img alt="Walking app" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd60349c-2066-42bf-a922-f1cc79e8b682_1600w.webp"/>
</div>

<div className="absolute -bottom-8 -right-4 sm:right-8 w-40 sm:w-48 h-40 sm:h-48 rounded-2xl border-4 border-white dark:border-slate-800 overflow-hidden shadow-xl">
<img alt="Happy Dog" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d926e3fa-c2ba-4f94-8ac5-2ce2518e58df_800w.webp"/>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="">
<span className="text-brand-teal font-medium tracking-wide uppercase text-xs mb-2 block">Client Portal</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Updates that calm separation anxiety</h2>
</div>
<ul className="space-y-4">
<li className="flex gap-3">
<div className="mt-1 min-w-5">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:map" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<span className="text-sm text-slate-600 dark:text-slate-400">Delivered to your phone after every walk.</span>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1 min-w-5">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:clipboard-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
</div>
<div>
<span className="text-sm text-slate-600 dark:text-slate-400">Detailed logs on meals, mood, and potty.</span>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1 min-w-5">
<svg aria-hidden="true" className="iconify text-brand-teal iconify--lucide" data-icon="lucide:image" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
<div>
<span className="text-sm text-slate-600 dark:text-slate-400">High-res moments you can share instantly.</span>
</div>
</li>
</ul>
<div className="pt-2">
<p className="text-xs font-medium text-slate-500 mb-4">Portal access is included with every service.</p>
<button className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        See a Portal Demo
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 dark:bg-slate-950" id="gallery">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0">

<div className="text-center max-w-2xl mx-auto mb-12">
<span className="text-brand-teal font-medium tracking-wide uppercase text-xs mb-2 block">Happy Tails</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Real moments. Real care.</h2>
<p className="text-slate-600 dark:text-slate-400 text-lg">Fresh photos from walks, daycare play, and cozy boarding nights.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


<img alt="Corgi" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96d3b4ac-bad7-4cf6-8760-d52367a77122_800w.webp"/>

<img alt="Great Dane" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c97c879-1e49-45dd-91d8-343d91b5eb64_800w.webp"/>

<img alt="Poodle" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d8bc22c-726a-4ade-bb80-8ed599d0a349_800w.webp"/>

<img alt="Napping dog" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8865bbcb-ceae-4fe4-a3e7-345593e0a140_800w.webp"/>

<img alt="Treat time" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cb92ce0-e3c7-43b2-a8f8-41b742b80270_800w.webp"/>

<img alt="Cat window" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12596d8f-6568-48a5-bfdf-a68b470b0270_800w.webp"/>

<img alt="Park sit" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fb2ae6f-1d26-436b-bd95-1ef3f8056da0_800w.webp" style={{}}/>

<img alt="Daycare group" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f673f18-6e58-4914-a5cc-e1c360d8361e_800w.webp" style={{}}/>

<img alt="Paws walking" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87924d13-2961-4120-a430-76ce9a32a604_800w.webp" style={{}}/>

<img alt="Towel dry" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/965b419e-e1f6-4172-a3b4-a2d35716c9a3_800w.webp"/>

<img alt="Brushing" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4246191-19c9-4053-a1b2-d9116997c04f_800w.webp"/>

<img alt="Sunset walk" className="aspect-square w-full object-cover rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8223241-7bcc-4552-bc62-98e39a9e4418_800w.webp"/>
</div>
</div>
</section>

<section className="py-16" id="safety">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 flex flex-col gap-6">
<div className="">
<span className="text-brand-teal font-medium tracking-wide uppercase text-xs mb-2 block">Safety</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">If something happens, we already know what to do</h2>
</div>

<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold flex items-center justify-center text-sm border border-slate-200 dark:border-slate-700">1</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white text-sm">Assess &amp; stabilize</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">Strict Pet CPR &amp; First Aid protocols engaged immediately.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold flex items-center justify-center text-sm border border-slate-200 dark:border-slate-700">2</div>
<div className="">
<h4 className="font-semibold text-slate-900 dark:text-white text-sm">Call you immediately</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">You are informed instantly with transparent next steps.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold flex items-center justify-center text-sm border border-slate-200 dark:border-slate-700">3</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white text-sm">Partner clinic transfer</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">Transport to emergency vet within <span className="font-medium text-slate-900 dark:text-white">15 minutes</span> if required.</p>
</div>
</div>
</div>

<div className="">
<span className="text-xs font-medium text-slate-500 block mb-2">What we prep for:</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 rounded-full">Heat risk</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 rounded-full">Allergic reaction</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 rounded-full">Minor injury</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 rounded-full">Escape risk</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 rounded-full">GI upset</span>
</div>
</div>
<div className="pt-2">
<button className="text-brand-teal font-semibold text-sm hover:underline">Read the Full Emergency Plan →</button>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
<img alt="Vet check" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83c871dc-be1e-4ea0-8785-85b24c26177d_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 dark:bg-slate-950">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0">

<div className="mb-12">
<span className="text-brand-teal font-medium tracking-wide uppercase text-xs mb-2 block">Our Team</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">We’re caregivers—and pet parents too</h2>
<p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">Every caregiver is background-checked and trained. You’ll always know who’s with your pet.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col">
<div className="rounded-xl overflow-hidden aspect-[4/5] mb-4 bg-slate-200">
<img alt="Maya" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6faa6c0-8158-4b24-87dc-f98e32bdcfc8_800w.webp"/>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white">Maya Thompson</h3>
<div className="text-sm text-brand-teal font-medium mb-1">Lead Walker</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Pet CPR • 6 years exp.</p>
<div className="text-xs text-slate-600 dark:text-slate-300 italic">Pet: “Juniper” (Corgi)</div>
</div>

<div className="flex flex-col">
<div className="rounded-xl overflow-hidden aspect-[4/5] mb-4 bg-slate-200">
<img alt="Daniel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc7f6b9a-b7d1-4335-9725-2231850dcc0f_800w.webp"/>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white">Daniel Kim</h3>
<div className="text-sm text-brand-teal font-medium mb-1">Boarding Host</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Fear-Free • Insured</p>
<div className="text-xs text-slate-600 dark:text-slate-300 italic">Pet: “Atlas” (Golden)</div>
</div>

<div className="flex flex-col">
<div className="rounded-xl overflow-hidden aspect-[4/5] mb-4 bg-slate-200">
<img alt="Sofia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5527af29-50c9-4c7d-85cf-f90dd21b272c_800w.webp"/>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white">Sofia Alvarez</h3>
<div className="text-sm text-brand-teal font-medium mb-1">Daycare Coord</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Group Safety • 5 years</p>
<div className="text-xs text-slate-600 dark:text-slate-300 italic">Pet: “Luna” (Mix)</div>
</div>

<div className="flex flex-col">
<div className="rounded-xl overflow-hidden aspect-[4/5] mb-4 bg-slate-200">
<img alt="Aisha" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbf1c8b6-e073-4c9a-8d0a-0d1726cc80ce_800w.webp" style={{}}/>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white">Aisha Patel</h3>
<div className="text-sm text-brand-teal font-medium mb-1">Client Care Mgr</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Meds Support • Checked</p>
<div className="text-xs text-slate-600 dark:text-slate-300 italic">Pet: “Mochi” (Tabby)</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col justify-center">
<span className="text-brand-teal font-medium tracking-wide uppercase text-xs mb-2 block">Reviews</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">Trusted by anxious pet parents</h2>
<div className="flex items-center gap-2 mb-2">
<div className="flex text-brand-yellow">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-semibold text-slate-900 dark:text-white">4.9</span>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">from 1,284 verified reviews</p>
<p className="text-slate-400 dark:text-slate-600 text-xs">Most requested: GPS walks + daily notes.</p>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-4">
<img alt="Rachel" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3976c529-b55d-4a97-9067-bc9f75c67dd4_320w.webp" style={{}}/>
<div>
<div className="font-semibold text-sm text-slate-900 dark:text-white">Rachel M.</div>
<div className="text-xs text-slate-500">Beagle “Otis”</div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">“First walk and I was nervous—then the photo update came in 12 minutes. The notes were detailed, and the GPS route matched exactly.”</p>
</div>

<div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-4">
<img alt="Marcus" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/083a591f-5412-4e54-bda1-0393d300a365_320w.webp" style={{}}/>
<div>
<div className="font-semibold text-sm text-slate-900 dark:text-white">Marcus J.</div>
<div className="text-xs text-slate-500">Shiba Inu “Kiko”</div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">“Boarding used to stress us out. PawPilot sent three daily photos and a ‘potty + appetite’ log. Kiko came home calm.”</p>
</div>

<div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-4">
<img alt="Hannah" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d249d41-96a1-483b-b31a-59d603987ecb_320w.webp"/>
<div>
<div className="font-semibold text-sm text-slate-900 dark:text-white">Hannah L.</div>
<div className="text-xs text-slate-500">Senior Lab “Winnie”</div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">“They handled meds perfectly and didn’t make it feel like a big deal. The team is warm, professional, and consistent.”</p>
</div>

<div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-4">
<img alt="Ethan" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7fb2feb-81f5-4d56-9ef7-490b2f97c202_320w.webp"/>
<div>
<div className="font-semibold text-sm text-slate-900 dark:text-white">Ethan S.</div>
<div className="text-xs text-slate-500">Mix “Pepper”</div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">“Pepper is shy. The drop-in visits were gentle and patient. The updates were honest—not overly polished.”</p>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0 relative">
<div className="rounded-3xl overflow-hidden relative h-[520px]">
<img alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95d562b4-67fd-4468-8af5-dfbafdbda9c8_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="dark:bg-slate-900/5 md:p-12 text-center bg-gradient-to-br from-white/20 via-white/10 to-transparent w-full max-w-[900px] border-white/20 border ring-white/10 ring-1 rounded-2xl pt-10 pr-10 pb-10 pl-10 relative shadow-2xl backdrop-blur-xl">
<h2 className="md:text-3xl dark:text-white text-3xl font-semibold text-white tracking-tight mb-3 relative drop-shadow-sm">
        Ready for calmer days (and happier tails)?</h2>
<p className="dark:text-slate-300 md:text-base text-base font-medium text-slate-100/90 mb-8 relative drop-shadow-sm">
        Serving
        Austin, TX: Downtown, Zilker, Travis Heights, Hyde Park, Mueller, East Austin.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-6 gap-x-4 gap-y-4 items-center justify-center">
<button className="sm:w-auto hover:bg-teal-700 transition-colors shadow-teal-900/10 text-base font-semibold text-white w-full border-transparent border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg">
                                Check Availability
                            </button>
<a className="dark:text-slate-300 hover:text-brand-teal font-medium text-white drop-shadow-sm" href="tel:5125550198">Call (512)
            555-0198</a>
</div>
<p className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest">Open 7 days • 7:00 AM – 9:00 PM</p>
</div>
</div>
</div>
</div>
</section>

<footer className="dark:bg-slate-950 dark:border-slate-800 transition-colors bg-slate-50 border-slate-200 border-t pt-16 pb-14">
<div className="max-w-[1200px] mx-auto px-6 xl:px-0">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-teal flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:paw-print" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z"></path></g></svg>
</div>
<span className="dark:text-white font-semibold text-slate-900 cursor-pointer" onclick="window.location.href='/home'" role="button">PawPilot Pet Care</span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm">Modern care. Total peace of mind.</p>
</div>

<div className="md:col-span-4">
<ul className="space-y-3">
<li className=""><a className="dark:text-slate-400 hover:text-brand-teal text-sm text-slate-600" href="#services">Services</a></li>
<li className=""><a className="dark:text-slate-400 hover:text-brand-teal text-sm text-slate-600" href="/pricing">Pricing</a></li>
<li className=""><a className="dark:text-slate-400 hover:text-brand-teal text-sm text-slate-600" href="/safety">Safety Protocols</a></li>
</ul>
</div>

<div className="md:col-span-4">
<ul className="space-y-3">
<li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            (512) 555-0198
                        </li>
<li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                            hello@pawpilotpetcare.com
                        </li>
<li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            Austin, Texas
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 PawPilot Pet Care. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
