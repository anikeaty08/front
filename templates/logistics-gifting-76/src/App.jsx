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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<span className="text-xl font-semibold tracking-tighter text-[#0A192F]">G4U</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#0A192F] transition-colors" href="#how-it-works">Logistics</a>
<a className="hover:text-[#0A192F] transition-colors" href="#guarantee">Guarantee</a>
<a className="hover:text-[#0A192F] transition-colors" href="#testimonials">Stories</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#0A192F] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#">
<span>Shop Gifts</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-slate-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Rio de Janeiro Drone Shot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A192F]/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-8 mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-medium text-amber-300 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                Active in 5 Countries
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-balance">
                Bringing a Piece of Home to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">South America.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                The only US &amp; Canadian-based gifting service with 5 dedicated warehouses, serving 20+ million expats and nomads across the continent.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 text-[#0A192F] text-sm font-semibold rounded-lg hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="gift"></i>
                    Shop Gifts For Her
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all">
                    How it Works
                </button>
</div>
</div>
</header>

<section className="relative z-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-slate-100">
<div className="flex flex-col items-center md:items-start space-y-1">
<div className="flex items-center gap-2 text-[#0A192F]">
<i className="w-5 h-5 text-amber-500" data-lucide="warehouse"></i>
<span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Coverage</span>
</div>
<p className="text-2xl font-semibold tracking-tight text-[#0A192F]">5 Strategic Warehouses</p>
<p className="text-sm text-slate-500">Localized Fulfillment</p>
</div>
<div className="flex flex-col items-center md:items-start space-y-1 md:pl-8">
<div className="flex items-center gap-2 text-[#0A192F]">
<i className="w-5 h-5 text-amber-500" data-lucide="users"></i>
<span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Community</span>
</div>
<p className="text-2xl font-semibold tracking-tight text-[#0A192F]">20 Million+</p>
<p className="text-sm text-slate-500">Expats We Serve</p>
</div>
<div className="flex flex-col items-center md:items-start space-y-1 md:pl-8">
<div className="flex items-center gap-2 text-[#0A192F]">
<i className="w-5 h-5 text-amber-500" data-lucide="badge-check"></i>
<span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Guarantee</span>
</div>
<p className="text-2xl font-semibold tracking-tight text-[#0A192F]">100% Authentic</p>
<p className="text-sm text-slate-500">USA &amp; Canada Products Only</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">

<div className="relative w-full h-16 mb-20 md:mb-24 flex items-center justify-center overflow-hidden">
<div className="absolute w-full max-w-4xl h-[2px] road-line"></div>

<div className="absolute w-full max-w-4xl h-full flex items-center animate-truck">
<div className="relative bg-white p-2 rounded-full shadow-lg border border-slate-200 z-10">
<i className="w-6 h-6 text-[#0A192F]" data-lucide="truck"></i>
</div>
</div>

<div className="absolute w-full max-w-4xl flex justify-between px-10">
<div className="flex flex-col items-center gap-2 mt-8">
<div className="w-3 h-3 bg-amber-400 rounded-full ring-4 ring-white shadow-sm"></div>
<span className="text-xs font-medium text-slate-400">Miami Hub</span>
</div>
<div className="flex flex-col items-center gap-2 mt-8">
<div className="w-3 h-3 bg-[#0A192F] rounded-full ring-4 ring-white shadow-sm"></div>
<span className="text-xs font-medium text-slate-400">Customs Cleared</span>
</div>
<div className="flex flex-col items-center gap-2 mt-8">
<div className="w-3 h-3 bg-green-500 rounded-full ring-4 ring-white shadow-sm"></div>
<span className="text-xs font-medium text-slate-400">Delivered</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A192F] mb-4">
                            The Logistics Network Built For You.
                        </h2>
<p className="text-lg text-slate-500">
                            G4U built the infrastructure so you never deal with customs, fees, or lost packages again.
                        </p>
</div>
<div className="prose prose-slate text-slate-600 leading-relaxed">
<p className="mb-4">
                            Shipping a package from North America to South America is usually a nightmare of customs paperwork, unexpected duties, and weeks of delay. <strong className="text-[#0A192F] font-semibold">We eliminated that problem.</strong>
</p>
<p>
                            Gift4U is not just a storefront; we are an established US &amp; Canadian company operating <strong className="text-[#0A192F] font-semibold">5 privately managed warehouse hubs</strong> across South America. When you order a high-quality product—whether it’s electronics, designer items, or high-end chocolates—it’s already sitting on a shelf near you. We stock it, we ship it locally, and our G4U couriers deliver it right to your loved one’s door.
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="shield-check"></i>
<div>
<h4 className="text-sm font-semibold text-[#0A192F]">No Customs Fees</h4>
<p className="text-xs text-slate-500 mt-1">We handle all importation duties.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="clock"></i>
<div>
<h4 className="text-sm font-semibold text-[#0A192F]">48hr Delivery</h4>
<p className="text-xs text-slate-500 mt-1">From our local hubs to their door.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-200">
<img alt="Digital Nomad working in cafe in Medellin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur shadow-lg rounded-lg p-4 max-w-xs border border-slate-100">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-full text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<p className="text-xs font-semibold text-[#0A192F]">Delivered to Medellin</p>
<p className="text-[10px] text-slate-500">1:42 PM - Signed by Sarah</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-amber-500 tracking-wider uppercase">Real Stories</span>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A192F]">Trusted by the Toughest Customers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-slate-50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-slate-300 overflow-hidden ring-2 ring-white">
<img alt="Rugged man in nature" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-[#0A192F]">Mark S.</p>
<p className="text-xs text-slate-500">Expat in Peru</p>
</div>
<div className="ml-auto text-amber-400 flex gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<i className="w-8 h-8 text-slate-200 absolute top-8 right-8 rotate-180" data-lucide="quote"></i>
<p className="text-slate-600 leading-relaxed italic relative z-10">
                        "I was literally stuck in a remote cave system in Peru during a rainstorm. I needed a specific item for my wife's anniversary. G4U somehow got it to the nearest outpost in 48 hours. They don't just deliver; they perform miracles."
                    </p>
</div>

<div className="group relative bg-slate-50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 hover:border-slate-200">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-slate-300 overflow-hidden ring-2 ring-white">
<img alt="Happy man on beach" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-[#0A192F]">Jennifer L.</p>
<p className="text-xs text-slate-500">Happy Customer</p>
</div>
<div className="ml-auto text-amber-400 flex gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<i className="w-8 h-8 text-slate-200 absolute top-8 right-8 rotate-180" data-lucide="quote"></i>
<p className="text-slate-600 leading-relaxed italic relative z-10">
                        "After years of dealing with packages stuck in customs, G4U is a life-saver. The products are high quality, all original, and the delivery is faster than local services. Highly trustworthy."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A192F] text-white overflow-hidden relative" id="guarantee">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Quality Assurance: The North American Standard.</h2>
<p className="text-slate-300 text-lg mb-8 font-light">We don't just ship boxes; we ship peace of mind. Every item passes through our strict quality control.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
<i className="w-5 h-5" data-lucide="flag"></i>
</div>
<div>
<h4 className="font-medium text-white">High Quality Sourcing</h4>
<p className="text-sm text-slate-400 mt-1">All products sourced exclusively from the USA &amp; Canada.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
<i className="w-5 h-5" data-lucide="award"></i>
</div>
<div>
<h4 className="font-medium text-white">100% Original Products</h4>
<p className="text-sm text-slate-400 mt-1">Guaranteed genuine items—no knock-offs, ever.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<div>
<h4 className="font-medium text-white">Nomad Focused</h4>
<p className="text-sm text-slate-400 mt-1">Service made specifically for people moving to South America.</p>
</div>
</li>
</ul>
</div>

<div className="relative">
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-sm font-medium text-slate-300">G4U Verification</span>
<span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-medium">Passed</span>
</div>
<div className="space-y-4">
<div className="h-2 bg-white/10 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-full"></div>
<div className="h-2 bg-white/10 rounded w-5/6"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0A192F]"></div>
<div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0A192F]"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#0A192F]"></div>
</div>
<span className="text-xs text-slate-400">Inspected by Team G4U</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0A192F] mb-6">
                Stop Worrying About Borders. <br/>Start Gifting.
            </h2>
<p className="text-lg text-slate-500 mb-10">
                Your trusted connection to authentic US and Canadian products is one click away.
            </p>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A192F] text-white text-base font-medium rounded-lg hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-lg shadow-slate-900/20" href="#">
                If you want to use our online shop, you need to click here
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<p className="mt-6 text-xs text-slate-400">
                Secure Payment • Global Tracking • 24/7 Support
            </p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-bold tracking-tighter text-[#0A192F]">G4U</span>
<span className="text-xs text-slate-400 border-l border-slate-300 pl-2 ml-2">© 2024 Gift4U Logistics</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-[#0A192F] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#0A192F] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#0A192F] transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#0A192F] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-[#0A192F] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-[#0A192F] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
