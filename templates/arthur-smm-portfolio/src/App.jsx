import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
accent: '#FF4D00',
surface: '#ffffff',
textMain: '#111827',
textMuted: '#4B5563',
borderLight: '#e5e7eb',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'spin 20s linear infinite reverse',
'marquee': 'marquee 30s linear infinite',
'scan': 'scan 4s linear infinite',
'blink': 'blink 2s ease-in-out infinite',
'dash': 'dash 20s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-33.333%)' },
},
scan: {
'0%': { top: '-20%' },
'100%': { top: '120%' },
},
blink: {
'0%, 100%': { opacity: 1 },
'50%': { opacity: 0.3 },
},
dash: {
to: { 'stroke-dashoffset': '1000' }
}
}
}
}
}



      // --- 1. SETUP LENIS & SCROLL SKEW ---
      const lenis = new Lenis({
          lerp: 0.1,
          smooth: true,
          direction: 'vertical',
      });

      let currentSkew = 0;
      function raf(time) {
          lenis.raf(time);

          // Interaction: Liquid Scroll Skew
          const skewTarget = lenis.velocity * 0.1;
          currentSkew += (skewTarget - currentSkew) * 0.1;
          const clampedSkew = Math.max(Math.min(currentSkew, 5), -5);

          document.querySelectorAll('.skew-target').forEach(el => {
              el.style.transform = `skewY(${clampedSkew}deg)`;
          });

          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // --- 2. SPOTLIGHT INTERACTION ---
      document.addEventListener('mousemove', (e) => {
          document.querySelectorAll('.spotlight-card').forEach(card => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          });
      });

      // --- 3. TEXT SCRAMBLE INTERACTION ---
      class ScrambleText {
          constructor(el) {
              this.el = el;
              this.chars = '!<>-_\\/[]{}—=+*^?#________';
              this.update = this.update.bind(this);
          }
          setText(newText) {
              const oldText = this.el.innerText;
              const length = Math.max(oldText.length, newText.length);
              const promise = new Promise((resolve) => this.resolve = resolve);
              this.queue = [];
              for (let i = 0; i < length; i++) {
                  const from = oldText[i] || '';
                  const to = newText[i] || '';
                  const start = Math.floor(Math.random() * 40);
                  const end = start + Math.floor(Math.random() * 40);
                  this.queue.push({ from, to, start, end });
              }
              cancelAnimationFrame(this.frameRequest);
              this.frame = 0;
              this.update();
              return promise;
          }
          update() {
              let output = '';
              let complete = 0;
              for (let i = 0, n = this.queue.length; i < n; i++) {
                  let { from, to, start, end, char } = this.queue[i];
                  if (this.frame >= end) {
                      complete++;
                      output += to;
                  } else if (this.frame >= start) {
                      if (!char || Math.random() < 0.28) {
                          char = this.randomChar();
                          this.queue[i].char = char;
                      }
                      output += `<span class="opacity-50 text-accent">${char}</span>`;
                  } else {
                      output += from;
                  }
              }
              this.el.innerHTML = output;
              if (complete === this.queue.length) {
                  this.resolve();
              } else {
                  this.frameRequest = requestAnimationFrame(this.update);
                  this.frame++;
              }
          }
          randomChar() {
              return this.chars[Math.floor(Math.random() * this.chars.length)];
          }
      }

      const scrambleElements = document.querySelectorAll('.scramble-text');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const el = entry.target;
                  const fx = new ScrambleText(el);
                  fx.setText(el.innerText);
                  observer.unobserve(el);
              }
          });
      }, { threshold: 0.5 });

      scrambleElements.forEach(el => observer.observe(el));

      // --- 4. MAGNETIC BUTTONS ---
      const buttons = document.querySelectorAll('.btn-magnetic');
      buttons.forEach(btn => {
          btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
          });
          btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.2 });
          });
      });

      // --- 5. ANIMATIONS ---
      gsap.registerPlugin(ScrollTrigger);

      // Counter Animation
      document.querySelectorAll('.counter').forEach(counter => {
          let target = parseFloat(counter.getAttribute('data-target'));
          let isPercentage = counter.innerText.includes('%');
          let prefix = counter.innerText.includes('+') ? '+' : '';

          gsap.from(counter, {
              textContent: 0,
              duration: 2,
              ease: "power1.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                  trigger: counter,
                  start: "top 85%",
                  once: true
              },
              onUpdate: function() {
                  let val = Math.ceil(this.targets()[0].textContent);
                  this.targets()[0].innerHTML = prefix + val + (isPercentage ? '%' : '');
              }
          });
      });

      // REVISED WORKFLOW ANIMATION (Fixes opacity issue)
      const stepItems = document.querySelectorAll('.step-item');
      stepItems.forEach((item) => {
          gsap.to(item, {
              scrollTrigger: {
                  trigger: item,
                  start: "top 80%", // Starts animating when item is 80% down the viewport
                  end: "bottom 20%",
                  toggleActions: "play none none reverse", // Play on enter, reverse only if scrolling WAY back up
              },
              opacity: 1,
              duration: 0.8
          });
      });

      gsap.utils.toArray('.glass-panel').forEach((panel, i) => {
          gsap.from(panel, {
              scrollTrigger: {
                  trigger: panel,
                  start: "top 90%"
              },
              y: 30,
              opacity: 0,
              duration: 0.8,
              delay: i * 0.05,
              ease: "power3.out"
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="group hover-trigger" href="#">
<span className="font-display font-bold text-xl tracking-tighter text-black group-hover:text-accent transition-colors">
            ARTUR
            <span className="text-accent group-hover:text-black transition-colors">
              //
            </span>
            SMM
          </span>
</a>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-500">
<a className="hover:text-black transition-colors hover-trigger" href="#stats">
            [01] КЕЙСЫ
          </a>
<a className="hover:text-black transition-colors hover-trigger" href="#ai">
            [02] СТЕК
          </a>
<a className="hover:text-black transition-colors hover-trigger" href="#process">
            [03] ПОДХОД
          </a>
</div>
<div className="flex items-center gap-4">
<span className="hidden lg:block text-[10px] font-mono text-gray-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            STATUS: OPEN TO WORK
          </span>
<a className="border border-black/10 px-6 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white transition-all hover-trigger btn-magnetic shadow-sm" href="#contact">
            Связаться
          </a>
</div>
</div>
</nav>
<main className="">

<section className="skew-target relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] z-0"></div>
<div className="relative z-20 text-center max-w-5xl px-6">
<div className="inline-flex hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default group select-none bg-white border-gray-100 border rounded-full mb-8 pt-2 pr-5 pb-2 pl-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)] gap-x-3 gap-y-3 items-center">
<div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 bg-gray-50 group-hover:scale-105 transition-transform duration-300">
<img alt="Артур" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left flex flex-col leading-tight gap-0.5">
<span className="font-display font-bold text-xs text-black">
                Артур Валиахметов
              </span>
<span className="font-mono text-[9px] text-accent tracking-widest uppercase font-semibold">
                SMM-менеджер • 5+ лет опыта
              </span>
</div>
</div>
<h1 className="font-display font-bold text-6xl md:text-9xl tracking-tighter mb-6 leading-[0.9] text-black scramble-text">
            СИСТЕМНЫЙ
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400">
              МАРКЕТИНГ
            </span>
</h1>
<p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            Ращу аудиторию через контент и грамотную дистрибуцию.
            <br className="hidden md:block"/>
            Максимизирую органику, эффективно использую рекламный бюджет.
            <br/>
<span className="text-black font-semibold">
              Без накруток. Только реальные метрики.
            </span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-accent text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-black transition-all hover-trigger w-full sm:w-auto btn-magnetic shadow-lg shadow-accent/20" href="#stats">
              Смотреть Кейсы
            </a>
<a className="px-8 py-4 border border-black/10 text-black bg-white font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-all hover-trigger w-full sm:w-auto btn-magnetic shadow-sm" href="https://t.me/artur_smm" target="_blank">
              Telegram
            </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-black w-4 h-4" icon="solar:videocamera-record-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-500">
                ВИРАЛЬНЫЙ КОНТЕНТ
              </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-black w-4 h-4" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-500">
                СКВОЗНАЯ АНАЛИТИКА
              </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-black w-4 h-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-500">
                ИИ ИНСТРУМЕНТЫ
              </span>
</div>
</div>
</div>
</section>

<div className="border-y border-black/5 bg-white py-8 relative z-20 overflow-hidden marquee-mask w-full">
<div className="flex whitespace-nowrap animate-marquee w-[max-content]">
<div className="flex gap-16 px-10 items-center">
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              ОРГАНИЧЕСКИЙ РОСТ
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              ТАРГЕТИРОВАННАЯ РЕКЛАМА
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              ВИРАЛЬНЫЕ REELS
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              МАРКЕТПЛЕЙСЫ
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              AI GENERATION
            </span>
</div>
<div className="flex gap-16 px-10 items-center">
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              ОРГАНИЧЕСКИЙ РОСТ
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              ТАРГЕТИРОВАННАЯ РЕКЛАМА
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              ВИРАЛЬНЫЕ REELS
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              МАРКЕТПЛЕЙСЫ
            </span>
<span className="font-display font-bold text-2xl text-gray-300 hover:text-black transition-colors">
              AI GENERATION
            </span>
</div>
</div>
</div>

<section className="skew-target py-32 px-6 relative z-20 bg-[#fafafa]" id="stats">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-2">
                /// ЦИФРЫ
              </span>
<h2 className="font-display font-bold text-black text-4xl md:text-5xl scramble-text">
                Результаты
              </h2>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="w-2 h-2 bg-green-500 rounded-full animate-blink"></span>
<span className="font-mono text-xs text-black">LIVE DATA</span>
</div>
<p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                Честные метрики.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">

<div className="md:col-span-2 md:row-span-2 glass-panel spotlight-card rounded-xl overflow-hidden relative group bg-white">
<div className="scan-line"></div>

<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute top-6 right-6 border border-black/10 bg-white/80 backdrop-blur px-3 py-1 rounded text-[10px] font-mono text-accent font-bold">
                VIRAL_CASE
              </div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs space-y-2">
<div className="bg-white border border-gray-100 shadow-lg p-3 rounded flex items-center justify-between border-l-2 border-l-accent transform translate-x-4">
<div className="flex gap-3 items-center">
<iconify-icon className="text-accent w-6 h-6" icon="solar:play-circle-linear"></iconify-icon>
<div className="text-[10px] font-mono">
<div className="text-black font-bold">Дмитрий Аленичев</div>
<div className="text-gray-500">
                        Контент с легендой футбола
                      </div>
</div>
</div>
<span className="text-[10px] text-green-600 font-bold">
                    +860k
                  </span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-10 w-full bg-gradient-to-t from-white via-white/80 to-transparent">
<div className="w-10 h-10 bg-black flex items-center justify-center mb-4 text-white font-bold rounded-sm">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display font-bold text-2xl text-black mb-2">
                  Органическая виральность
                </h3>
<p className="text-gray-600 text-sm max-w-sm">
                  Идея, переговоры, съемка и монтаж. 860,000 органических
                  просмотров reels с Аленичевым без затрат на посевы.
                </p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between bg-white">
<div className="flex justify-between items-start">
<span className="font-mono text-[10px] text-gray-500 uppercase">
                  Telegram
                </span>
<iconify-icon className="text-blue-500 w-5 h-5" icon="solar:plain-linear"></iconify-icon>
</div>
<div className="text-center py-2">
<div className="text-4xl font-display font-bold text-black counter" data-target="471">
                  +471%
                </div>
<div className="text-[10px] text-gray-500 mt-1">
                  Рост базы подписчиков
                </div>
<div className="text-[10px] font-mono text-gray-400 mt-2">
                  420 → 2,400
                </div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between overflow-hidden bg-white">
<div className="flex items-center gap-2 text-black mb-2">
<iconify-icon className="w-4 h-4" icon="solar:shop-linear"></iconify-icon>
<span className="font-display font-bold text-sm">Маркетплейсы</span>
</div>
<div className="relative h-12 flex items-center justify-center gap-2">
<span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  OZON
                </span>
<span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  WB
                </span>
<span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  YANDEX
                </span>
</div>
<div className="text-[10px] text-gray-400 mt-2 text-center">
                Высокий CTR карточек.
              </div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 flex flex-col justify-between bg-white">
<div className="flex justify-between items-center mb-2">
<span className="font-mono text-[10px] text-gray-500 uppercase">
                  VKontakte
                </span>
<span className="text-blue-600 font-bold text-xs">VK</span>
</div>
<div className="flex-grow flex items-center">
<div className="w-full bg-gray-100 h-16 rounded flex items-end px-1 gap-1">
<div className="w-1/5 bg-accent/20 h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-accent/40 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-accent/60 h-[45%] rounded-sm"></div>
<div className="w-1/5 bg-accent/80 h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-accent h-[90%] rounded-sm"></div>
</div>
</div>
<div className="text-right text-[10px] text-black font-mono mt-2 font-bold">
                +127% Рост охватов
              </div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden group bg-white">
<div className="absolute inset-0 bg-orange-50 z-0"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-display font-bold text-sm text-black">
                    Суммарный охват
                  </span>
<div className="w-2 h-2 rounded-full bg-accent animate-pulse-fast"></div>
</div>
<div className="text-3xl font-bold font-display text-black">
                  860K+
                </div>
<div className="font-mono text-[10px] text-orange-800/70">
<div>&gt; ОРГАНИКА</div>
<div>&gt; ER ВЫШЕ РЫНКА</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-8 flex items-center justify-between hover-trigger bg-black group">
<div>
<h3 className="font-display font-bold text-xl text-white mb-2">
                  Full Stack Creator
                </h3>
<p className="text-gray-400 text-xs font-mono">
                  Adobe Suite, Аналитика, GenAI.
                </p>
</div>
<div className="flex gap-2">
<div className="bg-white/10 p-2 rounded border border-white/20 text-white text-[10px] font-mono">
                  Pr
                </div>
<div className="bg-white/10 p-2 rounded border border-white/20 text-white text-[10px] font-mono">
                  Ae
                </div>
<div className="bg-white/10 p-2 rounded border border-white/20 text-white text-[10px] font-mono">
                  Ps
                </div>
<div className="bg-white/10 p-2 rounded border border-white/20 text-white text-[10px] font-mono">
                  Ai
                </div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 glass-panel spotlight-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-center bg-white">
<div className="absolute inset-0 dot-grid opacity-30"></div>
<div className="flex justify-between items-center mb-2 z-10 absolute top-6 left-6 right-6">
<span className="font-display font-bold text-black text-lg">
                  Продакшн
                </span>
<span className="text-accent text-xs font-mono border border-accent/30 px-2 py-0.5 rounded bg-accent/5 font-bold">
                  UNBOXING / PROMO
                </span>
</div>
<div className="mt-8 flex gap-4 overflow-x-auto z-10 pb-2">
<div className="w-32 h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:play-linear"></iconify-icon>
</div>
<div className="w-32 h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:play-linear"></iconify-icon>
</div>
<div className="w-32 h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="skew-target py-24 bg-white border-t border-black/5 relative z-20" id="ai">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-accent font-mono text-xs tracking-widest block mb-4">
              /// ЭФФЕКТИВНОСТЬ
            </span>
<h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-black scramble-text">
              ИИ и Технологии
            </h2>
<p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Я использую искусственный интеллект не ради хайпа, а для
              оптимизации ресурсов. Трансформация простого фото продукта в
              полноценный кампейн, генерация вариантов креативов и адаптация
              контента.
              <br/>
<br/>
              Традиционные съемки занимают дни. Мой AI-пайплайн занимает часы.
            </p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 border border-transparent hover:border-black/5 rounded-lg transition-all cursor-pointer hover-trigger bg-gray-50">
<div className="font-mono text-gray-400 text-sm group-hover:text-accent font-bold">
                  01
                </div>
<div>
<h4 className="font-bold text-black">AI Фотосессии</h4>
<p className="text-sm text-gray-500">
                    Разные локации, ракурсы, стили. Без аренды студии.
                  </p>
</div>
</div>
<div className="group flex gap-4 p-4 border border-transparent hover:border-black/5 rounded-lg transition-all cursor-pointer hover-trigger bg-gray-50">
<div className="font-mono text-gray-400 text-sm group-hover:text-accent font-bold">
                  02
                </div>
<div>
<h4 className="font-bold text-black">Генерация контента</h4>
<p className="text-sm text-gray-500">
                    Драфты текстов и визуалов, усиленные нейросетями.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative group hover-trigger">
<div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-300 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

<div className="relative bg-white border border-gray-200 rounded-lg p-6 font-mono text-sm shadow-xl overflow-hidden min-h-[300px]">
<div className="flex gap-2 mb-6 border-b border-gray-100 pb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-gray-800">
<span className="text-purple-600 font-bold">function</span>
<span className="text-blue-600">Scale_Brand</span>
                (input_product):
                
                  
                <span className="text-gray-400 italic"># Оптимизация бюджета</span>
                
                  
                <span className="text-purple-600 font-bold">if</span>
                strategy ==
                <span className="text-red-500">"CHAOS"</span>
                :
                
                    return
                <span className="text-red-500">"BURN_BUDGET"</span>
                
                
                  
                <span className="text-purple-600 font-bold">else</span>
                :
                
                    
                <span className="text-gray-400 italic">
                  # 1. Генерация контекста
                </span>
                
                    visuals = AI.Generate(input_product,
                <span className="text-green-600">"LIFESTYLE"</span>
                )
                
                    
                <span className="text-gray-400 italic"># 2. Ручная доработка</span>
                
                    final_content = Artur.Refine(visuals)
                
                
                    
                <span className="text-purple-600 font-bold">return</span>
<span className="text-green-600">"PROFIT"</span>
</div>
<div className="mt-2 text-accent animate-pulse font-bold">_</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa] relative z-20 border-t border-black/5" id="process">
<div className="max-w-[1400px] mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">

<div className="order-2 lg:order-1 relative">
<div className="sticky top-24 w-full aspect-square max-h-[60vh] bg-white border border-gray-200 rounded-2xl overflow-hidden flex items-center justify-center p-10 group shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-40 h-40 border border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,77,0,0.2)] bg-white/50 backdrop-blur-sm">
<div className="w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
<div className="absolute text-black font-mono text-xs tracking-widest text-center font-bold">
                    THE
                    <br/>
                    SYSTEM
                  </div>
</div>

<div className="absolute w-[70%] h-[70%] border border-black/5 rounded-full animate-spin-slow">
<div className="w-12 h-12 bg-white border border-gray-200 shadow-md rounded-full absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
<iconify-icon className="text-black" icon="solar:user-speak-linear"></iconify-icon>
</div>
</div>
<div className="absolute w-[90%] h-[90%] border border-black/5 rounded-full animate-reverse-spin">
<div className="w-10 h-10 bg-accent rounded-full absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 py-20 pb-0">
<span className="text-accent font-mono text-xs tracking-widest block mb-10">
                /// WORKFLOW
              </span>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-black">
                  01. Глубокий анализ
                </h3>
<p className="text-xl text-gray-600 leading-relaxed font-light">
                  Прежде чем что-то публиковать, я должен понять, что мы продаем
                  и кому. Анализ ЦА, конкурентов и продукта. Никаких догадок,
                  только факты.
                </p>
</div>
<div className="step-item mb-48 opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-black">
                  02. Стратегия и План
                </h3>
<p className="text-xl text-gray-600 leading-relaxed font-light">
                  Контент-план на месяц вперед. Разные форматы, рубрики,
                  сценарии. Не хаотичный постинг, а продуманная воронка, ведущая
                  к продаже.
                </p>
</div>
<div className="step-item opacity-30 transition-opacity duration-500">
<h3 className="text-4xl font-display font-bold mb-4 text-black">
                  03. Реализация и Масштаб
                </h3>
<p className="text-xl text-gray-600 leading-relaxed font-light">
                  Публикация, отслеживание метрик, подключение платного трафика
                  на лучшие креативы. То, что работает — масштабируем. То, что
                  нет — меняем.
                </p>
</div>

<div className="h-40"></div>
</div>
</div>
</div>
</section>

<section className="skew-target py-32 px-6 bg-white relative z-20 border-t border-black/5" id="skills">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-bold text-4xl text-black text-center mb-16 scramble-text">
            Навыки
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 transition-colors hover-trigger spotlight-card glass-panel bg-white">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">
                / PRODUCTION
              </div>
<div className="text-2xl font-bold text-black mb-6 z-10 relative">
                Визуал и Видео
              </div>
<p className="text-xs text-gray-500 mb-6 font-mono z-10 relative">
                Профессиональный продакшн.
              </p>
<ul className="space-y-4 text-sm text-gray-600 mb-8 font-mono z-10 relative">
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  Adobe Photoshop
                </li>
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  Adobe Premiere Pro
                </li>
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  After Effects
                </li>
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  Figma
                </li>
</ul>
</div>

<div className="border border-accent bg-black p-8 rounded-2xl relative hover-trigger transform md:-translate-y-4 shadow-[0_10px_40px_rgba(0,0,0,0.2)] spotlight-card">
<div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg z-10">
                Ключевой фокус
              </div>
<div className="font-mono text-xs text-accent mb-4 z-10 relative">
                / CHANNELS
              </div>
<div className="text-2xl font-bold text-white mb-6 z-10 relative">
                Платформы
              </div>
<p className="text-xs text-gray-400 mb-6 font-mono z-10 relative">
                Где находится ваша аудитория.
              </p>
<ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono z-10 relative">
<li className="flex gap-3">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                  Telegram
                </li>
<li className="flex gap-3">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                  Instagram / Reels
                </li>
<li className="flex gap-3">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                  Ozon / Wildberries
                </li>
<li className="flex gap-3">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                  VKontakte
                </li>
</ul>
</div>

<div className="border border-gray-200 p-8 rounded-2xl hover:bg-gray-50 transition-colors hover-trigger spotlight-card glass-panel bg-white">
<div className="font-mono text-xs text-gray-500 mb-4 z-10 relative">
                / INTELLIGENCE
              </div>
<div className="text-2xl font-bold text-black mb-6 z-10 relative">
                Данные и ИИ
              </div>
<p className="text-xs text-gray-500 mb-6 font-mono z-10 relative">
                Оптимизация и масштаб.
              </p>
<ul className="space-y-4 text-sm text-gray-600 mb-8 font-mono z-10 relative">
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  Яндекс Метрика
                </li>
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  Сквозная аналитика
                </li>
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  AI Генерация
                </li>
<li className="flex gap-3">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                  Автоматизация
                </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-10 px-6 border-t border-white/10 relative overflow-hidden" id="contact">
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-20">
<span className="text-[20vw] font-display font-black text-white whitespace-nowrap -ml-10">
            SMM
          </span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="w-full md:w-1/2">
<h3 className="text-2xl font-display font-bold text-white mb-6">
              Готовы обсудить проект?
            </h3>
<p className="text-gray-400 mb-8 max-w-md font-mono text-sm">
              Открыт как к проектным задачам (фриланс), так и к долгосрочному
              партнерству в штате или на ретейнере.
            </p>
<form className="flex flex-col gap-4 max-w-md">
<input className="bg-white/10 border border-white/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-accent text-white placeholder-gray-500" placeholder="Ваше Имя" type="text"/>
<input className="bg-white/10 border border-white/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-accent text-white placeholder-gray-500" placeholder="email@company.com" type="email"/>
<textarea className="bg-white/10 border border-white/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-accent text-white placeholder-gray-500" placeholder="Опишите задачу..." rows="3"></textarea>
<button className="bg-accent text-white px-6 py-3 rounded font-bold text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest w-full md:w-auto">
                Отправить
              </button>
</form>
</div>
<div className="flex gap-12 text-sm text-gray-500 font-mono tracking-wider uppercase">
<div className="flex flex-col gap-3">
<span className="text-white">Связь</span>
<a className="hover:text-accent transition-colors" href="https://t.me/artur_smm">
                Telegram
              </a>
<a className="hover:text-accent transition-colors" href="mailto:artur@example.com">
                Email
              </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white">Профиль</span>
<a className="hover:text-accent transition-colors" href="#">Опыт</a>
<a className="hover:text-accent transition-colors" href="#">
                Портфолио
              </a>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
<span>© 2025 ARTUR VALIAKHMETOV.</span>
<span className="mt-2 md:mt-0">SMM / CONTENT / AI</span>
</div>
</footer>
</main>


    </>
  );
}
