import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Initialize Lucide icons
      lucide.createIcons();

      // ========== SCROLL REVEAL ANIMATIONS ==========
      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, {
          threshold: 0.1,
          rootMargin: '0px 0px -60px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));

      // ========== NAV SCROLL EFFECT ==========
      const nav = document.getElementById('mainNav');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              nav.classList.add('nav-scrolled');
          } else {
              nav.classList.remove('nav-scrolled');
          }
      });

      // ========== COUNTER ANIMATION ==========
      const counterElements = document.querySelectorAll('.counter-value[data-target]');
      let counterAnimated = false;

      const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting && !counterAnimated) {
                  counterAnimated = true;
                  counterElements.forEach(counter => {
                      const target = parseInt(counter.getAttribute('data-target'));
                      const suffix = target === 500 ? '+' : '';
                      let current = 0;
                      const increment = target / 60;
                      const timer = setInterval(() => {
                          current += increment;
                          if (current >= target) {
                              current = target;
                              clearInterval(timer);
                          }
                          counter.textContent = Math.floor(current) + suffix;
                      }, 30);
                  });
              }
          });
      }, { threshold: 0.5 });

      counterElements.forEach(el => counterObserver.observe(el));

      // ========== BEFORE/AFTER SLIDER ==========
      const container = document.getElementById('comparisonContainer');
      const slider = document.getElementById('comparisonSlider');
      const topImage = document.getElementById('comparisonImageTop');
      const labelBefore = container.querySelector('.label-before');
      const labelAfter = container.querySelector('.label-after');
      let isDragging = false;

      function updateSlider(x) {
          const rect = container.getBoundingClientRect();
          let pos = (x - rect.left) / rect.width;
          pos = Math.max(0, Math.min(1, pos));

          const visualPos = Math.max(0.05, Math.min(0.95, pos));

          slider.style.left = `calc(${visualPos * 100}% - 2px)`;
          topImage.style.clipPath = `inset(0 ${100 - (visualPos * 100)}% 0 0)`;

          // Labels Opacity Animation
          // Fade out 'Before' label when dragging left (hiding before image)
          if (labelBefore) {
             labelBefore.style.opacity = Math.min(1, pos * 2.5);
          }

          // Fade out 'After' label when dragging right (hiding after image)
          if (labelAfter) {
             labelAfter.style.opacity = Math.min(1, (1 - pos) * 2.5);
          }
      }

      container.addEventListener('mousedown', (e) => {
          isDragging = true;
          updateSlider(e.clientX);
          e.preventDefault();
      });

      window.addEventListener('mousemove', (e) => {
          if (isDragging) {
              updateSlider(e.clientX);
              e.preventDefault();
          }
      });

      window.addEventListener('mouseup', () => {
          isDragging = false;
      });

      container.addEventListener('touchstart', (e) => {
          isDragging = true;
          updateSlider(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
          if (isDragging) {
              updateSlider(e.touches[0].clientX);
          }
      }, { passive: true });

      window.addEventListener('touchend', () => {
          isDragging = false;
      });

      // ========== FLOATING PARTICLES ==========
      const particlesContainer = document.getElementById('particles');

      function createParticle() {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          const size = Math.random() * 3 + 1;
          const x = Math.random() * window.innerWidth;
          const duration = Math.random() * 20 + 15;
          const delay = Math.random() * 10;

          particle.style.cssText = `
              width: ${size}px;
              height: ${size}px;
              left: ${x}px;
              bottom: -10px;
              background: rgba(198, 128, 96, ${Math.random() * 0.15 + 0.05});
              animation-duration: ${duration}s;
              animation-delay: ${delay}s;
          `;

          particlesContainer.appendChild(particle);

          setTimeout(() => {
              particle.remove();
          }, (duration + delay) * 1000);
      }

      // Create initial particles
      for (let i = 0; i < 15; i++) {
          createParticle();
      }

      // Continuously create particles
      setInterval(createParticle, 3000);

      // ========== SMOOTH SCROLL ==========
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                  target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                  });
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="particles"><div className="particle" style={{width: '1.9866px', height: '1.9866px', left: '178.702px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.133)', animationDuration: '31.8062s', animationDelay: '4.27231s'}}></div><div className="particle" style={{width: '3.58544px', height: '3.58544px', left: '104.127px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.176)', animationDuration: '30.389s', animationDelay: '5.90436s'}}></div><div className="particle" style={{width: '2.98892px', height: '2.98892px', left: '225.599px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.165)', animationDuration: '30.3652s', animationDelay: '2.62334s'}}></div><div className="particle" style={{width: '3.34917px', height: '3.34917px', left: '143.418px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.09)', animationDuration: '33.4238s', animationDelay: '2.55954s'}}></div><div className="particle" style={{width: '3.13464px', height: '3.13464px', left: '361.218px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.184)', animationDuration: '29.9669s', animationDelay: '1.87466s'}}></div><div className="particle" style={{width: '2.21284px', height: '2.21284px', left: '366.352px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.067)', animationDuration: '34.15s', animationDelay: '8.00502s'}}></div><div style={{width: '2.24135px', height: '2.24135px', left: '27.8144px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.165)', animationDuration: '29.1949s', animationDelay: '3.91603s'}}></div><div style={{width: '2.16889px', height: '2.16889px', left: '56.5281px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.125)', animationDuration: '25.3071s', animationDelay: '2.64114s'}}></div><div style={{width: '2.24405px', height: '2.24405px', left: '86.0039px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.1)', animationDuration: '33.3593s', animationDelay: '9.29777s'}}></div><div style={{width: '1.2696px', height: '1.2696px', left: '347.278px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.09)', animationDuration: '24.6783s', animationDelay: '8.58948s'}}></div><div style={{width: '3.34048px', height: '3.34048px', left: '186.333px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.075)', animationDuration: '16.0971s', animationDelay: '9.30046s'}}></div><div style={{width: '1.81168px', height: '1.81168px', left: '161.356px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.133)', animationDuration: '24.3738s', animationDelay: '6.52768s'}}></div><div style={{width: '1.33399px', height: '1.33399px', left: '171.705px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.18)', animationDuration: '28.9739s', animationDelay: '4.04295s'}}></div><div style={{width: '1.05301px', height: '1.05301px', left: '344.375px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.184)', animationDuration: '27.6084s', animationDelay: '5.54123s'}}></div><div style={{width: '1.95087px', height: '1.95087px', left: '222.779px', bottom: '-10px', background: 'rgba(198, 128, 96, 0.13)', animationDuration: '34.9641s', animationDelay: '6.30528s'}}></div></div>

<div className="fixed top-0 left-0 w-[800px] h-[800px] bg-[#C68060]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#1e3a5f]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 glass-dark transition-all duration-500" id="mainNav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group relative z-50" href="#">
<div className="w-10 h-10 border border-[#C68060] rounded flex items-center justify-center text-[#C68060] bg-[#C68060]/10 transition-all duration-300 group-hover:bg-[#C68060]/20 group-hover:scale-105">
<i className="w-5 h-5 fill-current" data-lucide="droplet"></i>
</div>
<span className="text-lg font-bold tracking-tight text-white uppercase">
            AQUAPROFI
          </span>
</a>
<div className="hidden md:flex items-center gap-10 text-xs font-medium text-slate-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C68060] after:transition-all hover:after:w-full" href="#services">
            Služby
          </a>
<a className="hover:text-white transition-colors duration-300 text-[#C68060] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-[#C68060]" href="#cennik">
            Cenník
          </a>
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C68060] after:transition-all hover:after:w-full" href="#projects">
            Realizácie
          </a>
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C68060] after:transition-all hover:after:w-full" href="#about">
            O Nás
          </a>
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C68060] after:transition-all hover:after:w-full" href="#contact">
            Kontakt
          </a>
</div>
<a className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#050a14] bg-copper-gradient px-6 py-3 rounded text-center uppercase tracking-wide btn-gold" href="#contact">
<span>Dohodnúť Obhliadku</span>
</a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-28 pb-20 relative items-center">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-6 md:space-y-10">
<div className="reveal inline-flex items-center gap-3 px-4 py-2 rounded bg-[#0f172a] border border-white/5 text-[#94a3b8] text-xs font-medium tracking-widest uppercase visible">
<span className="w-1.5 h-1.5 rounded-full bg-[#C68060] animate-pulse"></span>
            Skúsenosti od roku 2005
          </div>
<h1 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-[4rem] font-bold text-white tracking-tight leading-tight lg:leading-[1.1] visible">
            Profesionálny
            <br/>
<span className="text-copper-gradient">Vodoinštalatér Bratislava</span>
<br/>
            a okolie.
          </h1>
<p className="reveal reveal-delay-2 text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed font-light visible">
            Ponúkame <strong>opravy vodoinštalácie</strong>, rekonštrukcie kúpeľní a bytové jadrá.
            Firma vznikla v roku 2005 a prináša spoľahlivosť a kvalitu.
            <span className="text-slate-200 font-medium">
              Rýchlo, čisto a profesionálne.
            </span>
</p>
<div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 pt-2 visible">
<a className="btn-gold inline-flex items-center justify-center gap-2 bg-copper-gradient text-[#050a14] px-8 py-4 rounded text-sm font-bold tracking-widest uppercase" href="#contact">
              Získať cenovú ponuku
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/10 px-8 py-4 rounded text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:border-white/20" href="#projects">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
              Pozrieť naše realizácie
            </a>
</div>
<div className="reveal reveal-delay-4 pt-8 border-t border-white/5 visible">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-6">
              Naše riešenia nájdete v projektoch ako:
            </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-3 bg-[#0f172a] px-4 py-3 rounded border border-white/5 hover:border-[#C68060]/20 transition-colors duration-300">
<span className="font-serif text-[#C68060] font-bold text-lg">
                  E
                </span>
<span className="text-sm text-slate-300 font-medium">Eurovea</span>
</div>
<div className="flex items-center gap-3 bg-[#0f172a] px-4 py-3 rounded border border-white/5 hover:border-[#C68060]/20 transition-colors duration-300">
<span className="font-serif text-[#C68060] font-bold text-lg">
                  RP
                </span>
<span className="text-sm text-slate-300 font-medium">
                  River Park
                </span>
</div>
<div className="flex items-center gap-3 bg-[#0f172a] px-4 py-3 rounded border border-white/5 hover:border-[#C68060]/20 transition-colors duration-300">
<span className="font-serif text-[#C68060] font-bold text-lg">
                  B
                </span>
<span className="text-sm text-slate-300 font-medium">Bory</span>
</div>
<div className="flex items-center gap-3 bg-[#0f172a] px-4 py-3 rounded border border-white/5 hover:border-[#C68060]/20 transition-colors duration-300">
<span className="font-serif text-[#C68060] font-bold text-lg">
                  PP
                </span>
<span className="text-sm text-slate-300 font-medium">
                  Pharos Park
                </span>
</div>
</div>
</div>
</div>

<div className="reveal relative h-full min-h-[450px] flex items-center justify-end">
<div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-[#C68060]/30 rounded-tr-3xl z-0"></div>
<div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#C68060]/30 rounded-bl-3xl z-0"></div>
<div className="relative w-full h-[450px] rounded overflow-hidden border border-white/10 shadow-2xl">
<img alt="Luxury Bathroom" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full bg-[#0b1321]/90 backdrop-blur-md border-t border-white/10 p-8">
<div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/10">
<div>
<p className="text-2xl md:text-3xl font-bold text-[#C68060] counter-value" data-target="500">500+</p>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    Projektov
                  </p>
</div>
<div>
<p className="text-2xl md:text-3xl font-bold text-[#C68060] counter-value" data-target="20">20</p>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    Rokov
                  </p>
</div>
<div className="">
<p className="text-2xl md:text-3xl font-bold text-[#C68060]">
                    100%
                  </p>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    Spokojnosť
                  </p>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-12 left-0 text-[10px] uppercase tracking-[0.3em] text-slate-500 flex items-center gap-4">
            Scroll
            <div className="h-[1px] w-12 bg-slate-700"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#080d19] bg-blueprint" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="reveal flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
<div className="text-center md:text-left">
<span className="text-[#C68060] font-bold tracking-widest text-xs uppercase mb-3 block">
              Naše Portfólio
            </span>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Služby Vodára Bratislava
            </h2>
</div>
<div className="h-[1px] bg-white/10 flex-grow mx-8 hidden md:block"></div>
<a className="text-sm font-medium text-slate-400 hover:text-[#C68060] transition-colors flex items-center gap-2" href="#contact">
            Všetky služby
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="reveal reveal-delay-1 service-card group p-8 rounded bg-[#0f172a] border border-white/5">
<div className="service-icon w-12 h-12 rounded bg-[#050a14] border border-white/10 flex items-center justify-center text-[#C68060] mb-6 group-hover:bg-[#C68060] group-hover:text-[#050a14] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-lg font-bold text-white mb-3">Havarijná Služba</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
              Rýchla poruchová služba v Bratislave. Okamžité opravy únikov vody a prasknutých potrubí.
            </p>
</div>
<div className="reveal reveal-delay-2 service-card group p-8 rounded bg-[#0f172a] border border-white/5">
<div className="service-icon w-12 h-12 rounded bg-[#050a14] border border-white/10 flex items-center justify-center text-[#C68060] mb-6 group-hover:bg-[#C68060] group-hover:text-[#050a14] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-lg font-bold text-white mb-3">
              Bytové Jadrá
            </h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
              Kompletné rekonštrukcie kúpeľní a bytových jadier na kľúč s dôrazom na detail.
            </p>
</div>
<div className="reveal reveal-delay-3 service-card group p-8 rounded bg-[#0f172a] border border-white/5">
<div className="service-icon w-12 h-12 rounded bg-[#050a14] border border-white/10 flex items-center justify-center text-[#C68060] mb-6 group-hover:bg-[#C68060] group-hover:text-[#050a14] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-lg font-bold text-white mb-3">Sanita</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
              Odborná montáž sanity, batérií, WC a sprchových kútov pre vašu novú kúpeľňu.
            </p>
</div>
<div className="reveal reveal-delay-4 service-card group p-8 rounded bg-[#0f172a] border border-white/5">
<div className="service-icon w-12 h-12 rounded bg-[#050a14] border border-white/10 flex items-center justify-center text-[#C68060] mb-6 group-hover:bg-[#C68060] group-hover:text-[#050a14] transition-colors duration-500">
<i className="w-6 h-6" data-lucide="arrow-up-down"></i>
</div>
<h3 className="text-lg font-bold text-white mb-3">Výmena Stupačiek</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
              Profesionálna výmena zvislých rozvodov vody a kanalizácie v bytových domoch.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#050a14] relative border-y border-white/5 bg-geometric" id="about">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="reveal text-center mb-12">
<span className="text-[#C68060] font-bold tracking-widest text-xs uppercase mb-3 block">
            Prečo si vybrať nás
          </span>
<h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Kvalita overená časom
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal reveal-delay-1 trust-badge flex flex-col items-center text-center p-8 rounded-xl bg-[#0b1321] border border-white/5">
<div className="badge-icon w-16 h-16 rounded-full bg-[#0f172a] border border-[#C68060]/20 flex items-center justify-center text-[#C68060] mb-5 transition-all duration-400">
<i className="w-7 h-7" data-lucide="calendar"></i>
</div>
<h3 className="text-base font-bold text-white mb-2">
              Založené v roku 2005
            </h3>
<p className="text-xs text-slate-500 leading-relaxed">
              Viac ako 20 rokov skúseností v odbore vodoinštalatérstva.
            </p>
</div>

<div className="reveal reveal-delay-2 trust-badge flex flex-col items-center text-center p-8 rounded-xl bg-[#0b1321] border border-white/5">
<div className="badge-icon w-16 h-16 rounded-full bg-[#0f172a] border border-[#C68060]/20 flex items-center justify-center text-[#C68060] mb-5 transition-all duration-400">
<i className="w-7 h-7" data-lucide="user-check"></i>
</div>
<h3 className="text-base font-bold text-white mb-2">
              Vodár Bratislava
            </h3>
<p className="text-xs text-slate-500 leading-relaxed">
              Spoľahlivý a profesionálny tím pre Bratislavu a blízke okolie.
            </p>
</div>

<div className="reveal reveal-delay-3 trust-badge flex flex-col items-center text-center p-8 rounded-xl bg-[#0b1321] border border-white/5">
<div className="badge-icon w-16 h-16 rounded-full bg-[#0f172a] border border-[#C68060]/20 flex items-center justify-center mb-5 transition-all duration-400">
<span className="text-[#C68060] font-bold text-lg tracking-tight">
<i className="w-7 h-7" data-lucide="clock"></i>
</span>
</div>
<h3 className="text-base font-bold text-white mb-2">
              Rýchly nástup
            </h3>
<p className="text-xs text-slate-500 leading-relaxed">
              Garantujeme rýchlu odozvu a krátke čakacie doby na opravy.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050a14] relative z-20 bg-pipes" id="cennik">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="reveal text-center mb-16">
<span className="text-[#C68060] font-bold tracking-widest text-xs uppercase mb-3 block">
            Férové Ceny
          </span>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Cenník služieb
          </h2>
<p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm font-light">
            Sme k dispozícii pre vaše potreby. Transparentné ceny bez skrytých poplatkov.
          </p>
</div>
<div className="reveal glass-panel rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
<div className="hidden md:grid grid-cols-10 bg-[#0f172a] border-b border-white/5 text-xs font-semibold text-slate-400 uppercase tracking-widest">
<div className="col-span-4 p-6">Pracovný čas / Typ služby</div>
<div className="col-span-3 p-6 text-center border-l border-white/5">
              Cena za výjazd
            </div>
<div className="col-span-3 p-6 text-center border-l border-white/5">
              Hodinová sadzba / osoba
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="col-span-4 p-6 flex items-center text-white">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Pracovný čas:
              </span>
<span className="font-medium">Štandardné opravy a montáže</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-white md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Výjazd:
              </span>
<span className="text-[#C68060] font-bold text-lg">20 €</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-white md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Sadzba:
              </span>
<span className="font-medium">35 €</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="col-span-4 p-6 flex items-center text-white">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Pracovný čas:
              </span>
<span className="font-medium">Havarijná služba (Mimo hodín)</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-white md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Výjazd:
              </span>
<span className="text-[#C68060] font-bold text-lg">30 €</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-white md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Sadzba:
              </span>
<span className="font-medium">35 €</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="col-span-4 p-6 flex items-center text-white">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Služba:
              </span>
<span className="font-medium">Samostatná obhliadka</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-white md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Cena:
              </span>
<span className="text-[#C68060] font-bold text-lg">20 €</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-slate-500 md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Sadzba:
              </span>
              -
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-10 hover:bg-white/[0.02] transition-colors group">
<div className="col-span-4 p-6 flex items-center text-white">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Služba:
              </span>
<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="font-medium">Poruchová služba (urgent)</span>
</div>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-white md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Cena:
              </span>
<span className="text-[#C68060] font-bold text-lg">30 €</span>
</div>
<div className="col-span-3 p-6 flex items-center md:justify-center text-slate-500 md:border-l border-white/5">
<span className="md:hidden w-32 text-xs text-slate-500 uppercase tracking-widest">
                Sadzba:
              </span>
              -
            </div>
</div>
</div>
<p className="mt-6 text-center text-xs text-slate-500 font-medium">
          * Ceny sú uvedené s DPH.
        </p>
</div>
</section>

<section className="py-24 bg-[#080d19] relative bg-geometric" id="projects">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="reveal text-center mb-16">
<span className="text-[#C68060] font-bold tracking-widest text-xs uppercase mb-3 block">
            Dôkaz Kvality
          </span>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Rekonštrukcia Bytového Jadra
          </h2>
<p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm font-light">
            Posuňte posuvník a presvedčte sa o kvalite našej práce. Od
            zastaraného stavu k luxusnému výsledku.
          </p>
</div>
<div className="reveal">
<div className="comparison-container w-full aspect-[16/10] md:aspect-[16/9] border border-white/10 shadow-2xl shadow-black/50" id="comparisonContainer" style={{position: 'relative', overflow: 'hidden'}}>

<img alt="After - Luxury Bathroom" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>

<img alt="Before - Old Bathroom" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10" id="comparisonImageTop" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" style={{clipPath: 'inset(0 50% 0 0)'}}/>

<div className="comparison-slider" id="comparisonSlider" style={{left: 'calc(50% - 2px)'}}></div>

<div className="comparison-label label-before" style={{zIndex: '35', fontWeight: '600'}}>
              Pôvodný Stav
            </div>
<div className="comparison-label label-after" style={{zIndex: '35', fontSize: '8px', letterSpacing: '0.05em', fontWeight: '600', padding: '6px 12px'}}>
              Nová Realizácia Aquaprofi
            </div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-20"></div>
</div>
<div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="move-horizontal"></i>
<span>Potiahnutím porovnajte výsledok</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050a14] border-t border-white/5 relative overflow-hidden bg-pipes" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C68060]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="reveal glass-panel rounded-2xl p-10 md:p-16 text-center border border-[#C68060]/20">
<span className="text-[#C68060] font-bold tracking-widest text-xs uppercase mb-4 block">
            Ste pripravení začať?
          </span>
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Naplánujte si obhliadku ešte dnes
          </h2>
<p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg font-light">
            Vyplňte krátky formulár alebo nám zavolajte. Navrhneme riešenie na
            mieru vašim potrebám.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="btn-gold w-full sm:w-auto flex items-center justify-center gap-3 bg-[#C68060] text-[#050a14] px-8 py-4 rounded text-sm font-bold tracking-widest uppercase" href="tel:0905693040">
<i className="w-4 h-4" data-lucide="phone"></i>
              0905 693 040
            </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0f172a] hover:bg-[#1e293b] text-white border border-white/10 px-8 py-4 rounded text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:border-white/20 hover:-translate-y-1" href="mailto:aquaprofi@aquaprofi.sk">
<i className="w-4 h-4" data-lucide="mail"></i>
              Napísať E-mail
            </a>
</div>
</div>
</div>
</section>

<footer className="bg-[#020408] border-t border-white/5 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 text-white font-bold tracking-tight text-xl uppercase" href="#">
<div className="w-6 h-6 border border-[#C68060] rounded flex items-center justify-center text-[#C68060]">
<i className="w-3 h-3 fill-current" data-lucide="droplet"></i>
</div>
              Aquaprofi
            </a>
<p className="text-slate-500 leading-relaxed max-w-sm">
              Profesionálny vodoinštalatér v Bratislave a okolí.
              Firma vznikla v roku 2005. Špecializujeme sa na opravy vody, výmenu stupačiek a rekonštrukcie bytových jadier.
            </p>
</div>
<div>
<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
              Rýchly Kontakt
            </h4>
<ul className="space-y-4 text-slate-500">
<li className="flex items-center gap-3 hover:text-[#C68060] transition-colors">
<i className="w-4 h-4" data-lucide="phone"></i>
<a href="tel:0905693040">0905 693 040</a>
</li>
<li className="flex items-center gap-3 hover:text-[#C68060] transition-colors">
<i className="w-4 h-4" data-lucide="mail"></i>
<a href="mailto:aquaprofi@aquaprofi.sk">
                  aquaprofi@aquaprofi.sk
                </a>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5" data-lucide="map-pin"></i>
<span>Bratislava, Slovensko</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
              Fakturačné údaje
            </h4>
<p className="text-slate-500 mb-6">
              Dušan Kovarík - Aquaprofi
              <br/>
              IČO: 41642309
              <br/>
              DIČ: 107552755
            </p>
<div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-bold text-white text-lg tracking-tighter">
                GROHE
              </span>
<span className="font-bold text-white text-lg tracking-tighter">
                GEBERIT
              </span>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Aquaprofi. Všetky práva vyhradené.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">
              Ochrana súkromia
            </a>
<a className="hover:text-white transition-colors" href="#">
              Obchodné podmienky
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
