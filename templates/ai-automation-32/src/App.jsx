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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="group flex items-center gap-2" href="#">
<span className="text-white text-lg font-semibold tracking-tighter group-hover:text-indigo-400 transition-colors duration-300">G.S.S</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#systems">Systems</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300" href="#contact">
                    Book Audit
                </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
<div className="absolute inset-0 bg-grid mask-image-gradient -z-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" width="14"></iconify-icon>
<span>Next-Gen Automation Systems</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tight mb-6 leading-[1.1]">
                Scale faster with <br/> intelligent systems.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                G.S.S builds bespoke AI infrastructures that automate repetitive workflows, recapture lost time, and drive operational efficiency.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Start Automating
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white border border-neutral-800 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" href="#services">
                    Explore Solutions
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">40%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Efficiency Boost</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">10k+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Tasks Automated</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">System Uptime</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">0%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Human Error</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Engineered for growth.</h2>
<p className="text-neutral-400 max-w-xl">We replace manual bottlenecks with autonomous agents and streamlined data pipelines.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group col-span-1 md:col-span-2">
<div className="h-10 w-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Support Agents</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                        Custom-trained LLMs that handle customer inquiries, qualify leads, and schedule appointments instantly, ensuring you never miss an opportunity.
                    </p>
</div>

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group">
<div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Data Extraction</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Automated scraping and structuring of unstructured data from emails, PDFs, and web sources into your CRM.
                    </p>
</div>

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group">
<div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:automotive-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Workflow Orchestration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Connect disparate apps (Slack, Notion, Airtable) to trigger complex actions without human intervention.
                    </p>
</div>

<div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group col-span-1 md:col-span-2">
<div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                        Leverage AI to analyze historical data trends, forecast sales, and optimize inventory management with precision accuracy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="systems">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="inline-block text-indigo-400 mb-4">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Seamless Integration.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    We don't just build bots; we build ecosystems. Our solutions integrate natively with your existing tech stack, ensuring zero friction adoption.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium text-sm">Custom API Development</strong>
<p className="text-xs text-neutral-500 mt-1">Bespoke endpoints for your specific data needs.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium text-sm">Secure Data Handling</strong>
<p className="text-xs text-neutral-500 mt-1">Enterprise-grade encryption and GDPR compliance.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium text-sm">Real-time Monitoring</strong>
<p className="text-xs text-neutral-500 mt-1">Dashboards to track AI performance instantly.</p>
</div>
</li>
</ul>
</div>

<div className="w-full md:w-1/2">
<div className="relative rounded-xl border border-white/10 bg-black p-6 shadow-2xl">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-neutral-600 font-mono">G.S.S | Workflow v2.4</div>
</div>

<div className="space-y-3">

<div className="flex items-center gap-4 p-3 rounded-lg bg-neutral-900 border border-white/5">
<div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:inbox-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-neutral-800 rounded mb-1.5"></div>
<div className="h-1.5 w-16 bg-neutral-800 rounded"></div>
</div>
<div className="text-[10px] text-emerald-500 font-mono">Active</div>
</div>

<div className="flex justify-center -my-1">
<div className="w-px h-4 bg-neutral-800"></div>
</div>

<div className="flex items-center gap-4 p-3 rounded-lg bg-neutral-900 border border-white/5">
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-neutral-800 rounded mb-1.5"></div>
<div className="h-1.5 w-20 bg-neutral-800 rounded"></div>
</div>
<div className="text-[10px] text-emerald-500 font-mono">Processing</div>
</div>

<div className="flex justify-center -my-1">
<div className="w-px h-4 bg-neutral-800"></div>
</div>

<div className="flex items-center gap-4 p-3 rounded-lg bg-neutral-900 border border-white/5">
<div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:upload-square-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-28 bg-neutral-800 rounded mb-1.5"></div>
<div className="h-1.5 w-12 bg-neutral-800 rounded"></div>
</div>
<div className="text-[10px] text-neutral-500 font-mono">Pending</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-40"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">Flexible Engagement Models</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-white/10 bg-neutral-900/40 rounded-2xl p-8 text-left hover:border-indigo-500/30 transition-colors">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Project Basis</h3>
<p className="text-sm text-neutral-500 mt-1">One-time implementation.</p>
</div>
<iconify-icon className="text-neutral-400" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-400">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear"></iconify-icon> System Audit &amp; Strategy
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-400">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear"></iconify-icon> Custom Bot Development
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-400">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear"></iconify-icon> Handover &amp; Training
                        </li>
</ul>
<a className="block w-full text-center py-2.5 rounded-lg border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all" href="#contact">Get Quote</a>
</div>

<div className="border border-indigo-500/30 bg-indigo-500/[0.03] rounded-2xl p-8 text-left relative">
<div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-xl rounded-tr-xl">Popular</div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Growth Partner</h3>
<p className="text-sm text-neutral-500 mt-1">Ongoing optimization.</p>
</div>
<iconify-icon className="text-indigo-400" icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Unlimited Workflows
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Monthly Iterations &amp; Upscaling
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Priority 24/7 Support
                        </li>
</ul>
<a className="block w-full text-center py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]" href="#contact">Partner With Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Ready to automate?</h2>
<p className="text-neutral-400 text-sm">Fill out the form below for a free consultation.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">First Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Last Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Email Address</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Current Challenges</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-neutral-700" placeholder="Describe your workflow bottlenecks..." rows="4"></textarea>
</div>

<div className="flex items-center gap-3 pt-2">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-neutral-700 rounded bg-neutral-900 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-linear" width="14"></iconify-icon>
</div>
<span className="ml-3 text-xs text-neutral-500">I agree to the privacy policy.</span>
</label>
</div>
<button className="w-full py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-colors mt-4" type="submit">
                    Submit Request
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white text-base font-semibold tracking-tighter">G.S.S</span>
<span className="text-neutral-600 text-xs">/</span>
<span className="text-neutral-500 text-xs">AI Automation</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 G.S.S. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
