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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">
            Co-FounderBD
          </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#features">
            How it works
          </a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#founders">
            Browse Founders
          </a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#stories">
            Stories
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">
            Sign in
          </a>
<a className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors" href="#">
            Join Now
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
          Connecting Visionaries in Bangladesh
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
          Find your perfect
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-white">
            co-founder
          </span>
          today.
        </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Connect with technical experts, business strategists, and creative
          minds to build the next big startup in Bangladesh. No more building
          alone.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 group">
            Start Matching
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
            Watch Demo
          </button>
</div>

<div className="mt-20 relative z-10">
<div className="absolute inset-0 bg-gradient-to-t from-[#030304] via-transparent to-transparent z-20 h-full w-full"></div>
<div className="glass-card rounded-2xl p-1 border-b-0 overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-orange-900/10">
<div className="bg-[#0A0A0B] rounded-xl border border-white/5 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#111113] border border-white/5 rounded-xl p-5 hover:border-orange-500/30 transition-colors group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-semibold">
                      AS
                    </div>
<div>
<h3 className="text-sm font-medium text-white">Arif S.</h3>
<p className="text-xs text-slate-500">Tech Lead</p>
</div>
</div>
<iconify-icon className="text-blue-500" icon="solar:verified-check-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                    React
                  </span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                    Node.js
                  </span>
</div>
<p className="text-xs text-slate-400 line-clamp-2">
                  Building a fintech solution for SME. Looking for a marketing
                  co-founder...
                </p>
</div>

<div className="bg-[#111113] border border-orange-500/40 rounded-xl p-5 relative shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-orange-600 text-[10px] font-medium text-white rounded-full">
                  Top Match
                </div>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm font-semibold">
                      NR
                    </div>
<div>
<h3 className="text-sm font-medium text-white">Nusrat R.</h3>
<p className="text-xs text-slate-500">Product Manager</p>
</div>
</div>
<iconify-icon className="text-orange-500" icon="solar:star-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                    Strategy
                  </span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                    UX
                  </span>
</div>
<p className="text-xs text-slate-400 line-clamp-2">
                  Ex-Grameenphone. Passionate about EdTech. Let's disrupt
                  education...
                </p>
</div>

<div className="bg-[#111113] border border-white/5 rounded-xl p-5 hover:border-orange-500/30 transition-colors group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-semibold">
                      TK
                    </div>
<div>
<h3 className="text-sm font-medium text-white">Tanvir K.</h3>
<p className="text-xs text-slate-500">Growth Hacker</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                    Sales
                  </span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300">
                    B2B
                  </span>
</div>
<p className="text-xs text-slate-400 line-clamp-2">
                  Need a CTO for an AI-based logistics startup. MVP is ready...
                </p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<h4 className="text-3xl font-medium text-white tracking-tight mb-1">
            2.5k+
          </h4>
<p className="text-sm text-slate-500">Active Founders</p>
</div>
<div className="text-center md:text-left">
<h4 className="text-3xl font-medium text-white tracking-tight mb-1">
            500+
          </h4>
<p className="text-sm text-slate-500">Startups Formed</p>
</div>
<div className="text-center md:text-left">
<h4 className="text-3xl font-medium text-white tracking-tight mb-1">
            $12M
          </h4>
<p className="text-sm text-slate-500">Raised by Teams</p>
</div>
<div className="text-center md:text-left">
<h4 className="text-3xl font-medium text-white tracking-tight mb-1">
            64
          </h4>
<p className="text-sm text-slate-500">Districts Covered</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
            Designed for
            <br/>
            modern founders.
          </h2>
<p className="text-lg text-slate-400 max-w-xl">
            We stripped away the noise. No recruiters, no outsourcing agencies.
            Just founders looking for founders.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Verified Profiles
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Every profile is vetted. We verify LinkedIn and professional
              backgrounds to ensure you meet real people.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Smart Matching
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Our algorithm matches you based on skills, vision, industry
              interest, and location within Bangladesh.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Direct Connect
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Found someone interesting? Start a conversation instantly without
              waiting for a mutual match.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050506]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Who are you looking for?
          </h2>
<p className="text-slate-400">
            Browse categories tailored to your startup needs.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group relative overflow-hidden rounded-xl bg-[#0A0A0B] border border-white/5 p-6 hover:border-orange-500/50 transition-all" href="#">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors mb-4" icon="solar:code-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium">Technical</h3>
<p className="text-xs text-slate-500 mt-1">CTO, Developer</p>
</a>
<a className="group relative overflow-hidden rounded-xl bg-[#0A0A0B] border border-white/5 p-6 hover:border-orange-500/50 transition-all" href="#">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors mb-4" icon="solar:graph-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium">Growth</h3>
<p className="text-xs text-slate-500 mt-1">Marketing, Sales</p>
</a>
<a className="group relative overflow-hidden rounded-xl bg-[#0A0A0B] border border-white/5 p-6 hover:border-orange-500/50 transition-all" href="#">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors mb-4" icon="solar:palette-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium">Product</h3>
<p className="text-xs text-slate-500 mt-1">Product Mgr, UX/UI</p>
</a>
<a className="group relative overflow-hidden rounded-xl bg-[#0A0A0B] border border-white/5 p-6 hover:border-orange-500/50 transition-all" href="#">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors mb-4" icon="solar:case-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium">Operations</h3>
<p className="text-xs text-slate-500 mt-1">COO, Finance</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="mb-8">
<iconify-icon className="text-orange-500 opacity-50" icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-relaxed mb-8">
          "I found my technical co-founder on Co-FounderBD within 2 weeks. We
          just raised our seed round. The quality of profiles here is unmatched
          in the local ecosystem."
        </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=Rahim+Ahmed&amp;background=334155&amp;color=fff"/>
</div>
<div className="text-left">
<div className="text-white font-medium text-sm">Rahim Ahmed</div>
<div className="text-slate-500 text-xs">CEO at PayFast BD</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20 blur-2xl rounded-3xl opacity-30"></div>
<div className="relative bg-[#0A0A0B] border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
            Ready to build?
          </h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join the largest network of verified founders in Bangladesh. Your
            future partner is one click away.
          </p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm" placeholder="Enter your email" type="email"/>
<button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors text-sm whitespace-nowrap" type="button">
              Get Started
            </button>
</form>
<p className="text-xs text-slate-600 mt-6">
            Free for early-stage founders.
          </p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030304] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">
                Co-FounderBD
              </span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
              The #1 platform for finding co-founders and building startups in
              Bangladesh.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Browse Founders
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Post a Project
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Success Stories
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Startup Events
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Legal Templates
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Equity Calculator
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
            © 2023 Co-FounderBD. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-slate-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
