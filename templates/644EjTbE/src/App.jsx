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
      
<main className="flex-grow flex flex-col items-center justify-center px-4 py-20">
<section className="max-w-2xl mx-auto text-center mb-12">
<span className="inline-block mb-4 rounded-lg border border-white/10 px-3 py-1">
<span className="uppercase tracking-widest text-xs font-bold text-blue-500">Pricing</span>
</span>
<h1 className="headline mb-4 text-gray-900 font-normal">
      Find the <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">perfect plan</span> for you
    </h1>
<h2 className="text-lg font-normal mb-6 text-gray-700">
      Choose from flexible plans designed to accelerate your projects with powerful AI features.
    </h2>
</section>
<section className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center">

<div className="bg-white bg-opacity-90 rounded-2xl shadow-lg border border-gray-100 flex-1 max-w-sm px-7 py-8 flex flex-col items-center">
<span className="mb-2 uppercase text-xs tracking-wider font-semibold text-blue-500">Starter</span>
<div className="flex items-end mb-3">
<span className="text-3xl font-medium text-gray-400 mr-1">$</span>
<span className="text-5xl font-bold text-gray-900">0</span>
</div>
<p className="mb-5 text-gray-600 text-center">Get started free and explore AI tools at your own pace.</p>
<ul className="mb-7 space-y-2 w-full">
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Access to basic AI models
        </li>
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Community support
        </li>
<li className="flex items-center opacity-60 line-through">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Custom integrations
        </li>
</ul>
<a className="mt-auto w-full inline-block rounded-lg px-6 py-3 font-bold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-200 text-center shadow" href="#">
        Get Started
      </a>
</div>

<div className="relative bg-white bg-opacity-95 rounded-2xl shadow-2xl border-2 border-purple-300 flex-1 max-w-sm px-7 py-10 flex flex-col items-center scale-105 z-10">
<span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs rounded-full font-semibold shadow">Most Popular</span>
<span className="mb-2 uppercase text-xs tracking-wider font-semibold text-purple-600">Pro</span>
<div className="flex items-end mb-3">
<span className="text-3xl font-medium text-gray-400 mr-1">$</span>
<span className="text-5xl font-bold text-gray-900">29</span>
<span className="ml-1 text-base text-gray-500 font-medium"> /mo</span>
</div>
<p className="mb-5 text-gray-700 text-center">Unlock advanced features for growing teams and creators.</p>
<ul className="mb-7 space-y-2 w-full">
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          All Starter features
        </li>
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Priority support
        </li>
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Custom integrations
        </li>
<li className="flex items-center opacity-60 line-through">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Dedicated account manager
        </li>
</ul>
<a className="mt-auto w-full inline-block rounded-lg px-6 py-3 font-bold text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition focus:outline-none focus:ring-4 focus:ring-purple-200 text-center shadow-lg" href="#">
        Upgrade to Pro
      </a>
</div>

<div className="bg-white bg-opacity-90 rounded-2xl shadow-lg border border-gray-100 flex-1 max-w-sm px-7 py-8 flex flex-col items-center">
<span className="mb-2 uppercase text-xs tracking-wider font-semibold text-orange-600">Enterprise</span>
<div className="flex items-end mb-3">
<span className="text-3xl font-medium text-gray-400 mr-1">$</span>
<span className="text-5xl font-bold text-gray-900">99</span>
<span className="ml-1 text-base text-gray-500 font-medium"> /mo</span>
</div>
<p className="mb-5 text-gray-600 text-center">Comprehensive AI solutions and premium service for organizations.</p>
<ul className="mb-7 space-y-2 w-full">
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          All Pro features
        </li>
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Dedicated account manager
        </li>
<li className="flex items-center">
<svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          SLA &amp; premium support
        </li>
</ul>
<a className="mt-auto w-full inline-block rounded-lg px-6 py-3 font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition focus:outline-none focus:ring-4 focus:ring-orange-200 text-center shadow" href="#">
        Contact Sales
      </a>
</div>
</section>
</main>

    </>
  );
}
