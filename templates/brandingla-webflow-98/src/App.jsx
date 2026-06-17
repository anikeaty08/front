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
DEFAULT: '#FF5E1E', // Brandinglab Orange
dim: '#CC4008',
glow: 'rgba(255, 94, 30, 0.15)'
},
dark: {
900: '#050505',
800: '#0A0A0A',
700: '#121212',
border: '#222222'
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
}
}
}
}



        // Icons
        lucide.createIcons();

        // Modal Logic
        function openModal() {
            document.getElementById('contactModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('contactModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close on Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand/5 blur-[120px] rounded-full opacity-50"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-900/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-white font-medium tracking-tight text-lg group" href="#">
<div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center text-white">
<span className="font-bold text-xs">B</span>
</div>
                Brandinglab
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#problems">The Problem</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#solution">Our Approach</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#process">Process</a>
</div>
<button className="hidden md:flex bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded text-xs font-medium transition-all" onclick="openModal()">
                Book Teardown
            </button>
</div>
</nav>
<main className="z-10 pt-32 pb-24 relative">

<div className="absolute top-0 right-0 -z-10 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] translate-x-1/4 -translate-y-1/4 opacity-30 pointer-events-none select-none mix-blend-screen blur-3xl">
<img alt="Background Graphic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80" style={{animation: 'drift 30s infinite ease-in-out alternate'}}/>
<style>
                @keyframes drift {
                    0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                    33% { transform: translate(-40px, 30px) rotate(8deg) scale(1.05); }
                    66% { transform: translate(20px, -20px) rotate(-4deg) scale(0.95); }
                    100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                }
             </style>
</div>

<section className="max-w-4xl mx-auto px-6 mb-32 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                Founder-led • Accredited Webflow Partner
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-white">
                Your website shouldn’t <br className="hidden md:block"/>
<span className="text-zinc-500">slow your startup down.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl leading-relaxed mb-10 md:mr-auto">
                We help Israeli SaaS, Cyber, and Fintech startups fix unclear messaging, slow conversions, and engineering-dependent websites using scalable Webflow systems.
            </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<button className="w-full sm:w-auto bg-brand hover:bg-brand-dim text-white px-6 py-3.5 rounded-md text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,94,30,0.3)] hover:shadow-[0_0_30px_rgba(255,94,30,0.5)] flex items-center justify-center gap-2" onclick="openModal()">
                    Get a 10-minute website teardown
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center gap-2 px-4 py-3.5 text-xs text-zinc-500 font-medium">
<svg className="lucide lucide-check w-3 h-3 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Built for growth-stage startups
                </div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="problems">
<div className="border-l border-white/10 pl-6 mb-12">
<h2 className="text-2xl font-medium text-white mb-2">Most startup websites break</h2>
<p className="text-zinc-500">As soon as the company starts growing, the friction begins.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group glass-panel hover:border-white/20 transition-all rounded-lg pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4 text-brand">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Engineering Dependency</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Marketing is blocked because every text change or landing page requires a developer ticket and a sprint cycle.
                    </p>
</div>

<div className="group p-6 glass-panel rounded-lg hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4 text-brand">
<svg className="lucide lucide-message-square-warning w-5 h-5" data-lucide="message-square-warning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 15h.01"></path><path d="M12 7v4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Unclear Messaging</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                        The site explains the product features perfectly but fails to explain the value, causing low conversion rates.
                    </p>
</div>

<div className="group p-6 glass-panel rounded-lg hover:border-white/20 transition-all">
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mb-4 text-brand">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Unscalable Structure</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Landing pages take weeks instead of hours. There is no clear system for demos, use cases, or hiring.
                    </p>
</div>
</div>
</section>

<section className="bg-white/5 border-y border-white/5 py-24 mb-32 relative overflow-hidden" id="solution">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                    This isn’t a design problem. <br/>
<span className="text-zinc-500">It’s a systems problem.</span>
</h2>
<p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                    We don’t just redesign websites. We rebuild them as modular Webflow systems so marketing teams can move fast without pulling engineers off product work.
                </p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
<div className="grid grid-cols-4 gap-4 h-full">
<div className="border border-white rounded-md"></div>
<div className="border border-white rounded-md col-span-2"></div>
<div className="border border-white rounded-md"></div>
<div className="border border-white rounded-md col-span-2"></div>
<div className="border border-white rounded-md"></div>
<div className="border border-white rounded-md"></div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="text-2xl font-medium text-white mb-8">What we help startups do</h2>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-dark-800 group-hover:border-brand transition-colors">
<div className="w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div>
<h4 className="text-white font-medium text-base">Rebuild for speed and ownership</h4>
<p className="text-sm text-zinc-500 font-light mt-1">Migration to Webflow so marketing owns the site entirely.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-dark-800 group-hover:border-brand transition-colors">
<div className="w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="">
<h4 className="text-white font-medium text-base">Clarify complex messaging</h4>
<p className="text-sm text-zinc-500 font-light mt-1">Simplifying the value prop for SaaS and Security products.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-dark-800 group-hover:border-brand transition-colors">
<div className="w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div>
<h4 className="text-white font-medium text-base">Create scalable page systems</h4>
<p className="text-sm text-zinc-500 font-light mt-1">Modular blocks for demos, use cases, and growth campaigns.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-dark-800 group-hover:border-brand transition-colors">
<div className="w-1.5 h-1.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div>
<h4 className="text-white font-medium text-base">Remove engineering dependency</h4>
<p className="text-sm text-zinc-500 font-light mt-1">Engineers focus on product; Marketers focus on growth.</p>
</div>
</div>
</div>
</div>

<div className="relative glass-panel rounded-xl p-8 border border-white/10 h-full min-h-[300px] flex flex-col justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent rounded-xl"></div>
<div className="space-y-3 relative z-10">
<div className="h-2 w-1/3 bg-zinc-700 rounded-full mb-6"></div>
<div className="flex gap-3">
<div className="h-24 w-full bg-zinc-800/50 rounded border border-white/5"></div>
<div className="h-24 w-full bg-zinc-800/50 rounded border border-white/5"></div>
</div>
<div className="h-32 w-full bg-zinc-800/50 rounded border border-white/5"></div>
</div>
<div className="mt-6 flex justify-between items-center relative z-10">
<span className="text-xs font-mono text-brand">System: Active</span>
<span className="text-xs font-mono text-zinc-600">v2.4.0</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-2xl font-medium text-white mb-2">Selected Systems</h2>
<p className="text-zinc-500 max-w-md">Recent work for high-growth technical teams.</p>
</div>
<a className="text-xs text-brand font-medium hover:text-white transition-colors flex items-center gap-1" href="#">
                    View full archive <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative block rounded-xl overflow-hidden border border-white/10 bg-dark-800">
<div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
<img alt="Fintech Dashboard" className="group-hover:scale-105 transition-transform duration-700 ease-out group-hover:grayscale-0 opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c442149d-b4d9-48f3-be28-6d3addbc7047_1600w.webp"/>
<div className="image-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-brand/20 text-brand border border-brand/20">Fintech</span>
<span className="text-[10px] text-zinc-400 font-mono">Series B</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-brand transition-colors">Novus Financial</h3>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Complete migration from React to Webflow. Reduced dependency on engineering by 100%.</p>
</div>
</div>

<div className="group relative block rounded-xl overflow-hidden border border-white/10 bg-dark-800">
<div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
<img alt="Cybersecurity Interface" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558494949-efc535b5c479?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="image-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-blue-500/20 text-blue-400 border border-blue-500/20">Cybersecurity</span>
<span className="text-[10px] text-zinc-400 font-mono">Seed</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-brand transition-colors">Ironclad Security</h3>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Brand refresh and marketing site for a cloud infrastructure security platform.</p>
</div>
</div>

<div className="group relative block rounded-xl overflow-hidden border border-white/10 bg-dark-800">
<div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
<img alt="DevOps Tool" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1614064641938-3e852994b1cd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-gradient"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">DevTools</span>
<span className="text-[10px] text-zinc-400 font-mono">Series A</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-brand transition-colors">DeployStack</h3>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Scalable CMS architecture for documentation, changelogs, and integrations.</p>
</div>
</div>

<div className="group block overflow-hidden border-white/10 border rounded-xl relative">
<div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
<img alt="SaaS Analytics" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="image-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-purple-500/20 text-purple-400 border border-purple-500/20">SaaS</span>
<span className="text-[10px] text-zinc-400 font-mono">Growth</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-brand transition-colors">MetricFlow</h3>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Component-driven design system implemented in Webflow for rapid landing page creation.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-32">
<div className="glass-panel rounded-xl p-8 md:p-12 border border-white/10 relative">
<div className="md:flex justify-between items-start gap-12">
<div className="md:w-1/2 mb-8 md:mb-0">
<h3 className="text-xl font-medium text-white mb-4">We work best with</h3>
<p className="text-sm text-zinc-400 font-light mb-6">If this sounds like you, you’re in the right place.</p>
<div className="h-px w-12 bg-brand"></div>
</div>
<div className="md:w-1/2">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Israeli SaaS, Cyber, and Fintech startups
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Seed to Series B companies
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Teams selling internationally (US/EU)
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Founders who value clarity over fluff
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-zinc-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Marketing teams blocked by slow websites
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 text-center mb-24" id="process">
<h2 className="text-3xl font-medium text-white mb-4">Start with a short teardown</h2>
<p className="text-zinc-400 font-light mb-8">
                The first step is a 10-minute website teardown showing what’s unclear, where conversions leak, and how structure can improve. No obligation. No pitch deck.
            </p>
<button className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-md text-sm font-medium transition-all shadow-lg shadow-white/5" onclick="openModal()">
                Get a 10-minute website teardown
            </button>
</section>

<footer className="border-t border-white/5 pt-12 pb-8 bg-dark-900">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-left">
<span className="text-white font-medium tracking-tight text-lg block mb-1">Brandinglab</span>
<p className="text-xs text-zinc-600">© 2023 Brandinglab Studio. All rights reserved.</p>
</div>
<div className="flex gap-8 text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-2">
<svg className="lucide lucide-badge-check w-3 h-3" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Accredited Webflow Partner
                    </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Founder-led Studio
                    </span>
<span>SaaS &amp; Cyber Specialists</span>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[100] hidden" id="contactModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
<div className="bg-dark-800 border border-white/10 rounded-xl p-8 shadow-2xl relative">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white" onclick="closeModal()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<h3 className="text-xl font-medium text-white mb-2">Request a Teardown</h3>
<p className="text-sm text-zinc-400 font-light mb-6">Leave your details and we'll send a 10-minute video analysis of your current site.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Request sent! We will be in touch shortly.'); closeModal();">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Work Email</label>
<input className="w-full bg-dark-900 border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors placeholder:text-zinc-700" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Website URL</label>
<input className="w-full bg-dark-900 border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors placeholder:text-zinc-700" placeholder="https://company.com" required="" type="url"/>
</div>
<button className="w-full bg-brand hover:bg-brand-dim text-white py-2.5 rounded text-sm font-medium transition-colors mt-2" type="submit">
                        Request Teardown
                    </button>
</form>
</div>
</div>
</div>


    </>
  );
}
