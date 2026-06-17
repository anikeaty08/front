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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex flex-col items-center justify-center group" href="#">
<span className="text-2xl md:text-3xl tracking-[0.2em] font-medium text-white leading-none group-hover:text-neutral-300 transition-colors">BLACKMOOR</span>
<span className="text-xs md:text-sm tracking-[0.4em] font-normal text-white mt-2 leading-none ml-[0.4em] group-hover:text-neutral-300 transition-colors">DEFENCE</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-base font-normal text-neutral-400 hover:text-white transition-colors tracking-wide" href="#">Systems</a>
<a className="text-base font-normal text-neutral-400 hover:text-white transition-colors tracking-wide" href="#">Capabilities</a>
<a className="text-base font-normal text-neutral-400 hover:text-white transition-colors tracking-wide" href="#">Company</a>
<a className="px-5 py-2.5 bg-white text-black text-base font-medium hover:bg-neutral-200 transition-colors" href="#">Mission Control</a>
</div>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="flex-grow pt-24">
<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-neutral-900">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-900/50 mb-8">
<span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse"></span>
<span className="text-sm font-normal text-neutral-300 tracking-wide uppercase">Deployment Ready</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                        Attritable<br/>
<span className="text-neutral-500">Intelligence Systems.</span>
</h1>
<p className="text-xl md:text-2xl font-normal text-neutral-400 max-w-2xl leading-relaxed mb-12">
                        Engineering asymmetric advantages for the modern battlespace through scalable, autonomous, and cost-effective defense architectures.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-lg font-medium hover:bg-neutral-200 transition-colors" href="#">
                            Explore Platforms
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-700 text-white text-lg font-medium hover:bg-neutral-900 transition-colors" href="#">
                            Technical Specifications
                        </a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Tactical Paradigms</h2>
<div className="h-px w-full bg-gradient-to-r from-neutral-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-neutral-900 bg-neutral-950/30 p-10 hover:border-neutral-700 transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-neutral-800 bg-black mb-8 group-hover:border-neutral-600 transition-colors">
<i className="w-6 h-6 text-neutral-300" data-lucide="crosshair" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Precision Attritability</h3>
<p className="text-lg font-normal text-neutral-400 leading-relaxed">
                            Cost-imposing systems designed for high-risk environments, ensuring mission success without compromising strategic capital.
                        </p>
</div>

<div className="group border border-neutral-900 bg-neutral-950/30 p-10 hover:border-neutral-700 transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-neutral-800 bg-black mb-8 group-hover:border-neutral-600 transition-colors">
<i className="w-6 h-6 text-neutral-300" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Autonomous Swarming</h3>
<p className="text-lg font-normal text-neutral-400 leading-relaxed">
                            Distributed network capabilities allowing independent agent operation and localized decision making without central command.
                        </p>
</div>

<div className="group border border-neutral-900 bg-neutral-950/30 p-10 hover:border-neutral-700 transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-neutral-800 bg-black mb-8 group-hover:border-neutral-600 transition-colors">
<i className="w-6 h-6 text-neutral-300" data-lucide="shield-alert" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Asymmetric Scaling</h3>
<p className="text-lg font-normal text-neutral-400 leading-relaxed">
                            Rapidly deployable architectures that multiply force effectiveness, overwhelming adversaries through volume and algorithmic coordination.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">Integrated Operating System</h2>
<p className="text-xl font-normal text-neutral-400 leading-relaxed mb-8">
                        Our proprietary software infrastructure fuses sensor data across the entire attritable fleet, providing a unified, real-time operating picture. Hardware agnostic, rapidly updatable at the edge.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-300">Multi-domain sensor fusion</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-300">Over-the-air cryptographic updates</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-300">Resilient mesh networking</span>
</li>
</ul>
</div>
<div className="w-full lg:w-1/2">

<div className="aspect-square w-full bg-black border border-neutral-800 p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-center mb-8 border-b border-neutral-900 pb-4">
<span className="text-sm font-medium tracking-widest text-neutral-500 uppercase">System Diagnostics</span>
<div className="flex gap-2">
<span className="w-2 h-2 bg-neutral-800"></span>
<span className="w-2 h-2 bg-neutral-800"></span>
<span className="w-2 h-2 bg-white"></span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 h-[calc(100%-4rem)]">
<div className="border border-neutral-900 bg-neutral-950/50 p-4 flex flex-col justify-end">
<span className="text-4xl font-normal text-white mb-2">94%</span>
<span className="text-sm font-normal tracking-wide text-neutral-500">Fleet Integrity</span>
</div>
<div className="border border-neutral-900 bg-neutral-950/50 p-4 flex flex-col justify-end">
<span className="text-4xl font-normal text-white mb-2">12ms</span>
<span className="text-sm font-normal tracking-wide text-neutral-500">Network Latency</span>
</div>
<div className="col-span-2 border border-neutral-900 bg-neutral-950/50 p-4 relative">
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-24 h-24 text-neutral-800" data-lucide="radar" strokeWidth="1.5"></i>
</div>
<span className="relative z-10 text-sm font-normal tracking-wide text-neutral-500">Active Tracking Area</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<a className="flex flex-col items-start group" href="#">
<span className="text-xl tracking-[0.2em] font-medium text-white leading-none group-hover:text-neutral-300 transition-colors">BLACKMOOR</span>
<span className="text-xs tracking-[0.4em] font-normal text-white mt-1.5 leading-none ml-[0.2em] group-hover:text-neutral-300 transition-colors">DEFENCE</span>
</a>
<div className="flex gap-8">
<a className="text-sm font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">Privacy</a>
<a className="text-sm font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">Terms</a>
<a className="text-sm font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-normal text-neutral-600">
<p>© 2024 Blackmoor Defence Limited. All rights reserved.</p>
<p>Attritable Intelligence Systems is a trademark of Blackmoor Defence Limited.</p>
</div>
</div>
</footer>


    </>
  );
}
