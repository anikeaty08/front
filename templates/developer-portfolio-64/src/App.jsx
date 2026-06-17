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



    // Replace lucide placeholders with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      document.getElementById('year').textContent = new Date().getFullYear();
    });

    // Mouse-follow reveal effect
    const hero = document.getElementById('home');
    const reveal = document.getElementById('reveal');
    const ring = document.getElementById('cursorRing');

    const setPos = (x, y) => {
      const rect = hero.getBoundingClientRect();
      const rx = ((x - rect.left) / rect.width) * 100;
      const ry = ((y - rect.top) / rect.height) * 100;
      reveal.style.setProperty('--mx', rx + '%');
      reveal.style.setProperty('--my', ry + '%');
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    };

    const enter = () => { ring.style.opacity = 1; };
    const leave = () => { ring.style.opacity = 0; };

    hero.addEventListener('mousemove', (e) => setPos(e.clientX, e.clientY));
    hero.addEventListener('mouseenter', enter);
    hero.addEventListener('mouseleave', leave);

    // Touch support
    hero.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      setPos(t.clientX, t.clientY);
      reveal.style.opacity = '1';
    }, { passive: true });
    hero.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      setPos(t.clientX, t.clientY);
    }, { passive: true });
    hero.addEventListener('touchend', () => { reveal.style.opacity = '1'; });

    // About expanding card on scroll — gentle, synchronized interpolation
    const wrapper = document.getElementById('about');
    const cardWrap = document.getElementById('aboutCard');
    const surface = document.getElementById('aboutSurface');

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
    const easeInOut = (p) => (p < 0.5) ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2;

    let initialWidth = null;
    let initialTopPx = null;
    let initialPadL = null;
    let initialPadR = null;

    function measureBase() {
      const cs = getComputedStyle(cardWrap);
      initialTopPx = parseFloat(cs.top) || 0;
      initialPadL = parseFloat(cs.paddingLeft) || 0;
      initialPadR = parseFloat(cs.paddingRight) || 0;
      initialWidth = cardWrap.getBoundingClientRect().width;
    }

    function updateAbout() {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh; // scrollable span while sticky
      const raw = clamp((vh - rect.top) / (total + vh * 0.2), 0, 1);
      const p = easeInOut(raw);

      if (initialWidth === null || initialTopPx === null) {
        measureBase();
      }

      // Height and border radius — smooth to full
      const minH = Math.min(vh * 0.84, 900);
      const targetH = vh;
      const h = Math.round(minH + (targetH - minH) * p);
      surface.style.height = h + 'px';

      const r0 = 28, r1 = 0;
      const radius = r0 + (r1 - r0) * p;
      surface.style.borderRadius = radius + 'px';

      // Width — start together with height
      const startW = initialWidth;
      const endW = window.innerWidth;
      const w = Math.round(startW + (endW - startW) * p);
      cardWrap.style.maxWidth = w + 'px';

      // Gently pull to top instead of snapping
      const topPx = Math.max(0, initialTopPx * (1 - p));
      cardWrap.style.top = topPx + 'px';

      // Gently remove side padding to truly meet edges
      const padL = Math.max(0, initialPadL * (1 - p));
      const padR = Math.max(0, initialPadR * (1 - p));
      cardWrap.style.paddingLeft = padL + 'px';
      cardWrap.style.paddingRight = padR + 'px';
    }

    updateAbout();
    window.addEventListener('scroll', updateAbout, { passive: true });
    window.addEventListener('resize', () => { initialWidth = null; initialTopPx = null; updateAbout(); });

    // Reveal-up on view
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal-up').forEach(el => io.observe(el));
  
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
      

<header className="fixed top-0 left-0 right-0 z-40">
<div className="mx-auto max-w-6xl px-4">
<div className="flex items-center justify-between py-4">
<a className="inline-flex items-center gap-2" href="#">
<span className="h-2 w-2 rounded-full bg-white/80"></span>
<span className="text-sm font-medium tracking-tight text-white/80">TD</span>
</a>
<nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
<a className="hover:text-white" href="#about">About</a>
<a className="hover:text-white" href="#projects">Projects</a>
<a className="hover:text-white" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/5" href="#contact">
<i className="w-4 h-4" data-lucide="send"></i>
<span>Say hello</span>
</a>
</nav>
</div>
</div>
</header>

<section className="sticky top-0 z-0 relative min-h-[100svh] overflow-hidden" id="home">
<img alt="Teertha - dark background" className="absolute inset-0 h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/842b8a6f-171e-4232-a4c4-e491575bee27_800w.png"/>
<div className="reveal-layer" id="reveal">
<img alt="Teertha - revealed" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4637a01-7a29-4dc8-b3dd-ede0e0b58c92_3840w.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30"></div>
<div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center justify-center px-4">
<div className="text-center">
<p className="text-base text-white/70 mb-3 tracking-tight">Hi, I am</p>
<h1 className="text-[clamp(32px,6vw,68px)] leading-[0.95] tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui'}}>
<span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
            Teertha Debnath
          </span>
</h1>
<p className="mt-5 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
          Developer • Creating reliable web experiences with a focus on performance and elegance.
        </p>
<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium tracking-tight hover:bg-white/90" href="#projects">
<i className="w-4 h-4" data-lucide="code-2"></i>
            View Projects
          </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5" href="#contact">
<i className="w-4 h-4" data-lucide="mail"></i>
            Contact
          </a>
</div>
</div>
</div>
<div className="cursor-ring" id="cursorRing"></div>
</section>

<section className="relative h-[240svh]" id="about">
<div className="sticky top-6 sm:top-10 z-10 mx-auto max-w-5xl px-4" id="aboutCard">
<div className="rounded-[28px] border border-black/10 bg-white text-neutral-900 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500" id="aboutSurface" style={{height: 'min(84svh, 900px)'}}>
<div className="grid md:grid-cols-2 gap-8 p-6 sm:p-10">
<div className="space-y-4">
<p className="text-sm font-medium tracking-tight text-neutral-500">About</p>
<h2 className="text-[clamp(22px,3.2vw,36px)] tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui'}}>
              Building thoughtful products with clean code and calm design
            </h2>
<p className="text-neutral-700 leading-relaxed reveal-up">
              I write maintainable interfaces and APIs with a strong emphasis on performance and accessibility.
              I care about tiny details, helpful animations, and systems that scale.
            </p>
<div className="pt-2 grid grid-cols-2 gap-3 reveal-up">
<div className="rounded-xl border border-neutral-200 p-3">
<p className="text-xs text-neutral-500">Focus</p>
<p className="mt-1 text-sm font-medium tracking-tight text-neutral-900">Frontend • Systems</p>
</div>
<div className="rounded-xl border border-neutral-200 p-3">
<p className="text-xs text-neutral-500">Toolbox</p>
<p className="mt-1 text-sm font-medium tracking-tight text-neutral-900">JS/TS, React, Node</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-black/5 to-transparent blur-2xl"></div>
<div className="relative rounded-2xl border border-neutral-200 p-6 reveal-up">
<blockquote className="text-neutral-800 leading-relaxed">
                “Code is a conversation with the future. I aim to leave messages that are clear,
                predictable, and kind to the next person who reads them.”
              </blockquote>
<div className="mt-4 flex items-center gap-3 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="quote"></i>
<span>— Teertha Debnath</span>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 reveal-up">
<div className="rounded-xl border border-neutral-200 px-3 py-2 text-center text-xs text-neutral-700">A11y</div>
<div className="rounded-xl border border-neutral-200 px-3 py-2 text-center text-xs text-neutral-700">Perf</div>
<div className="rounded-xl border border-neutral-200 px-3 py-2 text-center text-xs text-neutral-700">DX</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>
</section>

<section className="relative py-20 sm:py-28" id="projects">
<div className="mx-auto max-w-6xl px-4">
<div className="mb-10 sm:mb-12 flex items-end justify-between">
<div>
<h3 className="text-[clamp(20px,2.6vw,30px)] tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', Inter'}}>Featured Projects</h3>
<p className="mt-2 text-sm text-white/60">A selection of craft-focused builds.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white" href="#contact">
<i className="w-4 h-4" data-lucide="message-square"></i>
          Collaborate
        </a>
</div>
<div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
<article className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition"></div>
<img alt="Dashboard UI" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-medium">Ops Dashboard</h4>
<div className="flex items-center gap-2 text-white/70">
<a aria-label="GitHub" className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a aria-label="Live demo" className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="external-link"></i></a>
</div>
</div>
<p className="mt-2 text-sm text-white/60">Metrics, real-time events, resilient charts.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">React</span>
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">TypeScript</span>
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">WebSockets</span>
</div>
</div>
</article>
<article className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition"></div>
<img alt="API Service" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-medium">Payments API</h4>
<div className="flex items-center gap-2 text-white/70">
<a aria-label="GitHub" className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a aria-label="Live demo" className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="external-link"></i></a>
</div>
</div>
<p className="mt-2 text-sm text-white/60">Secure, idempotent endpoints with great DX.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">Node</span>
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">Prisma</span>
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">Postgres</span>
</div>
</div>
</article>
<article className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition"></div>
<img alt="3D Gallery" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-medium">3D Gallery</h4>
<div className="flex items-center gap-2 text-white/70">
<a aria-label="GitHub" className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a aria-label="Live demo" className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="external-link"></i></a>
</div>
</div>
<p className="mt-2 text-sm text-white/60">Fluid interactions and GPU-accelerated effects.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">WebGL</span>
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">GSAP</span>
<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">Canvas</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative pb-24" id="contact">
<div className="mx-auto max-w-4xl px-4">
<div className="rounded-2xl border border-white/10 p-6 sm:p-10 bg-white/[0.03] backdrop-blur-xl">
<h3 className="text-[clamp(20px,2.6vw,30px)] tracking-tight font-semibold mb-2" style={{fontFamily: '\'Space Grotesk\', Inter'}}>
          Contact
        </h3>
<p className="text-sm text-white/60 mb-6">Open to collaborations and interesting problems.</p>
<form className="grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/60 mb-1">Name</label>
<input className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/20" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Email</label>
<input className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/20" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Message</label>
<textarea className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/20" placeholder="Let’s build something great." rows="5"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-white/70">
<a className="inline-flex items-center gap-2 hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="github"></i> <span className="text-sm">GitHub</span>
</a>
<a className="inline-flex items-center gap-2 hover:text-white" href="mailto:hello@example.com">
<i className="w-4 h-4" data-lucide="mail"></i> <span className="text-sm">Email</span>
</a>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium tracking-tight hover:bg-white/90" type="button">
<i className="w-4 h-4" data-lucide="send"></i>
              Send
            </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
    © <span id="year"></span> Teertha Debnath. All rights reserved.
  </footer>


    </>
  );
}
