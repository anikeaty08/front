import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
          const blinds = document.querySelectorAll('.js-hero-blind');
          const immersiveBg = document.querySelector('.js-immersive-bg');

          let lastKnownScrollPosition = 0;
          let ticking = false;

          function doParallax(scrollPos) {
              if (scrollPos < 1200) {
                  blinds.forEach((blind, index) => {
                      const distanceFromCenter = Math.abs(2 - index);
                      const baseSpeed = 0.028;
                      const stagger = distanceFromCenter * 0.02;

                      const yMoveRaw = scrollPos * (baseSpeed + stagger);
                      const yMoveClamped = Math.max(-180, Math.min(yMoveRaw, 180));

                      blind.style.transform = `translate3d(0, ${yMoveClamped}px, 0)`;;
                  });
              }

              if (immersiveBg) {
                  const rect = immersiveBg.parentElement.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

                      const yMoveRaw = (scrollPercent - 0.5) * -120;
                      const yMoveClamped = Math.max(-100, Math.min(yMoveRaw, 100));

                      const scale = 1.05 + (scrollPercent * 0.05);
                      const finalScale = Math.min(scale, 1.12);

                      immersiveBg.style.transform = `translateY(${yMoveClamped}px) scale(${finalScale})`;
                  }
              }
          }

          window.addEventListener('scroll', () => {
              lastKnownScrollPosition = window.scrollY;
              if (!ticking) {
                  window.requestAnimationFrame(() => {
                      doParallax(lastKnownScrollPosition);
                      ticking = false;
                  });
                  ticking = true;
              }
          }, { passive: true });

          doParallax(window.scrollY);
      });
  


    (function () { const style = document.createElement("style"); style.textContent = ".animate-on-scroll { animation-play-state: paused !important; } .animate-on-scroll.animate { animation-play-state: running !important; }"; document.head.appendChild(style); const once = true; if (!window.__inViewIO) { window.__inViewIO = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("animate"); if (once) window.__inViewIO.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }); } window.initInViewAnimations = function (selector = ".animate-on-scroll") { document.querySelectorAll(selector).forEach((el) => { window.__inViewIO.observe(el); }); }; document.addEventListener("DOMContentLoaded", () => initInViewAnimations()); })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}>
</div>

<header className="sticky bg-[#ebedea]/90 border-[#2d322f]/10 border-b top-0 backdrop-blur-md">
<div className="relative z-[100] lg:px-12 flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<style>
        header:has([data-element-id="aura-emm9ogksm4x0fwm56"]) {
          z-index: 999 !important;
        }
      </style>

<div className="flex-1 flex items-center justify-start">
<a className="flex items-center" href="#hero">
<img alt="Authority Lab" className="transition-opacity duration-300 hover:opacity-80 sm:h-10 lg:h-15 bg-center w-auto h-auto object-cover relative" src="https://res.cloudinary.com/dlmpwmgej/image/upload/v1772579313/authority-lab-logo-black-cut_cerwwu.png?w=800&amp;q=80"/>
</a>
</div>

<div className="flex-1 flex items-center justify-end">
<a className="uppercase hover:bg-[#3F556B] transition-colors duration-300 flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-white tracking-wide sm:tracking-widest bg-[#2d322f] px-4 sm:px-8 py-2 sm:py-3" href="#esquemas">
<span className="hidden sm:inline">Agenda una llamada</span>
<span className="sm:hidden">Agendar llamada</span>
<iconify-icon className="" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="">

<section className="lg:py-18 overflow-hidden w-full pt-20 pb-20 relative" id="Hero">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="" className="w-full h-full object-cover grayscale opacity-100 scale-[1.06]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4024eb96-6b8f-4f13-99f1-f1889425c4e5_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#ebedea]/55"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#ebedea]/70 via-transparent to-[#ebedea]/50"></div>
</div>
<div className="lg:px-12 max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col gap-12 lg:flex-row lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="w-full lg:w-[60%] flex flex-col items-end order-2 lg:order-1 text-right relative py-16">
<h1 className="relative flex flex-col items-end w-full">
<span className="uppercase leading-[0.99] text-[5.25rem] md:text-[7.25rem] lg:text-[8rem] [animation:animationIn_1.2s_ease-out_0.2s_both] font-semibold text-[#2d322f] tracking-tighter font-display">escalamos</span>
<span className="uppercase leading-[0.85] text-[5.75rem] md:text-[7.75rem] lg:text-[8rem] [animation:animationIn_1.2s_ease-out_0.4s_both] font-semibold text-[#2d322f] tracking-tighter font-display">redes sociales</span>
<span className="pointer-events-none absolute -right-1 top-1/2 -translate-y-[120%] bg-[#3F556B] text-white border border-[#2d322f]/45 px-3 py-1.5 text-[18px] md:text-[22px] lg:text-[16px] font-semibold uppercase tracking-[0.2em]">
  TUS
</span>
</h1>
<p className="md:text-3xl lg:text-3xl leading-snug text-2xl italic text-[#2d322f]/85 font-accent mt-12 mb-8">
          — mientras tú
          <br/>
  disfrutas de la vida.
        </p>
<p className="text-lg md:text-xl lg:text-xl font-medium leading-snug text-[#2d322f]/90 mt-6 max-w-[36ch]">
          Tu versión digital con IA.
          <br/>
  Cientos de videos cada mes.
        </p>
<a className="uppercase hover:bg-[#3F556B] transition-colors duration-300 inline-block [animation:animationIn_0.8s_ease-out_1.2s_both] text-xs font-semibold text-white tracking-widest bg-[#2d322f] mt-12 mr-2 pt-4 pr-10 pb-4 pl-10" href="#deploy">
          Agenda una llamada
        </a>
</div>

<div className="flex gap-1 group h-[500px] items-center lg:gap-1.5 lg:h-[750px] lg:order-2 lg:translate-x-[3%] lg:w-[115%] order-1 overflow-visible relative w-full">
<div className="w-[18%] h-[80%] -translate-y-4 relative overflow-hidden bg-[#1e2420] shadow-lg z-10 rounded-[1px]">
<div className="-top-[30%] js-hero-blind will-change-transform h-[160%] bg-[url(https://res.cloudinary.com/dlmpwmgej/image/upload/v1772592272/copy_of_otra_2_aaxyq6_96428c.jpg)] bg-no-repeat absolute right-0 left-0 scale-[1.15]" style={{backgroundSize: '500% 100%', backgroundPosition: '0% 50%'}}>
</div>
</div>
<div className="w-[22%] h-[95%] translate-y-1 relative overflow-hidden bg-[#1e2420] shadow-xl z-20 rounded-[1px]">
<div className="-top-[30%] js-hero-blind will-change-transform h-[160%] bg-[url(https://res.cloudinary.com/dlmpwmgej/image/upload/v1772592272/copy_of_otra_2_aaxyq6_96428c.jpg)] bg-no-repeat absolute right-0 left-0 scale-[1.15]" style={{backgroundSize: '500% 100%', backgroundPosition: '25% 50%'}}>
</div>
</div>
<div className="w-[28%] h-[110%] -translate-y-2 relative overflow-hidden bg-[#1e2420] shadow-2xl z-30 rounded-[1px]">
<div className="-top-[30%] js-hero-blind will-change-transform h-[160%] bg-[url(https://res.cloudinary.com/dlmpwmgej/image/upload/v1772592272/copy_of_otra_2_aaxyq6_96428c.jpg)] bg-no-repeat absolute right-0 left-0 scale-[1.15]" style={{backgroundSize: '500% 100%', backgroundPosition: '50% 50%'}}>
</div>
</div>
<div className="w-[22%] h-[95%] translate-y-1 relative overflow-hidden bg-[#1e2420] shadow-xl z-20 rounded-[1px]">
<div className="-top-[30%] js-hero-blind will-change-transform h-[160%] bg-[url(https://res.cloudinary.com/dlmpwmgej/image/upload/v1772592272/copy_of_otra_2_aaxyq6_96428c.jpg)] bg-no-repeat absolute right-0 left-0 scale-[1.15]" style={{backgroundSize: '500% 100%', backgroundPosition: '75% 50%'}}>
</div>
</div>
<div className="w-[18%] h-[80%] -translate-y-4 relative overflow-hidden bg-[#1e2420] shadow-lg z-10 rounded-[1px]">
<div className="-top-[30%] js-hero-blind will-change-transform h-[160%] bg-[url(https://res.cloudinary.com/dlmpwmgej/image/upload/v1772592272/copy_of_otra_2_aaxyq6_96428c.jpg)] bg-no-repeat absolute right-0 left-0 scale-[1.15]" style={{backgroundSize: '500% 100%', backgroundPosition: '100% 50%'}}>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#1e2420] w-full relative">
<div className="absolute inset-0 pointer-events-none opacity-[0.06]" style="background-image:
              linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px);
              background-size: 64px 64px;"></div>
<div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
<div className="lg:py-32 text-center max-w-[1100px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="flex items-center justify-center gap-3 mb-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<span className="h-px w-10 bg-[#3F556B]/70"></span>
<span className="text-[11px] uppercase font-semibold text-white/55 tracking-[0.28em]">
  VIVE TU VIDA
  <br/>
  NOSOTROS NOS ENCARGAMOS DEL RESTO
</span>
<span className="h-px w-10 bg-[#3F556B]/70"></span>
</div>
<h2 className="md:text-6xl lg:text-7xl uppercase leading-[0.9] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-5xl font-semibold text-white tracking-tighter font-display">
          Para quienes quieren
          <br/>
  construir su
          <span className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] text-[#3F556B]">
    marca
  </span>
<br/>
  sin vivir para las redes sociales
        </h2>
<p className="md:text-xl leading-relaxed animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-white/60 font-sans max-w-[40ch] mt-8 mr-auto ml-auto">
<span className="font-semibold text-white">Personas</span> que quieren construir su marca personal.<br/>
<span className="font-semibold text-white">Políticos</span> que buscan expandir su alcance.<br/>
<span className="font-semibold text-white">Empresas</span> que necesitan posicionarse para vender más.
        </p>
<div className="mt-10 flex justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<span className="h-px w-20 bg-[#3F556B]/60"></span>
</div>
</div>
</section>

<section className="md:pt-32 md:pb-32 z-10 bg-[#ebedea] w-full pt-32 pb-32 relative" id="ejemplos">
<div className="lg:px-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] max-w-[1400px] mx-auto px-6">

<div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
<div className="flex items-center gap-4 mb-6">
<span className="h-px w-10 md:w-16 bg-[#3F556B]/40"></span>
<span className="uppercase text-xs font-semibold text-[#2d322f]/60 tracking-widest">video Ejemplos</span>
<span className="h-px w-10 md:w-16 bg-[#3F556B]/40"></span>
</div>
<h2 className="md:text-7xl uppercase leading-[0.9] text-5xl font-semibold text-[#2d322f] tracking-tighter font-display mb-6">
            Hoy, el lenguaje <br/>
        de las redes sociales <br/> es el
            <span className="text-[#3F556B]">video.</span>
</h2>
<p className="md:text-xl leading-relaxed text-lg text-[#2d322f]/70 font-sans max-w-2xl mr-auto ml-auto">
            Transformamos tu conocimiento en AI-videos de alta calidad —
            desde la generación de ideas y guiones
            hasta la creación del video, edición y distribución.
          </p>
<div className="h-px w-16 bg-[#2d322f]/10 mt-12"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-center">

<div className="aspect-[9/16] relative w-full rounded-xl overflow-hidden bg-[#1e2420] group shadow-xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" loop="" muted="" playsinline="">
<source src="/video1.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-white ml-1 fill-white" height="22" icon="lucide:play" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="hidden md:block aspect-[9/16] relative w-full rounded-xl overflow-hidden bg-[#1e2420] group shadow-xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" loop="" muted="" playsinline="">
<source src="/video2.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-white ml-1 fill-white" height="22" icon="lucide:play" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="hidden md:block aspect-[9/16] relative w-full rounded-xl overflow-hidden bg-[#1e2420] group shadow-xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<video autoplay="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" loop="" muted="" playsinline="">
<source src="/video3.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-white ml-1 fill-white" height="22" icon="lucide:play" width="22"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y z-20 bg-[#1e2420] border-white/5 relative" id="dolores">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 text-center">
<div className="flex flex-col animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] pt-20 pr-10 pb-20 pl-10 items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-6" height="32" icon="solar:danger-triangle-linear" width="32"></iconify-icon>
<h4 className="uppercase text-2xl font-semibold text-white tracking-tighter font-display mb-4">
              las redes sociales
            </h4>
<p className="leading-relaxed text-sm font-medium text-white/50">
              Los algoritmos de hoy no premian la intención. <br/>
          Premian el volumen de videos. <br/>
          Sin repetición, el posicionamiento no ocurre.
            </p>
</div>
<div className="flex flex-col animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] pt-20 pr-10 pb-20 pl-10 items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-6" height="32" icon="solar:graph-down-linear" width="32"></iconify-icon>
<h4 className="uppercase text-2xl font-semibold text-white tracking-tighter font-display mb-4">
              El sacrificio
            </h4>
<p className="leading-relaxed text-sm font-medium text-white/50">
              Sostener el ritmo que exigen las redes sociales te consume. <br/>
          Mantener volumen constante se convierte en un trabajo de tiempo completo.
            </p>
</div>
<div className="flex flex-col animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] pt-20 pr-10 pb-20 pl-10 items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-6" height="32" icon="solar:eye-closed-linear" width="32"></iconify-icon>
<h4 className="uppercase text-2xl font-semibold text-white tracking-tighter font-display mb-4">
              xxxxxx
            </h4>
<p className="text-sm text-white/50 leading-relaxed font-medium">
              Moving fast without tactical visibility leads to high-altitude exposure and catastrophic failure.
            </p>
</div>
</div>
</div>
</section>

<section className="aspect-video md:h-[75vh] flex overflow-hidden group cursor-pointer bg-[#1e2420] w-full max-h-[800px] border-white/10 border-b relative items-center justify-center">
<img alt="Video Cover" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1507534192483-69914c0692d7?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#1e2420]/50 group-hover:bg-[#1e2420]/40 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col items-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 mb-6">
<iconify-icon className="text-white ml-2" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors">
            System Briefing [04:12]
          </span>
</div>
</section>

<section className="flex text-center bg-[#ebedea] pt-32 pr-6 pb-32 pl-6 justify-center">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] max-w-5xl mr-auto ml-auto">
<h2 className="md:text-8xl lg:text-9xl uppercase leading-[0.85] text-6xl font-semibold text-[#2d322f] tracking-tighter font-display">
          cientos de videos
          <br/>
<span className="block text-[#3F556B] mt-2">cada mes.</span>
</h2>
<p className="md:text-3xl lg:text-3xl leading-snug text-2xl italic text-[#2d322f]/85 font-accent mt-12">
          — sin depender de ti.
        </p>
</div>
</section>

<section className="w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[70vh]">

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<img alt="Ideación" className="w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dlmpwmgej/image/upload/v1772583767/ideacio%CC%81n_vertical_sgsuvt.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs text-white/70 uppercase tracking-[0.2em] mb-2 block drop-shadow-md">
          Pilar 01
        </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold text-white uppercase tracking-tighter drop-shadow-lg">
              IDEACIÓN
            </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-start p-8 pt-40 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px bg-white/40 mb-6 transition-all duration-700 delay-300 ease-out">
</div>
<p className="text-white text-sm max-w-[28ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium">
              Creación de ideas en segundos con generación de guiones incluidos, listos para revisar y aprobar.
            </p>
</div>
</div>

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<img alt="Producción" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dlmpwmgej/image/upload/v1772583783/Produccio%CC%81n_2_vnavnz.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs text-white/70 uppercase tracking-[0.2em] mb-2 block drop-shadow-md">
          Pilar 02
        </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold text-white uppercase tracking-tighter drop-shadow-lg">
              PRODUCCIÓN
            </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-start p-8 pt-40 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px bg-white/40 mb-6 transition-all duration-700 delay-300 ease-out">
</div>
<p className="text-white text-sm max-w-[28ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium">
              Producción automatizada de videos de alta calidad listos para publicar.
            </p>
</div>
</div>

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<img alt="Distribución" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dlmpwmgej/image/upload/v1772583755/Distribucio%CC%81n_wqxhaz.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs text-white/70 uppercase tracking-[0.2em] mb-2 block drop-shadow-md">
          Pilar 03
        </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold text-white uppercase tracking-tighter drop-shadow-lg">
              DISTRIBUCIÓN
            </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-start p-8 pt-40 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px bg-white/40 mb-6 transition-all duration-700 delay-300 ease-out">
</div>
<p className="text-white text-sm max-w-[28ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium">
              Publicación en redes sociales con frecuencia sostenida para maximizar alcance y posicionamiento.
            </p>
</div>
</div>

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<img alt="Optimización" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://res.cloudinary.com/dlmpwmgej/image/upload/v1772583776/optimizacio%CC%81n_2_du7zum.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs text-white/70 uppercase tracking-[0.2em] mb-2 block drop-shadow-md">
          Pilar 04
        </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold text-white uppercase tracking-tighter drop-shadow-lg">
              OPTIMIZACIÓN
            </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-start p-8 pt-40 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px bg-white/40 mb-6 transition-all duration-700 delay-300 ease-out">
</div>
<p className="text-white text-sm max-w-[28ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium">
              Análisis continuo de desempeño para ajustar mensajes, formatos y frecuencia y acelerar resultados.
            </p>
</div>
</div>
</div>
</section>

<section className="lg:px-12 bg-[#ebedea] max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
<div className="max-w-2xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="md:text-6xl uppercase text-5xl font-semibold text-[#2d322f] tracking-tighter font-display mb-4">
            nuestra
            <span className="text-[#3F556B]">arquitectura</span>
</h2>
<p className="text-base text-[#2d322f]/70">
            Integramos nuestra metodología para la construcción de tu marca y configuramos la plataforma específicamente
            a
            tu
            perfil<br/>
<span className="font-semibold text-[#2d322f]">
      — para que cada pieza de contenido refleje tu criterio, tu voz y tu dirección.
</span>
</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="relative aspect-[4/3] bg-[#2d322f] overflow-hidden flex items-center justify-center p-8">
<span className="text-[10px] uppercase z-10 font-semibold text-white tracking-[0.2em] bg-[#3F556B] pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 shadow-sm">
                Marca
              </span>
<img alt="Discovery" className="transition-transform duration-500 hover:scale-105 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/302bcbcf-41a5-410b-8225-950ce8c63925_3840w.webp?w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-grow bg-[#ebedea]">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] mb-4">
<span className="inline-block border-[#3F556B] border-b-2 pb-1">
                  Arquitectura de marca
                </span>
</h3>
<p className="leading-relaxed flex-grow text-sm text-[#2d322f]/70 mb-8">
              Con base en una metodología probada, establecemos una dirección clara para tu marca que guiará todo lo que
              se
              va
              a
              comunicar.<br/><br/>

  Qué dices.<br/>
  Cómo lo dices.<br/><br/>
<span className="font-semibold text-[#2d322f]">
  La claridad acelera los resultados.
</span>
</p>
<div className="grid grid-cols-2 gap-2 border-t border-[#2d322f]/10 pt-4 mt-auto">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3F556B]" height="18" icon="solar:radar-linear" width="18"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/80 tracking-widest font-display">Arquitectura de marca</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3F556B]" height="18" icon="solar:map-arrow-up-linear" width="18"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/80 tracking-widest font-display">Posicionamiento</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<div className="relative aspect-[4/3] bg-[#2d322f] overflow-hidden flex items-center justify-center p-8">
<span className="text-[10px] uppercase z-10 font-semibold text-white tracking-[0.2em] bg-[#3F556B] pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 shadow-sm">
                avatar
              </span>
<img alt="Architecture" className="transition-transform duration-500 hover:scale-105 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/706d8c8b-1cf5-4e45-b025-b86541e10c75_3840w.webp?w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-grow bg-[#ebedea]">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] mb-4">
<span className="inline-block border-[#3F556B] border-b-2 pb-1">
                  Creación de avatar hiper-realista
                </span>
</h3>
<p className="leading-relaxed flex-grow text-sm text-[#2d322f]/70 mb-8">
              Creamos tu versión digital hyper realista con IA —<br/>
  entrenada con tu imagen, voz, tono y estilo de comunicación.<br/><br/>

  Tu imagen.<br/>
  Tu presencia.<br/>
  Tu mensaje.<br/><br/>
<span className="font-semibold text-[#2d322f]">
  Tu presencia digital se vuelve escalable —<br/>
    para que tú puedas estar donde quieras.
  </span>
</p>
<div className="grid grid-cols-2 gap-2 border-[#2d322f]/10 border-t mt-auto pt-4 gap-x-2 gap-y-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3F556B]" height="18" icon="solar:settings-linear" width="18"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/80 tracking-widest font-display">Creación</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3F556B]" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/80">calibración</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="relative aspect-[4/3] bg-[#2d322f] overflow-hidden flex items-center justify-center p-8">
<span className="text-[10px] uppercase z-10 font-semibold text-white tracking-[0.2em] bg-[#3F556B] pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 shadow-sm">
                El motor
              </span>
<img alt="Scale" className="w-full h-full object-cover opacity-60 transition-transform duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba725926-bb3d-4966-9d7d-577b7470b473_3840w.webp?w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-grow bg-[#ebedea]">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] mb-4">
<span className="inline-block border-[#3F556B] border-b-2 pb-1">
                  Configuración de tu plataforma
                </span>
</h3>
<p className="leading-relaxed flex-grow text-sm text-[#2d322f]/70 mb-8">
              Una plataforma diseñada para tu perfil y objetivos, creada para producir cientos de videos de alta calidad
              al
              mes con consistencia — sin depender de tu tiempo.<br/><br/>

  Un sistema.<br/>
  Un flujo de trabajo.<br/>
  Un solo motor de crecimiento.<br/><br/>
<span className="font-semibold text-[#2d322f]">

  Diseñada para producir videos de alta calidad a escala.

</span>
</p>
<div className="grid grid-cols-2 gap-2 border-t border-[#2d322f]/10 pt-4 mt-auto">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3F556B]" height="18" icon="solar:rocket-linear" width="18"></iconify-icon>
<span className="uppercase text-xs text-[#2d322f]/80 tracking-widest font-display">Producción</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3F556B]" height="18" icon="solar:tuning-square-2-linear" width="18"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/80">Optimización</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-t border-[#2d322f]/10">
<div className="mb-20 text-center">
<div className="flex items-center justify-center gap-3 mb-8">
<span className="h-px w-10 bg-[#3F556B]/70"></span>
<span className="text-[11px] uppercase font-semibold text-[#2d322f]/60 tracking-[0.28em]">
              tres formas en las que colaboramos
            </span>
<span className="h-px w-10 bg-[#3F556B]/70"></span>
</div>
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter uppercase text-[#2d322f] leading-[0.95]">
          Esquemas de
          <span className="text-[#3F556B]">trabajo</span>
</h2>
<p className="mt-8 font-sans text-lg md:text-xl text-[#2d322f]/60 max-w-[40ch] mx-auto leading-relaxed">
          Elige el nivel de involucramiento que se adapte a tus objetivos.
        </p>
<div className="mt-10 flex justify-center">
<span className="h-px w-20 bg-[#3F556B]/40"></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12 gap-x-8 gap-y-8">

<div className="group flex flex-col h-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="border border-[#2d322f]/20 p-10 flex flex-col h-full bg-white/50 backdrop-blur-sm hover:border-[#3F556B] hover:bg-white transition-all duration-300">
<iconify-icon className="text-[#3F556B] mb-8" height="40" icon="solar:clipboard-text-linear" width="40"></iconify-icon>
<h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-2">
              Acceso a Plataforma
            </h3>
<p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-4">
              Para quienes quieren escalar <br/>
  — haciendo menos.
            </p>
<p className="leading-relaxed flex-grow text-sm text-[#2d322f]/70 mb-8">
              Comenzamos construyendo tu Authority Blueprint para definir tu posicionamiento, narrativa y arquitectura
              de
              contenido.<br/><br/>

  Realizamos tu Avatar Foundation Setup y configuramos tu espacio dentro de la plataforma.<br/><br/>

  Con tu plataforma lista, puedes generar ideas, guiones y videos en minutos.<br/><br/>
<span className="font-medium text-[#2d322f]">Tú revisas.</span><br/>
<span className="font-medium text-[#2d322f]">Tú apruebas.</span><br/>
<span className="font-medium text-[#2d322f]">Tú publicas.</span><br/><br/>
<span className="font-semibold text-[#2d322f]">Estructurado.</span><br/>
<span className="font-semibold text-[#2d322f]">Rápido.</span><br/>
<span className="font-semibold text-[#2d322f]">Bajo tu control.</span>
</p>
<a className="text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:text-[#3F556B] transition-colors border-b border-[#2d322f] hover:border-[#3F556B] self-start pb-1" href="#deploy">
              Agenda una llamada
            </a>
</div>
</div>

<div className="group flex flex-col h-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="border border-[#2d322f]/20 p-10 flex flex-col h-full bg-white/50 backdrop-blur-sm hover:border-[#3F556B] hover:bg-white transition-all duration-300 transform md:-translate-y-4 shadow-[0_8px_32px_rgba(63,85,107,0.05)]">
<span className="text-[10px] uppercase self-start font-semibold text-white tracking-[0.2em] bg-[#3F556B] mb-6 pt-1 pr-3 pb-1 pl-3">Opción más contratada</span>
<iconify-icon className="text-[#3F556B] mb-8" height="40" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
<h3 className="uppercase text-3xl text-[#2d322f] tracking-tighter font-display mb-2">Operación Tercerizada</h3>
<p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-4">
              Para quienes quieren escalar <br/>
  — sin involucrarse en la ejecución.
            </p>
<p className="leading-relaxed flex-grow text-sm text-[#2d322f]/70 mb-8">
              Nosotros nos encargamos de la operación completa: estrategia, producción, distribución y optimización
              continua — todo alineado
              a
              tu posicionamiento.<br/><br/>

  Tú marcas la dirección.<br/>
  Nosotros ejecutamos.<br/><br/>
<span className="font-semibold text-[#2d322f]">Tu presencia crece.</span><br/>
<span className="font-semibold text-[#2d322f]">Tu tiempo sigue siendo tuyo.</span>
</p>
<a className="text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:text-[#3F556B] transition-colors border-b border-[#2d322f] hover:border-[#3F556B] self-start pb-1" href="#deploy">
              Agenda una llamada
            </a>
</div>
</div>

<div className="group flex flex-col h-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
<div className="flex flex-col hover:border-[#3F556B] hover:bg-white transition-all duration-300 bg-white/50 h-full border-[#2d322f]/20 border pt-10 pr-10 pb-10 pl-10 backdrop-blur-sm">
<iconify-icon className="text-[#3F556B] mb-8" height="40" icon="solar:handshake-linear" width="40"></iconify-icon>
<h3 className="uppercase text-3xl text-[#2d322f] tracking-tighter font-display mb-2">
              Alianza comercial
            </h3>
<p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-4">Para quienes quieren
              convertir su marca en negocio.
            </p>
<p className="leading-relaxed flex-grow text-sm text-[#2d322f]/70 mb-8">Operamos las oportunidades de negocio
              alrededor de tu marca: identificamos, negociamos y estructuramos
              oportunidades.<br/><br/> Alianzas con marcas.<br/> Estructuración de acuerdos.<br/> PR y posicionamiento en eventos.<br/> Iniciativas de desarrollo de negocio.<br/><br/>
<span className="font-medium text-[#2d322f]">Tu presencia se multiplica.</span><br/>
<span className="font-semibold text-[#2d322f]">Tus oportunidades crecen.</span>
</p>
<a className="text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:text-[#3F556B] transition-colors border-b border-[#2d322f] hover:border-[#3F556B] self-start pb-1" href="#deploy">
              Agenda una llamada
            </a>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1e2420]">
<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#3F556B]/60 to-transparent z-10 pointer-events-none">
</div>
<img alt="High altitude mountain" className="absolute inset-x-0 -top-[30%] w-full h-[160%] object-cover object-[center_30%] js-immersive-bg transition-transform duration-300 ease-out z-0 scale-[1.15] will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4024eb96-6b8f-4f13-99f1-f1889425c4e5_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#1e2420]/50 z-0 mix-blend-multiply pointer-events-none"></div>
<h2 className="relative z-20 flex flex-col items-center text-center px-6 mt-12">
<span className="md:text-7xl lg:text-[5rem] uppercase leading-[0.8] text-5xl font-semibold text-white tracking-tighter font-display drop-shadow-2xl">
            El posicionamiento <br/>
  y la viralidad no son casualidad.
</span>
<span className="font-accent italic text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mt-6 drop-shadow-xl text-white/90">
            Se construyen.
          </span>
</h2>
</section>

<section className="bg-[#f4f6f3] text-[#2d322f] py-32 px-6" id="deploy">
<div className="max-w-3xl mx-auto text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="w-16 h-px bg-[#3F556B]/40 mx-auto mb-10"></div>
<p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2d322f]/60 mb-6">
          Field Deployment Status
        </p>
<h2 className="md:text-6xl leading-tight uppercase text-5xl font-semibold tracking-tight font-display mb-8">
          Construimos
          <span className="text-[#3F556B]">tu marca</span>
<br className="hidden md:block"/>
  en redes sociales
        </h2>
<p className="leading-relaxed text-lg text-[#2d322f]/70 max-w-[55ch] mr-auto mb-12 ml-auto">
          Agenda una llamada y exploremos cómo escalar tu presencia.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="bg-[#2d322f] text-white px-10 py-5 text-sm font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300 shadow-xl" href="#">
            Agendar llamada
          </a>
<a className="uppercase hover:text-[#3F556B] transition-colors flex items-center gap-2 text-xs font-semibold text-[#2d322f]/70 tracking-widest" href="#faq">
            Ir a preguntas frecuentes <iconify-icon className="" height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#1e2420] text-white py-32 px-6 border-t border-white/5" id="faq">
<div className="max-w-[1000px] mx-auto">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<div className="">
<p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3F556B] mb-4">
              Todo lo que tienes que saber
            </p>
<h2 className="text-4xl md:text-5xl font-display font-semibold uppercase tracking-tight">
              preguntas frecuentes
            </h2>
</div>
<p className="text-sm text-white/50 max-w-sm">
            Agenda una reunión para conocer como podemos crecer tu marca.
          </p>
</div>
<div className="space-y-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">

<details className="group bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-300">
<summary className="flex cursor-pointer uppercase text-xl tracking-tight font-display pt-6 pr-6 pb-6 pl-6 items-center justify-between">
              ¿Cuánto tiempo toma ver resultados?
              <span className="group-open:rotate-45 transition-transform duration-300 text-[#3F556B]">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" style={{color: 'rgb(63, 85, 107)'}} width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
              La tracción inicial se empieza a ver durante el primer mes.
              El posicionamiento estratégico y el crecimiento compuesto se consolidan en los meses siguientes.
            </div>
</details>

<details className="group bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-300">
<summary className="flex cursor-pointer uppercase text-xl tracking-tight font-display pt-6 pr-6 pb-6 pl-6 items-center justify-between">
              ¿Tengo que estar frente a cámara todos los días?
              <span className="text-[#3F556B] group-open:rotate-45 transition-transform duration-300">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
              No. Una vez que tu Avatar está construido, la producción deja de depender de tu presencia constante.
            </div>
</details>

<details className="group bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-300">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display text-xl uppercase tracking-tight">
              ¿Tengo que generar ideas de contenido?
              <span className="text-[#3F556B] group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
              No. La generación de ideas forma parte del sistema.
              Diseñamos tu arquitectura de contenido, configuramos tu plataforma y generamos ideas estratégicas de forma
              constante, alineadas con tu posicionamiento.
            </div>
</details>

<details className="group hover:border-[#3F556B]/50 transition-colors duration-300 bg-white/5 border-white/10 border">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display text-xl uppercase tracking-tight">
              ¿Los videos se ven reales?
              <span className="text-[#3F556B] group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
              Sí. Los videos mantienen tu identidad, tono y presencia de forma natural.
            </div>
</details>
<details className="group bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-300">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display text-xl uppercase tracking-tight">
              ¿Es contenido genérico hecho con IA?
              <span className="text-[#3F556B] group-open:rotate-45 transition-transform duration-300">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
              No. La plataforma se configura para cada cliente y el contenido se construye con base en su mercado,
              experiencia,
              personalidad y objetivos.
            </div>
</details>
<details className="group hover:border-[#3F556B]/50 transition-colors duration-300 bg-white/5 border-white/10 border">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display text-xl uppercase tracking-tight">
              ¿Qué nivel de involucramiento necesito tener?
              <span className="text-[#3F556B] group-open:rotate-45 transition-transform duration-300">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">

              Dependiendo de la forma en la que elijas trabajar con nosotros:<br/><br/>
<span className="text-white font-medium">Acceso a Plataforma</span><br/>
    – Seleccionas y revisas ideas<br/>
    – Apruebas guiones y mandas a producir videos en segundos<br/>
    – Te encargas de la publicación en redes sociales<br/><br/>
<span className="text-white font-medium">Operación Delegada y Alianza de Escala</span><br/>
    Nosotros hacemos todo por ti.
              <span className="text-white font-semibold">Tú solo revisas guiones.</span>
</div>
</details>
<details className="group bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-300">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display text-xl uppercase tracking-tight">
              ¿En qué idiomas trabajamos?
              <span className="text-[#3F556B] group-open:rotate-45 transition-transform duration-300">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
              Operamos en español, inglés y portugués.
              El sistema puede generar contenido y videos en prácticamente cualquier idioma, adaptándose al estilo y
              forma
              de
              hablar de cada persona.
            </div>
</details>
</div>
</div>
</section>
</main>

<footer className="text-white bg-[#1e2420] border-white/10 border-t pt-24 pb-12">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="lg:col-span-2">
<h3 className="uppercase flex items-center gap-3 text-2xl font-semibold text-white tracking-tighter font-display mb-4">
<iconify-icon className="text-[#3F556B]" height="24" icon="solar:global-linear" width="24"></iconify-icon>
            Contacto
          </h3>
<p className="text-sm text-white/60 mb-6 max-w-sm leading-relaxed">
            Síguenos en nuestras redes sociales y contáctanos directamente para empezar a escalar tu presencia digital.
          </p>
<div className="flex gap-5 mb-10">
<a aria-label="Instagram" className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon height="22" icon="lucide:instagram" width="22"></iconify-icon>
</a>
<a aria-label="TikTok" className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="simple-icons:tiktok" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon height="22" icon="lucide:linkedin" width="22"></iconify-icon>
</a>
</div>
<div className="space-y-4">
<a className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group" href="https://wa.me/525559655372" rel="noopener noreferrer" target="_blank">
<iconify-icon className="group-hover:text-[#25D366] transition-colors" height="18" icon="simple-icons:whatsapp" width="18"></iconify-icon>
<span>México: +52 55 5965 5372</span>
</a>
<a className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group" href="tel:+19369007473">
<iconify-icon height="18" icon="lucide:phone" width="18"></iconify-icon>
<span>USA: +1 936 900 7473</span>
</a>
<a className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group" href="mailto:contact@authoritylab.ai">
<iconify-icon height="18" icon="lucide:mail" width="18"></iconify-icon>
<span>contact@authoritylab.ai</span>
</a>
</div>
</div>

<div className="">
<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
            Navegación
          </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#section-inicio">
                Inicio
              </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#section-ejemplos">
                Ejemplos
              </a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
            Legal
          </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
                Términos de Servicio
              </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
                Aviso de Privacidad
              </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<span className="font-display text-3xl font-semibold tracking-tighter text-white uppercase">
          AEX
        </span>
<p className="text-[10px] uppercase text-white/40 tracking-[0.2em]">
            © 2026 an Intersect AI-Labs company.
          </p>
</div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
