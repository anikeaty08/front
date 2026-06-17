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
      
<div className="w-full max-w-5xl bg-gray-900/95 rounded-xl overflow-hidden flex flex-col shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] border border-gray-800">

<div className="w-full p-8 md:p-14 bg-gray-900/90">
<div className="mb-10">
<span className="text-rose-500 font-bold text-lg tracking-wide">Neon UI</span>
</div>
<div className="mb-10">
<h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Pro UI Kit</h1>
<p className="text-gray-400 leading-relaxed text-base">
                    The most comprehensive, modern design system for your next project. 500+ components, 100+ layouts, Figma &amp; React files, and lifetime free updates. Perfect for crafting beautiful, consistent interfaces at lightning speed.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Lifetime Free Updates</h3>
<p className="text-gray-400 text-sm mt-1">Get every new component, always free.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Money-back Guarantee</h3>
<p className="text-gray-400 text-sm mt-1">30 days, no questions asked.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Designer &amp; Dev Community</h3>
<p className="text-gray-400 text-sm mt-1">Join 5,000+ creators for support and feedback.</p>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col justify-center items-center p-8 md:p-14 bg-gray-800/80">
<div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-none">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-white tracking-tight">Features Comparison</h2>
<div className="flex items-center space-x-2">
<span className="text-rose-500 font-bold">Pro UI Kit</span>
</div>
</div>
<div className="border-t border-gray-700 mb-6"></div>

<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left border-b border-gray-700">
<th className="pb-4 text-xs font-semibold text-gray-400 tracking-wide">FEATURE</th>
<th className="pb-4 text-xs font-semibold text-gray-400 tracking-wide">FREE</th>
<th className="pb-4 text-xs font-semibold text-gray-400 tracking-wide">PRO</th>
<th className="pb-4 text-xs font-semibold text-gray-400 tracking-wide">ENTERPRISE</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-gray-700">
<td className="py-4 text-gray-200 font-medium">UI Components</td>
<td className="py-4 text-gray-400">20+</td>
<td className="py-4 text-rose-500 font-medium">500+</td>
<td className="py-4 text-gray-400">500+</td>
</tr>
<tr className="border-b border-gray-700">
<td className="py-4 text-gray-200 font-medium">Pre-built Layouts</td>
<td className="py-4 text-gray-400">5</td>
<td className="py-4 text-rose-500 font-medium">100+</td>
<td className="py-4 text-gray-400">100+</td>
</tr>
<tr className="border-b border-gray-700">
<td className="py-4 text-gray-200 font-medium">Figma Files</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-rose-500">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
</tr>
<tr className="border-b border-gray-700">
<td className="py-4 text-gray-200 font-medium">React Components</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-rose-500">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
</tr>
<tr className="border-b border-gray-700">
<td className="py-4 text-gray-200 font-medium">Lifetime Updates</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-rose-500">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
</tr>
<tr className="border-b border-gray-700">
<td className="py-4 text-gray-200 font-medium">Support</td>
<td className="py-4 text-gray-400">Community</td>
<td className="py-4 text-rose-500 font-medium">Priority</td>
<td className="py-4 text-gray-400">Dedicated</td>
</tr>
<tr>
<td className="py-4 text-gray-200 font-medium">Commercial License</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-rose-500">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
<td className="py-4 text-gray-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</td>
</tr>
</tbody>
</table>
</div>
<div className="border-t border-gray-700 my-8"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
<h3 className="text-lg font-medium text-gray-200 mb-2">Free</h3>
<p className="text-3xl font-bold text-white mb-4">$0</p>
<p className="text-gray-400 text-sm mb-6">Basic components for personal projects</p>
<button className="w-full py-2 px-4 border border-gray-700 rounded-md text-gray-300 font-medium">
                            Get Started
                        </button>
</div>
<div className="bg-gray-800/60 border border-rose-500 rounded-xl p-6 relative">
<div className="absolute -top-3 right-6 bg-rose-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                            POPULAR
                        </div>
<h3 className="text-lg font-medium text-gray-200 mb-2">Pro</h3>
<p className="text-3xl font-bold text-rose-500 mb-4">$99</p>
<p className="text-gray-400 text-sm mb-6">Complete UI system for professional work</p>
<button className="w-full py-2 px-4 bg-rose-500 rounded-md text-white font-medium">
                            Get Started
                        </button>
</div>
<div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
<h3 className="text-lg font-medium text-gray-200 mb-2">Enterprise</h3>
<p className="text-3xl font-bold text-white mb-4">$499</p>
<p className="text-gray-400 text-sm mb-6">Advanced features for teams and businesses</p>
<button className="w-full py-2 px-4 border border-gray-700 rounded-md text-gray-300 font-medium">
                            Contact Sales
                        </button>
</div>
</div>
<p className="text-xs text-gray-500 text-center">
                    Need help choosing? <a className="text-rose-500 hover:text-rose-400" href="#">Contact our sales team</a>
</p>
</div>
</div>
</div>

    </>
  );
}
