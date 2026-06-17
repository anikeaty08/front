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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="serif-font text-2xl tracking-tight text-white hover:text-amber-500 transition-colors" href="#">
                BETROTHED
            </a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#features">Membership</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#event">Event Details</a>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-neutral-950">

<div className="absolute inset-0 z-0">
<div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="fade-in max-w-2xl">
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8">This Isn't Another Dating App</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-lg mb-10">Join our launch and discover faith-aligned matchmaking rooted in biblical principles.
</p>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-amber-700/50"></div>
<p className="text-amber-500 font-medium tracking-widest text-sm uppercase">
                            Launch Night. 27 March. Bushey.
                        </p>
</div>
</div>

<div className="fade-in lg:justify-self-end w-full max-w-md">
<div className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-sm shadow-2xl">
<h3 className="serif-font text-2xl text-white mb-6 tracking-tight">Request Your Launch Night Invite</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider" htmlFor="fname">First Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-700/50 text-white p-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-neutral-700" id="fname" placeholder="James" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider" htmlFor="lname">Last Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-700/50 text-white p-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-neutral-700" id="lname" placeholder="Sterling" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-700/50 text-white p-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-neutral-700" id="email" placeholder="james@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider" htmlFor="phone">Phone</label>
<input className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-700/50 text-white p-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-neutral-700" id="phone" placeholder="+44" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider" htmlFor="faith">Church Background</label>
<input className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-700/50 text-white p-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-neutral-700" id="faith" placeholder="e.g. HTB, Hillsong..." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider" htmlFor="profession">Profession</label>
<input className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-700/50 text-white p-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-neutral-700" id="profession" placeholder="e.g. Architect" type="text"/>
</div>
<button className="w-full bg-white text-black py-4 mt-2 font-medium text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm" type="button">
                                Request My Invite
                            </button>
<p className="text-center text-xs text-neutral-500 pt-2 leading-relaxed">
                                Your details stay private and are only used for Betrothed invitations.
                            </p>
</form>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
<svg className="lucide lucide-arrow-down text-white w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<div className="bg-neutral-900 border-y border-white/5 py-5">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-center text-center">
<p className="text-neutral-400 text-sm tracking-wide flex items-center gap-3">
<svg className="lucide lucide-lock w-3.5 h-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Attendance is limited. All places are invite only.
            </p>
</div>
</div>

<section className="bg-neutral-950 pt-32 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="space-y-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">The Betrothed Launch</h2>
<div className="w-12 h-px bg-amber-500"></div>
<div className="space-y-8 text-lg text-neutral-400 font-light leading-relaxed">
<p className="">
                            An exclusive evening introducing Betrothed, a private Christian matchmaking service for high-flying professionals. In a world of endless swiping and algorithm fatigue, we return to the art of personal introduction.
                        </p>
<p>
                            Meet the founders, learn how the service works, and discover how our rigorous vetting process ensures you only meet people who share your faith and values.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
<div className="border border-white/5 bg-white/[0.02] p-8 hover:border-amber-900/30 transition-colors">
<h4 className="text-amber-500 text-xs uppercase tracking-widest mb-4">When</h4>
<p className="text-xl text-white font-serif italic mb-1">Friday, 27 March</p>
<p className="text-neutral-500">19:00 - 22:30</p>
</div>
<div className="border border-white/5 bg-white/[0.02] p-8 hover:border-amber-900/30 transition-colors">
<h4 className="text-amber-500 text-xs uppercase tracking-widest mb-4">Where</h4>
<p className="text-xl text-white font-serif italic mb-1">The Aldenham Club</p>
<p className="text-neutral-500">Aldenham Rd, Bushey</p>
</div>
<div className="border border-white/5 bg-white/[0.02] p-8 hover:border-amber-900/30 transition-colors sm:col-span-2">
<h4 className="text-amber-500 text-xs uppercase tracking-widest mb-4">Access</h4>
<div className="flex items-center gap-4">
<p className="text-xl text-white font-serif italic">Strictly Invite Only</p>
<span className="h-px flex-grow bg-white/10"></span>
<span className="text-neutral-500 text-sm">Registration Required</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Why Betrothed</h2>
<p className="text-neutral-500 text-lg font-light">A sanctuary for intentional dating in a modern world.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="border-l border-white/10 pl-8 group-hover:border-amber-500 transition-colors duration-500">
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Fully vetted members</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Every client goes through identity, faith, and intention checks before introductions start. Safety and authenticity are paramount.</p>
</div>
</div>

<div className="group">
<div className="border-l border-white/10 pl-8 group-hover:border-amber-500 transition-colors duration-500">
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Personal matching</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Matches are made by people, not software. Every introduction fits faith, values, and life stage, curated by our expert team.</p>
</div>
</div>

<div className="group">
<div className="border-l border-white/10 pl-8 group-hover:border-amber-500 transition-colors duration-500">
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Confidential and discreet</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Your details stay private. No public profiles. No public browsing. Your reputation and privacy are protected at all times.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-24 text-center">
<div className="max-w-4xl mx-auto px-6 space-y-12">
<a className="serif-font text-3xl tracking-tight text-white inline-block" href="#">BETROTHED</a>
<p className="text-neutral-600 text-sm leading-relaxed max-w-md mx-auto">
                Betrothed is a private Christian matchmaking service. All members are vetted. All data is confidential. No public profiles. No advertising.
            </p>
<div className="flex items-center justify-center gap-8 text-sm text-neutral-700 pt-8 w-full">
<span>© 2026 Betrothed. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
