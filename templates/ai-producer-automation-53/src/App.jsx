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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] right-[-10%] w-[60%] aspect-square rounded-full blur-[120px] mix-blend-screen bg-blue-900/20"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[70%] aspect-square rounded-full blur-[150px] mix-blend-screen bg-cyan-900/10"></div>
<div className="absolute top-[40%] left-[20%] w-[40%] aspect-square rounded-full blur-[100px] mix-blend-screen bg-blue-900/10"></div>
</div>
<main className="md:px-8 md:py-12 lg:py-16 flex flex-col gap-6 md:gap-8 w-full max-w-6xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 gap-x-6 gap-y-6">

<header className="flex items-center justify-between w-full mb-4 lg:mb-8">
<div className="md:text-2xl select-none flex gap-1 text-xl font-normal tracking-tighter gap-x-1 gap-y-1 items-center">
                A<span className="text-blue-400 opacity-80">IVA</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/[0.02] backdrop-blur-sm border-white/10">
<div className="w-1.5 h-1.5 rounded-full relative bg-blue-400">
<div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-blue-400"></div>
</div>
<span className="text-xs font-light tracking-wide text-indigo-400">Открыт к проектам</span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">

<section className="md:col-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md p-6 lg:p-10 flex flex-col justify-between group transition-colors hover:bg-white/[0.03] hover:border-white/10">
<div className="space-y-4 max-w-2xl">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-light mb-2 border-white/5 bg-white/5 text-indigo-400">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
                        AI-продюсер &amp; Архитектор автоматизаций
                    </div>
<h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-[1.1] text-indigo-100">
                        Айдар
                    </h1>
<p className="text-base md:text-lg font-light leading-relaxed max-w-xl text-indigo-400">
                        Экономлю бизнесу до <span className="font-normal text-indigo-200">30% времени команды</span> через внедрение ИИ-агентов и создание ИИ-контента нового поколения.
                    </p>
</div>
</section>

<a className="md:col-span-1 rounded-3xl border backdrop-blur-md p-6 lg:p-10 flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-pointer relative overflow-hidden border-blue-500/20 default hover:border-blue-400/40 hover:bg-blue-900/30" href="#">
<div className="group-hover:opacity-100 transition-opacity duration-500 default cursor-pointer opacity-0 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/t.me/aiva_vse'" role="button"></div>
<div className="flex group-hover:scale-110 transition-transform duration-300 text-blue-400 bg-blue-500/10 w-16 h-16 border-blue-500/20 border rounded-2xl mb-4 items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight mb-2 text-indigo-200">AI, всё!</h3>
<p className="text-sm font-light text-indigo-400">Авторский Telegram-канал</p>
</a>

<section className="md:col-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md p-6 lg:p-10 flex flex-col group transition-colors hover:bg-white/[0.03] hover:border-white/10">
<div className="flex justify-between items-start mb-8">
<div className="">
<h2 className="text-xl md:text-2xl font-normal tracking-tight mb-2 flex items-center gap-2 text-indigo-200">
<iconify-icon className="text-indigo-500" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                            Автоматизация
                        </h2>
<p className="text-sm font-light text-indigo-400">Разработка сложных связок и умных CRM-систем (n8n)</p>
</div>
</div>
<div className="mt-auto p-5 rounded-2xl border relative overflow-hidden bg-indigo-950/50 border-white/5">

<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center bg-white/5 border-white/10 text-indigo-400">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-indigo-500 font-light">Голос</span>
</div>
<div className="flex-1 h-px mx-2 relative bg-gradient-to-bl from-white/10 to-white/0">
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] flex items-center justify-center">
<iconify-icon className="text-xs text-indigo-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center relative bg-blue-500/10 border-blue-500/20 text-blue-400">
<div className="absolute inset-0 rounded-xl animate-pulse bg-blue-400/10"></div>
<iconify-icon className="text-lg" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-light text-blue-400/80">n8n + OpenAI</span>
</div>
<div className="flex-1 h-px mx-2 relative bg-gradient-to-bl from-white/10 to-white/0">
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] flex items-center justify-center">
<iconify-icon className="text-xs text-indigo-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center bg-white/5 border-white/10 text-indigo-400">
<iconify-icon className="text-lg" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-indigo-500 font-light">Bitrix24</span>
</div>
</div>
<div className="relative z-10 pt-4 border-t border-white/5">
<div className="text-xs font-light mb-1 text-blue-400/80">Кейс</div>
<h4 className="text-sm font-normal text-indigo-300">Система "Голос в Bitrix24"</h4>
<p className="text-xs text-indigo-500 font-light mt-1">Автоматическое создание и маршрутизация сделок из голосовых сообщений.</p>
</div>
</div>
</section>

<section className="md:col-span-1 md:row-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md p-6 flex flex-col group transition-colors hover:bg-white/[0.03] hover:border-white/10">
<h2 className="text-xl md:text-2xl font-normal tracking-tight mb-2 flex items-center gap-2 text-indigo-200">
<iconify-icon className="text-indigo-500" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
                    AI-Видео
                </h2>
<p className="text-sm font-light mb-6 text-indigo-400">Кинематографичный контент в Kling 3.0 и Veo 3.1</p>

<div className="flex-1 rounded-2xl border overflow-hidden relative group/video mt-auto min-h-[240px] flex flex-col justify-end p-4 border-white/5 bg-indigo-950/50">

<div className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-700 group-hover/video:scale-105" style={{background: 'linear-gradient(45deg, transparent 20%, rgba(99,102,241,0.1) 50%, transparent 80%)', backgroundSize: '200% 200%', animation: 'gradient 8s ease infinite'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-transform duration-300 group-hover/video:scale-110 bg-white/10 border-white/20 text-white/80">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<div className="inline-flex px-2 py-0.5 rounded backdrop-blur-sm border text-xs font-light mb-2 bg-black/50 border-white/10 text-indigo-300">
                            Кейс "Ларри"
                        </div>
<p className="text-xs font-light text-indigo-400">Создание анимации с консистентными персонажами</p>
</div>
</div>
</section>

<section className="md:col-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md p-6 lg:p-10 flex flex-col group transition-colors hover:bg-white/[0.03] hover:border-white/10">
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-xl md:text-2xl font-normal tracking-tight mb-2 flex items-center gap-2 text-indigo-200">
<iconify-icon className="text-indigo-500" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
                            AI-Изображения
                        </h2>
<p className="text-sm font-light text-indigo-400">Фотореализм и креатив для брендов и TG-каналов</p>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mt-auto">
<div className="aspect-[4/3] rounded-xl border relative overflow-hidden group/img default border-white/5">
<div className="absolute inset-0 transition-colors duration-300 group-hover/img:bg-white/5 bg-white/0"></div>
</div>
<div className="aspect-[4/3] rounded-xl bg-gradient-to-bl border relative overflow-hidden group/img to-indigo-900/40 border-white/5 from-blue-900/10">
<div className="absolute inset-0 transition-colors duration-300 group-hover/img:bg-white/5 bg-white/0"></div>
</div>
<div className="aspect-[4/3] rounded-xl border relative overflow-hidden group/img bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] border-white/5 from-green-400 via-green-600 to-green-400">
<div className="absolute inset-0 transition-colors duration-300 group-hover/img:bg-white/5 bg-white/0"></div>
</div>
</div>
</section>

<section className="md:col-span-1 md:col-start-1 md:col-end-4 lg:col-span-3 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md p-6 lg:p-10">
<div className="max-w-xl mx-auto w-full">
<h2 className="text-xl md:text-2xl font-normal tracking-tight mb-6 text-center text-indigo-200">Обсудить проект</h2>
<form className="space-y-6">
<div className="relative">
<input className="block w-full bg-transparent border-0 border-b py-2 text-sm focus:ring-0 transition-colors peer placeholder-transparent focus:border-blue-400 border-white/10 text-indigo-200" id="name" placeholder="Ваше имя" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-indigo-500 font-light transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-indigo-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="name">Ваше имя</label>
</div>
<div className="relative">
<textarea className="block w-full bg-transparent border-0 border-b py-2 text-sm focus:ring-0 transition-colors peer placeholder-transparent resize-none overflow-hidden focus:border-blue-400 border-white/10 text-indigo-200" id="project" placeholder="Кратко о задаче" rows="1"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-indigo-500 font-light transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-indigo-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="project">Кратко о задаче</label>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[#0A0A0A] text-sm font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] focus:ring-white bg-white hover:bg-indigo-200" type="button">
                            Отправить запрос
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</section>
</div>
<footer className="w-full mt-8 border-t pt-8 flex justify-between items-center text-xs font-light border-white/5 text-indigo-600">
<p>© 2024 Айдар. Все права защищены.</p>
<p>Дизайн и код</p>
</footer>
</main>
<style>
        /* Simple keyframe for subtle gradient movement if needed */
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Custom scrollbar for better aesthetic */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0A0A0A;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    </style>

    </>
  );
}
