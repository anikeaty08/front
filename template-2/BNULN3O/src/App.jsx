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
      

<header className="bg-white shadow">
<div className="container mx-auto flex justify-between items-center py-5 px-4">
<h1 className="text-2xl font-bold text-indigo-700">Акселератор Креативных Индустрий</h1>
<nav className="space-x-6">
<a className="text-gray-700 hover:text-indigo-600" href="#">Главная</a>
<a className="text-gray-700 hover:text-indigo-600" href="#projects">Проекты</a>
<a className="text-gray-700 hover:text-indigo-600" href="#teams">Команды</a>
<a className="text-gray-700 hover:text-indigo-600" href="#investors">Инвесторы</a>
<a className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" href="#join">Войти</a>
</nav>
</div>
</header>

<section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
<div className="md:w-1/2">
<h2 className="text-4xl font-extrabold text-gray-900 mb-4">Создавайте. Вдохновляйте. Инвестируйте.</h2>
<p className="text-lg text-gray-600 mb-6">Платформа для развития креативных проектов, объединения талантливых команд и взаимодействия с инвесторами любого уровня.</p>
<a className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700" href="#join">Присоединиться к акселератору</a>
</div>
<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
<img alt="Creative Team" className="rounded-lg shadow-md w-full max-w-md" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" />
</div>
</section>

<section className="bg-white py-12">
<div className="container mx-auto px-4">
<h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Как это работает?</h3>
<div className="grid md:grid-cols-4 gap-8">
<div className="bg-gray-100 p-6 rounded shadow">
<div className="text-indigo-600 mb-2">
<svg className="w-8 h-8 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"></path><path d="M12 12V4"></path></svg>
</div>
<h4 className="font-semibold mb-2">Создавайте проекты</h4>
<p className="text-gray-600">Запускайте креативные идеи и представляйте их сообществу.</p>
</div>
<div className="bg-gray-100 p-6 rounded shadow">
<div className="text-indigo-600 mb-2">
<svg className="w-8 h-8 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94"></path><path d="M9.69 8h11.48"></path></svg>
</div>
<h4 className="font-semibold mb-2">Формируйте команды</h4>
<p className="text-gray-600">Находите единомышленников и объединяйтесь для реализации проектов.</p>
</div>
<div className="bg-gray-100 p-6 rounded shadow">
<div className="text-indigo-600 mb-2">
<svg className="w-8 h-8 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2"></path><path d="M12 17v1a3 3 0 01-6 0v-1"></path></svg>
</div>
<h4 className="font-semibold mb-2">Привлекайте и поддерживайте инвесторов</h4>
<p className="text-gray-600">Инвесторы могут выбирать проекты и поддерживать команды любого уровня.</p>
</div>
<div className="bg-gray-100 p-6 rounded shadow">
<div className="text-indigo-600 mb-2">
<svg className="w-8 h-8 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h4 className="font-semibold mb-2">Развивайтесь вместе</h4>
<p className="text-gray-600">Участвуйте в акселераторе, получайте менторство и доступ к образовательным программам.</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-4 py-16" id="projects">
<h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Топ-Креативные проекты</h3>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded shadow p-6 flex flex-col">
<img alt="Project" className="rounded mb-4" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" />
<h4 className="font-semibold text-lg mb-2">Арт-платформа "Гармония"</h4>
<p className="text-gray-600 flex-1">Онлайн-галерея для молодых художников и коллекционеров современного искусства.</p>
<div className="mt-4 flex items-center justify-between">
<span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded">Искусство</span>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Инвестировать</button>
</div>
</div>
<div className="bg-white rounded shadow p-6 flex flex-col">
<img alt="Project" className="rounded mb-4" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" />
<h4 className="font-semibold text-lg mb-2">VR-театр "Future Scene"</h4>
<p className="text-gray-600 flex-1">Интерактивные постановки в виртуальной реальности для зрителей по всему миру.</p>
<div className="mt-4 flex items-center justify-between">
<span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded">Технологии</span>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Инвестировать</button>
</div>
</div>
<div className="bg-white rounded shadow p-6 flex flex-col">
<img alt="Project" className="rounded mb-4" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" />
<h4 className="font-semibold text-lg mb-2">Музыкальный стартап "SoundBridge"</h4>
<p className="text-gray-600 flex-1">Платформа для коллаборации музыкантов и саунд-дизайнеров со всего мира.</p>
<div className="mt-4 flex items-center justify-between">
<span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded">Музыка</span>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Инвестировать</button>
</div>
</div>
</div>
</section>

<section className="bg-gray-100 py-16" id="teams">
<div className="container mx-auto px-4">
<h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Команды и участники</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded shadow p-6">
<h4 className="font-semibold mb-2">Команда "Imaginers"</h4>
<p className="text-gray-600 mb-4">Мультидисциплинарная команда: дизайнеры, маркетологи, IT-разработчики. Открыты для новых участников!</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Присоединиться</button>
</div>
<div className="bg-white rounded shadow p-6">
<h4 className="font-semibold mb-2">Команда "ArtConnect"</h4>
<p className="text-gray-600 mb-4">Создатели арт-платформы для онлайн-выставок. Ищем инвесторов и медиа-экспертов.</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Присоединиться</button>
</div>
<div className="bg-white rounded shadow p-6">
<h4 className="font-semibold mb-2">Команда "SoundWaves"</h4>
<p className="text-gray-600 mb-4">Музыканты и продюсеры, открыты для сотрудничества с визуальными художниками.</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm">Присоединиться</button>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-block text-indigo-600 underline" href="#">Посмотреть все команды</a>
</div>
</div>
</section>

<section className="container mx-auto px-4 py-16" id="investors">
<h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Для инвесторов</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded shadow p-6 flex flex-col">
<h4 className="font-semibold mb-2">Частные инвесторы</h4>
<p className="text-gray-600 flex-1">Поддерживайте проекты на ранних этапах, получайте эксклюзивный доступ к инновациям.</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm mt-4">Стать инвестором</button>
</div>
<div className="bg-white rounded shadow p-6 flex flex-col">
<h4 className="font-semibold mb-2">Венчурные фонды</h4>
<p className="text-gray-600 flex-1">Инвестируйте в масштабируемые проекты и развивайте креативные индустрии вместе с нами.</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm mt-4">Стать инвестором</button>
</div>
<div className="bg-white rounded shadow p-6 flex flex-col">
<h4 className="font-semibold mb-2">Корпоративные партнеры</h4>
<p className="text-gray-600 flex-1">Станьте стратегическим партнером и получите доступ к талантливым командам и инновациям.</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm mt-4">Стать инвестором</button>
</div>
</div>
</section>

<section className="bg-indigo-700 py-16" id="join">
<div className="container mx-auto px-4 text-center">
<h3 className="text-2xl font-bold text-white mb-4">Готовы присоединиться?</h3>
<p className="text-indigo-200 mb-6">Заполните профиль участника, создайте проект или найдите свою команду!</p>
<a className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-indigo-100" href="#">Заполнить анкету</a>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-8 mt-8">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
        © 2024 Акселератор Креативных Индустрий
      </div>
<div className="space-x-6">
<a className="hover:text-white" href="#">Конфиденциальность</a>
<a className="hover:text-white" href="#">Контакты</a>
</div>
</div>
</footer>

    </>
  );
}
