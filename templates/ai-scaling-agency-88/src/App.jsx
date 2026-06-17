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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        // 1. LIGHTER SMOOTH SCROLL CONFIG
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Connect GSAP to Lenis
        gsap.registerPlugin(ScrollTrigger);
        
        // 2. Custom Cursor Logic (Only on Desktop)
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursor = document.getElementById('cursor');
            const hoverTriggers = document.querySelectorAll('.hover-trigger');
            const viewTriggers = document.querySelectorAll('.view-trigger');

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            hoverTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });

            viewTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('view-cursor'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('view-cursor'));
            });
        }

        // 3. CANVAS ANIMATION
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let streams = [];
        const gap = 40; 

        class Stream {
            constructor(x) {
                this.x = x;
                this.y = Math.random() * height;
                this.speed = Math.random() * 2 + 0.5;
                this.length = Math.random() * 100 + 50;
                this.opacity = Math.random() * 0.3 + 0.05;
            }
            update() {
                this.y -= this.speed;
                if (this.y + this.length < 0) {
                    this.y = height + Math.random() * 100;
                    this.speed = Math.random() * 2 + 0.5;
                }
            }
            draw(ctx) {
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, 0);
                ctx.lineTo(this.x, height);
                ctx.stroke();

                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(this.x - 1, this.y, 3, this.length);
            }
        }

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            streams = [];
            for (let x = gap / 2; x < width; x += gap) {
                streams.push(new Stream(x));
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            streams.forEach(s => {
                s.update();
                s.draw(ctx);
            });
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();

        // 4. Hero Text Mask Animation
        const headings = document.querySelectorAll('.mask-text span');
        headings.forEach((h, i) => {
            gsap.to(h, {
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: i * 0.1
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
      
<div className="video-background-container fixed top-0 w-full h-full -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<img alt="Hero Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aura-background-component inset-0 pointer-events-none z-0 fixed saturate-200 hue-rotate-180" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<div id="cursor" style={{left: '951px', top: '0px'}}></div>

<nav className="fixed transition-transform duration-300 z-50 pt-4 px-4 md:pt-6 md:px-6 top-0 right-0 left-0" id="navbar">
<div className="flex flex-col bg-white/[0.03] backdrop-blur-[10px] border border-white/5 max-w-[1600px] rounded-[24px] md:rounded-full mr-auto ml-auto px-4 py-3 md:px-8 items-center justify-between transition-all duration-300">
<div className="flex w-full items-center justify-between">
<a className="flex items-center gap-3 group hover-trigger" href="#">
<div className="flex overflow-hidden bg-center text-black bg-white w-7 h-7 md:w-8 md:h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bb0d554-8131-4079-a0d6-89e7a16208c0_320w.png)] max-w-full bg-cover rounded-sm scale-100 items-center justify-center"></div>
<span className="text-base md:text-lg font-normal text-white tracking-tight font-display text-left">Daniel<span className="font-extralight text-gray-300">Payero</span></span>
</a>
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-normal uppercase tracking-widest transition-colors hover-trigger hover:text-white text-gray-400" href="#work">Кейсы</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-normal text-gray-400 tracking-widest" href="#services">Система</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-normal text-gray-400 tracking-widest" href="#testimonials">Отзывы</a>
</div>
<div className="flex items-center gap-4">
<button className="uppercase transition-colors hover-trigger hover:bg-gray-200 cursor-pointer text-xs font-normal text-black tracking-wider bg-white rounded-full px-6 py-2" onclick="window.location.href='https://calendly.com/noocapm/new-meeting'" role="button">ЗАБРОНИРОВАТЬ ЗВОНОК</button>
</div>
</div>
<div className="mobile-menu hidden w-full flex-col gap-6 pt-6 pb-4 border-t border-white/10 mt-4 md:hidden animate-fade-in bg-black/50 rounded-b-xl backdrop-blur-xl">
<div className="flex flex-col gap-4 items-center">
<a className="text-xs font-normal uppercase tracking-widest text-gray-400 hover:text-white w-full text-center py-3 border-b border-white/5" href="#work" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Кейсы</a>
<a className="text-xs font-normal uppercase tracking-widest text-gray-400 hover:text-white w-full text-center py-3 border-b border-white/5" href="#services" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Система</a>
<a className="text-xs font-normal uppercase tracking-widest text-gray-400 hover:text-white w-full text-center py-3" href="#testimonials" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Отзывы</a>
</div>
<button className="w-full uppercase transition-colors hover:bg-gray-200 cursor-pointer text-xs font-normal text-black tracking-wider bg-white rounded-full py-4 mt-2" onclick="window.location.href='https://calendly.com/noocapm/new-meeting'">ЗАБРОНИРОВАТЬ ЗВОНОК</button>
</div>
</div>
</nav>

<section className="min-h-[100dvh] flex flex-col overflow-hidden z-10 md:px-6 pr-4 pl-4 relative items-center justify-center">
<canvas className="pointer-events-none z-0 opacity-40 w-full h-full absolute top-0 right-0 bottom-0 left-0" height="666" id="hero-canvas" width="1038"></canvas>
<div className="z-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-[1400px] mr-auto ml-auto relative gap-x-12 gap-y-16">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md mb-8 md:mb-12 hover-trigger opacity-0 animate-fade-in border-white/10 bg-white/5" style={{opacity: '1'}}>
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white"></span>
<span className="text-xs uppercase font-normal tracking-[0.2em] text-gray-200">АГЕНТСТВО МАРКЕТИНГА И ИИ</span>
</div>
<h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.95] mb-8 md:mb-12 mix-blend-difference text-white">
<span className="overflow-hidden block"><span className="block translate-y-[110%] will-change-transform">АВТОМАТИЗИРОВАННАЯ</span></span>
<span className="overflow-hidden block"><span className="text-gray-300 block translate-y-[110%] will-change-transform">СИСТЕМА</span></span>
<span className="overflow-hidden block"><span className="block translate-y-[110%] will-change-transform">МАСШТАБИРОВАНИЯ</span></span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8 md:mt-12 border-t pt-8 opacity-0 animate-fade-up border-white/10" style={{opacity: '1'}}>
<p className="text-sm text-gray-400 text-center md:text-left max-w-sm mb-8 md:mb-0">Я Даниэль Пайеро, CEO нашего агентства. Я создал 100% автоматизированную систему для масштабирования бизнеса. Почему стоит выбрать нас? Потому что моя команда и я всегда будем рядом, гарантируя ваш успех.</p>
<div className="flex gap-12">
<div className="text-center md:text-left">
<div className="text-2xl font-normal tracking-tight font-display">150+</div>
<div className="text-xs uppercase tracking-widest text-gray-300">Создано Систем</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl font-normal tracking-tight font-display">10M+</div>
<div className="text-xs uppercase tracking-widest text-gray-300">Сгенерировано Дохода</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-6 bg-[#030303] border-white/5 border-t pt-20 pr-4 pb-20 pl-4 relative" id="work">
</section>

<section className="z-10 bg-[#050509] border-white/5 border-t pt-16 md:pt-40 px-4 md:px-6 pb-0 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto gap-x-4 gap-y-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
<div className="lg:sticky md:top-32 lg:mb-0 h-fit mb-12 relative top-0">
<h2 className="md:text-5xl lg:text-6xl md:mb-8 text-4xl font-normal text-white tracking-tight font-display mb-6">Наша <br/>Система</h2>
<p className="text-base md:text-lg text-gray-400 text-justify max-w-md mb-8 md:mb-12">Мы внедряем системы искусственного интеллекта, которые автоматизируют выполнение задач, снижают зависимость от человеческого фактора и масштабируют ваши операции с высокой точностью, в то время как наша команда оказывает вам постоянную поддержку.</p>
<ul className="space-y-3 md:space-y-4 text-sm md:text-base">
<li className="flex text-gray-400 gap-x-4 gap-y-4 items-center font-normal">Архитектура ИИ-Операций</li>
<li className="flex text-gray-300 gap-x-4 gap-y-4 items-center font-normal">Автоматизация Маркетинга</li>
<li className="flex text-gray-300 gap-x-4 gap-y-4 items-center font-normal">Омниканальная Дистрибуция</li>
</ul>
</div>
<div className="flex flex-col gap-8 md:gap-12 pb-16">

<div className="group h-auto min-h-[400px] md:h-[450px] w-full cursor-pointer hover-trigger [perspective:1000px]">
<div className="relative w-full h-full border rounded-2xl p-4 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden default border-white/10 [transform-style:preserve-3d] transition-transform duration-500 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%270_0_200_200%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noiseFilter%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.65%27_numOctaves=%273%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noiseFilter)%27_opacity=%270.05%27/%3E%3C/svg%3E')]" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative w-full h-48 md:h-64 border bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center border-white/10 [transform:translateZ(40px)]">
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 400 256">
<path d="M70 85 C 130 85, 130 128, 200 128" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M70 171 C 130 171, 130 128, 200 128" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M200 128 C 270 128, 270 64, 330 64" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path d="M200 128 C 270 128, 270 128, 330 128" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path d="M200 128 C 270 128, 270 192, 330 192" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<circle className="opacity-80" fill="#9ca3af" r="2">
<animatemotion dur="3s" keypoints="0;1" keytimes="0;1" path="M70 85 C 130 85, 130 128, 200 128" repeatcount="indefinite"></animatemotion>
</circle>
<circle className="opacity-80" fill="#22c55e" r="2">
<animatemotion dur="2s" path="M200 128 C 270 128, 270 64, 330 64" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<div className="relative z-10 w-full h-full flex items-center justify-between px-2 md:px-10">
<div className="flex flex-col gap-4 md:gap-10">
<div className="flex items-center gap-3 p-1.5 md:p-2 rounded-lg bg-[#0A0A0A] border border-white/10 shadow-lg transform transition-transform hover:scale-105">
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded bg-blue-500/10 text-blue-400">
<iconify-icon height="1.25rem" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
<div className="hidden sm:block">
<div className="text-xs font-normal text-white tracking-wider uppercase">Источник</div>
</div>
</div>
<div className="flex items-center gap-3 p-1.5 md:p-2 rounded-lg bg-[#0A0A0A] border border-white/10 shadow-lg transform transition-transform hover:scale-105">
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded bg-purple-500/10 text-purple-400">
<iconify-icon height="1.25rem" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
<div className="hidden sm:block">
<div className="text-xs font-normal text-white tracking-wider uppercase">Сбор</div>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gray-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center relative z-10">
<iconify-icon height="1.5rem" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap px-2 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse"></div>
<span className="text-xs font-mono font-normal text-white/80 tracking-tight">ОБРАБОТКА</span>
</div>
</div>
<div className="flex flex-col gap-2 md:gap-5">
<div className="flex items-center justify-end gap-3 group">
<div className="hidden sm:block text-right">
<div className="text-xs font-normal text-white tracking-wider uppercase">Веб</div>
</div>
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0A0A0A] border border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/30 transition-colors">
<iconify-icon height="1.25rem" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-end gap-3 group">
<div className="hidden sm:block text-right">
<div className="text-xs font-normal text-white tracking-wider uppercase">Соцсети</div>
</div>
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0A0A0A] border border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/30 transition-colors">
<iconify-icon height="1.25rem" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="absolute bottom-3 left-4 text-xs font-mono text-white/20 uppercase tracking-widest pointer-events-none">
                                    Архитектура Операций v2.0
                                </div>
</div>
<div className="relative z-10 [transform:translateZ(40px)]">
<h3 className="text-2xl md:text-3xl font-normal text-white font-display mb-2 tracking-tight">Архитектура ИИ-Операций</h3>
<p className="text-gray-300 max-w-sm text-sm md:text-base">Мы проектируем комплексную структуру, которая превращает ваши цели в предсказуемые, повторяемые и масштабируемые рабочие процессы.</p>
</div>
</div>
</div>

<div className="group cursor-pointer hover-trigger w-full h-auto min-h-[400px] md:h-[450px] [perspective:1000px]">
<div className="relative w-full h-full border rounded-2xl p-4 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden default border-white/10 [transform-style:preserve-3d] transition-transform duration-500 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%270_0_200_200%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noiseFilter%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.65%27_numOctaves=%273%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noiseFilter)%27_opacity=%270.05%27/%3E%3C/svg%3E')]" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100% 40px'}}></div>
<div className="w-full h-48 md:h-64 mb-6 relative [transform:translateZ(40px)]">
<div className="absolute top-8 left-8 w-[85%] h-48 border border-white/5 bg-white/[0.02] rounded-xl -z-10 transform translate-x-2 translate-y-2"></div>
<div className="w-full h-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl relative group hover:-translate-y-1 transition-transform duration-500">
<div className="h-8 border-b border-white/5 flex items-center px-4 bg-white/[0.02] justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/20 border border-[#FF5F56]/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#9ca3af]/20 border border-[#9ca3af]/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/20 border border-[#27C93F]/50"></div>
</div>
<div className="text-xs font-mono text-white/30 flex items-center gap-2">
<span>engine.py</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
</div>
</div>
<div className="flex-1 p-3 md:p-5 flex flex-col relative font-mono text-xs">
<div className="flex-1 flex pr-2 pl-2 relative items-center justify-between">
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveaspectratio="none" viewbox="0 0 280 140">
<path d="M50 70 L 110 70" stroke="url(#gradient-line-aura)" stroke-dasharray="4 2" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="1s" from="12" repeatcount="indefinite" to="0"></animate>
</path>
<path d="M140 70 C 170 70, 170 40, 210 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M140 70 C 170 70, 170 70, 210 70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M140 70 C 170 70, 170 100, 210 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<defs>
<lineargradient id="gradient-line-aura" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0.2)"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
</defs>
</svg>
<div className="flex flex-col items-center gap-2 z-10 w-12 md:w-16">
<div className="flex transition-colors text-blue-400 bg-blue-500/10 w-8 h-8 md:w-10 md:h-10 border-blue-500/30 border rounded-lg relative shadow-[0_0_15px_rgba(59,130,246,0.15)] items-center justify-center">
<iconify-icon height="1.5rem" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<span className="text-xs scale-75 md:scale-100 text-white/40 uppercase tracking-wider">Исток</span>
</div>
<div className="relative z-10 w-12 md:w-16 flex flex-col items-center gap-2">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] relative backdrop-blur-sm">
<iconify-icon className="text-blue-400 animate-pulse" height="1.5rem" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
<div className="absolute inset-0 rounded-xl border border-white/5 animate-[spin_4s_linear_infinite]"></div>
</div>
</div>
<div className="flex flex-col gap-2 z-10 w-24 md:w-28">
<div className="flex items-center gap-2 bg-[#111] border border-white/10 p-1.5 rounded-lg shadow-sm">
<div className="w-4 h-4 md:w-5 md:h-5 rounded bg-pink-500/10 flex items-center justify-center text-pink-500">
<iconify-icon height="0.8rem" icon="solar:smartphone-linear" width="0.8rem"></iconify-icon>
</div>
<div className="flex flex-col w-full">
<div className="flex justify-between items-center mb-0.5">
<span className="text-xs scale-75 origin-left text-white/90 leading-none">Шортсы</span>
<span className="text-xs scale-75 origin-right text-green-500">ГОТОВО</span>
</div>
<div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-pink-500"></div></div>
</div>
</div>
<div className="flex items-center gap-2 bg-[#111] border border-white/10 p-1.5 rounded-lg shadow-sm opacity-90">
<div className="w-4 h-4 md:w-5 md:h-5 rounded bg-sky-500/10 flex items-center justify-center text-sky-500">
<iconify-icon height="0.8rem" icon="solar:document-text-linear" width="0.8rem"></iconify-icon>
</div>
<div className="flex flex-col w-full">
<div className="flex justify-between items-center mb-0.5">
<span className="text-xs scale-75 origin-left text-white/90 leading-none">Треды</span>
<span className="text-xs scale-75 origin-right text-gray-300">82%</span>
</div>
<div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[82%] h-full bg-sky-500 animate-pulse"></div></div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/5 text-xs text-white/30 flex flex-col gap-1">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" height="1rem" icon="solar:check-circle-linear" width="1rem"></iconify-icon>
<span>Аудио обработано (12 ключевых моментов)</span>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 [transform:translateZ(40px)]">
<h3 className="text-2xl md:text-3xl font-normal text-white font-display mb-2 tracking-tight">ИИ-Модуль Репрофилирования</h3>
<p className="text-gray-300 max-w-sm text-sm md:text-base">Модульная система, которая автоматически создает короткие видео, карусели и тексты, готовые к публикации.</p>
</div>
</div>
</div>

<div className="group cursor-pointer hover-trigger w-full h-auto min-h-[400px] md:h-[450px] [perspective:1000px]">
<div className="flex flex-col overflow-hidden default w-full h-full border-white/10 border rounded-2xl p-4 md:p-10 relative shadow-2xl justify-between [transform-style:preserve-3d] transition-transform duration-500" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>
<div className="mt-10 mb-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
<div className="hidden md:block absolute bottom-10 right-8 w-48 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 pointer-events-none" style={{visibility: 'hidden'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-normal tracking-widest text-slate-400 uppercase font-mono">Дистрибуция</span>
<div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
</div>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white">
<iconify-icon height="1.25rem" icon="solar:share-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-normal text-white">Автопубликация</span>
<span className="text-xs scale-90 origin-left font-normal text-slate-500">Активно</span>
</div>
</div>
<div className="mt-3 flex gap-1">
<div className="h-0.5 w-full bg-gray-400/80 rounded-full"></div>
<div className="h-0.5 w-full bg-gray-400/80 rounded-full"></div>
<div className="h-0.5 w-full bg-white/10 rounded-full"></div>
</div>
</div>
</div>
<div className="relative w-full h-48 md:h-64 border bg-[#050505]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center border-white/10 [transform:translateZ(40px)]">
<div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
<div className="absolute border rounded-full border-white/5 w-64 h-64 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute border rounded-full border-white/10 w-48 h-48 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute border rounded-full border-white/5 w-32 h-32 animate-pulse"></div>
<div className="relative z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-white" height="1.5rem" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<div className="absolute top-1/4 right-1/4 transform translate-x-4 -translate-y-4">
<div className="w-8 h-8 bg-[#1DA1F2]/10 border border-[#1DA1F2]/40 rounded-lg flex items-center justify-center backdrop-blur-md animate-bounce" style={{animationDuration: '3s'}}>
<span className="text-[#1DA1F2] font-medium text-xs">X</span>
</div>
</div>
<div className="absolute bottom-1/3 left-1/4 transform -translate-x-4 translate-y-2">
<div className="w-8 h-8 bg-[#0077B5]/10 border border-[#0077B5]/40 rounded-lg flex items-center justify-center backdrop-blur-md animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
<span className="text-[#0077B5] font-medium text-xs">in</span>
</div>
</div>
<div className="absolute bottom-1/4 right-1/3 transform translate-x-2 translate-y-4">
<div className="w-8 h-8 bg-[#FF0000]/10 border border-[#FF0000]/40 rounded-lg flex items-center justify-center backdrop-blur-md animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
<span className="text-[#FF0000] font-medium text-xs">YT</span>
</div>
</div>
</div>
<div className="hidden xs:flex absolute bottom-4 left-4 gap-3 items-center bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
<div className="flex flex-col">
<span className="text-xs scale-75 origin-left uppercase tracking-widest text-slate-400 font-mono">Общий Охват</span>
<span className="text-xs font-mono font-medium text-gray-300">12.4M+ Зрителей</span>
</div>
<div className="h-2 w-12 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[80%] animate-pulse"></div>
</div>
</div>
</div>
<div className="relative z-10 [transform:translateZ(40px)]">
<h3 className="text-2xl md:text-3xl font-normal text-white font-display mb-2 tracking-tight">Автоматизированная Дистрибуция</h3>
<p className="text-gray-300 max-w-sm text-sm md:text-base">Мультиплатформенное планирование и публикация, обеспечивающие доставку вашего контента идеальной аудитории в нужный момент.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-6 overflow-hidden bg-black border-white/10 border-t pt-20 pr-4 pb-20 pl-4 relative" id="testimonials">
<div className="z-10 max-w-[1400px] mr-auto ml-auto relative">
<div className="text-center mb-12 md:mb-20">
<h2 className="md:text-6xl md:mb-6 text-3xl font-normal text-white tracking-tight font-display mb-4">Кто я?</h2>
<p className="uppercase text-xs text-gray-300 tracking-widest">Я ИЩУ ТОЛЬКО ТЕ БИЗНЕСЫ, КОТОРЫЕ ХОТЯТ РАСТИ, ЧТОБЫ У НИХ БЫЛА ПОНЯТНАЯ СИСТЕМА И БОЛЬШЕ ЛИДОВ.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0A0A0A] transition-transform duration-500 hover:-translate-y-2">
<div className="absolute inset-0 w-full h-full bg-gray-900">
<img alt="Testimonio 1" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
<div className="flex items-center gap-4 border-t border-white/10 pt-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img alt="Brad Gains" className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;q=80"/>
</div>
<div>
<div className="text-sm font-normal text-white">Брэд Гейнс</div>
<div className="uppercase text-xs text-gray-300 tracking-wider">КРЕАТОР</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0A0A0A] transition-transform duration-500 hover:-translate-y-2 md:-mt-12">
<div className="absolute inset-0 w-full h-full bg-gray-900">
<img alt="Testimonio 2" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
<div className="flex items-center gap-4 border-t border-white/10 pt-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img alt="Chris Cordero" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca4f769-07d3-4430-bcc9-32949b6c22a5_320w.jpg"/>
</div>
<div className="">
<div className="text-sm font-normal text-white">Крис Кордеро</div>
<div className="text-xs uppercase tracking-wider text-gray-300">Креатор</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0A0A0A] transition-transform duration-500 hover:-translate-y-2">
<div className="absolute inset-0 w-full h-full bg-gray-900">
<img alt="Testimonio 3" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
<div className="flex items-center gap-4 border-t border-white/10 pt-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img alt="David K." className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&amp;q=80"/>
</div>
<div>
<div className="text-sm font-normal text-white">Дэвид К.</div>
<div className="text-xs uppercase tracking-wider text-gray-300">Основатель, Orbit</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-[#050509] border-t pt-16 md:pt-24 pb-8 md:pb-12 border-white/5">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-50 via-white/20"></div>
<div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] blur-[80px] rounded-full pointer-events-none mix-blend-screen bg-white/5"></div>
<div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 md:mb-20">

<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="flex overflow-hidden text-black bg-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/700319bb-4971-4d91-b1bc-1343b4dd3841_320w.png)] bg-contain rounded-sm items-center justify-center"></div>
<span className="text-lg font-normal text-white tracking-tight font-display">Daniel<span className="font-extralight text-gray-300">Payero</span></span>
</a>
<p className="text-sm leading-relaxed max-w-xs text-gray-400">
                        Автоматизированные системы для масштабирования бизнеса, с постоянной поддержкой моей команды. Всегда рядом с вами.
                    </p>
</div>

<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">Навигация</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="transition-colors hover:text-gray-300" href="#work">Кейсы</a></li>
<li><a className="transition-colors hover:text-gray-300" href="#services">Система</a></li>
<li><a className="transition-colors hover:text-gray-300" href="#testimonials">Отзывы</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">Компания</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="transition-colors hover:text-gray-300" href="#">О Нас</a></li>
<li><a className="transition-colors hover:text-gray-300" href="#">Новости</a></li>
<li><a className="transition-colors hover:text-gray-300" href="#">Контакты</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">Соцсети</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="transition-colors hover:text-gray-300" href="#">Twitter / X</a></li>
<li><a className="transition-colors hover:text-gray-300" href="#">LinkedIn</a></li>
<li><a className="transition-colors hover:text-gray-300" href="#">Instagram</a></li>
</ul>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white">Будьте в курсе</h4>
<div className="relative">
<input className="focus:outline-none focus:border-white/30 transition-colors text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Ваш email" type="email"/>
<button className="absolute right-2 top-2 p-1 rounded transition-colors bg-white text-black hover:bg-gray-200 flex items-center justify-center">
<iconify-icon height="1.25rem" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/10">
<div className="text-xs uppercase text-gray-500 tracking-widest text-center md:text-left">© 2025 Daniel Payero. Все права защищены.</div>
<div className="flex gap-6 text-xs uppercase tracking-widest text-gray-500">
<a className="transition-colors hover:text-gray-300" href="#">Конфиденциальность</a>
<a className="transition-colors hover:text-gray-300" href="#">Условия</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
