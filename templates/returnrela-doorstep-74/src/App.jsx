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
      

<div className="relative flex-1 overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl"></div>
<div className="absolute -top-20 right-[-160px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute bottom-[-260px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_55%,_#020617_100%)] opacity-80"></div>
</div>

<div className="relative z-10 flex min-h-screen flex-col">

<header className="w-full border-b border-white/5 bg-gradient-to-b from-slate-900/70 via-slate-950/30 to-transparent backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-400/60 bg-emerald-500/10 shadow-[0_0_24px_rgba(16,185,129,0.45)]">
<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">RR</span>
</div>
<span className="text-sm font-semibold tracking-[0.16em] text-slate-100">ReturnRelay</span>
</div>
<div className="hidden items-center gap-6 text-xs sm:flex">
<button className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium tracking-tight text-slate-300 shadow-sm backdrop-blur-sm transition hover:border-emerald-400/60 hover:text-emerald-200 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)]">
                Help
              </button>
<button className="rounded-full border border-emerald-400/70 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-medium tracking-tight text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)] backdrop-blur-xl transition hover:bg-emerald-500/20 hover:text-emerald-50 hover:shadow-[0_0_24px_rgba(16,185,129,0.55)]">
                Track pickup
              </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:items-start lg:gap-14 lg:px-8 lg:pt-14">

<div className="flex flex-1 flex-col gap-6 pt-1 lg:pt-3 xl:pt-5">
<div className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-2 py-1 text-[11px] font-medium tracking-tight text-slate-300 backdrop-blur-xl shadow-sm">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
                  ✓
                </span>
<span className="text-slate-300/90">Return online orders without leaving home.</span>
</div>
<div className="space-y-4">
<h1 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[40px] lg:leading-tight">
                  Returns, without the runaround.
                </h1>
<p className="max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
                  Schedule a doorstep pickup for your online returns in under
                  60 seconds. We handle the lines, labels, and drop-offs—so you
                  don’t have to.
                </p>
</div>

<div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 sm:max-w-md">
<div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 px-3.5 py-3 backdrop-blur-xl shadow-sm">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
<i className="lucide lucide-door-open text-[13px]" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-[13px] font-medium tracking-tight">
                      We pick up from your door
                    </p>
<p className="text-[11px] text-slate-400">
                      Apartments, houses, offices, doormen—no problem.
                    </p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 px-3.5 py-3 backdrop-blur-xl shadow-sm">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
<i className="lucide lucide-navigation-2 text-[13px]" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-[13px] font-medium tracking-tight">
                      We drop at UPS / FedEx / USPS
                    </p>
<p className="text-[11px] text-slate-400">
                      Or Whole Foods &amp; more, depending on the retailer.
                    </p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 px-3.5 py-3 backdrop-blur-xl shadow-sm sm:col-span-2">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
<i className="lucide lucide-dollar-sign text-[13px]" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-[13px] font-medium tracking-tight">
                      Typical fee: $3–$4 per parcel
                    </p>
<p className="text-[11px] text-slate-400">
                      No surprises—you’ll see the exact price before confirming.
                    </p>
</div>
</div>
</div>

<div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"></span>
<span>Currently piloting in select cities.</span>
</div>
<span className="hidden text-slate-600 sm:inline">•</span>
<span className="text-slate-400">You only pay when a pickup is confirmed.</span>
</div>
</div>

<div className="w-full max-w-md lg:max-w-lg">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_0_60px_rgba(15,23,42,1)] backdrop-blur-2xl sm:p-5 lg:p-6" id="booking-card">

<div className="pointer-events-none absolute -top-20 right-[-40px] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="relative space-y-5">

<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50">
                        Book a pickup
                      </h2>
<p className="mt-1 text-[12px] text-slate-400">
                        Enter your details to see your exact fee before
                        confirming.
                      </p>
</div>
<div className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium tracking-tight text-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.4)]">
                      ~$3–$4 / parcel
                    </div>
</div>

<form className="space-y-4">

<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Pickup location</label>
<div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2.5 text-sm shadow-sm backdrop-blur-xl transition hover:border-emerald-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)]">
<i className="lucide lucide-map-pin text-slate-400" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Enter pickup address (e.g., The House, Cornell Tech)" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Drop location</label>
<div className="grid grid-cols-2 gap-2 text-[11px] sm:grid-cols-3">

<button className="rounded-full border border-emerald-400/70 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-medium tracking-tight text-emerald-100 shadow-[0_0_16px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500/20 hover:text-emerald-50" type="button">
                          UPS Store
                        </button>
<button className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
                          FedEx
                        </button>
<button className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
                          USPS
                        </button>
<button className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
                          Whole Foods
                        </button>
<button className="col-span-2 rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100 sm:col-span-3" type="button">
                          Best option for me
                        </button>
</div>
</div>

<div className="space-y-2">
<label className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Attach return label / QR code</label>
<div className="space-y-2">
<div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-slate-900/60 px-3 py-3 text-center shadow-sm backdrop-blur-xl transition hover:border-emerald-400/60 hover:bg-slate-900/80">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-300">
<i className="lucide lucide-file-up text-[14px]" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-[11px] font-medium tracking-tight text-slate-200">
                              Drag &amp; drop, or
                              <span className="text-emerald-300">browse file</span>
</p>
<p className="text-[10px] text-slate-500">
                              PDF, PNG, or JPG up to 5MB.
                            </p>
</div>
</div>
<div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2.5 text-sm shadow-sm backdrop-blur-xl transition hover:border-emerald-400/60 hover:bg-slate-900/80">
<i className="lucide lucide-qrcode text-slate-400" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Or paste a QR / return code" type="text"/>
</div>

<div className="flex items-center gap-2 rounded-xl border border-white/5 bg-slate-900/60 px-2.5 py-2 text-[11px] text-slate-300">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
<i className="lucide lucide-file-text text-[13px]" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 truncate">
<p className="truncate font-medium tracking-tight">
                              return-label-example.pdf
                            </p>
<p className="text-[10px] text-slate-500">
                              428 KB · preview
                            </p>
</div>
<button className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-slate-300 transition hover:border-emerald-400/60 hover:text-emerald-200" type="button">
                            Change
                          </button>
</div>
</div>
</div>

<div className="space-y-2">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                        Need box / printing?
                      </p>
<div className="flex flex-wrap gap-2 text-[12px]">

<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
<span className="flex h-4 w-4 items-center justify-center rounded-[6px] border border-emerald-400/70 bg-emerald-500/15 text-emerald-200">
<i className="lucide lucide-check text-[10px]" style={{strokeWidth: '1.5'}}></i>
</span>
                          I need a box
                        </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
<span className="flex h-4 w-4 items-center justify-center rounded-[6px] border border-white/20 bg-slate-900/90 text-transparent">
<i className="lucide lucide-check text-[10px]" style={{strokeWidth: '1.5'}}></i>
</span>
                          I need my label printed
                        </button>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Last day to return (from retailer)</label>
<div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2.5 text-sm shadow-sm backdrop-blur-xl transition hover:border-emerald-400/60 hover:bg-slate-900/80">
<i className="lucide lucide-calendar text-slate-400" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent text-[13px] text-slate-100 [color-scheme:dark] focus:outline-none" type="date"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Pickup window</label>
<div className="flex flex-wrap gap-2 text-[11px]">
<button className="rounded-full border border-emerald-400/70 bg-emerald-500/10 px-3 py-1.5 font-medium tracking-tight text-emerald-100 shadow-[0_0_16px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500/20 hover:text-emerald-50" type="button">
                          Tonight 7–9 PM
                        </button>
<button className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
                          Tomorrow 7–9 PM
                        </button>
<button className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
                          Pick a time
                        </button>
</div>
</div>

<div className="flex items-start gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/5 px-3 py-2.5 text-[11px] text-emerald-100 shadow-[0_0_24px_rgba(16,185,129,0.45)]">
<i className="lucide lucide-badge-dollar-sign mt-0.5 text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<p className="leading-relaxed">
                        Estimated pickup fee:
                        <span className="font-medium">$3–$4</span> (you’ll see exact
                        price before confirming).
                      </p>
</div>

<div className="space-y-2 pt-1">
<button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-400/80 bg-emerald-500/20 px-4 py-3 text-sm font-semibold tracking-tight text-emerald-50 shadow-[0_0_30px_rgba(16,185,129,0.6)] transition hover:bg-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" type="button">
<span>Schedule pickup</span>
<i className="lucide lucide-arrow-right text-[16px]" style={{strokeWidth: '1.5'}}></i>
</button>
<p className="text-[10px] text-slate-500">
                        No charge until your driver is confirmed. Cancel free
                        up to 2 hours before pickup.
                      </p>
</div>
</form>

<div className="mt-3 hidden rounded-2xl border border-emerald-400/50 bg-slate-900/80 px-3.5 py-3 text-[12px] text-slate-100" id="confirmation-state">
<div className="flex items-start gap-2.5">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.6)]">
<i className="lucide lucide-check text-[14px]" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 space-y-1">
<p className="text-[12px] font-medium tracking-tight text-emerald-50">
                          Pickup scheduled
                        </p>
<p className="text-[11px] text-slate-300">
                          We’ve matched you with a driver. We’ll text you when
                          they’re on the way.
                        </p>
<div className="mt-2 grid gap-2 rounded-xl border border-white/5 bg-slate-950/60 p-2.5 text-[11px] text-slate-300">
<div className="flex justify-between gap-2">
<span className="text-slate-400">Pickup window</span>
<span className="font-medium text-slate-100">Tonight · 7–9 PM</span>
</div>
<div className="flex justify-between gap-2">
<span className="text-slate-400">Drop location</span>
<span className="font-medium text-slate-100">UPS Store · Best route</span>
</div>
<div className="flex justify-between gap-2">
<span className="text-slate-400">Est. fee</span>
<span className="font-medium text-emerald-300">$3.75</span>
</div>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-400/70 bg-transparent px-3 py-1.5 text-[11px] font-medium tracking-tight text-emerald-100 transition hover:bg-emerald-500/10 hover:text-emerald-50" type="button">
<span>Track pickup</span>
<i className="lucide lucide-route text-[14px]" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium tracking-tight text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-100" type="button">
                            Make another booking
                          </button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="mx-auto mt-2 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
<div className="flex flex-col gap-6 lg:flex-row lg:items-center">
<div className="flex-1 space-y-2">
<h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                  How ReturnRelay works
                </h2>
<p className="max-w-md text-[13px] leading-relaxed text-slate-400">
                  From last-minute labels to busy evenings, we handle the
                  errands behind your returns—so your parcel gets back on time,
                  every time.
                </p>
</div>
</div>
<div className="mt-5 grid gap-4 md:grid-cols-3">

<div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition hover:border-emerald-400/60 hover:shadow-[0_24px_65px_rgba(16,185,129,0.45)]">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
<i className="lucide lucide-home text-[16px]" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 1</span>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                    Tell us where to pick up
                  </h3>
<p className="text-[12px] leading-relaxed text-slate-400">
                    Drop in your address, pickup window, and last return date.
                    We’ll match you with a nearby, vetted driver.
                  </p>
</div>
</div>

<div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition hover:border-emerald-400/60 hover:shadow-[0_24px_65px_rgba(16,185,129,0.45)]">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
<i className="lucide lucide-scan-line text-[16px]" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 2</span>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                    Upload your return label or QR code
                  </h3>
<p className="text-[12px] leading-relaxed text-slate-400">
                    Snap a photo, upload a PDF, or paste your QR code. We’ll
                    handle printing, tap-to-scan codes, and retailer-specific
                    instructions.
                  </p>
</div>
</div>

<div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition hover:border-emerald-400/60 hover:shadow-[0_24px_65px_rgba(16,185,129,0.45)]">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
<i className="lucide lucide-hand-heart text-[16px]" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Step 3</span>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                    Hand your package to our driver at the door
                  </h3>
<p className="text-[12px] leading-relaxed text-slate-400">
                    We’ll scan your label or QR code, secure your parcel, and
                    drop it off at UPS, FedEx, USPS, or Whole Foods on your
                    behalf—with proof of drop-off.
                  </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
<div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 px-3.5 py-3.5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:px-4">
<div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-slate-400">
<span className="h-1 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></span>
<span>TRUST &amp; SAFETY</span>
</div>
<div className="flex flex-1 flex-wrap items-center justify-start gap-2 sm:justify-end">
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-300">
<i className="lucide lucide-badge-check text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>ID-verified drivers</span>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-300">
<i className="lucide lucide-camera text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Photo proof at pickup</span>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-300">
<i className="lucide lucide-shield-check text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Up to $100 coverage per parcel (example)</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-slate-950/80 py-4 backdrop-blur-xl">
<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
<div className="flex items-center gap-2 text-slate-400">
<span className="text-[11px] font-semibold tracking-[0.18em] uppercase">ReturnRelay</span>
<span className="hidden text-slate-700 sm:inline">•</span>
<span className="hidden sm:inline">Doorstep return pickups.</span>
</div>
<div className="flex items-center gap-4">
<button className="text-[11px] text-slate-400 transition hover:text-emerald-300 hover:underline">
                Help
              </button>
<button className="text-[11px] text-slate-400 transition hover:text-emerald-300 hover:underline">
                Privacy
              </button>
<button className="text-[11px] text-slate-400 transition hover:text-emerald-300 hover:underline">
                Terms
              </button>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
