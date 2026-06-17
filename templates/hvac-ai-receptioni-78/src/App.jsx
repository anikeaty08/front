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
      

<nav className="sm:px-6 lg:px-8 flex max-w-7xl mx-auto pt-6 px-4 pb-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="uppercase text-xl font-semibold text-slate-900 tracking-tight">Hvac Flows</div>
</div>
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="#booking">Contact Us</a>
</nav>

<header className="relative pt-12 pb-24 overflow-hidden">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
                Book 5-10 New Jobs Every Month Without Working More Hours And <span className="text-blue-600">Zero Ad Spend</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-slate-600 max-w-2xl mt-6 mr-auto ml-auto">See exactly how HVAC companies are booking more jobs and capturing missed revenue, automatically.</p>

<div className="mt-12 max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
<wistia-player aspect="1.7777777777777777" className="" media-id="mf38p0kko1" unique-id="wistia-mf38p0kko1-79"></wistia-player>
</div>
</div>
<p className="mt-6 text-sm font-medium text-slate-500 uppercase tracking-widest">
                Watch how it works in under 60 seconds
            </p>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5" href="#booking">
                    Learn More
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="mt-16 pt-8 border-t border-slate-200">
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-600 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Answers every call instantly
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-xl" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Books jobs into your calendar
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Works 24/7 (nights &amp; weekends)
                    </div>
</div>
</div>
</div>
</header><style className="wistia_injected_style" id="wistia_36_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style><style className="wistia_injected_style" id="wistia_36_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style><style className="wistia_injected_style" id="wistia_36_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style><style className="wistia_injected_style" id="wistia_36_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style>

<section className="text-white bg-slate-900 pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Every Missed Call Is Lost Revenue
                </h2>
<p className="mt-4 text-slate-400 text-lg">
                    The HVAC industry moves fast. If you don't answer, they call the next guy on Google.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
<div className="flex text-rose-400 bg-rose-500/10 w-12 h-12 rounded-xl mb-4 items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:settings-linear"></iconify-icon>
</div>
<p className="text-base font-medium text-slate-200">You’re on a job → calls go unanswered.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-4 text-rose-400">
<iconify-icon className="text-2xl" icon="solar:moon-sleep-linear"></iconify-icon>
</div>
<p className="text-base font-medium text-slate-200">After-hours calls go straight to voicemail.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
<div className="flex text-rose-400 bg-rose-500/10 w-12 h-12 rounded-xl mb-4 items-center justify-center">
<svg className="text-2xl" data-icon-set="solar" data-solar="graph-up-linear" height="24" style={{color: 'rgb(251, 113, 133)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path className="" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<p className="text-base font-medium text-slate-200">Peak season overwhelms your phone lines.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-4 text-rose-400">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<p className="text-base font-medium text-slate-200">Customers call the next company instantly.</p>
</div>
</div>

<div className="flex mt-16 justify-center">
<a className="inline-flex items-center justify-center hover:bg-blue-700 shadow-blue-600/20 transition-all hover:-translate-y-0.5 text-base font-semibold text-white bg-blue-600 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#calendly-embed">
                    Learn More
                    <iconify-icon className="text-xl ml-2" height="20" icon="solar:arrow-right-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight">
                    Your 24/7 AI Receptionist That Never Misses a Call
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:call-chat-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Answers Every Call Instantly</h3>
<p className="text-slate-600 text-base">No more missed opportunities — ever. Every customer speaks to someone immediately.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Books Jobs Automatically</h3>
<p className="text-slate-600 text-base">Turns inbound calls into scheduled revenue directly on your calendar without human input.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Works 24/7</h3>
<p className="text-slate-600 text-base">You never close, even when you’re off the clock, sleeping, or on a weekend vacation.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:filter-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Qualifies Leads</h3>
<p className="text-slate-600 text-base">Filters out spam, tire-kickers, and junk so you only focus on real, paying jobs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                        Turn More Calls Into Revenue — Automatically
                    </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-slate-700 font-medium">Capture 100% of inbound leads</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-slate-700 font-medium">Book more jobs without hiring additional staff</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-slate-700 font-medium">Stop losing high-ticket jobs to local competitors</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-slate-700 font-medium">Scale your operations without adding fixed overhead</span>
</li>
</ul>
</div>
<div className="flex-shrink-0 w-full md:w-64 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-3xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">+65%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">Avg Revenue Increase</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-center bg-slate-900 pt-24 pb-24" id="booking">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-4 pl-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Stop Letting Missed Calls Cost You Thousands
            </h2>
<p className="text-lg text-slate-200 max-w-2xl mr-auto mb-12 ml-auto">Book a call to see how this works for your company</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">

</div>

<div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-700" id="calendly-embed">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/adrian-shier/30min" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe frameborder="0" height="100%" src="https://calendly.com/adrian-shier/30min?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</section>
<footer className="bg-slate-950 py-8 text-center border-t border-slate-800">
<p className="text-sm text-slate-500">© 2026 HVAC Flows. All rights reserved.</p>
</footer>

    </>
  );
}
