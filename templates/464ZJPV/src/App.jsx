import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function () {
    try {
      const headerRow = document.querySelector('header .max-w-7xl > .flex.h-16.items-center.justify-between');
      if (!headerRow) return;

      const brandLink = headerRow.querySelector('a.flex.items-center.gap-3');
      if (!brandLink) return;

      // If the logo is already present, do nothing
      if (brandLink.querySelector('img[alt="Motin"]')) return;

      const img = document.createElement('img');
      img.src = 'motin-logo-white.webp';
      img.alt = 'Motin';
      img.className = 'h-6 sm:h-7 w-auto select-none';
      img.decoding = 'async';
      img.loading = 'eager';

      brandLink.prepend(img);

      const labelSpan = brandLink.querySelector('span');
      if (labelSpan && labelSpan.textContent.trim() === '') {
        labelSpan.textContent = 'Motin';
        labelSpan.classList.add('text-white', 'opacity-90');
      }
    } catch (e) {
      /* no-op */
    }
  })();
      


      (function () {
        const root = document.currentScript && document.currentScript.previousElementSibling ? document.currentScript.previousElementSibling.parentElement : document;
        const counters = Array.from(root.querySelectorAll('.counter'));
        if (!counters.length) return;

        const nf = new Intl.NumberFormat('pt-BR');

        function animateCounter(el) {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          const duration = 1400;
          const stepMs = 120; // >=100ms to avoid short delay blocks
          const steps = Math.max(1, Math.round(duration / stepMs));
          let i = 0;

          function tick() {
            i++;
            const val = Math.round(target * (i / steps));
            el.textContent = el.getAttribute('data-format') === 'pt' ? nf.format(Math.min(val, target)) : Math.min(val, target);
            if (i < steps) setTimeout(tick, stepMs);
          }
          setTimeout(tick, stepMs);
        }

        let started = false;
        function start() {
          if (started) return;
          started = true;
          counters.forEach(animateCounter);
        }

        if ('IntersectionObserver' in window) {
          const io = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { start(); io.disconnect(); } });
          }, { threshold: 0.2 });
          const host = root.querySelector('.counter')?.closest('.relative');
          io.observe(host || counters[0]);
        } else {
          start();
        }
      })();
    


    // Enhanced timeline animation with smooth sequential reveal
    function initSmoothTimeline() {
      const progressLine = document.getElementById('progress-line');
      const timelineSteps = document.querySelectorAll('#aura-emfh5649y .timeline-step');
      const timelineDots = document.querySelectorAll('#aura-emfh5649y .timeline-dot');
      const timelineContainer = document.getElementById('timeline-container');

      if (!progressLine || !timelineSteps.length || !timelineDots.length) return;

      let animationStarted = false;

      function resetTimeline() {
        progressLine.style.height = '0%';
        timelineSteps.forEach(step =>          step.style.opacity = '0';
          step.style.transform = 'translateY(50px)';
        });
        timelineDots.forEach(dot => {
          dot.style.background = '#e2e8f0';
          dot.style.transform = 'scale(0.8)';
          dot.style.opacity = '0.5';
          dot.style.boxShadow = 'none';
        });
      }

      function animateTimeline() {
        if (animationStarted) return;
        animationStarted = true;

        setTimeout(() => {
          progressLine.style.height = '100%';
        }, 200);

        timelineSteps.forEach((, index) => {
          const dot = timelineDots[index];
          const delay = 400 + (index * 600);

          setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0px)';
            if (dot) {
              dot.style.background = '#475569';
              dot.style.transform = 'scale(1)';
              dot.style.opacity = '1';
              dot.style.boxShadow = '0 0 20px rgba(71, 85, 105, 0.4)';
            }
          }, delay);
        });
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateTimeline();
          } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            animationStarted = false;
            resetTimeline();
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '-100px 0px -50px 0px'
      });

      resetTimeline();
      observer.observe(timelineContainer);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSmoothTimeline);
    } else {
      initSmoothTimeline();
    }
  


        <script>
              (function () {
                const section = document.querySelector('.testimonialsCarouselSection');
                if (!section) return;

                const slides = Array.from(section.querySelectorAll('.testimonial-slide'));
                if (!slides.length) return;

                const indicatorsContainer = section.querySelector('#testiIndicators');
                const prevBtn = section.querySelector('#testiPrev');
                const nextBtn = section.querySelector('#testiNext') || section.querySelector('[aria-label="Next testimonial"]');

                if (!indicatorsContainer) return;

                // Remove any pre-rendered indicators and recreate exactly one per slide
                indicatorsContainer.innerHTML = '';

                let current = 0;
                let intervalId = null;
                const AUTOPLAY_MS = 6000;

                // create indicators
                slides.forEach((_, i) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'h-2.5 w-2.5 rounded-full bg-white/30';
                btn.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
                btn.addEventListener('click', () => goTo(i));
                indicatorsContainer.appendChild(btn);
                });

                const indicators = Array.from(indicatorsContainer.children);

                function update() {
                slides.forEach((s, i) => {
                  if (i === current) {
                  s.classList.remove('opacity-0', 'pointer-events-none');
                  s.classList.add('opacity-100', 'pointer-events-auto');
                });
                indicators.forEach((ind, i) => {
                  s.classList.remove('opacity-100', 'pointer-events-auto');
                  s.classList.add('opacity-0', 'pointer-events-none');
                  s.style.zIndex = '';
                  }
                });
                indicators.forEach((ind, i) => {
                  ind.classList.toggle('bg-white', i === current);
                  ind.classList.toggle('bg-white/30', i !== current);
                });

                // Update stars based on current slide
                const starsContainer = section.querySelector('.testimonial-stars');
                if (starsContainer) {
                  const stars = starsContainer.querySelectorAll('svg');
                  const rating = current === 0 ? 4.5 : 5;
                  stars.forEach((star, i) => {
                  if (i < Math.floor(rating)) {         } else {dd('text-yellow-300');
                    star.classList.remove('text-gray-400');
                    star.classList.add('text-yellow-400');lassList.remove('text-yellow-400', 'text-yellow-300');
                  } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                    star.classList.remove('text-gray-400', 'text-yellow-400');
                    star.classList.add('text-yellow-300');
                  } else {
                    star.classList.remove('text-yellow-400', 'text-yellow-300');
                    star.classList.add('text-gray-400');
                  }              function next() { current = (current + 1) % slides.length; update(); }
                  });gth; update(); }
                }
                }
              prevBtn && prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
                function next() { current = (current + 1) % slides.length; update(); }
                function prev() { current = (current - 1 + slides.length) % slides.length; update(); }
                function goTo(idx) { current = idx % slides.length; update(); restartAutoplay(); }              function startAutoplay() {

                prevBtn && prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });tInterval(next, AUTOPLAY_MS);
                nextBtn && nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });
unction stopAutoplay() {
                function startAutoplay() {Interval(intervalId); intervalId = null; }
                stopAutoplay();
                intervalId = setInterval(next, AUTOPLAY_MS);unction restartAutoplay() { stopAutoplay(); startAutoplay(); }
                }
                function stopAutoplay() {              // Pause when not visible in viewport
                if (intervalId) { clearInterval(intervalId); intervalId = null; }ntries => {
                }
                function restartAutoplay() { stopAutoplay(); startAutoplay(); }) startAutoplay(); else stopAutoplay();

                // Pause when not visible in viewportthreshold: 0.3 });
                const io = new IntersectionObserver(entries => {
                entries.forEach(e => {
                  if (e.isIntersecting) startAutoplay(); else stopAutoplay();              // Pause on hover / focus
                });'mouseenter', stopAutoplay);
                }, { threshold: 0.3 });;
                io.observe(section);
);
                // Pause on hover / focus
                section.addEventListener('mouseenter', stopAutoplay);              // initial state
                section.addEventListener('mouseleave', startAutoplay);
                section.addEventListener('focusin', stopAutoplay);play();
                section.addEventListener('focusout', startAutoplay);

                // initial state
                update();
                startAutoplay();
              })();
        


    document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        if (btn) {
          btn.addEventListener('click', () => {
            const isOpen = !nav.classList.contains('hidden');
            nav.classList.toggle('hidden');
            btn.innerHTML = isOpen
              ? '<i data-lucide="menu" stroke-width="1.5" class="w-5 h-5 text-white"></i>'
              : '<i data-lucide="x" stroke-width="1.5" class="w-5 h-5 text-white"></i>';
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }
      });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3 group" href="#"><img alt="Motin" className="sm:h-7 select-none w-auto h-6" decoding="async" loading="eager" src="https://motinfilms.com.br/motin-logo-white.webp"/>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors font-medium text-white/80" href="#">Soluções</a>
<a className="hover:text-white transition-colors font-medium text-white/60" href="#">Portfólio</a>
<a className="hover:text-white transition-colors font-medium text-white/60" href="#">Clientes</a>
<a className="hover:text-white transition-colors font-medium text-white/60" href="#">Metodologia</a>
<a className="hover:text-white transition-colors font-medium text-white/60" href="#">Sobre</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-white/90 transition-colors ring-1 ring-black/5 text-sm font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Solicitar
            Orçamento<svg className="lucide lucide-handshake lucide-fast-forward lucide-sparkles w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="handshake" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg></a>
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>


<div className="hidden md:hidden pb-4" id="mobileNav">
<div className="mt-2 grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-sm font-medium" href="#">Overview</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Features</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Workflow</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Pricing</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Docs</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 transition-colors" href="#">
            Start Designing
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<main className="">
<section className="hero-section relative overflow-hidden min-h-screen flex items-center">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="" preload="auto">
<source src="https://motinfilms.com.br/Showreel.mp4" type="video/mp4"/>
</video>
</div>

<div aria-hidden="true" className="hero-lcd-texture absolute inset-0 pointer-events-none" style={{zIndex: '1'}}></div>

<div aria-hidden="true" className="hero-scanlines absolute inset-0 pointer-events-none" style={{zIndex: '1'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" style={{zIndex: '2'}}>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl">
<div className="rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent">
<div className="relative rounded-3xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md">
<div className="pointer-events-none absolute -top-1 -left-1 w-2/3 h-1/2 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_60%)]"></div>
<div className="pointer-events-none absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.25),transparent_60%)] blur-3xl opacity-60"></div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 -z-10"></div>
<div className="absolute left-1/2 -translate-x-1/2 top-[-10%] w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18)_0%,transparent_60%)] blur-3xl">
</div>
<div className="absolute -right-1/3 top-1/4 w-[38rem] h-[38rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.14)_0%,transparent_60%)] blur-3xl">
</div>
<div className="sm:pt-24 md:pt-28 sm:pb-24 md:pb-28 text-center max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6 relative z-10">

<div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
<span className="text-xs font-medium text-white/90 bg-indigo-500/20 border-indigo-400/30 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2">+10</span>
<span className="text-xs font-medium text-white/70">Anos de atuação</span>
</div>
<h1 className="sm:text-6xl md:text-7xl leading-[1.06] text-4xl font-light tracking-tight font-[Manrope] max-w-5xl mr-auto ml-auto">
          Filmes de alto impacto
          com<span className="block bg-clip-text font-semibold text-transparent bg-gradient-to-r from-slate-700 to-white ring-white/10 mt-1">qualidade cinematográfica</span>
</h1>

<p className="sm:text-lg text-base text-white/70 max-w-2xl mt-6 mr-auto ml-auto">Conectamos marcas e pessoas com
          soluções audiovisuais únicas. Mais de 10 anos transformando ideias em experiências visuais memoráveis.</p>

<div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center"></div>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors text-sm font-medium text-black bg-white ring-black/5 ring-1 rounded-xl pt-3 pr-5 pb-3 pl-5" href="#">Conheça
          nossas soluções<svg className="lucide lucide-image-play lucide-rocket w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="image-play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"></path><path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="m6 21 5-5"></path><circle cx="9" cy="9" r="2"></circle></svg></a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm font-medium text-white bg-white/5 border-white/10 border rounded-xl pt-3 pr-5 pb-3 pl-5" href="#">Ver
          portfólio<svg className="lucide lucide-play w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></a>
</div>

</section>

<section className="bg-black border-white/10 border-t pt-20 pb-20">

<div className="relative -mt-24 sm:-mt-28 md:-mt-32 z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="relative overflow-hidden bg-white/5 ring-white/10 ring-1 rounded-3xl backdrop-blur-md">

<div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(99,102,241,0.28),transparent_60%)]"></div>
<div className="pointer-events-none absolute -bottom-28 -right-16 w-80 h-80 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(168,85,247,0.24),transparent_60%)]"></div>
<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)]"></div>

<div className="relative sm:py-10 md:py-12 pt-8 pr-6 pb-14 pl-6">
<p className="text-center text-sm font-medium uppercase tracking-wide text-white/70">Nossos números</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="text-center">
<div className="flex items-end justify-center gap-2">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">+</span>
<span className="counter text-4xl md:text-6xl font-semibold tracking-tight text-white" data-format="pt" data-target="10">10</span>
</div>
<p className="mt-1 text-sm text-white/80">anos de atuação</p>
</div>

<div className="text-center">
<div className="flex items-end justify-center gap-2">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">+</span>
<span className="counter text-4xl md:text-6xl font-semibold tracking-tight text-white" data-format="pt" data-target="300">300</span>
</div>
<p className="mt-1 text-sm text-white/80">clientes satisfeitos</p>
</div>

<div className="text-center">
<div className="flex items-end justify-center gap-2">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">+</span>
<span className="counter text-4xl md:text-6xl font-semibold tracking-tight text-white" data-format="pt" data-target="500">500</span>
</div>
<p className="mt-1 text-sm text-white/80">filmes registrados</p>
</div>

<div className="text-center">
<div className="flex items-end justify-center gap-2">
<span className="text-4xl md:text-6xl font-semibold tracking-tight text-white">+</span>
<span className="counter text-4xl md:text-6xl font-semibold tracking-tight text-white" data-format="pt" data-target="2000">2.000</span>
</div>
<p className="mt-1 text-sm text-white/80">projetos e filmes entregues</p>
</div>
</div>
</div>
</div>
</div>

</div>
<div className="max-w-7xl mx-auto px-6"></div>
<div className="text-center mb-16">
<h2 className="md:text-5xl leading-tight text-4xl font-light text-white mt-14 mb-6">
      Por que você ainda não investe em
      <span className="font-semibold">audiovisual?</span>
</h2>
</div>
<div className="mt-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-6" id="">

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">01</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-step-back h-5 w-5" data-icon-replaced="true" data-lucide="step-back" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"></path><path d="M21 20V4"></path></svg>
</div>
<p className="mt-4 text-white font-medium">Vídeos genéricos?</p>
<p className="text-white/90 text-sm">Tenha filmes com linguagem moderna e impacto para destacar sua empresa no mercado.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60 radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="-[11px] text-white/70 group-hover:text-white/90">02</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-timer-reset w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="timer-reset" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2h4"></path><path d="M12 14v-4"></path><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"></path><path d="M9 17H4v5"></path></svg>
</div>
<p className="mt-4 text-white font-medium">Falta de tempo para planejar?</p>
<p className="text-white/90 text-sm">Cuidamos de todo o processo, do conceito à entrega, para que você foque no seu negócio.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">03</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-chevrons-left-right-ellipsis w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chevrons-left-right-ellipsis" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01"></path><path d="M16 12h.01"></path><path d="m17 7 5 5-5 5"></path><path d="m7 7-5 5 5 5"></path><path d="M8 12h.01"></path></svg>
</div>
<p className="mt-4 text-white font-medium">Roteiros confusos?</p>
<p className="text-white/90 text-sm">Nossos roteiristas criam narrativas que simplificam a complexidade do seu negócio.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">04</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-camera w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="camera" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<p className="mt-4 text-white font-medium">Falta de equipamentos?</p>
<p className="text-white/90 text-sm">Contamos com tecnologia de ponta e equipe especializada para produções cinematográficas.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">05</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-wallet-minimal w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="wallet-minimal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 14h.01"></path><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path></svg>
</div>
<p className="mt-4 text-white font-medium">Orçamento limitado?</p>
<p className="text-white/90 text-sm">Oferecemos soluções personalizadas e formas de pagamento que se encaixam na sua necessidade.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">06</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-user-round-x w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="user-round-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 21a8 8 0 0 1 11.873-7"></path><circle cx="10" cy="8" r="5"></circle><path d="m17 17 5 5"></path><path d="m22 17-5 5"></path></svg>
</div>
<p className="mt-4 text-white font-medium">Baixa percepção de autoridade?</p>
<p className="text-white/90 text-sm">Elevamos a imagem da sua marca, transmitindo profissionalismo e credibilidade.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">07</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-cloud-download w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="cloud-download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg>
</div>
<p className="font-medium text-white mt-4">Comunicação desatualizada?</p>
<p className="text-white/90 text-sm">Modernizamos sua marca com vídeos que conversam com a linguagem das redes sociais.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-zinc-800 p-5 ring-1 ring-black/10 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-zinc-500 hover:to-zinc-700">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(63,63,70,0.06), transparent 60%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/70 group-hover:text-white/90">08</span>
</div>
<div className="mt-4">
<div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-eye-closed w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="eye-closed" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-.722-3.25"></path><path d="M2 8a10.645 10.645 0 0 0 20 0"></path><path d="m20 15-1.726-2.05"></path><path d="m4 15 1.726-2.05"></path><path d="m9 18 .722-3.25"></path></svg>
</div>
<p className="mt-4 text-white font-medium">Vídeos cansativos?</p>
<p className="text-white/90 text-sm">Unimos criatividade e técnicas avançadas de edição para prender a atenção do espectador.</p>
</div>
</div></article>
</div>
</div>
</section>

<section className="relative sm:px-6 lg:px-8 sm:pt-16 lg:pt-20 max-w-7xl mr-auto ml-auto pt-12 pr-4 pl-4">
<div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="animate-fade-slide-left delay-100 flex gap-3 items-center">
<div className="h-px flex-1 bg-gradient-to-r from-[#deddda] via-[#9a9996] to-[#000000]"></div><div className="gradient-border">
<div className="gradient-border-inner px-4 py-2">
</div>
</div>
</div>
<h1 className="animate-fade-slide-left delay-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-3xl font-semibold text-white tracking-tight">Impacto em cada cena, essência em cada <span className="bg-clip-text text-transparent bg-gray-400">frame</span></h1>
</div>
<div className="lg:col-span-5 space-y-6 lg:space-y-8">
<div className="animate-fade-slide-right delay-300 hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10 border-0 rounded-2xl px-2 py-0 backdrop-blur-none">
<p className="leading-relaxed sm:text-base text-sm text-neutral-300 mb-4">Mais de 80% do tráfego online é gerado por vídeos. O futuro é audiovisual e sua marca precisa de uma produtora de vídeo experiente para causar impacto no mercado. Com a Motin Films, você pode se comunicar com a mesma qualidade cinematográfica de grandes marcas e contar sua história de forma memorável.
Com mais de 10 anos de experiência e certificação Ancine, transformamos a complexidade de seus produtos e serviços em narrativas poderosas e irresistíveis.
</p>
</div>
<div className="animate-fade-slide-right delay-400 flex flex-col sm:flex-row gap-4">
<button className="group inline-flex gap-3 hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 hover:scale-105 text-sm font-medium text-slate-900 bg-gradient-to-b from-white to-gray-300 rounded-full pt-3 pr-6 pb-3 pl-6 items-center justify-center">Veja Nosso Portfólio!<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg></button>
</div>
</div>
</div>
</section>
<section className="relative z-10 mb-10 animate-[fadeInUp_1s_ease-out_1s_forwards]" style={{transform: 'translateY(50px)'}}>
<section className="relative z-10 sm:py-24 pt-8 pb-8">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
<div className="text-center mb-6">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Nossos</p>
</div>
<style>
                /* Static, wrapping logo grid */
                .mf-grid {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 1.75rem 2.5rem;
                  /* row-gap column-gap */
                  justify-content: center;
                  align-items: center;
                  padding: 0.5rem 0;
                }
        
                .mf-item {
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  padding: 0.25rem 0.75rem;
                  color: #9ca3af;
                  transition: color .18s ease, transform .18s ease;
                  background: transparent;
                  border-radius: 0.5rem;
                  font-size: 1rem;
                  font-weight: 500;
                  text-align: center;
                  line-height: 1.2;
                  flex: 0 1 auto;
                  /* allow items to shrink and wrap to next line */
                  max-width: 13rem;
                  /* avoid one very long label stretching layout */
                  word-break: break-word;
                  /* if a single name is very long, break it gracefully */
                }
        
                .mf-item:hover {
                  color: #ffffff;
                  transform: translateY(-3px);
                }
        
                /* Smaller devices adjustments */
                @media (max-width: 640px) {
                  .mf-grid {
                    gap: 1rem 1.25rem;
                  }
        
                  .mf-item {
                    font-size: 0.92rem;
                    max-width: 10.5rem;
                    padding: 0.2rem 0.6rem;
                  }
                }
        
                @media (min-width: 1280px) {
                  .mf-item {
                    max-width: 14.5rem;
                  }
                }
              </style>
<div aria-label="Clientes e parceiros" className="mf-grid" role="list">
<div className="mf-item" role="listitem">Lumicenter</div>
<div className="mf-item" role="listitem">Unimed</div>
<div className="mf-item" role="listitem">Electrolux</div>
<div className="mf-item" role="listitem">ActionCOACH</div>
<div className="mf-item" role="listitem">LJ Santos</div>
<div className="mf-item" role="listitem">Inplasul</div>
<div className="mf-item" role="listitem">Liquexpress</div>
<div className="mf-item" role="listitem">Pasa</div>
<div className="mf-item" role="listitem">Famex</div>
<div className="mf-item" role="listitem">SS&amp;C Blue Prism</div>
<div className="mf-item" role="listitem">Spaten</div>
<div className="mf-item" role="listitem">Warner Pictures</div>
<div className="mf-item" role="listitem">Lumicenter Lighting</div>
<div className="mf-item" role="listitem">Paraná Clínicas</div>
<div className="mf-item" role="listitem">Itaipú</div>
<div className="mf-item" role="listitem">Mercedes Benz</div>
<div className="mf-item" role="listitem">Paris Films</div>
<div className="mf-item" role="listitem">Sony</div>
<div className="mf-item" role="listitem">Itaiupu Binacional</div>
<div className="mf-item" role="listitem">Favretto Mídia Exterior</div>
<div className="mf-item" role="listitem">Compwire</div>
<div className="mf-item" role="listitem">DentalUni</div>
</div>
</div>
</section>

<section className="max-w-7xl mt-10 mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl leading-tight text-4xl font-light text-white mb-6">
            Conheça nosso
            <span className="font-semibold">portfólio</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 rounded-3xl shadow-sm ring-neutral-200 bg-white" href="#work">
<img alt="Wedding ceremony" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-geist text-white/70">Wedding • Ceremony</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium font-geist text-white">Emma &amp; James</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 rounded-3xl shadow-sm ring-neutral-200 bg-white" href="#work">
<img alt="Family portrait" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-geist text-white/70">Family • Portrait</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium font-geist text-white">The Johnsons</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 rounded-3xl shadow-sm ring-neutral-200 bg-white" href="#work">
<img alt="Maternity shoot" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-geist text-white/70">Maternity • Lifestyle</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium font-geist text-white">Expecting Joy</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 rounded-3xl shadow-sm ring-neutral-200 bg-white" href="#work">
<img alt="Engagement shoot" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-geist text-white/70">Engagement • Outdoor</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium font-geist text-white">Alex &amp; Maria</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 rounded-3xl shadow-sm ring-neutral-200 bg-white" href="#work">
<img alt="Corporate headshots" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-geist text-white/70">Corporate • Headshots</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium font-geist text-white">Professional Series
                </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 rounded-3xl shadow-sm ring-neutral-200 bg-white" href="#work">
<img alt="Newborn photography" className="h-48 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs font-geist text-white/70">Newborn • Studio</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium tracking-tight font-geist text-white">Baby Rosa</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 ring-1 hover:shadow ring-neutral-200 text-sm text-neutral-700 font-geist bg-white rounded-full pt-3 pr-5 pb-3 pl-5" href="#work">Ver portfólio completo<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
</div>
</section>

<section className="relative z-10 animate-[fadeInUp_1s_ease-out_1s_forwards]" style={{transform: 'translateY(50px)'}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pb-6 pl-6">
<div className="max-w-2xl mb-8">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400 ring-1 ring-white/10 font-sans hover:ring-slate-400/30 transition-all duration-300">
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300 font-sans animate-pulse">2025</span>
            Soluções
          </div>
<h2 className="md:text-5xl leading-tight text-4xl hover:text-slate-200 transition-colors duration-500 font-semibold text-white tracking-tight max-w-2xl">
            Soluções audiovisuais para empresas</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="relative supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group block bg-gradient-to-tl from-gray-900 to-black ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" href="/servicos/institucional">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-slate-400/30 group-hover:bg-slate-400/10 transition-all duration-300">
<svg className="lucide lucide-briefcase-business lucide-palette group-hover:text-slate-400 group-hover:scale-110 transition-all duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="briefcase-business" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-xs text-slate-500 font-sans group-hover:text-slate-400 transition-colors">01</span>
</div>
<h3 className="group-hover:text-slate-200 transition-colors text-lg font-semibold tracking-tight mb-2">Filmes
              Institucionais</h3>
<p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-sans">Apresente seus
              produtos, serviços, valores e missão de forma envolvente e profissional, fortalecendo a identidade da sua
              marca.</p>
</a>

<a className="relative overflow-hidden hover:bg-neutral-900/90 hover:ring-slate-400/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group block ring-slate-400/30 ring-1 bg-gradient-to-t from-gray-900 to-black rounded-3xl pt-6 pr-6 pb-6 pl-6" href="/servicos/produto">
<span className="inline-flex items-center gap-2 text-[11px] group-hover:bg-slate-400/20 group-hover:text-slate-200 transition-all font-medium text-slate-300 bg-slate-400/10 ring-slate-400/30 ring-1 rounded-full mb-3 pt-1 pr-2.5 pb-1 pl-2.5">Aumente suas vendas!</span>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-slate-400/30 group-hover:bg-slate-400/10 transition-all duration-300">
<svg className="lucide lucide-video group-hover:text-slate-400 group-hover:scale-110 transition-all duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="video" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="text-xs text-slate-500 font-sans group-hover:text-slate-400 transition-colors">02</span>
</div>
<h3 className="group-hover:text-slate-200 transition-colors text-lg font-semibold tracking-tight mb-2">Filmes
              Produto</h3>
<p className="group-hover:text-slate-200 transition-colors text-sm text-slate-300 mb-4">Destaque seus produtos
              de maneira única no mercado, expondo seus diferenciais e impulsionando vendas.</p>
<button className="inline-flex gap-2 ring-1 ring-white/10 hover:bg-neutral-700 hover:scale-105 transition-all duration-200 text-xs font-medium text-slate-100 bg-neutral-800 rounded-xl pt-2 pr-4 pb-2 pl-4 items-center">Saiba mais<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</a>

<a className="relative supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group block bg-gradient-to-tr from-gray-900 to-black ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" href="/eventos-corporativos">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-slate-400/30 group-hover:bg-slate-400/10 transition-all duration-300">
<svg className="lucide lucide-camera group-hover:text-slate-400 group-hover:scale-110 transition-all duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<span className="text-xs text-slate-500 font-sans group-hover:text-slate-400 transition-colors">03</span>
</div>
<h3 className="group-hover:text-slate-200 transition-colors text-lg font-semibold tracking-tight mb-2">Filme
              Evento Corporativo</h3>
<p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-sans">Capture os momentos
              mais importantes dos seus eventos, transformando-os em materiais de divulgação impactantes.</p>
</a>

<a className="relative supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group block bg-gradient-to-bl from-gray-900 to-black ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" href="/filmes-conteudo">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-slate-400/30 group-hover:bg-slate-400/10 transition-all duration-300">
<svg className="lucide lucide-monitor group-hover:text-slate-400 group-hover:scale-110 transition-all duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="monitor" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<span className="text-xs text-slate-500 font-sans group-hover:text-slate-400 transition-colors">04</span>
</div>
<h3 className="group-hover:text-slate-200 transition-colors text-lg font-semibold tracking-tight mb-2">Filmes
              Conteúdo</h3>
<p className="group-hover:text-slate-300 transition-colors text-sm text-slate-400">Dê voz à sua marca nas redes
              sociais com conteúdos estratégicos que informam, conectam e geram autoridade.</p>
</a>

<a className="relative supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group block bg-gradient-to-b from-gray-900 to-black ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" href="/servicos/case">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-slate-400/30 group-hover:bg-slate-400/10 transition-all duration-300">
<svg className="lucide lucide-star group-hover:text-slate-400 group-hover:scale-110 transition-all duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-slate-500 font-sans group-hover:text-slate-400 transition-colors">05</span>
</div>
<h3 className="group-hover:text-slate-200 transition-colors text-lg font-semibold tracking-tight mb-2">Filmes
              Case</h3>
<p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-sans">Demonstre a
              experiência e o sucesso de clientes reais com seu produto ou serviço, construindo credibilidade e
              validando sua expertise.</p>
</a>

<a className="relative supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group block bg-gradient-to-br from-gray-900 to-black ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" href="/servicos/marketing">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-slate-400/30 group-hover:bg-slate-400/10 transition-all duration-300">
<svg className="lucide lucide-rocket group-hover:text-slate-400 group-hover:scale-110 transition-all duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="text-xs text-slate-500 font-sans group-hover:text-slate-400 transition-colors">06</span>
</div>
<h3 className="group-hover:text-slate-200 transition-colors text-lg font-semibold tracking-tight mb-2">Filmes
              Ação de Marketing</h3>
<p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-sans">Divulgue suas
              campanhas promocionais e ações com vídeos que geram engajamento e atraem novos clientes.</p>
</a>
</div>


</div>
</section>

<section className="sm:p-8 bg-gradient-to-b from-gray-900 to-black ring-0 rounded-3xl mt-24 mr-8 ml-8 pt-12 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-2 text-sm text-white/70">
<span className="font-normal font-geist">Uma boa escolha, sempre!</span>
</div>
<div className="mt-2">
<h2 className="md:text-5xl leading-tight text-4xl leading-[0.9] font-medium text-white tracking-tighter font-geist">Por que escolher a Motin Films?</h2>
<p className="sm:text-base text-sm font-normal text-white/70 font-geist mt-1">Conheça nossos pilares</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6" id="">

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/8349e121-2f5a-4f6b-8038-f3a61ac3fa80/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between mx-2 sm:mx-0" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/62f25bc3-52b3-449a-b951-d6fe4fb3f4d2/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex gap-3 items-center">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight font-geist">01. Processo transparente</h3>
<p className="uppercase text-xs text-white/60 tracking-wider font-geist">Do briefing à entrega final</p>
</div>
</div>
<div className="space-y-3">
<p className="text-sm text-white/80 font-geist">Você estará sempre ciente de cada etapa do projeto e terá total controle sobre o resultado.</p>
</div>
<div className="flex gap-2 items-center">
<div className="flex -space-x-1">
<div className="h-6 w-6 ring-2 ring-white/20 flex bg-white/20 rounded-full items-center justify-center">
<svg className="lucide lucide-clock w-[12px] h-[12px]" currentcolor"="" data-lucide="clock" fill="none stroke=" height="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '12px', height: '12px', color: '#fff'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Acompanhamento total</span>
</div>
</div>
<div className="h-1.5 overflow-hidden relative z-10 bg-white/10 rounded-full mt-4">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between mx-2 sm:mx-0" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">02. Equipe especializada</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Marketing + Cinema</p>
</div>
</div>
<div className="space-y-3">
<p className="text-sm text-white/80 font-geist">Unimos conhecimento em marketing com a expertise cinematográfica de nossa equipe para criar filmes que não apenas contem sua história, mas também vendam sua marca.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide h-3 w-3 text-white/70" data-lucide="users-2" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-9-5"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Especialistas multidisciplinares</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/8349e121-2f5a-4f6b-8038-f3a61ac3fa80/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between mx-2 sm:mx-0" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">03. Tecnologia de ponta</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Capturas dinâmicas</p>
</div>
</div>
<div className="space-y-3">
<p className="text-sm text-white/80 font-geist">Utilizamos equipamentos de última geração, incluindo drones e câmeras tecnológicas, para capturas dinâmicas e takes cinematográficos.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide h-3 w-3 text-white/70" data-lucide="cpu" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M20 15h2"></path><path d="M2 9h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path>
</svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Imagem e som de alto nível</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between mx-2 sm:mx-0" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">04. Edição avançada</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Ritmo e linguagem</p>
</div>
</div>
<div className="space-y-3">
<p className="text-sm text-white/80 font-geist">Empregamos técnicas inovadoras de edição, sonoplastia e color grading para
      </p></div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide h-3 w-3 text-white/70" data-lucide="wand-2" fill="none" height="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.3 15 14.1"></path><path d="m20.5 2.5-9 9a2.12 .12 0 0 1-3 0l-2-2a2.12 2.12 0 0 1 0-3l9-9"></path>
</svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Color grading e som</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/8df4d738-0f84-4eb1-aa40-50f8ff6daada/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between mx-2 sm:mx-0" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/3c10d4ea-a2b2-4d56-be3c-6ba9c58c4f8a/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div className="">
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">05. Agilidade na entrega</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Prazo sem perder qualidade</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Com processos otimizados, garantimos a entrega do filme em tempo recorde, sem comprometer a qualidade do projeto.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-green-400"></div>
<span className="text-xs font-geist">Processos otimizados</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-white/70"></div>
<span className="text-xs font-geist">Qualidade preservada</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-xs font-geist">Prazos cumpridos</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '90%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-[url(https://cdn.midjourney.com/099d87a2-e479-4416-bcd5-caee73ed997f/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur grayscale justify-between mx-2 sm:mx-0" style={{}}>
<div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-[url(https://cdn.midjourney.com/099d87a2-e479-4416-bcd5-caee73ed997f/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl grayscale" style={{zIndex: '-1'}}></div>
<div className="space-y-5 relative z-10">
<div className="flex items-center gap-3">
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">06. Abrangência nacional</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Em todo o Brasil</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Não importa onde você esteja, nossa equipe percorre todo o Brasil para garantir que sua produção seja realizada com a mais alta qualidade.</p>
<div className="inline-flex gap-2 bg-white/10 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur items-center">
<svg className="lucide h-3.5 w-3.5 text-white/70" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-xs text-white/70 font-geist">Operação nacional</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>
</div>
<div className="text-center mt-8">
<button className="inline-flex gap-2 hover:bg-white/90 transition text-sm font-semibold text-neutral-900 font-geist bg-white rounded-full pt-3 pr-6 pb-3 pl-6 items-center">Falar com um especialista<svg className="lucide lucide-play w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="message-circle-more" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path></svg></button>
<p className="text-xs text-white/60 font-geist mt-2">Tire suas dúvidas agora mesmo</p>
</div>
</section>

<section className="bg-black border-white/10 border-t pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-white">
            Amplie o alcance da sua mensagem com
            <span className="font-semibold tracking-tight">versões compactas</span>
</h2>
<p className="text-lg text-white/70 max-w-4xl mr-auto ml-auto">
            A Motin Films é a única produtora de vídeos a fornecer versões compactas dos filmes principais contratados,
            atendendo perfeitamente todas as suas necessidades de comunicação.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-700 flex flex-col p-5 sm:p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(160px 160px at 20% 15%, rgba(244,244,245,0.20), transparent 60%), radial-gradient(220px 220px at 80% 85%, rgba(244,244,245,0.12), transparent 60%)'}}>
</div>
<div className="flex items-center justify-between text-white/90">
<div className="inline-flex items-center gap-2 text-white/80">
<svg className="lucide w-5 h-5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 18-5v12L3 14v-3Z"></path>
<path d="M11.6 16.8a2 2 0 1 1-3.2 2.4"></path>
</svg>
<span className="text-sm font-medium">Filme comercial</span>
</div>
</div>
<h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl tracking-tight font-semibold text-white">Filme comercial</h3>
<p className="mt-2 text-sm sm:text-base text-white/90">
              Versão compacta do filme principal para uso em apresentações, feiras, eventos e exibições na televisão.
              Com apelo comercial, o formato destaca os pontos‑chave do seu negócio de forma clara e direta.
            </p>
<div className="mt-5 sm:mt-6 rounded-xl overflow-hidden ring-1 ring-white/20">
<img alt="Cena comercial com equipe de filmagem" className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="mt-5 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 text-xs text-white/85 bg-white/10 ring-1 ring-white/15 rounded-full px-3 py-1">
<svg className="lucide w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                    Duração: 30 segundos
                  </span>
<span className="inline-flex items-center gap-2 text-xs text-white/85 bg-white/10 ring-1 ring-white/15 rounded-full px-3 py-1">
<svg className="lucide w-3.5 h-3.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                    Formatos: Wide (16:9) e Vertical (9:16)
                  </span>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-xl px-4 py-2 ring-1 ring-black/5 hover:bg-white/90 transition-colors" href="#">
                SAIBA MAIS!
                <svg className="lucide w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-700 flex flex-col p-5 sm:p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(160px 160px at 20% 15%, rgba(244,244,245,0.20), transparent 60%), radial-gradient(220px 220px at 80% 85%, rgba(244,244,245,0.12), transparent 60%)'}}>
</div>
<div className="flex items-center justify-between text-white/90">
<div className="inline-flex items-center gap-2 text-white/80">
<svg className="lucide w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
<span className="text-sm font-medium">Filme de performance</span>
</div>
</div>
<h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl tracking-tight font-semibold text-white">Filme de performance
            </h3>
<p className="mt-2 text-sm sm:text-base text-white/90">
              Compactos e altamente eficazes, a versão é ideal para anúncios e campanhas pagas. Com mensagens diretas e
              chamadas comerciais, o formato é projetado para capturar a atenção de potenciais clientes.
            </p>
<div className="mt-5 sm:mt-6 rounded-xl overflow-hidden ring-1 ring-white/20">
<img alt="Campanha de performance com foco em resultados" className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="mt-5 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 text-xs text-white/85 bg-white/10 ring-1 ring-white/15 rounded-full px-3 py-1">
<svg className="lucide w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                    Duração: 15 segundos
                  </span>
<span className="inline-flex items-center gap-2 text-xs text-white/85 bg-white/10 ring-1 ring-white/15 rounded-full px-3 py-1">
<svg className="lucide w-3.5 h-3.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                    Formatos: Wide (16:9) e Vertical (9:16)
                  </span>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-xl px-4 py-2 ring-1 ring-black/5 hover:bg-white/90 transition-colors" href="#">
                SAIBA MAIS!
                <svg className="lucide w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="bg-black border-white/10 border-t pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl leading-tight text-4xl font-light text-white mb-6 tracking-tight font-[Manrope]">
<span className="font-semibold">Nossa metodologia</span>
      Você traz a ideia e nós executamos
    </h2>
<p className="text-white/70 text-lg max-w-3xl mx-auto">
      Na Motin Films, você não precisa se preocupar com nada. Nós cuidamos de cada detalhe para que você
      se concentre no que realmente importa: o crescimento do seu negócio.
    </p>
</div>
<div className="relative" id="timeline-container">

<div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-slate-200 hidden lg:block rounded-full overflow-hidden">
<div className="w-full progress-line rounded-full" id="progress-line" style={{height: '100%', background: 'linear-gradient(rgb(71, 85, 105), rgb(100, 116, 139))', transition: 'height 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', boxShadow: 'rgba(71, 85, 105, 0.3) 0px 0px 10px'}}></div>
</div>
<div className="space-y-20" id="timeline-steps">

<div className="flex flex-col lg:flex-row gap-12 items-center timeline-step" data-step="1" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="transform transition-all duration-500 bg-gradient-to-b from-gray-900 to-black border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-3 lg:justify-end mb-4 items-center">
<span className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-50 font-[Manrope] bg-slate-200/60 rounded-full pt-1 pr-3 pb-1 pl-3">Etapa 01</span>
</div>
<h3 className="text-3xl font-semibold text-slate-50 tracking-tight font-[Manrope] bg-gradient-to-r from-gray-900 to-black mb-3">Planejamento estratégico</h3>
<p className="leading-relaxed font-normal text-slate-300 mb-6">Em uma reunião de briefing, mergulhamos no seu negócio para entender suas necessidades e criar filmes que atendam aos seus objetivos.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span className="text-slate-50">Duração: 60–90 minutos</span>
</div>
</div>
</div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="1" style={{background: 'rgb(71, 85, 105)', transform: 'scale(1)', opacity: '1', transition: '0.8s cubic-bezier(0.25, 0.46 0.45, 0.94)', boxShadow: 'rgba(71, 85, 105, 0.4) 0px 0px 20px'}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="2" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-1 lg:pr-12"></div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="2" style={{background: 'rgb(71, 85, 105)', transform: 'scale(1)', opacity: '1', transition: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', boxShadow: 'rgba(71, 85, 105, 0.4) 0px 0px 20px'}}></div>
<div className="flex-1 lg:pl-12">
<div className="transform transition-all duration-500 bg-gradient-to-b from-gray-900 to-black border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-3 mb-4 items-center">
<span className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-50 font-[Manrope] bg-slate-200/60 rounded-full pt-1 pr-3 pb-1 pl-3">Etapa 02</span>
</div>
<h3 className="text-3xl font-semibold text-slate-50 tracking-tight font-[Manrope] bg-gradient-to-r from-gray-900 to-black mb-3">Roteiro</h3>
<p className="leading-relaxed text-slate-100 mb-6">Nosso time especializado em marketing cria roteiros que não apenas contam sua história, mas tornam sua mensagem clara, impactante e capaz de gerar conversões.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline className="" points="12,6 12,12 16,14"></polyline></svg>
<span className="text-slate-100">Duração: 3–5 dias</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="3" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="transform transition-all duration-500 text-slate-50 bg-gradient-to-tr from-gray-900 to-black border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-3 lg:justify-end mb-4">
<span className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-50 font-[Manrope] bg-slate-200/60 rounded-full pt-1 pr-3 pb-1 pl-3">Etapa 03</span>
</div>
<h3 className="text-3xl font-semibold text-slate-50 tracking-tight font-[Manrope] mb-3">Storyboard</h3>
<p className="leading-relaxed text-slate-100 mb-6">Antes da filmagem, desenvolvemos um storyboard detalhado, planejando meticulosamente cada cena para uma narrativa coerente e envolvente.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span className="text-slate-50">Duração: 45–60 minutos</span>
</div>
</div>
</div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="3" style={{background: 'rgb(71, 85, 105)', transform: 'scale(1)', opacity: '1', transition: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', boxShadow: 'rgba(71, 85, 105, 0.4) 0px 0px 20px'}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="4" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-1 lg:pr-12"></div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="4" style={{background: 'rgb(71, 85, 105)', transform: 'scale(1)', opacity: '1', transition: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', boxShadow: 'rgba(71, 85, 105, 0.4) 0px 0px 20px'}}></div>
<div className="flex-1 lg:pl-12">
<div className="transform transition-all duration-500 bg-gradient-to-b from-gray-900 to-black border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-3 mb-4 items-center">
<span className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-600 bg-slate-200/60 rounded-full px-3 py-1 font-[Manrope]">Etapa 04</span>
</div>
<h3 className="text-3xl font-semibold text-slate-50 tracking-tight font-[Manrope] mb-3">Captação</h3>
<p className="leading-relaxed text-slate-100 bg-gradient-to-r from-gray-900 to-black mb-6">Durante a captação, utilizamos movimentos de câmera inovadores e drones para capturas aéreas impressionantes.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span className="text-slate-50">Duração: 4–6 semanas</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="5" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="transform transition-all duration-500 bg-gradient-to-b from-gray-900 to-black border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-3 lg:justify-end mb-4">
<span className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-600 font-[Manrope] bg-slate-50/60 rounded-full pt-1 pr-3 pb-1 pl-3">Etapa 05</span>
</div>
<h3 className="text-3xl font-semibold text-slate-50 tracking-tight font-[Manrope] bg-gradient-to-r from-gray-900 to-black mb-3">Edição e finalização</h3>
<p className="leading-relaxed-slate-600 text-slate-100 ring-slate-950 mb-6">Nossas técnicas de edição e recursos de pós-produção levam ritmo e linguagem para as produções, elevando a qualidade de cada projeto.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span className="text-slate-100">Duração: variável</span>
</div>
</div>
</div>
<div className="z-10 flex-shrink-0 timeline-dot text-slate-50 w-6 h-6 rounded-full shadow-lg" data-dot="5" style={{background: 'rgb(71, 85, 105)', transform: 'scale(1)', opacity: '1', transition: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', boxShadow: 'rgba(71, 85, 105, 0.4) 0px 0px 20px'}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>
</div>
</div>

</div></section>

<section className="py-20 bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="sm:py-32 text-slate-700 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-gray-400 rounded-3xl pt-24 pb-24">
<div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
<div className="max-w-xl">
<h2 className="text-pretty sm:text-4xl text-3xl font-semibold text-gray-900 tracking-tight">Conheça a equipe por trás do seu sucesso</h2>
<p className="text-lg/8 text-gray-950 mt-6">Nossa equipe multidisciplinar combina expertise em marketing, roteiro, direção, captação e edição para entregar resultados excepcionais.
</p>
</div>
<ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" role="list">
<li className="">
<div className="flex items-center gap-x-6">
<img alt="Maurício Vilar" className="size-16 outline-1 -outline-offset-1 outline-white/10 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="">
<h3 className="text-base/7 font-semibold tracking-tight">Maurício Vilar</h3>
<p className="text-sm/6 font-semibold text-slate-800">Gerente de projetos</p>
</div>
</div>
</li>
<li className="">
<div className="flex items-center gap-x-6">
<img alt="Eduardo Motin" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="">
<h3 className="text-base/7 font-semibold tracking-tight">Eduardo Motin</h3>
<p className="text-sm/6 font-semibold text-slate-800">Gerente geral</p>
</div>
</div>
</li>
<li className="">
<div className="flex items-center gap-x-6">
<img alt="Eduardo Hochica" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="">
<h3 className="text-base/7 font-semibold tracking-tight">Eduardo Hochica</h3>
<p className="text-sm/6 font-semibold text-slate-800">Roteirista</p>
</div>
</div>
</li>
<li className="">
<div className="flex gap-x-6 items-center">
<img alt="Vitor" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="">
<h3 className="text-base/7 font-semibold tracking-tight">Vitor</h3>
<p className="text-sm/6 font-semibold text-slate-800">Diretor Geral</p>
</div>
</div>
</li>
<li className="">
<div className="flex items-center gap-x-6">
<img alt="João Vitor" className="size-16 outline-1 -outline-offset-1 outline-white/10 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="">
<h3 className="text-base/7 font-semibold tracking-tight">João Vitor</h3>
<p className="text-sm/6 font-semibold text-slate-800">Motion designer e Editor</p>
</div>
</div>
</li>
<li className="">
<div className="flex items-center gap-x-6">
<img alt="João Guilherme" className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="">
<h3 className="text-base/7 font-semibold tracking-tight">João Guilherme</h3>
<p className="text-sm/6 font-semibold text-slate-800">Cinegrafista</p>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 sm:px-6 lg:px-8 testimonialsCarouselSection max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="md:text-5xl leading-tight text-4xl font-medium text-white mb-6">Resultados comprovados por quem mais entende</h2>
</div>
<div className="relative overflow-hidden sm:p-10 ring-white/10 ring-1 bg-neutral-900 rounded-3xl p-6">

<div className="flex justify-center">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200">
<span className="flex items-center gap-0.5 testimonial-stars">

<svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-3 h-3 text-yellow-300 text-yellow-400" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</span>
</span>
</div>

<div className="relative mt-8 sm:mt-10">
<div className="relative w-full max-w-3xl mx-auto min-h-[280px]">

<article className="testimonial-slide absolute inset-0 transition-opacity duration-500 opacity-100 pointer-events-auto" style={{zIndex: '20'}}>
<p className="mx-auto text-center text-lg sm:text-2xl leading-[1.25] text-white max-w-3xl">
                  "Ficamos super satisfeitos com a produção. Vídeo principal, vídeos de performance bônus,
                  <span className="italic font-instrument-serif">show</span>. Atendimento, suporte, grupo com profissionais
                  pré, durante e pós evento. Já os temos como
                  <span className="italic font-instrument-serif">prioridade</span> para continuar com nossa parceria de
                  cobertura."
                </p>
<div className="sm:mt-10 mt-6 flex gap-3 items-center justify-center">
<img alt="ENAF avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05d02a28-c159-471f-8c4d-f4df12e74bdf_320w.jpg"/>
<div className="text-center text-neutral-300">
<div className="text-sm font-medium">ENAF</div>
<div className="text-xs text-white/60">Cliente</div>
</div>
</div>
</article>
<article className="testimonial-slide absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none" style={{}}>
<p className="mx-auto text-center text-lg sm:text-2xl leading-[1.25] text-white max-w-3xl">
                  "A nossa minisérie <span className="italic font-instrument-serif">Escolar pelo Brasil</span> contou a
                  história de 10 papelarias de norte a sul do Brasil e foi inspirador conhecer a jornada empreendedora
                  de cada um. Agradecemos imensamente ao excelente trabalho da Motin Films e todo o cuidado que tiveram
                  com esse projeto tão especial."
                </p>
<div className="sm:mt-10 mt-6 flex gap-3 items-center justify-center">
<div className="h-10 w-10 ring-1 ring-white/10 rounded-full bg-gray-700 flex items-center justify-center">
<span className="text-xs text-white">EO</span>
</div>
<div className="text-center text-neutral-300">
<div className="text-sm font-medium">Escolar Office Brasil</div>
<div className="text-xs text-white/60">Cliente</div>
</div>
</div>
</article>
<article className="testimonial-slide absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none" style={{}}>
<p className="mx-auto text-center text-lg sm:text-2xl leading-[1.25] text-white max-w-3xl">
                  "Ficamos bem contentes com o resultado e com o trabalho de toda a equipe. Conseguiram pegar ótimos
                  <span className="italic font-instrument-serif">takes</span> e prestaram suporte, sempre que necessário.
                  Todos estão de <span className="italic font-instrument-serif">parabéns</span>."
                </p>
<div className="sm:mt-10 mt-6 flex gap-3 items-center justify-center">
<img alt="Liquexpress avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05d02a28-c159-471f-8c4d-f4df12e74bdf_320w.jpg"/>
<div className="text-center text-neutral-300">
<div className="text-sm font-medium">Liquexpress</div>
<div className="text-xs text-white/60">Cliente</div>
</div>
</div>
</article>
</div>

<div className="mt-8 flex items-center justify-center gap-4">
<button aria-label="Previous testimonial" className="grid place-items-center h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="testiPrev">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<div className="flex items-center gap-2" id="testiIndicators"><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 1" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 w-2.5 rounded-full bg-white/30" type="button"></button></div>
<button aria-label="Next testimonial" className="grid place-items-center hover:bg-white/10 transition bg-white/5 w-9 h-9 ring-white/10 ring-1 rounded-lg">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>
</div>
</div>


<section className="py-20 bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-white">
            Uma empresa
            <span className="font-semibold">Catalisti Holding</span>
</h2>
</div>
<div className="max-w-4xl mx-auto">
<div className="p-8 rounded-2xl bg-white/5 border border-white/10">
<div className="space-y-6 text-white/70 leading-relaxed text-lg">
<p className="">
                A Motin Films integra a Catalisti Holding, ecossistema de aceleração que potencializa empresas
                através do Martech - união de marketing digital e tecnologia.
              </p>
<p className="">
                A Catalisti é composta por três empresas especializadas, que atuam de forma integrada nas áreas
                de desenvolvimento web, gestão de redes sociais, produção audiovisual, análise de dados e
                marketing de performance.
              </p>
<p className="">
                Já investimos mais de <span className="text-white font-semibold">R$ 50 milhões em mídias digitais</span>
                e sabemos exatamente o que o seu cliente precisa para crescer online e gerar resultados.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-20">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90vw] max-w-6xl h-56 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.35)_0%,transparent_65%)]">
</div>
</div>
<div className="max-w-7xl mx-auto px-6">
<section className="mt-10 max-w-5xl">
<div className="relative overflow-hidden ring-1 ring-black/10 bg-neutral-900 rounded-3xl">

<div className="absolute inset-0">
<img alt="Abstract minimal background" className="h-full w-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via/50 to-transparent"></div>
</div>

</div>
</section>
</div>
</section>
</section></section></main>

<footer className="relative border-white/10 border-t pt-14 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">

<div className=""><h4 className="text-lg sm:text-xl font-semibold tracking-tight font-[Manrope]">Endereço</h4><div className="mt-4 text-sm text-white/70 space-y-3">
<div className="flex gap-2 items-start">
<svg className="lucide mt-0.5 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="locate" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="2" x2="5" y1="12" y2="12"></line><line x1="19" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="5"></line><line className="" x1="12" x2="12" y1="19" y2="22"></line><circle className="" cx="12" cy="12" r="7"></circle></svg>
</div>
</div></div>

<div className="">
<h4 className="text-lg sm:text-xl font-semibold tracking-tight font-[Manrope]">E-mail</h4>
<ul className="mt-4 space-y-2 text-sm">
<li className="">
<a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="mailto:contato@motinfilms.com.br">
<svg className="lucide w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          contato@motinfilms.com.br
        </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-lg sm:text-xl font-semibold tracking-tight font-[Manrope]">Telefone</h4>
<ul className="mt-4 space-y-2 text-sm">
<li className="">
<a className="inline-flex items-center gap-2 hover:text-white transition-colors text-white/70" href="tel:+554191425126">
<svg className="lucide w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +55 41 9142-5126
        </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-lg sm:text-xl font-semibold tracking-tight font-[Manrope]">Redes sociais</h4>
<ul className="text-sm mt-4 space-y-2">
<li className="">
<a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="https://www.instagram.com/motinfilms" rel="noopener" target="_blank">
<svg className="lucide w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          Instagram
        </a>
</li>
<li className="">
<a className="inline-flex items-center gap-2 hover:text-white transition-colors text-white/70" href="https://www.tiktok.com/@motinfilms" rel="noopener" target="_blank">
<svg className="w-[22px] h-[22px]" data-icon-replaced="true" height="48px" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} version="1.1" viewbox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>Tiktok</title>
<g className="" fill="none" fill-rule="evenodd" id="Icon/Social/tiktok-black" stroke="currentColor" strokeWidth="1">
<path className="" d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" fill="#000000" id="Fill-1"></path>
</g>
</svg>
          TikTok
        
      
      </a></li><li className=""><a className="inline-flex items-center gap-2 hover:text-white transition-colors text-white/70" href="https://www.tiktok.com/@motinfilms" rel="noopener" target="_blank">
</a><a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="https://www.facebook.com/motinfilms" rel="noopener" target="_blank">
<svg className="lucide w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="facebook" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          Facebook
        </a>
</li>
<li className="">
<a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="https://www.linkedin.com/company/93245114/admin/dashboard" rel="noopener" target="_blank">
<svg className="lucide w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
</li>
</ul>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
<p className="text-white/60">© 2025 Motin FIlms</p>
<div className="flex items-center gap-6">
<span className="hidden sm:inline-block w-px h-4 bg-white/10"></span>
</div>
</div>
</div>
</footer>




    </>
  );
}
