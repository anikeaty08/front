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



    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }

    // Filter menu cards
    const filterBtns = Array.from(document.querySelectorAll('.filterBtn'));
    const cards = Array.from(document.querySelectorAll('.menuCard'));

    function setActive(btn) {
      filterBtns.forEach(b => {
        b.className = b.className
          .replace('bg-white text-zinc-950', 'border border-white/10 bg-white/5 text-white')
          .replace('border border-white/10 bg-white/5 text-white', 'border border-white/10 bg-white/5 text-white');
        b.classList.add('hover:bg-white/10');
      });

      btn.classList.remove('border', 'border-white/10', 'bg-white/5', 'text-white', 'hover:bg-white/10');
      btn.classList.add('bg-white', 'text-zinc-950');
    }

    function applyFilter(cat) {
      cards.forEach(card => {
        const c = card.getAttribute('data-cat');
        const show = (cat === 'all' || c === cat);
        card.classList.toggle('hidden', !show);
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');
        setActive(btn);
        applyFilter(cat);
      });
    });

    // Reserve form -> confirmation + WhatsApp message (edit number)
    const reserveForm = document.getElementById('reserveForm');
    const statusEl = document.getElementById('formStatus');
    const whatsBtn = document.getElementById('whatsBtn');

    function buildMessage() {
      const name = (document.getElementById('name')?.value || '').trim();
      const phone = (document.getElementById('phone')?.value || '').trim();
      const date = (document.getElementById('date')?.value || '').trim();
      const time = (document.getElementById('time')?.value || '').trim();
      const notes = (document.getElementById('notes')?.value || '').trim();

      const lines = [
        "Reservation request — KISKO",
        `Name: ${name || "-"}`,
        `Phone: ${phone || "-"}`,
        `Date: ${date || "-"}`,
        `Time: ${time || "-"}`,
        `Notes: ${notes || "-"}`,
      ];
      return lines.join("\n");
    }

    function openWhatsApp() {
      const cafeWhatsAppNumber = "910000000000"; // TODO: replace with your WhatsApp number (countrycode+number)
      const text = encodeURIComponent(buildMessage());
      const url = `https://wa.me/${cafeWhatsAppNumber}?text=${text}`;
      window.open(url, "_blank", "noreferrer");
    }

    if (reserveForm) {
      reserveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (statusEl) {
          statusEl.textContent = "Request saved. Tap WhatsApp to send instantly, or we’ll call you to confirm.";
          statusEl.className = "text-xs text-emerald-200/90";
        }
      });
    }

    if (whatsBtn) {
      whatsBtn.addEventListener('click', openWhatsApp);
    }

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Icon stroke width
    document.querySelectorAll('iconify-icon').forEach(i => {
      i.style.setProperty('--iconify-stroke-width', '1.5');
    });

    // 3D tilt + subtle parallax (minimal, no external libs)
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

    function setupTiltGroup(group) {
      const items = group.querySelectorAll('[data-tilt]');
      if (!items.length) return;

      group.style.perspective = '1200px';

      const state = { raf: 0, x: 0, y: 0, active: false };

      const onMove = (e) => {
        if (prefersReduced) return;
        const rect = group.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        state.x = clamp(dx, -1, 1);
        state.y = clamp(dy, -1, 1);
        if (!state.raf) state.raf = requestAnimationFrame(render);
      };

      const render = () => {
        state.raf = 0;
        const rx = (-state.y * 6);
        const ry = (state.x * 8);

        items.forEach((el) => {
          const intensity = el.id === 'heroParallax' ? 0 : 1;
          el.style.willChange = 'transform';
          el.style.transformStyle = 'preserve-3d';
          el.style.transition = state.active ? 'transform 120ms ease' : 'transform 250ms ease';

          const base = el.getAttribute('style') || '';
          const hasTranslateZ = /translateZ\(/.test(base);

          if (el.id === 'heroParallax') {
            // Parallax on the image itself (keeps existing scale/translateZ)
            el.style.transform = `translateZ(1.25rem) scale(1.06) translate(${state.x * 0.5}rem, ${state.y * 0.5}rem)`;
          } else {
            const lift = hasTranslateZ ? '' : ' translateZ(0.25rem)';
            el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)${lift}`;
          }
        });
      };

      const onEnter = () => { state.active = true; };
      const onLeave = () => {
        state.active = false;
        items.forEach((el) => {
          el.style.transition = 'transform 350ms ease';
          if (el.id === 'heroParallax') {
            el.style.transform = 'translateZ(1.25rem) scale(1.06)';
          } else {
            // If element had its own translateZ in markup, let it remain visually stable
            el.style.transform = '';
          }
        });
      };

      group.addEventListener('mousemove', onMove);
      group.addEventListener('mouseenter', onEnter);
      group.addEventListener('mouseleave', onLeave);
    }

    if (!prefersReduced) {
      document.querySelectorAll('[data-tilt-group]').forEach(setupTiltGroup);
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl"></div>
<div className="absolute top-24 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/15 blur-3xl"></div>
<div className="absolute bottom-[-14rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">
<a className="group inline-flex items-center gap-3" href="#home">
<div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-sm shadow-black/30">
<span className="text-sm font-semibold tracking-tight font-geist" style={{}}>K</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>KISKO</div>
<div className="text-xs text-zinc-300/80 font-geist" style={{}}>Cafe • Pizza • Burgers • Mojitos</div>
</div>
</a>
<nav className="hidden items-center gap-6 text-sm text-zinc-200/90 md:flex">
<a className="hover:text-white transition font-geist" href="#experience" style={{}}>Experience</a>
<a className="hover:text-white transition font-geist" href="#menu" style={{}}>Menu</a>
<a className="hover:text-white transition font-geist" href="#gallery" style={{}}>Gallery</a>
<a className="hover:text-white transition font-geist" href="#reviews" style={{}}>Reviews</a>
<a className="hover:text-white transition font-geist" href="#visit" style={{}}>Visit</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white hover:bg-white/10 transition font-geist" href="#visit" style={{}}>
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
            Get Directions
          </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-100 transition font-geist" href="#reserve" style={{}}>
<iconify-icon icon="solar:calendar-add-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
            Reserve
          </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-zinc-950/90 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="grid gap-2 text-sm text-zinc-200/90">
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition font-geist" href="#experience" style={{}}>Experience</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition font-geist" href="#menu" style={{}}>Menu</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition font-geist" href="#gallery" style={{}}>Gallery</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition font-geist" href="#reviews" style={{}}>Reviews</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 transition font-geist" href="#visit" style={{}}>Visit</a>
<div className="flex gap-2 pt-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white hover:bg-white/10 transition font-geist" href="#visit" style={{}}>
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
              Directions
            </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-100 transition font-geist" href="#reserve" style={{}}>
<iconify-icon icon="solar:calendar-add-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
              Reserve
            </a>
</div>
</div>
</div>
</div>
</header>

<main className="" id="home">
<section className="relative">
<div className="sm:px-6 lg:px-8 sm:pt-14 lg:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-4 pl-4">
<div className="grid gap-10 lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200/90 font-geist" style={{}}>
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-500/50"></span>
              Aesthetic seating • Beautiful view • Crafted flavors
            </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-medium tracking-tight font-playfair bg-emerald-950 bg-cover bg-center mt-5 bg-[url(https://images.unsplash.com/photo-1586999768265-24af89630739?w=1600&amp;q=80)]" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
              KISKO — where the view meets the bite.
            </h1>
<p className="sm:text-base bg-center text-sm text-zinc-100 font-geist text-center bg-emerald-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57cb1a87-fa13-4a73-abbf-f15fde934316_1600w.webp)] max-w-xl bg-cover border-amber-400 mt-4" style={{}}>
              An aesthetic setting with a beautiful view, serving all types of pizza and burgers — plus cold drinks, mojitos, and cocktails made to match the moment.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 hover:bg-zinc-100 transition text-sm font-semibold text-zinc-950 font-geist bg-white rounded-2xl pt-3 pr-5 pb-3 pl-5" href="#menu">
<iconify-icon icon="solar:plate-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                Explore Menu
              </a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition text-sm font-semibold text-white font-geist bg-white/5 border-white/10 border rounded-2xl pt-3 pr-5 pb-3 pl-5" href="#gallery">
<iconify-icon icon="solar:gallery-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                See the Ambience
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-3 max-w-xl" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-center gap-2 text-xs text-zinc-200/80 font-geist" style={{}}>
<iconify-icon icon="solar:stars-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Signature
                </div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist" style={{}}>Aesthetic seating</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Designed for photos &amp; comfort.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-center gap-2 text-xs text-zinc-200/80 font-geist" style={{}}>
<iconify-icon icon="solar:pizza-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Food
                </div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist" style={{}}>All types of pizza</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>From classic to loaded.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-center gap-2 text-xs text-zinc-200/80 font-geist" style={{}}>
<iconify-icon icon="solar:cup-hot-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Drinks
                </div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist" style={{}}>Mojitos &amp; cocktails</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Chilled &amp; refreshing.</div>
</div>
</div>
</div>

<div className="relative" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="-inset-4 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-[2rem] absolute blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/50" data-tilt="" style={{transformStyle: 'preserve-3d', willChange: 'transform', transition: 'transform 350ms'}}>
<div className="relative" style={{transform: 'translateZ(0.75rem)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" style={{transform: 'translateZ(0.25rem)'}}></div><img alt="Cafe ambience with warm lighting and aesthetic seating" className="sm:h-[30rem] lg:h-[34rem] cursor-pointer w-full h-[26rem] object-cover" id="heroParallax" loading="eager" onclick="window.location.href='/SYED's-KISKOcafe'" role="button" src="https://images.unsplash.com/photo-1586999768265-24af89630739?w=1600&amp;q=80" style={{transform: 'translateZ(1.25rem) scale(1.06)', willChange: 'transform'}}/>
<div className="absolute bottom-4 left-4 right-4" style={{transform: 'translateZ(1.5rem)'}}>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur px-4 py-3">
<div className="flex items-center justify-between">
<div className="">
<div className="text-xs text-zinc-200/70 font-geist" style={{}}>Today’s vibe</div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Golden hour seating</div>
</div>
<iconify-icon icon="solar:sun-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur px-4 py-3">
<div className="flex items-center justify-between">
<div className="">
<div className="text-xs text-zinc-200/70 font-geist" style={{}}>Popular</div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Fresh mojitos</div>
</div>
<iconify-icon icon="solar:glass-water-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="grid gap-3 p-4 sm:grid-cols-3" style={{transform: 'translateZ(0.5rem)', transformStyle: 'preserve-3d'}}>
<img alt="Pizza close-up" className="h-28 w-full rounded-2xl object-cover border border-white/10" loading="lazy" src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&amp;fit=crop&amp;w=1200&amp;q=90" style={{transform: 'translateZ(0.75rem)'}}/>
<img alt="Burger with fries" className="h-28 w-full rounded-2xl object-cover border border-white/10" loading="lazy" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=320&amp;q=80" style={{transform: 'translateZ(0.75rem)'}}/>
<img alt="Mojito drink" className="h-28 w-full rounded-2xl object-cover border border-white/10" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{transform: 'translateZ(0.75rem)'}}/>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                Photo-ready corners
              </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:leaf-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                Calm &amp; aesthetic
              </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                Open late (edit hours)
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20" id="experience">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              An aesthetic cafe built for the view
            </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-200/75 font-geist" style={{}}>
              From cozy corners to open seating, KISKO is designed for relaxed conversations, photos, and unforgettable evenings.
            </p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition font-geist" href="#reserve" style={{}}>
<iconify-icon icon="solar:phone-rounded-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
            Call / Reserve
          </a>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-3" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Cafe seating area" className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&amp;fit=crop&amp;w=2000&amp;q=90"/>
<div className="bg-center lg:text-stone-50 bg-slate-50 bg-[url(https://images.unsplash.com/photo-1696422132479-d068aad1af90?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<div className="absolute bottom-0 p-5">
<div className="flex gap-2 text-xs text-zinc-200/75 font-geist gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:sofa-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                Seating
              </div>
<div className="mt-2 text-lg font-semibold tracking-tight font-geist" style={{}}>Comfort-first corners</div>
<div className="bg-center lg:bg-clip-text lg:text-transparent text-sm font-geist bg-gradient-to-tl from-white/100 to-white/50 bg-[url(https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&amp;q=80)] bg-cover mt-1">Soft lighting, calm music, relaxed vibe.</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="City view from cafe window" className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&amp;fit=crop&amp;w=2000&amp;q=90"/>
<div className="bg-gradient-to-t from-zinc-950/75 via-zinc-950/5 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 p-5">
<div className="flex items-center gap-2 text-xs text-zinc-200/75 font-geist" style={{}}>
<iconify-icon icon="solar:buildings-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                View
              </div>
<div className="mt-2 text-lg font-semibold tracking-tight font-geist" style={{}}>Beautiful outlook</div>
<div className="mt-1 text-sm text-zinc-200/70 font-geist" style={{}}>A perfect spot for golden-hour hangouts.</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Cocktail preparation" className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" src="https://images.unsplash.com/photo-1700514015106-4d8480938dcb?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/5 to-transparent"></div>
<div className="pt-5 pr-5 pb-5 pl-5 absolute bottom-0">
<div className="flex items-center gap-2 text-xs text-zinc-200/75 font-geist" style={{}}>
<iconify-icon icon="solar:chef-hat-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                Craft
              </div>
<div className="mt-2 text-lg font-semibold tracking-tight font-geist" style={{}}>Freshly made</div>
<div className="mt-1 text-sm text-zinc-200/70 font-geist" style={{}}>Every pizza, burger, and drink is made with care.</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20" id="menu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden">
<div className="sm:p-8 lg:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                  Menu highlights
                </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-200/75 font-geist" style={{}}>
                  All types of pizza and burgers — plus cold drinks like mojitos and cocktails. Replace items/prices anytime.
                </p>
</div>
<div className="flex flex-wrap gap-2">
<button className="filterBtn inline-flex items-center gap-2 rounded-full bg-white text-zinc-950 px-4 py-2 text-xs font-semibold transition font-geist" data-filter="all" style={{}}>
<iconify-icon icon="solar:menu-dots-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  All
                </button>
<button className="filterBtn inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold hover:bg-white/10 transition font-geist" data-filter="pizza" style={{}}>
<iconify-icon icon="solar:pizza-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Pizza
                </button>
<button className="filterBtn inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold hover:bg-white/10 transition font-geist" data-filter="burgers" style={{}}>
<iconify-icon icon="solar:hamburger-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Burgers
                </button>
<button className="filterBtn inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold hover:bg-white/10 transition font-geist" data-filter="drinks" style={{}}>
<iconify-icon icon="solar:glass-water-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Drinks
                </button>
</div>
</div>
<div className="grid gap-4 lg:grid-cols-3 mt-8 gap-x-4 gap-y-4" data-tilt-group="" style={{perspective: '1200px'}}>
<article className="menuCard rounded-3xl border border-white/10 bg-zinc-950/30 overflow-hidden shadow-sm shadow-black/30" data-cat="pizza" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Cheese pizza" className="w-full h-40 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1573821663912-569905455b1c?w=800&amp;q=80"/>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Classic Cheese Pizza</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Mozzarella, house sauce, oregano.</div>
</div>
<div className="text-sm font-semibold text-white/90 font-geist" style={{}}>₹299+</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:fire-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Oven-baked
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:leaf-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Veg
                    </span>
</div>
</div>
</article>
<article className="menuCard rounded-3xl border border-white/10 bg-zinc-950/30 overflow-hidden shadow-sm shadow-black/30" data-cat="pizza" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Loaded pizza" className="w-full h-40 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1618213837799-25d5552820d3?w=800&amp;q=80"/>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Loaded Signature Pizza</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Extra toppings, bold flavors, crispy base.</div>
</div>
<div className="text-sm font-semibold text-white/90 font-geist" style={{}}>₹399+</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:stars-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      House favorite
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:chef-hat-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Fresh prep
                    </span>
</div>
</div>
</article>
<article className="menuCard rounded-3xl border border-white/10 bg-zinc-950/30 overflow-hidden shadow-sm shadow-black/30" data-cat="burgers" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Burger close-up" className="w-full h-40 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&amp;q=80"/>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Smash Burger</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Juicy patty, melted cheese, special sauce.</div>
</div>
<div className="text-sm font-semibold text-white/90 font-geist" style={{}}>₹249+</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:fork-knife-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Bestseller
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:fire-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Sizzling
                    </span>
</div>
</div>
</article>
<article className="menuCard rounded-3xl border border-white/10 bg-zinc-950/30 overflow-hidden shadow-sm shadow-black/30" data-cat="burgers" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Chicken burger" className="h-40 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&amp;q=80"/>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Crispy Burger</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Crunchy, flavorful, perfectly stacked.</div>
</div>
<div className="text-sm font-semibold text-white/90 font-geist" style={{}}>₹279+</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Quality
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:heart-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Crowd-pleaser
                    </span>
</div>
</div>
</article>
<article className="menuCard rounded-3xl border border-white/10 bg-zinc-950/30 overflow-hidden shadow-sm shadow-black/30" data-cat="drinks" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Mojito drink" className="w-full h-40 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&amp;fit=crop&amp;w=1600&amp;q=90"/>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Mojitos (All flavors)</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>Mint, citrus, ice — refreshingly balanced.</div>
</div>
<div className="text-sm font-semibold text-white/90 font-geist" style={{}}>₹149+</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:snowflake-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Cold
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:dropper-2-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Fresh
                    </span>
</div>
</div>
</article>
<article className="menuCard rounded-3xl border border-white/10 bg-zinc-950/30 overflow-hidden shadow-sm shadow-black/30" data-cat="drinks" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Cocktails on table" className="w-full h-40 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1654074517750-f854f7c27d62?w=800&amp;q=80"/>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Cocktails</div>
<div className="mt-1 text-xs text-zinc-200/70 font-geist" style={{}}>A curated mix for every mood.</div>
</div>
<div className="text-sm font-semibold text-white/90 font-geist" style={{}}>₹199+</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-200/70">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:star-shine-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Premium
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-geist" style={{}}>
<iconify-icon icon="solar:glass-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Crafted
                    </span>
</div>
</div>
</article>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-2" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="rounded-3xl border border-white/10 bg-zinc-950/30 p-6 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<div className="flex items-start justify-between gap-4">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist">Custom orders</div>
<div className="text-sm text-zinc-200/70 font-geist mt-1">Tell us your toppings, spice level, and drink sweetness.</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<iconify-icon icon="solar:settings-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-950/30 p-6 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist">Perfect for hangouts</div>
<div className="text-sm text-zinc-200/70 font-geist mt-1">Friends, dates, birthdays — reserve your spot.</div>
</div>
<div className="grid place-items-center bg-white/5 w-10 h-10 border-white/10 border rounded-2xl">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 bg-gradient-to-r from-white/5 via-transparent to-white/5 p-6 sm:p-8 lg:p-10">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-zinc-950">
<iconify-icon icon="solar:delivery-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist cursor-pointer" onclick="window.location.href='/bandlaguda ghouse nagar'" role="button">Want to place an order?</div>
<div className="text-xs text-zinc-200/70 font-geist" style={{}}>Add your WhatsApp or phone number here.</div>
</div>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center justify-center gap-2 hover:bg-zinc-100 transition text-sm font-semibold text-zinc-950 font-geist bg-white rounded-2xl pt-3 pr-5 pb-3 pl-5" href="/+91 63037 20881">
<iconify-icon className="" icon="solar:chat-round-line-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  WhatsApp Order
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition font-geist" href="#visit" style={{}}>
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Find Us
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              Gallery
            </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-200/75 font-geist" style={{}}>
              High-resolution visuals that match KISKO’s premium aesthetic.
            </p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-200/70 font-geist" style={{}}>
<iconify-icon icon="solar:info-circle-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
            Replace images with your real cafe photos anytime.
          </div>
</div>
<div className="mt-6 grid gap-4 lg:grid-cols-12" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="lg:col-span-7 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<img alt="Cafe seating with warm tone" className="sm:h-96 w-full h-72 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=1600&amp;q=80"/>
</div>
<div className="lg:col-span-5 grid gap-4">
<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<img alt="Coffee and cafe vibes" className="h-36 sm:h-44 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&amp;fit=crop&amp;w=2000&amp;q=90"/>
</div>
<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<img alt="Restaurant interior ambience" className="h-36 sm:h-44 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1449198063792-7d754d6f3c80?w=800&amp;q=80"/>
</div>
</div>
<div className="lg:col-span-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<img alt="Food on table" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1562815240-be666d2600ce?w=800&amp;q=80"/>
</div>
<div className="lg:col-span-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<img alt="Burger platter" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621343607959-5d11ff0f1e39?w=800&amp;q=80"/>
</div>
<div className="lg:col-span-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30" data-tilt="" style={{transition: 'transform 350ms'}}>
<img alt="Mojito glass" className="h-56 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1438368603757-6ceae0151034?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20" id="reviews">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden">
<div className="p-6 sm:p-8 lg:p-10">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                  People love the vibe
                </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-200/75 font-geist" style={{}}>
                  Add your real Google reviews here — these are placeholders.
                </p>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-xs text-zinc-200/80">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="font-semibold text-white font-geist" style={{}}>4.8</span>
<span className="text-zinc-200/70 font-geist" style={{}}>avg rating</span>
</div>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3" data-tilt-group="" style={{perspective: '1200px'}}>
<figure className="rounded-3xl border border-white/10 bg-zinc-950/30 p-6 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-center gap-2 text-xs text-zinc-200/70">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>5.0</span>
</div>
<blockquote className="mt-3 text-sm text-zinc-100/90 font-geist" style={{}}>
                  “The seating is so aesthetic and the view is unreal. Pizza was fresh, and the mojito was perfectly chilled.”
                </blockquote>
<figcaption className="mt-4 flex items-center justify-between text-xs text-zinc-200/70">
<span className="font-medium text-zinc-100/90 font-geist" style={{}}>Ayesha</span>
<span className="font-geist" style={{}}>Evening visit</span>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-zinc-950/30 p-6 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-center gap-2 text-xs text-zinc-200/70">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>4.9</span>
</div>
<blockquote className="mt-3 text-sm text-zinc-100/90 font-geist" style={{}}>
                  “Burgers are juicy and the ambience feels premium. Great spot for photos and hangouts.”
                </blockquote>
<figcaption className="mt-4 flex items-center justify-between text-xs text-zinc-200/70">
<span className="font-medium text-zinc-100/90 font-geist" style={{}}>Rohan</span>
<span className="font-geist" style={{}}>Weekend</span>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-zinc-950/30 p-6 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-center gap-2 text-xs text-zinc-200/70">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>4.8</span>
</div>
<blockquote className="mt-3 text-sm text-zinc-100/90 font-geist" style={{}}>
                  “Cocktails were on point and the whole place has a calm, classy vibe. Definitely coming back.”
                </blockquote>
<figcaption className="mt-4 flex items-center justify-between text-xs text-zinc-200/70">
<span className="font-medium text-zinc-100/90 font-geist" style={{}}>Neha</span>
<span className="font-geist" style={{}}>Night time</span>
</figcaption>
</figure>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20" id="reserve">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-4 lg:grid-cols-12" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="lg:col-span-7 rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="p-6 sm:p-8 lg:p-10">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                Reserve a table
              </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-200/75 font-geist" style={{}}>
                Book your aesthetic spot. We’ll confirm quickly.
              </p>
<form className="mt-6 grid gap-4 sm:grid-cols-2" id="reserveForm">
<label className="grid gap-2">
<span className="text-xs text-zinc-200/70 font-geist" style={{}}>Full name</span>
<input className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white placeholder:text-zinc-400/60 outline-none focus:border-white/20 focus:bg-zinc-950/40 transition" id="name" placeholder="Your name" required=""/>
</label>
<label className="grid gap-2">
<span className="text-xs text-zinc-200/70 font-geist" style={{}}>Phone / WhatsApp</span>
<input className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white placeholder:text-zinc-400/60 outline-none focus:border-white/20 focus:bg-zinc-950/40 transition" id="phone" placeholder="+91..." required=""/>
</label>
<label className="grid gap-2">
<span className="text-xs text-zinc-200/70 font-geist" style={{}}>Date</span>
<input className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white outline-none focus:border-white/20 focus:bg-zinc-950/40 transition" id="date" required="" type="date"/>
</label>
<label className="grid gap-2">
<span className="text-xs text-zinc-200/70 font-geist" style={{}}>Time</span>
<input className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white outline-none focus:border-white/20 focus:bg-zinc-950/40 transition" id="time" required="" type="time"/>
</label>
<label className="grid gap-2 sm:col-span-2">
<span className="text-xs text-zinc-200/70 font-geist" style={{}}>Notes</span>
<input className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white placeholder:text-zinc-400/60 outline-none focus:border-white/20 focus:bg-zinc-950/40 transition" id="notes" placeholder="Window seat, birthday, preferred pizza, etc."/>
</label>
<div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
<div className="text-xs text-zinc-200/70 font-geist" id="formStatus" style={{}}>
                    We’ll use this to confirm your reservation.
                  </div>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition font-geist" style={{}} type="submit">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Submit
                    </button>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition font-geist" id="whatsBtn" style={{}} type="button">
<iconify-icon icon="solar:chat-round-line-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      WhatsApp
                    </button>
</div>
</div>
</form>
</div>
</div>
<div className="lg:col-span-5 grid gap-4">
<div className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<img alt="Cafe counter and drinks" className="h-52 w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=800&amp;q=80"/>
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>KISKO Specials</div>
<div className="mt-1 text-sm text-zinc-200/70 font-geist" style={{}}>Ask for today’s pizza + mojito pairing.</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
<div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-start justify-between gap-4">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Opening hours</div>
<div className="mt-2 grid gap-2 text-sm text-zinc-200/75">
<div className="flex items-center justify-between gap-4">
<span className="text-zinc-200/70 font-geist" style={{}}>Mon — Thu</span>
<span className="font-medium text-zinc-100/90 font-geist" style={{}}>12:00 PM — 11:00 PM</span>
</div>
<div className="flex items-center justify-between gap-4">
<span className="text-zinc-200/70 font-geist" style={{}}>Fri — Sun</span>
<span className="font-medium text-zinc-100/90 font-geist" style={{}}>12:00 PM — 12:00 AM</span>
</div>
</div>
<div className="mt-4 text-xs text-zinc-200/60 font-geist" style={{}}>Edit these times to match your cafe.</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm font-semibold hover:bg-zinc-950/40 transition font-geist" href="#visit" style={{}}>
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Location
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm font-semibold hover:bg-zinc-950/40 transition font-geist" href="#menu" style={{}}>
<iconify-icon icon="solar:plate-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                  Menu
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 lg:mt-20 mb-16" id="visit">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden">
<div className="grid gap-0 lg:grid-cols-2" data-tilt-group="" style={{perspective: '1200px'}}>
<div className="p-6 sm:p-8 lg:p-10">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" style={{fontFamily: 'Fraunces, ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                Visit KISKO
              </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-200/75 font-geist" style={{}}>
                Put your exact address below, connect your map link, and you’re ready to go live.
              </p>
<div className="mt-6 grid gap-4">
<div className="rounded-3xl border border-white/10 bg-zinc-950/30 p-5 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-200/70 font-geist" style={{}}>Address</div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist" style={{}}>Your Street, Your Area, Your City</div>
<div className="mt-1 text-xs text-zinc-200/60 font-geist" style={{}}>Replace with the real cafe location.</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition font-geist" href="tel:+910000000000" id="callLink" style={{}}>
<iconify-icon icon="solar:phone-rounded-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                    Call Now
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition font-geist" href="https://maps.google.com" id="mapsLink" rel="noreferrer" style={{}} target="_blank">
<iconify-icon icon="solar:route-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                    Open Maps
                  </a>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-sm shadow-black/30" data-tilt="" style={{willChange: 'transform', transformStyle: 'preserve-3d', transition: 'transform 350ms'}}>
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Make it yours</div>
<div className="mt-1 text-sm text-zinc-200/70 font-geist" style={{}}>
                        Want your logo, real menu, and your actual photos? Replace text, links, and images — everything is already laid out.
                      </div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<iconify-icon icon="solar:pen-new-square-linear" style={{fontSize: '1.25rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="relative min-h-72 lg:min-h-full" data-tilt="" style={{transformStyle: 'preserve-3d', willChange: 'transform', transition: 'transform 350ms'}}>
<img alt="Beautiful cafe view" className="absolute inset-0 h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1461988366670-48e401bafb0a?w=1600&amp;q=80" style={{transform: 'translateZ(1rem) scale(1.05)', willChange: 'transform'}}/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/85 via-zinc-950/25 to-transparent" style={{transform: 'translateZ(0.25rem)'}}></div>
<div className="absolute bottom-6 left-6 right-6" style={{transform: 'translateZ(1.5rem)'}}>
<div className="rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur p-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-zinc-950">
<span className="text-sm font-semibold tracking-tight font-geist" style={{}}>K</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>KISKO Cafe</div>
<div className="text-xs text-zinc-200/70 font-geist" style={{}}>Pizza • Burgers • Mojitos • Cocktails</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition font-geist" href="#reserve" style={{}}>
<iconify-icon icon="solar:calendar-add-linear" style={{fontSize: '1.125rem', '--iconify-stroke-width': '1.5'}}></iconify-icon>
                      Reserve a spot
                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-200/60">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-zinc-100/80 font-geist" style={{}}>KISKO</span>
<span className="font-geist" style={{}}>©</span>
<span className="font-geist" id="year" style={{}}>2026</span>
<span className="font-geist">All rights reserved</span>
</div>
<div className="flex flex-wrap gap-x-3 gap-y-3 items-center">
<a className="hover:text-zinc-100/90 transition font-geist" href="#menu" style={{}}>Menu</a>
<span className="text-white/20 font-geist" style={{}}>•</span>
<a className="hover:text-zinc-100/90 transition font-geist" href="#gallery" style={{}}>Gallery</a>
<span className="text-white/20 font-geist" style={{}}>•</span>
<a className="hover:text-zinc-100/90 transition font-geist" href="#reserve" style={{}}>Reserve</a>
</div>
</footer>
</div>
</section>
</main>


    </>
  );
}
