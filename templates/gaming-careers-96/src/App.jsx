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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-zinc-950 font-bold text-xs">U</div>
                UPGAMING
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Culture</a>
<a className="hover:text-white transition-colors" href="#">Teams</a>
<a className="text-white" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Stories</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-zinc-950 text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#roles">
                View Roles
            </a>
<button className="md:hidden text-zinc-400">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                We are hiring for 12 open positions
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 animate-fade-in" style={{animationDelay: '100ms'}}>
                Your Place in the <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">LineUP</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in" style={{animationDelay: '200ms'}}>
                In the gaming world, every pixel counts. At Upgaming, every person counts. Everyone has a role, and every role matters.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '300ms'}}>
<a className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-950 font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#roles">
                    Explore Open Roles
                    <i className="w-4 h-4" data-lucide="arrow-down"></i>
</a>
<a className="w-full sm:w-auto px-6 py-3 border border-zinc-800 text-zinc-300 font-medium text-sm rounded-lg hover:border-zinc-600 hover:text-white transition-all bg-zinc-900/30" href="#culture">
                    Why Upgaming?
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950" id="culture">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Why step into the LineUP?</h2>
<p className="text-zinc-400 font-light text-lg">We’re building more than just gaming products. We’re building an ecosystem where talent thrives without ego.</p>
</div>
<a className="text-sm font-medium text-white border-b border-zinc-700 pb-1 hover:border-white transition-colors flex items-center gap-1 group" href="#">
                    Read our full culture manifesto 
                    <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Real Impact</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Work on products used by millions. Your code, designs, and strategies directly shape the global gaming landscape.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">International Reach</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We operate across borders. Join a diverse, multicultural team that brings global perspectives to every challenge.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-400 transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Zero-Ego Environment</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Best ideas win. We value collaborative problem solving over hierarchy. Support, not competition.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20 border-t border-zinc-900">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Built for your well-being</h2>
<p className="text-zinc-400">We provide the tools and support you need to perform at your best, inside and outside the office.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors text-center flex flex-col items-center">
<i className="w-6 h-6 text-rose-400 mb-3" data-lucide="heart"></i>
<span className="text-sm font-medium text-zinc-300">Health Insurance</span>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors text-center flex flex-col items-center">
<i className="w-6 h-6 text-blue-400 mb-3" data-lucide="clock"></i>
<span className="text-sm font-medium text-zinc-300">Flexible Hours</span>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors text-center flex flex-col items-center">
<i className="w-6 h-6 text-amber-400 mb-3" data-lucide="trophy"></i>
<span className="text-sm font-medium text-zinc-300">Sports &amp; Clubs</span>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors text-center flex flex-col items-center">
<i className="w-6 h-6 text-zinc-400 mb-3" data-lucide="monitor"></i>
<span className="text-sm font-medium text-zinc-300">Top Gear</span>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors text-center flex flex-col items-center">
<i className="w-6 h-6 text-orange-400 mb-3" data-lucide="coffee"></i>
<span className="text-sm font-medium text-zinc-300">Office Perks</span>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors text-center flex flex-col items-center">
<i className="w-6 h-6 text-emerald-400 mb-3" data-lucide="book-open"></i>
<span className="text-sm font-medium text-zinc-300">Learning Budget</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-900">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">The Journey to Join Us</h2>
<div className="relative">

<div className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-zinc-800 -z-10"></div>

<div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-800 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">

<div className="relative pl-16 md:pl-0 md:pt-16">
<div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full border-2 border-zinc-700 bg-zinc-950 text-[10px] font-bold text-zinc-500 flex items-center justify-center">1</div>
<h4 className="text-sm font-medium text-white mb-2 md:text-center">Application</h4>
<p className="text-xs text-zinc-500 md:text-center">We review your CV and portfolio to see the match.</p>
</div>

<div className="relative pl-16 md:pl-0 md:pt-16">
<div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full border-2 border-zinc-700 bg-zinc-950 text-[10px] font-bold text-zinc-500 flex items-center justify-center">2</div>
<h4 className="text-sm font-medium text-white mb-2 md:text-center">Intro Call</h4>
<p className="text-xs text-zinc-500 md:text-center">A quick chat with HR to align on expectations and culture.</p>
</div>

<div className="relative pl-16 md:pl-0 md:pt-16">
<div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full border-2 border-zinc-700 bg-zinc-950 text-[10px] font-bold text-zinc-500 flex items-center justify-center">3</div>
<h4 className="text-sm font-medium text-white mb-2 md:text-center">Skill Check</h4>
<p className="text-xs text-zinc-500 md:text-center">Technical interview or take-home assignment.</p>
</div>

<div className="relative pl-16 md:pl-0 md:pt-16">
<div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full border-2 border-zinc-700 bg-zinc-950 text-[10px] font-bold text-zinc-500 flex items-center justify-center">4</div>
<h4 className="text-sm font-medium text-white mb-2 md:text-center">Final Interview</h4>
<p className="text-xs text-zinc-500 md:text-center">Meet the team leads and dive deeper into the role.</p>
</div>

<div className="relative pl-16 md:pl-0 md:pt-16">
<div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full border-2 border-indigo-500 bg-indigo-500 text-[10px] font-bold text-white flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<h4 className="text-sm font-medium text-white mb-2 md:text-center">The Offer</h4>
<p className="text-xs text-zinc-500 md:text-center">Welcome to the LineUP! Onboarding begins.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="roles">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
<h2 className="text-3xl font-medium tracking-tight text-white">Open Roles</h2>

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative">
<select className="custom-select w-full sm:w-40 appearance-none bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-zinc-600 transition-colors">
<option>Department</option>
<option>Engineering</option>
<option>Product</option>
<option>Marketing</option>
<option>Design</option>
</select>
</div>
<div className="relative">
<select className="custom-select w-full sm:w-40 appearance-none bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-zinc-600 transition-colors">
<option>Location</option>
<option>Remote</option>
<option>London, UK</option>
<option>Tbilisi, GE</option>
</select>
</div>
<div className="relative">
<select className="custom-select w-full sm:w-40 appearance-none bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-zinc-600 transition-colors">
<option>Seniority</option>
<option>Junior</option>
<option>Mid-Level</option>
<option>Senior</option>
<option>Lead</option>
</select>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4">

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-600 transition-all duration-200">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-medium text-white">Senior Frontend Engineer</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Engineering</span>
</div>
<p className="text-sm text-zinc-400 max-w-2xl mb-4 md:mb-0">
                            Build scalable, high-performance web applications using Vue.js and Tailwind. Lead architectural decisions for our core betting platform.
                        </p>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="hidden md:flex flex-col items-end text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Remote / London</span>
<span className="mt-1">Full-time</span>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors">
                            View Role
                        </button>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-600 transition-all duration-200">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-medium text-white">Product Designer</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Design</span>
</div>
<p className="text-sm text-zinc-400 max-w-2xl mb-4 md:mb-0">
                            Shape the visual language of Upgaming. Work closely with product managers to create intuitive user flows for complex data systems.
                        </p>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="hidden md:flex flex-col items-end text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Tbilisi, GE</span>
<span className="mt-1">Full-time</span>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-zinc-800 text-white border border-zinc-700 text-sm font-medium rounded-lg group-hover:bg-zinc-700 transition-colors">
                            View Role
                        </button>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-600 transition-all duration-200">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-medium text-white">DevOps Engineer</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Engineering</span>
</div>
<p className="text-sm text-zinc-400 max-w-2xl mb-4 md:mb-0">
                            Automate deployment pipelines and ensure 99.99% uptime. Experience with Kubernetes, AWS, and Terraform required.
                        </p>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="hidden md:flex flex-col items-end text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Remote</span>
<span className="mt-1">Full-time</span>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-zinc-800 text-white border border-zinc-700 text-sm font-medium rounded-lg group-hover:bg-zinc-700 transition-colors">
                            View Role
                        </button>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-600 transition-all duration-200">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-medium text-white">Head of Marketing</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">Marketing</span>
</div>
<p className="text-sm text-zinc-400 max-w-2xl mb-4 md:mb-0">
                            Drive global brand strategy and user acquisition. Manage a team of 10+ creatives and performance marketers.
                        </p>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="hidden md:flex flex-col items-end text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> London, UK</span>
<span className="mt-1">Full-time</span>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-zinc-800 text-white border border-zinc-700 text-sm font-medium rounded-lg group-hover:bg-zinc-700 transition-colors">
                            View Role
                        </button>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<p className="text-zinc-500 text-sm mb-4">Don't see your perfect role?</p>
<a className="inline-flex items-center gap-2 text-sm text-white border-b border-zinc-700 hover:border-white transition-colors pb-1" href="#">
                Send us an open application
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-800/60 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-zinc-950 font-bold text-[10px]">U</div>
<span className="text-sm font-semibold text-white tracking-tight">UPGAMING</span>
</div>
<div className="text-xs text-zinc-500">
                © 2023 Upgaming. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</footer>


    </>
  );
}
