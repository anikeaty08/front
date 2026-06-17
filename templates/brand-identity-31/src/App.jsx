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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<span className="iconify text-zinc-400" data-height="20" data-icon="lucide:box-select" data-width="20" style={{strokeWidth: '1.5'}}></span>
                LOGOTYPE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Start Project
                <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid mask-image-gradient pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
<div className="relative max-w-6xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 hover:border-white/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Accepting new projects for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Identity design for<br className="hidden md:block"/>
<span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">builders &amp; visionaries.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                We craft timeless logos and visual identities that cut through the noise. Minimalist, functional, and distinct.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#work">
                    View Selected Work
                </a>
<a className="w-full md:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="#pricing">
                    View Plans
                </a>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-950/50 py-10 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-8">Trusted by next-gen startups</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:triangle" style={{strokeWidth: '2'}}></span> VORTEX
                </span>
<span className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:circle-dashed" style={{strokeWidth: '2'}}></span> ORBIT
                </span>
<span className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:hexagon" style={{strokeWidth: '2'}}></span> NEXUS
                </span>
<span className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:zap" style={{strokeWidth: '2'}}></span> BOLT
                </span>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Selected Work</h2>
<p className="text-zinc-500">Recent identity systems and marks.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                    View Archive <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-900/0 to-zinc-900/0">
<span className="text-6xl font-medium tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">Aether</span>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-medium">Aether Finance</h3>
<p className="text-zinc-500 text-sm">Fintech Identity</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-zinc-700 group-hover:text-white transition-colors duration-500" data-height="80" data-icon="lucide:aperture" data-width="80" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-medium">Luma</h3>
<p className="text-zinc-500 text-sm">Photography App</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
<div className="text-5xl font-medium tracking-tighter text-white border-2 border-white/20 w-24 h-24 rounded-full flex items-center justify-center group-hover:border-white/80 transition-colors duration-300">k.</div>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-medium">Kinetic</h3>
<p className="text-zinc-500 text-sm">Fitness Brand</p>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-zinc-900/0 to-zinc-900/0">
<div className="flex gap-1 items-center">
<div className="w-8 h-8 rounded bg-white group-hover:rotate-45 transition-transform duration-500"></div>
<div className="w-8 h-8 rounded-full bg-zinc-700"></div>
<div className="w-8 h-8 rounded bg-zinc-800"></div>
</div>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-medium">Blocks UI</h3>
<p className="text-zinc-500 text-sm">Design System</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/20" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:fingerprint" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white">Distinctive</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We avoid trends. We build identities based on core values that stand out in crowded markets and age gracefully.
                    </p>
</div>

<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white">Scalable Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        A logo isn't enough. We deliver complete visual systems that work from favicon size to billboards.
                    </p>
</div>

<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:clock" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-white">Fast Turnaround</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Streamlined async communication. No endless meetings. We focus on deep work and rapid iteration.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Simple, transparent pricing.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:border-white/10 transition-colors relative group">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Startup</h3>
<p className="text-zinc-500 text-sm h-10">Essential identity for early-stage companies.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium text-white tracking-tight">$2,400</span>
<span className="text-zinc-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Primary Logo
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Color Palette &amp; Typography
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Brand Guidelines (PDF)
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> 2 Revision Rounds
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium text-center hover:bg-white/10 transition-colors" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/60 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] relative">
<div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<p className="text-zinc-500 text-sm h-10">Complete visual language and assets.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium text-white tracking-tight">$4,800</span>
<span className="text-zinc-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Everything in Startup
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Social Media Assets
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Stationery Design
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Priority Support
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg bg-white text-black text-sm font-medium text-center hover:bg-zinc-200 transition-colors" href="#contact">Book Now</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-10 bg-zinc-950" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to shape your brand?</h2>
<p className="text-zinc-500 mb-8 max-w-sm">Reach out to discuss your project. We typically respond within 24 hours.</p>
<a className="text-white border-b border-white/20 hover:border-white pb-1 transition-colors text-lg" href="mailto:hello@example.com">hello@logotype.design</a>
</div>
<div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Name" type="text"/>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Email" type="email"/>
</div>
<div className="relative">
<select className="w-full appearance-none bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-white/30 transition-all">
<option>Startup Plan</option>
<option>Enterprise Plan</option>
<option>Custom Inquiry</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Tell us about your project" rows="4"></textarea>
<div className="flex items-center gap-3">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out left-0 top-0" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer border border-zinc-700" htmlFor="toggle"></label>
</input></div>
<label className="text-xs text-zinc-500" htmlFor="toggle">Subscribe to newsletter</label>
</div>
<button className="px-6 py-3 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors w-full md:w-auto" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 text-xs text-zinc-600">
<p>© 2023 Logotype Design. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
