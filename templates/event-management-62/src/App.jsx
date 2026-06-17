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
      

<nav className="relative z-50 flex justify-between items-center px-6 py-5 max-w-7xl mx-auto w-full">
<div className="text-xl font-semibold tracking-tighter text-gray-900 uppercase">
            Sync
        </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Features</a>
<a className="hover:text-gray-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-gray-900 transition-colors" href="#">Resources</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-sm" href="#">
                Get Started
            </a>
</div>
</nav>

<main className="relative max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

<div className="flex-1 flex flex-col items-start gap-6 lg:gap-8 z-20 w-full animate-pop-up">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing Live Polls 2.0
            </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Turn audiences into <br className="hidden lg:block"/> active participants.
            </h1>

<p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed font-normal">
                Host high-energy interactive Q&amp;As, live polls, and gamified quizzes that keep your crowd engaged from the first slide to the final applause.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                    Start creating free
                </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch product tour
                </button>
</div>

<div className="flex items-center gap-4 mt-4 lg:mt-8">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" src="https://i.pravatar.cc/100?img=3"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" src="https://i.pravatar.cc/100?img=4"/>
</div>
<div className="text-xs text-gray-500 font-medium">
                    Trusted by <span className="text-gray-900 font-semibold">10,000+</span> event managers
                </div>
</div>
</div>

<div className="flex-1 w-full relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center z-10 mt-10 lg:mt-0">

<div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
<div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

<div className="relative z-20 w-full max-w-[360px] sm:max-w-[400px] bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl shadow-gray-200/60 p-6 flex flex-col gap-6 transform lg:translate-x-6">

<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">Audience Sentiment</h3>
<p className="text-xs text-gray-500 mt-0.5">Live poll responses</p>
</div>
<div className="px-2.5 py-1 bg-green-50 text-green-600 rounded-md text-[10px] font-medium uppercase tracking-widest flex items-center gap-1.5 border border-green-100/50">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
                        Live
                    </div>
</div>

<div className="flex items-end justify-between gap-2 h-32 pt-4 border-b border-gray-100/80 pb-3">
<div className="w-full bg-gray-100 rounded-t-lg h-bar-1 relative group transition-all hover:bg-indigo-50"></div>
<div className="w-full bg-indigo-500 rounded-t-lg h-bar-2 relative shadow-md shadow-indigo-500/20">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-sm opacity-100">42%</div>
</div>
<div className="w-full bg-gray-100 rounded-t-lg h-bar-3 relative transition-all hover:bg-indigo-50"></div>
<div className="w-full bg-gray-100 rounded-t-lg h-bar-4 relative transition-all hover:bg-indigo-50"></div>
<div className="w-full bg-purple-400 rounded-t-lg h-bar-5 relative shadow-md shadow-purple-400/20"></div>
</div>

<div className="flex flex-col gap-3">
<div className="flex justify-between items-center">
<h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Top Engagers</h4>
<iconify-icon className="text-gray-400 text-sm" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex items-center justify-between p-2 rounded-xl bg-white/50 border border-gray-100 hover:bg-white transition-colors shadow-sm">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200" src="https://i.pravatar.cc/100?img=5"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-white rounded-full flex items-center justify-center text-[8px] font-semibold border border-white">1</div>
</div>
<div>
<div className="text-xs font-semibold text-gray-900">David Kim</div>
<div className="text-[10px] text-gray-500">Marketing Dir.</div>
</div>
</div>
<div className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">8,450</div>
</div>

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-gray-100">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-sm font-medium border border-gray-200">S</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-[8px] font-semibold border border-white">2</div>
</div>
<div>
<div className="text-xs font-medium text-gray-900">Sarah Jenkins</div>
<div className="text-[10px] text-gray-500">Product Manager</div>
</div>
</div>
<div className="text-xs font-medium text-gray-600">7,210</div>
</div>
</div>
</div>

<div className="absolute z-30 bottom-4 -left-2 sm:-left-8 lg:-left-16 w-[170px] bg-white rounded-[2rem] border-[6px] border-gray-900 shadow-2xl shadow-gray-900/10 overflow-hidden animate-float-slow">

<div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10">
<div className="w-16 h-3.5 bg-gray-900 rounded-b-xl"></div>
</div>

<div className="pt-8 p-4 bg-gray-50 h-[260px] flex flex-col gap-3 relative">

<div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-1">
<div className="w-3/4 h-full bg-indigo-500 rounded-full"></div>
</div>
<div className="text-[10px] font-medium text-indigo-600 tracking-wide uppercase">Question 3 of 5</div>
<h4 className="text-xs font-semibold text-gray-900 leading-snug">What drives the most user retention in Q3?</h4>

<div className="flex flex-col gap-2 mt-1">
<div className="px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-[10px] text-gray-600 flex items-center gap-2 shadow-sm">
<div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0"></div>
                            New Onboarding
                        </div>

<div className="px-3 py-2.5 rounded-xl border-2 border-indigo-500 bg-indigo-50 text-[10px] font-medium text-indigo-700 flex items-center gap-2 shadow-md shadow-indigo-100 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-100 opacity-20"></div>
<iconify-icon className="text-indigo-500 text-sm flex-shrink-0 z-10" icon="solar:check-circle-bold"></iconify-icon>
<span className="z-10">Interactive Events</span>
</div>
<div className="px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-[10px] text-gray-600 flex items-center gap-2 shadow-sm">
<div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0"></div>
                            Email Campaigns
                        </div>
</div>
</div>
</div>

<div className="absolute z-10 top-4 -right-2 sm:-right-6 lg:-right-12 w-[150px] bg-white rounded-[2rem] border-[6px] border-gray-900 shadow-2xl shadow-gray-900/10 overflow-hidden animate-float-medium">

<div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10">
<div className="w-14 h-3.5 bg-gray-900 rounded-b-xl"></div>
</div>

<div className="pt-10 p-4 bg-gradient-to-br from-indigo-500 to-purple-600 h-[240px] flex flex-col items-center justify-center gap-3 text-center">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
<iconify-icon className="text-white text-sm" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-[11px] font-medium text-white leading-tight">Join "Annual Summit 24"</h4>

<div className="p-2.5 bg-white rounded-xl shadow-lg mt-1 relative group cursor-pointer">
<iconify-icon className="text-[54px] text-gray-900" icon="solar:qr-code-linear"></iconify-icon>

<div className="absolute top-0 left-0 w-full h-0.5 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
</div>
<div className="mt-1 px-3 py-1 bg-black/20 rounded-full text-[9px] text-indigo-50 font-medium border border-white/10 backdrop-blur-sm">
                        sync.io/summit
                    </div>
</div>
</div>

<div className="absolute z-40 bottom-36 left-28 lg:left-20 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center animate-emoji-1">
<iconify-icon className="text-rose-500 text-xl" icon="solar:heart-angle-bold"></iconify-icon>
</div>
<div className="absolute z-40 top-32 left-8 lg:-left-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center animate-emoji-2">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:fire-bold"></iconify-icon>
</div>
<div className="absolute z-40 top-1/2 right-16 lg:-right-4 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center animate-emoji-3">
<iconify-icon className="text-blue-500 text-lg" icon="solar:like-bold"></iconify-icon>
</div>
<div className="absolute z-40 bottom-24 right-28 lg:right-10 w-8 h-8 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center animate-emoji-1" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
</div>
</main>

    </>
  );
}
