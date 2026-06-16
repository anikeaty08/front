import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
900: '#171717',
950: '#0a0a0a',
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);

      // Анимация появления заголовков
      document.querySelectorAll(".h-reveal h1").forEach(el => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
      document.querySelectorAll(".h-reveal p, .h-reveal div").forEach(el => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          stagger: 0.1
        });
      });

      // Скролл-анимация для секций (всплытие)
      const targets = document.querySelectorAll(".gs-reveal");
      targets.forEach(el => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%"
            }
          }
        );
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden" id="wrapper">

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
<div className="w-full max-w-[1600px] flex items-center justify-between mx-auto py-5">
<div className="md:text-xl uppercase text-lg font-bold text-white tracking-tighter font-oswald">SM AGENCY</div>
<a className="hover:bg-white hover:text-black transition-colors uppercase text-sm font-semibold text-white tracking-tight bg-white/10 border-white/10 border pt-2.5 pr-6 pb-2.5 pl-6" href="https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.">
          Обсудить проект
        </a>
</div>
</nav>

<header className="relative flex flex-col justify-center min-h-screen w-full bg-black border-b border-white/5 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))', backgroundSize: '100% 4px'}}></div>
<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(90deg, transparent 99%, rgba(0, 255, 255, 0.03) 100%)', backgroundSize: '10vw 100%'}}></div>
<div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/15 via-black/95 to-black"></div>

<div className="z-10 md:px-12 lg:px-16 flex flex-col w-full max-w-[1600px] mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-start">

<div className="absolute w-full h-full left-0 top-0 -z-10 pointer-events-none" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>


<div className="flex items-center gap-3 mb-6 md:mb-8 w-full max-w-4xl">
<div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
<span className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.4em] text-cyan-500 uppercase font-mono">
        Разработка от 7 дней. Гарантия по договору.
      </span>
<span className="hidden md:block w-12 h-[1px] bg-cyan-500/50"></span>
</div>

<h1 className="uppercase leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] drop-shadow-[0_0_30px_rgba(0,255,255,0.15)] font-medium text-white mb-8 w-full max-w-5xl" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>
      ДЕЛАЕМ САЙТЫ ДЛЯ БИЗНЕСА.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/40">БЕЗ СРЫВА СРОКОВ.</span>
</h1>

<p className="mt-2 text-sm md:text-base text-neutral-400 font-light tracking-wide max-w-xl border-l border-cyan-500/30 pl-4 py-1 leading-relaxed">
      Разрабатываем сайты, которые приносят реальные заявки в Бишкеке и СНГ. Никакого «дизайна ради дизайна». Только конверсия, продажи и скорость.
    </p>

<div className="mt-12 flex flex-col sm:flex-row items-start gap-4 pointer-events-auto w-full sm:w-auto">
<a className="group inline-flex items-center justify-center gap-3 sm:text-sm uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] sm:w-auto text-xs font-medium text-cyan-400 tracking-[0.2em] font-mono bg-cyan-400/10 w-full border-cyan-400 border rounded-none pt-4 pr-8 pb-4 pl-8 relative" href="https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.">
<span className="">Рассчитать стоимость сайта</span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/80 group-hover:border-black/50 transition-colors"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/80 group-hover:border-black/50 transition-colors"></div>
</a>
</div>
</div>

<div className="absolute bottom-12 right-6 lg:right-16 z-20 hidden md:flex flex-col items-end gap-2 text-right pointer-events-none">
<p className="text-[10px] tracking-[0.3em] text-neutral-600 uppercase font-mono">Core Metrics</p>
<div className="flex gap-4 text-xs font-mono text-cyan-500/70 mt-1">
<span>[ CONVERSION ]</span>
<span>[ PERFORMANCE ]</span>
<span>[ ROI ]</span>
</div>
</div>
</header>

<section className="text-[#2d322f] bg-[#f4f6f3] pt-28 pr-6 pb-28 pl-6">
<div className="max-w-4xl mx-auto text-center gs-reveal">

<div className="w-16 h-px bg-[#3F556B]/40 mx-auto mb-10"></div>

<p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#2d322f]/60 mb-6">
      Основатель агентства
    </p>

<h2 className="md:text-5xl leading-tight text-3xl font-semibold tracking-tight max-w-3xl mr-auto mb-8 ml-auto">Я знаю, как вы сливаете бюджеты на маркетинг</h2>

<div className="text-base md:text-lg text-[#2d322f]/80 font-light leading-relaxed mb-12 max-w-[65ch] mx-auto space-y-6">
<p className="">
        Меня зовут Нурсултан Сыдыков. Я веб-разработчик с 5-летним опытом и основатель SYDYKOV MARKETING AGENCY. Но главное — я сам предприниматель. У меня свой бизнес в строительстве частных домов и электромонтаже под ключ.
      </p>
<p className="">
        Я каждый день сталкиваюсь с тем же, с чем и вы: подрядчики пропадают, реклама не работает, а "красивые" сайты не приносят звонков. Поэтому я создал агентство, которое делает сайты не для галочки, а для генерации прибыли. Мы говорим на языке цифр и лидов, а не IT-терминов.
      </p>
</div>

<div className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] text-[#3F556B] mb-16">
      Маркетинг / Разработка / Аналитика / Продажи
    </div>

<div className="w-full max-w-3xl mx-auto aspect-[4/5] md:aspect-[16/9] bg-[#e8ebe6] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Нурсултан Сыдыков" className="text-xl font-extrabold bg-slate-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e17a529-f60c-49be-8487-d9a6d6d07de6_1600w.png?w=800&amp;q=80"/>
<div className="-translate-x-1/2 w-[calc(100%-3rem)] md:w-auto md:px-8 text-[10px] md:text-[11px] uppercase whitespace-nowrap text-lg italic text-[#2d322f] tracking-widest text-center bg-[#f4f6f3]/95 border-[#3F556B]/20 border rounded-md pt-4 pr-4 pb-4 pl-4 absolute bottom-6 left-1/2 shadow-sm backdrop-blur-md">Нурсултан Сыдыков </div>
</div>
</div>
</section>

<section className="md:py-36 md:px-12 lg:px-24 bg-black w-full border-white/5 border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1600px] mx-auto">
<div className="mb-16 md:mb-20 flex flex-col lg:flex-row justify-between items-end gap-6 gs-reveal">
<div className="">
<p className="text-xs uppercase tracking-[0.4em] text-cyan-500 mb-4 flex items-center gap-3 font-mono">
<span className="w-8 h-[1px] bg-cyan-500"></span> 02 // Process
        </p>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase leading-[1.1]" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>
          Как мы работаем <br/>
<span className="text-neutral-600 text-xl md:text-3xl tracking-normal mt-2 block font-sans lowercase font-light">
            (и почему нас рекомендуют)
          </span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 gs-reveal">

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-8 opacity-80 group-hover:opacity-100 transition-opacity" height="40" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white uppercase mb-4 leading-snug" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>Сначала смыслы, потом пиксели.</h3>
<p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
          Вы не пишете скучные ТЗ. Мы сами погружаемся в вашу нишу, анализируем конкурентов и пишем продающие тексты. Сайт должен закрывать боли ваших клиентов.
        </p>
</div>

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-8 opacity-80 group-hover:opacity-100 transition-opacity" height="40" icon="solar:smartphone-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white uppercase mb-4 leading-snug" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>Мобайл-Ферст (Mobile-First).</h3>
<p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
          90% трафика — это смартфоны. Мы сначала делаем идеальную мобильную версию сайта, которая грузится за 1 секунду и работает без багов.
        </p>
</div>

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-8 opacity-80 group-hover:opacity-100 transition-opacity" height="40" icon="solar:stopwatch-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white uppercase mb-4 leading-snug" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>Жесткие сроки.</h3>
<p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
          В договоре прописана точная дата сдачи проекта. Если мы срываем дедлайн — мы возвращаем часть денег. Мы знаем цену времени в бизнесе.
        </p>
</div>

<div className="bg-black p-10 lg:p-14 group hover:bg-neutral-950 transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 group-hover:h-full transition-all duration-500 ease-out"></div>
<iconify-icon className="text-cyan-500 mb-8 opacity-80 group-hover:opacity-100 transition-opacity" height="40" icon="solar:document-text-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white uppercase mb-4 leading-snug" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>Прозрачная смета.</h3>
<p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
          Никаких скрытых платежей в процессе разработки. Вы знаете финальную стоимость сайта еще до старта работ.
        </p>
</div>
</div>
</div>
</section>

<section className="md:py-40 md:px-12 max-w-[1600px] border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<style>
        @keyframes shineSweep {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
            animation: shineSweep 2.5s infinite ease-in-out;
        }
    </style>

<div className="gs-reveal border-cyan-500 border-l-4 mb-16 pt-2 pb-2 pl-6">
<div className="flex gap-2 uppercase text-xs font-semibold text-cyan-500 tracking-[0.2em] font-mono mb-2 gap-x-2 gap-y-2 items-center">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect className="" height="16" rx="2" width="16" x="4" y="4"></rect>
<rect className="" height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
<span className="">03 Portfolio</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight uppercase mb-2" style={{fontFamily: '\'Orbitron\', system-ui, sans-serif'}}>
            Наши
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-900">Кейсы</span>
</h2>
<p className="md:text-xl text-lg font-medium text-neutral-500 tracking-wide max-w-2xl">Передовые веб-решения и системы, разработанные для генерации прибыли. Напишите нам - пришлем ссылки на сайты - портфолио</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 w-full gs-reveal">

<div className="group hover:border-cyan-500 transition-all duration-300 overflow-hidden bg-[#111] w-full h-[320px] border-white/10 border relative shadow-2xl -skew-x-12">
<div className="bg-center group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7101072-876c-48de-b277-fd7c0dbd75dd_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale scale-125 skew-x-12"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="flex flex-col group-hover:-translate-y-2 transition-transform duration-300 cursor-pointer w-full h-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 skew-x-12 justify-end" onclick="window.location.href='https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.'" role="button">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">Baziko Premium</h3>
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">01</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Корпоративный сайт для автоматизированной швейной фабрики.</p>
<div className="flex gap-2 uppercase group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-cyan-500 tracking-widest opacity-0 gap-x-2 gap-y-2 items-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</div>

<div className="group hover:border-cyan-500 transition-all duration-300 overflow-hidden md:mt-8 bg-[#111] w-full h-[320px] border-white/10 border mt-0 relative shadow-2xl -skew-x-12">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="flex flex-col group-hover:-translate-y-2 transition-transform duration-300 bg-center w-full h-full bg-[url(https://optim.tildacdn.pro/tild6630-3331-4463-b835-636462396362/-/format/webp/25141739.jpg.webp?w=800&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 skew-x-12 justify-end">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="md:text-2xl uppercase text-xl font-semibold text-cyan-500 tracking-tight">Строй Проект</h3>
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">02</span>
</div>
<p className="leading-tight text-sm text-orange-50 mb-4">Лендинг для генерации заявок на постройку частных домов под ключ.</p>
<div className="flex gap-2 uppercase group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-cyan-500 tracking-widest opacity-0 gap-x-2 gap-y-2 items-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-[#111] -skew-x-12 border border-white/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-2xl">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="flex flex-col group-hover:-translate-y-2 transition-transform duration-300 bg-center w-full h-full bg-[url(https://artmebius.com/images/portfolio/elektronvdom/1.jpg?w=800&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 skew-x-12 justify-end">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="md:text-2xl uppercase text-xl font-semibold text-cyan-500 tracking-tight">Электромонтаж</h3>
<span className="group-hover:text-cyan-500 transition-colors text-3xl font-semibold text-neutral-800 font-mono">03</span>
</div>
<p className="leading-tight text-sm text-zinc-900 bg-gradient-to-t from-white/100 via-white/50 to-white/100 mb-4">Сайт-визитка для B2B и B2C услуг электромонтажа с высокой конверсией.</p>
<div className="flex gap-2 uppercase group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-cyan-500 tracking-widest opacity-0 gap-x-2 gap-y-2 items-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-[#111] -skew-x-12 border border-white/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1000&amp;q=80')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="flex flex-col group-hover:-translate-y-2 transition-transform duration-300 w-full h-full bg-[url(https://wezom.com.ua/Media/filemanager/blog/saas-prilozheniya/desktop/VI7UlD5uA6F5BqIj0CXrLIDCKpLegPeFSyFfUlz4.jpg?w=800&amp;q=80)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 skew-x-12 justify-end">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">04</span>
</div>
<div className="flex gap-2 uppercase group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-cyan-500 tracking-widest opacity-0 gap-x-2 gap-y-2 items-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</div>
</div>

<div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 w-full mt-6 md:mt-0" id="hidden-projects">

<div className="group relative w-full h-[320px] bg-[#111] -skew-x-12 border border-white/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-2xl">
<div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out bg-[url(https://wa-magazin.ru/wa-data/public/site/topshop/screens/scr00.png?w=800&amp;q=80)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">E-Commerce</h3>
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">05</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Многоуровневый интернет-магазин с интеграцией складского учета.</p>
<div className="flex items-center gap-2 text-cyan-500 text-sm font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Смотреть <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-[#111] -skew-x-12 border border-white/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out bg-[url(https://wezom.com.ua/storage/blog/inner/05A4A4VuGK8msrODcPGFpBF49ff4deMNjx7GlVuQ.png?w=800&amp;q=80)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">Mobile Ops</h3>
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">06</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Высоконагруженное кроссплатформенное приложение для iOS и Android.</p>
<div className="flex items-center gap-2 text-cyan-500 text-sm font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Смотреть <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-[#111] -skew-x-12 border border-white/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-2xl">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&amp;q=80')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">DeFi Web3</h3>
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">07</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Блокчейн-интерфейс для децентрализованного обмена и смарт-контрактов.</p>
<div className="flex items-center gap-2 text-cyan-500 text-sm font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Смотреть <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative w-full h-[320px] bg-[#111] -skew-x-12 border border-white/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden shadow-2xl mt-0 md:mt-8">
<div className="absolute inset-0 skew-x-12 scale-125 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&amp;q=80')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500 ease-out"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent skew-x-12 scale-125"></div>
<div className="absolute bottom-0 left-0 w-full p-6 skew-x-12 flex flex-col justify-end h-full group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-end border-b border-white/10 pb-2 mb-3 group-hover:border-cyan-500 transition-colors">
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight uppercase">AI Automator</h3>
<span className="text-3xl font-semibold text-neutral-800 group-hover:text-cyan-500 transition-colors font-mono">08</span>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-tight">Внедрение нейросетей для обработки данных и поддержки клиентов.</p>
<div className="flex items-center gap-2 text-cyan-500 text-sm font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Смотреть <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="mt-16 md:mt-24 flex justify-center w-full">
<button className="group relative inline-flex items-center justify-center px-10 py-5 font-semibold text-white uppercase tracking-widest bg-black border border-cyan-500/50 hover:border-cyan-400 overflow-hidden transition-colors -skew-x-12 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]" onclick="document.getElementById('hidden-projects').classList.remove('hidden'); document.getElementById('hidden-projects').classList.add('grid'); this.parentElement.style.display='none';">
<div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shine pointer-events-none"></div>
<span className="relative z-10 flex items-center gap-3 skew-x-12 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] font-mono">
<svg className="text-cyan-400 group-hover:translate-y-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
                Еще кейсы
                <svg className="text-cyan-400 group-hover:translate-y-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</span>
</button>
</div>
</section>

<section className="md:px-12 lg:px-24 overflow-hidden bg-black w-full border-white/5 border-b pt-32 pr-6 pb-32 pl-6 relative" id="contact">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-30 pointer-events-none">
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center reveal-on-scroll" data-reveal="" style={{-RevealDelay: '0ms'}}>
<p className="uppercase bg-clip-text text-base font-bold text-transparent tracking-[0.5em] font-orbitron bg-gradient-to-l from-white/100 via-white/50 to-white/100 border-cyan-500/20 border mb-8 pt-1 pr-4 pb-1 pl-4">04 // БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</p>
<h2 className="md:text-6xl lg:text-7xl uppercase text-4xl font-medium text-white tracking-tight font-orbitron mb-6">Готовы обсудить <br/><span className="bg-clip-text text-transparent font-oswald bg-gradient-to-r from-cyan-400 to-white/30">ваш проект?</span></h2>
<p className="text-lg text-neutral-500 tracking-widest font-oswald max-w-md mb-12">Не платите за дизайн. Платите за бизнес-инструмент. Напишите мне в WhatsApp, расскажите о вашей задаче, и я бесплатно предложу 3 идеи, как улучшить ваши продажи в интернете. Это ни к чему вас не объязывает</p>
<a className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-orbitron font-medium text-sm uppercase tracking-[0.2em] px-12 py-5 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] rounded-none overflow-hidden" href="mailto:sys@lab01.com">
<span className="flex items-center gap-2 bg-clip-text text-xs font-extrabold text-transparent bg-gradient-to-t from-black/50 via-black/100 to-black/50 z-10 relative">Написать Нурсултану на Whatsapp</span>
<div className="group-hover:scale-95 transition-transform border-black border absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.'" role="button"></div>
</a>
</div>
</section><section className="lg:px-12 bg-[#ebedea] max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
<div className="max-w-2xl">
<h2 className="md:text-6xl uppercase text-5xl font-semibold text-[#2d322f] tracking-tighter font-oswald mb-4">СТОИМОСТЬ <span className="text-[#3F556B]">РАЗРАБОТКИ САЙТА</span></h2>
<p className="text-base text-[#2d322f]/70">Честно рассчитаем смету под ваш бюджет без навязывания лишних услуг — вы платите только за готовый инструмент, который приносит прибыль</p>
</div>
<a className="inline-flex items-center gap-2 uppercase hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-colors shrink-0 text-xs font-semibold text-[#2d322f] tracking-widest bg-[#ebedea] border-[#2d322f]/20 border pt-3 pr-6 pb-3 pl-6" href="https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="aspect-[4/5] overflow-hidden flex bg-white ring-1 pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<span className="text-[10px] uppercase font-semibold text-white tracking-[0.2em] font-oswald bg-[#3F556B] z-10 pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 shadow-sm">ПЕРВЫЕ ДЕНЬГИ ДЛЯ ВАШЕГО БИЗНЕСА</span>
<button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Trail Running Shoe" className="transition-transform duration-500 hover:scale-105 w-full object-contain drop-shadow-xl" src="https://cdn.dribbble.com/userupload/31622905/file/original-90838400dee8f403b38005bd3c333700.jpg?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
<span className="inline-block font-oswald border-[#3F556B] border-b-2 pb-1">РАЗРАБОТКА ОДНОСТРАНИЧНОГО САЙТА </span>
</h3>
<span className="shrink-0 text-xl font-semibold text-[#2d322f] font-display">$300</span>
</div>
<div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:snowflake-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">НА ВСЕХ УСТРОЙСТВАХ АДАПТИВЕН САЙТ</span>
</div>
<div className="flex flex-col items-center justify-center border-x border-[#2d322f]/10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:waterdrops-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">ГОТОВЫЙ САЙТ ДЛЯ ПРИБЫЛИ</span>
</div>
<div className="flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:scale-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">СОВРЕМЕННЫЙ И ПРИЯТНЫЙ ДИЗАЙН</span>
</div>
</div>
<button className="uppercase hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-all flex gap-2 text-xs font-semibold text-[#2d322f] tracking-widest bg-transparent w-full border-[#2d322f] border pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.'" role="button">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ </button>
</div>
</div>

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)]">
<div className="aspect-[4/5] overflow-hidden flex bg-white pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<span className="text-[10px] uppercase z-10 font-semibold text-white tracking-[0.2em] bg-red-600 rounded-3xl pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 shadow-lg brightness-90">ПОПУЛЯРНЫЙ ПРОДУКТ </span>
<button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Hardshell Jacket" className="transition-transform duration-500 hover:scale-105 w-full object-contain drop-shadow-xl" src="https://cdn.dribbble.com/userupload/44538591/file/31d2f9b509cbad1da508839c36192366.jpg?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
<span className="inline-block font-oswald border-[#3F556B] border-b-2 pb-1">МНОГОСТРАНИЧНЫЙ САЙТ С ДОРОГОЙ АНИМАЦИЕЙ</span>
</h3>
<span className="shrink-0 text-xl font-semibold text-[#2d322f] font-display">$520</span>
</div>
<div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:snowflake-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">ФИКСИРОВАННАЯ ЦЕНА НА РАЗРАБОТКУ</span>
</div>
<div className="flex flex-col border-x border-[#2d322f]/10 items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:cloud-water-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">ВЫ НА ШАГ ВПЕРЕДИ КОНКУРЕНТОВ </span>
</div>
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:scale-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">АНИМАЦИЯ И СТИЛЬ САЙТА ПО ВАШЕМУ ЖЕЛАНИЮ</span>
</div>
</div>
<button className="uppercase hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-all flex gap-2 text-xs font-semibold text-[#2d322f] tracking-widest bg-transparent w-full border-[#2d322f] border pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.'" role="button">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</button>
</div>
</div>

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)]">
<div className="relative aspect-[4/5] bg-white overflow-hidden flex items-center justify-center p-8">
<span className="text-[10px] uppercase z-10 font-semibold text-white tracking-[0.2em] bg-[#3F556B] pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 shadow-sm">ИНТЕРНЕТ - МАГАЗИН</span>
<button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Climbing Harness" className="w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90248f41-e000-45bc-8d5c-36811411ca3f_800w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
<span className="inline-block font-oswald border-[#3F556B] border-b-2 pb-1">ИНТЕРНЕТ МАГАЗИН С КАТАЛОГОМ ТОВАРОВ - ДО 200 ТОВАРОВ</span>
</h3>
<span className="shrink-0 text-xl font-semibold text-[#2d322f] font-display">от $990</span>
</div>
<div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:settings-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">ПОЛУЧАЕТЕ ОНЛАЙН  ВИТРИНУ СВОЕГО БИЗНЕСА</span>
</div>
<div className="flex flex-col items-center justify-center border-x border-[#2d322f]/10">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">САЙТ РАБОТАЕТ БЫСТРО - БЕЗ ЗАДЕРЖЕК</span>
</div>
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:scale-linear" width="16"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/60 tracking-widest font-oswald">БЕСПЛАТНАЯ ПОДДЕРЖКА - 90 ДНЕЙ</span>
</div>
</div>
<button className="uppercase hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-all flex gap-2 cursor-pointer text-xs font-semibold text-[#2d322f] tracking-widest font-oswald bg-transparent w-full border-[#2d322f] border pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.'" role="button">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ </button>
</div>
</div>
</div>
</section><footer className="md:px-12 lg:px-24 overflow-hidden bg-black w-full pt-20 pr-6 pb-10 pl-6 relative">

<div className="absolute inset-0 crt-scanlines pointer-events-none opacity-20"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-4 mb-6">
<div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
<span className="uppercase text-sm text-white tracking-[0.3em] font-oswald">разработка сайтов// РЕКЛАМА В GOOGLE</span>
</div>
<p className="leading-relaxed text-xs font-light text-neutral-500 max-w-xs mb-8">Я сам предприниматель-практик, поэтому создаю для вашего бизнеса сайты, которые работают как безотказные менеджеры по продажам — без срыва сроков, скрытых смет и сложных IT-терминов</p>
<div className="flex gap-3 bg-white/5 w-fit border-white/10 border pt-2 pr-4 pb-2 pl-4 gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 rounded-none bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
<span className="uppercase text-xs text-neutral-400 tracking-widest font-oswald">SYDYKOV MARKETING AGENCY - разработка сайтов и ведение рекламы в google</span>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-7">
<h4 className="uppercase text-sm text-white tracking-[0.2em] font-orbitron mb-6">бизнес цитаты sydykov marketing agensy</h4>
<ul className="space-y-4">
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-500 tracking-wide" href="/#">В бизнесе есть X и Y.  Без сильного стержня и твердого продукта , без X- не сделаешь сильным Y ( сайт, отдел продаж, CRM) - SM agensy , поможем выстроить сильный X и Y - для вашего бизнеса!</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-300 tracking-wide" href="#">Запуская рекламу в Google и Instagram - не забудем подключить тег google. Тег от гугла - это намордник для рекламы! Без нее - как будто лить в дырявое ведро воду! Запустим прибильную рекламу в первый месяц ведение вашего рекламного кабинета</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-500 tracking-wide" href="#">Нанимайте профессионалов в свой бизнес - ведь так вы будете спокойны - что ваши деньги не тратятся в пустую! Лучше нанять одного профессионала, чем троих новичков!</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="uppercase text-xs text-white tracking-[0.2em] font-orbitron mb-6">Наш адрес:</h4>
<ul className="space-y-4">
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-500 tracking-wide" href="#">г. Бишкек ,мкр Джал 15, 1/11</a>
</li>
<li className="">
</li>
<li className=""></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="uppercase text-xs text-white tracking-[0.2em] font-orbitron mb-6">Контакты SM Agensy</h4>
<ul className="space-y-4">
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-500 tracking-wide" href="https://wa.me/996501589796?text=Здравствуйте,%20Нурсултан!%20Мне%20нужен%20сайт%20для%20бизнеса,%20хочу%20обсудить%20детали.">+996( 501 ) 589 - 796 </a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-500 tracking-wide" href="#">Telegram :@marketolog_kg</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors text-xs text-neutral-500 tracking-wide" href="#">Cookie политика</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="uppercase text-xs text-neutral-600 tracking-[0.2em] font-orbitron">© 2026 SYDYKOV MARKETING AGENCY. Все права защищены</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300" href="#">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300" href="#">
<iconify-icon icon="solar:cpu-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/5 flex items-center justify-center text-neutral-500 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300" href="#">
<iconify-icon icon="solar:link-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
