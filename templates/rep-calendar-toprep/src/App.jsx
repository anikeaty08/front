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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<header className="border-b border-gray-100">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<a className="text-2xl font-semibold tracking-tight text-indigo-600" href="https://toprep.space/">toprep</a>
</div>
<div className="flex items-center space-x-4">
<a className="inline-flex items-center justify-center hover:bg-indigo-700 text-sm font-medium text-white bg-indigo-600 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">Войти</a>
</div>
</div>
</div>
</header>
<div className="flex flex-col md:flex-row min-h-screen">

<aside className="w-full md:w-64 bg-white border-r border-gray-100 p-6">
<div className="mb-8">
<h3 className="uppercase text-xs font-semibold text-gray-500 tracking-wider mb-4">Общее</h3>
<ul className="space-y-2">
<li className=""><a className="text-sm text-indigo-600 font-medium" href="#">Introduction</a></li>
<li className=""><a className="text-sm text-gray-700 hover:text-indigo-600" href="#">Account Setup</a></li>
<li className=""><a className="text-sm text-gray-700 hover:text-indigo-600" href="#">Navigating the Platform</a></li>
</ul>
</div>
<div className="mb-8">
<h3 className="uppercase text-xs font-semibold text-gray-500 tracking-wider mb-4">Для репетитора</h3>
<ul className="space-y-2">
<li className=""><a className="hover:text-indigo-600 text-sm text-gray-700" href="#">Дасшборд</a></li>
<li className=""><a className="hover:text-indigo-600 text-sm text-gray-700" href="#">Календарь</a></li>
<li className=""><a className="hover:text-indigo-600 text-sm text-gray-700" href="#">Студенты</a></li>
</ul>
</div>
<div className="">
<h3 className="uppercase text-xs font-semibold text-gray-500 tracking-wider mb-4">Для ученика</h3>
<ul className="space-y-2">
<li className=""><a className="text-sm text-gray-700 hover:text-indigo-600" href="#">Authentication</a></li>
<li className=""><a className="text-sm text-gray-700 hover:text-indigo-600" href="#">REST API</a></li>
<li className=""><a className="text-sm text-gray-700 hover:text-indigo-600" href="#">Webhooks</a></li>
</ul>
</div>
</aside>

<main className="flex-1 md:p-10 bg-gray-50 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-3xl">
<div className="flex items-center mb-2">
<span className="text-sm text-gray-500">Начало работы</span>
<iconify-icon className="text-gray-400 text-xs mx-2" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-indigo-600">Календарь</span>
</div>
<h1 className="text-3xl font-semibold tracking-tight mb-6">Календарь репетитора</h1>
<div className="prose max-w-none">
<p className="text-lg text-gray-600 mb-6">
        Календарь — это сердце вашего расписания. Здесь вы управляете всеми занятиями,
        отслеживаете встречи и контролируете учебный процесс.
      </p>

<div className="my-6">
<img alt="Календарь" className="object-cover border rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bedeb5b0-604a-49e6-9051-954f542bb4f4_1600w.jpg"/>
</div>
<h2 className="text-xl font-semibold tracking-tight mt-8 mb-4">Добавление занятий</h2>
<p className="mb-4 text-sm text-gray-800 leading-relaxed">
        Вы можете быстро создать как одно занятие, так и сразу серию встреч.
        Все занятия, назначенные через предмет, автоматически отображаются в календаре.
      </p>

<div className="my-6">
<img alt="Добавление занятия" className="object-cover bg-center border rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a83aa5b-384e-4c4b-af5f-4ef6e8bec73d_1600w.png"/>
</div>
<h3 className="text-lg font-medium mt-6 mb-3">Создание серии занятий</h3>
<p className="text-sm text-gray-700 mb-4">
        Чтобы сэкономить время, вы можете задать сразу несколько повторяющихся занятий:
      </p>
<ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-6">
<li className="">Введите название занятия</li>
<li className="">Выберите дату, время начала и окончания (часовой пояс учитывается автоматически)</li>
<li className="">Выберите студента</li>
<li className="">Настройте параметры занятия</li>
<li className="">Определите условия повторения</li>
</ol>

<div className="my-6">
<img alt="Настройка времени" className="bg-center object-cover border rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f110fb0e-95db-4494-adce-c932b4be600d_1600w.png"/>
</div>

<div className="my-6">
</div>
<div className="bg-green-50 border border-green-100 rounded-lg p-4 my-6">
<p className="text-green-700 text-sm">
          Готово! После настройки у вас появится полноценное расписание занятий.
        </p>
</div>
<h3 className="text-lg font-medium mt-6 mb-3">Создание одного занятия</h3>
<p className="text-sm text-gray-700 mb-4">
        Если вам нужно провести разовое занятие — просто создайте одиночную встречу,
        указав основные параметры.
      </p>

<div className="my-6">
<img alt="Одиночное занятие" className="object-cover bg-center border rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d46e73a-9dc4-40cb-82a1-29b67bacc9a1_1600w.png"/>
</div>
<h2 className="text-xl font-semibold tracking-tight mt-8 mb-4">Работа с событиями</h2>
<p className="mb-4 text-sm text-gray-800 leading-relaxed">
        Нажав на любое событие в календаре, вы можете:
      </p>
<ul className="space-y-2 mb-6 text-sm text-gray-700">
<li className="">• Просмотреть подробную информацию о занятии</li>
<li className="">• Перейти в звонок</li>
<li className="">• Открыть интерактивную доску</li>
</ul>

<div className="my-6">
<img alt="Карточка события" className="object-cover bg-center border rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c53cb853-dc07-4fce-b994-d23f40139b2d_1600w.png"/>
</div>
<h2 className="text-xl font-semibold tracking-tight mt-8 mb-4">Подключение учеников</h2>
<p className="mb-4 text-sm text-gray-800 leading-relaxed">
        Вы можете пригласить на урок даже незарегистрированного ученика.
      </p>
<ul className="space-y-2 mb-6 text-sm text-gray-700">
<li className="">• Нажмите кнопку подключения</li>
<li className="">• Скопируйте ссылку</li>
<li className="">• Отправьте её ученику</li>
</ul>

<div className="my-6">
<img alt="Приглашение ученика" className="object-cover bg-center border rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64d2787f-1957-4206-8f94-3187fee14551_1600w.png"/>
</div>
<h2 className="text-xl font-semibold tracking-tight mt-8 mb-4">Редактирование занятия</h2>
<p className="mb-6 text-sm text-gray-800 leading-relaxed">
        Вы всегда можете изменить описание урока, добавить учебные материалы или важные заметки.
        Это помогает лучше подготовиться к занятию и держать всё необходимое под рукой.
      </p>

<div className="my-6">
</div>
<div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 my-8">
<h3 className="font-medium text-indigo-700 mb-2">Совет</h3>
<p className="text-indigo-600 text-sm">
          Регулярно обновляйте расписание и материалы — это поможет вам работать эффективнее
          и обеспечит лучший опыт для ваших учеников.
        </p>
</div>
</div>
</div>
</main>
</div>
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-4">Platform</h3>
<ul className="space-y-2">
<li><a className="text-sm text-gray-400 hover:text-white" href="#">Features</a></li>
<li><a className="text-sm text-gray-400 hover:text-white" href="#">Pricing</a></li>
<li className=""><a className="text-sm text-gray-400 hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-4">Resources</h3>
<ul className="space-y-2">
<li className=""><a className="text-sm text-gray-400 hover:text-white" href="#">Wiki</a></li>
<li className=""><a className="text-sm text-gray-400 hover:text-white" href="#">API Reference</a></li>
<li><a className="text-sm text-gray-400 hover:text-white" href="#">Support Center</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="text-sm text-gray-400 hover:text-white" href="#">About Toprep</a></li>
<li><a className="text-sm text-gray-400 hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight mb-4">Legal</h3>
<ul className="space-y-2">
<li><a className="text-sm text-gray-400 hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-400 hover:text-white" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
<p className="text-sm text-gray-400">© 2024 Toprep Space. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:discord-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
