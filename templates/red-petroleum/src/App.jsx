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



const plans = {
standard: {
title: "Стандарт",
price: "12 сом",
unit: "/ кВт·ч",
features: ["DC быстрая зарядка до 150 кВт", "Все типы разъёмов (CCS2, GB/T)", "Оплата в приложении", "Поддержка 24/7"]
},
club: {
title: "Red Club",
price: "10 сом",
unit: "/ кВт·ч",
features: ["Всё из тарифа «Стандарт»", "Скидка 15% на каждую зарядку", "Бонусные баллы на АЗС Red Petroleum", "Приоритетная поддержка"]
},
business: {
title: "Для Бизнеса",
price: "Corp",
unit: "Тариф",
features: ["Личный кабинет с аналитикой", "Единый счёт для автопарка", "Постоплата и акты сверки", "Выделенный менеджер"]
}
};
function setPlan(plan) {
// Update Buttons
document.querySelectorAll('section button[id^="btn-"]').forEach(btn => {
btn.className = "w-full text-left p-4 rounded-lg border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.02] transition-all group";
// remove highlight
if(btn.querySelector('.absolute')) btn.querySelector('.absolute').remove();
if(btn.querySelector('.w-2.h-2')) btn.querySelector('.w-2.h-2').remove();
});
const activeBtn = document.getElementById('btn-' + plan);
activeBtn.className = "w-full text-left p-4 rounded-lg bg-white/[0.04] border border-red-500/40 text-white transition-all group relative overflow-hidden";
activeBtn.insertAdjacentHTML('afterbegin', '<div class="absolute inset-0 bg-red-500/5"></div>');
activeBtn.querySelector('div.flex').insertAdjacentHTML('beforeend', '<span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>');
// Update Text
document.getElementById('plan-title').textContent = plans[plan].title;
document.getElementById('plan-price').textContent = plans[plan].price;
document.getElementById('plan-unit').textContent = plans[plan].unit;
const featureList = document.getElementById('plan-features');
featureList.innerHTML = '';
plans[plan].features.forEach((f, index) => {
const delayClass = index === 0 ? '' : index === 1 ? 'delay-1' : 'delay-2';
featureList.insertAdjacentHTML('beforeend', `
<li class="flex items-center gap-3 text-sm text-white/80 animate-fade-up ${delayClass}">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><path d="M20 6 9 17l-5-5"/></svg>
${f}
</li>
`);
});
// Update Meters based on plan
const meters = {
standard: { speed: '100%', price: '60%', bonus: '0%' },
club: { speed: '100%', price: '90%', bonus: '100%' },
business: { speed: '100%', price: '100%', bonus: '100%' }
};
document.getElementById('meter-speed').style.width = meters[plan].speed;
document.getElementById('meter-price').style.width = meters[plan].price;
document.getElementById('meter-bonus').style.width = meters[plan].bonus;
// Update Meta text
const meta = {
standard: { speed: "150 кВт", price: "Стандарт", bonus: "—" },
club: { speed: "150 кВт", price: "-15%", bonus: "Включено" },
business: { speed: "Priority", price: "Индив.", bonus: "Полный" }
};
document.getElementById('meta-speed').textContent = meta[plan].speed;
document.getElementById('meta-price').textContent = meta[plan].price;
document.getElementById('meta-bonus').textContent = meta[plan].bonus;
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.icon-plus');
      const isExpanded = content.style.gridTemplateRows === '1fr';

      // Reset all others
      document.querySelectorAll('.faq-content').forEach(el => {
        el.style.gridTemplateRows = '0fr';
        el.previousElementSibling.querySelector('.icon-plus').style.transform = 'rotate(0deg)';
        el.previousElementSibling.querySelector('.icon-plus').style.color = 'rgba(255,255,255,0.4)';
      });

      // Toggle current
      if (!isExpanded) {
        content.style.gridTemplateRows = '1fr';
        icon.style.transform = 'rotate(45deg)';
        icon.style.color = '#DC2626'; 
      }
    }
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="emerald-filter-container" style={{filter: 'hue-rotate(130deg) saturate(2) brightness(0.8) contrast(1.1)', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 linear-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-600/10 blur-[120px] rounded-full opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#0B0C0E]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0C0E]/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6">
<iconify-icon className="text-red-500" height="24" icon="solar:bolt-circle-bold-duotone" width="24"></iconify-icon>
</div>
<span className="uppercase text-sm font-bold text-white/90 tracking-tight">Red Petroleum</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">Станции</a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">Тарифы</a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">Для бизнеса</a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">О компании</a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">Контакты</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-[13px] text-white/60 hover:text-white transition-colors" href="#">
            RU | KG | EN
          </a>
<a className="shine-button h-8 px-4 rounded-full bg-red-600 hover:bg-red-500 text-[13px] font-medium text-white transition-all flex items-center shadow-[0_0_15px_rgba(220,38,38,0.4)]" href="#">
            Скачать приложение
          </a>
</div>
</div>
</nav>

<main className="z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col animate-fade-up opacity-0 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-xs font-medium text-red-400/90 tracking-tight">
              Первая сеть быстрых ЭЗС в Кыргызстане
            </span>
</div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-black italic text-white mb-6">
            ЗАРЯЖАЙ
            <br/>
<span className="text-red-600">
              БУДУЩЕЕ
            </span>
            СЕГОДНЯ
          </h1>
<p className="leading-relaxed text-lg font-light text-white/60 max-w-md mb-10">
            Сеть быстрых зарядных станций от Red Petroleum. До 150 кВт мощности. Зарядка любого электромобиля от 15 минут.
          </p>
<div className="flex flex-wrap items-center gap-4">
<button className="shine-button h-12 px-8 rounded-full bg-red-600 text-white text-[15px] font-bold hover:bg-red-500 transition-all shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-red-500">
              Скачать приложение
            </button>
<button className="h-12 px-8 rounded-full border border-red-500 bg-transparent text-white text-[15px] font-medium hover:bg-red-900/10 transition-colors flex items-center gap-2">
              Найти станцию
              <iconify-icon className="text-red-500 ml-2" icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-white/[0.06] pt-8 w-full">
<div>
<div className="text-2xl font-bold text-white">210</div>
<div className="text-xs text-white/40 uppercase tracking-wider mt-1">Станций</div>
</div>
<div>
<div className="text-2xl font-bold text-white">150 кВт</div>
<div className="text-xs text-white/40 uppercase tracking-wider mt-1">Мощность</div>
</div>
<div className="">
<div className="text-2xl font-bold text-white">24/7</div>
<div className="text-xs text-white/40 uppercase tracking-wider mt-1">Доступ</div>
</div>
</div>
</div>

<div className="relative opacity-0 animate-fade-up delay-2">

<div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>

<div className="relative w-full max-w-md ml-auto linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl p-8 border border-white/10 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300">

<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<div className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-medium text-white/60">
                        Уровень: Gold
                    </div>
</div>

<h3 className="text-lg text-white font-medium mb-1">Red Club</h3>
<div className="text-sm text-white/60 mb-6">Программа лояльности</div>
<div className="mb-8 p-4 bg-white/[0.02] border border-white/[0.04] rounded-lg text-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
<div className="text-[11px] text-white/40 uppercase tracking-wider mb-2">Ваш кэшбек</div>
<div className="flex items-center justify-center gap-2">
<span className="text-5xl font-bold text-white tracking-tight">15%</span>
<span className="text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded rotate-[-6deg]">MAX</span>
</div>
<div className="mt-2 text-[12px] text-white/40">Бонусы с каждого кВт·ч</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 shrink-0">
<iconify-icon icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-[13px] text-white font-medium">1 Бонус = 1 Сом</div>
<div className="text-[11px] text-white/40">Честный курс обмена</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 shrink-0">
<iconify-icon icon="solar:gas-station-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-[13px] text-white font-medium">Тратьте на АЗС</div>
<div className="text-[11px] text-white/40">Топливо и товары</div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/[0.06]">
<div className="flex justify-between text-[11px] text-white/40 mb-2 font-medium">
<span className="">Баланс: 1,250 B</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-red-500 relative"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/[0.06] bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="linear-card bg-[#131418]/90 border-white/10 border rounded-xl p-8 backdrop-blur-md overflow-hidden relative">
<style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 50s linear infinite;
    }
    .group:hover .animate-marquee {
      animation-play-state: paused;
    }
  </style>
<p className="text-center text-xs font-medium text-white/30 mb-8 tracking-widest uppercase">
    Поддерживаем все популярные марки
  </p>
<div className="group flex overflow-hidden w-full select-none gap-16" style={{maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'}}>

<div className="flex items-center justify-around gap-16 shrink-0 animate-marquee min-w-full">
<svg className="h-6 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" fill="currentColor" role="img" viewbox="0 0 24 24"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438c-.146-1.439-1.154-1.79-4.354-1.79L12 24L8.619 5.034c-3.18 0-4.188.354-4.335 1.792c0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34zl-.004.002H12zm0-3.899c3.415-.03 7.326.528 11.328 2.28c.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0C8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46z"></path></svg>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:byd"></iconify-icon>
<iconify-icon className="h-5 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:zeekr"></iconify-icon>
<iconify-icon className="h-7 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:liauto"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:porsche"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:mercedes"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:bmw"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:audi"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:volkswagen"></iconify-icon>
<iconify-icon className="h-7 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:hyundai"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:kia"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:toyota"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:nissan"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:honda"></iconify-icon>
<iconify-icon className="h-10 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:ford"></iconify-icon>
<iconify-icon className="h-6 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:xpeng"></iconify-icon>
<iconify-icon className="h-6 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:nio"></iconify-icon>
<iconify-icon className="h-10 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:hongqi"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:changanautomobile"></iconify-icon>
</div>

<div aria-hidden="true" className="flex items-center justify-around gap-16 shrink-0 animate-marquee min-w-full">
<svg className="h-6 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" fill="currentColor" role="img" viewbox="0 0 24 24"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438c-.146-1.439-1.154-1.79-4.354-1.79L12 24L8.619 5.034c-3.18 0-4.188.354-4.335 1.792c0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34zl-.004.002H12zm0-3.899c3.415-.03 7.326.528 11.328 2.28c.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0C8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46z"></path></svg>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:byd"></iconify-icon>
<iconify-icon className="h-5 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:zeekr"></iconify-icon>
<iconify-icon className="h-7 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:liauto"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:porsche"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:mercedes"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:bmw"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:audi"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:volkswagen"></iconify-icon>
<iconify-icon className="h-7 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:hyundai"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:kia"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:toyota"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:nissan"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:honda"></iconify-icon>
<iconify-icon className="h-10 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:ford"></iconify-icon>
<iconify-icon className="h-6 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:xpeng"></iconify-icon>
<iconify-icon className="h-6 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:nio"></iconify-icon>
<iconify-icon className="h-10 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:hongqi"></iconify-icon>
<iconify-icon className="h-8 w-auto text-white/30 hover:text-white transition-colors duration-300 cursor-pointer" icon="simple-icons:changanautomobile"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Почему выбирают Red Charge?
        </h2>
<p className="text-lg font-light text-white/60 w-81 max-w-xl pt-1 pb-1">Мы создали сервис, который делает зарядку электромобиля такой же простой, как заправку бензином.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl p-8 border border-white/10 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full group-hover:bg-red-600/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-red-500">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">
              Быстрая зарядка 150 кВт
            </h3>
<p className="text-sm text-white/60 max-w-md leading-relaxed">
              Зарядите свой электромобиль до 80% всего за 15-30 минут. Европейское оборудование с защитой от перегрузок.
            </p>
</div>

<div className="mt-8 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-red-500"></div>
</div>
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[0%] bg-white/40"></div>
</div>
</div>
</div>

<div className="linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl p-8 border border-white/10 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Все типы разъёмов</h3>
<p className="text-sm text-white/60 leading-relaxed">
            Поддерживаем CCS2, CHAdeMO и GB/T. Подходит для Tesla, BYD, Zeekr.
          </p>
</div>

<div className="linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl p-8 border border-white/10 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Работаем 24/7</h3>
<p className="text-sm text-white/60 leading-relaxed">
            Наши станции доступны круглосуточно. Безопасные локации.
          </p>
</div>

<div className="md:col-span-2 linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-red-500">
<iconify-icon className="" icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Любой способ оплаты</h3>
<p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Visa, MasterCard, Элкарт, MBANK, О!Деньги. Платите в приложении в один клик.
            </p>
</div>
<div className="w-full md:w-64 bg-black/40 rounded-lg border border-white/5 p-4 relative">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-xs text-white/40">Способ оплаты</span>
<span className="text-xs text-white">Visa •• 4242</span>
</div>
<button className="w-full bg-red-600 text-white text-xs py-2 rounded font-medium">Оплатить 588 сом</button>
</div>
</div>
</div>
</section>

<section className="animate-fade-up delay-3 opacity-0 max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="linear-card bg-[#131418]/90 backdrop-blur-md border border-white/10 rounded-xl relative shadow-2xl overflow-hidden group">

<div className="absolute top-[-20%] left-[20%] w-[60%] h-[400px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="border-white/[0.06] flex h-12 border-b pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
</div>
</div>
<div className="flex items-center gap-3 bg-[#0B0C0E] border border-white/[0.06] rounded-md px-3 py-1">
<iconify-icon className="text-white/40" icon="solar:smartphone-linear" width="14"></iconify-icon>
<span className="text-[12px] text-white/30 font-medium">
              Red Charge App · redcharge.kg
            </span>
</div>
<div className="flex items-center gap-3">
<span className="text-[11px] text-white/40">v2.4.0</span>
</div>
</div>

<div className="grid grid-cols-12 min-h-[600px] bg-transparent">

<div className="hidden md:block col-span-3 border-r border-white/[0.06] p-4 space-y-6">
<div className="text-[11px] font-medium text-white/40 uppercase mb-3 px-2">
                Как это работает
            </div>
<div className="space-y-6">
<div className="px-2">
<div className="text-red-500 text-sm font-bold mb-1">01</div>
<div className="text-white text-[13px] font-medium mb-1">Скачайте приложение</div>
<div className="text-white/40 text-[12px]">Регистрация по номеру телефона за 1 минуту.</div>
</div>
<div className="px-2">
<div className="text-red-500 text-sm font-bold mb-1">02</div>
<div className="text-white text-[13px] font-medium mb-1">Найдите станцию</div>
<div className="text-white/40 text-[12px]">Карта покажет ближайшие свободные разъёмы.</div>
</div>
<div className="px-2">
<div className="text-red-500 text-sm font-bold mb-1">03</div>
<div className="text-white text-[13px] font-medium mb-1">Заряжайтесь</div>
<div className="text-white/40 text-[12px]">Сканируйте QR и оплачивайте картой.</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/[0.06] px-2">
<button className="w-full bg-white/5 border border-white/10 text-white text-[12px] py-2 rounded hover:bg-white/10 transition">Скачать инструкцию</button>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-0 relative overflow-hidden bg-[#111]">

<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#111] overflow-hidden">

<iframe allowfullscreen="" className="w-full h-full opacity-60 grayscale invert brightness-90 contrast-125" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116946.47196231456!2d74.50946029837946!3d42.87696417537368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1710000000000!5m2!1sen!2skg" style={{border: '0', mixBlendMode: 'luminosity'}}>
</iframe>

<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0B0C0E]/10 via-transparent to-[#0B0C0E]/80"></div>

<div className="absolute top-[42%] left-[48%] flex items-center justify-center group cursor-pointer z-10">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white/20 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
</div>

<div className="absolute top-[28%] left-[62%] flex items-center justify-center group cursor-pointer z-10">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 delay-300"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white/20 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
</div>

<div className="absolute top-[65%] left-[38%] flex items-center justify-center group cursor-pointer z-10">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 delay-700"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white/20 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
</div>

<div className="absolute top-[48%] left-[28%] flex items-center justify-center group cursor-pointer z-10">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 delay-150"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white/20 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
</div>

<div className="absolute top-[58%] left-[70%] flex items-center justify-center group cursor-pointer z-10">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 delay-500"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white/20 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-red-500/30 rounded-full animate-ping"></div>

<div className="absolute top-[30%] left-[40%] flex flex-col items-center group cursor-pointer">
<div className="bg-[#131418] border border-white/10 px-3 py-1.5 rounded-lg mb-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
<div className="text-[12px] text-white font-medium">Red Charge — Ала-Тоо</div>
<div className="text-[10px] text-green-400">3 из 4 доступно</div>
</div>
<div className="w-8 h-8 bg-red-600 rounded-full border-4 border-[#0B0C0E] flex items-center justify-center text-white shadow-lg shadow-red-600/40">
<iconify-icon icon="solar:bolt-bold" width="14"></iconify-icon>
</div>
</div>

<div className="absolute top-[60%] left-[60%] flex flex-col items-center group cursor-pointer">
<div className="w-6 h-6 bg-[#222] rounded-full border-2 border-[#0B0C0E] flex items-center justify-center text-white/50">
<iconify-icon icon="solar:bolt-bold" width="10"></iconify-icon>
</div>
</div>

<div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
<div className="pointer-events-auto bg-[#131418]/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-2xl w-64">
<div className="text-[11px] text-white/40 uppercase mb-2">Ближайшая станция</div>
<div className="text-white font-medium mb-1">пр. Чуй, 168</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/60">CCS2</span>
<span className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/60">GB/T</span>
</div>
<button className="mt-4 w-full bg-red-600 hover:bg-red-500 text-white text-[12px] py-1.5 rounded transition">Построить маршрут</button>
</div>
</div>

<div className="absolute bottom-6 left-6 flex gap-4 pointer-events-none">
<div className="bg-[#131418]/90 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
<div className="text-white font-bold">10</div>
<div className="text-[10px] text-white/40">Станций в Бишкеке</div>
</div>
<div className="bg-[#131418]/90 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
<div className="text-green-400 font-bold">24</div>
<div className="text-[10px] text-white/40">Свободных портов</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pb-24 border-t border-white/[0.06]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 gap-x-10 gap-y-10 items-start">

<div className="lg:col-span-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 gap-x-6 gap-y-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-white">Прозрачные тарифы.</h2>
<p className="text-sm text-white/60 mt-2 font-light">
          Платите только за энергию. Никаких скрытых комиссий.
        </p>
</div>

<div className="w-full md:w-auto">
<div className="grid grid-cols-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">

<button className="relative rounded-lg px-3 py-2 text-left transition-all group overflow-hidden bg-white/[0.04] border border-red-500/40 text-white cursor-pointer" id="btn-standard" onclick="window.setPlan('standard')">
<div className="active-bg absolute inset-0 bg-red-500/5 transition-opacity duration-300 opacity-100"></div>
<div className="relative z-10 flex items-center justify-between gap-2">
<span className="text-[13px] font-medium">Стандарт</span>
<span className="active-dot w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-opacity duration-300 opacity-100"></span>
</div>
<div className="relative z-10 text-[11px] text-white/50 mt-0.5 transition-colors">Для всех</div>
</button>

<button className="relative rounded-lg px-3 py-2 text-left transition-all group overflow-hidden border border-transparent text-white/60 hover:text-white hover:bg-white/[0.02] cursor-pointer" id="btn-club" onclick="window.setPlan('club')">
<div className="active-bg absolute inset-0 bg-red-500/5 transition-opacity duration-300 opacity-0"></div>
<div className="relative z-10 flex items-center justify-between gap-2">
<span className="text-[13px] font-medium">Red Club</span>
<span className="active-dot w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-opacity duration-300 opacity-0"></span>
</div>
<div className="z-10 text-[11px] group-hover:text-white/50 transition-colors text-white/40 mt-0.5 relative">Выгодно</div>
</button>

<button className="relative rounded-lg px-3 py-2 text-left transition-all group overflow-hidden border border-transparent text-white/60 hover:text-white hover:bg-white/[0.02] cursor-pointer" id="btn-business" onclick="window.setPlan('business')">
<div className="active-bg absolute inset-0 bg-red-500/5 transition-opacity duration-300 opacity-0"></div>
<div className="relative z-10 flex items-center justify-between gap-2">
<span className="text-[13px] font-medium">Бизнес</span>
<span className="active-dot w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-opacity duration-300 opacity-0"></span>
</div>
<div className="relative z-10 text-[11px] text-white/40 group-hover:text-white/50 mt-0.5 transition-colors">Компании</div>
</button>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl border border-white/10 p-6 md:p-8">
<div className="flex items-start justify-between gap-6 mb-6">
<div className="">
<div className="text-[11px] text-white/40 uppercase tracking-wide">В тариф входит</div>
<h3 className="text-xl text-white font-medium tracking-tight mt-1">Особенности плана</h3>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Мощность</span>
<span className="text-[11px] text-white/40 font-mono transition-all duration-300" id="meta-speed">150 кВт</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[100%] bg-red-500 transition-all duration-500 ease-out" id="meter-speed"></div>
</div>
</div>

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Стоимость</span>
<span className="text-[11px] text-white/40 font-mono transition-all duration-300" id="meta-price">Стандарт</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[60%] bg-red-500 transition-all duration-500 ease-out" id="meter-price"></div>
</div>
</div>

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Бонусы</span>
<span className="text-[11px] text-white/40 font-mono transition-all duration-300" id="meta-bonus">—</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[0%] bg-red-500 transition-all duration-500 ease-out" id="meter-bonus"></div>
</div>
</div>

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Кабель</span>
<span className="text-[11px] text-white/40 font-mono">Включен</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[100%] bg-red-500 transition-all duration-500 ease-out"></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="text-[13px] text-white/60 font-light">
             Пример: Зарядка BYD Seal (20-80%) ≈ <span className="text-white">588 сом</span>
</div>
<div className="flex items-center gap-2 text-[11px] text-white/40">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
              Чек на email
            </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl border border-white/10 p-6 md:p-8">
<div className="flex justify-between items-baseline mb-8">
<h3 className="text-2xl text-white font-medium tracking-tight animate-fade-up" id="plan-title">Стандарт</h3>
<div className="text-right">
<div className="flex items-baseline justify-end gap-1">
<div className="text-2xl text-white font-medium tracking-tight animate-fade-up" id="plan-price">12 сом</div>
</div>
<div className="text-[11px] text-white/40 uppercase tracking-wide" id="plan-unit">/ кВт·ч</div>
</div>
</div>
<ul className="space-y-4 mb-8" id="plan-features">
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up">
<svg className="text-red-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            DC быстрая зарядка до 150 кВт
          </li>
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up delay-1">
<svg className="text-red-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Все типы разъёмов (CCS2, GB/T)
          </li>
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up delay-2">
<svg className="text-red-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Оплата в приложении
          </li>
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up delay-3">
<svg className="text-red-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Поддержка 24/7
          </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
          Скачать приложение
        </button>
<div className="mt-4 text-[12px] text-white/40 text-center font-light">
          Или <a className="underline hover:text-white" href="#">оставить заявку</a> для бизнеса
        </div>
</div>
</div>
</div>
</section>
<section className="border-white/[0.06] max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Частые вопросы</h2>
<p className="text-sm text-white/60 leading-relaxed font-light mb-8">
        Всё, что нужно знать о зарядке в Red Charge. Если не нашли ответ, позвоните нам на горячую линию.
      </p>
</div>

<div className="lg:col-span-8">
<div className="space-y-4">

<div className="group linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500">
<button className="flex focus:outline-none text-left bg-transparent w-full px-6 py-6 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Сколько времени занимает зарядка?</span>
<span className="ml-6 flex items-center justify-center text-white/40 transition-transform duration-300 group-hover:text-white">
<iconify-icon className="transition-transform duration-300 icon-plus" icon="lucide:plus" width="20"></iconify-icon>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content bg-transparent">
<div className="overflow-hidden px-6 border-t border-white/[0.06]">
<p className="pb-6 pt-4 text-sm text-white/70 font-light leading-relaxed">
                Зависит от батареи автомобиля. В среднем зарядка с 20% до 80% занимает 20-40 минут на DC-станции мощностью 150 кВт.
              </p>
</div>
</div>
</div>

<div className="group linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500">
<button className="flex focus:outline-none text-left bg-transparent w-full px-6 py-6 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Какие способы оплаты вы принимаете?</span>
<span className="ml-6 flex items-center justify-center text-white/40 transition-transform duration-300 group-hover:text-white">
<iconify-icon className="transition-transform duration-300 icon-plus" icon="lucide:plus" width="20"></iconify-icon>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content bg-transparent">
<div className="overflow-hidden px-6 border-t border-white/[0.06]">
<p className="pb-6 pt-4 text-sm text-white/70 font-light leading-relaxed">
                Visa, MasterCard, Элкарт, MBANK, О!Деньги, Баланс.кг, MegaPay. Оплата происходит автоматически после завершения зарядки.
              </p>
</div>
</div>
</div>

<div className="group linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500">
<button className="flex focus:outline-none text-left bg-transparent w-full px-6 py-6 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Подходит ли мой автомобиль?</span>
<span className="ml-6 flex items-center justify-center text-white/40 transition-transform duration-300 group-hover:text-white">
<iconify-icon className="transition-transform duration-300 icon-plus" icon="lucide:plus" width="20"></iconify-icon>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content bg-transparent">
<div className="overflow-hidden px-6 border-t border-white/[0.06]">
<p className="pb-6 pt-4 text-sm text-white/70 font-light leading-relaxed">
                Мы поддерживаем разъёмы CCS2, CHAdeMO и GB/T. Это покрывает 99% электромобилей (Tesla, BYD, Zeekr, Nissan Leaf и др.).
              </p>
</div>
</div>
</div>

<div className="group linear-card bg-[#131418]/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500">
<button className="flex focus:outline-none text-left bg-transparent w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Что делать, если станция не работает?</span>
<span className="ml-6 flex items-center justify-center text-white/40 transition-transform duration-300 group-hover:text-white">
<iconify-icon className="transition-transform duration-300 icon-plus" icon="lucide:plus" width="20"></iconify-icon>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content bg-transparent">
<div className="overflow-hidden px-6 border-t border-white/[0.06]">
<p className="pb-6 pt-4 text-sm text-white/70 font-light leading-relaxed">
                 Позвоните на горячую линию (бесплатно) или напишите в Telegram @redcharge_support. Мы работаем 24/7.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="border-white/[0.06] bg-[#0B0C0E] border-t pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="relative flex items-center justify-center w-5 h-5">
<iconify-icon className="text-red-500" icon="solar:bolt-circle-bold-duotone" width="24"></iconify-icon>
</div>
<span className="uppercase text-sm font-bold text-white">Red Petroleum</span>
</div>
<p className="text-[13px] text-white/40 max-w-xs leading-relaxed">
              Сеть быстрых зарядных станций для электромобилей от Red Petroleum. Развиваем электромобильность в Кыргызстане.
            </p>
</div>
<div className="">
<h4 className="text-[13px] font-medium text-white mb-4">Навигация</h4>
<ul className="space-y-3 text-[13px] text-white/50">
<li className=""><a className="hover:text-white transition-colors" href="#">Станции</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Тарифы</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Для бизнеса</a></li>
<li><a className="hover:text-white transition-colors" href="#">О компании</a></li>
</ul>
</div>
<div className="">
<h4 className="text-[13px] font-medium text-white mb-4">Контакты</h4>
<ul className="space-y-3 text-[13px] text-white/50">
<li>0800-XXX-XXX</li>
<li>info@redcharge.kg</li>
<li>@redcharge_support</li>
<li>г. Бишкек, ул. Пример, 123</li>
</ul>
</div>
<div className="col-span-2 md:col-span-2">
<h4 className="text-[13px] font-medium text-white mb-4">Приложение</h4>
<div className="flex gap-3">
<button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded px-3 py-2 flex items-center gap-2 transition">
<iconify-icon className="text-white" icon="simple-icons:apple" width="16"></iconify-icon>
<span className="text-xs text-white">App Store</span>
</button>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded px-3 py-2 flex items-center gap-2 transition">
<iconify-icon className="text-white" icon="simple-icons:googleplay" width="16"></iconify-icon>
<span className="text-xs text-white">Google Play</span>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.06]">
<div className="text-[12px] text-white/30 mb-4 md:mb-0">
            © 2026 Red Charge by Red Petroleum. Все права защищены.
          </div>
<div className="flex items-center gap-6">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:facebook" width="16"></iconify-icon>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:telegram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
