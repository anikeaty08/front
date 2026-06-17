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
<a className="hover:text-white transition-colors text-lg text-white/70 flex items-center gap-1 font-normal" href="#platform">
              Platform
              <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="text-lg text-white/70 hover:text-white transition-colors flex items-center gap-1 font-normal" href="#solutions">
              Solutions
              <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="text-lg text-white/70 hover:text-white transition-colors font-normal" href="#pricing">
              Pricing
            </a>
<a className="text-lg text-white/70 hover:text-white transition-colors flex items-center gap-1 font-normal" href="#resources">
              Resources
              <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="button text-lg font-normal text-white rounded-xl pt-2 pr-4 pb-2 pl-4" href="#">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
              Book Demo
            </span>
</a>
</div>
</div>
</nav>
<main className="">

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
<div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full mb-24 gap-x-4 gap-y-4 items-center justify-center">
<a className="button w-full sm:w-auto px-8 py-3 text-lg font-normal text-white rounded-xl" href="#">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner flex items-center gap-2">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                Book Demo
              </span>
</a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white text-lg font-normal px-8 py-3.5 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm rounded-xl" href="#">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
              Try Alris Live
            </a>
</div>
<div className="w-full max-w-4xl mx-auto relative flex flex-col items-center">
<p className="text-lg text-white/60 mb-8 font-normal">
              Call our AI agent to learn about our services :
            </p>
<div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
<a className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border border-white/20 text-[#0F0F14] text-xl font-normal px-8 py-3.5 shadow-[0_0_30px_rgba(134,36,255,0.3)] hover:shadow-[0_0_40px_rgba(134,36,255,0.4)] hover:scale-[1.02] transition-all whitespace-nowrap flex items-center gap-2 rounded-xl" href="#">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
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
<span className="text-xl text-[#3F3F4A]">
                      Answering customer calls
                    </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">
                      Writing follow-up emails
                    </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">
                      Sending SMS reminders
                    </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">Updating records</span>
</li>
</ul>
</div>
</div>
<div className="lg:p-10 flex flex-col bg-white border-[#E9E9F1] border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between">
<div>
<h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight mb-8 font-roboto">
                  But here's the reality:
                </h3>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">
                      Customer calls on Platform A
                    </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">
                      You follow up on Platform B
                    </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">
                      You remind on Platform C
                    </span>
</li>
<li className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-rose-600" data-lucide="x" strokeWidth="1.5"></i>
</div>
<span className="text-xl text-[#3F3F4A]">
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
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span className="leading-relaxed text-xl text-[#3F3F4A]">
                    Conversation context lost between platforms
                  </span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<span className="leading-relaxed text-xl text-[#3F3F4A]">
                    Customers repeat information across channels
                  </span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="clock" strokeWidth="1.5"></i>
<span className="leading-relaxed text-xl text-[#3F3F4A]">
                    Staff spends 10-15 hours/week on manual data entry
                  </span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="leading-relaxed text-xl text-[#3F3F4A]">
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
<div className="flex gap-2 bg-white w-fit border-[#E9E9F1] border rounded-full mr-auto mb-8 ml-auto pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm items-center justify-center">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-lg font-normal text-[#A1A1B0] tracking-wide">
              04
            </span>
<span className="text-lg font-normal text-[#1A1A22]">Use Cases</span>
</div>
<h2 className="text-4xl lg:text-5xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-6 max-w-3xl mx-auto leading-tight">
            One AI. All Channels. Unified Context.
          </h2>
<p className="leading-relaxed text-lg text-[#3F3F4A] text-center max-w-3xl mr-auto mb-16 ml-auto">
            Alris handles voice, email, SMS, and CRM updates in one unified
            agent. No more switching. No more manual work.
          </p>

<div className="hidden lg:block w-full h-[640px] max-w-[1024px] mt-20 mr-auto ml-auto relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8624FF]/10 rounded-full blur-[80px] -z-20 pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full -z-10" preserveaspectratio="xMidYMid meet" viewbox="0 0 1024 640">
<defs>
<lineargradient id="line-grad-left" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#8624FF" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#8624FF" stop-opacity="0.8"></stop>
</lineargradient>
<lineargradient id="line-grad-right" x1="100%" x2="0%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#8624FF" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#8624FF" stop-opacity="0.8"></stop>
</lineargradient>
<style>
                  @keyframes flow-anim { to { stroke-dashoffset: -16; } }
                  .flow-line { animation: flow-anim 1s linear infinite; }
                </style>
</defs>

<circle cx="512" cy="320" fill="none" r="120" stroke="#8624FF" stroke-dasharray="6 6" stroke-opacity="0.15" strokeWidth="1.5"></circle>
<circle cx="512" cy="320" fill="none" r="180" stroke="#8624FF" stroke-opacity="0.08" strokeWidth="1.5"></circle>

<path className="flow-line" d="M 340 160 C 420 160, 420 320, 456 320" fill="none" stroke="url(#line-grad-left)" stroke-dasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>
<path className="flow-line" d="M 340 480 C 420 480, 420 320, 456 320" fill="none" stroke="url(#line-grad-left)" stroke-dasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>
<path className="flow-line" d="M 684 160 C 604 160, 604 320, 568 320" fill="none" stroke="url(#line-grad-right)" stroke-dasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>
<path className="flow-line" d="M 684 480 C 604 480, 604 320, 568 320" fill="none" stroke="url(#line-grad-right)" stroke-dasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
<div className="flex bg-gradient-to-br from-[#A855F7] to-[#8624FF] w-28 h-28 border-white/20 border rounded-full relative shadow-[0_0_40px_rgba(134,36,255,0.4)] items-center justify-center">
<span className="text-white text-2xl tracking-tight font-['Instrument_Serif'] font-normal">
                  ALRIS
                </span>
</div>
</div>

<div className="hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all flex flex-col group z-10 bg-white w-[340px] border-[#E9E9F1]/80 border rounded-3xl p-4 absolute top-0 left-0 shadow-[0_2px_8px_rgba(0,0,0,0.02),0_8px_32px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-blue-500" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                Phone Calls (24/7)
              </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Inbound calls answered instantly</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Outbound calls made proactively</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Smart call routing</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="">Seamless human handoff</span>
</li>
</ul>
<p className="text-[13px] flex items-center gap-1.5 font-medium text-[#8624FF] border-[#E9E9F1]/60 border-t mt-auto pt-4">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                Customer not available? Auto SMS sent
              </p>
</div>

<div className="hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all flex flex-col group bg-white w-[340px] z-10 border-[#E9E9F1]/80 border rounded-3xl p-4 absolute bottom-0 left-0 shadow-[0_2px_8px_rgba(0,0,0,0.02),0_8px_32px_rgba(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-2xl bg-purple-50/80 border border-purple-100 flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-purple-500" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                Email
              </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="">Read incoming emails</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="">Draft replies automatically</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="">Send personalized emails</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="">Extract tasks and actions</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                Customer prefers email? Continue there
              </p>
</div>

<div className="absolute top-0 right-0 w-[340px] bg-white rounded-3xl p-4 border border-[#E9E9F1]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all flex flex-col z-10 group">
<div className="w-12 h-12 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-emerald-500" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                SMS
              </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Send confirmations &amp; reminders</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Handle text replies</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Two-way conversations</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Timely follow-ups</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                Customer replies? AI continues conversation
              </p>
</div>

<div className="absolute bottom-0 right-0 w-[340px] bg-white rounded-3xl p-4 border border-[#E9E9F1]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all flex flex-col z-10 group">
<div className="w-12 h-12 rounded-2xl bg-teal-50/80 border border-teal-100 flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-teal-500" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                Integration with Existing System
              </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Auto-update customer records</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Unified conversation thread logged</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Zero manual data entry</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span className="">Real-time sync with your CRM</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                Everything automatically logged
              </p>
</div>
</div>

<div className="block lg:hidden w-full mt-12 space-y-12">

<div className="flex justify-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#8624FF]/10 rounded-full blur-[40px] -z-10"></div>
<div className="w-[200px] h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8624FF]/20 border-dashed -z-10"></div>
<div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#A855F7] to-[#8624FF] shadow-[0_0_30px_rgba(134,36,255,0.4)] flex items-center justify-center border border-white/20">
<span className="text-white text-xl tracking-tight font-['Instrument_Serif'] font-normal">
                  ALRIS
                </span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">

<div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E9E9F1]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 shrink-0">
<i className="w-6 h-6 text-blue-500" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                  Phone Calls (24/7)
                </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Inbound calls answered instantly</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Outbound calls made proactively</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Smart call routing</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Seamless human handoff</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                  Customer not available? Auto SMS sent
                </p>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E9E9F1]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-purple-50/80 border border-purple-100 flex items-center justify-center mb-5 shrink-0">
<i className="w-6 h-6 text-purple-500" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                  Email
                </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Read incoming emails</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Draft replies automatically</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Send personalized emails</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Extract tasks and actions</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                  Customer prefers email? Continue there
                </p>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E9E9F1]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center mb-5 shrink-0">
<i className="w-6 h-6 text-emerald-500" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                  SMS
                </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Send confirmations &amp; reminders</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Handle text replies</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Two-way conversations</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Timely follow-ups</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                  Customer replies? AI continues conversation
                </p>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E9E9F1]/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-teal-50/80 border border-teal-100 flex items-center justify-center mb-5 shrink-0">
<i className="w-6 h-6 text-teal-500" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-widest uppercase text-[#1A1A22] mb-3">
                  Integration with Existing System
                </h3>
<ul className="text-[15px] text-[#6B6B7A] leading-relaxed space-y-2 mb-4">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Auto-update customer records</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Unified conversation thread logged</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Zero manual data entry</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Real-time sync with your CRM</span>
</li>
</ul>
<p className="text-[13px] font-medium text-[#8624FF] flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E9E9F1]/60">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                  Everything automatically logged
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#0B0614] border-[#E9E9F1] pt-20 pr-6 pb-20 pl-6">
<div className="text-center max-w-5xl mr-auto ml-auto">
<h2 className="lg:text-4xl text-3xl font-normal text-white tracking-tight font-roboto mb-12">
            See Alris in Action
          </h2>
<div className="aspect-video bg-[#0F0F14] rounded-xl overflow-hidden relative shadow-lg group cursor-pointer border border-[#2A2A35]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A22] to-[#2A2A35] opacity-50"></div>
<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-[#8624FF]"></div>
</div>
</div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
<i className="w-8 h-8 text-white" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 mt-12">
<a className="button px-6 py-3 text-lg font-normal text-white rounded-xl" href="#">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner flex items-center gap-2">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                Book Live Demo
              </span>
</a>
<a className="bg-white border border-[#E9E9F1] text-[#1A1A22] text-lg font-normal px-6 py-3 hover:bg-[#F5F5FA] transition-all shadow-sm flex items-center gap-2 rounded-xl" href="#">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
              Schedule a Call
            </a>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#FBFBFE] border-[#E9E9F1] border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mr-auto ml-auto">
<div className="flex flex-col items-center mb-20 text-center">
<div className="flex gap-2 bg-white border-[#E9E9F1] border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center justify-center">
<span className="text-xs font-normal text-[#1A1A22] tracking-wide uppercase">
                Live Workflow
              </span>
</div>
<h2 className="lg:text-5xl text-4xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
              Here's What It Actually Looks Like
            </h2>
<p className="text-xl text-[#6B6B7A] max-w-2xl leading-relaxed">
              Watch how one conversation fluidly moves from voice to text to
              email, with perfect context maintained at every step.
            </p>
</div>

<div className="relative w-full max-w-6xl mx-auto">
<div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 w-full relative gap-x-6 gap-y-6 items-stretch">
<div className="absolute left-[16%] right-[16%] h-px bg-[#E9E9F1] z-0 top-1/2 -translate-y-1/2"></div>
<div className="group flex flex-col relative w-full z-10">
<div className="hover:shadow-md hover:border-[#C7C7D4] transition-all text-left bg-white w-full border-[#E9E9F1] border rounded-2xl p-6 lg:p-8 shadow-sm h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="text-lg font-normal text-[#1A1A22]">
                      Step 1: Phone Call
                    </span>
<span className="text-xs font-normal text-[#A1A1B0] bg-[#F5F5FA] px-2.5 py-1 rounded-md border border-[#E9E9F1]">
                      Minute 0
                    </span>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] tracking-tight mb-3">
                    Customer Calls Out of Hours
                  </h3>
<p className="text-base lg:text-lg text-[#6B6B7A] mb-8 leading-relaxed">
                    A client calls to reschedule. The AI agent picks up
                    immediately, checks the calendar, and finds new available
                    slots.
                  </p>
<div className="flex flex-col gap-4 bg-[#FBFBFE] border-[#E9E9F1] border rounded-xl p-4 lg:p-5">
<div className="flex gap-3">
<div className="w-7 h-7 rounded-full bg-[#E9E9F1] flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-[#6B6B7A]" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-base text-[#3F3F4A]">
                        "I need to reschedule my appointment."
                      </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-base text-[#1A1A22]">
                        "I have times available: Tue 2 pm, Wed 10 am, or Thu 4
                        pm."
                      </div>
</div>
</div>
</div>
</div>
<div className="group flex flex-col relative w-full z-10">
<div className="bg-white border border-[#E9E9F1] rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all w-full text-left">
<div className="flex items-center justify-between mb-6">
<span className="text-lg font-normal text-[#1A1A22]">
                      Step 2: Auto-Text
                    </span>
<span className="text-xs font-normal text-[#A1A1B0] bg-[#F5F5FA] px-2.5 py-1 rounded-md border border-[#E9E9F1]">
                      Minute 5
                    </span>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] tracking-tight mb-3">
                    Seamless SMS Transition
                  </h3>
<p className="text-base lg:text-lg text-[#6B6B7A] mb-8 leading-relaxed">
                    5 minutes later, the AI proactively sends a text with the
                    options discussed, moving the conversation to the customer's
                    preferred channel.
                  </p>
<div className="bg-[#FBFBFE] rounded-xl p-4 lg:p-5 border border-[#E9E9F1] flex flex-col gap-4">
<div className="flex gap-3 flex-row-reverse">
<div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-base text-[#1A1A22]">
                        "Hi! Here are the times we discussed: Tue 2pm, Wed 10am,
                        Thu 4pm. Reply to confirm."
                      </div>
</div>
<div className="flex gap-3">
<div className="w-7 h-7 rounded-full bg-[#E9E9F1] flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-[#6B6B7A]" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="text-base text-[#3F3F4A] bg-white border-[#E9E9F1] border rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-sm">
                        "Thursday 4 pm works!"
                      </div>
</div>
</div>
</div>
</div>
<div className="group flex flex-col z-10 w-full h-full relative">
<div className="lg:p-8 hover:shadow-md hover:border-[#C7C7D4] transition-all text-left bg-white w-full border-[#E9E9F1] border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm h-full">
<div className="flex items-center justify-between mb-6">
<span className="text-lg font-normal text-[#1A1A22]">
                      Step 3: Auto-Email
                    </span>
<span className="text-xs font-normal text-[#A1A1B0] bg-[#F5F5FA] px-2.5 py-1 rounded-md border border-[#E9E9F1]">
                      24h Prior
                    </span>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] tracking-tight mb-3">
                    Proactive Email Follow-up
                  </h3>
<p className="text-base lg:text-lg text-[#6B6B7A] mb-8 leading-relaxed">
                    A day before the appointment, the AI sends a reminder and
                    automatically handles any pre-appointment questions via
                    email.
                  </p>
<div className="lg:p-5 flex flex-col gap-4 bg-[#FBFBFE] border-[#E9E9F1] border rounded-xl pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<div className="flex gap-3 flex-row-reverse">
<div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-base text-[#1A1A22]">
                        "Reminder: Appointment Thursday 4 pm. Please reply to
                        confirm."
                      </div>
</div>
</div>
</div>
</div>
</div>
<div className="md:hidden relative pl-6 space-y-12 w-full mt-12">
<div className="absolute left-0 top-8 bottom-8 w-px bg-[#E9E9F1]"></div>

<div className="relative w-full">
<div className="absolute -left-6 w-6 h-px bg-[#E9E9F1] z-10 top-1/2 -translate-y-1/2"></div>
<div className="bg-white border border-[#E9E9F1] rounded-2xl p-6 shadow-sm w-full">
<div className="flex items-center justify-between mb-5">
<span className="text-base font-normal text-[#1A1A22]">
                      Step 1: Phone Call
                    </span>
<span className="text-xs font-normal text-[#A1A1B0] bg-[#F5F5FA] px-2 py-1 rounded-md border border-[#E9E9F1]">
                      Minute 0
                    </span>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] tracking-tight mb-3">
                    Customer Calls Out of Hours
                  </h3>
<p className="text-base text-[#6B6B7A] mb-6 leading-relaxed">
                    A client calls to reschedule. The AI agent picks up
                    immediately.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:p-10 flex flex-col bg-white border-[#E9E9F1] border rounded-2xl mt-24 mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm gap-x-10 gap-y-10">
<h4 className="text-lg font-medium text-[#1A1A22] tracking-tight uppercase text-center md:text-left">
              What Your System Now Shows
            </h4>

<div className="w-full overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
<div className="flex items-start justify-between min-w-[800px] md:min-w-0 w-full px-1">

<div className="flex-1 flex flex-col snap-start">
<div className="flex items-center w-full mb-5">
<div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
<span className="text-xs font-medium text-[#3F3F4A] pl-0.5">
                        Step 01
                      </span>
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
</div>
<div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
</div>
<div className="pr-6">
<h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">
                      Initial phone call
                    </h5>
<p className="text-sm text-[#6B6B7A] leading-relaxed">
                      All details captured
                    </p>
</div>
</div>

<div className="flex-1 flex flex-col snap-start">
<div className="flex items-center w-full mb-5">
<div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
<span className="text-xs font-medium text-[#3F3F4A]">
                        Step 02
                      </span>
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
</div>
<div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
</div>
<div className="pr-6">
<h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">
                      Text conversation
                    </h5>
<p className="text-sm text-[#6B6B7A] leading-relaxed">
                      All messages recorded
                    </p>
</div>
</div>

<div className="flex-1 flex flex-col snap-start">
<div className="flex items-center w-full mb-5">
<div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
<span className="text-xs font-medium text-[#3F3F4A]">
                        Step 03
                      </span>
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
</div>
<div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
</div>
<div className="pr-6">
<h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">
                      Email exchange
                    </h5>
<p className="text-sm text-[#6B6B7A] leading-relaxed">
                      All info logged
                    </p>
</div>
</div>

<div className="flex-1 flex flex-col snap-start">
<div className="flex items-center w-full mb-5">
<div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
<span className="text-xs font-medium text-[#3F3F4A]">
                        Step 04
                      </span>
<div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
</div>
<div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
</div>
<div className="pr-6">
<h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">
                      Appointment
                    </h5>
<p className="text-sm text-[#6B6B7A] leading-relaxed">
                      Scheduled seamlessly
                    </p>
</div>
</div>

<div className="flex-[0.8] flex flex-col snap-start">
<div className="flex items-center w-full mb-5">
<div className="flex items-center gap-2 bg-[#F3EDFF] border border-[#8624FF]/30 rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
<div className="w-1.5 h-1.5 rounded-full border border-[#8624FF] bg-[#8624FF]"></div>
<span className="text-xs font-medium text-[#8624FF] pr-0.5">
                        Step 05
                      </span>
</div>
</div>
<div className="pr-0">
<h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">
                      Complete record
                    </h5>
<p className="text-sm text-[#6B6B7A] leading-relaxed">
                      Of the entire conversation
                    </p>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-[#E9E9F1]">
<div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 lg:p-10 divide-y md:divide-y-0 md:divide-x divide-[#E9E9F1] bg-[#8624FF] w-full border-[#8624FF] border rounded-xl pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8">
<div className="col-span-1 md:pb-0 md:pr-8 text-center pr-8 pb-6">
<span className="block text-4xl text-[#ffffff] tracking-tight font-roboto mb-2">0 min</span>
<span className="text-sm font-medium text-[#ffffff] tracking-wide">
                    Staff Time Spent
                  </span>
</div>
<div className="col-span-1 md:py-0 md:px-8 text-center pt-6 pb-6">
<span className="block text-4xl text-[#ffffff] tracking-tight font-roboto mb-2">
                    100%
                  </span>
<span className="text-sm font-medium text-[#ffffff] tracking-wide">
                    Automation
                  </span>
</div>
<div className="col-span-1 md:pt-0 md:pl-8 text-center pt-6 pl-8">
<span className="block text-4xl text-[#ffffff] tracking-tight font-roboto mb-2">
                    High
                    <span className="align-middle text-base font-normal text-[#ffffff] font-sans ml-2">
                      (Instant resolution)
                    </span>
</span>
<span className="text-sm font-medium text-[#ffffff] tracking-wide">
                    Customer Satisfaction
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#FFFFFF] py-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
<span className="text-[#8624FF] text-sm font-normal tracking-wide uppercase mb-4 block">
              Why Omnichannel AI Works Better
            </span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0F14] font-roboto mb-6">
              Why This Actually Matters
            </h2>
<p className="text-xl text-[#6B6B7A] leading-relaxed">
              Three things that change when you have one system instead of many.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white border border-[#E9E9F1] rounded-3xl p-8 lg:p-10 flex flex-col h-full shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-normal tracking-tight text-[#0F0F14] font-roboto">
                  No More Context Loss
                </h3>
<div className="w-10 h-10 rounded-full bg-[#F3EDFF] flex items-center justify-center text-[#8624FF] text-lg font-normal shrink-0">
                  1
                </div>
</div>
<div className="mb-6 bg-[#FBFBFE] rounded-2xl p-6 border border-[#E9E9F1]">
<span className="text-sm text-[#A1A1B0] font-normal uppercase tracking-wide mb-3 block">
                  Old Way
                </span>
<p className="text-lg text-[#6B6B7A] leading-relaxed">
                  Patient calls → staff member takes notes → staff member emails
                  → patient has to repeat → staff sends text → patient repeats
                  again
                </p>
</div>
<div className="mb-8 bg-[#F3EDFF]/50 rounded-2xl p-6 border border-[#8624FF]/10 relative overflow-hidden">
<div className="relative z-10">
<span className="text-sm text-[#8624FF] font-normal uppercase tracking-wide mb-3 block">
                    New Way
                  </span>
<p className="text-lg text-[#1A1A22] leading-relaxed">
                    Patient calls → AI remembers everything → texts and emails
                    reference the original call → patient never repeats
                    themselves
                  </p>
</div>
</div>
<div className="mt-auto pt-8 border-t border-[#E9E9F1]">
<span className="text-sm text-[#A1A1B0] font-normal uppercase tracking-wide mb-2 block">
                  Result
                </span>
<p className="text-xl font-normal text-[#8624FF]">
                  Happier patients + accurate records
                </p>
</div>
</div>
<div className="bg-white border border-[#E9E9F1] rounded-3xl p-8 lg:p-10 flex flex-col h-full shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-normal tracking-tight text-[#0F0F14] font-roboto pr-6 leading-tight">
                  Customers Get What They Want
                </h3>
<div className="w-10 h-10 rounded-full bg-[#F3EDFF] flex items-center justify-center text-[#8624FF] text-lg font-normal shrink-0">
                  2
                </div>
</div>
<div className="mb-6 bg-[#FBFBFE] rounded-2xl p-6 border border-[#E9E9F1]">
<span className="text-sm text-[#A1A1B0] font-normal uppercase tracking-wide mb-3 block">
                  Old Way
                </span>
<p className="text-lg text-[#6B6B7A] leading-relaxed">
                  "Please call us" or "Email only." Forced channels create
                  friction.
                </p>
</div>
<div className="mb-8 bg-[#F3EDFF]/50 rounded-2xl p-6 border border-[#8624FF]/10 relative overflow-hidden">
<div className="relative z-10">
<span className="text-sm text-[#8624FF] font-normal uppercase tracking-wide mb-3 block">
                    New Way
                  </span>
<p className="text-lg text-[#1A1A22] leading-relaxed">
                    Customer can call, text, or email. AI responds in the exact
                    channel they prefer seamlessly.
                  </p>
</div>
</div>
<div className="mt-auto pt-8 border-t border-[#E9E9F1]">
<span className="text-sm text-[#A1A1B0] font-normal uppercase tracking-wide mb-2 block">
                  Result
                </span>
<p className="text-xl font-normal text-[#8624FF]">
                  Higher satisfaction + faster engagement
                </p>
</div>
</div>
<div className="bg-white border border-[#E9E9F1] rounded-3xl p-8 lg:p-10 flex flex-col h-full shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-normal tracking-tight text-[#0F0F14] font-roboto pr-6 leading-tight">
                  Your Team Gets Their Time Back
                </h3>
<div className="w-10 h-10 rounded-full bg-[#F3EDFF] flex items-center justify-center text-[#8624FF] text-lg font-normal shrink-0">
                  3
                </div>
</div>
<div className="mb-6 bg-[#FBFBFE] rounded-2xl p-6 border border-[#E9E9F1]">
<span className="text-sm text-[#A1A1B0] font-normal uppercase tracking-wide mb-3 block">
                  Old Way
                </span>
<p className="text-lg text-[#6B6B7A] leading-relaxed">
                  Calls + tool switching + emails + manual notes = 10-15
                  hours/week of pure busywork.
                </p>
</div>
<div className="mb-8 bg-[#F3EDFF]/50 rounded-2xl p-6 border border-[#8624FF]/10 relative overflow-hidden">
<div className="relative z-10">
<span className="text-sm text-[#8624FF] font-normal uppercase tracking-wide mb-3 block">
                    New Way
                  </span>
<p className="text-lg text-[#1A1A22] leading-relaxed">
                    One unified system handles all communications and auto-logs
                    data automatically.
                  </p>
</div>
</div>
<div className="mt-auto pt-8 border-t border-[#E9E9F1]">
<span className="text-sm text-[#A1A1B0] font-normal uppercase tracking-wide mb-2 block">
                  Result
                </span>
<p className="text-xl font-normal text-[#8624FF]">
                  Focus on patient care, not data entry
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#0B0614]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 lg:mb-24 text-center flex flex-col items-center">
<div className="bg-white rounded-full px-5 py-1.5 mb-8">
<span className="text-[#0B0614] text-xs font-medium tracking-[0.15em] uppercase">
                Social Proof
              </span>
</div>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-white font-roboto">
              Results from Companies Using Alris
            </h2>
</div>
<div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-white/10">
<div className="py-12 lg:py-4 px-6 flex-1 flex flex-col items-center text-center">
<div className="text-7xl lg:text-[5.5rem] font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#D4A4FF] to-[#8624FF] font-roboto leading-none">
                60%
              </div>
<h4 className="text-lg font-medium text-white mb-2 tracking-wide">
                Fewer Missed Calls
              </h4>
<p className="text-base text-white/60 max-w-[220px] leading-relaxed">
                24/7 availability means instant answers
              </p>
</div>
<div className="py-12 lg:py-4 px-6 flex-1 flex flex-col items-center text-center">
<div className="text-7xl lg:text-[5.5rem] font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#D4A4FF] to-[#8624FF] font-roboto leading-none">
                3x
              </div>
<h4 className="text-lg font-medium text-white mb-2 tracking-wide">
                Faster Email Responses
              </h4>
<p className="text-base text-white/60 max-w-[220px] leading-relaxed">
                AI drafts and sends automatically in seconds
              </p>
</div>
<div className="py-12 lg:py-4 px-6 flex-1 flex flex-col items-center text-center">
<div className="text-7xl lg:text-[5.5rem] font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#D4A4FF] to-[#8624FF] font-roboto leading-none">
                50%
              </div>
<h4 className="text-lg font-medium text-white mb-2 tracking-wide">
                Less Manual Admin Work
              </h4>
<p className="text-base text-white/60 max-w-[220px] leading-relaxed">
                Everything auto-logged, zero data entry
              </p>
</div>
<div className="py-12 lg:py-4 px-6 flex-1 flex flex-col items-center text-center">
<div className="text-7xl lg:text-[5.5rem] font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#D4A4FF] to-[#8624FF] font-roboto leading-none">
                40%
              </div>
<h4 className="text-lg font-medium text-white mb-2 tracking-wide">
                Lower Software Costs
              </h4>
<p className="text-base text-white/60 max-w-[220px] leading-relaxed">
                One platform instead of 3-4 separate tools
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FBFBFE] border-t border-[#E9E9F1]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
<span className="uppercase block text-sm font-normal text-[#8624FF] tracking-wide mb-4">
              Industries
            </span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0F14] font-roboto mb-6">
              Built for Service-Focused Businesses
            </h2>
<p className="text-xl text-[#6B6B7A] leading-relaxed">
              See how Alris solves specific challenges across industries. We
              specialize in service businesses.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-x-3 gap-y-3">

<div className="bg-white border border-[#E9E9F1] rounded-[20px] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="w-12 h-12 rounded-[14px] bg-blue-500 text-white flex items-center justify-center mb-6 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#FFFFFF]" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight">
                Healthcare
              </h3>
<p className="text-lg text-[#6B6B7A] mb-8 leading-relaxed flex-grow">
                Patient scheduling &amp; rescheduling, appointment reminders,
                pre-visit intake automation, and post-appointment follow-ups.
              </p>
<a className="text-base font-normal text-[#8624FF] flex items-center gap-1.5 w-fit hover:text-[#721ED9] transition-colors mt-auto" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white border border-[#E9E9F1] rounded-[20px] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="w-12 h-12 rounded-[14px] bg-indigo-500 text-white flex items-center justify-center mb-6 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#FFFFFF]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight">
                Insurance
              </h3>
<p className="text-lg text-[#6B6B7A] mb-8 leading-relaxed flex-grow">
                Policy inquiry handling, quote generation &amp; follow-up,
                document request &amp; delivery, and claims inquiry responses.
              </p>
<a className="text-base font-normal text-[#8624FF] flex items-center gap-1.5 w-fit hover:text-[#721ED9] transition-colors mt-auto" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white border border-[#E9E9F1] rounded-[20px] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="w-12 h-12 rounded-[14px] bg-orange-500 text-white flex items-center justify-center mb-6 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#FFFFFF]" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight">
                Retail &amp; E-commerce
              </h3>
<p className="text-lg text-[#6B6B7A] mb-8 leading-relaxed flex-grow">
                Order tracking, returns processing, delivery notifications, and
                handling general customer inquiries automatically.
              </p>
<a className="text-base font-normal text-[#8624FF] flex items-center gap-1.5 w-fit hover:text-[#721ED9] transition-colors mt-auto" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white border border-[#E9E9F1] rounded-[20px] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="w-12 h-12 rounded-[14px] bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#FFFFFF]" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight">
                Financial Services
              </h3>
<p className="text-lg text-[#6B6B7A] mb-8 leading-relaxed flex-grow">
                Account inquiries, loan processing updates, document requests,
                and compliance-ready 24/7 support.
              </p>
<a className="text-base font-normal text-[#8624FF] flex items-center gap-1.5 w-fit hover:text-[#721ED9] transition-colors mt-auto" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white border border-[#E9E9F1] rounded-[20px] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="w-12 h-12 rounded-[14px] bg-cyan-500 text-white flex items-center justify-center mb-6 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#FFFFFF]" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight">
                Real Estate
              </h3>
<p className="text-lg text-[#6B6B7A] mb-8 leading-relaxed flex-grow">
                Lead qualification, showing scheduling, property information
                delivery, and automated prospect follow-ups.
              </p>
<a className="text-base font-normal text-[#8624FF] flex items-center gap-1.5 w-fit hover:text-[#721ED9] transition-colors mt-auto" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white border border-[#E9E9F1] rounded-[20px] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all">
<div className="w-12 h-12 rounded-[14px] bg-rose-500 text-white flex items-center justify-center mb-6 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#FFFFFF]" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight">
                Hospitality &amp; Travel
              </h3>
<p className="text-lg text-[#6B6B7A] mb-8 leading-relaxed flex-grow">
                Reservation calls, booking confirmations, personalized guest
                follow-ups, and automated feedback collection.
              </p>
<a className="text-base font-normal text-[#8624FF] flex items-center gap-1.5 w-fit hover:text-[#721ED9] transition-colors mt-auto" href="#">
                Learn more
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden bg-white border-[#E9E9F1] border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
<div className="w-full lg:w-1/2">
<span className="text-[#8624FF] text-sm font-normal tracking-wide uppercase mb-4 block">
                Integrations
              </span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0F14] font-roboto mb-6 leading-tight">
                Works With Systems You Already Use
              </h2>
<p className="text-xl text-[#6B6B7A] mb-10 leading-relaxed">
                We connect to your patient records, CRM, and calendar. No
                rip-and-replace. No new system to learn. Everything stays where
                it is. We just make it smarter.
              </p>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-4 text-xl text-[#3F3F4A]">
<div className="w-8 h-8 rounded-full bg-[#F3EDFF] flex items-center justify-center shrink-0">
<i className="text-[#8624FF] w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
                  Your EHR Systems
                </li>
<li className="flex items-center gap-4 text-xl text-[#3F3F4A]">
<div className="w-8 h-8 rounded-full bg-[#F3EDFF] flex items-center justify-center shrink-0">
<i className="text-[#8624FF] w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
                  Your CRM (Salesforce, HubSpot, etc.)
                </li>
<li className="flex items-center gap-4 text-xl text-[#3F3F4A]">
<div className="w-8 h-8 rounded-full bg-[#F3EDFF] flex items-center justify-center shrink-0">
<i className="text-[#8624FF] w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
                  Your Calendar (Google, Outlook, Calendly)
                </li>
<li className="flex items-center gap-4 text-xl text-[#3F3F4A]">
<div className="w-8 h-8 rounded-full bg-[#F3EDFF] flex items-center justify-center shrink-0">
<i className="text-[#8624FF] w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
                  Other communication tools you use
                </li>
</ul>
<a className="text-lg font-normal text-[#8624FF] hover:text-[#721ED9] flex items-center gap-2 transition-colors" href="#">
                See all integrations
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
<div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
<div className="w-28 h-28 bg-[#1A1A22] rounded-3xl shadow-xl z-20 flex items-center justify-center flex-col text-white relative border border-white/10">
<span className="tracking-tight font-normal text-xl font-['Instrument_Serif']">
                    ALRIS
                  </span>
</div>
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border border-[#E9E9F1] rounded-2xl shadow-sm flex items-center justify-center text-[#6B6B7A] z-20">
<i className="w-7 h-7" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-24 bg-[#E9E9F1] z-10"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border border-[#E9E9F1] rounded-2xl shadow-sm flex items-center justify-center text-[#6B6B7A] z-20">
<i className="w-7 h-7" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-px h-24 bg-[#E9E9F1] z-10"></div>
<div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-[#E9E9F1] rounded-2xl shadow-sm flex items-center justify-center text-[#6B6B7A] z-20">
<i className="w-7 h-7" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="absolute left-24 top-1/2 -translate-y-1/2 w-24 h-px bg-[#E9E9F1] z-10"></div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-[#E9E9F1] rounded-2xl shadow-sm flex items-center justify-center text-[#6B6B7A] z-20">
<i className="w-7 h-7" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<div className="absolute right-24 top-1/2 -translate-y-1/2 w-24 h-px bg-[#E9E9F1] z-10"></div>
<div className="absolute inset-8 border border-[#E9E9F1] rounded-full z-0 opacity-50"></div>
<div className="absolute inset-24 border border-[#E9E9F1] rounded-full z-0 opacity-30"></div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-slate-100 border-[#E9E9F1] border-t pt-24 pb-24" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row w-full rounded-[2rem] overflow-hidden shadow-sm border border-[#E9E9F1]">

<div className="lg:w-[45%] lg:p-16 flex flex-col text-white bg-[#0B0614] w-full pt-10 pr-10 pb-10 pl-10 justify-center">
<h3 className="text-4xl lg:text-5xl font-normal tracking-tight font-roboto mb-10">
              Key Features
            </h3>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-xl text-white font-normal">
<i className="w-6 h-6 shrink-0 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                Scale voice minutes as you grow
              </li>
<li className="flex items-center gap-4 text-xl text-white font-normal">
<i className="w-6 h-6 shrink-0 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                Add SMS &amp; email volume when needed
              </li>
<li className="flex items-center gap-4 text-xl text-white font-normal">
<i className="w-6 h-6 shrink-0 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                Upgrade anytime, no lock-in
              </li>
<li className="flex items-center gap-4 text-xl text-white font-normal">
<i className="w-6 h-6 shrink-0 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                No hidden fees, no overage charges
              </li>
</ul>
</div>

<div className="w-full lg:w-[55%] bg-[#F6F3FF] p-10 lg:p-16 flex flex-col justify-center">
<span className="text-[#8624FF] text-sm font-normal tracking-wide uppercase mb-8 block">
              SIMPLE, TRANSPARENT PRICING
            </span>
<div className="flex items-baseline gap-3 mb-6 flex-wrap">
<span className="text-5xl lg:text-6xl font-normal text-[#0F0F14] tracking-tight font-roboto">Start at</span>
<span className="text-6xl lg:text-7xl font-normal text-[#8624FF] tracking-tight font-roboto">$249</span>
<span className="text-2xl font-normal text-[#6B6B7A]">/month</span>
</div>
<p className="leading-relaxed text-lg text-[#6B6B7A] mb-12 max-w-lg">
              No per-minute charges. All channels included. Starting at $249/month for voice, email, and SMS integration.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="button sm:w-auto text-lg font-normal text-white rounded-xl py-3.5 px-8 flex-1" href="#">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner flex items-center justify-center gap-2">
                  See Full Pricing
                  <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
<a className="bg-white border border-[#E9E9F1] text-[#1A1A22] sm:w-auto text-lg font-normal rounded-xl py-3.5 px-8 flex items-center justify-center gap-2 hover:bg-[#FBFBFE] transition-all flex-1 shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                Book Demo
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-white border-[#E9E9F1] rounded-xl border-t pt-24 pb-24">
<div className="max-w-7xl rounded-sm mr-auto ml-auto pr-6 pl-6">
<div className="md:p-20 overflow-hidden text-center bg-[#0B0614] border-white/10 border rounded-xl pt-12 pr-12 pb-12 pl-12 relative shadow-md">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8624FF] rounded-full blur-[120px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#721ED9] rounded-full blur-[120px] opacity-20 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="relative z-10">
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6 font-roboto leading-tight max-w-3xl mx-auto">
                Let Alris run the work you shouldn't be doing.
              </h2>
<p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                See how AI Agents handle calls 24/7, respond to emails, send
                SMS, and update records automatically.
              </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center justify-center">
<a className="button w-full sm:w-auto px-8 py-4 text-lg font-normal text-white rounded-xl" href="#">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner flex items-center gap-2">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                    Book Demo
                  </span>
</a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white text-lg font-normal px-8 py-4 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm rounded-xl" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                  Talk to Sales
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#FBFBFE] border-[#E9E9F1] border-t pt-24 pb-24" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
<span className="text-[#8624FF] text-sm font-normal tracking-wide uppercase mb-4 block">
              Latest from Our Blog
            </span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0F14] font-roboto mb-6">
              Tips, trends, and insights for customer-facing teams.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">

<a className="group bg-white border border-[#E9E9F1] rounded-[20px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#C7C7D4] transition-all flex flex-col" href="#">
<div className="h-48 bg-[#F3EDFF] relative overflow-hidden flex items-center justify-center">
<i className="w-12 h-12 text-[#8624FF] opacity-50" data-lucide="book-open"></i>
</div>
<div className="p-6 lg:p-8 flex flex-col flex-grow">
<span className="text-sm font-normal text-[#8624FF] mb-3 block uppercase tracking-wide">
                  Customer Experience
                </span>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight group-hover:text-[#8624FF] transition-colors">
                  How AI is Reshaping Omnichannel Support in 2025
                </h3>
<p className="text-[#6B6B7A] mb-6 leading-relaxed flex-grow text-lg">
                  Discover how leading service businesses are using unified AI
                  agents to eliminate wait times and improve satisfaction
                  scores.
                </p>
<div className="flex items-center justify-between text-sm text-[#A1A1B0] pt-6 border-t border-[#E9E9F1] mt-auto">
<span>By Sarah Jenkins</span>
<span>Oct 12, 2024</span>
</div>
</div>
</a>

<a className="group bg-white border border-[#E9E9F1] rounded-[20px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#C7C7D4] transition-all flex flex-col" href="#">
<div className="h-48 bg-[#F3EDFF] relative overflow-hidden flex items-center justify-center">
<i className="w-12 h-12 text-[#8624FF] opacity-50" data-lucide="bot"></i>
</div>
<div className="p-6 lg:p-8 flex flex-col flex-grow">
<span className="text-sm font-normal text-[#8624FF] mb-3 block uppercase tracking-wide">
                  Automation
                </span>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight group-hover:text-[#8624FF] transition-colors">
                  The True Cost of Tool Context Switching
                </h3>
<p className="text-[#6B6B7A] mb-6 leading-relaxed flex-grow text-lg">
                  Why running separate voice, email, and SMS tools is costing
                  your team 15+ hours a week in lost productivity.
                </p>
<div className="flex items-center justify-between text-sm text-[#A1A1B0] pt-6 border-t border-[#E9E9F1] mt-auto">
<span>By David Chen</span>
<span>Oct 05, 2024</span>
</div>
</div>
</a>

<a className="group bg-white border border-[#E9E9F1] rounded-[20px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#C7C7D4] transition-all flex flex-col" href="#">
<div className="h-48 bg-[#F3EDFF] relative overflow-hidden flex items-center justify-center">
<i className="w-12 h-12 text-[#8624FF] opacity-50" data-lucide="phone-call"></i>
</div>
<div className="p-6 lg:p-8 flex flex-col flex-grow">
<span className="text-sm font-normal text-[#8624FF] mb-3 block uppercase tracking-wide">
                  Case Study
                </span>
<h3 className="text-xl font-normal text-[#0F0F14] font-roboto mb-3 tracking-tight group-hover:text-[#8624FF] transition-colors">
                  How Nova Health Reduced Missed Calls by 60%
                </h3>
<p className="text-[#6B6B7A] mb-6 leading-relaxed flex-grow text-lg">
                  Learn the exact implementation strategy Nova Health used to
                  automate their out-of-hours patient scheduling.
                </p>
<div className="flex items-center justify-between text-sm text-[#A1A1B0] pt-6 border-t border-[#E9E9F1] mt-auto">
<span>By Marcus Toll</span>
<span className="">Sep 28, 2024</span>
</div>
</div>
</a>
</div>
<div className="flex justify-center">
<a className="bg-white border border-[#E9E9F1] text-[#1A1A22] text-lg font-normal px-8 py-3.5 hover:bg-[#F5F5FA] transition-all shadow-sm flex items-center justify-center gap-2 rounded-xl" href="#">
              View All Articles
              <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-t border-[#E9E9F1]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 lg:mb-20">
<span className="text-[#8624FF] text-sm font-normal tracking-wide uppercase mb-4 block">
              FAQ
            </span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0F14] font-roboto">
              Frequently Asked Questions
            </h2>
</div>
<div className="space-y-4">

<details className="group bg-white border border-[#E9E9F1] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-[#0F0F14] text-xl font-normal tracking-tight hover:bg-[#FBFBFE] transition-colors font-roboto">
                How does Alris handle calls 24/7?
                <i className="w-5 h-5 transition-transform group-open:-rotate-180 text-[#8624FF] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#6B6B7A] leading-relaxed border-t border-[#E9E9F1] pt-4 mt-2">
                Alris is AI-powered and always running. It answers calls
                instantly, no matter the time of day. Never miss a customer
                again.
              </div>
</details>

<details className="group bg-white border border-[#E9E9F1] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-[#0F0F14] text-xl font-normal tracking-tight hover:bg-[#FBFBFE] transition-colors font-roboto">
                Does it integrate with my existing CRM?
                <i className="w-5 h-5 transition-transform group-open:-rotate-180 text-[#8624FF] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#6B6B7A] leading-relaxed border-t border-[#E9E9F1] pt-4 mt-2">
                Yes, Alris integrates directly with popular CRMs like
                Salesforce, HubSpot, and many specialized EHR systems. Your
                records update automatically after every interaction.
              </div>
</details>

<details className="group bg-white border border-[#E9E9F1] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-[#0F0F14] text-xl font-normal tracking-tight hover:bg-[#FBFBFE] transition-colors font-roboto">
                Can it hand off to a human agent?
                <i className="w-5 h-5 transition-transform group-open:-rotate-180 text-[#8624FF] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#6B6B7A] leading-relaxed border-t border-[#E9E9F1] pt-4 mt-2">
                Absolutely. If a customer request is too complex or they
                specifically ask for a human, Alris seamlessly routes the
                conversation to your team along with the full context of what
                was already discussed.
              </div>
</details>

<details className="group bg-white border border-[#E9E9F1] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-[#0F0F14] text-xl font-normal tracking-tight hover:bg-[#FBFBFE] transition-colors font-roboto">
                How long does it take to set up?
                <i className="w-5 h-5 transition-transform group-open:-rotate-180 text-[#8624FF] shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#6B6B7A] leading-relaxed border-t border-[#E9E9F1] pt-4 mt-2">
                Most teams are up and running in less than 48 hours. We handle
                the heavy lifting of integrating with your current tools and
                training the AI on your specific business rules and knowledge
                base.
              </div>
</details>
</div>
</div>
</section>
</main>

<footer className="overflow-hidden bg-[#0B0614] border-white/10 border-t pt-20 pb-10 relative">
<div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 text-[10rem] md:text-[18rem] lg:text-[22rem] font-['Instrument_Serif'] text-white/[0.03] whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter leading-none">
        ALRIS
      </div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8624FF] rounded-full blur-[150px] opacity-[0.12] pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 md:gap-8 mb-24">
<div className="col-span-2 md:col-span-3 lg:col-span-2 pr-4">
<a className="text-3xl font-normal text-white tracking-tight font-['Instrument_Serif'] mb-6 inline-block" href="#">
              ALRIS
            </a>
<p className="leading-relaxed text-sm text-white/60 max-w-sm mb-8">
              The unified omnichannel AI agent that handles your voice, email,
              and SMS communications automatically, so your team can focus on
              what matters.
            </p>
<div className="flex items-center gap-4 flex-wrap">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-normal mb-6 text-lg tracking-wide font-roboto">
              Solutions
            </h4>
<ul className="space-y-4">
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Voice Agent
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Email Automation
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors -multi text-sm font-normal text-white/60" href="#">
                  SMS Automation
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  CRM Integration
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-6 text-lg tracking-wide font-roboto">
              Industries
            </h4>
<ul className="space-y-4">
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Healthcare
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Insurance
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Retail &amp; E-commerce
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Financial Services
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-6 text-lg tracking-wide font-roboto">
              Use Cases
            </h4>
<ul className="space-y-4">
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Appointment Scheduling
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Enrollment &amp; Onboarding
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Customer Support
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Lead Qualification
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-6 text-lg tracking-wide font-roboto">
              Resources
            </h4>
<ul className="space-y-4">
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  About Us
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Blog
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Documentation
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Security &amp; Compliance
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-normal mb-6 text-lg tracking-wide font-roboto">
              Company
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-white/60 hover:text-white transition-colors font-normal text-sm" href="#">
                  Compare vs Retell AI
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Compare vs Synthflow
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Compare vs Truagent
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-sm font-normal text-white/60" href="#">
                  Compare vs Vapi
                </a>
</li>
</ul>
</div>
</div>

<div className="relative pt-8 border-t border-white/10 flex flex-col items-center justify-center">


<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-base text-white/50 pb-4">
<p>© 2026 Alris AI.</p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
<a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
<a className="hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
<a className="hover:text-white transition-colors" href="#">
                Compliance
              </a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
