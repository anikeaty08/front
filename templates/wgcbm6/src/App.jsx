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
      
<section className="py-20 md:py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03] blur-3xl"></div>
<div className="absolute -top-96 -right-96 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
<div className="absolute -bottom-96 -left-96 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
<div className="container mx-auto px-4 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
<p className="text-gradient font-medium mb-4">Our Approach</p>
<h2 className="text-3xl md:text-5xl font-bold mb-6">
          Crafting exceptional digital experiences
        </h2>
<p className="text-white/40 text-lg max-w-2xl mx-auto">
          We combine strategic thinking with cutting-edge technology to build products that stand out in today's competitive landscape.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

<div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all fade-in delay-1">
<div className="w-12 h-12 rounded-xl bg-gradient mb-6 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">Strategic Innovation</h3>
<p className="text-white/40 mb-4">We help transform your vision into innovative digital solutions that solve real problems.</p>
<a className="text-gradient inline-flex items-center" href="#">
            Learn more
            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all fade-in delay-2">
<div className="w-12 h-12 rounded-xl bg-gradient mb-6 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">Beautiful UI Design</h3>
<p className="text-white/40 mb-4">Stunning interfaces that balance aesthetics with functionality for exceptional user experiences.</p>
<a className="text-gradient inline-flex items-center" href="#">
            Learn more
            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all fade-in delay-3">
<div className="w-12 h-12 rounded-xl bg-gradient mb-6 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-bold mb-3">Robust Development</h3>
<p className="text-white/40 mb-4">Scalable, high-performance code that ensures your product works flawlessly across all devices.</p>
<a className="text-gradient inline-flex items-center" href="#">
            Learn more
            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center">
<p className="text-gradient text-4xl md:text-5xl font-bold mb-2">97%</p>
<p className="text-white/40">Client satisfaction</p>
</div>
<div className="text-center">
<p className="text-gradient text-4xl md:text-5xl font-bold mb-2">150+</p>
<p className="text-white/40">Projects completed</p>
</div>
<div className="text-center">
<p className="text-gradient text-4xl md:text-5xl font-bold mb-2">10+</p>
<p className="text-white/40">Years experience</p>
</div>
<div className="text-center">
<p className="text-gradient text-4xl md:text-5xl font-bold mb-2">32</p>
<p className="text-white/40">Award winning designs</p>
</div>
</div>
</div>
</section>

    </>
  );
}
