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
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['"Instrument Serif"', 'serif'],
},
colors: {
royal: {
50: '#f4f6fa',
100: '#eef2f9',
200: '#dae3f3',
300: '#bbcae8',
800: '#1e3a8a',
850: '#172554', // Rich Royal
900: '#0B1120', // Almost Black Blue
950: '#020617', // Deepest
},
accent: {
blue: '#2563eb'
}
},
letterSpacing: {
'tighter': '-0.04em',
'tight': '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Mobile Menu Logic
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-royal-900', 'py-4', 'shadow-lg');
                nav.classList.remove('py-6', 'mix-blend-difference');
            } else {
                nav.classList.remove('bg-royal-900', 'py-4', 'shadow-lg');
                nav.classList.add('py-6', 'mix-blend-difference');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 bg-transparent py-4 shadow-lg">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
<a className="flex flex-col leading-none group" href="#">
<span className="text-xl font-semibold tracking-tighter uppercase">Superhost</span>
<span className="text-xs font-light tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">Hospitality Group</span>
</a>
<div className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide">
<a className="hover:text-accent-blue transition-colors" href="#services">Services</a>
<a className="hover:text-accent-blue transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-accent-blue transition-colors" href="#approach">Philosophy</a>
<a className="hover:text-accent-blue transition-colors" href="#newsroom">Journal</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-royal-900 transition-all duration-500" href="#contact">
                    Start a Project
                </a>
<button className="lg:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] w-full flex items-end pb-24 lg:pb-32 overflow-hidden bg-royal-950">

<div className="absolute inset-0 z-0">
<img alt="Luxury Blue Architecture" className="image-cover brightness-[0.5] scale-105 saturate-[0.8]" src="https://images.unsplash.com/photo-1648245173157-2b9146acee34?q=80&amp;w=2274&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-900/40 to-transparent mix-blend-multiply"></div>
</div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8">
<div className="reveal-on-scroll reveal-visible">
<div className="inline-flex items-center gap-3 mb-8 border-l border-white/30 pl-4">
<span className="text-xs font-medium text-blue-200/80 uppercase tracking-widest">Est. 1981</span>
<span className="w-8 h-px bg-white/30"></span>
<span className="text-xs font-medium text-blue-200/80 uppercase tracking-widest">Global Operations</span>
</div>
<h1 className="font-serif text-6xl sm:text-7xl lg:text-9xl text-white leading-[0.85] tracking-tighter mb-8 font-playfair">
                            People Focused.<br/>
<span className="text-blue-200/60 italic font-light">Performance Driven.</span>
</h1>
</div>
</div>
<div className="lg:col-span-4 lg:mb-4 reveal-on-scroll reveal-visible" style={{transitionDelay: '100ms'}}>
<p className="text-lg text-blue-100/70 font-light leading-relaxed mb-8 max-w-sm ml-auto">
                        We are the silent partners behind the world's most disciplined hotel assets. B2B management, development, and investment for the modern owner.
                    </p>
<div className="flex justify-end">
<a className="group flex items-center gap-3 text-white" href="#portfolio">
<span className="text-sm font-medium border-b border-white/30 pb-0.5 group-hover:border-white transition-all">View Selected Works</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="bg-royal-850 text-white border-b border-white/5">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-x border-white/10">
<div className="p-8 lg:p-12 reveal-on-scroll reveal-visible">
<div className="text-4xl lg:text-5xl font-light tracking-tighter mb-2 font-serif text-blue-50 font-playfair">40+</div>
<div className="text-xs text-blue-200/40 uppercase tracking-widest">Years Experience</div>
</div>
<div className="p-8 lg:p-12 reveal-on-scroll reveal-visible" style={{transitionDelay: '100ms'}}>
<div className="text-4xl lg:text-5xl font-light tracking-tighter mb-2 font-serif text-blue-50 font-playfair">$300M</div>
<div className="text-xs text-blue-200/40 uppercase tracking-widest">Assets Under Mgt</div>
</div>
<div className="p-8 lg:p-12 reveal-on-scroll reveal-visible" style={{transitionDelay: '200ms'}}>
<div className="text-4xl lg:text-5xl font-light tracking-tighter mb-2 font-serif text-blue-50 font-playfair">35+</div>
<div className="text-xs text-blue-200/40 uppercase tracking-widest">Projects Delivered</div>
</div>
<div className="p-8 lg:p-12 reveal-on-scroll reveal-visible" style={{transitionDelay: '300ms'}}>
<div className="text-4xl lg:text-5xl font-light tracking-tighter mb-2 font-serif text-blue-50 font-playfair">4</div>
<div className="text-xs text-blue-200/40 uppercase tracking-widest">Major Brands</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 bg-white text-royal-900" id="services">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 lg:mb-32 reveal-on-scroll reveal-visible">
<h2 className="font-serif text-5xl lg:text-7xl tracking-tighter leading-none text-royal-950 font-playfair">
                    Core Capabilities
                </h2>
<div className="mt-6 lg:mt-0 max-w-md">
<p className="text-slate-500 font-light leading-relaxed">
                        We don't just manage. We operate with the discipline of an owner and the precision of a developer.
                    </p>
</div>
</div>

<div className="border-t border-royal-100">

<div className="group border-b border-royal-100 py-12 lg:py-16 hover:bg-royal-50 transition-colors cursor-pointer reveal-on-scroll reveal-visible">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-1 text-xs font-mono text-royal-300">01</div>
<div className="lg:col-span-4">
<h3 className="font-serif text-4xl text-royal-900 tracking-tight group-hover:translate-x-2 transition-transform duration-500 font-playfair">Asset Management</h3>
</div>
<div className="lg:col-span-5">
<p className="text-slate-500 font-light leading-relaxed max-w-lg">
                                Protecting the asset through operational discipline. We provide transparent reporting, decisive execution, and consistent guest experiences that drive RevPAR.
                            </p>
</div>
<div className="lg:col-span-2 flex justify-end">
<div className="w-12 h-12 rounded-full border border-royal-200 flex items-center justify-center group-hover:bg-royal-850 group-hover:border-royal-850 group-hover:text-white transition-all text-royal-850">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group border-b border-royal-100 py-12 lg:py-16 hover:bg-royal-50 transition-colors cursor-pointer reveal-on-scroll reveal-visible">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-1 text-xs font-mono text-royal-300">02</div>
<div className="lg:col-span-4">
<h3 className="font-serif text-4xl text-royal-900 tracking-tight group-hover:translate-x-2 transition-transform duration-500 font-playfair">Development</h3>
</div>
<div className="lg:col-span-5">
<p className="text-slate-500 font-light leading-relaxed max-w-lg">
                                From concept to opening. We partner early to shape hotels that are built for operational efficiency and long-term staffing stability.
                            </p>
</div>
<div className="lg:col-span-2 flex justify-end">
<div className="w-12 h-12 rounded-full border border-royal-200 flex items-center justify-center group-hover:bg-royal-850 group-hover:border-royal-850 group-hover:text-white transition-all text-royal-850">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group border-b border-royal-100 py-12 lg:py-16 hover:bg-royal-50 transition-colors cursor-pointer reveal-on-scroll reveal-visible">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-1 text-xs font-mono text-royal-300">03</div>
<div className="lg:col-span-4">
<h3 className="font-serif text-4xl text-royal-900 tracking-tight group-hover:translate-x-2 transition-transform duration-500 font-playfair">Investment</h3>
</div>
<div className="lg:col-span-5">
<p className="text-slate-500 font-light leading-relaxed max-w-lg">
                                Strategic acquisition and capital deployment. We evaluate opportunities through a lens of value creation and risk management.
                            </p>
</div>
<div className="lg:col-span-2 flex justify-end">
<div className="w-12 h-12 rounded-full border border-royal-200 flex items-center justify-center group-hover:bg-royal-850 group-hover:border-royal-850 group-hover:text-white transition-all text-royal-850">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full h-[60vh] lg:h-[80vh] overflow-hidden relative">
<img alt="Interior Detail" className="image-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-royal-900/40 mix-blend-multiply"></div>
<div className="absolute bottom-12 left-6 lg:left-12 text-white">
<p className="font-serif text-3xl lg:text-5xl tracking-tight font-playfair">"Details make the design."</p>
</div>
</section>

<section className="bg-royal-900 text-white py-24 lg:py-32 relative overflow-hidden" id="approach">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-800/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="reveal-on-scroll reveal-visible">
<span className="text-xs font-medium text-blue-200/60 uppercase tracking-widest mb-6 block">The Philosophy</span>
<h2 className="font-serif text-5xl lg:text-6xl tracking-tighter leading-none mb-10 text-white font-playfair">
                        Balanced Success<br/>Scorecard.
                    </h2>
<p className="text-lg text-blue-100/60 font-light leading-relaxed mb-12 max-w-md">
                        We don't rely on gut feelings. Our proprietary scorecard aligns every property leader across four critical dimensions.
                    </p>
<div className="space-y-8">
<div className="flex gap-6 items-start group">
<span className="text-2xl font-serif text-royal-800 group-hover:text-white transition-colors font-playfair">01</span>
<div>
<h4 className="text-xl font-medium mb-2">Consumer Experience</h4>
<p className="text-sm text-blue-200/50 font-light">Reputation drivers and service consistency.</p>
</div>
</div>
<div className="flex gap-6 items-start group">
<span className="text-2xl font-serif text-royal-800 group-hover:text-white transition-colors font-playfair">02</span>
<div>
<h4 className="text-xl font-medium mb-2">Operator Performance</h4>
<p className="text-sm text-blue-200/50 font-light">Staffing stability and training focus.</p>
</div>
</div>
<div className="flex gap-6 items-start group">
<span className="text-2xl font-serif text-royal-800 group-hover:text-white transition-colors font-playfair">03</span>
<div>
<h4 className="text-xl font-medium mb-2">Asset Health</h4>
<p className="text-sm text-blue-200/50 font-light">Long-term value protection and maintenance.</p>
</div>
</div>
<div className="flex gap-6 items-start group">
<span className="text-2xl font-serif text-royal-800 group-hover:text-white transition-colors font-playfair">04</span>
<div>
<h4 className="text-xl font-medium mb-2">Financial Outcomes</h4>
<p className="text-sm text-blue-200/50 font-light">RevPAR growth and GOP optimization.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[500px] lg:min-h-auto border border-royal-800/50 p-2 reveal-on-scroll delay-150 bg-royal-950/50 reveal-visible">
<div className="absolute inset-0 bg-royal-900/30"></div>
<img alt="Office Architecture" className="image-cover grayscale opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-royal-950/90 backdrop-blur-md p-6 border border-royal-800">
<div className="flex justify-between items-center mb-4">
<span className="text-xs uppercase tracking-widest text-blue-200/50">Live Reporting</span>
<iconify-icon className="text-white" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="w-full h-px bg-royal-800 mb-4"></div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl font-serif text-white font-playfair">98.4%</div>
<div className="text-[10px] uppercase text-blue-200/50 mt-1">Operational Compliance</div>
</div>
<div className="text-emerald-400 text-xs">+2.4%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-royal-50 py-24 lg:py-40" id="portfolio">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll reveal-visible">
<h2 className="font-serif text-5xl lg:text-7xl text-royal-950 tracking-tighter font-playfair">Selected Works</h2>
<a className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b border-royal-900 pb-1 mb-2 hover:opacity-60 transition-opacity text-royal-900" href="#">
                    Full Portfolio
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

<div className="flex flex-col gap-4 reveal-on-scroll reveal-visible">
<div className="relative overflow-hidden group w-full aspect-[3/4]">
<img alt="Luxury Lobby" className="image-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-royal-900/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="flex justify-between items-start mt-2">
<div>
<h3 className="font-serif text-2xl text-royal-900 font-playfair">The Monarch</h3>
<p className="text-xs font-mono text-royal-500 mt-1 uppercase">Chicago, IL — Renovation &amp; Mgt</p>
</div>
<span className="text-sm font-light text-royal-400">2023</span>
</div>
</div>

<div className="flex flex-col gap-16 md:mt-24">

<div className="flex flex-col gap-4 reveal-on-scroll delay-100 reveal-visible">
<div className="relative overflow-hidden group w-full aspect-square">
<img alt="Modern Hotel Exterior" className="image-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-2">
<div>
<h3 className="font-serif text-2xl text-royal-900 font-playfair">Vista Point</h3>
<p className="text-xs font-mono text-royal-500 mt-1 uppercase">Austin, TX — Ground Up Dev</p>
</div>
<span className="text-sm font-light text-royal-400">2022</span>
</div>
</div>

<div className="flex flex-col gap-4 reveal-on-scroll delay-200 reveal-visible">
<div className="relative overflow-hidden group w-full aspect-[4/3]">
<img alt="Resort Pool" className="image-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-2">
<div>
<h3 className="font-serif text-2xl text-royal-900 font-playfair">Azure Coast</h3>
<p className="text-xs font-mono text-royal-500 mt-1 uppercase">Miami, FL — Acquisition</p>
</div>
<span className="text-sm font-light text-royal-400">2021</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-royal-200 bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
<p className="text-xs font-mono text-royal-300 uppercase tracking-widest mb-12">Trusted Partners</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<h3 className="text-3xl lg:text-4xl font-serif text-royal-850 tracking-tight cursor-default font-playfair">Marriott</h3>
<h3 className="text-3xl lg:text-4xl font-serif text-royal-850 tracking-tight cursor-default font-playfair">Hilton</h3>
<h3 className="text-3xl lg:text-4xl font-serif text-royal-850 tracking-tight cursor-default font-playfair">IHG</h3>
<h3 className="text-3xl lg:text-4xl font-serif text-royal-850 tracking-tight cursor-default font-playfair">Choice</h3>
<h3 className="text-3xl lg:text-4xl font-serif text-royal-850 tracking-tight cursor-default font-playfair">Hyatt</h3>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-royal-50 overflow-hidden" id="newsroom">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex justify-between items-end mb-16 reveal-on-scroll reveal-visible">
<h2 className="font-serif text-4xl lg:text-5xl text-royal-950 tracking-tight font-playfair">From the Newsroom</h2>
<div className="flex gap-4">
<button className="w-10 h-10 border border-royal-200 rounded-full flex items-center justify-center hover:bg-royal-900 hover:text-white transition-colors text-royal-900">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 border border-royal-200 rounded-full flex items-center justify-center hover:bg-royal-900 hover:text-white transition-colors text-royal-900">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-8 overflow-x-auto pb-8 -mx-6 px-6 lg:px-0 scrollbar-hide">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between h-[450px] reveal-on-scroll border border-royal-100 reveal-visible">
<div>
<div className="text-xs font-mono text-royal-600 uppercase mb-4">Press Release</div>
<h3 className="font-serif text-3xl text-royal-900 leading-tight mb-4 font-playfair">Superhost acquires landmark downtown property in Detroit.</h3>
<p className="text-sm text-slate-500 leading-relaxed">The acquisition marks the group's 5th entry into the Michigan market, focusing on adaptive reuse of historic architecture.</p>
</div>
<div className="flex justify-between items-center border-t border-royal-50 pt-6">
<span className="text-xs text-royal-400">Oct 24, 2023</span>
<iconify-icon className="text-royal-900" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between h-[450px] reveal-on-scroll delay-100 border border-royal-100 reveal-visible">
<div>
<div className="text-xs font-mono text-royal-600 uppercase mb-4">Thought Leadership</div>
<h3 className="font-serif text-3xl text-royal-900 leading-tight mb-4 font-playfair">Why efficiency is the new luxury in hospitality.</h3>
<p className="text-sm text-slate-500 leading-relaxed">COO Timothy Foley discusses how backend operational rigor translates directly to guest satisfaction scores.</p>
</div>
<div className="flex justify-between items-center border-t border-royal-50 pt-6">
<span className="text-xs text-royal-400">Sep 12, 2023</span>
<iconify-icon className="text-royal-900" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between h-[450px] reveal-on-scroll delay-200 border border-royal-100 reveal-visible">
<div>
<div className="text-xs font-mono text-royal-600 uppercase mb-4">Careers</div>
<h3 className="font-serif text-3xl text-royal-900 leading-tight mb-4 font-playfair">Building the future: Senior leadership roles open.</h3>
<p className="text-sm text-slate-500 leading-relaxed">We are expanding our regional VP team. Learn what it takes to lead at Superhost.</p>
</div>
<div className="flex justify-between items-center border-t border-royal-50 pt-6">
<span className="text-xs text-royal-400">Aug 01, 2023</span>
<iconify-icon className="text-royal-900" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row min-h-screen" id="contact">

<div className="lg:w-1/2 bg-royal-850 text-white p-12 lg:p-24 flex flex-col justify-between">
<div className="reveal-on-scroll reveal-visible">
<span className="text-xs font-medium text-blue-200/50 uppercase tracking-widest mb-8 block">Inquiries</span>
<h2 className="font-serif text-5xl lg:text-6xl tracking-tighter leading-none mb-8 font-playfair">
                    Start the<br/>Conversation.
                </h2>
<p className="text-lg text-blue-100/60 font-light max-w-md leading-relaxed">
                    Whether you have an asset that needs disciplined management or a development project in planning, we are ready to engage.
                </p>
</div>
<div className="space-y-8 mt-16 lg:mt-0 reveal-on-scroll reveal-visible">
<div>
<div className="text-xs text-blue-200/50 uppercase tracking-widest mb-2">Headquarters</div>
<p className="text-xl font-light">1804 N. Naper Blvd, Ste 450<br/>Naperville, IL 60563</p>
</div>
<div>
<div className="text-xs text-blue-200/50 uppercase tracking-widest mb-2">Contact</div>
<a className="text-xl font-light hover:text-blue-200 transition-colors block mb-1" href="tel:6303280580">(630) 328-0580</a>
<a className="text-xl font-light hover:text-blue-200 transition-colors" href="mailto:hello@superhost.com">hello@superhost.com</a>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-white p-12 lg:p-24 flex items-center">
<form className="w-full max-w-lg space-y-12 reveal-on-scroll delay-100 reveal-visible">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-royal-400 mb-2">First Name</label>
<input className="w-full underline-input" placeholder="Jane" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-royal-400 mb-2">Last Name</label>
<input className="w-full underline-input" placeholder="Doe" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-royal-400 mb-2">Email Address</label>
<input className="w-full underline-input" placeholder="jane@company.com" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-royal-400 mb-2">Interest</label>
<select className="w-full underline-input bg-transparent cursor-pointer text-royal-900">
<option>Management Proposal</option>
<option>Development Partnership</option>
<option>Investment Opportunity</option>
<option>Careers</option>
</select>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-royal-400 mb-2">Project Details</label>
<textarea className="w-full underline-input resize-none" placeholder="Tell us about the asset, location, and your goals..." rows="3"></textarea>
</div>
<button className="group flex items-center gap-4 text-royal-900 mt-8" type="submit">
<span className="text-sm font-semibold uppercase tracking-widest border-b border-royal-900 pb-1 group-hover:opacity-60 transition-opacity">Submit Request</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-royal-950 text-white py-12 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-tighter uppercase block text-white">Superhost</span>
<span className="text-[10px] text-blue-200/30 font-mono uppercase tracking-widest">© 2024 Hospitality Group</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-blue-200/50 hover:text-white uppercase tracking-widest transition-colors" href="#">Privacy</a>
<a className="text-xs text-blue-200/50 hover:text-white uppercase tracking-widest transition-colors" href="#">Terms</a>
<a className="text-xs text-blue-200/50 hover:text-white uppercase tracking-widest transition-colors" href="#">Linkedin</a>
</div>
</div>
</footer>


    </>
  );
}
