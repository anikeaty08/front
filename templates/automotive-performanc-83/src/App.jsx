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
      

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter uppercase">
                911
            </div>
<div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#performance">Performance</a>
<a className="hover:text-white transition-colors" href="#heritage">Heritage</a>
<a className="hover:text-white transition-colors" href="#design">Design</a>
</div>
<div>
<button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                    Configure
                </button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&amp'}}>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]"></div>
<div className="relative z-10 text-center px-6 mt-20 flex flex-col items-center">
<div className="inline-flex items-center space-x-2 border border-white/20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-gray-300">The 992 Generation</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase">
                The Icon<br/>Reimagined.
            </h1>
<p className="text-base md:text-lg text-gray-400 mt-6 max-w-2xl mx-auto font-light tracking-wide">
                Engineering perfection since 1963. A synthesis of timeless design and relentless performance, engineered for the purest driving experience.
            </p>
<div className="mt-12">
<iconify-icon className="text-3xl text-gray-500 animate-bounce" icon="solar:round-alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</header>

<section className="py-32 relative bg-texture" id="performance">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Relentless Forward Motion.</h2>
<p className="text-gray-400 text-base max-w-xl">Born on the track, built for the road. The technological masterpiece that defies the laws of physics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 md:row-span-2 bg-[#121212] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors duration-500 relative overflow-hidden group flex flex-col justify-end min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20">
<div className="text-6xl md:text-8xl font-semibold tracking-tighter mb-2">3.2<span className="text-3xl md:text-4xl text-gray-500">s</span></div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">0-100 km/h</h3>
<p className="text-sm text-gray-400 max-w-sm">Instantaneous power delivery meets uncompromising traction.</p>
</div>
</div>

<div className="bg-[#121212] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-500 flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-2xl text-gray-300" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">Boxer Engine</h3>
<p className="text-sm text-gray-400">Rear-mounted, naturally aspirated perfection with a redline that screams.</p>
</div>
</div>

<div className="bg-[#121212] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-500 flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-2xl text-gray-300" icon="solar:wind-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">Active Aerodynamics</h3>
<p className="text-sm text-gray-400">Dynamic downforce adjustment keeps you planted at terminal velocities.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-y border-white/5 overflow-hidden" id="heritage">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Evolution of a Legend.</h2>
<p className="text-gray-400 text-base">The silhouette remains, the technology advances.</p>
</div>
<div className="hidden md:flex space-x-2">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]">

<div className="min-w-[85vw] md:min-w-[35rem] h-[24rem] md:h-[30rem] rounded-3xl bg-[#121212] snap-center relative overflow-hidden group border border-white/5">
<img alt="Classic 911" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-2">1963</div>
<h3 className="text-2xl font-semibold tracking-tight">The Original 901</h3>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[35rem] h-[24rem] md:h-[30rem] rounded-3xl bg-[#121212] snap-center relative overflow-hidden group border border-white/5">
<img alt="930 Turbo" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-2">1974</div>
<h3 className="text-2xl font-semibold tracking-tight">The 930 Turbo Era</h3>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[35rem] h-[24rem] md:h-[30rem] rounded-3xl bg-[#121212] snap-center relative overflow-hidden group border border-white/5">
<img alt="Modern 992" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-2">Present</div>
<h3 className="text-2xl font-semibold tracking-tight">The 992 Generation</h3>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="design">
<div className="absolute inset-0 bg-texture opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Form Follows Function.</h2>
<p className="text-gray-400 text-base max-w-2xl mx-auto">Every curve, every intake, meticulously sculpted by the wind tunnel to serve a singular purpose.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative group">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#121212]">
<img alt="Headlights" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 lg:-bottom-12 lg:-right-12 w-[calc(100%-2rem)] max-w-md bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
<div className="flex items-center space-x-3 mb-4">
<iconify-icon className="text-xl text-gray-300" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight">LED Matrix Headlights</h4>
</div>
<p className="text-sm text-gray-400">Four-point daytime running lights. Intelligent illumination that adapts to the road ahead, piercing through darkness with surgical precision.</p>
</div>
</div>

<div className="relative group mt-20 lg:mt-32">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#121212]">
<img alt="Rear Strip" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-[calc(100%-2rem)] max-w-md bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
<div className="flex items-center space-x-3 mb-4">
<iconify-icon className="text-xl text-gray-300" icon="solar:routing-2-linear"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight">Seamless Light Strip</h4>
</div>
<p className="text-sm text-gray-400">An unmistakable signature. The three-dimensional rear light strip spans the entire width, anchoring the muscular stance of the 992.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-20 py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center px-6">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">Your 911 Awaits.</h2>
<p className="text-gray-400 text-base mb-12">Configure your ultimate driving machine or locate a dealer to experience the icon firsthand.</p>
<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 group">
<span>Build Your Own</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-white/20 text-white bg-transparent px-8 py-4 rounded-full text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center space-x-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Find a Dealer</span>
</button>
</div>
</div>
<div className="w-full max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
<div className="mb-4 md:mb-0 tracking-tighter uppercase font-semibold text-gray-400 text-sm">
                911
            </div>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors" href="#">Legal Notice</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</footer>

    </>
  );
}
