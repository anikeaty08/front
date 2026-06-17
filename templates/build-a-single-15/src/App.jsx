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



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Slider
    const track = document.getElementById('track');
    const dots = Array.from(document.querySelectorAll('.dot'));
    const total = 3;
    let index = 0;

    const setIndex = (i) => {
      index = (i + total) % total;
      track.style.transform = `translateX(${-100 * index}%)`;
      dots.forEach((d) => {
        const active = Number(d.dataset.index) === index;
        d.className =
          'dot h-2.5 w-2.5 rounded-full ring-1 transition ' +
          (active
            ? 'bg-emerald-300/90 ring-emerald-200/30'
            : 'bg-white/15 ring-white/10 hover:bg-white/25');
      });
    };

    const next = () => setIndex(index + 1);
    const prev = () => setIndex(index - 1);

    const bindBtn = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', fn);
    };

    bindBtn('nextBtnTop', next);
    bindBtn('prevBtnTop', prev);
    bindBtn('nextBtnBottom', next);
    bindBtn('prevBtnBottom', prev);
    bindBtn('nextBtnOverlay', next);
    bindBtn('prevBtnOverlay', prev);

    dots.forEach((d) => d.addEventListener('click', () => setIndex(Number(d.dataset.index))));

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (document.getElementById('modal') && !document.getElementById('modal').classList.contains('hidden')) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // Autoplay (pause on hover)
    const sliderContainer = track.parentElement.parentElement;
    let timer = null;
    const start = () => {
      if (timer) return;
      timer = setInterval(next, 6500);
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };
    sliderContainer.addEventListener('mouseenter', stop);
    sliderContainer.addEventListener('mouseleave', start);
    start();

    // Simple modal content for "Learn more"
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalKicker = document.getElementById('modalKicker');
    const modalP1 = document.getElementById('modalP1');
    const modalP2 = document.getElementById('modalP2');
    const modalP3 = document.getElementById('modalP3');

    const learnCopy = {
      oakrun: {
        kicker: 'Oak Run, California',
        title: 'Local life with room to breathe',
        body: 'Oak Run supports a quieter day-to-day: local routines, rural roads, and the kind of distance that makes focus easier. The project aims for real integration—respect for neighbors, land ethics, and a steady pace.',
        p1: 'Belonging',
        p2: 'Clear agreements',
        p3: 'Stable, low-drama living'
      },
      shasta: {
        kicker: 'Mount Shasta region',
        title: 'A landscape that resets your scale',
        body: 'Mountain presence changes how a place feels. The region offers long views, seasonal weather, and access to wild terrain—without turning daily life into a performance. It’s a reminder to keep plans simple and durable.',
        p1: 'Perspective',
        p2: 'Seasonal planning',
        p3: 'More calm, less noise'
      },
      forest: {
        kicker: 'Forest & water',
        title: 'Ecology as the operating system',
        body: 'Forest and water shape everything: shade, habitat, soil, runoff, and fire behavior. Our intent is to build with those constraints, not against them—prioritizing maintenance, prevention, and long-term stewardship.',
        p1: 'Stewardship',
        p2: 'Fire-aware land care',
        p3: 'Resilience over time'
      }
    };

    document.querySelectorAll('button[data-learn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-learn');
        const c = learnCopy[key];
        if (!c) return;

        modalKicker.textContent = c.kicker;
        modalTitle.textContent = c.title;
        modalBody.textContent = c.body;
        modalP1.textContent = c.p1;
        modalP2.textContent = c.p2;
        modalP3.textContent = c.p3;

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      });
    });

    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('modalClose2').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal.firstElementChild) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // Form: frontend-only success state
    const form = document.getElementById('applyForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('name').value || '').trim();
      status.textContent = name ? `Thanks, ${name}. We received your note (demo).` : 'Thanks. We received your note (demo).';
      status.className = 'text-xs text-emerald-200';
      form.reset();
      setTimeout(() => {
        status.textContent = 'No payment, no obligation—just a conversation.';
        status.className = 'text-xs text-zinc-400';
      }, 4500);
    });

    // Initialize
    setIndex(0);
  
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-70">
<div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_10%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(50rem_35rem_at_85%_5%,rgba(20,184,166,0.14),transparent_55%),radial-gradient(60rem_50rem_at_50%_95%,rgba(161,161,170,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.0),rgba(9,9,11,0.55),rgba(9,9,11,0.85))]"></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-6xl px-6">
<div className="flex items-center justify-between py-6">
<a className="group inline-flex items-center gap-3" href="#">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
<span className="text-sm font-medium tracking-tight text-zinc-100" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>OR</span>
</span>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Oak Run Eco‑Village</div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Oak Run, California</div>
</div>
</a>
<nav className="hidden items-center gap-7 md:flex" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<a className="text-sm text-zinc-300 hover:text-zinc-100 transition" href="#territory">Territory</a>
<a className="text-sm text-zinc-300 hover:text-zinc-100 transition" href="#overview">Approach</a>
<a className="text-sm text-zinc-300 hover:text-zinc-100 transition" href="#apply">Apply</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-400/15 px-4 py-2 text-sm font-medium text-emerald-200 ring-1 ring-emerald-300/20 hover:bg-emerald-400/20 transition" href="#apply">
            Join Waitlist
            <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</nav>
<a className="md:hidden inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" href="#apply" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
          Apply
          <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="mx-auto max-w-6xl px-6 pt-6 pb-14 sm:pt-10 sm:pb-18">
<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="inline-block h-2 w-2 rounded-full bg-emerald-300/80"></span>
            A grounded eco‑village in Northern California
          </div>
<h1 className="mt-5 text-4xl font-medium tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
            Build a quieter life in Oak Run—together.
          </h1>
<p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            A small, intentional community shaped by clean water, forest air, and responsible land stewardship. Designed for people who want to live simply—without feeling isolated.
          </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-200 transition" href="#apply">
              Apply / Join Waitlist
              <span className="iconify" data-height="18" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" href="#territory">
              Explore Location
              <span className="iconify" data-height="18" data-icon="lucide:map" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-xl sm:grid-cols-4">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Focus</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Land + Community</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Rhythm</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Seasonal</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Energy</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Low‑impact</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Intake</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Waitlist open</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
<div className="absolute inset-0">
<img alt="Forest canopy with sun rays" className="h-full w-full object-cover opacity-85" src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,9,11,0.9),rgba(9,9,11,0.2),rgba(9,9,11,0.1))]"></div>
<div className="absolute inset-0 bg-[radial-gradient(50rem_30rem_at_20%_20%,rgba(16,185,129,0.14),transparent_60%)]"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 ring-1 ring-white/10 text-xs text-zinc-200 backdrop-blur" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="iconify" data-height="16" data-icon="lucide:leaf" data-width="16" style={{strokeWidth: '1.5'}}></span>
                  Nature-forward, community-first
                </div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
<span className="iconify" data-height="16" data-icon="lucide:shield" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Stewardship-led planning
                  </span>
</div>
</div>
<div className="mt-44 sm:mt-56">
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Water</div>
<div className="mt-1 text-sm font-medium text-zinc-50" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Watershed-aware</div>
</div>
<div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Food</div>
<div className="mt-1 text-sm font-medium text-zinc-50" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Garden systems</div>
</div>
<div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Housing</div>
<div className="mt-1 text-sm font-medium text-zinc-50" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Simple, durable</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:mountain" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<div className="text-sm font-medium text-zinc-50 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Northern California, close to wild places</div>
<div className="text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Oak Run • Mount Shasta region • Forest &amp; water</div>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-200 hover:text-emerald-100 transition" href="#territory" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                    See territory
                    <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            Visuals are representative. Final site imagery will reflect the actual land and surroundings.
          </p>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20" id="territory">
<div className="flex items-end justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="iconify" data-height="16" data-icon="lucide:compass" data-width="16" style={{strokeWidth: '1.5'}}></span>
            Territory trust
          </div>
<h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
            A place you can feel—before you arrive.
          </h2>
<p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            Explore the region that shapes daily life: local roads and neighbors, a mountain horizon, and the quiet infrastructure of forest and water.
          </p>
</div>
<div className="hidden md:flex items-center gap-2">
<button aria-label="Previous slide" className="inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10 transition" id="prevBtnTop">
<span className="iconify" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button aria-label="Next slide" className="inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10 transition" id="nextBtnTop">
<span className="iconify" data-height="20" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="mt-7">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">

<div className="flex transition-transform duration-500 ease-out" id="track" style={{transform: 'translateX(0%)'}}>

<article className="relative w-full shrink-0">
<div className="grid min-h-[32rem] grid-cols-1 lg:grid-cols-12">
<div className="relative lg:col-span-7">
<img alt="Oak Run, California landscape" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,9,11,0.7),rgba(9,9,11,0.15),rgba(9,9,11,0.0))] lg:bg-[linear-gradient(to_right,rgba(9,9,11,0.65),rgba(9,9,11,0.05),rgba(9,9,11,0.0))]"></div>
</div>
<div className="relative lg:col-span-5">
<div className="absolute inset-0 bg-zinc-950/75 lg:bg-zinc-950/60"></div>
<div className="relative p-6 sm:p-8 lg:p-9">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-emerald-200/90" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                          Slide 01 / 03
                        </div>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
                          Oak Run
                        </h3>
<p className="mt-1 text-sm text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                          California’s last quiet pockets.
                        </p>
</div>
<span className="hidden sm:grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="20" data-icon="lucide:home" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
</div>

<div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Vibe</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Rural + grounded</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Access</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Road-connected</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Community</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Small &amp; familiar</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Pace</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Seasonal living</div>
</div>
</div>
</div>
<p className="mt-5 text-sm leading-relaxed text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                      Oak Run is the kind of place where the sky gets dark at night and neighbors still wave. It’s not a resort town—it’s real Northern California, with space to build resilient routines.
                    </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-200 transition" href="#apply">
                        Join Waitlist
                        <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" data-learn="oakrun" type="button">
                        Learn more
                        <span className="iconify" data-height="18" data-icon="lucide:info" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="mt-7 flex items-center justify-between md:hidden">
<button aria-label="Previous slide" className="inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10 transition" id="prevBtnBottom">
<span className="iconify" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div aria-label="Slide navigation dots" className="flex items-center gap-2">
<button aria-label="Go to slide 1" className="dot h-2.5 w-2.5 rounded-full bg-emerald-300/90 ring-1 ring-emerald-200/30" data-index="0"></button>
<button aria-label="Go to slide 2" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="1"></button>
<button aria-label="Go to slide 3" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="2"></button>
</div>
<button aria-label="Next slide" className="inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10 transition" id="nextBtnBottom">
<span className="iconify" data-height="20" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</article>

<article className="relative w-full shrink-0">
<div className="grid min-h-[32rem] grid-cols-1 lg:grid-cols-12">
<div className="relative lg:col-span-7">
<img alt="Mount Shasta landscape" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,9,11,0.7),rgba(9,9,11,0.15),rgba(9,9,11,0.0))] lg:bg-[linear-gradient(to_right,rgba(9,9,11,0.65),rgba(9,9,11,0.05),rgba(9,9,11,0.0))]"></div>
</div>
<div className="relative lg:col-span-5">
<div className="absolute inset-0 bg-zinc-950/75 lg:bg-zinc-950/60"></div>
<div className="relative p-6 sm:p-8 lg:p-9">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-emerald-200/90" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                          Slide 02 / 03
                        </div>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
                          Mount Shasta
                        </h3>
<p className="mt-1 text-sm text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                          Mountain horizon, wide-open breath.
                        </p>
</div>
<span className="hidden sm:grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="20" data-icon="lucide:mountain-snow" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Landmark</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Volcanic peak</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Climate</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Four seasons</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Feeling</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Still + vast</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Distance</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Regional access</div>
</div>
</div>
</div>
<p className="mt-5 text-sm leading-relaxed text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                      The Mount Shasta region sets the tone: clear mornings, long sightlines, and a sense of spaciousness that changes how you think and move. It’s nature as a daily reference point—not a weekend escape.
                    </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" href="#territory">
                        View next territory
                        <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/0 px-5 py-3 text-sm font-medium text-emerald-200 ring-1 ring-emerald-300/20 hover:bg-emerald-300/10 transition" data-learn="shasta" type="button">
                        Learn more
                        <span className="iconify" data-height="18" data-icon="lucide:info" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="mt-7 hidden md:flex items-center justify-between">
<div aria-label="Slide navigation dots" className="flex items-center gap-2">
<button aria-label="Go to slide 1" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="0"></button>
<button aria-label="Go to slide 2" className="dot h-2.5 w-2.5 rounded-full bg-emerald-300/90 ring-1 ring-emerald-200/30" data-index="1"></button>
<button aria-label="Go to slide 3" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="2"></button>
</div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                        Use arrow keys to navigate
                      </div>
</div>
</div>
</div>
</div>
</article>

<article className="relative w-full shrink-0">
<div className="grid min-h-[32rem] grid-cols-1 lg:grid-cols-12">
<div className="relative lg:col-span-7">
<img alt="Forest and water" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,9,11,0.72),rgba(9,9,11,0.15),rgba(9,9,11,0.0))] lg:bg-[linear-gradient(to_right,rgba(9,9,11,0.65),rgba(9,9,11,0.05),rgba(9,9,11,0.0))]"></div>
</div>
<div className="relative lg:col-span-5">
<div className="absolute inset-0 bg-zinc-950/75 lg:bg-zinc-950/60"></div>
<div className="relative p-6 sm:p-8 lg:p-9">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-emerald-200/90" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                          Slide 03 / 03
                        </div>
<h3 className="mt-2 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
                          Forest &amp; Water
                        </h3>
<p className="mt-1 text-sm text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                          Trees, air, water, silence.
                        </p>
</div>
<span className="hidden sm:grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="20" data-icon="lucide:droplets" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Soundtrack</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Wind + birds</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Air</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Forest-clean</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Water</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Creeks + runoff</div>
</div>
<div>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Light</div>
<div className="mt-1 text-sm font-medium text-zinc-100" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Sun through pines</div>
</div>
</div>
</div>
<p className="mt-5 text-sm leading-relaxed text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                      The environment is infrastructure: shade in summer, water cycles, habitat, and the psychological steadiness of green. We plan for fire awareness, watershed respect, and long-term care.
                    </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-200 transition" href="#overview">
                        Project overview
                        <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" data-learn="forest" type="button">
                        Learn more
                        <span className="iconify" data-height="18" data-icon="lucide:info" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="mt-7 hidden md:flex items-center justify-between">
<div aria-label="Slide navigation dots" className="flex items-center gap-2">
<button aria-label="Go to slide 1" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="0"></button>
<button aria-label="Go to slide 2" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="1"></button>
<button aria-label="Go to slide 3" className="dot h-2.5 w-2.5 rounded-full bg-emerald-300/90 ring-1 ring-emerald-200/30" data-index="2"></button>
</div>
<div className="inline-flex items-center gap-2 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="iconify" data-height="16" data-icon="lucide:mouse" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Scroll for values
                      </div>
</div>
</div>
</div>
</div>
</article>
</div>

<div className="pointer-events-none absolute inset-0 hidden md:block">
<div className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2">
<button aria-label="Previous slide" className="inline-flex items-center justify-center rounded-2xl bg-black/30 p-3 ring-1 ring-white/10 backdrop-blur hover:bg-black/40 transition" id="prevBtnOverlay">
<span className="iconify" data-height="22" data-icon="lucide:chevron-left" data-width="22" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2">
<button aria-label="Next slide" className="inline-flex items-center justify-center rounded-2xl bg-black/30 p-3 ring-1 ring-white/10 backdrop-blur hover:bg-black/40 transition" id="nextBtnOverlay">
<span className="iconify" data-height="22" data-icon="lucide:chevron-right" data-width="22" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2">
<div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 ring-1 ring-white/10 backdrop-blur">
<button aria-label="Go to slide 1" className="dot h-2.5 w-2.5 rounded-full bg-emerald-300/90 ring-1 ring-emerald-200/30" data-index="0"></button>
<button aria-label="Go to slide 2" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="1"></button>
<button aria-label="Go to slide 3" className="dot h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-white/10 hover:bg-white/25 transition" data-index="2"></button>
</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            Tip: use ← → keys. Slides auto-advance every few seconds (pause on hover).
          </div>
<div className="inline-flex items-center gap-2 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="iconify" data-height="16" data-icon="lucide:shield-check" data-width="16" style={{strokeWidth: '1.5'}}></span>
            Location story builds trust—no hype.
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20" id="overview">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="grid gap-0 lg:grid-cols-12">
<div className="lg:col-span-5 p-6 sm:p-8">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="iconify" data-height="16" data-icon="lucide:layers" data-width="16" style={{strokeWidth: '1.5'}}></span>
              Project overview
            </div>
<h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
              Designed for everyday resilience.
            </h2>
<p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
              This eco‑village is a living system: shared resources, private space, and a culture of maintenance. We prioritize practical sustainability—water, soil, energy, and human rhythms.
            </p>
<div className="mt-6 grid gap-3">
<div className="flex gap-3 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:droplet" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Watershed respect</div>
<div className="mt-1 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Conservation-first systems and long-term planning for dry years.</div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:flame" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Fire-aware stewardship</div>
<div className="mt-1 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Defensible space, maintenance culture, and landscape responsibility.</div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
<span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>People systems</div>
<div className="mt-1 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Clear agreements, light governance, and shared expectations.</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative">
<div className="absolute inset-0">
<img alt="Meadow and trees" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(9,9,11,0.85),rgba(9,9,11,0.25),rgba(9,9,11,0.05))]"></div>
<div className="absolute inset-0 bg-[radial-gradient(40rem_30rem_at_70%_20%,rgba(16,185,129,0.16),transparent_60%)]"></div>
</div>
<div className="relative p-6 sm:p-8 lg:p-10">
<div className="max-w-md lg:ml-auto">
<div className="rounded-3xl bg-black/30 p-5 ring-1 ring-white/10 backdrop-blur">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>What you can expect</div>
<div className="mt-2 text-lg font-medium tracking-tight text-zinc-50" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Clarity, calm, and contribution.</div>
</div>
<span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="20" data-icon="lucide:check" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
<ul className="mt-4 space-y-3">
<li className="flex gap-3 text-sm text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="mt-0.5 text-emerald-200">
<span className="iconify" data-height="18" data-icon="lucide:dot" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
                      A small cohort intake—fit matters more than speed.
                    </li>
<li className="flex gap-3 text-sm text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="mt-0.5 text-emerald-200">
<span className="iconify" data-height="18" data-icon="lucide:dot" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
                      A practical sustainability plan (not performative branding).
                    </li>
<li className="flex gap-3 text-sm text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="mt-0.5 text-emerald-200">
<span className="iconify" data-height="18" data-icon="lucide:dot" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
                      Shared work that respects time, boundaries, and skill.
                    </li>
</ul>
<div className="mt-5 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-200 transition" href="#apply">
                      Apply now
                      <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" href="#territory">
                      Revisit territory
                      <span className="iconify" data-height="18" data-icon="lucide:rewind" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="mt-4 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
                  We’ll share details via email after a quick fit check.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20" id="apply">
<div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-xs text-zinc-300" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<span className="iconify" data-height="16" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
            Contact / Apply
          </div>
<h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
            Join the waitlist.
          </h2>
<p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            Tell us a bit about you. We’ll respond with next steps, timeline, and a short overview packet.
          </p>
<div className="mt-6 space-y-3">
<div className="flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Response time</div>
<div className="mt-1 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Typically within 3–7 days.</div>
</div>
</div>
<div className="flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="iconify" data-height="18" data-icon="lucide:shield" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Privacy</div>
<div className="mt-1 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Your info is only used for intake conversations.</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<form className="grid gap-4" id="applyForm" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs text-zinc-300" htmlFor="name">Full name</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" id="name" name="name" placeholder="Your name" required=""/>
</div>
<div>
<label className="text-xs text-zinc-300" htmlFor="email">Email</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" id="email" name="email" placeholder="you@domain.com" required="" type="email"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs text-zinc-300" htmlFor="timeline">Ideal move timeline</label>
<select className="mt-2 w-full appearance-none rounded-2xl bg-black/30 px-4 py-3 pr-10 text-sm text-zinc-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" id="timeline" name="timeline">
<option>Exploring</option>
<option>0–6 months</option>
<option>6–12 months</option>
<option>1–2 years</option>
</select>
<div className="pointer-events-none -mt-10 mr-4 flex justify-end">
<span className="iconify text-zinc-300" data-height="18" data-icon="lucide:chevron-down" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="text-xs text-zinc-300" htmlFor="role">How you want to participate</label>
<select className="mt-2 w-full appearance-none rounded-2xl bg-black/30 px-4 py-3 pr-10 text-sm text-zinc-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" id="role" name="role">
<option>Resident (future)</option>
<option>Builder / maker</option>
<option>Gardener / land care</option>
<option>Supporter / donor</option>
</select>
<div className="pointer-events-none -mt-10 mr-4 flex justify-end">
<span className="iconify text-zinc-300" data-height="18" data-icon="lucide:chevron-down" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div>
<label className="text-xs text-zinc-300" htmlFor="message">What draws you to this project?</label>
<textarea className="mt-2 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" id="message" name="message" placeholder="A few sentences is perfect." required="" rows="5"></textarea>
</div>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-200 transition" type="submit">
                  Submit application
                  <span className="iconify" data-height="18" data-icon="lucide:send" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="text-xs text-zinc-400" id="formStatus">
                  No payment, no obligation—just a conversation.
                </div>
</div>
</form>
</div>
<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<div className="text-xs text-zinc-400">Prefer email?</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100 hover:text-emerald-100 transition" href="mailto:hello@oakrunevillage.example">
                hello@oakrunevillage.example
                <span className="iconify" data-height="18" data-icon="lucide:arrow-up-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="mx-auto max-w-6xl px-6 pb-10">
<div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
<span className="text-sm font-medium tracking-tight text-zinc-100" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>OR</span>
</span>
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            © <span id="year"></span> Oak Run Eco‑Village. Home page concept.
          </div>
</div>
<div className="flex items-center gap-5 text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
<a className="hover:text-zinc-200 transition" href="#territory">Territory</a>
<a className="hover:text-zinc-200 transition" href="#overview">Overview</a>
<a className="hover:text-zinc-200 transition" href="#apply">Apply</a>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 hidden" id="modal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative mx-auto flex min-h-screen max-w-2xl items-center px-6">
<div className="w-full rounded-3xl bg-zinc-950 ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between border-b border-white/10 p-5">
<div>
<div className="text-xs text-emerald-200/90" id="modalKicker" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Learn more</div>
<div className="mt-1 text-lg font-medium tracking-tight text-zinc-50" id="modalTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Title</div>
</div>
<button aria-label="Close" className="inline-flex items-center justify-center rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition" id="closeModal">
<span className="iconify" data-height="20" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="p-5 sm:p-6">
<p className="text-sm leading-relaxed text-zinc-300" id="modalBody" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>
            ...
          </p>
<div className="mt-5 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Principle</div>
<div className="mt-1 text-sm font-medium text-zinc-100" id="modalP1" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>—</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Practice</div>
<div className="mt-1 text-sm font-medium text-zinc-100" id="modalP2" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>—</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Outcome</div>
<div className="mt-1 text-sm font-medium text-zinc-100" id="modalP3" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>—</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-200 transition" href="#apply" id="modalCTA">
              Join waitlist
              <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 transition" id="modalClose2">
              Close
              <span className="iconify" data-height="18" data-icon="lucide:x" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
