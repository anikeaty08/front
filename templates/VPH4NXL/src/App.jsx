import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    (function () {
      const root = document.getElementById('aura-emeqwpuys');
      if (!root) return;

      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const qAll = (sel) => Array.from(root.querySelectorAll(sel));

      const lines = qAll('[data-line]');
      const nodes = qAll('[data-node]');
      const glows = qAll('[data-glow]');
      const caption = root.querySelector('[data-caption]');

      const showInstant = () => {
        lines.forEach((el) => { el.style.transform = 'none'; el.style.opacity = ''; });
        nodes.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
        if (caption) { caption.style.opacity = '1'; caption.style.transform = 'none'; }
      };

      if (prefersReduced || !window.gsap) {
        // Ensure content is visible without animation
        setTimeout(showInstant, 150);
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Draw lines
      lines.forEach((el, i) => {
        const axis = el.dataset.orientation || 'x';
        const props = axis === 'y' ? { scaleY: 1, duration: 0.5 } : { scaleX: 1, duration: 0.5 };
        tl.to(el, props, i === 0 ? 0 : '<0.06');
      });

      // Reveal nodes and caption
      tl.to(nodes, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.07 }, '-=0.2')
        .to(caption, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1');

      // Subtle float for nodes
      nodes.forEach((el, idx) => {
        const amp = 3 + (idx % 3);
        gsap.to(el, { y: `+=${amp}`, duration: 2.6 + idx * 0.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(el, { x: idx % 2 ? 1 : -1, duration: 3 + (idx % 2), ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });

      // Drift background glows
      glows.forEach((el, idx) => {
        gsap.to(el, { x: idx ? -10 : 10, y: idx ? 10 : -10, scale: 1.05, duration: 12 + idx * 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    })();
  


      // Icons
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isOpen = !mobileMenu.classList.contains('hidden');
        menuBtn.innerHTML = isOpen
          ? '<i data-lucide="x" class="h-5 w-5 text-white"></i>'
          : '<i data-lucide="menu" class="h-5 w-5 text-white"></i>';
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // GSAP background animation (subtle, infinite, respects reduced motion)
      (function () {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const glow1 = document.getElementById('bgGlow1');
        const glow2 = document.getElementById('bgGlow2');
        const radial = document.getElementById('bgRadial');

        if (!glow1 || !glow2 || !radial || !window.gsap) return;

        gsap.to(glow1, {
          x: 40,
          y: -30,
          scale: 1.06,
          rotation: 6,
          duration: 16,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });

        gsap.to(glow2, {
          x: -35,
          y: 45,
          scale: 1.08,
          rotation: -6,
          duration: 18,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });

        gsap.to(radial, {
          opacity: 0.9,
          duration: 14,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      })();

      // Cursor-following focus effect (added per request)
      let focus = document.querySelector(".focus");
      document.addEventListener("mousemove", function(e) {
        let x = e.pageX;
        let y = e.pageY;
        focus.style.background = "radial-gradient(circle at " + x + "px " + y + "px, rgba(190, 255, 255, 0.2), transparent 40%)";
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-600/30 via-cyan-500/20 to-emerald-400/10 blur-3xl" id="bgGlow1" style={{willChange: 'transform'}}></div>
<div className="absolute bottom-0 -right-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-purple-600/20 to-sky-500/10 blur-3xl" id="bgGlow2" style={{willChange: 'transform'}}></div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]" id="bgRadial" style={{opacity: '0.75', willChange: 'opacity'}}></div>

<div className="focus pointer-events-none fixed inset-0" style={{transition: 'background 120ms ease-out', background: 'radial-gradient(circle at 1898px 1198px, rgba(190, 255, 255, 0.2), transparent 40%)'}}></div>
</div>

<header className="relative z-10">
<nav className="flex max-w-7xl md:px-6 mx-auto pt-4 px-4 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="md:w-12 md:h-12 w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white/80 group-hover:text-white transition">
<span className="text-sm font-semibold tracking-tight">NH</span>
</div>
<span className="text-lg font-medium tracking-tight">Niche Hobby Communities</span>
</a>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden hover:bg-white/10" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
<div className="hidden items-center gap-7 md:flex" id="navLinks">
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#about">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#features">Features</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#hub">Communities</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#learn">Resources</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#join">Membership</a>
<div className="hidden h-6 w-px bg-white/10 md:block"></div>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Log in</a>
<button className="group relative inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.06] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full px-4 py-2 items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 text-sm font-normal rounded-full">Sign Up</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs rounded-full" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
</nav>

<div className="mx-auto hidden max-w-7xl px-4 md:hidden" id="mobileMenu">
<div className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#about">About</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#features">Features</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#hub">Communities</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#learn">Resources</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#join">Membership</a>
<div className="my-2 h-px w-full bg-white/10"></div>
<div className="flex items-center gap-2">
<a className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-center text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Log in</a>
<a className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-white/90" href="#">Sign up</a>
</div>
</div>
</div>
</header>

<section className="relative z-10 overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/5gZnCjLmhow?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=5gZnCjLmhow&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1" tabindex="-1" title="Octi"></iframe>
</div>
<div className="absolute inset-0 bg-black/60"></div>
</div>
<div className="mx-auto max-w-7xl px-4 pt-12 pb-6 md:px-6 md:pt-20 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
<div className="md:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-sky-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              New: Start a community in minutes
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Find Your People. Grow Your Passion.
            </h1>
<p className="mt-5 text-base md:text-lg text-slate-300">
              Join niche hobby communities where creativity, curiosity, and connection come alive.
              Whether you sketch Zentangles, build model trains, restore vintage bikes, or collect
              sneakers—we’ve got a space for you.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white/90 hover:ring-2 hover:ring-white/60 transition" href="#hub">
<span>Explore Communities</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group relative inline-flex items-center justify-center min-w-[160px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/80 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.06] hover:text-white" href="#join" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal">Start Your Own Group</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</a>
</div>
<div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="member" className="h-7 w-7 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="member" className="h-7 w-7 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="member" className="h-7 w-7 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
</div>
<span className="">Thousands of enthusiasts are already here</span>
</div>
</div>

<div className="md:col-span-6">
<div className="relative ring-1 ring-white/10 md:p-8 overflow-hidden border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" data-glow=""></div>
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" data-glow=""></div>
</div>
<div className="relative aspect-[7/5]">

<div className="absolute left-10 top-10 h-px w-40 bg-gradient-to-r from-sky-400/50 to-transparent" data-line="" data-orientation="x" style={{transform: 'none', transformOrigin: 'left center', willChange: 'transform'}}></div>
<div className="absolute left-10 top-10 h-40 w-px bg-gradient-to-b from-sky-400/40 to-transparent" data-line="" data-orientation="y" style={{transform: 'none', transformOrigin: 'center top', willChange: 'transform'}}></div>
<div className="absolute right-10 bottom-10 h-px w-40 bg-gradient-to-l from-violet-400/50 to-transparent" data-line="" data-orientation="x" style={{transform: 'none', transformOrigin: 'right center', willChange: 'transform'}}></div>
<div className="absolute right-10 top-16 h-44 w-px bg-gradient-to-b from-emerald-400/40 to-transparent" data-line="" data-orientation="y" style={{transform: 'none', transformOrigin: 'center top', willChange: 'transform'}}></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-px w-56 bg-gradient-to-r from-emerald-400/40 via-sky-400/40 to-violet-400/40" data-line="" data-orientation="x" style={{transform: 'none', transformOrigin: 'center center', willChange: 'transform'}}></div>

<div className="absolute left-6 top-6">
<div className="rounded-xl bg-sky-500/10 ring-1 ring-sky-500/30 px-3 py-2 text-sky-200 text-sm inline-flex items-center gap-2" data-node="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<span className="text-lg">🎨</span> Zentangle &amp; Sketching
      </div>
</div>
<div className="absolute right-8 top-10">
<div className="rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 px-3 py-2 text-emerald-200 text-sm inline-flex items-center gap-2" data-node="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<span className="text-lg">🪴</span> Urban Gardening
      </div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-1/3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/15 px-3 py-2 text-slate-200 text-sm inline-flex items-center gap-2" data-node="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Your Passion, Connected
      </div>
</div>
<div className="absolute left-10 bottom-10">
<div className="rounded-xl bg-violet-500/10 ring-1 ring-violet-500/30 px-3 py-2 text-violet-200 text-sm inline-flex items-center gap-2" data-node="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<span className="text-lg">🚂</span> Model Trains
      </div>
</div>
<div className="absolute right-10 bottom-6">
<div className="rounded-xl bg-rose-500/10 ring-1 ring-rose-500/30 px-3 py-2 text-rose-200 text-sm inline-flex items-center gap-2" data-node="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<span className="text-lg">👟</span> Sneaker Customs
      </div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-8">
<div className="rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/30 px-3 py-2 text-cyan-200 text-sm inline-flex items-center gap-2" data-node="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<span className="text-lg">🧩</span> Puzzles &amp; Board Games
      </div>
</div>
</div>
<div className="mt-5 text-xs text-slate-400 flex items-center gap-2" data-caption="" style={{opacity: '1', transform: 'none', willChange: 'transform, opacity'}}>
<svg className="lucide lucide-sparkle w-4 h-4 text-sky-300" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
    Illustrations of diverse hobbies connected like constellations
  </div>

</div>
</div>
</div>
</div>
</section>

<section className="relative z-10">
<div className="max-w-7xl md:px-6 md:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="md:mb-16 text-center mb-12">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-heart-handshake h-3.5 w-3.5 text-rose-300" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
            About Us
          </div>
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold tracking-tight mt-4">
            A Home for Every Passion
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<div className="flex items-center gap-3 text-slate-300">
<svg className="lucide lucide-target w-5 h-5 text-emerald-300" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm font-medium">Our Mission</span>
</div>
<p className="mt-4 text-slate-300 leading-relaxed">
              At Niche Hobby Communities, we believe every passion—big or small—deserves a home.
              From rare hobbies to emerging creative trends, our platform provides safe spaces where
              enthusiasts can connect, share knowledge, and build lasting friendships.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<div className="flex items-center gap-3 text-slate-300">
<svg className="lucide lucide-book-open w-5 h-5 text-sky-300" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="text-sm font-medium">Our Story</span>
</div>
<p className="mt-4 text-slate-300 leading-relaxed">
              We started with a simple idea: people are happiest when they belong. Large social
              platforms often overlook niche interests, leaving enthusiasts scattered and unseen.
              Here, every community matters. Here, your passion has a place.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10">
<div className="max-w-7xl md:px-6 md:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-badge-check h-3.5 w-3.5 text-emerald-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Platform Benefits
          </div>
<h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Why Join Our Hobby Communities?
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 text-emerald-300 inline-flex items-center justify-center">
<svg className="lucide lucide-layout-grid w-5 h-5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Tailored Spaces</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Join communities designed around your exact passion. No noise, no distractions—just
              people who get it.
            </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-sky-500/10 ring-1 ring-sky-500/30 text-sky-300 inline-flex items-center justify-center">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Learn &amp; Share</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Access tutorials, resources, and challenges curated by hobbyists, for hobbyists.
            </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-violet-500/10 ring-1 ring-violet-500/30 text-violet-300 inline-flex items-center justify-center">
<svg className="lucide lucide-calendar-clock w-5 h-5" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Host Events</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Plan meetups, livestreams, or virtual workshops right from your group hub.
            </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-amber-500/10 ring-1 ring-amber-500/30 text-amber-300 inline-flex items-center justify-center">
<svg className="lucide lucide-gallery-horizontal w-5 h-5" data-lucide="gallery-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3v18"></path><rect height="18" rx="2" width="12" x="6" y="3"></rect><path d="M22 3v18"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Showcase Your Work</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Upload photos, videos, or journals to inspire and learn from others.
            </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300 inline-flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Safe &amp; Supportive</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Every group is moderated to ensure positivity, encouragement, and respect.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="hub">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
<div className="text-center mb-12 md:mb-14">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-users h-3.5 w-3.5 text-sky-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Community Hub
          </div>
<h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Communities You Can Join Today
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05] transition" href="#">
<div className="aspect-video overflow-hidden">
<img alt="Zentangle &amp; Sketching" className="h-full w-full object-cover group-hover:scale-[1.03] transition" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-300">
<span className="text-xl">🎨</span>
<h4 className="text-base font-semibold tracking-tight">Zentangle &amp; Sketching Corner</h4>
</div>
<p className="mt-2 text-sm text-slate-400">
                Share patterns, host doodle challenges, and trade Procreate brushes.
              </p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05] transition" href="#">
<div className="aspect-video overflow-hidden">
<img alt="Sneaker customization" className="h-full w-full object-cover group-hover:scale-[1.03] transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-300">
<span className="text-xl">👟</span>
<h4 className="text-base font-semibold tracking-tight">Sneaker Customization Society</h4>
</div>
<p className="mt-2 text-sm text-slate-400">
                Tips, designs, and inspiration for custom kicks.
              </p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05] transition" href="#">
<div className="aspect-video overflow-hidden">
<img alt="Model trains" className="h-full w-full object-cover group-hover:scale-[1.03] transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-300">
<span className="text-xl">🚂</span>
<h4 className="text-base font-semibold tracking-tight">Model Train Enthusiasts</h4>
</div>
<p className="mt-2 text-sm text-slate-400">
                Guides, layouts, and history deep-dives.
              </p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05] transition" href="#">
<div className="aspect-video overflow-hidden">
<img alt="Urban gardeners" className="h-full w-full object-cover group-hover:scale-[1.03] transition" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-300">
<span className="text-xl">🪴</span>
<h4 className="text-base font-semibold tracking-tight">Urban Gardeners Network</h4>
</div>
<p className="mt-2 text-sm text-slate-400">
                Balcony hacks, microgreens, and sustainable living.
              </p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05] transition" href="#">
<div className="aspect-video overflow-hidden">
<img alt="Board games" className="h-full w-full object-cover group-hover:scale-[1.03] transition" src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-300">
<span className="text-xl">🧩</span>
<h4 className="text-base font-semibold tracking-tight">Puzzle &amp; Board Game Lovers</h4>
</div>
<p className="mt-2 text-sm text-slate-400">
                Strategy discussions, reviews, and global tournaments.
              </p>
</div>
</a>

<div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 ring-1 ring-sky-500/20 p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-sky-500/10 ring-1 ring-sky-500/30 text-sky-300 inline-flex items-center justify-center">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Don’t see your hobby?</h4>
</div>
<p className="mt-3 text-sm text-slate-200">
                Start your own community with just a click and invite others who share your passion.
              </p>
</div>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition" href="#join">
<span>Create a Community</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="learn">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
<div className="text-center mb-12 md:mb-14">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-library h-3.5 w-3.5 text-violet-300" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
            Learning Hub
          </div>
<h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Level Up Your Hobby
          </h3>
<p className="mt-3 text-lg text-slate-300 max-w-2xl mx-auto">
            Guides, tutorials, challenges, and honest reviews—built by the community for the community.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<a className="group rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition" href="#">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 text-emerald-300 inline-flex items-center justify-center">
<svg className="lucide lucide-notebook-pen w-5 h-5" data-lucide="notebook-pen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
</div>
<h4 className="text-base font-semibold tracking-tight">Guides &amp; Tutorials</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Step-by-step hobby masterclasses.
            </p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition" href="#">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-sky-500/10 ring-1 ring-sky-500/30 text-sky-300 inline-flex items-center justify-center">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h4 className="text-base font-semibold tracking-tight">Challenges</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Weekly creative challenges to keep you inspired.
            </p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition" href="#">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-amber-500/10 ring-1 ring-amber-500/30 text-amber-300 inline-flex items-center justify-center">
<svg className="lucide lucide-spotlight w-5 h-5" data-lucide="spotlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.295 19.562 16 22"></path><path d="m17 16 3.758 2.098"></path><path d="m19 12.5 3.026-.598"></path><path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"></path><path d="M8 9V2"></path></svg>
</div>
<h4 className="text-base font-semibold tracking-tight">Spotlights</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Member highlights—because every passion deserves the spotlight.
            </p>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition" href="#">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-violet-500/10 ring-1 ring-violet-500/30 text-violet-300 inline-flex items-center justify-center">
<svg className="lucide lucide-clipboard-check w-5 h-5" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<h4 className="text-base font-semibold tracking-tight">Tools &amp; Reviews</h4>
</div>
<p className="mt-3 text-sm text-slate-300">
              Honest recommendations for apps, gear, and starter kits.
            </p>
</a>
</div>
</div>
</section>

<section className="relative z-10" id="join">
<div className="py-16 md:py-24 px-4 md:px-6">
<div className="max-w-7xl mx-auto rounded-3xl border border-white/10 p-10 md:p-16" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center max-w-3xl mx-auto">
<h3 className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-4 font-semibold">
              Your Hobby Deserves a Home.
            </h3>
<p className="text-lg text-slate-300">
              Join thousands of enthusiasts discovering new friends, new ideas, and new joy in their hobbies.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-black bg-white hover:bg-white/90 transition" href="#">
<span>Sign Up Free</span>
<svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group relative inline-block p-px rounded-xl text-sm font-semibold text-white bg-gray-800 shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-1">Create a Community</span>
<svg className="lucide lucide-plus w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</span>
</a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium">Free to join any community</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-key-round w-4 h-4 text-sky-300" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-sm font-medium">Exclusive member-only resources</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-calendar-heart w-4 h-4 text-violet-300" data-lucide="calendar-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"></path><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
<span className="text-sm font-medium">First access to events</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-shield w-4 h-4 text-amber-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm font-medium">Safe, ad-free environment</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
<div className="mx-auto max-w-2xl">
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Find your niche. Build real connections.
              </h4>
<p className="mt-2 text-sm text-slate-400">
                Explore communities, share your work, and level up with people who care.
              </p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black hover:bg-white/90" href="#hub">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Explore Communities
                </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10" href="#learn">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                  Read Resources
                </a>
</div>
</div>
</div>
<div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
<span>© <span id="year">2025</span> Niche Hobby Communities</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Status</a>
</div>
</div>
</div>
</div>
</section>





    </>
  );
}
