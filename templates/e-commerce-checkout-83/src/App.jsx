import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-gray-100 py-3">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-6">
<div className="text-3xl font-semibold tracking-tight">Logo</div>
<div className="hidden md:flex items-center gap-6 text-base whitespace-nowrap">
<div className="bg-gray-50 px-4 py-2 rounded-md text-gray-700">Нижний Новгород</div>
<button className="text-gray-700 hover:text-black transition">Каталог</button>
</div>
<div className="flex-1 w-full max-w-xl hidden sm:flex items-center h-12 bg-gray-50 rounded-md overflow-hidden">
<div className="pl-4 text-gray-400">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 px-4 text-base outline-none placeholder:text-gray-400" placeholder="Поиск" type="text"/>
<button className="bg-gray-400/20 text-gray-600 px-8 h-full font-medium transition hover:bg-gray-400/30">Искать</button>
</div>
<div className="hidden lg:flex items-center gap-4 whitespace-nowrap">
<a className="bg-[#ff6b2b] text-white px-5 py-2.5 rounded-md font-medium text-base transition hover:bg-[#e85b1c]" href="tel:88005553535">8-800-555-35-35</a>
<button className="bg-gray-50 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
<button className="bg-gray-50 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</button>
</div>

<button className="lg:hidden p-2 text-gray-600">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 py-10">

<nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
<a className="hover:text-gray-600 transition" href="#">Главная</a>
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
<span className="text-gray-600">Корзина</span>
</nav>

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight mb-3">Оформление заявки</h1>
<button className="text-sm text-gray-500 underline underline-offset-4 hover:text-gray-900 transition">Очистить корзину</button>
</div>

<div className="flex flex-col lg:flex-row gap-8 items-start">

<div className="flex-1 w-full flex flex-col gap-4">

<div className="bg-gray-50/80 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
<div className="space-y-4 w-full">
<h3 className="text-xl font-medium tracking-tight text-gray-900">Michelin Pilot Road</h3>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full text-sm text-gray-400">
<div className="flex flex-wrap items-center gap-x-8 gap-y-2">
<span>Артикул: 07125-31215</span>
<span>Склад: Москва</span>
<span>Доставка: 12 дней</span>
</div>
<span className="text-base font-medium text-gray-900 whitespace-nowrap">18 932.34 ₽</span>
</div>
</div>
</div>

<div className="bg-gray-50/80 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
<div className="space-y-4 w-full">
<h3 className="text-xl font-medium tracking-tight text-gray-900">Навзвание запчасти</h3>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full text-sm text-gray-400">
<div className="flex flex-wrap items-center gap-x-8 gap-y-2">
<span>Артикул: 07125-31215</span>
<span>Склад: Москва</span>
<span>Доставка: 12 дней</span>
</div>
<span className="text-base font-medium text-gray-900 whitespace-nowrap">2000.34 ₽</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-80 flex flex-col gap-4">

<div className="relative w-full">
<select className="w-full bg-gray-50/80 appearance-none border-none p-4 rounded-lg text-base pr-12 focus:ring-2 focus:ring-[#ff6b2b] outline-none text-gray-800 cursor-pointer">
<option>Доставка</option>
<option>Самовывоз</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-gray-50/80 rounded-lg p-6">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-1">Итого:</h2>
<div className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">20 932.64 ₽</div>
<div className="space-y-3 text-sm mb-8">
<div className="flex justify-between items-center">
<span className="text-gray-400">Количество</span>
<span className="text-gray-600">2 шт</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400">Вес</span>
<span className="text-gray-600">8.37 кг</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400">Доставка:</span>
<span className="text-gray-600">12 дней</span>
</div>
</div>
<button className="w-full bg-[#ff6b2b] text-white py-3.5 rounded-md font-medium text-base transition hover:bg-[#e85b1c]">
                        Оформить заявку
                    </button>
</div>
</div>
</div>
</main>

<footer className="bg-[#f7f7f7] pt-16 pb-8 mt-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
<div>
<div className="text-4xl font-semibold tracking-tight text-black mb-3">Logo</div>
<div className="text-base text-gray-600">Комплектующие для спецтехники</div>
</div>
<div className="max-w-md">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Подпишитесь на рассылку о новых поступлениях на склад, скидках и акциях</h3>
<p className="text-base text-gray-400 mb-6">Узнавайте о новинках первыми!</p>
<form className="flex flex-col mb-4">
<input className="bg-white px-5 py-4 rounded-t-lg border-b border-gray-100 outline-none focus:ring-0 text-base placeholder:text-gray-400" placeholder="Ваша почта" required="" type="email"/>
<button className="bg-[#ff6b2b] text-white py-4 rounded-b-lg font-medium text-base transition hover:bg-[#e85b1c]" type="submit">
                            Подписаться
                        </button>
</form>
<p className="text-xs text-gray-400 leading-relaxed">
                        Нажимая кнопку "Подписаться", вы соглашаетесь на 
                        <a className="underline underline-offset-2 hover:text-gray-600 transition" href="#">отправку сообщений и обработку персональных данных</a>.
                    </p>
</div>
</div>
<hr className="border-gray-200 mb-12"/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

<div className="space-y-4">
<a className="block text-2xl font-medium tracking-tight text-gray-900" href="tel:88005506474">8(800) 550-64-74</a>
<div className="text-sm text-gray-400">пн — пт с 9:00 до 18:00</div>
<div className="text-base text-gray-400 pt-2 space-y-3">
<a className="block hover:text-gray-800 transition" href="mailto:help@impart.online">help@impart.online</a>
<span className="block">г. Екатеринбург, ул. Полежаевой,<br/>10А, 5 этаж.</span>
</div>
</div>

<div className="space-y-3.5 text-base">
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Акции</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">О компании</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Реквизиты</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Гарантия</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Стать партнером</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Partnership</a>
</div>

<div className="space-y-3.5 text-base">
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Акционные товары</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Гидравлика</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Двигатель</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Кабина</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Крепеж</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Ходовая</a>
</div>

<div className="space-y-3.5 text-base">
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Рабочее оборудование</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Радиатор</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">РВД</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Режущий инструмент</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Силовая передача</a>
<a className="block text-gray-800 hover:text-[#ff6b2b] transition" href="#">Применяемость</a>
</div>
</div>
<hr className="border-gray-200 mb-8"/>

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-xs text-gray-400">
<div className="max-w-2xl leading-relaxed">
                    © 2026 Все права защищены. Мы используем cookies для сбора обезличенных персональных данных. Оставаясь на сайте, вы соглашаетесь на сбор таких данных.
                </div>
<div className="flex flex-wrap gap-x-8 gap-y-3">
<a className="hover:text-gray-600 transition" href="#">Политика конфиденциальности</a>
<a className="hover:text-gray-600 transition" href="#">Договор-оферта</a>
<a className="hover:text-gray-600 transition" href="#">Пользовательское соглашение</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
