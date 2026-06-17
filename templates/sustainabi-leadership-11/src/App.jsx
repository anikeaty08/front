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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-purple-600 rounded-full blur-[1px]"></div>
<span className="text-sm tracking-tight text-white font-medium uppercase">The Sustainability Circle</span>
</div>
<a className="hidden sm:inline-flex text-xs font-medium bg-white/10 hover:bg-white/15 border border-white/10 text-white px-4 py-2 rounded-full transition-colors" href="#apply">
                Member Login
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                Accepting Applications: European Cohort Q3
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                The Unfair Advantage for <br className="hidden md:block"/>
<span className="text-gradient">European Sustainability Leaders</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                You could spend €20,000 and 3 months hiring a consultant to tell you what <span className="text-white italic">might</span> work. Or you can join a community of European Executives sharing exactly what <span className="text-white italic">did</span> work.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#apply">
                    Apply to Join the Council
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<span className="text-slate-500 text-xs sm:hidden">or</span>
<div className="flex items-center gap-6 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-purple-400" icon="lucide:shield-check"></iconify-icon> Senior Leaders Only</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-purple-400" icon="lucide:lock"></iconify-icon> 100% Confidential</span>
</div>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto h-64 md:h-96 w-full opacity-60 pointer-events-none select-none">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-purple-500/20 float-anim" style={{animationDelay: '0s'}}></div>
<div className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-purple-400/20 rotate-12 float-anim" style={{animationDelay: '1s'}}></div>
<div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-purple-300/20 -rotate-12 float-anim" style={{animationDelay: '2s'}}></div>

<div className="absolute w-24 h-24 bg-purple-600/30 blur-[40px] rounded-full"></div>
</div>

<svg className="absolute inset-0 w-full h-full text-purple-900/30" height="100%" width="100%">
<line stroke="currentColor" strokeWidth="1" x1="10%" x2="50%" y1="80%" y2="50%"></line>
<line stroke="currentColor" strokeWidth="1" x1="90%" x2="50%" y1="20%" y2="50%"></line>
<line stroke="currentColor" strokeWidth="1" x1="80%" x2="50%" y1="80%" y2="50%"></line>
<line stroke="currentColor" strokeWidth="1" x1="20%" x2="50%" y1="20%" y2="50%"></line>
</svg>
</div>
</header>

<section className="py-24 bg-slate-950 border-t border-white/5 relative">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 mb-6 text-purple-400 text-xs font-medium uppercase tracking-widest">
<iconify-icon icon="lucide:alert-circle"></iconify-icon> The Isolation of the Pioneer
                </div>
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                    Fighting for the future <br/>of your company.
                </h2>
<p className="text-slate-400 leading-relaxed mb-6">
                    But who is fighting for you? Being a CSO is often the loneliest job in the C-suite. You are pushing against inertia, navigating complex EU directives, and trying to drive change—often without a true peer to talk to.
                </p>
<p className="text-slate-400 leading-relaxed">
                    When you hit a wall, you likely fall into the "Research Trap": spending weeks Googling or hiring expensive consultants who hand you theory, not empathy.
                </p>
</div>
<div className="glass-card p-8 rounded-2xl relative">
<div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600/20 blur-[30px] rounded-full"></div>
<h3 className="text-white font-medium mb-6 text-lg">The Cost of Doing It Alone</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon icon="lucide:x" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Hundreds of hours of wasted groundwork reinventing the wheel.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon icon="lucide:x" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300">High risk of strategy failure (and personal burnout).</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<iconify-icon icon="lucide:x" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300">No one to validate your decisions before you pitch the Board.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center mb-16">
<h2 className="text-sm font-medium text-purple-400 mb-4 uppercase tracking-widest">The Mechanism</h2>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Enter: The Hive Mind</h3>
<p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                We don't teach you theory. We connect you with the allies who have the answers. Hindsight as a Service.
            </p>
</div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-3">10 Strategy Sessions</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                    Over 6 months, meet for 10 high-impact strategy sessions (60 mins each). You bring a challenge, the group gives you the solution they already built.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:award" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-3">Curated for Seniority</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                    No juniors. No sales pitches. A "Cheat Code" for your career connecting you with peers of equal or higher caliber.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:globe-2" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-3">European Focus</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                    Directly addressing EU directives and the specific regulatory landscape of the European market.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden bg-[#050507]">

<div className="p-10 border-b md:border-b-0 md:border-r border-white/10 relative">
<div className="absolute top-6 right-6 text-slate-600 text-xs font-medium uppercase tracking-wider">Before</div>
<div className="mt-8">
<div className="text-slate-500 mb-4">
<iconify-icon icon="lucide:message-square" width="24"></iconify-icon>
</div>
<p className="text-lg text-slate-400 italic font-light">
                            "I need to figure out how to implement CSRD reporting from scratch. I have no idea where to start."
                        </p>
</div>
</div>

<div className="p-10 relative bg-gradient-to-br from-purple-900/10 to-transparent">
<div className="absolute top-6 right-6 text-purple-400 text-xs font-medium uppercase tracking-wider">After 1 Hour Call</div>
<div className="mt-8">
<div className="text-purple-400 mb-4">
<iconify-icon icon="lucide:check-circle-2" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium">
                            "Here is the exact framework I used last quarter, the mistakes I made, and the vendor I recommend avoiding."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">The Inner Circle.</h2>
<p className="text-slate-400 text-lg font-light">Architects of the Future.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="glass-card p-8 rounded-2xl md:col-span-2 flex flex-col justify-center relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium mb-4">We Understand You.</h3>
<p className="text-slate-400 max-w-md">
                            Finally, a room where you don't have to explain the basics. Connect with peers who speak your language, understand your pressure, and have your back.
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
<iconify-icon className="text-purple-400 text-3xl" icon="lucide:bar-chart-2"></iconify-icon>
<div>
<h3 className="text-white font-medium mb-2">World-Class Execs</h3>
<p className="text-xs text-slate-400">High-caliber leaders moving the needle in Europe's biggest companies.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
<iconify-icon className="text-purple-400 text-3xl" icon="lucide:zap"></iconify-icon>
<div>
<h3 className="text-white font-medium mb-2">We Shape the Future</h3>
<p className="text-xs text-slate-400">Not just ticking boxes. Rewriting the playbook for European business.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 flex items-center justify-between">
<div>
<h3 className="text-xl text-white font-medium mb-2">Architects of the Future</h3>
<p className="text-sm text-slate-400">This is more than a monthly call. It is a coalition.</p>
</div>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border border-slate-800 bg-slate-700"></div>
<div className="w-10 h-10 rounded-full border border-slate-800 bg-slate-600"></div>
<div className="w-10 h-10 rounded-full border border-slate-800 bg-slate-500"></div>
<div className="w-10 h-10 rounded-full border border-slate-800 bg-purple-600 flex items-center justify-center text-xs text-white">+7</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-center text-3xl font-medium text-white tracking-tight mb-12">The Logical Choice</h2>
<div className="overflow-x-auto">
<div className="min-w-[600px] grid grid-cols-3 gap-x-4 text-sm">

<div className="p-4 text-slate-500 font-medium uppercase tracking-wider text-xs">Feature</div>
<div className="p-4 text-slate-500 font-medium uppercase tracking-wider text-xs text-center">Hiring a Consultant</div>
<div className="p-4 text-purple-400 font-medium uppercase tracking-wider text-xs text-center bg-purple-900/10 rounded-t-xl border-t border-x border-purple-500/20">The Council (Us)</div>

<div className="p-4 border-b border-white/5 flex items-center text-white">Cost</div>
<div className="p-4 border-b border-white/5 flex items-center justify-center text-slate-400">€15,000 - €50,000+</div>
<div className="p-4 border-b border-purple-500/20 flex items-center justify-center text-white font-medium bg-purple-900/10 border-x">€1,500 Flat Fee</div>

<div className="p-4 border-b border-white/5 flex items-center text-white">Time to Value</div>
<div className="p-4 border-b border-white/5 flex items-center justify-center text-slate-400">3 Months</div>
<div className="p-4 border-b border-purple-500/20 flex items-center justify-center text-white font-medium bg-purple-900/10 border-x">60 Minutes</div>

<div className="p-4 border-b border-white/5 flex items-center text-white">Source of Knowledge</div>
<div className="p-4 border-b border-white/5 flex items-center justify-center text-slate-400 text-center">Theory / Junior Analysts</div>
<div className="p-4 border-b border-purple-500/20 flex items-center justify-center text-white font-medium bg-purple-900/10 border-x text-center">Proven Peer Experience</div>

<div className="p-4 flex items-center text-white">Emotional Support</div>
<div className="p-4 flex items-center justify-center text-slate-400">None</div>
<div className="p-4 flex items-center justify-center text-white font-medium bg-purple-900/10 rounded-b-xl border-b border-x border-purple-500/20">A Community of Allies</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="offer">
<div className="absolute inset-0 bg-purple-900/5"></div>
<div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Here is what you get</h2>
<p className="text-slate-400 mb-8">Everything you need to lead with confidence.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">1</div>
</div>
<div>
<h4 className="text-white font-medium">10x Executive Strategy Sessions</h4>
<p className="text-sm text-slate-400 mt-1">60-minute deep dives with your curated peer group.</p>
<p className="text-xs text-purple-400 mt-2 font-medium">€5,000 Value</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">2</div>
</div>
<div>
<h4 className="text-white font-medium">The Executive Alliance</h4>
<p className="text-sm text-slate-400 mt-1">A safe harbor of like-minded leaders who understand your reality.</p>
<p className="text-xs text-purple-400 mt-2 font-medium">Priceless</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">3</div>
</div>
<div>
<h4 className="text-white font-medium">Resource Library</h4>
<p className="text-sm text-slate-400 mt-1">Shared templates, job descriptions, and policy frameworks.</p>
<p className="text-xs text-purple-400 mt-2 font-medium">€2,500 Value</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-1 bg-gradient-to-b from-white/10 to-transparent rounded-3xl">
<div className="bg-[#0a0a0c] p-8 rounded-[22px] text-center">
<div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-medium rounded-full mb-6">Total Value: €7,500+</div>
<div className="mb-2 text-slate-500 text-sm">One-time payment for 6 months access</div>
<div className="text-5xl font-medium text-white tracking-tight mb-8">€1,500</div>
<a className="block w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)] mb-4" href="#apply">
                        Join The Council
                    </a>
<div className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
<span className="text-slate-300 font-medium">The "No-Theory" Guarantee:</span><br/>
                        If you don't get actionable value in your first session, we refund you.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/5 rounded-xl open:bg-white/10 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-slate-200 font-medium text-sm">How much time does this require?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        It's designed for busy executives. We have one 60-minute strategy session every two weeks. There is no busy work, just high-impact conversation.
                    </div>
</details>
<details className="group bg-white/5 rounded-xl open:bg-white/10 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-slate-200 font-medium text-sm">Who are the other members?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Members are Sustainability Leaders (CSOs, Heads of Sustainability, Directors) from European companies. We strictly vet to ensure no junior profiles or consultants are in the room.
                    </div>
</details>
<details className="group bg-white/5 rounded-xl open:bg-white/10 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-slate-200 font-medium text-sm">What if I can't attend a session?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        All sessions are recorded and summarized with key takeaways and resources, stored in our private library for you to access anytime.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-24 bg-gradient-to-t from-purple-900/10 to-[#050507] border-t border-white/5" id="apply">
<div className="max-w-lg mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to stop guessing?</h2>
<p className="text-slate-400 mb-8">
                We limit each cohort to 10 leaders to ensure high-quality discussion. Applications for the next European cohort are processed first-come, first-served.
            </p>
<form className="flex flex-col gap-4">
<input className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition-colors" placeholder="name@company.com" required="" type="email"/>
<button className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-slate-200 transition-colors" type="submit">
                    Start Application
                </button>
</form>
<p className="mt-4 text-xs text-slate-600">No payment required to apply.</p>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<span>© 2024 The Sustainability Circle.</span>
<div className="flex gap-4">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
