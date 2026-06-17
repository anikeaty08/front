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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Header scroll logic with E-commerce promo bar integration
        const promoBar = document.getElementById('promo-bar');
        const navContainer = document.getElementById('nav-container');
        const logo = document.getElementById('logo-text');
        const navIcons = document.getElementById('nav-icons');
        const navLinks = navContainer.querySelectorAll('nav a');
        const cartBadge = document.getElementById('cart-badge');

        // Initial transparent state setup
        logo.classList.add('text-white');
        navIcons.classList.add('text-white');
        navLinks.forEach(link => link.classList.add('text-white', 'hover:text-gray-300'));

        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                // Hide promo bar smoothly
                promoBar.style.height = '0px';
                promoBar.style.opacity = '0';
                promoBar.style.padding = '0px';

                // Change Nav Background
                navContainer.classList.remove('bg-white/0', 'border-transparent');
                navContainer.classList.add('bg-white/95', 'backdrop-blur-md', 'border-gray-100', 'shadow-sm');
                
                // Change text colors to dark
                logo.classList.remove('text-white');
                logo.classList.add('text-gray-900');
                navIcons.classList.remove('text-white');
                navIcons.classList.add('text-gray-900');
                
                navLinks.forEach(link => {
                    link.classList.remove('text-white', 'hover:text-gray-300');
                    link.classList.add('text-gray-600', 'hover:text-[#533e3e]');
                });

                // Adjust cart badge ring to match white bg
                cartBadge.classList.replace('ring-white', 'ring-white');

            } else {
                // Show promo bar
                promoBar.style.height = '2rem'; // 32px or h-8
                promoBar.style.opacity = '1';
                promoBar.style.padding = '0.5rem 0'; // py-2

                // Restore Nav Background
                navContainer.classList.add('bg-white/0', 'border-transparent');
                navContainer.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-gray-100', 'shadow-sm');
                
                // Restore text colors to light
                logo.classList.add('text-white');
                logo.classList.remove('text-gray-900');
                navIcons.classList.add('text-white');
                navIcons.classList.remove('text-gray-900');

                navLinks.forEach(link => {
                    link.classList.add('text-white', 'hover:text-gray-300');
                    link.classList.remove('text-gray-600', 'hover:text-[#533e3e]');
                });
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('#about-text').forEach(el => {
            observer.observe(el);
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
      

<header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300" id="header">

<div className="bg-[#533e3e] text-white text-[10px] sm:text-xs py-2 text-center uppercase tracking-widest font-normal transition-all duration-300 origin-top flex items-center justify-center overflow-hidden h-8" id="promo-bar">
            Безкоштовна доставка по Україні від 5000 ₴
        </div>

<div className="bg-white/0 border-b border-transparent transition-all duration-300 ease-linear" id="nav-container">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-current transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-normal tracking-tight uppercase z-10 transition-colors duration-200" href="#" id="logo-text">
                    Yankovska
                </a>

<nav className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm tracking-wide hover:text-[#533e3e] transition-colors duration-200 font-normal" href="#shop">Магазин</a>
<a className="text-sm tracking-wide hover:text-[#533e3e] transition-colors duration-200 font-normal" href="#categories">Категорії</a>
<a className="text-sm tracking-wide hover:text-[#533e3e] transition-colors duration-200 font-normal" href="#about">Бренд</a>
</nav>

<div className="flex items-center space-x-5 z-10 text-current" id="nav-icons">
<button className="hover:text-[#533e3e] transition-colors duration-200 hidden sm:block">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-[#533e3e] transition-colors duration-200 hidden sm:block">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-[#533e3e] transition-colors duration-200 relative">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>

<span className="absolute -top-1.5 -right-1.5 bg-[#533e3e] text-white text-[10px] font-normal w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white" id="cart-badge">2</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<img alt="Yankovska Hero" className="absolute inset-0 w-full h-full object-cover object-center transform scale-105" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-5-scaled-1.jpg"/>

<div className="absolute inset-0 bg-black/50"></div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up text-white mt-10">
<span className="block text-xs tracking-widest uppercase mb-4 opacity-90 font-normal">Осінь / Зима 2025</span>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-tight mb-10">
                Нова колекція<br/>вже у продажу
            </h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs font-normal tracking-wide uppercase hover:bg-gray-100 transition-colors duration-200 ease-linear rounded-none" href="#shop">
                    Перейти до каталогу
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white text-white text-xs font-normal tracking-wide uppercase hover:bg-white hover:text-black transition-colors duration-200 ease-linear rounded-none" href="#bestsellers">
                    Хіти продажу
                </a>
</div>
</div>
</section>

<section className="pt-24 pb-16 bg-white" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-normal tracking-tight mb-2 text-gray-900">Must-haves цього сезону</h2>
<p className="text-sm text-gray-500 font-normal">Речі, які обирають наші клієнти найчастіше</p>
</div>
<a className="hidden md:flex items-center space-x-2 text-sm font-normal text-gray-900 uppercase tracking-wide group pb-1 border-b border-transparent hover:border-gray-900 transition-colors" href="#">
<span>Дивитись все</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform duration-200" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-8 pb-8 md:pb-0 no-scrollbar">

<div className="group block flex-none w-[280px] md:w-auto relative">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F7F7F7] mb-4">
<img alt="Сукня Етно" className="w-full h-full object-cover object-top img-zoom-hover" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-1-1.png"/>

<div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
<span className="bg-white px-2.5 py-1 text-[10px] font-normal tracking-widest uppercase text-gray-900">New</span>
<span className="bg-[#533e3e] px-2.5 py-1 text-[10px] font-normal tracking-widest uppercase text-white">Хіт</span>
</div>

<button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600 hover:text-[#533e3e] hover:bg-white shadow-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>

<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
<p className="text-white text-[10px] tracking-widest uppercase text-center mb-2 font-normal">Оберіть розмір</p>
<div className="flex justify-center gap-1.5 mb-3">
<button className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-md text-white text-xs font-normal hover:bg-white hover:text-black transition-colors">XS</button>
<button className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-md text-white text-xs font-normal hover:bg-white hover:text-black transition-colors">S</button>
<button className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-md text-white text-xs font-normal hover:bg-white hover:text-black transition-colors">M</button>
<button className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-md text-white text-xs font-normal hover:bg-white hover:text-black transition-colors opacity-50 cursor-not-allowed relative overflow-hidden">
                                    L
                                    <span className="absolute w-full h-[1px] bg-white rotate-45"></span>
</button>
</div>
<button className="w-full py-3 bg-white text-black text-xs font-normal tracking-wide uppercase hover:bg-[#533e3e] hover:text-white transition-colors duration-200">
                                В кошик
                            </button>
</div>
</div>

<div className="flex justify-between items-start">
<div className="space-y-1">
<a className="text-sm font-normal tracking-tight text-gray-900 hover:text-[#533e3e] transition-colors line-clamp-1" href="#">Сукня "Серпанок" бавовняна</a>

<div className="flex space-x-1.5 pt-1">
<div className="w-3 h-3 rounded-full bg-[#E5E5E5] border border-gray-300 cursor-pointer ring-1 ring-offset-1 ring-gray-400"></div>
<div className="w-3 h-3 rounded-full bg-[#2A2A2A] border border-gray-300 cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-gray-300 transition-all"></div>
</div>
</div>
<p className="text-sm font-medium text-gray-900 pl-2 whitespace-nowrap">4 500 ₴</p>
</div>
</div>

<div className="group block flex-none w-[280px] md:w-auto relative">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F7F7F7] mb-4">
<img alt="Блуза" className="w-full h-full object-cover object-top img-zoom-hover grayscale" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-1-1.png"/>
<button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600 hover:text-[#533e3e] shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
<button className="w-full py-3 bg-white text-black text-xs font-normal tracking-wide uppercase hover:bg-[#533e3e] hover:text-white transition-colors duration-200">
                                Швидкий перегляд
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<a className="text-sm font-normal tracking-tight text-gray-900 hover:text-[#533e3e] transition-colors line-clamp-1" href="#">Блуза вільного крою</a>
<div className="flex space-x-1.5 pt-1">
<div className="w-3 h-3 rounded-full bg-white border border-gray-300 cursor-pointer ring-1 ring-offset-1 ring-gray-400"></div>
</div>
</div>
<p className="text-sm font-medium text-gray-900 pl-2 whitespace-nowrap">2 800 ₴</p>
</div>
</div>

<div className="group block flex-none w-[280px] md:w-auto relative">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F7F7F7] mb-4">
<img alt="Спідниця" className="w-full h-full object-cover object-top img-zoom-hover" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-1-1.png"/>
<button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600 hover:text-[#533e3e] shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
<button className="w-full py-3 bg-white text-black text-xs font-normal tracking-wide uppercase hover:bg-[#533e3e] hover:text-white transition-colors duration-200">
                                Швидкий перегляд
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<a className="text-sm font-normal tracking-tight text-gray-900 hover:text-[#533e3e] transition-colors line-clamp-1" href="#">Спідниця міді з розрізом</a>
<div className="flex space-x-1.5 pt-1">
<div className="w-3 h-3 rounded-full bg-[#E5E5E5] border border-gray-300 cursor-pointer ring-1 ring-offset-1 ring-gray-400"></div>
<div className="w-3 h-3 rounded-full bg-[#8C7A6B] border border-gray-300 cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-gray-300"></div>
</div>
</div>
<p className="text-sm font-medium text-gray-900 pl-2 whitespace-nowrap">3 200 ₴</p>
</div>
</div>

<div className="group block flex-none w-[280px] md:w-auto relative">
<div className="relative aspect-[3/4] overflow-hidden bg-[#F7F7F7] mb-4">
<img alt="Жакет" className="w-full h-full object-cover object-top img-zoom-hover grayscale" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-1-1.png"/>
<div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
<span className="bg-gray-900 px-2.5 py-1 text-[10px] font-normal tracking-widest uppercase text-white">Останній розмір</span>
</div>
<button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600 hover:text-[#533e3e] shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
<button className="w-full py-3 bg-white text-black text-xs font-normal tracking-wide uppercase hover:bg-[#533e3e] hover:text-white transition-colors duration-200">
                                В кошик
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<a className="text-sm font-normal tracking-tight text-gray-900 hover:text-[#533e3e] transition-colors line-clamp-1" href="#">Вовняний жакет класичний</a>
</div>
<div className="flex flex-col items-end">
<p className="text-sm font-medium text-[#533e3e] pl-2 whitespace-nowrap">5 900 ₴</p>
<p className="text-xs text-gray-400 line-through">7 500 ₴</p>
</div>
</div>
</div>
</div>

<div className="mt-10 md:hidden flex justify-center">
<a className="w-full py-4 border border-gray-900 text-gray-900 text-xs font-normal tracking-wide uppercase text-center hover:bg-gray-900 hover:text-white transition-colors" href="#">
                    Переглянути всі товари
                </a>
</div>
</div>
</section>

<section className="py-16 bg-[#F0F5FA]/50 border-t border-b border-gray-100" id="categories">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-normal tracking-tight mb-8 text-center text-gray-900">Категорії</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group bg-white p-6 text-center border border-gray-100 hover:border-[#533e3e]/30 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center space-y-3" href="#">
<iconify-icon className="text-gray-400 group-hover:text-[#533e3e] transition-colors" icon="solar:hanger-linear" width="28"></iconify-icon>
<span className="text-sm font-normal tracking-wide uppercase text-gray-900">Сукні</span>
</a>
<a className="group bg-white p-6 text-center border border-gray-100 hover:border-[#533e3e]/30 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center space-y-3" href="#">
<iconify-icon className="text-gray-400 group-hover:text-[#533e3e] transition-colors" icon="solar:crown-star-linear" width="28"></iconify-icon>
<span className="text-sm font-normal tracking-wide uppercase text-gray-900">Блузи</span>
</a>
<a className="group bg-white p-6 text-center border border-gray-100 hover:border-[#533e3e]/30 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center space-y-3" href="#">
<iconify-icon className="text-gray-400 group-hover:text-[#533e3e] transition-colors" icon="solar:scissor-linear" width="28"></iconify-icon>
<span className="text-sm font-normal tracking-wide uppercase text-gray-900">Спідниці</span>
</a>
<a className="group bg-white p-6 text-center border border-gray-100 hover:border-[#533e3e]/30 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center space-y-3" href="#">
<iconify-icon className="text-gray-400 group-hover:text-[#533e3e] transition-colors" icon="solar:tag-linear" width="28"></iconify-icon>
<span className="text-sm font-normal tracking-wide uppercase text-gray-900">Аксесуари</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden">
<img alt="Yankovska Craftsmanship" className="w-full h-full object-cover" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-1-1.png"/>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F0F5FA] -z-10 hidden md:block"></div>
</div>
<div className="space-y-8 opacity-0 animate-fade-in-up delay-100" id="about-text" style={{animationPlayState: 'paused'}}>
<span className="text-xs tracking-widest uppercase text-gray-400 font-normal">Про бренд</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 leading-snug">
                        Створено з любов'ю до деталей та повагою до якості.
                    </h2>
<p className="text-sm text-gray-500 leading-relaxed font-normal">
                        Кожна річ створюється лімітованими партіями з преміальних італійських тканин. Ми контролюємо кожен етап виробництва в Україні, щоб ви отримали бездоганний крій та комфорт, який залишається з вами на роки.
                    </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
<div className="flex items-start space-x-3">
<iconify-icon className="text-[#533e3e] shrink-0 mt-0.5" icon="solar:box-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-gray-900">Швидка доставка</h4>
<p className="text-xs text-gray-500 mt-1">Відправка в день замовлення</p>
</div>
</div>
<div className="flex items-start space-x-3">
<iconify-icon className="text-[#533e3e] shrink-0 mt-0.5" icon="solar:refresh-square-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-gray-900">Легке повернення</h4>
<p className="text-xs text-gray-500 mt-1">Протягом 14 днів без питань</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-100 flex items-center justify-center overflow-hidden" id="contact">
<img alt="Contact Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[50%]" src="http://www.yankovskabrand.com/wp-content/uploads/2025/09/rectangle-74-1-1.png"/>
<div className="absolute inset-0 bg-[#313131]/70"></div>
<div className="relative z-10 w-full max-w-lg px-6">
<div className="bg-white p-10 md:p-14 shadow-2xl rounded-none text-center">
<h2 className="text-2xl font-normal tracking-tight mb-2 text-gray-900">Отримайте знижку 10%</h2>
<p className="text-sm text-gray-500 mb-8 font-normal">Підпишіться на новини та отримайте промокод на перше замовлення нової колекції.</p>
<form className="space-y-5 text-left">
<div>
<input className="w-full py-3 px-0 bg-transparent border-b border-gray-300 text-sm font-normal placeholder-gray-400 focus:outline-none focus:border-[#533e3e] transition-colors rounded-none" placeholder="Ваш Email" required="" type="email"/>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-gray-900 text-white text-xs font-normal tracking-wide uppercase hover:bg-[#533e3e] transition-colors duration-200 rounded-none" type="submit">
                            Отримати знижку
                        </button>
</div>
<p className="text-[10px] text-gray-400 text-center mt-4">Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.</p>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-xl font-normal tracking-tight uppercase mb-6 inline-block text-gray-900" href="#">Yankovska</a>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs font-normal">
                        Бренд жіночого одягу, що поєднує бездоганний крій, преміальні матеріали та сучасний мінімалізм.
                    </p>
<div className="flex space-x-4 mt-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-gray-900 mb-6">Магазин</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Всі товари</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Новинки</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Сукні</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Хіти продажу</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-gray-900 mb-6">Покупцям</h4>
<ul className="space-y-3">
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Доставка та оплата</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Обмін та повернення</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Таблиця розмірів</a></li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors" href="#">Програма лояльності</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-gray-900 mb-6">Контакти</h4>
<ul className="space-y-3">
<li className="text-sm font-normal text-gray-500">+38 (000) 000-00-00</li>
<li className="text-sm font-normal text-gray-500">Щодня з 10:00 до 20:00</li>
<li><a className="text-sm font-normal text-gray-500 hover:text-[#533e3e] transition-colors border-b border-transparent hover:border-[#533e3e]" href="mailto:info@yankovska.com">info@yankovska.com</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-normal text-gray-400">© 2025 Yankovska Brand. Всі права захищено.</p>
<div className="flex space-x-6 text-xs font-normal text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#">Договір оферти</a>
<a className="hover:text-gray-900 transition-colors" href="#">Політика конфіденційності</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
