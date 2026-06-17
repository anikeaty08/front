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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe></div>

<nav className="sticky top-0 backdrop-blur-sm border-b z-50 bg-white/95 border-neutral-100" style={{animation: 'slideDown 0.6s ease-out'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0" style={{animation: 'fadeIn 0.8s ease-out 0.2s both'}}>
<div className="text-xl font-semibold tracking-tight text-neutral-900">NFTForge</div>
</div>

<div className="hidden md:flex items-center space-x-8" style={{animation: 'fadeIn 0.8s ease-out 0.4s both'}}>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Features</a>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-900 border-b-2 border-neutral-900" href="#">Pricing</a>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">FAQs</a>
</div>

<div className="hidden md:flex items-center space-x-4" style={{animation: 'fadeIn 0.8s ease-out 0.6s both'}}>
<div className="relative">
<select className="appearance-none bg-transparent text-sm pr-6 focus:outline-none cursor-pointer transition-colors duration-200 text-neutral-600 hover:text-neutral-900">
<option>English</option>
<option>日本語</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Login</a>
<a className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-800" href="#">Sign up</a>
</div>

<div className="md:hidden" style={{animation: 'fadeIn 0.8s ease-out 0.6s both'}}>
<button className="transition-colors duration-200 text-neutral-600 hover:text-neutral-900" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden" id="mobile-overlay">
<div className="flex flex-col h-full">

<div className="flex justify-between items-center p-6 border-b border-neutral-100">
<div className="text-xl font-semibold tracking-tight text-neutral-900">NFTForge</div>
<button className="transition-colors duration-200 text-neutral-600 hover:text-neutral-900" id="mobile-close-btn">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 px-6 py-8 flex flex-col justify-between">

<div className="space-y-8">
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">Features</a>
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">Pricing</a>
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">Customer Voice</a>
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">FAQs</a>
</div>

<div className="space-y-6">

<div className="flex items-center justify-between py-4 border-t border-neutral-100">
<span className="text-lg font-medium text-neutral-900">Language</span>
<select className="text-lg font-medium focus:outline-none text-neutral-600 bg-transparent">
<option>English</option>
<option>日本語</option>
</select>
</div>

<div className="space-y-4">
<a className="block text-center py-3 text-lg font-medium transition-colors duration-200 text-neutral-600 hover:text-neutral-900" href="#">Login</a>
<a className="block text-center py-3 rounded-lg text-lg font-medium transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-800" href="#">Sign up</a>
</div>
</div>
</div>
</div>
</div>

<section className="lg:pt-24 lg:pb-16 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-neutral-900" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>
                Simple, transparent <span className="text-transparent bg-gradient-to-r bg-clip-text from-neutral-900 to-neutral-600">pricing</span>
</h1>
<p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto text-neutral-600" style={{animation: 'slideUp 0.8s ease-out 0.4s both'}}>
                Choose the plan that fits your needs. Pay with USD and start creating NFTs today.
            </p>
</div>
</section>

<section className="lg:py-16 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>
<h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">Subscription Plans</h2>
<p className="text-neutral-600">Choose your monthly plan with additional features as you grow</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{animation: 'slideUp 0.8s ease-out 0.4s both'}}>

<div className="relative bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="mb-8">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Free</h3>
<div className="flex items-baseline">
<span className="text-3xl font-bold text-neutral-900">$0</span>
<span className="text-neutral-600 ml-2">/month</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Sales fee + gas costs</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Basic shop</span>
</li>
<li className="flex items-center text-neutral-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3">Shop customization</span>
</li>
<li className="flex items-center text-neutral-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3">Community site</span>
</li>
</ul>
<div className="mb-6">
<p className="text-sm text-neutral-600">Support: Email</p>
</div>
<button className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400">
                        Get started
                    </button>
</div>

<div className="relative bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="mb-8">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Starter</h3>
<div className="flex items-baseline">
<span className="text-sm text-neutral-500 line-through mr-2">$49</span>
<span className="text-3xl font-bold text-neutral-900">$20</span>
<span className="text-neutral-600 ml-2">/month</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Sales fee + gas costs</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Everything in Free</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Shop customization</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Community site</span>
</li>
<li className="flex items-center text-neutral-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3">Community analytics</span>
</li>
</ul>
<div className="mb-6">
<p className="text-sm text-neutral-600">Support: Email</p>
</div>
<button className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl bg-neutral-900 text-white hover:bg-neutral-800">
                        Start free trial
                    </button>
</div>

<div className="relative bg-white rounded-2xl border-2 border-neutral-900 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
</div>
<div className="mb-8">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Pro</h3>
<div className="flex items-baseline">
<span className="text-3xl font-bold text-neutral-900">$199</span>
<span className="text-neutral-600 ml-2">/month</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Sales fee + gas costs</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Everything in Starter</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Community analytics</span>
</li>
<li className="flex items-center text-neutral-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3">Custom domain</span>
</li>
<li className="flex items-center text-neutral-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3">API access</span>
</li>
</ul>
<div className="mb-6">
<p className="text-sm text-neutral-600">Support: Customer service</p>
</div>
<button className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl bg-neutral-900 text-white hover:bg-neutral-800">
                        Start free trial
                    </button>
</div>

<div className="relative bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="mb-8">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Enterprise</h3>
<div className="flex items-baseline">
<span className="text-xl font-semibold text-neutral-900">Talk to sales</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Custom pricing</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Everything in Pro</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">Custom domain</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">API access</span>
</li>
<li className="flex items-center">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="ml-3 text-neutral-700">White label</span>
</li>
</ul>
<div className="mb-6">
<p className="text-sm text-neutral-600">Support: Dedicated account manager</p>
</div>
<button className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400">
                        Contact sales
                    </button>
</div>
</div>
</div>
</section>

<section className="lg:py-16 py-12 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>
<div className="text-center sm:text-left">
<h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">Revenue Share Model</h2>
<p className="text-neutral-600 max-w-2xl">Our commission rates decrease as your sales volume grows. The more you sell, the less you pay.</p>
</div>

<div className="mt-6 sm:mt-0">
<label className="text-sm font-medium text-neutral-700 mb-2 block">View prices in:</label>
<div className="relative">
<select className="appearance-none focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 cursor-pointer transition-colors duration-200 text-sm font-medium bg-white border-neutral-300 border rounded-lg pt-2 pr-10 pb-2 pl-4" id="currency-selector">
<option value="USD">USD ($)</option>
<option value="EUR">EUR (€)</option>
</select>
<svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{animation: 'slideUp 0.8s ease-out 0.4s both'}}>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-neutral-900 text-white">
<tr className="">
<th className="px-6 py-4 text-left text-sm font-semibold">Commission Rate</th>
<th className="px-6 py-4 text-left text-sm font-semibold">
<span id="currency-header">USD Sales Volume</span>
</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50 transition-colors duration-200">
<td className="px-6 py-4 font-semibold text-neutral-900">10%</td>
<td className="px-6 py-4 text-neutral-700">
<span className="usd-amount">$80 - $800</span>
<span className="eur-amount hidden">€75 - €750</span>
</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors duration-200">
<td className="px-6 py-4 font-semibold text-neutral-900">8%</td>
<td className="px-6 py-4 text-neutral-700">
<span className="usd-amount">$800 - $8,000</span>
<span className="eur-amount hidden">€750 - €7,500</span>
</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors duration-200">
<td className="px-6 py-4 font-semibold text-neutral-900">6%</td>
<td className="px-6 py-4 text-neutral-700">
<span className="usd-amount">$8,000 - $80,000</span></td></tr></tbody></table></div></div></div></section>
    </>
  );
}
