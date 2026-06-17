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
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Chart
      const ctx = document.getElementById("eloChart");
      if (ctx) {
        const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 180);
        gradient.addColorStop(0, "rgba(99,102,241,0.35)");
        gradient.addColorStop(1, "rgba(99,102,241,0.02)");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["M‑14","M‑13","M‑12","M‑11","M‑10","M‑9","M‑8","M‑7","M‑6","M‑5","M‑4","M‑3","M‑2","M‑1"],
            datasets: [{
              label: "ELO",
              data: [1910,1924,1938,1940,1965,1979,1986,1992,2011,2003,2024,2041,2056,2079],
              borderColor: "rgb(99,102,241)",
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: "index" } },
            scales: {
              x: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "rgba(255,255,255,0.6)", font: { size: 10 } } },
              y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "rgba(255,255,255,0.6)", font: { size: 10 } } }
            }
          }
        });
      }
    
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>ST</div>
<span className="text-sm sm:text-base text-white/90 group-hover:text-white transition-colors" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>Siege Ten</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#scheduling">Scheduling</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#leaderboard">Leaderboard</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#guidelines">Guidelines</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-white/10 text-sm text-white/80 hover:text-white hover:border-white/20 transition-colors" href="#requirements">
<i className="w-4 h-4" data-lucide="list-checks"></i>
              View Requirements
            </a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-sm text-neutral-900 font-medium transition-colors" href="#apply">
<i className="w-4 h-4" data-lucide="swords"></i>
              Apply to Join
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<img alt="" className="h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.20),transparent_70%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<i className="w-4 h-4" data-lucide="shield-check"></i>
              Curated. Competitive. Clean.
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
              Premium 10‑Man Siege. No drama — just competition.
            </h1>
<p className="text-white/70 text-base sm:text-lg max-w-2xl">
              Join a hand‑picked player pool with verified skill, active moderation, and balanced 10‑man (5v5) drafts. Zero tolerance for toxicity, griefing, or cheats.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 font-medium transition-colors" href="#apply">
<i className="w-5 h-5" data-lucide="rocket"></i>
                Start Your Application
              </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/10 hover:border-white/20 text-white/90 hover:text-white transition-colors" href="#requirements">
<i className="w-5 h-5" data-lucide="sparkles"></i>
                See How It Works
              </a>
<div className="flex items-center gap-3 text-xs text-white/60">
<div className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-400" data-lucide="badge-check"></i> Skill verified</div>
<div className="flex items-center gap-1.5"><i className="w-4 h-4 text-rose-400" data-lucide="ban"></i> Zero toxicity</div>
<div className="flex items-center gap-1.5"><i className="w-4 h-4 text-indigo-300" data-lucide="scales"></i> Balanced drafts</div>
</div>
</div>
</div>
<div className="lg:pl-8">

<div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 shadow-2xl shadow-indigo-900/10">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="clipboard-check"></i>
<h3 className="text-lg font-semibold tracking-tight">Application Snapshot</h3>
</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Avg. review: 24h</span>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3 p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="user-check"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Link Ubisoft Account</p>
<span className="text-xs text-white/60">Required</span>
</div>
<p className="text-xs text-white/60">We verify rank history, ban status, and match performance.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="target"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Skill Check (Gold+)</p>
<span className="text-xs text-white/60">Required</span>
</div>
<p className="text-xs text-white/60">Submit recent VOD or highlights to verify decision‑making &amp; comms.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="mic"></i>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Voice Comms &amp; Rules</p>
<span className="text-xs text-white/60">Required</span>
</div>
<p className="text-xs text-white/60">Agree to code of conduct. Zero tolerance for slurs, griefing, or sandbagging.</p>
</div>
</div>
<div className="flex items-center gap-3 pt-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 font-medium transition-colors" href="#apply">
<i className="w-4 h-4" data-lucide="send"></i>
                    Apply Now
                  </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/20 text-white/90 hover:text-white transition-colors" href="#requirements">
<i className="w-4 h-4" data-lucide="book-open-check"></i>
                    View Requirements
                  </a>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mt-4">
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] text-center">
<p className="text-xs text-white/60">Queue integrity</p>
<p className="text-sm font-medium">Check‑in + Captains</p>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] text-center">
<p className="text-xs text-white/60">Moderation</p>
<p className="text-sm font-medium">24/7 coverage</p>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.03] text-center">
<p className="text-xs text-white/60">Penalties</p>
<p className="text-sm font-medium">Infractions → bans</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-4 gap-6">
<div className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="award"></i>
<h3 className="text-base font-semibold tracking-tight">Curated Player Base</h3>
</div>
<p className="text-sm text-white/70">Invite‑only Gold+ pool with account and gameplay validation to ensure consistent, quality lobbies.</p>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="handshake"></i>
<h3 className="text-base font-semibold tracking-tight">Zero Toxicity</h3>
</div>
<p className="text-sm text-white/70">Clear code of conduct, report tooling, and active moderation. Repeat offenders removed swiftly.</p>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="layout-grid"></i>
<h3 className="text-base font-semibold tracking-tight">Balanced 10‑Man Drafts</h3>
</div>
<p className="text-sm text-white/70">Automated captains, role tags, and historical ELO produce fair 5v5 games with minimal queue times.</p>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="bar-chart-3"></i>
<h3 className="text-base font-semibold tracking-tight">Competitive Ranking</h3>
</div>
<p className="text-sm text-white/70">Seasonal ELO, role performance metrics, and streak protection beyond standard ranked.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-end justify-between mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Players who made the switch</h2>
<a className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors" href="#apply">Apply now</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="Player" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">“Scrim‑quality games.”</p>
<p className="text-xs text-white/60">@Jax — Champ IGL</p>
</div>
</div>
<p className="text-sm text-white/70">Queues are fast, drafts are fair, and comms are spotless. I’ve learned more here in 2 weeks than a month of ranked.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="Player" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">“Clean community.”</p>
<p className="text-xs text-white/60">@Nova — Support</p>
</div>
</div>
<p className="text-sm text-white/70">Moderation is active and fair. People are here to win and improve, not flame.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img alt="Player" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium">“Ranking that matters.”</p>
<p className="text-xs text-white/60">@Ryn — Flex</p>
</div>
</div>
<p className="text-sm text-white/70">The ELO is transparent, role‑aware, and rewards impact. Leaderboard actually reflects skill.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="requirements">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-5 gap-10">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">How it works</h2>
<p className="text-white/70 text-sm sm:text-base mb-6">Simple, fair, and designed for top‑tier lobbies.</p>
<div className="space-y-4">
<div className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="h-8 w-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-300" data-lucide="form-input"></i>
</div>
<div>
<p className="text-sm font-medium">1) Apply</p>
<p className="text-sm text-white/70">Link Ubisoft, submit clips, confirm comms. Avg review 24 hours.</p>
</div>
</div>
<div className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="h-8 w-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-300" data-lucide="scan-face"></i>
</div>
<div>
<p className="text-sm font-medium">2) Verify</p>
<p className="text-sm text-white/70">We confirm rank history, ban status, and recent form.</p>
</div>
</div>
<div className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="h-8 w-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-300" data-lucide="users"></i>
</div>
<div>
<p className="text-sm font-medium">3) Queue &amp; Draft</p>
<p className="text-sm text-white/70">Check‑in, captains draft, we balance by role &amp; ELO. Ready‑checks prevent dodges.</p>
</div>
</div>
<div className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="h-8 w-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-300" data-lucide="trophy"></i>
</div>
<div>
<p className="text-sm font-medium">4) Win &amp; Climb</p>
<p className="text-sm text-white/70">ELO gains reflect impact, consistency, and opponent strength.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3">
<h3 className="text-xl font-semibold tracking-tight mb-4">Entry requirements</h3>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="rank"></i>
<p className="text-sm font-medium">Minimum Rank</p>
</div>
<span className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Gold+</span>
</div>
<p className="text-sm text-white/70">Recent season proof required. Exceptions for strong VODs.</p>
</div>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="video"></i>
<p className="text-sm font-medium">VOD or Highlights</p>
</div>
<p className="text-sm text-white/70">1–2 recent matches. Focus on decision‑making, utility, and comms.</p>
</div>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="id-card"></i>
<p className="text-sm font-medium">Account Integrity</p>
</div>
<p className="text-sm text-white/70">No recent bans, smurfing, or boosting behavior.</p>
</div>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="radio"></i>
<p className="text-sm font-medium">Voice Comms</p>
</div>
<p className="text-sm text-white/70">Mic required. All matches use structured comms channels.</p>
</div>
</div>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 font-medium transition-colors" href="#apply">
<i className="w-4 h-4" data-lucide="square-pen"></i>
                Start Your Application
              </a>
<span className="text-xs text-white/60">Average approval time: 24–48 hours</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="scheduling">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Match scheduling &amp; queue</h2>
<p className="text-white/70 text-sm sm:text-base mb-6">Queue windows posted daily. Check‑in, ready‑up, and draft begins. Missed ready‑checks lead to penalties.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="calendar"></i>
<span className="text-sm text-white/80">Daily 10‑man windows: EU / NA prime time</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="alarm-clock"></i>
<span className="text-sm text-white/80">5‑min check‑in, 60‑sec ready‑check, instant drafts</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="brain-circuit"></i>
<span className="text-sm text-white/80">Role tags + ELO balance algorithm</span>
</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="clock-8"></i>
<p className="text-sm font-medium">Tonight’s Queue — NA</p>
</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Open</span>
</div>
<div className="grid sm:grid-cols-3 gap-3 mb-4">
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<p className="text-xs text-white/60 mb-1">Queue Opens</p>
<p className="text-sm font-medium">7:00 PM</p>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<p className="text-xs text-white/60 mb-1">Check‑In</p>
<p className="text-sm font-medium">7:55 PM</p>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<p className="text-xs text-white/60 mb-1">Draft</p>
<p className="text-sm font-medium">8:00 PM</p>
</div>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-white/[0.02] mb-4">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60">Players Ready</p>
<p className="text-xs text-white/60">8 / 10</p>
</div>
<div className="mt-2 h-2 rounded bg-white/5 overflow-hidden">
<div className="h-full w-4/5 bg-indigo-500"></div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 text-sm font-medium transition-colors">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                Check‑In
              </button>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/20 text-white/90 text-sm transition-colors">
<i className="w-4 h-4" data-lucide="bell-ring"></i>
                Notify me
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="leaderboard">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<div className="flex items-end justify-between mb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Leaderboard</h2>
<a className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors" href="#apply">Climb the ladder</a>
</div>
<div className="rounded-xl border border-white/10 overflow-hidden">
<div className="grid grid-cols-12 bg-white/[0.03] px-4 py-2 text-xs text-white/60">
<div className="col-span-6">Player</div>
<div className="col-span-2 text-right">ELO</div>
<div className="col-span-2 text-right">W/L</div>
<div className="col-span-2 text-right">Role</div>
</div>
<ul className="divide-y divide-white/10">

<li className="px-4 py-3 grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-6 flex items-center gap-3">
<img alt="player" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">RogueAxiom</p>
<p className="text-xs text-white/60">Champ • NA</p>
</div>
</div>
<div className="col-span-2 text-right text-sm font-medium">2142</div>
<div className="col-span-2 text-right text-sm">63–21</div>
<div className="col-span-2 text-right">
<span className="text-[10px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Flex</span>
</div>
</li>
<li className="px-4 py-3 grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-6 flex items-center gap-3">
<img alt="player" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Kiro</p>
<p className="text-xs text-white/60">Diamond • EU</p>
</div>
</div>
<div className="col-span-2 text-right text-sm font-medium">2079</div>
<div className="col-span-2 text-right text-sm">51–18</div>
<div className="col-span-2 text-right">
<span className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">IGL</span>
</div>
</li>
<li className="px-4 py-3 grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors">
<div className="col-span-6 flex items-center gap-3">
<img alt="player" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Lumi</p>
<p className="text-xs text-white/60">Diamond • NA</p>
</div>
</div>
<div className="col-span-2 text-right text-sm font-medium">2031</div>
<div className="col-span-2 text-right text-sm">49–22</div>
<div className="col-span-2 text-right">
<span className="text-[10px] px-2 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">Entry</span>
</div>
</li>
</ul>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-300" data-lucide="activity"></i>
<p className="text-sm font-medium">ELO Trend (Sample)</p>
</div>
<span className="text-xs text-white/60">Last 14 matches</span>
</div>
<div className="h-44">
<div className="h-full w-full">
<canvas id="eloChart"></canvas>
</div>
</div>
<p className="mt-3 text-xs text-white/60">Transparent scoring: opponent strength, round diff, and clutch impact.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="guidelines">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Community guidelines</h2>
<p className="text-white/70 text-sm sm:text-base mb-6">Built for serious competitors who value fair play.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-300 mt-0.5" data-lucide="ban"></i>
<div>
<p className="text-sm font-medium">Zero tolerance policy</p>
<p className="text-sm text-white/70">Harassment, slurs, griefing, stream sniping, or cheating result in immediate removal.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-300 mt-0.5" data-lucide="message-square-warning"></i>
<div>
<p className="text-sm font-medium">Strike system</p>
<p className="text-sm text-white/70">Infractions lead to escalating penalties and season bans.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-300 mt-0.5" data-lucide="radio"></i>
<div>
<p className="text-sm font-medium">Structured comms</p>
<p className="text-sm text-white/70">Use match channels. Keep comms concise, respectful, and in‑game.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-300 mt-0.5" data-lucide="scales"></i>
<div>
<p className="text-sm font-medium">Fair drafts</p>
<p className="text-sm text-white/70">No sandbagging or role dodging. Captains are rotated and audited.</p>
</div>
</li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="file-check-2"></i>
<h3 className="text-base font-semibold tracking-tight">Code of Conduct</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<span className="text-sm">Respect teammates and opponents</span>
<span className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Mandatory</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<span className="text-sm">No third‑party cheats or macros</span>
<span className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Mandatory</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<span className="text-sm">Follow admin rulings</span>
<span className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Mandatory</span>
</div>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 text-sm font-medium transition-colors" href="#apply">
<i className="w-4 h-4" data-lucide="handshake"></i>
                I agree — Apply now
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="apply">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Start your application</h2>
<p className="text-white/70 text-sm sm:text-base mb-6">Takes about 3–5 minutes. We’ll email you once reviewed.</p>
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/60 mb-1">Email</label>
<input className="w-full px-3 py-2 rounded-md bg-white/[0.02] border border-white/10 outline-none focus:border-indigo-400/40 focus:ring-0 text-sm placeholder:text-white/30" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Discord</label>
<input className="w-full px-3 py-2 rounded-md bg-white/[0.02] border border-white/10 outline-none focus:border-indigo-400/40 focus:ring-0 text-sm placeholder:text-white/30" placeholder="user#0001" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/60 mb-1">Ubisoft ID</label>
<input className="w-full px-3 py-2 rounded-md bg-white/[0.02] border border-white/10 outline-none focus:border-indigo-400/40 focus:ring-0 text-sm placeholder:text-white/30" placeholder="UbisoftName" type="text"/>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Region</label>
<select className="w-full px-3 py-2 rounded-md bg-white/[0.02] border border-white/10 outline-none focus:border-indigo-400/40 focus:ring-0 text-sm text-white/90">
<option className="bg-neutral-900">NA</option>
<option className="bg-neutral-900">EU</option>
<option className="bg-neutral-900">LATAM</option>
<option className="bg-neutral-900">APAC</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Recent VOD/Highlights URL</label>
<input className="w-full px-3 py-2 rounded-md bg-white/[0.02] border border-white/10 outline-none focus:border-indigo-400/40 focus:ring-0 text-sm placeholder:text-white/30" placeholder="https://..." type="url"/>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Primary Role</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<button className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 text-sm text-white/90 hover:text-white transition-colors" type="button">Entry</button>
<button className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 text-sm text-white/90 hover:text-white transition-colors" type="button">Flex</button>
<button className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 text-sm text-white/90 hover:text-white transition-colors" type="button">Support</button>
<button className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 text-sm text-white/90 hover:text-white transition-colors" type="button">IGL</button>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="w-4 h-4 text-indigo-300" data-lucide="shield"></i>
                By applying you agree to our code of conduct and verification checks.
              </div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 text-sm font-medium transition-colors">
<i className="w-4 h-4" data-lucide="send"></i>
                  Submit Application
                </button>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#guidelines">Review guidelines</a>
</div>
</form>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 h-fit">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="shield-alert"></i>
<p className="text-sm font-medium">Anti‑Cheat &amp; Fair Play</p>
</div>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-300 mt-0.5" data-lucide="scan-search"></i>
<span>Account checks: ban history, suspicious alt activity, abnormal stat spikes.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-amber-300 mt-0.5" data-lucide="file-warning"></i>
<span>Match reviews for griefing, sandbagging, and persistent AFK.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-rose-300 mt-0.5" data-lucide="gavel"></i>
<span>Appeals process with evidence; repeat offenders permanently banned.</span>
</li>
</ul>
<div className="mt-4 p-3 rounded-lg border border-white/10 bg-white/[0.02]">
<p className="text-xs text-white/60">Questions? See FAQ or reach admins in Discord after applying.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">FAQ</h2>
<div className="grid md:grid-cols-2 gap-6">
<details className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm font-medium">What are the minimum skill requirements?</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Gold+ recent season. Strong clips or team endorsements can offset borderline ranks.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm font-medium">How do you balance teams?</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">We factor ELO, role tags, recent form, and party restrictions to minimize stomps.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm font-medium">What anti‑cheat measures are in place?</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Account verification, pattern analysis, admin reviews, and fast ban escalation keep lobbies clean.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm font-medium">Is there a fee?</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Core access is free for approved players. Optional premium perks may be offered seasonally.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm font-medium">Which regions do you support?</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">NA and EU at launch; LATAM/APAC based on demand and moderator coverage.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm font-medium">How long does approval take?</span>
<i className="w-4 h-4 text-white/60" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">Typically 24–48 hours. Applications with clear VODs are fastest.</p>
</details>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1">Ready to leave ranked chaos behind?</h3>
<p className="text-sm text-white/70">Join a community that plays to improve — and to win.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-neutral-900 text-sm font-medium transition-colors" href="#apply">
<i className="w-4 h-4" data-lucide="swords"></i>
              Apply to Join
            </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/10 hover:border-white/20 text-white/90 text-sm transition-colors" href="#requirements">
<i className="w-4 h-4" data-lucide="list-checks"></i>
              View Requirements
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>ST</div>
<span className="text-sm text-white/60">© <span id="year"></span> Siege Ten</span>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-white/60 hover:text-white transition-colors" href="#guidelines">Guidelines</a>
<a className="text-white/60 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-white/60 hover:text-white transition-colors" href="#apply">Apply</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
