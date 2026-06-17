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
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


                (function() {
                  const container = document.getElementById('card-grid-container');
                  const cards = container.querySelectorAll('.card-item');
                  let activeCard = null;
                  
                  cards.forEach((card, index) => {
                    card.addEventListener('click', function(e) {
                      e.stopPropagation();
                      if (activeCard === card) {
                        resetCards();
                        return;
                      }
                      cards.forEach((c) => {
                        c.style.filter = 'blur(8px)';
                        c.style.opacity = '0.4';
                        c.style.transform = '';
                        c.style.position = 'relative';
                        c.style.zIndex = '1';
                        c.style.transition = 'all 0.7s ease-out';
                      });
                      card.style.filter = 'blur(0px)';
                      card.style.opacity = '1';
                      card.style.transform = 'translate(0, 0) rotate(0deg) scale(1.15)';
                      card.style.position = 'relative';
                      card.style.zIndex = '10';
                      card.style.transition = 'all 0.7s ease-out';
                      activeCard = card;
                    });
                  });
                  
                  document.addEventListener('click', function(e) {
                    if (activeCard && !container.contains(e.target)) resetCards();
                  });
                  
                  function resetCards() {
                    cards.forEach((c) => {
                      c.style.filter = '';
                      c.style.opacity = '';
                      c.style.transform = '';
                      c.style.position = '';
                      c.style.zIndex = '';
                    });
                    activeCard = null;
                  }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-60" style="background:
    radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.16), transparent 60%),
    radial-gradient(800px 400px at 80% 10%, rgba(249,115,22,.14), transparent 60%),
    radial-gradient(1000px 600px at 50% 100%, rgba(0,0,0,.08), transparent 70%)"></div>
</div>
<div className="" id="wrapper">

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<header className="fixed z-50 top-0 right-0 left-0">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center justify-center font-sans font-semibold tracking-tight text-xl text-white" href="#">
          Визуалити.
        </a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-sans" href="#features">Возможности</a>
<a className="hover:text-white transition-colors font-sans" href="#gallery">Галерея</a>
<a className="hover:text-white transition-colors font-sans" href="#use-cases">Для кого</a>
<a className="hover:text-white transition-colors font-sans" href="#pricing">Тарифы</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition border-gradient before:rounded-full">
<iconify-icon height="18" icon="solar:user-linear" style={{color: '#e5e5e5'}} width="18"></iconify-icon>
</button>
<button aria-label="Menu" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition border-gradient before:rounded-full">
<iconify-icon height="18" icon="solar:hamburger-menu-linear" style={{color: '#e5e5e5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="sm:pb-28 sm:pt-36 max-w-7xl mr-auto ml-auto pt-36 pr-6 pb-28 pl-6">
<div className="relative">
<div className="sm:px-0 sm:py-0 lg:px-0 pt-0 pr-0 pb-0 pl-0">

<div className="mx-auto max-w-4xl text-center" style={{animation: 'fadeSlideIn 1s ease-out 0.1s both'}}>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.06] text-4xl font-semibold tracking-tighter font-sans">Универсальная ИИ-фотостудия <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent tracking-tighter font-sans font-semibold">для бизнеса и жизни.</span></h1>
</div>

<div className="mx-auto mt-10 max-w-5xl px-2"></div>

<div className="sm:mt-12 max-w-5xl mt-12 mr-auto ml-auto relative" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>

<div className="-top-5 sm:-top-7 sm:left-[16%] z-50 absolute left-[12%]">
<div className="relative">
<span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-indigo-600 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">e-commerce
                  <iconify-icon height="16" icon="solar:box-linear" style={{color: '#ffffff'}} width="16"></iconify-icon>
</span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-indigo-600"></span>
</div>
</div>
<div className="-top-4 sm:-top-6 sm:right-[14%] z-50 absolute right-[10%]">
<div className="relative">
<span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-blue-500 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">арт
                  <iconify-icon height="16" icon="solar:palette-linear" style={{color: '#ffffff'}} width="16"></iconify-icon>
</span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-500"></span>
</div>
</div>

<div className="flex justify-center">
<div className="grid grid-cols-6 sm:gap-4 gap-x-3 gap-y-3" id="card-grid-container">
<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-8 translate-y-3 sm:translate-y-5 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="0">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Product photography" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-5 sm:translate-y-7 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="1">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Art transformation" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d1829ff-2aa2-4535-9e73-12ce151d3ad1_800w.webp"/>
</div>
</div>
<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="2">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Business portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28e0cf92-e98a-4c65-9297-4e09857280a4_800w.jpg"/>
</div>
</div>
<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-0 -translate-y-1 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="3">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Cosmetics product" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3734ddcc-c1d3-4dc2-929f-b785a4cb24b1_800w.webp"/>
</div>
</div>
<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-3 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="4">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Fashion portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-6 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="5">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Family portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88041695-33ab-4732-9aa4-daa9a2fc8ec3_800w.jpg"/>
</div>
</div>

</div>
</div>
</div>

<p className="mx-auto mt-8 max-w-xl text-center text-base text-neutral-300 font-sans" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>
            Загрузите обычные фото или снимки товаров. Выберите стиль. Получите идеальные коммерческие кадры, бизнес-портреты и арт-трансформации за считанные минуты.
          </p>

<div className="mt-8 flex items-center justify-center gap-4" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>
<button className="group inline-flex lg:h-11 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-400/50 text-base font-semibold text-white h-10 max-w-[300px] rounded-full pr-6 pl-6 relative items-center justify-center border-gradient before:rounded-full">
<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full" style={{opacity: '1'}}>
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'}}></span>
<span className="absolute -top-[52px] right-1 size-20 bg-indigo-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-indigo-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute -bottom-[42px] -left-[19px] size-20 bg-blue-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>
<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
</span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>
<span aria-hidden="true" className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0">
<span className="-top-px -left-px z-20 w-full h-full rounded-full absolute" style={{boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)'}}></span>
</span>
<span className="relative z-10 flex items-center gap-1.5 text-sm lg:text-base leading-none font-normal -tracking-[0.04em] text-white/95 rounded-full font-sans">
                Начать генерацию
              </span>
<span className="pointer-events-none absolute inset-0 ring-0 ring-indigo-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full font-sans transition" href="#gallery">
              Смотреть портфолио
              <iconify-icon height="18" icon="solar:gallery-wide-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-white/10"></div>
</div>
</main>

<section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="how-it-works">
<div className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-center max-w-2xl mr-auto ml-auto">
<span className="inline-flex items-center ring-1 ring-white/10 border-gradient before:rounded-full text-xs text-neutral-300 bg-neutral-900/70 rounded-full px-3 py-1 font-sans">
        Как это работает
      </span>
<h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight mt-6">
        Три шага к студийному качеству
      </h2>
<p className="text-base text-neutral-300 mt-4 font-sans">
        От домашних снимков до профессиональных коммерческих кадров без аренды фотостудии.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
<div className="sm:p-8 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl p-6 relative flex flex-col items-start">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800/80 ring-1 ring-white/10 border-gradient before:rounded-xl mb-6">
<iconify-icon height="24" icon="solar:gallery-send-linear" style={{color: '#60a5fa'}} width="24"></iconify-icon>
</div>
<span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 font-sans">Шаг 1</span>
<h3 className="mt-4 text-2xl tracking-tight font-sans font-semibold">Загрузите исходники</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 font-sans">
          Загрузите несколько обычных фотографий человека или товара. Профессиональный свет и фон не имеют значения.
        </p>
</div>
<div className="sm:p-8 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl p-6 relative flex flex-col items-start">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800/80 ring-1 ring-white/10 border-gradient before:rounded-xl mb-6">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" style={{color: '#a78bfa'}} width="24"></iconify-icon>
</div>
<span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 font-sans">Шаг 2</span>
<h3 className="mt-4 text-2xl tracking-tight font-sans font-semibold">Настройте сцену</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 font-sans">
          Выберите стиль из каталога: строгий офис, уютный интерьер для товара, фантастический арт или минимализм.
        </p>
</div>
<div className="sm:p-8 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both] bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl p-6 relative flex flex-col items-start">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800/80 ring-1 ring-white/10 border-gradient before:rounded-xl mb-6">
<iconify-icon height="24" icon="solar:download-square-linear" style={{color: '#34d399'}} width="24"></iconify-icon>
</div>
<span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 font-sans">Шаг 3</span>
<h3 className="mt-4 text-2xl tracking-tight font-sans font-semibold">Получите результат</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 font-sans">
          Умная нейросеть за несколько минут сгенерирует реалистичные кадры в высоком разрешении, готовые к публикации.
        </p>
</div>
</div>
</section>

<section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 border-t border-white/10" id="features">
<div className="mb-12 sm:mb-16">
<h2 className="sm:text-4xl text-3xl font-semibold tracking-tight font-sans">Что мы создаем</h2>
<p className="mt-4 text-base text-neutral-400 font-sans max-w-2xl">Единая платформа для решения любых визуальных задач — от карточек товаров до семейных портретов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="md:col-span-2 lg:col-span-2 relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 p-6 sm:p-8 border-gradient before:rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-indigo-400 mb-4" height="28" icon="solar:box-linear" width="28"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Предметная съемка</h3>
<p className="mt-2 text-sm text-neutral-400 max-w-md">Идеальные фото для e-commerce. Поместите ваш продукт в любой интерьер, добавьте премиальный свет и создайте продающие карточки товаров без декораторов.</p>
</div>

<div className="md:col-span-1 lg:col-span-1 relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 p-6 sm:p-8 border-gradient before:rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-blue-400 mb-4" height="28" icon="solar:user-id-linear" width="28"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Бизнес-портреты</h3>
<p className="mt-2 text-sm text-neutral-400">Строгий корпоративный стиль, профили LinkedIn, резюме и сайты компаний.</p>
</div>

<div className="md:col-span-1 lg:col-span-1 relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 p-6 sm:p-8 border-gradient before:rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-blue-400 mb-4" height="28" icon="solar:palette-linear" width="28"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Арт-трансформации</h3>
<p className="mt-2 text-sm text-neutral-400">Превратите фото в картины эпохи Возрождения, фэнтези-арты или киберпанк.</p>
</div>

<div className="md:col-span-1 lg:col-span-1 relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 p-6 sm:p-8 border-gradient before:rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-emerald-400 mb-4" height="28" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Семейные фото</h3>
<p className="mt-2 text-sm text-neutral-400">Создавайте теплые совместные кадры и праздничные открытки без фотографа.</p>
</div>

<div className="md:col-span-1 md:col-start-2 lg:col-span-1 lg:col-start-auto relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 p-6 sm:p-8 border-gradient before:rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-blue-400 mb-4" height="28" icon="solar:star-fall-linear" width="28"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight">Контент для соцсетей</h3>
<p className="mt-2 text-sm text-neutral-400">Регулярно обновляйте ленту яркими lifestyle-кадрами в разных локациях мира.</p>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:pb-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-20 pl-4 border-t border-white/10" id="gallery">
<div className="text-center max-w-4xl mr-auto ml-auto mt-12">
<span className="inline-flex items-center gap-2 sm:px-4 sm:py-2 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] text-xs font-medium text-cyan-300 bg-cyan-500/15 border-cyan-400/30 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-sans">
        Галерея результатов
      </span>
<h2 className="sm:mt-6 sm:text-4xl lg:text-5xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-3xl font-semibold tracking-tight mt-6 font-sans">
        Качество, неотличимое от реальности
      </h2>
<p className="sm:mt-4 sm:text-base animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-sm font-normal text-neutral-300 mt-3 font-sans">
        Оцените детализацию, работу со светом и текстурами в сгенерированных изображениях для брендов и людей.
      </p>
</div>
<div className="relative mt-12 sm:mt-16">
<div className="mx-auto max-w-7xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'}}>
<div className="flex w-max" style={{animation: 'marquee-left 40s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:gap-4 flex-shrink-0 sm:pr-4 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both] pr-4 gap-x-2 gap-y-2">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Product" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d9f7d3d-1ca5-4159-a31d-6c4232149348_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Portrait" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28e0cf92-e98a-4c65-9297-4e09857280a4_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Art" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Cosmetics" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Family" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Fashion" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Product minimal" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Portrait" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Product" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Portrait" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Art" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Cosmetics" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Family" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Fashion" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Product minimal" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Portrait" className="sm:h-40 lg:h-48 w-full h-32 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 border-t border-white/10" id="use-cases">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border-gradient before:rounded-full font-sans">
        Для кого
      </span>
<h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl tracking-tight mt-6 font-sans font-semibold">
        Решения для любых задач
      </h2>
</div>

<div className="mt-16">
<h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
<iconify-icon className="text-neutral-400" icon="solar:buildings-linear"></iconify-icon>
        Для бизнеса
      </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(59,130,246,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Интернет-магазины</h4>
<p className="mt-3 text-sm text-neutral-300 leading-relaxed">Тысячи вариантов подачи товаров. Экономьте на предметных фотографах и локациях для съемок каталога.</p>
</div>
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(168,85,247,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Бренды</h4>
<p className="leading-relaxed text-sm text-neutral-300 mt-3">Создавайте лукбуки, визуальные концепты и рекламные кампании с идеальной стилистикой без ограничений.</p>
</div>
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(249,115,22,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Эксперты</h4>
<p className="mt-3 text-sm text-neutral-300 leading-relaxed">Укрепляйте личный бренд премиальными фото для прессы, сайтов, анонсов и презентаций.</p>
</div>
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(16,185,129,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Команды</h4>
<p className="mt-3 text-sm text-neutral-300 leading-relaxed">Дистанционно оформляйте портреты сотрудников в едином корпоративном стиле для страницы «О нас».</p>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16">
<h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:user-rounded-linear"></iconify-icon>
        Для личных целей
      </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(236,72,153,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Идеальные портреты</h4>
<p className="mt-3 text-sm text-neutral-300 leading-relaxed">Привлекайте внимание в соцсетях, на сайтах знакомств или создайте безупречное фото для резюме.</p>
</div>
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(234,179,8,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Уникальные подарки</h4>
<p className="mt-3 text-sm text-neutral-300 leading-relaxed">Подарите близким портрет в образе королевской особы, супергероя или персонажа любимого фильма.</p>
</div>
<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 border-gradient before:rounded-2xl bg-[radial-gradient(900px_220px_at_95%_120%,rgba(6,182,212,0.18),transparent)]">
<h4 className="text-lg font-semibold text-white">Арт-принты</h4>
<p className="mt-3 text-sm text-neutral-300 leading-relaxed">Генерируйте уникальные интерьерные постеры и картины в высоком разрешении для печати.</p>
</div>
</div>
</div>
</section>

<section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 border-t border-white/10" id="pricing">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border-gradient before:rounded-full font-sans">
        Тарифы
      </span>
<h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl tracking-tight mt-6 font-sans font-semibold">
        Выберите пакет генераций
      </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<h3 className="text-xl font-sans font-semibold">Для себя</h3>
<p className="text-sm text-neutral-400 mt-2 font-sans">Идеально для портретов и артов</p>
<div className="mt-6">
<span className="text-5xl tracking-tight font-sans font-semibold">$9</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            20 профессиональных фото
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            До 2 разных стилей
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            Портреты и фэнтези-арт
          </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full transition font-sans">
          Выбрать базовый
        </button>
</div>

<div className="relative rounded-2xl ring-1 ring-cyan-400/30 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both] bg-[radial-gradient(900px_220px_at_50%_50%,rgba(168,85,247,0.22),transparent)] md:scale-105 shadow-2xl shadow-cyan-500/20">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full pointer-events-none"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center rounded-full bg-cyan-500 px-3 py-1 text-xs font-medium text-white font-sans">Популярный</span>
</div>
<h3 className="text-xl font-sans font-semibold">Креатор</h3>
<p className="text-sm text-neutral-400 mt-2 font-sans">Для соцсетей, экспертов и брендов</p>
<div className="mt-6">
<span className="text-5xl tracking-tight font-sans font-semibold">$29</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            100 профессиональных кадров
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            Все стили без ограничений
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            Предметная съемка товаров
          </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30 font-sans">
          Выбрать Creator
        </button>
</div>

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<h3 className="text-xl font-sans font-semibold">Бизнес</h3>
<p className="text-sm text-neutral-400 mt-2 font-sans">Для e-commerce и компаний</p>
<div className="mt-6">
<span className="text-5xl tracking-tight font-sans font-semibold">$199</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            Безлимитная генерация
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            Пакетная обработка товаров
          </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
            Съемка команд (до 50 человек)
          </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full transition font-sans">
          Связаться с нами
        </button>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6"><div className="h-px w-full bg-white/10"></div></div>
<section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="relative rounded-3xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-16 pt-12 pr-6 pb-12 pl-6 border-gradient before:rounded-3xl overflow-hidden bg-[radial-gradient(900px_400px_at_50%_50%,rgba(168,85,247,0.2),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>

<div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="relative text-center max-w-3xl mx-auto">
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-sans font-semibold">
          Создайте идеальный визуал сегодня
        </h2>
<p className="text-base sm:text-lg text-neutral-300 mt-6 font-sans">
          Присоединяйтесь к тысячам брендов, предпринимателей и креаторов. Превратите обычные фотографии в шедевры студийного качества всего за пару кликов.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group inline-flex lg:h-12 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-400/50 text-base font-semibold text-white h-11 w-full sm:w-auto rounded-full pr-8 pl-8 relative items-center justify-center border-gradient before:rounded-full">
<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'}}></span>
<span className="absolute -top-[52px] right-1 size-20 bg-indigo-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-indigo-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute -bottom-[42px] -left-[19px] size-20 bg-blue-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>
<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
</span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>
<span aria-hidden="true" className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0">
<span className="-top-px -left-px z-20 w-full h-full rounded-full absolute" style={{boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)'}}></span>
</span>
<span className="relative z-10 flex items-center gap-2 text-[15px] leading-none font-medium -tracking-[0.04em] text-white/95 rounded-full font-sans">
              Начать генерацию
            </span>
<span className="pointer-events-none absolute inset-0 ring-0 ring-indigo-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
</button>
</div>
<p className="text-xs text-neutral-400 mt-6 font-sans">
          Регистрация за 1 минуту • Безопасная оплата • Коммерческие права включены
        </p>
</div>
</div>
</section>
<footer className="border-t border-white/10 bg-black">
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-8 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12">

<div className="col-span-2">
<a className="inline-flex items-center justify-center font-sans font-semibold tracking-tight text-xl text-white" href="#">
            Визуалити.
          </a>
<p className="mt-4 text-sm text-neutral-400 max-w-xs font-sans">
            Ваша персональная ИИ-фотостудия. Генерируем премиальный визуальный контент для любых задач бизнеса и творчества.
          </p>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Платформа</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#features">Возможности</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Каталог стилей</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#pricing">Тарифы</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Ресурсы</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#gallery">Галерея</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">База знаний</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Блог студии</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Правовая инфо</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Конфиденциальность</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Условия сервиса</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Возвраты</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-400 font-sans">
            © 2024 Визуалити. Все права защищены.
          </p>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
