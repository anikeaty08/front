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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0 opacity-50"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-medium tracking-tighter text-lg flex items-center gap-2 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:bolt-linear" width="20"></iconify-icon>
                indiepreneur
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-zinc-100 transition-colors" href="#stories">Stories</a>
<a className="hover:text-zinc-100 transition-colors" href="#membership">Membership</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:bg-zinc-300 transition-colors text-xs font-medium text-black bg-zinc-100 rounded-full pt-2 pr-4 pb-2 pl-4" href="https://x.com/i/communities/1561640897766256640">
                    Join Community
                </a>
</div>
</div>
</nav>

<main className="md:pt-48 md:pb-32 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-normal text-zinc-300 tracking-wide">Accepting new members!</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">Building<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-200 to-zinc-600">Profitable Digital Businesses.</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-xl mr-auto mb-10 ml-auto">The private network for founders and bootstrappers building sustainable, profitable businesses on their own terms.</p>
<div className="flex items-center justify-center gap-4 max-w-md mx-auto w-full">
<a className="sm:w-auto whitespace-nowrap hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 text-sm font-medium text-black bg-zinc-100 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="https://x.com/i/communities/1561640897766256640" target="_blank">
<iconify-icon className="stroke-[1.5]" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Join the community on X
                </a>
</div>
<p className="mt-8 text-xs text-zinc-600">
                No investors allowed. 100% Bootstrapped.
            </p>
</div>
</main>

<section className="border-y border-white/5 bg-black/40">
</section>



<section className="bg-zinc-900/20 pt-24 pr-6 pb-24 pl-6 relative" id="membership">
<div className="max-w-md mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Lifetime Access</h2>
<p className="text-zinc-400 font-light">Join a high-signal environment. One payment, forever.</p>
</div>
<div className="p-10 rounded-3xl border border-indigo-500/20 bg-black/60 backdrop-blur-sm relative shadow-2xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.5)]">Limited Availability</div>
<div className="flex flex-col items-center mb-8 border-b border-white/5 pb-8">
<h3 className="text-xl font-medium text-white mb-2">Founder Pass</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$299</span>
</div>
<p className="text-xs text-zinc-500 mt-2 uppercase tracking-wide">Pay once, own it forever</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Private Network Group Access</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Feedback on your projects</span>
</li>
<li className="flex gap-3 text-sm text-zinc-300 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-indigo-400 text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Build-in-public culture</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400 text-lg shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Launch Pad Priority Support</span>
</li>
</ul>
<a className="block hover:bg-zinc-200 transition-colors text-sm font-semibold text-black text-center bg-white w-full rounded-xl pt-4 pb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://x.com/i/communities/1561640897766256640">Get Instant Access</a>
</div>
<div className="mt-8 text-center">
<p className="text-xs text-zinc-600">30-day money-back guarantee. Secure payment via Stripe.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-16 px-6 bg-black">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="col-span-2 md:col-span-1">
<a className="text-zinc-100 font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-zinc-500" icon="solar:bolt-linear" width="18"></iconify-icon>
                    indiepreneur
                </a>
<p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">
                    Empowering the next generation of independent business owners.
                    <br/><br/>
                    © 2024 Indiepreneur Inc.
                </p>
</div>
<div className="">
<h4 className="text-zinc-100 text-xs font-medium uppercase tracking-wider mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className=""><a className="hover:text-zinc-300 transition-colors" href="#">Community</a></li>
<li className=""><a className="hover:text-zinc-300 transition-colors" href="#">Events</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Jobs</a></li>
</ul>
</div>
<div className="">
<h4 className="text-zinc-100 text-xs font-medium uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className=""><a className="hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Podcast</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div className="">
<h4 className="text-zinc-100 text-xs font-medium uppercase tracking-wider mb-4">Social</h4>
<div className="flex gap-4">
<a className="hover:text-white transition-colors text-zinc-500" href="https://x.com/i/communities/1561640897766256640">
<svg className="w-[16px] h-[15px]" data-icon-replaced="true" data-icon-set="solar" data-solar="plain-linear" height="15" strokeWidth="2" style={{width: '16px', height: '15px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><path className="" d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z" fill="currentColor"></path></g></svg>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
