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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
dark: '#1F352C',
light: '#DAD7CD',
dim: '#A3B18A',
surface: '#EAE8E3'
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-brand-dark p-1.5 rounded-lg text-white">
<svg aria-hidden="true" className="lucide lucide-network w-5 h-5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight font-sans">HypeProxies</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-brand-dark/80">
<a className="hover:text-brand-dark transition-colors font-sans" href="#features">
            Features
          </a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#use-cases">
            Use Cases
          </a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#pricing">
            Pricing
          </a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-lg font-medium hover:text-brand-dark/70 font-sans" href="#">
            Log in
          </a>
<a className="bg-brand-dark px-5 py-2.5 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 font-sans text-white" href="#">
            Dashboard
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 bg-[#21372D] w-full">
<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 bg-white/5 border-white/10">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{}}></span>
<span className="text-sm font-medium font-sans text-white/80">
              Systems Operational: 99.99% Uptime
            </span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight mb-6 leading-[1.1] font-sans font-semibold text-white">
            Unblockable proxies for
            <span className="font-semibold text-white/70 font-sans">serious</span>
            operations.
          </h1>
<p className="text-xl md:text-2xl mb-8 leading-relaxed font-sans font-semibold text-white/70">
            Enterprise-grade ISP and Residential IPs with unlimited bandwidth.
            Built on 10Gbps infrastructure for developers who demand
            <span className="font-sans font-semibold text-white">&lt;1ms latency</span>
            .
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="text-brand-dark text-lg font-medium px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg font-sans bg-white hover:bg-gray-100 shadow-black/10" href="#" style={{}}>
              Get Started
              <svg aria-hidden="true" className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</a>
<a className="bg-transparent border text-lg font-medium px-8 py-4 rounded-xl transition-colors flex items-center justify-center font-sans border-white/20 text-white hover:bg-white/5" href="#pricing">
              View Coverage
            </a>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-1">
<div className="flex text-white">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-base font-medium ml-2 font-sans text-white">
                4.9/5 Trustpilot
              </span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="text-base font-medium font-sans text-white/80">
              Trusted by 20k+ Users
            </div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r to-transparent rounded-[2rem] blur-2xl from-white/10"></div>

<div className="relative bg-brand-dark rounded-2xl p-6 shadow-2xl overflow-hidden border aspect-[4/3] flex text-white border-white/10">

<div className="w-16 flex flex-col items-center gap-8 py-4 border-r mr-6 border-white/10">
<div className="p-2 rounded-lg bg-white/10">
<svg aria-hidden="true" className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="flex flex-col gap-6 text-white/40">
<svg aria-hidden="true" className="lucide lucide-layout-grid w-6 h-6 transition-colors cursor-pointer hover:text-white" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<svg aria-hidden="true" className="lucide lucide-globe w-6 h-6 transition-colors cursor-pointer hover:text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<svg aria-hidden="true" className="lucide lucide-server w-6 h-6 transition-colors cursor-pointer hover:text-white text-white" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<svg aria-hidden="true" className="lucide lucide-settings w-6 h-6 transition-colors cursor-pointer hover:text-white" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>

<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-medium font-sans">Overview</h3>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-md text-sm border flex items-center gap-2 font-sans bg-white/5 border-white/10">
<span className="w-2 h-2 rounded-full bg-orange-400" style={{}}></span>
                    Residential
                  </span>
<span className="px-3 py-1 rounded-md text-sm border font-sans bg-white/5 border-white/10">
                    Last 7 days
                  </span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">

<div className="border rounded-xl p-5 bg-white/5 border-white/10">
<p className="text-sm mb-1 font-sans text-white/60">Bandwidth Usage</p>
<div className="flex items-end justify-between mb-2">
<span className="text-3xl font-sans font-semibold">100 GB</span>
<span className="text-xs px-2 py-0.5 rounded font-sans bg-white/10">
                      Total
                    </span>
</div>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-white/10">
<div className="h-full w-[80%] rounded-full bg-orange-400" style={{}}></div>
</div>
</div>

<div className="border rounded-xl p-5 bg-white/5 border-white/10">
<p className="text-sm mb-1 font-sans text-white/60">Success Rate</p>
<div className="flex items-end justify-between mb-2">
<span className="text-3xl font-sans font-semibold">99.9%</span>
<span className="text-sm flex items-center font-sans text-emerald-400" style={{}}>
<svg aria-hidden="true" className="lucide lucide-arrow-up w-3 h-3 mr-1" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                      0.2%
                    </span>
</div>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-white/10">
<div className="h-full w-[99%] rounded-full bg-emerald-400" style={{}}></div>
</div>
</div>
</div>

<div className="flex-1 border rounded-xl p-5 relative overflow-hidden bg-white/5 border-white/10">
<div className="flex justify-between items-center mb-4">
<p className="text-sm font-sans text-white/60">Request Volume</p>
</div>
<svg className="w-full h-32 overflow-visible" preserveaspectratio="none">
<path className="chart-line" d="M0 100 Q 40 80 80 90 T 160 60 T 240 70 T 320 30 T 400 50" fill="none" stroke="#34D399" strokeWidth="2"></path>
<path d="M0 100 Q 40 80 80 90 T 160 60 T 240 70 T 320 30 T 400 50 L 400 120 L 0 120 Z" fill="url(#gradient)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#34D399', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#34D399', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute bottom-8 right-12 text-brand-dark p-3 rounded-lg shadow-xl text-sm font-medium flex items-center gap-2 animate-bounce bg-white">
<div className="bg-emerald-500 rounded-full w-4 h-4 flex items-center justify-center text-white" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="font-sans">
<div className="text-xs text-gray-500 font-sans" style={{}}>Export Complete</div>
                    session_492.csv
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-brand-dark/10 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-lg text-brand-dark/60 mb-8 font-medium font-sans">
          Powering data infrastructure for growth teams at
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-70">

<div className="flex items-center gap-2 font-bold text-xl font-sans">
<div className="w-6 h-6 bg-brand-dark rounded"></div>
            ACME Corp
          </div>
<div className="flex items-center gap-2 font-bold text-xl font-sans">
<div className="w-6 h-6 bg-brand-dark rounded-full"></div>
            Vertex
          </div>
<div className="flex items-center gap-2 font-bold text-xl font-sans">
<div className="w-6 h-6 bg-brand-dark rotate-45"></div>
            Nexus
          </div>
<div className="flex items-center gap-2 font-bold text-xl font-sans">
<div className="w-6 h-6 border-2 border-brand-dark rounded"></div>
            GlobalData
          </div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="features">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl tracking-tight text-brand-dark mb-6 font-sans font-semibold">
          Engineered for scale, not hype.
        </h2>
<p className="text-brand-dark/70 text-xl font-sans">
          Most providers throttle your success. We built a network designed for
          high-concurrency automation without the bottlenecks.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="p-8 rounded-2xl border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow bg-white">
<div className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark mb-6">
<svg aria-hidden="true" className="lucide lucide-infinity w-6 h-6" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<h3 className="text-2xl mb-3 font-sans font-semibold">Unlimited Bandwidth</h3>
<p className="text-lg text-brand-dark/70 font-sans">
            Stop calculating GB costs. Our static residential and ISP plans come
            with zero data caps, allowing you to scale operations without
            surprise fees.
          </p>
</div>

<div className="border-brand-dark/5 hover:shadow-md transition-shadow bg-white border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark mb-6">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl mb-3 font-sans font-semibold">10Gbps Infrastructure</h3>
<p className="text-lg text-brand-dark/70 font-sans">
            Speed is a feature. Our direct ISP peering reduces latency to
            &lt;1ms, giving you the competitive edge in drops and real-time
            bidding.
          </p>
</div>

<div className="border-brand-dark/5 hover:shadow-md transition-shadow bg-white border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark mb-6">
<svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl mb-3 font-sans font-semibold">Clean IP Reputation</h3>
<p className="text-lg text-brand-dark/70 font-sans">
            We source premium US-based IPs with low fraud scores. Eliminate
            block-rates on strict targets like Nike, Ticketmaster, and
            Instagram.
          </p>
</div>
</div>
</section>

<section className="bg-brand-dark py-24 text-white" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<h2 className="text-4xl tracking-tight mb-6 font-sans font-semibold">
              Optimized for every protocol.
            </h2>
<p className="text-xl mb-8 font-sans text-white/60">
              Whether you need SOCKS5 for sneaker bots or HTTPs for scraping,
              our network adapts to your stack.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg font-medium font-sans">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Sneaker Botting
              </li>
<li className="flex items-center gap-3 text-lg font-medium font-sans">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Market Research &amp; SEO
              </li>
<li className="flex items-center gap-3 text-lg font-medium font-sans">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Social Media Management
              </li>
<li className="flex items-center gap-3 text-lg font-medium font-sans">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Ad Verification
              </li>
</ul>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="border p-6 rounded-xl transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-medium font-sans">Sneaker Servers</h4>
<svg aria-hidden="true" className="lucide lucide-server w-5 h-5 text-white/40" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<p className="font-sans text-white/60">
                Bare metal performance located in the same data centers as major
                retail CDNs.
              </p>
</div>

<div className="border p-6 rounded-xl transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-medium font-sans">ISP Proxies</h4>
<svg aria-hidden="true" className="lucide lucide-globe-2 w-5 h-5 text-white/40" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="font-sans text-white/60">
                Static IPs with the speed of data center proxies and the
                anonymity of residential.
              </p>
</div>

<div className="border p-6 rounded-xl transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-medium font-sans">Residential Pools</h4>
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 text-white/40" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="font-sans text-white/60">
                Millions of rotating IPs for large-scale web scraping and data
                extraction.
              </p>
</div>

<div className="border p-6 rounded-xl transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-medium font-sans">Smart Rotation</h4>
<svg aria-hidden="true" className="lucide lucide-refresh-cw w-5 h-5 text-white/40" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<p className="font-sans text-white/60">
                Automatic IP rotation on every request or sticky sessions up to
                30 minutes.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight text-brand-dark mb-4 font-sans font-semibold">
          Transparent Pricing
        </h2>
<p className="text-xl text-brand-dark/70 font-sans">
          Choose the infrastructure that fits your scale.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-brand-dark/10 shadow-sm relative overflow-hidden bg-white">
<h3 className="text-2xl mb-2 font-sans font-semibold">Pro ISP</h3>
<p className="text-brand-dark/60 mb-6 min-h-[50px] font-sans">
            For individuals and small botters getting started.
          </p>
<div className="text-4xl mb-6 font-sans font-semibold">
            $30
            <span className="text-lg font-normal text-brand-dark/50 font-sans">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              25 Static ISP IPs
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited Bandwidth
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              10 Gbps Port
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Standard Support
            </li>
</ul>
<a className="block w-full text-center py-3 border border-brand-dark rounded-lg font-medium hover:bg-brand-dark/5 transition-colors font-sans" href="#">
            Select Plan
          </a>
</div>

<div className="bg-brand-dark p-8 rounded-2xl shadow-xl relative transform md:-translate-y-4 text-white">
<div className="absolute top-0 right-0 text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg font-sans bg-orange-400" style={{}}>
            POPULAR
          </div>
<h3 className="text-2xl mb-2 font-sans font-semibold">Business</h3>
<p className="mb-6 min-h-[50px] font-sans text-white/60">
            High volume access for resellers and agencies.
          </p>
<div className="text-4xl mb-6 font-sans font-semibold">
            $120
            <span className="text-lg font-normal font-sans text-white/50">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              100 Static ISP IPs
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited Bandwidth
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Priority Subnet Selection
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              24/7 Priority Support
            </li>
</ul>
<a className="block w-full text-center py-3 text-brand-dark rounded-lg font-medium transition-colors font-sans bg-white hover:bg-gray-100" href="#" style={{}}>
            Start Trial
          </a>
</div>

<div className="p-8 rounded-2xl border border-brand-dark/10 shadow-sm bg-white">
<h3 className="text-2xl mb-2 font-sans font-semibold">Enterprise</h3>
<p className="text-brand-dark/60 mb-6 min-h-[50px] font-sans">
            Custom solutions for large-scale data teams.
          </p>
<div className="text-4xl mb-6 font-sans font-semibold">Custom</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              2,000+ IPs
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Dedicated Account Manager
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              API Access
            </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-dark" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Custom Rotation Logic
            </li>
</ul>
<a className="block w-full text-center py-3 border border-brand-dark rounded-lg font-medium hover:bg-brand-dark/5 transition-colors font-sans" href="#">
            Contact Sales
          </a>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6" id="faq">
<h2 className="text-3xl tracking-tight mb-12 text-center text-brand-dark font-sans font-semibold">
        Common Questions
      </h2>
<div className="space-y-4">

<details className="group rounded-xl border border-brand-dark/10 overflow-hidden bg-white">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg hover:bg-brand-dark/5 transition-colors">
<span className="font-sans">
              What is the difference between ISP and Residential Proxies?
            </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-dark/70 px-6 pb-6 text-lg leading-relaxed border-t border-brand-dark/5 pt-4">
<p className="font-sans">
<strong className="font-sans">ISP Proxies</strong>
              (Static Residential) are hosted in data centers but registered
              under internet service providers (like Verizon or AT&amp;T),
              offering the high speed of data center proxies with the trust
              score of residential users.
              <strong className="font-sans">Residential Proxies</strong>
              are IP addresses assigned to real physical devices (Wi-Fi),
              offering the highest anonymity but typically slower speeds.
              HypeProxies offers both.
            </p>
</div>
</details>

<details className="group rounded-xl border border-brand-dark/10 overflow-hidden bg-white">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg hover:bg-brand-dark/5 transition-colors">
<span className="font-sans">Do you limit bandwidth on ISP plans?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-dark/70 px-6 pb-6 text-lg leading-relaxed border-t border-brand-dark/5 pt-4">
<p className="font-sans">
              No. All HypeProxies ISP and Static Residential plans come with
              <strong className="font-sans">unlimited bandwidth</strong>
              . We believe in predictable pricing for your operations, so you
              are only billed a flat monthly fee based on the number of IPs, not
              your data usage.
            </p>
</div>
</details>

<details className="group rounded-xl border border-brand-dark/10 overflow-hidden bg-white">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg hover:bg-brand-dark/5 transition-colors">
<span className="font-sans">Which proxies are best for sneaker bots?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-dark/70 px-6 pb-6 text-lg leading-relaxed border-t border-brand-dark/5 pt-4">
<p className="font-sans">
              For sneaker botting, we recommend
              <strong className="font-sans">ISP Proxies</strong>
              . They provide the &lt;1ms latency required to cop limited
              releases while maintaining a "residential" status that bypasses
              bot protection systems like Akamai and Datadome.
            </p>
</div>
</details>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-4xl mx-auto bg-brand-dark rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">

<div className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-3xl bg-white/5"></div>
<h2 className="text-4xl md:text-5xl mb-6 relative z-10 tracking-tight font-sans font-semibold text-white">
          Ready to scale your operations?
        </h2>
<p className="text-xl mb-10 max-w-2xl mx-auto relative z-10 font-sans text-white/60">
          Get instant access to the fastest US-based proxy network. No
          contracts, cancel anytime.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<a className="text-brand-dark text-lg font-medium px-10 py-4 rounded-xl transition-colors font-sans bg-white hover:bg-gray-100" href="#" style={{}}>
            Get Started Now
          </a>
<a className="bg-transparent border text-lg font-medium px-10 py-4 rounded-xl transition-colors font-sans border-white/20 text-white hover:bg-white/10" href="#">
            Contact Sales
          </a>
</div>
</div>
</section>

<footer className="bg-brand-surface border-t border-brand-dark/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-brand-dark p-1 rounded text-white">
<svg aria-hidden="true" className="lucide lucide-network w-4 h-4" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight font-sans">
              HypeProxies
            </span>
</div>
<p className="text-brand-dark/60 font-sans">
            Premium infrastructure for the automation era.
          </p>
</div>
<div>
<h4 className="font-semibold mb-4 font-sans">Products</h4>
<ul className="space-y-2 text-brand-dark/70">
<li><a className="hover:text-brand-dark font-sans" href="#">ISP Proxies</a></li>
<li>
<a className="hover:text-brand-dark font-sans" href="#">Residential Proxies</a>
</li>
<li>
<a className="hover:text-brand-dark font-sans" href="#">Sneaker Servers</a>
</li>
<li><a className="hover:text-brand-dark font-sans" href="#">Bare Metal</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 font-sans">Company</h4>
<ul className="space-y-2 text-brand-dark/70">
<li><a className="hover:text-brand-dark font-sans" href="#">About</a></li>
<li>
<a className="hover:text-brand-dark font-sans" href="#">Network Status</a>
</li>
<li>
<a className="hover:text-brand-dark font-sans" href="#">Terms of Service</a>
</li>
<li>
<a className="hover:text-brand-dark font-sans" href="#">Privacy Policy</a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 font-sans">Support</h4>
<ul className="space-y-2 text-brand-dark/70">
<li><a className="hover:text-brand-dark font-sans" href="#">Help Center</a></li>
<li>
<a className="hover:text-brand-dark font-sans" href="#">API Documentation</a>
</li>
<li><a className="hover:text-brand-dark font-sans" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-dark/10 text-center md:text-left text-brand-dark/40 text-sm font-sans">
        © 2024 HypeProxies Inc. All rights reserved.
      </div>
</footer>


    </>
  );
}
