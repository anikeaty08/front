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
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
brand: {
DEFAULT: '#2563eb',
dark: '#1e40af',
accent: '#3b82f6',
teal: '#14b8a6',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['IBM Plex Sans', 'sans-serif'],
},
animation: {
'marquee': 'marquee 40s linear infinite',
'marquee-slow': 'marquee 60s linear infinite',
'float-slow': 'float 12s ease-in-out infinite',
'float-slower': 'float 18s ease-in-out infinite',
'float-reverse': 'floatReverse 15s ease-in-out infinite',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'drift': 'drift 20s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
floatReverse: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(15px) rotate(3deg)' },
},
drift: {
'0%': { transform: 'translate(0, 0)' },
'50%': { transform: 'translate(-10px, -15px)' },
'100%': { transform: 'translate(0, 0)' },
}
}
}
}
}



        lucide.createIcons();
        const nav = document.getElementById('navbar');
        const parallaxCard = document.getElementById('parallax-card');
        
        window.addEventListener('scroll', () => {
            // Nav scroll effect
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Parallax effect for the card
            if (parallaxCard) {
                const speed = 0.08;
                const rect = parallaxCard.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    const yPos = (window.innerHeight - rect.top) * speed;
                    parallaxCard.style.transform = `translateY(${yPos - 40}px)`; // Offset by initial amount
                }
            }
        });

        // Intersection Observer for scroll reveal
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-transparent text-white [&amp;.scrolled]:bg-white/90 [&amp;.scrolled]:backdrop-blur-md [&amp;.scrolled]:border-b [&amp;.scrolled]:border-slate-200 [&amp;.scrolled]:text-slate-900" id="navbar">
<div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 relative flex items-center justify-center">
<svg className="w-full h-full transform transition-transform duration-500 group-hover:rotate-12" fill="none" viewbox="0 0 100 100">
<path className="fill-slate-900 group-hover:fill-brand-dark transition-colors duration-300" d="M50 15 C 28 15 10 33 10 55 C 10 77 28 95 50 95 C 38 95 28 85 28 55 C 28 25 38 15 50 15 Z"></path>
<path className="fill-brand group-hover:fill-brand-accent transition-colors duration-300" d="M55 10 C 80 10 95 30 98 48 C 90 40 75 30 55 25 Z"></path>
<path className="fill-brand group-hover:fill-brand-accent transition-colors duration-300" d="M55 100 C 80 100 95 80 98 62 C 90 70 75 80 55 85 Z"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold leading-none tracking-tight font-sans text-current">confido</span>
<span className="text-[9px] font-semibold uppercase tracking-[0.3em] opacity-70 leading-none mt-0.5 ml-0.5 text-current">LEGAL</span>
</div>
</a>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-brand-accent transition-all" href="#">Why Confido?</a>
<a className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-brand-accent transition-all" href="#">Developers</a>
<a className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-brand-accent transition-all" href="#">Solutions</a>
<a className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-brand-accent transition-all" href="#">Pricing</a>
<a className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-brand-accent transition-all" href="#">Resources</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-brand-accent transition-all" href="#">Sign In</a>
<a className="px-6 py-2.5 bg-brand text-white text-sm font-semibold rounded-md hover:bg-brand-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-brand/20" href="#">
                    Schedule A Demo
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden pt-20">

<div className="absolute top-[5%] left-[45%] -translate-x-1/2 w-[800px] h-[800px] animate-float-slower z-0 opacity-[0.02] pointer-events-none">
<svg className="w-full h-full origin-center" fill="none" viewbox="0 0 100 100">
<path d="M50 15 C 28 15 10 33 10 55 C 10 77 28 95 50 95 C 38 95 28 85 28 55 C 28 25 38 15 50 15 Z" fill="white"></path>
<path d="M55 10 C 80 10 95 30 98 48 C 90 40 75 30 55 25 Z" fill="white"></path>
<path d="M55 100 C 80 100 95 80 98 62 C 90 70 75 80 55 85 Z" fill="white"></path>
</svg>
</div>

<div className="absolute top-[25%] left-[70%] w-48 h-48 bg-brand-accent rounded-full blur-[80px] opacity-20 animate-float-reverse z-0 mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-[20%] left-[20%] w-64 h-64 bg-brand-teal rounded-full blur-[100px] opacity-10 animate-pulse-slow z-0 mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="reveal-element delay-100">
<span className="inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/5 text-brand-accent text-[11px] font-semibold uppercase tracking-widest mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                    Financial Operating System
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold text-white tracking-tight leading-[1.05] mb-8 reveal-element delay-200">
                Modern Payments<br/>
<span className="text-slate-400">Infrastructure</span> for<br/>
                Legal Professionals.
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-12 reveal-element delay-300">
                Automate compliance, streamline billing, and deliver a client-friendly experience.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-element delay-500">
<a className="px-8 py-4 bg-brand text-white font-semibold text-sm rounded-lg hover:bg-brand-dark hover:shadow-brand/40 hover:-translate-y-1 transition-all shadow-lg shadow-brand/20" href="#">
                    Book a Demo
                </a>
<a className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center gap-2" href="#">
                    View Documentation
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-transparent rounded-full"></div>
</div>
</section>

<div className="bg-white py-8 overflow-hidden whitespace-nowrap border-b border-slate-100">
<div className="flex animate-marquee w-[200%]">
<div className="flex-shrink-0 flex items-center justify-around w-1/2">
<span className="text-4xl md:text-6xl font-sans font-semibold text-slate-900 px-12 tracking-tight">CONFIDO LEGAL</span>
<span className="text-4xl md:text-6xl font-sans font-semibold text-outline px-12 tracking-tight">INFRASTRUCTURE</span>
<span className="text-4xl md:text-6xl font-sans font-semibold text-slate-900 px-12 tracking-tight">CONFIDO LEGAL</span>
<span className="text-4xl md:text-6xl font-sans font-semibold text-outline px-12 tracking-tight">COMPLIANCE</span>
</div>
<div className="flex-shrink-0 flex items-center justify-around w-1/2">
<span className="text-4xl md:text-6xl font-sans font-semibold text-slate-900 px-12 tracking-tight">CONFIDO LEGAL</span>
<span className="text-4xl md:text-6xl font-sans font-semibold text-outline px-12 tracking-tight">INFRASTRUCTURE</span>
<span className="text-4xl md:text-6xl font-sans font-semibold text-slate-900 px-12 tracking-tight">CONFIDO LEGAL</span>
<span className="text-4xl md:text-6xl font-sans font-semibold text-outline px-12 tracking-tight">COMPLIANCE</span>
</div>
</div>
</div>

<section className="relative bg-slate-50 pt-48 pb-32 overflow-hidden clip-shard">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-3/4 h-full bg-white clip-diagonal border-l border-slate-100"></div>
<div className="absolute top-24 left-24 w-64 h-64 bg-slate-200/40 rounded-full blur-3xl animate-drift"></div>
</div>
<div className="max-w-[1600px] mx-auto px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal-element">
<h2 className="text-4xl md:text-6xl font-sans font-semibold text-slate-900 tracking-tight leading-none">
                    Current<br/><span className="text-slate-400 font-normal">Capabilities</span>
</h2>
<div className="flex gap-4 mt-8 md:mt-0">
<button className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300 bg-white shadow-sm">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300 bg-white shadow-sm">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group hover-float bg-white h-[500px] relative overflow-hidden reveal-element rounded-2xl border border-slate-200 shadow-sm">
<div className="h-[60%] bg-slate-50 relative overflow-hidden group-hover:bg-slate-100/50 transition-colors duration-500">

<div className="absolute top-8 left-8 right-8 h-[120%] bg-white rounded-t-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-slate-200 p-4 transition-transform duration-700 ease-out group-hover:-translate-y-4">
<div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
<div>
<h4 className="text-sm font-semibold text-slate-900">Transactions</h4>
<p className="text-[10px] text-slate-500 mt-0.5">Real-time payment activity</p>
</div>
<div className="flex gap-2">
<div className="w-20 h-7 border border-slate-200 rounded-md bg-slate-50 flex items-center px-2 text-[10px] text-slate-400">Filter</div>
<div className="w-7 h-7 bg-brand/10 text-brand rounded-md flex items-center justify-center"><i className="w-3.5 h-3.5" data-lucide="download"></i></div>
</div>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pl-1">Date</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3">Client</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3">Amount</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3 text-right pr-1">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="text-[11px] text-slate-500 py-3 pl-1 font-mono">11/19/2025</td>
<td className="text-[11px] font-medium text-slate-900 py-3">Ira Gislason</td>
<td className="text-[11px] text-slate-600 py-3 font-mono">$64.18</td>
<td className="py-3 text-right pr-1"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">DEPOSITED</span></td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="text-[11px] text-slate-500 py-3 pl-1 font-mono">11/19/2025</td>
<td className="text-[11px] font-medium text-slate-900 py-3">Cheryl Deckow</td>
<td className="text-[11px] text-slate-600 py-3 font-mono">$62.33</td>
<td className="py-3 text-right pr-1"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">DEPOSITED</span></td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="text-[11px] text-slate-500 py-3 pl-1 font-mono">11/19/2025</td>
<td className="text-[11px] font-medium text-slate-900 py-3">Casey S.</td>
<td className="text-[11px] text-slate-600 py-3 font-mono">$51.90</td>
<td className="py-3 text-right pr-1"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">DEPOSITED</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-[40%] p-8 flex flex-col justify-between relative bg-white z-10 border-t border-slate-100">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Unified Dashboard</h3>
<p className="text-sm text-slate-500 leading-relaxed">Centralized view of all operating and trust account activity in real-time.</p>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-brand">Explore</span>
<i className="w-5 h-5 text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group hover-float bg-white h-[500px] relative overflow-hidden mt-0 md:mt-12 reveal-element rounded-2xl border border-slate-200 shadow-sm" style={{transitionDelay: '150ms'}}>
<div className="h-[60%] bg-slate-50 relative overflow-hidden group-hover:bg-slate-100/50 transition-colors duration-500">
<div className="absolute top-8 left-8 right-8 h-[120%] bg-white rounded-t-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-slate-200 p-4 transition-transform duration-700 ease-out group-hover:-translate-y-4">
<div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand text-white rounded flex items-center justify-center"><i className="w-3.5 h-3.5" data-lucide="plus"></i></div>
<h4 className="text-sm font-semibold text-brand">New Stored Method</h4>
</div>
<div className="text-[10px] text-slate-400 font-mono">SECURE VAULT</div>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pl-1">Status</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3">Client</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3">Method</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3 text-right pr-1">Network</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-50">
<td className="py-3 pl-1"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div><span className="text-[11px] text-slate-600">Active</span></div></td>
<td className="text-[11px] font-medium text-slate-900 py-3">Dr. Bob Turner</td>
<td className="text-[11px] text-slate-600 py-3">Credit</td>
<td className="text-[11px] text-slate-400 py-3 text-right font-mono">VISA 3042</td>
</tr>
<tr className="border-b border-slate-50">
<td className="py-3 pl-1"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div><span className="text-[11px] text-slate-600">Active</span></div></td>
<td className="text-[11px] font-medium text-slate-900 py-3">Grady Bayer</td>
<td className="text-[11px] text-slate-600 py-3">Credit</td>
<td className="text-[11px] text-slate-400 py-3 text-right font-mono">VISA 4242</td>
</tr>
<tr className="border-b border-slate-50">
<td className="py-3 pl-1"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div><span className="text-[11px] text-slate-600">Active</span></div></td>
<td className="text-[11px] font-medium text-slate-900 py-3">Dr. Luke F.</td>
<td className="text-[11px] text-slate-600 py-3">Credit</td>
<td className="text-[11px] text-slate-400 py-3 text-right font-mono">VISA 4242</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-[40%] p-8 flex flex-col justify-between relative bg-white z-10 border-t border-slate-100">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">IOLTA Compliance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Securely store payment methods and automatically route funds to trust or operating accounts.</p>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-brand">Learn More</span>
<i className="w-5 h-5 text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group hover-float bg-white h-[500px] relative overflow-hidden mt-0 md:mt-24 reveal-element rounded-2xl border border-slate-200 shadow-sm" style={{transitionDelay: '300ms'}}>
<div className="h-[60%] bg-slate-50 relative overflow-hidden group-hover:bg-slate-100/50 transition-colors duration-500">
<div className="absolute top-8 left-8 right-8 h-[120%] bg-white rounded-t-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-slate-200 p-4 transition-transform duration-700 ease-out group-hover:-translate-y-4">
<div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
<div>
<h4 className="text-sm font-semibold text-slate-900">Payment Links</h4>
<p className="text-[10px] text-slate-500 mt-0.5">Active invoice links</p>
</div>
<div className="w-6 h-6 bg-brand text-white rounded flex items-center justify-center hover:bg-brand-dark transition-colors"><i className="w-3.5 h-3.5" data-lucide="plus"></i></div>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pl-1">Status</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3">Client</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3">Paid</th>
<th className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pb-3 text-right pr-1">Link</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-50">
<td className="py-3 pl-1"><span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">PARTIAL</span></td>
<td className="text-[11px] font-medium text-slate-900 py-3">Ira Gislason</td>
<td className="text-[11px] text-slate-600 py-3 font-mono">$64.84</td>
<td className="py-3 text-right pr-1"><i className="w-3 h-3 text-brand inline hover:scale-125 transition-transform" data-lucide="link"></i></td>
</tr>
<tr className="border-b border-slate-50">
<td className="py-3 pl-1"><span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">PAID</span></td>
<td className="text-[11px] font-medium text-slate-900 py-3">Cheryl Deckow</td>
<td className="text-[11px] text-slate-600 py-3 font-mono">$62.22</td>
<td className="py-3 text-right pr-1"><i className="w-3 h-3 text-brand inline hover:scale-125 transition-transform" data-lucide="link"></i></td>
</tr>
<tr className="border-b border-slate-50">
<td className="py-3 pl-1"><span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">PAID</span></td>
<td className="text-[11px] font-medium text-slate-900 py-3">Casey S.</td>
<td className="text-[11px] text-slate-600 py-3 font-mono">$51.90</td>
<td className="py-3 text-right pr-1"><i className="w-3 h-3 text-brand inline hover:scale-125 transition-transform" data-lucide="link"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-[40%] p-8 flex flex-col justify-between relative bg-white z-10 border-t border-slate-100">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Invoicing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Create, send, and track professional invoices with embedded payment links.</p>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-brand">Details</span>
<i className="w-5 h-5 text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
<div className="mt-16 flex items-center gap-4 reveal-element">
<div className="h-px bg-slate-300 w-12"></div>
<a className="text-slate-900 text-sm font-semibold hover:text-brand transition-colors hover:translate-x-1 duration-300 inline-block" href="#">See full feature set</a>
</div>
</div>
</section>

<section className="py-32 bg-white relative">
<div className="max-w-[1600px] mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="relative reveal-element">
<div className="sticky top-32">
<div className="aspect-[4/5] bg-slate-100 overflow-hidden relative rounded-2xl group">
<img alt="Office Architecture" className="w-full h-full object-cover grayscale contrast-100 opacity-90 transition-transform duration-[2s] ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

<div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-100 shadow-2xl overflow-hidden p-0 will-change-transform" id="parallax-card">
<div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
<div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Transaction Feed</div>
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div className="p-2">
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 mb-2 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<span className="text-[10px] font-bold">IG</span>
</div>
<div>
<div className="text-xs font-bold text-slate-900">Ira Gislason</div>
<div className="text-[10px] text-slate-400">Invoice #2930</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-slate-900">$64.18</div>
<div className="text-[9px] text-emerald-600 font-bold uppercase">Deposited</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-10">
<h3 className="text-3xl md:text-5xl text-slate-900 font-sans font-semibold leading-tight mb-20 max-w-lg reveal-element tracking-tight">
                        Purpose-built financial infrastructure for modern legal operations.
                    </h3>
<div className="space-y-0 border-t border-slate-200 reveal-element">
<div className="group py-8 border-b border-slate-200 cursor-pointer transition-colors hover:bg-slate-50/50">
<div className="flex items-center justify-between">
<h4 className="text-xl font-semibold text-slate-900 group-hover:text-brand transition-colors">Trust Accounting</h4>
<i className="w-6 h-6 text-slate-300 group-hover:text-brand transition-colors group-hover:rotate-90 duration-500" data-lucide="plus"></i>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out">
<p className="pt-4 text-slate-500 max-w-md text-sm leading-relaxed">Compliance built-in. Separate operating and trust funds automatically with ledger-level accuracy.</p>
</div>
</div>
<div className="group py-8 border-b border-slate-200 cursor-pointer transition-colors hover:bg-slate-50/50">
<div className="flex items-center justify-between">
<h4 className="text-xl font-semibold text-slate-900 group-hover:text-brand transition-colors">Client Payments</h4>
<i className="w-6 h-6 text-slate-300 group-hover:text-brand transition-colors group-hover:rotate-90 duration-500" data-lucide="plus"></i>
</div>
</div>
<div className="group py-8 border-b border-slate-200 cursor-pointer transition-colors hover:bg-slate-50/50">
<div className="flex items-center justify-between">
<h4 className="text-xl font-semibold text-slate-900 group-hover:text-brand transition-colors">Developer API</h4>
<i className="w-6 h-6 text-slate-300 group-hover:text-brand transition-colors group-hover:rotate-90 duration-500" data-lucide="plus"></i>
</div>
</div>
<div className="group py-8 border-b border-slate-200 cursor-pointer transition-colors hover:bg-slate-50/50">
<div className="flex items-center justify-between">
<h4 className="text-xl font-semibold text-slate-900 group-hover:text-brand transition-colors">Reconciliation</h4>
<i className="w-6 h-6 text-slate-300 group-hover:text-brand transition-colors group-hover:rotate-90 duration-500" data-lucide="plus"></i>
</div>
</div>
<div className="group py-8 border-b border-slate-200 cursor-pointer transition-colors hover:bg-slate-50/50">
<div className="flex items-center justify-between">
<h4 className="text-xl font-semibold text-slate-900 group-hover:text-brand transition-colors">Case Management Integrations</h4>
<i className="w-6 h-6 text-slate-300 group-hover:text-brand transition-colors group-hover:rotate-90 duration-500" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 overflow-hidden border-t border-slate-200">
<div className="max-w-[1600px] mx-auto px-8 mb-10 flex items-end justify-between reveal-element">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-lg hover:scale-110 transition-transform">
<span className="font-bold text-lg">C</span>
</div>
<div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Trusted by 500+ Firms</div>
</div>

<div className="relative w-full overflow-hidden mask-linear">
<div className="flex w-[200%] animate-marquee-slow hover:[animation-play-state:paused] items-center">
<div className="flex w-1/2 justify-around items-center gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<h3 className="text-3xl font-sans font-bold text-slate-600 cursor-default hover:text-slate-900 transition-colors">Vantage</h3>
<h3 className="text-3xl font-sans font-semibold text-slate-600 tracking-tighter cursor-default hover:text-slate-900 transition-colors">NEXUS</h3>
<h3 className="text-3xl font-sans font-black text-slate-600 cursor-default hover:text-slate-900 transition-colors">ORBIT</h3>
<h3 className="text-3xl font-mono font-bold text-slate-600 cursor-default hover:text-slate-900 transition-colors">STRATA</h3>
<h3 className="text-3xl font-sans font-light text-slate-600 uppercase tracking-[0.2em] cursor-default hover:text-slate-900 transition-colors">Alta.Legal</h3>
</div>

<div className="flex w-1/2 justify-around items-center gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<h3 className="text-3xl font-sans font-bold text-slate-600 cursor-default hover:text-slate-900 transition-colors">Vantage</h3>
<h3 className="text-3xl font-sans font-semibold text-slate-600 tracking-tighter cursor-default hover:text-slate-900 transition-colors">NEXUS</h3>
<h3 className="text-3xl font-sans font-black text-slate-600 cursor-default hover:text-slate-900 transition-colors">ORBIT</h3>
<h3 className="text-3xl font-mono font-bold text-slate-600 cursor-default hover:text-slate-900 transition-colors">STRATA</h3>
<h3 className="text-3xl font-sans font-light text-slate-600 uppercase tracking-[0.2em] cursor-default hover:text-slate-900 transition-colors">Alta.Legal</h3>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[1600px] mx-auto px-8">
<div className="flex flex-col md:flex-row items-end gap-6 mb-20 reveal-element">
<div className="w-1.5 h-12 bg-brand rounded-full mb-2"></div>
<h2 className="text-4xl md:text-5xl font-sans font-semibold text-slate-900 tracking-tight">
                    Dedicated solutions<br/>
<span className="text-slate-400 font-normal">for every stakeholder</span>
</h2>
<div className="ml-auto">
<a className="flex items-center gap-2 text-sm font-semibold text-brand uppercase tracking-widest hover:text-slate-900 transition-colors group" href="#">
<div className="w-8 h-1 bg-brand rounded-full group-hover:w-12 transition-all duration-300"></div> About Us
                    </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group cursor-pointer reveal-element delay-100">
<div className="aspect-[16/9] bg-slate-100 mb-8 overflow-hidden relative rounded-xl">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="flex justify-between items-start border-b border-slate-200 pb-8">
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">For Law Firms</h3>
<p className="text-slate-500 max-w-sm">Modernize your back office operations with automated payments and reconciliation.</p>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-brand group-hover:text-white transition-all duration-300 border border-slate-100 group-hover:scale-110">
<i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-element delay-200">
<div className="aspect-[16/9] bg-slate-100 mb-8 overflow-hidden relative rounded-xl">
<img alt="Coding" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="flex justify-between items-start border-b border-slate-200 pb-8">
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">For Developers</h3>
<p className="text-slate-500 max-w-sm">Integrate compliant payments into your legal software with our robust API.</p>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-brand group-hover:text-white transition-all duration-300 border border-slate-100 group-hover:scale-110">
<i className="w-5 h-5" data-lucide="code-2"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] flex items-center overflow-hidden group">
<div className="absolute inset-0 bg-slate-900">
<img alt="Office" className="w-full h-full object-cover opacity-20 mix-blend-luminosity transition-transform duration-[20s] group-hover:scale-110" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>

<div className="absolute bottom-0 left-0 w-full h-3/4 bg-slate-900 clip-diagonal opacity-95"></div>
<div className="relative z-10 max-w-[1600px] mx-auto px-8 w-full mt-20 reveal-element">
<h2 className="text-5xl md:text-7xl font-sans font-semibold text-white max-w-5xl mb-12 leading-tight tracking-tight">
                Complete and specialized legal representation in any jurisdiction.
            </h2>
<div className="flex items-center gap-6">
<div className="h-px bg-white w-20 group-hover:w-32 transition-all duration-500"></div>
<a className="text-white font-semibold uppercase tracking-widest hover:text-brand-accent transition-colors" href="#">Find out more</a>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 text-center reveal-element">
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Stay Informed</h3>
<p className="text-slate-500 mb-12">Receive our latest updates and compliance guides.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<input className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-brand transition-colors placeholder:text-slate-400 font-sans" placeholder="Name" type="text"/>
<input className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-brand transition-colors placeholder:text-slate-400 font-sans" placeholder="Email" type="email"/>
<div className="pt-6 space-y-3">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 accent-slate-900 group-hover:accent-brand transition-colors" type="checkbox"/>
<span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">I agree to the processing of my personal data for marketing purposes.</span>
</label>
</div>
<button className="w-full mt-8 bg-slate-900 text-white py-4 font-semibold uppercase tracking-widest text-xs hover:bg-brand transition-all hover:scale-[1.02] rounded-lg shadow-lg hover:shadow-xl">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-slate-950 pt-24 pb-12 text-white border-t border-slate-900">
<div className="max-w-[1600px] mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
<div className="lg:col-span-2 space-y-8 pr-8">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 relative flex items-center justify-center">
<svg className="w-full h-full transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewbox="0 0 100 100">
<path className="fill-white" d="M50 15 C 28 15 10 33 10 55 C 10 77 28 95 50 95 C 38 95 28 85 28 55 C 28 25 38 15 50 15 Z"></path>
<path className="fill-brand" d="M55 10 C 80 10 95 30 98 48 C 90 40 75 30 55 25 Z"></path>
<path className="fill-brand" d="M55 100 C 80 100 95 80 98 62 C 90 70 75 80 55 85 Z"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold leading-none tracking-tight font-sans text-white">confido</span>
<span className="text-[9px] font-semibold uppercase tracking-[0.3em] opacity-70 leading-none mt-0.5 ml-0.5 text-white">LEGAL</span>
</div>
</a>
<p className="text-slate-400 leading-relaxed max-w-sm">
                        Revolutionizing contract management with AI-powered solutions for modern legal teams.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Product</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Terms and Conditions</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Financially Legal</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Support Center</a></li>
</ul>
</div>
</div>
<div className="mb-16">
<h4 className="text-white font-semibold mb-6 text-lg">Practice Areas</h4>
<div className="border border-white/5 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
<div className="space-y-4">
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Business Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Mediation</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Litigation</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Bankruptcy Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Injury Law</a>
</div>
<div className="space-y-4">
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Criminal Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Immigration Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Intellectual Property Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Elder Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Mass Tort</a>
</div>
<div className="space-y-4">
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Outsourced General Counsel</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Civil Rights Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Family Law</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Estate and Probate</a>
<a className="block text-slate-400 hover:text-white transition-colors" href="#">Workers' Compensation</a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center">
<p className="text-sm text-slate-500">© 2025 Confido Legal. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
