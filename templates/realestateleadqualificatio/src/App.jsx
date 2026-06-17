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
      

<nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-zinc-950/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-zinc-100 font-semibold tracking-tighter text-lg">AAI</span>
<span className="w-px h-4 bg-zinc-800"></span>
<span className="text-xs font-medium text-zinc-500 tracking-tight">Systems</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#bottlenecks">Problem</a>
<a className="hover:text-zinc-100 transition-colors" href="#architecture">Architecture</a>
<a className="hover:text-zinc-100 transition-colors" href="#roadmap">Roadmap</a>
</div>
<a className="bg-white text-zinc-950 text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2" href="#pricing">
                Claim Pilot
            </a>
</div>
</nav>

<header className="relative pt-32 pb-24 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 text-xs text-zinc-300 font-medium mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Accepting 2 Teams for Free Pilot
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-100 tracking-tighter leading-[1.05] mb-6">
                Automated triage for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">inbound real estate leads.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                An operational layer that sits between your lead sources and agents. It instantly ingests, AI-qualifies, prioritizes, and routes prospects so you never waste time on bad leads or lose hot ones to slow response times.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-100 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2" href="#pricing">
                    Start Your Pilot <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.25em'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border border-zinc-800 text-zinc-300 font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2" href="#architecture">
                    Explore Architecture
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/10" id="bottlenecks">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight mb-4">The exact operational layer used by high-performance teams.</h2>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed">Real estate teams face four critical operational bottlenecks. This system acts as your automated defense line, directly impacting speed-to-lead, conversion efficiency, and revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 border border-zinc-700/50">
<iconify-icon className="text-zinc-100 text-lg" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-100 mb-2">Fast Response</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Eliminates slow response times. Engage prospects within seconds of submission, maximizing speed-to-lead.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 border border-zinc-700/50">
<iconify-icon className="text-zinc-100 text-lg" icon="solar:filter-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-100 mb-2">Intelligent Filtering</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Stops agents from wasting time on low-intent inquiries, out-of-area requests, or spam.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 border border-zinc-700/50">
<iconify-icon className="text-zinc-100 text-lg" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-100 mb-2">Correct Routing</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Dynamically routes leads to the right destination—calendar booking, SMS nurture, or referral queues.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 border border-zinc-700/50">
<iconify-icon className="text-zinc-100 text-lg" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-100 mb-2">Scalable Structure</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Prevents lost opportunities due to lack of operational structure as your lead volume grows.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="architecture">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight mb-4">Current System Architecture</h2>
<p className="text-sm text-zinc-400 max-w-2xl">A deterministic, three-stage pipeline designed for reliability and seamless integration via n8n.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">

<div className="hidden lg:block absolute top-[4.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 z-0"></div>

<div className="relative z-10 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center">
<iconify-icon className="text-zinc-300" icon="solar:database-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-0.5">Stage 1</span>
<h3 className="text-sm font-medium text-zinc-100">Ingestion Layer</h3>
</div>
</div>
<p className="text-xs text-zinc-400 mb-6">Captures raw data from contact forms and creates a structured lead object.</p>
<div className="mt-auto bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-4">
<div className="text-xs font-medium text-zinc-300 mb-3 border-b border-zinc-800 pb-2">Data Captured</div>
<ul className="space-y-2 text-xs text-zinc-500 font-mono">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> name &amp; email</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> phone &amp; address</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> property type</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> timeline &amp; motivation</li>
</ul>
</div>
</div>

<div className="relative z-10 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col shadow-[0_0_30px_rgba(99,102,241,0.05)] ring-1 ring-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-semibold text-indigo-500/80 uppercase tracking-widest block mb-0.5">Stage 2</span>
<h3 className="text-sm font-medium text-zinc-100">AI Qualification Brain</h3>
</div>
</div>
<p className="text-xs text-zinc-400 mb-6">Gemini evaluates the structured lead using custom logical prompts to generate actionable intelligence.</p>
<div className="mt-auto bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-[0.7rem] leading-relaxed text-zinc-300 overflow-x-auto">
<span className="text-zinc-600">{</span><br/>
                          <span className="text-indigo-300">"score"</span>: <span className="text-emerald-400">"hot|mid|cold"</span>,<br/>
                          <span className="text-indigo-300">"cold_type"</span>: <span className="text-amber-400">"low_intent|spam|null"</span>,<br/>
                          <span className="text-indigo-300">"agent_summary"</span>: <span className="text-zinc-500">"..."</span>,<br/>
                          <span className="text-indigo-300">"followup_angle"</span>: <span className="text-zinc-500">"..."</span><br/>
<span className="text-zinc-600">}</span>
</div>
</div>

<div className="relative z-10 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-zinc-900 w-8 h-8 border-zinc-800 border rounded items-center justify-center">
<svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M6 21V9a9 9 0 0 0 9 9"></path>
</svg>
</div>
<div className="">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-0.5">Stage 3</span>
<h3 className="text-sm font-medium text-zinc-100">Decision Engine</h3>
</div>
</div>
<p className="text-xs text-zinc-400 mb-6">Switch nodes route the prospect based on the AI classification to maximize conversion efficiency.</p>
<div className="mt-auto space-y-2">
<div className="p-3 border border-zinc-800/80 rounded-lg bg-zinc-900/30">
<div className="flex justify-between items-center mb-1">
<span className="text-[0.65rem] font-semibold tracking-wider uppercase text-emerald-400">Hot Lead</span>
</div>
<div className="text-xs text-zinc-400">Redirect to calendar booking &amp; notify team instantly.</div>
</div>
<div className="p-3 border border-zinc-800/80 rounded-lg bg-zinc-900/30">
<div className="flex justify-between items-center mb-1">
<span className="text-[0.65rem] font-semibold tracking-wider uppercase text-amber-400">Mid Lead</span>
</div>
<div className="text-xs text-zinc-400">Send automated SMS clarification to build readiness.</div>
</div>
<div className="p-3 border border-zinc-800/80 rounded-lg bg-zinc-900/30">
<div className="flex justify-between items-center mb-1">
<span className="text-[0.65rem] font-semibold tracking-wider uppercase text-zinc-500">Cold Lead</span>
</div>
<div className="text-xs text-zinc-400">Nurture email, out-of-area referral tag, or ignore spam.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/10" id="roadmap">
<div className="max-w-4xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-3">Production-Grade Evolution</h2>
<p className="text-sm text-zinc-400">The current architecture handles single-source inputs perfectly. As pilot programs conclude, the system will be upgraded to support complex, multi-channel environments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-200 mb-4">
<iconify-icon className="text-lg" icon="solar:layers-linear"></iconify-icon> Multi-Source Intake
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">Evolving from simple form inputs to a universal intake processor handling Facebook Lead Ads, Zillow, Realtor.com, Landing Pages, and Zapier Webhooks simultaneously.</p>
</div>
<div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-200 mb-4">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon> Persistent DB Layer
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">Connecting structured Postgres or Airtable databases to store every interaction, allowing for deep analytics, reporting, and continuous prompt optimization.</p>
</div>
<div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-200 mb-4">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon> Native CRM Sync
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">Direct read/write integrations with Follow Up Boss, GoHighLevel, HubSpot, KVCore, and Salesforce to update pipeline stages and tag quality natively.</p>
</div>
<div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-200 mb-4">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon> Response Automation
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">Moving beyond static SMS/Email to multi-touch automated follow-up sequences and AI-driven conversational appointment setting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto text-center">
<div className="w-12 h-12 mx-auto rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-zinc-300 tracking-tight mb-2">Proof &amp; Performance</h2>
<p className="text-sm text-zinc-500 italic">"Case studies and performance metrics will be published here upon completion of our initial two pilot programs."</p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center">
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-4">Implementation Options</h2>
<p className="text-sm text-zinc-400 max-w-2xl mx-auto">Start with our risk-free pilot program, or lock in standard deployment tiers designed for scaling real estate operations.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

<div className="relative bg-zinc-900/50 border border-indigo-500/30 rounded-2xl p-6 lg:scale-105 shadow-2xl shadow-indigo-500/5 z-10 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="inline-block bg-indigo-500/10 text-indigo-300 text-[0.65rem] font-semibold tracking-wider uppercase px-2 py-1 rounded mb-4 border border-indigo-500/20">
                        Active Now • 2 Spots
                    </div>
<h3 className="text-lg font-semibold text-zinc-100 mb-1">Free Pilot</h3>
<div className="text-sm text-zinc-400 mb-6">Prove the concept and test performance.</div>
<div className="text-3xl font-semibold text-zinc-100 mb-2">$0</div>
<div className="text-xs text-zinc-500 mb-6">In exchange for feedback &amp; testimonial.</div>
<a className="block hover:bg-indigo-600 transition-colors text-sm font-medium text-white text-center bg-indigo-500 w-full rounded-lg mb-8 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
                        Claim Pilot Spot
                    </a>
<div className="text-xs font-medium text-zinc-300 mb-4">What's included:</div>
<ul className="space-y-3 text-xs text-zinc-400">
<li className="flex items-start gap-2"><iconify-icon className="text-indigo-400 text-sm shrink-0" icon="solar:check-circle-bold"></iconify-icon> Connected to 1 lead source</li>
<li className="flex items-start gap-2"><iconify-icon className="text-indigo-400 text-sm shrink-0" icon="solar:check-circle-bold"></iconify-icon> AI Lead Qualification</li>
<li className="flex items-start gap-2"><iconify-icon className="text-indigo-400 text-sm shrink-0" icon="solar:check-circle-bold"></iconify-icon> Hot/Mid/Cold Routing</li>
<li className="flex items-start gap-2"><iconify-icon className="text-indigo-400 text-sm shrink-0" icon="solar:check-circle-bold"></iconify-icon> 10–14 day live testing</li>
</ul>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 opacity-80 hover:opacity-100 transition-opacity">
<h3 className="text-base font-semibold text-zinc-200 mb-1">Starter</h3>
<div className="text-xs text-zinc-500 mb-6">Simple qualification running quickly.</div>
<div className="text-2xl font-semibold text-zinc-200 mb-6">$800 <span className="text-xs font-normal text-zinc-500">setup</span></div>
<ul className="space-y-3 text-xs text-zinc-400 mb-8">
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> 1 lead source connection</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Basic AI lead scoring</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Basic follow-up routing</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Internal notifications</li>
</ul>
</div>

<div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-200 text-[0.65rem] font-medium tracking-wide px-3 py-1 rounded-full border border-zinc-600">
                        Most Popular
                    </div>
<h3 className="text-base font-semibold text-zinc-100 mb-1">Growth</h3>
<div className="text-xs text-zinc-400 mb-6">For teams actively generating leads.</div>
<div className="text-2xl font-semibold text-zinc-100 mb-6">$1,100 <span className="text-xs font-normal text-zinc-500">setup</span></div>
<ul className="space-y-3 text-xs text-zinc-300 mb-8">
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> 2 lead sources (e.g., FB + Web)</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Improved logic &amp; Agent summaries</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Custom follow-up messaging</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Priority hot lead routing</li>
</ul>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 opacity-80 hover:opacity-100 transition-opacity">
<h3 className="text-base font-semibold text-zinc-200 mb-1">Advanced</h3>
<div className="text-xs text-zinc-500 mb-6">Complete high-volume intake system.</div>
<div className="text-2xl font-semibold text-zinc-200 mb-6">$1,800 <span className="text-xs font-normal text-zinc-500">setup</span></div>
<ul className="space-y-3 text-xs text-zinc-400 mb-8">
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Up to 4 lead sources</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Advanced Buyer/Seller logic</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> CRM Integration sync</li>
<li className="flex items-start gap-2"><iconify-icon className="text-zinc-600 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> Automated follow-up sequences</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-zinc-900 bg-zinc-950 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-zinc-300 font-semibold tracking-tighter text-sm">AAI</span>
<span className="text-xs text-zinc-600">© 2023 Abdulsalam Automation.</span>
</div>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-300 transition-colors" href="mailto:contact@example.com">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
