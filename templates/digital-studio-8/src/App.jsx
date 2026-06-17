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



        // Mobile Menu Logic
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isOpen = false;

        btn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
                // Change icon to close
                btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                // Change icon back to hamburger
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5"></iconify-icon>';
            }
        });

        // Close menu when link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                isOpen = false;
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5"></iconify-icon>';
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
      

<div className="grain-overlay"></div>

<nav className="fixed top-0 left-0 right-0 z-40 w-full px-6 py-6 md:px-12 pointer-events-none">
<div className="max-w-[1400px] mx-auto flex justify-between items-center pointer-events-auto">

<a className="flex items-center gap-1 group text-xl font-semibold text-white tracking-tight font-montserrat z-50 relative" href="#">
<span className="text-zinc-500 group-hover:text-white transition-colors duration-300">.</span>ntdesign
            </a>

<div className="hidden md:flex shadow-black/50 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.45)] bg-zinc-900/80 max-w-none border-white/10 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center">
<a className="px-5 py-2 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 ease-out" href="#work">Работы</a>
<a className="px-5 py-2 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 ease-out" href="#services">Услуги</a>
<a className="px-5 py-2 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 ease-out" href="#about">О нас</a>
</div>

<a className="hidden md:flex items-center gap-2 text-sm font-medium text-black bg-white px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                Обсудить проект
                <iconify-icon className="" height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)'}} width="18"></iconify-icon>
</a>

<button className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 z-50 relative active:scale-95 transition-transform" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-500 flex flex-col items-center justify-center gap-8 pointer-events-auto" id="mobile-menu">
<a className="text-3xl font-medium text-white hover:text-zinc-400 transition-colors mobile-link" href="#work">Работы</a>
<a className="text-3xl font-medium text-white hover:text-zinc-400 transition-colors mobile-link" href="#services">Услуги</a>
<a className="text-3xl font-medium text-white hover:text-zinc-400 transition-colors mobile-link" href="#about">О нас</a>
<a className="text-3xl font-medium text-white hover:text-zinc-400 transition-colors mobile-link" href="#contact">Контакты</a>
</div>
</nav>

<main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-12">

<header className="mb-24 md:mb-32 relative" id="about">
<div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-20 right-0 w-64 h-64 bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Открыты для новых проектов
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8">
                    Создаем цифровое <br/>
<span className="text-zinc-500">совершенство.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-xl leading-relaxed">
                    Мы — .ntdesign. Творческий коллектив, одержимый эстетикой, анимацией и пользовательским опытом. Мы создаем бренды, определяющие будущее.
                </p>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]" id="work">

<div className="lg:col-span-2 row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute top-6 left-6 md:top-8 md:left-8">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300 text-white shadow-lg">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
<div className="flex justify-between items-end">
<div className="">
<p className="text-sm font-medium text-zinc-400 mb-2">Финтех приложение</p>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Банковский интерфейс Nova</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-zinc-700 transition-colors duration-300" id="services">
<div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Продуктовый дизайн</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        От вайрфреймов до готовых прототипов. Фокус на чистой геометрии и интуитивных потоках.
                    </p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:bg-zinc-900 transition-colors duration-300">
<div className="flex flex-col gap-1">
<span className="text-5xl font-medium text-white tracking-tight">50+</span>
<span className="text-sm text-zinc-500">Реализовано проектов</span>
</div>
<div className="mt-8 flex -space-x-3 overflow-hidden">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0A0A0A] grayscale opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0A0A0A] grayscale opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0A0A0A] grayscale opacity-70" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="h-10 w-10 rounded-full bg-zinc-800 ring-2 ring-[#0A0A0A] flex items-center justify-center text-xs text-white">+</div>
</div>
</div>

<div className="row-span-2 bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden group relative cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp'}}></div>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-xs text-white">
                            Мобильное
                        </div>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-1 tracking-tight">Режим Дзен</h3>
<p className="text-sm text-zinc-300">Медитация и фокус</p>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-zinc-700 transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Разработка</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Tailwind, React и плавные взаимодействия. Кодим с точностью до пикселя.
                    </p>
</div>
</div>

<div className="md:col-span-2 bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden group relative min-h-[300px] cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-center max-w-md">
<p className="text-sm font-medium text-zinc-400 mb-2">Веб-дизайн</p>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Портфолио архитектора</h3>
<p className="text-zinc-400 text-sm font-light mb-6">Минималистичный подход к тяжелому контенту с молниеносной производительностью.</p>
<a className="inline-flex items-center gap-2 text-sm text-white hover:gap-3 transition-all" href="#">
                        Смотреть кейс
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="mt-24 md:mt-32 border-t border-white/10 pt-24" id="contact">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">
                        Есть идея? <br/>
<span className="text-zinc-600">Давай реализуем её.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="mailto:hello@nt.design">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            hello@nt.design
                        </a>
</div>
</div>
<div className="flex gap-4">


<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all" href="#">
<iconify-icon icon="solar:plain-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a> 
</div>
</div>
</section>

<footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-zinc-600">
<div className="">
                © 2024 .ntdesign. Все права защищены.
            </div>

<div className="flex flex-col md:flex-row gap-4 md:gap-4">
<a className="px-5 py-2.5 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white hover:border-white/10 transition-all duration-300 text-zinc-500 text-xs font-medium flex items-center gap-2 [--fx-filter:blur(10px)_liquid-glass(4.4,10)_saturate(1.25)_noise(0.5,1,0)]" href="#">
<iconify-icon className="" icon="solar:shield-warning-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Конфиденциальность
                </a>
<a className="px-5 py-2.5 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white hover:border-white/10 transition-all duration-300 text-zinc-500 text-xs font-medium flex items-center gap-2 [--fx-filter:blur(5px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" href="#">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Условия
                </a>
</div>

<div className="w-full mt-12 select-none pointer-events-none md:hidden">
<h1 className="text-[14vw] leading-none font-bold tracking-tighter text-zinc-900 text-center opacity-50">
                    .NTDESIGN
                 </h1>
</div>
</footer>

<div className="w-full mt-12 select-none pointer-events-none hidden md:block">
<h1 className="text-[15vw] leading-none font-bold tracking-tighter text-zinc-900/30 text-center mix-blend-overlay">
               .NTDESIGN
            </h1>
</div>
</main>



    </>
  );
}
