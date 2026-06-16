import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Testimonials autoplay
      const stack = document.getElementById('testimonials-stack');
      const dotsWrap = document.getElementById('progress-dots');
      if (stack && dotsWrap) {
        const cards = Array.from(stack.querySelectorAll('.testimonial-card'));
        const dots = Array.from(dotsWrap.children);
        let index = 0;
        let timer;

        const apply = () => {
          cards.forEach((el, i) => {
            el.classList.remove('active', 'next-1', 'next-2', 'hidden');
            const pos = (i - index + cards.length) % cards.length;
            if (pos === 0) el.classList.add('active');
            else if (pos === 1) el.classList.add('next-1');
            else if (pos === 2) el.classList.add('next-2');
            else el.classList.add('hidden');
          });
          dots.forEach((d, i) => {
            d.classList.remove('bg-white', 'bg-white/30');
            d.style.width = '8px';
            if (i === index) { d.classList.add('bg-white'); d.style.width = '24px'; }
            else d.classList.add('bg-white/30');
          });
        };

        const next = () => { index = (index + 1) % cards.length; apply(); };
        const go = (i) => { index = i % cards.length; apply(); };
        const start = () => { stop(); timer = setInterval(next, 3000); };
        const stop = () => timer && clearInterval(timer);

        cards.forEach((c, i) => c.addEventListener('click', () => { go(i); start(); }));
        dots.forEach((d, i) => d.addEventListener('click', () => { go(i); start(); }));

        apply(); start();
      }

      // KPI animation
      const root = document.querySelector('#card-realtime');
      if (root) {
        const us = root.querySelector('#us-progress');
        const bd = root.querySelector('#bd-progress');
        const usPct = root.querySelector('#us-pct');
        const bdPct = root.querySelector('#bd-pct');

        const targets = { us: 76, bd: 44 };
        let animated = false;

        const animate = () => {
          if (animated) return;
          animated = true;
          const dur = 1000;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const ease = (x) => 1 - Math.pow(1 - x, 3);
            const e = ease(t);
            const usVal = Math.round(targets.us * e);
            const bdVal = Math.round(targets.bd * e);
            us.style.width = usVal + '%';
            bd.style.width = bdVal + '%';
            usPct.textContent = usVal + '%';
            bdPct.textContent = bdVal + '%';
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        };

        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => { if (e.isIntersecting) animate(); });
        }, { threshold: 0.4 });
        io.observe(root);
      }

      // Client list scroll
      const bordersRoot = document.querySelector('#card-borders');
      if (bordersRoot) {
        const list = bordersRoot.querySelector('#client-list');
        const items = [...list.children];
        items.forEach((li) => list.appendChild(li.cloneNode(true)));

        let y = 0;
        const speed = 0.25;
        const step = () => {
          y += speed;
          const setH = items.reduce((h, el) => h + el.offsetHeight, 0);
          if (y >= setH) y = 0;
          list.style.transform = `translateY(-${y}px)`;
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    


        document.getElementById('year').textContent = new Date().getFullYear();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 -z-20 opacity-[0.45]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)'}}></div>
<div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)'}}></div>
</div>
<header className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-center text-sm text-white/60 w-[140px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d257331d-dbc9-4389-9767-ff5d0e2512eb_1600w.png)] bg-cover"></span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm">
<a className="text-white/60 hover:text-white transition-colors" href="#">Docs</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Components</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Examples</a>
<button className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-colors [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] hover:bg-white/10">
<span className="iconify text-base" data-icon="solar:star-bold-duotone"></span>
<span className="tracking-tight">Star</span>
</button>
</div>
</div>
<section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start mt-10 md:mt-16">

<div className="lg:col-span-5">
<div className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="h-6 w-6 grid place-items-center rounded-xl bg-emerald-500/10 text-emerald-400">
<span className="iconify text-sm" data-icon="solar:shield-user-bold-duotone"></span>
</div>
<span className="text-xs text-white/70">Live interactive hero</span>
</div>
<h1 className="sm:text-6xl md:text-7xl leading-[0.95] text-5xl font-semibold text-white tracking-tight mt-5">
                    Liquid glass meets
                    <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(180deg, #fff, rgba(255,255,255,0.65))'}}>dynamic grids</span>
</h1>
<p className="sm:text-base leading-relaxed text-sm text-white/60 max-w-lg mt-5">
                    A responsive hero that blends a hover-reactive icon grid with floating glass panels.
                    Subtle depth, crisp type, and delightful motion—crafted for modern product launches.
                </p>

<div className="mt-6 flex flex-wrap gap-2.5">
<div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:shield-user-bold-duotone"></span>
<span className="text-xs text-white/70">GPU-smooth interactions</span>
</div>
<div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:target-bold-duotone"></span>
<span className="text-xs text-white/70">Glassmorphism</span>
</div>
<div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:magic-stick-3-bold-duotone"></span>
<span className="text-xs text-white/70">Hover trails</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 mt-8">
<button className="border-gradient before:rounded-2xl group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-white px-4 sm:px-5 py-3 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5">
<span className="iconify text-base" data-icon="solar:play-bold-duotone"></span>
<span>See live demo</span>
</button>
<button className="border-gradient before:rounded-2xl group inline-flex hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm text-white tracking-tight rounded-2xl pt-3 pr-4 pb-3 pl-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] gap-2 items-center justify-center">
<span className="iconify text-base" data-icon="solar:arrow-right-bold-duotone"></span>
<span>Get started</span>
</button>
</div>

<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="text-xs text-white/60">Latency</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">~12ms</div>
</div>
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="text-xs text-white/60">Icons</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">700+</div>
</div>
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="text-xs text-white/60">FPS</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">60</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="relative w-full max-w-[280px] sm:max-w-[300px] h-[320px]" id="testimonials-stack">

<div className="testimonial-card pointer-events-auto active" data-index="0">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:chat-round-bold-duotone"></span>
</div>
<p className="mt-3 text-xs text-white/70 leading-relaxed">
                                            "The hover grid adds a tactile feel without overwhelming the layout."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Avery Lin</div>
<div className="text-[11px] text-white/60">Design Lead</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto next-1" data-index="1">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:document-text-bold-duotone"></span>
</div>
<p className="leading-relaxed text-xs text-white/70 mt-3">
                                            "Glass panels feel premium, and remain readable above the motion."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Jon Vega</div>
<div className="text-[11px] text-white/60">PM, Core</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto next-2" data-index="2">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:star-bold-duotone"></span>
</div>
<p className="leading-relaxed text-xs text-white/70 mt-3">
                                            "Smooth animation timing creates a natural, delightful experience."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Maya Chen</div>
<div className="text-[11px] text-white/60">Creative Director</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto hidden" data-index="3">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-base" data-icon="solar:heart-bold-duotone"></span>
</div>
<p className="leading-relaxed text-xs text-white/70 mt-3">
                                            "The perfect balance between visual impact and performance."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Liam Foster</div>
<div className="text-[11px] text-white/60">Frontend Eng</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" id="progress-dots">
<div className="w-2 h-2 rounded-full transition-all duration-300 active-dot bg-white" style={{width: '24px'}}></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/30" style={{width: '8px'}}></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/30" style={{width: '8px'}}></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/30" style={{width: '8px'}}></div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-3xl" style={{background: 'radial-gradient(600px 280px at 60% 40%, rgba(255,255,255,0.07), transparent 60%)'}}></div>
</div>
</div>
</section>
</header>

<section className="md:px-10 md:pt-28 max-w-6xl mr-auto ml-auto pt-20 pr-6 pl-6">

<div className="flex justify-center">
<div className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify text-sky-300" data-icon="solar:atom-bold-duotone"></span>
<span className="text-sm text-sky-200/90">Feature Highlights</span>
</div>
</div>

<h1 className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
        Feature Highlights to Accelerate
        <span className="block">Your Sales</span>
</h1>
<p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
        Tools to track, automate, and scale your pipeline—built to elevate performance and help teams close faster.
      </p>

<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 mt-12 gap-6">

<section className="border-gradient before:rounded-3xl group overflow-hidden rounded-3xl pt-5 pr-5 pb-5 pl-5 relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-realtime">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="-right-24 -top-24 bg-sky-500/10 w-72 h-72 rounded-full absolute blur-3xl"></div>

<div className="border-gradient before:rounded-2xl rounded-2xl pt-4 pr-4 pb-4 pl-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<span className="iconify h-4 w-4 text-sky-300" data-icon="solar:chart-bold-duotone"></span>
<span className="font-medium">Realtime KPI Monitor</span>
</div>
<div className="space-y-3">

<div className="border-gradient before:rounded-xl rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3">
<img alt="US" className="h-5 w-5 rounded-full ring-1 ring-white/20" src="https://flagcdn.com/us.svg"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white/90">United States</p>
<p className="text-xs text-white/60">$89,032</p>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500" id="us-progress" style={{width: '0%'}}></div>
</div>
</div>
<span className="text-xs text-white/70" id="us-pct">0%</span>
</div>
<p className="mt-2 text-[11px] text-white/50">E‑commerce &amp; SaaS</p>
</div>

<div className="border-gradient before:rounded-xl rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3">
<img alt="Bangladesh" className="h-5 w-5 rounded-full ring-1 ring-white/20" src="https://flagcdn.com/bd.svg"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white/90">Bangladesh</p>
<p className="text-xs text-white/60">$52,878</p>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" id="bd-progress" style={{width: '0%'}}></div>
</div>
</div>
<span className="text-xs text-white/70" id="bd-pct">0%</span>
</div>
<p className="mt-2 text-[11px] text-white/50">AI &amp; Automation</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-sky-200 hover:bg-sky-500/20 transition [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4" data-icon="solar:radar-bold-duotone"></span>
                AI Insights
              </button>
<div className="flex items-center gap-2 text-[11px] text-white/50">
<span className="iconify h-3.5 w-3.5 text-emerald-300" data-icon="solar:pulse-bold-duotone"></span>
                Live
              </div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Real‑Time Performance Tracking</h3>
<p className="mt-1.5 text-sm text-white/70">
            See KPIs, closed deals, and revenue trends as they happen. Make confident decisions with instant insight.
          </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-borders">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/80 text-sm">
<span className="iconify h-4 w-4 text-indigo-300" data-icon="solar:planet-bold-duotone"></span>
<span className="font-medium">Worldwide Clients</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-white/60">Weekly</span>
<span className="iconify h-4 w-4 text-white/40" data-icon="solar:restart-bold-duotone"></span>
</div>
</div>

<div className="overflow-hidden h-36 border-gradient before:rounded-xl rounded-xl mt-3">
<ul className="relative" id="client-list">
<li className="flex pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<img alt="client" className="h-6 w-6 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm text-white/90">Jordan Lee</p>
<p className="text-[11px] text-white/50">US • USD</p>
</div>
</div>
<span className="iconify h-4 w-4 text-amber-300" data-icon="solar:star-bold-duotone"></span>
</li>
<li className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-2">
<img alt="client" className="h-6 w-6 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white/90">Maya Chen</p>
<p className="text-[11px] text-white/50">GB • GBP</p>
</div>
</div>
<span className="iconify h-4 w-4 text-emerald-300" data-icon="solar:shield-check-bold-duotone"></span>
</li>
<li className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-2">
<img alt="client" className="h-6 w-6 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white/90">Sofia Alvarez</p>
<p className="text-[11px] text-white/50">AU • AUD</p>
</div>
</div>
<span className="iconify h-4 w-4 text-sky-300" data-icon="solar:verified-check-bold-duotone"></span>
</li>
</ul>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
<span className="iconify h-3.5 w-3.5" data-icon="solar:translation-bold-duotone"></span>
              Multilingual + multicurrency support
            </div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Sell Globally</h3>
<p className="mt-1.5 text-sm text-white/70">
            Serve customers across regions with localized language and currency options to scale confidently.
          </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-collab">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-white/80 text-sm">
<span className="iconify h-4 w-4 text-emerald-300" data-icon="solar:widget-bold-duotone"></span>
<span className="font-medium">Connects with your tools</span>
</div>
<div className="mt-3 grid grid-cols-4 gap-3">
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-5 w-5 text-white/80" data-icon="solar:inbox-bold-duotone"></span>
<span className="text-xs text-white/70">Email</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-5 w-5 text-white/80" data-icon="solar:chat-round-bold-duotone"></span>
<span className="text-xs text-white/70">Chat</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-5 w-5 text-white/80" data-icon="solar:calendar-bold-duotone"></span>
<span className="text-xs text-white/70">Calendar</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-5 w-5 text-white/80" data-icon="solar:bolt-bold-duotone"></span>
<span className="text-xs text-white/70">Automation</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Teammate" className="h-6 w-6 rounded-full ring-2 ring-[#0a0a0b] object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&amp;auto=format&amp;fit=crop"/>
<img alt="Teammate" className="h-6 w-6 rounded-full ring-2 ring-[#0a0a0b] object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&amp;auto=format&amp;fit=crop"/>
<img alt="Teammate" className="h-6 w-6 rounded-full ring-2 ring-[#0a0a0b] object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&amp;auto=format&amp;fit=crop"/>
<div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-[#0a0a0b] grid place-items-center text-[10px] text-white/70">+9</div>
</div>
<div className="inline-flex items-center gap-2 text-[11px] text-white/60">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
</span>
                Active now
              </div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Collaborate Seamlessly</h3>
<p className="mt-1.5 text-sm text-white/70">
            Bring sales, success, and ops together. Shared boards, threaded comments, and live presence keep everyone in sync.
          </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-automation">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"></div>

<div className="border-gradient before:rounded-2xl rounded-2xl p-4 relative overflow-hidden [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center justify-between text-white/80 text-sm">
<div className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-amber-300" data-icon="solar:magic-stick-3-bold-duotone"></span>
<span className="font-medium">Rule Builder</span>
</div>
<div className="flex items-center gap-2">
<button className="border-gradient before:rounded-full inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-white/80 hover:bg-white/10 transition [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-3.5 w-3.5" data-icon="solar:add-circle-bold-duotone"></span>
                  New rule
                </button>
<button className="border-gradient before:rounded-full inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-emerald-200 hover:bg-emerald-500/20 transition [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-3.5 w-3.5" data-icon="solar:play-bold-duotone"></span>
                  Run once
                </button>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-3">
<div className="border-gradient before:rounded-xl relative rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-xs text-white/80">
<span className="iconify h-4 w-4 text-amber-300" data-icon="solar:flag-bold-duotone"></span>
                  Trigger
                </div>
<p className="mt-2 text-xs text-white/70">Lead created</p>
</div>
<div className="border-gradient before:rounded-xl relative rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-xs text-white/80">
<span className="iconify h-4 w-4 text-white/70" data-icon="solar:sort-by-time-bold-duotone"></span>
                  Condition
                </div>
<p className="mt-2 text-xs text-white/70">Score ≥ 65</p>
</div>
<div className="border-gradient before:rounded-xl relative rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-xs text-white/80">
<span className="iconify h-4 w-4 text-emerald-300" data-icon="solar:plain-bold-duotone"></span>
                  Action
                </div>
<p className="mt-2 text-xs text-white/70">Notify Slack + Assign</p>
</div>
</div>

<pre className="mt-4 text-[11px] leading-relaxed border-gradient before:rounded-xl rounded-xl p-3 text-white/80 overflow-x-auto [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">when lead.created then
  if lead.score &gt;= 65
    notify('Slack', #pipeline)
    assign('AE', round_robin)
end</pre>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Automate Workflows</h3>
<p className="mt-1.5 text-sm text-white/70">
            Build if‑this‑then‑that rules to route leads, trigger alerts, and keep your team focused on closing.
          </p>
</section>
</div>
</section>

<section className="max-w-7xl mt-40 mr-auto ml-auto pt-16 pr-4 pb-6 pl-4 relative sm:px-6 lg:px-8 lg:mt-40">
<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
          Trusted by teams at leading companies
        </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-6 will-change-transform animate-[marquee-left_30s_linear_infinite]">
<div className="flex gap-6 shrink-0 sm:gap-x-6 lg:gap-x-20">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg" href="#"></a>
</div>
<div className="flex shrink-0 sm:gap-x-6 lg:gap-x-20">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg" href="#"></a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
<div className="text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Simple, transparent pricing</h2>
<p className="mt-3 text-white/60">Start free. Scale when you're ready.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<h3 className="text-lg font-medium">Starter</h3>
<p className="mt-1 text-sm text-white/60">For individuals and small teams</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold">$0</span>
<span className="text-white/60">/mo</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              2 pipelines
            </li>
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Realtime dashboards
            </li>
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Basic automations
            </li>
</ul>
<button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition">Get started</button>
</div>

<div className="border-gradient before:rounded-3xl relative rounded-3xl p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-amber-200 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">Popular</div>
<h3 className="text-lg font-medium">Growth</h3>
<p className="mt-1 text-sm text-white/60">For growing teams</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold">$29</span>
<span className="text-white/60">/mo</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Unlimited pipelines
            </li>
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Advanced KPIs
            </li>
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Priority support
            </li>
</ul>
<button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition">Start trial</button>
</div>

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<h3 className="text-lg font-medium">Enterprise</h3>
<p className="mt-1 text-sm text-white/60">For large organizations</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold">Custom</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              SSO + SCIM
            </li>
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Dedicated CSM
            </li>
<li className="flex items-center gap-2">
<span className="iconify h-4 w-4 text-emerald-400" data-icon="solar:check-circle-bold-duotone"></span>
              Custom SLAs
            </li>
</ul>
<button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-white/15 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">Contact sales</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
<div className="text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Frequently asked questions</h2>
<p className="mt-3 text-white/60">Everything you need to know.</p>
</div>
<div className="mt-8 space-y-3">
<details className="border-gradient before:rounded-2xl group rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            How does the interactive grid affect performance?
            <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 transition-transform group-open:rotate-180" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70">The grid is GPU-accelerated and throttled using requestAnimationFrame to keep animations smooth at 60 FPS.</p>
</details>
<details className="border-gradient before:rounded-2xl group rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            Can I customize the glass cards?
            <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 transition-transform group-open:rotate-180" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70">Yes. Adjust colors, border gradients, and motion timing via utility classes or CSS variables.</p>
</details>
<details className="border-gradient before:rounded-2xl group rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            Is there an API for automations?
            <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<span className="iconify h-4 w-4 transition-transform group-open:rotate-180" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70">A REST and webhook API lets you trigger rules, sync leads, and send events from your stack.</p>
</details>
</div>
</section>

<section className="max-w-4xl mx-auto md:px-10 px-6 pt-16 md:pt-24 pb-24">
<div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-10 relative overflow-hidden [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Ready to build your next launch?</h2>
<p className="mt-3 text-white/70">Join thousands of teams using this interactive hero and component kit.</p>
<form aria-label="Join the waitlist" className="mt-6 flex flex-col sm:flex-row gap-3">
<label className="sr-only" htmlFor="email">Email</label>
<input className="border-gradient before:rounded-xl w-full rounded-xl placeholder-white/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/30 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" id="email" placeholder="you@company.com" required="" type="email"/>
<button className="border-gradient before:rounded-xl rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-3 text-sm font-medium transition">
            Join waitlist
          </button>
</form>
<p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
</div>
</section>


<footer className="max-w-6xl mx-auto md:px-10 px-6 pb-12">
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/50">© <span id="year">2025</span> Experimental UI Kit</p>
<nav className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Changelog</a>
</nav>
</div>

</footer>

    </>
  );
}
