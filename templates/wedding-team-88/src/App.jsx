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



        function switchTab(category) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.setAttribute('data-active', 'true');
                } else {
                    btn.setAttribute('data-active', 'false');
                }
            });

            const cards = document.querySelectorAll('.specialist-card');
            cards.forEach(card => {
                if (card.dataset.cat === category) {
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });
        }
        document.addEventListener('DOMContentLoaded', () => { switchTab('beauty'); });

        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalCat = document.getElementById('modal-cat');
        const modalPrice = document.getElementById('modal-price');
        const modalDesc = document.getElementById('modal-desc');
        const modalImg = document.getElementById('modal-img');

        function openModal(title, category, price, desc, img) {
            modalTitle.textContent = title;
            modalCat.textContent = category;
            modalPrice.textContent = 'от ' + price + ' ₽';
            modalDesc.textContent = desc;
            modalImg.src = img;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#E7E5E0]">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-6">
<button className="text-[#2F4F38]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="font-serif text-lg tracking-tight text-[#2F4F38] uppercase hidden md:block" href="#">WT Journal</a>
</div>
<a className="font-serif text-2xl tracking-tighter text-[#2F4F38] absolute left-1/2 -translate-x-1/2" href="#">WEDDING TEAM</a>
<button className="text-xs uppercase tracking-widest border border-[#2F4F38] text-[#2F4F38] px-5 py-2 hover:bg-[#2F4F38] hover:text-white transition-colors duration-300">
                Inquire
            </button>
</div>
</nav>

<header className="pt-24 pb-12 md:pt-32 px-4 md:px-6 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

<div className="md:col-span-7 lg:col-span-8 relative z-10">
<div className="flex items-center gap-3 mb-6 text-[#78716C]">
<span className="h-[1px] w-8 bg-[#78716C]"></span>
<span className="text-xs uppercase tracking-widest">Est. 2023</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-[#2F4F38] mb-8">
                    The Art of <br/>
<span className="italic font-light ml-12 md:ml-24">Celebration</span>
</h1>
<div className="md:hidden w-full aspect-[4/5] mb-8 overflow-hidden">
<img alt="Couple" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:flex-row gap-8 md:items-start max-w-2xl">
<p className="text-base md:text-lg text-[#57534E] font-light leading-relaxed text-balance">
                        Мы объединяем эстетику, эмоции и безупречную организацию. Курируемая подборка лучших профессионалов свадебной индустрии для создания событий вне времени.
                    </p>
<div className="shrink-0">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2F4F38] border-b border-[#2F4F38] pb-1 hover:opacity-70 transition-opacity" href="#specialists">
                            Найти команду <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="hidden md:block md:col-span-5 lg:col-span-4 relative">
<div className="w-full aspect-[3/4] overflow-hidden bg-[#E8E6df]">
<img alt="Main Hero" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-12 -left-12 w-48 aspect-square overflow-hidden border-8 border-[#FDFCF8] hidden lg:block">
<img alt="Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<div className="w-full overflow-hidden border-y border-[#E7E5E0] bg-white py-6 md:py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1">
<div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Rings" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hidden md:block">
<img alt="Flowers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hidden md:block">
<img alt="Table" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<section className="py-24 max-w-screen-2xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
<div className="order-2 md:order-1 relative">
<div className="w-full aspect-[4/5] overflow-hidden">
<img alt="Bride Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -top-6 -right-6 md:-right-12 bg-white p-6 md:p-8 shadow-xl max-w-xs border border-[#E7E5E0]">
<p className="font-serif italic text-xl md:text-2xl text-[#2F4F38] leading-tight">
                        "Детали создают атмосферу, а люди создают воспоминания."
                    </p>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-xs uppercase tracking-[0.2em] text-[#A8A29E] block mb-6">Философия</span>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2F4F38] mb-8 leading-tight tracking-tight">
                    Больше, чем просто <br/><span className="italic opacity-80">список услуг</span>
</h2>
<div className="space-y-6 text-[#57534E] font-light leading-relaxed text-lg">
<p>
<span className="float-left text-5xl md:text-6xl font-serif text-[#2F4F38] mr-3 mt-[-10px] h-12">П</span>одготовка к свадьбе — это создание симфонии. Ошибка в одной ноте может нарушить гармонию всего произведения.
                    </p>
<p>
                        Мы отказались от каталожного подхода в пользу редакционного отбора. Только те специалисты, чье портфолио говорит само за себя. Те, кто понимает, что такое «тихая роскошь» и искренние эмоции.
                    </p>
</div>
<div className="mt-12 flex gap-12 border-t border-[#E7E5E0] pt-8">
<div>
<span className="block font-serif text-3xl text-[#2F4F38]">50+</span>
<span className="text-xs uppercase tracking-widest text-[#78716C] mt-1 block">Экспертов</span>
</div>
<div>
<span className="block font-serif text-3xl text-[#2F4F38]">12</span>
<span className="text-xs uppercase tracking-widest text-[#78716C] mt-1 block">Категорий</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-t border-[#E7E5E0]" id="specialists">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="font-serif text-4xl md:text-5xl text-[#2F4F38] tracking-tight">Портфолио</h2>

<div className="w-full md:w-auto overflow-x-auto no-scrollbar mt-6 md:mt-0 pb-2">
<div className="flex gap-8 text-sm uppercase tracking-widest whitespace-nowrap" id="tabs-nav">
<button className="tab-btn active text-[#2F4F38] border-b border-[#2F4F38] pb-1 hover:opacity-70 transition-all data-[active=false]:text-[#A8A29E] data-[active=false]:border-transparent" data-category="beauty" onclick="switchTab('beauty')">Beauty</button>
<button className="tab-btn text-[#A8A29E] border-b border-transparent pb-1 hover:text-[#2F4F38] transition-all data-[active=true]:text-[#2F4F38] data-[active=true]:border-[#2F4F38]" data-category="photo" onclick="switchTab('photo')">Photo</button>
<button className="tab-btn text-[#A8A29E] border-b border-transparent pb-1 hover:text-[#2F4F38] transition-all data-[active=true]:text-[#2F4F38] data-[active=true]:border-[#2F4F38]" data-category="dress" onclick="switchTab('dress')">Style</button>
<button className="tab-btn text-[#A8A29E] border-b border-transparent pb-1 hover:text-[#2F4F38] transition-all data-[active=true]:text-[#2F4F38] data-[active=true]:border-[#2F4F38]" data-category="decor" onclick="switchTab('decor')">Decor</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12" id="cards-container">

<div className="specialist-card group beauty block lg:col-span-1" data-cat="beauty">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-[#F0EFEC]">
<img alt="Stylist" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 px-2 py-1 text-[10px] uppercase tracking-widest text-[#2F4F38]">Top Pick</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-[#2F4F38]">Анна Власова</h3>
<p className="text-xs text-[#78716C] mt-1 font-light">MUA &amp; Hair Stylist</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#D6D3CD] flex items-center justify-center hover:bg-[#2F4F38] hover:text-white hover:border-[#2F4F38] transition-all" onclick="openModal('Anna Vlasova', 'Beauty', '15 000', 'Свадебный образ, репетиция, выезд.', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&amp;w=800')">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
<div className="specialist-card group beauty block lg:col-span-1" data-cat="beauty">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-[#F0EFEC]">
<img alt="Hair" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1512239682708-4d32225a07c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-[#2F4F38]">Елена Громова</h3>
<p className="text-xs text-[#78716C] mt-1 font-light">Hairstylist Expert</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#D6D3CD] flex items-center justify-center hover:bg-[#2F4F38] hover:text-white hover:border-[#2F4F38] transition-all" onclick="openModal('Elena Gromova', 'Hair', '12 000', 'Прическа любой сложности.', 'https://images.unsplash.com/photo-1512239682708-4d32225a07c4?q=80&amp;w=800')">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="specialist-card group beauty block lg:col-span-2" data-cat="beauty">
<div className="relative overflow-hidden aspect-[8/5] lg:aspect-[16/9] mb-4 bg-[#F0EFEC]">
<img alt="Beauty Studio" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-serif text-2xl">Studio Glow</h3>
<p className="text-xs font-light opacity-90">Команда из 4 стилистов для больших сборов</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-[#2F4F38]">от 40 000 ₽ / пакет</span>
<button className="text-xs uppercase tracking-widest text-[#2F4F38] hover:underline" onclick="openModal('Studio Glow', 'Team', '40 000', 'Полный образ для невесты и 2 гостей.', 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=1200')">Подробнее</button>
</div>
</div>

<div className="specialist-card group photo hidden lg:col-span-2" data-cat="photo">
<div className="relative overflow-hidden aspect-[16/9] mb-4 bg-[#F0EFEC]">
<img alt="Photographer" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl text-[#2F4F38]">Максим Белов</h3>
<p className="text-sm text-[#78716C] mt-1 font-light">Fine Art Photography</p>
</div>
<button className="text-xs uppercase tracking-widest border border-[#2F4F38] px-4 py-2 hover:bg-[#2F4F38] hover:text-white transition-colors" onclick="openModal('Maxim Belov', 'Photo', '80 000', 'Пленка и цифра. 10 часов.', 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&amp;w=1200')">View Portfolio</button>
</div>
</div>
<div className="specialist-card group photo hidden lg:col-span-1" data-cat="photo">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-[#F0EFEC]">
<img alt="Photographer" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-[#2F4F38]">Alex Grey</h3>
<p className="text-xs text-[#78716C]">Репортаж</p>
</div>

<div className="specialist-card group decor hidden lg:col-span-1" data-cat="decor">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-[#F0EFEC]">
<img alt="Decor" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-[#2F4F38]">Botanica</h3>
<p className="text-xs text-[#78716C]">Эко-стиль</p>
</div>

<div className="specialist-card group dress hidden lg:col-span-1" data-cat="dress">
<div className="relative overflow-hidden aspect-[3/4] mb-4 bg-[#F0EFEC]">
<img alt="Dress" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1594552072238-b8a337eda742?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-[#2F4F38]">Estetika</h3>
<p className="text-xs text-[#78716C]">Minimalism</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F6F5F2]">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-3">
<h2 className="font-serif text-4xl text-[#2F4F38] sticky top-32 leading-none">
                        Wedding<br/>Guide<br/>
<span className="block w-12 h-[1px] bg-[#2F4F38] mt-6"></span>
</h2>
</div>

<div className="lg:col-span-6 space-y-16">
<article className="group cursor-pointer">
<div className="flex items-baseline justify-between mb-4 border-b border-[#D6D3CD] pb-4">
<span className="text-xs uppercase tracking-widest text-[#78716C]">01. Бюджет</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl text-[#2F4F38] mb-4 group-hover:italic transition-all">Деньги — не главное?</h3>
<p className="text-[#57534E] font-light leading-relaxed">
                            Почему попытка сэкономить на фотографе может стоить вам воспоминаний, и как грамотно распределить смету, чтобы гости остались в восторге, а вы — спокойны.
                        </p>
</article>
<article className="group cursor-pointer">
<div className="flex items-baseline justify-between mb-4 border-b border-[#D6D3CD] pb-4">
<span className="text-xs uppercase tracking-widest text-[#78716C]">02. Тайминг</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl text-[#2F4F38] mb-4 group-hover:italic transition-all">Утро невесты без стресса</h3>
<p className="text-[#57534E] font-light leading-relaxed">
                            Идеальное утро начинается не с визажиста в 6 утра, а с правильного планирования. Рассказываем, как выспаться и насладиться сборами.
                        </p>
</article>
<article className="group cursor-pointer">
<div className="flex items-baseline justify-between mb-4 border-b border-[#D6D3CD] pb-4">
<span className="text-xs uppercase tracking-widest text-[#78716C]">03. Концепция</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl text-[#2F4F38] mb-4 group-hover:italic transition-all">Тренды 2024</h3>
<p className="text-[#57534E] font-light leading-relaxed">
                            Микро-свадьбы, пленочная фотография и отказ от банкетной рассадки. Что актуально в этом сезоне.
                        </p>
</article>
</div>

<div className="lg:col-span-3 hidden lg:block">
<div className="w-full aspect-[2/3] overflow-hidden sticky top-32">
<img alt="Guide Visual" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2F4F38] text-[#FDFCF8] py-20">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12">
<div className="col-span-2">
<h2 className="font-serif text-4xl mb-6">Wedding Team</h2>
<p className="text-white/60 font-light max-w-sm">
                        Эксклюзивный сервис подбора команды для вашего особенного дня. Москва и МО.
                    </p>
</div>
<div>
<h4 className="uppercase text-xs tracking-widest mb-6 opacity-50">Меню</h4>
<ul className="space-y-3 font-light text-sm">
<li><a className="hover:opacity-70" href="#">Специалисты</a></li>
<li><a className="hover:opacity-70" href="#">Журнал</a></li>
<li><a className="hover:opacity-70" href="#">О нас</a></li>
</ul>
</div>
<div>
<h4 className="uppercase text-xs tracking-widest mb-6 opacity-50">Контакты</h4>
<ul className="space-y-3 font-light text-sm">
<li>hello@weddingteam.ru</li>
<li>+7 (999) 123-45-67</li>
<li className="flex gap-4 mt-6">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 mt-20 pt-8 flex justify-between text-xs text-white/40">
<span>© 2023 Wedding Team.</span>
<span>Privacy Policy</span>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="modal">
<div className="absolute inset-0 bg-[#2F4F38]/20 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl p-4">
<div className="bg-white shadow-2xl overflow-hidden relative grid md:grid-cols-2 animate-[fadeIn_0.3s_ease-out]">
<button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full z-10 hover:bg-[#2F4F38] hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="h-64 md:h-auto bg-stone-100">
<img alt="Detail" className="w-full h-full object-cover" id="modal-img" src=""/>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center">
<span className="text-[10px] uppercase tracking-widest text-[#78716C] mb-2" id="modal-cat">Category</span>
<h3 className="font-serif text-3xl text-[#2F4F38] mb-6" id="modal-title">Title</h3>
<div className="mb-6">
<span className="text-xs text-[#78716C] block mb-1">Стоимость услуг</span>
<span className="font-serif text-xl text-[#2F4F38]" id="modal-price">Price</span>
</div>
<p className="text-sm text-[#57534E] leading-relaxed mb-8 font-light" id="modal-desc">
                        Description
                    </p>
<button className="w-full bg-[#2F4F38] text-white py-3 px-6 text-xs uppercase tracking-widest hover:bg-[#1A3322] transition-colors">
                        Связаться
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
