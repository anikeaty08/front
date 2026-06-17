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
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
<div className="uppercase tracking-[0.2em] text-xs font-semibold pointer-events-auto cursor-pointer">Dream Day</div>
<div className="hidden md:flex gap-8 pointer-events-auto">
<button className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">Menu</button>
</div>
</nav>

<header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 relative fade-in-up">
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-9">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight-custom leading-[0.9] text-[#111111] mb-8">
                    Створення весілля як кіношедевра в Італії: технічна точність, управління бюджетом та італійська візуальна естетика під ключ
                </h1>
</div>
<div className="md:col-span-3 flex flex-col justify-end h-full pb-2">
<p className="text-sm md:text-base text-[#111111]/80 leading-snug mb-8">
                    Організація преміальних весіль в Італії без турбот.
                </p>
<div className="flex flex-col gap-3">
<button className="w-full bg-[#111111] text-white py-4 px-6 text-xs uppercase tracking-widest hover:bg-[#222] transition-colors flex items-center justify-between group">
<span>Як ми працюємо</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full border border-[#111111]/20 text-[#111111] py-4 px-6 text-xs uppercase tracking-widest hover:border-[#111111] transition-colors flex items-center justify-between group">
<span>Шоуріл</span>
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 border-t border-[#E5E5E5]">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="order-2 lg:order-1 fade-in-up delay-100">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight-custom leading-[0.95] mb-8">
                    Emotion Meets Execution:<br/> The Minds Behind Dream Day
                </h2>

<div className="bg-white border border-[#E5E5E5] p-4 mb-8 flex items-center gap-4 max-w-sm rounded-sm cursor-pointer hover:border-gray-400 transition-colors group">
<button className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-white shrink-0 group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</button>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs uppercase tracking-wider font-medium">Listen to the vision</span>
<span className="text-xs text-gray-400">0:45</span>
</div>
<div className="h-4 flex items-center gap-[2px]">

<div className="w-[2px] bg-gray-300 h-[40%]"></div>
<div className="w-[2px] bg-gray-300 h-[70%]"></div>
<div className="w-[2px] bg-[#111111] h-[100%] playing-bar"></div>
<div className="w-[2px] bg-[#111111] h-[60%] playing-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-[2px] bg-[#111111] h-[80%] playing-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-[2px] bg-gray-300 h-[50%]"></div>
<div className="w-[2px] bg-gray-300 h-[30%]"></div>
<div className="w-[2px] bg-gray-300 h-[40%]"></div>
<div className="w-[2px] bg-gray-300 h-[20%]"></div>
<div className="w-[2px] bg-gray-300 h-[40%]"></div>
<div className="w-[2px] bg-gray-300 h-[30%]"></div>
<div className="w-[2px] bg-gray-300 h-[40%]"></div>
<div className="w-[2px] bg-gray-300 h-[100%]"></div> 
</div>
</div>
</div>
<div className="space-y-6 text-sm md:text-lg text-[#111111]/80 leading-relaxed font-light">
<p>We believe great weddings are equal parts emotion and execution. Every project begins with listening — to your love story, your vision, and your dreams.</p>
<p>From there, we combine local expertise, creative flair, and flawless coordination to build wedding experiences that not only look stunning, but feel perfectly you. Our process is personal, transparent, and stress-free — tailored to meet the unique needs of each couple and celebration.</p>
<p>We partner with adventurous couples, romantic dreamers, and busy professionals who value planning as peace of mind. Whether it's an intimate ceremony for two or a weekend celebration for 200, we bring the same level of care and excitement to every love story.</p>
</div>
</div>

<div className="order-1 lg:order-2 relative h-full min-h-[500px] fade-in-up">
<div className="absolute top-0 right-0 w-2/3 aspect-[3/4] z-10">
<img alt="Angelina" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://framerusercontent.com/images/SoSl3PaCXADSsmKqIQByHEXY18.png?width=622&amp;height=778"/>
<div className="absolute bottom-4 left-4 text-xs bg-white px-2 py-1 uppercase tracking-widest text-black">Angelina</div>
</div>
<div className="absolute bottom-0 left-0 w-7/12 aspect-[3/4] z-20 translate-y-12 md:translate-y-24">
<img alt="Eugenia" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border-4 border-[#FDFBF7]" src="https://framerusercontent.com/images/SUp9ozYNjWO2ub5fVnEVhcW9XXA.png?width=468&amp;height=584"/>
<div className="absolute bottom-4 left-4 text-xs bg-white px-2 py-1 uppercase tracking-widest text-black">Eugenia</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white text-[#111111] border-t border-[#E5E5E5]">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 fade-in-up">
<div>

<div className="w-full h-64 bg-neutral-100 mb-8 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-light text-xs uppercase tracking-widest">
                            [Atmospheric Detail Photo]
                        </div>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight-custom mb-4">Етапи нашої роботи</h2>
<p className="text-neutral-400 text-sm uppercase tracking-widest">Прозорий шлях до «кіношедевра»</p>
</div>
<div className="flex items-end">
<p className="text-sm md:text-base leading-relaxed text-neutral-600">
                        Ми віримо, що ідеальне весілля — це результат поєднання глибоких емоцій та бездоганого технічного виконання. Наш процес розроблений так, щоб ви відчували повний контроль та спокій на кожному кроці: від першої ідеї до фінального координаційного виходу. Ми відмовилися від абстрактних обіцянок на користь доказового планування.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 gap-16 mb-24">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8 fade-in-up">
<div className="md:col-span-1 text-xs text-neutral-400">01</div>
<div className="md:col-span-4">
<h3 className="text-xl font-medium leading-tight">Навіщо ви детально розписуєте кожен крок на сайті?</h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-neutral-600 leading-relaxed mb-6">Ми хочемо, щоб сайт працював як ваш персональний менеджер 24/7, заздалегідь відповідаючи на питання, які зазвичай виникають лише на консультаціях. Це економить ваш час і знімає невизначеність ще до початку співпраці.</p>
</div>
<div className="md:col-span-3">
<div className="aspect-video bg-[#F5F5F5] flex items-center justify-center border border-[#E5E5E5]">
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Screenshot Interface</span>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8 fade-in-up delay-100">
<div className="md:col-span-1 text-xs text-neutral-400">02</div>
<div className="md:col-span-4">
<h3 className="text-xl font-medium leading-tight">Як ви гарантуєте, що моє специфічне побажання буде почуте?</h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-neutral-600 leading-relaxed mb-6">Ми працюємо за принципом підтвердження запиту: фіксуємо ваше побажання в месенджері чи на пошті та демонструємо, як саме ми його реалізували (наприклад, через фото конкретної декорації чи пірамідки з шампанським, про яку ви мріяли).</p>
</div>
<div className="md:col-span-3">
<div className="aspect-video bg-[#F5F5F5] flex items-center justify-center border border-[#E5E5E5]">
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Screenshot Chat/Result</span>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8 fade-in-up delay-200">
<div className="md:col-span-1 text-xs text-neutral-400">03</div>
<div className="md:col-span-4">
<h3 className="text-xl font-medium leading-tight">Чи буде у мене доступ до управління бюджетом?</h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-neutral-600 leading-relaxed mb-6">Так, управління бюджетом та фінансова прозорість — наш пріоритет. Ви бачите реальні розрахунки та презентації під ваш запит, а ми професійно ведемо переговори з підрядниками, щоб оптимізувати ваші витрати.</p>
</div>
<div className="md:col-span-3">
<div className="aspect-video bg-[#F5F5F5] flex items-center justify-center border border-[#E5E5E5]">
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Screenshot Budget</span>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E5E5E5] pt-8 fade-in-up delay-300">
<div className="md:col-span-1 text-xs text-neutral-400">04</div>
<div className="md:col-span-4">
<h3 className="text-xl font-medium leading-tight">Чи допомагаєте ви з вибором локації, якщо я ще не визначився?</h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-neutral-600 leading-relaxed mb-6">Наші етапи включають персоналізований підбір локацій. Ми показуємо порівняння різних варіантів (наприклад, вілли на Комо чи шато у Франції), враховуючи ваш бюджет та кількість гостей, доки ви не знайдете «своє» місце.</p>
</div>
<div className="md:col-span-3">
<div className="aspect-video bg-[#F5F5F5] flex items-center justify-center border border-[#E5E5E5]">
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Screenshot Location</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">

<div className="p-8 border border-[#E5E5E5] bg-[#FDFBF7]">
<div className="w-12 h-12 bg-neutral-200 mb-6 overflow-hidden">
<div className="w-full h-full flex items-center justify-center text-neutral-400 text-[10px] uppercase">Photo</div>
</div>
<p className="text-sm italic leading-relaxed text-[#111111]/80">«Мене вразила системність та точність: я бачила кожен етап підготовки в реальному часі. Кожен мій запит у WhatsApp перетворювався на ідеально реалізовану деталь на весіллі».</p>
</div>

<div className="p-8 border border-[#E5E5E5] bg-[#FDFBF7]">
<div className="w-12 h-12 bg-neutral-200 mb-6 overflow-hidden">
<div className="w-full h-full flex items-center justify-center text-neutral-400 text-[10px] uppercase">Photo</div>
</div>
<p className="text-sm italic leading-relaxed text-[#111111]/80">«Жодних «сюрпризів» з бюджетом чи незрозумілих кроків. Дівчата забезпечили повну прозорість і взяли на себе всю складну логістику, дозволивши мені просто насолоджуватися процесом».</p>
</div>

<div className="p-8 border border-[#E5E5E5] bg-[#FDFBF7]">
<div className="w-12 h-12 bg-neutral-200 mb-6 overflow-hidden">
<div className="w-full h-full flex items-center justify-center text-neutral-400 text-[10px] uppercase">Photo</div>
</div>
<p className="text-sm italic leading-relaxed text-[#111111]/80">«Вони не просто обіцяють «красиве весілля», а показують, як воно створюється. Їхня експертність та увага до деталей відчувалися на кожному етапі, від першого мудборду до дня X».</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#111111] text-[#FDFBF7]">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="flex flex-col justify-between h-full fade-in-up">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight-custom mb-6">Зробіть перший крок до вашого весілля-кіношедевра</h2>
<p className="text-neutral-400 text-sm md:text-base mb-12 max-w-md leading-relaxed">
                        Залиште заявку на безкоштовну консультацію та отримайте після зідзвону персоналізовану презентацію-гайд вашого майбутнього свята.
                    </p>
</div>

<div className="bg-[#1A1A1A] border border-white/10 p-6 md:p-8 relative mt-8">
<div className="absolute -top-3 left-6 bg-[#FDFBF7] text-[#111111] text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">Welcome Offer</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="aspect-[4/5] bg-[#222] border border-white/5 flex items-center justify-center">
<span className="text-[10px] text-white/30 uppercase tracking-widest text-center px-4">Screenshot<br/>Presentation Cover</span>
</div>
<div className="space-y-4">
<h4 className="text-lg font-medium">Що всередині презентації:</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-400 font-light">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Добірка ексклюзивних локацій під ваші критерії</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400 font-light">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="solar:gallery-linear"></iconify-icon>
<span>Візуальний мудборд для натхнення</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400 font-light">
<iconify-icon className="text-white mt-0.5 shrink-0" icon="solar:wallet-linear"></iconify-icon>
<span>Попередній розрахунок бюджету</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-[#FDFBF7] text-[#111111] p-8 md:p-12 fade-in-up delay-100 h-fit self-center">
<form className="space-y-12">
<div className="space-y-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Ім'я</label>
<input className="custom-input w-full py-2 text-lg" placeholder="Ваше ім'я" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Телефон</label>
<input className="custom-input w-full py-2 text-lg" placeholder="+380 ..." type="tel"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Email</label>
<input className="custom-input w-full py-2 text-lg" placeholder="example@gmail.com" type="email"/>
</div>
</div>
<div className="flex items-start gap-3 mt-4">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none border border-neutral-300 transition-all checked:border-[#111111] checked:bg-[#111111]" id="terms" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100" icon="solar:check-linear" width="12"></iconify-icon>
</div>
<label className="text-xs text-neutral-400 cursor-pointer select-none" htmlFor="terms">Погоджуюсь з обробкою персональних даних</label>
</div>
<button className="w-full bg-[#111111] text-white py-5 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-between px-6 group" type="button">
<span>Отримати консультацію</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-[#111111] text-neutral-500 py-12 px-6 md:px-12 border-t border-white/10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xs uppercase tracking-widest">© 2024 Dream Day Italy</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
</div>
</div>
</footer>

    </>
  );
}
