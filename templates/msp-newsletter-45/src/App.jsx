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
      

<div className="fixed inset-0 z-[-2] bg-[#0D0D0F]"></div>
<div className="fixed inset-0 z-[-1] bg-pattern pointer-events-none"></div>

<header className="sticky top-0 z-50 bg-[#0D0D0F]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center group" href="#">
<span className="text-xl font-semibold tracking-tighter text-white">Top4<span className="text-[#2F80ED]">List</span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">AI Agents</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">VoIP</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Marketing</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Communications</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-white hover:text-zinc-300 transition-colors">Sign In</button>
<a className="bg-[#2F80ED] hover:bg-[#256bbd] text-white text-sm font-medium px-4 py-2 rounded-md transition-all shadow-[0_0_15px_rgba(47,128,237,0.3)] hover:shadow-[0_0_25px_rgba(47,128,237,0.5)]" href="#subscribe">
                    Subscribe
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-24 overflow-hidden px-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#2F80ED] blur-[150px] opacity-15 rounded-full z-[-1] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#2F80ED]"></span>
<span className="text-xs font-medium text-zinc-300">Updated weekly for MSPs</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    The MSP's guide to AI, VoIP,<br className="hidden sm:block"/> and what's actually working.
                </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Cut through the noise. Get actionable strategies, tech stack reviews, and growth playbooks built specifically for Managed Service Providers scaling in 2024.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full group">
<div className="relative flex-grow">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-md py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#2F80ED]/50 focus:bg-white/10 text-sm text-white transition-all placeholder:text-zinc-600" placeholder="Enter your work email" required="" type="email"/>
</div>
<button className="bg-white text-black hover:bg-zinc-200 font-medium text-sm py-2.5 px-6 rounded-md transition-colors whitespace-nowrap" type="submit">
                        Join 5,000+ MSPs
                    </button>
</form>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center gap-4 no-scrollbar">

<a className="flex-shrink-0 flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full py-2 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/50 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_-10px_rgba(47,128,237,0.2)] group" href="#">
<div className="text-zinc-400 group-hover:text-[#2F80ED] transition-colors flex">
<iconify-icon icon="solar:robot-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">AI Agents</span>
<span className="text-xs bg-white/10 text-zinc-400 py-0.5 px-2 rounded-full group-hover:bg-[#2F80ED]/20 group-hover:text-[#2F80ED] transition-colors">12</span>
</a>

<a className="flex-shrink-0 flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full py-2 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/50 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_-10px_rgba(47,128,237,0.2)] group" href="#">
<div className="text-zinc-400 group-hover:text-[#2F80ED] transition-colors flex">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">VoIP Systems</span>
<span className="text-xs bg-white/10 text-zinc-400 py-0.5 px-2 rounded-full group-hover:bg-[#2F80ED]/20 group-hover:text-[#2F80ED] transition-colors">8</span>
</a>

<a className="flex-shrink-0 flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full py-2 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/50 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_-10px_rgba(47,128,237,0.2)] group" href="#">
<div className="text-zinc-400 group-hover:text-[#2F80ED] transition-colors flex">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Online Marketing</span>
<span className="text-xs bg-white/10 text-zinc-400 py-0.5 px-2 rounded-full group-hover:bg-[#2F80ED]/20 group-hover:text-[#2F80ED] transition-colors">15</span>
</a>

<a className="flex-shrink-0 flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full py-2 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/50 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_-10px_rgba(47,128,237,0.2)] group" href="#">
<div className="text-zinc-400 group-hover:text-[#2F80ED] transition-colors flex">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Communications</span>
<span className="text-xs bg-white/10 text-zinc-400 py-0.5 px-2 rounded-full group-hover:bg-[#2F80ED]/20 group-hover:text-[#2F80ED] transition-colors">10</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<h2 className="text-xl font-semibold text-white tracking-tight mb-8 flex items-center gap-2">
<iconify-icon className="text-[#2F80ED]" icon="solar:star-linear"></iconify-icon>
                Featured Insight
            </h2>
<div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-6 lg:p-8 transition-colors hover:bg-white/[0.04]">

<div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl bg-zinc-900 border border-white/10">
<img alt="Server room representing AI deployment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D0F]/80 to-transparent"></div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-4">
<span className="text-xs font-medium text-[#2F80ED] uppercase tracking-wider">AI Agents</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mb-4 group-hover:text-[#2F80ED] transition-colors">
                        Automating Tier 1 Support: How We Deployed an AI Agent in 14 Days
                    </h3>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                        A complete breakdown of the prompts, tools, and workflows we used to automate 40% of our incoming ticket volume without sacrificing CSAT scores. Includes our exact technology stack and integration playbooks.
                    </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white text-sm font-medium">
                                AC
                            </div>
<div>
<p className="text-sm font-medium text-zinc-200">Alex Chen</p>
<p className="text-xs text-zinc-500">Oct 24 • 8 min read</p>
</div>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#2F80ED] transition-colors" href="#">
                            Read full story 
                            <iconify-icon className="mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<h2 className="text-xl font-semibold text-white tracking-tight mb-8">Latest Articles</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors" href="#">
<div className="w-full aspect-video overflow-hidden bg-zinc-900 border-b border-white/5 relative">
<img alt="VoIP setup" className="w-full h-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-[#0D0D0F]/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-white uppercase tracking-wider">
                            VoIP
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-2 group-hover:text-[#2F80ED] transition-colors">
                            Migrating Legacy PBX to Cloud: A Checklist for MSPs
                        </h3>
<p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                            Step-by-step guide to migrating your clients from on-premise hardware to modern cloud VoIP solutions without downtime.
                        </p>
<div className="mt-auto flex items-center text-xs text-zinc-500 gap-2">
<span>Nov 2</span>
<span>•</span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5 min read
                            </span>
</div>
</div>
</a>

<a className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors" href="#">
<div className="w-full aspect-video overflow-hidden bg-zinc-900 border-b border-white/5 relative">
<img alt="Marketing graph" className="w-full h-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-[#0D0D0F]/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-white uppercase tracking-wider">
                            Marketing
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-2 group-hover:text-[#2F80ED] transition-colors">
                            Cold Email is Dead? Here's What MSPs Are Doing Instead
                        </h3>
<p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                            Inbound lead generation tactics that actually work in 2024. We analyze campaigns from top-performing IT service providers.
                        </p>
<div className="mt-auto flex items-center text-xs text-zinc-500 gap-2">
<span>Oct 28</span>
<span>•</span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 7 min read
                            </span>
</div>
</div>
</a>

<a className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors" href="#">
<div className="w-full aspect-video overflow-hidden bg-zinc-900 border-b border-white/5 relative">
<img alt="Business communications" className="w-full h-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 bg-[#0D0D0F]/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-white uppercase tracking-wider">
                            Comms
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-2 group-hover:text-[#2F80ED] transition-colors">
                            Unified Communications: Reselling Teams vs. Zoom Phone
                        </h3>
<p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                            A deep dive into margin analysis, feature parity, and deployment headaches when choosing a UCaaS platform to resell.
                        </p>
<div className="mt-auto flex items-center text-xs text-zinc-500 gap-2">
<span>Oct 20</span>
<span>•</span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 6 min read
                            </span>
</div>
</div>
</a>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-24 relative overflow-hidden">

<div className="absolute right-0 top-0 w-96 h-96 bg-[#2F80ED] blur-[150px] opacity-10 rounded-full z-[-1] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Top 4 Picks</h2>
<p className="text-zinc-400 text-sm">Curated reading essential for MSP growth this month.</p>
</div>
<div className="flex flex-col border-t border-white/10">

<a className="group flex items-start gap-6 py-6 border-b border-white/10 transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg" href="#">
<span className="text-3xl font-medium text-zinc-700 group-hover:text-[#2F80ED] transition-colors mt-1">1</span>
<div className="flex-grow">
<h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[#2F80ED] transition-colors">5 AI tools every MSP should be using internally right now.</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span className="text-[#2F80ED] font-medium">AI Agents</span>
<span>•</span>
<span>Resource List</span>
</div>
</div>
<iconify-icon className="text-zinc-600 text-xl group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 mt-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="group flex items-start gap-6 py-6 border-b border-white/10 transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg" href="#">
<span className="text-3xl font-medium text-zinc-700 group-hover:text-[#2F80ED] transition-colors mt-1">2</span>
<div className="flex-grow">
<h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[#2F80ED] transition-colors">How to package and price VoIP services for 60%+ margins.</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span className="text-[#2F80ED] font-medium">VoIP</span>
<span>•</span>
<span>Strategy</span>
</div>
</div>
<iconify-icon className="text-zinc-600 text-xl group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 mt-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="group flex items-start gap-6 py-6 border-b border-white/10 transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg" href="#">
<span className="text-3xl font-medium text-zinc-700 group-hover:text-[#2F80ED] transition-colors mt-1">3</span>
<div className="flex-grow">
<h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[#2F80ED] transition-colors">The ultimate MSP website tear-down: What actually converts?</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span className="text-[#2F80ED] font-medium">Marketing</span>
<span>•</span>
<span>Case Study</span>
</div>
</div>
<iconify-icon className="text-zinc-600 text-xl group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 mt-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="group flex items-start gap-6 py-6 border-b border-white/10 transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg" href="#">
<span className="text-3xl font-medium text-zinc-700 group-hover:text-[#2F80ED] transition-colors mt-1">4</span>
<div className="flex-grow">
<h3 className="text-lg sm:text-xl font-medium text-white tracking-tight mb-2 group-hover:text-[#2F80ED] transition-colors">Navigating compliance in modern business messaging and SMS.</h3>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<span className="text-[#2F80ED] font-medium">Communications</span>
<span>•</span>
<span>Legal &amp; Security</span>
</div>
</div>
<iconify-icon className="text-zinc-600 text-xl group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 mt-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="subscribe">
<div className="max-w-3xl mx-auto text-center">
<iconify-icon className="text-4xl text-[#2F80ED] mb-6" icon="solar:mailbox-linear"></iconify-icon>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Stay ahead of what's changing.</h2>
<p className="text-zinc-400 mb-8 max-w-lg mx-auto">Get the tactics top MSPs are using to scale, delivered straight to your inbox every Tuesday.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full mb-4">
<input className="flex-grow bg-[#0D0D0F] border border-white/10 rounded-md py-2.5 px-4 focus:outline-none focus:border-[#2F80ED]/50 focus:ring-1 focus:ring-[#2F80ED]/50 text-sm text-white transition-all placeholder:text-zinc-600 shadow-inner" placeholder="Email address" required="" type="email"/>
<button className="bg-[#2F80ED] hover:bg-[#256bbd] text-white font-medium text-sm py-2.5 px-6 rounded-md transition-colors whitespace-nowrap shadow-[0_0_10px_rgba(47,128,237,0.2)]" type="submit">
                        Subscribe
                    </button>
</form>
<p className="text-xs text-zinc-600 flex items-center justify-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    No spam. MSP-focused. Weekly.
                </p>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0D0D0F] pt-16 pb-8 px-6 mt-auto">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="md:col-span-1">
<a className="inline-block mb-4" href="#">
<span className="text-xl font-semibold tracking-tighter text-white">Top4<span className="text-[#2F80ED]">List</span></span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        The definitive resource for Managed Service Providers navigating the future of AI, communications, and modern marketing.
                    </p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div className="hidden md:block"></div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Categories</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-[#2F80ED] transition-colors" href="#">AI Agents</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#2F80ED] transition-colors" href="#">VoIP Systems</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#2F80ED] transition-colors" href="#">Online Marketing</a></li>
<li><a className="text-sm text-zinc-500 hover:text-[#2F80ED] transition-colors" href="#">Business Comms</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Sponsor</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Write for us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">
                    © 2024 Top4List. All rights reserved.
                </p>
<div className="flex gap-4 text-xs text-zinc-600">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
