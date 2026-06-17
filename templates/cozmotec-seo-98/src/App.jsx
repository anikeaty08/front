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
      

<div className="relative w-full max-w-[210mm] min-h-[297mm] bg-[#030305] shadow-2xl overflow-hidden border border-white/5 flex flex-col">

<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6007A] opacity-[0.08] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2a1b52] opacity-[0.15] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

<div className="relative z-10 flex flex-col h-full p-12 md:p-16 space-y-12">

<header className="text-center space-y-8">

<div className="flex justify-center items-center gap-2 mb-8">
<div className="tracking-tighter text-2xl font-semibold text-white uppercase flex items-center gap-2">
<iconify-icon className="text-[#E6007A]" icon="solar:infinity-linear" width="24"></iconify-icon>
<span>Cozmotec</span>
</div>
</div>

<div className="space-y-4">
<h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                        Grow Faster with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Smart SEO</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-lg mx-auto leading-relaxed">
                        Data-driven strategies that turn search traffic into real revenue.
                    </p>
</div>

<div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#E6007A] to-transparent shadow-[0_0_10px_#E6007A]"></div>
</header>

<section className="max-w-2xl mx-auto text-center">
<p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
                    “We help businesses <span className="text-white font-normal">increase visibility</span>, attract the right customers, and convert more traffic through intelligent SEO, technical precision, and performance-focused content.”
                </p>
</section>

<section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">

<div className="flex items-center gap-4 group">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#E6007A] group-hover:border-[#E6007A]/30 transition-colors">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Technical SEO Optimization</span>
</div>

<div className="flex items-center gap-4 group">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#E6007A] group-hover:border-[#E6007A]/30 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Keyword Strategy &amp; Research</span>
</div>

<div className="flex items-center gap-4 group">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#E6007A] group-hover:border-[#E6007A]/30 transition-colors">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">On-Page SEO Improvements</span>
</div>

<div className="flex items-center gap-4 group">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#E6007A] group-hover:border-[#E6007A]/30 transition-colors">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Content Optimization</span>
</div>

<div className="flex items-center gap-4 group">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#E6007A] group-hover:border-[#E6007A]/30 transition-colors">
<iconify-icon icon="solar:link-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Backlink &amp; Authority Building</span>
</div>

<div className="flex items-center gap-4 group">
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#E6007A] group-hover:border-[#E6007A]/30 transition-colors">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">Conversion-Focused SEO</span>
</div>
</div>
</section>

<section className="flex-grow flex flex-col justify-center space-y-4">

<div className="flex items-center justify-between p-5 rounded-xl border border-white/5 bg-[#08080C]">
<div>
<h3 className="text-white font-medium">Basic Plan</h3>
<p className="text-xs text-slate-500 mt-1">For small businesses &amp; startups</p>
</div>
<div className="text-right">
<span className="text-lg font-semibold text-white">€300</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
</div>

<div className="relative flex items-center justify-between p-6 rounded-xl border border-[#E6007A]/40 bg-[#0B0B12] shadow-[0_0_30px_-10px_rgba(230,0,122,0.15)] overflow-hidden">
<div className="absolute top-0 right-0 bg-[#E6007A] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                        Most Popular
                    </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#E6007A]/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-white font-semibold text-lg">Growth Plan</h3>
<p className="text-xs text-slate-400 mt-1">For scaling businesses</p>
</div>
<div className="text-right relative z-10">
<span className="text-2xl font-bold text-white tracking-tight">€400</span>
<span className="text-xs text-slate-400">/mo</span>
</div>
</div>

<div className="flex items-center justify-between p-5 rounded-xl border border-white/5 bg-[#08080C]">
<div>
<h3 className="text-white font-medium">Advanced Plan</h3>
<p className="text-xs text-slate-500 mt-1">For competitive markets &amp; eCommerce</p>
</div>
<div className="text-right">
<span className="text-lg font-semibold text-white">€600</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
</div>
</section>

<footer className="mt-auto pt-8 border-t border-white/5">
<div className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-8 border border-white/5 text-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 transform -skew-x-12 translate-x-full animate-shimmer"></div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6 relative z-10">
                        Ready to dominate search results?
                    </h2>
<button className="relative z-10 group bg-gradient-to-r from-[#E6007A] to-[#FF2F92] hover:shadow-[0_0_20px_-5px_#E6007A] transition-all duration-300 text-white font-medium text-sm py-3 px-8 rounded-full flex items-center gap-2 mx-auto">
<span>Let’s Talk</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</footer>
</div>
</div>

    </>
  );
}
