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
      
      // Icons
      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      });

      // Chart
      const ctx = document.getElementById('replyChart');
      if (ctx) {
        const replyChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Before', 'After'],
            datasets: [{
              label: 'Reply Rate (%)',
              data: [22, 54],
              backgroundColor: ['#64748b', '#34d399'],
              borderColor: ['#94a3b8', '#10b981'],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            scales: {
              y: {
                beginAtZero: true,
                suggestedMax: 60,
                ticks: { color: '#cbd5e1', font: { size: 10 } },
                grid: { color: 'rgba(148,163,184,0.15)' }
              },
              x: {
                ticks: { color: '#cbd5e1', font: { size: 10 } },
                grid: { display: false }
              }
            }
          }
        });
      }

      // ROI calculator
      const callsEl = document.getElementById('calls');
      const missRateEl = document.getElementById('missRate');
      const upliftEl = document.getElementById('uplift');
      const dealEl = document.getElementById('deal');

      const missRateVal = document.getElementById('missRateVal');
      const upliftVal = document.getElementById('upliftVal');

      const missedCallsEl = document.getElementById('missedCalls');
      const newWAEl = document.getElementById('newWA');
      const dealsEl = document.getElementById('deals');
      const revenueEl = document.getElementById('revenue');

      function formatCurrency(v) {
        return '$' + v.toLocaleString();
      }

      function recalc() {
        const calls = parseFloat(callsEl.value || 0);
        const missRate = parseFloat(missRateEl.value || 0) / 100;
        const uplift = parseFloat(upliftEl.value || 0) / 100;
        const deal = parseFloat(dealEl.value || 0);

        const missed = Math.round(calls * missRate);
        const newWA = Math.round(missed * uplift);
        const convRate = 0.25; // assumed
        const deals = Math.round(newWA * convRate);
        const rev = deals * deal;

        missedCallsEl.textContent = missed.toLocaleString();
        newWAEl.textContent = newWA.toLocaleString();
        dealsEl.textContent = deals.toLocaleString();
        revenueEl.textContent = formatCurrency(rev);
      }

      [callsEl, missRateEl, upliftEl, dealEl].forEach(el => el && el.addEventListener('input', () => {
        if (el === missRateEl) missRateVal.textContent = missRateEl.value;
        if (el === upliftEl) upliftVal.textContent = upliftEl.value;
        recalc();
      }));
      recalc();

      // Toggles
      const toggleAvailability = document.getElementById('toggleAvailability');
      const knob = document.getElementById('knob');
      let availOn = true;
      toggleAvailability && toggleAvailability.addEventListener('click', () => {
        availOn = !availOn;
        knob.style.transform = availOn ? 'translateX(0.25rem)' : 'translateX(1.25rem)';
      });

      const offlineToggle = document.getElementById('offlineToggle');
      const offlineKnob = document.getElementById('offlineKnob');
      let offlineOn = true;
      offlineToggle && offlineToggle.addEventListener('click', () => {
        offlineOn = !offlineOn;
        offlineKnob.style.transform = offlineOn ? 'translateX(0.25rem)' : 'translateX(1.25rem)';
      });

      // Demo modal
      const demoModal = document.getElementById('demoModal');
      const openDemo = document.getElementById('openDemo');
      const closeDemo = document.getElementById('closeDemo');
      openDemo && openDemo.addEventListener('click', () => demoModal.classList.remove('hidden'));
      closeDemo && closeDemo.addEventListener('click', () => demoModal.classList.add('hidden'));
      demoModal && demoModal.addEventListener('click', (e) => {
        if (e.target === demoModal) demoModal.classList.add('hidden');
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tight">MF</span>
</div>
<div className="text-sm font-semibold tracking-tight text-slate-200">MENFUL</div>
<span className="hidden sm:inline text-xs text-slate-400/70 border-l border-white/10 pl-3">Auto WhatsApp for Missed Calls</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#how">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline text-sm text-slate-300 hover:text-white transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3.5 py-2 text-sm font-medium hover:bg-slate-200 active:bg-slate-300 transition-colors shadow-sm ring-1 ring-black/10" href="#cta">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Start free
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-x-0 top-[-20%] h-[600px] bg-[radial-gradient(90%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/30">
<i className="w-3.5 h-3.5 text-indigo-300" data-lucide="message-circle"></i>
</span>
              New: Auto-WhatsApp follow-ups for unanswered calls
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Turn missed calls into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300">WhatsApp conversations</span>
</h1>
<p className="mt-5 text-base sm:text-lg text-slate-300">
              35–40% of inbound calls go unanswered. Menful automatically sends a WhatsApp follow-up, routes replies to the right agent, and respects real-time availability—no more awkward “office hours” auto-replies when your team is online.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500/90 hover:bg-indigo-400 active:bg-indigo-300 px-5 py-3 text-sm font-medium text-white ring-1 ring-inset ring-indigo-300/30 transition" href="#pricing" id="cta">
<i className="w-4 h-4" data-lucide="bolt"></i>
                Start free trial
              </a>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/20 px-5 py-3 text-sm text-slate-200 transition" id="openDemo" type="button">
<i className="w-4 h-4" data-lucide="play"></i>
                Watch demo
              </button>
</div>
<div className="mt-6 flex items-center gap-6 text-xs text-slate-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i>
                Works with cloud telephony
              </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="whatsapp"></i>
                WhatsApp Business API
              </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plug"></i>
                CRM & Helpdesk integrations
              </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-2xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-5 shadow-2xl">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-200">Automation Preview</div>
<span className="text-[10px] text-slate-400">real-time</span>
</div>
<div className="mt-4 grid gap-4">
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-500/20 ring-1 ring-indigo-400/30 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-indigo-300" data-lucide="phone-off"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Missed Call Detected</div>
<div className="text-xs text-slate-400">+2010 234 567 — 09:41</div>
</div>
</div>
<div className="text-[10px] text-slate-400">trigger</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="message-square"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">WhatsApp Follow-up</div>
<div className="text-xs text-slate-400">“Sorry we missed you. Can we help here?”</div>
</div>
</div>
<div className="text-[10px] text-slate-400">action</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-sky-500/15 ring-1 ring-sky-400/30 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-sky-300" data-lucide="clock"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Availability-aware</div>
<div className="text-xs text-slate-400">Uses live agent status, not fixed hours</div>
</div>
</div>
<div className="text-[10px] text-slate-400">smart</div>
</div>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-300">Reply rate uplift</div>
<div className="text-xs text-emerald-300">+32%</div>
</div>
<div className="mt-2">
<div>
<div className="h-40 w-full overflow-hidden rounded-md border border-white/10 bg-slate-950/40">
<div className="p-3">
<h3 className="text-sm font-medium text-slate-200">Before vs After</h3>
<p className="text-xs text-slate-400">Auto-WhatsApp follow-ups increase responses</p>
<div className="mt-2">
<div className="relative">
<div className="rounded-md bg-slate-900/60 p-3">
<div className="relative h-28">
<div className="h-full w-full">
<div className="relative h-full">
<div>
<div className="h-24 w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="relative h-24">
<canvas className="!h-24 !w-full" id="replyChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<img alt="customer" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" />
<div className="text-xs">
<div className="text-slate-200">“Got a reply in 2 minutes.”</div>
<div className="text-slate-400">Customer via WhatsApp</div>
</div>
</div>
<div className="text-[10px] text-emerald-300">live</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" id="solutions">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 md:p-8">
<div className="grid md:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">What you said</h2>
<ul className="mt-4 space-y-3 text-sm text-slate-300">
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-amber-300 shrink-0 mt-0.5" data-lucide="alert-triangle"></i>
                Critical stability issues: mobile crashes, call failures, voice clarity
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-amber-300 shrink-0 mt-0.5" data-lucide="turtle"></i>
                UX friction: slow portal, editing limitations
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-amber-300 shrink-0 mt-0.5" data-lucide="ban"></i>
                Inability to build WhatsApp workflows and automations
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-amber-300 shrink-0 mt-0.5" data-lucide="clock"></i>
                Fixed-hours auto-responses don’t match real agent availability
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-amber-300 shrink-0 mt-0.5" data-lucide="moon"></i>
                Need automatic messages after working hours
              </li>
</ul>
</div>
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">How Menful helps</h3>
<ul className="mt-4 space-y-3 text-sm text-slate-300">
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-emerald-300 shrink-0 mt-0.5" data-lucide="message-square"></i>
                Auto-WhatsApp follow-ups on missed calls to boost conversion instantly
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-emerald-300 shrink-0 mt-0.5" data-lucide="workflow"></i>
                Visual workflow builder for WhatsApp with templates, delays, and conditions
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-emerald-300 shrink-0 mt-0.5" data-lucide="clock"></i>
                Availability-aware auto-replies powered by live agent status, not static hours
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-emerald-300 shrink-0 mt-0.5" data-lucide="plug"></i>
                CRM + WhatsApp + Telephony integrations: sync contacts, tags, and outcomes
              </li>
<li className="flex gap-3">
<i className="w-4.5 h-4.5 text-emerald-300 shrink-0 mt-0.5" data-lucide="shield-check"></i>
                Reliability-first core: resilient delivery, retry logic, quality monitoring
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="features">
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-5 h-5 text-indigo-300" data-lucide="phone-off"></i>
<h4 className="text-lg font-semibold tracking-tight">Auto-follow-up for missed calls</h4>
</div>
<p className="mt-2 text-sm text-slate-300">Detect unanswered calls and send a WhatsApp template within seconds. Personalize using caller ID, last agent, and queue.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="zap"></i>
            Typical reply lift: 25–40%
          </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-5 h-5 text-indigo-300" data-lucide="clock"></i>
<h4 className="text-lg font-semibold tracking-tight">Availability-aware auto-response</h4>
</div>
<p className="mt-2 text-sm text-slate-300">Stop sending “we’re closed” when agents are online. Menful uses real-time presence, calendar events, and queues.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Override fixed hours with live status
          </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-5 h-5 text-indigo-300" data-lucide="workflow"></i>
<h4 className="text-lg font-semibold tracking-tight">WhatsApp workflow builder</h4>
</div>
<p className="mt-2 text-sm text-slate-300">Drag conditions, A/B tests, delays, templates—build flows in minutes. Route to sales, HR, or success teams automatically.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="list-tree"></i>
            Visual, auditable, and fast
          </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-5 h-5 text-indigo-300" data-lucide="bot"></i>
<h4 className="text-lg font-semibold tracking-tight">Phonebot that feels human</h4>
</div>
<p className="mt-2 text-sm text-slate-300">Natural voice control, interruption handling, and seamless CRM/WA integration—so your team keeps context.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="mic"></i>
            Works across inbound and outbound
          </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-5 h-5 text-indigo-300" data-lucide="plug"></i>
<h4 className="text-lg font-semibold tracking-tight">Integrations that matter</h4>
</div>
<p className="mt-2 text-sm text-slate-300">Connect your telephony, WhatsApp Business API, and CRM. Sync tags, owners, and dispositions both ways.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="webhook"></i>
            Webhooks and events out-of-the-box
          </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-5 h-5 text-indigo-300" data-lucide="shield-check"></i>
<h4 className="text-lg font-semibold tracking-tight">Reliability, speed, clarity</h4>
</div>
<p className="mt-2 text-sm text-slate-300">Resilient delivery engine with retries, message dedupe, and live quality monitors—built to avoid crashes and call failures.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="activity"></i>
            Observability & alerts included
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10" id="how">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Flow Builder (Preview)</h3>
<div className="flex items-center gap-3">
<button className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 hover:bg-slate-900" id="toggleAvailability">
<span className="h-4 w-7 rounded-full bg-slate-800 ring-1 ring-white/10 relative inline-flex items-center">
<span className="h-3 w-3 rounded-full bg-emerald-400 translate-x-1 transition-transform" id="knob"></span>
</span>
                Use real-time availability
              </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
                Save
              </button>
</div>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-4.5 h-4.5 text-indigo-300" data-lucide="phone-off"></i>
<div className="font-medium">Missed Call</div>
</div>
<p className="mt-2 text-xs text-slate-400">Triggers when a call rings out or is rejected.</p>
</div>
<div className="flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="message-square"></i>
<div className="font-medium">Send WhatsApp Template</div>
</div>
<div className="mt-2 text-xs text-slate-400">Template: Missed_Call_Apology</div>
<div className="mt-3 rounded-md border border-white/10 bg-slate-900/60 p-2 text-xs text-slate-300">
                “Sorry we missed your call. Can we assist here on WhatsApp?”
              </div>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-4.5 h-4.5 text-sky-300" data-lucide="clock"></i>
<div className="font-medium">If Agent Available</div>
</div>
<p className="mt-2 text-xs text-slate-400">Route to last agent or skill group.</p>
</div>
<div className="flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-4.5 h-4.5 text-violet-300" data-lucide="inbox"></i>
<div className="font-medium">Assign Conversation</div>
</div>
<p className="mt-2 text-xs text-slate-400">Escalate to queue with SLA timers.</p>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-4.5 h-4.5 text-rose-300" data-lucide="bell-off"></i>
<div className="font-medium">If No Agent</div>
</div>
<p className="mt-2 text-xs text-slate-400">Send after-hours friendly message.</p>
</div>
<div className="flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2 text-slate-200">
<i className="w-4.5 h-4.5 text-amber-300" data-lucide="sandwich"></i>
<div className="font-medium">Send After-hours Template</div>
</div>
<div className="mt-3 rounded-md border border-white/10 bg-slate-900/60 p-2 text-xs text-slate-300">
                “We’re currently away. Share details and we’ll reply first thing in the morning.”
              </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h4 className="text-lg font-semibold tracking-tight">Smart hours</h4>
<p className="mt-1 text-xs text-slate-400">Hybrid logic combines business hours, live presence, and holidays.</p>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-slate-950/40 p-3">
<div className="text-sm text-slate-200">Business hours</div>
<div className="text-xs text-slate-400">09:00–18:00</div>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-slate-950/40 p-3">
<div className="text-sm text-slate-200">Live agent status</div>
<div className="text-xs text-emerald-300">3 online</div>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-slate-950/40 p-3">
<div className="text-sm text-slate-200">Holiday calendar</div>
<div className="text-xs text-amber-300">Auto-detected</div>
</div>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">Message when offline</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-800 ring-1 ring-white/10 transition" id="offlineToggle">
<span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-rose-400 transition-transform" id="offlineKnob"></span>
</button>
</div>
<div className="mt-3">
<textarea className="w-full rounded-md border border-white/10 bg-slate-900/60 p-3 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Type the after-hours WhatsApp message..." rows="3">We’re currently away. Share your name and request; we’ll follow up at opening time.</textarea>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 md:p-8">
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Estimate your lift</h3>
<p className="mt-2 text-sm text-slate-300">Use your call volume and missed rate to project additional WhatsApp conversations and deals.</p>
<div className="mt-6 space-y-5">
<div>
<label className="text-xs text-slate-400">Monthly inbound calls</label>
<input className="mt-2 w-full rounded-md border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="calls" min="0" type="number" value="2000" />
</div>
<div>
<label className="text-xs text-slate-400">Missed call rate (%)</label>
<input className="mt-2 w-full appearance-none h-2 rounded-full bg-slate-800 ring-1 ring-white/10" id="missRate" max="100" min="0" type="range" value="38" />
<div className="mt-1 text-xs text-slate-400"><span id="missRateVal">38</span>%</div>
</div>
<div>
<label className="text-xs text-slate-400">Reply rate uplift from auto-WA (%)</label>
<input className="mt-2 w-full appearance-none h-2 rounded-full bg-slate-800 ring-1 ring-white/10" id="uplift" max="100" min="0" type="range" value="30" />
<div className="mt-1 text-xs text-slate-400"><span id="upliftVal">30</span>%</div>
</div>
<div>
<label className="text-xs text-slate-400">Avg deal value (USD)</label>
<input className="mt-2 w-full rounded-md border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="deal" min="0" type="number" value="40" />
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<h4 className="text-lg font-semibold tracking-tight">Your projection</h4>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs text-slate-400">Missed calls</div>
<div className="mt-1 text-2xl font-semibold" id="missedCalls">760</div>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs text-slate-400">New WA conversations</div>
<div className="mt-1 text-2xl font-semibold text-emerald-300" id="newWA">228</div>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs text-slate-400">Extra deals/mo</div>
<div className="mt-1 text-2xl font-semibold" id="deals">57</div>
</div>
<div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs text-slate-400">Projected revenue</div>
<div className="mt-1 text-2xl font-semibold text-emerald-300" id="revenue">$2,280</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-400">Assumes WhatsApp reply-to-deal conversion rate of 25% (adjustable on request).</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10" id="pricing">
<h3 className="text-3xl font-semibold tracking-tight text-center">Simple, usage-based pricing</h3>
<p className="mt-2 text-center text-sm text-slate-400">Start free. Scale as you grow.</p>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="text-sm font-medium text-slate-200">Starter</div>
<div className="mt-2 text-3xl font-semibold">$0</div>
<div className="text-xs text-slate-400">+ WA API costs</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> 500 auto-Follow-ups/mo</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> 1 WhatsApp number</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Basic templates</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-slate-200 transition" href="#contact">Get started</a>
</div>
<div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-6 ring-1 ring-inset ring-indigo-400/20">
<div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] text-indigo-200 ring-1 ring-indigo-300/30">Popular</div>
<div className="mt-2 text-sm font-medium text-slate-200">Growth</div>
<div className="mt-2 text-3xl font-semibold">$149</div>
<div className="text-xs text-slate-300">+ WA API costs</div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> 5,000 auto-Follow-ups/mo</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> 3 numbers, round-robin routing</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Workflow builder + conditions</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> CRM integration + tags</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-400 px-4 py-2.5 text-sm font-medium text-white transition" href="#contact">Start trial</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
<div className="text-sm font-medium text-slate-200">Scale</div>
<div className="mt-2 text-3xl font-semibold">Custom</div>
<div className="text-xs text-slate-400">Everything + SLAs</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Unlimited follow-ups</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Advanced routing & phonebot</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Dedicated support & SSO</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-slate-200 transition" href="#contact">Talk to sales</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10" id="faq">
<h3 className="text-3xl font-semibold tracking-tight text-center">Frequently asked questions</h3>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="shield"></i>
<div>
<div className="font-medium text-slate-200">Will this work with our existing telephony?</div>
<p className="mt-1 text-sm text-slate-300">Yes. We listen to missed-call events via integrations or webhooks, then trigger WhatsApp using your approved templates.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="settings-2"></i>
<div>
<div className="font-medium text-slate-200">Can we use live agent availability instead of fixed hours?</div>
<p className="mt-1 text-sm text-slate-300">Absolutely. Presence from the dialer or helpdesk can drive auto-responses so messages match reality.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="wand-2"></i>
<div>
<div className="font-medium text-slate-200">How fast are follow-ups sent?</div>
<p className="mt-1 text-sm text-slate-300">Typically within 5–15 seconds, with retries and deduplication to avoid spam.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="file-text"></i>
<div>
<div className="font-medium text-slate-200">Do you support WhatsApp templates?</div>
<p className="mt-1 text-sm text-slate-300">Yes—message templates with variables, locales, and approvals are included.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10" id="contact">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-2xl font-semibold tracking-tight">Let’s increase your conversion</h3>
<p className="mt-2 text-sm text-slate-300">Share your setup, we’ll configure a pilot in days.</p>
<form className="mt-6 space-y-4">
<div>
<label className="text-xs text-slate-400">Work email</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="you@company.com" type="email" />
</div>
<div>
<label className="text-xs text-slate-400">Company</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Company Inc." type="text" />
</div>
<div>
<label className="text-xs text-slate-400">What pains are you solving?</label>
<textarea className="mt-1 w-full rounded-md border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="e.g., automate WhatsApp follow-ups for missed calls, real-time availability, workflows..." rows="4"></textarea>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-slate-200 active:bg-slate-300 transition ring-1 ring-black/10" type="button">
<i className="w-4 h-4" data-lucide="send"></i>
              Request demo
            </button>
</form>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10">
<img alt="Operations" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-white/10 backdrop-blur p-4">
<div className="flex items-center gap-3">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="target"></i>
<div className="text-sm font-medium">Auto WhatsApp after missed calls increases conversion massively.</div>
</div>
<p className="mt-1 text-xs text-slate-200">Teams report faster replies, fewer lost leads, and happier customers—even after hours.</p>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[10px] font-semibold tracking-tight">MF</span>
</div>
<div className="text-xs text-slate-400">© 2025 Menful. All rights reserved.</div>
</div>
<div className="flex items-center gap-5 text-xs text-slate-400">
<a className="hover:text-white transition" href="#privacy">Privacy</a>
<a className="hover:text-white transition" href="#terms">Terms</a>
<a className="hover:text-white transition" href="#security">Security</a>
</div>
</div>
</footer>

<div className="fixed inset-0 hidden items-center justify-center bg-black/60 p-4" id="demoModal">
<div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-950">
<div className="flex items-center justify-between p-4 border-b border-white/10">
<div className="text-sm font-medium">Product Demo</div>
<button className="p-2 rounded-md hover:bg-white/5" id="closeDemo">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="aspect-video">
<iframe allowfullscreen="" className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo"></iframe>
</div>
<div className="p-4 border-t border-white/10 text-xs text-slate-400">Quick tour of auto-WhatsApp follow-ups, availability logic, and workflow builder.</div>
</div>
</div>


    </>
  );
}
