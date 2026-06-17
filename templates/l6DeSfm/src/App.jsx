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
      

<div className="spline-bg">
<iframe frameborder="0" height="100%" src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/" width="100%"></iframe>
</div>
<div className="overlay"></div>

<nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-7 w-7 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
<path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
</svg>
<span className="ml-3 text-lg sm:text-xl tracking-tight">Neural</span>
</div>
<div className="hidden md:flex space-x-6 lg:space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="text-blue-400 hover:text-blue-300 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<button className="md:hidden text-gray-300">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="hidden md:block text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
          Account
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

<div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10 min-h-[calc(100vh-80px)] flex flex-col">
<div className="text-center mb-10 md:mb-12">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter mb-4">
        Manage Your <span className="gradient-text">Subscription</span>
</h1>
<p className="text-gray-300 max-w-2xl mx-auto text-lg">
        Control your Neural AI subscription settings and choose the plan that fits your needs
      </p>
</div>

<div className="backdrop-blur-lg bg-black/30 p-6 sm:p-8 rounded-xl border border-gray-800 max-w-4xl mx-auto w-full mb-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center mb-1">
<h3 className="text-xl font-normal">Current Plan: <span className="text-blue-400">Pro</span></h3>
<span className="ml-3 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Active</span>
</div>
<p className="text-gray-400 text-sm">Next billing date: June 12, 2023</p>
</div>
<div className="flex space-x-3">
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
            Billing history
          </button>
<button className="text-sm bg-white/10 border border-gray-700 rounded-md px-4 py-2 hover:bg-white/15 transition-all">
            Cancel plan
          </button>
</div>
</div>
<div className="h-px bg-gray-800 my-6"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
<div>
<p className="text-gray-400 mb-1">Usage this month</p>
<div className="flex items-center">
<div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
<div className="bg-blue-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
</div>
<span>75%</span>
</div>
</div>
<div>
<p className="text-gray-400 mb-1">API calls</p>
<p className="text-white">15,234 / 20,000</p>
</div>
<div>
<p className="text-gray-400 mb-1">Active users</p>
<p className="text-white">8 / 10</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">

<div className="plan-card backdrop-blur-lg bg-black/30 p-6 rounded-xl border border-gray-800 flex flex-col">
<h3 className="text-xl font-normal mb-2">Starter</h3>
<div className="mb-4">
<span className="text-3xl">$29</span>
<span className="text-gray-400">/month</span>
</div>
<p className="text-gray-400 text-sm mb-6">Perfect for individuals and small projects</p>
<ul className="space-y-3 text-sm mb-8 flex-grow">
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>5,000 API calls/month</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>2 team members</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Basic analytics</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>24-hour support response</span>
</li>
</ul>
<button className="w-full border border-gray-700 rounded-md py-2 hover:bg-white/5 transition-all mt-auto">
          Downgrade
        </button>
</div>

<div className="plan-card backdrop-blur-lg bg-blue-900/20 p-6 rounded-xl border border-blue-700 flex flex-col relative">
<div className="absolute -top-3 right-4 bg-blue-500 text-xs py-1 px-3 rounded-full">
          Current Plan
        </div>
<h3 className="text-xl font-normal mb-2">Pro</h3>
<div className="mb-4">
<span className="text-3xl">$99</span>
<span className="text-gray-400">/month</span>
</div>
<p className="text-gray-300 text-sm mb-6">Ideal for growing teams and businesses</p>
<ul className="space-y-3 text-sm mb-8 flex-grow">
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>20,000 API calls/month</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>10 team members</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Advanced analytics</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>4-hour support response</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Custom integrations</span>
</li>
</ul>
<button className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-400 transition-all mt-auto">
          Current Plan
        </button>
</div>

<div className="plan-card backdrop-blur-lg bg-black/30 p-6 rounded-xl border border-gray-800 flex flex-col">
<h3 className="text-xl font-normal mb-2">Enterprise</h3>
<div className="mb-4">
<span className="text-3xl">$299</span>
<span className="text-gray-400">/month</span>
</div>
<p className="text-gray-400 text-sm mb-6">For organizations with advanced needs</p>
<ul className="space-y-3 text-sm mb-8 flex-grow">
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Unlimited API calls</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Unlimited team members</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Enterprise analytics</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>1-hour support response</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Dedicated account manager</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<span>Custom deployment options</span>
</li>
</ul>
<button className="w-full border border-gray-700 rounded-md py-2 hover:bg-white/5 transition-all mt-auto">
          Upgrade
        </button>
</div>
</div>

<div className="mt-12 text-center text-gray-400 text-sm">
<p>All plans include our core features: API access, dashboard, and basic support.</p>
<p className="mt-2">Need a custom plan? <a className="text-blue-400 hover:underline" href="#">Contact our sales team</a></p>
</div>
<div className="mt-auto pt-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6"></div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<div>© 2023 Neural AI. All rights reserved.</div>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="hover:text-gray-300" href="#">Support</a>
</div>
</div>
</div>
</div>

    </>
  );
}
