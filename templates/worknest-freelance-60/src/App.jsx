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
brand: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981',
600: '#059669',
700: '#047857',
800: '#065f46',
900: '#064e3b',
950: '#022c22',
}
},
boxShadow: {
'subtle': '0 2px 5px -1px rgba(0, 0, 0, 0.05)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(16, 185, 129, 0.5), 0 8px 16px -4px rgba(16, 185, 129, 0.1)',
'float': '0 20px 40px -5px rgba(0, 0, 0, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
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
      

<nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="bg-brand-600 text-white p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-black transition-colors">WorkNest</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Find Talent</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Find Work</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Why WorkNest</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Enterprise</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50 transition-all" href="#">Log in</a>
<a className="bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-subtle hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group" href="#">
                        Sign up
                        <i className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden hero-glow">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[80px] -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="lg:grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm hover:border-brand-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span>Trusted by 10,000+ businesses</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Hire verified experts <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">securely &amp; on time.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Connect with vetted professionals. We hold payments in escrow until you're 100% satisfied with the work delivered.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<button className="bg-brand-600 hover:bg-brand-700 text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                            Hire Top Talent
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 text-base font-medium px-8 py-3.5 rounded-xl transition-all hover:shadow-subtle hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
                            Find Work
                        </button>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
<img alt="" className="w-9 h-9 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=cbd5e1&amp;color=fff"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=94a3b8&amp;color=fff"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" src="https://ui-avatars.com/api/?name=Mike+T&amp;background=64748b&amp;color=fff"/>
<div className="w-9 h-9 rounded-full bg-slate-50 border-2 border-white shadow-sm ring-1 ring-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-600">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex text-amber-400">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-slate-600">Rated 4.9/5 by clients</span>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-6 relative h-[540px] w-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-100 rounded-full z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-slate-200 rounded-full z-0 opacity-60 animate-[spin_60s_linear_infinite]"></div>

<div className="absolute top-12 right-12 bg-white p-5 rounded-2xl shadow-float border border-slate-100 w-72 z-20 animate-float backdrop-blur-sm bg-white/90">
<div className="flex items-center gap-3 mb-4">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm ring-2 ring-white shadow-sm">SJ</div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
<div className="w-3 h-3 bg-brand-500 rounded-full border-2 border-white"></div>
</div>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-sm">Sarah Jenkins</h3>
<p className="text-xs text-slate-500">Senior UX Designer</p>
</div>
<div className="ml-auto bg-green-50 text-green-700 p-1.5 rounded-lg">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
</div>
<div className="space-y-3">
<div className="flex gap-2">
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-medium text-slate-600">Figma</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-medium text-slate-600">Prototyping</span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-brand-500 rounded-full"></div>
</div>
<span className="text-[10px] font-semibold text-slate-600">98% Success</span>
</div>
</div>
</div>

<div className="absolute bottom-24 left-8 bg-white p-4 rounded-xl shadow-float border border-slate-100 w-auto min-w-[240px] z-30 animate-float-delayed">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-slate-900 text-sm">Escrow Secured</h4>
<span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded">$4,500</span>
</div>
<p className="text-[10px] text-slate-500">Funds held until approval</p>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-12 bg-slate-900 text-white p-3 rounded-lg shadow-xl w-48 z-10 animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-400"></div>
<p className="text-xs font-medium">New proposal received</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
<div className="flex flex-col items-center sm:items-start group cursor-default">
<p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">4.9/5</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Average Rating</p>
</div>
<div className="flex flex-col items-center sm:items-start group cursor-default">
<p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">50k+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Verified Experts</p>
</div>
<div className="flex flex-col items-center sm:items-start group cursor-default">
<p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">$120M+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Paid to Freelancers</p>
</div>
<div className="flex flex-col items-center sm:items-start group cursor-default">
<p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">100%</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Secure Payments</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Get work done in 3 steps</h2>
<p className="text-slate-600 text-sm sm:text-base">A streamlined process designed to protect buyers and deliver results.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-100 -z-10 overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
</div>

<div className="group relative flex flex-col items-center text-center reveal" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-card flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-card-hover group-hover:border-brand-200 transition-all duration-300">
<i className="w-8 h-8 text-slate-400 group-hover:text-brand-600 transition-colors duration-300" data-lucide="file-plus"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">1. Post your job</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Describe your project requirements, budget, and timeline in minutes.</p>
</div>

<div className="group relative flex flex-col items-center text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-card flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-card-hover group-hover:border-brand-200 transition-all duration-300">
<i className="w-8 h-8 text-slate-400 group-hover:text-brand-600 transition-colors duration-300" data-lucide="user-check"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">2. Hire an expert</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Review proposals, check verified portfolios, and hire the perfect match.</p>
</div>

<div className="group relative flex flex-col items-center text-center reveal" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-card flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-card-hover group-hover:border-brand-200 transition-all duration-300">
<i className="w-8 h-8 text-slate-400 group-hover:text-brand-600 transition-colors duration-300" data-lucide="lock"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">3. Pay securely</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Funds are held in escrow. You only release payment when fully satisfied.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-2">Explore Talent</h2>
<p className="text-slate-600 text-sm">Explore services from 1400+ verified skill categories.</p>
</div>
<a className="hidden sm:flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors group" href="#">
                    View all categories 
                    <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">

<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="code-2"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Development &amp; IT</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">12k+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="palette"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Design &amp; Creative</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">8k+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="megaphone"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Digital Marketing</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">4k+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="pen-tool"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Writing</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">6k+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="video"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Video &amp; Animation</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">3k+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="music"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Music &amp; Audio</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">1.2k+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="calculator"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">Finance</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">900+ Freelancers</p>
</a>
<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" href="#">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-500 group-hover:text-brand-600 transition-colors" data-lucide="cpu"></i>
</div>
<h3 className="font-medium text-slate-900 mb-1">AI Services</h3>
<p className="text-xs text-slate-500 group-hover:text-brand-600/80 transition-colors">1.5k+ Freelancers</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why leaders choose WorkNest</h2>
<p className="text-slate-600 text-base mb-8 leading-relaxed">
                        We provide the infrastructure for successful collaborations. 
                        From manual verification to automated invoicing, we handle the friction.
                    </p>
<ul className="space-y-6">
<li className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-brand-600" data-lucide="check"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Manually Verified Freelancers</h4>
<p className="text-sm text-slate-500 mt-1">Every freelancer undergoes a multi-step identity and skill review.</p>
</div>
</li>
<li className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-brand-600" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Escrow Protection</h4>
<p className="text-sm text-slate-500 mt-1">Funds are safe. Release only when the work meets your standards.</p>
</div>
</li>
<li className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-brand-600" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Zero Hidden Fees</h4>
<p className="text-sm text-slate-500 mt-1">Transparent pricing structure for both buyers and freelancers.</p>
</div>
</li>
</ul>
</div>
<div className="mt-12 lg:mt-0 relative reveal">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-transparent rounded-3xl blur-2xl opacity-50"></div>
<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">

<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
<i className="w-4 h-4" data-lucide="headphones"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Support Case #4921</p>
<p className="text-xs text-slate-500">Active Resolution</p>
</div>
</div>
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                LIVE
                            </span>
</div>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0"></div>
<div className="bg-slate-50 p-3 rounded-tr-xl rounded-b-xl text-xs text-slate-600 w-full">
                                    I've reviewed the deliverables and the requirements were met.
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-white text-[10px]">WN</div>
<div className="bg-brand-50 p-3 rounded-tl-xl rounded-b-xl text-xs text-brand-900 w-full">
                                    Great! We are releasing the funds from escrow to your account now.
                                </div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100">
<div className="flex justify-between items-center text-xs mb-2">
<span className="text-slate-500">Transferring Funds</span>
<span className="text-brand-600 font-semibold">100%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-full bg-brand-500 rounded-full origin-left animate-[grow-bar_2s_ease-out]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-40 bg-brand-900 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 left-0 p-32 bg-blue-900 rounded-full blur-[150px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:flex justify-between items-center gap-16">
<div className="max-w-xl mb-12 lg:mb-0 reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Are you a freelancer? <br/><span className="text-brand-400">Get paid for what you do best.</span></h2>
<p className="text-slate-400 text-base mb-8 leading-relaxed">
                        Join an exclusive network of top-tier professionals. We handle the sales and billing so you can focus on the work.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
<div className="group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
<i className="w-5 h-5 text-brand-400" data-lucide="globe"></i>
</div>
<h4 className="font-medium text-sm text-slate-200">Global Clients</h4>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
<i className="w-5 h-5 text-brand-400" data-lucide="wallet"></i>
</div>
<h4 className="font-medium text-sm text-slate-200">Secure Pay</h4>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
<i className="w-5 h-5 text-brand-400" data-lucide="sliders"></i>
</div>
<h4 className="font-medium text-sm text-slate-200">Full Control</h4>
</div>
</div>
<a className="inline-flex items-center justify-center bg-white text-slate-950 hover:bg-slate-200 text-base font-medium px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 group" href="#">
                        Start Freelancing
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative w-full max-w-sm reveal" style={{transitionDelay: '200ms'}}>
<div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-slate-700 transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-center mb-8 relative z-10">
<div>
<span className="text-xs font-medium text-slate-400 block mb-1">Total Earnings</span>
<div className="text-3xl font-semibold text-white tracking-tight">$12,450.00</div>
</div>
<span className="text-[10px] font-bold text-brand-400 bg-brand-950/50 border border-brand-900 px-2 py-1 rounded-full">+12% this month</span>
</div>
<div className="flex gap-2 h-24 items-end mt-4 relative z-10" id="bars">
<div className="w-1/6 bg-slate-800 h-[30%] rounded-t-sm group-hover:bg-slate-700 transition-colors bar-animate" style={{animationDelay: '0.1s'}}></div>
<div className="w-1/6 bg-slate-800 h-[50%] rounded-t-sm group-hover:bg-slate-700 transition-colors bar-animate" style={{animationDelay: '0.2s'}}></div>
<div className="w-1/6 bg-slate-800 h-[45%] rounded-t-sm group-hover:bg-slate-700 transition-colors bar-animate" style={{animationDelay: '0.3s'}}></div>
<div className="w-1/6 bg-slate-800 h-[70%] rounded-t-sm group-hover:bg-slate-700 transition-colors bar-animate" style={{animationDelay: '0.4s'}}></div>
<div className="w-1/6 bg-brand-900 h-[55%] rounded-t-sm group-hover:bg-brand-800 transition-colors bar-animate" style={{animationDelay: '0.5s'}}></div>
<div className="w-1/6 bg-brand-500 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.5)] bar-animate" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8 reveal">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow duration-300">
<i className="w-8 h-8 text-brand-100 absolute top-8 right-8" data-lucide="quote"></i>
<p className="text-slate-800 text-base leading-relaxed mb-6 font-medium relative z-10">
                        "The verification process at WorkNest gives me peace of mind. I know exactly who I'm hiring, and the escrow system ensures I'm satisfied before money leaves my account."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-500">MC</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Marcus Chen</h4>
<p className="text-xs text-slate-500">CTO, TechFlow Inc.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow duration-300">
<i className="w-8 h-8 text-brand-100 absolute top-8 right-8" data-lucide="quote"></i>
<p className="text-slate-800 text-base leading-relaxed mb-6 font-medium relative z-10">
                        "Unlike other platforms, WorkNest brings me genuine clients who value quality. The payments are always on time, and the dispute team is actually helpful."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 text-xs flex items-center justify-center font-bold text-slate-500">ER</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Elena Rodriguez</h4>
<p className="text-xs text-slate-500">Freelance Copywriter</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
<h2 className="text-2xl font-semibold text-slate-900 mb-10">Your safety comes first</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center group">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all duration-300">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<h4 className="text-sm font-medium text-slate-900">Escrow Payments</h4>
</div>
<div className="flex flex-col items-center group">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all duration-300">
<i className="w-5 h-5" data-lucide="fingerprint"></i>
</div>
<h4 className="text-sm font-medium text-slate-900">ID Verification</h4>
</div>
<div className="flex flex-col items-center group">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all duration-300">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h4 className="text-sm font-medium text-slate-900">Fair Disputes</h4>
</div>
<div className="flex flex-col items-center group">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-4 shadow-sm group-hover:scale-110 group-hover:border-brand-200 group-hover:text-brand-600 transition-all duration-300">
<i className="w-5 h-5" data-lucide="life-buoy"></i>
</div>
<h4 className="text-sm font-medium text-slate-900">24/7 Support</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center mb-8 reveal">
<h3 className="text-lg font-semibold text-slate-900">Latest opportunities</h3>
<a className="text-sm text-brand-600 font-medium hover:text-brand-700 hover:underline" href="#">View all jobs</a>
</div>
<div className="space-y-4 reveal">

<div className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">React &amp; Tailwind Developer for SaaS Dashboard</h4>
<span className="text-sm font-semibold text-slate-900">$2k - $4k</span>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">Remote</span>
<span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">React</span>
<span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">TypeScript</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1 text-brand-600 font-medium"><i className="w-3 h-3" data-lucide="check-circle"></i> Payment Verified</span>
<span>• Posted 2h ago</span>
</div>
</div>

<div className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-brand-500 hover:shadow-card-hover transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Identity Design for Fintech Startup</h4>
<span className="text-sm font-semibold text-slate-900">$1,500 Fixed</span>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">Remote</span>
<span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">Branding</span>
<span className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">Logo</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1 text-brand-600 font-medium"><i className="w-3 h-3" data-lucide="check-circle"></i> Payment Verified</span>
<span>• Posted 4h ago</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-t border-brand-100 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
<div className="max-w-3xl mx-auto px-4 text-center relative z-10 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ready to work smarter?</h2>
<p className="text-slate-600 mb-10 text-lg">Join thousands of businesses and freelancers building the future of work today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                    Hire Top Talent
                </button>
<button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                    Join as a Freelancer
                </button>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-brand-600 text-white p-1 rounded-md">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<span className="text-base font-semibold text-slate-900">WorkNest</span>
</div>
<p className="text-xs text-slate-500 mb-4 max-w-xs">
                        The secure marketplace for premium freelance talent and ambitious businesses.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">For Clients</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">How to Hire</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Talent Marketplace</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Payroll Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">For Freelancers</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">How to Find Work</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Direct Contracts</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Freelancer Resources</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Trust &amp; Safety</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 WorkNest Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
