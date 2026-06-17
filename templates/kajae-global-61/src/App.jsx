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



        window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-progress").style.width = scrolled + "%";
        };
    
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
      

<div className="fixed top-0 left-0 h-1 bg-lime z-[100] w-0 transition-all duration-100 ease-out" id="scroll-progress"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-2xl font-medium tracking-tighter text-white" href="#">KAJAE</a>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-normal">
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#comparison">Pricing</a>
<a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#0A192F] bg-lime rounded-full hover:bg-white transition-colors duration-300" href="#contact">
                Talk to us
            </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#CCFF00] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 pointer-events-none animate-float"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-lime border border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
</span>
                    12 active candidates for your timezone
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Scale your team <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">without limits.</span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                    Access elite global professionals for a fraction of the cost. Pre-vetted, time-zone aligned, and ready to deploy in 48 hours.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0A192F] bg-lime rounded-full shadow-glow hover:bg-white transition-all duration-300 transform hover:-translate-y-1" href="#contact">
                        Build your dream team
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white glass-panel rounded-full hover:bg-white/10 transition-colors border border-white/10" href="#comparison">
                        View Pricing
                    </a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0A192F]"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0A192F]"></div>
<div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0A192F]"></div>
</div>
<span>Trusted by 500+ tech leaders</span>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden glass-panel p-2">
<img alt="Remote Professional" className="rounded-xl w-full h-auto object-cover opacity-90 grayscale-[20%]" loading="lazy" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-8 left-8 bg-[#0A192F]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-4 max-w-xs animate-float" style={{animationDelay: '1s'}}>
<div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center text-lime">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-medium">Verified Expert</p>
<p className="text-xs text-slate-400">Senior Full-Stack Dev</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/10 bg-black/20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-widest text-slate-500 uppercase mb-8">Powering next-gen companies</p>
<div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:code-square-linear" width="28"></iconify-icon>
<span className="text-lg font-bold tracking-tight">DEV<span className="font-light">SCALE</span></span>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:cloud-linear" width="28"></iconify-icon>
<span className="text-lg font-bold tracking-tight">NEXUS</span>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
<span className="text-lg font-bold tracking-tight">STACK</span>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
<span className="text-lg font-bold tracking-tight">FORTIFY</span>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
<span className="text-lg font-bold tracking-tight">GROWTH</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 text-slate-900" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Three steps to scale.</h2>
<p className="text-slate-600 font-light text-lg">We handle the complexity, you get the results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200 -z-10"></div>

<div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="w-12 h-12 bg-[#0A192F] text-[#CCFF00] rounded-xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                        1
                    </div>
<h3 className="text-xl font-semibold mb-3">Search &amp; Match</h3>
<p className="text-slate-600 leading-relaxed text-sm">Submit your requirements. Our AI matches you with top 1% candidates within 24 hours.</p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-slate-300" icon="solar:magnifer-linear" width="48"></iconify-icon>
</div>
</div>

<div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="w-12 h-12 bg-[#0A192F] text-[#CCFF00] rounded-xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                        2
                    </div>
<h3 className="text-xl font-semibold mb-3">Trial Period</h3>
<p className="text-slate-600 leading-relaxed text-sm">Work with your selected expert for 2 weeks. Risk-free. If it's not a fit, you don't pay.</p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-slate-300" icon="solar:handshake-linear" width="48"></iconify-icon>
</div>
</div>

<div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="w-12 h-12 bg-[#0A192F] text-[#CCFF00] rounded-xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                        3
                    </div>
<h3 className="text-xl font-semibold mb-3">Seamless Scale</h3>
<p className="text-slate-600 leading-relaxed text-sm">Onboard instantly. We handle payroll, compliance, and HR while you focus on shipping.</p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-slate-300" icon="solar:chart-square-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="comparison">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Stop overpaying for talent.</h2>
<p className="text-slate-400 font-light">Reduce overhead without compromising on quality.</p>
</div>
<div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="space-y-8 relative z-10">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-300 font-medium">Traditional US Hire</span>
<span className="text-slate-400">$125,000 / yr</span>
</div>
<div className="h-12 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
<div className="h-full bg-slate-700/50 w-full flex items-center px-4">
<span className="text-xs text-white/50">High Overhead</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-lime font-medium">Kajae Talent</span>
<span className="text-lime">$45,000 / yr</span>
</div>
<div className="h-12 w-full bg-white/5 rounded-full overflow-hidden relative border border-lime/30 shadow-[0_0_15px_rgba(204,255,0,0.1)]">
<div className="h-full bg-lime w-[36%] flex items-center px-4 justify-end relative">
<span className="text-xs text-[#0A192F] font-bold mr-2">64% Savings</span>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<p className="text-sm text-slate-500 font-light">Average cost comparison for Senior Developer role based on 2024 market data.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-slate-900 border-t border-slate-100" id="integrations">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 mb-6 uppercase tracking-wider">
                    Workflow Ready
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Plug &amp; Play <br/>Integration.</h2>
<p className="text-slate-600 text-lg font-light leading-relaxed">
                    Our talent integrates directly into your existing stack. No new platforms to learn, no disrupted workflows.
                </p>
<ul className="space-y-3 mt-8">
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-[#0A192F]" icon="solar:check-circle-bold"></iconify-icon> Day 1 GitHub Access
                    </li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-[#0A192F]" icon="solar:check-circle-bold"></iconify-icon> Slack/Teams Communication
                    </li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-[#0A192F]" icon="solar:check-circle-bold"></iconify-icon> Jira/Asana Ticket Management
                    </li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center flex-col gap-3 hover:shadow-md transition-shadow">
<iconify-icon icon="logos:slack-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Slack</span>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center flex-col gap-3 hover:shadow-md transition-shadow">
<iconify-icon icon="logos:jira" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Jira</span>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center flex-col gap-3 hover:shadow-md transition-shadow">
<iconify-icon icon="logos:github-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-700">GitHub</span>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center flex-col gap-3 hover:shadow-md transition-shadow">
<iconify-icon icon="logos:trello" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Trello</span>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-16 text-center">The Kajae Way</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.01] hover:shadow-lime-hover hover:border-lime/30 transition-all duration-300">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-lime" icon="solar:globe-linear" width="200"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-end relative z-10">
<div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-lime mb-6 border border-lime/20">
<iconify-icon icon="solar:earth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Global Reach, Local Feel</h3>
<p className="text-slate-400 font-light">We source talent from 40+ countries, ensuring perfect cultural and timezone alignment for your team.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-lime-hover hover:border-lime/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:text-lime group-hover:border-lime/20 transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">48h Deployment</h3>
<p className="text-sm text-slate-400 font-light">From request to interview in under 2 days. Speed is our currency.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:scale-[1.02] hover:shadow-lime-hover hover:border-lime/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:text-lime group-hover:border-lime/20 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Risk-Free Trial</h3>
<p className="text-sm text-slate-400 font-light">Try any candidate for 2 weeks. If not satisfied, you pay nothing.</p>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.01] hover:shadow-lime-hover hover:border-lime/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-full flex flex-col justify-end relative z-10">
<div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-lime mb-6 border border-lime/20">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Seamless Integration</h3>
<p className="text-slate-400 font-light">Our talent adopts your tools (Slack, Jira, Teams) and workflows immediately. No onboarding friction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/20 border-y border-white/10" id="industries">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl text-slate-400 font-normal mb-12 border-l-2 border-lime pl-4">Expertise across domains</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-default group">
<iconify-icon className="text-slate-500 group-hover:text-lime transition-colors mb-4" icon="solar:code-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg text-white font-medium">Engineering</h3>
<p className="text-xs text-slate-500 mt-1">Frontend, Backend, DevOps</p>
</div>
<div className="p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-default group">
<iconify-icon className="text-slate-500 group-hover:text-lime transition-colors mb-4" icon="solar:palette-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg text-white font-medium">Design</h3>
<p className="text-xs text-slate-500 mt-1">UI/UX, Product, Graphic</p>
</div>
<div className="p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-default group">
<iconify-icon className="text-slate-500 group-hover:text-lime transition-colors mb-4" icon="solar:user-id-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg text-white font-medium">HR &amp; Ops</h3>
<p className="text-xs text-slate-500 mt-1">Recruitment, Admin</p>
</div>
<div className="p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-default group">
<iconify-icon className="text-slate-500 group-hover:text-lime transition-colors mb-4" icon="solar:headset-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg text-white font-medium">Support</h3>
<p className="text-xs text-slate-500 mt-1">CX, Technical Support</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium text-center text-white tracking-tight mb-16">Stories from the frontline</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="glass-panel p-6 rounded-2xl break-inside-avoid">
<div className="flex text-lime mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 font-light mb-6 text-sm leading-relaxed">"Kajae transformed our development cycle. The engineer we hired was committing code on day one. It felt like magic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-white text-sm font-medium">James Chen</h4>
<p className="text-xs text-slate-500">CTO, FinFlow</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl break-inside-avoid">
<div className="flex text-lime mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 font-light mb-6 text-sm leading-relaxed">"We needed to scale our customer success team overnight for a launch. Kajae delivered 3 experts who handled the surge perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-white text-sm font-medium">Sarah Miller</h4>
<p className="text-xs text-slate-500">VP Ops, CloudScale</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl break-inside-avoid">
<div className="flex text-lime mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 font-light mb-6 text-sm leading-relaxed">"The quality of talent is unmatched. Better than local hires we spent months sourcing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h4 className="text-white text-sm font-medium">David Ross</h4>
<p className="text-xs text-slate-500">Founder, Starlight</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black/40" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Ready to scale?</h2>
<p className="text-slate-400 font-light text-lg">
                    Tell us who you need. We'll find them in 48 hours. No commitment required to interview.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<iconify-icon className="text-lime" icon="solar:check-circle-linear"></iconify-icon> 100% Remote-ready
                    </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<iconify-icon className="text-lime" icon="solar:check-circle-linear"></iconify-icon> Timezone Overlap Guaranteed
                    </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<iconify-icon className="text-lime" icon="solar:check-circle-linear"></iconify-icon> Pre-vetted for Soft Skills
                    </li>
</ul>
</div>
<div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl relative">
<form className="space-y-5" id="leadForm">

<div className="space-y-5 transition-opacity duration-300" id="step1">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-lime uppercase tracking-wide">Step 1 of 2</span>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Role needed</label>
<select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-lime transition-colors appearance-none">
<option>Select a role...</option>
<option>Software Engineer</option>
<option>Product Designer</option>
<option>Project Manager</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Work Email</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-slate-600" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full py-4 bg-lime text-[#0A192F] font-medium rounded-lg shadow-glow hover:bg-white transition-all duration-300 flex items-center justify-center gap-2" onclick="document.getElementById('step1').classList.add('hidden'); document.getElementById('step2').classList.remove('hidden');" type="button">
                            Next Step
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>

<div className="space-y-5 hidden animate-in fade-in slide-in-from-right-4 duration-300" id="step2">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-lime uppercase tracking-wide">Step 2 of 2</span>
<button className="text-xs text-slate-400 hover:text-white" onclick="document.getElementById('step2').classList.add('hidden'); document.getElementById('step1').classList.remove('hidden');" type="button">Back</button>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Your Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-slate-600" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-slate-600 resize-none" placeholder="Tell us about your requirements..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-lime text-[#0A192F] font-medium rounded-lg shadow-glow hover:bg-white transition-all duration-300 flex items-center justify-center gap-2" type="button">
                            Find Talent
                            <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 Kajae Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</section>



    </>
  );
}
