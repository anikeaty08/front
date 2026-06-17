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



      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach((element) => {
          observer.observe(element);
      });

      window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 20) {
              nav.classList.add('shadow-sm');
              nav.classList.add('bg-[#F4F7F5]/90');
          } else {
              nav.classList.remove('shadow-sm');
              nav.classList.remove('bg-[#F4F7F5]/90');
          }
      });
    
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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-[#F4F7F5]/80 backdrop-blur-md border-b border-[#E3EBE6] transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-900/20 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-70"></div>
<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.4),transparent_60%)]"></div>
<iconify-icon className="text-cyan-100 relative z-10 -rotate-12 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] text-xl" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-cormorant font-normal text-[#1F3027] tracking-tight text-xl">
            Shashi.ai
          </span>
</a>
<div className="hidden md:flex items-center gap-8 relative">
<div className="group relative">
<a className="text-sm font-medium text-stone-500 hover:text-[#2D4438] transition-colors flex items-center gap-1" href="#products">
              Products
              <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
<div className="bg-white rounded-2xl shadow-xl shadow-[#C5D6CC]/50 border border-[#E3EBE6] p-4 w-56 flex flex-col gap-1">
<a className="text-sm text-stone-600 hover:text-[#1F3027] hover:bg-[#F4F7F5] px-4 py-2 rounded-xl transition-colors" href="#booking">
                  Booking
                </a>
<a className="text-sm text-stone-600 hover:text-[#1F3027] hover:bg-[#F4F7F5] px-4 py-2 rounded-xl transition-colors" href="#check-in">
                  Check-In
                </a>
<a className="text-sm text-stone-600 hover:text-[#1F3027] hover:bg-[#F4F7F5] px-4 py-2 rounded-xl transition-colors" href="#in-room">
                  In-Room
                </a>
<a className="text-sm text-stone-600 hover:text-[#1F3027] hover:bg-[#F4F7F5] px-4 py-2 rounded-xl transition-colors" href="#one-click">
                  One-Click Service
                </a>
<a className="text-sm text-stone-600 hover:text-[#1F3027] hover:bg-[#F4F7F5] px-4 py-2 rounded-xl transition-colors" href="#marketing">
                  Marketing
                </a>
</div>
</div>
</div>
<a className="text-sm font-medium text-stone-500 hover:text-[#2D4438] transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-[#2D4438] transition-colors" href="#about">
            About Us
          </a>
</div>
<div className="flex items-center gap-4">
<a className="px-5 py-2 rounded-full bg-[#2D4438] text-white text-sm font-medium hover:bg-[#1F3027] transition-all hover:shadow-lg hover:shadow-[#C5D6CC] active:scale-95" href="#demo">
            Book a Demo
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-[#E3EBE6] lg:pt-48 lg:pl-6 lg:pr-6 lg:pb-204">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5D6CC] to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5D6CC] shadow-sm mb-8 hover:border-[#A3C2B0] transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B9078]"></span>
</span>
<span className="text-xs font-medium text-[#2D4438] tracking-wide uppercase">
            Pilot Live — Shashi Hotel
          </span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal text-[#1F3027] tracking-tight font-cormorant mb-4">
          Hospitality Reimagined: The Agentic AI Era
        </h1>
<p className="md:text-xl leading-relaxed reveal delay-100 active text-lg font-light text-stone-500 max-w-2xl mr-auto mb-10 ml-auto">
          Orchestrate, personalize, and elevate every guest interaction with an
          AI-native intelligent layer that sits above your operational stack.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 reveal delay-200 active">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2D4438] text-white text-base font-medium hover:bg-[#1F3027] transition-all shadow-xl shadow-[#C5D6CC]/50 flex items-center justify-center gap-2 hover:-translate-y-1" href="#demo">
            Book a Demo
          </a>
</div>
</div>
<div className="max-w-5xl mx-auto relative reveal delay-300 animate-float active">
<div className="absolute inset-0 bg-gradient-to-t from-[#F4F7F5] via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
<div className="absolute -inset-4 bg-gradient-to-r from-[#C5D6CC] to-stone-200 rounded-[2.5rem] blur-xl opacity-30"></div>
</div>
</header>

<section className="bg-white z-20 border-[#E3EBE6] border-b pt-16 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 text-center reveal active">
<p className="text-xs font-medium text-stone-400 tracking-wide uppercase mb-10">
          Trusted By Leading Hotels
        </p>
<div className="flex flex-wrap gap-12 lg:gap-20 transition-all hover:opacity-100 opacity-40 justify-center items-center duration-500 cursor-default">
<span className="text-3xl font-cormorant font-semibold tracking-wider text-[#1F3027] uppercase">
            Shashi
          </span>
<span className="text-xl font-satoshi font-bold tracking-widest text-[#1F3027] uppercase">
            Marriott
          </span>
<span className="text-3xl font-cormorant italic tracking-widest text-[#1F3027]">
            Ritz-Carlton
          </span>
<span className="text-2xl font-satoshi font-semibold tracking-wide text-[#1F3027] uppercase">
            Hilton
          </span>
<span className="text-2xl font-cormorant font-medium tracking-[0.2em] text-[#1F3027] uppercase">
            Aman
          </span>
<span className="text-2xl font-cormorant font-medium tracking-normal text-[#1F3027] uppercase">
            Four Seasons
          </span>
<span className="text-xl font-satoshi font-medium tracking-widest text-[#1F3027] uppercase">
            Hyatt
          </span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative z-20 border-b border-[#E3EBE6]">
<div className="max-w-6xl mx-auto">
<div className="mb-12 reveal">
<span className="text-xs font-medium text-[#2D4438] tracking-wide uppercase block mb-4">
            The Shift
          </span>
<h2 className="text-4xl md:text-5xl font-normal font-cormorant text-[#1F3027] tracking-tight">
            Then vs Now
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 reveal">
<p className="text-stone-500 leading-relaxed text-lg font-light">
              Today's Reality: Fragmented. Manual. Forgettable.
            </p>
<div className="space-y-6 pt-4">
<div className="flex items-center gap-5 text-stone-600 group">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-[#1F3027]">
                    Physical key
                  </span>
</div>
</div>
<div className="flex items-center gap-5 text-stone-600 group">
<div className="w-12 h-12 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-[#1F3027]">
                    Paper bill &amp; Manual housekeeping
                  </span>
</div>
</div>
<div className="flex items-center gap-5 text-stone-600 group">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-[#1F3027]">
                    Front desk queues &amp; Zero personalisation
                  </span>
</div>
</div>
</div>
</div>
<div className="relative bg-[#F4F7F5] rounded-[2.5rem] p-8 md:p-14 reveal delay-200 hover:shadow-xl transition-shadow duration-500 border border-transparent hover:border-[#E3EBE6]">
<div className="absolute top-0 right-0 p-8 opacity-10 animate-pulse"></div>
<p className="leading-relaxed z-10 text-lg font-light text-stone-500 mb-8 relative">
              The Shashi Layer: Connected. Intelligent. Personal.
            </p>
<div className="space-y-6 pt-4 relative z-10">
<div className="flex items-center gap-5 text-[#2D4438] group">
<div className="w-12 h-12 rounded-full bg-white border border-[#C5D6CC] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-[#4F705D]" icon="solar:smartphone-rotate-angle-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-[#1F3027]">
                    Digital key &amp; Mobile check-in
                  </span>
</div>
</div>
<div className="flex items-center gap-5 text-[#2D4438] group">
<div className="w-12 h-12 rounded-full bg-white border border-[#C5D6CC] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-[#4F705D]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-[#1F3027]">
                    Instant checkout
                  </span>
</div>
</div>
<div className="flex items-center gap-5 text-[#2D4438] group">
<div className="w-12 h-12 rounded-full bg-white border border-[#C5D6CC] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-[#4F705D]" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-[#1F3027]">
                    Smart room &amp; AI concierge
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden border-b border-[#E3EBE6]">
<div className="max-w-6xl mx-auto">
<span className="text-xs font-medium text-[#2D4438] tracking-wide uppercase text-center block mb-4 reveal">
          Why Shashi.ai
        </span>
<h2 className="text-4xl md:text-5xl font-cormorant text-center text-[#1F3027] tracking-tight mb-6 reveal">
<span className="font-normal">One Layer.</span>
<span className="italic text-stone-400">Everything Connected.</span>
</h2>
<p className="text-stone-500 text-lg text-center max-w-2xl mx-auto mb-24 reveal delay-100">
          Shashi.ai doesn't replace your PMS or CRS. It sits above them as an
          agentic orchestration layer — unifying guest data, automating
          decisions, and personalising every interaction in real time.
        </p>
<div className="relative">
<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#E3EBE6] hidden md:block overflow-hidden">
<div className="w-full bg-[#87A995] absolute top-0 left-0 h-full -translate-y-full transition-transform duration-[2000ms] ease-in-out reveal active:translate-y-0"></div>
</div>
<div className="space-y-32">
<div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal">
<div className="md:w-1/2 flex justify-end">
<div className="bg-[#F4F7F5] p-6 rounded-2xl border border-[#E3EBE6] max-w-md w-full shadow-sm rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default">
<div className="flex items-center gap-3 mb-4 border-b border-[#C5D6CC] pb-3">
<iconify-icon className="text-xl text-[#4F705D]" icon="solar:layers-linear"></iconify-icon>
<span className="text-sm font-medium text-stone-700">
                      Integrations Active
                    </span>
</div>
<div className="space-y-3">
<div className="h-2 w-2/3 bg-[#C5D6CC] rounded-full animate-pulse"></div>
<div className="h-2 w-1/2 bg-[#C5D6CC] rounded-full animate-pulse delay-100"></div>
</div>
</div>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#F4F7F5] items-center justify-center z-10 shadow-lg">
<iconify-icon className="text-2xl text-[#2D4438]" icon="solar:plug-circle-linear"></iconify-icon>
</div>
<div className="md:w-1/2">
<h3 className="text-xl font-medium text-[#1F3027] mb-3">
                  Non-Disruptive
                </h3>
<p className="text-stone-500">
                  Integrates with existing hotel tech. Zero replacement
                  required.
                </p>
</div>
</div>
<div className="relative flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 reveal">
<div className="md:w-1/2 flex justify-start">
<div className="bg-[#F4F7F5] p-6 rounded-2xl border border-[#E3EBE6] max-w-md w-full shadow-sm -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-[#2D4438] bg-[#C5D6CC] px-2 py-1 rounded">
                      Agentic Flow
                    </span>
</div>
<div className="flex gap-2 mb-2">
<div className="h-8 w-8 rounded-full bg-white border border-[#C5D6CC]"></div>
<div className="h-8 flex-1 bg-white rounded-lg border border-[#C5D6CC]"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-white border border-[#C5D6CC]"></div>
<div className="h-8 flex-1 bg-white rounded-lg border border-[#C5D6CC]"></div>
</div>
</div>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#F4F7F5] items-center justify-center z-10 shadow-lg">
<iconify-icon className="text-2xl text-[#2D4438]" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="md:w-1/2 text-left md:text-right">
<h3 className="text-xl font-medium text-[#1F3027] mb-3">
                  Agentic AI
                </h3>
<p className="text-stone-500">
                  Autonomous decisions that personalise each guest's journey in
                  real time.
                </p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal">
<div className="md:w-1/2 flex justify-end">
<div className="bg-[#F4F7F5] p-6 rounded-2xl border border-[#E3EBE6] max-w-md w-full shadow-sm flex items-center justify-center h-32 hover:scale-105 transition-all duration-500">
<div className="text-center">
<div className="inline-flex p-3 bg-[#E3EBE6] text-[#4F705D] rounded-full mb-3 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-[#1F3027]">
                      One unified interface.
                    </p>
</div>
</div>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#F4F7F5] items-center justify-center z-10 shadow-lg">
<iconify-icon className="text-2xl text-[#2D4438]" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="md:w-1/2">
<h3 className="text-xl font-medium text-[#1F3027] mb-3">
                  Single Platform
                </h3>
<p className="text-stone-500">
                  One app controls Booking, Check-In, Room, Services, and
                  Loyalty.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#F4F7F5] border-[#E3EBE6] border-b pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-[#C5D6CC] rounded-full blur-[100px] animate-blob" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-xs font-medium text-[#2D4438] tracking-wide uppercase mb-4 block">
            The Platform
          </span>
<h2 className="text-4xl md:text-5xl font-cormorant text-[#1F3027] tracking-tight mb-4">
<span className="font-normal">Five Pillars.</span>
<span className="italic text-stone-500">One Seamless Stay.</span>
</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-100">
<div className="w-12 h-12 rounded-2xl bg-[#E3EBE6] text-[#4F705D] flex items-center justify-center mb-6 shadow-inner">
<span className="font-medium font-cormorant text-xl">01</span>
</div>
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              Booking
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              3 clicks to book. Apple/Google Pay. Loyalty built in.
            </p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-200">
<div className="w-12 h-12 rounded-2xl bg-[#E3EBE6] text-[#4F705D] flex items-center justify-center mb-6 shadow-inner">
<span className="font-medium font-cormorant text-xl">02</span>
</div>
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              Check-In
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              SmartAccess digital key. Contactless. No front desk.
            </p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-300">
<div className="w-12 h-12 rounded-2xl bg-[#E3EBE6] text-[#4F705D] flex items-center justify-center mb-6 shadow-inner">
<span className="font-medium font-cormorant text-xl">03</span>
</div>
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              In-Room
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              65" Shashi TV. IoT climate. AI concierge.
            </p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-100">
<div className="w-12 h-12 rounded-2xl bg-[#E3EBE6] text-[#4F705D] flex items-center justify-center mb-6 shadow-inner">
<span className="font-medium font-cormorant text-xl">04</span>
</div>
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              One-Click Service
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              Request anything. One tap. Instant fulfilment.
            </p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-200">
<div className="w-12 h-12 rounded-2xl bg-[#E3EBE6] text-[#4F705D] flex items-center justify-center mb-6 shadow-inner">
<span className="font-medium font-cormorant text-xl">05</span>
</div>
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              Marketing
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              Hyper-personalised offers. Real-time promotions. Cashback loyalty.
            </p>
</div>
<div className="bg-[#2D4438] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#2D4438] group cursor-pointer flex flex-col justify-center text-center reveal delay-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1F3027] to-transparent opacity-50"></div>
<div className="relative z-10">
<h3 className="text-xl font-normal font-cormorant text-white mb-2 tracking-tight">
                Explore Platform
              </h3>
<p className="text-sm text-[#C5D6CC] leading-relaxed mb-6">
                See how all modules connect seamlessly.
              </p>
<div className="inline-flex mx-auto items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#1F3027] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#1F3027] text-[#F4F7F5] reveal">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
<div className="">
<span className="text-xs font-medium text-[#87A995] tracking-wide uppercase mb-4 block">
              Industry Validation
            </span>
<h2 className="text-4xl md:text-5xl font-cormorant italic tracking-tight text-white mb-4">
              "Hotel of the Future"
            </h2>
<p className="text-[#A3C2B0] text-lg">— The Wall Street Journal</p>
<p className="text-[#C5D6CC] mt-6 max-w-lg leading-relaxed">
              Shashi.ai was featured by WSJ as the first platform to fully
              automate the end-to-end guest journey.
            </p>
</div>
<div className="h-px bg-[#3E5A4A] flex-1 mx-8 hidden md:block"></div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
<div className="p-6 rounded-2xl bg-[#2D4438]/50 border border-[#3E5A4A] text-center">
<span className="block text-4xl font-normal font-cormorant text-white mb-2 tracking-tight">
                3
              </span>
<span className="text-xs font-medium text-[#C5D6CC]">
                Clicks to complete a booking
              </span>
</div>
<div className="p-6 rounded-2xl bg-[#2D4438]/50 border border-[#3E5A4A] text-center">
<span className="block text-4xl font-normal font-cormorant text-white mb-2 tracking-tight">
                $100
              </span>
<span className="text-xs font-medium text-[#C5D6CC]">
                Revenue per room per month
              </span>
</div>
<div className="p-6 rounded-2xl bg-[#2D4438]/50 border border-[#3E5A4A] text-center">
<span className="block text-4xl font-normal font-cormorant text-white mb-2 tracking-tight">
                1
              </span>
<span className="text-xs font-medium text-[#C5D6CC]">
                App for the entire stay
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white text-center relative z-10 border-b border-[#E3EBE6]">
<div className="max-w-4xl mx-auto space-y-4 mb-16 reveal">
<span className="text-xs font-medium text-[#2D4438] tracking-wide uppercase block">
          Guest Stories
        </span>
<h2 className="text-4xl md:text-5xl font-cormorant text-[#1F3027] tracking-tight leading-tight">
<span className="font-normal">The Age of</span>
<br/>
<span className="italic text-stone-400">Hyper-Personalisation</span>
</h2>
</div>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 reveal delay-100">
<div className="bg-[#F4F7F5] rounded-3xl border border-[#E3EBE6] overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 text-left flex flex-col">
<div className="aspect-video bg-stone-200 relative flex items-center justify-center">
<div className="absolute inset-0 bg-stone-800/20 group-hover:bg-transparent transition-colors"></div>
<iconify-icon className="text-5xl text-white drop-shadow-md group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              "The Google Executive"
            </h3>
<p className="text-sm text-stone-500">
              Pre-programmed his stay before landing
            </p>
</div>
</div>
<div className="bg-[#F4F7F5] rounded-3xl border border-[#E3EBE6] overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 text-left flex flex-col">
<div className="aspect-video bg-stone-200 relative flex items-center justify-center">
<div className="absolute inset-0 bg-stone-800/20 group-hover:bg-transparent transition-colors"></div>
<iconify-icon className="text-5xl text-white drop-shadow-md group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              "Hotel of the Future"
            </h3>
<p className="text-sm text-stone-500">WSJ featured story</p>
</div>
</div>
<div className="bg-[#F4F7F5] rounded-3xl border border-[#E3EBE6] overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 text-left flex flex-col">
<div className="aspect-video bg-stone-200 relative flex items-center justify-center">
<div className="absolute inset-0 bg-stone-800/20 group-hover:bg-transparent transition-colors"></div>
<iconify-icon className="text-5xl text-white drop-shadow-md group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-xl font-normal font-cormorant text-[#1F3027] mb-2 tracking-tight">
              "From Booking to Checkout"
            </h3>
<p className="text-sm text-stone-500">Full guest journey walkthrough</p>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#1F3027] pt-24 pr-6 pb-24 pl-6" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-cormorant tracking-tight mb-4">
<span className="font-normal">Simple Pricing.</span>
<span className="italic text-[#87A995]">Serious Returns.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 reveal delay-100">
<div className="bg-[#2D4438] p-10 rounded-3xl border border-[#3E5A4A] flex flex-col justify-between hover:border-[#6B9078] transition-colors">
<div className="">
<h3 className="text-2xl font-normal font-cormorant mb-4 tracking-tight">
                Core Layer
              </h3>
<p className="text-sm text-[#C5D6CC] mb-8">
                Essential orchestration for modern hospitality.
              </p>
<ul className="space-y-4 text-sm text-[#E3EBE6] mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#87A995]" icon="solar:check-circle-linear"></iconify-icon>
                  Booking &amp; Check-In
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#87A995]" icon="solar:check-circle-linear"></iconify-icon>
                  PMS Integration
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#87A995]" icon="solar:check-circle-linear"></iconify-icon>
                  Standard Analytics
                </li>
</ul>
</div>
<button className="w-full py-3 rounded-full bg-white text-[#1F3027] text-sm font-medium hover:bg-[#F4F7F5] transition-colors">
              Start With a Demo
            </button>
</div>
<div className="bg-gradient-to-b from-[#3E5A4A] to-[#2D4438] p-10 rounded-3xl border border-[#6B9078] flex flex-col justify-between shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#6B9078] text-white text-xs font-medium px-4 py-1 rounded-bl-xl">
              Recommended
            </div>
<div className="">
<h3 className="text-2xl font-normal font-cormorant mb-4 tracking-tight">
                Full Autonomous
              </h3>
<p className="text-sm text-[#C5D6CC] mb-8">
                The complete end-to-end guest journey platform.
              </p>
<ul className="space-y-4 text-sm text-white mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5D6CC]" icon="solar:check-circle-linear"></iconify-icon>
                  All Core Features
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5D6CC]" icon="solar:check-circle-linear"></iconify-icon>
                  IoT In-Room Control
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5D6CC]" icon="solar:check-circle-linear"></iconify-icon>
                  AI Marketing Engine
                </li>
</ul>
</div>
<button className="w-full py-3 rounded-full bg-[#6B9078] text-white text-sm font-medium hover:bg-[#4F705D] transition-colors">
              Start With a Demo
            </button>
</div>
</div>
<div className="reveal delay-200 text-center bg-[#2D4438]/50 max-w-2xl border-[#3E5A4A] border rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<span className="block text-4xl font-normal font-cormorant mb-2 tracking-tight">
            $100
          </span>
<span className="text-sm text-[#C5D6CC]">
            Potential additional revenue per room per month via up-sells and
            efficiencies.
          </span>
</div>
</div>
</section><section className="mb-12 pt-24 pr-6 pb-24 pl-6" id="demo">
<div className="max-w-5xl mx-auto bg-[#E3EBE6] rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden reveal shadow-2xl shadow-[#E3EBE6]">
<div className="absolute top-0 left-0 w-96 h-96 bg-white/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A3C2B0]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-cormorant text-[#1F3027] tracking-tight mb-6">
<span className="font-normal">Ready to Orchestrate</span>
<span className="italic text-[#4F705D]">Every Stay?</span>
</h2>
<p className="text-[#4F705D] mb-12 max-w-xl mx-auto text-lg">
            Join the hotels already delivering the future. See Shashi.ai live.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#2D4438] text-white text-base font-medium hover:bg-[#1F3027] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 duration-300">
              Book a Demo →
            </button>
<button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-[#1F3027] text-base font-medium hover:bg-stone-50 transition-all border border-transparent hover:border-[#C5D6CC] hover:-translate-y-1 shadow-sm hover:shadow-lg">
              Explore the Platform
            </button>
</div>
</div>
</div>
</section>





<footer className="bg-white border-t border-stone-100 pt-20 pb-10 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="reveal">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-50"></div>
<iconify-icon className="text-cyan-200 text-sm relative z-10 -rotate-12" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-normal font-cormorant text-xl text-[#1F3027] tracking-tight">
                Shashi.ai
              </span>
</a>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed">
              Agentic AI for Autonomous Hospitality.
            </p>
</div>
<div className="flex gap-20 reveal delay-100">
<div>
<h4 className="font-medium text-stone-900 mb-6 text-sm">Platform</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li>
<a className="hover:text-[#4F705D] transition-colors" href="#booking">
                    Booking
                  </a>
</li>
<li>
<a className="hover:text-[#4F705D] transition-colors" href="#check-in">
                    Check-In
                  </a>
</li>
<li>
<a className="hover:text-[#4F705D] transition-colors" href="#in-room">
                    In-Room
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li>
<a className="hover:text-[#4F705D] transition-colors" href="#about">
                    About Us
                  </a>
</li>
<li>
<a className="hover:text-[#4F705D] transition-colors" href="#pricing">
                    Pricing
                  </a>
</li>
<li>
<a className="hover:text-[#4F705D] transition-colors" href="#demo">
                    Book Demo
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 reveal delay-200">
<p className="">© 2023 Shashi.ai Inc. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-stone-600 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-stone-600 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
