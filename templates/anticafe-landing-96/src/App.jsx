import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Theme init
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}



      function openModal(){const e=document.getElementById('contact-modal'),t=document.getElementById('modal-backdrop'),n=document.getElementById('modal-panel');e.classList.remove('hidden'),void e.offsetWidth,t.classList.remove('opacity-0'),n.classList.remove('opacity-0','scale-95'),n.classList.add('opacity-100','scale-100'),document.body.style.overflow='hidden'}function closeModal(){const e=document.getElementById('contact-modal'),t=document.getElementById('modal-backdrop'),n=document.getElementById('modal-panel');t.classList.add('opacity-0'),n.classList.remove('opacity-100','scale-100'),n.classList.add('opacity-0','scale-95'),setTimeout(()=>{e.classList.add('hidden'),document.body.style.overflow=''},300)}function copyPhone(e){navigator.clipboard.writeText('+380962671412');const t=e.querySelector('.phone-status');t.textContent='Скопійовано!',t.classList.add('text-green-600','dark:text-green-400'),setTimeout(()=>{t.textContent='Натисніть, щоб скопіювати',t.classList.remove('text-green-600','dark:text-green-400')},2e3)}document.addEventListener('keydown',e=>{'Escape'===e.key&&closeModal()});
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
<div className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 shadow-2xl shadow-stone-200/20 dark:shadow-stone-950/40 rounded-full p-2 pl-3 pr-2 sm:pl-4 sm:pr-2 w-auto max-w-5xl mx-auto">

<a className="flex items-center gap-2.5 shrink-0 mr-2" href="#">
<img alt="Logo" className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 object-cover border border-stone-200 dark:border-stone-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f566ea9c-d08c-4f18-91eb-07ebbae27eec_320w.png"/>
<span className="text-lg font-bold text-stone-900 dark:text-white tracking-tight hidden sm:block">
            Дирижабль
          </span>
</a>

<div className="hidden md:flex items-center gap-1 bg-stone-100/80 dark:bg-stone-800/50 rounded-full px-2 py-1.5 border border-stone-200/50 dark:border-stone-700/50">
<a className="px-4 py-2 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-stone-700 rounded-full transition-all duration-200" href="#about">
            Про нас
          </a>
<a className="px-4 py-2 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-stone-700 rounded-full transition-all duration-200" href="#services">
            Послуги
          </a>
<a className="px-4 py-2 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-stone-700 rounded-full transition-all duration-200" href="#pricing">
            Ціни
          </a>
<a className="px-4 py-2 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-stone-700 rounded-full transition-all duration-200" href="#gallery">
            Галерея
          </a>
</div>

<div className="flex items-center gap-3 shrink-0 ml-2">
<a className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors" href="tel:+380962671412">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>+380 96 267 1412</span>
</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white transition-all shadow-lg shadow-stone-900/10 dark:shadow-none" href="javascript:void(0)" onclick="openModal()">
            Забронювати
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium mb-6 border border-amber-200/50 dark:border-amber-700/30">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600 dark:bg-amber-500"></span>
</span>
          Працюємо щодня
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-stone-900 dark:text-white mb-6 max-w-4xl mx-auto">
          Затишна атмосфера.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-600 dark:from-amber-400 dark:to-yellow-300">
            Сплачуй лише за час.
          </span>
</h1>
<p className="text-lg text-stone-600 dark:text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Антикафе у центрі Запоріжжя. Настільні ігри, PS4, кінотеатр та
          безлімітна кава. Ідеальне місце для роботи, відпочинку та теплих
          зустрічей.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-700 text-white font-medium hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/20 dark:shadow-amber-900/40 flex items-center justify-center gap-2" href="javascript:void(0)" onclick="openModal()">
<iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
            Забронювати місце
          </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-medium hover:bg-stone-50 dark:hover:bg-stone-700 transition-all flex items-center justify-center gap-2" href="#pricing">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
            Переглянути ціни
          </a>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-100/40 via-stone-100/40 to-transparent dark:from-amber-900/10 dark:via-stone-900/10 blur-3xl -z-10 rounded-[100%]"></div>
</section>

<section className="py-20 bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 transition-colors duration-300" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Що ми пропонуємо
          </h2>
<p className="mt-4 text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
            Все включено у вартість перебування. Жодних прихованих платежів.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-stone-800">
<div className="w-12 h-12 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gamepad-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-2">
              PlayStation 4
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              Дві консолі на величезних 50" екранах. Mortal Kombat, FIFA та інші
              хіти.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-stone-800">
<div className="w-12 h-12 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dice-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-2">
              Настільні ігри
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              Колекція з понад 70 ігор. Від класичної Мафії до складних
              стратегій.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-stone-800">
<div className="w-12 h-12 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-2">
              Приватний кінозал
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              Проектор, м'які дивани та атмосфера справжнього кінотеатру.
            </p>
</div>
<div className="group p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-stone-800">
<div className="w-12 h-12 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-amber-700 dark:text-amber-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cup-hot-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-2">
              Смаколики
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              Безлімітна кава, величезний вибір чаю, печиво та цукерки.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 dark:bg-stone-950 text-stone-200 border-t border-stone-800 dark:border-stone-900 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">
              Абсолютно безкоштовно
            </h2>
<p className="text-stone-400 mb-8 leading-relaxed">
              Сплачуючи за час, ви отримуєте повний доступ до інфраструктури
              закладу. Ми створили простір, де ні про що не треба турбуватися.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1" icon="solar:wifi-linear" width="20"></iconify-icon>
<div>
<span className="block text-white font-medium">
                    Швидкий Wi-Fi
                  </span>
<span className="text-xs text-stone-500">pass: privetik</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1" icon="solar:book-linear" width="20"></iconify-icon>
<div>
<span className="block text-white font-medium">Бібліотека</span>
<span className="text-xs text-stone-500">Книги для читання</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
<div>
<span className="block text-white font-medium">Co-working</span>
<span className="text-xs text-stone-500">
                    Тихі зони для роботи
                  </span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1" icon="solar:football-linear" width="20"></iconify-icon>
<div>
<span className="block text-white font-medium">Кікер</span>
<span className="text-xs text-stone-500">Настільний футбол</span>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 shadow-2xl">
<img alt="Interior" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/80 backdrop-blur border border-stone-600 text-stone-300 text-xs font-medium">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                Зона відпочинку
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brown-50 dark:bg-stone-900 transition-colors duration-300" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Прозорі тарифи
          </h2>
<p className="mt-4 text-stone-500 dark:text-stone-400">
            Оберіть зручний формат оплати для себе або своєї компанії.
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white dark:bg-stone-800/50 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm relative overflow-hidden transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-5">
<iconify-icon icon="solar:clock-circle-linear" width="100"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">
              Вільний візит
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
              Оплата за час перебування
            </p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-stone-900 dark:text-white">
                65
              </span>
<span className="text-lg text-stone-500 dark:text-stone-400">
                грн/год
              </span>
</div>
<p className="text-xs text-amber-700 dark:text-amber-500 font-medium mb-6">
              Перші 3 години. Далі — 35 грн/год
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-green-600 dark:text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                Стоп-чек будні: 300 грн
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-green-600 dark:text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                Стоп-чек вихідні: 400 грн
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-stone-400" icon="solar:info-circle-linear"></iconify-icon>
                Мінімальний чек: 50 грн
              </li>
</ul>
<a className="block w-full text-center py-2.5 rounded-lg border border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors text-sm font-medium" href="javascript:void(0)" onclick="openModal()">
              Завітати
            </a>
</div>

<div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-amber-200 dark:border-amber-900 shadow-md ring-1 ring-amber-100 dark:ring-amber-900/50 relative overflow-hidden transition-colors">
<div className="absolute top-0 right-0 bg-amber-700 dark:bg-amber-800 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              Популярне
            </div>
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">
              Оренда малої зали
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
              До 25 гостей. Для свят та вечірок.
            </p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-stone-900 dark:text-white">
                400
              </span>
<span className="text-lg text-stone-500 dark:text-stone-400">
                грн/год
              </span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-500 mb-6">
              Пн-Чт. Пт: 500 грн, Сб-Нд: 600 грн
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-amber-600 dark:text-amber-500" icon="solar:check-circle-linear"></iconify-icon>
                Приватний простір
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-amber-600 dark:text-amber-500" icon="solar:check-circle-linear"></iconify-icon>
                Знижка 10% від 3-х годин
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-amber-600 dark:text-amber-500" icon="solar:check-circle-linear"></iconify-icon>
                Знижка 20% від 5-ти годин
              </li>
</ul>
<a className="block w-full text-center py-2.5 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition-colors text-sm font-medium" href="javascript:void(0)" onclick="openModal()">
              Забронювати залу
            </a>
</div>

<div className="bg-white dark:bg-stone-800/50 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm relative overflow-hidden transition-colors">
<h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">
              Весь заклад
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
              До 40 гостей. Корпоративи та івенти.
            </p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-stone-900 dark:text-white">
                1000
              </span>
<span className="text-lg text-stone-500 dark:text-stone-400">
                грн/год
              </span>
</div>
<p className="text-xs text-stone-500 dark:text-stone-500 mb-6">
              Пн-Чт. Вихідні: 1500-2000 грн
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-green-600 dark:text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                Заклад лише для вас
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-green-600 dark:text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                Адміністратор у допомогу
              </li>
<li className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
                Також є абонементи
              </li>
</ul>
<a className="block w-full text-center py-2.5 rounded-lg border border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors text-sm font-medium" href="javascript:void(0)" onclick="openModal()">
              Обговорити деталі
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white mb-6">
              Для кого ми?
            </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500 shrink-0">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 dark:text-stone-100">
                    Компанії друзів
                  </h4>
<p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    Веселі посиденьки, мафія, турніри з FIFA.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-700 dark:text-blue-400 shrink-0">
<iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 dark:text-stone-100">
                    Пари
                  </h4>
<p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    Романтичні побачення з кіно та смачним чаєм.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-700 dark:text-emerald-500 shrink-0">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 dark:text-stone-100">
                    Фрілансери та студенти
                  </h4>
<p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    Спокійна атмосфера вдень для роботи та навчання.
                  </p>
</div>
</div>
</div>
</div>
<div className="bg-stone-50 dark:bg-stone-800 rounded-2xl p-8 border border-stone-100 dark:border-stone-700 flex flex-col justify-center items-center text-center transition-colors">
<iconify-icon className="text-stone-400 dark:text-stone-500 mb-4" icon="solar:gamepad-minimalistic-linear" width="48"></iconify-icon>
<h3 className="text-xl font-medium text-stone-900 dark:text-white mb-2">
              Фанат настолок?
            </h3>
<p className="text-sm text-stone-500 dark:text-stone-400 mb-6 max-w-xs">
              Приєднуйся до нашого Telegram-чату, знаходь компанію для ігор та
              слідкуй за івентами.
            </p>
<a className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors" href="https://t.me/DirigeableZP" target="_blank">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
              Перейти в Telegram
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brown-50 dark:bg-stone-900 transition-colors duration-300" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10 flex justify-between items-end">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Атмосфера
          </h2>
<span className="text-sm text-stone-500 dark:text-stone-400 hidden sm:block">
            Більше фото в Instagram @dirigeable.zp
          </span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group border dark:border-stone-700">
<img alt="Team working" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="relative rounded-xl overflow-hidden group border dark:border-stone-700">
<img alt="Gaming" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative rounded-xl overflow-hidden group border dark:border-stone-700">
<img alt="Esports" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="col-span-2 relative rounded-xl overflow-hidden group border dark:border-stone-700">
<img alt="Party" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 transition-colors duration-300" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white mb-6">
              Знайдіть нас
            </h2>
<p className="text-stone-500 dark:text-stone-400 mb-8">
              Ми знаходимось у самому серці Запоріжжя, біля універмагу
              "Україна". Заходьте на каву!
            </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4 items-start">
<iconify-icon className="text-amber-700 dark:text-amber-500 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h5 className="text-sm font-medium text-stone-900 dark:text-white">
                    Адреса
                  </h5>
<p className="text-sm text-stone-600 dark:text-stone-400">
                    Проспект Соборний, 145в, Запоріжжя
                  </p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-amber-700 dark:text-amber-500 mt-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div>
<h5 className="text-sm font-medium text-stone-900 dark:text-white">
                    Телефон
                  </h5>
<a className="text-sm text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors" href="tel:+380962671412">
                    +380 96 267 1412
                  </a>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-amber-700 dark:text-amber-500 mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<h5 className="text-sm font-medium text-stone-900 dark:text-white">
                    Години роботи
                  </h5>
<p className="text-sm text-stone-600 dark:text-stone-400">
                    Пн-Нд: 12:00 - 22:00 (уточнюйте у воєнний час)
                  </p>
</div>
</div>
</div>

<div className="w-full h-80 bg-stone-100 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700">
<iframe allowfullscreen="" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 dark:invert dark:grayscale dark:brightness-75 dark:hover:grayscale-0 dark:hover:brightness-100 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.566898860492!2d35.13840631563812!3d47.82914097920038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc6736480b0001%3A0x6b1070e304620021!2sSobornyi%20Ave%2C%20145%D0%92%2C%20Zaporizhzhia%2C%20Zaporizhia%20Oblast%2C%2069000!5e0!3m2!1sen!2sua!4v1698765432100!5m2!1sen!2sua" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

</div>
</div>
</section>

<footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 pt-16 pb-8 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
<div className="col-span-1 lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-amber-700 dark:text-amber-500" icon="solar:rocket-2-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-stone-900 dark:text-white">
                ДИРИЖАБЛЬ
              </span>
</div>
<p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
              Затишний простір для відпочинку, ігор та роботи у самому серці
              Запоріжжя. Сплачуй лише за час — все інше безкоштовно.
            </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-all" href="https://instagram.com/dirigeable.zp" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all" href="https://t.me/DirigeableZP" target="_blank">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1 lg:col-span-2 lg:col-start-6">
<h3 className="font-semibold text-stone-900 dark:text-white mb-4">
              Меню
            </h3>
<ul className="space-y-3">
<li>
<a className="text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors" href="#about">
                  Про нас
                </a>
</li>
<li>
<a className="text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors" href="#services">
                  Послуги
                </a>
</li>
<li>
<a className="text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors" href="#pricing">
                  Ціни
                </a>
</li>
</ul>
</div>
<div className="col-span-1 lg:col-span-3">
<h3 className="font-semibold text-stone-900 dark:text-white mb-4">
              Контакти
            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-stone-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-stone-500 dark:text-stone-400">
                  пр. Соборний, 145в, Запоріжжя
                </span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<a className="text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors" href="tel:+380962671412">
                  +380 96 267 1412
                </a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-stone-400" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span className="text-stone-500 dark:text-stone-400">
                  12:00 - 22:00

                  <span className="text-xs opacity-70">Працюємо щодня</span>
</span>
</li>
</ul>
</div>
<div className="col-span-1 lg:col-span-3">
<h3 className="font-semibold text-stone-900 dark:text-white mb-4">
              Бронювання
            </h3>
<p className="text-stone-500 dark:text-stone-400 text-sm mb-4">
              Забронюйте столик або кімнату заздалегідь, щоб гарантувати місце.
            </p>
<a className="inline-flex items-center justify-center px-4 py-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors w-full sm:w-auto" href="javascript:void(0)" onclick="openModal()">
              Забронювати зараз
            </a>
</div>
</div>
<div className="border-t border-stone-200 dark:border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 dark:text-stone-500">
<p>© 2023 Антикафе Дирижабль. Всі права захищено.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors" href="#">
              Правила закладу
            </a>
<a className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors" href="#">
              Публічна оферта
            </a>
<a className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors" href="#">
              Конфіденційність
            </a>
</div>
</div>
</div>
</footer>
<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="contact-modal" role="dialog">
<div className="fixed inset-0 bg-stone-900/75 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="closeModal()"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white dark:bg-stone-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-stone-200 dark:border-stone-800 opacity-0 scale-95" id="modal-panel">
<div className="absolute right-4 top-4">
<button className="rounded-lg p-2 text-stone-400 hover:text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus:outline-none" onclick="closeModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 sm:p-8">
<div className="text-center mb-8">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4 text-amber-600 dark:text-amber-500">
<iconify-icon icon="solar:chat-round-line-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold leading-6 text-stone-900 dark:text-white" id="modal-title">
                  Зв'язатись з нами
                </h3>
<p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                  Оберіть зручний спосіб зв'язку або завітайте до нас.
                </p>
</div>
<div className="space-y-3">
<a className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all group" href="https://instagram.com/dirigeable.zp" target="_blank">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 dark:text-white truncate">
                      Instagram
                    </p>
<p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                      @dirigeable.zp
                    </p>
</div>
<iconify-icon className="text-stone-400 group-hover:text-amber-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all group" href="https://t.me/DirigeableZP" target="_blank">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 dark:text-white truncate">
                      Telegram Chat
                    </p>
<p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                      Спільнота гравців
                    </p>
</div>
<iconify-icon className="text-stone-400 group-hover:text-amber-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="relative flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all group cursor-pointer" onclick="copyPhone(this)">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 dark:text-white truncate">
                      +380 96 267 1412
                    </p>
<p className="phone-status text-xs text-stone-500 dark:text-stone-400 truncate">
                      Натисніть, щоб скопіювати
                    </p>
</div>
<iconify-icon className="text-stone-400 group-hover:text-amber-500 transition-colors" icon="solar:copy-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-stone-900 dark:text-white">
                      Адреса
                    </p>
<p className="text-xs text-stone-500 dark:text-stone-400">
                      пр. Соборний, 145в, Запоріжжя
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
