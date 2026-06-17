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
      

<div className="slide-container flex flex-col justify-between p-16 text-white bg-gradient-to-b from-emerald-950/20 to-[#020403]">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-8 mt-10">
<div className="inline-flex items-center gap-3 px-5 py-2 border border-emerald-500/30 rounded-full w-fit bg-emerald-950/20 backdrop-blur-sm">
<i className="text-emerald-400 w-6 h-6" data-lucide="trending-up"></i>
<span className="text-emerald-300 text-2xl font-medium tracking-wide uppercase">Блог новичка</span>
</div>
<h1 className="text-[84px] leading-[1.05] tracking-tight font-semibold text-white/90">
                Почему блог новичка набирает <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">100К подписчиков</span> быстрее, чем страница эксперта с 10-летним стажем?
            </h1>
</div>
<div className="relative z-10 grid grid-cols-1 gap-8">

<div className="w-full h-[400px] border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden flex items-end justify-center group">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>

<svg className="w-full h-full absolute bottom-0" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,100 C20,90 40,80 50,50 C60,20 80,10 100,0 L100,100 Z" fill="url(#grad1)" opacity="0.2"></path>
<path d="M0,100 C20,90 40,80 50,50 C60,20 80,10 100,0" fill="none" stroke="#34d399" strokeWidth="0.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#34d399', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#020403', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute top-10 left-10 p-6 bg-[#020403]/80 border border-white/10 backdrop-blur-xl">
<div className="text-4xl text-emerald-400 font-semibold mb-2">+124%</div>
<div className="text-2xl text-slate-400">Рост аудитории</div>
</div>
</div>
<p className="text-[40px] leading-[1.3] font-normal text-slate-300 border-l-4 border-emerald-500 pl-8">
                Дело не в опыте. Дело в том, что люди покупают не результат — они покупают путь к нему.
            </p>
</div>
</div>

<div className="slide-container flex flex-col p-16 text-white bg-[#020403]">
<div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start gap-6 mb-12">
<div className="p-4 bg-red-500/10 border border-red-500/20 rounded-none">
<i className="text-red-400 w-10 h-10" data-lucide="alert-triangle"></i>
</div>
<h2 className="text-[64px] leading-[1.1] tracking-tight font-semibold text-white">
                    Главная ошибка: начинать показывать себя только после достижения успеха
                </h2>
</div>
<div className="flex-1 space-y-12">
<div className="space-y-6">
<p className="text-[36px] leading-[1.4] text-slate-300 font-light">
                        Ты решил освоить нейросети для создания контента. У тебя пока нет крутых кейсов. Ты думаешь: <span className="text-white font-normal">"Вот сделаю 20 работ, наберу отзывы — тогда и выйду на публику".</span>
</p>
<p className="text-[36px] leading-[1.4] text-slate-300 font-light">
                        Ты тратишь месяцы на обучение в тишине. Тестируешь промпты, изучаешь связки инструментов, делаешь проекты для себя.
                    </p>
</div>
<div className="border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
<p className="text-[36px] leading-[1.4] text-slate-200">
                        Проблема в том, что к этому моменту ты упустишь самое ценное: <span className="text-emerald-400 font-normal">возможность показать трансформацию</span>.
                    </p>
</div>
<p className="text-[36px] leading-[1.4] text-slate-400 font-light">
                    Когда ты уже наверху, твоя история превращается в сухое резюме. "Я эксперт, у меня 100 кейсов". Это не цепляет.
                </p>
</div>
</div>
</div>

<div className="slide-container flex flex-col p-16 text-white bg-[#020403]">
<div className="relative z-10 flex flex-col h-full">
<h2 className="text-[68px] leading-[1.1] tracking-tight font-semibold mb-12">
                Какой сериал ты досмотришь до конца?
            </h2>
<div className="grid grid-rows-2 gap-6 mb-12">

<div className="border border-white/10 p-8 flex items-center gap-8 opacity-50">
<div className="w-24 h-24 bg-slate-800 flex items-center justify-center border border-white/10">
<i className="text-slate-400 w-10 h-10" data-lucide="coffee"></i>
</div>
<div>
<p className="text-[32px] text-slate-300 leading-snug">Тот, где герой в первой сцене уже победил и теперь пьёт кофе на вилле?</p>
</div>
</div>

<div className="border border-emerald-500/50 bg-emerald-950/10 p-8 flex items-center gap-8 shadow-[0_0_50px_-20px_rgba(16,185,129,0.2)]">
<div className="w-24 h-24 bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<i className="text-emerald-400 w-10 h-10" data-lucide="mountain-snow"></i>
</div>
<div>
<p className="text-[32px] text-white leading-snug">Или тот, где герой только встал на путь, совершает ошибки, сталкивается с препятствиями?</p>
</div>
</div>
</div>
<div className="space-y-8 mt-auto">
<p className="text-[40px] font-medium text-white">Очевидно — второй.</p>
<p className="text-[34px] leading-[1.4] text-slate-300 font-light">
                    Твоя аудитория хочет видеть не идеальную картинку. Им нужно увидеть, как ты споткнулся на первом шаге. Как провалил первую попытку. Как нашёл решение. Как обрадовался маленькой победе.
                </p>
<div className="flex items-start gap-6 pt-6 border-t border-white/10">
<i className="text-emerald-400 w-12 h-12 mt-2 shrink-0" data-lucide="heart-handshake"></i>
<p className="text-[34px] leading-[1.4] text-slate-200">
                        Это создаёт эмоциональную связь. Люди начинают переживать за тебя. Они возвращаются, чтобы узнать: "А что дальше?"
                    </p>
</div>
</div>
</div>
</div>

<div className="slide-container flex flex-col p-16 text-white bg-[#020403]">
<div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full gap-12">
<h2 className="text-[64px] leading-[1.1] tracking-tight font-semibold">
                Твоя "точка старта" даёт то, чего нет у экспертов
            </h2>
<div className="flex flex-col gap-6">

<div className="border border-white/5 bg-white/5 p-10">
<div className="flex items-center gap-4 mb-4">
<i className="text-slate-500 w-8 h-8" data-lucide="award"></i>
<h3 className="text-[32px] font-medium text-slate-400">Эксперт</h3>
</div>
<p className="text-[32px] leading-[1.4] text-slate-500 font-light">
                        Эксперт с 10-летним стажем уже забыл, каково это — не понимать базовые вещи. Он не помнит первых страхов: "А вдруг не получится? Где начать?".
                    </p>
</div>

<div className="border border-emerald-500/30 bg-emerald-950/20 p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 blur-[40px]"></div>
<div className="flex items-center gap-4 mb-4 relative z-10">
<i className="text-emerald-400 w-8 h-8" data-lucide="user"></i>
<h3 className="text-[32px] font-medium text-emerald-400">Ты</h3>
</div>
<p className="text-[32px] leading-[1.4] text-slate-100 font-light relative z-10">
                        А у тебя эти вопросы живые, прямо сейчас. И это делает тебя ближе к аудитории.
                    </p>
</div>
</div>
<div className="mt-auto space-y-8">
<p className="text-[34px] leading-[1.4] text-slate-300">
                    Большинство людей находятся не на уровне эксперта — они на твоём уровне. Им не нужны советы гуру с Олимпа. Им нужен проводник, который идёт рядом и говорит: "Смотри, я только что это попробовал — вот что сработало, а вот где я облажался".
                </p>
<p className="text-[34px] leading-[1.4] text-white border-l-4 border-emerald-500 pl-6">
                    Ты можешь дать то, чего не даст эксперт: понимание, эмпатию и реальный пошаговый путь от нуля.
                </p>
</div>
</div>
</div>

<div className="slide-container flex flex-col p-16 text-white bg-[#020403]">
<div className="relative z-10 flex flex-col h-full">
<h2 className="text-[64px] leading-[1.1] tracking-tight font-semibold mb-10">
                Практика: как превратить свой путь в контент
            </h2>

<div className="flex items-center justify-between gap-4 mb-12 text-[32px] font-medium text-center">
<div className="flex-1 bg-white/5 border border-white/10 py-6">Цель</div>
<div className="text-emerald-500">+</div>
<div className="flex-1 bg-white/5 border border-white/10 py-6">Препятствие</div>
<div className="text-emerald-500">+</div>
<div className="flex-1 bg-emerald-950/30 border border-emerald-500/30 py-6 text-emerald-400">Действие</div>
</div>
<div className="space-y-8 flex-1">
<div className="space-y-2">
<span className="text-emerald-400 text-2xl font-mono uppercase tracking-widest">Цель</span>
<p className="text-[32px] leading-[1.3] text-slate-300">"Хочу за неделю создать лендинг через ChatGPT и Nano Banana, который можно продать за 15 тысяч".</p>
</div>
<div className="space-y-2">
<span className="text-red-400 text-2xl font-mono uppercase tracking-widest">Препятствие</span>
<p className="text-[32px] leading-[1.3] text-slate-300">"Не знаю правильных промптов. Нейросеть выдаёт мусор. Дизайн любительский".</p>
</div>
<div className="space-y-2">
<span className="text-blue-400 text-2xl font-mono uppercase tracking-widest">Действие</span>
<p className="text-[32px] leading-[1.3] text-slate-300">Показываешь экран: "Вот мой первый результат — отстой. Меняю промпт — стало лучше. Нашёл референс — совсем другое дело".</p>
</div>
</div>
<div className="mt-10 bg-white/5 p-8 border border-white/10">
<p className="text-[32px] leading-[1.4] text-slate-300 mb-6">
                    Каждый этап снимаешь и публикуешь. <br/>
<span className="text-white">День 1:</span> провал. <span className="text-white">День 3:</span> первый рабочий вариант. <span className="text-white">День 7:</span> результат и реакция клиента.
                </p>
<p className="text-[32px] leading-[1.4] text-emerald-400">
                    Люди проживают это вместе с тобой. Это и есть история, за которой следят.
                </p>
</div>
</div>
</div>

<div className="slide-container flex flex-col p-16 text-white bg-[#020403]">
<div className="relative z-10 flex flex-col h-full">
<h2 className="text-[60px] leading-[1.1] tracking-tight font-semibold mb-12">
                Реальный сценарий: от эксперимента до платного заказа
            </h2>
<div className="relative pl-8 flex-1 border-l border-white/10 ml-4">


<div className="mb-12 relative">
<div className="absolute -left-[45px] top-2 w-6 h-6 rounded-full bg-[#020403] border-2 border-slate-600"></div>
<h3 className="text-[36px] font-medium text-white mb-2">Неделя 1</h3>
<p className="text-[30px] leading-[1.4] text-slate-400">
                        "Первый раз пытаюсь создать визуал через Nano Banana — получилась жуть. Буду разбираться". <br/>
<span className="text-slate-500 text-2xl mt-2 block italic">— Люди комментируют, дают советы.</span>
</p>
</div>

<div className="mb-12 relative">
<div className="absolute -left-[45px] top-2 w-6 h-6 rounded-full bg-[#020403] border-2 border-slate-400"></div>
<h3 className="text-[36px] font-medium text-white mb-2">Неделя 2</h3>
<p className="text-[30px] leading-[1.4] text-slate-400">
                        "Нашёл связку промптов, которая ускоряет работу в 3 раза. Показываю на экране". <br/>
<span className="text-emerald-400/80 text-2xl mt-2 block">— Охваты растут.</span>
</p>
</div>

<div className="mb-12 relative">
<div className="absolute -left-[45px] top-2 w-6 h-6 rounded-full bg-[#020403] border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
<h3 className="text-[36px] font-medium text-emerald-400 mb-2">Неделя 3</h3>
<p className="text-[30px] leading-[1.4] text-slate-300">
                        "Впервые получил платный заказ — 10 тысяч за проект. Делюсь процессом". <br/>
<span className="text-white text-2xl mt-2 block">— Аудитория радуется вместе с тобой.</span>
</p>
</div>

<div className="relative">
<div className="absolute -left-[45px] top-2 w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-500"></div>
<h3 className="text-[36px] font-medium text-emerald-400 mb-2">Месяц 2</h3>
<p className="text-[30px] leading-[1.4] text-slate-300">
                        У тебя 3000 подписчиков, которые росли вместе с тобой. Они знают твой подход. Когда ты объявляешь о запуске курса — люди покупают без раздумий.
                    </p>
</div>
</div>
<div className="mt-8 p-8 bg-white/5 border border-white/10">
<p className="text-[30px] leading-[1.4] text-slate-400">
                    А мог бы молчать полгода, а потом выйти с "идеальным профилем". И получить ноль реакции.
                </p>
</div>
</div>
</div>

<div className="slide-container flex flex-col justify-between p-16 text-white bg-[#020403] relative">

<div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-emerald-950/20 to-transparent pointer-events-none"></div>
<div className="relative z-10 space-y-10">
<h2 className="text-[64px] leading-[1.1] tracking-tight font-semibold">
                Не откладывай на момент, когда станешь "достаточно хорошим"
            </h2>
<div className="space-y-8">
<p className="text-[36px] leading-[1.4] text-slate-300 font-light">
                    Этот момент не настанет. Как только достигнешь одной планки — появится следующая.
                </p>
<p className="text-[36px] leading-[1.4] text-slate-300 font-light">
                    Сейчас думаешь: "Вот освою инструмент получше — тогда начну". А пока ты ждёшь, кто-то другой уже снимает свой путь с первого дня.
                </p>
<div className="flex gap-6 items-center">
<div className="h-px bg-white/20 flex-1"></div>
<span className="text-emerald-500 text-2xl uppercase tracking-widest">Real talk</span>
<div className="h-px bg-white/20 flex-1"></div>
</div>
<p className="text-[36px] leading-[1.4] text-white">
                    Через три месяца у него будет аудитория. У тебя будут навыки, но не будет людей.
                </p>
<p className="text-[36px] leading-[1.4] text-slate-300 font-light">
                    Начни показывать процесс сегодня. Твои ошибки, твои находки, твои маленькие победы. Это и есть твоя уникальность.
                </p>
<p className="text-[36px] leading-[1.4] text-emerald-400 font-medium">
                    Люди покупают не у того, кто идеален. Люди покупают у того, кого знают.
                </p>
</div>
</div>

<div className="relative z-10 mt-12 bg-emerald-950/30 border border-emerald-500/50 p-10 flex flex-col gap-6 backdrop-blur-md">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<span className="text-emerald-400 text-2xl font-semibold uppercase tracking-wider">Бонус</span>
</div>
<p className="text-[34px] leading-[1.3] text-white">
                Напиши в личку <span className="bg-emerald-500 text-[#020403] px-2 font-bold">ПУТЬ</span> скину аудио-подкаст “Как превратить обычный день в захватывающую сторис-линию”
            </p>
</div>
</div>


    </>
  );
}
