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



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

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
      

<div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-7xl grid-lines hidden md:block border-r border-l border-white/[0.03]"></div>

<div className="fixed flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center animate">
<nav className="flex md:gap-12 bg-neutral-950 w-full h-14 max-w-5xl border-white/10 border rounded-full mr-auto ml-auto pr-3 pl-6 shadow-lg backdrop-blur-xl gap-x-6 gap-y-6 items-center justify-between">
<a className="flex items-center gap-2" href="/">
<span className="text-lg font-bold text-white tracking-tight">Dark Vector</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="text-white transition-colors" href="/about">About</a>
<a className="hover:text-white transition-colors" href="#">Intel</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-3 text-sm font-medium">
<button className="hover:bg-white/10 transition-all flex text-sm font-medium text-neutral-200 bg-gradient-to-b from-white/30 via-white/0 to-white/10 rounded-full px-4 py-2 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset] gap-x-2 gap-y-x-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<span className="text-xs font-semibold tracking-tight">Schedule a Briefing</span>
<svg className="text-neutral-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>
</div>

<main className="z-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">

<section className="max-w-4xl mr-auto mb-32 ml-auto">
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-medium text-white tracking-tight mb-10 text-center">We Are the Threat Analyst Your Company Can't Afford to Hire</h1>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] md:text-xl leading-relaxed text-lg font-light text-neutral-400 text-center max-w-3xl mr-auto ml-auto">Enterprise threat intelligence platforms cost $15K–$25K per year and assume you have a security operations center to interpret thousands of alerts. You don't. You have an IT team keeping the lights on, and a growing awareness that your company is more exposed than it should be. Dark Vector exists to close that gap. We operate in the same underground markets that attackers use and surface only what matters: verified evidence that your credentials, devices, or sessions have been compromised.</p>
</section>

<section className="relative bg-[#050505] border-y border-white/5 py-24 -mx-6 px-6 mb-32">
<div className="max-w-7xl mx-auto">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-8">
                        Methodology
                    </div>
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-5xl text-3xl font-medium text-white tracking-tight">How We Work</h2>
</div>

<div className="hidden md:flex items-center justify-between px-16 mb-16 opacity-20">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-full"></div>
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-full"></div>
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] group relative">
<div className="absolute -top-12 left-0 text-xs font-mono text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">01</div>
<div className="flex border-white/5 border-b mb-8 pb-8 items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-75">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-150">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
</div>
</div>
<div className="flex gap-1.5 opacity-40">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
</div>
<h3 className="uppercase group-hover:text-blue-400 transition-colors text-lg font-bold text-white tracking-wide mb-3">Reconnaissance</h3>
<p className="leading-relaxed text-sm font-medium text-neutral-500">We scan dark web markets, botnet log aggregators, stealer-as-a-service platforms, and paste sites for any data tied to your corporate domain and key personnel.</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] group relative">
<div className="absolute -top-12 left-0 text-xs font-mono text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">02</div>
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-75">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-150">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
</div>
<div className="flex gap-1.5 opacity-40">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
</div>
</div>
<h3 className="uppercase group-hover:text-blue-400 transition-colors text-lg font-bold text-white tracking-wide mb-3">Verification</h3>
<p className="leading-relaxed text-sm font-medium text-neutral-500">Every finding is validated. We confirm the credential is real, identify the source malware family, and trace the infection to a specific device where possible.</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] group relative">
<div className="absolute -top-12 left-0 text-xs font-mono text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">03</div>
<div className="flex border-white/5 border-b mb-8 pb-8 items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-75">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 delay-150">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
</div>
<div className="flex gap-1.5 opacity-40">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
<div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
</div>
</div>
<h3 className="uppercase group-hover:text-blue-400 transition-colors text-lg font-bold text-white tracking-wide mb-3">Reporting</h3>
<p className="leading-relaxed text-sm font-medium text-neutral-500">You receive a branded intelligence report with severity ratings, affected systems, and a prioritized remediation roadmap. No jargon. Just clear next steps.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mb-32">
<div className="text-center mb-16">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-8">
                    Comparison
                </div>
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-5xl text-3xl font-medium text-white tracking-tight">Us vs. Enterprise Platforms</h2>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden">

<div className="grid grid-cols-3 border-b border-white/5">
<div className="p-6"></div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-lg font-semibold text-white">Dark Vector</span>
</div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-lg font-semibold text-neutral-500">Enterprise Platforms</span>
</div>
</div>

<div className="grid grid-cols-3 border-b border-white/5">
<div className="p-6 flex items-center">
<span className="text-sm font-medium text-neutral-400">Price</span>
</div>
<div className="p-6 text-center border-l border-white/5 bg-white/[0.02]">
<span className="text-sm font-semibold text-white">Starting at $1,500</span>
</div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-sm text-neutral-500">$15K–$25K/year</span>
</div>
</div>

<div className="grid grid-cols-3 border-b border-white/5">
<div className="p-6 flex items-center">
<span className="text-sm font-medium text-neutral-400">Requires SOC team?</span>
</div>
<div className="p-6 text-center border-l border-white/5 bg-white/[0.02]">
<span className="text-sm font-semibold text-white">No</span>
</div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-sm text-neutral-500">Yes</span>
</div>
</div>

<div className="grid grid-cols-3 border-b border-white/5">
<div className="p-6 flex items-center">
<span className="text-sm font-medium text-neutral-400">Output</span>
</div>
<div className="p-6 text-center border-l border-white/5 bg-white/[0.02]">
<span className="text-sm font-semibold text-white">Verified proof + remediation steps</span>
</div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-sm text-neutral-500">Thousands of raw alerts</span>
</div>
</div>

<div className="grid grid-cols-3 border-b border-white/5">
<div className="p-6 flex items-center">
<span className="text-sm font-medium text-neutral-400">Time to value</span>
</div>
<div className="p-6 text-center border-l border-white/5 bg-white/[0.02]">
<span className="text-sm font-semibold text-white">24–48 hours</span>
</div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-sm text-neutral-500">Weeks of onboarding</span>
</div>
</div>

<div className="grid grid-cols-3">
<div className="p-6 flex items-center">
<span className="text-sm font-medium text-neutral-400">Contract</span>
</div>
<div className="p-6 text-center border-l border-white/5 bg-white/[0.02]">
<span className="text-sm font-semibold text-white">No minimums, no lock-in</span>
</div>
<div className="p-6 text-center border-l border-white/5">
<span className="text-sm text-neutral-500">Annual commitment</span>
</div>
</div>
</div>
</section>
</main>

<section className="overflow-hidden bg-[#050505] pt-32 pb-32 relative border-t border-white/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] md:text-6xl text-4xl font-medium text-white tracking-tight mb-8">See What Attackers Already Know About Your Company</h2>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="hover:scale-105 transition-transform text-sm font-semibold text-black tracking-tight bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">Request Your Exposure Report</button>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-12 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 items-start">

<div className="text-left">
<span className="text-lg font-bold text-white tracking-tight">Dark Vector</span>
<p className="text-sm text-neutral-500 mt-2">Offensive Threat Intelligence</p>
<p className="text-xs text-neutral-600 mt-6">© 2025 Dark Vector. All rights reserved.</p>
</div>

<div className="text-left">
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-white hover:text-neutral-400 transition-colors" href="/about">About</a></li>
<li><a className="text-sm text-white hover:text-neutral-400 transition-colors" href="#">Intel</a></li>
<li><a className="text-sm text-white hover:text-neutral-400 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-white hover:text-neutral-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="text-left">
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-2">
<li><a className="text-sm text-white hover:text-neutral-400 transition-colors" href="mailto:intel@darkvector.com">intel@darkvector.com</a></li>
<li><a className="text-sm text-white hover:text-neutral-400 transition-colors" href="#">Schedule a Briefing</a></li>
</ul>
</div>
</div>
</div>
</footer>

    </>
  );
}
