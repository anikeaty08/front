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



        lucide.createIcons();
    
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.tella.tv/video/evo-ai-shopping-assistant-to-ur-brand-3blo"></video></div>
<div className="aura-background-component fixed -z-10 w-full h-screen top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="stars absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-30"></div>
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] glow-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#39ff14]/5 rounded-full blur-[120px] glow-blob animation-delay-2000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
</nav>

<section className="md:pt-40 md:pb-24 flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-900/10 text-red-400 text-[10px] md:text-xs font-medium tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
        ATTENTION: ECOMMERCE BRAND OWNERS
    </div>
<h1 className="md:text-6xl leading-[1.1] text-3xl font-medium text-white tracking-tighter font-pt-serif max-w-5xl mr-auto mb-6 ml-auto">
        Earning <span className="text-[#39ff14]">1M+/mo EGP?</span> <br/>
            Double Your Sales Conversion Rate
    </h1>
<p className="leading-relaxed md:text-lg text-sm font-medium text-neutral-400 max-w-2xl mr-auto mb-8 ml-auto">&amp; Cut Customer Support Overhead by 50% in just 30 days. <br/> <span className="font-bold text-[#2cc810]">(Guaranteed, or you don't pay a single pound. Limited to the next 5 clients)</span></p>

<div className="aspect-video overflow-hidden shadow-[#39ff14]/5 group bg-neutral-900 w-full max-w-3xl border-white/10 border rounded-xl mb-10 relative shadow-2xl">
<div className="" style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}><iframe allowfullscreen="" allowtransparency="" className="" src="https://www.tella.tv/video/cmihj0xrj000a04jx1zcf3blo/embed?b=1&amp;title=1&amp;a=1&amp;loop=1&amp;t=0&amp;muted=0&amp;wt=1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0'}}></iframe></div>
</div>

<div className="relative group">
<button className="shiny-cta focus:outline-none" onclick="window.location.href='#book'">
<span>Book A Call</span>
</button>
<div className="absolute inset-0 -z-10 bg-[#39ff14]/30 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full">
</div>
</div>
</section>

<section className="max-w-7xl z-10 border-white/5 border-t mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative" id="services">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white">The Core Service: <span className="text-[#39ff14]">The Ecommerce AI Agent</span></h2>
<p className="text-neutral-500 text-sm max-w-2xl mx-auto">
                Stop losing sales while you sleep. We install a smart, 24/7 AI Sales Agent directly onto your store. It acts like your perfect, zero-salary salesperson.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-[#39ff14]/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-6 text-[#39ff14]">
<svg className="lucide lucide-clock w-5 h-5 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">24/7 Integrated AI Assistant</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                        Never lose a customer to time. Keep your store fully staffed at all hours, ensuring every lead is instantly engaged.
                    </p>
<div className="text-[10px] text-[#39ff14] border border-[#39ff14]/20 bg-[#39ff14]/5 px-2 py-1 rounded inline-block">
                        Saves ~15,000 EGP/mo
                    </div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-[#39ff14]/50 transition-all duration-500 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-6 text-[#39ff14]">
<svg className="lucide lucide-shopping-bag w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Product Recommendation Engine</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                        Maximize every cart. The agent instantly welcomes customers and suggests high-performing upsells &amp; cross-sells.
                    </p>
<div className="text-[10px] text-[#39ff14] border border-[#39ff14]/20 bg-[#39ff14]/5 px-2 py-1 rounded inline-block">
                        +20,000 EGP/mo Revenue
                    </div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-[#39ff14]/50 transition-all duration-500 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-6 text-[#39ff14]">
<svg className="lucide lucide-message-square w-5 h-5 stroke-[1.5]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Automated FAQ &amp; Support</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                        Liberate your human team. Instantly handle up to 80% of routine questions, reducing support tickets drastically.
                    </p>
<div className="text-[10px] text-[#39ff14] border border-[#39ff14]/20 bg-[#39ff14]/5 px-2 py-1 rounded inline-block">
                        Saves ~18,000 EGP/mo
                    </div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-[#39ff14]/50 transition-all duration-500 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-6 text-[#39ff14]">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 stroke-[1.5]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Revenue Insights Tracking</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                        Prove ROI instantly. Track the specific revenue generated from every AI suggestion to know the exact value.
                    </p>
</div>
</div>

<div className="group hover:border-[#39ff14]/50 transition-all duration-500 overflow-hidden bg-neutral-900/30 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-6 text-[#39ff14]">
<svg className="lucide lucide-brain-circuit w-5 h-5 stroke-[1.5]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Weekly AI Optimization</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                        Ensure your AI is constantly learning and selling more effectively for you every single week.
                    </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-[#39ff14]/50 transition-all duration-500 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center mb-6 text-[#39ff14]">
<svg className="lucide lucide-infinity w-5 h-5 stroke-[1.5]" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lifetime Updates &amp; Partnership</h3>
<p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                        Future-proof your investment. A dedicated success team ensures the AI drives your bottom line continuously.
                    </p>
</div>
</div>
</div>
<div className="mt-12 text-center">
</div>
</section>

<section className="bg-neutral-950 z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Stop Ignoring the <span className="text-red-500">Revenue Leak</span></h2>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 font-light max-w-3xl">
                    If you currently view an AI Sales Agent as "just another tool", you are making a critical mistake. For <span className="text-white font-medium">1M+/mo EGP brands</span>, AI is non-negotiable infrastructure. Every late response is a direct withdrawal from your profit line.
                </p>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#39ff14]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="flex-1">
<div className="text-xs font-mono text-[#39ff14] mb-4 uppercase tracking-widest">Case Study Spotlight</div>
<h3 className="text-2xl font-medium text-white mb-4">Kinn Studio: From Luxury Support to Sales Engine</h3>
<blockquote className="text-sm text-neutral-300 italic border-l-2 border-[#39ff14] pl-4 mb-6">
                                "Our AI Agents have been an amazing assistant... close the loop effectively. This seamless experience enhances our customer loyalty."
                                <footer className="text-xs text-neutral-500 mt-2 not-italic">— Brooke Dobbins, Senior CX Manager</footer>
</blockquote>
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<p className="text-xs text-neutral-400"><span className="text-red-400 font-medium">Before:</span> Leaking revenue due to slow responses.</p>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#39ff14]"></div>
<p className="text-xs text-neutral-400"><span className="text-[#39ff14] font-medium">After:</span> Higher AOV via proactive selling.</p>
</div>
</div>
</div>
<div className="flex-1 bg-black/50 p-6 rounded-xl border border-white/5">
<h4 className="text-sm font-medium text-white mb-4">The Transformation</h4>
<ul className="space-y-4">
<li className="flex gap-3">
<svg className="lucide lucide-x-circle w-4 h-4 text-red-500 mt-0.5 shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<div className="">
<p className="text-xs font-medium text-white">Missed Opportunities</p>
<p className="text-[10px] text-neutral-500">Support staff only handle incoming questions; no proactive selling.</p>
</div>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-[#39ff14] mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="text-xs font-medium text-white">Sales Accelerator</p>
<p className="text-[10px] text-neutral-500">AI actively guides customers to the right collections and promotions.</p>
</div>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-[#39ff14] mt-0.5 shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="text-xs font-medium text-white">Data-Driven Growth</p>
<p className="text-[10px] text-neutral-500">AI insights revealed customers needed more visuals, leading to crucial pivots.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="bonuses">
<div className="max-w-4xl mx-auto">

<div className="mb-12 border border-[#39ff14]/30 bg-[#39ff14]/5 rounded-3xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#39ff14] text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    First 5 Clients Only
                </div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-2">The Evo Bonus Package</h3>
<p className="text-sm text-neutral-400 mb-6">Turn all social channels into automated sales funnels.</p>
<div className="flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-lock w-4 h-4 text-[#39ff14]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-sm font-medium text-white">Omni-Channel Integration</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed mb-2">
                            Deploy the AI agent to Instagram DMs &amp; Facebook Messenger. Convert chat conversations into immediate sales.
                        </p>
<p className="text-xs text-[#39ff14] font-mono">Value: 10,000 EGP/mo</p>
</div>
<div className="w-px h-12 bg-[#39ff14]/20 hidden md:block"></div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-[#39ff14]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium text-white">100% Full-Refund Guarantee</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            No measurable impact on CR, AOV, or Time Savings in 4 weeks? We refund 100%. No questions asked.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden group/section bg-neutral-950 z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#39ff14]/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-1000"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
            You Already Pay for Traffic. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Let’s Convert it to</span> <span className="text-[#39ff14] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Sales.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left max-w-2xl mx-auto">

<div className="group hover:opacity-100 transition-all duration-300 hover:bg-red-900/10 hover:opacity-80 hover:border-red-500/30 bg-red-950/5 opacity-100 mix-blend-color-dodge border-neutral-50/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<h3 className="flex items-center gap-2 group-hover:text-red-200 transition-colors text-sm font-bold text-slate-50/60 opacity-100 mb-4">Option 1: Do Nothing</h3>
<ul className="group-hover:text-red-200/40 transition-colors text-xs text-neutral-500 opacity-100 space-y-3">
<li className="flex text-slate-50 opacity-95 gap-x-2 gap-y-2 items-center"><svg className="lucide lucide-x w-3 h-3 text-red-500/40 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Continue losing sales overnight</li>
<li className="flex gap-2 text-slate-50 gap-x-2 gap-y-2 items-center"><svg className="lucide lucide-x w-3 h-3 text-red-500/40 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Support costs keep rising</li>
<li className="flex text-slate-50 gap-x-2 gap-y-2 items-center"><svg className="lucide lucide-x w-3 h-3 text-red-500/40 group-hover:text-red-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Competitors adopt AI first</li>
</ul>
</div>

<div className="group overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_-10px_rgba(57,255,20,0.15)] hover:border-[#39ff14]/60 hover:-translate-y-1 bg-neutral-900/60 border-[#39ff14]/30 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#39ff14]/10 via-transparent to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute -top-3 right-4 bg-[#39ff14] text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.4)] tracking-wide z-20">RECOMMENDED</div>
<h3 className="z-10 flex items-center gap-2 text-sm font-medium text-white mb-4 relative">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]"></span>
</span>
                    Option 2: Partner with Evolex
                </h3>
<ul className="space-y-3 text-xs text-neutral-200 relative z-10">
<li className="flex gap-2 items-center group-hover:text-white transition-colors"><svg className="lucide lucide-check w-3 h-3 text-[#39ff14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 Sales &amp; Support</li>
<li className="flex gap-2 items-center group-hover:text-white transition-colors"><svg className="lucide lucide-check w-3 h-3 text-[#39ff14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Guaranteed ROI or Refund</li>
<li className="flex gap-2 group-hover:text-white transition-colors gap-x-2 gap-y-2 items-center"><svg className="lucide lucide-check w-3 h-3 text-[#39ff14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Save ~50k EGP/mo</li>
</ul>
</div>
</div>
<div className="relative w-full max-w-3xl mx-auto">

<div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent rounded-[2rem] blur-sm opacity-50"></div>
<div className="md:p-14 overflow-hidden bg-neutral-900/80 border-white/10 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-xl">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<p className="text-sm text-neutral-500 mb-4 line-through decoration-white/20">Total Perceived Value: 73,000 EGP/mo</p>
<div className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 drop-shadow-xl">
                    25,000 <span className="text-2xl md:text-3xl font-light text-neutral-400">EGP/mo</span>
</div>
<p className="text-xs text-[#39ff14] mb-10 font-medium bg-[#39ff14]/5 border border-[#39ff14]/20 inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(57,255,20,0.1)]">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Refunded if no results in 30 days
                </p>
<div className="flex justify-center transform hover:scale-105 transition-transform duration-300" id="book">
<button className="shiny-cta focus:outline-none shadow-[0_0_40px_-10px_rgba(57,255,20,0.5)]">
<span>Book Your Strategy Call</span>
</button>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
