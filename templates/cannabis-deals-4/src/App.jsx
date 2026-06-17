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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<a className="text-xl font-medium tracking-tight text-neutral-900" href="#">
                        420deals<span className="text-emerald-600">.com</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Browse Deals</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Price Comparison</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Dispensary Directory</a>

<div className="relative group cursor-pointer">
<div className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                            Categories
                            <iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">About</a>
</div>

<div className="hidden md:flex items-center space-x-4">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 transition-colors text-sm font-medium text-neutral-700">
<iconify-icon className="text-emerald-600" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                        Los Angeles, CA
                    </button>
<a className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors" href="#alerts">Deal Alerts</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-neutral-600 hover:text-neutral-900 focus:outline-none">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

<div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-50 z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-medium mb-4">
<iconify-icon height="14" icon="solar:star-fall-linear" width="14"></iconify-icon>
<span>Celebrating 4/20 Spirit Year-Round</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-neutral-900 tracking-tight leading-tight max-w-4xl mx-auto">
                Compare Prices on Cannabis Products Across Local Dispensaries.
            </h1>
<p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
                [Explain how users save an average amount by comparing prices before purchasing. Emphasize aggregation from multiple verified sources.]
            </p>

<div className="mt-10 max-w-3xl mx-auto">
<div className="flex flex-col sm:flex-row bg-white p-2 rounded-2xl sm:rounded-full shadow-sm border border-neutral-200/80 gap-2 sm:gap-0">
<div className="flex-1 flex items-center px-4 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-100">
<iconify-icon className="text-neutral-400 mr-3" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none focus:outline-none text-neutral-900 text-base placeholder:text-neutral-400" placeholder="Flower, Edibles, Vapes..." type="text"/>
</div>
<div className="flex-1 flex items-center px-4 py-3 sm:py-0">
<iconify-icon className="text-neutral-400 mr-3" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none focus:outline-none text-neutral-900 text-base placeholder:text-neutral-400" type="text" value="Los Angeles, CA"/>
</div>
<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl sm:rounded-full font-medium transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                        Find Deals Near Me
                        <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:verified-check-linear" width="16"></iconify-icon> Real-time updates</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> Verified dispensaries</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:tag-price-linear" width="16"></iconify-icon> Transparent pricing</span>
</div>
</div>
</header>

<section className="py-12 bg-white border-y border-neutral-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-xl font-medium tracking-tight text-neutral-900 mb-8">Shop by Category</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-neutral-200/60 bg-neutral-50 hover:bg-white hover:shadow-sm hover:border-emerald-200 transition-all" href="#">
<iconify-icon className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
<span className="font-medium text-neutral-900 text-sm">Flower</span>
</a>
<a className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-neutral-200/60 bg-neutral-50 hover:bg-white hover:shadow-sm hover:border-emerald-200 transition-all" href="#">
<iconify-icon className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:cookie-linear" width="32"></iconify-icon>
<span className="font-medium text-neutral-900 text-sm">Edibles</span>
</a>
<a className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-neutral-200/60 bg-neutral-50 hover:bg-white hover:shadow-sm hover:border-emerald-200 transition-all" href="#">
<iconify-icon className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:test-tube-linear" width="32"></iconify-icon>
<span className="font-medium text-neutral-900 text-sm">Concentrates</span>
</a>
<a className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-neutral-200/60 bg-neutral-50 hover:bg-white hover:shadow-sm hover:border-emerald-200 transition-all" href="#">
<iconify-icon className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform" height="32" icon="solar:battery-charge-linear" width="32"></iconify-icon>
<span className="font-medium text-neutral-900 text-sm">Accessories</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">How It Works</h2>
<p className="text-lg text-neutral-600">Stop overpaying. We make it simple to find exactly what you want at the best possible price in your local area.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-neutral-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" height="32" icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">1. Search &amp; Filter</h3>
<p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                        [Detail the process: Enter location and product preferences. Browse by brand, strain, or category.]
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" height="32" icon="solar:scale-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">2. Compare Deals</h3>
<p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                        [Detail the process: View verified deals from local dispensaries. See price history and active discounts side-by-side.]
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" height="32" icon="solar:bag-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">3. Shop Confidently</h3>
<p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                        [Detail the process: Click through to purchase directly from the dispensary with exclusive aggregator discounts.]
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                        Smarter Shopping for the Experienced Consumer.
                    </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
<iconify-icon className="text-emerald-600" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-1">Real-Time Price Updates</h4>
<p className="text-neutral-600 text-sm leading-relaxed">
                                    [Describe real-time price monitoring across 500+ dispensaries. Explain how our system detects price drops instantly.]
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
<iconify-icon className="text-emerald-600" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-1">Strict Deal Verification</h4>
<p className="text-neutral-600 text-sm leading-relaxed">
                                    [Explain the deal verification process that ensures accuracy. Mention that expired or fake listings are actively removed.]
                                </p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors" href="#">
                            Read about our methodology 
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-6 md:p-8 border border-neutral-200/60 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Trending Deal Near You</span>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon height="14" icon="solar:flame-linear" width="14"></iconify-icon> High Demand
                        </span>
</div>
<div className="bg-white rounded-2xl p-5 border border-neutral-200/50 shadow-sm relative z-10 mb-4 hover:border-emerald-200 transition-colors">
<div className="flex justify-between items-start mb-4">
<div>
<h5 className="font-medium text-neutral-900 text-lg">Premium Indoor Flower - 3.5g</h5>
<p className="text-sm text-neutral-500 mt-1">Local Dispensary Name</p>
</div>
<div className="text-right">
<span className="block text-xl font-medium text-emerald-600">$35</span>
<span className="text-xs text-neutral-400 line-through">was $55</span>
</div>
</div>
<a className="block w-full text-center py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">
                            View at Dispensary
                        </a>
</div>
<div className="bg-white rounded-2xl p-5 border border-neutral-200/50 shadow-sm relative z-10 opacity-70">
<div className="flex justify-between items-start mb-4">
<div>
<h5 className="font-medium text-neutral-900 text-lg">Live Rosin Cartridge - 1g</h5>
<p className="text-sm text-neutral-500 mt-1">Another Dispensary</p>
</div>
<div className="text-right">
<span className="block text-xl font-medium text-emerald-600">$40</span>
<span className="text-xs text-neutral-400 line-through">was $60</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Transparency First.</h2>
<p className="text-lg text-neutral-400">
                    We aren't a dispensary. We are an independent aggregator dedicated to finding you the truth about local pricing.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-neutral-800/50 rounded-3xl p-8 border border-neutral-700/50 backdrop-blur-sm">
<iconify-icon className="text-emerald-400 mb-6" height="32" icon="solar:server-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-4">How Deals are Sourced</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        [Explain how deals are verified and updated. Describe the technology used to scrape, normalize, and present accurate pricing data without bias.]
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">API Integrations</span>
<span className="text-xs font-medium px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">Daily Syncs</span>
</div>
</div>

<div className="bg-neutral-800/50 rounded-3xl p-8 border border-neutral-700/50 backdrop-blur-sm">
<iconify-icon className="text-emerald-400 mb-6" height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-4">Community Verified</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        [Describe the community review system with purchase verification. Explain how users can report inaccurate prices to maintain platform integrity.]
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="flex -space-x-2">

<div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-800 flex items-center justify-center text-xs"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-neutral-800 flex items-center justify-center text-xs"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
</div>
<span className="text-xs text-neutral-400 font-medium">[Insert verified user metrics when available]</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-600 relative overflow-hidden" id="alerts">
<div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<iconify-icon className="text-emerald-100 mb-6 mx-auto" height="48" icon="solar:bell-bing-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Never Miss a Price Drop.
            </h2>
<p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
                Set up custom deal alerts for your favorite brands, specific strains, or product categories in your local area. We'll email you when the price hits your target.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
<input className="flex-1 px-5 py-3.5 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 text-white placeholder:text-emerald-100 backdrop-blur-sm shadow-inner" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-white text-emerald-800 px-8 py-3.5 rounded-xl font-medium hover:bg-neutral-50 transition-colors shadow-sm" type="submit">
                    Get Alerts
                </button>
</form>
<p className="text-xs text-emerald-200 mt-4 font-medium">No spam. Just local savings. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-neutral-900">420deals<span className="text-emerald-600">.com</span></span>
</div>
<p className="text-sm text-neutral-500 mb-6 max-w-xs leading-relaxed">
                        The definitive price comparison and deals aggregator for cannabis consumers. Quality products, transparent pricing.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4 tracking-tight">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Browse Deals</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Compare Prices</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Dispensary Directory</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Deal Alerts</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4 tracking-tight">Categories</h4>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Flower Deals</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Edibles &amp; Drinks</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Vapes &amp; Concentrates</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Glass &amp; Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Data Methodology</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Partner With Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400 font-medium">
                    © 2024 420deals.com. All rights reserved.
                </p>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-400 hover:text-neutral-600 font-medium" href="#">Terms of Service</a>
<a className="text-xs text-neutral-400 hover:text-neutral-600 font-medium" href="#">Privacy Policy</a>
</div>
</div>

<div className="mt-8 p-4 bg-neutral-100 rounded-xl border border-neutral-200 text-center">
<p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    Disclaimer: 420deals.com does not sell cannabis or related products. We are an informational platform aggregating pricing data from licensed dispensaries. 
                    Must be 21 years of age or older to view this site in accordance with local state laws. Please consume responsibly.
                </p>
</div>
</div>
</footer>

    </>
  );
}
