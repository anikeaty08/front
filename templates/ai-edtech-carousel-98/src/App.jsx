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



        lucide.createIcons();
    
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
      

<div className="w-full max-w-[540px] flex flex-col border border-zinc-800 bg-black shadow-2xl">

<section className="relative w-full aspect-[4/5] flex flex-col justify-between p-10 overflow-hidden border-b border-zinc-800">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 pt-4">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-green-500"></div>
<span className="uppercase text-xs font-medium text-green-500 tracking-widest" style={{}}>albertlat</span>
</div>
<h1 className="text-5xl text-white font-semibold tracking-tight leading-[1.1] mb-6">
                    Инфопродукты мертвы. <br/>
<span className="text-zinc-500">Что продавать <br/>в 2026?</span>
</h1>
</div>
<div className="relative z-10">
<p className="text-xl text-zinc-400 leading-relaxed max-w-[90%]">
                    Курсы, коучинг, PDF-гайды — всё это больше не работает как раньше. Вот что приходит им на смену.
                </p>

<div className="mt-8 flex justify-end">
<div className="w-12 h-12 border border-zinc-700 flex items-center justify-center text-white">
<svg className="lucide lucide-arrow-right" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</section>

<section className="relative w-full aspect-[4/5] flex flex-col justify-start p-10 overflow-hidden border-b border-zinc-800 bg-zinc-950">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-zinc-800/50 rounded-full pointer-events-none"></div>
<h2 className="text-3xl text-white font-semibold tracking-tight leading-tight mb-8">
                Почему все твердят, что инфопродукты умерли?
            </h2>
<div className="space-y-6 text-lg text-zinc-400 leading-normal">
<p>
                    Рынок прошёл все стадии насыщения. Сначала работало "курс по продуктивности". Потом нужна была уникальная механика. Теперь даже это не цепляет.
                </p>
<div className="pl-4 border-l border-green-500/50">
<p className="text-zinc-300">
                        Люди устали от обещаний и курсов, которые никто не заканчивает. Плюс AI теперь генерит любую информацию за секунды. Зачем платить за то, что можно спросить у ChatGPT?
                    </p>
</div>
<p>
                    Хорошие инфопродукты ещё работают. Но средние — а это большинство — умирают прямо сейчас.
                </p>
</div>
</section>

<section className="relative w-full aspect-[4/5] flex flex-col justify-between p-10 overflow-hidden border-b border-zinc-800 bg-black">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl text-white font-semibold tracking-tight leading-tight mb-8">
                    Образование само по себе не умрёт. Умрёт формат.
                </h2>
<p className="text-lg text-zinc-400 mb-8">
                    Люди всегда будут учиться — это базовая потребность. Но формат меняется.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 min-w-[24px] flex justify-center text-zinc-600">
<svg className="lucide lucide-history w-6 h-6" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</div>
<p className="text-lg text-zinc-400">
                            Раньше кузнец учил подмастерья рядом: исправлял хват в моменте, показывал на ошибках. Потом пришли лекции — один учитель на сотни студентов. Эффективно для масштаба, но плохо для эффективного обучения.
                        </p>
</div>
<div className="flex gap-4">
<div className="mt-1 min-w-[24px] flex justify-center text-green-500">
<svg className="lucide lucide-bot w-6 h-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<p className="text-lg text-white">
                            AI впервые за сто лет возвращает персональное наставничество в масштабе. Ты создаёшь "второго себя", который учит тысячи людей, адаптируясь под каждого.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative w-full aspect-[4/5] flex flex-col justify-center p-10 overflow-hidden border-b border-zinc-800 bg-zinc-950">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-50"></div>
<div className="mb-10">
<h2 className="text-3xl text-white font-semibold tracking-tight leading-tight mb-6">
                    Будущее — это "опыт обучения", а не статичный курс
                </h2>
<p className="text-lg text-zinc-400">
                    Вместо 10-часового курса ты создаёшь AI-сервис с твоей экспертизой внутри.
                </p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-6 mb-8 relative">
<div className="absolute -left-[1px] top-6 h-8 w-[3px] bg-green-500"></div>
<p className="text-lg text-zinc-300 italic mb-4">
                    "Курс по письму становится AI-наставником: учит через диалог, даёт задания на месте, проверяет и комментирует, помогает создать результат."
                </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-green-500 uppercase tracking-wider">AI Наставник онлайн</span>
</div>
</div>
<p className="text-xl text-white font-medium">
                Человек не смотрит видео — он <span className="text-green-400 border-b border-green-500/50 pb-0.5">делает</span> под руководством твоего AI. Личный наставник 24/7 по цене инфопродукта.
            </p>
</section>

<section className="relative w-full aspect-[4/5] flex flex-col justify-start p-10 overflow-hidden border-b border-zinc-800 bg-black">
<h2 className="text-3xl text-white font-semibold tracking-tight leading-tight mb-4">
                Как это выглядит технически?
            </h2>
<p className="text-lg text-zinc-400 mb-10">
                Ты создаёшь микро-SaaS — небольшой AI-сервис на базе своей экспертизы.
            </p>
<div className="space-y-6 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-px bg-zinc-800"></div>

<div className="relative flex gap-6">
<div className="relative z-10 w-10 h-10 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-mono text-sm shrink-0">1</div>
<div>
<h3 className="text-xl text-white font-medium mb-1">База знаний</h3>
<p className="text-lg text-zinc-400">Твой курс в формате модулей. Попроси Claude создать структуру, затем заполни через диалог.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="relative z-10 w-10 h-10 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-mono text-sm shrink-0">2</div>
<div>
<h3 className="text-xl text-white font-medium mb-1">Системные промпты</h3>
<p className="text-lg text-zinc-400">Инструкции для AI: его роль, стиль, границы знаний, логика обучения.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="relative z-10 w-10 h-10 bg-green-900/30 border border-green-500/50 flex items-center justify-center text-green-400 font-mono text-sm shrink-0">3</div>
<div>
<h3 className="text-xl text-white font-medium mb-1">Интерфейс</h3>
<p className="text-lg text-zinc-400">Replit, Cursor или Claude Code. Да, придётся научиться базе.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full aspect-[4/5] flex flex-col justify-center p-10 overflow-hidden border-b border-zinc-800 bg-zinc-950">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl text-white font-semibold tracking-tight leading-tight mb-8">
                    Это не "обёртка для ChatGPT" — это твоя уникальность
                </h2>
<div className="space-y-6 text-lg text-zinc-400">
<p className="italic text-zinc-500">
                        "Зачем платить за ChatGPT-обёртку?" — спросят многие.
                    </p>
<p>
                        Но Typeform на миллиард — обёртка для форм. Cursor — обёртка для GPT. Любой сайт — обёртка HTML.
                    </p>
<div className="border border-zinc-800 bg-black p-5">
<p className="text-white">
                            Твоя ценность не в технологии. Твоя ценность в <span className="text-green-400">специфическом знании</span>: 10 лет в продуктивности дают нюансы, которых нет у того, кто просто попросил ChatGPT "сделай приложение".
                        </p>
</div>
<p>
                        Твои фреймворки, примеры, голос — это то, что не скопировать даже с AI.
                    </p>
</div>
</div>
</section>

<section className="relative w-full aspect-[4/5] flex flex-col justify-between p-10 overflow-hidden bg-black">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-zinc-950 to-zinc-950"></div>
<div className="relative z-10 pt-4">
<h2 className="text-3xl text-white font-semibold tracking-tight leading-tight mb-6">
                    Начинай сейчас — окно закрывается быстрее, чем ты думаешь
                </h2>
<div className="space-y-4 text-lg text-zinc-400">
<p>
                        Инфопродукты царили 10–15 лет. AI-наставники проживут максимум 2–3 года — потом снова придётся адаптироваться.
                    </p>
<p>
                        Скорость изменений растёт. То, что сегодня инновация, завтра — стандарт.
                    </p>
<p className="text-white">
                        Но действовать нужно сейчас. "Идеального момента" не будет. Строй то, что можешь построить только ты.
                    </p>
</div>
</div>

<div className="relative z-10 mt-6">
<div className="bg-zinc-900 border border-zinc-700 p-6 relative overflow-hidden group">

<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex gap-4 items-start">
<svg className="lucide lucide-send w-6 h-6 text-green-500 shrink-0 mt-1" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<p className="text-lg text-white font-medium leading-relaxed">
                            Если у тебя есть курс или обучение — напиши мне в телеграм "ИИ-курс". Расскажу как твой курс превратить в ИИ-наставника с твоим методом.
                        </p>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
