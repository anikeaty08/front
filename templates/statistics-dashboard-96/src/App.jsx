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



      document.addEventListener('DOMContentLoaded', () => {
        // Timeline: click to update persistent details
        const days = Array.from(document.querySelectorAll('.day'));
        const panel = document.getElementById('activityDetail');
        const nameEl = document.getElementById('detailName');
        const metaEl = document.getElementById('detailMeta');
        const dateEl = document.getElementById('detailDate');
        const badgeEl = document.getElementById('detailBadge');

        const channelStyles = {
          email: {
            classes: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8l8 5 8-5"/><rect x="4" y="4" width="16" height="16" rx="2" opacity=".1"/></svg>'
          },
          sms: {
            classes: 'bg-teal-50 text-teal-600 border border-teal-100',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="3" opacity=".1"/><path d="M7 8h10M7 12h7M7 16h5"/></svg>'
          },
          whatsapp: {
            classes: 'bg-green-50 text-green-600 border border-green-100',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" opacity=".1"/><path d="M8 12l2 2 4-4"/></svg>'
          }
        };

        function selectDay(el) {
          days.forEach(d => d.classList.remove('ring-1', 'ring-indigo-200'));
          el.classList.add('ring-1', 'ring-indigo-200');

          const { channel, name, sent, conv, date, type } = el.dataset;

          // Update badge
          badgeEl.className = 'inline-flex h-8 w-8 items-center justify-center rounded-lg ' + (channelStyles[channel]?.classes || 'bg-slate-50 text-slate-700 border border-slate-200');
          badgeEl.innerHTML = channelStyles[channel]?.icon || '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M7 13l4-4 4 4"/></svg>';

          nameEl.textContent = name || '-';
          metaEl.textContent = `${type || '—'} • Sent: ${sent || '—'} • Conversion: ${conv || '—'}`;
          dateEl.textContent = new Date(date || '').toDateString().replace(/^.*? (\w{3} \d{1,2} \d{4})$/, '$1') || (date || '-');

          panel.classList.remove('hidden');
        }

        days.forEach(d => {
          d.addEventListener('click', () => selectDay(d));
          d.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              selectDay(d);
            }
          });
        });

        // Channel filters
        const toggles = document.querySelectorAll('.channel-toggle');
        function applyChannelFilters() {
          const enabled = {};
          toggles.forEach(t => enabled[t.dataset.channel] = t.checked);
          days.forEach(d => {
            const show = enabled[d.dataset.channel];
            d.classList.toggle('hidden', !show);
            d.setAttribute('aria-hidden', String(!show));
          });

          // If current selected item is hidden, hide details panel
          const hasVisibleSelected = days.some(d => d.classList.contains('ring-1') && !d.classList.contains('hidden'));
          if (!hasVisibleSelected) {
            panel.classList.add('hidden');
          }
        }
        toggles.forEach(t => t.addEventListener('change', applyChannelFilters));
        applyChannelFilters();

        // Activity autoplay (simple marquee)
        const playToggle = document.getElementById('activityPlay');
        const scroller = document.getElementById('activityScroller');
        let playTimer = null;

        function startAutoScroll() {
          stopAutoScroll();
          playTimer = setInterval(() => {
            const max = scroller.scrollWidth - scroller.clientWidth;
            if (scroller.scrollLeft >= max - 1) {
              scroller.scrollLeft = 0;
            } else {
              scroller.scrollLeft += 2;
            }
          }, 16); // ~60fps
        }
        function stopAutoScroll() {
          if (playTimer) {
            clearInterval(playTimer);
            playTimer = null;
          }
        }
        playToggle?.addEventListener('change', (e) => {
          if (e.target.checked) startAutoScroll(); else stopAutoScroll();
        });
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) stopAutoScroll();
          else if (playToggle?.checked) startAutoScroll();
        });

        // Trends & Insights: radios + compare toggle
        const metricRadios = document.querySelectorAll('input[name="metric"]');
        const compareToggle = document.getElementById('compareToggle');
        const allSeries = Array.from(document.querySelectorAll('[data-series]'));

        function renderSeries() {
          const selected = document.querySelector('input[name="metric"]:checked')?.value || 'opens';
          const compareOn = !!compareToggle?.checked;

          // Hide all
          allSeries.forEach(g => g.classList.add('hidden'));

          // Show base for selected
          const base = document.querySelector(`[data-series="${selected}"]`);
          base?.classList.remove('hidden');

          // Show compare if enabled
          const dashed = document.querySelector(`[data-series="${selected}-compare"]`);
          if (compareOn) dashed?.classList.remove('hidden');
        }

        metricRadios.forEach(r => r.addEventListener('change', renderSeries));
        compareToggle?.addEventListener('change', renderSeries);
        renderSeries();
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between gap-4">
<div className="flex items-start sm:items-center gap-3">
<div className="flex items-center gap-2">

<span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-slate-50 border border-slate-200 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 15l3-3 3 3 4-6"></path>
</svg>
</span>
<div>
<h1 className="text-[22px] sm:text-[26px] font-semibold tracking-tight text-slate-900">Statistics</h1>
<p className="text-[13px] sm:text-[14px] text-slate-600">Analyze performance across Email, SMS, and WhatsApp campaigns.</p>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-3">
<div className="flex items-center gap-2">

<label className="group relative inline-flex items-center bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2 shadow-sm hover:shadow transition">
<span className="text-[12px] text-slate-500 mr-2">From</span>
<input className="appearance-none bg-transparent text-[13px] text-slate-800 outline-none focus:outline-none focus:ring-0" type="date"/>
</label>

<label className="group relative inline-flex items-center bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2 shadow-sm hover:shadow transition">
<span className="text-[12px] text-slate-500 mr-2">To</span>
<input className="appearance-none bg-transparent text-[13px] text-slate-800 outline-none focus:outline-none focus:ring-0" type="date"/>
</label>
</div>

<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium text-white shadow-sm hover:shadow transition border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" style={{background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #7c3aed 100%)'}}>
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 13l4-4 4 4"></path>
</svg>
                Show Insights
              </button>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="M7 10l5 5 5-5"></path>
<path d="M12 15V3"></path>
</svg>
                Download Report
              </button>
</div>
</div>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:hidden gap-3">
<div className="flex items-center gap-2">
<label className="group relative inline-flex items-center bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2 shadow-sm hover:shadow transition flex-1">
<span className="text-[12px] text-slate-500 mr-2">From</span>
<input className="appearance-none bg-transparent text-[13px] text-slate-800 outline-none focus:outline-none focus:ring-0 w-full" type="date"/>
</label>
<label className="group relative inline-flex items-center bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 py-2 shadow-sm hover:shadow transition flex-1">
<span className="text-[12px] text-slate-500 mr-2">To</span>
<input className="appearance-none bg-transparent text-[13px] text-slate-800 outline-none focus:outline-none focus:ring-0 w-full" type="date"/>
</label>
</div>
<div className="flex items-center gap-2">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-medium text-white shadow-sm hover:shadow transition border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300" style={{background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #7c3aed 100%)'}}>
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 13l4-4 4 4"></path></svg>
                Show Insights
              </button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-medium text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
                Download
              </button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

<div className="xl:col-span-9 space-y-8">

<section>
<div className="flex items-center justify-between mb-3">
<h2 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Performance Overview</h2>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500"></span>Email</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-teal-500"></span>SMS</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500"></span>WhatsApp</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 hover:ring-1 hover:ring-indigo-200/70">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)', color: 'white'}}>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" opacity=".1"></path><path d="M4 8l8 5 8-5"></path></svg>
</span>
<div className="text-[13px] text-slate-600">Open Rate • Email</div>
</div>

<div className="relative">
<button aria-label="Info" className="text-slate-400 hover:text-slate-600 transition">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<div className="pointer-events-none absolute right-0 mt-2 w-48 rounded-lg border border-indigo-100 bg-white/95 p-2 text-[12px] text-slate-700 opacity-0 shadow-lg ring-1 ring-indigo-50 transition duration-200 group-hover:opacity-100">
                        Email opens based on total recipients
                      </div>
</div>
</div>
<div className="mt-4 flex items-center gap-5">

<div className="relative">
<div className="relative h-20 w-20 rounded-full" style={{background: 'conic-gradient(#4f46e5 0% 72%, #e5e7eb 72% 100%)'}}>
<div className="absolute inset-2 rounded-full bg-white border border-slate-200"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-[20px] font-semibold tracking-tight text-slate-900">72%</div>
<div className="text-[11px] text-slate-500">of 18,240</div>
</div>
</div>
</div>

<div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow-[0_0_0_3px_rgba(99,102,241,0.08)]"></div>
</div>
<div className="flex-1">
<div className="text-[13px] text-slate-600">Top-performing campaigns</div>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between text-[12px]">
<span className="text-slate-700">New Product Launch</span>
<span className="text-slate-900 font-medium">81%</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-slate-700">Onboarding Sequence</span>
<span className="text-slate-900 font-medium">76%</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-slate-700">Spring Sale</span>
<span className="text-slate-900 font-medium">74%</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 hover:ring-1 hover:ring-emerald-200/70">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h6l3 8 4-16 3 8h2"></path></svg>
</span>
<div className="text-[13px] text-slate-600">Click Rate • All Channels</div>
</div>
<div className="relative">
<button aria-label="Info" className="text-slate-400 hover:text-slate-600 transition">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<div className="pointer-events-none absolute right-0 mt-2 w-56 rounded-lg border border-emerald-100 bg-white/95 p-2 text-[12px] text-slate-700 opacity-0 shadow-lg ring-1 ring-emerald-50 transition duration-200 group-hover:opacity-100">
                        Click-through comparison by channel
                      </div>
</div>
</div>
<div className="mt-4">
<div className="space-y-3">

<div className="flex items-center justify-between text-[12px] mb-1">
<span className="inline-flex items-center gap-2 text-slate-700">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span>Email
                        </span>
<span className="text-slate-900 font-medium">60%</span>
</div>
<div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-2 rounded-full bg-indigo-500 w-[60%] origin-left transition-transform group-hover:scale-x-[1.03]"></div>
</div>

<div className="flex items-center justify-between text-[12px] mt-3 mb-1">
<span className="inline-flex items-center gap-2 text-slate-700">
<span className="h-2 w-2 rounded-full bg-teal-500"></span>SMS
                        </span>
<span className="text-slate-900 font-medium">25%</span>
</div>
<div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-2 rounded-full bg-teal-500 w-[25%] origin-left transition-transform group-hover:scale-x-[1.03]"></div>
</div>

<div className="flex items-center justify-between text-[12px] mt-3 mb-1">
<span className="inline-flex items-center gap-2 text-slate-700">
<span className="h-2 w-2 rounded-full bg-green-500"></span>WhatsApp
                        </span>
<span className="text-slate-900 font-medium">15%</span>
</div>
<div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-2 rounded-full bg-green-500 w-[15%] origin-left transition-transform group-hover:scale-x-[1.03]"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 hover:ring-1 hover:ring-orange-200/70">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 border border-orange-100">
<svg className="h-4 w-4 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</span>
<div className="text-[13px] text-slate-600">Unsubscription Rate</div>
</div>
<div className="relative">
<button aria-label="Info" className="text-slate-400 hover:text-slate-600 transition">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<div className="pointer-events-none absolute right-0 mt-2 w-56 rounded-lg border border-orange-100 bg-white/95 p-2 text-[12px] text-slate-700 opacity-0 shadow-lg ring-1 ring-orange-50 transition duration-200 group-hover:opacity-100">
                        Users who opted out across all channels
                      </div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-[22px] font-semibold tracking-tight text-slate-900">2.9%</div>
<div className="text-[12px] text-emerald-600 inline-flex items-center gap-1">
<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12l7-7 7 7"></path></svg>
                        ↓ 3% from last month
                      </div>
</div>
<div className="text-[12px] text-slate-600">Across 42 campaigns</div>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 hover:ring-1 hover:ring-fuchsia-200/70">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)', color: 'white'}}>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" opacity=".1" r="10"></circle><path d="M7 12l3 3 7-7"></path></svg>
</span>
<div className="text-[13px] text-slate-600">Conversions</div>
</div>
<div className="relative">
<button aria-label="Info" className="text-slate-400 hover:text-slate-600 transition">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<div className="pointer-events-none absolute right-0 mt-2 w-60 rounded-lg border border-fuchsia-100 bg-white/95 p-2 text-[12px] text-slate-700 opacity-0 shadow-lg ring-1 ring-fuchsia-50 transition duration-200 group-hover:opacity-100">
                        Total successful actions (signups, purchases, etc.)
                      </div>
</div>
</div>
<div className="mt-4 flex items-center gap-5">

<div className="relative">
<div className="relative h-20 w-20 rounded-full" style={{background: 'conic-gradient(#8b5cf6 0% 64%, #e5e7eb 64% 100%)'}}>
<div className="absolute inset-2 rounded-full bg-white border border-slate-200"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-[20px] font-semibold tracking-tight text-slate-900">64%</div>
<div className="text-[11px] text-slate-500">Goal completion</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 -translate-y-2">
<span className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-fuchsia-400 animate-ping"></span>
<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-purple-400 animate-ping"></span>
<span className="absolute -bottom-1 left-3 h-2 w-2 rounded-full bg-pink-400 animate-ping"></span>
</div>
</div>
<div className="flex-1">
<div className="text-[13px] text-slate-600">Best sources</div>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between text-[12px]">
<span className="text-slate-700">Email</span>
<span className="text-slate-900 font-medium">41%</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-slate-700">WhatsApp</span>
<span className="text-slate-900 font-medium">15%</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-slate-700">SMS</span>
<span className="text-slate-900 font-medium">8%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm" id="campaign-activity">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-[18px] font-semibold tracking-tight">Campaign Activity</h3>
<p className="text-[12px] text-slate-600">Daily sends across channels. Hover or click a bar for details.</p>
</div>

<label className="inline-flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" id="activityPlay" type="checkbox"/>
<span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] text-slate-700 hover:bg-slate-50 transition">
<svg className="h-[14px] w-[14px] text-slate-600 peer-checked:text-indigo-600 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v18"></path><path d="M19 3v18"></path><path d="M9 19V5l8 7-8 7z"></path></svg>
<span className="peer-checked:text-indigo-700">Play</span>
</span>
</label>
</div>
<div className="relative">
<div className="relative overflow-x-auto scroll-smooth" id="activityScroller">
<div className="min-w-[800px] lg:min-w-full">
<div className="flex items-end gap-4 pb-2" id="activityTrack">


<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="email" data-conv="4.2%" data-date="2025-03-12" data-name="Welcome Series" data-sent="2,100" data-type="Email" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-indigo-500 h-[45%] group-hover:h-[50%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Mon</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[180px]">
<div className="font-medium text-slate-800">Welcome Series</div>
<div className="text-slate-600">Sent: 2,100 • Conversion: 4.2%</div>
<div className="text-slate-500">Email • 12 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="sms" data-conv="3.1%" data-date="2025-03-13" data-name="Abandoned Cart" data-sent="1,450" data-type="SMS" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-teal-500 h-[30%] group-hover:h-[35%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-teal-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Tue</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[180px]">
<div className="font-medium text-slate-800">Abandoned Cart</div>
<div className="text-slate-600">Sent: 1,450 • Conversion: 3.1%</div>
<div className="text-slate-500">SMS • 13 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="whatsapp" data-conv="5.6%" data-date="2025-03-14" data-name="WhatsApp Promo" data-sent="3,200" data-type="WhatsApp" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-green-500 h-[55%] group-hover:h-[60%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-green-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Wed</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">WhatsApp Promo</div>
<div className="text-slate-600">Sent: 3,200 • Conversion: 5.6%</div>
<div className="text-slate-500">WhatsApp • 14 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="email" data-conv="4.0%" data-date="2025-03-15" data-name="Feature Update" data-sent="2,680" data-type="Email" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-indigo-500 h-[40%] group-hover:h-[45%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Thu</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">Feature Update</div>
<div className="text-slate-600">Sent: 2,680 • Conversion: 4.0%</div>
<div className="text-slate-500">Email • 15 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="whatsapp" data-conv="6.3%" data-date="2025-03-16" data-name="Re-engagement Push" data-sent="3,780" data-type="WhatsApp" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-green-500 h-[70%] group-hover:h-[75%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-green-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Fri</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">Re-engagement Push</div>
<div className="text-slate-600">Sent: 3,780 • Conversion: 6.3%</div>
<div className="text-slate-500">WhatsApp • 16 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="sms" data-conv="2.1%" data-date="2025-03-17" data-name="Flash Reminder" data-sent="1,120" data-type="SMS" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-teal-500 h-[25%] group-hover:h-[30%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-teal-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Sat</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">Flash Reminder</div>
<div className="text-slate-600">Sent: 1,120 • Conversion: 2.1%</div>
<div className="text-slate-500">SMS • 17 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="email" data-conv="3.9%" data-date="2025-03-18" data-name="Weekly Digest" data-sent="2,040" data-type="Email" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-indigo-500 h-[35%] group-hover:h-[40%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Sun</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">Weekly Digest</div>
<div className="text-slate-600">Sent: 2,040 • Conversion: 3.9%</div>
<div className="text-slate-500">Email • 18 Mar</div>
</div>
</div>
</div>

<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="whatsapp" data-conv="5.1%" data-date="2025-03-19" data-name="VIP Promo" data-sent="3,010" data-type="WhatsApp" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-green-500 h-[50%] group-hover:h-[54%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-green-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Mon</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">VIP Promo</div>
<div className="text-slate-600">Sent: 3,010 • Conversion: 5.1%</div>
<div className="text-slate-500">WhatsApp • 19 Mar</div>
</div>
</div>
</div>
<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="sms" data-conv="1.0%" data-date="2025-03-20" data-name="One-time PINs" data-sent="980" data-type="SMS" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-teal-500 h-[22%] group-hover:h-[26%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-teal-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Tue</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">One-time PINs</div>
<div className="text-slate-600">Sent: 980 • Conversion: 1.0%</div>
<div className="text-slate-500">SMS • 20 Mar</div>
</div>
</div>
</div>
<div className="group relative flex flex-col items-center day cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md" data-channel="email" data-conv="3.7%" data-date="2025-03-21" data-name="Nurture Update" data-sent="2,300" data-type="Email" role="button" tabindex="0">
<div className="h-20 w-[6px] rounded-full bg-slate-100 overflow-hidden">
<div className="bar-fill w-[6px] bg-indigo-500 h-[48%] group-hover:h-[53%] transition"></div>
</div>
<div className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shadow"></div>
<div className="text-[11px] text-slate-500 mt-1">Wed</div>
<div className="absolute -top-2 left-5 md:left-6 opacity-0 group-hover:opacity-100 transition pointer-events-none">
<div className="rounded-lg border border-slate-200 bg-white p-2 text-[12px] shadow-md min-w-[200px]">
<div className="font-medium text-slate-800">Nurture Update</div>
<div className="text-slate-600">Sent: 2,300 • Conversion: 3.7%</div>
<div className="text-slate-500">Email • 21 Mar</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">

<div className="flex items-center gap-3 text-[12px] text-slate-600">
<label className="inline-flex items-center gap-1 cursor-pointer">
<input checked="" className="sr-only channel-toggle" data-channel="whatsapp" type="checkbox"/>
<span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 hover:bg-slate-50 border border-transparent hover:border-slate-200">
<span className="h-2 w-2 rounded-full bg-green-500"></span>WhatsApp
                        </span>
</label>
<label className="inline-flex items-center gap-1 cursor-pointer">
<input checked="" className="sr-only channel-toggle" data-channel="email" type="checkbox"/>
<span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 hover:bg-slate-50 border border-transparent hover:border-slate-200">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span>Email
                        </span>
</label>
<label className="inline-flex items-center gap-1 cursor-pointer">
<input checked="" className="sr-only channel-toggle" data-channel="sms" type="checkbox"/>
<span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 hover:bg-slate-50 border border-transparent hover:border-slate-200">
<span className="h-2 w-2 rounded-full bg-teal-500"></span>SMS
                        </span>
</label>
</div>
<div className="text-[12px] text-slate-500">Scroll horizontally to explore</div>
</div>

<div className="mt-4 hidden rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm" id="activityDetail">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-700 border border-slate-200" id="detailBadge">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 13l4-4 4 4"></path></svg>
</span>
<div>
<div className="text-[15px] font-medium text-slate-900" id="detailName">-</div>
<div className="text-[12px] text-slate-600" id="detailMeta">-</div>
</div>
</div>
<div className="text-[12px] text-slate-500">
<span id="detailDate">-</span>
</div>
</div>
</div>
</div>
</div></section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-semibold tracking-tight">Campaign Details</h3>
<div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-[12px] text-slate-600">
<span>Sort by:</span>
<label className="inline-flex items-center gap-1 cursor-pointer ml-1">
<input checked="" className="sr-only peer" name="sort-campaigns" type="radio"/>
<span className="px-2 py-1 rounded-md border border-transparent peer-checked:border-slate-300 peer-checked:bg-slate-50">Date</span>
</label>
<label className="inline-flex items-center gap-1 cursor-pointer">
<input className="sr-only peer" name="sort-campaigns" type="radio"/>
<span className="px-2 py-1 rounded-md border border-transparent peer-checked:border-slate-300 peer-checked:bg-slate-50">Performance</span>
</label>
</div>
</div>

<details className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm">
<summary className="list-none cursor-pointer">
<div className="flex items-center justify-between p-4 sm:p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" opacity=".1"></path><path d="M4 8l8 5 8-5"></path></svg>
</span>
<div>
<div className="text text-[14px] font-medium text-slate-900">Email Campaigns</div>
<div className="text-[12px] text-slate-600">Last 30 days • 8 campaigns</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-[12px] text-slate-600">
                        Avg Open <span className="font-medium text-slate-900">42%</span>
</div>
<svg aria-hidden="true" className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
</div>
</summary>
<div className="border-t border-slate-200">
<ul className="divide-y divide-slate-100" id="email-campaign-list">

<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 data-[hidden=true]:hidden" data-perf="81">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l8 5 8-5"></path><rect height="16" opacity=".1" rx="2" width="16" x="4" y="4"></rect></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">New Product Launch</div>
<div className="text-[12px] text-slate-600">Sent 6 Mar • 25,000 recipients</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">High</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Open</span><span className="text-slate-900 font-medium">81%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-indigo-500 rounded-full w-[81%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Click</span><span className="text-slate-900 font-medium">36%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[36%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">9.2%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[9%]"></div>
</div>
</div>
</div>
</li>
<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4" data-perf="76">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l8 5 8-5"></path><rect height="16" opacity=".1" rx="2" width="16" x="4" y="4"></rect></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">Onboarding Sequence</div>
<div className="text-[12px] text-slate-600">Ongoing • 5 steps</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-[11px] text-indigo-700">Automated</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Open</span><span className="text-slate-900 font-medium">76%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-indigo-500 rounded-full w-[76%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Click</span><span className="text-slate-900 font-medium">28%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[28%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">6.1%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[6%]"></div>
</div>
</div>
</div>
</li>
<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4" data-perf="74">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8l8 5 8-5"></path><rect height="16" opacity=".1" rx="2" width="16" x="4" y="4"></rect></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">Spring Sale</div>
<div className="text-[12px] text-slate-600">Scheduled • 29 Mar</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-amber-100 bg-amber-50 px-2 py-0.5 text-[11px] text-amber-700">Scheduled</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Open</span><span className="text-slate-900 font-medium">74%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-indigo-500 rounded-full w-[74%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Click</span><span className="text-slate-900 font-medium">24%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[24%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">5.0%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[5%]"></div>
</div>
</div>
</div>
</li>
</ul>
</div>
</details>

<details className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm">
<summary className="list-none cursor-pointer">
<div className="flex items-center justify-between p-4 sm:p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" opacity=".1" rx="3" width="16" x="4" y="4"></rect><path d="M7 8h10M7 12h7M7 16h5"></path></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">SMS Campaigns</div>
<div className="text-[12px] text-slate-600">Last 30 days • 5 campaigns</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-[12px] text-slate-600">
                        Avg CTR <span className="font-medium text-slate-900">12%</span>
</div>
<svg aria-hidden="true" className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
</div>
</summary>
<div className="border-t border-s-200">
<ul className="divide-y divide-slate-100" id="sms-campaign-list">
<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4" data-perf="31">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-teal-50 text-teal-600 border border-teal-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" opacity=".1" rx="3" width="16" x="4" y="4"></rect><path d="M7 8h10M7 12h7M7 16h5"></path></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">Abandoned Cart</div>
<div className="text-[12px] text-slate-600">Triggered • 1,450 sent</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-teal-100 bg-teal-50 px-2 py-0.5 text-[11px] text-teal-700">Transactional</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Delivery</span><span className="text-slate-900 font-medium">98%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-teal-500 rounded-full w-[98%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>CTR</span><span className="text-slate-900 font-medium">12%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[12%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">3.1%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[3%]"></div>
</div>
</div>
</div>
</li>
<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4" data-perf="10">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-teal-50 text-teal-600 border border-teal-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" opacity=".1" rx="3" width="16" x="4" y="4"></rect><path d="M7 8h10M7 12h7M7 16h5"></path></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">One-time PINs</div>
<div className="text-[12px] text-slate-600">Triggered • 980 sent</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700">Security</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Delivery</span><span className="text-slate-900 font-medium">99%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-teal-500 rounded-full w-[99%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>CTR</span><span className="text-slate-900 font-medium">10%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[10%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">1.0%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[1%]"></div>
</div>
</div>
</div>
</li>
</ul>
</div>
</details>

<details className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm">
<summary className="list-none cursor-pointer">
<div className="flex items-center justify-between p-4 sm:p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 border border-green-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" opacity=".1" r="10"></circle><path d="M8 12l2 2 4-4"></path></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">WhatsApp Campaigns</div>
<div className="text-[12px] text-slate-600">Last 30 days • 6 campaigns</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-[12px] text-slate-600">
                        Avg Reply <span className="font-medium text-slate-900">6%</span>
</div>
<svg aria-hidden="true" className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
</div>
</summary>
<div className="border-t border-slate-200">
<ul className="divide-y divide-slate-100" id="wa-campaign-list">
<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4" data-perf="63">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-green-50 text-green-600 border border-green-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" opacity=".1" r="10"></circle><path d="M8 12l2 2 4-4"></path></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">Re-engagement Push</div>
<div className="text-[12px] text-slate-600">Blast • 3,780 sent</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-green-100 bg-green-50 px-2 py-0.5 text-[11px] text-green-700">High volume</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Delivery</span><span className="text-slate-900 font-medium">97%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-green-500 rounded-full w-[97%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Reply</span><span className="text-slate-900 font-medium">7.5%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[7%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">6.3%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[6%]"></div>
</div>
</div>
</div>
</li>
<li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4" data-perf="51">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-green-50 text-green-600 border border-green-100">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" opacity=".1" r="10"></circle><path d="M8 12l2 2 4-4"></path></svg>
</span>
<div>
<div className="text-[14px] font-medium text-slate-900">VIP Promo</div>
<div className="text-[12px] text-slate-600">Targeted • 3,010 sent</div>
</div>
<span className="ml-2 inline-flex items-center gap-1 rounded-md border border-purple-100 bg-purple-50 px-2 py-0.5 text-[11px] text-purple-700">Segmented</span>
</div>
<div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Delivery</span><span className="text-slate-900 font-medium">96%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-green-500 rounded-full w-[96%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Reply</span><span className="text-slate-900 font-medium">5.1%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[5%]"></div>
</div>
</div>
<div className="min-w-[110px]">
<div className="flex items-center justify-between text-[11px] text-slate-600">
<span>Conv</span><span className="text-slate-900 font-medium">5.1%</span>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-fuchsia-500 rounded-full w-[5%]"></div>
</div>
</div>
</div>
</li>
</ul>
</div>
</details>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
<div className="flex items-center justify-between gap-3 flex-wrap">
<div>
<h3 className="text-[18px] font-semibold tracking-tight">Trends &amp; Insights</h3>
<p className="text-[12px] text-slate-600">Track metrics over time. Toggle compare to overlay previous period.</p>
</div>
<div className="flex items-center gap-2">

<div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 p-1">
<label className="inline-flex items-center">
<input checked="" className="sr-only peer" name="metric" type="radio" value="opens"/>
<span className="px-2 py-1.5 text-[12px] rounded-md peer-checked:bg-slate-50 peer-checked:border peer-checked:border-slate-300 cursor-pointer">Opens</span>
</label>
<label className="inline-flex items-center">
<input className="sr-only peer" name="metric" type="radio" value="clicks"/>
<span className="px-2 py-1.5 text-[12px] rounded-md peer-checked:bg-slate-50 peer-checked:border peer-checked:border-slate-300 cursor-pointer">Clicks</span>
</label>
<label className="inline-flex items-center">
<input className="sr-only peer" name="metric" type="radio" value="conversions"/>
<span className="px-2 py-1.5 text-[12px] rounded-md peer-checked:bg-slate-50 peer-checked:border peer-checked:border-slate-300 cursor-pointer">Conversions</span>
</label>
</div>

<label className="inline-flex items-center gap-2 cursor-pointer select-none ml-1">
<input className="sr-only" id="compareToggle" type="checkbox"/>
<span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] text-slate-700 hover:bg-slate-50 transition">
<svg className="h-[14px] w-[14px] text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V5"></path><path d="M8 19V9"></path><path d="M12 19V13"></path><path d="M16 19V7"></path><path d="M20 19V3"></path></svg>
                      Compare
                    </span>
</label>
</div>
</div>

<div className="mt-4">
<div className="relative rounded-xl border border-slate-200 bg-white">

<div className="absolute inset-0 [background:linear-gradient(transparent_23px,_#f1f5f9_24px),linear-gradient(90deg,transparent_23px,_#f1f5f9_24px)] bg-[length:1.5rem_1.5rem] rounded-xl pointer-events-none"></div>
<svg aria-labelledby="chartTitle" className="w-full h-64 rounded-xl" role="img" viewbox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<title id="chartTitle">Metric trends over time</title>

<g stroke="#cbd5e1" strokeWidth="1">
<line x1="40" x2="580" y1="200" y2="200"></line>
<line x1="40" x2="40" y1="40" y2="200"></line>
</g>

<g fill="#64748b" fontSize="10">
<text x="40" y="215">W1</text>
<text x="160" y="215">W2</text>
<text x="280" y="215">W3</text>
<text x="400" y="215">W4</text>
<text x="520" y="215">W5</text>
</g>

<g className="series visible" data-series="opens">
<polyline fill="none" points="40,160 160,120 280,140 400,95 520,110" stroke="#4f46e5" strokeWidth="2.5"></polyline>

<g fill="#4f46e5">
<circle cx="40" cy="160" r="3"></circle>
<circle cx="160" cy="120" r="3"></circle>
<circle cx="280" cy="140" r="3"></circle>
<circle cx="400" cy="95" r="3"></circle>
<circle cx="520" cy="110" r="3"></circle>
</g>
</g>

<g className="series hidden" data-series="opens-compare">
<polyline fill="none" points="40,170 160,135 280,150 400,110 520,115" stroke="#a5b4fc" stroke-dasharray="4 4" strokeWidth="2"></polyline>
</g>

<g className="series hidden" data-series="clicks">
<polyline fill="none" points="40,185 160,160 280,170 400,140 520,150" stroke="#10b981" strokeWidth="2.5"></polyline>
<g fill="#10b981">
<circle cx="40" cy="185" r="3"></circle>
<circle cx="160" cy="160" r="3"></circle>
<circle cx="280" cy="170" r="3"></circle>
<circle cx="400" cy="140" r="3"></circle>
<circle cx="520" cy="150" r="3"></circle>
</g>
</g>

<g className="series hidden" data-series="clicks-compare">
<polyline fill="none" points="40,190 160,170 280,175 400,150 520,160" stroke="#99f6e4" stroke-dasharray="4 4" strokeWidth="2"></polyline>
</g>

<g className="series hidden" data-series="conversions">
<polyline fill="none" points="40,195 160,185 280,180 400,170 520,168" stroke="#d946ef" strokeWidth="2.5"></polyline>
<g fill="#d946ef">
<circle cx="40" cy="195" r="3"></circle>
<circle cx="160" cy="185" r="3"></circle>
<circle cx="280" cy="180" r="3"></circle>
<circle cx="400" cy="170" r="3"></circle>
<circle cx="520" cy="168" r="3"></circle>
</g>
</g>

<g className="series hidden" data-series="conversions-compare">
<polyline fill="none" points="40,198 160,190 280,186 400,178 520,176" stroke="#f0abfc" stroke-dasharray="4 4" strokeWidth="2"></polyline>
</g>
</svg>

<div className="flex items-center gap-4 px-4 py-3 text-[12px] text-slate-600">
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500"></span>Opens</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500"></span>Clicks</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-fuchsia-500"></span>Conversions</span>
<span className="ml-auto inline-flex items-center gap-1 text-slate-500"><span className="h-2 w-2 rounded-full bg-slate-300"></span>Compare period</span>
</div>
</div>
</div>
</section>
</div>

<aside className="xl:col-span-3 space-y-8">

<section className="grid grid-cols-2 sm:grid-cols-2 gap-3">
<div className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-600">Total Sends</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-50 text-slate-600 border border-slate-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 13l4-4 4 4"></path></svg>
</span>
</div>
<div className="mt-3 text-[20px] font-semibold tracking-tight">56,840</div>
<div className="text-[11px] text-emerald-600 mt-1 inline-flex items-center gap-1">
<svg className="h-[12px] w-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12l7-7 7 7"></path></svg>
                  5.8% vs last period
                </div>
</div>
<div className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-600">Deliverability</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-50 text-slate-600 border border-slate-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20l9-5-9-5-9 5 9 5z"></path><path d="M12 10l9-5-9-5-9 5 9 5z"></path></svg>
</span>
</div>
<div className="mt-3 text-[20px] font-semibold tracking-tight">97.2%</div>
<div className="text-[11px] text-slate-500 mt-1">All channels</div>
</div>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
<div className="flex items-center justify-between">
<h4 className="text-[16px] font-semibold tracking-tight">Top Segments</h4>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1 text-[12px] text-slate-600 hover:bg-slate-50 transition">
<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12M6 12h12"></path>
</svg>
                  Manage
                </button>
</div>
<ul className="mt-4 space-y-3">
<li className="group rounded-xl border border-slate-200 p-3 hover:shadow-sm transition">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5h18M3 12h18M3 19h18"></path>
</svg>
</span>
<div>
<div className="text-[13px] font-medium text-slate-900">High Intent Buyers</div>
<div className="text-[12px] text-slate-600">Viewed product + added to cart</div>
</div>
</div>
<div className="text-right">
<div className="text-[13px] font-semibold text-slate-900">18%</div>
<div className="text-[11px] text-emerald-600 inline-flex items-center gap-1">
<svg className="h-[12px] w-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12l7-7 7 7"></path></svg>
                        +1.2%
                      </div>
</div>
</div>
<div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-indigo-500 rounded-full w-[72%] group-hover:w-[74%] transition-[width]"></div>
</div>
</li>
<li className="group rounded-xl border border-slate-200 p-3 hover:shadow-sm transition">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20l9-5-9-5-9 5 9 5z"></path>
<path d="M12 10l9-5-9-5-9 5 9 5z" opacity=".3"></path>
</svg>
</span>
<div>
<div className="text-[13px] font-medium text-slate-900">New Signups</div>
<div className="text-[12px] text-slate-600">Joined in last 14 days</div>
</div>
</div>
<div className="text-right">
<div className="text-[13px] font-semibold text-slate-900">12%</div>
<div className="text-[11px] text-slate-500">Stable</div>
</div>
</div>
<div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-emerald-500 rounded-full w-[48%] group-hover:w-[50%] transition-[width]"></div>
</div>
</li>
<li className="group rounded-xl border border-slate-200 p-3 hover:shadow-sm transition">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4l3 3"></path>
</svg>
</span>
<div>
<div className="text-[13px] font-medium text-slate-900">Dormant &gt; 90 days</div>
<div className="text-[12px] text-slate-600">No activity in past 3 months</div>
</div>
</div>
<div className="text-right">
<div className="text-[13px] font-semibold text-slate-900">9%</div>
<div className="text-[11px] text-rose-600 inline-flex items-center gap-1">
<svg className="h-[12px] w-[12px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                        +0.8%
                      </div>
</div>
</div>
<div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-1.5 bg-amber-500 rounded-full w-[36%] group-hover:w-[38%] transition-[width]"></div>
</div>
</li>
</ul>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-xl border border-slate-200 p-3">
<div className="text-[12px] text-slate-600">Best send day</div>
<div className="mt-1 text-[14px] font-semibold">Thu</div>
<div className="mt-1 inline-flex items-center gap-1 text-[11px] text-slate-500">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> +9% open rate
                  </div>
</div>
<div className="rounded-xl border border-slate-200 p-3">
<div className="text-[12px] text-slate-600">Best time</div>
<div className="mt-1 text-[14px] font-semibold">10:00–12:00</div>
<div className="mt-1 inline-flex items-center gap-1 text-[11px] text-slate-">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span> Email cohort
                  </div>
</div>
</div>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
<div className="flex items-center justify-between">
<h4 className="text-[16px] font-semibold tracking-tight">Quick Tips</h4>
<span className="text-[12px] text-slate-500">Auto-generated</span>
</div>
<ul className="mt-3 space-y-2 text-[13px] text-slate-700">
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded bg-indigo-50 text-indigo-600 border border-indigo-100">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5L20 7"></path></svg>
</span>
                  Use shorter subject lines on Fridays to improve open rates by 3–5%.
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded bg-emerald-50 text-emerald-600 border border-emerald-100">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5L20 7"></path></svg>
</span>
                  Add a WhatsApp CTA to onboarding step 2 to lift replies.
                </li>
<li className="flex items-start gap-2">
<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded bg-amber-50 text-amber-600 border border-amber-100">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3"></path></svg>
</span>
                  Re-engage dormant users with a 2-step SMS + Email nudge.
                </li>
</ul>
</section>
</aside>
</div>
</main>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-[12px] text-slate-500 flex items-center justify-between">
<span>© 2025 Lead Magics. All rights reserved.</span>
<div className="inline-flex items-center gap-4">
<a className="hover:text-slate-700" href="#">Privacy</a>
<a className="hover:text-slate-700" href="#">Terms</a>
<a className="hover:text-slate-700" href="#">Support</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
