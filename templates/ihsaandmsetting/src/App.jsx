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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-900/10 rounded-full blur-[128px]"></div>
<div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                IhsaanTickets
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full text-xs font-medium transition-all border border-white/5" href="#contact">
                Book a Direct Message
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-16">

<section className="max-w-4xl mx-auto px-6 text-center mb-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting New High-Ticket Clients
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Stop Leaving <span className="text-gradient">Revenue</span> <br/>in the DMs.
            </h1>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">im an up-and-coming high-ticket sales specialist, focused on DM outreach and appointment setting. Right now, I’m doing free work to gain experience and deliver real results for businesses. My goal is to provide quality, intentional, and effective messaging that drives conversations and opportunities.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-white text-neutral-950 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<iconify-icon icon="lucide:calendar-check" strokeWidth="1.5" width="18"></iconify-icon>
                    Hire Me as Your Setter
                </button>
<button className="w-full md:w-auto px-8 py-3.5 rounded-full font-medium text-sm text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    View Case Studies
                </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="process">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl glow hover:border-white/20 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:filter" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Precision Triage</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        I filter through the noise. No more time wasters on your calendar. I identify prospects with the budget and pain points that match your offer.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl glow hover:border-white/20 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-500 relative z-10">
<iconify-icon icon="lucide:messages-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">Nurture &amp; Setter Flow</h3>
<p className="text-sm leading-relaxed text-neutral-400 relative z-10">
                        Using proven scripts and psychological frameworks, I engage your leads, build authority, and bridge the gap between interest and commitment.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl glow hover:border-white/20 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:calendar-check-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Calendar Stacking</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Your closer wakes up to a calendar full of qualified appointments. I handle the booking, reminders, and pre-call framing.
                    </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="bg-neutral-900/30 border border-white/5 rounded-3xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-10 md:p-16 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">
                            The Ihsaan Method
                        </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">1</div>
<div>
<h4 className="text-white font-medium mb-1">Inbound Management</h4>
<p className="text-sm text-neutral-500">Reply to stories, comments, and DMs within 15 minutes.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">2</div>
<div>
<h4 className="text-white font-medium mb-1">Outbound Reactivation</h4>
<p className="text-sm text-neutral-500">Re-engage old leads and follower lists who haven't bought yet.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">3</div>
<div>
<h4 className="text-white font-medium mb-1">The Handover</h4>
<p className="text-sm text-neutral-500">Book directly to your calendar with detailed lead notes.</p>
</div>
</li>
</ul>
</div>
<div className="relative bg-neutral-900/80 border-l border-white/5 min-h-[400px] flex items-center justify-center p-8">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),transparent)]"></div>
<div className="relative w-full max-w-sm bg-neutral-950 rounded-xl border border-white/10 shadow-2xl p-4 space-y-4">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div className="space-y-1">
<div className="bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-2 text-xs text-neutral-400">
                                        Hey! I've been following your content on scaling agencies.
                                    </div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white">IT</div>
<div className="space-y-1 text-right">
<div className="bg-indigo-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-xs text-left inline-block">
                                        Glad it's resonating! What's the biggest bottleneck you're facing right now?
                                    </div>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div className="space-y-1">
<div className="bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-2 text-xs text-neutral-400">
                                        Honestly, just getting consistent leads.
                                    </div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Qualified Lead</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-32 text-center relative" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                Ready to fill your calendar?
            </h2>
<p className="text-neutral-400 mb-10 leading-relaxed font-light">
                I only work with 2-3 high-ticket clients at a time to ensure maximum quality. Let's see if we are a good fit.
            </p>
<form className="space-y-4 max-w-sm mx-auto mb-8 text-left">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">Your Instagram / LinkedIn Handle</label>
<div className="relative">
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-neutral-700" placeholder="@username" type="text"/>
<iconify-icon className="absolute right-3 top-3.5 text-neutral-600" icon="lucide:at-sign" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">Monthly Revenue</label>
<div className="relative">
<div className="flex items-center w-full bg-neutral-900 border border-white/10 rounded-lg p-1">
<button className="flex-1 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all" type="button">&lt; $10k</button>
<button className="flex-1 py-2 text-xs font-medium bg-neutral-800 text-white shadow-sm rounded-md transition-all border border-white/10" type="button">$10k - $50k</button>
<button className="flex-1 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-all" type="button">$50k+</button>
</div>
</div>
</div>
<button className="w-full bg-white text-neutral-950 font-medium py-3 rounded-lg text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Start Conversation
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
<p className="text-xs text-neutral-600">
                No credit card required. Application only.
            </p>
</section>
</main>
<footer className="border-t border-white/5 py-12 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-sm"></span>
<span className="text-sm font-medium text-neutral-300 tracking-tight">IhsaanTickets</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
<p className="text-xs text-neutral-600">
                © 2023 Ihsaan Tickets. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
