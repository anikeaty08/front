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



    (function () {
      const style = document.createElement("style");
      style.textContent = `
        .animate-on-scroll { animation-play-state: paused !important; }
        .animate-on-scroll.animate { animation-play-state: running !important; }
      `;
      document.head.appendChild(style);

      const once = true;

      if (!window.__inViewIO) {
        window.__inViewIO = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              if (once) window.__inViewIO.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
      }

      window.initInViewAnimations = function (selector = ".animate-on-scroll") {
        document.querySelectorAll(selector).forEach((el) => {
          window.__inViewIO.observe(el);
        });
      };

      document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
    })();
  


        (function () {
          const mobileMenuButton = document.getElementById('mobile-menu-button');
          const mobileCloseButton = document.getElementById('mobile-close-button');
          const mobileMenu = document.getElementById('mobile-menu');
          const menuIcon = document.getElementById('menu-icon');
          const closeIcon = document.getElementById('close-icon');
          const menuText = document.getElementById('menu-text');
          let isMenuOpen = false;

          function toggleMenu() {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
              mobileMenu.classList.remove('opacity-0', 'invisible');
              mobileMenu.classList.add('opacity-100', 'visible');
              menuIcon.classList.add('hidden');
              closeIcon.classList.remove('hidden');
              menuText.textContent = 'Fechar';
              document.body.style.overflow = 'hidden';
            } else {
              mobileMenu.classList.remove('opacity-100', 'visible');
              mobileMenu.classList.add('opacity-0', 'invisible');
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
              menuText.textContent = 'Menu';
              document.body.style.overflow = '';
            }
          }

          mobileMenuButton.addEventListener('click', toggleMenu);
          mobileCloseButton.addEventListener('click', toggleMenu);

          const mobileMenuLinks = mobileMenu.querySelectorAll('a');
          mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
              if (isMenuOpen) toggleMenu();
            });
          });

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) toggleMenu();
          });

          mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu && isMenuOpen) toggleMenu();
          });
        })();
      
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
      
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fef68b6-badc-4812-9829-9f745ed3a760_3840w.png\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<style>
    @keyframes fadeSlideIn {
      0% {
        opacity: 0;
        transform: translateY(30px);
        filter: blur(8px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
      }
    }

    @keyframes scrollBlur {
      from {
        filter: blur(0px);
      }

      to {
        filter: blur(100px);
      }
    }
  </style>

<header className="z-50 relative" style={{backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.5), transparent)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-3 pb-3 items-center justify-between">
<div className="flex items-center cursor-default">
<img alt="Júlia Mara" className="h-24 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01a4a6a7-7ac9-45f4-bf5a-f92c5568bd1a_320w.png"/>
</div>
<nav className="hidden lg:flex gap-x-8 gap-y-8 items-center">
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#desafio">Você se identifica?</a>
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#como-funciona">Como funciona</a>
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#conteudo">O que você recebe</a>
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#inscricao">Investimento</a>
<button className="inline-flex gap-2 transition hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 text-base font-medium text-white font-geist bg-pink-500 rounded-full pt-2 pr-5 pb-2 pl-5 items-center" onclick="window.location.href='#inscricao'">
            Quero participar
          </button>
</nav>
<button className="lg:hidden inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobile-menu-button">
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
<iconify-icon className="text-white hidden" icon="solar:close-circle-linear" id="close-icon"></iconify-icon>
<span id="menu-text">Menu</span>
</button>
</div>
<div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300 ease-out" id="mobile-menu">
<div className="flex flex-col h-full pt-6 pb-8 px-6">
<div className="flex justify-end mb-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur items-center justify-center" id="mobile-close-button">
<iconify-icon className="text-white" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<nav className="flex-1">
<div className="space-y-6">
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#desafio">Você se
                identifica?</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#como-funciona">Como funciona</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#conteudo">O que você
                recebe</a>
<a className="block text-2xl font-normal text-white/80 hover:text-white transition font-geist" href="#inscricao">Investimento</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<button className="w-full inline-flex gap-2 transition hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 text-base font-medium text-white font-geist bg-pink-500 rounded-full pt-3 pr-6 pb-3 pl-6 items-center justify-center" onclick="window.location.href='#inscricao'">
                Quero participar
              </button>
</div>
</nav>
</div>
</div>

</div>
</header>
<section className="z-20 flex min-h-[90vh] relative items-end">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="max-w-4xl opacity-0" style={{animation: 'fadeSlideIn 1s ease-out 0.2s forwards'}}>
<p className="text-xs uppercase tracking-widest text-white/70 font-geist mb-4">
          OPERAÇÃO SECA 21
        </p>

<h1 className="sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-5xl font-semibold tracking-tighter font-geist">
          21 dias para <span className="text-pink-400">reduzir o inchaço</span>, organizar sua alimentação e retomar o controle do seu corpo.
        </h1>
<div className="mt-8 space-y-2 text-lg text-white/80 font-geist">
<p>Sem dieta maluca.</p>
<p>Sem terrorismo nutricional.</p>
<p>Sem começar do zero toda semana.</p>
</div>
<p className="sm:text-3xl leading-relaxed text-2xl text-white/90 font-geist mt-8 mb-8">
          Se você sente que vive no ciclo do “segunda eu começo”, a <span className="text-pink-400 font-medium">Operação Seca 21</span> foi criada para você.
        </p>
<div className="border-white/10 border-t mb-6 pt-6">
<div className="flex flex-wrap gap-x-4 gap-y-4 items-center">
<button className="z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
                QUERO PARTICIPAR DA OPERAÇÃO SECA 21
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative" id="desafio">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">

<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
          Você se <span className="text-pink-400">identifica</span> com isso?
        </h2>
<div className="mt-12 space-y-6 text-left">
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">🚀</span>
<div>
<p className="text-xl font-medium font-geist">Começa motivada… e desiste no meio</p>
</div>
</div>
</div>
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">🫧</span>
<div>
<p className="text-xl font-medium font-geist">Sente o corpo inchado e pesado</p>
</div>
</div>
</div>
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">🎚️</span>
<div>
<p className="text-xl font-medium font-geist">Vive no efeito “tudo ou nada”</p>
</div>
</div>
</div>
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">😣</span>
<div>
<p className="text-xl font-medium font-geist">Se sente culpada depois do fim de semana</p>
</div>
</div>
</div>
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">🔁</span>
<div>
<p className="text-xl font-medium font-geist">Já tentou várias dietas e sempre volta ao zero</p>
</div>
</div>
</div>
</div>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-10 text-lg" style={{animation: 'fadeSlideIn 1.0s ease-out 0.7s both'}}>
          O problema não é falta de força de vontade.
          <span className="text-white/80 font-medium">É falta de estratégia.</span>
</p>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-3 text-lg" style={{animation: 'fadeSlideIn 1.0s ease-out 0.8s both'}}>
          Seu corpo não precisa de sofrimento.
          <span className="text-white/80 font-medium">Precisa de organização.</span>
</p>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="max-w-3xl mr-auto ml-auto">

<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist text-center mb-8">
          O que é a <span className="text-pink-400">Operação Seca 21</span>
</h2>
<p className="text-lg text-white/80 font-geist leading-relaxed mb-8">
          A Operação Seca 21 é um programa estruturado de 21 dias criado para:
        </p>
<div className="space-y-6">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Organizar sua alimentação</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Reduzir comportamentos que causam inchaço</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Melhorar sua relação com a comida</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Criar rotina sustentável</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Ensinar como manter o resultado</p>
</div>
</div>
<div className="mt-10 bg-pink-500/10 border-pink-500/20 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<p className="text-lg text-white/80 font-geist leading-relaxed">
            Você não vai fazer restrição absurda.
            <span className="text-white font-medium">Você vai aplicar método.</span>
</p>
</div>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative" id="como-funciona">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto mb-12">
<span className="inline-flex items-center gap-2 text-xs uppercase animate-on-scroll text-white/70 tracking-widest font-geist bg-pink-500/10 border-pink-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<iconify-icon className="text-pink-400" icon="solar:test-tube-linear"></iconify-icon>
          Como funciona
        </span>

<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist mt-4" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
          A Operação Seca 21 é dividida em <span className="text-pink-400">3 fases</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-6 pb-8 pl-6 backdrop-blur">
<div className="inline-flex items-center justify-center bg-pink-500/20 text-pink-400 font-semibold text-2xl w-14 h-14 rounded-full border border-pink-500/30 mb-4">
            01
          </div>
<p className="text-xl font-semibold font-geist mb-1">FASE 1 – ATAQUE AO INCHAÇO</p>
<p className="text-sm text-white/60 font-geist mb-3">Dias 1–7</p>
<div className="space-y-2 text-white/70 font-geist">
<p>Organização da base alimentar</p>
<p>Estrutura inteligente de refeições</p>
<p>Redução de excessos invisíveis</p>
</div>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-6 pb-8 pl-6 backdrop-blur">
<div className="inline-flex items-center justify-center bg-pink-500/20 text-pink-400 font-semibold text-2xl w-14 h-14 rounded-full border border-pink-500/30 mb-4">
            02
          </div>
<p className="text-xl font-semibold font-geist mb-1">FASE 2 – CONTROLE</p>
<p className="text-sm text-white/60 font-geist mb-3">Dias 8–14</p>
<div className="space-y-2 text-white/70 font-geist">
<p>Estratégia para compulsão</p>
<p>Como lidar com eventos e fim de semana</p>
<p>Planejamento simples e eficiente</p>
</div>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-6 pb-8 pl-6 backdrop-blur">
<div className="inline-flex items-center justify-center bg-pink-500/20 text-pink-400 font-semibold text-2xl w-14 h-14 rounded-full border border-pink-500/30 mb-4">
            03
          </div>
<p className="text-xl font-semibold font-geist mb-1">FASE 3 – CONSOLIDAÇÃO</p>
<p className="text-sm text-white/60 font-geist mb-3">Dias 15–21</p>
<div className="space-y-2 text-white/70 font-geist">
<p>Manutenção estratégica</p>
<p>Evitar efeito rebote</p>
<p>Construção de autonomia alimentar</p>
</div>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto mt-12 text-center">
<button className="z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
            QUERO PARTICIPAR DA OPERAÇÃO SECA 21
          </span>
</button>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative" id="conteudo">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto mb-12">

<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist">
          O que você <span className="text-pink-400">recebe</span>
</h2>
<p className="text-lg text-white/70 font-geist mt-4 leading-relaxed">
          Tudo pensado para ser simples, aplicável e possível.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mr-auto ml-auto">
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:book-2-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Guia completo dos 21 dias</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Estrutura alimentar organizada</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:shuffle-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Lista de substituições inteligentes</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:calendar-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Protocolo para fim de semana</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Checklist diário</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Grupo fechado de acompanhamento</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:book-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Ebook de receitas fit</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:dumbbell-large-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Treino Personalizado (opcional)</p>
</div>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8">

<h2 className="text-2xl font-semibold tracking-tight font-geist mb-5">Para quem <span className="text-pink-400">é</span></h2>
<div className="space-y-3 text-white/80 font-geist">
<p>✔ Quer reduzir o inchaço</p>
<p>✔ Quer sair do ciclo de recomeço</p>
<p>✔ Quer algo prático</p>
<p>✔ Está cansada de extremos</p>
</div>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl font-semibold tracking-tight font-geist mb-5">Não é para <span className="text-pink-400">quem</span></h3>
<div className="space-y-3 text-white/80 font-geist">
<p>❌ Procura milagre</p>
<p>❌ Quer resultado sem compromisso</p>
<p>❌ Não está disposta a aplicar o básico</p>
</div>
</div>
<div className="bg-pink-500/10 border-pink-500/20 border rounded-2xl pt-8 pr-8 pb-8 pl-8 md:col-span-2">
<h2 className="text-2xl font-semibold tracking-tight font-geist mb-3">Garantia de <span className="text-pink-400">7 dias</span></h2>
<p className="text-sm text-white/70 font-geist leading-relaxed">
            Você tem 7 dias para testar a Operação Seca 21. Se perceber que não faz sentido para você, pode solicitar
            cancelamento dentro desse prazo. Sem burocracia.
          </p>
</div>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="relative animate-on-scroll order-2 lg:order-1" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="relative overflow-hidden rounded-2xl border border-white/10">
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
<img alt="Júlia Mara - Nutricionista" className="aspect-[3/4] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c424f63-5e3f-4893-ae8e-eabb7d75ba6e_1600w.jpg"/>
</div>
<div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur px-4 py-2">
<iconify-icon className="text-pink-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm font-medium text-white/90 font-geist">CRN ativo</span>
</div>
</div>
<div className="animate-on-scroll order-1 lg:order-2" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<p className="text-xs uppercase tracking-widest text-pink-400 font-geist">Sobre a nutricionista</p>

<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist mt-3">Eu sou a <span className="text-pink-400">Júlia Mara</span></h2>
<div className="mt-5 bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<p className="leading-relaxed text-white/80 font-geist">
              Sou nutricionista e já acompanhei dezenas de mulheres no processo de reorganização alimentar.
              Aprendi que o resultado não vem da radicalização.
            </p>
<p className="leading-relaxed text-white/80 font-geist mt-4">
              Vem da consistência estratégica.
            </p>
<p className="leading-relaxed text-white/80 font-geist mt-4">
              E é isso que você vai construir nesses 21 dias.
            </p>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center bg-pink-500/10 w-8 h-8 border-pink-500/20 border rounded-lg">
<iconify-icon className="text-pink-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</span>
<p className="text-white/80 font-geist">+1400 pacientes atendidos</p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center bg-pink-500/10 w-8 h-8 border-pink-500/20 border rounded-lg">
<iconify-icon className="text-pink-400" icon="solar:verified-check-linear"></iconify-icon>
</span>
<p className="text-white/80 font-geist">CRN ativo</p>
</div>
</div>
<button className="mt-8 z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
              QUERO PARTICIPAR DA OPERAÇÃO SECA 21
            </span>
</button>
</div>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative" id="inscricao">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-20">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">

<h2 className="sm:text-6xl text-4xl font-semibold tracking-tight font-geist">
<span className="text-white">Invest</span><span className="text-pink-400">imento</span>
</h2>
<p className="text-lg text-white/80 font-geist mt-6 leading-relaxed max-w-3xl mx-auto">
            Menos do que o custo de um único fim de semana desorganizado.
          </p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-10 pr-8 pb-10 pl-8 mb-8">
<div className="text-center">
<p className="text-sm text-white/50 font-geist mb-2">O investimento para participar da Operação Seca 21 é</p>
<p className="text-6xl font-semibold text-pink-400 font-geist mb-2">R$ 57</p>
<button className="w-full sm:w-auto text-lg transition hover:bg-pink-600 text-white bg-pink-500 rounded-full pt-4 pr-8 pb-4 pl-8 font-medium shadow-lg shadow-pink-500/20" onclick="window.location.href='https://pay.hotmart.com/seu-link'">
              QUERO PARTICIPAR DA OPERAÇÃO SECA 21
            </button>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<p className="text-lg font-semibold tracking-tight font-geist mb-2">Garantia</p>
<p className="text-white/70 font-geist leading-relaxed">
                  Você tem 7 dias para testar a Operação Seca 21. Se não fizer sentido, você pode solicitar cancelamento
                  dentro desse prazo. Sem burocracia.
                </p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<p className="text-lg font-semibold tracking-tight font-geist mb-2">Inscrições</p>
<p className="text-white/70 font-geist leading-relaxed">
                  As vagas são limitadas para manter a organização do acompanhamento.
                </p>
<p className="text-white/70 font-geist leading-relaxed mt-3">
                  As inscrições encerram em: <span className="text-white/80 font-medium">(data)</span>
</p>
<p className="text-white/70 font-geist leading-relaxed mt-3">
                  A próxima turma não tem data definida.
                </p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<p className="text-3xl font-semibold text-pink-400 font-geist">21</p>
<p className="text-sm text-white/60 font-geist mt-1">Dias de programa</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<p className="text-3xl font-semibold text-pink-400 font-geist">7</p>
<p className="text-sm text-white/60 font-geist mt-1">Dias de garantia</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<p className="text-3xl font-semibold text-pink-400 font-geist">✔</p>
<p className="text-sm text-white/60 font-geist mt-1">Método aplicável</p>
</div>
</div>
</div>
</div>
</section>
<footer className="relative z-20 border-white/10 border-t">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div>
<img alt="Júlia Mara" className="h-24 object-contain mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25f8aba6-e91a-4db8-b37b-6fb11e13db4c_320w.png"/>
<p className="mt-4 text-sm text-white/60 font-geist">
            Programa estruturado de 21 dias para reduzir o inchaço, organizar sua alimentação e retomar o controle com
            método.
          </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-white/50 font-geist">Links Rápidos</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#desafio">Você se
                identifica?</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#como-funciona">Como
                funciona</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#conteudo">O que você
                recebe</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#inscricao">Investimento</a>
</li>
</ul>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-white/50 font-geist">Contato</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="mailto:contato@juliamara.com">contato@juliamara.com</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="https://instagram.com/juliamara">@juliamara</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/50 font-geist">© 2025 Júlia Mara. Todos os direitos reservados.</p>
</div>
</div>
</footer>

    </>
  );
}
