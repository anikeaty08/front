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
      

<div className="fixed top-[-10%] left-1/4 w-[800px] h-[800px] bg-[#8624FF] opacity-[0.04] rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-500 opacity-[0.03] rounded-full blur-[100px] pointer-events-none z-0"></div>

<header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
<div className="max-w-[1200px] w-full bg-white/70 backdrop-blur-2xl border border-white/50 rounded-full px-6 h-14 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 items-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] pointer-events-auto">

<div className="col-span-2 md:col-span-2 lg:col-span-3 flex items-center">
<a className="font-semibold tracking-tighter text-xl text-gray-900 uppercase" href="#">ALRIS</a>
</div>

<nav className="hidden md:flex md:col-span-4 lg:col-span-6 items-center justify-center gap-8">
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#company">Company</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#blog">Blog</a>
</nav>

<div className="col-span-2 md:col-span-2 lg:col-span-3 flex items-center justify-end gap-4">
<a className="hidden lg:block text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">Try Alris Live</a>
<a className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-black shadow-sm transition-colors" href="#">Book Demo</a>
</div>
</div>
</header>

<section className="px-3 pt-3 pb-8 relative z-10 w-full" id="hero">
<div className="w-full bg-[#5E19B8] p-3 rounded-[28px] shadow-[0_20px_40px_-15px_rgba(94,25,184,0.3)]">
<div className="w-full bg-gradient-to-b from-[#2F0C5C] to-[#47138A] rounded-[16px] pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[85vh]">

<div className="max-w-[828px] mx-auto flex flex-col gap-6 relative z-20">
<h1 className="text-5xl md:text-6xl font-light tracking-[-0.04em] text-white leading-tight">
                        Omnichannel AI Platform<br className="hidden md:block"/> for Customer-Facing Teams
                    </h1>
<p className="text-lg text-[#F3EDFF] max-w-[720px] mx-auto font-normal leading-relaxed">
                        One AI agent handles calls 24/7, responds to emails, sends SMS, and updates records automatically. Your team stops doing manual follow-ups. Customers get instant responses on their preferred channel.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
<button className="bg-gradient-to-b from-[#9500E5] to-[#C31DE0] text-white px-6 py-3 rounded-lg text-base font-medium hover:brightness-110 transition-all shadow-[0_4px_5px_rgba(149,0,229,0.15),0_10px_13px_rgba(149,0,229,0.22),0_25px_32px_rgba(149,0,229,0.18),0_42px_107px_rgba(149,0,229,0.34),inset_0_1px_4px_rgba(242,217,255,1),inset_0_1px_18px_rgba(242,217,255,1)] w-full sm:w-auto">
                            Book Demo
                        </button>
<button className="bg-[#F3EDFF] border border-white/20 text-[#2F0C5C] px-6 py-3 rounded-lg text-base font-medium hover:bg-white transition-all w-full sm:w-auto shadow-sm">
                            Try Alris Live
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="bg-white/40 backdrop-blur-3xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.03)] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-16 relative overflow-hidden">

<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#8624FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="mb-16 max-w-[600px] relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-6">
                        How Your Team Actually Works (And Why It's Fragmented)
                    </h2>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                        Most service businesses use 3-4 separate tools. Here's why that costs you time and money.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="group">
<div className="w-12 h-12 bg-white rounded-[1.5rem] shadow-sm border border-white flex items-center justify-center mb-8 transform group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-900 text-xl" icon="solar:like-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-6 tracking-tight">Your team is great at:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><iconify-icon className="text-green-500 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Answering customer calls</li>
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><iconify-icon className="text-green-500 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Writing follow-up emails</li>
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><iconify-icon className="text-green-500 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Sending SMS reminders</li>
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><iconify-icon className="text-green-500 text-lg mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Updating records</li>
</ul>
</div>

<div className="group md:pt-12">
<div className="w-12 h-12 bg-white rounded-[1.5rem] shadow-sm border border-white flex items-center justify-center mb-8 transform group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-900 text-xl" icon="solar:dislike-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-6 tracking-tight">But here's the reality:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-400 font-light"><iconify-icon className="text-red-400/80 text-lg mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Customer calls on Platform A</li>
<li className="flex items-start gap-3 text-sm text-gray-400 font-light"><iconify-icon className="text-red-400/80 text-lg mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> You follow up on Platform B</li>
<li className="flex items-start gap-3 text-sm text-gray-400 font-light"><iconify-icon className="text-red-400/80 text-lg mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> You remind on Platform C</li>
<li className="flex items-start gap-3 text-sm text-gray-400 font-light"><iconify-icon className="text-red-400/80 text-lg mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> You log everything manually</li>
</ul>
</div>

<div className="group relative">
<div className="absolute -inset-6 bg-gradient-to-b from-white/60 to-white/20 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.02)] z-0 border border-white hidden md:block"></div>
<div className="w-12 h-12 bg-white rounded-[1.5rem] shadow-sm border border-white flex items-center justify-center mb-8 transform group-hover:-translate-y-1 transition-transform relative z-10">
<iconify-icon className="text-[#8624FF] text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 mb-6 tracking-tight relative z-10">The Cost:</h3>
<ul className="space-y-4 relative z-10">
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><div className="w-1.5 h-1.5 bg-[#8624FF] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(134,36,255,0.4)]"></div> Conversation context lost between platforms</li>
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><div className="w-1.5 h-1.5 bg-[#8624FF] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(134,36,255,0.4)]"></div> Customers repeat information across channels</li>
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><div className="w-1.5 h-1.5 bg-[#8624FF] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(134,36,255,0.4)]"></div> Staff spends 10-15 hours/week on manual data entry</li>
<li className="flex items-start gap-3 text-sm text-gray-600 font-light"><div className="w-1.5 h-1.5 bg-[#8624FF] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(134,36,255,0.4)]"></div> Software costs $500-1000/month for fragmented tools</li>
</ul>
</div>
</div>
<div className="mt-20 text-center relative z-10">
<p className="text-xs font-medium text-gray-400 tracking-widest uppercase bg-white/50 backdrop-blur-md px-4 py-2 rounded-full inline-block border border-white">What if it was all in one place?</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="solutions">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-20 text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-6">
                    One AI. All Channels.<br/>Unified Context.
                </h2>
<p className="text-lg text-gray-500 font-light max-w-2xl">
                    Alris handles voice, email, SMS, and CRM updates in one unified agent.
                </p>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 flex flex-col gap-8">

<div className="bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-10 rounded-[3rem] flex flex-col justify-between group hover:bg-white transition-colors">
<div>
<div className="w-16 h-16 rounded-[2rem] bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 mb-8 transform group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tighter text-gray-900 mb-6">Calls (24/7)</h3>
<ul className="space-y-4 mb-10">
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Inbound calls answered instantly</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Outbound calls made proactively</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Smart call routing</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Seamless human handoff</li>
</ul>
</div>
<div className="pt-6 text-sm text-gray-600 font-light flex items-start gap-3 border-t border-gray-100/50">
<span className="text-[#8624FF] mt-0.5 font-medium">→</span> Customer not available? Auto SMS sent
                        </div>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-10 rounded-[3rem] flex flex-col justify-between group hover:bg-white transition-colors">
<div>
<div className="w-16 h-16 rounded-[2rem] bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 mb-8 transform group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tighter text-gray-900 mb-6">SMS</h3>
<ul className="space-y-4 mb-10">
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Send confirmations &amp; reminders</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Handle text replies</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Two-way conversations</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Timely follow-ups</li>
</ul>
</div>
<div className="pt-6 text-sm text-gray-600 font-light flex items-start gap-3 border-t border-gray-100/50">
<span className="text-[#8624FF] mt-0.5 font-medium">→</span> Customer replies? AI continues conversation
                        </div>
</div>
</div>

<div className="flex-1 flex flex-col gap-8 lg:mt-16">

<div className="bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-10 rounded-[3rem] flex flex-col justify-between group hover:bg-white transition-colors">
<div>
<div className="w-16 h-16 rounded-[2rem] bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 mb-8 transform group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tighter text-gray-900 mb-6">Email</h3>
<ul className="space-y-4 mb-10">
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Read incoming emails</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Draft replies automatically</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Send personalized emails</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Extract tasks and actions</li>
</ul>
</div>
<div className="pt-6 text-sm text-gray-600 font-light flex items-start gap-3 border-t border-gray-100/50">
<span className="text-[#8624FF] mt-0.5 font-medium">→</span> Customer prefers email? Continue there
                        </div>
</div>

<div className="bg-gradient-to-br from-[#8624FF]/5 to-transparent backdrop-blur-xl border border-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-10 rounded-[3rem] flex flex-col justify-between group hover:from-[#8624FF]/10 transition-colors">
<div>
<div className="w-16 h-16 rounded-[2rem] bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-900 mb-8 transform group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tighter text-gray-900 mb-6">CRM Integration</h3>
<ul className="space-y-4 mb-10">
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Auto-update customer records</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Unified conversation thread logged</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Zero manual data entry</li>
<li className="text-sm text-gray-500 font-light flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Real-time sync with your CRM</li>
</ul>
</div>
<div className="pt-6 text-sm text-gray-600 font-light flex items-start gap-3 border-t border-gray-100/50">
<span className="text-[#8624FF] mt-0.5 font-medium">→</span> Everything automatically logged
                        </div>
</div>
</div>
</div>

<div className="max-w-[800px] mx-auto bg-white/60 border border-white p-8 rounded-[2.5rem] text-center mt-16 shadow-sm backdrop-blur-md hidden md:block">
<p className="text-sm text-gray-800 font-medium tracking-wide">
                    All four channels work together in one agent. Conversation never breaks. Context always preserved. Everything auto-logged.
                </p>
</div>
</div>
</section>

<section className="py-32 relative flex flex-col items-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(134,36,255,0.03)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"></div>
<div className="max-w-[1200px] w-full px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-6">See Alris in Action</h2>
<p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mb-16">
                Watch how Alris handles real customer interactions across voice, email, and SMS in seconds.
            </p>

<div className="max-w-[1000px] mx-auto aspect-video bg-white/40 backdrop-blur-2xl rounded-[3rem] md:rounded-[4rem] border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex items-center justify-center relative mb-16 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01] duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-[#8624FF]/5 to-transparent mix-blend-overlay"></div>
<div className="w-24 h-24 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rounded-[2rem] flex items-center justify-center group-hover:scale-110 transition-all duration-500 z-10 transform rotate-45">
<iconify-icon className="text-3xl text-gray-900 transform -rotate-45 ml-2" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-4">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black shadow-sm transition-all hover:-translate-y-0.5">
                    Book Live Demo
                </button>
<button className="bg-white/80 backdrop-blur-md border border-white text-gray-900 px-8 py-4 rounded-full text-sm font-normal hover:bg-white shadow-sm transition-all hover:-translate-y-0.5">
                    Schedule a Call
                </button>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors px-4 py-4 w-full md:w-auto mt-4 md:mt-0" href="#pricing">
                    Skip video and see pricing
                </a>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-20 max-w-[600px]">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-6">
                    Here’s What It Actually Looks Like
                </h2>
<p className="text-lg text-gray-500 font-light">
                    This is exactly how the AI handles a customer interaction across calls, texts, and Emails.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">

<div className="lg:col-span-7 space-y-12 relative before:absolute before:inset-0 before:ml-[23px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-gray-200 before:via-gray-200/50 before:to-transparent pl-14">

<div className="relative flex flex-col group">
<div className="absolute left-[-56px] w-[12px] h-[12px] rounded-full bg-white border-[3px] border-gray-300 mt-1 shadow-sm"></div>
<h4 className="text-xs font-medium text-gray-400 mb-6 uppercase tracking-[0.2em]">Step 1: Customer Calls (Minute 0)</h4>
<div className="space-y-4">

<div className="flex flex-col items-start">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1 ml-4">Customer</span>
<div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-[2rem] rounded-tl-sm max-w-[90%]">
<p className="text-sm text-gray-600 font-light">"I need to reschedule my appointment"</p>
</div>
</div>

<div className="flex flex-col items-end">
<span className="text-[10px] font-medium text-[#8624FF] uppercase tracking-wider mb-1 mr-4">Alris AI</span>
<div className="bg-[#8624FF]/5 border border-[#8624FF]/10 px-6 py-4 rounded-[2rem] rounded-tr-sm max-w-[90%] text-right">
<p className="text-sm text-gray-800 font-light">"I have 3 times available: Tuesday 2pm, Wednesday 10am, or Thursday 4pm"</p>
</div>
</div>

<div className="flex flex-col items-start">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1 ml-4">Customer</span>
<div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-[2rem] rounded-tl-sm max-w-[90%]">
<p className="text-sm text-gray-600 font-light">"Let me check my calendar and text you back"</p>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col group pt-4">
<div className="absolute left-[-56px] w-[12px] h-[12px] rounded-full bg-white border-[3px] border-[#8624FF] shadow-[0_0_12px_rgba(134,36,255,0.4)] mt-1"></div>
<h4 className="text-xs font-medium text-gray-400 mb-6 uppercase tracking-[0.2em]">Step 2: Auto-Text Sent (Minute 5)</h4>
<div className="space-y-4">

<div className="flex flex-col items-end">
<span className="text-[10px] font-medium text-[#8624FF] uppercase tracking-wider mb-1 mr-4">AI SMS</span>
<div className="bg-[#8624FF]/5 border border-[#8624FF]/10 px-6 py-4 rounded-[2rem] rounded-tr-sm max-w-[90%] text-right">
<p className="text-sm text-gray-800 font-light">"Hi! Here are the times we discussed..."</p>
</div>
</div>

<div className="flex flex-col items-start">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1 ml-4">Customer</span>
<div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-[2rem] rounded-tl-sm max-w-[90%]">
<p className="text-sm text-gray-600 font-light">"Thursday 4pm works!"</p>
</div>
</div>

<div className="flex flex-col items-end">
<span className="text-[10px] font-medium text-[#8624FF] uppercase tracking-wider mb-1 mr-4">AI SMS</span>
<div className="bg-[#8624FF]/5 border border-[#8624FF]/10 px-6 py-4 rounded-[2rem] rounded-tr-sm max-w-[90%] text-right">
<p className="text-sm text-gray-800 font-light">"Perfect! Confirmed for Thursday 4pm."</p>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col group pt-4">
<div className="absolute left-[-56px] w-[12px] h-[12px] rounded-full bg-white border-[3px] border-[#8624FF] shadow-[0_0_12px_rgba(134,36,255,0.4)] mt-1"></div>
<h4 className="text-xs font-medium text-gray-400 mb-6 uppercase tracking-[0.2em]">Step 3: Auto-Email Sent</h4>
<div className="space-y-4">
<div className="flex flex-col items-end">
<span className="text-[10px] font-medium text-[#8624FF] uppercase tracking-wider mb-1 mr-4">AI Email</span>
<div className="bg-[#8624FF]/5 border border-[#8624FF]/10 px-6 py-4 rounded-[2rem] rounded-tr-sm max-w-[90%] text-right">
<p className="text-sm text-gray-800 font-light">"Appointment reminder: Thursday 4pm..."</p>
</div>
</div>
<div className="flex flex-col items-start">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1 ml-4">Customer</span>
<div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-[2rem] rounded-tl-sm max-w-[90%]">
<p className="text-sm text-gray-600 font-light">"Can I submit my information beforehand?"</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] font-medium text-[#8624FF] uppercase tracking-wider mb-1 mr-4">AI Email</span>
<div className="bg-[#8624FF]/5 border border-[#8624FF]/10 px-6 py-4 rounded-[2rem] rounded-tr-sm max-w-[90%] text-right">
<p className="text-sm text-gray-800 font-light">"Yes! Here's the link."</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:pl-10 mt-16 lg:mt-0 flex justify-center lg:justify-end">
<div className="bg-gray-900 text-white rounded-[3rem] p-10 lg:p-12 sticky top-32 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-[400px]">
<div className="flex items-center gap-3 mb-12">
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse"></div>
<h3 className="text-xs tracking-widest uppercase text-gray-400 font-medium">Result Log</h3>
</div>
<div className="space-y-10">
<div className="border-b border-gray-800 pb-8">
<div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Time Spent</div>
<div className="text-5xl font-light tracking-tighter text-white">0 <span className="text-2xl text-gray-500">min</span></div>
</div>
<div className="border-b border-gray-800 pb-8">
<div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Automation</div>
<div className="text-5xl font-light tracking-tighter text-[#A855F7]">100%</div>
</div>
<div>
<div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Satisfaction</div>
<div className="text-5xl font-light tracking-tighter text-white">High</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-20 text-center">Why It Matters</h2>
<div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
<div className="relative flex-1 px-8 lg:px-0">
<div className="text-[8rem] md:text-[10rem] font-black text-gray-100/60 absolute -top-16 -left-6 lg:-left-12 z-0 pointer-events-none select-none leading-none">01</div>
<h3 className="text-2xl font-medium text-gray-900 relative z-10 pt-10 tracking-tight">No Context Loss</h3>
</div>
<div className="relative flex-1 px-8 lg:px-0 lg:mt-20">
<div className="text-[8rem] md:text-[10rem] font-black text-gray-100/60 absolute -top-16 -left-6 lg:-left-12 z-0 pointer-events-none select-none leading-none">02</div>
<h3 className="text-2xl font-medium text-gray-900 relative z-10 pt-10 tracking-tight">Customers Get What They Want</h3>
</div>
<div className="relative flex-1 px-8 lg:px-0 lg:mt-40">
<div className="text-[8rem] md:text-[10rem] font-black text-gray-100/60 absolute -top-16 -left-6 lg:-left-12 z-0 pointer-events-none select-none leading-none">03</div>
<h3 className="text-2xl font-medium text-gray-900 relative z-10 pt-10 tracking-tight">Your Team Gets Time Back</h3>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/30 to-transparent pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-center">

<div className="w-48 h-48 md:w-56 md:h-56 rounded-[3rem] md:rounded-[4rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center transform md:-translate-y-8 rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
<div className="text-5xl lg:text-6xl font-light tracking-tighter text-gray-900 mb-2">60%</div>
<div className="text-[10px] font-medium text-gray-500 tracking-widest uppercase px-6">Fewer Missed Calls</div>
</div>

<div className="w-56 h-56 md:w-64 md:h-64 rounded-[4rem] md:rounded-[5rem] bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-xl border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center transform translate-y-4 md:translate-y-12 rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
<div className="text-6xl lg:text-7xl font-light tracking-tighter text-gray-900 mb-2">3x</div>
<div className="text-[10px] font-medium text-gray-500 tracking-widest uppercase px-6">Faster Email Responses</div>
</div>

<div className="w-48 h-48 md:w-56 md:h-56 rounded-[3rem] md:rounded-[4rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center transform md:-translate-y-4 rotate-[-1deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
<div className="text-5xl lg:text-6xl font-light tracking-tighter text-gray-900 mb-2">50%</div>
<div className="text-[10px] font-medium text-gray-500 tracking-widest uppercase px-6">Less Admin Work</div>
</div>

<div className="w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] md:rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white shadow-sm flex flex-col items-center justify-center transform translate-y-8 md:translate-y-20 rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
<div className="text-4xl lg:text-5xl font-light tracking-tighter text-gray-900 mb-2">40%</div>
<div className="text-[10px] font-medium text-gray-500 tracking-widest uppercase px-4">Lower Software Costs</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-20">

<div className="flex-[2]">
<h2 className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-10 text-center lg:text-left">Industries</h2>
<div className="flex flex-wrap justify-center lg:justify-start gap-4">
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform">Healthcare</div>
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform translate-y-2">Insurance</div>
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform">Retail &amp; Ecommerce</div>
<div className="bg-[#8624FF]/5 backdrop-blur-md border border-[#8624FF]/10 px-6 py-3 rounded-[2rem] text-sm font-medium text-[#8624FF] shadow-[0_8px_20px_rgba(134,36,255,0.05)] cursor-default transform hover:-translate-y-1 transition-transform -translate-y-1">Financial Services</div>
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform translate-y-3">Real Estate</div>
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform">Professional Services</div>
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform -translate-y-2">Hospitality &amp; Travel</div>
<div className="bg-white/80 backdrop-blur-md border border-white px-6 py-3 rounded-[2rem] text-sm font-light text-gray-700 shadow-[0_8px_20px_rgba(0,0,0,0.03)] cursor-default transform hover:-translate-y-1 transition-transform translate-y-1">Home Services</div>
</div>
</div>

<div className="flex-[1] flex flex-col items-center lg:items-start lg:pl-16 relative">

<div className="hidden lg:block absolute left-0 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
<h2 className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-10">Works with</h2>
<div className="flex flex-col gap-6">
<span className="text-lg font-light text-gray-800 flex items-center gap-4"><div className="w-2 h-2 bg-gray-300 rounded-full"></div> EHR</span>
<span className="text-lg font-light text-gray-800 flex items-center gap-4"><div className="w-2 h-2 bg-gray-300 rounded-full"></div> CRM</span>
<span className="text-lg font-light text-gray-800 flex items-center gap-4"><div className="w-2 h-2 bg-gray-300 rounded-full"></div> Calendar</span>
<span className="text-lg font-light text-gray-800 flex items-center gap-4"><div className="w-2 h-2 bg-gray-300 rounded-full"></div> Communication tools</span>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-[1000px] mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-24 text-center">How It Works</h2>
<div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-0 relative">

<div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-[3rem] p-10 w-full md:w-1/3 text-center relative z-10 transform md:translate-x-6 hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 mx-auto bg-gray-50 border border-gray-100 rounded-[1.5rem] flex items-center justify-center text-sm font-medium text-gray-900 mb-6">1</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Customer Initiates</h3>
</div>

<div className="bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-xl border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] rounded-[3rem] p-12 w-full md:w-[40%] text-center relative z-20 transform md:-translate-y-8 hover:-translate-y-10 transition-transform duration-500">
<div className="w-14 h-14 mx-auto bg-[#8624FF]/5 border border-[#8624FF]/20 rounded-[1.5rem] flex items-center justify-center text-base font-medium text-[#8624FF] mb-6 shadow-[0_4px_16px_rgba(134,36,255,0.1)]">2</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">AI Responds</h3>
</div>

<div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-[3rem] p-10 w-full md:w-1/3 text-center relative z-10 transform md:-translate-x-6 hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 mx-auto bg-gray-50 border border-gray-100 rounded-[1.5rem] flex items-center justify-center text-sm font-medium text-gray-900 mb-6">3</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Automatic Execution</h3>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(134,36,255,0.05)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="text-center max-w-4xl mx-auto">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-8 leading-[1.05]">
                    Let Alris run the Work<br/>you shouldn't be doing.
                </h2>
<p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto font-light">
                    See how AI Agents handle calls 24/7, respond to emails, send SMS, and update records automatically.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black shadow-sm transition-all hover:scale-[1.02] w-full sm:w-auto">
                        Get Started
                    </button>
<button className="bg-white/80 backdrop-blur-md border border-white text-gray-900 px-8 py-4 rounded-full text-sm font-normal hover:bg-white shadow-sm transition-all hover:scale-[1.02] w-full sm:w-auto">
                        Talk to an AI Specialist
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">
<div className="absolute inset-0 grid-pattern mask-radial opacity-50 z-[-1]"></div>
<div className="max-w-[800px] mx-auto px-6 relative">

<div className="absolute -top-10 -left-10 w-32 h-32 bg-[#8624FF]/10 rounded-full blur-[30px] z-0"></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[40px] z-0"></div>
<div className="bg-white/60 backdrop-blur-3xl border border-white rounded-[4rem] p-12 md:p-20 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10 overflow-hidden group hover:bg-white/80 transition-all duration-700">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-10 inline-block bg-white/50 px-4 py-2 rounded-full border border-white shadow-sm">Pricing</div>
<div className="text-5xl md:text-7xl font-medium tracking-tighter text-gray-900 mb-4">Starting at $249<span className="text-2xl font-light text-gray-400">/mo</span></div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 my-12">
<div className="flex items-center gap-3 text-base font-light text-gray-600 bg-white/50 px-5 py-2.5 rounded-[1.5rem]">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> No hidden fees
                    </div>
<div className="flex items-center gap-3 text-base font-light text-gray-600 bg-white/50 px-5 py-2.5 rounded-[1.5rem]">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> No lock-in
                    </div>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-gray-900 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-black shadow-xl transition-all w-full sm:w-auto hover:-translate-y-0.5">Book Demo</button>
<button className="bg-white/80 backdrop-blur-md border border-white text-gray-900 px-10 py-4 rounded-full text-sm font-normal hover:bg-white shadow-sm transition-all w-full sm:w-auto hover:-translate-y-0.5">See Full Pricing</button>
</div>
</div>
</div>
</section>

<section className="py-24" id="blog">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-20 text-center">Latest from our blog</h2>
<div className="flex flex-col md:flex-row gap-8 items-center md:items-end">

<div className="bg-white/60 backdrop-blur-xl border border-white rounded-[3rem] overflow-hidden group cursor-pointer w-full md:w-1/3 h-[300px] flex flex-col hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 mb-8 md:mb-0">
<div className="bg-gray-50/50 flex-1 relative overflow-hidden border-b border-white">
<div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="p-8 h-[100px] bg-white/40">
<div className="h-1.5 w-1/3 bg-gray-200 rounded-full mb-3"></div>
<div className="h-1.5 w-2/3 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white rounded-[3rem] overflow-hidden group cursor-pointer w-full md:w-1/3 h-[360px] flex flex-col hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 mb-4 md:mb-0">
<div className="bg-gray-50/50 flex-1 relative overflow-hidden border-b border-white">
<div className="absolute inset-0 bg-gradient-to-br from-[#8624FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="p-8 h-[100px] bg-white/40">
<div className="h-1.5 w-1/4 bg-gray-200 rounded-full mb-3"></div>
<div className="h-1.5 w-1/2 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white rounded-[3rem] overflow-hidden group cursor-pointer w-full md:w-1/3 h-[280px] flex flex-col hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500">
<div className="bg-gray-50/50 flex-1 relative overflow-hidden border-b border-white">
<div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="p-8 h-[100px] bg-white/40">
<div className="h-1.5 w-2/5 bg-gray-200 rounded-full mb-3"></div>
<div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-[800px] mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-16 text-center">FAQ</h2>
<div className="space-y-4">
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        24/7 calls
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Omnichannel memory
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Team usage
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Integrations
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Implementation time
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Security
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Trial
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
<details className="group cursor-pointer bg-white/40 backdrop-blur-md border border-white rounded-[2rem] px-8 py-2 hover:bg-white transition-colors">
<summary className="flex items-center justify-between py-4 font-light text-lg tracking-tight text-gray-600 list-none group-hover:text-gray-900 transition-colors">
                        Pricing
                        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
</details>
</div>
</div>
</section>

<footer className="text-gray-900 pt-32 pb-12" id="company">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-12 mb-20">
<div className="col-span-4 md:col-span-8 lg:col-span-4">
<div className="font-semibold tracking-tighter text-2xl uppercase mb-8 text-gray-900">ALRIS</div>
<div className="flex gap-5">
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:scale-110 transition-all shadow-sm" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:scale-110 transition-all shadow-sm" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:scale-110 transition-all shadow-sm" href="#"><iconify-icon className="text-lg" icon="solar:github-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-6">
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-900">Solutions</h4>
<ul className="space-y-4 text-sm font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Voice Agent</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Omnichannel</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-900">Industries</h4>
<ul className="space-y-4 text-sm font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Healthcare</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Real Estate</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-900">Use Cases</h4>
<ul className="space-y-4 text-sm font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Support</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Sales</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-900">Company</h4>
<ul className="space-y-4 text-sm font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200/50">
<p className="text-xs font-light tracking-wide text-gray-400">© 2023 Alris. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs font-light text-gray-500 bg-white/80 px-4 py-2 rounded-full border border-white shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span> All systems operational
            </div>
</div>
</footer>

    </>
  );
}
