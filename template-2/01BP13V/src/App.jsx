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
      

<div className="min-h-screen w-full flex flex-col lg:flex-row relative max-w-7xl bg-white mt-8 mr-auto mb-8 ml-auto shadow-2xl rounded-3xl overflow-hidden">

<div className="w-full lg:w-1/2 sm:p-6 md:p-8 lg:p-12 flex flex-col pt-4 pr-4 pb-4 pl-4">

<div className="flex items-center justify-between mb-8 lg:mb-12 animate-fade-in">
<div className="flex gap-2 items-center">
<span className="text-xl font-semibold tracking-tight font-geist">VEXA</span>
</div>
<nav className="hidden md:flex space-x-6 text-sm font-medium">
<a className="hover:text-gray-900 tracking-wider transition-colors duration-200 flex items-center gap-1 font-geist" href="#">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            EXPLORE
          </a>
<a className="hover:text-gray-900 tracking-wider transition-colors duration-200 flex items-center gap-1 font-geist" href="#">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
            PRICING
          </a>
<a className="hover:text-gray-900 tracking-wider transition-colors duration-200 flex items-center gap-1 font-geist" href="#">
<svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
            API
          </a>
</nav>
<button className="flex gap-2 hover:bg-gray-900 transition-all duration-200 hover:scale-105 text-xs font-medium text-white font-geist bg-black rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center">
<svg className="lucide lucide-smartphone w-4 h-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
          GET THE APP
        </button>
</div>

<div className="flex-1 flex flex-col justify-center">
<div className="lg:space-y-8 space-y-6">
<div className="animate-fade-in delay-100 flex gap-2 text-sm font-medium text-gray-700 tracking-widest items-center font-geist">NEW LAUNCH<svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg></div>
<h1 className="sm:text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-up delay-200 text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>
            CRAFTING 
            HUMAN-LIKE 
            DIGITAL AGENTS 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-space-grotesk font-semibold" style={{}}>WITH PURPOSE</span>
</h1>
<p className="max-w-md text-sm tracking-wide leading-relaxed text-gray-600 animate-slide-up delay-300 font-geist">
            Discover revolutionary AI-powered tools to build, deploy, and scale autonomous digital agents across web systems. Transform your workflow with intelligent automation that learns and adapts.
          </p>
<div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
<button className="inline-flex gap-2 self-start hover:border-gray-900 transition-all duration-200 hover:shadow-md hover:scale-105 text-sm font-medium border-gray-400 border rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="tracking-wider font-geist">DEPLOY AGENT</span>
</button>
<button className="inline-flex items-center gap-2 self-start text-sm font-medium px-6 py-3 rounded-xl text-gray-700 hover:text-gray-900 transition-colors duration-200">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="tracking-wider font-geist">WATCH DEMO</span>
</button>
</div>

<div className="flex items-center gap-8 pt-6 animate-fade-in delay-500">
<div className="text-center">
<div className="text-2xl text-gray-900 font-space-grotesk font-semibold" style={{}}>2.5M+</div>
<div className="text-xs text-gray-600 tracking-wider font-geist">AGENTS DEPLOYED</div>
</div>
<div className="text-center">
<div className="text-2xl text-gray-900 font-space-grotesk font-semibold" style={{}}>99.9%</div>
<div className="text-xs text-gray-600 tracking-wider font-geist">UPTIME</div>
</div>
<div className="text-center">
<div className="text-2xl text-gray-900 font-space-grotesk font-semibold" style={{}}>{"<"} 50ms</div>
<div className="text-xs text-gray-600 tracking-wider font-geist">RESPONSE TIME</div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg animate-slide-up delay-600">

<div className="relative h-48 sm:h-56 overflow-hidden flex group cursor-pointer hover:scale-105 transition-all duration-300 bg-[url(https://cdn.midjourney.com/1741ccc5-3df1-471e-9e41-b528ea13c963/0_0.png?w=800&q=80)] bg-cover rounded-xl items-center justify-center">
<div className="absolute top-3 left-3 text-[10px] tracking-widest text-white/70 flex items-center gap-1 font-geist">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
              CORE MODULE
            </div>
<svg className="lucide lucide-atom w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
<div className="absolute bottom-3 left-3 right-3">
<div className="text-xs text-white/90 font-medium font-geist">Neural Processing Unit</div>
<div className="text-[10px] text-white/70 font-geist">Advanced AI reasoning core</div>
</div>
<svg className="lucide lucide-arrow-up-right absolute top-3 right-3 w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="relative h-48 sm:h-56 bg-gray-100 rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300">
<div className="absolute top-3 left-3 text-[10px] tracking-widest text-gray-700 flex items-center gap-1 z-10 font-geist">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              AGENT SKIN
            </div>
<img alt="Agent Skin" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://cdn.midjourney.com/4ac09c6f-b2a4-42ae-b133-70257fe250fe/0_0.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 group-hover:bg-black/30 transition-colors duration-300 bg-black/20"></div>
<div className="absolute bottom-3 left-3 right-3 z-10">
<div className="text-xs text-white font-medium font-geist">Marcus Chen</div>
<div className="text-[10px] text-white/80 font-geist">Customer Success Agent</div>
</div>
<svg className="lucide lucide-arrow-up-right absolute top-3 right-3 w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-300 z-10" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative animate-slide-left delay-700">
<img alt="Hero Agent" className="w-full h-full min-h-[400px] lg:min-h-full object-cover" src="https://cdn.midjourney.com/1dd6f5e0-0973-4b64-a757-56af98dc2d42/0_0.png?w=800&q=80" style={{}} />

<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-4 py-2 rounded-lg shadow-lg border border-white/20 animate-fade-in delay-800 font-geist">
<svg className="lucide lucide-brain w-4 h-4 text-gray-900" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
        optimized for agents & humans
      </div>

<div className="absolute top-6 right-6 flex flex-col gap-2">
<div className="flex items-center gap-2 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-geist">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          ACTIVE
        </div>
<div className="flex items-center gap-2 bg-blue-500/90 text-white text-xs px-3 py-1 rounded-full font-geist">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          LEARNING
        </div>
</div>
</div>
</div>

<button className="md:hidden fixed top-4 right-4 z-50 p-2 bg-black text-white rounded-lg">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>


    </>
  );
}
