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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-indigo-900" height="24" icon="solar:global-linear" width="24"></iconify-icon>
<span className="font-medium text-slate-900 tracking-tight text-lg">OnlineBusiness.com</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-normal text-slate-600 hover:text-indigo-600 transition-colors" href="#">Explore Businesses</a>
<a className="text-sm font-normal text-slate-600 hover:text-indigo-600 transition-colors" href="#">Buy Outright</a>
<a className="text-sm font-normal text-slate-600 hover:text-indigo-600 transition-colors" href="#">Partner With Us</a>
<a className="text-sm font-normal text-slate-600 hover:text-indigo-600 transition-colors" href="#">How it Works</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-normal text-slate-900 hover:text-indigo-600" href="#">Log in</a>
<a className="px-4 py-2 bg-slate-900 text-white text-sm font-normal rounded-full hover:bg-indigo-600 transition-all shadow-sm ring-1 ring-slate-900/5 hover:ring-indigo-600" href="#">
                        View Opportunities
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-normal mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Not just domains. A smarter place to start.
                </div>
<h1 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Premium-domain online businesses <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">already in motion.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto font-light">
                    Buy a starter business outright, or partner with us to build it into something bigger. OnlineBusiness.com offers researched, branded, launch-ready web businesses built on premium domains.
                </p>
</div>

<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-2">
<form className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="flex-1 p-4 group">
<label className="block text-xs font-medium text-slate-500 mb-1">Industry</label>
<div className="flex items-center gap-2 relative">
<iconify-icon className="text-indigo-500" height="18" icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
<select className="w-full text-sm font-normal text-slate-900 outline-none bg-transparent appearance-none cursor-pointer">
<option>All Industries</option>
<option>SaaS &amp; Tech</option>
<option>E-commerce</option>
<option>Finance</option>
</select>
<iconify-icon className="absolute right-0 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 p-4 group">
<label className="block text-xs font-medium text-slate-500 mb-1">Business Model</label>
<div className="flex items-center gap-2 relative">
<iconify-icon className="text-indigo-500" height="18" icon="solar:shop-linear" width="18"></iconify-icon>
<select className="w-full text-sm font-normal text-slate-900 outline-none bg-transparent appearance-none cursor-pointer">
<option>All Models</option>
<option>Subscription / B2B</option>
<option>DTC / Physical</option>
<option>Ad Revenue / Affiliate</option>
</select>
<iconify-icon className="absolute right-0 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 p-4 group">
<label className="block text-xs font-medium text-slate-500 mb-1">Status</label>
<div className="flex items-center gap-2 relative">
<iconify-icon className="text-indigo-500" height="18" icon="solar:tag-price-linear" width="18"></iconify-icon>
<select className="w-full text-sm font-normal text-slate-900 outline-none bg-transparent appearance-none cursor-pointer">
<option>Buy or Partner</option>
<option>Buy Outright</option>
<option>Open to Partnership</option>
</select>
<iconify-icon className="absolute right-0 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="p-2 flex items-center">
<button className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-normal transition-colors flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:magnifer-linear" width="18"></iconify-icon>
                            Explore
                        </button>
</div>
</form>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white"></div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</section>

<section className="py-12 border-b border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Acquired by operators and founders at</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">
<div className="flex items-center gap-2 text-slate-800 font-semibold text-lg"><iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon> HEXA</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold text-lg"><iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon> VORTEX</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold text-lg"><iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon> ORBIT</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold text-lg"><iconify-icon height="24" icon="solar:database-linear" width="24"></iconify-icon> CUBE</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold text-lg"><iconify-icon height="24" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon> STACK</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">We don't just sell domain names. We build online businesses.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">We bring premium domains to life far enough to make the opportunity real. That means the domain is secured, the concept is defined, the site is live, the market has been researched, and the business has already been framed for growth.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">
<iconify-icon height="20" icon="solar:lightbulb-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-normal text-slate-900">Not an empty shell</h4>
<p className="text-sm text-slate-500 mt-1">A starter business has real thought behind it, a defined market angle, foundational assets, and a clear direction.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">
<iconify-icon height="20" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-normal text-slate-900">Not a fully mature company</h4>
<p className="text-sm text-slate-500 mt-1">It’s a head start — the domain, positioning, and groundwork are in place, so the next owner can move faster.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/50">
<img alt="Starter Business Setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden lg:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon height="20" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-normal uppercase">Active Opportunities</p>
<p className="text-lg font-semibold text-slate-900">50+</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Featured Starter Businesses</h2>
<p className="text-slate-500 mt-2">Started with strategy. Built for upside.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-normal text-indigo-600 hover:text-indigo-700" href="#">
                    View all opportunities <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Fintech Project" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-indigo-600">FOR SALE</div>
<button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
<iconify-icon height="18" icon="solar:bookmark-linear" width="18"></iconify-icon>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-slate-900 text-lg tracking-tight">FintechPulse.com</h3>
<p className="text-sm text-slate-500">Financial News Portal</p>
</div>
<p className="text-lg font-medium text-indigo-600">$15k</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-slate-100 text-slate-500 text-xs sm:text-sm">
<div className="flex items-center gap-1" title="Target Audience"><iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon> B2C Investors</div>
<div className="flex items-center gap-1" title="Monetization"><iconify-icon height="16" icon="solar:wad-of-money-linear" width="16"></iconify-icon> Ad Rev</div>
<div className="flex items-center gap-1" title="What's Built"><iconify-icon height="16" icon="solar:layers-linear" width="16"></iconify-icon> MVP &amp; Brand</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Eco Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-indigo-600">BUY OR PARTNER</div>
<button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
<iconify-icon height="18" icon="solar:bookmark-linear" width="18"></iconify-icon>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-slate-900 text-lg tracking-tight">EcoSupply.co</h3>
<p className="text-sm text-slate-500">Sustainable E-commerce</p>
</div>
<p className="text-lg font-medium text-indigo-600">$25k</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-slate-100 text-slate-500 text-xs sm:text-sm">
<div className="flex items-center gap-1" title="Target Audience"><iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon> Consumers</div>
<div className="flex items-center gap-1" title="Monetization"><iconify-icon height="16" icon="solar:wad-of-money-linear" width="16"></iconify-icon> DTC Sales</div>
<div className="flex items-center gap-1" title="What's Built"><iconify-icon height="16" icon="solar:layers-linear" width="16"></iconify-icon> Storefront Built</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="SaaS Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-emerald-600">NEW</div>
<button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
<iconify-icon height="18" icon="solar:bookmark-linear" width="18"></iconify-icon>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-slate-900 text-lg tracking-tight">SaaSMetrics.io</h3>
<p className="text-sm text-slate-500">B2B Analytics Tool</p>
</div>
<p className="text-lg font-medium text-indigo-600">$40k</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-slate-100 text-slate-500 text-xs sm:text-sm">
<div className="flex items-center gap-1" title="Target Audience"><iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon> Startups</div>
<div className="flex items-center gap-1" title="Monetization"><iconify-icon height="16" icon="solar:wad-of-money-linear" width="16"></iconify-icon> Subscriptions</div>
<div className="flex items-center gap-1" title="What's Built"><iconify-icon height="16" icon="solar:layers-linear" width="16"></iconify-icon> MVP &amp; Waitlist</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-xl">
<span className="text-indigo-400 font-medium tracking-wider text-xs uppercase mb-4 block">Two ways to get involved</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Buy the asset. Or help build what it can become.</h2>
<div className="space-y-6 mb-8 text-slate-300 text-lg font-light">
<p>
<strong className="text-white font-medium">Buy the business:</strong> Acquire the domain, website, brand foundation, and business concept outright.
                    </p>
<p>
<strong className="text-white font-medium">Partner to build it:</strong> If you’re an operator, subject matter expert, or strategic fit, we may be open to building the business together.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-white text-slate-900 rounded-full font-normal hover:bg-slate-100 transition-colors">
                        View Businesses for Sale
                    </button>
<button className="px-6 py-3 border border-slate-600 text-white rounded-full font-normal hover:bg-slate-800 transition-colors">
                        Learn About Partnerships
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Explore by Industry</h2>
<p className="text-slate-500 mt-4">Discover the perfect niche for your next venture.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group relative aspect-square rounded-xl overflow-hidden" href="#">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="flex bg-gradient-to-t from-slate-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0 items-end p-6">
<span className="text-white font-normal">Technology &amp; SaaS</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden" href="#">
<img alt="E-commerce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<span className="text-white font-normal">E-commerce</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden" href="#">
<img alt="Finance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<span className="text-white font-normal">Finance</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden" href="#">
<img alt="Health" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<span className="text-white font-normal">Health &amp; Wellness</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">200+</div>
<div className="text-sm font-normal text-slate-500 uppercase tracking-wide">Premium Domains</div>
</div>
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">50+</div>
<div className="text-sm font-normal text-slate-500 uppercase tracking-wide">Launch-Ready Sites</div>
</div>
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">15+</div>
<div className="text-sm font-normal text-slate-500 uppercase tracking-wide">Active Partnerships</div>
</div>
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">$2M+</div>
<div className="text-sm font-normal text-slate-500 uppercase tracking-wide">Value Created</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Why this model exists</h2>
<p className="text-slate-500">There’s a big gap between buying a raw domain and buying an established online business.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon height="32" icon="solar:crown-star-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 text-lg mb-3 tracking-tight">1. Start with a stronger asset</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Each opportunity begins with a premium domain that gives the business a stronger brand position from day one.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon height="32" icon="solar:skip-next-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 text-lg mb-3 tracking-tight">2. Skip the messy beginning</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We’ve already done the early work: research, positioning, site setup, core content, and initial marketing direction.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon height="32" icon="solar:handshake-linear" width="32"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 text-lg mb-3 tracking-tight">3. Buy it or help build it</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Some buyers want to acquire the asset outright. Others want to operate or partner on it. We’re open to both when the fit is right.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-16 text-center">What our buyers say</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="text-indigo-600 mb-4"><iconify-icon height="32" icon="solar:chat-round-line-linear" width="32"></iconify-icon></div>
<p className="text-slate-600 mb-6 leading-relaxed">"OnlineBusiness.com gave me a head start. The domain, positioning, and groundwork were in place, so I could move faster and build with confidence."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-medium text-slate-500">JP</div>
<div>
<p className="text-sm font-medium text-slate-900">James Peterson</p>
<p className="text-xs text-slate-500">Tech Founder</p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="text-indigo-600 mb-4"><iconify-icon height="32" icon="solar:chat-round-line-linear" width="32"></iconify-icon></div>
<p className="text-slate-600 mb-6 leading-relaxed">"A raw domain requires too much imagination. An established business costs too much. This was the perfect middle ground."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-medium text-slate-500">AL</div>
<div>
<p className="text-sm font-medium text-slate-900">Anna Lawrence</p>
<p className="text-xs text-slate-500">E-commerce Operator</p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 md:hidden lg:block">
<div className="text-indigo-600 mb-4"><iconify-icon height="32" icon="solar:chat-round-line-linear" width="32"></iconify-icon></div>
<p className="text-slate-600 mb-6 leading-relaxed">"We partnered with them on a premium domain. Skipping the messy beginning allowed our team to focus purely on scaling growth."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-medium text-slate-500">MR</div>
<div>
<p className="text-sm font-medium text-slate-900">Mark Roberts</p>
<p className="text-xs text-slate-500">Agency Partner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-2">What's included in a Starter Business</h2>
<p className="text-slate-400">Everything you need so it's not just an idea sitting on a page.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-t border-slate-800 pt-8">
<div className="pr-6 py-4">
<iconify-icon className="text-indigo-400 mb-4" height="32" icon="solar:laptop-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Brand &amp; Asset</h3>
<p className="text-sm text-slate-400 leading-relaxed">Includes a highly brandable premium domain name, complete brand positioning, and a live website.</p>
</div>
<div className="px-6 py-4">
<iconify-icon className="text-indigo-400 mb-4" height="32" icon="solar:lightbulb-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed">A clearly defined business model along with deep market and niche research to validate the concept.</p>
</div>
<div className="px-6 py-4">
<iconify-icon className="text-indigo-400 mb-4" height="32" icon="solar:document-text-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Foundational Content</h3>
<p className="text-sm text-slate-400 leading-relaxed">Includes foundational articles, core landing pages, and an initial MVP setup ready for traffic.</p>
</div>
<div className="pl-6 py-4">
<iconify-icon className="text-indigo-400 mb-4" height="32" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Growth Path</h3>
<p className="text-sm text-slate-400 leading-relaxed">Clear growth opportunities outlined, initial marketing direction, and an optional partnership discussion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12">Market Insights</h2>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block" href="#">
<div className="aspect-video rounded-xl overflow-hidden mb-4">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<p className="text-xs text-indigo-600 font-medium mb-2">Strategy</p>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors tracking-tight">Why Premium Domains Matter for Startups</h3>
<p className="text-sm text-slate-500">How a strong brand name accelerates trust and lowers customer acquisition costs.</p>
</a>
<a className="group block" href="#">
<div className="aspect-video rounded-xl overflow-hidden mb-4">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<p className="text-xs text-indigo-600 font-medium mb-2">Acquisition</p>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors tracking-tight">Buying vs. Building: The ROI of a Head Start</h3>
<p className="text-sm text-slate-500">Analyzing the cost comparison between starting from absolute zero vs purchasing an early-stage asset.</p>
</a>
<a className="group block" href="#">
<div className="aspect-video rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<p className="text-xs text-indigo-600 font-medium mb-2">Analysis</p>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors tracking-tight">How to Evaluate a Starter Business</h3>
<p className="text-sm text-slate-500">Everything you need to know about reviewing positioning, assets, and growth potential.</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Join our exclusive network</h2>
<p className="text-slate-500 mb-8">Get the latest starter businesses and partnership opportunities delivered straight to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-slate-900 text-white font-normal rounded-lg hover:bg-indigo-600 transition-colors text-sm" type="submit">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-900" height="24" icon="solar:global-linear" width="24"></iconify-icon>
<span className="font-medium text-slate-900 tracking-tight text-lg">OnlineBusiness.com</span>
</div>
<p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">OnlineBusiness.com is a platform for buying or partnering on premium-domain starter businesses that have already been researched, built, and set in motion.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-indigo-600" href="#">Explore Businesses</a></li>
<li><a className="hover:text-indigo-600" href="#">Buy Outright</a></li>
<li><a className="hover:text-indigo-600" href="#">Partnership Program</a></li>
<li><a className="hover:text-indigo-600" href="#">How it Works</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-indigo-600" href="#">Market Insights</a></li>
<li><a className="hover:text-indigo-600" href="#">Starter Business Guide</a></li>
<li><a className="hover:text-indigo-600" href="#">Valuation Tools</a></li>
<li><a className="hover:text-indigo-600" href="#">Contact Team</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-indigo-600" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-600" href="#">Partner Agreement</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 OnlineBusiness.com. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Designed with care</span>
<iconify-icon className="text-red-400" height="12" icon="solar:heart-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
