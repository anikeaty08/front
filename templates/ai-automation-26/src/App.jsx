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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] gradient-orb pointer-events-none -z-10"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full px-2 py-2 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-black/50">

<div className="flex items-center gap-3 pl-4 pr-8 border-r border-white/10">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3A7CFF] to-[#0B1A33] flex items-center justify-center border border-white/20">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<span className="font-medium tracking-tight text-lg text-white">FlowForge</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-light text-white/70">
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Integrations</a>
<a className="hover:text-white transition-colors duration-200" href="#">Case Studies</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>

<div className="flex items-center gap-3 pr-2">
<a className="hidden sm:flex items-center gap-2 text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-transparent hover:border-white/10 text-xs font-light" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
<span>Login</span>
</a>
<button className="bg-[#3A7CFF] hover:bg-[#3A7CFF]/90 text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(58,124,255,0.4)]">
                    Book Audit
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 flex flex-col gap-8">

<div className="flex items-center gap-4 animate-fade-in-up">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0B1A33]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0B1A33]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0B1A33]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p className="text-sm font-light text-white/60">Trusted by 500+ growth-focused businesses</p>
</div>

<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
                    Bespoke AI engines <br/>
<span className="text-[#3A7CFF] glow-text">built for your business.</span>
</h1>

<p className="text-lg lg:text-xl font-light text-white/60 leading-relaxed max-w-xl">
                    Stop using generic templates. We engineer custom AI automation workflows that plug into your existing stack—automating sales, support, and ops to maximize revenue.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
<button className="w-full sm:w-auto group relative px-8 py-3.5 bg-[#3A7CFF] rounded-full text-white text-sm font-medium overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(58,124,255,0.4)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="flex items-center justify-center gap-2">
                            Get Your First Workflow
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                        View Case Studies
                    </button>
</div>

<div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/5">
<div className="flex items-center gap-2 text-xs font-light text-white/40">
<i className="w-4 h-4 text-[#66FFAA]" data-lucide="shield-check"></i>
<span>Enterprise Security</span>
</div>
<div className="flex items-center gap-2 text-xs font-light text-white/40">
<i className="w-4 h-4 text-[#66FFAA]" data-lucide="zap"></i>
<span>Setup in 48 Hours</span>
</div>
<div className="flex items-center gap-2 text-xs font-light text-white/40">
<i className="w-4 h-4 text-[#66FFAA]" data-lucide="check-circle"></i>
<span>n8n Certified Experts</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="absolute inset-0 bg-[#3A7CFF] opacity-20 blur-[100px] rounded-full"></div>

<div className="relative glass-panel rounded-2xl p-1 overflow-hidden shadow-2xl">

<div className="bg-[#0B1A33]/80 px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
<i className="w-3.5 h-3.5 text-[#3A7CFF]" data-lucide="layout-template"></i>
<span className="text-xs font-light text-white/80">Workflow: Lead_Qualify_v4</span>
<i className="w-3 h-3 text-white/40" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-[#66FFAA]"></span>
<span className="text-xs font-light text-white/60">Live Running</span>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<i className="w-4 h-4 text-white/40 hover:text-white transition" data-lucide="clock"></i>
</div>
</div>

<div className="bg-[#081226] min-h-[400px] p-6 relative flex flex-col gap-4">

<div className="absolute top-6 right-6 z-10 w-72 glass-panel rounded-lg p-3 border-l-2 border-l-[#66FFAA] shadow-lg animate-[pulse_4s_infinite]">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="p-1.5 rounded bg-[#66FFAA]/10 text-[#66FFAA]">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div>
<h4 className="text-xs font-medium text-white">Automation Triggered</h4>
<p className="text-[10px] text-white/50 mt-0.5">New lead from WhatsApp qualified via AI agent.</p>
</div>
</div>
<button className="text-white/20 hover:text-white"><i className="w-3 h-3" data-lucide="x"></i></button>
</div>
</div>

<div className="flex flex-col gap-4 mt-8 opacity-90">

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-orange-500 to-yellow-500 flex items-center justify-center shrink-0">
<span className="text-xs font-bold text-white">U</span>
</div>
<div className="flex-1">
<div className="bg-[#1C2C45] rounded-2xl rounded-tl-none p-4 text-xs font-light text-white/80 leading-relaxed border border-white/5">
                                        "Hi, I'm interested in the premium package for my dental clinic. What's the pricing?"
                                    </div>
<span className="text-[10px] text-white/30 ml-1 mt-1 block">WhatsApp • 10:42 AM</span>
</div>
</div>

<div className="flex items-center gap-3 my-2 pl-12">
<div className="h-px flex-1 bg-white/5"></div>
<span className="text-[10px] font-mono text-[#3A7CFF] bg-[#3A7CFF]/10 px-2 py-0.5 rounded border border-[#3A7CFF]/20">AI Analyzing Intent...</span>
<div className="h-px flex-1 bg-white/5"></div>
</div>

<div className="flex gap-4 items-start flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-[#3A7CFF] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(58,124,255,0.3)]">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<div className="flex-1 flex justify-end">
<div className="bg-[#3A7CFF]/10 border border-[#3A7CFF]/20 rounded-2xl rounded-tr-none p-3 max-w-[90%]">

<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] text-white/70">
<i className="w-3 h-3 text-[#66FFAA]" data-lucide="check"></i>
<span>Intent: <strong>Purchase Inquiry</strong></span>
</div>
<div className="flex items-center gap-2 text-[10px] text-white/70">
<i className="w-3 h-3 text-[#66FFAA]" data-lucide="check"></i>
<span>CRM: <strong>Added to HubSpot Deal Pipeline</strong></span>
</div>
<div className="mt-2 bg-[#0B1A33] rounded p-2 text-[10px] font-mono text-white/50 border border-white/5">
                                                Drafting response using 'Clinic_Sales_Persona_v2'...
                                            </div>
</div>
</div>
</div>
</div>

<div className="mt-auto pt-4 relative">
<div className="glass-panel rounded-xl p-2 flex items-center gap-2">
<button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition"><i className="w-4 h-4" data-lucide="paperclip"></i></button>
<button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition"><i className="w-4 h-4" data-lucide="image"></i></button>
<input className="bg-transparent flex-1 text-xs font-light text-white/80 focus:outline-none px-2" readonly="" type="text" value="System Override: Offer 10% discount if booked today..."/>
<button className="bg-[#3A7CFF] hover:bg-[#3A7CFF]/90 text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition">
<span>Deploy</span>
<i className="w-3 h-3" data-lucide="send"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-4">
<div className="glass-panel rounded-xl p-3 flex flex-col justify-center border border-white/5">
<div className="flex items-center gap-2 text-[10px] text-white/40 mb-1">
<i className="w-3 h-3" data-lucide="zap"></i> Active Workflows
                                    </div>
<div className="text-sm font-medium text-white">24 Custom Bots</div>
</div>
<div className="glass-panel rounded-xl p-3 flex flex-col justify-center border border-white/5">
<div className="flex items-center gap-2 text-[10px] text-white/40 mb-1">
<i className="w-3 h-3" data-lucide="lock"></i> Security
                                    </div>
<div className="text-sm font-medium text-white">SSO &amp; Role Audit</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 glass-panel p-3 rounded-2xl border border-white/10 shadow-xl hidden lg:block">
<i className="w-6 h-6 text-[#3A7CFF]" data-lucide="box"></i>
</div>
<div className="absolute bottom-4 right-4 bg-[#111] border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2 opacity-60">
<div className="w-2 h-2 bg-[#66FFAA] rounded-full animate-pulse"></div>
<span className="text-[10px] text-white font-mono">FlowForge Engine v2.1</span>
</div>
</div>
</div>
</main>


    </>
  );
}
