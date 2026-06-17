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
      

<header className="fixed top-0 w-full border-b border-zinc-900/50 bg-zinc-950/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter">AGN</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<button className="bg-white text-zinc-950 px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Book a call
            </button>
</div>
</header>
<main className="">

<section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto text-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-zinc-400 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
</span>
                    Available for new projects
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight max-w-4xl mr-auto mb-8 ml-auto">
                    We build digital products that <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">drive revenue.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Stop losing customers to bad design. We are an elite agency crafting high-performing websites and software for ambitious brands.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-white text-zinc-950 px-8 py-3.5 rounded-full text-base font-medium hover:bg-zinc-200 transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
                        See our pricing
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', width: '1.25rem', height: '1.25rem'}}></iconify-icon>
</button>
<button className="bg-zinc-900/80 text-white border border-zinc-800 backdrop-blur-sm px-8 py-3.5 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto">
                        View recent work
                    </button>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-900/50 bg-zinc-950/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 font-medium tracking-widest uppercase mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40">
<span className="text-xl md:text-2xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">LUMINA</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">NEXUS</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">QUANTUM</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">AURA</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">A single subscription for all your design and development needs.</h2>
<p className="text-zinc-400 text-lg leading-relaxed">We replace the traditional agency bloat with a streamlined, asynchronous workflow. Get world-class output without the endless meetings.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-colors group">
<div className="h-12 w-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-300" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5', width: '1.5rem', height: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">UI/UX Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Pixel-perfect interfaces designed to reduce friction and guide users smoothly towards conversion events.</p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-colors group">
<div className="h-12 w-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-300" icon="solar:code-square-linear" style={{strokeWidth: '1.5', width: '1.5rem', height: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Engineering</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Robust frontend development using modern frameworks like React and Next.js for lightning-fast load times.</p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-colors group">
<div className="h-12 w-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-300" icon="solar:chart-square-linear" style={{strokeWidth: '1.5', width: '1.5rem', height: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Growth &amp; CRO</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Continuous A/B testing and data analysis to iteratively improve your metrics and lower acquisition costs.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-20">How it works</h2>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 font-medium text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#09090b] transition-colors group-hover:border-zinc-500 group-hover:text-white z-10">
                        1
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50">
<h3 className="font-medium text-lg tracking-tight mb-2">Subscribe</h3>
<p className="text-sm text-zinc-400">Choose a plan that fits your needs and get access to your dedicated Trello board instantly.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 font-medium text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#09090b] transition-colors group-hover:border-zinc-500 group-hover:text-white z-10">
                        2
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50">
<h3 className="font-medium text-lg tracking-tight mb-2">Request</h3>
<p className="text-sm text-zinc-400">Add as many design or development tasks to your queue as you want. We work on one at a time.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-zinc-950 font-medium text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#09090b] z-10">
                        3
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-zinc-900/40 border border-zinc-700/50">
<h3 className="font-medium text-lg tracking-tight mb-2 text-white">Receive</h3>
<p className="text-sm text-zinc-400">Get your completed tasks in an average of 48 hours. We revise until you are 100% satisfied.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 max-w-3xl mx-auto">Ready to scale your digital presence?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">Join dozens of founders who have transformed their brands and accelerated their growth with us.</p>
<button className="bg-white text-zinc-950 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Book your discovery call
                        <iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5', width: '1.25rem', height: '1.25rem'}}></iconify-icon>
</button>
<p className="text-xs text-zinc-500 mt-6 font-medium">No commitment required. 30-minute strategy session.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900/80 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<div className="text-xl font-semibold tracking-tighter mb-4">AGNCY</div>
<p className="text-sm text-zinc-500 max-w-xs">A premium design and development agency for modern technology companies.</p>
</div>
<div className="flex flex-wrap gap-8 md:gap-16 text-sm font-medium">
<div className="flex flex-col gap-4">
<span className="text-zinc-300">Platform</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Services</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Process</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-zinc-300">Company</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Work</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-zinc-300">Social</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-900/50 text-xs text-zinc-600">
<p>© 2024 AGNCY. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
