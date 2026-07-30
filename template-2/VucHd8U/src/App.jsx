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
      
<section className="py-20 relative overflow-hidden">
<div className="container mx-auto px-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-light mb-4">What Our <span className="text-cyan-400">Customers Say</span></h2>
<p className="text-base text-slate-400">Discover how AnalyticsPro has helped businesses around the world improve their user engagement and make better decisions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors duration-300 gradient-bg relative">
<div className="quote-mark">"</div>
<div className="relative">
<p className="text-slate-300 mb-6 italic">AnalyticsPro transformed how we understand our customers. The real-time insights helped us increase our conversion rate by 32% in just three months.</p>
<div className="flex items-center">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/48.jpg" />
<div>
<h4 className="font-semibold">Sarah Johnson</h4>
<p className="text-sm text-slate-400">Marketing Director, TechFlow</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors duration-300 gradient-bg relative">
<div className="quote-mark">"</div>
<div className="relative">
<p className="text-slate-300 mb-6 italic">The user segmentation tools are incredible. We can now target our features to the right audience with precision we never had before.</p>
<div className="flex items-center">
<img alt="Michael Chen" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div>
<h4 className="font-semibold">Michael Chen</h4>
<p className="text-sm text-slate-400">Product Manager, Innovate Inc</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors duration-300 gradient-bg relative">
<div className="quote-mark">"</div>
<div className="relative">
<p className="text-slate-300 mb-6 italic">Setting up AnalyticsPro was remarkably easy. Within a day, we had meaningful insights that actually impacted our decision-making process.</p>
<div className="flex items-center">
<img alt="Emily Rodriguez" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/65.jpg" />
<div>
<h4 className="font-semibold">Emily Rodriguez</h4>
<p className="text-sm text-slate-400">CTO, StartupBoost</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors duration-300 gradient-bg relative">
<div className="quote-mark">"</div>
<div className="relative">
<p className="text-slate-300 mb-6 italic">The automated reporting saves us hours every week. Our team can focus on acting on insights rather than compiling data.</p>
<div className="flex items-center">
<img alt="David Wilson" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/75.jpg" />
<div>
<h4 className="font-semibold">David Wilson</h4>
<p className="text-sm text-slate-400">Data Analyst, Enterprise Solutions</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors duration-300 gradient-bg relative">
<div className="quote-mark">"</div>
<div className="relative">
<p className="text-slate-300 mb-6 italic">The privacy-focused approach gives us confidence that we're respecting our users while still gathering the insights we need.</p>
<div className="flex items-center">
<img alt="Sophia Ahmed" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/22.jpg" />
<div>
<h4 className="font-semibold">Sophia Ahmed</h4>
<p className="text-sm text-slate-400">Privacy Officer, SecureHealth</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8 hover:border-cyan-500/50 transition-colors duration-300 gradient-bg relative">
<div className="quote-mark">"</div>
<div className="relative">
<p className="text-slate-300 mb-6 italic">The customer support team is exceptional. Any questions we had were answered promptly, making our onboarding seamless.</p>
<div className="flex items-center">
<img alt="James Foster" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/54.jpg" />
<div>
<h4 className="font-semibold">James Foster</h4>
<p className="text-sm text-slate-400">Operations Manager, GlobalRetail</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-3xl mx-auto">
<div className="flex items-center justify-center mb-6">
<div className="flex">
<svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<span className="ml-2 text-lg font-semibold">4.9/5</span>
<span className="mx-2 text-slate-400">•</span>
<span className="text-slate-400">Based on 230+ reviews</span>
</div>
<a className="inline-block px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors" href="#">
          Read All Customer Stories
        </a>
</div>
</div>
</section>

    </>
  );
}
