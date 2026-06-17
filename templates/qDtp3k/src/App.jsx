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
      
<main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
<div className="max-w-2xl mx-auto mb-10">
<span className="inline-block mb-5 rounded-lg border border-white/10 px-4 py-2">
<span className="uppercase tracking-widest text-xs font-bold text-blue-400" style={{letterSpacing: '0.1em'}}>
          Pricing
        </span>
</span>
<h1 className="pricing-headline mb-3 text-white font-normal">
        Simple, flexible <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent">pricing plans</span>
</h1>
<p className="text-lg font-normal mb-4 text-gray-200">
        Pick the plan that fits your project. No hidden fees.
      </p>
</div>
<section className="w-full max-w-5xl flex flex-col md:flex-row justify-center gap-6">

<div className="flex-1 border border-gray-800 bg-[#101015] rounded-2xl shadow-xl flex flex-col items-center p-8">
<h2 className="text-lg font-bold text-blue-300 mb-2 uppercase tracking-wider">Starter</h2>
<div className="flex items-end mb-4">
<span className="text-3xl font-semibold text-white">$</span>
<span className="text-5xl font-bold text-white ml-1">0</span>
<span className="text-base text-gray-400 font-normal ml-2">/mo</span>
</div>
<ul className="mb-8 text-left text-gray-300 space-y-2 w-full">
<li>✓ 1 active project</li>
<li>✓ Core AI features</li>
<li>✓ Email support</li>
</ul>
<a className="inline-block w-full min-w-[190px] rounded-lg px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow-md focus:outline-none focus:ring-4 focus:ring-orange-200 text-base" href="/signup">
          Get Started Free
        </a>
</div>

<div className="flex-1 border-2 border-purple-400 bg-gradient-to-br from-black via-[#1a1b23] to-[#1a1420] rounded-2xl shadow-[0_8px_32px_0_rgba(128,0,255,0.2)] flex flex-col items-center p-8 scale-105 relative z-10">
<h2 className="text-lg font-bold text-purple-300 mb-2 uppercase tracking-wider">Pro</h2>
<div className="flex items-end mb-4">
<span className="text-3xl font-semibold text-white">$</span>
<span className="text-5xl font-bold text-white ml-1">18</span>
<span className="text-base text-gray-400 font-normal ml-2">/mo</span>
</div>
<ul className="mb-8 text-left text-gray-200 space-y-2 w-full">
<li>✓ 10 active projects</li>
<li>✓ Advanced AI tools</li>
<li>✓ Priority support</li>
<li>✓ API access</li>
</ul>
<a className="inline-block w-full min-w-[190px] rounded-lg px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 text-base" href="/signup">
          Try Pro
        </a>
</div>

<div className="flex-1 border border-gray-800 bg-[#101015] rounded-2xl shadow-xl flex flex-col items-center p-8">
<h2 className="text-lg font-bold text-orange-300 mb-2 uppercase tracking-wider">Enterprise</h2>
<div className="flex items-end mb-4">
<span className="text-3xl font-semibold text-white">$</span>
<span className="text-5xl font-bold text-white ml-1">39</span>
<span className="text-base text-gray-400 font-normal ml-2">/mo</span>
</div>
<ul className="mb-8 text-left text-gray-300 space-y-2 w-full">
<li>✓ Unlimited projects</li>
<li>✓ Dedicated success manager</li>
<li>✓ Custom AI solutions</li>
<li>✓ 24/7 support</li>
</ul>
<a className="inline-block w-full min-w-[190px] rounded-lg px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow-md focus:outline-none focus:ring-4 focus:ring-orange-200 text-base" href="/contact">
          Contact Sales
        </a>
</div>
</section>
</main>

    </>
  );
}
