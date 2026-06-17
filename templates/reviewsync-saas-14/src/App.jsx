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
colors: {
midnight: '#0B0F19',
charcoal: '#374151',
steel: '#64748B',
subtle: '#94A3B8',
cloud: '#F8FAFC',
surface: '#FFFFFF',
border: '#E2E8F0',
primary: '#2563EB', // Vibrant Blue
'primary-dark': '#1D4ED8',
'primary-light': '#EFF6FF',
accent: '#F59E0B', // Amber for subtle highlights
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0,0,0,0.03)',
'float': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01), 0 0 0 1px rgba(0,0,0,0.03)',
'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
'dot-pattern': "radial-gradient(#cbd5e1 1px, transparent 1px)",
},
animation: {
'blob': 'blob 7s infinite',
'flow': 'flow 2s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
flow: {
'0%': { strokeDashoffset: '24' },
'100%': { strokeDashoffset: '0' },
}
}
}
}
}

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
      

<nav className="fixed w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-midnight flex items-center justify-center text-white shadow-lg ring-1 ring-black/5">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
</div>
<span className="text-midnight font-display font-bold text-lg tracking-tight">
            ReviewSync
          </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-steel hover:text-midnight transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="text-sm font-medium text-steel hover:text-midnight transition-colors" href="#features">
            Features
          </a>
<a className="text-sm font-medium text-steel hover:text-midnight transition-colors" href="#templates">
            Templates
          </a>
<a className="text-sm font-medium text-steel hover:text-midnight transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-steel hover:text-midnight transition-colors px-3 py-2" href="#">
            Log in
          </a>
<button className="bg-midnight hover:bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-subtle hover:shadow-lg hover:-translate-y-0.5 border border-transparent hover:border-gray-700">
            Get Started
          </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border bg-gradient-to-b from-white to-gray-50/50">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 shadow-subtle mb-8 hover:border-primary/30 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold text-charcoal tracking-wide uppercase">
              New: Shopify Integration Beta
            </span>
<svg className="text-steel" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-midnight tracking-tighter mb-8 leading-[1.05] font-display font-semibold text-balance">
            All your reviews.
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-indigo-600">
              One CMS.
            </span>
</h1>
<p className="text-lg md:text-xl text-steel font-normal max-w-2xl mb-10 leading-relaxed text-balance">
            Pull reviews from Google, Yelp, and Trustpilot directly into your
            Webflow or Framer CMS. No widgets, no embeds, just pure design
            freedom.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-midnight text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-float hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 ring-1 ring-white/10">
              Start 14-day Free Trial
              <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="bg-white text-midnight border border-border px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-subtle hover:bg-gray-50 flex items-center justify-center gap-2">
              View Demo Site
            </button>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-2xl opacity-50"></div>

<div className="relative bg-white rounded-xl border border-border shadow-2xl overflow-hidden">

<div className="h-10 border-b border-border bg-gray-50/80 flex items-center px-4 gap-2 backdrop-blur-sm sticky top-0 z-20">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400/30"></div>
</div>
<div className="ml-4 flex items-center gap-2 bg-white border border-gray-200 rounded-md px-2 py-0.5 shadow-sm">
<svg className="text-steel" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-[10px] text-steel font-medium">
                  app.reviewsync.com/dashboard
                </span>
</div>
</div>
<div className="flex h-[450px] md:h-[550px]">

<div className="w-56 border-r border-border bg-gray-50/30 p-4 hidden md:flex flex-col gap-6">
<div className="space-y-1">
<div className="px-2 py-1.5 bg-blue-50 text-primary rounded-md text-xs font-semibold flex items-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                    Dashboard
                  </div>
<div className="px-2 py-1.5 text-steel hover:bg-gray-100 rounded-md text-xs font-medium flex items-center gap-2 transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                    Sources
                  </div>
<div className="px-2 py-1.5 text-steel hover:bg-gray-100 rounded-md text-xs font-medium flex items-center gap-2 transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                    Settings
                  </div>
</div>
<div className="mt-auto">
<div className="p-3 bg-white rounded-lg border border-border shadow-sm">
<div className="text-[10px] text-steel mb-1">Total Reviews</div>
<div className="text-xl font-bold text-midnight">1,248</div>
<div className="text-[10px] text-green-600 flex items-center gap-1 mt-1">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                      +12% this week
                    </div>
</div>
</div>
</div>

<div className="flex-1 bg-gray-50/10 p-6 md:p-8 overflow-hidden relative">

<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-lg font-semibold text-midnight">
                      Sync Overview
                    </h3>
<p className="text-xs text-steel">Last synced: Just now</p>
</div>
<div className="flex gap-2">
<button className="bg-white border border-border text-steel px-3 py-1.5 rounded-md text-xs font-medium shadow-sm hover:bg-gray-50">
                      Filter
                    </button>
<button className="bg-midnight text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm flex items-center gap-1.5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
                      Sync Now
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="bg-white rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
<div className="flex justify-between items-center mb-4 border-b border-border/60 pb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gray-50 text-gray-600 flex items-center justify-center border border-gray-100">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<span className="font-semibold text-sm text-midnight">
                          Active Sources
                        </span>
</div>
<button className="text-[10px] bg-primary/5 text-primary px-2.5 py-1 rounded-md font-medium hover:bg-primary/10 transition-colors">
                        + Connect
                      </button>
</div>
<div className="space-y-2.5 overflow-hidden">

<div className="flex items-center justify-between p-2.5 bg-gray-50/50 rounded-lg border border-border/50 group hover:border-blue-200 transition-colors">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center text-[#4285F4]">
<span className="iconify" data-icon="simple-icons:google"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-midnight">
                              Google Reviews
                            </span>
<span className="text-[9px] text-steel">
                              Syncing • 128 reviews
                            </span>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]"></div>
</div>

<div className="flex items-center justify-between p-2.5 bg-gray-50/50 rounded-lg border border-border/50 group hover:border-red-200 transition-colors">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center text-[#FF1A1A]">
<span className="iconify" data-icon="simple-icons:yelp"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-midnight">
                              Yelp
                            </span>
<span className="text-[9px] text-steel">
                              Syncing • 84 reviews
                            </span>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>

<div className="flex items-center justify-between p-2.5 bg-gray-50/50 rounded-lg border border-border/50 group hover:border-emerald-200 transition-colors">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center text-[#00B67A]">
<span className="iconify" data-icon="simple-icons:trustpilot"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-midnight">
                              Trustpilot
                            </span>
<span className="text-[9px] text-steel">
                              Syncing • 215 reviews
                            </span>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>

<div className="flex items-center justify-between p-2.5 bg-gray-50/50 rounded-lg border border-border/50 group hover:border-blue-200 transition-colors">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center text-[#1877F2]">
<span className="iconify" data-icon="simple-icons:facebook"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-midnight">
                              Facebook
                            </span>
<span className="text-[9px] text-steel">
                              Pending • 42 reviews
                            </span>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
</div>
</div>
</div>

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full border border-border shadow-float items-center justify-center text-primary ring-4 ring-gray-50">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div className="bg-white rounded-xl border border-border p-0 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">

<div className="p-5 pb-3 border-b border-border/60 flex justify-between items-start bg-white z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path>
</svg>
</div>
<div>
<div className="font-semibold text-sm text-midnight">
                            Unified CMS Collection
                          </div>
<div className="text-[10px] text-steel">
                            Ready for Custom Design
                          </div>
</div>
</div>
<div className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-100 flex items-center gap-1">
                        Updated
                      </div>
</div>

<div className="flex-1 bg-gray-50/30 p-4 space-y-3 relative overflow-hidden">

<div className="absolute bottom-3 right-3 z-20 pointer-events-none">
<div className="bg-white border border-border text-midnight text-[10px] px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 opacity-80 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          Frontend Ready
                        </div>
</div>

<div className="bg-white p-3 rounded-lg border border-border shadow-sm flex gap-3 items-start">
<div className="shrink-0 mt-0.5">
<span className="iconify text-[#4285F4] w-3.5 h-3.5" data-icon="simple-icons:google"></span>
</div>
<div className="flex-1 min-w-0 space-y-1.5">
<div className="flex items-center justify-between">
<div className="h-1.5 w-16 bg-gray-200 rounded-full"></div>
<div className="flex text-amber-400 text-[6px] gap-0.5">
                              ★★★★★
                            </div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-border shadow-sm flex gap-3 items-start opacity-90">
<div className="shrink-0 mt-0.5">
<span className="iconify text-[#00B67A] w-3.5 h-3.5" data-icon="simple-icons:trustpilot"></span>
</div>
<div className="flex-1 min-w-0 space-y-1.5">
<div className="flex items-center justify-between">
<div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
<div className="flex text-amber-400 text-[6px] gap-0.5">
                              ★★★★★
                            </div>
</div>
<div className="h-1.5 w-5/6 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-border shadow-sm flex gap-3 items-start opacity-80">
<div className="shrink-0 mt-0.5">
<span className="iconify text-[#FF1A1A] w-3.5 h-3.5" data-icon="simple-icons:yelp"></span>
</div>
<div className="flex-1 min-w-0 space-y-1.5">
<div className="flex items-center justify-between">
<div className="h-1.5 w-14 bg-gray-200 rounded-full"></div>
<div className="flex text-amber-400 text-[6px] gap-0.5">
                              ★★★★
                              <span className="text-gray-200">★</span>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-b border-border bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 group">
<span className="iconify w-5 h-5 group-hover:text-[#4353FF] transition-colors" data-icon="simple-icons:webflow"></span>
<span className="font-bold text-lg text-midnight tracking-tight">
              Webflow
            </span>
</div>
<div className="flex items-center gap-2 group">
<span className="iconify w-5 h-5 group-hover:text-black transition-colors" data-icon="simple-icons:framer"></span>
<span className="font-bold text-lg text-midnight tracking-tight">
              Framer
            </span>
</div>
<div className="hidden md:block w-px h-6 bg-border"></div>
<div className="flex items-center gap-2 group">
<span className="iconify w-5 h-5 group-hover:text-[#4285F4] transition-colors" data-icon="simple-icons:google"></span>
<span className="font-bold text-lg text-midnight tracking-tight">
              Google
            </span>
</div>
<div className="flex items-center gap-2 group">
<span className="iconify w-5 h-5 group-hover:text-[#FF1A1A] transition-colors" data-icon="simple-icons:yelp"></span>
<span className="font-bold text-lg text-midnight tracking-tight">
              Yelp
            </span>
</div>
<div className="flex items-center gap-2 group">
<span className="iconify w-5 h-5 group-hover:text-[#00B67A] transition-colors" data-icon="simple-icons:trustpilot"></span>
<span className="font-bold text-lg text-midnight tracking-tight">
              Trustpilot
            </span>
</div>
</div>
</div>
</section>

<section className="bg-gray-50/50 pt-24 pb-24 border-b border-border">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-midnight tracking-tight mb-4 font-bold">
            Stop stitching widgets together.
          </h2>
<p className="text-steel text-lg max-w-2xl mx-auto">
            The old way breaks your design and slows down your site.
            <br/>
            The ReviewSync way empowers it.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-2xl p-8 border border-border shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-midnight">The Hard Way</h3>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="text-red-500 mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
<p className="text-sm text-steel font-medium">
                    Multiple widget subscriptions
                  </p>
</div>
<div className="flex items-start gap-3">
<svg className="text-red-500 mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
<p className="text-sm text-steel font-medium">
                    Inconsistent branding &amp; fonts
                  </p>
</div>
<div className="flex items-start gap-3">
<svg className="text-red-500 mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
<p className="text-sm text-steel font-medium">
                    Slow iframe loading speeds
                  </p>
</div>
<div className="flex items-start gap-3">
<svg className="text-red-500 mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
<p className="text-sm text-steel font-medium">
                    Data locked in 3rd party apps
                  </p>
</div>
</div>

<div className="mt-8 h-32 bg-gray-50 rounded-lg border border-dashed border-red-200 relative overflow-hidden flex items-center justify-center">
<div className="absolute text-red-200 text-6xl font-bold opacity-20 rotate-12 select-none">
                  IFRAME
                </div>
<div className="text-xs text-red-400 font-mono">
                  Loading widget...
                </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-primary/20 shadow-float relative overflow-hidden group ring-1 ring-primary/10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<h3 className="text-lg font-bold text-midnight">ReviewSync</h3>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="text-primary mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<p className="text-sm text-midnight font-medium">
                    One simple connection
                  </p>
</div>
<div className="flex items-start gap-3">
<svg className="text-primary mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<p className="text-sm text-midnight font-medium">
                    100% Native Design Control
                  </p>
</div>
<div className="flex items-start gap-3">
<svg className="text-primary mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<p className="text-sm text-midnight font-medium">
                    Zero impact on load speed
                  </p>
</div>
<div className="flex items-start gap-3">
<svg className="text-primary mt-1 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<p className="text-sm text-midnight font-medium">
                    Reviews live in your CMS
                  </p>
</div>
</div>

<div className="mt-8 h-32 bg-white rounded-lg border border-primary/20 relative overflow-hidden flex flex-col p-4 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<div className="h-1.5 w-16 bg-gray-100 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
</div>
<div className="mt-auto flex gap-1">
<div className="w-4 h-4 rounded bg-primary/20"></div>
<div className="w-4 h-4 rounded bg-primary/20"></div>
<div className="w-4 h-4 rounded bg-primary/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="features">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl text-midnight tracking-tight mb-4 font-bold">
            Everything you need to
            <br/>
            showcase trust.
          </h2>
<p className="text-steel">
            Powerful features wrapped in a simple interface. Built for designers
            and developers.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 bg-cloud rounded-2xl p-8 border border-border relative overflow-hidden group hover:shadow-card transition-all duration-300">
<div className="relative z-10 flex flex-col h-full">
<div className="mb-auto">
<h3 className="text-lg font-semibold text-midnight mb-2">
                  Multi-Platform Aggregation
                </h3>
<p className="text-sm text-steel max-w-md">
                  Connect all your sources. We normalize the data so it fits
                  perfectly into one CMS collection schema.
                </p>
</div>

<div className="mt-8 bg-white rounded-xl border border-border p-4 shadow-sm w-full max-w-lg mx-auto md:mx-0 transform transition-transform group-hover:translate-y-[-4px]">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<span className="text-xs font-semibold text-midnight">
                    Connected Sources
                  </span>
<span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Active
                  </span>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-50 text-blue-600 rounded flex items-center justify-center text-xs">
<span className="iconify" data-icon="simple-icons:google"></span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-red-50 text-red-600 rounded flex items-center justify-center text-xs">
<span className="iconify" data-icon="simple-icons:yelp"></span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-green-50 text-green-600 rounded flex items-center justify-center text-xs">
<span className="iconify" data-icon="simple-icons:trustpilot"></span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 bg-midnight text-white rounded-2xl p-8 border border-gray-800 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[80px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
                10x Faster Design
              </h3>
<p className="text-sm text-gray-400 mb-8">
                Don't waste time styling widget iframes. Use the power of CSS
                Grid and Flexbox natively.
              </p>

<div className="mt-auto bg-gray-900/50 rounded-xl border border-white/10 p-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="space-y-2 font-mono text-[10px] text-gray-400">
<div>.review-card {</div>
<div className="pl-2 text-primary">display: grid;</div>
<div className="pl-2 text-primary">gap: 1rem;</div>
<div className="pl-2 text-primary">background: white;</div>
<div>}</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-border hover:shadow-card transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-6 border border-orange-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-midnight mb-2">Auto-Sync</h3>
<p className="text-sm text-steel">
              Set it and forget it. We check for new reviews hourly.
            </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-border hover:shadow-card transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>
</div>
<h3 className="text-lg font-semibold text-midnight mb-2">
              Smart Filters
            </h3>
<p className="text-sm text-steel">
              Only show 4+ star reviews or reviews with specific text.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-border" id="templates">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl text-midnight tracking-tight mb-2 font-bold">
              Start with beautiful defaults.
            </h2>
<p className="text-steel">
              Clone these layouts directly into your project.
            </p>
</div>
<button className="text-primary font-semibold hover:text-primary-dark flex items-center gap-1 group text-sm">
            View Template Library
            <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="bg-white rounded-xl border border-border overflow-hidden aspect-[4/3] relative shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-gray-50 p-6 flex flex-col gap-3">
<div className="grid grid-cols-2 gap-3 h-full">
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
<div className="w-8 h-1 bg-gray-200 rounded mb-2"></div>
<div className="space-y-1">
<div className="w-full h-1 bg-gray-100 rounded"></div>
<div className="w-2/3 h-1 bg-gray-100 rounded"></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
<div className="w-8 h-1 bg-gray-200 rounded mb-2"></div>
<div className="space-y-1">
<div className="w-full h-1 bg-gray-100 rounded"></div>
<div className="w-2/3 h-1 bg-gray-100 rounded"></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
<div className="w-8 h-1 bg-gray-200 rounded mb-2"></div>
<div className="space-y-1">
<div className="w-full h-1 bg-gray-100 rounded"></div>
<div className="w-2/3 h-1 bg-gray-100 rounded"></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
<div className="w-8 h-1 bg-gray-200 rounded mb-2"></div>
<div className="space-y-1">
<div className="w-full h-1 bg-gray-100 rounded"></div>
<div className="w-2/3 h-1 bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="bg-white text-midnight px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  Preview
                </span>
</div>
</div>
<div className="mt-3 flex justify-between items-center">
<span className="text-sm font-semibold text-midnight">
                Classic Grid
              </span>
<span className="text-xs text-steel bg-white border border-border px-1.5 py-0.5 rounded">
                Free
              </span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white rounded-xl border border-border overflow-hidden aspect-[4/3] relative shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-gray-50 p-6 flex items-center">
<div className="flex gap-4 w-full overflow-hidden">
<div className="min-w-[80%] bg-white border border-gray-200 rounded-lg shadow-sm h-32 p-3">
<div className="flex justify-between mb-2">
<div className="w-6 h-6 rounded-full bg-gray-100"></div>
<div className="w-12 h-2 bg-gray-100 rounded"></div>
</div>
<div className="space-y-1.5">
<div className="w-full h-1.5 bg-gray-100 rounded"></div>
<div className="w-full h-1.5 bg-gray-100 rounded"></div>
<div className="w-2/3 h-1.5 bg-gray-100 rounded"></div>
</div>
</div>
<div className="min-w-[80%] bg-white border border-gray-200 rounded-lg shadow-sm h-32 opacity-50"></div>
</div>
</div>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="bg-white text-midnight px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  Preview
                </span>
</div>
</div>
<div className="mt-3 flex justify-between items-center">
<span className="text-sm font-semibold text-midnight">
                Carousel Slider
              </span>
<span className="text-xs text-steel bg-white border border-border px-1.5 py-0.5 rounded">
                Pro
              </span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-white rounded-xl border border-border overflow-hidden aspect-[4/3] relative shadow-sm hover:shadow-md transition-all">
<div className="absolute inset-0 bg-gray-50 p-6">
<div className="columns-2 gap-3 space-y-3">
<div className="bg-white border border-gray-200 rounded-lg h-20 shadow-sm"></div>
<div className="bg-white border border-gray-200 rounded-lg h-32 shadow-sm"></div>
<div className="bg-white border border-gray-200 rounded-lg h-24 shadow-sm"></div>
<div className="bg-white border border-gray-200 rounded-lg h-16 shadow-sm"></div>
</div>
</div>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="bg-white text-midnight px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  Preview
                </span>
</div>
</div>
<div className="mt-3 flex justify-between items-center">
<span className="text-sm font-semibold text-midnight">
                Masonry Wall
              </span>
<span className="text-xs text-steel bg-white border border-border px-1.5 py-0.5 rounded">
                Pro
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-midnight tracking-tight mb-4 font-bold">
            Simple, transparent pricing.
          </h2>
<p className="text-steel">No credit card required to start.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-2xl p-8 border border-border hover:border-gray-300 transition-colors">
<div className="mb-4">
<h3 className="text-xl font-bold text-midnight">Starter</h3>
<p className="text-sm text-steel mt-1">For personal projects</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-midnight">$0</span>
<span className="text-steel">/month</span>
</div>
<button className="w-full py-3 rounded-xl border border-border text-midnight font-semibold hover:bg-gray-50 transition-colors mb-8">
              Start Free
            </button>
<ul className="space-y-3 text-sm text-steel">
<li className="flex gap-3">
<span className="text-primary">✓</span>
                1 Website
              </li>
<li className="flex gap-3">
<span className="text-primary">✓</span>
                50 Reviews limit
              </li>
<li className="flex gap-3">
<span className="text-primary">✓</span>
                Manual Sync
              </li>
</ul>
</div>

<div className="bg-midnight rounded-2xl p-8 border border-gray-800 relative overflow-hidden text-white shadow-2xl">
<div className="absolute top-0 right-0 bg-primary/20 text-primary-light text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider border-l border-b border-primary/30">
              Popular
            </div>
<div className="mb-4">
<h3 className="text-xl font-bold text-white">Professional</h3>
<p className="text-sm text-gray-400 mt-1">
                For agencies &amp; businesses
              </p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white">$29</span>
<span className="text-gray-400">/month</span>
</div>
<button className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-colors mb-8 shadow-glow">
              Start 14-day Trial
            </button>
<ul className="space-y-3 text-sm text-gray-300">
<li className="flex gap-3">
<span className="text-primary">✓</span>
                Unlimited Websites
              </li>
<li className="flex gap-3">
<span className="text-primary">✓</span>
                Unlimited Reviews
              </li>
<li className="flex gap-3">
<span className="text-primary">✓</span>
                Hourly Auto-Sync
              </li>
<li className="flex gap-3">
<span className="text-primary">✓</span>
                Priority Support
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca]"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mb-8 font-display font-bold leading-tight">
          Turn reviews into your
          <br/>
          competitive advantage.
        </h2>
<p className="text-lg text-indigo-100 mb-10 max-w-xl mx-auto leading-relaxed">
          Join 2,000+ designers building trust with ReviewSync.
          <br/>
          Start your 14-day free trial today.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1">
            Start Free Trial
          </button>
<button className="text-white font-medium hover:text-indigo-200 transition-colors px-6 py-4">
            Talk to Sales
          </button>
</div>
<p className="mt-8 text-xs text-indigo-300/60 uppercase tracking-widest font-medium">
          No credit card required
        </p>
</div>
</section>

<footer className="bg-white border-t border-border pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-midnight flex items-center justify-center text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
</div>
<span className="text-midnight font-bold tracking-tight text-lg">
                ReviewSync
              </span>
</a>
<p className="text-sm text-steel max-w-xs leading-relaxed">
              The standard for syncing reviews to modern CMS platforms. Built
              for quality.
            </p>
</div>
<div>
<h4 className="font-semibold text-midnight mb-4 text-sm">Product</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Changelog
                </a>
</li>
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-midnight mb-4 text-sm">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-midnight mb-4 text-sm">Legal</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="text-sm text-steel hover:text-primary transition-colors" href="#">
                  Terms
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-steel">
            © 2024 ReviewSync Inc. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-steel hover:text-midnight transition-colors" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:twitter"></span>
</a>
<a className="text-steel hover:text-midnight transition-colors" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:github"></span>
</a>
<a className="text-steel hover:text-midnight transition-colors" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:linkedin"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
