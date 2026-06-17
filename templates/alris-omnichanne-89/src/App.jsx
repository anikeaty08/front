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
      

<nav className="sticky bg-[#0B0614] z-50 border-white/10 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-normal text-white tracking-tight font-['Instrument_Serif']" href="#">
            ALRIS
          </a>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition-colors text-sm text-white/70" href="#platform">
              Platform
            </a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#solutions">
              Solutions
            </a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#resources">
              Resources
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="bg-[#8624FF] text-white text-sm font-normal px-4 py-2 rounded-lg hover:bg-[#721ED9] transition-all shadow-[0_0_15px_rgba(134,36,255,0.3)] hover:shadow-[0_0_20px_rgba(134,36,255,0.5)] hover:-translate-y-[1px]" href="#">
            Book Demo
          </a>
</div>
</div>
</nav>

<section className="lg:pt-32 lg:pb-24 overflow-hidden bg-[#0B0614] border-white/10 border-b pt-24 pb-16 relative">

<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-70 -z-20"></div>

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8624FF] rounded-full blur-[120px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8624FF] rounded-full blur-[150px] opacity-15 -z-10 translate-y-1/2 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">

<h1 className="text-5xl lg:text-6xl font-normal text-white tracking-tight font-roboto mb-8 max-w-4xl leading-tight">
          Omnichannel AI Platform for Customer-Facing Teams
        </h1>

<p className="leading-relaxed text-lg text-white/70 max-w-3xl mr-auto mb-10 ml-auto">
          One AI agent handles calls 24/7, responds to emails, sends SMS, and
          updates records automatically. Your team stops doing manual
          follow-ups. Customers get instant responses on their preferred
          channel.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#8624FF] text-white text-sm font-normal px-8 py-3.5 rounded-full hover:bg-[#721ED9] transition-all shadow-[0_0_20px_rgba(134,36,255,0.3)] flex items-center justify-center gap-2" href="#">
            Book Demo
            <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
</a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white text-sm font-normal px-8 py-3.5 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#">
            Try Alris Live
            <span className="w-1.5 h-1.5 rounded-full border border-white/50 block"></span>
</a>
</div>

<div className="w-full max-w-4xl mx-auto relative flex flex-col items-center">
<p className="text-sm text-white/60 mb-8 font-normal">
            Call our AI agent to learn about our services :
          </p>

<div className="relative w-full h-24 flex items-center justify-center overflow-hidden">

<a className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border border-white/20 text-[#0F0F14] text-base font-normal px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(134,36,255,0.3)] hover:shadow-[0_0_40px_rgba(134,36,255,0.4)] hover:scale-[1.02] transition-all whitespace-nowrap" href="#">
              Talk To AI Agent
            </a>

<div className="flex items-center gap-1.5 md:gap-2 w-full justify-center opacity-60 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-3"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-6"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-4"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-5"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-14"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>

<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-28"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-14"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-5"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-4"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-6"></div>
<div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#F9F9FB] border-[#E9E9F1] border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mr-auto ml-auto">

<div className="text-center mb-8 lg:mb-10">
<h2 className="text-4xl lg:text-5xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-5">
            Your Team is Drowning in Tools
          </h2>
<p className="leading-relaxed text-lg text-[#3F3F4A] max-w-2xl mr-auto ml-auto">
            Most service businesses use 3-4 separate tools. Here's why that
            costs you time and money.
          </p>
</div>

<div className="grid mb-6 gap-x-0 md:grid-cols-2 lg:gap-3 lg:mb-3">

<div className="lg:p-10 flex flex-col bg-white border-[#E9E9F1] border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between">
<div className="">
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-8">
                Your team is great at:
              </h3>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    Answering customer calls
                  </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    Writing follow-up emails
                  </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    Sending SMS reminders
                  </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">Updating records</span>
</li>
</ul>
</div>
</div>

<div className="lg:p-10 flex flex-col bg-white border-[#E9E9F1] border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between">
<div className="">
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight mb-8 font-roboto">
                But here's the reality:
              </h3>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    Customer calls on Platform A
                  </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    You follow up on Platform B
                  </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    You remind on Platform C
                  </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-base text-[#3F3F4A]">
                    You log everything manually
                  </span>
</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#E9E9F1] shadow-sm grid lg:grid-cols-2 overflow-hidden items-stretch">
<div className="p-8 lg:p-12 lg:border-r border-[#E9E9F1]">
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-8">
              The Real Cost
            </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span className="leading-relaxed text-base text-[#3F3F4A]">
                  Conversation context lost between platforms
                </span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<span className="leading-relaxed text-lg text-[#3F3F4A]">
                  Customers repeat information across channels
                </span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="clock" strokeWidth="1.5"></i>
<span className="leading-relaxed -multi text-base text-[#3F3F4A]">
                  Staff spends 10-15 hours/week on manual data entry
                </span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="leading-relaxed text-base text-[#3F3F4A]">
                  Software costs $500-1000/month for fragmented tools
                </span>
</li>
</ul>
</div>
<div className="bg-[#FBFBFE] p-8 lg:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#E9E9F1_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
<div className="relative z-10 max-w-sm">
<div className="w-16 h-16 bg-white border border-[#E9E9F1] shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#8624FF]">
<i className="w-8 h-8" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h4 className="text-3xl lg:text-4xl font-normal text-[#0F0F14] tracking-tight mb-0 font-roboto leading-tight">
                What if it was all in one place?
              </h4>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-white border-[#E9E9F1] border-b pt-20 pr-6 pb-20 pl-6" id="platform">
<div className="max-w-[1400px] mx-auto">

<div className="flex items-center justify-center gap-2 mx-auto w-fit px-4 py-1.5 rounded-full border border-[#E9E9F1] bg-white shadow-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-sm font-normal text-[#A1A1B0] tracking-wide">
            04
          </span>
<span className="text-sm font-normal text-[#1A1A22]">Use Cases</span>
</div>
<h2 className="text-4xl lg:text-5xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-6 max-w-3xl mx-auto leading-tight">
          One AI. All Channels. Unified Context.
        </h2>
<p className="text-lg text-[#3F3F4A] text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Alris handles voice, email, SMS, and CRM updates in one unified agent.
          No more switching. No more manual work.
        </p>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col gap-6 lg:gap-8">

<div className="lg:p-6 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl p-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
<i className="w-6 h-6" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
  Phone Calls (24/7)
</h3>
<ul className="flex-grow mb-6 space-y-3">
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Inbound calls answered instantly</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Outbound calls made proactively</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Smart call routing</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Seamless human handoff</span>
</li>
</ul>
<div className="pt-6 border-t border-[#E9E9F1] mt-auto">
<p className="text-sm font-medium text-[#8624FF] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
      Customer not available? Auto SMS sent
    </p>
</div>
</div>

<div className="lg:p-6 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl p-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
    Email
  </h3>
<ul className="space-y-3 mb-6 flex-grow">
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Read incoming emails</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Draft replies automatically</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Send personalized emails</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Extract tasks and actions</span>
</li>
</ul>
<div className="pt-6 border-t border-[#E9E9F1] mt-auto">
<p className="text-sm font-medium text-[#8624FF] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
      Customer prefers email? Continue there
    </p>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] rounded-2xl overflow-hidden bg-[#0B0614] border border-[#E9E9F1] flex items-center justify-center group shadow-sm">

<div className="absolute inset-0 bg-gradient-to-br from-[#1A1A22] to-[#0B0614]"></div>
<div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-900/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-800/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

<div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>

<div className="relative z-10 flex items-center justify-center gap-2.5">
<div className="w-3 rounded-full bg-[#8624FF]/60 h-12 group-hover:h-16 transition-all duration-500 ease-in-out"></div>
<div className="w-3 rounded-full bg-[#8624FF]/80 h-24 group-hover:h-32 transition-all duration-500 ease-in-out delay-75"></div>
<div className="w-3 rounded-full bg-[#8624FF] h-36 group-hover:h-48 transition-all duration-500 ease-in-out delay-150 shadow-[0_0_20px_rgba(134,36,255,0.4)]"></div>
<div className="w-3 rounded-full bg-[#8624FF]/80 h-24 group-hover:h-28 transition-all duration-500 ease-in-out delay-75"></div>
<div className="w-3 rounded-full bg-[#8624FF]/60 h-12 group-hover:h-20 transition-all duration-500 ease-in-out"></div>
</div>
</div>

<div className="flex flex-col gap-6 lg:gap-8">

<div className="lg:p-6 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl p-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
<i className="w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
    SMS
  </h3>
<ul className="space-y-3 mb-6 flex-grow">
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Send confirmations &amp; reminders</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Handle text replies</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Two-way conversations</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Timely follow-ups</span>
</li>
</ul>
<div className="pt-6 border-t border-[#E9E9F1] mt-auto">
<p className="text-sm font-medium text-[#8624FF] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
      Customer replies? AI continues conversation
    </p>
</div>
</div>

<div className="lg:p-6 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl p-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
<i className="w-6 h-6" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
    Integration with Existing System
  </h3>
<ul className="space-y-3 mb-6 flex-grow">
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Auto-update customer records</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Unified conversation thread logged</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="">Zero manual data entry</span>
</li>
<li className="flex items-start gap-3 text-base text-[#3F3F4A]">
<i className="w-5 h-5 text-[#8624FF] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Real-time sync with your CRM</span>
</li>
</ul>
<div className="pt-6 border-t border-[#E9E9F1] mt-auto">
<p className="text-sm font-medium text-[#8624FF] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
      Everything automatically logged
    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#FBFBFE] border-[#E9E9F1] pt-20 pr-6 pb-20 pl-6">
<div className="max-w-5xl mx-auto text-center">
<h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-12">
          See Alris in Action
        </h2>
<div className="aspect-video bg-[#0F0F14] rounded-xl overflow-hidden relative shadow-lg group cursor-pointer border border-[#2A2A35]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A22] to-[#2A2A35] opacity-50"></div>

<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-[#8624FF]"></div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
<i className="w-8 h-8 text-white" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 mt-12">
<a className="bg-[#8624FF] text-white text-sm font-normal px-6 py-3 rounded-lg hover:bg-[#721ED9] transition-all shadow-sm" href="#">
            Book Live Demo
          </a>
<a className="bg-white border border-[#E9E9F1] text-[#1A1A22] text-sm font-normal px-6 py-3 rounded-lg hover:bg-[#F5F5FA] transition-all shadow-sm" href="#">
            Schedule a Call
          </a>
<a className="text-sm font-normal text-[#6B6B7A] hover:text-[#1A1A22] px-4 py-3 transition-colors" href="#pricing">
            See Pricing
          </a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-white border-t border-[#E9E9F1]">
<div className="max-w-4xl mx-auto">
<h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-16">
          Here's What It Actually Looks Like
        </h2>
<div className="relative pl-6 md:pl-0">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#E9E9F1] md:-translate-x-1/2"></div>

<div className="relative mb-16 md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0">
<div className="absolute left-[-32px] md:right-[-20px] md:left-auto top-0 w-10 h-10 rounded-full bg-white border-2 border-[#8624FF] flex items-center justify-center z-10 text-[#8624FF]">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm">
<span className="text-xs font-normal text-[#8624FF] mb-2 block">
                Step 1
              </span>
<h4 className="text-base font-normal text-[#1A1A22] mb-2">
                Customer Call → AI Responds
              </h4>
<p className="text-sm text-[#6B6B7A]">
                A client calls after hours to reschedule. The AI agent picks up
                immediately, checks the calendar, and finds a new slot.
              </p>
</div>
</div>

<div className="relative mb-16 md:w-1/2 md:pl-12 md:ml-auto ml-8">
<div className="absolute left-[-32px] md:left-[-20px] top-0 w-10 h-10 rounded-full bg-[#8624FF] flex items-center justify-center z-10 text-white shadow-md shadow-[#8624FF]/20">
<i className="w-5 h-5" data-lucide="message-square-dashed" strokeWidth="1.5"></i>
</div>
<div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm">
<span className="text-xs font-normal text-[#8624FF] mb-2 block">
                Step 2
              </span>
<h4 className="text-base font-normal text-[#1A1A22] mb-2">
                Auto SMS → Confirmation
              </h4>
<p className="text-sm text-[#6B6B7A]">
                Immediately after the call, Alris sends a confirmation text with
                the new time. The customer replies 'Y' to confirm.
              </p>
</div>
</div>

<div className="relative md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0">
<div className="absolute left-[-32px] md:right-[-20px] md:left-auto top-0 w-10 h-10 rounded-full bg-[#1A1A22] flex items-center justify-center z-10 text-white">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm">
<span className="text-xs font-normal text-[#8624FF] mb-2 block">
                Step 3
              </span>
<h4 className="text-base font-normal text-[#1A1A22] mb-2">
                Auto Email → Reminder &amp; Sync
              </h4>
<p className="text-sm text-[#6B6B7A]">
                A calendar invite is emailed. The entire transcript and timeline
                are logged in your CRM automatically.
              </p>
</div>
</div>
</div>
<div className="mt-16 bg-[#F5F5FA] rounded-xl p-6 border border-[#E9E9F1] flex flex-col md:flex-row items-center justify-between gap-6">
<div className="">
<h4 className="text-base font-normal text-[#1A1A22]">The Result</h4>
<p className="text-sm text-[#6B6B7A]">
              A flawless customer experience without human intervention.
            </p>
</div>
<div className="flex gap-4">
<div className="text-center">
<span className="block text-xl font-['Instrument_Serif'] text-[#0F0F14]">
                0m
              </span>
<span className="text-xs text-[#6B6B7A]">Staff Time</span>
</div>
<div className="w-px h-8 bg-[#C7C7D4] my-auto"></div>
<div className="text-center">
<span className="block text-xl font-['Instrument_Serif'] text-[#0F0F14]">
                100%
              </span>
<span className="text-xs text-[#6B6B7A]">Automated</span>
</div>
<div className="w-px h-8 bg-[#C7C7D4] my-auto"></div>
<div className="text-center">
<span className="block text-xl font-['Instrument_Serif'] text-[#0F0F14]">
                Logged
              </span>
<span className="text-xs text-[#6B6B7A]">Automatically</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-[#F5F5FA] border-y border-[#E9E9F1]">
<div className="max-w-6xl mx-auto">
<h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-12">
          Why It Matters
        </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm">
<h4 className="text-base font-normal text-[#1A1A22] mb-4">
              No Context Loss
            </h4>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-[#A1A1B0]">Old Way</span>
<span className="text-[#6B6B7A] line-through">
                  "Can you repeat that?"
                </span>
</div>
<div className="flex justify-between text-sm font-normal">
<span className="text-[#8624FF]">Alris</span>
<span className="text-[#1A1A22]">
                  "I see you called earlier..."
                </span>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm">
<h4 className="text-base font-normal text-[#1A1A22] mb-4">
              Customers Choose Channel
            </h4>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-[#A1A1B0]">Old Way</span>
<span className="text-[#6B6B7A] line-through">Forced to call</span>
</div>
<div className="flex justify-between text-sm font-normal">
<span className="text-[#8624FF]">Alris</span>
<span className="text-[#1A1A22]">Text, Call, or Email</span>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm">
<h4 className="text-base font-normal text-[#1A1A22] mb-4">
              Team Saves Time
            </h4>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-[#A1A1B0]">Old Way</span>
<span className="text-[#6B6B7A] line-through">
                  Manual CRM entry
                </span>
</div>
<div className="flex justify-between text-sm font-normal">
<span className="text-[#8624FF]">Alris</span>
<span className="text-[#1A1A22]">Instantly synced</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 border-[#E9E9F1] border-b pt-20 pr-6 pb-20 pl-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
<div className="">
<span className="block lg:text-5xl text-4xl text-[#0F0F14] tracking-tight font-roboto mb-2">
              60%
            </span>
<span className="text-sm text-[#6B6B7A]">Fewer missed calls</span>
</div>
<div className="">
<span className="block lg:text-5xl text-4xl text-[#0F0F14] tracking-tight font-roboto mb-2">
              3x
            </span>
<span className="text-sm text-[#6B6B7A]">Faster response times</span>
</div>
<div className="">
<span className="block lg:text-5xl text-4xl text-[#0F0F14] tracking-tight font-roboto mb-2">
              50%
            </span>
<span className="text-sm text-[#6B6B7A]">Less admin work</span>
</div>
<div className="">
<span className="block lg:text-5xl text-4xl text-[#0F0F14] tracking-tight font-roboto mb-2">
              40%
            </span>
<span className="text-sm text-[#6B6B7A]">Lower operating costs</span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-white" id="solutions">
<div className="max-w-6xl mx-auto text-center">
<h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-12">
          Built for Operations That Never Stop
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="heart-pulse" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">Healthcare</span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">Insurance</span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="store" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">Retail</span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">Finance</span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">Real Estate</span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">
              Prof. Services
            </span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="bed" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">Hospitality</span>
</div>
<div className="p-4 rounded-xl border border-[#E9E9F1] bg-white hover:border-[#C7C7D4] transition-colors flex flex-col items-center gap-3">
<i className="w-6 h-6 text-[#6B6B7A]" data-lucide="wrench" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#1A1A22]">
              Home Services
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-[#0F0F14] text-white">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="lg:text-4xl text-3xl font-normal tracking-tight font-roboto mb-4">
            Works With Systems You Already Use
          </h2>
<p className="text-base text-[#A1A1B0] max-w-2xl mx-auto">
            We don't replace your tech stack. We just add smarter automation on
            top of it.
          </p>
<div className="flex flex-wrap justify-center gap-4 mt-10">
<div className="px-6 py-3 rounded-lg bg-[#1A1A22] border border-[#2A2A35] text-sm font-normal text-[#C7C7D4]">
              EHR Systems
            </div>
<div className="px-6 py-3 rounded-lg bg-[#1A1A22] border border-[#2A2A35] text-sm font-normal text-[#C7C7D4]">
              Salesforce CRM
            </div>
<div className="px-6 py-3 rounded-lg bg-[#1A1A22] border border-[#2A2A35] text-sm font-normal text-[#C7C7D4]">
              HubSpot
            </div>
<div className="px-6 py-3 rounded-lg bg-[#1A1A22] border border-[#2A2A35] text-sm font-normal text-[#C7C7D4]">
              Google Calendar
            </div>
<div className="px-6 py-3 rounded-lg bg-[#1A1A22] border border-[#2A2A35] text-sm font-normal text-[#C7C7D4]">
              Zendesk
            </div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-[#2A2A35] -translate-y-1/2 z-0"></div>
<div className="relative z-10 bg-[#1A1A22] border border-[#2A2A35] p-8 rounded-xl text-center shadow-lg">
<div className="w-12 h-12 rounded-full bg-[#2A2A35] flex items-center justify-center mx-auto mb-6 text-white border border-[#3F3F4A]">
              1
            </div>
<h4 className="text-base font-normal mb-2">Customer Initiates</h4>
<p className="text-sm text-[#A1A1B0]">
              Inbound via call, email, SMS or web widget.
            </p>
</div>
<div className="relative z-10 bg-[#8624FF] border border-[#721ED9] p-8 rounded-xl text-center shadow-lg shadow-[#8624FF]/20">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 text-white border border-white/30">
              2
            </div>
<h4 className="text-base font-normal mb-2 text-white">
              AI Responds &amp; Routes
            </h4>
<p className="text-sm text-white/80">
              Maintains context, answers questions, or schedules.
            </p>
</div>
<div className="relative z-10 bg-[#1A1A22] border border-[#2A2A35] p-8 rounded-xl text-center shadow-lg">
<div className="w-12 h-12 rounded-full bg-[#2A2A35] flex items-center justify-center mx-auto mb-6 text-white border border-[#3F3F4A]">
              3
            </div>
<h4 className="text-base font-normal mb-2">Automatic Execution</h4>
<p className="text-sm text-[#A1A1B0]">
              Logs data, updates fields, and alerts human staff if needed.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="bg-[#F5F5FA] rounded-2xl p-8 lg:p-12 border border-[#E9E9F1] flex flex-col md:flex-row items-center justify-between gap-10">
<div className="md:w-1/2">
<h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-4">
              Simple, Transparent Pricing
            </h2>
<p className="text-base text-[#3F3F4A] mb-8">
              Predictable costs tailored to your volume. No hidden fees. No
              lock-in.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-[#1A1A22]">
<div className="w-5 h-5 rounded-full bg-[#F3EDFF] text-[#8624FF] flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check" strokeWidth="2"></i>
</div>
                All channels included (Voice, SMS, Email)
              </li>
<li className="flex items-center gap-3 text-sm text-[#1A1A22]">
<div className="w-5 h-5 rounded-full bg-[#F3EDFF] text-[#8624FF] flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check" strokeWidth="2"></i>
</div>
                Standard integrations
              </li>
</ul>
</div>
<div className="md:w-1/2 w-full bg-white p-8 rounded-xl border border-[#E9E9F1] shadow-md text-center">
<p className="text-sm font-normal text-[#6B6B7A] uppercase tracking-wide mb-2">
              Starting at
            </p>
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-5xl font-['Instrument_Serif'] font-normal text-[#0F0F14] tracking-tight">
                $249
              </span>
<span className="text-[#6B6B7A]">/month</span>
</div>
<div className="space-y-3">
<a className="block w-full bg-[#8624FF] text-white text-sm font-normal px-6 py-3 rounded-lg hover:bg-[#721ED9] transition-all shadow-sm" href="#">
                Book Demo
              </a>
<a className="block w-full bg-transparent border border-[#E9E9F1] text-[#1A1A22] text-sm font-normal px-6 py-3 rounded-lg hover:bg-[#F5F5FA] transition-all" href="#">
                See Full Pricing
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-[#E9E9F1] bg-white" id="resources">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div className="">
<h2 className="text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-2">
              Latest Resources
            </h2>
<p className="text-sm text-[#6B6B7A]">
              Insights on AI and automation for operations teams.
            </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-normal text-[#8624FF] hover:text-[#721ED9] transition-colors" href="#">
            View All Articles
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group block" href="#">
<div className="aspect-[16/10] bg-[#F5F5FA] rounded-xl mb-4 overflow-hidden border border-[#E9E9F1] relative">
<div className="absolute inset-0 bg-[#E9E9F1]/50 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<span className="text-xs font-normal text-[#8624FF] mb-2 block">
              Case Study
            </span>
<h3 className="text-lg font-normal text-[#1A1A22] mb-2 group-hover:text-[#8624FF] transition-colors leading-tight">
              How Apex Health reduced missed patient calls by 80%
            </h3>
<p className="text-sm text-[#6B6B7A]">Oct 12, 2023</p>
</a>

<a className="group block" href="#">
<div className="aspect-[16/10] bg-[#F5F5FA] rounded-xl mb-4 overflow-hidden border border-[#E9E9F1] relative">
<div className="absolute inset-0 bg-[#E9E9F1]/50 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<span className="text-xs font-normal text-[#8624FF] mb-2 block">
              Guide
            </span>
<h3 className="text-lg font-normal text-[#1A1A22] mb-2 group-hover:text-[#8624FF] transition-colors leading-tight">
              The ultimate guide to omnichannel customer support
            </h3>
<p className="text-sm text-[#6B6B7A]">Oct 05, 2023</p>
</a>

<a className="group block" href="#">
<div className="aspect-[16/10] bg-[#F5F5FA] rounded-xl mb-4 overflow-hidden border border-[#E9E9F1] relative">
<div className="absolute inset-0 bg-[#E9E9F1]/50 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<span className="text-xs font-normal text-[#8624FF] mb-2 block">
              Product Update
            </span>
<h3 className="text-lg font-normal text-[#1A1A22] mb-2 group-hover:text-[#8624FF] transition-colors leading-tight">
              Introducing Alris 2.0: Deep CRM Synchronization
            </h3>
<p className="text-sm text-[#6B6B7A]">Sep 28, 2023</p>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-[#F5F5FA] border-y border-[#E9E9F1]">
<div className="max-w-3xl mx-auto">
<h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-12">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-[#E9E9F1] shadow-sm overflow-hidden" open="">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-5 text-sm text-[#1A1A22] hover:bg-[#FBFBFE]">
<span className="">How does the 24/7 handling work?</span>
<span className="transition group-open:rotate-180 text-[#A1A1B0]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-[#6B6B7A] text-sm p-5 pt-0 leading-relaxed border-t border-[#E9E9F1] mt-2 bg-white">
              Alris remains active outside of your business hours. You can
              configure custom rules to either resolve common queries completely
              (like checking status or office hours), or capture intent and
              schedule a callback for your human team the next morning.
            </div>
</details>
<details className="group bg-white rounded-lg border border-[#E9E9F1] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-5 text-sm text-[#1A1A22] hover:bg-[#FBFBFE]">
<span>Does the AI really remember context across channels?</span>
<span className="transition group-open:rotate-180 text-[#A1A1B0]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-[#6B6B7A] text-sm p-5 pt-0 leading-relaxed border-t border-[#E9E9F1] mt-2 bg-white hidden group-open:block">
              Yes. Alris maps phone numbers and email addresses to a single
              customer profile in real-time. If a customer calls and then sends
              an email 5 minutes later, the AI parses the email with the full
              context of the phone call.
            </div>
</details>
<details className="group bg-white rounded-lg border border-[#E9E9F1] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-5 text-sm text-[#1A1A22] hover:bg-[#FBFBFE]">
<span className="">How long does implementation take?</span>
<span className="transition group-open:rotate-180 text-[#A1A1B0]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-[#6B6B7A] text-sm p-5 pt-0 leading-relaxed border-t border-[#E9E9F1] mt-2 bg-white hidden group-open:block">
              Standard implementation takes 1-2 weeks. This includes importing
              your knowledge base, setting up routing rules, and connecting to
              your existing CRM via our native integrations or API.
            </div>
</details>
<details className="group bg-white rounded-lg border border-[#E9E9F1] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none p-5 text-sm text-[#1A1A22] hover:bg-[#FBFBFE]">
<span>Is my customer data secure?</span>
<span className="transition group-open:rotate-180 text-[#A1A1B0]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-[#6B6B7A] text-sm p-5 pt-0 leading-relaxed border-t border-[#E9E9F1] mt-2 bg-white hidden group-open:block">
              Absolutely. Alris is SOC2 Type II compliant and data is encrypted
              at rest and in transit. We do not use your customer data to train
              our foundational models. For healthcare clients, we offer HIPAA
              compliant deployments.
            </div>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-20 pr-6 pb-10 pl-6 border-t border-[#E9E9F1]">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 md:col-span-2">
<a className="block text-xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6" href="#">
              ALRIS
            </a>
<p className="text-sm text-[#6B6B7A] max-w-xs mb-6">
              The omnichannel AI platform that unifies calls, emails, and SMS
              for modern operations teams.
            </p>
<div className="flex gap-4">
<a className="text-[#A1A1B0] hover:text-[#1A1A22] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</a>
<a className="text-[#A1A1B0] hover:text-[#1A1A22] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-normal text-[#1A1A22] mb-4">Platform</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#6B6B7A] hover:text-[#8624FF] transition-colors" href="#">
                  Intelligent Voice
                </a>
</li>
<li>
<a className="text-sm text-[#6B6B7A] hover:text-[#8624FF] transition-colors" href="#">
                  Email Automation
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal text-[#1A1A22] mb-4">Industries</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#6B6B7A] hover:text-[#8624FF] transition-colors" href="#">
                  Healthcare
                </a>
</li>
<li>
<a className="text-sm text-[#6B6B7A] hover:text-[#8624FF] transition-colors" href="#">
                  Real Estate
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal text-[#1A1A22] mb-4">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#6B6B7A] hover:text-[#8624FF] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm text-[#6B6B7A] hover:text-[#8624FF] transition-colors" href="#">
                  Blog
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#E9E9F1] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#A1A1B0]">
            © 2024 Alris Inc. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-xs text-[#A1A1B0] hover:text-[#1A1A22] transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-[#A1A1B0] hover:text-[#1A1A22] transition-colors" href="#">
              Terms of Service
            </a>
<a className="text-xs text-[#A1A1B0] hover:text-[#1A1A22] transition-colors" href="#">
              Security
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
