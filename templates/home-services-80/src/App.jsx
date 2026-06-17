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



      lucide.createIcons();

      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const btn = item.querySelector('.faq-button');
        const wrapper = item.querySelector('.faq-content-wrapper');
        const icon = item.querySelector('.faq-icon');

        btn.addEventListener('click', () => {
          const isOpen = wrapper.classList.contains('open');

          faqItems.forEach(otherItem => {
            otherItem.querySelector('.faq-content-wrapper').classList.remove('open');
            otherItem.querySelector('.faq-icon').classList.remove('rotate-45');
          });

          if (!isOpen) {
            wrapper.classList.add('open');
            icon.classList.add('rotate-45');
          }
        });
      });

      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach(el => revealObserver.observe(el));
    
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
      

<header className="inset-x-0 z-50 fixed top-0 bg-white/80 backdrop-blur-md border-b border-slate-900/5 transition-all">
<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8">
<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 flex items-center transition-opacity hover:opacity-70 duration-300" href="#">
<span className="text-[22px] tracking-[0.2em] uppercase text-[#1d1d1f] font-semibold" style={{fontFamily: '\'Didot\', \'Bodoni MT\', \'Times New Roman\', serif'}}>
              SOVVA
            </span>
</a>
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
<div className="flex items-center gap-6">
<a className="text-sm font-medium leading-6 transition-colors text-[#1d1d1f] hover:text-[#86868b]" href="#">
              Log in
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-semibold tracking-tight text-white shadow-sm hover:bg-black transition-all hover:scale-[1.02]" href="#">
              Get a demo
            </a>
</div>
</div>
</nav>
</header>
<main className="pb-20 sm:pb-0">

<section className="relative isolate pt-24 pb-20 sm:pt-32 lg:pt-40 lg:pb-28 overflow-hidden">

<div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-gradient-to-br from-[#f5f5f7] via-[#ebebf0] to-[#e5e5ea] opacity-80"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0 items-center">

<div className="lg:col-span-7 text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">

<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1.5 text-xs font-medium tracking-tight text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.04)] opacity-0 animate-fade-in-up">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071e3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0071e3]"></span>
</span>
                Exclusive territories: 1 contractor per city
              </div>

<h1 className="mt-8 text-4xl sm:text-6xl lg:text-[5rem] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.05] opacity-0 animate-fade-in-up [animation-delay:100ms]">
                Stop losing jobs to
                <br className="hidden sm:block"/>
<span className="bg-gradient-to-br from-[#1d1d1f] to-[#86868b] bg-clip-text text-transparent">
                  shared leads
                </span>
                and missed calls
              </h1>

<p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#86868b] max-w-xl font-normal tracking-tight opacity-0 animate-fade-in-up [animation-delay:200ms]">
                We fill your calendar with exclusive homeowner leads. Our AI
                texts every missed call in under 60 seconds—turning dead leads
                into booked jobs and adding $20k-$50k to your monthly revenue.
              </p>

<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up [animation-delay:300ms]">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-8 py-4 text-base font-medium text-white shadow-xl shadow-black/10 hover:bg-black hover:scale-[1.02] transition-all duration-300" href="#">
                  Claim your territory
                  <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-8 py-4 text-base font-medium text-[#1d1d1f] ring-1 ring-inset ring-slate-900/10 shadow-sm hover:bg-white hover:scale-[1.02] transition-all duration-300" href="#">
<i className="h-5 w-5 text-[#86868b]" data-lucide="play-circle" strokeWidth="1.5"></i>
                  Watch 2-min demo
                </a>
</div>

<div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-slate-900/5 opacity-0 animate-fade-in-up [animation-delay:400ms]">
<div className="flex items-center gap-2.5 text-sm font-medium text-[#1d1d1f] tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-[#1d1d1f]"></span>
                  100% exclusive leads
                </div>
<div className="flex items-center gap-2.5 text-sm font-medium text-[#1d1d1f] tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-[#1d1d1f]"></span>
                  30-lead guarantee
                </div>
<div className="flex items-center gap-2.5 text-sm font-medium text-[#1d1d1f] tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-[#1d1d1f]"></span>
                  60-second AI follow-up
                </div>
<div className="flex items-center gap-2.5 text-sm font-medium text-[#1d1d1f] tracking-tight lg:ml-auto">
<span className="text-[#86868b]">Trusted by</span>
<span>500+ Contractors</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full max-w-[calc(100vw-2rem)] sm:max-w-lg mx-auto lg:max-w-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>

<div className="relative rounded-[2rem] border overflow-hidden z-10 border-slate-900/10 bg-white/80 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] opacity-0 animate-fade-in-up [animation-delay:200ms]">
<div className="flex items-center justify-between border-b px-6 py-5 border-slate-900/5 bg-white">
<div className="flex items-center gap-2.5">
<i className="h-4 w-4 text-[#1d1d1f]" data-lucide="layout-grid" strokeWidth="2"></i>
<h3 className="text-base font-semibold text-[#1d1d1f] tracking-tight">
                      Today's leads
                    </h3>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5f5f7] border border-slate-900/5 shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0071e3]"></span>
</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-[#1d1d1f]">
                      Live
                    </span>
</div>
</div>
<div className="divide-y divide-slate-900/5">
<div className="flex items-center justify-between px-6 py-4 bg-white hover:bg-[#fbfbfd] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold tracking-tight text-blue-700">
                        JM
                      </div>
<div>
<p className="text-sm font-medium text-[#1d1d1f] tracking-tight">
                          James Miller
                        </p>
<p className="text-[11px] font-medium text-[#86868b] mt-0.5 tracking-tight">
                          AC repair, emergency • 2m ago
                        </p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold tracking-tight bg-[#f5f5f7] text-[#1d1d1f]">
                      Booked
                    </span>
</div>
<div className="flex items-center justify-between px-6 py-4 bg-white hover:bg-[#fbfbfd] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-semibold tracking-tight text-emerald-700">
                        SR
                      </div>
<div>
<p className="text-sm font-medium text-[#1d1d1f] tracking-tight">
                          Sarah Rodriguez
                        </p>
<p className="text-[11px] font-medium text-[#86868b] mt-0.5 tracking-tight">
                          New HVAC install • 15m ago
                        </p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold tracking-tight bg-blue-50 text-blue-700">
                      AI Follow-up
                    </span>
</div>
<div className="flex items-center justify-between px-6 py-4 bg-white hover:bg-[#fbfbfd] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center text-xs font-semibold tracking-tight text-amber-700">
                        DK
                      </div>
<div>
<p className="text-sm font-medium text-[#1d1d1f] tracking-tight">
                          David Kim
                        </p>
<p className="text-[11px] font-medium text-[#86868b] mt-0.5 tracking-tight">
                          Furnace replacement • 1h ago
                        </p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold tracking-tight bg-[#1d1d1f] text-white shadow-sm">
                      New Lead
                    </span>
</div>
<div className="flex items-center justify-between px-6 py-4 bg-white hover:bg-[#fbfbfd] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold tracking-tight text-purple-700">
                        LP
                      </div>
<div>
<p className="text-sm font-medium text-[#1d1d1f] tracking-tight">
                          Lisa Park
                        </p>
<p className="text-[11px] font-medium text-[#86868b] mt-0.5 tracking-tight">
                          Drain cleaning • 2h ago
                        </p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-semibold tracking-tight bg-[#f5f5f7] text-[#1d1d1f]">
                      Booked
                    </span>
</div>
</div>
</div>

<div className="absolute -left-2 sm:-left-8 -bottom-4 sm:-bottom-8 z-20 animate-float">
<div className="px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-3xl font-semibold text-[#1d1d1f] tracking-tighter leading-none">
                        47
                      </p>
<p className="text-[10px] font-medium text-[#86868b] mt-1 tracking-tight uppercase">
                        New Leads
                      </p>
</div>
<div className="h-8 w-[1px] bg-slate-200"></div>
<div className="flex flex-col">
<p className="text-3xl font-semibold text-emerald-600 tracking-tighter leading-none">
                        12
                      </p>
<p className="text-[10px] font-medium text-[#86868b] mt-1 tracking-tight uppercase">
                        Booked
                      </p>
</div>
</div>
</div>
</div>

<div className="absolute -right-2 sm:-right-8 top-8 sm:top-16 z-20 animate-float-delayed">
<div className="px-5 py-4 rounded-2xl bg-[#1d1d1f]/90 backdrop-blur-xl border border-[#1d1d1f] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div>
<p className="text-2xl font-semibold text-white tracking-tighter leading-none">
                        $52,400
                      </p>
<p className="text-[10px] font-medium text-[#86868b] mt-1 tracking-tight uppercase">
                        Revenue Generated
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/5 bg-white py-10 opacity-0 animate-fade-in-up [animation-delay:500ms]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-semibold text-[#86868b] tracking-widest uppercase mb-8">
            Seamlessly integrates with the tools you already use
          </p>
<div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-50 transition-all duration-500">
<div className="text-xl font-bold tracking-tighter text-[#1d1d1f]">
              ServiceTitan
            </div>
<div className="text-xl font-bold tracking-tighter text-[#1d1d1f]">
              Housecall Pro
            </div>
<div className="text-xl font-bold tracking-tighter text-[#1d1d1f]">
              Jobber
            </div>
<div className="text-xl font-bold tracking-tighter text-[#1d1d1f]">
              Sera
            </div>
</div>
</div>
</section>
<section className="relative pb-16 lg:pb-20 overflow-hidden pt-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative rounded-[2rem] px-6 py-12 sm:p-16 overflow-hidden bg-[#f5f5f7] border-0">
<div className="relative grid grid-cols-2 gap-y-8 sm:gap-y-10 md:grid-cols-4 md:gap-y-0 text-center">
<div className="flex flex-col items-center justify-center gap-1 px-2 sm:px-4 md:border-r border-slate-900/5">
<span className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tighter">
                  500+
                </span>
<span className="text-xs font-medium tracking-tight text-[#86868b] uppercase">
                  Leads/mo
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1 px-2 sm:px-4 md:border-r border-slate-900/5">
<span className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tighter">
                  $2.4M
                </span>
<span className="text-xs font-medium tracking-tight text-[#86868b] uppercase">
                  Client Rev
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1 px-2 sm:px-4 md:border-r border-slate-900/5">
<span className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tighter">
                  4.7x
                </span>
<span className="text-xs font-medium tracking-tight text-[#86868b] uppercase">
                  Avg ROAS
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1 px-2 sm:px-4">
<span className="text-3xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tighter">
                  &lt;60s
                </span>
<span className="text-xs font-medium tracking-tight text-[#86868b] uppercase">
                  Response
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 sm:py-28">
<div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">

<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-[#1d1d1f]"></div>
<span className="text-sm font-medium tracking-tight text-[#1d1d1f]">
                The Sovva System
              </span>
</div>
<h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#1d1d1f] font-semibold leading-[1.05]">
              Your unfair advantage over every
              <br className="hidden sm:block"/>
              competitor in town
            </h2>
<p className="mt-6 max-w-[650px] text-xl leading-relaxed text-[#86868b] font-normal tracking-tight">
              Sovva replaces your receptionist, your marketing team, and your
              follow-up process with one system that runs 24/7.
            </p>
</div>

<div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">

<div className="group flex flex-col overflow-hidden rounded-[2rem] bg-[#f5f5f7] border-0 transition-all hover:scale-[1.02] duration-500">
<div className="relative flex h-80 items-center justify-center bg-transparent p-8 overflow-hidden">
<div className="relative w-full max-w-[280px] transform transition-transform duration-500 ease-out group-hover:scale-[1.03]">
<div className="rounded-xl border border-slate-900/10 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
<div className="mb-3 flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f7] text-[#1d1d1f] overflow-hidden">
<img alt="Logo" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=Elite+HVAC&amp;background=1d1d1f&amp;color=fff&amp;size=40"/>
</div>
<div>
<div className="text-[11px] font-semibold text-[#1d1d1f] tracking-tight">
                          Elite HVAC Services
                        </div>
<div className="text-[9px] text-[#86868b] mt-0.5">
                          Sponsored • Serving your area
                        </div>
</div>
</div>
<div className="relative mb-3 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f7] border border-slate-900/5">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-900/5 text-[10px] font-medium text-[#1d1d1f] mb-2 flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          Available today
                        </div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="text-[10px] font-medium text-[#1d1d1f]">
                        Need an emergency repair?
                      </div>
<div className="rounded-md bg-[#0071e3] px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm">
                        Get Quote
                      </div>
</div>
</div>
<div className="absolute -right-3 -top-3 flex gap-1.5">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm border border-slate-900/5">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm border border-slate-900/5">
<i className="h-4 w-4 text-[#1d1d1f]" data-lucide="search" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
<div className="flex flex-1 flex-col bg-transparent px-6 sm:px-10 pb-8 sm:pb-10 pt-4">
<h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                  Exclusive lead generation
                </h3>
<p className="mt-3 text-lg leading-relaxed text-[#86868b] font-normal tracking-tight">
                  Targeted ads on Facebook, Instagram, and Google put your
                  business in front of homeowners who need you right now. Every
                  lead is yours alone — never shared.
                </p>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-[2rem] bg-[#f5f5f7] border-0 transition-all hover:scale-[1.02] duration-500">
<div className="relative flex h-80 items-center justify-center bg-transparent p-8 overflow-hidden">
<div className="relative w-full max-w-[280px] transform transition-transform duration-500 ease-out group-hover:scale-[1.03]">
<div className="flex flex-col gap-3 w-full">
<div className="text-center text-[9px] text-[#86868b] font-medium mb-1">
                      Today 2:14 PM
                    </div>
<div className="self-start max-w-[85%] rounded-[18px] rounded-bl-[4px] bg-[#e5e5ea] px-4 py-2.5 text-[13px] text-[#1d1d1f] leading-snug">
                      Hi! This is Sovva AI from Elite HVAC. We missed your call,
                      how can we help?
                    </div>
<div className="self-end max-w-[85%] rounded-[18px] rounded-br-[4px] bg-[#0071e3] px-4 py-2.5 text-[13px] text-white leading-snug">
                      My AC is blowing hot air. I need someone ASAP.
                    </div>
<div className="self-start max-w-[85%] rounded-[18px] rounded-bl-[4px] bg-[#e5e5ea] px-4 py-2.5 text-[13px] text-[#1d1d1f] leading-snug relative">
                      I can get a tech out today between 2-4 PM. Does that time
                      work for you?
                      <div className="absolute -bottom-4 left-2 text-[8px] text-[#86868b]">
                        Read 2:15 PM
                      </div>
</div>
<div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-medium text-[#86868b]">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Auto-booked in 47s</span>
</div>
</div>
</div>
</div>
<div className="flex flex-1 flex-col bg-transparent px-6 sm:px-10 pb-8 sm:pb-10 pt-4">
<h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                  AI follow-up in 60 seconds
                </h3>
<p className="mt-3 text-lg leading-relaxed text-[#86868b] font-normal tracking-tight">
                  Missed call? Sovva texts them back instantly, qualifies their
                  need, and books the estimate on your calendar. 24/7, nights,
                  weekends, holidays.
                </p>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-[2rem] bg-[#f5f5f7] border-0 transition-all hover:scale-[1.02] duration-500">
<div className="relative flex h-80 items-center justify-center bg-transparent p-8 overflow-hidden">
<div className="relative w-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]">
<div className="flex gap-3 overflow-hidden rounded-xl bg-white p-4 border border-slate-900/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] w-[120%] -ml-[10%]">
<div className="flex flex-1 flex-col gap-2 rounded-lg bg-[#fbfbfd] p-2.5 border border-slate-900/5">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-semibold text-[#1d1d1f]">
                          New Leads
                        </span>
<span className="text-[10px] font-medium text-[#86868b]">
                          2
                        </span>
</div>
<div className="rounded-md border border-slate-900/5 bg-white p-2.5 shadow-sm">
<div className="text-[10px] font-semibold text-[#1d1d1f] truncate">
                          James M.
                        </div>
<div className="text-[9px] text-[#86868b] mt-0.5 truncate">
                          AC repair, emergency
                        </div>
</div>
<div className="rounded-md border border-slate-900/5 bg-white p-2.5 shadow-sm">
<div className="text-[10px] font-semibold text-[#1d1d1f] truncate">
                          David K.
                        </div>
<div className="text-[9px] text-[#86868b] mt-0.5 truncate">
                          Furnace quote
                        </div>
</div>
</div>
<div className="flex flex-1 flex-col gap-2 rounded-lg bg-[#fbfbfd] p-2.5 border border-slate-900/5">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-semibold text-[#1d1d1f]">
                          Estimate
                        </span>
<span className="text-[10px] font-medium text-[#86868b]">
                          1
                        </span>
</div>
<div className="rounded-md border border-amber-500/20 bg-amber-50/50 p-2.5 shadow-sm">
<div className="text-[10px] font-semibold text-[#1d1d1f] truncate">
                          Sarah R.
                        </div>
<div className="text-[9px] text-amber-700 mt-0.5 truncate">
                          Tomorrow, 2:00 PM
                        </div>
</div>
</div>
<div className="flex flex-1 flex-col gap-2 rounded-lg bg-[#fbfbfd] p-2.5 border border-slate-900/5 opacity-50">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-semibold text-[#1d1d1f]">
                          Won
                        </span>
<span className="text-[10px] font-medium text-[#86868b]">
                          0
                        </span>
</div>
<div className="h-12 rounded-md border border-dashed border-slate-300 flex items-center justify-center">
<span className="text-[9px] text-[#86868b]">Drop here</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-1 flex-col bg-transparent px-6 sm:px-10 pb-8 sm:pb-10 pt-4">
<h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                  Your entire pipeline in one place
                </h3>
<p className="mt-3 text-lg leading-relaxed text-[#86868b] font-normal tracking-tight">
                  See every lead, every conversation, every booked estimate from
                  one dashboard. Access it from your phone while you're on the
                  job.
                </p>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-[2rem] bg-[#f5f5f7] border-0 transition-all hover:scale-[1.02] duration-500">
<div className="relative flex h-80 items-center justify-center bg-transparent p-8 overflow-hidden">
<div className="relative w-full max-w-[280px] transform transition-transform duration-500 ease-out group-hover:scale-[1.03]">
<div className="relative z-10 rounded-xl border border-slate-900/10 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
<div className="mb-3 flex gap-0.5">
<svg className="h-3.5 w-3.5 text-amber-400 fill-amber-400" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-3.5 w-3.5 text-amber-400 fill-amber-400" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-3.5 w-3.5 text-amber-400 fill-amber-400" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-3.5 w-3.5 text-amber-400 fill-amber-400" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-3.5 w-3.5 text-amber-400 fill-amber-400" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-[11px] text-[#1d1d1f] leading-relaxed mb-4">
                      "Incredible speed. My AC died at 9pm and they responded
                      instantly. Tech was here by 8am the next day. Highly
                      recommend!"
                    </p>
<div className="flex items-center gap-2.5 pt-3 border-t border-slate-900/5">
<div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[9px] font-bold">
                        TM
                      </div>
<div>
<div className="text-[10px] font-semibold text-[#1d1d1f]">
                          Tom M.
                        </div>
<div className="text-[9px] text-[#86868b]">
                          Local Guide • 12 reviews
                        </div>
</div>
</div>
</div>
<div className="absolute -bottom-5 -right-5 z-20 flex items-center gap-2 rounded-lg bg-[#1d1d1f] px-3.5 py-2.5 text-xs font-medium text-white shadow-lg">
<i className="h-3.5 w-3.5 text-[#0071e3]" data-lucide="send" strokeWidth="1.5"></i>
                    Review request sent to James M.
                  </div>
<div className="absolute -left-4 -top-4 z-20 flex items-center gap-1.5 rounded-full border border-slate-900/5 bg-white px-3 py-1.5 shadow-sm">
<i className="h-4 w-4 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-[#1d1d1f]">
                      4.9 stars, 127 reviews
                    </span>
</div>
</div>
</div>
<div className="flex flex-1 flex-col bg-transparent px-6 sm:px-10 pb-8 sm:pb-10 pt-4">
<h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                  Reputation on autopilot
                </h3>
<p className="mt-3 text-lg leading-relaxed text-[#86868b] font-normal tracking-tight">
                  After every job, Sovva automatically requests a review. More
                  5-star reviews means better Google rankings and more organic
                  calls.
                </p>
</div>
</div>
</div>

<div className="mt-20 flex flex-col items-center justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:scale-[1.02] hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30" href="#">
              Check territory availability
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<p className="mt-4 text-sm font-medium text-[#86868b] tracking-tight">
              Free 15-min strategy session. No commitment.
            </p>
</div>
</div>
</section>
<section className="bg-white py-20 sm:py-28 reveal">
<div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-[#1d1d1f]"></div>
<span className="text-sm font-medium tracking-tight text-[#1d1d1f]">
                How it works
              </span>
</div>
<h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#1d1d1f] font-semibold leading-[1.05]">
              Get booked solid in three steps
            </h2>
<p className="mt-6 max-w-[650px] text-xl leading-relaxed text-[#86868b] font-normal tracking-tight">
              We handle everything. You just close the jobs.
            </p>
</div>
<div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 reveal">
<div className="flex flex-col p-6 sm:p-8 transition-all hover:-translate-y-1 duration-500 relative bg-white rounded-2xl border border-slate-900/5 shadow-sm">
<div className="absolute top-6 right-8 text-6xl font-light tracking-tighter text-slate-100 pointer-events-none select-none">
                01
              </div>
<h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] relative z-10 mt-12">
                We build your lead machine
              </h3>
<p className="mt-4 text-sm leading-relaxed text-[#86868b] relative z-10">
                We set up your ads, landing pages, AI follow-up system, and CRM
                — all configured specifically for your trade and your market.
                Takes about a week.
              </p>
</div>
<div className="flex flex-col p-6 sm:p-8 transition-all hover:-translate-y-1 duration-500 relative bg-white rounded-2xl border border-slate-900/5 shadow-sm">
<div className="absolute top-6 right-8 text-6xl font-light tracking-tighter text-slate-100 pointer-events-none select-none">
                02
              </div>
<h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] relative z-10 mt-12">
                Leads start flowing in
              </h3>
<p className="mt-4 text-sm leading-relaxed text-[#86868b] relative z-10">
                Homeowners in your service area see your ads, request estimates,
                and our AI instantly contacts them, qualifies them, and books
                them on your calendar.
              </p>
</div>
<div className="flex flex-col p-6 sm:p-8 transition-all hover:-translate-y-1 duration-500 relative bg-white rounded-2xl border border-slate-900/5 shadow-sm">
<div className="absolute top-6 right-8 text-6xl font-light tracking-tighter text-slate-100 pointer-events-none select-none">
                03
              </div>
<h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] relative z-10 mt-12">
                You close jobs and grow
              </h3>
<p className="mt-4 text-sm leading-relaxed text-[#86868b] relative z-10">
                Show up to pre-qualified estimates with homeowners who are
                expecting you. No cold calls. No chasing. Our system keeps
                optimizing to send you better leads every month.
              </p>
</div>
</div>
<div className="mt-16 flex justify-center reveal">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:scale-[1.02] hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30" href="#">
              Check territory availability
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>
<section className="bg-[#f5f5f7] py-20 sm:py-28 reveal">
<div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-[#1d1d1f]"></div>
<span className="text-sm font-medium tracking-tight text-[#1d1d1f]">
                Real results
              </span>
</div>
<h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#1d1d1f] font-semibold leading-[1.05]">
              Contractors who switched to Sovva
            </h2>
<p className="mt-6 max-w-[650px] text-xl leading-relaxed text-[#86868b] font-normal tracking-tight">
              Real contractors. Real numbers.
            </p>
</div>
<div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 reveal">
<div className="flex flex-col rounded-[2rem] bg-white border border-slate-900/5 p-6 sm:p-8 transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] duration-500">
<div className="flex gap-1 mb-6">
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
</div>
<p className="text-base text-[#1d1d1f] leading-relaxed italic flex-grow">
                "We went from 15 leads a month to 47 in the first 60 days. The
                AI follow-up is a game-changer — we're booking estimates at 11pm
                on a Tuesday."
              </p>
<div className="mt-8 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] border border-slate-900/5 text-sm font-semibold text-[#1d1d1f]">
                  MR
                </div>
<div>
<p className="text-sm font-semibold text-[#1d1d1f]">Mike R.</p>
<p className="text-xs text-[#86868b]">HVAC Company, Tampa FL</p>
</div>
</div>
<div className="mt-6 border-t border-slate-900/5 pt-6 grid grid-cols-3 gap-2">
<div>
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    47
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    leads/mo
                  </p>
</div>
<div className="flex flex-col rounded-[2rem] bg-white border border-slate-900/5 p-6 sm:p-8 transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] duration-500">
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    $38K
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    new rev
                  </p>
</div>
<div className="flex flex-col rounded-[2rem] bg-white border border-slate-900/5 p-6 sm:p-8 transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] duration-500">
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    3.2x
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    ROAS
                  </p>
</div>
</div>
</div>
<div className="flex flex-col rounded-[2rem] bg-white border border-slate-900/5 p-8 transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] duration-500">
<div className="flex gap-1 mb-6">
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
</div>
<p className="text-base text-[#1d1d1f] leading-relaxed italic flex-grow">
                "I was spending $4,000 a month on Angi and closing maybe 2-3
                jobs. Now I spend less and get triple the jobs because every
                lead is exclusive."
              </p>
<div className="mt-8 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] border border-slate-900/5 text-sm font-semibold text-[#1d1d1f]">
                  DL
                </div>
<div>
<p className="text-sm font-semibold text-[#1d1d1f]">David L.</p>
<p className="text-xs text-[#86868b]">
                    Plumbing Company, Dallas TX
                  </p>
</div>
</div>
<div className="mt-6 border-t border-slate-900/5 pt-6 grid grid-cols-3 gap-2">
<div>
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    52
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    leads/mo
                  </p>
</div>
<div>
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    $67K
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    new rev
                  </p>
</div>
<div>
<p className="text-xl font-semibold text-[#1d1d1f] tracking-tighter pt-0.5">
                    Dropped
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    Angi
                  </p>
</div>
</div>
</div>
<div className="flex flex-col rounded-[2rem] bg-white border border-slate-900/5 p-8 transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] duration-500">
<div className="flex gap-1 mb-6">
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
<i className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" data-lucide="star"></i>
</div>
<p className="text-base text-[#1d1d1f] leading-relaxed italic flex-grow">
                "The missed call text-back alone paid for the entire system. We
                were losing 8-10 calls a week. Now every one gets a response in
                under a minute."
              </p>
<div className="mt-8 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] border border-slate-900/5 text-sm font-semibold text-[#1d1d1f]">
                  SM
                </div>
<div>
<p className="text-sm font-semibold text-[#1d1d1f]">Sarah M.</p>
<p className="text-xs text-[#86868b]">HVAC Company, Phoenix AZ</p>
</div>
</div>
<div className="mt-6 border-t border-slate-900/5 pt-6 grid grid-cols-3 gap-2">
<div>
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    35
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    leads/mo
                  </p>
</div>
<div>
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    $22K
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    recovered
                  </p>
</div>
<div>
<p className="text-2xl font-semibold text-[#1d1d1f] tracking-tighter">
                    &lt;60s
                  </p>
<p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-1">
                    response
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-20 sm:py-28 reveal">
<div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-[#1d1d1f]"></div>
<span className="text-sm font-medium tracking-tight text-[#1d1d1f]">
                What you get
              </span>
</div>
<h2 className="mt-8 text-4xl sm:text-5xl tracking-tighter text-[#1d1d1f] font-semibold leading-[1.05]">
              Everything included in the Sovva Growth Engine
            </h2>
</div>
<div className="mt-16 rounded-[2rem] border border-slate-900/5 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] reveal">
<div className="bg-[#1d1d1f] px-10 py-8 text-center">
<h3 className="text-2xl font-semibold text-white tracking-tight">
                The complete lead generation + AI system
              </h3>
<p className="text-base text-[#86868b] mt-2">
                Built specifically for HVAC and plumbing contractors
              </p>
</div>
<div className="bg-white px-6 sm:px-10 py-8">
<div className="flex flex-col">
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Facebook &amp; Instagram ad campaigns
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — targeting homeowners in your service area
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Google Search ads
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — capture high-intent "near me" searches
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      AI follow-up system
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — texts, emails, and books estimates 24/7/365
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Missed-call text-back
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — never lose a lead to voicemail again
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      CRM dashboard + mobile app
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — manage leads from your truck
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Automatic review requests
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — build your Google reputation on autopilot
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Monthly ad creative
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — professional video and image ads produced for you
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-slate-900/5">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Weekly performance reports
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — know exactly what's working
                    </span>
</div>
</div>
<div className="flex items-start gap-4 py-4 border-b-0">
<div className="flex h-7 w-7 mt-0.5 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7]">
<i className="h-4 w-4 text-[#0071e3]" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="font-medium text-[#1d1d1f]">
                      Exclusive territory
                    </span>
<span className="font-normal text-[#86868b] text-sm">
                      — we only work with ONE contractor per trade per city
                    </span>
</div>
</div>
</div>
<div className="mt-10 rounded-2xl bg-[#1d1d1f] p-6 sm:p-10 text-center shadow-xl relative overflow-hidden transform transition-all hover:-translate-y-1 duration-500">
<div className="relative z-10 flex flex-col items-center">
<div className="text-xs font-semibold tracking-widest text-[#86868b] uppercase mb-4">
                    The Guarantee
                  </div>
<h4 className="text-3xl font-semibold text-white tracking-tighter">
                    30 qualified leads in 60 days.
                  </h4>
<p className="text-base text-[#a1a1a6] mt-4 font-normal tracking-tight max-w-xl mx-auto leading-relaxed">
                    If we don't deliver, we work for free until we do. No
                    long-term contracts. You own your ad accounts and data.
                    Period.
                  </p>
</div>
</div>
<div className="mt-10 flex flex-col items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:scale-[1.02] hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30" href="#">
                  Check territory availability
                  <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<p className="mt-4 text-sm font-medium text-[#86868b] tracking-tight">
                  Free 15-min strategy session. No commitment.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#f5f5f7] py-20 sm:py-28 reveal">
<div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-[#1d1d1f]"></div>
<span className="text-sm font-medium tracking-tight text-[#1d1d1f]">
                FAQ
              </span>
</div>
<h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl tracking-tighter text-[#1d1d1f] font-semibold leading-[1.05]">
              Questions contractors ask us
            </h2>
</div>
<div className="mt-16 flex flex-col gap-3 reveal faq-container">
<div className="bg-white rounded-2xl border border-slate-900/5 overflow-hidden group faq-item">
<button className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none faq-button hover:bg-slate-50 transition-colors duration-300">
<span className="text-base font-medium text-[#1d1d1f] tracking-tight pr-4">
                  How is Sovva different from Angi or Thumbtack?
                </span>
<i className="h-5 w-5 text-[#86868b] shrink-0 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</button>
<div className="faq-content-wrapper">
<div className="faq-content-inner">
<div className="px-6 pb-5">
<p className="text-base text-[#86868b] leading-relaxed">
                      Those platforms sell the same lead to 3-5 contractors.
                      You're racing to call first and competing on price. With
                      Sovva, every lead is 100% exclusive to you. Nobody else
                      gets that homeowner's info. Plus our AI contacts them in
                      under 60 seconds — before your competitor even checks
                      voicemail.
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-900/5 overflow-hidden group faq-item">
<button className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none faq-button">
<span className="text-base font-medium text-[#1d1d1f] tracking-tight pr-4">
                  How quickly will I start getting leads?
                </span>
<i className="h-5 w-5 text-[#86868b] shrink-0 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</button>
<div className="faq-content-wrapper">
<div className="faq-content-inner">
<div className="px-6 pb-5">
<p className="text-base text-[#86868b] leading-relaxed">
                      Most clients see their first leads within 5-7 business
                      days of launch. By week 3-4, lead flow is consistent and
                      we start optimizing for your highest-value job types.
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-900/5 overflow-hidden group faq-item">
<button className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none faq-button">
<span className="text-base font-medium text-[#1d1d1f] tracking-tight pr-4">
                  What if I've been burned by marketing agencies before?
                </span>
<i className="h-5 w-5 text-[#86868b] shrink-0 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</button>
<div className="faq-content-wrapper">
<div className="faq-content-inner">
<div className="px-6 pb-5">
<p className="text-base text-[#86868b] leading-relaxed">
                      We hear this daily. That's why we don't do long-term
                      contracts, and we offer a hard 30-lead guarantee. You own
                      your ad accounts, your leads, and your data from day one.
                      If we don't deliver, we work for free until we do.
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-900/5 overflow-hidden group faq-item">
<button className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none faq-button">
<span className="text-base font-medium text-[#1d1d1f] tracking-tight pr-4">
                  Do I own the leads and ad accounts?
                </span>
<i className="h-5 w-5 text-[#86868b] shrink-0 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</button>
<div className="faq-content-wrapper">
<div className="faq-content-inner">
<div className="px-6 pb-5">
<p className="text-base text-[#86868b] leading-relaxed">
                      Yes. 100%. Your ad accounts, your leads, your data. If you
                      ever leave, everything stays with you. We don't hold your
                      business hostage.
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-900/5 overflow-hidden group faq-item">
<button className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none faq-button">
<span className="text-base font-medium text-[#1d1d1f] tracking-tight pr-4">
                  How much should I budget for ads?
                </span>
<i className="h-5 w-5 text-[#86868b] shrink-0 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</button>
<div className="faq-content-wrapper">
<div className="faq-content-inner">
<div className="px-6 pb-5">
<p className="text-base text-[#86868b] leading-relaxed">
                      We recommend starting at $1,500 to $3,000 per month in ad
                      spend, paid directly to Meta and Google. This typically
                      generates 30-60+ leads per month depending on your market.
                      You control the budget and can scale anytime.
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-900/5 overflow-hidden group faq-item">
<button className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none faq-button">
<span className="text-base font-medium text-[#1d1d1f] tracking-tight pr-4">
                  What trades do you work with?
                </span>
<i className="h-5 w-5 text-[#86868b] shrink-0 transition-transform duration-300 faq-icon" data-lucide="plus"></i>
</button>
<div className="faq-content-wrapper">
<div className="faq-content-inner">
<div className="px-6 pb-5">
<p className="text-base text-[#86868b] leading-relaxed">
                      We specialize in HVAC and plumbing contractors. Every ad
                      template, follow-up sequence, and AI script is built
                      specifically for these trades. We don't serve everyone —
                      your industry is the only one we know.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative bg-white py-24 sm:py-32 overflow-hidden reveal">
<div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[40rem] h-[40rem] bg-[#0071e3] rounded-full opacity-[0.04] blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-[650px] px-4 sm:px-6 lg:px-8 text-center">
<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium tracking-tight text-[#1d1d1f]">
              Get started
            </span>
</div>
<h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl tracking-tighter font-semibold leading-[1.05] text-[#1d1d1f]">
            Ready to stop chasing leads and start
            <span className="bg-gradient-to-br from-[#1d1d1f] to-[#86868b] bg-clip-text text-transparent">
              getting chased?
            </span>
</h2>
<p className="mt-6 text-xl leading-relaxed text-[#86868b] font-normal tracking-tight">
            Join 500+ top contractors scaling their businesses. See if your
            territory is still available. We'll analyze your market, review
            competitors, and map out your path to an extra $50k/month in
            revenue.
          </p>
<div className="mt-10 flex flex-col items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-10 py-5 text-lg font-medium text-white shadow-lg shadow-[#0071e3]/20 transition-all hover:scale-[1.02] hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/30" href="#">
              Check territory availability
              <i className="h-5 w-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 rounded-2xl sm:rounded-full bg-[#f5f5f7] border border-slate-900/5 px-4 sm:px-5 py-3 sm:py-2.5 text-xs sm:text-sm font-medium text-[#86868b] text-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
              We only take 1 contractor per trade per city. Check if your area
              is available.
            </div>
</div>
</div>
</section>
</main>
<footer className="bg-[#1d1d1f] py-12 pb-28 sm:pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<a className="flex items-center transition-opacity hover:opacity-70 duration-300 mb-6" href="#">
<span className="text-[22px] tracking-[0.2em] uppercase text-white font-semibold tracking-tight" style={{fontFamily: '\'Didot\', \'Bodoni MT\', \'Times New Roman\', serif'}}>
            SOVVA
          </span>
</a>
<div className="flex items-center gap-6 mb-6">
<a className="text-sm text-[#86868b] hover:text-white transition-colors" href="#">
            Privacy
          </a>
<a className="text-sm text-[#86868b] hover:text-white transition-colors" href="#">
            Terms
          </a>
</div>
<p className="text-sm text-[#86868b]">
          © 2026 Sovva. All rights reserved.
        </p>
</div>
</footer>
<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-900/10 z-[100] sm:hidden flex justify-center shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-base font-semibold tracking-tight text-white shadow-md hover:bg-[#0077ed] transition-all" href="#">
        Check availability
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>


    </>
  );
}
