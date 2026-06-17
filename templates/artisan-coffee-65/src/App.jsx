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



      lucide.createIcons();
      
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=3840&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 -z-20 opacity-[0.45]" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,69,19,.35), rgba(139,69,19,0) 65%)'}}></div>
<div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(205,133,63,.28), rgba(205,133,63,0) 65%)'}}></div>
</div>
<header className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-amber-200" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">Artisan Coffee</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm">
<a className="text-white/60 hover:text-white transition-colors" href="#">Our Story</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Collections</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Brew Guides</a>
<button className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-colors [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] hover:bg-white/10">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="tracking-tight">Shop</span>
</button>
</div>
</div>
<section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start mt-10 md:mt-16">

<div className="lg:col-span-5">
<div className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="h-6 w-6 grid place-items-center rounded-xl bg-amber-500/10 text-amber-400">
<i className="w-3.5 h-3.5" data-lucide="award" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-white/70">Award-winning specialty coffee</span>
</div>
<h1 className="sm:text-6xl md:text-7xl leading-[0.95] text-5xl font-semibold text-white tracking-tight mt-5">
                    Craft meets
                    <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(180deg, #fbbf24, rgba(251,191,36,0.65))'}}>exceptional flavor</span>
</h1>
<p className="sm:text-base leading-relaxed text-sm text-white/60 max-w-lg mt-5">
                    Ethically sourced, expertly roasted beans delivered fresh to your door. 
                    Experience coffee that transforms your morning ritual into a moment of pure delight.
                </p>

<div className="mt-6 flex flex-wrap gap-2.5">
<div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-4 h-4" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">100% organic</span>
</div>
<div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">Small-batch roasted</span>
</div>
<div className="border-gradient before:rounded-2xl inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-4 h-4" data-lucide="truck" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">Free shipping</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 mt-8">
<button className="border-gradient before:rounded-2xl group inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-100 text-amber-950 hover:bg-amber-50 px-4 sm:px-5 py-3 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5">
<i className="w-4 h-4" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span>Shop coffee</span>
</button>
<button className="border-gradient before:rounded-2xl group inline-flex hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm text-white tracking-tight rounded-2xl pt-3 pr-4 pb-3 pl-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] gap-2 items-center justify-center">
<i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i>
<span>Brew guide</span>
</button>
</div>

<div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="text-xs text-white/60">Origins</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">12+</div>
</div>
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="text-xs text-white/60">Roasts</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">25+</div>
</div>
<div className="border-gradient before:rounded-3xl overflow-hidden aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="text-xs text-white/60">Rating</div>
<div className="mt-1 text-lg font-medium tracking-tight text-white">4.9★</div>
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
<i className="w-5 h-5 text-amber-300" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<p className="mt-3 text-xs text-white/70 leading-relaxed">
                                            "The Ethiopian Yirgacheffe is extraordinary. Complex notes of bergamot and jasmine in every cup."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Sarah Chen</div>
<div className="text-[11px] text-white/60">Coffee Enthusiast</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto next-1" data-index="1">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-rose-300" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<p className="leading-relaxed text-xs text-white/70 mt-3">
                                            "Finally found my perfect morning ritual. The Colombian blend is smooth and perfectly balanced."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Marcus Rivera</div>
<div className="text-[11px] text-white/60">Barista</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto next-2" data-index="2">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-amber-300" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="leading-relaxed text-xs text-white/70 mt-3">
                                            "Their subscription service is perfect. Fresh beans arrive exactly when I need them."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">Emma Thompson</div>
<div className="text-[11px] text-white/60">Designer</div>
</div>
</div>
</div>
</div>
</div>

<div className="testimonial-card pointer-events-auto hidden" data-index="3">
<div className="border-gradient before:rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="inline-flex w-9 h-9 rounded-xl items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-emerald-300" data-lucide="thumbs-up" strokeWidth="1.5"></i>
</div>
<p className="leading-relaxed text-xs text-white/70 mt-3">
                                            "The attention to detail in sourcing and roasting is evident. This is coffee done right."
                                        </p>
<div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
<img alt="Portrait" className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320"/>
<div>
<div className="text-[11px] font-medium text-white tracking-tight">James Foster</div>
<div className="text-[11px] text-white/60">Chef</div>
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
<i className="w-4 h-4 text-amber-300" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-sm text-amber-200/90">Why Choose Us</span>
</div>
</div>

<h1 className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
        Exceptional Coffee From
        <span className="block">Bean to Cup</span>
</h1>
<p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
        We partner with sustainable farms, roast in small batches, and deliver fresh—bringing you the perfect cup every time.
      </p>

<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 mt-12 gap-6">

<section className="border-gradient before:rounded-3xl group overflow-hidden rounded-3xl pt-5 pr-5 pb-5 pl-5 relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-realtime">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="-right-24 -top-24 bg-amber-500/10 w-72 h-72 rounded-full absolute blur-3xl"></div>

<div className="border-gradient before:rounded-2xl rounded-2xl pt-4 pr-4 pb-4 pl-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-white/80 text-sm mb-3">
<i className="w-4 h-4 text-amber-300" data-lucide="globe" strokeWidth="1.5"></i>
<span className="font-medium">Origin Tracker</span>
</div>
<div className="space-y-3">

<div className="border-gradient before:rounded-xl rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3">
<img alt="Ethiopia" className="h-5 w-5 rounded-full ring-1 ring-white/20" src="https://flagcdn.com/et.svg"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white/90">Ethiopia</p>
<p className="text-xs text-white/60">Yirgacheffe</p>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500" id="us-progress" style={{width: '0%'}}></div>
</div>
</div>
<span className="text-xs text-white/70" id="us-pct">0%</span>
</div>
<p className="mt-2 text-[11px] text-white/50">Floral • Citrus • Tea-like</p>
</div>

<div className="border-gradient before:rounded-xl rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3">
<img alt="Colombia" className="h-5 w-5 rounded-full ring-1 ring-white/20" src="https://flagcdn.com/co.svg"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white/90">Colombia</p>
<p className="text-xs text-white/60">Huila</p>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500" id="bd-progress" style={{width: '0%'}}></div>
</div>
</div>
<span className="text-xs text-white/70" id="bd-pct">0%</span>
</div>
<p className="mt-2 text-[11px] text-white/50">Caramel • Chocolate • Smooth</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-amber-200 hover:bg-amber-500/20 transition [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i>
                View Farms
              </button>
<div className="flex items-center gap-2 text-[11px] text-white/50">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check-circle" strokeWidth="1.5"></i>
                Fair Trade
              </div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Direct Trade Relationships</h3>
<p className="mt-1.5 text-sm text-white/70">
            We work directly with farmers, ensuring fair prices and sustainable practices while bringing you exceptional quality beans.
          </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-borders">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/80 text-sm">
<i className="w-4 h-4 text-orange-300" data-lucide="flame" strokeWidth="1.5"></i>
<span className="font-medium">Roast Profiles</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-white/60">Daily</span>
<i className="w-4 h-4 text-white/40" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
</div>

<div className="overflow-hidden h-36 border-gradient before:rounded-xl rounded-xl mt-3">
<ul className="relative" id="client-list">
<li className="flex pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 ring-1 ring-white/20"></div>
<div>
<p className="text-sm text-white/90">Light Roast</p>
<p className="text-[11px] text-white/50">Bright • Fruity</p>
</div>
</div>
<i className="w-4 h-4 text-amber-300" data-lucide="sunrise" strokeWidth="1.5"></i>
</li>
<li className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 ring-1 ring-white/20"></div>
<div>
<p className="text-sm text-white/90">Medium Roast</p>
<p className="text-[11px] text-white/50">Balanced • Sweet</p>
</div>
</div>
<i className="w-4 h-4 text-orange-300" data-lucide="sun" strokeWidth="1.5"></i>
</li>
<li className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-700 to-amber-950 ring-1 ring-white/20"></div>
<div>
<p className="text-sm text-white/90">Dark Roast</p>
<p className="text-[11px] text-white/50">Bold • Rich</p>
</div>
</div>
<i className="w-4 h-4 text-amber-200" data-lucide="moon" strokeWidth="1.5"></i>
</li>
</ul>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
<i className="w-3.5 h-3.5" data-lucide="thermometer" strokeWidth="1.5"></i>
              Small-batch precision roasting
            </div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Artisan Roasting</h3>
<p className="mt-1.5 text-sm text-white/70">
            Each batch is carefully roasted to unlock the unique characteristics of every bean, from light and delicate to bold and intense.
          </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-collab">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-white/80 text-sm">
<i className="w-4 h-4 text-emerald-300" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium">Subscription Options</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-white/80" data-lucide="package" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">Weekly</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-white/80" data-lucide="package" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">Bi-weekly</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-white/80" data-lucide="package" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">Monthly</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-5 h-5 text-white/80" data-lucide="gift" strokeWidth="1.5"></i>
<span className="text-xs text-white/70">Gift Box</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full ring-2 ring-[#1a0f0a] bg-amber-200 grid place-items-center text-[10px] text-amber-900">☕</div>
<div className="h-6 w-6 rounded-full ring-2 ring-[#1a0f0a] bg-orange-200 grid place-items-center text-[10px] text-orange-900">☕</div>
<div className="h-6 w-6 rounded-full ring-2 ring-[#1a0f0a] bg-rose-200 grid place-items-center text-[10px] text-rose-900">☕</div>
<div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-[#1a0f0a] grid place-items-center text-[10px] text-white/70">+9</div>
</div>
<div className="inline-flex items-center gap-2 text-[11px] text-white/60">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
</span>
                Fresh roasted
              </div>
</div>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Flexible Subscriptions</h3>
<p className="mt-1.5 text-sm text-white/70">
            Never run out of coffee. Choose your frequency, customize your selections, and enjoy fresh beans delivered on your schedule.
          </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-5 md:p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]" id="card-automation">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="border-gradient before:rounded-2xl rounded-2xl p-4 relative overflow-hidden [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center justify-between text-white/80 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-300" data-lucide="beaker" strokeWidth="1.5"></i>
<span className="font-medium">Brew Guides</span>
</div>
<div className="flex items-center gap-2">
<button className="border-gradient before:rounded-full inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-white/80 hover:bg-white/10 transition [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-3.5 h-3.5" data-lucide="play" strokeWidth="1.5"></i>
                  Watch
                </button>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-3">
<div className="border-gradient before:rounded-xl relative rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-xs text-white/80">
<i className="w-4 h-4 text-blue-300" data-lucide="droplet" strokeWidth="1.5"></i>
                  Step 1
                </div>
<p className="mt-2 text-xs text-white/70">Grind fresh</p>
</div>
<div className="border-gradient before:rounded-xl relative rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-xs text-white/80">
<i className="w-4 h-4 text-orange-300" data-lucide="thermometer" strokeWidth="1.5"></i>
                  Step 2
                </div>
<p className="mt-2 text-xs text-white/70">Heat water</p>
</div>
<div className="border-gradient before:rounded-xl relative rounded-xl p-3 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-xs text-white/80">
<i className="w-4 h-4 text-amber-300" data-lucide="coffee" strokeWidth="1.5"></i>
                  Step 3
                </div>
<p className="mt-2 text-xs text-white/70">Pour &amp; enjoy</p>
</div>
</div>

<pre className="mt-4 text-[11px] leading-relaxed border-gradient before:rounded-xl rounded-xl p-3 text-white/80 overflow-x-auto [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">Pour Over Recipe:
• 20g coffee (medium grind)
• 320g water (200°F / 93°C)
• Total time: 3:00 minutes
• Enjoy black or with milk</pre>
</div>
<h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Expert Brew Guides</h3>
<p className="mt-1.5 text-sm text-white/70">
            Master every method from pour-over to espresso. Our detailed guides help you brew café-quality coffee at home.
          </p>
</section>
</div>
</section>

<section className="max-w-7xl mt-40 mr-auto ml-auto pt-16 pr-4 pb-6 pl-4 relative sm:px-6 lg:px-8 lg:mt-40">
<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
          Featured in leading publications
        </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-6 will-change-transform animate-[marquee-left_30s_linear_infinite]">
<div className="flex gap-6 shrink-0 sm:gap-x-6 lg:gap-x-20">
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">COFFEE REVIEW</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">SPECIALTY MAGAZINE</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">BREW DAILY</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[120px] h-[40px] rounded-lg" href="#">BEAN JOURNAL</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[120px] h-[40px] rounded-lg" href="#">ROAST TIMES</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">CUP OF JOE</a>
</div>
<div className="flex shrink-0 sm:gap-x-6 lg:gap-x-20">
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">COFFEE REVIEW</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">SPECIALTY MAGAZINE</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">BREW DAILY</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[100px] h-[40px] rounded-lg" href="#">BEAN JOURNAL</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[100px] h-[40px] rounded-lg" href="#">ROAST TIMES</a>
<a className="inline-flex items-center justify-center text-white/40 text-lg font-medium w-[150px] h-[40px] rounded-lg" href="#">CUP OF JOE</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
<div className="text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Choose Your Perfect Blend</h2>
<p className="mt-3 text-white/60">Flexible plans for every coffee lover</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<h3 className="text-lg font-medium">Discovery</h3>
<p className="mt-1 text-sm text-white/60">Perfect for trying something new</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold">$18</span>
<span className="text-white/60">/bag</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              12oz single origin
            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              Roasted to order
            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              Free shipping over $30
            </li>
</ul>
<button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition">Shop now</button>
</div>

<div className="border-gradient before:rounded-3xl relative rounded-3xl p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-amber-200 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">Most Popular</div>
<h3 className="text-lg font-medium">Subscription</h3>
<p className="mt-1 text-sm text-white/60">Never run out of great coffee</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold">$45</span>
<span className="text-white/60">/month</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              3 bags per month
            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              Curated selections
            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              15% discount + free shipping
            </li>
</ul>
<button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition">Subscribe</button>
</div>

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<h3 className="text-lg font-medium">Wholesale</h3>
<p className="mt-1 text-sm text-white/60">For cafés and businesses</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold">Custom</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              Bulk pricing
            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              Private label options
            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
              Dedicated support
            </li>
</ul>
<button className="border-gradient before:rounded-xl mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-white/15 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">Contact us</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
<div className="text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Frequently asked questions</h2>
<p className="mt-3 text-white/60">Everything you need to know about our coffee</p>
</div>
<div className="mt-8 space-y-3">
<details className="border-gradient before:rounded-2xl group rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            How fresh is the coffee when it arrives?
            <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="mt-3 text-sm text-white/70">We roast your coffee within 24 hours of shipping. You'll receive beans at peak freshness, typically 2-5 days after roasting.</p>
</details>
<details className="border-gradient before:rounded-2xl group rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            Can I customize my subscription?
            <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="mt-3 text-sm text-white/70">Yes! Choose your roast level, grind size, and delivery frequency. Pause, skip, or cancel anytime with no commitment.</p>
</details>
<details className="border-gradient before:rounded-2xl group rounded-2xl p-4 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            What brewing methods do you recommend?
            <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="mt-3 text-sm text-white/70">Our coffees work beautifully with any method—pour-over, French press, espresso, or drip. Each bag includes specific brewing recommendations.</p>
</details>
</div>
</section>

<section className="max-w-4xl mx-auto md:px-10 px-6 pt-16 md:pt-24 pb-24">
<div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-10 relative overflow-hidden [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Start your coffee journey</h2>
<p className="mt-3 text-white/70">Join thousands of coffee lovers enjoying exceptional beans delivered fresh to their door.</p>
<form aria-label="Join the newsletter" className="mt-6 flex flex-col sm:flex-row gap-3">
<label className="sr-only" htmlFor="email">Email</label>
<input className="border-gradient before:rounded-xl w-full rounded-xl placeholder-white/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/30 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" id="email" placeholder="you@email.com" required="" type="email"/>
<button className="border-gradient before:rounded-xl rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-3 text-sm font-medium transition">
            Get 15% off
          </button>
</form>
<p className="mt-3 text-xs text-white/50">First order discount. Unsubscribe anytime.</p>
</div>
</section>


<footer className="max-w-6xl mx-auto md:px-10 px-6 pb-12">
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/50">© <span id="year">2025</span> Artisan Coffee Co.</p>
<nav className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Wholesale</a>
</nav>
</div>

</footer>

    </>
  );
}
