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



    if (window.lucide) {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Region selection map
    document.querySelectorAll('[data-region]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const name = this.getAttribute('data-region');
        const title = document.getElementById('selected-region-title');
        if (title && name) {
          title.textContent = name;
        }
      });
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
      

<header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[#185E73]/5 border border-[#185E73]/20 flex items-center justify-center">
<span className="text-[#185E73] text-xs font-semibold tracking-[0.2em]">
            HP
          </span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-900/90">
<span style={{fontFamily: '\'Pacifico\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>Health Professionals</span> world
          </span>
<span className="text-[11px] text-[#185E73]/80 tracking-[0.16em] uppercase">
            Western Australia
          </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
<a className="hover:text-[#185E73] transition-colors" href="#hero">Home</a>
<a className="hover:text-[#185E73] transition-colors" href="#regions">Regions</a>
<a className="hover:text-[#185E73] transition-colors" href="#events">Events</a>
<a className="hover:text-[#185E73] transition-colors" href="#learning">Learning</a>
<a className="hover:text-[#185E73] transition-colors" href="#news">News</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-sm px-4 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5 transition-colors">
          Log in
        </button>
<a className="inline-flex text-sm px-4 py-1.5 rounded-full bg-[#185E73] text-white font-medium hover:bg-[#185E73]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70 transition-all shadow-sm" href="#join">
          Join network
        </a>
</div>
</div>
</header>
<main className="flex-1 w-full">

<section className="relative overflow-hidden border-b border-slate-200 bg-white" id="hero">
<div className="absolute inset-x-0 -top-40 flex justify-center blur-3xl opacity-40 pointer-events-none">
<div className="h-56 w-[40rem] bg-gradient-to-r from-[#185E73]/30 via-sky-400/30 to-emerald-300/30 rounded-full"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-[#185E73]/30 bg-[#185E73]/5 px-3 py-1 text-xs text-[#185E73]">
<span className="inline-flex h-4 w-4 rounded-full bg-emerald-400/10 border border-emerald-400/50 items-center justify-center">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
</span>
            Digital hub for regional health professionals in WA
          </div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Connect with regional <span className="text-[#185E73]"><span style={{fontFamily: '\'Pacifico\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>health professionals</span></span> across Western Australia.
            </h1>
<p className="text-base sm:text-lg text-slate-700 max-w-xl">
              A single place for clinicians in rural and remote WA to see what’s on, find local contacts and access learning that fits regional practice.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:items-center">
<div className="flex gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#185E73] text-white text-sm font-medium hover:bg-[#185E73]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70 transition-all shadow-md" href="#regions">
<i className="w-4 h-4" data-lucide="map"></i>
                Find my region
              </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white text-sm text-slate-800 hover:bg-slate-50 hover:border-[#185E73] hover:text-[#185E73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70 transition-all" href="#events">
<i className="w-4 h-4" data-lucide="calendar"></i>
                See upcoming events
              </a>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500">
<div className="flex -space-x-2">
<span className="w-7 h-7 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[11px] text-slate-800">GP</span>
<span className="w-7 h-7 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[11px] text-slate-800">RN</span>
<span className="w-7 h-7 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[11px] text-slate-800">AH</span>
</div>
<span>Designed with regional clinicians from across WA.</span>
</div>
</div>
<dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-700">
<div>
<dt className="text-slate-500">Regions</dt>
<dd className="text-base sm:text-lg font-medium text-slate-900">7</dd>
</div>
<div>
<dt className="text-slate-500">Disciplines</dt>
<dd className="text-base sm:text-lg font-medium text-slate-900">Primary, specialist, allied</dd>
</div>
<div>
<dt className="text-slate-500">Live events</dt>
<dd className="text-base sm:text-lg font-medium text-slate-900">24 this quarter</dd>
</div>
<div>
<dt className="text-slate-500">Coverage</dt>
<dd className="text-base sm:text-lg font-medium text-slate-900">Statewide</dd>
</div>
</dl>
</div>

<div className="relative">
<div className="absolute -top-10 -right-6 h-40 w-40 bg-[#185E73]/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] p-4 sm:p-5">
<div className="mb-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900 tracking-tight">Seven regional hubs</span>
<span className="text-[11px] text-slate-500">Choose one primary region, follow others anytime</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/50 text-[10px] text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                All regions active
              </span>
</div>
<div className="relative mx-auto aspect-square max-w-md">

<div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[#185E73]/10 border border-[#185E73]/40 flex flex-col items-center justify-center text-center px-4">
<img alt="Western Australia map" className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-[#185E73]/50 mb-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-xs font-medium text-slate-900 tracking-tight">WA Network</span>
<span className="text-[10px] text-slate-500">Statewide overview</span>
</div>

<div className="absolute inset-0">
<button className="group absolute left-1/2 top-[4%] -translate-x-1/2 -translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center px-1">
<span className="text-[9px] font-medium text-slate-900">Kimberley / Pilbara</span>
</div>
</button>
<button className="group absolute right-[14%] top-[18%] translate-x-1/2 -translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center px-1 text-center">
<span className="text-[9px] font-medium text-slate-900">Mid West / Gascoyne</span>
</div>
</button>
<button className="group absolute right-[10%] bottom-[36%] translate-x-1/2 translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center px-1 text-center">
<span className="text-[9px] font-medium text-slate-900">Northern Agricultural</span>
</div>
</button>
<button className="group absolute right-1/2 bottom-[6%] translate-x-1/2 translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center px-1 text-center">
<span className="text-[9px] font-medium text-slate-900">Central Wheatbelt</span>
</div>
</button>
<button className="group absolute left-[10%] bottom-[36%] -translate-x-1/2 translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center px-1 text-center">
<span className="text-[9px] font-medium text-slate-900">Swan</span>
</div>
</button>
<button className="group absolute left-[14%] top-[18%] -translate-x-1/2 -translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center px-1 text-center">
<span className="text-[9px] font-medium text-slate-900">South West</span>
</div>
</button>
<button className="group absolute left-1/2 top-[86%] -translate-x-1/2 translate-y-1/2" onclick="document.getElementById('regions').scrollIntoView({behavior:'smooth'})">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center px-1 text-center">
<span className="text-[9px] font-medium text-slate-900">South Coast</span>
</div>
</button>
</div>
</div>
<p className="mt-4 text-[11px] text-slate-500 text-center">
              Use the map or list below to select your primary region. You can follow extra regions later from your profile.
            </p>
</div>

<div className="hidden md:block absolute -bottom-10 -left-4 w-64 rounded-xl border border-slate-200 bg-white/95 backdrop-blur p-3 shadow-[0_16px_32px_rgba(15,23,42,0.15)]">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="text-[11px] font-medium text-slate-900 tracking-tight">Platform design and build</span>
<span className="text-[11px] text-slate-800">Alberto · Webserv Pty Ltd</span>
<span className="text-[10px] text-slate-500">Web design and development partner</span>
</div>
<div className="h-7 w-7 rounded-full bg-[#185E73]/10 flex items-center justify-center border border-[#185E73]/30">
<i className="w-3.5 h-3.5 text-[#185E73]" data-lucide="phone"></i>
</div>
</div>
<div className="mt-2 space-y-0.5 text-[10px] text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="map-pin"></i>
<span>PO Box 305, Ashgrove QLD 4060</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="smartphone"></i>
<span>0427 522 220</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="globe-2"></i>
<span>webserv.com.au</span>
</div>
</div>
<p className="mt-1.5 text-[10px] text-slate-500">
              Production hosting will be set up under <span className="text-slate-700">hpnwa.com.au</span>.
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="regions">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Choose your region
            </h2>
<p className="mt-2 text-base text-slate-700 max-w-xl">
              Start with the region where you work most often. Your hub shows local events, learning and contacts, while still keeping statewide opportunities visible.
            </p>
</div>
<div className="flex flex-wrap gap-3 text-xs sm:text-sm">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5">
<i className="w-4 h-4" data-lucide="locate-fixed"></i>
              Detect my region
            </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5">
<i className="w-4 h-4" data-lucide="search"></i>
              Search by town or postcode
            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-start">

<div className="relative rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
<img alt="Western Australia regional map" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-88467b35381_1600w.jpg" />

<button className="absolute top-[8%] left-[40%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="Kimberley / Pilbara Region">
              Kimberley / Pilbara
            </button>
<button className="absolute top-[34%] left-[32%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="Mid West / Gascoyne Region">
              Mid West / Gascoyne
            </button>
<button className="absolute top-[46%] left-[23%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="Northern Agricultural Region">
              Northern Agricultural
            </button>
<button className="absolute top-[58%] left-[35%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="Central Wheatbelt Region">
              Central Wheatbelt
            </button>
<button className="absolute top-[63%] left-[24%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="Swan Region">
              Swan
            </button>
<button className="absolute top-[74%] left-[24%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="South West Region">
              South West
            </button>
<button className="absolute top-[76%] left-[37%] px-2 py-1 rounded-full bg-white/80 text-[11px] text-slate-900 border border-slate-300 hover:border-[#185E73] hover:bg-[#185E73]/5" data-region="South Coast Region">
              South Coast
            </button>
</img></div>

<div className="space-y-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-500">Selected region</p>
<h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900" id="selected-region-title">
                    Kimberley / Pilbara Region
                  </h3>
<p className="mt-2 text-sm text-slate-700">
                    Covers Karratha, Broome and remote communities, with support for general practice, hospital and outreach teams.
                  </p>
</div>
<div className="hidden sm:flex flex-col items-end gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/50 text-[11px] text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Accepting new members
                  </span>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-xs text-slate-800 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5">
<i className="w-3.5 h-3.5" data-lucide="arrow-right-circle"></i>
                    Open region hub
                  </button>
</div>
</div>
<dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-700">
<div>
<dt className="text-slate-500">Member types</dt>
<dd className="mt-1">GPs, specialists, nurses, midwives, allied health</dd>
</div>
<div>
<dt className="text-slate-500">Key towns</dt>
<dd className="mt-1">Karratha, Broome, Derby, Roebourne</dd>
</div>
<div>
<dt className="text-slate-500">Network leads</dt>
<dd className="mt-1">Clinical lead and coordination team</dd>
</div>
<div>
<dt className="text-slate-500">Upcoming events</dt>
<dd className="mt-1">6 in the next 90 days</dd>
</div>
</dl>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3 text-xs text-slate-700">
<div className="flex items-center gap-2 text-slate-800">
<i className="w-3.5 h-3.5 text-[#185E73]" data-lucide="info"></i>
<span className="uppercase tracking-[0.18em] text-[10px] text-slate-500">How region selection works</span>
</div>
<p>
                Choose the region where you spend most of your working time. You can then follow extra regions (for example, where you locum or provide outreach) so your feed stays relevant.
              </p>
<ul className="list-disc list-inside space-y-1">
<li>Set one primary region for your dashboard.</li>
<li>Follow additional regions for cross‑regional updates.</li>
<li>Change your regions anytime in your profile.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-[#fdf7ec]" id="events">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-8">

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div className="space-y-2">
<p className="text-lg sm:text-xl text-slate-800 tracking-tight" style={{fontFamily: '\'Pacifico\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Learning and connection
            </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Upcoming events
            </h2>
<p className="text-base text-slate-700 max-w-xl">
              Scan what’s coming up at a glance. Each event card takes you straight to its own details page when you’re ready to dive deeper.
            </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-white text-sm font-medium px-6 py-2.5 hover:bg-amber-600 transition-colors">
<span>Browse full events calendar</span>
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] gap-6 items-stretch">

<a className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]" href="/events/wa-rural-health-conference-2026">
<div className="relative h-44 md:h-56 overflow-hidden">
<img alt="WA Rural Health Conference 2026" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
<div className="space-y-1">
<div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] text-slate-900 shadow-sm">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white px-2 py-0.5 text-[10px]">
<i className="w-3.5 h-3.5 text-white" data-lucide="calendar-days"></i>
                      14–15 Mar 2026
                    </span>
<span className="text-slate-700">Statewide · Perth</span>
</div>
<p className="text-sm font-semibold tracking-tight text-white drop-shadow">
                    WA Rural Health Conference 2026
                  </p>
</div>
<div className="hidden sm:flex flex-col items-end gap-1 text-[11px] text-white/90">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2 py-0.5">
<i className="w-3.5 h-3.5 text-white" data-lucide="badge-check"></i>
                    CPD opportunities
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="activity"></i>
                    Conference / Forum
                  </span>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between gap-4 px-5 md:px-6 py-4 bg-[#f8f3e8]">
<div className="space-y-2">
<p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Featured statewide event
                </p>
<p className="text-base text-slate-800">
                  Two‑day program at Crown Perth bringing together rural clinicians, service leaders and partners from across Western Australia.
                </p>
<div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="stethoscope"></i>
                    GPs · nurses · allied health
                  </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="broadcast"></i>
                    Face‑to‑face + livestream
                  </span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="map-pin"></i>
                    Crown Perth Convention Centre
                  </span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 border-t border-slate-200/70 mt-2">
<div className="flex items-center gap-2 text-[11px] text-slate-700">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="clock"></i>
<span>2‑day program · registration required</span>
</div>
<div className="flex gap-2 w-full sm:w-auto justify-end">
<span className="inline-flex items-center gap-1 text-xs text-slate-800 group-hover:text-slate-900">
                    View event details
                    <i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
</div>
</a>

<div className="space-y-4">

<a className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-900 hover:shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition-all" href="/events/paediatric-emergencies-and-clinical-healthcare-scenarios-peachs">
<div className="flex items-stretch">
<div className="hidden sm:block w-24 bg-slate-900 text-white flex flex-col items-center justify-center px-2 py-4">
<span className="text-xs font-medium tracking-[0.18em] uppercase">Feb</span>
<span className="text-lg font-semibold tracking-tight leading-tight">06</span>
<span className="mt-1 text-[11px] text-slate-200 text-center">Great Southern</span>
</div>
<div className="flex-1 px-4 py-3 space-y-2 bg-[#fbf5e8]">
<div className="flex items-center justify-between gap-2">
<p className="text-xs text-slate-700">
                      Denmark · Great Southern
                    </p>
<span className="inline-flex items-center gap-1 rounded-full bg-[#d3cfb7] text-[11px] text-slate-900 px-2 py-0.5">
<i className="w-3.5 h-3.5 text-slate-800" data-lucide="wrench"></i>
                      Workshop
                    </span>
</div>
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Paediatric Emergencies and Clinical Healthcare Scenarios (PeaCHS)
                  </p>
<p className="text-xs text-slate-700 line-clamp-2">
                    Scenario‑based workshop to build confidence managing paediatric emergencies in regional and remote care.
                  </p>
<div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-slate-700">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="clock"></i>
                      1‑day intensive
                    </span>
<span className="inline-flex items-center gap-1 group-hover:text-slate-900">
                      View details
                      <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</a>

<a className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-900 hover:shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition-all" href="/events/great-southern-health-professionals-network-sundowner">
<div className="flex items-stretch">
<div className="hidden sm:block w-24 bg-amber-600 text-white flex flex-col items-center justify-center px-2 py-4">
<span className="text-xs font-medium tracking-[0.18em] uppercase">Feb</span>
<span className="text-lg font-semibold tracking-tight leading-tight">07</span>
<span className="mt-1 text-[11px] text-amber-100 text-center">Great Southern</span>
</div>
<div className="flex-1 px-4 py-3 space-y-2 bg-[#fef4e5]">
<div className="flex items-center justify-between gap-2">
<p className="text-xs text-slate-700">
                      Albany · Great Southern
                    </p>
<span className="inline-flex items-center gap-1 rounded-full bg-[#d3cfb7] text-[11px] text-slate-900 px-2 py-0.5">
<i className="w-3.5 h-3.5 text-slate-800" data-lucide="users"></i>
                      Social / Networking
                    </span>
</div>
<p className="text-sm font-medium tracking-tight text-slate-900">
                    Great Southern Health Professionals Network Sundowner
                  </p>
<p className="text-xs text-slate-700 line-clamp-2">
                    Casual evening event for local clinicians to connect, share experiences and hear about upcoming initiatives.
                  </p>
<div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-slate-700">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="moon-star"></i>
                      2‑hour after‑hours
                    </span>
<span className="inline-flex items-center gap-1 group-hover:text-slate-900">
                      View details
                      <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</a>
</div>
</div>

<p className="text-[11px] text-slate-600">
          Each event opens in its own page with full agenda, speakers, travel information and registration options.
        </p>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="join">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-center">
<div className="space-y-5">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Join the Health Professionals Network
          </h2>
<p className="text-base text-slate-700 max-w-xl">
            Membership is free for eligible clinicians working in Western Australia. Create one account to follow multiple regions, register for events and manage your preferences.
          </p>
<ul className="space-y-3 text-sm text-slate-700">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check-circle-2"></i>
<span>Tailored news, events and learning for your primary and followed regions.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check-circle-2"></i>
<span>Quick links to local referral pathways and key contacts.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check-circle-2"></i>
<span>Control how often you receive newsletters and invitations.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-3 pt-2">
<button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#185E73] text-white text-sm font-medium hover:bg-[#185E73]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70 transition-all">
<i className="w-4 h-4" data-lucide="user-plus"></i>
              Create an account
            </button>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 text-sm text-slate-800 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5">
<i className="w-4 h-4" data-lucide="log-in"></i>
              I already have an account
            </button>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
<h3 className="text-base font-medium tracking-tight text-slate-900">
            Quick expression of interest
          </h3>
<p className="text-xs text-slate-600">
            Share a few details and the team will follow up with next steps. This form doesn’t create a full login yet.
          </p>
<div className="space-y-3 text-sm">
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Full name</label>
<input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70" placeholder="Dr Jane Smith" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Email</label>
<input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Primary region</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70 pr-8">
<option>Kimberley / Pilbara</option>
<option>Mid West / Gascoyne</option>
<option>Northern Agricultural</option>
<option>Central Wheatbelt</option>
<option>Swan</option>
<option>South West</option>
<option>South Coast</option>
</select>
<i className="pointer-events-none absolute right-2 top-2.5 w-4 h-4 text-slate-400" data-lucide="chevrons-up-down"></i>
</div>
</div>
<button className="mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#185E73] text-white text-sm font-medium hover:bg-[#185E73]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70">
<i className="w-4 h-4" data-lucide="send"></i>
              Submit expression of interest
            </button>
<p className="text-[11px] text-slate-500">
              By submitting, you confirm you are a registered or student health professional working in Western Australia.
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="support">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-8">

<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Support – Section
          </h2>
<p className="text-base text-slate-700">
            Collaborating to improve care for patients in WA
          </p>
</div>

<div className="space-y-4 text-sm text-slate-800 max-w-3xl">

<div className="space-y-1.5">
<button className="flex items-center gap-2 text-sky-900">
<span className="text-base font-medium tracking-tight leading-snug">
                + Accommodation assistance
              </span>
</button>
<p className="text-sm text-slate-800 leading-relaxed">
              With limited accommodation options available and rent costs significantly higher than in other regions,
              health professionals living or moving to WA have the opportunity to advertise for a flatmate or promote
              a room for rent.
            </p>
<button className="inline-flex items-center gap-1 text-sm text-sky-900 hover:text-sky-700">
<span>CTA / Clickthrough link</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>

<div className="space-y-1.5 pt-3 border-t border-slate-200">
<button className="flex items-center gap-2 text-sky-900">
<span className="text-base font-medium tracking-tight leading-snug">
                + Scholarships and support
              </span>
</button>
<p className="text-sm text-slate-800 leading-relaxed">
              A range of professional bodies and health organisations offer professional development grants,
              bursaries and scholarships.
            </p>
<button className="inline-flex items-center gap-1 text-sm text-sky-900 hover:text-sky-700">
<span>CTA / Clickthrough link</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="learning">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Learning and development
            </h2>
<p className="mt-2 text-base text-slate-700 max-w-xl">
              Education designed around regional practice – from quick refreshers between clinics to accredited programs that support your longer‑term goals.
            </p>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-xs sm:text-sm text-slate-800 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5">
<i className="w-4 h-4" data-lucide="library"></i>
            Browse full learning library
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-start">

<div className="space-y-4">
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-[#185E73]" data-lucide="play-circle"></i>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">
                  On‑demand microlearning
                </h3>
<p className="mt-1 text-sm text-slate-700">
                  Short, focused modules built for busy rosters, with clear learning outcomes and certificates where available.
                </p>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-emerald-600" data-lucide="users"></i>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">
                  Case discussions by region
                </h3>
<p className="mt-1 text-sm text-slate-700">
                  Join small‑group case discussions that focus on conditions and contexts common to your local area.
                </p>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-sky-600" data-lucide="award"></i>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900">
                  Accredited programs
                </h3>
<p className="mt-1 text-sm text-slate-700">
                  Multi‑session programs aligned with college and rural generalist requirements, with clear time commitments up‑front.
                </p>
</div>
</article>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 text-sm">
<h3 className="text-base font-medium tracking-tight text-slate-900">
              Tailor your learning feed
            </h3>
<p className="text-slate-700">
              Choose priority topics now and refine them later in your profile. Your region hub will surface the most relevant modules and events first.
            </p>
<div className="grid grid-cols-2 gap-3 text-xs">
<button className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 hover:border-[#185E73] hover:bg-[#185E73]/5">
<span className="text-slate-800">Emergency</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="activity"></i>
</button>
<button className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 hover:border-[#185E73] hover:bg-[#185E73]/5">
<span className="text-slate-800">Chronic disease</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="pulse"></i>
</button>
<button className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 hover:border-[#185E73] hover:bg-[#185E73]/5">
<span className="text-slate-800">Aboriginal health</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="hand-heart"></i>
</button>
<button className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 hover:border-[#185E73] hover:bg-[#185E73]/5">
<span className="text-slate-800">Leadership</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="badge-check"></i>
</button>
</div>
<p className="text-[11px] text-slate-500">
              Your topic preferences can sync with your member profile so reminders and recommendations stay aligned with your current role.
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="contact">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-start">
<div className="space-y-5">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Contact the Health Professionals Network team
          </h2>
<p className="text-base text-slate-700 max-w-xl">
            Get in touch about membership, events, regional feedback or partnership opportunities. We aim to respond within two business days.
          </p>
<div className="space-y-3 text-sm text-slate-700">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#185E73]" data-lucide="mail"></i>
<span>hpnwa@ruralhealthwest.com.au</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#185E73]" data-lucide="phone"></i>
<span>08 0000 0000 (business hours)</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#185E73]" data-lucide="map"></i>
<span>Perth office with regional coordination across WA</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 text-sm">
<h3 className="text-base font-medium tracking-tight text-slate-900">
            Send us a message
          </h3>
<div className="space-y-3">
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Name</label>
<input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Email</label>
<input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Region (optional)</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70 pr-8">
<option>All regions</option>
<option>Kimberley / Pilbara</option>
<option>Mid West / Gascoyne</option>
<option>Northern Agricultural</option>
<option>Central Wheatbelt</option>
<option>Swan</option>
<option>South West</option>
<option>South Coast</option>
</select>
<i className="pointer-events-none absolute right-2 top-2.5 w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs text-slate-700">Message</label>
<textarea className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#185E73] text-white text-sm font-medium hover:bg-[#185E73]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185E73]/70">
<i className="w-4 h-4" data-lucide="send"></i>
              Submit enquiry
            </button>
<p className="text-[11px] text-slate-500">
              Please do not include identifiable patient information. We will contact you if we need more detail.
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="news">
<div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Network news and updates
            </h2>
<p className="mt-2 text-base text-slate-700 max-w-xl">
              Stories from across the regions, service updates and ways to contribute to statewide projects and pilots.
            </p>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-xs sm:text-sm text-slate-800 hover:border-[#185E73] hover:text-[#185E73] hover:bg-[#185E73]/5">
<i className="w-4 h-4" data-lucide="rss"></i>
            Subscribe to email updates
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
<p className="text-[11px] text-slate-500">Kimberley / Pilbara · 5 July 2025</p>
<h3 className="text-sm font-medium tracking-tight text-slate-900">
              New cross‑region on‑call roster launched
            </h3>
<p className="text-slate-700">
              A shared on‑call model is improving access to specialist advice for remote clinics overnight.
            </p>
<button className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-800 hover:text-[#185E73]">
              Read more
              <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
<p className="text-[11px] text-slate-500">Statewide · 22 June 2025</p>
<h3 className="text-sm font-medium tracking-tight text-slate-900">
              Aboriginal health advisory group established
            </h3>
<p className="text-slate-700">
              Representatives from across WA are guiding design, language and priorities for the network platform.
            </p>
<button className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-800 hover:text-[#185E73]">
              Learn about the group
              <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
<p className="text-[11px] text-slate-500">South West · 10 June 2025</p>
<h3 className="text-sm font-medium tracking-tight text-slate-900">
              Pilot mentoring program for early‑career clinicians
            </h3>
<p className="text-slate-700">
              Experienced rural practitioners are paired with early‑career colleagues for structured mentorship.
            </p>
<button className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-800 hover:text-[#185E73]">
              Register interest
              <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</article>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<p>© 2025 Rural Health West – Health Professionals Network WA. For registered health professionals only.</p>
<div className="flex items-center gap-4">
<button className="hover:text-[#185E73]">Privacy</button>
<button className="hover:text-[#185E73]">Terms</button>
<button className="hover:text-[#185E73]">Accessibility</button>
</div>
</div>
</footer>


    </>
  );
}
