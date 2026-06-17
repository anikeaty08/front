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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(9,9,11,0) 70%)'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold text-lg tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-emerald-400" icon="solar:command-linear"></iconify-icon>
                    taxcommand.ai
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Compare</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#">
                    Start Free Trial
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8 hover:bg-zinc-800 transition-colors" href="#">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Powered by the complete GoHighLevel ecosystem
                <iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 leading-[1.1]">
                Scale your tax firm<br/> without the chaos.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                The all-in-one CRM built specifically for modern tax professionals, powered by the full suite of GoHighLevel tools. Replace your entire tech stack, automate follow-ups, and manage your firm from one platform.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center gap-2 rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10" href="#">
                    Get Started Free
                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800 transition-colors backdrop-blur-sm" href="#">
                    Book a Demo
                </a>
</div>
<p className="mt-4 text-xs font-medium text-zinc-500">No credit card required. 14-day free trial.</p>
</div>

<div className="mt-20 max-w-6xl mx-auto">
<div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-2 backdrop-blur-sm shadow-2xl shadow-emerald-500/5">
<div className="rounded-lg border border-zinc-800/50 bg-zinc-950 overflow-hidden flex flex-col md:flex-row min-h-[400px]">

<div className="w-full md:w-56 border-r border-zinc-800/50 bg-zinc-900/20 p-4 hidden md:flex flex-col gap-4">
<div className="h-6 w-24 bg-zinc-800 rounded mb-4"></div>
<div className="flex items-center gap-3 text-zinc-400 bg-zinc-800/30 p-2 rounded-md">
<iconify-icon icon="solar:widget-linear"></iconify-icon>
<span className="text-xs font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-3 text-zinc-500 p-2">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-xs font-medium">Conversations</span>
</div>
<div className="flex items-center gap-3 text-zinc-500 p-2">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-medium">Pipelines</span>
</div>
<div className="flex items-center gap-3 text-zinc-500 p-2">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
<span className="text-xs font-medium">Automations</span>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6">
<div className="flex justify-between items-center">
<div className="h-5 w-32 bg-zinc-800 rounded"></div>
<div className="h-8 w-24 bg-zinc-800 rounded-md"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="h-24 border border-zinc-800/50 bg-zinc-900/30 rounded-lg p-4 flex flex-col justify-between">
<div className="h-3 w-16 bg-zinc-800 rounded"></div>
<div className="h-6 w-12 bg-zinc-300 rounded"></div>
</div>
<div className="h-24 border border-zinc-800/50 bg-zinc-900/30 rounded-lg p-4 flex flex-col justify-between">
<div className="h-3 w-20 bg-zinc-800 rounded"></div>
<div className="h-6 w-16 bg-zinc-300 rounded"></div>
</div>
<div className="h-24 border border-zinc-800/50 bg-zinc-900/30 rounded-lg p-4 flex flex-col justify-between">
<div className="h-3 w-24 bg-zinc-800 rounded"></div>
<div className="h-6 w-20 bg-zinc-300 rounded"></div>
</div>
</div>
<div className="flex-1 border border-zinc-800/50 bg-zinc-900/30 rounded-lg"></div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-zinc-800/50 bg-zinc-900/20 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-8">Powering modern tax practices nationwide</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">

<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:triangle-linear"></iconify-icon><span className="text-lg font-semibold tracking-tighter">Vertex</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:square-bottom-up-linear"></iconify-icon><span className="text-lg font-semibold tracking-tighter">NexusTax</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:circle-top-up-linear"></iconify-icon><span className="text-lg font-semibold tracking-tighter">Elevate</span></div>
<div className="flex items-center gap-2 hidden md:flex"><iconify-icon className="text-2xl" icon="solar:rhombus-linear"></iconify-icon><span className="text-lg font-semibold tracking-tighter">Quant</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Every GHL tool, optimized for tax.</h2>
<p className="text-base text-zinc-400 max-w-2xl font-medium">Leave clunky spreadsheets and outdated software behind. TaxCommand.ai consolidates your tech stack using the raw power of GoHighLevel's platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Omnichannel Inbox</h3>
<p className="text-sm text-zinc-400 font-medium leading-relaxed">Stop juggling apps. Manage all client communications—Two-way SMS, emails, web chat, and social media DMs—from a single, unified inbox.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-zinc-300 text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Advanced Workflows</h3>
<p className="text-sm text-zinc-400 font-medium leading-relaxed">Leverage the full power of GoHighLevel automations. Trigger SMS and email sequences for missing documents, signature reminders, and review requests.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-zinc-300 text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Unlimited Pipelines</h3>
<p className="text-sm text-zinc-400 font-medium leading-relaxed">Know exactly where every client stands. Drag and drop tax returns through custom GoHighLevel opportunity pipelines with complete visibility.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-zinc-300 text-xl" icon="solar:browser-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Funnels &amp; Websites</h3>
<p className="text-sm text-zinc-400 font-medium leading-relaxed">Replace ClickFunnels and WordPress. Build high-converting landing pages, tax appointment funnels, and modern sites with the integrated builder.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-zinc-300 text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Integrated Calendars</h3>
<p className="text-sm text-zinc-400 font-medium leading-relaxed">Ditch Calendly. Let clients book their own tax consultations directly through your native calendar, complete with automated confirmation texts.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-zinc-300 text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Pre-built Tax Snapshots</h3>
<p className="text-sm text-zinc-400 font-medium leading-relaxed">Hit the ground running with fully configured GHL snapshots built specifically for CPAs and EAs. Complete with templates, pipelines, and tags.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Replace your entire tech stack.</h2>
<p className="text-base text-zinc-400 font-medium mb-12">Stop paying separately for Calendly, Mailchimp, ClickFunnels, and Pipedrive. TaxCommand.ai brings the entire GoHighLevel ecosystem to your firm under one login.</p>
<div className="p-1 rounded-2xl bg-zinc-800/30 border border-zinc-700/50">
<div className="bg-zinc-950 rounded-xl p-8 md:p-12 text-left flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">A seamless migration to GHL.</h3>
<p className="text-sm text-zinc-400 font-medium mb-6 leading-relaxed">Switching systems shouldn't be a headache. Our dedicated onboarding team will migrate your client contacts, current pipelines, and custom fields for free.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm font-medium text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Complete CRM data import
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                1-on-1 team training sessions
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Done-for-you workflow setup
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-64 h-64">

<div className="absolute inset-0 border border-zinc-800 rounded-full"></div>
<div className="absolute inset-4 border border-zinc-800/60 rounded-full"></div>
<div className="absolute inset-8 border border-zinc-800/30 rounded-full flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
<iconify-icon className="text-4xl text-white" icon="solar:rocket-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none blur-[100px] bg-emerald-500 rounded-full"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to command your tax season?</h2>
<p className="text-base text-zinc-400 font-medium mb-10">Join forward-thinking tax professionals who are scaling faster with the power of GoHighLevel.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center gap-2 rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">
                    Start Your Free Trial
                </a>
<a className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800 transition-colors" href="#">
                    Talk to Sales
                </a>
</div>
</div>
</section>

<footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="font-semibold text-lg tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-emerald-400" icon="solar:command-linear"></iconify-icon>
                    taxcommand.ai
                </a>
<p className="text-sm text-zinc-500 font-medium max-w-xs mb-6">The modern CRM and automation engine built exclusively for tax professionals, powered by GoHighLevel.</p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Compare</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-medium">
<li><a className="hover:text-white transition-colors" href="#">vs TaxNitro</a></li>
<li><a className="hover:text-white transition-colors" href="#">vs TaxDome</a></li>
<li><a className="hover:text-white transition-colors" href="#">vs Canopy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500 font-medium">© 2024 TaxCommand.ai. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                All systems operational
            </div>
</div>
</footer>

    </>
  );
}
