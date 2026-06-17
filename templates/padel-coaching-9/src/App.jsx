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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="bg-glass sticky top-0 z-40">
<div className="container mx-auto px-4 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-white uppercase">
                Tim Jarvis
            </div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors" href="#">Sign In</a>
<a className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2 rounded-full transition-all" href="#pay">Join Now</a>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full radial-glow pointer-events-none"></div>
<div className="container mx-auto px-4 relative z-10 text-center">
<div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs text-white/60 font-medium">New Performance Intake Open</span>
</div>
<p className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">The Performance Blueprint</p>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-5xl mx-auto leading-[1.1] mb-8">
                Improve Your Padel Performance With The Systems I Used To Reach the UK Top 50. Now Used By 100+ Players to Progress Without Wasting Time or Money.
            </h1>
<p className="text-base text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                Reaching your potential game doesn't have to mean watching endless YouTube content, expensive coaching, or years of grinding with no progress. I'll show you how to train the right way and build a complete game from the ground up.
            </p>
<button className="bg-white text-black text-sm font-semibold px-10 py-4 rounded-full hover:bg-gray-200 transition-all tracking-tight uppercase" onclick="document.getElementById('pillars').scrollIntoView({behavior: 'smooth'})">
                Tell me more
            </button>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="container mx-auto px-4">
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">LTA Qualified Padel Coach</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:calendar-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">3+ Years Coaching Experience</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Team GB Junior World Champs</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:star-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">M3 PadelFit Certified</span>
</div>
</div>
</div>
</section>

<section className="py-32" id="pillars">
<div className="container mx-auto px-4">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
                    Master The 3 Pillars of Elite Padel: Technique, Tactics and Movement to Stop Losing Winnable Matches and Start Dominating Your Friends.
                </h2>
<div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
<div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:map-arrow-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Tactics</h3>
<p className="text-sm text-white/50 leading-relaxed">Learn the court positioning and shot selection used at the professional level to dominate your matches and out-think your opponents.</p>
</div>

<div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
<div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Technique</h3>
<p className="text-sm text-white/50 leading-relaxed">Break down the mechanics of the Bandeja, Vibora, and Volleys with step-by-step drills designed for rapid improvement.</p>
</div>

<div className="bg-zinc-950 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
<div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:running-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Movement</h3>
<p className="text-sm text-white/50 leading-relaxed">Specific footwork patterns and explosive conditioning tailored for the Padel court to reach every ball with balance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/50">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight">My Reviews</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl relative">
<iconify-icon className="absolute top-6 right-8 text-white/10" icon="solar:quote-down-linear" width="40"></iconify-icon>
<p className="text-sm text-white/70 italic leading-relaxed mb-6">
                        "I'd been playing for a year and completely plateaued. Tim showed me I wasn't improving because I was just playing — not training with any structure. Within 8 weeks I went from struggling at beginner level to holding my own in intermediate games. Best investment I've made in my padel journey."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">JR</div>
<span className="text-xs font-semibold tracking-wide">James R.</span>
</div>
</div>

<div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl relative">
<iconify-icon className="absolute top-6 right-8 text-white/10" icon="solar:quote-down-linear" width="40"></iconify-icon>
<p className="text-sm text-white/70 italic leading-relaxed mb-6">
                        "I came to Tim frustrated. I was losing matches I knew I should be winning. He stripped everything back, fixed the fundamentals I'd been ignoring, and built my game back up properly. Two months later I won my first tournament. I genuinely couldn't believe it."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">SM</div>
<span className="text-xs font-semibold tracking-wide">Sophie M.</span>
</div>
</div>

<div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl relative">
<iconify-icon className="absolute top-6 right-8 text-white/10" icon="solar:quote-down-linear" width="40"></iconify-icon>
<p className="text-sm text-white/70 italic leading-relaxed mb-6">
                        "I'd been watching YouTube videos trying to figure out the bandeja for months. One session with Tim and it clicked completely. He has a way of breaking technique down that just makes sense instantly. Wish I'd found him sooner."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">CD</div>
<span className="text-xs font-semibold tracking-wide">Carlos D.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pay">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Select Your Program</h2>
<p className="text-sm text-white/50">Invest in your game and see immediate results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col hover:border-white/20 transition-colors">
<div className="mb-8">
<h3 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">Library Access</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-semibold tracking-tighter text-white">£149</span>
<span className="text-sm text-white/40 line-through">£249</span>
</div>
</div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex gap-3 text-sm text-white/70">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Lifetime access to the Drill Library
                        </li>
<li className="flex gap-3 text-sm text-white/70">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            50+ Technical Video Breakdown
                        </li>
</ul>
<a className="w-full py-4 bg-white text-black text-center rounded-full text-sm font-semibold hover:bg-gray-200 transition-all" href="#">Get Started</a>
</div>

<div className="bg-black border border-blue-600/40 rounded-3xl p-8 flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Limited Intake</div>
<div className="mb-8">
<h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-widest">Mentorship</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-semibold tracking-tighter text-white">£499</span>
</div>
</div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex gap-3 text-sm text-white/70">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Personalised Video Analysis
                        </li>
<li className="flex gap-3 text-sm text-white/70">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Monthly 1-1 Zoom Coaching Call
                        </li>
</ul>
<a className="w-full py-4 bg-blue-600 text-white text-center rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20" href="#">Apply Now</a>
</div>
</div>
</div>
</section>

<footer className="py-20 border-t border-white/5">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
<div className="text-xl font-semibold tracking-tighter text-white uppercase">
                    Tim Jarvis
                </div>
<div className="flex gap-8 text-xs font-medium text-white/40 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">YouTube</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em]">
                © 2026 Tim Jarvis Padel Performance.
            </div>
</div>
</footer>

    </>
  );
}
