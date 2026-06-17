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
      

<nav className="border-b border-zinc-800/60 sticky top-0 bg-zinc-950/80 backdrop-blur-xl z-50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">KMS123</a>
<div className="hidden sm:flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Возможности</a>
<a className="hover:text-white transition-colors" href="#guide">Инструкция</a>
</div>
<a className="text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md transition-colors" href="#download">
                Скачать
            </a>
</div>
</nav>
<main className="flex-grow">

<section className="py-24 md:py-32 px-6 text-center relative overflow-hidden flex flex-col items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8 hover:bg-zinc-800 transition-colors" href="#download">
<iconify-icon className="text-blue-400" icon="solar:info-circle-linear"></iconify-icon>
                    Доступна новая версия 2024.1
                    <iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight max-w-4xl">
                    Универсальное решение для <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">вашей системы</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                    Надежный, быстрый и минималистичный инструмент для настройки операционных систем и офисных пакетов. Работает автономно и не требует установки.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="h-12 px-8 rounded-lg bg-white text-zinc-950 font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors w-full sm:w-auto" href="#download">
<iconify-icon icon="solar:download-minimalistic-linear" width="20"></iconify-icon>
                        Скачать бесплатно
                    </a>
<a className="h-12 px-8 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors w-full sm:w-auto" href="#guide">
                        Как использовать
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50 bg-zinc-950/50 relative" id="features">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Почему это удобно</h2>
<p className="text-zinc-400 max-w-xl">Чистый код, современный подход к архитектуре и отсутствие лишних компонентов в системе.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">В один клик</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Процесс полностью автоматизирован. Интерфейс сведен к минимуму для предотвращения ошибок пользователя.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Безопасный алгоритм</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Работает через штатные службы. Не модифицирует системные файлы и легко удаляется из системы.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Широкая поддержка</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Совместимость со всеми актуальными сборками ОС и офисными пакетами последних лет выпуска.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50" id="guide">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Инструкция по запуску</h2>
<p className="text-zinc-400">Три простых шага для начала работы с утилитой.</p>
</div>
<div className="space-y-4">
<div className="flex gap-6 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 items-start relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800"></div>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-sm font-medium shrink-0">1</div>
<div>
<h4 className="text-base font-medium text-white mb-2">Подготовка системы</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Встроенные механизмы защиты могут ложно реагировать на работу программы. Рекомендуется временно приостановить защиту в реальном времени перед загрузкой.</p>
</div>
</div>
<div className="flex gap-6 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 items-start relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800"></div>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-sm font-medium shrink-0">2</div>
<div>
<h4 className="text-base font-medium text-white mb-2">Распаковка файлов</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Загрузите архив по ссылке ниже. Для защиты от автоматического удаления в браузере, архив зашифрован. <br/><span className="inline-block mt-2 px-2 py-1 bg-zinc-800 rounded text-xs text-white">Пароль: 1234</span></p>
</div>
</div>
<div className="flex gap-6 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 items-start relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
<div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">3</div>
<div>
<h4 className="text-base font-medium text-white mb-2">Запуск</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Откройте исполняемый файл от имени Администратора. В появившемся окне выберите нужное действие и дождитесь завершения процесса (обычно занимает 10-15 секунд).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-950 to-zinc-900 flex justify-center" id="download">
<div className="max-w-md w-full">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Загрузка</h2>
<p className="text-sm text-zinc-400">Актуальная версия всегда доступна по прямой ссылке.</p>
</div>
<div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900">
<div className="p-6 rounded-xl bg-zinc-950 h-full flex flex-col">
<div className="flex items-start justify-between mb-8">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-300" icon="solar:zip-file-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">KMS_Release_v24.zip</div>
<div className="text-xs text-zinc-500 mt-1">Размер: 4.2 MB</div>
</div>
</div>
</div>
<div className="space-y-3 mt-auto">
<a className="h-12 w-full rounded-lg bg-white text-zinc-950 font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors" href="#">
<iconify-icon icon="solar:download-square-linear" width="20"></iconify-icon>
                                Скачать файл
                            </a>
<div className="text-center">
<span className="text-xs text-zinc-500 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-password-linear" width="14"></iconify-icon> Пароль к архиву: <span className="text-zinc-300 font-medium select-all">1234</span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-zinc-800/50 bg-zinc-950 text-center">
<div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
<div className="text-lg font-semibold tracking-tighter text-zinc-700 select-none">KMS123</div>
<p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                Сайт и предоставленные материалы несут исключительно информационный и ознакомительный характер. 
                Мы настоятельно рекомендуем использовать только лицензионное программное обеспечение, приобретенное у официальных вендоров. 
                Администрация ресурса не несет ответственности за действия пользователей и возможные последствия использования материалов сайта.
            </p>
<div className="flex gap-4 text-xs font-medium text-zinc-500 mt-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Отказ от ответственности</a>
</div>
</div>
</footer>

    </>
  );
}
