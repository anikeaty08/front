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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="tracking-tighter text-xl font-semibold text-slate-900 uppercase">Alris</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#solution">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#industries">Industries</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors hidden sm:block" href="#demo">Login</a>
<a className="bg-slate-900 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-slate-800 lift-transition shadow-sm" href="#demo">Book Demo</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl"></div>
<div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-slate-50/80 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Omnichannel AI Platform for Customer-Facing Teams
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
                        One AI agent handles calls 24/7, responds to emails, sends SMS, and updates records automatically. Your team stops doing manual follow-ups. Customers get instant responses on their preferred channel.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
<button className="bg-gradient-to-b from-blue-500 to-blue-600 text-white font-medium text-sm py-3 px-6 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 lift-hover lift-transition w-full sm:w-auto text-center border border-blue-400/20">
                            Book Demo
                        </button>
<button className="bg-white text-blue-600 font-medium text-sm py-3 px-6 rounded-full border border-blue-200 hover:bg-blue-50 lift-hover lift-transition w-full sm:w-auto text-center flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                            Try Alris Live
                        </button>
</div>
<a className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1 group" href="#pricing">
                        See Pricing <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative hidden lg:block h-[500px]">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-400">Unified Conversation Thread</div>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="self-start bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm p-3 max-w-[80%] flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 text-base" icon="solar:phone-linear"></iconify-icon>
<p className="text-xs text-slate-600 leading-relaxed">Hi, I missed my appointment yesterday and need to reschedule for next week.</p>
</div>
<div className="self-end bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] flex items-start gap-3 shadow-sm">
<iconify-icon className="text-blue-200 mt-0.5 text-base" icon="solar:robot-linear"></iconify-icon>
<p className="text-xs leading-relaxed">I can help with that. I have availability next Tuesday at 10 AM or Thursday at 2 PM. Do either of those work?</p>
</div>
<div className="self-start bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm p-3 max-w-[80%] flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5 text-base" icon="solar:letter-linear"></iconify-icon>
<p className="text-xs text-slate-600 leading-relaxed">Email received later: "Actually, Thursday at 2 PM is perfect. Please confirm."</p>
</div>
<div className="self-end bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] flex items-start gap-3 shadow-sm">
<iconify-icon className="text-blue-200 mt-0.5 text-base" icon="solar:robot-linear"></iconify-icon>
<p className="text-xs leading-relaxed">Confirmed for Thursday at 2 PM. I've updated your record and sent a calendar invite.</p>
</div>
<div className="mx-auto bg-green-50 border border-green-100 text-green-700 rounded-full py-1.5 px-4 flex items-center gap-2 mt-2">
<iconify-icon className="text-sm" icon="solar:database-linear"></iconify-icon>
<span className="text-xs font-medium tracking-tight">CRM Automatically Updated</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">How Your Team Actually Works (And Why It's Fragmented)</h2>
<p className="text-lg text-slate-500">Most service businesses use 3-4 separate tools. Here's why that costs you time and money.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 uppercase mb-4">Your team is great at:</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Answering customer calls</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Writing follow-up emails</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Sending SMS reminders</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Updating records</li>
</ul>
</div>
<div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
<h3 className="text-sm font-semibold tracking-tight text-red-900 uppercase mb-4">But here's the reality:</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon> Customer calls on Platform A</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon> You follow up on Platform B</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon> You remind on Platform C</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon> You log everything manually</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl -mr-20 -mt-20"></div>
<h3 className="text-xl font-medium tracking-tight mb-6 relative z-10">The Cost</h3>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-slate-300 text-xs" icon="solar:ghost-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Conversation context lost between platforms</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-slate-300 text-xs" icon="solar:refresh-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Customers repeat information across channels</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-slate-300 text-xs" icon="solar:clock-circle-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Staff spends 10-15 hours/week on manual data entry</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon className="text-slate-300 text-xs" icon="solar:wad-of-money-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Software costs $500-1000/month for fragmented tools</span>
</li>
</ul>
</div>
<div className="text-center p-6 bg-blue-50 border border-blue-100 rounded-2xl">
<p className="text-lg font-medium text-blue-900 tracking-tight">What if it was all in one place?</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">One AI. All Channels. Unified Context.</h2>
<p className="text-lg text-slate-500">Alris handles voice, email, SMS, and CRM updates in one unified agent.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white border border-slate-200 rounded-2xl p-6 lift-hover lift-transition flex flex-col group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-4 relative z-10">Calls (24/7)</h3>
<ul className="space-y-3 mb-6 flex-grow relative z-10">
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Inbound calls answered instantly</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Outbound calls made proactively</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Smart call routing</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Seamless human handoff</li>
</ul>
<div className="pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Customer not available? Auto SMS sent
                    </div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 lift-hover lift-transition flex flex-col group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-4 relative z-10">Email</h3>
<ul className="space-y-3 mb-6 flex-grow relative z-10">
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Read incoming emails</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Draft replies automatically</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Send personalized emails</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Extract tasks and actions</li>
</ul>
<div className="pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Customer prefers email? Continue there
                    </div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 lift-hover lift-transition flex flex-col group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:chat-line-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-4 relative z-10">SMS</h3>
<ul className="space-y-3 mb-6 flex-grow relative z-10">
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Send confirmations &amp; reminders</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Handle text replies</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Two-way conversations</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Timely follow-ups</li>
</ul>
<div className="pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Customer replies? AI continues conversation
                    </div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 lift-hover lift-transition flex flex-col group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-4 relative z-10">CRM Integration</h3>
<ul className="space-y-3 mb-6 flex-grow relative z-10">
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Auto-update customer records</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Unified conversation thread logged</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Zero manual data entry</li>
<li className="flex items-start gap-2 text-sm text-slate-500"><iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Real-time sync with your CRM</li>
</ul>
<div className="pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Everything automatically logged
                    </div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl border-t-2 border-t-blue-500 border-x border-b border-slate-200 p-6 text-center max-w-4xl mx-auto">
<p className="text-sm sm:text-base font-medium text-slate-700">
                    All four channels work together in one agent. Conversation never breaks. Context always preserved. Everything auto-logged.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(at 40% 20%, hsla(228,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">See Alris in Action</h2>
<p className="text-lg text-slate-400">Watch how Alris handles real customer interactions across voice, email, and SMS in seconds.</p>
</div>

<div className="max-w-[1000px] mx-auto aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden group cursor-pointer mb-12 flex flex-col justify-end">
<div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon className="text-3xl text-white ml-2" icon="solar:play-bold"></iconify-icon>
</div>
</div>

<div className="h-12 bg-slate-900/80 backdrop-blur border-t border-slate-700/50 px-4 flex items-center gap-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg text-white" icon="solar:play-linear"></iconify-icon>
<div className="flex-grow h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
</div>
<span className="text-xs font-medium text-slate-300">01:24 / 03:45</span>
<iconify-icon className="text-lg text-white" icon="solar:volume-loud-linear"></iconify-icon>
<iconify-icon className="text-lg text-white" icon="solar:full-screen-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
<button className="bg-blue-600 text-white font-medium text-sm py-3 px-8 rounded-full hover:bg-blue-500 lift-hover lift-transition w-full sm:w-auto text-center border border-blue-500 shadow-lg shadow-blue-900/50">
                    Book Live Demo
                </button>
<button className="bg-transparent text-white font-medium text-sm py-3 px-8 rounded-full border border-slate-600 hover:bg-slate-800 lift-hover lift-transition w-full sm:w-auto text-center">
                    Schedule a Call
                </button>
</div>
<div className="text-center mt-6">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-white" href="#pricing">
                    Skip video and see pricing
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">Why Omnichannel AI Works Better</h2>
<p className="text-lg text-slate-500">Three core advantages that set omnichannel apart.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm relative pt-12 flex flex-col h-full">
<div className="absolute -top-4 left-8 bg-blue-50 border border-blue-200 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">1</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-6 uppercase tracking-wider">Unified Context</h3>
<div className="flex flex-col gap-6 flex-grow">
<div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Single-Channel</div>
<p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">Customer calls, then must email, then must text, repeating info each time</p>
</div>
<div>
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1"><iconify-icon icon="solar:stars-linear"></iconify-icon> Alris</div>
<p className="text-sm text-slate-800 font-medium leading-relaxed bg-blue-50 p-3 rounded-lg border border-blue-100">Customer calls, then texts, then emails, AI remembers everything. Zero repetition.</p>
</div>
</div>
<div className="mt-8 pt-4 border-t border-slate-100">
<div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Result</div>
<p className="text-sm text-slate-700 font-medium">Faster resolution, better customer experience</p>
</div>
</div>

<div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm relative pt-12 flex flex-col h-full">
<div className="absolute -top-4 left-8 bg-blue-50 border border-blue-200 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">2</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-6 uppercase tracking-wider">Customer Choice</h3>
<div className="flex flex-col gap-6 flex-grow">
<div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Single-Channel</div>
<p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">"Please call us" or "Email only"</p>
</div>
<div>
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1"><iconify-icon icon="solar:stars-linear"></iconify-icon> Alris</div>
<p className="text-sm text-slate-800 font-medium leading-relaxed bg-blue-50 p-3 rounded-lg border border-blue-100">Customer calls, texts, or emails, you respond on their preferred channel</p>
</div>
</div>
<div className="mt-8 pt-4 border-t border-slate-100">
<div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Result</div>
<p className="text-sm text-slate-700 font-medium">Higher satisfaction, faster engagement</p>
</div>
</div>

<div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm relative pt-12 flex flex-col h-full">
<div className="absolute -top-4 left-8 bg-blue-50 border border-blue-200 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">3</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-6 uppercase tracking-wider">Simplified Operations</h3>
<div className="flex flex-col gap-6 flex-grow">
<div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Single-Channel</div>
<p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">Call platform + Email platform + SMS platform + Manual CRM = Complex, fragmented, expensive</p>
</div>
<div>
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1"><iconify-icon icon="solar:stars-linear"></iconify-icon> Alris</div>
<p className="text-sm text-slate-800 font-medium leading-relaxed bg-blue-50 p-3 rounded-lg border border-blue-100">One platform, all channels, auto-logging</p>
</div>
</div>
<div className="mt-8 pt-4 border-t border-slate-100">
<div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Result</div>
<p className="text-sm text-slate-700 font-medium">Simpler operations, lower costs, zero manual work</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Results from Companies Using Alris</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
<div className="text-4xl sm:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">60%</div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Fewer Missed Calls</div>
<p className="text-xs text-slate-500">24/7 availability means instant answers</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
<div className="text-4xl sm:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">3x</div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Faster Email Responses</div>
<p className="text-xs text-slate-500">AI drafts and sends automatically in seconds</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
<div className="text-4xl sm:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">50%</div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Less Manual Admin Work</div>
<p className="text-xs text-slate-500">Everything auto-logged, zero data entry</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
<div className="text-4xl sm:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">40%</div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Lower Software Costs</div>
<p className="text-xs text-slate-500">One platform instead of 3-4 separate tools</p>
</div>
</div>

<div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl text-center flex flex-col items-center justify-center min-h-[300px] border-dashed">
<iconify-icon className="text-4xl text-slate-700 mb-4" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-2 text-slate-400">Customer Case Study Incoming</h3>
<p className="text-sm text-slate-500 max-w-md mx-auto mb-6">Real-world success stories are being finalized and will be featured here shortly.</p>
<div className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700 cursor-not-allowed">
                    Read Full Case Study
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">Built for Service-Focused Businesses</h2>
<p className="text-lg text-slate-500">See how Alris solves specific challenges across industries.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Healthcare</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Patient scheduling &amp; rescheduling</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Appointment reminders (SMS + Email)</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Pre-visit intake automation</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Post-appointment follow-ups</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/healthcare">
                        See how healthcare uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Insurance</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Policy inquiry handling</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Quote generation &amp; follow-up</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Document request &amp; delivery</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Claims inquiry responses</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/insurance">
                        See how insurance uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Retail &amp; Ecommerce</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Order tracking</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Returns processing</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Delivery notifications</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Customer inquiries</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/retail">
                        See how retail &amp; ecommerce uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Financial Services</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Account inquiries</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Loan processing</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Document requests</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Compliance-ready support</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/financial-services">
                        See how financial services uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Real Estate</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Lead qualification</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Showing scheduling</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Property information delivery</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Follow-up automation</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/real-estate">
                        See how real estate uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Professional Services</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Client scheduling</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Meeting follow-ups</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Document requests</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Consultation confirmations</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/professional-services">
                        See how professional services uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Hospitality &amp; Travel</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Reservation calls</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Booking confirmations</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Guest follow-ups</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Feedback collection</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/hospitality">
                        See how hospitality &amp; travel uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-4 uppercase">Home Services</h3>
<ul className="space-y-2 mb-6 flex-grow">
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Appointment scheduling</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Service confirmations</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Follow-up calls</li>
<li className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-300 mt-0.5">•</span> Customer feedback</li>
</ul>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group w-fit" href="/industries/home-services">
                        See how home services uses Alris <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-600 bg-slate-100 py-2 px-6 rounded-full inline-block">We specialize in service businesses. See how your industry uses Alris.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">How Alris Works</h2>
<p className="text-lg text-slate-500">Simple 3-step process.</p>
</div>
<div className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-8 max-w-5xl mx-auto mb-12">

<div className="flex-1 bg-white border border-blue-100 rounded-2xl p-8 text-center shadow-sm relative">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold mx-auto mb-4 border border-blue-100">1</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 uppercase mb-3">Customer Initiates</h3>
<p className="text-sm text-slate-600">They call, email, or text</p>

<div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-blue-300 z-10 bg-slate-50 p-1">
<iconify-icon className="text-2xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-blue-300 z-10 bg-slate-50 p-2">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-blue-600 border border-blue-500 rounded-2xl p-8 text-center shadow-md relative text-white">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold mx-auto mb-4 border border-blue-400">2</div>
<h3 className="text-sm font-semibold tracking-tight uppercase mb-3">Alris Responds</h3>
<p className="text-sm text-blue-100 leading-relaxed">Understands full context, takes action, follows up automatically</p>

<div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-blue-300 z-10 bg-slate-50 p-1">
<iconify-icon className="text-2xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-blue-300 z-10 bg-slate-50 p-2">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-white border border-blue-100 rounded-2xl p-8 text-center shadow-sm">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold mx-auto mb-4 border border-blue-100">3</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 uppercase mb-3">Automatic Execution</h3>
<p className="text-sm text-slate-600 leading-relaxed">Sends confirmations, reminders, logs everything</p>
</div>
</div>
<div className="text-center max-w-2xl mx-auto">
<div className="bg-green-50 border border-green-100 text-green-800 text-sm font-medium py-3 px-6 rounded-full inline-block mb-4 shadow-sm">
<span className="font-semibold uppercase tracking-tight mr-2">Result:</span> Better customer experience, zero staff overhead
                </div>
<p className="text-sm text-slate-500">Works with your existing CRM, calendar, and email tools.</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-2">Simple, Transparent Pricing</h2>
<p className="text-lg text-slate-500 mb-8">Start at $249/month. No per-minute charges. All channels included.</p>
<div className="text-5xl sm:text-6xl font-medium tracking-tighter text-blue-600 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    $249<span className="text-xl text-slate-400 tracking-normal font-normal">/mo</span>
</div>
<div className="max-w-md mx-auto text-left mb-10">
<p className="text-sm font-medium text-slate-900 mb-4 text-center">Starting at $249/month for all channels (voice, email, SMS).<br/>Choose a plan that fits your business:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Scale voice minutes as you grow</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Add SMS &amp; email volume when needed</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Upgrade anytime, no lock-in</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> No hidden fees, no overage charges</li>
</ul>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-blue-600 text-white font-medium text-sm py-3 px-8 rounded-full hover:bg-blue-700 lift-hover lift-transition w-full sm:w-auto text-center shadow-md shadow-blue-500/20">
                        See Full Pricing
                    </button>
<button className="bg-white text-blue-600 font-medium text-sm py-3 px-8 rounded-full border border-blue-200 hover:bg-blue-50 lift-hover lift-transition w-full sm:w-auto text-center">
                        Book Demo
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Latest from Our Blog</h2>
<p className="text-lg text-slate-500">Tips, trends, and insights for customer-facing teams.</p>
</div>
<a className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 group whitespace-nowrap" href="/blog">
                    View All Articles <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden lift-hover lift-transition group cursor-pointer flex flex-col">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">Customer Support</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">The True Cost of Fragmented Communication Tools</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-2">Discover how context switching and manual data entry are silently draining your team's productivity and bottom line.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs text-slate-400">By Sarah Jenkins • Oct 12, 2025</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden lift-hover lift-transition group cursor-pointer flex flex-col">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">AI Automation</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Why "Omnichannel" is More Than Just a Buzzword</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-2">Connecting channels isn't enough. The future belongs to platforms that maintain unified conversational context.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs text-slate-400">By David Chen • Oct 05, 2025</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden lift-hover lift-transition group cursor-pointer flex flex-col hidden sm:flex lg:flex">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon className="text-4xl" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">Case Studies</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">How Modern Clinics Are Eliminating Missed Calls</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-2">A deep dive into how 24/7 AI voice agents are transforming patient scheduling and reducing administrative overhead.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs text-slate-400">By Emily Ross • Sep 28, 2025</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all" open="">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>How does Alris handle calls 24/7?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        Alris is AI-powered and always running. It answers calls instantly, no matter the time of day. Never miss a customer again.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>How does omnichannel conversation work?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        When a customer calls and then emails, Alris remembers the call. When they text, Alris remembers both. One unified conversation thread—customer context never breaks.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>Does Alris replace my team?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        No. Alris handles routine tasks (calls, emails, scheduling) so your team can do higher-value work like closing deals and solving complex issues.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>What tools does Alris integrate with?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        Alris works with your existing CRM, calendar, email, and internal systems. No tool replacement needed. It enhances your existing stack.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>How long does implementation take?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        Most implementations go live in 2-4 weeks, depending on your system complexity and integration needs.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>Is my data secure?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        Yes. Alris is SOC 2 Type II certified. Your data is encrypted and protected. Learn more on our security page.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>Can I try it before buying?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        Absolutely! Click "Try Alris Live" in the hero section to chat with our agent in real-time. Or book a 30-minute demo for your use case.
                    </div>
</details>

<details className="group bg-slate-50 border border-slate-200 rounded-2xl open:border-blue-200 open:bg-white transition-all">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none select-none">
<span>What's the pricing?</span>
<iconify-icon className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 pt-2">
                        Starting at $299/month for all channels (calls, emails, SMS, CRM). No per-minute charges. See full pricing for all plans.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

<div>
<h4 className="text-sm font-semibold text-white tracking-tight uppercase mb-6">Solutions</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">Voice Agent</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Email Automation</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">SMS Automation</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">CRM Integration</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Workflows</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-tight uppercase mb-6">Industries</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Healthcare</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Insurance</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Retail &amp; Ecommerce</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Financial Services</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Real Estate</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Professional Services</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Hospitality &amp; Travel</a></li>
<li><a className="text-sm hover:text-white transition-colors uppercase text-xs tracking-wider" href="#">Home Services</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-tight uppercase mb-6">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Security &amp; Compliance</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white tracking-tight uppercase mb-6">Company</h4>
<ul className="space-y-3 mb-8">
<li><a className="text-sm hover:text-white transition-colors" href="#">Compare vs Retell AI</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Compare vs Synthflow</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Compare vs Vapi</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Why Omnichannel?</a></li>
</ul>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a> 
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon></a> 
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a> 
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon></a> 
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="tracking-tighter text-xl font-semibold text-white uppercase">Alris</div>
<div className="text-xs text-slate-500 flex flex-wrap justify-center gap-4">
<span>© 2026 Alris AI.</span>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Compliance</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
