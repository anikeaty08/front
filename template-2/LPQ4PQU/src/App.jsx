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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/aidatamodelinteraction-jipMLzxI5liMrspqcm4GRWTh" width="100%"></iframe></div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a1a2e] opacity-90"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=" cx="30" cy="30" fill="none" fillOpacity="0.03" fillRule="evenodd" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>
</div>

<nav className="relative z-20 animate-slide-up">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6">
<a className="flex items-center gap-3 group" href="#">
<div className="inline-flex w-9 h-9 group-hover:from-cyan-400 group-hover:to-green-500 transition-all duration-300 rounded-xl items-center justify-center bg-gradient-to-tr from-teal-400 to-amber-500">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="font-semibold text-xl tracking-tight font-geist">Nexus</span>
</a>
<ul className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors duration-200 flex items-center gap-1 font-geist" href="#">Product</a></li>
<li><a className="hover:text-white transition-colors duration-200 flex items-center gap-1 font-geist" href="#">Solutions</a></li>
<li><a className="hover:text-white transition-colors duration-200 flex items-center gap-1 font-geist" href="#">Resources <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></a></li>
<li className=""><a className="hover:text-white transition-colors duration-200 flex items-center gap-1 font-geist" href="#">Enterprise</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200 flex items-center gap-1 font-geist" href="#">Pricing</a></li>
</ul>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 font-geist">Sign In</button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-200 text-sm font-medium backdrop-blur-sm">
<span className="hidden sm:inline font-geist">Get Started</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative z-10 flex-grow flex items-center">
<div className="max-w-6xl sm:px-6 sm:py-20 text-center mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="animate-slide-up animate-delay-100">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 text-sm font-medium mb-8">
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<span className="font-geist">Introducing AI-powered scheduling</span>
</div>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-slide-up animate-delay-200 font-jakarta tracking-tight" style={{}}>
        Smart scheduling for
        <br className="hidden sm:block" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-amber-400 font-jakarta tracking-tight" style={{}}>modern teams</span>
</h1>
<p className="sm:text-xl md:text-2xl max-w-3xl leading-relaxed animate-slide-up animate-delay-300 text-lg font-light text-slate-400 tracking-normal font-jakarta mt-8 mr-auto ml-auto" style={{}}>
        Eliminate scheduling chaos with intelligent automation. Nexus learns your team's patterns and preferences to create perfect schedules in seconds.
      </p>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up animate-delay-400">
<div className="flex items-center gap-3 justify-center sm:justify-start">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">AI-powered optimization</span>
</div>
<div className="flex items-center gap-3 justify-center sm:justify-start">
<div className="w-8 h-8 flex bg-slate-400/20 rounded-lg items-center justify-center">
<svg className="lucide lucide-users w-4 h-4 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Team collaboration</span>
</div>
<div className="flex items-center gap-3 justify-center sm:justify-start">
<div className="w-8 h-8 flex bg-red-400/20 rounded-lg items-center justify-center">
<svg className="lucide lucide-shield w-4 h-4 text-purple-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-sm text-slate-300 font-geist">Enterprise security</span>
</div>
</div>

<div className="mt-16 max-w-2xl mx-auto animate-slide-up animate-delay-500">
<form className="flex flex-col sm:flex-row gap-4">
<div className="flex-1 relative">
<input className="w-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent hover:border-white/20 transition-all duration-200 text-base bg-white/5 border-white/10 border rounded-2xl pt-4 pr-6 pb-4 pl-6 backdrop-blur-sm" placeholder="Enter your work email" required type="email" />
</div>
<button className="inline-flex gap-2 hover:from-cyan-400 hover:to-green-500 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-base font-semibold bg-gradient-to-tl from-teal-400 to-blue-500 rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-lg items-center justify-center" type="submit">
<span className="font-geist">Start Free Trial</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</form>
<p className="mt-4 text-sm text-slate-500 font-geist">
          Free 14-day trial • No credit card required • Cancel anytime
        </p>
</div>

<div className="mt-20 relative animate-slide-up animate-delay-600">
<div className="relative mx-auto max-w-6xl">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
<img alt="Nexus Dashboard Interface" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/11d8b4e9-3c24-4be4-a880-488738c97a2b/0_0.png?w=800&q=80" />
</div>
</div>

<div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-20 h-20 sm:w-24 sm:h-24 flex bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-black to-gray-600 rounded-2xl shadow-xl items-center justify-center">
<svg className="lucide lucide-calendar-check sm:w-10 sm:h-10 w-[32px] h-[32px]" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: `32px`, height: `32px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path><path></path></svg>
</div>
<div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 flex bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-slate-900 to-slate-700 rounded-2xl shadow-xl items-center justify-center">
<svg className="lucide lucide-trending-up sm:w-10 sm:h-10 w-[32px] h-[32px]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: `32px`, height: `32px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>

<div className="mt-16 animate-slide-up animate-delay-600">
<p className="text-sm text-slate-500 mb-8 font-geist">Trusted by innovative teams at</p>
<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-green-500 to-amber-500"></div>
<span className="text-sm font-medium font-geist">Velocity</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-amber-500 to-cyan-500"></div>
<span className="text-sm font-medium font-geist">Quantum</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-green-500 to-emerald-500"></div>
<span className="text-sm font-medium font-geist">Synapse</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-r from-green-500 to-cyan-500"></div>
<span className="text-sm font-medium font-geist">Nexus Labs</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="flex flex-col lg:flex-row justify-between gap-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-teal-400 to-amber-500">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="font-semibold text-lg font-geist">Nexus</span>
</div>
<div className="text-sm text-slate-400 font-geist">
            © <span className="font-geist" id="year">2025</span> Nexus Technologies Inc. All rights reserved.
          </div>
</div>
<div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#">Privacy Policy</a>
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#">Terms of Service</a>
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#">Status</a>
<a className="text-slate-400 hover:text-white transition-colors duration-200 font-geist" href="#">Support</a>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
