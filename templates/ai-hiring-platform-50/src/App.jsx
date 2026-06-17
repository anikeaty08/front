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
      

<div className="fixed inset-0 z-0 grid-bg pointer-events-none opacity-40"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white font-semibold tracking-tighter text-lg" href="#">PICSUME</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#employers">For Employers</a>
<a className="hover:text-white transition-colors" href="#candidates">For Candidates</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Reimagining the Canadian labour market
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Resumes are <span className="text-zinc-600">static.</span><br/>
                Your potential is <span className="text-gradient-brand">dynamic.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Picsume replaces the messy PDF resume with live, data-rich work profiles. 
                We use AI to match real skills to real roles, removing bias and hiring faster.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm">
                    Create Profile
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm">
                    Hiring Solutions
                </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto hidden md:block select-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full"></div>
<div className="grid grid-cols-3 gap-6 relative z-10">

<div className="glass-panel p-6 rounded-2xl opacity-40 scale-95 transform rotate-[-2deg] border-dashed border-zinc-700">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-zinc-700"></div>
<div className="h-2 w-24 bg-zinc-700 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-zinc-800 rounded"></div>
<div className="h-1.5 w-5/6 bg-zinc-800 rounded"></div>
<div className="h-1.5 w-4/6 bg-zinc-800 rounded"></div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800">
<p className="text-xs text-zinc-600 text-center">Static PDF • Outdated</p>
</div>
</div>

<div className="bg-[#0f0f11] border border-indigo-500/30 p-6 rounded-2xl shadow-2xl shadow-indigo-500/10 transform scale-105 z-20">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">JD</div>
<div>
<div className="text-sm text-white font-medium">Jane Doe</div>
<div className="text-xs text-indigo-400">Full Stack Engineer</div>
</div>
</div>
<div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-400 font-medium">Available</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-4">
<div className="bg-zinc-900/50 p-2 rounded border border-white/5">
<div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
<iconify-icon icon="lucide:video" width="12"></iconify-icon>
                                Video Intro
                            </div>
<div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
</div>
<div className="bg-zinc-900/50 p-2 rounded border border-white/5">
<div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon>
                                Verified
                            </div>
<div className="h-1 w-8 bg-indigo-500 rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">React</span>
<span className="text-white">Expert</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1">
<div className="bg-indigo-500 h-1 rounded-full w-[90%]"></div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl transform rotate-[2deg]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-white">Job Match Score</span>
<iconify-icon className="text-amber-400" icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-medium text-white tracking-tighter">96%</span>
<span className="text-xs text-zinc-500 mb-1">Compatibility</span>
</div>
<p className="text-[10px] text-zinc-500 leading-relaxed">
                        Based on skills, availability, and cultural fit parameters.
                    </p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950/50" id="features">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">The hiring stack is broken.</h2>
<p className="text-lg text-zinc-400 font-light">
                        Keyword stuffing and black-box algorithms have made hiring a nightmare. 
                        Picsume fixes it at the source: better data.
                    </p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-zinc-600" icon="lucide:arrow-down-right" width="48"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:user-circle-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Dynamic Identity</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Go beyond bullet points. Add video intros, project highlights, transportation info, and QR codes that link directly to your live profile.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Unbiased Matching</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Our AI focuses on objective factors, not keyword guessing. It scans roles and profiles to find the right fit based on actual capabilities.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layout-list" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Structured Hiring</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        For employers, it's a command center. Gather structured data, track applicants, and manage hiring across multiple locations in one view.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="candidates">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<span className="text-indigo-400 font-medium text-xs tracking-wider uppercase mb-2 block">For Candidates</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">More than a piece of paper.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto lg:h-[400px]">

<div className="lg:col-span-7 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="text-xl font-medium text-white mb-2">Live Work Profile</h3>
<p className="text-sm text-zinc-400 max-w-sm">
                                Embed certifications, availability calendars, and soft skills. Update it once, and it reflects everywhere instantly.
                            </p>
</div>
<div className="mt-8 flex gap-3">
<div className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:video"></iconify-icon> Video Intro
                             </div>
<div className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-300 flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="lucide:award"></iconify-icon> Verified Certs
                             </div>
</div>
</div>

<div className="absolute right-0 bottom-0 w-64 h-48 bg-gradient-to-tl from-zinc-800/30 to-transparent border-t border-l border-white/5 rounded-tl-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
</div>

<div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-white mb-4" icon="lucide:qr-code" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Share anywhere</h3>
<p className="text-sm text-zinc-400">
                            Generate a QR code for your profile. Network in person and let employers scan to see your full potential immediately.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-zinc-900/20" id="employers">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<span className="text-indigo-400 font-medium text-xs tracking-wider uppercase mb-2 block">For Employers</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Replace guesswork with data.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:filter" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Centralized Applicant Hub</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    Stop repetitive posting. Search past candidates for new roles and keep all your applicant data organized in one structured dashboard.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Ranked by Relevance</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    Our AI ranks incoming candidates based on the specific requirements of your role, highlighting the best fits instantly.
                                </p>
</div>
</div>
<div className="pt-4">
<a className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors inline-flex items-center gap-2" href="#">
                                Explore employer tools <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl opacity-40 rounded-full"></div>
<div className="glass-panel rounded-xl border border-white/10 p-1 shadow-2xl bg-[#0B0C10]">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>

<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Frontend Developer Candidates</h3>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded-md font-medium">Filter</button>
</div>

<div className="flex items-center justify-between p-3 mb-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-700"></div>
<div>
<div className="w-24 h-2 bg-zinc-600 rounded mb-1"></div>
<div className="w-16 h-1.5 bg-zinc-700 rounded"></div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-green-400">98% Match</div>
</div>
</div>

<div className="flex items-center justify-between p-3 mb-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800"></div>
<div>
<div className="w-20 h-2 bg-zinc-700 rounded mb-1"></div>
<div className="w-12 h-1.5 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-zinc-500">84% Match</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800"></div>
<div>
<div className="w-24 h-2 bg-zinc-700 rounded mb-1"></div>
<div className="w-14 h-1.5 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-zinc-500">72% Match</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to fix hiring?</h2>
<p className="text-lg text-zinc-400 mb-10">
                Join thousands of candidates and forward-thinking companies building the future of work in Canada.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors">
                    Start for free
                </button>
<button className="w-full sm:w-auto px-8 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-lg block mb-4" href="#">PICSUME</a>
<p className="text-xs text-zinc-500">
                    Proudly built in Canada.<br/>
                    Reimagining how the world hires.
                </p>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Dynamic Profiles</a></li>
<li><a className="hover:text-white transition-colors" href="#">Employer Hub</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI Matching</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left">
<p className="text-[10px] text-zinc-600">© 2023 Picsume Inc. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
