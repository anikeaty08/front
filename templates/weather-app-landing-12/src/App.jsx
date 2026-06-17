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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">ATMOS</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#radar">Radar</a>
<a className="hover:text-white transition-colors" href="#pro">Pro</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Get the App
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Atmos 2.0 is now available</span>
<span className="w-px h-3 bg-white/20 mx-1"></span>
<a className="text-white hover:underline inline-flex items-center gap-1" href="#">
                    Read launch notes <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 max-w-4xl mx-auto leading-tight">
                Weather forecasting,<br/>reimagined for clarity.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
                Hyper-local accuracy combined with stunning visualizations. Know exactly what the sky is doing, down to the minute.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="h-12 px-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-base font-medium hover:bg-neutral-200 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:apple-linear"></iconify-icon>
                    Download for iOS
                </a>
<a className="h-12 px-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 text-white text-base font-medium hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">
<iconify-icon className="text-xl" icon="solar:play-stream-linear"></iconify-icon>
                    Get it on Android
                </a>
</div>

<div className="relative max-w-3xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-b from-blue-500/30 to-purple-500/0 rounded-[2.5rem] blur-xl opacity-50"></div>
<div className="relative bg-neutral-950/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 md:p-8 shadow-2xl">

<div className="flex justify-between items-center mb-10">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white flex items-center gap-2">
                                San Francisco <iconify-icon className="text-neutral-500 text-lg" icon="solar:map-point-linear"></iconify-icon>
</h3>
<p className="text-sm text-neutral-400 mt-1">Currently</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
<div className="flex items-start gap-4">
<span className="text-8xl md:text-9xl font-semibold tracking-tighter leading-none text-white">68°</span>
<div className="flex flex-col pt-2 text-lg font-medium text-neutral-400">
<span>H: 72°</span>
<span>L: 54°</span>
</div>
</div>
<iconify-icon className="text-8xl md:text-9xl text-neutral-200" icon="solar:cloud-sun-2-linear"></iconify-icon>
</div>

<div className="border-t border-white/10 pt-6">
<div className="flex justify-between text-sm font-medium text-neutral-400 mb-4">
<span>Partly cloudy throughout the day.</span>
<span className="text-white">Next 24h</span>
</div>
<div className="flex justify-between items-end gap-2 overflow-x-auto pb-2 scrollbar-hide">

<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">Now</span>
<iconify-icon className="text-xl text-white" icon="solar:cloud-sun-linear"></iconify-icon>
<span className="text-sm font-medium text-white">68°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">1 PM</span>
<iconify-icon className="text-xl text-white" icon="solar:sun-linear"></iconify-icon>
<span className="text-sm font-medium text-white">70°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">2 PM</span>
<iconify-icon className="text-xl text-white" icon="solar:sun-linear"></iconify-icon>
<span className="text-sm font-medium text-white">72°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">3 PM</span>
<iconify-icon className="text-xl text-white" icon="solar:sun-linear"></iconify-icon>
<span className="text-sm font-medium text-white">71°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">4 PM</span>
<iconify-icon className="text-xl text-neutral-400" icon="solar:cloud-linear"></iconify-icon>
<span className="text-sm font-medium text-white">69°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">5 PM</span>
<iconify-icon className="text-xl text-neutral-400" icon="solar:cloud-water-linear"></iconify-icon>
<span className="text-sm font-medium text-white">65°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[3rem]">
<span className="text-xs text-neutral-500">6 PM</span>
<iconify-icon className="text-xl text-neutral-400" icon="solar:moon-stars-linear"></iconify-icon>
<span className="text-sm font-medium text-white">60°</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Everything you need.<br className="hidden md:block"/> Nothing you don't.</h2>
<p className="text-base text-neutral-400 max-w-xl mx-auto font-light">
                    Designed to surface the most important information immediately, with deep dives just a tap away.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">

<div className="md:col-span-2 relative rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors">

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] blur-[1px]"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
<div className="relative h-full p-8 flex flex-col justify-between z-10">
<div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
<iconify-icon className="text-2xl text-white" icon="solar:map-arrow-up-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">High-Fidelity Radar</h3>
<p className="text-sm text-neutral-400 font-light max-w-sm">Track precipitation down to your exact street with fluid, 60fps animations and predictive modeling.</p>
</div>
</div>
</div>

<div className="relative rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors p-8 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-2xl text-green-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-3xl font-medium tracking-tight text-green-400">42</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Air Quality</h3>
<p className="text-sm text-neutral-400 font-light">Breathe easy. Real-time AQI tracking and health recommendations.</p>
</div>
</div>

<div className="relative rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors p-8 flex flex-col justify-between">
<div>
<div className="w-full h-24 relative mb-4">

<svg className="w-full h-full text-white/20" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M 0 50 C 0 0, 100 0, 100 50" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
<div className="absolute top-[20%] left-[30%] text-yellow-400">
<iconify-icon className="text-2xl" icon="solar:sun-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Sun Cycle</h3>
<p className="text-sm text-neutral-400 font-light">6:42 AM - 8:15 PM</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 relative rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors p-8 flex flex-col justify-center">
<h3 className="text-xl font-medium tracking-tight text-white mb-6">10-Day Outlook</h3>
<div className="space-y-4">

<div className="flex items-center justify-between text-sm">
<span className="w-16 font-medium text-neutral-300">Today</span>
<iconify-icon className="text-xl text-neutral-400" icon="solar:cloud-sun-linear"></iconify-icon>
<div className="flex items-center gap-3 w-48">
<span className="text-neutral-500 w-6 text-right">54°</span>

<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-400 to-yellow-400 w-3/4 ml-[10%] rounded-full"></div>
</div>
<span className="text-white font-medium w-6">72°</span>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<span className="w-16 font-medium text-neutral-300">Mon</span>
<iconify-icon className="text-xl text-yellow-400" icon="solar:sun-linear"></iconify-icon>
<div className="flex items-center gap-3 w-48">
<span className="text-neutral-500 w-6 text-right">56°</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-400 to-orange-400 w-[80%] ml-[15%] rounded-full"></div>
</div>
<span className="text-white font-medium w-6">76°</span>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<span className="w-16 font-medium text-neutral-300">Tue</span>
<iconify-icon className="text-xl text-blue-400" icon="solar:cloud-water-linear"></iconify-icon>
<div className="flex items-center gap-3 w-48">
<span className="text-neutral-500 w-6 text-right">50°</span>
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 w-1/2 ml-[5%] rounded-full"></div>
</div>
<span className="text-white font-medium w-6">62°</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:tuning-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Make it yours.</h2>
<p className="text-base text-neutral-400 mb-8 font-light max-w-md">
                        Tailor the interface to show what matters most to you. Rearrange modules, switch units, and toggle alerts with native-feeling controls.
                    </p>

<div className="space-y-6 max-w-sm">

<div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-neutral-400" icon="solar:bell-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Rain Alerts</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
</label>
</div>

<div className="p-1 rounded-xl bg-neutral-900/50 border border-white/5 flex text-sm font-medium">
<button className="flex-1 py-2 rounded-lg bg-white/10 text-white shadow-sm">Celsius</button>
<button className="flex-1 py-2 rounded-lg text-neutral-500 hover:text-white transition-colors">Fahrenheit</button>
</div>
</div>
</div>

<div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

<div className="relative grid grid-cols-2 gap-4 w-full max-w-md transform rotate-12 scale-90 opacity-80">
<div className="h-32 bg-neutral-900 border border-white/10 rounded-2xl backdrop-blur-sm p-4 flex flex-col justify-end">
<div className="w-8 h-8 rounded-full bg-white/10 mb-2"></div>
<div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-24 bg-white/10 rounded-full"></div>
</div>
<div className="h-48 bg-neutral-900 border border-white/10 rounded-2xl backdrop-blur-sm p-4"></div>
<div className="h-40 bg-neutral-900 border border-white/10 rounded-2xl backdrop-blur-sm p-4 col-span-2 flex items-center gap-4">
<div className="w-16 h-16 rounded-full border-4 border-blue-500/30 border-t-blue-500"></div>
<div className="space-y-2 flex-1">
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-6xl text-white/20 mb-6" icon="solar:cloud-sun-2-linear"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Stop guessing the weather.</h2>
<p className="text-lg text-neutral-400 font-light mb-10">Join thousands of users who have upgraded their daily routine with Atmos.</p>
<a className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]" href="#">
                Get started for free
            </a>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-white mb-4 block" href="#">ATMOS</a>
<p className="text-xs text-neutral-500 font-light">Beautiful weather,<br/> accurately predicted.</p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Product</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-neutral-500 font-light">
<p>© 2024 Atmos Inc. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:figma-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
