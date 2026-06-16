import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Tailwind base color variables (no config override)
window.onloadFonts = () => {
document.documentElement.style.setProperty('--accent-from', '#7c3aed'); // violet
document.documentElement.style.setProperty('--accent-to', '#06b6d4');   // cyan
document.documentElement.style.setProperty('--accent-warm', '#f97316'); // orange
};



    // Initialize icons at 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Parallax on scroll for elements with data-parallax
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
      const y = window.scrollY || window.pageYOffset;
      parallaxEls.forEach(el => {
        const f = parseFloat(el.dataset.parallax || 0.1);
        el.style.transform = `translateY(${y * f}px)`;
      });
    }, { passive: true });

    // Reveal on view
    const revealEls = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate([
            { opacity: 0, transform: 'translateY(24px) scale(0.98)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' }
          ], { duration: 700, easing: 'cubic-bezier(.2,.65,.2,1)', fill: 'forwards' });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));

    // Count-up metrics
    const formatNumber = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 0 });
    const counterEls = document.querySelectorAll('[data-count-target]');
    const co = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.countTarget || '0');
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();
        const animate = (t0) => {
          const now = performance.now();
          const p = Math.min(1, (now - start) / duration);
          const ease = 1 - Math.pow(1 - p, 3);
          const val = Math.round(target * ease);
          el.textContent = `${prefix}${formatNumber(val)}${suffix}`;
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        co.unobserve(el);
      });
    }, { threshold: 0.6 });
    counterEls.forEach(el => co.observe(el));

    // Tilt on pointer move
    const tiltEls = document.querySelectorAll('[data-tilt]');
    tiltEls.forEach((el) => {
      let raf = null;
      const max = 6; // degrees
      let rect = null;

      const onEnter = () => {
        rect = el.getBoundingClientRect();
        el.style.transition = 'transform 300ms cubic-bezier(.2,.65,.2,1)';
        el.style.willChange = 'transform';
      };
      const onMove = (e) => {
        if (!rect) rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * max;
        const ry = (x - 0.5) * max;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        });
      };
      const onLeave = () => {
        el.style.transition = 'transform 600ms cubic-bezier(.2,.65,.2,1)';
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        rect = null;
      };

      el.addEventListener('pointerenter', onEnter, { passive: true });
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave, { passive: true });
    });

    // Chart.js donut
    const ctx = document.getElementById('topicsChart')?.getContext('2d');
    if (ctx) {
      const donut = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Tech', 'Markets', 'Sports', 'Culture'],
          datasets: [{
            data: [42, 28, 18, 12],
            backgroundColor: ['#22d3ee','#a78bfa','#34d399','#fb923c'],
            borderColor: 'rgba(15,23,42,1)',
            borderWidth: 2,
            hoverOffset: 8
          }]
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(2,6,23,.9)',
              borderColor: 'rgba(255,255,255,.08)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#fff',
              bodyColor: 'rgb(203,213,225)'
            }
          },
          cutout: '68%',
          responsive: true,
          animation: { duration: 900 }
        }
      });
    }

    // Click handler for primary CTA (explicit redirect)
    document.getElementById('cta-play')?.addEventListener('click', (e) => {});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
<div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30 animate-[floaty_18s_ease-in-out_infinite]" style={{background: 'radial-gradient(45rem 45rem at 30% 50%, rgba(124,58,237,.45), transparent 55%)'}}></div>
<div className="absolute -bottom-64 -right-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-30 animate-[floaty_22s_ease-in-out_infinite]" style={{background: 'radial-gradient(40rem 40rem at 70% 50%, rgba(6,182,212,.40), transparent 55%)'}}></div>
<div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none">
<div className="h-full w-full bg-[linear-gradient(0deg,transparent_24%,rgba(148,163,184,0.06)_25%,rgba(148,163,184,0.06)_26%,transparent_27%,transparent_74%,rgba(148,163,184,0.06)_75%,rgba(148,163,184,0.06)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(148,163,184,0.06)_25%,rgba(148,163,184,0.06)_26%,transparent_27%,transparent_74%,rgba(148,163,184,0.06)_75%,rgba(148,163,184,0.06)_76%,transparent_77%)] bg-[length:40px_40px]"></div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-4">
<a className="group inline-flex items-center gap-3" href="#home">
<img alt="Slash logo" className="h-8 w-8 rounded-xl ring-1 ring-white/10 bg-gradient-to-br from-violet-500 to-cyan-400 object-cover" onerror="this.src='https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=200&amp;auto=format&amp;fit=crop'; this.classList+=' object-center';" src=""/>
<span className="text-slate-100 text-lg font-semibold tracking-tight">Slash</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-300 hover:text-white transition" href="#features">Features</a>
<a className="text-slate-300 hover:text-white transition" href="#preview">Preview</a>
<a className="text-slate-300 hover:text-white transition" href="#insights">Insights</a>
<a className="text-slate-300 hover:text-white transition" href="#company">Perceptiveway</a>
</nav>
<div className="flex items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-900 bg-gradient-to-r from-violet-400 to-cyan-300 hover:from-violet-300 hover:to-cyan-200 transition shadow-[0_0_0_1px_rgba(255,255,255,.08)] transform-gpu hover:scale-[1.02]" href="https://play.google.com/store/apps/details?id=com.perceptiveway.Slash" rel="noopener" style={{backgroundSize: '200% 100%', animation: 'gradientShift 10s ease infinite'}} target="_blank">
<i className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" data-lucide="download"></i>
            Get it on Google Play
          </a>
<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-white/5" onclick="document.getElementById('mnav').classList.toggle('hidden')">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="md:hidden hidden pb-4" id="mnav">
<div className="grid gap-2 text-sm font-medium">
<a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#features">Features</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#preview">Preview</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#insights">Insights</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#company">Perceptiveway</a>
</div>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-16">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300" style={{animation: 'softPulse 3.2s ease-out infinite'}}>
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Now on Android
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Cut the noise. Keep the signal.
          </h1>
<p className="text-base sm:text-lg text-slate-300/90 font-medium">
            Slash is a lightning‑fast news aggregator that learns what you care about.
            Follow topics across thousands of sources, get clean summaries, and read more in less time.
          </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-slate-900 font-medium shadow-[0_0_0_1px_rgba(255,255,255,.08)] hover:from-violet-400 hover:to-cyan-300 transition transform-gpu hover:scale-[1.02]" href="https://play.google.com/store/apps/details?id=com.perceptiveway.Slash" id="cta-play" rel="noopener" style={{backgroundSize: '200% 100%', animation: 'gradientShift 8s ease infinite'}} target="_blank">
<i className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" data-lucide="smartphone"></i>
              Download on Google Play
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/5 transition transform-gpu hover:-translate-y-0.5" href="#preview">
<i className="w-5 h-5 transition-transform" data-lucide="play"></i>
              Watch demo
            </a>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<p className="text-sm text-slate-400 font-medium">Loved by early readers. Join them today.</p>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -left-6 h-28 w-28 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-2xl animate-[floaty_8s_ease-in-out_infinite]"></div>
<div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-orange-400/30 blur-2xl animate-[floaty_7s_ease-in-out_infinite]"></div>
<div className="relative z-10 mb-6 md:mb-8" data-parallax="-0.08">
<img alt="Slash mascot" className="mx-auto max-h-64 md:max-h-72 drop-shadow-[0_20px_40px_rgba(6,182,212,0.25)] rounded-[2rem]" onerror="this.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=800&amp;auto=format&amp;fit=crop';" src="" />
</img></div>

<div className="pointer-events-none absolute inset-x-0 -top-6 mx-auto h-40 w-[85%] rounded-2xl blur-xl opacity-60 animate-[spin_24s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, rgba(124,58,237,.12), rgba(6,182,212,.12), transparent 70%)'}}></div>

<div className="relative mx-auto w-[90%] sm:w-[22rem]" data-reveal="" data-tilt="">
<div className="absolute -top-8 -left-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-violet-600/30 to-cyan-400/30 blur-2xl"></div>
<div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-3xl bg-orange-400/20 blur-2xl"></div>
<div className="rounded-[2.2rem] border border-white/10 bg-slate-900/60 backdrop-blur p-3 shadow-2xl">
<div className="rounded-[1.6rem] bg-black p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
<i className="w-4 h-4 text-cyan-300" data-lucide="scissors"></i>
                    For you
                  </div>
<div className="flex items-center gap-3 text-slate-400">
<i className="w-4 h-4" data-lucide="search"></i>
<i className="w-4 h-4" data-lucide="settings"></i>
</div>
</div>
<div className="space-y-3">
<article className="rounded-xl bg-white/[0.02] ring-1 ring-white/10 p-3 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5">
<div className="flex gap-3">
<img alt="" className="h-16 w-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-sm font-semibold tracking-tight text-white line-clamp-2">AI policy roundup: regulators race to keep pace with rapid model advances</h3>
<p className="mt-1 text-xs text-slate-400 line-clamp-2">15‑second summary • Key points, context, and what changes next week.</p>
<div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1"><i className="w-3 h-3" data-lucide="newspaper"></i>Global Wire</span>
<span>·</span>
<span>4m ago</span>
</div>
</div>
</div>
</article>
<article className="rounded-xl bg-white/[0.02] ring-1 ring-white/10 p-3 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5">
<div className="flex gap-3">
<img alt="" className="h-16 w-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-sm font-semibold tracking-tight text-white line-clamp-2">Markets open higher as inflation cools; energy leads the rebound</h3>
<p className="mt-1 text-xs text-slate-400 line-clamp-2">Concise insights distilled from multiple sources, tailored to your watchlist.</p>
<div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1"><i className="w-3 h-3" data-lucide="line-chart"></i>Finance Pulse</span>
<span>·</span>
<span>32m ago</span>
</div>
</div>
</div>
</article>
<article className="rounded-xl bg-white/[0.02] ring-1 ring-white/10 p-3 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5">
<div className="flex gap-3">
<img alt="" className="h-16 w-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<h3 className="text-sm font-semibold tracking-tight text-white line-clamp-2">Championship upsets reshape playoff picture in a wild weekend</h3>
<p className="mt-1 text-xs text-slate-400 line-clamp-2">Follow teams, mute spoilers, and get big‑game recaps in seconds.</p>
<div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1"><i className="w-3 h-3" data-lucide="trophy"></i>Sportline</span>
<span>·</span>
<span>1h ago</span>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
<div className="absolute -right-6 -top-6 h-14 w-14 rounded-xl bg-gradient-to-tr from-orange-400 to-rose-400 opacity-80 blur-md"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<div className="text-center" data-reveal="">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-white" data-count-target="4200" data-suffix="+">0</div>
<div className="text-sm text-slate-400 font-medium mt-1">Sources unified</div>
</div>
<div className="text-center" data-reveal="">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-white" data-count-target="15" data-suffix="s">0</div>
<div className="text-sm text-slate-400 font-medium mt-1">Smart summaries</div>
</div>
<div className="text-center" data-reveal="">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-white" data-count-target="100" data-prefix="&lt;" data-suffix="ms">0</div>
<div className="text-sm text-slate-400 font-medium mt-1">UI latency</div>
</div>
<div className="text-center" data-reveal="">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Private</div>
<div className="text-sm text-slate-400 font-medium mt-1">On‑device ranking</div>
</div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Everything you want to read. Nothing you don’t.</h2>
<p className="mt-3 text-slate-300/90 font-medium">Follow topics and creators, collapse duplicates across sources, and slash through the noise with instant summaries.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5" data-reveal="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
<i className="w-5 h-5 text-cyan-300" data-lucide="rss"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Unified feed</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-medium">Thousands of sources, deduped and ranked on device for privacy and speed.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5" data-reveal="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
<i className="w-5 h-5 text-cyan-300" data-lucide="wand-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Instant summaries</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-medium">Tap to condense long reads into the key ideas. Expand when you want the details.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5" data-reveal="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
<i className="w-5 h-5 text-cyan-300" data-lucide="scissors"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Slash filters</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-medium">Mute spoilers, hide paywalls, and keep repetitive coverage out of sight.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5" data-reveal="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
<i className="w-5 h-5 text-cyan-300" data-lucide="bell-ring"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Real‑time alerts</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-medium">Follow keywords and topics. Be first to know—without the doomscroll.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5" data-reveal="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
<i className="w-5 h-5 text-cyan-300" data-lucide="bookmark-plus"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Save for later</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-medium">Offline reading with one‑tap highlights synced across devices.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition transform-gpu hover:-translate-y-0.5" data-reveal="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
<i className="w-5 h-5 text-cyan-300" data-lucide="lock"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Private by design</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-medium">No account required. Preferences live on your device.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="preview">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1" data-reveal="">
<h3 className="text-3xl font-semibold tracking-tight text-white">Built for flow</h3>
<p className="mt-3 text-slate-300/90 font-medium">A minimal interface, buttery scrolling, and gestures that keep you in the zone. Swipe to triage, long‑press for context, and tap to expand a summary into the full story.</p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-white/10 bg-white/[0.02]">
<i className="w-4 h-4 text-cyan-300" data-lucide="zap"></i> Fast
            </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-white/10 bg-white/[0.02]">
<i className="w-4 h-4 text-cyan-300" data-lucide="sparkles"></i> Clean
            </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-white/10 bg-white/[0.02]">
<i className="w-4 h-4 text-cyan-300" data-lucide="target"></i> Personal
            </span>
</div>
<div className="mt-8">
<a className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-900 font-medium hover:from-violet-400 hover:to-cyan-300 transition transform-gpu hover:scale-[1.02]" href="https://play.google.com/store/apps/details?id=com.perceptiveway.Slash" rel="noopener" style={{backgroundSize: '200% 100%', animation: 'gradientShift 9s ease infinite'}} target="_blank">
<i className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" data-lucide="download"></i> Get Slash
            </a>
</div>
</div>
<div className="order-1 lg:order-2 relative" data-reveal="">
<div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-violet-600/20 via-cyan-400/10 to-transparent blur-2xl"></div>
<div className="rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02] transform-gpu transition will-change-transform" data-tilt="">
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl bg-white/[0.02] ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
<i className="w-4 h-4 text-cyan-300" data-lucide="hash"></i>
                    Topics
                  </div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs font-medium text-slate-300 rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/[0.02]">AI</span>
<span className="text-xs font-medium text-slate-300 rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/[0.02]">Markets</span>
<span className="text-xs font-medium text-slate-300 rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/[0.02]">Football</span>
<span className="text-xs font-medium text-slate-300 rounded-full px-2.5 py-1 ring-1 ring-white/10 bg-white/[0.02]">Design</span>
</div>
</div>
<div className="rounded-xl bg-white/[0.02] ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
<i className="w-4 h-4 text-cyan-300" data-lucide="sparkle"></i>
                    Summaries
                  </div>
<p className="mt-3 text-sm text-slate-400 font-medium">Tap the wand to compress an article into a concise, skimmable brief.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="insights">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div data-reveal="">
<h3 className="text-3xl font-semibold tracking-tight text-white">Know your reading patterns</h3>
<p className="mt-3 text-slate-300/90 font-medium">Slash shows gentle insights about where your attention goes—no ads, no tracking. It helps you rebalance your feed with one tap.</p>
<ul className="mt-6 grid sm:grid-cols-2 gap-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-300 mt-1" data-lucide="pie-chart"></i>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Topic mix</p>
<p className="text-sm text-slate-400 font-medium">See how your interests shift over time.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-300 mt-1" data-lucide="clock-3"></i>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Time saved</p>
<p className="text-sm text-slate-400 font-medium">Summaries add up to hours each week.</p>
</div>
</li>
</ul>
</div>
<div data-reveal="">
<div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transform-gpu transition will-change-transform" data-tilt="">
<h4 className="text-lg font-semibold tracking-tight text-white">This week</h4>
<p className="text-sm text-slate-400 font-medium">Topic distribution across your reads</p>
<div className="mt-4 rounded-2xl bg-black/40 ring-1 ring-white/10 p-4">
<div className="relative h-72">
<div className="h-full w-full relative">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="topicsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-400 font-medium">
<div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400"></span> Tech</div>
<div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400"></span> Markets</div>
<div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"></span> Sports</div>
<div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-orange-400"></span> Culture</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="company">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 md:p-12">
<div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-6">
<img alt="Perceptiveway logo" className="h-14 w-14 rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-violet-500 to-cyan-400 object-cover" onerror="this.src='https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=200&amp;auto=format&amp;fit=crop';" src="" />
<div>
<p className="text-sm font-medium text-slate-400">A product by</p>
<h4 className="text-2xl font-semibold tracking-tight text-white">Perceptiveway</h4>
<p className="mt-1 text-sm text-slate-400 font-medium">We build tools that make information feel effortless.</p>
</div>
<div className="flex gap-3">
<a className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-900 font-medium hover:from-violet-400 hover:to-cyan-300 transition transform-gpu hover:scale-[1.02]" href="https://play.google.com/store/apps/details?id=com.perceptiveway.Slash" rel="noopener" style={{backgroundSize: '200% 100%', animation: 'gradientShift 9.5s ease infinite'}} target="_blank">
<i className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" data-lucide="download"></i> Get Slash
            </a>
<a className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 ring-1 ring-white/10 text-slate-200 font-medium hover:bg-white/5 transition transform-gpu hover:-translate-y-0.5" href="#features">
<i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i> Explore features
            </a>
</div>
</img></div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pb-20">
<div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-transparent border border-white/10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white">Ready to slash your feed?</h3>
<p className="mt-2 text-slate-300/90 font-medium">Install now and feel the difference within a day.</p>
</div>
<div className="flex md:justify-end items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-900 font-medium hover:from-violet-400 hover:to-cyan-300 transition transform-gpu hover:scale-[1.02]" href="https://play.google.com/store/apps/details?id=com.perceptiveway.Slash" rel="noopener" style={{backgroundSize: '200% 100%', animation: 'gradientShift 8.5s ease infinite'}} target="_blank">
<i className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" data-lucide="download"></i> Download on Google Play
            </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Slash logo" className="h-7 w-7 rounded-xl ring-1 ring-white/10 bg-gradient-to-br from-violet-500 to-cyan-400" onerror="this.src='https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=200&amp;auto=format&amp;fit=crop';" src="" />
<span className="text-slate-300 text-sm font-medium">Slash by Perceptiveway</span>
</img></div>
<div className="text-xs text-slate-500 font-medium">© <span id="year"></span> Perceptiveway. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
