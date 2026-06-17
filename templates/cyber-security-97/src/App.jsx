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
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1f2937',
900: '#111827',
950: '#020617', // Richer dark background
},
brand: {
500: '#6366f1', // Indigo
600: '#4f46e5',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

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
      

<div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[128px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

<a className="group flex items-center gap-3 z-50" href="/">
<div className="relative w-9 h-9 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="absolute inset-px bg-gray-950 rounded-[10px] flex items-center justify-center border border-white/10">
<span className="font-semibold text-lg text-white tracking-tighter">N</span>
</div>
</div>
<div className="flex flex-col">
<span className="text-white font-medium tracking-tight text-sm leading-none">NORDIC SOLUTIONS</span>
<span className="text-slate-500 text-[10px] font-medium tracking-widest uppercase mt-0.5">Asia</span>
</div>
</a>

<ul className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
<li><a className="text-xs font-medium text-white bg-white/10 px-4 py-1.5 rounded-full shadow-sm transition-all border border-white/5" href="#">Home</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/5 transition-all" href="#about">About</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/5 transition-all" href="https://securedrip.com/">Solutions</a></li>
</ul>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors group" href="mailto:sales@nordic-solutions.co.th">
<span>Contact Sales</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24 px-6">

<section className="max-w-7xl mx-auto mb-24 md:mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="order-2 md:order-1 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-200 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Next-Gen Cyber Security VAD
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                        Securing the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-slate-400">Digital Frontier.</span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg mb-10">
                        We connect world-class technology vendors with partners to build resilient defense strategies for the modern digital landscape.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="h-10 px-6 rounded-lg bg-white text-gray-950 hover:bg-slate-200 font-medium text-sm flex items-center justify-center transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#solutions">
                            Explore Solutions
                        </a>
<a className="h-10 px-6 rounded-lg glass-panel hover:bg-white/5 text-white font-medium text-sm flex items-center gap-2 justify-center transition-all" href="mailto:sales@nordic-solutions.co.th">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            Get in Touch
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 pt-8 border-t border-white/5 w-full">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-950 flex items-center justify-center text-[10px] text-white">S</div>
<div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-950 flex items-center justify-center text-[10px] text-white">C</div>
<div className="w-8 h-8 rounded-full bg-slate-600 border border-slate-950 flex items-center justify-center text-[10px] text-white">N</div>
</div>
<p className="text-xs text-slate-500 font-medium">Trusted by leading vendors globally</p>
</div>
</div>

<div className="order-1 md:order-2 relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
<img alt="Cyber Security Visualization" className="w-full h-full object-cover opacity-80 mix-blend-screen hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Active Protection</p>
<p className="text-xs text-slate-400">Systems operational 24/7</p>
</div>
<div className="ml-auto text-emerald-400 text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:wifi-router-minimalistic-linear"></iconify-icon>
                                Secure
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto" id="about">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Our Ecosystem</h2>
<p className="text-sm text-slate-400">Comprehensive services for the entire channel.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">Most Trusted Partner</h3>
<p className="text-slate-400 font-light leading-relaxed max-w-lg">
                            Nordic Solutions (Thailand) Co., Ltd. strives to be the MTP for our Vendors, Resellers, and Customers. We move beyond simple distribution to provide true value-added advisory and support.
                        </p>
</div>

<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="120"></iconify-icon>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-3xl relative overflow-hidden group">
<img alt="Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<iconify-icon className="text-indigo-400 mb-3" icon="solar:server-square-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Infrastructure</h3>
<p className="text-xs text-slate-300 mt-1 font-light">Robust foundation for scalable security.</p>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
<div>
<h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:buildings-2-linear"></iconify-icon>
                            Industries
                        </h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Financial Services
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Telecommunication
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span> Public Sector
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Enterprise
                            </li>
</ul>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-white/20 transition-colors">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:box-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-indigo-400">Our Offerings</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Value-Added Services</h3>
<p className="text-sm text-slate-400 font-light">We provide comprehensive layers of service from pre-sales technical consultation to post-sales implementation support.</p>
</div>
<div className="grid grid-cols-2 gap-3 w-full md:w-auto">
<a className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group/item" href="https://securedrip.com/" target="_blank">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">S</div>
<div className="text-xs text-slate-300 group-hover/item:text-white">SecureDRiP</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group/item" href="https://www.conceal.io/" target="_blank">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">C</div>
<div className="text-xs text-slate-300 group-hover/item:text-white">Conceal</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group/item" href="https://securaze.com" target="_blank">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">Z</div>
<div className="text-xs text-slate-300 group-hover/item:text-white">Securaze</div>
</a>
<div className="flex items-center justify-center gap-3 p-3 rounded-xl border border-dashed border-white/10 text-xs text-slate-500">
                            + More
                        </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-24">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-950/50 to-gray-950 px-8 py-16 md:px-16 text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Ready to elevate your security?</h2>
<p className="text-slate-400 font-light mb-8">
                        Join our network of partners and secure your infrastructure with next-generation solutions.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 rounded-full bg-white text-gray-950 font-medium text-sm hover:bg-slate-200 transition-colors" href="mailto:sales@nordic-solutions.co.th">
                            Contact Sales Team
                        </a>
<a className="w-full md:w-auto px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors" href="tel:+66933857895">
                            +66 933857895
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-gray-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div>
<a className="flex items-center gap-2 mb-4" href="/">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-gray-950 text-xs font-bold">N</div>
<span className="text-white font-medium tracking-tight">NORDIC SOLUTIONS</span>
</a>
<p className="text-slate-500 text-sm font-light max-w-xs leading-relaxed">
                        Nordic Solutions (Thailand) Co., Ltd.<br/>
                        Value-Added Distributor of Cyber Security products.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<ul className="space-y-2">
<li><a className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:link-circle-linear"></iconify-icon> LinkedIn</a></li>
<li><a className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:link-circle-linear"></iconify-icon> Facebook</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-slate-600 text-xs font-light">© 2024 Nordic Solutions (Thailand) Co., Ltd. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
