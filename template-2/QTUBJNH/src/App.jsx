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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          colors: {
            slateBg: '#0f0f23',
            cardLight: '#1a1a2e',
            cardDark: '#16213e',
            accent: '#6366f1',
            accentYellow: '#fbbf24'
          }
        }
      }
    }
  


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  
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
      

<nav className="relative z-50 max-w-7xl mx-auto px-4 lg:px-8 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="text-2xl font-light text-white tracking-tighter">SoundWave</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Features</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Podcasts</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Creators</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<button className="text-slate-300 hover:text-white transition-colors">Sign In</button>
<button className="hover:bg-yellow-600 transition-colors font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl pt-2 pr-4 pb-2 pl-4">
          Get Started
        </button>
</div>
</div>
</nav>

<section className="max-w-7xl lg:px-8 mr-auto ml-auto pt-12 pr-4 pb-0 pl-4">
<div className="max-w-5xl text-center mr-auto ml-auto">
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-normal text-white tracking-tighter mb-8">
        The Future of
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Podcast
        </span>
        Listening
      </h1>
<p className="md:text-xl max-w-3xl leading-relaxed text-lg text-slate-300 mr-auto mb-12 ml-auto">
        Experience premium audio content like never before with crystal-clear sound, intelligent recommendations, and seamless synchronization across all your devices.
      </p>
</div>
</section>

<div className="max-w-7xl mx-auto p-4 lg:p-8">
<div className="overflow-hidden bg-cardLight rounded-3xl shadow-2xl border border-slate-700">
<main className="flex flex-col">
<section className="grid grid-cols-1 lg:grid-cols-3 flex-1">

<div className="relative lg:border-r border-slate-700 flex flex-col min-h-[400px] lg:min-h-auto">
<div className="p-6 lg:p-8">
<p className="uppercase text-xs font-semibold tracking-wider text-slate-300 leading-snug max-w-xs">
                Crystal Clear Audio.
                <span className="normal-case font-normal text-slate-400">Professional-grade recording with spatial audio technology captures every nuance of conversation with exceptional clarity.</span>
</p>
</div>
<div className="flex-1 flex bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-center opacity-30 bg-[url(https://images.unsplash.com/photo-1519743521-6d60422a9c2d?w=2160&q=80)] bg-cover"></div>
<div className="relative z-10 text-center">
<div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
<svg className="w-16 h-16 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">The Creative Mind</h3>
<p className="text-slate-300 text-sm">Episode #247 • 42 min</p>
</div>
</div>
</div>

<div className="relative lg:border-r border-slate-700 flex flex-col min-h-[400px] lg:min-h-auto border-t lg:border-t-0">
<div className="p-6 lg:p-8">
<p className="uppercase text-xs font-semibold tracking-wider text-slate-300 leading-snug max-w-xs">
                SmartSync Technology™
                <span className="normal-case font-normal text-slate-400">Intelligent cross-device synchronization keeps your listening progress, bookmarks, and notes perfectly synced across all platforms.</span>
</p>
</div>
<div className="flex-1 flex bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-6 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-center opacity-20 bg-[url(https://images.unsplash.com/photo-1494806812796-244fe51b774d?w=2160&q=80)] bg-cover"></div>
<div className="relative z-10 space-y-4">
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
<div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">High-Fidelity Audio</p>
<p className="text-slate-400 text-xs">Lossless streaming</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
<line x1="4" x2="4" y1="22" y2="15"></line>
</svg>
</div>
<div>
<p className="text-white font-medium text-sm">Offline Downloads</p>
<p className="text-slate-400 text-xs">Premium feature</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-accentYellow to-amber-400 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-12 -translate-x-12"></div>
<div className="flex items-start justify-between p-6 lg:p-8 relative z-10">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
</svg>
</div>
<span className="text-xl font-medium text-gray-900">SoundWave</span>
</div>
<div className="flex space-x-3 text-gray-900">
<div className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>
</div>
<div className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>
</div>
</div>
<div className="px-6 lg:px-8 relative z-10">
<h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-medium text-gray-900 tracking-tighter">
                Everything you need 
                <span className="text-gray-700">to discover.</span>
</h2>
<p className="lg:mt-6 max-w-sm lg:text-base leading-relaxed text-sm text-gray-800 mt-4">
                Designed for listeners, built for creators. Each SoundWave Premium subscription includes exclusive content, early access, and advanced features to elevate your podcast experience.
              </p>
</div>
<div className="lg:px-8 lg:pb-8 relative z-10 mt-auto pr-6 pb-6 pl-6">
<div className="h-px bg-gray-900/20 w-full my-6 lg:my-8"></div>
<div className="flex items-start space-x-4">
<div className="relative flex-shrink-0">
<div className="p-3 lg:p-4 bg-gray-900 rounded-2xl shadow-lg">
<svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</div>
<span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">∞</span>
</div>
<div className="min-w-0">
<h3 className="font-semibold text-gray-900 mb-1">SoundWave Premium Suite</h3>
<p className="leading-relaxed text-sm text-gray-800">
                    Unlimited access to exclusive episodes, ad-free listening, offline downloads, and early access to new shows from your favorite creators.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 lg:py-8 bg-cardDark border-slate-700 border-t pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row sm:items-center max-w-6xl mx-auto items-start justify-between">
<div className="sm:mb-0 mb-4">
<p className="uppercase leading-snug text-xs font-semibold text-slate-300 tracking-wider max-w-md">
                Premium Mobile App.
                <span className="normal-case font-normal text-slate-400">
                  Hand-crafted mobile experience with smart recommendations, sleep timer, and voice control keeps your favorite shows always within reach.
                </span>
</p>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path><path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path></svg>
<span>14-day free trial</span>
<span className="text-slate-600">•</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span>Cancel anytime</span>
</div>
</div>
</section>
</main>
</div>
</div>


    </>
  );
}
