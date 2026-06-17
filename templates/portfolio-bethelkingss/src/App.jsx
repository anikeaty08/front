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
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:bot" data-width="12"></span>
</div>
<span className="text-sm font-medium text-zinc-100 tracking-tight">AI PORTFOLIO</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="text-xs font-medium bg-white text-zinc-950 px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Book a Call
            </a>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 max-w-5xl mx-auto z-10 flex flex-col items-center text-center">
<div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300">Accepting new clients for Q4</span>
</div>
<h1 className="animate-fade-in delay-100 text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
            Automate your busywork.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Scale your business.</span>
</h1>
<p className="animate-fade-in delay-200 text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
            I build custom AI workflows using Make, n8n, and Zapier to help agencies and businesses save 20+ hours per week.
        </p>
<div className="animate-fade-in delay-300 flex flex-col sm:flex-row items-center gap-4">
<a className="px-6 py-3 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto" href="#work">
                View Proof of Work
            </a>
<a className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto" href="#contact">
                Get a Free Audit
            </a>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm py-8 overflow-hidden">
<div className="max-w-5xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-6 tracking-widest uppercase">Powering systems with</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><span className="iconify text-white" data-icon="simple-icons:openai" data-width="20"></span> <span className="text-sm font-semibold text-white">OpenAI</span></div>
<div className="flex items-center gap-2"><span className="iconify text-purple-500" data-icon="simple-icons:make" data-width="20"></span> <span className="text-sm font-semibold text-white">Make</span></div>
<div className="flex items-center gap-2"><span className="iconify text-orange-500" data-icon="simple-icons:zapier" data-width="20"></span> <span className="text-sm font-semibold text-white">Zapier</span></div>
<div className="flex items-center gap-2"><span className="iconify text-red-500" data-icon="simple-icons:n8n" data-width="20"></span> <span className="text-sm font-semibold text-white">n8n</span></div>
<div className="flex items-center gap-2"><span className="iconify text-yellow-500" data-icon="simple-icons:airtable" data-width="20"></span> <span className="text-sm font-semibold text-white">Airtable</span></div>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-5xl mx-auto border-b border-white/5">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-zinc-900 border border-white/10 rounded-xl p-6 aspect-square flex flex-col justify-center items-center text-center">
<div className="w-24 h-24 bg-zinc-800 rounded-full mb-6 overflow-hidden flex items-center justify-center border-2 border-zinc-700">
<span className="iconify text-zinc-500" data-icon="lucide:user" data-width="40"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Bethel Kings</h3>
<p className="text-sm text-zinc-400 mb-4">AI Automation Specialist</p>
<div className="flex gap-3">
<a className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:mail" data-width="16"></span></a>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Stop wasting time on tasks a robot can do better.</h2>
<p className="text-zinc-400 mb-6 leading-relaxed font-light">
                    Hi, I'm an automation engineer. I help businesses streamline their operations by connecting their favorite apps.
                </p>
<p className="text-zinc-400 mb-8 leading-relaxed font-light">
                    Most companies spend 30% of their time on data entry, copy-pasting, and organizing files. I build invisible systems that handle all of that instantly, so you can focus on strategy and growth.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2"></span> No more manual data entry
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2"></span> Instant lead response times
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2"></span> Personalized client experiences at scale
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto" id="services">
<div className="text-center mb-16">
<h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-widest">Services</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">What I Automate</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:message-square-plus" data-width="20"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Lead Generation</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Scrape leads, enrich data with AI, and sync to your CRM automatically. Never copy-paste a contact again.
                </p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify text-purple-400" data-icon="lucide:bot" data-width="20"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">AI Chatbots</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Custom assistants trained on your data to handle customer support tickets 24/7 with human-like accuracy.
                </p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<span className="iconify text-emerald-400" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Operations</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Auto-invoice generation, contract sending, and project management updates triggered by status changes.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5" id="work">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-widest">Portfolio</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Recent Projects</h3>
</div>
<p className="text-zinc-500 text-sm mt-4 md:mt-0">Actual systems built for real clients.</p>
</div>
<div className="space-y-20">

<div className="group grid md:grid-cols-2 gap-10 items-center">
<div className="order-2 md:order-1 relative rounded-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-8 bg-zinc-900 border-b border-white/5 flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-8 pt-12">

<div className="flex flex-col items-center gap-4 text-xs font-mono text-zinc-400">
<div className="w-full p-3 bg-zinc-900 border border-white/10 rounded flex items-center justify-between">
<span className="flex items-center gap-2"><span className="iconify text-blue-400" data-icon="lucide:mail"></span> New Lead</span>
<span className="text-green-500">Trigger</span>
</div>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-down"></span>
<div className="w-full p-3 bg-zinc-900 border border-white/10 rounded flex items-center justify-between">
<span className="flex items-center gap-2"><span className="iconify text-yellow-400" data-icon="lucide:search"></span> Enrich (Apollo)</span>
<span className="text-zinc-500">API</span>
</div>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-down"></span>
<div className="w-full p-3 bg-zinc-900 border border-white/10 rounded flex items-center justify-between">
<span className="flex items-center gap-2"><span className="iconify text-green-400" data-icon="lucide:sheet"></span> Add to CRM</span>
<span className="text-zinc-500">Action</span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h4 className="text-2xl font-medium text-white mb-4">Automated Lead Enrichment</h4>
<p className="text-zinc-400 mb-6 font-light leading-relaxed">
                            Built for a marketing agency. The system detects new form submissions, researches the lead on LinkedIn/Apollo to find company revenue and size, and updates the CRM with a "Lead Score" automatically.
                        </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div>
<span className="block text-xs uppercase text-zinc-500 font-semibold mb-1">Before</span>
<span className="text-sm text-zinc-300">15 mins manual research per lead</span>
</div>
<div>
<span className="block text-xs uppercase text-indigo-400 font-semibold mb-1">After</span>
<span className="text-sm text-white">Instant data in HubSpot</span>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">Make.com</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">Apollo API</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">HubSpot</span>
</div>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-10 items-center">
<div className="md:text-right">
<h4 className="text-2xl font-medium text-white mb-4">Content Repurposing Engine</h4>
<p className="text-zinc-400 mb-6 font-light leading-relaxed">
                            A system for a creator that takes a YouTube video link, transcribes it, extracts key insights using GPT-4, and generates 5 Tweets, a LinkedIn post, and a newsletter draft automatically.
                        </p>
<div className="grid grid-cols-2 gap-4 mb-8 md:justify-end">
<div className="md:text-right">
<span className="block text-xs uppercase text-zinc-500 font-semibold mb-1">Before</span>
<span className="text-sm text-zinc-300">4 hours writing per video</span>
</div>
<div className="md:text-right">
<span className="block text-xs uppercase text-indigo-400 font-semibold mb-1">After</span>
<span className="text-sm text-white">Content ready in 2 mins</span>
</div>
</div>
<div className="flex flex-wrap gap-2 md:justify-end">
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">n8n</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">OpenAI</span>
<span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">Notion</span>
</div>
</div>
<div className="relative rounded-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-8 bg-zinc-900 border-b border-white/5 flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="p-8">
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center shrink-0">
<span className="iconify text-red-500" data-icon="lucide:youtube" data-width="16"></span>
</div>
<div className="flex-1 bg-zinc-900 rounded p-2 border border-white/5">
<div className="h-2 w-16 bg-zinc-800 rounded mb-2"></div>
<div className="h-1.5 w-full bg-zinc-800/50 rounded"></div>
</div>
</div>
<div className="flex justify-center">
<span className="iconify text-zinc-600 animate-pulse" data-icon="lucide:arrow-down" data-width="16"></span>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center shrink-0">
<span className="iconify text-blue-500" data-icon="lucide:twitter" data-width="16"></span>
</div>
<div className="flex-1 bg-zinc-900 rounded p-2 border border-white/5">
<div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-blue-700/20 flex items-center justify-center shrink-0">
<span className="iconify text-blue-700" data-icon="lucide:linkedin" data-width="16"></span>
</div>
<div className="flex-1 bg-zinc-900 rounded p-2 border border-white/5">
<div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ways to work with me</h2>
<p className="text-zinc-400">Simple pricing. High ROI.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<h3 className="text-xl font-medium text-white mb-2">Quick Win</h3>
<p className="text-sm text-zinc-400 mb-6">Perfect for fixing one specific pain point.</p>
<div className="text-3xl font-medium text-white mb-6">$950 <span className="text-sm text-zinc-500 font-normal">/ one-time</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-300"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> 1 Complex Workflow</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Tool Integration</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Video Documentation</li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#contact">Book a "Quick Win"</a>
</div>

<div className="relative p-8 rounded-2xl border border-indigo-500/30 bg-zinc-900/60 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-wider">Popular</div>
<h3 className="text-xl font-medium text-white mb-2">Custom System</h3>
<p className="text-sm text-zinc-400 mb-6">Complete operations overhaul.</p>
<div className="text-3xl font-medium text-white mb-6">$2,500+ <span className="text-sm text-zinc-500 font-normal">/ project</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-300"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> 3-5 Automations</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Full Process Audit</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> 1 Month Support</li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-white text-center text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" href="#contact">Get Custom Quote</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-8 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border border-white/5 rounded-lg bg-zinc-900/30 overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-zinc-200 list-none">
<span>Which tools do you use?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
                            I primarily use Make (formerly Integromat) and n8n for complex workflows. For simpler connections, I use Zapier. I also work with Airtable, OpenAI API, and can integrate with almost any CRM or software that has an API.
                        </div>
</details>
</div>
<div className="border border-white/5 rounded-lg bg-zinc-900/30 overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-zinc-200 list-none">
<span>How long does it take to build?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
                            Simple "Quick Win" automations can be delivered in 48 hours. Custom Systems typically take 2-3 weeks depending on complexity, testing, and revisions.
                        </div>
</details>
</div>
<div className="border border-white/5 rounded-lg bg-zinc-900/30 overflow-hidden">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-zinc-200 list-none">
<span>Do you offer maintenance?</span>
<span className="iconify transition-transform group-open:rotate-180 text-zinc-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
                            Yes. Automations are robust, but APIs change. I offer a monthly retainer for monitoring and fixing any issues that arise, or I can hand it off to your team with training.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-zinc-950" id="contact">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<span className="iconify text-white" data-icon="lucide:bot"></span>
<span className="text-sm font-bold text-white">AI PORTFOLIO</span>
</div>
<p className="text-xs text-zinc-500">© 2024. Building the future of work.</p>
</div>
<div className="flex gap-6">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="mailto:hello@example.com">hello@example.com</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
