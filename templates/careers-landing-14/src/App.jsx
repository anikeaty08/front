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
      

<header className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900 group-hover:opacity-70 transition-opacity">
                    UPGAMING
                </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Stories</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Life</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Teams</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Growth</a>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">All Jobs</a>
</nav>

<button className="md:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</header>

<main className="pt-16">
<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        We are hiring
                    </span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Step into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">LineUP</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                        More than a team, the LineUP is our collective identity. It’s where shared ambition meets individual growth in a culture built on energy, connection, and impact.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
<a className="h-12 px-8 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2" href="#">
                            Join the LineUP
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="h-12 px-8 rounded-full bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2" href="#">
                            Explore All Jobs
                        </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-300" style={{animationFillMode: 'forwards'}}>
<div className="space-y-4 md:space-y-8 translate-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
<img alt="Team meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 md:space-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
<img alt="Office vibe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 md:space-y-8 translate-y-12">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
<img alt="Collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 md:space-y-8 translate-y-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
<img alt="Working together" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="iconify text-slate-400 mb-6 mx-auto" data-icon="lucide:fingerprint" data-width="40"></span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Who We Are</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-10 font-light">
                    At Upgaming, we don't just build products; we build ecosystems. Our culture is rooted in a people-first philosophy where autonomy is encouraged, and innovation is a daily habit. We believe that when you align passion with purpose, you don't just work—you belong.
                </p>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all" href="#">
                    Learn about our identity
                </a>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Open Roles</h2>
<p className="text-slate-500 text-sm">Join the team building the future.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center gap-1" href="#">
                        View all open roles
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 block" href="#">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:code-2" data-width="24"></span>
<span className="text-xs font-medium text-slate-400 border border-slate-100 px-2 py-1 rounded bg-slate-50">Remote</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Senior Frontend Engineer</h3>
<p className="text-sm text-slate-500 mb-6">Product Engineering</p>
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
<span>Full-time</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Europe</span>
</div>
</a>

<a className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 block" href="#">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:pen-tool" data-width="24"></span>
<span className="text-xs font-medium text-slate-400 border border-slate-100 px-2 py-1 rounded bg-slate-50">Hybrid</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Product Designer</h3>
<p className="text-sm text-slate-500 mb-6">Design Systems</p>
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
<span>Full-time</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Tbilisi</span>
</div>
</a>

<a className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 block" href="#">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:bar-chart-3" data-width="24"></span>
<span className="text-xs font-medium text-slate-400 border border-slate-100 px-2 py-1 rounded bg-slate-50">On-site</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Marketing Manager</h3>
<p className="text-sm text-slate-500 mb-6">Growth</p>
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
<span>Full-time</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Malta</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Where the LineUP grows</h2>
<p className="text-slate-400 mb-8 max-w-md font-light">
                            From vibrant city hubs to remote workspaces, our footprint is global. We are united by culture, not just geography.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-white">Tbilisi, Georgia</h4>
<p className="text-xs text-slate-400">HQ &amp; Engineering Hub</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-white">Sliema, Malta</h4>
<p className="text-xs text-slate-400">Business Operations</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<span className="iconify" data-icon="lucide:globe" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-white">Remote</h4>
<p className="text-xs text-slate-400">Worldwide</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] bg-slate-800/50 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-20">
<svg className="w-full h-full" viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
<path d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150" fill="none" stroke="white" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="200" cy="200" fill="white" fillOpacity="0.05" r="100"></circle>
<circle cx="600" cy="150" fill="white" fillOpacity="0.05" r="80"></circle>
</svg>
</div>

<div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-3 h-3 bg-blue-500 rounded-full relative pulse-dot text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
<span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity absolute top-6 whitespace-nowrap bg-slate-900 px-2 py-1 rounded border border-slate-700">Tbilisi</span>
</div>

<div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-3 h-3 bg-purple-500 rounded-full relative pulse-dot text-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
<span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity absolute top-6 whitespace-nowrap bg-slate-900 px-2 py-1 rounded border border-slate-700">Malta</span>
</div>

<div className="absolute top-[35%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-2 h-2 bg-slate-400 rounded-full opacity-50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col md:flex-row">
<div className="md:w-1/2 relative min-h-[300px]">
<img alt="Employee Story" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>
<div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-slate-400"></span>
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Employee Spotlight</span>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                            "The LineUP gave me the space to fail, learn, and eventually lead."
                        </h2>
<p className="text-slate-500 mb-8 leading-relaxed font-light">
                            Elena shares her journey from a Junior QA to leading the Automation department, and how the culture at Upgaming supported her every step of the way.
                        </p>
<div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 border-b border-slate-300 pb-0.5 hover:border-slate-900 transition-all" href="#">
                                Read the story
                                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 text-center px-6">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Ready to find your place in the LineUP?</h2>
<p className="text-slate-500 mb-10 text-lg font-light">Join a team that values your voice, your growth, and your impact.</p>
<a className="inline-flex h-12 px-8 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all items-center gap-2 shadow-lg shadow-slate-200" href="#">
                    Join the LineUP
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</section>
</main>

<footer className="border-t border-slate-100 py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-semibold tracking-tighter text-slate-900">UPGAMING</span>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-slate-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-slate-900 transition-colors" href="#">Glassdoor</a>
</div>
<p className="text-xs text-slate-400">© 2023 Upgaming. All rights reserved.</p>
</div>
</footer>
<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
