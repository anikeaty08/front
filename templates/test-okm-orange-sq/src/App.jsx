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
      
<div className="min-h-screen flex flex-col">

<header className="border-b backdrop-blur border-stone-200/80 bg-stone-50/95" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center space-x-3">
<div className="h-9 w-9 border border-orange-500/70 flex items-center justify-center bg-stone-100/80" style={{}}>
<span className="text-xs font-semibold tracking-[0.24em] uppercase text-orange-700" style={{}}>OK</span>
</div>
<div>
<div className="flex items-center space-x-2">
<span className="text-lg font-semibold tracking-[0.2em] uppercase text-stone-900" style={{}}>OKAMI</span>
<span className="text-[11px] uppercase tracking-[0.28em] text-stone-500" style={{}}>Archery Range</span>
</div>
<div className="flex items-center text-[11px] text-stone-500 mt-0.5" style={{}}>
<span>Phoenix, Arizona</span>
</div>
</div>
</div>

<nav className="hidden md:flex items-center space-x-8 text-sm">
<a className="transition-colors text-stone-700 hover:text-orange-700" href="#ranges" style={{}}>Ranges</a>
<a className="transition-colors text-stone-700 hover:text-orange-700" href="#facilities" style={{}}>Facilities</a>
<a className="transition-colors text-stone-700 hover:text-orange-700" href="#training" style={{}}>Training</a>
<a className="transition-colors text-stone-700 hover:text-orange-700" href="#vip" style={{}}>VIP</a>
<a className="transition-colors text-stone-700 hover:text-orange-700" href="#about" style={{}}>About</a>
</nav>

<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex h-9 items-center border px-4 text-xs font-medium tracking-wide transition-colors border-stone-300/80 bg-stone-100/60 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100" style={{}}>
<i className="lucide lucide-map-pin mr-2 h-4 w-4"></i>
            Phoenix, AZ
          </button>
<button className="inline-flex h-9 items-center px-4 text-xs font-semibold tracking-[0.16em] uppercase hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 transition-colors bg-orange-400/90 text-stone-100" style={{}}>
<i className="lucide lucide-crosshair mr-2 h-4 w-4"></i>
            Book Range Time
          </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative border-b border-stone-200/80" style={{}}>

<div className="absolute inset-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&amp;fit=crop&amp;w=1600&amp;q=80')] bg-cover bg-center opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-stone-50/95 to-orange-100/10" style={{}}></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center space-x-2 border px-3 py-1 mb-5 border-orange-400/40 bg-stone-50/70" style={{}}>
<span className="h-1.5 w-1.5 bg-red-600"></span>
<span className="text-[11px] uppercase tracking-[0.24em] text-orange-800/90">Now Open · Phoenix Desert Range</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-stone-950" style={{}}>
              Precision Archery in the Desert Heart of Phoenix.
            </h1>
<p className="mt-4 text-sm sm:text-base max-w-xl text-stone-700" style={{}}>
              Okami is a Japanese-inspired, earth-toned archery range built for veterans, young adults, and serious adults who want discipline, calm, and uncompromising accuracy. No gimmicks—just the focus of the bow, the arrow, and the desert air.
            </p>

<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
<div className="border px-4 py-3 border-stone-200/80 bg-stone-50/70" style={{}}>
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Range Lanes</span>
<i className="lucide lucide-target h-4 w-4 text-orange-700" style={{}}></i>
</div>
<p className="mt-1 text-xl font-semibold tracking-tight text-stone-950" style={{}}>32</p>
<p className="text-xs text-stone-500 mt-0.5" style={{}}>Indoor &amp; outdoor mixed</p>
</div>
<div className="border px-4 py-3 border-stone-200/80 bg-stone-50/70" style={{}}>
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Max Distance</span>
<i className="lucide lucide-arrow-right h-4 w-4 text-orange-700" style={{}}></i>
</div>
<p className="mt-1 text-xl font-semibold tracking-tight text-stone-950" style={{}}>70 m</p>
<p className="text-xs text-stone-500 mt-0.5" style={{}}>Olympic spec lanes</p>
</div>
<div className="border px-4 py-3 col-span-2 sm:col-span-1 border-stone-200/80 bg-stone-50/70" style={{}}>
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Veteran Owned</span>
<i className="lucide lucide-shield h-4 w-4 text-orange-700" style={{}}></i>
</div>
<p className="mt-1 text-xl font-semibold tracking-tight text-stone-950" style={{}}>Ex-Army</p>
<p className="text-xs text-stone-500 mt-0.5" style={{}}>Built for the brotherhood</p>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
<button className="inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase hover:bg-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 bg-orange-400/90 text-stone-50" style={{}}>
<i className="lucide lucide-crosshair mr-2 h-4 w-4"></i>
                Reserve a Lane
              </button>
<button className="inline-flex items-center justify-center border px-6 py-2.5 text-xs sm:text-sm font-medium tracking-[0.16em] uppercase transition-colors border-stone-300/80 bg-stone-50/60 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100" style={{}}>
<i className="lucide lucide-play-circle mr-2 h-4 w-4"></i>
                Intro Session · First Visit
              </button>
</div>

<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-stone-600" style={{}}>
<div className="flex items-center">
<span className="inline-flex h-5 w-5 items-center justify-center border mr-2 border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-badge-check h-3.5 w-3.5 text-orange-700" style={{}}></i>
</span>
<span>Veteran discounts &amp; group rates available.</span>
</div>
<div className="hidden sm:inline-block h-4 w-px bg-stone-200/80" style={{}}></div>
<div className="flex items-center">
<span className="inline-flex h-5 w-5 items-center justify-center border mr-2 border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-clock h-3.5 w-3.5 text-orange-700" style={{}}></i>
</span>
<span>Open 7 days · Early-morning and night sessions.</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="relative border overflow-hidden border-stone-200/80 bg-stone-50/80" style={{}}>
<div className="aspect-[4/3] sm:aspect-[4/3] bg-stone-100" style={{}}>
<img alt="Archer drawing bow in a range" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531178625044-cc2a0fb353a9?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-stone-50 via-stone-50/20" style={{}}></div>
</div>
<div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.24em] text-orange-800/90">Silent Discipline</p>
<p className="mt-1 text-sm text-stone-900" style={{}}>Desert-silent lanes with Japanese minimalism and earth tones—built to calm the mind before every release.</p>
</div>
<div className="hidden sm:flex h-11 w-11 border items-center justify-center ml-4 border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-align-center h-5 w-5 text-orange-800"></i>
</div>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="border px-4 py-4 border-stone-200/80 bg-stone-50/80" style={{}}>
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.2em] text-stone-500" style={{}}>For Veterans</p>
<p className="mt-1 text-sm text-stone-900" style={{}}>Transition-ready training with structure, respect, and quiet camaraderie.</p>
</div>
<span className="ml-3 inline-flex h-9 w-9 items-center justify-center border border-orange-500/60 bg-stone-50/80" style={{}}>
<i className="lucide lucide-flag h-4 w-4 text-orange-700" style={{}}></i>
</span>
</div>
</div>
<div className="border px-4 py-4 border-stone-200/80 bg-stone-50/80" style={{}}>
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] uppercase tracking-[0.2em] text-stone-500" style={{}}>For Adults</p>
<p className="mt-1 text-sm text-stone-900" style={{}}>Skill progression paths for beginners to competitive shooters.</p>
</div>
<span className="ml-3 inline-flex h-9 w-9 items-center justify-center border border-orange-500/60 bg-stone-50/80" style={{}}>
<i className="lucide lucide-user-check h-4 w-4 text-orange-700" style={{}}></i>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/80 bg-stone-50" id="ranges" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.28em] text-orange-700" style={{}}>Range Types</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950" style={{}}>Choose your battlefield.</h2>
<p className="mt-2 text-sm max-w-xl text-stone-600" style={{}}>
                From disciplined indoor lines to rugged 3D courses, Okami is built for serious practice, tactical training, and quiet repetition.
              </p>
</div>
<button className="inline-flex items-center border px-4 py-2 text-xs font-medium tracking-[0.16em] uppercase transition-colors border-stone-300/80 bg-stone-50/60 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100" style={{}}>
<i className="lucide lucide-layout-grid mr-2 h-4 w-4"></i>
              View Range Map
            </button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group border transition-colors border-stone-200/80 bg-stone-50/90 hover:border-orange-600/80" style={{}}>
<div className="p-4 border-b border-stone-200/80" style={{}}>
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center border border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-target h-4.5 w-4.5 text-orange-700" style={{}}></i>
</div>
<span className="text-[10px] uppercase tracking-[0.26em] text-stone-500" style={{}}>15–30 m</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-950" style={{}}>Indoor Precision Lanes</h3>
<p className="mt-2 text-sm text-stone-600" style={{}}>
                  Climate-controlled lanes with Japanese-inspired minimal dividers, tactical lighting, and quiet zones for form work.
                </p>
</div>
<div className="p-4 flex items-center justify-between text-xs text-stone-600" style={{}}>
<div>
<p>12 lanes · paper targets &amp; scoring.</p>
<p className="mt-1 text-orange-800">Best for consistent reps &amp; tuning.</p>
</div>
<button className="inline-flex items-center px-3 py-1.5 border text-[11px] uppercase tracking-[0.2em] group-hover:border-orange-400 group-hover:text-orange-200 transition-colors border-stone-300/80 text-stone-800" style={{}}>
                  Book
                </button>
</div>
</div>

<div className="group border transition-colors border-stone-200/80 bg-stone-50/90 hover:border-orange-600/80" style={{}}>
<div className="p-4 border-b border-stone-200/80" style={{}}>
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center border border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-sun-medium h-4.5 w-4.5 text-orange-700" style={{}}></i>
</div>
<span className="text-[10px] uppercase tracking-[0.26em] text-stone-500" style={{}}>30–70 m</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-950" style={{}}>Outdoor Desert Range</h3>
<p className="mt-2 text-sm text-stone-600" style={{}}>
                  Phoenix-sun lanes with earth-tone berms, shaded shooting lines, and wind-aware scoring setups.
                </p>
</div>
<div className="p-4 flex items-center justify-between text-xs text-stone-600" style={{}}>
<div>
<p>16 lanes · day &amp; night lighting.</p>
<p className="mt-1 text-orange-800">Best for realistic, variable conditions.</p>
</div>
<button className="inline-flex items-center px-3 py-1.5 border text-[11px] uppercase tracking-[0.2em] group-hover:border-orange-400 group-hover:text-orange-200 transition-colors border-stone-300/80 text-stone-800" style={{}}>
                  Book
                </button>
</div>
</div>

<div className="group border transition-colors border-stone-200/80 bg-stone-50/90 hover:border-orange-600/80" style={{}}>
<div className="p-4 border-b border-stone-200/80" style={{}}>
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center border border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-mountain h-4.5 w-4.5 text-orange-700" style={{}}></i>
</div>
<span className="text-[10px] uppercase tracking-[0.26em] text-stone-500" style={{}}>3D / Scenario</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-stone-950" style={{}}>Tactical &amp; 3D Course</h3>
<p className="mt-2 text-sm text-stone-600" style={{}}>
                  Scenario-based lanes designed with ex-military input: movement drills, 3D targets, and courses-of-fire for disciplined shooters.
                </p>
</div>
<div className="p-4 flex items-center justify-between text-xs text-stone-600" style={{}}>
<div>
<p>8 lanes · rotating scenarios.</p>
<p className="mt-1 text-orange-800">Best for tactical work &amp; groups.</p>
</div>
<button className="inline-flex items-center px-3 py-1.5 border text-[11px] uppercase tracking-[0.2em] group-hover:border-orange-400 group-hover:text-orange-200 transition-colors border-stone-300/80 text-stone-800" style={{}}>
                  Book
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/80 bg-stone-50" id="facilities" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-[11px] uppercase tracking-[0.28em] text-orange-700" style={{}}>Facilities</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950" style={{}}>Quiet strength. Clean lines.</h2>
<p className="mt-2 text-sm max-w-xl text-stone-600" style={{}}>
                Inspired by Japanese dojos and desert stone—Okami’s layout keeps everything simple, disciplined, and functional.
              </p>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8">

<div className="space-y-4">
<div className="border overflow-hidden border-stone-200/80" style={{}}>
<div className="aspect-[16/9] bg-stone-100" style={{}}>
<img alt="Interior of a modern archery training facility" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="bg-gradient-to-t to-transparent from-stone-50/95 via-stone-50/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-5 border-t border-stone-200/80 bg-stone-50/95" style={{}}>
<div className="grid sm:grid-cols-3 gap-4 text-xs text-stone-700" style={{}}>
<div className="flex items-start">
<span className="mr-3 inline-flex h-7 w-7 items-center justify-center border border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-wind h-4 w-4 text-orange-700" style={{}}></i>
</span>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Climate Control</p>
<p className="mt-0.5 text-xs text-stone-700" style={{}}>Filtered air, low noise vents, optimized for long sessions.</p>
</div>
</div>
<div className="flex items-start">
<span className="mr-3 inline-flex h-7 w-7 items-center justify-center border border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-coffee h-4 w-4 text-orange-700" style={{}}></i>
</span>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Tatami Lounge</p>
<p className="mt-0.5 text-xs text-stone-700" style={{}}>Tea, coffee, and quiet seating for debriefs &amp; resets.</p>
</div>
</div>
<div className="flex items-start">
<span className="mr-3 inline-flex h-7 w-7 items-center justify-center border border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-wrench h-4 w-4 text-orange-700" style={{}}></i>
</span>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Pro Workshop</p>
<p className="mt-0.5 text-xs text-stone-700" style={{}}>Bow tuning, stringing, and gear consults on-site.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4 text-sm">
<div className="border p-4 border-stone-200/80 bg-stone-50/80" style={{}}>
<p className="text-[11px] uppercase tracking-[0.2em] text-stone-500" style={{}}>Safety &amp; Structure</p>
<ul className="mt-2 space-y-1.5 text-xs text-stone-700" style={{}}>
<li className="flex items-center">
<span className="mr-2 h-1.5 w-1.5 bg-red-600"></span>Range Safety Officers on duty.
                    </li>
<li className="flex items-center">
<span className="mr-2 h-1.5 w-1.5 bg-red-600"></span>Clear commands &amp; briefings, ex-military style.
                    </li>
<li className="flex items-center">
<span className="mr-2 h-1.5 w-1.5 bg-red-600"></span>Structured firing lines &amp; timing cycles.
                    </li>
</ul>
</div>
<div className="border p-4 border-stone-200/80 bg-stone-50/80" style={{}}>
<p className="text-[11px] uppercase tracking-[0.2em] text-stone-500" style={{}}>Comfort &amp; Access</p>
<ul className="mt-2 space-y-1.5 text-xs text-stone-700" style={{}}>
<li className="flex items-center">
<span className="mr-2 h-1.5 w-1.5 bg-red-600"></span>Accessible lanes &amp; restrooms.
                    </li>
<li className="flex items-center">
<span className="mr-2 h-1.5 w-1.5 bg-red-600"></span>Lockers &amp; gear storage for members.
                    </li>
<li className="flex items-center">
<span className="mr-2 h-1.5 w-1.5 bg-red-600"></span>Free parking with evening lighting.
                    </li>
</ul>
</div>
</div>
</div>

<div className="space-y-4">
<div className="border p-5 border-stone-200/80 bg-stone-50/90" style={{}}>
<p className="text-[11px] uppercase tracking-[0.24em] text-orange-700" style={{}}>Range Hours</p>
<ul className="mt-3 text-sm space-y-1.5 text-stone-700" style={{}}>
<li className="flex justify-between">
<span>Mon – Thu</span>
<span className="text-stone-900" style={{}}>06:00 – 22:00</span>
</li>
<li className="flex justify-between">
<span>Fri</span>
<span className="text-stone-900" style={{}}>06:00 – 24:00</span>
</li>
<li className="flex justify-between">
<span>Sat</span>
<span className="text-stone-900" style={{}}>08:00 – 24:00</span>
</li>
</ul>
<div className="mt-4 border p-3 text-xs border-stone-200/80 bg-stone-50/80 text-stone-700" style={{}}>
<div className="flex items-center">
<span className="inline-flex h-6 w-6 items-center justify-center border mr-2 border-stone-300/80 bg-stone-50/80" style={{}}>
<i className="lucide lucide-moon-star h-3.5 w-3.5 text-orange-700" style={{}}></i>
</span>
<div>
<p className="font-medium tracking-tight text-[13px] text-stone-900" style={{}}>Night Ops Sessions</p>
<p className="mt-0.5 text-[11px] text-stone-600" style={{}}>Low-light lanes every Fri &amp; Sat after 20:00.</p>
</div>
</div>
</div>
</div>
<div className="border p-5 border-stone-200/80 bg-stone-50/90" style={{}}>
<p className="text-[11px] uppercase tracking-[0.24em] text-orange-700" style={{}}>Location</p>
<p className="mt-2 text-sm text-stone-800" style={{}}>North Phoenix · Desert Ridge Area</p>
<p className="mt-1 text-xs text-stone-600" style={{}}>
                  20 minutes from downtown, set away from residential zones for quiet and extended hours.
                </p>
<div className="mt-4 flex items-center space-x-3 text-xs text-stone-700" style={{}}>
<div className="flex items-center">
<i className="lucide lucide-car h-4 w-4 mr-1.5 text-orange-700" style={{}}></i>
<span>Quick access from AZ-101</span>
</div>
</div>
<button className="mt-4 inline-flex items-center justify-center border px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors border-stone-300/80 bg-stone-50/80 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100" style={{}}>
<i className="lucide lucide-map-pin mr-2 h-4 w-4"></i>
                  Open in Maps
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/80 bg-stone-50" id="training" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.28em] text-orange-700" style={{}}>Training</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950" style={{}}>Built for discipline and progression.</h2>
<p className="mt-2 text-sm max-w-xl text-stone-600" style={{}}>
                Whether you’re touching a bow for the first time or refining competition-level form, we keep training structured, measurable, and respectful.
              </p>
</div>
<button className="inline-flex items-center border px-4 py-2 text-xs font-medium tracking-[0.16em] uppercase transition-colors border-stone-300/80 bg-stone-50/60 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100" style={{}}>
              Download Training Overview
            </button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border p-5 flex flex-col border-stone-200/80 bg-stone-50/90" style={{}}>
<div className="flex items-center justify-between mb-3">
<p className="text-[11px] uppercase tracking-[0.24em] text-stone-500" style={{}}>Level 01</p>
<i className="lucide lucide-user-plus h-4 w-4 text-orange-700" style={{}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-950" style={{}}>Foundations &amp; Safety</h3>
<p className="mt-2 text-sm flex-1 text-stone-600" style={{}}>
                90-minute intro: range rules, stance, release, and basic groupings. Ideal for absolute beginners and casual shooters.
              </p>
<p className="mt-3 text-xs text-stone-700" style={{}}>Runs daily · Small groups · Gear included.</p>
</div>

<div className="border border-orange-500/70 p-5 shadow-[0_0_0_1px_rgba(245,158,11,0.3)] flex flex-col bg-stone-50/90" style={{}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center space-x-2">
<p className="text-[11px] uppercase tracking-[0.24em] text-orange-700" style={{}}>Level 02–03</p>
<span className="inline-flex items-center border border-orange-500/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.26em] text-orange-800">Popular</span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-950" style={{}}>Progression Path</h3>
<p className="mt-2 text-sm flex-1 text-stone-800" style={{}}>
                Multi-week structured programs with assessment, video review, and metric tracking. Perfect for ex-military and serious adults.
              </p>
<ul className="mt-3 text-xs space-y-1.5 text-stone-700" style={{}}>
<li>• Weekly 60-min coached sessions.</li>
<li>• Personalized drills and distance progression.</li>
<li>• Optional strength &amp; stability homework.</li>
</ul>
</div>

<div className="border p-5 flex flex-col border-stone-200/80 bg-stone-50/90" style={{}}>
<div className="flex items-center justify-between mb-3">
<p className="text-[11px] uppercase tracking-[0.24em] text-stone-500" style={{}}>Veteran Track</p>
<i className="lucide lucide-shield-plus h-4 w-4 text-orange-700" style={{}}></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-950" style={{}}>Tactical &amp; Veteran Cohorts</h3>
<p className="mt-2 text-sm flex-1 text-stone-600" style={{}}>
                Designed with ex-Army instructors: silent commands, scenario drills, and optional mental decompression support.
              </p>
<p className="mt-3 text-xs text-stone-700" style={{}}>Closed-group sessions · Vet discounts apply.</p>
</div>
</div>
</div>
</section>

<section className="border-b bg-gradient-to-b border-stone-200/80 from-stone-50 via-stone-50 to-stone-50" id="vip" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="border border-orange-500/60 p-6 sm:p-8 lg:p-10 relative overflow-hidden bg-stone-50/95" style={{}}>
<div className="absolute inset-y-0 right-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#fbbf24_0,_transparent_55%)]"></div>
</div>
<div className="relative grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-center">
<div>
<p className="text-[11px] uppercase tracking-[0.28em] text-orange-700" style={{}}>Okami VIP</p>
<h2 className="mt-2 text-2xl lg:text-3xl font-semibold tracking-tight text-orange-950">
                  Join the Okami VIP Circle.
                </h2>
<p className="mt-3 text-sm max-w-xl text-orange-900/90">
                  For those who treat archery like a discipline, not a hobby. Limited memberships to keep lanes clean, quiet, and available.
                </p>
<div className="mt-5 grid sm:grid-cols-3 gap-4 text-xs text-orange-900/90">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-orange-700" style={{}}>Priority Lanes</p>
<p className="mt-1">Reserved VIP blocks every day, plus short-notice bookings.</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-orange-700" style={{}}>Member Lounge</p>
<p className="mt-1">Tatami lounge access, tea bar, and members-only lockers.</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-orange-700" style={{}}>Gear &amp; Coaching</p>
<p className="mt-1">Workshop discounts and exclusive coaching blocks.</p>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
<button className="inline-flex items-center justify-center bg-orange-500 px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 text-stone-50 hover:bg-orange-600" style={{}}>
<i className="lucide lucide-star mr-2 h-4 w-4"></i>
                    Apply for VIP
                  </button>
<div className="text-[11px] text-orange-900/80">
<p>Limited openings each quarter.</p>
<p className="mt-0.5">Military &amp; first responder pricing available.</p>
</div>
</div>
</div>

<div className="border p-5 sm:p-6 border-orange-600/60 bg-stone-50/95" style={{}}>
<p className="text-[11px] uppercase tracking-[0.24em] text-orange-700" style={{}}>Fast Application</p>
<p className="mt-2 text-sm text-orange-950">Leave your details—our team will contact you within one business day.</p>
<form className="mt-4 space-y-3">
<div>
<label className="block text-[11px] uppercase tracking-[0.2em] mb-1.5 text-orange-800">Full Name</label>
<input className="w-full border px-3 py-2 text-sm placeholder:text-orange-200/40 focus:outline-none focus:ring-2 focus:ring-orange-400/80 border-orange-600/50 bg-stone-50/80 text-orange-950" placeholder="Your name" style={{fontWeight: '400'}} type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] uppercase tracking-[0.2em] mb-1.5 text-orange-800">Email</label>
<input className="w-full border px-3 py-2 text-sm placeholder:text-orange-200/40 focus:outline-none focus:ring-2 focus:ring-orange-400/80 border-orange-600/50 bg-stone-50/80 text-orange-950" placeholder="you@example.com" style={{fontWeight: '400'}} type="email"/>
</div>
<div>
<label className="block text-[11px] uppercase tracking-[0.2em] mb-1.5 text-orange-800">Phone</label>
<input className="w-full border px-3 py-2 text-sm placeholder:text-orange-200/40 focus:outline-none focus:ring-2 focus:ring-orange-400/80 border-orange-600/50 bg-stone-50/80 text-orange-950" placeholder="(xxx) xxx-xxxx" style={{fontWeight: '400'}} type="tel"/>
</div>
</div>
<div>
<label className="block text-[11px] uppercase tracking-[0.2em] mb-1.5 text-orange-800">Experience Level</label>
<select className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/80 border-orange-600/50 bg-stone-50/80 text-orange-950" style={{fontWeight: '400', backgroundImage: 'none'}}>
<option className="bg-stone-100 text-orange-950" style={{}}>Beginner</option>
<option className="bg-stone-100 text-orange-950" style={{}}>Intermediate</option>
<option className="bg-stone-100 text-orange-950" style={{}}>Advanced / Competitive</option>
<option className="bg-stone-100 text-orange-950" style={{}}>Veteran – new to archery</option>
</select>
</div>
<div>
<label className="block text-[11px] uppercase tracking-[0.2em] mb-1.5 text-orange-800">Service Background (optional)</label>
<input className="w-full border px-3 py-2 text-sm placeholder:text-orange-200/40 focus:outline-none focus:ring-2 focus:ring-orange-400/80 border-orange-600/50 bg-stone-50/80 text-orange-950" placeholder="Ex-Army, Marines, etc." style={{fontWeight: '400'}} type="text"/>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center bg-orange-500 px-4 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors text-stone-50 hover:bg-orange-600" style={{}} type="submit">
<i className="lucide lucide-send mr-2 h-4 w-4"></i>
                    Submit Application
                  </button>
<p className="mt-2 text-[11px] text-orange-900/80">
                    No spam. No sharing. Just a straight answer from our staff.
                  </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/80 bg-stone-50" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.28em] text-orange-700" style={{}}>Community</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950" style={{}}>A quiet, serious crew.</h2>
<p className="mt-2 text-sm max-w-xl text-stone-600" style={{}}>
                No loud music, no chaos. Just people who show up, do the work, and leave better than they arrived.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border p-5 border-stone-200/80 bg-stone-50/90" style={{}}>
<div className="flex items-center mb-3">
<img alt="Veteran member" className="h-9 w-9 object-cover border border-stone-300/80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="ml-3">
<p className="text-sm text-stone-900" style={{}}>Marcus · US Army (Ret.)</p>
<p className="text-[11px] text-stone-500 tracking-[0.14em] uppercase" style={{}}>Veteran Member</p>
</div>
</div>
<p className="text-sm text-stone-700" style={{}}>
                “Okami feels like the range I wish we had on base—structured, respectful, and quiet enough to hear yourself think.”
              </p>
</div>

<div className="border p-5 border-stone-200/80 bg-stone-50/90" style={{}}>
<div className="flex items-center mb-3">
<img alt="Young adult member" className="h-9 w-9 object-cover border border-stone-300/80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{}}/>
<div className="ml-3">
<p className="text-sm text-stone-900" style={{}}>Evan · 28</p>
<p className="text-[11px] text-stone-500 tracking-[0.14em] uppercase" style={{}}>Progression Member</p>
</div>
</div>
<p className="text-sm text-stone-700" style={{}}>
                “I came here for a new hobby. Ended up finding a place I can reset my head after a long week.”
              </p>
</div>

<div className="border p-5 border-stone-200/80 bg-stone-50/90" style={{}}>
<div className="flex items-center mb-3">
<img alt="Adult member" className="h-9 w-9 object-cover border border-stone-300/80" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{}}/>
<div className="ml-3">
<p className="text-sm text-stone-900" style={{}}>Naomi · 35</p>
<p className="text-[11px] text-stone-500 tracking-[0.14em] uppercase" style={{}}>Indoor Lane Regular</p>
</div>
</div>
<p className="text-sm text-stone-700" style={{}}>
                “The mix of Japanese design and desert colors just works. You walk in and immediately drop into focus.”
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/80 bg-stone-50" id="about" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-start">
<div>
<p className="text-[11px] uppercase tracking-[0.28em] text-orange-700" style={{}}>About Okami</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950" style={{}}>Phoenix desert. Japanese discipline.</h2>
<p className="mt-3 text-sm text-stone-700" style={{}}>
                Okami was founded by an ex-Army NCO who discovered archery during recovery and needed a place that felt serious, grounded, and respectful.
                The result is a range that borrows the quiet focus of Japanese dojos and blends it with the raw stability of the Arizona desert.
              </p>
<p className="mt-3 text-sm text-stone-700" style={{}}>
                The name “Okami” means “wolf” in Japanese—a nod to the lone archer on the line, and to the pack of disciplined shooters training beside you.
              </p>
<div className="mt-5 grid sm:grid-cols-3 gap-4 text-xs text-stone-700" style={{}}>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Founded</p>
<p className="mt-1 text-stone-900" style={{}}>2024 · Phoenix, AZ</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Focus</p>
<p className="mt-1 text-stone-900" style={{}}>Adults, veterans, serious practice.</p>
</div>
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-stone-500" style={{}}>Atmosphere</p>
<p className="mt-1 text-stone-900" style={{}}>Grounded, quiet, intentional.</p>
</div>
</div>
</div>

<div className="border p-5 sm:p-6 border-stone-200/80 bg-stone-50/90" style={{}}>
<p className="text-[11px] uppercase tracking-[0.24em] text-orange-700" style={{}}>Ready to step onto the line?</p>
<p className="mt-2 text-sm text-stone-800" style={{}}>
                Three simple ways to get started at Okami:
              </p>
<ol className="mt-3 text-sm space-y-2 text-stone-700" style={{}}>
<li>
<span className="mr-1.5 text-orange-700" style={{}}>1.</span>
                  Book an intro session to learn the fundamentals and get a feel for the range.
                </li>
<li>
<span className="mr-1.5 text-orange-700" style={{}}>2.</span>
                  Drop in for open lane time if you already shoot and bring your own gear.
                </li>
<li>
<span className="mr-1.5 text-orange-700" style={{}}>3.</span>
                  Apply for the VIP Circle if you’re committed to regular, long-term practice.
                </li>
</ol>
<div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
<button className="inline-flex items-center justify-center bg-orange-500 px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors text-stone-50 hover:bg-orange-600" style={{}}>
<i className="lucide lucide-crosshair mr-2 h-4 w-4"></i>
                  Schedule First Visit
                </button>
<button className="inline-flex items-center justify-center border px-5 py-2.5 text-xs font-medium tracking-[0.16em] uppercase transition-colors border-stone-300/80 bg-stone-50/80 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100" style={{}}>
<i className="lucide lucide-message-circle mr-2 h-4 w-4"></i>
                  Talk to Staff
                </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-stone-200/80 bg-stone-50" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center space-x-3">
<div className="h-8 w-8 border border-orange-500/70 flex items-center justify-center bg-stone-100/80" style={{}}>
<span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-800">OK</span>
</div>
<div>
<p className="text-xs tracking-[0.18em] uppercase text-stone-700" style={{}}>Okami Archery Range</p>
<p className="text-[11px] text-stone-500" style={{}}>Phoenix, Arizona · Veteran-Owned</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-600" style={{}}>
<div className="flex items-center">
<i className="lucide lucide-phone h-3.5 w-3.5 mr-1.5 text-orange-700" style={{}}></i>
<span>(602) 000-OKAMI</span>
</div>
<div className="flex items-center">
<i className="lucide lucide-mail h-3.5 w-3.5 mr-1.5 text-orange-700" style={{}}></i>
<span>contact@okamiarchery.com</span>
</div>
<div className="hidden sm:inline-block h-3 w-px bg-stone-300/80" style={{}}></div>
<p>© <span id="year">2024</span> Okami Range. All rights reserved.</p>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
