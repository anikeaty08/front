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
      
<div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,242,255,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%),linear-gradient(180deg,#0A0F1E_0%,#0C1224_42%,#0A0F1E_100%)]">
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0F1E]/70 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold tracking-tighter text-white">
            ROLLYY
          </div>
</div>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-white/70 transition hover:text-white" href="#about">About</a>
<a className="text-sm font-medium text-white/70 transition hover:text-white" href="#features">Features</a>
<a className="text-sm font-medium text-white/70 transition hover:text-white" href="#industries">Industries</a>
<a className="text-sm font-medium text-white/70 transition hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden rounded-xl border border-[#00F2FF]/30 bg-[#00F2FF] px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_rgba(0,242,255,0.18)] transition hover:brightness-110 sm:inline-flex" href="#contact">
            Request Demo
          </a>
<button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white/80 md:hidden">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="">
<section className="relative">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-5 lg:items-center lg:gap-10 lg:px-8 lg:pb-28 lg:pt-24">
<div className="lg:col-span-3">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00F2FF]/20 bg-[#00F2FF]/10 px-4 py-2 text-xs font-medium text-[#A7FBFF]">
<span className="inline-flex h-2 w-2 rounded-full bg-[#00F2FF] shadow-[0_0_16px_rgba(0,242,255,0.9)]"></span>
              Mobile-first autonomous EV charging
            </div>
<h1 className="max-w-3xl text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Space Grotesk\', Inter, sans-serif'}}>
              Energy that
              <span className="bg-gradient-to-r from-white via-[#9FF9FF] to-[#00F2FF] bg-clip-text text-transparent">Finds You.</span>
</h1>
<p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Autonomous EV charging robots for airports, fleets, and smart cities. No infrastructure. No downtime.
            </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex min-w-[12.5rem] items-center justify-center rounded-xl bg-[#00F2FF] px-6 py-4 text-sm font-semibold text-black transition hover:brightness-110" href="#contact">
                Request Demo
              </a>
<a className="inline-flex min-w-[12.5rem] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10" href="#features">
                Explore Platform
              </a>
</div>
<div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
<div className="text-xs uppercase tracking-[0.18em] text-white/45">Deployment</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">Fast</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
<div className="text-xs uppercase tracking-[0.18em] text-white/45">Infrastructure</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">Zero-build</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
<div className="text-xs uppercase tracking-[0.18em] text-white/45">Uptime</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">Always-on</div>
</div>
</div>
</div>
<div className="relative lg:col-span-2">
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,242,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"></div>
<div className="relative h-[28rem] rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
<div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.32))]"></div>
<div className="absolute inset-x-6 bottom-8 h-px bg-gradient-to-r from-transparent via-[#00F2FF]/80 to-transparent"></div>
<div className="absolute inset-x-10 bottom-14 h-px bg-gradient-to-r from-transparent via-[#00F2FF]/35 to-transparent"></div>
<div className="absolute inset-x-14 bottom-20 h-px bg-gradient-to-r from-transparent via-[#00F2FF]/20 to-transparent"></div>
<div className="absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2">
<div className="relative mx-auto aspect-[4/5] max-w-sm">
<div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),rgba(227,235,242,0.92)_40%,rgba(178,195,210,0.75)_70%,rgba(88,104,122,0.25)_100%)] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.12),inset_12px_12px_24px_rgba(255,255,255,0.55),0_30px_80px_rgba(0,0,0,0.45)]"></div>
<div className="absolute left-1/2 top-[16%] h-6 w-6 -translate-x-1/2 rounded-full border border-[#00F2FF]/50 bg-[#00F2FF]/30 shadow-[0_0_28px_rgba(0,242,255,0.9)]"></div>
<div className="absolute left-1/2 top-[24%] h-3 w-24 -translate-x-1/2 rounded-full bg-[#00F2FF]/80 blur-[0.05rem]"></div>
<div className="absolute inset-x-[18%] bottom-[18%] h-[24%] rounded-[1.5rem] border border-white/15 bg-[#0F172A]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"></div>
<div className="absolute inset-x-[24%] bottom-[12%] h-[6%] rounded-full bg-[radial-gradient(circle,rgba(0,242,255,0.7),rgba(0,242,255,0.12)_60%,transparent_70%)]"></div>
</div>
</div>
<div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-[#0B1328]/80 px-4 py-3 backdrop-blur">
<div className="text-xs text-white/50">Status</div>
<div className="mt-1 text-sm font-medium text-white">Ready to deploy</div>
</div>
<div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-[#0B1328]/80 px-4 py-3 backdrop-blur">
<div className="text-xs text-white/50">Sensors</div>
<div className="mt-1 text-sm font-medium text-[#A7FBFF]">Active</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative px-6 py-20 lg:px-8 lg:py-28" id="about">
<div className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur xl:px-16">
<div className="pointer-events-none absolute inset-0 opacity-10">
<div className="absolute left-[10%] top-[28%] h-2 w-2 rounded-full bg-[#00F2FF]"></div>
<div className="absolute left-[22%] top-[52%] h-2 w-2 rounded-full bg-white"></div>
<div className="absolute left-[38%] top-[30%] h-2 w-2 rounded-full bg-[#00F2FF]"></div>
<div className="absolute left-[56%] top-[56%] h-2 w-2 rounded-full bg-white"></div>
<div className="absolute left-[72%] top-[34%] h-2 w-2 rounded-full bg-[#00F2FF]"></div>
<div className="absolute left-[84%] top-[50%] h-2 w-2 rounded-full bg-white"></div>
<div className="absolute left-[10%] top-[28%] h-px w-[28%] bg-gradient-to-r from-[#00F2FF]/0 via-[#00F2FF]/40 to-transparent"></div>
<div className="absolute left-[38%] top-[30%] h-px w-[18%] bg-gradient-to-r from-[#00F2FF]/0 via-white/40 to-transparent"></div>
<div className="absolute left-[56%] top-[56%] h-px w-[18%] bg-gradient-to-r from-[#00F2FF]/0 via-[#00F2FF]/30 to-transparent"></div>
</div>
<div className="relative">
<div className="inline-flex rounded-full border border-[#00F2FF]/20 bg-[#00F2FF]/10 px-4 py-2 text-xs font-medium text-[#A7FBFF]">
              Our Mission
            </div>
<h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Space Grotesk\', Inter, sans-serif'}}>
              Decoupling Power from the Grid.
            </h2>
<p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              We believe charging shouldn't be a destination. It should be a service that meets you where you are.
            </p>
</div>
</div>
</section>
<section className="px-6 py-20 lg:px-8 lg:py-28" id="features">
<div className="mx-auto max-w-7xl">
<div className="mb-10 max-w-2xl">
<div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
              Core Platform
            </div>
<h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Space Grotesk\', Inter, sans-serif'}}>
              The Bento Triple Threat
            </h2>
<p className="mt-4 text-base leading-8 text-white/65 sm:text-lg">
              Designed to move from pilot to production with intelligent routing, measurable sustainability, and operational fit.
            </p>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur lg:col-span-2 lg:min-h-[24rem]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,242,255,0.12),transparent_30%)]"></div>
<div className="relative flex h-full flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#00F2FF]/15 bg-[#00F2FF]/10 px-3 py-2 text-xs font-medium text-[#A7FBFF]">
<iconify-icon height="18" icon="solar:routing-2-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
                    On-Demand Intelligence
                  </div>
<h3 className="mt-5 max-w-lg text-2xl font-semibold tracking-tight text-white">A.I. pathing that navigates complex parking environments.</h3>
<p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                    Rollyy dynamically routes to the vehicle, avoids congestion, and optimizes charge delivery based on priority, battery level, and dwell time.
                  </p>
</div>
<div className="mt-8 rounded-[1.25rem] border border-white/10 bg-[#0E1630]/80 p-5">
<div className="grid grid-cols-6 gap-2">
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="relative aspect-square rounded-xl border border-[#00F2FF]/30 bg-[#00F2FF]/10 shadow-[0_0_24px_rgba(0,242,255,0.12)]">
<div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F2FF] shadow-[0_0_18px_rgba(0,242,255,0.85)]"></div>
</div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="relative aspect-square rounded-xl border border-[#00F2FF]/20 bg-white/[0.03]">
<div className="absolute inset-y-1/2 left-0 right-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00F2FF] to-transparent"></div>
</div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square border-white/5 border rounded-xl"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="relative aspect-square rounded-xl border border-[#00F2FF]/20 bg-white/[0.03]">
<div className="absolute inset-0">
<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00F2FF] to-transparent"></div>
</div>
</div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
<div className="aspect-square rounded-xl border border-white/5 bg-white/[0.03]"></div>
</div>
</div>
</div>
</div>
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur lg:min-h-[24rem]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,242,255,0.14),transparent_28%)]"></div>
<div className="relative flex h-full flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
<iconify-icon height="18" icon="solar:leaf-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
                    Eco-Impact
                  </div>
<h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">More utilization, less hard infrastructure.</h3>
<p className="mt-4 text-sm leading-7 text-white/65">
                    Increase charger availability while lowering site complexity and reducing idle vehicle downtime.
                  </p>
</div>
<div className="mt-8 flex items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#0E1630]/80 p-8">
<div className="relative h-40 w-28 rounded-[1.5rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur">
<div className="absolute left-1/2 top-5 h-20 w-16 -translate-x-1/2 rounded-[1rem] border border-white/15 bg-[linear-gradient(180deg,rgba(0,242,255,0.16),rgba(255,255,255,0.06))]"></div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-4xl">🍃</div>
<div className="absolute inset-x-4 bottom-3 h-2 rounded-full bg-[#00F2FF]/30"></div>
</div>
</div>
</div>
</div>
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur lg:col-span-3">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,242,255,0.1),transparent_24%)]"></div>
<div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
<iconify-icon height="18" icon="solar:server-path-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
                    Fleet Integration
                  </div>
<h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">Operationally aligned with fleet software and service teams.</h3>
<p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                    Integrate telemetry, deployment schedules, vehicle queues, and maintenance workflows into a single operational layer.
                  </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-3xl border border-white/10 bg-[#0E1630]/80 p-5">
<div className="text-xs text-white/45">API status</div>
<div className="mt-2 text-lg font-semibold text-white">Connected</div>
</div>
<div className="rounded-3xl border border-white/10 bg-[#0E1630]/80 p-5">
<div className="text-xs text-white/45">Charge queue</div>
<div className="mt-2 text-lg font-semibold text-white">24 vehicles</div>
</div>
<div className="rounded-3xl border border-white/10 bg-[#0E1630]/80 p-5">
<div className="text-xs text-white/45">Avg dispatch</div>
<div className="mt-2 text-lg font-semibold text-white">3.2 min</div>
</div>
<div className="rounded-3xl border border-white/10 bg-[#0E1630]/80 p-5">
<div className="text-xs text-white/45">Pilot readiness</div>
<div className="mt-2 text-lg font-semibold text-[#A7FBFF]">Immediate</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 py-20 lg:px-8 lg:py-28">
<div className="mx-auto max-w-7xl">
<div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
<div>
<div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                Social Proof
              </div>
<h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Space Grotesk\', Inter, sans-serif'}}>
                See Rollyy in Action
              </h2>
</div>
<div className="inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 p-2">
<span className="px-3 text-xs font-medium text-white/70">Cinema Mode</span>
<button className="relative h-8 w-14 rounded-full bg-[#00F2FF]/20 p-1">
<span className="absolute right-1 top-1 h-6 w-6 rounded-full bg-[#00F2FF] shadow-[0_0_16px_rgba(0,242,255,0.7)]"></span>
</button>
</div>
</div>
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
<div className="relative aspect-video w-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.18),transparent_25%),linear-gradient(180deg,#07101F_0%,#02050B_100%)]">
<div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.02)),repeating-linear-gradient(90deg,transparent,transparent_6%,rgba(255,255,255,0.03)_6.2%,transparent_6.4%)]"></div>
<div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-[#091122]/80 px-4 py-3 backdrop-blur">
<div className="text-xs text-white/50">Battery</div>
<div className="mt-1 text-sm font-medium text-white">98%</div>
</div>
<div className="absolute right-6 top-6 rounded-2xl border border-white/10 bg-[#091122]/80 px-4 py-3 backdrop-blur">
<div className="text-xs text-white/50">Status</div>
<div className="mt-1 text-sm font-medium text-[#A7FBFF]">Docking</div>
</div>
<div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-[#091122]/80 px-4 py-3 backdrop-blur">
<div className="text-xs text-white/50">Route ETA</div>
<div className="mt-1 text-sm font-medium text-white">01:24</div>
</div>
<div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-[#091122]/80 px-4 py-3 backdrop-blur">
<div className="text-xs text-white/50">Session</div>
<div className="mt-1 text-sm font-medium text-white">Live</div>
</div>
<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
<button className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur transition hover:bg-white/15">
<iconify-icon height="30" icon="solar:play-linear" style={{color: 'currentColor'}} width="30"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 py-20 lg:px-8 lg:py-28" id="industries">
<div className="mx-auto max-w-7xl">
<div className="mb-10 max-w-2xl">
<div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
              Industry Solutions
            </div>
<h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Space Grotesk\', Inter, sans-serif'}}>
              Customized for every deployment surface
            </h2>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
<div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur xl:row-span-2">
<div className="flex h-full flex-col justify-between">
<div>
<div className="mb-5 inline-flex rounded-full border border-[#00F2FF]/15 bg-[#00F2FF]/10 px-3 py-2 text-xs font-medium text-[#A7FBFF]">
                    Airports
                  </div>
<div className="mb-6 flex h-44 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#0E1630]/80">
<div className="relative h-24 w-full">
<div className="absolute left-1/2 top-6 h-px w-40 -translate-x-1/2 bg-[#00F2FF]/50"></div>
<div className="absolute left-1/2 top-10 h-12 w-px -translate-x-1/2 bg-[#00F2FF]/40"></div>
<div className="absolute left-1/2 top-10 h-px w-24 -translate-x-1/2 rotate-[18deg] bg-white/60"></div>
<div className="absolute left-1/2 top-10 h-px w-24 -translate-x-1/2 -rotate-[18deg] bg-white/60"></div>
<div className="absolute left-[58%] top-14 h-8 w-10 rounded-xl border border-[#00F2FF]/30 bg-[#00F2FF]/10"></div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Customized for Airports.</h3>
<p className="mt-4 text-sm leading-7 text-white/65">Reduce CAPEX by 40% while keeping airside and landside vehicle operations charged without fixed-stall constraints.</p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:col-span-1 xl:col-span-2">
<div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
                Smart Cities
              </div>
<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Customized for Smart Cities.</h3>
<p className="mt-4 text-sm leading-7 text-white/65">Reduce CAPEX by 40% with flexible curbside charging service that adapts to demand density and urban mobility patterns.</p>
</div>
<div className="flex h-40 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#0E1630]/80">
<div className="grid grid-cols-4 gap-2">
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="relative h-10 w-10 rounded-lg border border-[#00F2FF]/30 bg-[#00F2FF]/10">
<div className="absolute inset-1 rounded-md border border-[#00F2FF]/30"></div>
</div>
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.03]"></div>
</div>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
<div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
                Parking Ops
              </div>
<div className="mb-6 flex h-36 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#0E1630]/80">
<div className="grid grid-cols-3 gap-2">
<div className="h-12 w-12 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-12 w-12 rounded-lg border border-[#00F2FF]/30 bg-[#00F2FF]/10"></div>
<div className="h-12 w-12 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-12 w-12 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-12 w-12 rounded-lg border border-white/10 bg-white/[0.03]"></div>
<div className="h-12 w-12 rounded-lg border border-white/10 bg-white/[0.03]"></div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Customized for Parking Ops.</h3>
<p className="mt-4 text-sm leading-7 text-white/65">Reduce CAPEX by 40% and unlock charger availability without expensive retrofits across garages and lots.</p>
</div>
<div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
<div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
                Fleet Owners
              </div>
<div className="mb-6 flex h-36 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#0E1630]/80">
<div className="relative w-32">
<div className="h-px w-full bg-white/30"></div>
<div className="absolute left-3 top-[-0.15rem] h-3 w-3 rounded-full bg-[#00F2FF] shadow-[0_0_12px_rgba(0,242,255,0.8)]"></div>
<div className="absolute right-6 top-[-0.15rem] h-3 w-3 rounded-full bg-white/60"></div>
<div className="absolute left-10 top-5 h-px w-16 bg-[#00F2FF]/40"></div>
<div className="absolute left-14 top-3 h-6 w-8 rounded-lg border border-[#00F2FF]/30 bg-[#00F2FF]/10"></div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Customized for Fleet Owners.</h3>
<p className="mt-4 text-sm leading-7 text-white/65">Reduce CAPEX by 40% while sustaining higher vehicle readiness across distributed operations.</p>
</div>
</div>
</div>
</section>
<section className="px-6 py-20 lg:px-8 lg:py-28" id="contact">
<div className="mx-auto max-w-6xl">
<div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#0A0F1E_0%,#1E293B_100%)] p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
<div>
<div className="inline-flex rounded-full border border-[#00F2FF]/20 bg-[#00F2FF]/10 px-4 py-2 text-xs font-medium text-[#A7FBFF]">
                  Start a Pilot
                </div>
<h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Space Grotesk\', Inter, sans-serif'}}>
                  Launch Your Pilot Program Today.
                </h2>
<p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Validate demand, reduce downtime, and deploy charging where your vehicles already are.
                </p>
</div>
<div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
<a className="inline-flex min-w-[12.5rem] items-center justify-center rounded-xl bg-[#00F2FF] px-6 py-4 text-sm font-semibold text-black transition hover:brightness-110" href="#">
                  Request Demo
                </a>
<a className="inline-flex min-w-[12.5rem] items-center justify-center rounded-xl border border-[#00F2FF]/40 bg-transparent px-6 py-4 text-sm font-medium text-[#A7FBFF] transition hover:bg-[#00F2FF]/10" href="#">
                  Download Specs
                </a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 px-6 py-16 lg:px-8">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-5">
<div className="xl:col-span-1">
<div className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold tracking-tighter text-white">
            ROLLYY
          </div>
<p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Autonomous EV charging robots built for modern mobility networks.
          </p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition hover:text-white" href="#">
<iconify-icon height="18" icon="solar:camera-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition hover:text-white" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition hover:text-white" href="#">
<iconify-icon height="18" icon="solar:bolt-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</span>
<span className="text-xs font-medium text-white/75">System Status: Online</span>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Product</h4>
<ul className="mt-5 space-y-3">
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Autonomous Charging</a></li>
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Fleet Platform</a></li>
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Deployments</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Company</h4>
<ul className="mt-5 space-y-3">
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">About</a></li>
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Careers</a></li>
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Resources</h4>
<ul className="mt-5 space-y-3">
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Specs</a></li>
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Case Studies</a></li>
<li><a className="text-sm text-white/60 transition hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Newsletter</h4>
<p className="mt-5 text-sm leading-7 text-white/60">
            Get product updates and pilot announcements.
          </p>
<form className="mt-5 space-y-3">
<input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#00F2FF]/40 focus:bg-white/[0.07]" placeholder="Email address" type="email"/>
<button className="inline-flex w-full items-center justify-center rounded-xl bg-[#00F2FF] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110" type="submit">
              Subscribe
            </button>
</form>
</div>
</div>
<div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
<p>© 2026 Rollyy. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition hover:text-white/70" href="#">Privacy</a>
<a className="transition hover:text-white/70" href="#">Terms</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
