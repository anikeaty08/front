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



      // Initialize icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

        // Smooth in-page nav for "How it works" and "Business Tools" (prevents full-page navigation)
        document.querySelectorAll('a[href="#how"], a[href="#business"]').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.replaceState(null, '', '#' + id);
            }
          });
        });
      });

      // Time range label
      const range = document.getElementById('timeRange');
      const timeLabel = document.getElementById('timeLabel');
      range?.addEventListener('input', () => {
        timeLabel.textContent = `${range.value} min`;
      });

      // Vibe chips selection
      const chips = document.querySelectorAll('.vibe-chip');
      let selectedVibe = null;
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('ring-2','ring-violet-400/40','bg-white/10'));
          chip.classList.add('ring-2','ring-violet-400/40','bg-white/10');
          selectedVibe = chip.getAttribute('data-vibe');
        });
      });

      // Generate tiny trip mock
      const generateBtn = document.getElementById('generateTrip');
      const resultList = document.getElementById('resultList');
      const resultTime = document.getElementById('resultTime');
      const resultVibe = document.getElementById('resultVibe');
      const startInput = document.getElementById('startInput');
      const ctaTop = document.getElementById('cta-generate-top');

      function createCard(title, desc, img, eta) {
        const wrapper = document.createElement('div');
        wrapper.className = 'rounded-lg border border-white/10 bg-zinc-900/60 p-3';
        wrapper.innerHTML = `
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium">${title}</p>
            <span class="text-xs text-zinc-400">${eta}</span>
          </div>
          <p class="text-xs text-zinc-400 mt-1">${desc}</p>
          <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="mt-2 h-28 w-full object-cover rounded-md ring-1 ring-white/10" />
        `;
        return wrapper;
      }

      function generate() {
        const vibe = selectedVibe || 'Curious';
        const time = range.value;
        const area = startInput.value || 'near you';
        const bank = [
          ['Third Wave Coffee', 'Single‑origin pour over, sunlight, playlists that never miss.', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop'],
          ['Hidden Arcade', 'Retro cabinets and pinball. 15 minute nostalgia hit.', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'],
          ['Pocket Park', 'Lay back under a tree. Micro‑escape from the feed.', 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop'],
          ['Vinyl Nook', 'Flip through staff picks. Leave with a story.', 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop'],
          ['Gallery Turn', 'Two rooms, zero overwhelm. Fresh perspective in 20.', 'https://images.unsplash.com/photo-1520962913830-5a810fda9664?q=80&w=1200&auto=format&fit=crop']
        ];
        const picks = bank.sort(() => 0.5 - Math.random()).slice(3);
        resultList.innerHTML = '';
        resultTime.textContent = `${time} min · ${vibe} · ${area}`;
        resultVibe.textContent = 'We’ll book holds and adjust in real time if anything changes.';
        let t = 10;
        picks.forEach((p, idx) => {
          const card = createCard(p[0], p[1], p[2], `${idx === 0 ? 'Now' : `+${t} min`}`);
          setTimeout(() => resultList.appendChild(card), idx * 180);
          t += 25;
        });
      }

      generateBtn?.addEventListener('click', generate);
      ctaTop?.addEventListener('click', () => {
        document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => generateBtn?.click(), 600);
      });

      // Demand chart
      const ctx = document.getElementById('demandChart')?.getContext('2d');
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 180);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
            datasets: [
              {
                label: 'Featured visits',
                data: [120, 160, 155, 210, 240, 260, 255, 290],
                fill: true,
                backgroundColor: gradient,
                borderColor: 'rgba(139, 92, 246, 0.9)',
                pointRadius: 0,
                tension: 0.35
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(24,24,27,0.95)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: 'rgba(228,228,231,1)',
                padding: 10
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: 'rgba(212,212,216,0.8)', font: { family: 'Inter' } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: 'rgba(212,212,216,0.8)', font: { family: 'Inter' } }
              }
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(124,58,237,0.15),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_20%,rgba(14,165,233,0.1),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_50%_100%,rgba(34,197,94,0.06),transparent)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.6),rgba(10,10,12,0.95))]"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/5 bg-zinc-950/60">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500/80 to-sky-400/80 grid place-items-center ring-1 ring-white/10">
<span className="text-[12px] font-semibold tracking-tight text-white">CH</span>
</div>
<span className="text-xl font-semibold tracking-tight">Chalo</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-zinc-300 hover:text-white transition-colors" href="#product"></a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#how">How it works</a>

<a className="text-zinc-300 hover:text-white transition-colors" href="#business">Business Tools</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-colors">
<i className="h-4 w-4" data-lucide="play-circle"></i>
            Watch demo
          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-zinc-900 px-3.5 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
            Get early access
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</header>

<section className="relative" id="product">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
            Personal itineraries in real time!
          </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Tiny trips, big living.
          </h1>
<p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Stop speding hours online just to step out. One tap, multiple spots, all adjusted for you while you move.
          </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-500/90 hover:bg-violet-400 text-white px-5 py-3 text-sm font-medium ring-1 ring-white/10" id="cta-generate-top">
<i className="h-4.5 w-4.5" data-lucide="wand-2"></i>
              Generate a tiny trip
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium">
<i className="h-4.5 w-4.5" data-lucide="map"></i>
              See how it works
            </button>
</div>
<div className="grid grid-cols-2 gap-4 pt-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-zinc-300 text-sm">
<i className="h-4 w-4" data-lucide="brain"></i> AI Agent handles logistics
              </div>
<p className="text-xs text-zinc-400 mt-2">We confirm spots, text updates, and adjust plans in real time—so you don’t have to.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-zinc-300 text-sm">
<i className="h-4 w-4" data-lucide="sparkle"></i> Personalized to your vibe
              </div>
<p className="text-xs text-zinc-400 mt-2">Learns from what you accept, skip, and favorite to shape your city to you.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-6 hidden md:block">
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm">
              Live in SF • 2:12 PM • 68°F
            </div>
</div>
<div className="relative mx-auto md:mx-0 w-full max-w-sm rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-zinc-900 to-zinc-950 p-3 shadow-2xl">
<div className="rounded-[1.8rem] bg-zinc-950 ring-1 ring-white/10 overflow-hidden">
<div className="h-12 bg-zinc-900/60 grid place-items-center text-xs text-zinc-400">
                Chalo — Today
              </div>

<div className="p-4 space-y-4">

<div className="flex gap-3">
<div className="relative">
<div className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_3px_rgba(139,92,246,0.35)]"></div>
<div className="absolute left-1.5 top-3 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/40 to-transparent"></div>
</div>
<div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Drift Coffee</p>
<span className="text-xs text-zinc-400">2:20 PM</span>
</div>
<p className="text-xs text-zinc-400">Oat flat white, sunlit window seats.</p>
<img alt="Coffee" className="mt-2 h-28 w-full object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" />
</div>
</div>

<div className="flex gap-3">
<div className="relative">
<div className="h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_20px_3px_rgba(56,189,248,0.35)]"></div>
<div className="absolute left-1.5 top-3 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/40 to-transparent"></div>
</div>
<div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Golden Era Vintage</p>
<span className="text-xs text-zinc-400">3:05 PM</span>
</div>
<p className="text-xs text-zinc-400">Curated denim and playful finds.</p>
<img alt="Vintage" className="mt-2 h-28 w-full object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" />
</div>
</div>

<div className="flex gap-3">
<div className="relative">
<div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_3px_rgba(52,211,153,0.35)]"></div>
</div>
<div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Presidio Lawn</p>
<span className="text-xs text-zinc-400">3:45 PM</span>
</div>
<p className="text-xs text-zinc-400">Lay back. City skyline, zero stress.</p>
<img alt="Park" className="mt-2 h-28 w-full object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop" />
</div>
</div>
</div>
<div className="px-4 pb-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-zinc-900 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors">
                  Book & Go
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="absolute -inset-6 -z-10 blur-3xl opacity-60">
<div className="w-full h-full rounded-full bg-gradient-to-tr from-violet-500/20 via-sky-400/10 to-emerald-400/10 animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-14 scroll-mt-24" id="how">
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-violet-500/15 ring-1 ring-violet-400/20">
<i className="h-4.5 w-4.5 text-violet-300" data-lucide="wand-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Tiny Trips</h3>
</div>
<p className="text-sm text-zinc-400 mt-2">
            Short, personal itineraries that fit your time and mood! 
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-sky-500/15 ring-1 ring-sky-400/20">
<i className="h-4.5 w-4.5 text-sky-300" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">AI Agent</h3>
</div>
<p className="text-sm text-zinc-400 mt-2">
            We confirm hours and availability, hold tables, send updates, and adjust on the fly if something changes.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/20">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="heart"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Personalization</h3>
</div>
<p className="text-sm text-zinc-400 mt-2">
            We learn from every accept, skip, and favorite to dial in recommendations that feel like a friend who gets you.
          </p>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-amber-500/15 ring-1 ring-amber-400/20">
<i className="h-4.5 w-4.5 text-amber-300" data-lucide="shield-alert"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Real-Time Experience Guardian</h3>
</div>
<p className="text-sm text-zinc-400 mt-2">
            We monitor crowds, closures, and delays to prevent a bad experience—rerouting your tiny trip before friction hits.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-pink-500/15 ring-1 ring-pink-400/20">
<i className="h-4.5 w-4.5 text-pink-300" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Social Moat</h3>
</div>
<p className="text-sm text-zinc-400 mt-2">
            Plan together, friction-free. Share, tweak, and go—solving the group “where should we go?” loop for good.
          </p>
</div>
</div>

<div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white text-zinc-900 ring-1 ring-white/10">
<i className="h-4.5 w-4.5" data-lucide="route"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">End‑to‑end flow</h3>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-4">

<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 transition-all hover:-translate-y-0.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-violet-500/20 text-violet-300 grid place-items-center text-xs ring-1 ring-violet-400/30">1</div>
<p className="text-sm font-medium">Request</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Pick a vibe, time, and starting point. Add constraints like budget, step count, dietary, accessibility.</p>
<div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-zinc-300">
<span className="rounded-full px-2 py-0.5 bg-white/5 ring-1 ring-white/10">Budget</span>
<span className="rounded-full px-2 py-0.5 bg-white/5 ring-1 ring-white/10">Dietary</span>
<span className="rounded-full px-2 py-0.5 bg-white/5 ring-1 ring-white/10">Accessibility</span>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 transition-all hover:-translate-y-0.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-sky-500/20 text-sky-300 grid place-items-center text-xs ring-1 ring-sky-400/30">2</div>
<p className="text-sm font-medium">Plan</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Our ranking model balances fit, distance, timing, novelty, and crowd forecasts. Always prepares a plan B.</p>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 transition-all hover:-translate-y-0.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-300 grid place-items-center text-xs ring-1 ring-emerald-400/30">3</div>
<p className="text-sm font-medium">Orchestrate</p>
</div>
<p className="text-xs text-zinc-400 mt-1">We place holds, check hours, fetch transit/ETA, and stitch transitions so it flows without gaps.</p>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 transition-all hover:-translate-y-0.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-amber-500/20 text-amber-300 grid place-items-center text-xs ring-1 ring-amber-400/30">4</div>
<p className="text-sm font-medium">Adapt</p>
</div>
<p className="text-xs text-zinc-400 mt-1">If a spot crowds or closes, we reroute in real time and text you the change before it matters.</p>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 transition-all hover:-translate-y-0.5 md:col-span-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-zinc-200/20 text-zinc-200 grid place-items-center text-xs ring-1 ring-white/20">5</div>
<p className="text-sm font-medium">Wrap up</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Quick feedback closes the loop. Your choices tune future trips for better fit and novelty.</p>
</div>
</div>

<div className="mt-6">
<h4 className="text-sm font-medium tracking-tight">Signals we consider</h4>
<div className="mt-2 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="sun"></i> Weather</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="users"></i> Crowds</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="walk"></i> Distance/steps</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="wallet"></i> Budget</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="clock"></i> Time windows</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> Availability</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="accessibility"></i> Accessibility</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="paw-print"></i> Pet‑friendly</span>
</div>
</div>

<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="lock"></i>
<p className="text-sm font-medium">Privacy by default</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Location is processed just‑in‑time to generate a plan; you control retention.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="slider"></i>
<p className="text-sm font-medium">You’re in control</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Lock a stop, swap one, or reroll. We reflow the route around your choices.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="trash-2"></i>
<p className="text-sm font-medium">Easy data deletion</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Clear history and preferences anytime from settings.</p>
</div>
</div>

<div className="mt-8">
<h4 className="text-sm font-medium tracking-tight">FAQ</h4>
<div className="mt-3 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-sm font-medium">Can I use it offline?</p>
<p className="text-xs text-zinc-400 mt-1">Yes—cached maps and directions for your current loop. Live updates resume when reconnected.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-sm font-medium">What if I have dietary needs?</p>
<p className="text-xs text-zinc-400 mt-1">Add tags like vegan, gluten‑free, nut‑free. We filter and verify before booking.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-sm font-medium">Do I have to tip or prepay?</p>
<p className="text-xs text-zinc-400 mt-1">No. Holds are free unless stated. We’ll surface any prepayment requirements clearly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
<div className="flex flex-col lg:flex-row gap-8 items-start">
<div className="w-full lg:w-1/2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Plan your tiny trip</h2>
<p className="text-zinc-400 text-sm mt-2">Tell us your vibe and time. We’ll do the rest.</p>
<div className="mt-6 space-y-4">
<div>
<label className="text-sm text-zinc-300">Vibe</label>
<div className="mt-2 flex flex-wrap gap-2">
<button className="vibe-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm" data-vibe="Cozy">
<i className="h-4 w-4" data-lucide="cup-soda"></i> Cozy
                  </button>
<button className="vibe-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm" data-vibe="Curious">
<i className="h-4 w-4" data-lucide="search"></i> Curious
                  </button>
<button className="vibe-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm" data-vibe="Playful">
<i className="h-4 w-4" data-lucide="party-popper"></i> Playful
                  </button>
<button className="vibe-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm" data-vibe="Nature">
<i className="h-4 w-4" data-lucide="leaf"></i> Nature
                  </button>
</div>
</div>
<div>
<label className="text-sm text-zinc-300">Time available</label>
<div className="mt-2 flex items-center gap-4">
<input className="w-full accent-violet-500" id="timeRange" max="180" min="30" step="15" type="range" value="90" />
<span className="text-sm text-zinc-300 w-16" id="timeLabel">90 min</span>
</div>
</div>
<div>
<label className="text-sm text-zinc-300">Starting point</label>
<div className="mt-2 flex items-center gap-2">
<i className="h-4 w-4 text-zinc-400" data-lucide="navigation"></i>
<input className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-400/40" id="startInput" placeholder="e.g., Mission District" />
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-zinc-900 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors" id="generateTrip">
<i className="h-4 w-4" data-lucide="wand"></i> Generate tiny trip
              </button>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Your tiny trip</h3>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="h-4 w-4" data-lucide="timer"></i>
<span id="resultTime">—</span>
</div>
</div>
<p className="text-sm text-zinc-400 mt-1" id="resultVibe">Pick a vibe and generate.</p>
<div className="mt-4 grid gap-3" id="resultList">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-3 text-sm text-zinc-400">
                  Your curated plan will appear here.
                </div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-sm">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i> Reroll
                </button>
<button className="inline-flex items-center gap-2 rounded-md bg-violet-500/90 hover:bg-violet-400 text-white px-3.5 py-2 text-sm">
<i className="h-4 w-4" data-lucide="send"></i> Send to phone
                </button>
</div>
</div>
</div>
</div>

<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 pb-16" id="investor">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white text-zinc-900 ring-1 ring-white/10">
<i className="h-4.5 w-4.5" data-lucide="pen-tool"></i>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">The Chalo Narrative</h2>
</div>
<div className="prose prose-invert max-w-none">
<p className="text-zinc-300 text-[15px] leading-relaxed">
            Cities promise abundance. Yet most days, abundance feels like noise. We scroll, we save, we second‑guess—and then we stay home. The gap between wanting a good day and living one is filled with tiny frictions: too many options, too little time, and no one to handle the logistics.
          </p>
<p className="text-zinc-300 text-[15px] leading-relaxed mt-4">
            Chalo closes that gap. It is the anti–Yellow Pages: not a directory, a decision. Tap once and a tiny trip appears—a short, cohesive micro‑adventure that fits your time and mood. Coffee that matches your vibe, a quick stop that delights, a green space to exhale. It feels personal because it is.
          </p>
<p className="text-zinc-300 text-[15px] leading-relaxed mt-4">
            Behind the scenes, our AI agent does the heavy lifting. It confirms hours, holds tables, texts updates, and adjusts your plan if something changes. You don’t assemble a day from scattered lists; you receive a plan that just works. Over time, our personalization engine learns what “good” means to you—from the spots you accept, skip, or favorite—and turns your city into a living, breathing recommendation.
          </p>
<p className="text-zinc-300 text-[15px] leading-relaxed mt-4">
            Today’s discovery products are built for browsing. Chalo is built for going. While indirect competitors show you everything, we show you what you’ll love, when to go, and how to get there—then we quietly handle the logistics. It’s the difference between information and orchestration.
          </p>
<p className="text-zinc-300 text-[15px] leading-relaxed mt-4">
            The path to scale is simple: we connect high‑intent users with local businesses that value curated demand. We’ll offer tools for small businesses to manage their presence, and tasteful sponsorships that place the right businesses into the right tiny trips. This creates a high‑margin flywheel where better experiences drive more usage, and more usage drives better local outcomes.
          </p>
<p className="text-zinc-300 text-[15px] leading-relaxed mt-4">
            Looking ahead, Chalo becomes the social default for “What should we do?”—a place to plan together without the group‑chat loop. Our Real‑Time Experience Guardian ensures trips adapt to crowds or closures before disappointment hits. In a world that automates the mundane, we’re automating delight.
          </p>
<p className="text-zinc-200 text-[15px] leading-relaxed mt-4">
            We’re building the most loved layer between you and your city—an operating system for spontaneous living. If you believe the next iconic consumer product will turn choice into action and time into memories, you believe in Chalo. Let’s bring better days within one tap.
          </p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-20 scroll-mt-24" id="business">
<div className="grid lg:grid-cols-2 gap-6 items-start">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white text-zinc-900 ring-1 ring-white/10">
<i className="h-4.5 w-4.5" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">Business Tools</h3>
</div>
<span className="text-xs text-zinc-400">For local partners</span>
</div>
<p className="text-sm text-zinc-400 mt-2">
            Manage your Chalo listing, see demand patterns, boost visibility and engagement. 
          </p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Featured visits</p>
<p className="text-2xl font-semibold tracking-tight mt-1">1,284</p>
<div className="mt-2 text-emerald-400 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="trending-up"></i> +6.2%
              </div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Bookings</p>
<p className="text-2xl font-semibold tracking-tight mt-1">642</p>
<div className="mt-2 text-emerald-400 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> +3.1%
              </div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-xs text-zinc-400">Conversion</p>
<p className="text-2xl font-semibold tracking-tight mt-1">12.4%</p>
<div className="mt-2 text-emerald-400 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> +0.9%
              </div>
</div>
</div>

<div className="mt-6 rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<h4 className="text-sm font-medium">Demand over time</h4>
<p className="text-xs text-zinc-400">Past 8 weeks</p>
<div className="mt-3">
<div className="relative h-48">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="demandChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-sm">
<i className="h-4 w-4" data-lucide="settings"></i> Manage listing
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 px-3.5 py-2 text-sm">
<i className="h-4 w-4" data-lucide="star"></i> Sponsor a tiny trip
            </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<img alt="Local bakery" className="h-64 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1400&auto=format&fit=crop" />
<img alt="Bar interior" className="h-64 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop" />
<img alt="Museum" className="h-64 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop" />
<img alt="Outdoor market" className="h-64 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>

<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white text-zinc-900 ring-1 ring-white/10">
<i className="h-4.5 w-4.5" data-lucide="panel-left"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">What you get</h3>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="megaphone"></i><p className="text-sm font-medium">Sponsored placement</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Be featured in high‑fit trips to incrementally lift visits.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="line-chart"></i><p className="text-sm font-medium">Conversion tracking</p>
</div>
<p className="text-xs text-zinc-400 mt-1">See impressions, saves, arrivals, and bookings—end to end.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="map-pin"></i><p className="text-sm font-medium">Listing controls</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Edit hours, menus, experiences, and blackout dates with ease.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="messages-square"></i><p className="text-sm font-medium">Direct messaging</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Confirm holds and handle updates without phone tags.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="credit-card"></i><p className="text-sm font-medium">Payments & promos</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Optional prepay experiences and time‑boxed promos.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-4 w-4" data-lucide="workflow"></i><p className="text-sm font-medium">API & integrations</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Connect POS, reservations, and inventory to keep info live.</p>
</div>
</div>

<div className="mt-6">
<h4 className="text-sm font-medium tracking-tight">Onboarding takes minutes</h4>
<div className="mt-3 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-4 w-4" data-lucide="check-circle-2"></i><p className="text-sm font-medium">Claim your listing</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Verify ownership and import basics (hours, address, photos).</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-sky-300">
<i className="h-4 w-4" data-lucide="calendar-plus"></i><p className="text-sm font-medium">Set availability</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Define holds, seating windows, and capacity rules.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-violet-300">
<i className="h-4 w-4" data-lucide="sparkles"></i><p className="text-sm font-medium">Launch experiences</p>
</div>
<p className="text-xs text-zinc-400 mt-1">Add specials or guided experiences that fit tiny trips.</p>
</div>
</div>
</div>

<div className="mt-6">
<h4 className="text-sm font-medium tracking-tight">Pricing</h4>
<div className="mt-3 grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<p className="text-sm font-medium">Starter</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">$0</p>
<ul className="mt-3 space-y-2 text-xs text-zinc-400">
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Basic listing</li>
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Insights (lite)</li>
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Standard messaging</li>
</ul>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-sm">Get started</button>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-violet-400/20">
<p className="text-sm font-medium">Growth</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">$49<span className="text-xs text-zinc-400">/mo</span></p>
<ul className="mt-3 space-y-2 text-xs text-zinc-400">
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Sponsored placement</li>
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Conversion tracking</li>
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Priority support</li>
</ul>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 px-3 py-2 text-sm">Start trial</button>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<p className="text-sm font-medium">Partner</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">$249<span className="text-xs text-zinc-400">/mo</span></p>
<ul className="mt-3 space-y-2 text-xs text-zinc-400">
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>API & integrations</li>
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Custom experiences</li>
<li className="flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check"></i>Dedicated success</li>
</ul>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-sm">Talk to sales</button>
</div>
</div>
</div>

<div className="mt-6">
<h4 className="text-sm font-medium tracking-tight">Integrations</h4>
<div className="mt-2 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="credit-card"></i> POS</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="table"></i> Reservations</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="map"></i> Maps</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="message-square"></i> SMS</span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-zinc-300"><i className="h-3.5 w-3.5" data-lucide="scan-line"></i> QR check‑ins</span>
</div>
</div>

<div className="mt-8">
<h4 className="text-sm font-medium tracking-tight">FAQ</h4>
<div className="mt-3 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-sm font-medium">How do sponsored placements work?</p>
<p className="text-xs text-zinc-400 mt-1">We only show placements when they match user intent. You pay for qualified arrivals, not impressions.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-sm font-medium">Can I limit daily volume?</p>
<p className="text-xs text-zinc-400 mt-1">Yes, set a cap or schedule by day/time to align with staffing.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<p className="text-sm font-medium">What about no‑shows?</p>
<p className="text-xs text-zinc-400 mt-1">We use check‑ins and POS signals to validate arrivals and waive charges for verified no‑shows.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-20">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">People who tried Chalo</h3>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-amber-300">
<i className="h-4 w-4" data-lucide="quote"></i>
<span className="text-xs">Saves me 30 mins every Saturday</span>
</div>
<p className="text-sm text-zinc-300 mt-2">I tap, it plans I just go. The coffee + thrift + park combo is my new favorite reset.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-4 w-4" data-lucide="quote"></i>
<span className="text-xs">Less scrolling, more living</span>
</div>
<p className="text-sm text-zinc-300 mt-2">It feels like a friend texted me a plan with reservations already handled.</p>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center gap-2 text-sky-300">
<i className="h-4 w-4" data-lucide="quote"></i>
<span className="text-xs">Perfect for visitors</span>
</div>
<p className="text-sm text-zinc-300 mt-2">My parents visited and Chalo planned a perfect 2‑hour loop near our place. Zero stress.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-center">
<h3 className="text-3xl font-semibold tracking-tight">One tap to a better day</h3>
<p className="text-zinc-400 mt-2">We handle the logistics. You live the moment.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-3 text-sm font-medium">
<i className="h-4 w-4" data-lucide="download"></i> Join the waitlist
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm">
<i className="h-4 w-4" data-lucide="calendar"></i> Book a founder chat
          </button>
</div>
</div>
</section>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-white text-zinc-900 grid place-items-center ring-1 ring-white/10">
<span className="text-[10px] font-semibold tracking-tight">CH</span>
</div>
<span className="text-sm text-zinc-400">© 2025 Chalo, Inc.</span>
</div>
<div className="flex items-center gap-5 text-sm">
<a className="text-zinc-400 hover:text-white" href="#">Privacy</a>
<a className="text-zinc-400 hover:text-white" href="#">Terms</a>
<a className="text-zinc-400 hover:text-white" href="#">Contact</a>
</div>
</div>
</footer>



  
l
    </>
  );
}
