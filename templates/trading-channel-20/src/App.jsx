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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tight text-zinc-900 hover:opacity-80 transition-opacity" href="#">
                Ujjawal Tilwani
            </a>

<div className="flex items-center">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:home-linear" width="18"></iconify-icon>
                    Home
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Trading Background" className="w-full h-full object-cover" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Yle451NKeoIQ1x5p/img_7786-Yle451n658CEPegv.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
<iconify-icon className="text-yellow-400" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Premium Content</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-tight">
                India’s Best <br/>
<span className="relative inline-block">
                    Trading Channel
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span>
</h1>
<p className="text-lg text-zinc-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Master the markets with precision strategies and join a community of elite traders redefining success.
            </p>
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 shimmer" href="#subscribe">
                Start Now
                <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</header>

<section className="py-24 bg-[#050b2e] text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="inline-flex items-center gap-2 mb-4 text-blue-400">
<iconify-icon icon="solar:graph-new-up-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-wide uppercase">Growth Mindset</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                        Predict the future <br/>
                        by creating it.
                    </h2>
<p className="text-lg text-blue-100/80 font-light leading-relaxed mb-8 border-l-2 border-blue-500 pl-6">
                        You didn’t come this far to stop. Analyze trends, execute with confidence, and build the portfolio you deserve.
                    </p>
<div className="flex gap-6 pt-4">
<div>
<p className="text-3xl font-semibold tracking-tight">94%</p>
<p className="text-xs text-blue-200 mt-1">Accuracy Rate</p>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div>
<p className="text-3xl font-semibold tracking-tight">24/7</p>
<p className="text-xs text-blue-200 mt-1">Market Analysis</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 fade-in-up" style={{animationDelay: '0.4s'}}>

<div className="row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Growth Concept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=534,fit=crop,trim=59.07692307692308;193.64102564102564;59.07692307692308;193.64102564102564/Yle451NKeoIQ1x5p/img_0379-puipICt3IfRzEuc9.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050b2e] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<iconify-icon className="text-white mb-2" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl h-48">
<img alt="Trading Screen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=763,fit=crop/Yle451NKeoIQ1x5p/fullsizerender-ALp2oM4WPeHMPev9.jpeg"/>
</div>

<div className="relative group overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center border border-white/10">
<iconify-icon className="text-blue-300 w-12 h-12" icon="solar:wallet-money-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h3 className="text-3xl font-semibold text-zinc-900 tracking-tight">Latest Analysis</h3>
<p className="text-zinc-500 mt-2 text-sm">Watch our most recent market breakdown</p>
</div>
<div className="relative w-full aspect-video rounded-2xl shadow-2xl shadow-zinc-200 overflow-hidden border border-zinc-200 bg-white">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=SimulatedVideoID" title="YouTube video player">
</iframe>
</div>
</div>
</section>

<section className="py-24 bg-white" id="subscribe">
<div className="max-w-4xl mx-auto px-6">
<div className="relative rounded-3xl bg-zinc-50 border border-zinc-100 p-10 md:p-16 text-center overflow-hidden">

<div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
<h2 className="text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight mb-4">
                        40,000+
                    </h2>
<p className="text-lg text-zinc-500 font-light mb-8">
                        Traders rely on our signals daily. Join the revolution.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-[#050b2e] rounded-full hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1 hover:bg-blue-900" href="https://youtube.com/@yourchannel" target="_blank">
<iconify-icon className="mr-2" icon="solar:bell-linear" width="20"></iconify-icon>
                        Subscribe Today
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black text-white relative">
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="flex justify-center mb-8">
<img alt="RICH RISK" className="max-w-md w-full h-auto rounded-3xl" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=763,fit=crop/Yle451NKeoIQ1x5p/img_0013-rGOpPaMu7Alg7Z01.jpeg"/>
</div>

<p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed mb-8 font-light">
      Trading involves substantial risk and is not suitable for every investor. The valuation of assets may fluctuate, and as a result, clients may lose more than their original investment.
    </p>

<a className="inline-flex items-center text-xs font-medium text-white border border-zinc-800 bg-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#subscribe">
      Learn Risk Management
      <iconify-icon className="ml-2" icon="solar:shield-check-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white py-12 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
<p className="text-lg font-semibold tracking-tight text-zinc-900 mb-4">Ujjawal Tilwani</p>
<div className="flex space-x-6 mb-8 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:video-frame-linear" width="24"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
</div>
<p className="text-xs text-zinc-400 text-center max-w-2xl leading-5">
                © 2024 Ujjawal Tilwani. All rights reserved. <br/>
                Disclaimer: The content provided on this website and channel is for educational purposes only and does not constitute financial advice.
            </p>
</div>
</footer>

    </>
  );
}
