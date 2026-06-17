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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center animate-logo-3d shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<span className="text-white font-semibold text-xs tracking-tighter" style={{transform: 'translateZ(10px)'}}>
              MVC
            </span>
</div>
<span className="font-medium text-zinc-100 tracking-tight text-sm">
            MVC Industries
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
            Home
          </a>
<a className="text-xs text-zinc-100 font-medium transition-colors" href="#">
            About Us
          </a>
<a className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
            Capabilities
          </a>
<a className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
            Contact
          </a>
</div>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
<main className="relative pt-24 pb-20">

<div className="absolute top-0 inset-x-0 h-[500px] bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>

<section className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs text-zinc-300 font-medium tracking-tight">
            Pioneering Industrial Excellence
          </span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-tight max-w-4xl mx-auto">
          Engineering the framework of
          <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-pulse">
            modern infrastructure.
          </span>
</h1>
<p className="text-sm md:text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          MVC Industries stands at the intersection of precision engineering and
          advanced manufacturing. We transform complex challenges into scalable,
          high-performance physical realities.
        </p>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 md:row-span-2 rounded-2xl bg-[#111111] border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
<div>
<iconify-icon className="text-2xl text-zinc-500 mb-6 group-hover:text-indigo-400 transition-colors" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">
                Our Legacy &amp; Evolution
              </h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                Founded with a commitment to absolute precision, MVC Industries
                has evolved from a specialized workshop into a comprehensive
                manufacturing entity. We have consistently adapted to the
                shifting landscapes of global industry, integrating automation
                and advanced materials science into our core workflows.
              </p>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                Today, we serve as the silent backbone for leading technological
                and infrastructural projects worldwide, ensuring that every
                component meets rigorous international standards.
              </p>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-br from-[#1A1A24] to-[#111111] border border-white/10 p-8 flex flex-col group hover:border-indigo-500/30 transition-all duration-500">
<iconify-icon className="text-2xl text-cyan-500 mb-4" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">
              Our Vision
            </h3>
<p className="text-xs text-zinc-400 font-light leading-relaxed mt-auto">
              To redefine the boundaries of manufacturing through sustainable
              practices and relentless technological innovation.
            </p>
</div>

<div className="rounded-2xl bg-[#111111] border border-white/10 p-8 flex flex-col group hover:border-white/20 transition-all duration-500">
<iconify-icon className="text-2xl text-indigo-400 mb-4" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">
              Our Mission
            </h3>
<p className="text-xs text-zinc-400 font-light leading-relaxed mt-auto">
              Delivering unparalleled structural integrity and mechanical
              precision to empower our clients' most ambitious projects.
            </p>
</div>

<div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
<div className="rounded-2xl bg-[#111111] border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors">
<span className="text-3xl font-medium tracking-tighter text-zinc-100 mb-1">
                15+
              </span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                Years Active
              </span>
</div>
<div className="rounded-2xl bg-[#111111] border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors">
<span className="text-3xl font-medium tracking-tighter text-zinc-100 mb-1">
                500k
              </span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                Parts Machined
              </span>
</div>
<div className="rounded-2xl bg-[#111111] border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors">
<span className="text-3xl font-medium tracking-tighter text-zinc-100 mb-1">
                ISO
              </span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                9001 Certified
              </span>
</div>
<div className="rounded-2xl bg-[#111111] border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.02] transition-colors">
<span className="text-3xl font-medium tracking-tighter text-zinc-100 mb-1">
                99.8%
              </span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                Precision Rate
              </span>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#0A0A0A] py-24 relative overflow-hidden">
<div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100">
              The MVC Philosophy
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-[#111111] flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-300" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-200 tracking-tight mb-2">
                  Technological Integration
                </h3>
<p className="text-xs text-zinc-400 font-light leading-relaxed">
                  We don't just use machines; we integrate IoT and real-time
                  analytics into our CNC processes to predict wear and maintain
                  micrometer accuracy continuously.
                </p>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-[#111111] flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-300" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-200 tracking-tight mb-2">
                  Uncompromising QA
                </h3>
<p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Quality isn't an afterthought; it's engineered into every
                  step. Our multi-stage automated optical inspection ensures
                  zero defects in critical components.
                </p>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-[#111111] flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-300" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-200 tracking-tight mb-2">
                  Sustainable Operations
                </h3>
<p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Optimizing material usage and recycling scrap are standard
                  procedures. We are committed to reducing the carbon footprint
                  of heavy manufacturing.
                </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050505] py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-[3px] bg-zinc-800 flex items-center justify-center">
<span className="text-zinc-400 font-semibold text-[8px] tracking-tighter">
              MVC
            </span>
</div>
<span className="text-xs text-zinc-500 font-medium tracking-tight">
            MVC Industries
          </span>
</div>
<p className="text-[10px] text-zinc-600 font-light">
          © 2024 MVC Industries. All rights reserved.
        </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
