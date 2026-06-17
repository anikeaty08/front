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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold tracking-tighter text-neutral-950">DHM</span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-medium text-neutral-500">
<a className="hover:text-[#C5A059] transition-colors" href="#">Portfolio</a>
<a className="hover:text-[#C5A059] transition-colors" href="#">Management</a>
<a className="hover:text-[#C5A059] transition-colors" href="#">Experience</a>
<a className="hover:text-[#C5A059] transition-colors text-neutral-950" href="#">Inquire</a>
</div>
<button className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-neutral-950/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<span className="inline-block text-white/80 text-xs uppercase tracking-[0.3em] mb-6">Established Excellence</span>
<h1 className="text-5xl md:text-7xl text-white serif-font italic tracking-tight mb-8">
                    Curating the standard of <span className="block not-italic font-medium">Modern Living.</span>
</h1>
<p className="text-lg text-white/70 font-light leading-relaxed mb-10 max-w-lg">
                    With fifteen years of combined expertise as both owners and managers, we treat every property with the same care we give our own.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all text-center" href="#">
                        Our Portfolio
                    </a>
<a className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-all text-center" href="#">
                        Partner With Us
                    </a>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Luxury Estate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 bg-white p-8 shadow-xl border border-neutral-100">
<div className="text-[#C5A059] text-5xl font-light mb-4 tracking-tighter">15</div>
<p className="text-xs uppercase tracking-widest leading-relaxed text-neutral-500">Years of combined ownership &amp; management experience.</p>
</div>
</div>
<div className="space-y-8">
<h2 className="text-4xl md:text-5xl serif-font tracking-tight text-neutral-900 leading-tight">
                        We understand what your <br/><span className="italic">investment truly deserves.</span>
</h2>
<p className="text-neutral-500 leading-relaxed font-light">
                        At Door Holdings &amp; Management, our perspective is unique. Having sat on both sides of the table as owners and operators, we recognize that luxury property management isn't just about maintenance—it's about asset preservation and tenant experience.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
<div className="space-y-3">
<iconify-icon className="text-[#C5A059] text-3xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wider">Owner's Mindset</h4>
<p className="text-sm text-neutral-500 font-light">We manage with the financial scrutiny and care of an owner.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#C5A059] text-3xl" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wider">Premium Service</h4>
<p className="text-sm text-neutral-500 font-light">Upscale hospitality standards for every resident and guest.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="gold-text text-xs uppercase tracking-[0.3em] font-medium">Core Capabilities</span>
<h2 className="text-4xl serif-font tracking-tight mt-4">Besproke Management Solutions</h2>
</div>
<div className="grid md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-white p-12 group hover:bg-neutral-950 transition-all duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-[#C5A059]/30 mb-8 group-hover:border-[#C5A059]">
<iconify-icon className="text-[#C5A059] text-xl" icon="solar:home-setting-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-4 group-hover:text-white transition-colors">Residential Management</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-400">Comprehensive oversight of luxury multifamily and single-family estates with a focus on longevity.</p>
</div>
<div className="bg-white p-12 group hover:bg-neutral-950 transition-all duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-[#C5A059]/30 mb-8 group-hover:border-[#C5A059]">
<iconify-icon className="text-[#C5A059] text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-4 group-hover:text-white transition-colors">Asset Optimization</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-400">Strategic planning and financial reporting designed to maximize yield and enhance property value.</p>
</div>
<div className="bg-white p-12 group hover:bg-neutral-950 transition-all duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-[#C5A059]/30 mb-8 group-hover:border-[#C5A059]">
<iconify-icon className="text-[#C5A059] text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-4 group-hover:text-white transition-colors">Tenant Relations</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-400">High-touch communication and vetting processes to ensure a prestigious community environment.</p>
</div>
</div>
</div>
</section>

<section className="h-[60vh] relative overflow-hidden">
<img alt="Luxury Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/20"></div>
</section>

<section className="py-24 bg-neutral-950 text-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-12">
<h2 className="text-4xl md:text-5xl serif-font tracking-tight mb-6 italic">Ready to elevate your portfolio?</h2>
<p className="text-neutral-400 font-light max-w-lg mx-auto">Discover the difference of management rooted in ownership experience. Let's discuss your properties today.</p>
</div>
<a className="inline-flex items-center gap-4 px-10 py-5 bg-[#C5A059] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#B48F48] transition-all" href="mailto:office@doorholdings.com">
                Get in Touch
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<footer className="py-12 border-t border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-1">
<span className="text-xl font-semibold tracking-tighter text-neutral-950">DHM</span>
</div>
<div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400">
<a className="hover:text-neutral-950 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-950 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-950 transition-colors" href="#">Accessibility</a>
</div>
<p className="text-xs text-neutral-400 font-light">
                    © 2024 Door Holdings &amp; Management. All Rights Reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
