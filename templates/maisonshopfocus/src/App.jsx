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



{
"@context": "https://schema.org/",
"@type": "Product",
"name": "FOCUS",
"description": "Un guide essentiel pour faire taire le bruit, reprendre le contrôle et reconstruire ta discipline.",
"offers": {
"@type": "Offer",
"price": "12.90",
"priceCurrency": "EUR",
"availability": "https://schema.org/InStock",
"url": "https://buy.stripe.com/aFa8wOgKddoGdjF2hh3oA0D"
}
}



      // IntersectionObserver for reveal + analytics demo
      const sections = document.querySelectorAll('[data-section]');
      const reveals = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver((entries)=> {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            const id = entry.target.getAttribute('data-section');
            if (id) console.debug('[view]', id);
          }
        });
      }, { threshold: 0.15 });
      sections.forEach(s => io.observe(s));
      reveals.forEach(r => io.observe(r));

      // Parallax (mouse-based) for hero visuals
      const hero = document.getElementById('hero');
      const parallaxNodes = hero.querySelectorAll('.parallax-will');
      hero.addEventListener('pointermove', (e) => {
        const rect = hero.getBoundingClientRect();
        const rx = (e.clientX - rect.left) / rect.width - 0.5;
        const ry = (e.clientY - rect.top) / rect.height - 0.5;
        parallaxNodes.forEach((el, i) => {
          const depth = (i + 1) * 6;
          el.style.transform = `translate3d(${rx * depth}px, ${ry * depth}px, 0)`;
        });
      });
      hero.addEventListener('pointerleave', () => {
        parallaxNodes.forEach(el => el.style.transform = 'translate3d(0,0,0)');
      });

      // Particles canvas (soft moving stars)
      const canvas = document.getElementById('particles');
      const ctx = canvas.getContext('2d');
      let dpr = Math.min(window.devicePixelRatio || 1, 2);
      let W, H, particles;
      function resize() {
        const { width, height } = hero.getBoundingClientRect();
        W = Math.floor(width);
        H = Math.floor(height);
        canvas.width = W * dpr; canvas.height = H * dpr;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        spawn();
      }
      function spawn() {
        const count = Math.floor((W * H) / 18000);
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          z: Math.random() * 0.6 + 0.4,
          s: Math.random() * 1.2 + 0.2,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2
        }));
      }
      function step() {
        ctx.clearRect(0,0,W,H);
        particles.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -10) p.x = W+10;
          if (p.x > W+10) p.x = -10;
          if (p.y < -10) p.y = H+10;
          if (p.y > H+10) p.y = -10;
          ctx.beginPath();
          const alpha = 0.25 * p.z + 0.1;
          ctx.fillStyle = `rgba(212,175,55,${alpha})`;
          ctx.arc(p.x, p.y, p.s, 0, Math.PI*2);
          ctx.fill();
        });
        requestAnimationFrame(step);
      }
      resize(); step();
      window.addEventListener('resize', resize);

      // CTA micro animation ripple-like glow
      document.querySelectorAll('.gold-cta').forEach(btn => {
        btn.addEventListener('pointerenter', () => btn.classList.add('ring-2','ring-[#E3C46F]/60'));
        btn.addEventListener('pointerleave', () => btn.classList.remove('ring-2','ring-[#E3C46F]/60'));
      });

      // FAQ accordion
      document.querySelectorAll('.accordion-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const panel = btn.parentElement.querySelector('.accordion-panel');
          const icon = btn.querySelector('.accordion-icon');
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          panel.classList.toggle('hidden');
          icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
        });
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
      

<header className="w-full sticky top-0 z-40 backdrop-blur-sm bg-black/10">
<div className="max-w-[1200px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-7 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg aria-hidden="true" className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="font-semibold tracking-tight text-white/90" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>FOCUS</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-white/70">
<a className="hover:text-white" href="#pour-qui">Pour qui</a>
<a className="hover:text-white" href="#programme">Programme</a>
<a className="hover:text-white" href="#preuves">Preuves</a>
<a className="hover:text-white" href="#faq">FAQ</a>
<a aria-label="Obtenir FOCUS — 12,90 €" className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-black gold-cta shadow-sm" href="https://buy.stripe.com/aFa8wOgKddoGdjF2hh3oA0D" rel="noopener" target="_blank">
<span>Obtenir FOCUS</span>
<svg aria-hidden="true" className="w-4 h-4 text-black/80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<section className="relative overflow-hidden" data-section="hero" id="hero">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(700px 350px at 10% 30%, rgba(88,117,191,0.15), transparent 65%), radial-gradient(600px 300px at 90% 20%, rgba(44,79,162,0.20), transparent 70%)'}}></div>
<div className="relative max-w-[1200px] mx-auto px-6 md:px-8 min-h-[92vh] lg:min-h-screen grid lg:grid-cols-2 gap-10 items-center">

<div className="absolute inset-0 -z-10">
<canvas aria-hidden="true" id="particles"></canvas>
</div>

<div className="relative pt-24 lg:pt-0 reveal">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>
            REPRENDS LE CONTRÔLE.<br/>MAÎTRISE-TOI.
          </h1>
<p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
            Un guide essentiel pour faire taire le bruit, reprendre le contrôle et reconstruire ta discipline.
          </p>
<ul className="mt-8 space-y-3 text-white/80">
<li className="flex items-start gap-3">
<span className="mt-1 text-[#D4AF37]">

<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Programme minimaliste pour retrouver ton focus.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-[#D4AF37]">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Dopamine sous contrôle, énergie dirigée.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-[#D4AF37]">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Système simple, durable et efficace.</span>
</li>
</ul>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a aria-label="Obtenir FOCUS — 12,90 €" className="group gold-cta rounded-[12px] px-6 py-4 text-base font-semibold text-black inline-flex items-center gap-2 shadow-lg parallax-will" href="https://buy.stripe.com/aFa8wOgKddoGdjF2hh3oA0D" rel="noopener" target="_blank">
<svg aria-hidden="true" className="w-5 h-5 text-black/80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
<span>Obtenir FOCUS — 12,90 €</span>
</a>
<div className="flex items-center gap-2 text-sm text-white/70">

<svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M9 12l2 2 4-4"></path></svg>
<span>Paiement sécurisé via Stripe • Accès instantané</span>
</div>
</div>
</div>

<div className="relative reveal">
<div className="relative rounded-2xl glass p-4 md:p-5 shadow-2xl">
<div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Homme en costume, regard fixe — esthétique froide et disciplinée" className="w-full h-[360px] md:h-[420px] object-cover parallax-will" decoding="async" loading="eager" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D1321]/70 via-transparent to-transparent pointer-events-none"></div>
</div>
<div className="mt-4 md:mt-5 space-y-3">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Inter\', ui-sans-serif'}}>Commence aujourd’hui. Pas demain.</h3>
<p className="text-white/80 text-sm md:text-base">
                Accès PDF instantané. Méthode simple, sans détour. Résultats réels si tu l’appliques.
              </p>
<a aria-label="Obtenir FOCUS — 12,90 €" className="gold-cta rounded-[12px] px-5 py-3 text-sm font-semibold text-black inline-flex items-center justify-center gap-2 w-full shadow-lg" href="https://buy.stripe.com/aFa8wOgKddoGdjF2hh3oA0D" rel="noopener" target="_blank">
<svg className="w-4 h-4 text-black/80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
                Obtenir FOCUS — 12,90 €
              </a>
<p className="text-xs text-white/60 text-center">Paiement sécurisé via Stripe • Accès instantané</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-28" data-section="pour-qui" id="pour-qui">
<div className="max-w-[1200px] mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center reveal" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>
          Pour ceux qui veulent arrêter de dériver.
        </h2>
<div className="mt-12 grid md:grid-cols-2 gap-6">

<div className="rounded-2xl glass p-8 ring-1 ring-white/10 reveal">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M12 14v8"></path><path d="M8 22h8"></path><path d="M7 9l-4 4 4 4"></path><path d="M17 9l4 4-4 4"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Pour qui</h3>
</div>
<ul className="mt-6 space-y-3 text-white/80">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>Tu procrastines et réfléchis trop.</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>Tu sais quoi faire, mais tu n’agis pas.</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>Tu veux une méthode simple, brutale et efficace.</li>
</ul>
</div>

<div className="rounded-2xl glass p-8 ring-1 ring-white/10 reveal">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">À éviter si</h3>
</div>
<ul className="mt-6 space-y-3 text-white/80">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>Tu cherches la motivation facile.</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>Tu collectionnes le contenu sans passer à l’action.</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>Tu as peur de l’effort et du silence.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-28" data-section="programme" id="programme">
<div className="max-w-[1200px] mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center reveal" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>Ce que tu vas apprendre</h2>
<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition shadow-lg reveal">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M21 4H3"></path><path d="M18 8H6"></path><path d="M19 12H9"></path><path d="M16 16h-6"></path><path d="M11 20H9"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Le Chaos</h3>
</div>
<p className="mt-4 text-white/80">Pourquoi tu t’es perdu (réseaux, validation, comparaison).</p>
</div>

<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition shadow-lg reveal">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 3v18"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">La Rupture Intérieure</h3>
</div>
<p className="mt-4 text-white/80">Couper le bruit, embrasser le silence opératif.</p>
</div>

<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition shadow-lg reveal">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="M12 16a3 3 0 1 0 3 3"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Le Système</h3>
</div>
<p className="mt-4 text-white/80">Routine minimaliste : sommeil, sport, travail profond, lecture.</p>
</div>

<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition shadow-lg reveal">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M14.5 17.5 3 6V3h3L17.5 14.5"></path><path d="m13 19 6-6"></path><path d="M16 16l4 4"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Le Retour du Pouvoir</h3>
</div>
<p className="mt-4 text-white/80">Détachement émotionnel, argent comme outil, relations centrées.</p>
</div>

<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition shadow-lg reveal sm:col-span-2 lg:col-span-1">
<div className="flex items-center gap-3">
<div className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 grid place-content-center">

<svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="m8 3 4 8 5-5 5 9H2z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">L’Ascension</h3>
</div>
<p className="mt-4 text-white/80">Transformer la douleur en énergie, bâtir ton empire personnel.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-28" data-section="preuves" id="preuves">
<div className="max-w-[1200px] mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center reveal" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>
          La liberté, c’est le contrôle de soi.<br className="hidden sm:block"/> Le reste n’est que distraction.
        </h2>
<div className="mt-12 grid md:grid-cols-3 gap-6">
<blockquote className="rounded-2xl glass p-8 ring-1 ring-white/10 reveal">
<div className="text-[#D4AF37] mb-3">

<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M3 7h5v5H6a3 3 0 0 0-3 3v2"></path><path d="M14 7h5v5h-2a3 3 0 0 0-3 3v2"></path></svg>
</div>
<p className="text-white/90">“30 minutes de focus par jour. Le bruit s’efface, la clarté revient.”</p>
</blockquote>
<blockquote className="rounded-2xl glass p-8 ring-1 ring-white/10 reveal">
<div className="text-[#D4AF37] mb-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M3 7h5v5H6a3 3 0 0 0-3 3v2"></path><path d="M14 7h5v5h-2a3 3 0 0 0-3 3v2"></path></svg>
</div>
<p className="text-white/90">“Le silence a remis mes pensées en ordre. Des actions simples, un impact immense.”</p>
</blockquote>
<blockquote className="rounded-2xl glass p-8 ring-1 ring-white/10 reveal">
<div className="text-[#D4AF37] mb-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24"><path d="M3 7h5v5H6a3 3 0 0 0-3 3v2"></path><path d="M14 7h5v5h-2a3 3 0 0 0-3 3v2"></path></svg>
</div>
<p className="text-white/90">“Trois semaines plus tard — moins d’anxiété, plus de résultats.”</p>
</blockquote>
</div>
</div>
</section>

<section className="py-24 md:py-28" data-section="faq" id="faq">
<div className="max-w-[1200px] mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center reveal" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>FAQ</h2>
<div className="mt-10 space-y-4 max-w-3xl mx-auto">

<div className="rounded-xl glass ring-1 ring-white/10 overflow-hidden reveal">
<button aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left accordion-btn" type="button">
<span className="font-semibold">Combien de temps avant les résultats ?</span>
<svg className="w-5 h-5 text-white/70 transition-transform accordion-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-5 pb-5 hidden accordion-panel">
<p className="text-white/80">Dès 7 jours, fort progrès à 30 jours.</p>
</div>
</div>

<div className="rounded-xl glass ring-1 ring-white/10 overflow-hidden reveal">
<button aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left accordion-btn" type="button">
<span className="font-semibold">Est-ce difficile ?</span>
<svg className="w-5 h-5 text-white/70 transition-transform accordion-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-5 pb-5 hidden accordion-panel">
<p className="text-white/80">Simple, pas facile. Durable si tu t’y engages.</p>
</div>
</div>

<div className="rounded-xl glass ring-1 ring-white/10 overflow-hidden reveal">
<button aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left accordion-btn" type="button">
<span className="font-semibold">Combien de temps par jour ?</span>
<svg className="w-5 h-5 text-white/70 transition-transform accordion-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-5 pb-5 hidden accordion-panel">
<p className="text-white/80">45 à 90 minutes selon ton niveau.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-28" data-section="cta-final" id="cta-final">
<div className="max-w-[1200px] mx-auto px-6 md:px-8">
<div className="rounded-2xl glass p-10 md:p-12 ring-1 ring-white/10 text-center reveal">
<h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter, ui-sans-serif'}}>Commence aujourd’hui. Pas demain.</h3>
<p className="mt-4 text-white/80">Chaque jour bruyant te coûte plus que tu ne crois.</p>
<div className="mt-8">
<a aria-label="Obtenir FOCUS — 12,90 €" className="gold-cta rounded-[12px] px-6 py-4 text-base font-semibold text-black inline-flex items-center gap-2 shadow-lg" href="https://buy.stripe.com/aFa8wOgKddoGdjF2hh3oA0D" rel="noopener" target="_blank">
<svg className="w-5 h-5 text-black/80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
              Obtenir FOCUS — 12,90 €
            </a>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]">
<div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="size-7 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">
<svg className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="font-semibold tracking-tight">FOCUS</span>
</div>
<p className="text-sm text-white/60">© 2025 — Tous droits réservés</p>
<nav className="text-sm flex items-center gap-6">
<a className="text-white/70 hover:text-white" href="#">Confidentialité</a>
<a className="text-white/70 hover:text-white" href="#">Conditions</a>
</nav>
</div>
</footer>



    </>
  );
}
