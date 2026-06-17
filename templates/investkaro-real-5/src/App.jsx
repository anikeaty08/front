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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="text-sm font-semibold tracking-tight text-white">INVESTKARO</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#hyderabad">HYDERABAD</a>
<a className="hover:text-white transition-colors" href="#dubai">DUBAI</a>
<a className="hover:text-white transition-colors" href="#dholera">DHOLERA</a>
</div>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="video"></i> Book Video Call
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 opacity-30"></div>
<div className="max-w-5xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Fractional Inventory Available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
<span className="text-gradient">Portfolio ko do</span><br/>
<span className="text-white">Global Upgrade.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
                Dubai ka Swag, Hyderabad ki Speed, aur Dholera ka Future. <br className="hidden md:block"/>
                Start with ₹2.85 Lakhs or go big with ₹50 Crores. Real Estate redefined.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition flex items-center justify-center gap-2" href="#hyderabad">
                    Start Investing <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 glass-card text-white text-sm font-medium rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2" href="#dubai">
                    View Global Assets
                </a>
</div>
<div className="pt-8 flex items-center justify-center gap-8 opacity-50">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4" data-lucide="shield-check"></i> RERA Approved
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4" data-lucide="trending-up"></i> High Appreciation
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4" data-lucide="users"></i> Managed Ownership
                </div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 relative bg-gradient-to-b from-[#030303] to-[#050505]" id="hyderabad">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="space-y-4">
<span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">Hyderabad Portfolio</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Gem of the South</h2>
<p className="text-neutral-400 max-w-lg">Nawabo ke sheher mein chota paisa, bada dhamaka. Choose between pure growth (Land) or high-yield income (Resort).</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group glass-card rounded-2xl overflow-hidden hover:border-white/20 transition duration-500 flex flex-col">
<div className="relative h-72 overflow-hidden">
<img alt="Assatz Valley View" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-yellow-500/90 text-black font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Fractional Ownership</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight drop-shadow-md">Assatz Valley View</h3>
<p className="text-white/90 text-sm">4-Star Luxury Resort • Ibrahimpatnam</p>
</div>
</div>
</div>
<div className="p-8 space-y-6 flex-1 flex flex-col">
<p className="text-neutral-400 text-sm leading-relaxed">
                            Located inside a sprawling 400-acre eco-resort township. Earn passive income while owning a share of a ₹55 Crore asset.
                        </p>
<div className="grid grid-cols-3 gap-2">
<div className="p-3 bg-white/5 rounded-lg border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">Min Invest</p>
<p className="text-lg font-medium text-white">₹4 Lakhs</p>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">Monthly</p>
<p className="text-lg font-medium text-green-400">₹3,000+</p>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">Target IRR</p>
<p className="text-lg font-medium text-yellow-400">28%</p>
</div>
</div>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="check-circle-2"></i> 12% Rental Yield + Appreciation
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="check-circle-2"></i> 40 Mins from City Centre
                            </li>
</ul>
<div className="mt-auto pt-6">
<button className="w-full py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition flex items-center justify-center gap-2">
                                Book Video Call <i className="w-4 h-4 stroke-[1.5]" data-lucide="video"></i>
</button>
</div>
</div>
</div>

<div className="group glass-card rounded-2xl overflow-hidden hover:border-white/20 transition duration-500 flex flex-col">
<div className="relative h-72 overflow-hidden">
<img alt="Open Land" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-blue-500/90 text-white font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">High Growth</div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-2xl font-semibold text-white tracking-tight drop-shadow-md">Prime Land Bank</h3>
<p className="text-white/90 text-sm">Assatz Business Boulevard</p>
</div>
</div>
<div className="p-8 space-y-6 flex-1 flex flex-col">
<p className="text-neutral-400 text-sm leading-relaxed">
                            Curated portfolio of RERA-approved, development-ready plots in strategic growth corridors. Co-own land bank for massive long-term appreciation.
                        </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-white/5 rounded-lg border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">Starts From</p>
<p className="text-2xl font-medium text-white">₹2.85 Lakhs</p>
</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">Potential Value (8 Yrs)</p>
<p className="text-2xl font-medium text-blue-400">₹8.55 Lakhs</p>
</div>
</div>
<div className="space-y-4 pt-2">
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
<div>
<h4 className="text-white text-sm font-medium">Strategic Acquisition</h4>
<p className="text-xs text-neutral-500">Undervalued plots in high-growth corridors.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
<div>
<h4 className="text-white text-sm font-medium">Hassle Free</h4>
<p className="text-xs text-neutral-500">Managed by Master Property Manager (MPM).</p>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg border border-white/10 transition flex items-center justify-center gap-2">
                                View Locations <i className="w-4 h-4 stroke-[1.5]" data-lucide="map-pin"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative border-t border-white/5" id="dubai">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 space-y-4">
<span className="text-xs font-semibold tracking-widest text-gradient-gold uppercase">International Collection</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">The Dubai Dream</h2>
<p className="text-neutral-400 max-w-xl mx-auto">
                    Habibi, come to Dubai. From Studios to Palaces, dollar income ka raasta yahi hai.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-5 rounded-xl hover:-translate-y-2 transition duration-500 group">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-5 relative">
<img alt="Studio" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-sm font-medium">Luxury Studios</span>
</div>
<div className="flex justify-between items-baseline mb-4">
<span className="text-neutral-400 text-xs uppercase">Range</span>
<span className="text-white font-medium">₹2 Cr - ₹50 Cr</span>
</div>
<p className="text-neutral-500 text-xs mb-6 leading-relaxed">Perfect entry point. High rental yield in Downtown &amp; Marina.</p>
<button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded transition">Check Availability</button>
</div>

<div className="glass-card p-5 rounded-xl hover:-translate-y-2 transition duration-500 group border-white/10">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-5 relative">
<img alt="Flats" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-sm font-medium">Premium Apartments</span>
</div>
<div className="flex justify-between items-baseline mb-4">
<span className="text-neutral-400 text-xs uppercase">View</span>
<span className="text-white font-medium">Burj / Sea View</span>
</div>
<p className="text-neutral-500 text-xs mb-6 leading-relaxed">1BHK to 4BHK family homes with world-class amenities.</p>
<button className="w-full py-2.5 bg-white text-black border border-white text-xs font-medium rounded transition">Download Floorplans</button>
</div>

<div className="glass-card p-5 rounded-xl hover:-translate-y-2 transition duration-500 group">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-5 relative">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-sm font-medium">Signature Villas</span>
</div>
<div className="flex justify-between items-baseline mb-4">
<span className="text-neutral-400 text-xs uppercase">Status</span>
<span className="text-yellow-500 text-xs font-medium border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 rounded">Elite</span>
</div>
<p className="text-neutral-500 text-xs mb-6 leading-relaxed">Private pools, beach access, and ultimate privacy.</p>
<button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded transition">Request Private Tour</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]" id="dholera">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 space-y-8">
<div>
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs text-blue-400">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> India's First Smart City
                        </div>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-2">Dholera SIR</h2>
<h3 className="text-2xl text-neutral-500 tracking-tight font-light">Gujarat ka Naya Hero.</h3>
</div>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Invest in infrastructure before the world does. Whether you want a small plot for the future or bulk land for a kingdom, yeh deal miss mat karna.
                    </p>
<div className="space-y-6 pt-4">

<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
<span className="text-white font-serif italic">B</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Basic Plots</h4>
<p className="text-xs text-neutral-500">Entry Level Investment</p>
</div>
</div>
<div className="text-right">
<span className="block text-white font-semibold">₹8 Lakhs</span>
<span className="text-[10px] text-green-500">Starting Price</span>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/[0.04] cursor-pointer ring-1 ring-white/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
<span className="text-white font-serif italic">R</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Residential Plots</h4>
<p className="text-xs text-neutral-500">Inside Smart City Zone</p>
</div>
</div>
<div className="text-right">
<span className="block text-white font-semibold">₹15 Lakhs</span>
<span className="text-[10px] text-green-500">Starting Price</span>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
<span className="text-white font-serif italic">L</span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Bulk Land</h4>
<p className="text-xs text-neutral-500">Commercial / Industrial</p>
</div>
</div>
<div className="text-right">
<span className="block text-white font-semibold">₹2 Cr - ₹100 Cr</span>
<span className="text-[10px] text-green-500">For Developers</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Land" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">Residential Zone</span>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/50 flex flex-col justify-center">
<h4 className="text-white font-medium mb-2">Why Dholera?</h4>
<p className="text-xs text-neutral-400 mb-4">India's first greenfield industrial smart city. A new era of urbanization.</p>
<a className="text-xs text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition" href="#">Download Master Plan</a>
</div>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/50 flex flex-col justify-center">
<div className="text-3xl font-bold text-white mb-1">920+</div>
<p className="text-xs text-neutral-400">Sq km Total Area</p>
</div>
<div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Construction" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&amp;w=2009&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">Industrial Corridor</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="coins"></i>
</div>
<h3 className="text-white font-medium">Low Capital Entry</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Invest in premium assets without blocking large capital. Start with lakhs, not crores.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="wallet"></i>
</div>
<h3 className="text-white font-medium">Passive Income</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Monthly rental payouts without management stress. Consistent cash flow.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="line-chart"></i>
</div>
<h3 className="text-white font-medium">High Appreciation</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Earn income today and grow value long-term. Dual benefit strategy.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="users-2"></i>
</div>
<h3 className="text-white font-medium">Easy Exit</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Fractional liquidity and secondary markets provide flexibility unlike traditional real estate.</p>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="text-sm font-semibold tracking-tight text-white">INVESTKARO</span>
</div>
<p className="text-neutral-500 text-sm mb-6">
                    Redefining real estate investing. From Hyderabad's land banks to Dubai's skyline and Dholera's future.
                </p>
<button className="bg-white text-black text-xs font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Book Video Call <i className="w-3 h-3 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
<div className="space-y-4">
<h4 className="text-white font-medium">Properties</h4>
<div className="flex flex-col gap-2 text-neutral-500">
<a className="hover:text-white transition" href="#hyderabad">Hyderabad Land</a>
<a className="hover:text-white transition" href="#hyderabad">Luxury Resort</a>
<a className="hover:text-white transition" href="#dubai">Dubai Studios</a>
<a className="hover:text-white transition" href="#dholera">Dholera Plots</a>
</div>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">Company</h4>
<div className="flex flex-col gap-2 text-neutral-500">
<a className="hover:text-white transition" href="#">About Assatz</a>
<a className="hover:text-white transition" href="#">How it Works</a>
<a className="hover:text-white transition" href="#">Fractional Guide</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">Legal</h4>
<div className="flex flex-col gap-2 text-neutral-500">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<a className="hover:text-white transition" href="#">RERA Compliance</a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center md:text-left text-xs text-neutral-600 flex flex-col md:flex-row justify-between items-center">
<p>© 2023 InvestKaro Inc. Powered by Assatz.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<i className="w-4 h-4 cursor-pointer hover:text-white transition" data-lucide="instagram"></i>
<i className="w-4 h-4 cursor-pointer hover:text-white transition" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer hover:text-white transition" data-lucide="linkedin"></i>
</div>
</div>
</footer>


    </>
  );
}
