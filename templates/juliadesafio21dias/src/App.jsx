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
  


        (function() {
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
            if (isMenuOpen) {
              toggleMenu();
            }
          });
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
          }
        });

        mobileMenu.addEventListener('click', (e) => {
          if (e.target === mobileMenu && isMenuOpen) {
            toggleMenu();
          }
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fef68b6-badc-4812-9829-9f745ed3a760_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
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

<img alt="Júlia Mara" className="h-24 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bde4c342-9e88-436f-a06b-328d08f73916_3840w.png"/>
</div>

<nav className="hidden lg:flex items-center gap-8">

<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#desafio">O
            Desafio</a>
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#resultados">Resultados</a>
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#como-funciona">Como Funciona</a>
<a className="hover:text-white/90 transition text-base font-normal text-white/80 font-geist" href="#depoimentos">Depoimentos</a>

<button className="inline-flex gap-2 transition hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 text-base font-medium text-white font-geist bg-pink-500 rounded-full pt-2 pr-5 pb-2 pl-5 items-center" onclick="window.location.href='#inscricao'">
          Quero Participar
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
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#desafio">O Desafio</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#resultados">Resultados</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#como-funciona">Como
                Funciona</a>
<a className="block text-2xl font-normal text-white/80 hover:text-white transition font-geist" href="#depoimentos">Depoimentos</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<button className="w-full inline-flex gap-2 transition hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 text-base font-medium text-white font-geist bg-pink-500 rounded-full pt-3 pr-6 pb-3 pl-6 items-center justify-center" onclick="window.location.href='#inscricao'">
              Quero Participar
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
<h1 className="sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-6xl font-semibold tracking-tighter font-geist">
          Deixa eu te mostrar como <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">perder 10kg em 21 dias.</span></h1>
<p className="sm:text-3xl leading-relaxed text-2xl text-white/90 font-geist mt-8 mb-8">
          21 refeições estratégicas. Sem sofrer.<br/>
        É isso que a <span className="text-pink-400 font-medium">Operação Resgate</span> entrega.
        </p>
<div className="border-white/10 border-t mb-6 pt-6">
<div className="flex flex-wrap gap-x-4 gap-y-4 items-center">
<button className="z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
              QUERO PERDER 10KG EM 3 SEMANAS
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
          Seus olhos não mentem.<br/>E eles me dizem que você…
        </h2>
<div className="mt-12 space-y-6 text-left">
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">🥲</span>
<div>
<p className="text-xl font-medium font-geist">Já tentou perder peso</p>
<p className="text-white/70 font-geist mt-1">mais de uma vez e não conseguiu...</p>
</div>
</div>
</div>
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">🤦</span>
<div>
<p className="text-xl font-medium font-geist">Acha que é impossível ser saudável</p>
<p className="text-white/70 font-geist mt-1">Com sua rotina atual</p>
</div>
</div>
</div>
<div className="animate-on-scroll bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-start gap-4">
<span className="text-4xl">😭</span>
<div>
<p className="text-xl font-medium font-geist">Desistiu de ter um corpo bonito</p>
<p className="text-white/70 font-geist mt-1">E se sente mal por isso</p>
</div>
</div>
</div>
</div>
<p className="sm:text-3xl animate-on-scroll text-2xl font-semibold tracking-tight font-geist mt-12" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
          Acertei?
        </p>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-6 text-lg" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
          Antes que você se culpe, deixa eu tirar um peso da sua consciência.
        </p>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="text-center">
<h3 className="sm:text-6xl text-4xl font-semibold tracking-tight font-geist text-pink-400">
        Desafie o sistema.
      </h3>
<button className="mt-8 z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
            QUERO PERDER 10KG EM 3 SEMANAS
          </span>
</button>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="max-w-3xl mr-auto ml-auto">
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist text-center mb-8">
          Mas como?
        </h2>
<p className="text-lg text-white/80 font-geist leading-relaxed mb-8">
          Com uma arma secreta que muda o protocolo de reações do seu corpo e reprograma seu organismo para fazer ele:
        </p>
<div className="space-y-6">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Desinchar</p>
<p className="text-white/70 font-geist">Em vez de reter líquido</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Queimar gordura</p>
<p className="text-white/70 font-geist">Ao invés de estocar</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<p className="text-xl font-semibold font-geist text-pink-400 mb-2">Acelerar o metabolismo</p>
<p className="text-white/70 font-geist">Que se acostumou a trabalhar lento</p>
</div>
</div>
<div className="mt-12 bg-pink-500/10 border-pink-500/20 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<p className="text-xl font-medium font-geist mb-4">Escuta:</p>
<p className="text-lg text-white/80 font-geist leading-relaxed">
            Não é normal começar o dia com a energia baixa e ir dormir ainda pior do que você acordou.
          </p>
</div>
<p className="text-lg text-white/80 font-geist mt-8 text-center">
          Mas calma. Deixa eu te dar três boas notícias.
        </p>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-6 pb-8 pl-6 backdrop-blur">
<div className="inline-flex items-center justify-center bg-pink-500/20 text-pink-400 font-semibold text-2xl w-14 h-14 rounded-full border border-pink-500/30 mb-4">
            01</div>
<p className="text-xl font-semibold font-geist mb-3">Eliminar 3, 5, 10kg</p>
<p className="text-white/70 font-geist">Do seu corpo é muito mais fácil do que você pensa.</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-6 pb-8 pl-6 backdrop-blur">
<div className="inline-flex items-center justify-center bg-pink-500/20 text-pink-400 font-semibold text-2xl w-14 h-14 rounded-full border border-pink-500/30 mb-4">
            02</div>
<p className="text-xl font-semibold font-geist mb-3">Você não precisa fechar a boca</p>
<p className="text-white/70 font-geist">Passar fome nem viver na academia.</p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-6 pb-8 pl-6 backdrop-blur">
<div className="inline-flex items-center justify-center bg-pink-500/20 text-pink-400 font-semibold text-2xl w-14 h-14 rounded-full border border-pink-500/30 mb-4">
            03</div>
<p className="text-xl font-semibold font-geist mb-3">Seu corpo responde</p>
<p className="text-white/70 font-geist">Se adapta e se acostuma em apenas 3 semanas.</p>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto mt-12 text-center">
<p className="text-lg text-white/80 font-geist leading-relaxed mb-8">
          Isso, claro, se você acessar o protocolo que já funcionou com mais de 50 mil vidas e vai funcionar com você
          também.
        </p>
<p className="text-2xl font-semibold font-geist mb-8">
          Então pra que adiar a transformação que você mais deseja?
        </p>
<button className="z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
          QUERO PERDER 10KG EM 3 SEMANAS
        </span>
</button>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="max-w-3xl mr-auto ml-auto text-center">
<h2 className="sm:text-6xl text-4xl font-semibold tracking-tight font-geist mb-4">
          Ainda bem que tudo que é bom
        </h2>
<p className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist text-pink-400">
          dura pouco.
        </p>
<p className="text-xl text-white/80 font-geist mt-8 leading-relaxed">
          É por isso que a <span className="text-pink-400 font-medium">Operação Resgate</span> tem só 21 dias.
        </p>
<div className="mt-12 bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 text-left">
<p className="text-lg text-white/80 font-geist leading-relaxed space-y-4">
<span className="block">Um protocolo 100% seguro, natural, testado e aprovado.</span>
<span className="block">Feito especificamente para quem decide mudar.</span>
<span className="block">Especializado em eliminar gordura e inflar sua autoestima.</span>
</p>
</div>
<p className="text-xl font-medium font-geist mt-12 mb-8">
          Leia em voz alta tudo que eu preparei pra você na<br/>
<span className="text-pink-400 text-2xl">Operação Resgate</span>
</p>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative" id="como-funciona">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto mb-12">
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist">
          O que você vai receber
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mr-auto ml-auto">
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Cardápio completo de 21 dias</p>
<p className="text-sm text-white/60 font-geist mt-1">Com todas as refeições detalhadas</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">E-book com receitas fit</p>
<p className="text-sm text-white/60 font-geist mt-1">Práticas e deliciosas</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Grupo VIP no WhatsApp</p>
<p className="text-sm text-white/60 font-geist mt-1">Suporte diário e comunidade motivadora</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:cart-large-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Lista de compras organizada</p>
<p className="text-sm text-white/60 font-geist mt-1">Para facilitar sua rotina</p>
</div>

<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:dumbbell-large-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Treino Personalizado</p>
<p className="text-sm text-white/60 font-geist mt-1">Para quem quiser seguir e acelerar (opcional)</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/10 mb-3">
<iconify-icon className="text-pink-400" icon="solar:verified-check-linear"></iconify-icon>
</div>
<p className="font-medium tracking-tight font-geist">Protocolo completo</p>
<p className="text-sm text-white/60 font-geist mt-1">Testado e aprovado por milhares de alunos</p>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto mt-12 text-center">
<p className="text-xl font-medium font-geist mb-8">
          Agora que você está mais tranquilo, posso ouvir o seu SIM?
        </p>
<button className="z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
          SIM! ESTOU PRONTO(A) PRA COMEÇAR
        </span>
</button>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative" id="resultados">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 text-xs uppercase animate-on-scroll text-white/70 tracking-widest font-geist bg-pink-500/10 border-pink-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<iconify-icon className="text-pink-400" icon="solar:star-linear"></iconify-icon>
        Transformações Reais
      </span>
<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist mt-4" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
          Veja os resultados incríveis dos meus alunos
        </h2>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="overflow-hidden animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<img alt="Transformação antes e depois" className="aspect-[3/4] w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
<p className="text-2xl font-semibold text-pink-400 font-geist">-8kg</p>
</div>
</div>

<div className="overflow-hidden animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<img alt="Transformação antes e depois" className="aspect-[3/4] w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
<p className="text-2xl font-semibold text-pink-400 font-geist">-6,5kg</p>
</div>
</div>

<div className="overflow-hidden animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<img alt="Transformação antes e depois" className="aspect-[3/4] w-full h-full object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
<p className="text-2xl font-semibold text-pink-400 font-geist">-10kg</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="relative animate-on-scroll order-2 lg:order-1" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="relative overflow-hidden rounded-2xl border border-white/10">
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div><img alt="Júlia Mara - Nutricionista" className="aspect-[3/4] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c424f63-5e3f-4893-ae8e-eabb7d75ba6e_1600w.jpg"/>
</div>
<div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur px-4 py-2">
<iconify-icon className="text-pink-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm font-medium text-white/90 font-geist">CRN 12345</span>
</div>
</div>

<div className="animate-on-scroll order-1 lg:order-2" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<p className="text-xs uppercase tracking-widest text-pink-400 font-geist">Você já me conhece</p>
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist mt-3">Eu sou a Júlia Mara</h2>
<p className="leading-relaxed text-white/70 font-geist mt-4">
            Especialista em emagrecimento, conhecida por tratar muito bem os meus alunos e por uma outra
            coisinha muito simples:
          </p>
<p className="text-2xl font-semibold text-pink-400 font-geist mt-3">
            transformar vidas.
          </p>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center bg-pink-500/10 w-8 h-8 border-pink-500/20 border rounded-lg">
<iconify-icon className="text-pink-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</span>
<p className="text-white/80 font-geist">+50.000 vidas transformadas</p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center bg-pink-500/10 w-8 h-8 border-pink-500/20 border rounded-lg">
<iconify-icon className="text-pink-400" icon="solar:clock-circle-linear"></iconify-icon>
</span>
<p className="text-white/80 font-geist">6 anos ajudando pessoas a perder peso com saúde</p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center bg-pink-500/10 w-8 h-8 border-pink-500/20 border rounded-lg">
<iconify-icon className="text-pink-400" icon="solar:heart-linear"></iconify-icon>
</span>
<p className="text-white/80 font-geist">Comida de verdade e um sorriso no rosto</p>
</div>
</div>
<div className="mt-8 bg-pink-500/10 border-pink-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<p className="text-white/90 font-geist leading-relaxed">
              Mas se tem uma dor que insiste em voltar e que eu preciso resolver URGENTE é a dor de alguém que não
              se sente bem no próprio corpo.
            </p>
<p className="text-white/90 font-geist leading-relaxed mt-4">
              Nenhuma dor pesa mais do que essa. Por isso, pensando em você, eu criei a
              <span className="text-pink-400 font-medium">Operação Resgate</span>.
            </p>
</div>
<p className="text-xl font-semibold font-geist mt-6">
            E se tem UMA COISA QUE EU POSSO GARANTIR É:<br/>
<span className="text-pink-400">você vai alcançar seus objetivos.</span>
</p>
<button className="mt-8 z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-pink-600 text-white bg-pink-500 border-pink-400 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg cursor-pointer" onclick="window.location.href='#inscricao'">
<span className="z-10 inline-flex items-center gap-2 font-medium font-geist rounded-full relative">
            QUERO ENTRAR NO DESAFIO
          </span>
</button>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative" id="depoimentos">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto mb-12">
<span className="inline-flex items-center gap-2 text-xs uppercase text-white/70 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon>
        Depoimentos
      </span>
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist mt-4">O que meus alunos dizem</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/30"></div>
<div>
<p className="font-medium font-geist">Maria Silva</p>
<p className="text-sm text-white/60 font-geist">-7kg</p>
</div>
</div>
<p className="text-sm text-white/70 font-geist leading-relaxed">
            "Nunca imaginei que poderia emagrecer comendo bem e sem passar fome. A Júlia mudou minha relação com a
            comida!"
          </p>
<div className="flex gap-1 mt-4">
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/30"></div>
<div>
<p className="font-medium font-geist">Ana Paula</p>
<p className="text-sm text-white/60 font-geist">-9kg</p>
</div>
</div>
<p className="text-sm text-white/70 font-geist leading-relaxed">
            "O suporte da Júlia e do grupo foi essencial. Me senti acolhida e motivada todos os dias. Resultado
            incrível!"
          </p>
<div className="flex gap-1 mt-4">
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/30"></div>
<div>
<p className="font-medium font-geist">Ricardo Souza</p>
<p className="text-sm text-white/60 font-geist">-5kg</p>
</div>
</div>
<p className="text-sm text-white/70 font-geist leading-relaxed">
            "Método simples e eficaz. O treino personalizado me ajudou demais a secar. Recomendo de olhos fechados!"
          </p>
<div className="flex gap-1 mt-4">
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative" id="inscricao">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-20">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="sm:text-6xl text-4xl font-semibold tracking-tight font-geist">
            Agora, sim, a parte<br/>que mais te interessa.
          </h2>
<p className="text-lg text-white/80 font-geist mt-6 leading-relaxed max-w-2xl mx-auto">
            Só você sabe o quanto tem custado cuidar da sua saúde, e que pagaria o que fosse preciso para voltar a se
            sentir bem.
          </p>
<p className="text-lg text-white/80 font-geist mt-6 leading-relaxed">
            E faz muito tempo que seu corpo está pedindo ajuda. Mas não qualquer ajuda.
          </p>
<div className="mt-8 space-y-2">
<p className="text-xl font-medium font-geist">Aquela que você mais precisa.</p>
<p className="text-xl font-medium font-geist">A que ninguém te deu ainda.</p>
<p className="text-xl font-medium font-geist">E que não pode esperar mais um dia.</p>
</div>
<p className="text-3xl font-semibold text-pink-400 font-geist mt-8">
            Hoje, essa ajuda chegou
          </p>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-10 pr-8 pb-10 pl-8 mb-8">
<p className="text-xl font-medium font-geist text-center mb-8">
            E hoje, você pode…
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-red-500/10 border-red-500/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 text-center">
<p className="text-white/80 font-geist">
                Tentar emagrecer com soluções ilusórias que não mudam nada no seu corpo e são caras pra burro
              </p>
</div>
<div className="bg-pink-500/10 border-pink-500/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 text-center">
<p className="text-white/90 font-geist font-medium">
                Perder peso de forma natural com a Operação Resgate, que muda tudo no seu corpo custando quase nada.
              </p>
</div>
</div>
<div className="text-center">
<p className="text-sm text-white/50 font-geist mb-2">De <span className="line-through">R$ 197,00</span></p>
<p className="text-6xl font-semibold text-pink-400 font-geist mb-8">Por R$ 47,90</p>
<button className="w-full sm:w-auto text-lg transition hover:bg-pink-600 text-white bg-pink-500 rounded-full pt-4 pr-8 pb-4 pl-8 font-medium shadow-lg shadow-pink-500/20" onclick="window.location.href='https://pay.hotmart.com/seu-link'">
            ENTRAR NO DESAFIO
          </button>
<p className="text-sm text-white/60 font-geist mt-6">
              Eu sei, você esperava que ter sua saúde de volta custaria mais.
            </p>
<p className="text-sm text-white/60 font-geist mt-2">
              Mas não. Não é por mês. Não é parcelado. São puros 47 reais e 90 centavos.
            </p>
<p className="font-medium font-geist mt-6">
              Da minha parte, não tem mais o que dizer.<br/>
            Da sua, você sabe o que fazer.
            </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<p className="text-3xl font-semibold text-pink-400 font-geist">21</p>
<p className="text-sm text-white/60 font-geist mt-1">Dias de transformação</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<p className="text-3xl font-semibold text-pink-400 font-geist">50.000+</p>
<p className="text-sm text-white/60 font-geist mt-1">Vidas transformadas</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<p className="text-3xl font-semibold text-pink-400 font-geist">100%</p>
<p className="text-sm text-white/60 font-geist mt-1">Método comprovado</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 border-white/10 border-t">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="">

<img alt="Júlia Mara" className="h-24 object-contain mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bde4c342-9e88-436f-a06b-328d08f73916_3840w.png"/>
<p className="mt-4 text-sm text-white/60 font-geist">
            Nutricionista especializada em emagrecimento saudável e qualidade de vida.
          </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-white/50 font-geist">Links Rápidos</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#desafio">O Desafio</a>
</li>
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#resultados">Resultados</a></li>
<li><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#depoimentos">Depoimentos</a></li>
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
