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
      

<nav className="border-b border-white/[0.08] px-6 py-4 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="text-xl tracking-tighter font-medium text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                    AGNT
                </div>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-white" href="#">Deploy</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Fleet</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Knowledge</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-zinc-400 font-medium cursor-pointer hover:border-white/20 transition-colors">
                    USR
                </div>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-6xl mx-auto px-6 pt-16 pb-24">

<header className="mb-12">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">Provision new Agent</h1>
<p className="text-base text-zinc-500 max-w-2xl font-normal">Configure your AI agent by providing business context, and select a compute plan to deploy it to your fleet.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

<div className="lg:col-span-7 space-y-8">

<section>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-zinc-400" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-lg font-medium tracking-tight text-white">Agent Identity</h2>
</div>
<div className="space-y-5 bg-[#0f0f0f] border border-white/[0.08] rounded-xl p-6">

<div>
<label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">Business Name</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Acme Corp" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">Website URL</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="https://example.com" type="url"/>
</div>
<p className="mt-2 text-xs text-zinc-500">The agent will crawl this domain to build its initial knowledge base.</p>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-lg font-medium tracking-tight text-white">Context &amp; Behavior</h2>
</div>
<div className="space-y-5 bg-[#0f0f0f] border border-white/[0.08] rounded-xl p-6">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">Primary Objective</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none" placeholder="Describe what this agent should achieve (e.g., Handle customer support inquiries regarding billing and technical issues)..." rows="3"></textarea>
</div>

<div className="pt-2 space-y-4">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-700 bg-transparent peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Enable web search capabilities</span>
<span className="block text-xs text-zinc-500 mt-0.5">Allow the agent to search the internet for real-time information outside its knowledge base.</span>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-700 bg-transparent peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Human handoff</span>
<span className="block text-xs text-zinc-500 mt-0.5">Automatically escalate complex queries to a human operator via integration.</span>
</div>
</label>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5">
<div className="sticky top-24">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-zinc-400" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-lg font-medium tracking-tight text-white">Compute Plan</h2>
</div>
<div className="space-y-4">

<label className="block relative cursor-pointer group">
<input className="peer sr-only" name="plan" type="radio" value="starter"/>
<div className="p-5 rounded-xl border border-white/[0.08] bg-[#0f0f0f] hover:border-white/[0.15] peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/[0.02] transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white">Starter Compute</h3>
<p className="text-xs text-zinc-500 mt-1">GPT-3.5 core, standard latency</p>
</div>
<div className="text-right">
<span className="text-base font-medium text-white">$20</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        1,000 interactions / month
                                    </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        Weekly knowledge sync
                                    </li>
</ul>
<div className="absolute top-5 right-5 w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-indigo-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input checked="" className="peer sr-only" name="plan" type="radio" value="pro"/>
<div className="p-5 rounded-xl border border-white/[0.08] bg-[#0f0f0f] hover:border-white/[0.15] peer-checked:border-white/30 peer-checked:bg-white/[0.03] peer-checked:ring-1 peer-checked:ring-white/10 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]">
<div className="absolute -top-2.5 left-5 bg-white text-black text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider">
                                    Recommended
                                </div>
<div className="flex justify-between items-start mb-2 mt-1">
<div>
<h3 className="text-sm font-medium text-white">Pro Compute</h3>
<p className="text-xs text-zinc-500 mt-1">GPT-4 core, low latency</p>
</div>
<div className="text-right">
<span className="text-base font-medium text-white">$80</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        10,000 interactions / month
                                    </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        Real-time knowledge sync
                                    </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                        Advanced analytics dashboard
                                    </li>
</ul>
<div className="absolute top-5 right-5 w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-white flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input className="peer sr-only" name="plan" type="radio" value="enterprise"/>
<div className="p-5 rounded-xl border border-white/[0.08] bg-[#0f0f0f] hover:border-white/[0.15] peer-checked:border-indigo-500/50 peer-checked:bg-indigo-500/[0.02] transition-all">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white">Dedicated</h3>
<p className="text-xs text-zinc-500 mt-1">Custom models, zero latency</p>
</div>
<div className="text-right">
<span className="text-base font-medium text-white">Custom</span>
</div>
</div>
<div className="absolute top-5 right-5 w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-indigo-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
</div>
</label>
</div>

<div className="mt-8 pt-6 border-t border-white/[0.08]">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-zinc-400">Total due today</span>
<span className="text-lg font-medium text-white tracking-tight">$80.00</span>
</div>
<button className="w-full bg-white text-black hover:bg-zinc-200 font-medium text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Initialize Agent
                        </button>
<p className="text-center text-xs text-zinc-600 mt-4">By initializing, you agree to our Terms of Service and Data Processing Agreement.</p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
