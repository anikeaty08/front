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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-3xl mix-blend-multiply filter opacity-40 organic-blob bg-blue-100/50"></div>
<div className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-rose-100/40 rounded-full blur-3xl mix-blend-multiply filter opacity-40 animation-delay-2000 organic-blob"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-amber-50/60 rounded-full blur-3xl mix-blend-multiply filter opacity-60 animation-delay-4000 organic-blob"></div>
</div>

<nav className="fixed top-0 w-full z-50 nav-glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">Serafina</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#work">Work</a>
</div>
<a className="px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 text-xs font-semibold hover:bg-stone-800 transition-all flex items-center gap-2 shadow-lg shadow-stone-200/50" href="#book">
<span>Book a Call</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="pt-40 pb-20 px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Accepting new clients for Nov '23</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 max-w-4xl leading-[1.1]">
            We craft digital products that <br className="hidden md:block"/> <span className="text-stone-400 italic font-normal font-serif">feel</span> as good as they look.
        </h1>
<p className="text-lg text-stone-500 max-w-2xl leading-relaxed mb-10">
            Serafina is a strategic design studio. We help ambitious brands navigate the digital landscape with clarity, purpose, and immaculate aesthetics.
        </p>
<div className="flex flex-col md:flex-row items-center gap-4">
<a className="px-8 py-4 rounded-full bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 hover:shadow-2xl hover:translate-y-[-2px]" href="#book">
                Start your project
            </a>
<button className="px-8 py-4 rounded-full bg-white text-stone-700 border border-stone-200 font-medium text-sm hover:bg-stone-50 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                Showreel (1:20)
            </button>
</div>
</section>

<section className="py-12 border-y border-stone-200/50 bg-white/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale mix-blend-multiply">

<span className="text-xl font-bold tracking-tighter font-sans">ACME</span>
<span className="text-xl font-semibold tracking-tighter font-serif italic">Velvet</span>
<span className="text-xl font-bold tracking-tighter">FOCAL</span>
<span className="text-xl font-medium tracking-tighter">lumina</span>
<span className="text-xl font-bold tracking-tighter font-mono">/stack/</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-8 max-w-7xl mx-auto" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-6">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3">Product Design</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    End-to-end UI/UX design for web and mobile applications. We focus on intuitive flows and design systems that scale.
                </p>
</div>
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-6">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3">Development</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Pixel-perfect implementation using modern frameworks. Fast, accessible, and SEO-optimized frontend architecture.
                </p>
</div>
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-6">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3">Strategy</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Brand positioning and digital transformation. We help you find your voice and define the metrics that matter.
                </p>
</div>
</div>
</section>

<section className="py-20 px-4 md:px-8 bg-stone-100/50" id="book">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">Let's build something great</h2>
<p className="text-stone-500">Schedule a free 30-minute discovery call to discuss your vision.</p>
</div>

<div className="glass-panel w-full min-h-[700px] rounded-3xl shadow-xl shadow-stone-200/50 flex flex-col md:flex-row overflow-hidden relative border border-white/60">

<aside className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-stone-200/60 p-8 md:p-10 flex flex-col justify-between bg-white/40 backdrop-blur-md">
<div>
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white mb-6 overflow-hidden p-0.5 shadow-sm">
<img alt="Serafina" className="w-full h-full rounded-full object-cover grayscale opacity-90" src="https://ui-avatars.com/api/?name=Serafina+Design&amp;background=random&amp;color=fff"/>
</div>
<h5 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">Serafina Design</h5>
<h1 className="text-3xl font-medium tracking-tight text-stone-900 mb-6">Discovery Call</h1>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-stone-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">30 Minutes</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-stone-400" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Google Meet</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon className="text-stone-400" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Complimentary</span>
</div>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                            We'll explore your current brand landscape, identify gaps, and see if our holistic design approach aligns with your goals. No strings attached, just clarity.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-stone-200/60 hidden md:block">
<div className="flex items-center gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>Powered by Serafina System</span>
</div>
</div>
</aside>

<div className="w-full md:w-2/3 p-4 md:p-10 bg-white/70">
<h2 className="text-xl font-medium mb-6 text-stone-900">Select a Date &amp; Time</h2>
<div className="flex flex-col lg:flex-row gap-8 h-full">

<div className="flex-grow max-w-md">
<div className="flex items-center justify-between mb-6">
<button className="p-2 hover:bg-stone-100 rounded-full text-stone-500 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<span className="text-base font-medium text-stone-800">October 2023</span>
<button className="p-2 hover:bg-stone-100 rounded-full text-stone-500 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm mb-2">
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Mo</span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Tu</span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">We</span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Th</span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Fr</span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Sa</span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Su</span>
</div>
<div className="grid grid-cols-7 gap-y-2 gap-x-2 text-center">

<div className="h-10"></div><div className="h-10"></div>

<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none line-through">1</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none line-through">2</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">3</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">4</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">5</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">6</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">7</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">8</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">9</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">10</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">11</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">12</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">13</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">14</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">15</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center bg-stone-900 text-white shadow-lg shadow-stone-900/20 font-medium">16</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">17</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">18</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">19</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">20</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">21</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">22</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">23</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors">24</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">25</button>
<button className="h-10 w-10 mx-auto rounded-full flex items-center justify-center text-stone-300 pointer-events-none">26</button>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-stone-500 justify-center">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-900"></span> Selected</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-200"></span> Busy</span>
</div>
</div>

<div className="w-full lg:w-48 border-t lg:border-t-0 lg:border-l border-stone-200 lg:pl-8 pt-8 lg:pt-0">
<div className="text-sm font-medium text-stone-500 mb-4">Monday, Oct 16</div>
<div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto custom-scrollbar pr-2">
<button className="w-full py-3 px-4 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-all flex justify-between items-center group">
                                    09:00 AM
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full py-3 px-4 rounded-lg border border-stone-800 bg-stone-900 text-white text-sm font-medium transition-all flex justify-between items-center shadow-lg shadow-stone-300">
                                    10:00 AM
                                    <iconify-icon className="text-xs" icon="solar:check-circle-linear"></iconify-icon>
</button>
<button className="w-full py-3 px-4 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-all flex justify-between items-center group">
                                    11:30 AM
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full py-3 px-4 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-all flex justify-between items-center group">
                                    01:00 PM
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full py-3 px-4 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-all flex justify-between items-center group">
                                    02:30 PM
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full py-3 px-4 rounded-lg border border-stone-200 text-sm font-medium text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-all flex justify-between items-center group">
                                    04:00 PM
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-10 flex justify-end">
<button className="px-8 py-3 rounded-full bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-all flex items-center gap-2 shadow-lg shadow-stone-200">
<span>Confirm Details</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-16 px-6 md:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-bold" width="12"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">Serafina</span>
</div>
<p className="text-sm text-stone-400">
                    Designing the future of digital interaction, one pixel at a time.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16">
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-4">Studio</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#">Work</a></li>
<li><a className="hover:text-stone-900" href="#">About</a></li>
<li><a className="hover:text-stone-900" href="#">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-widest mb-4">Connect</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#">Twitter / X</a></li>
<li><a className="hover:text-stone-900" href="#">LinkedIn</a></li>
<li><a className="hover:text-stone-900" href="#">Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
<p>© 2023 Serafina Design Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
