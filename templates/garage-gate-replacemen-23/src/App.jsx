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



        let currentStep = 1;
        const totalSteps = 10;
        
        function updateProgress() {
            const percent = (currentStep / totalSteps) * 100;
            const finalPercent = Math.min(percent, 100);
            document.getElementById('progress-bar').style.width = finalPercent + '%';
            document.getElementById('percent-count').innerText = Math.round(finalPercent) + '%';
            
            if (currentStep <= totalSteps) {
                document.getElementById('step-count').innerText = `Крок ${currentStep} з ${totalSteps}`;
            } else {
                document.getElementById('step-count').innerText = `Готово`;
                document.getElementById('percent-count').innerText = `100%`;
            }
        }

        function nextStep() {
            // Small delay to show selection before moving
            setTimeout(() => {
                // Hide current
                const currentEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
                if(currentEl) currentEl.classList.add('hidden');

                currentStep++;

                // Show next or final
                if (currentStep <= totalSteps) {
                    const nextEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
                    if(nextEl) nextEl.classList.remove('hidden');
                } else {
                    const finalEl = document.querySelector(`.quiz-step[data-step="final"]`);
                    if(finalEl) finalEl.classList.remove('hidden');
                }
                
                updateProgress();
            }, 300);
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
      

<header className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32 bg-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                        Розпашні ворота задовбали: сніг, вітер, місце
                    </h1>
<h2 className="mt-4 text-lg sm:text-xl text-indigo-900/80 font-medium leading-snug">
                        Як за 1 день перейти на секційні – і 10 років просто заїжджати з пульта, без квестів і сюрпризів
                    </h2>
<p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Якщо у вас розпашні ворота, то ви платите щодня. Не грошима – часом, нервами й спиною. Особливо якщо двір вузький, місцевість вітряна, а сніг – “як завжди не вчасно”.
                    </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-6 py-3 text-base font-medium text-slate-900 hover:bg-slate-200 transition-colors duration-200" href="#plan">
                            Показати план
                        </a>
<a className="inline-flex items-center justify-center rounded-xl bg-indigo-900 px-6 py-3 text-base font-medium text-white shadow-lg shadow-indigo-900/20 hover:bg-indigo-800 transition-all duration-200 ring-1 ring-white/10" href="#quiz">
                            Пройти квіз
                        </a>
</div>
</div>

<div className="relative lg:h-auto h-64 w-full rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50"></div>
<div className="relative grid grid-cols-2 w-full h-full divide-x divide-slate-300/50">
<div className="flex flex-col items-center justify-center text-slate-400 p-4 bg-slate-200/50">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="flex flex-col items-center justify-center text-indigo-900 p-4 bg-white/60">
<iconify-icon icon="solar:garage-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 sm:py-24">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl font-semibold text-slate-900 mb-10 tracking-tight">Ви це впізнаєте по фразах, які вже на автопілоті:</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-sky-500 mb-3"><iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Сніг випав – все, ворота ніби скасували.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-sky-500 mb-3"><iconify-icon icon="solar:shovel-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Чистиш, чистиш – а потім знову намело.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-indigo-500 mb-3"><iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Вітер смикає стулку – реально боюсь, що по машині шарахне.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-amber-500 mb-3"><iconify-icon icon="solar:parking-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Треба місце перед гаражем, якого немає. Це бісить кожен день.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-slate-400 mb-3"><iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Замок замерз – і ти стоїш, матюкаєшся і колупаєшся.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-rose-500 mb-3"><iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Відкрити/закрити – окремий квест. А я просто хочу заїхати.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-orange-500 mb-3"><iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Стулки перекосило – тепер все треться, скрипить, чіпляє.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-slate-500 mb-3"><iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Щоразу руками, в бруд, у дощ. Втомився.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="text-purple-500 mb-3"><iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic">“Виглядає як колгосп, але головне – незручно.”</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow lg:col-span-3">
<div className="flex items-start gap-3">
<div className="text-red-500 shrink-0"><iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="28"></iconify-icon></div>
<p className="text-slate-700 italic font-medium">“Страшно: поставлю нове – і почнуться ‘переробки проєму’ та доплати.”</p>
</div>
</div>
</div>
<p className="mt-8 text-center text-slate-500 max-w-3xl mx-auto">
                Цей лід-магніт дає ясність: як реально замінити розпашні ворота на секційні за 1 день, без будівельного хаосу, і що треба врахувати, щоб потім 10 років просто натискати кнопку.
            </p>
</div>
</section>

<section className="py-12 bg-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-indigo-950 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<iconify-icon className="-translate-x-1/4 -translate-y-1/4" icon="solar:garage-linear" width="400"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-4">Головна ідея (яка знімає 80% страхів)</h3>
<p className="text-white text-lg mb-6">Ви купуєте не “секційні ворота”. <br className="hidden sm:block"/>Ви купуєте результат:</p>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20 inline-block max-w-3xl">
<p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
                            “Ворота відкриваються щоразу, коли треба. І якщо раптом ні – є зрозуміло, хто відповідає і як швидко це вирішується.”
                        </p>
</div>
<p className="text-indigo-200 text-sm sm:text-base max-w-2xl mx-auto">
                        Саме тому критично важливо не “взяти модель”, а правильно підібрати під ваш двір:
                        тип підйому + геометрія отвору + автоматика + захист від продувів + монтаж з пусконаладкою.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-slate-50" id="plan">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight">10 років кайфу починаються з 1 дня правильного плану</h2>
<p className="text-slate-500 mb-12">Нижче – простий план, як це виглядає у нормальному сценарії.</p>
<div className="relative space-y-12">

<div className="flex flex-col md:flex-row gap-6 md:gap-12">
<div className="flex-shrink-0 md:w-1/3">
<span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full mb-2">Крок 1</span>
<h4 className="text-xl font-semibold text-slate-900">Зрозуміти, чи можна “за 1 день” саме у вас (спойлер: у більшості випадків – так)</h4>
</div>
<div className="md:w-2/3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-600 mb-4 font-medium">“За 1 день” реально, якщо:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>проєм не потребує великої перебудови</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>є зрозумілий тип підйому під вашу притолоку/глибину</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>електрика під автоматику вирішена (або зафіксовано, хто робить)</span>
</li>
</ul>
<div className="mt-6 p-4 bg-indigo-50 rounded-xl text-sm text-indigo-900">
<strong>Важливо:</strong> 90% цього визначається по 4 фото та коротких уточненнях, ще до виїзду.
                        </div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-12">
<div className="flex-shrink-0 md:w-1/3">
<span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full mb-2">Крок 2</span>
<h4 className="text-xl font-semibold text-slate-900">4 фото, які економлять вам гроші і нерви</h4>
<p className="text-sm text-slate-500 mt-2">Щоб не було сюрпризів “ой, тут не стає” і “треба доплатити”, вам достатньо надіслати:</p>
</div>
<div className="md:w-2/3">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">

<div className="bg-white p-4 rounded-xl text-center shadow-sm border border-slate-100">
<iconify-icon className="text-slate-400 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<span className="block text-xs font-medium text-slate-700">отвір ззовні</span>
</div>

<div className="bg-white p-4 rounded-xl text-center shadow-sm border border-slate-100">
<iconify-icon className="text-slate-400 mb-2" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="block text-xs font-medium text-slate-700">отвір зсередини</span>
</div>

<div className="bg-white p-4 rounded-xl text-center shadow-sm border border-slate-100">
<iconify-icon className="text-slate-400 mb-2" icon="solar:ruler-cross-pen-linear" width="32"></iconify-icon>
<span className="block text-xs font-medium text-slate-700">простір над отвором (притолока)</span>
</div>

<div className="bg-white p-4 rounded-xl text-center shadow-sm border border-slate-100">
<iconify-icon className="text-slate-400 mb-2" icon="solar:plug-circle-linear" width="32"></iconify-icon>
<span className="block text-xs font-medium text-slate-700">місце, де є/буде живлення</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<p className="font-medium text-slate-900 mb-2">Після цього стає зрозуміло:</p>
<ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
<li>який тип підйому підходить</li>
<li>чи потрібні добори/примикання, щоб не дуло</li>
<li>чи буде “будівельний сюрприз” або ні</li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-12">
<div className="flex-shrink-0 md:w-1/3">
<span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-semibold rounded-full mb-2">Крок 3</span>
<h4 className="text-xl font-semibold text-slate-900">Найчастіші помилки, через які “за 1 день” перетворюється на “та давайте наступного тижня”</h4>
</div>
<div className="md:w-2/3 bg-amber-50 p-6 rounded-2xl border border-amber-100">
<div className="flex items-start gap-4 mb-4">
<iconify-icon className="text-amber-600 shrink-0 mt-1" icon="solar:danger-circle-linear" width="24"></iconify-icon>
<h5 className="text-amber-900 font-medium">Ось де зазвичай вилазить хаос:</h5>
</div>
<ul className="space-y-2 text-amber-900/80 mb-6">
<li className="flex items-start gap-2">
<span className="text-amber-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 block shrink-0"></span>
<span>“Секційні ворота” без уточнення типу підйому</span>
</li>
<li className="flex items-start gap-2">
<span className="text-amber-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 block shrink-0"></span>
<span>не перевірили притолоку/пристінки/глибину гаража</span>
</li>
<li className="flex items-start gap-2">
<span className="text-amber-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 block shrink-0"></span>
<span>не узгодили, що входить у “під ключ” (демонтаж, доставка, витратні, пусконаладка)</span>
</li>
</ul>
<p className="text-amber-900 font-medium">Якщо ці речі закрити до монтажу – день проходить без квестів.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 mb-10 tracking-tight text-center">Що ви отримаєте після заміни <br/><span className="text-slate-400 font-normal text-xl">(і чому це відчувається як “новий рівень життя”)</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 mb-4 shadow-sm">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">1) Сніг і лід перестають керувати вашим ранком</h4>
<p className="text-sm text-slate-600">Секційним воротам не треба “розмах” створок. Їм не потрібно місце перед гаражем. Сніг не “відміняє ворота”.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-500 mb-4 shadow-sm">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">2) Вітер більше не “грається” стулками</h4>
<p className="text-sm text-slate-600">Немає створки, яку смикає поривом. Немає страху “шасне по машині”.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-500 mb-4 shadow-sm">
<iconify-icon icon="solar:cursor-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">3) Один рух – і ви вже всередині</h4>
<p className="text-sm text-slate-600">Натиснули кнопку – заїхали. Без “постояти, потримати, посунути, відкрити, закрити, перевірити”.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50/50 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-sm">
<iconify-icon icon="solar:thermometer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">4) Тепліший гараж без продувів, пилу та “вічної сирості”</h4>
<p className="text-sm text-slate-600">Правильні ущільнення й примикання = менше холодного повітря, пилу, вологи. Менше шансів на плісняву та “вічно мокрі речі”.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50/50 transition-colors duration-300 md:col-span-2 lg:col-span-1">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-500 mb-4 shadow-sm">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">5) Зовнішній вигляд – не “колгосп”, а акуратно і сучасно</h4>
<p className="text-sm text-slate-600">Ворота стають частиною фасаду, а не болем на фоні.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-indigo-950 text-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight">“Страшно, що почнуться переробки проєму і доплати” – як це прибрати</h2>
<p className="text-indigo-200 mb-6 text-lg">Цей страх нормальний. Він виникає через те, що люди плутають:</p>
<div className="flex gap-4 items-center mb-2">
<div className="h-px bg-indigo-700 flex-1"></div>
<span className="text-white font-medium">“ціна за ворота”</span>
<div className="h-px bg-indigo-700 flex-1"></div>
</div>
<div className="text-center text-indigo-400 mb-2 text-sm uppercase tracking-wide">і</div>
<div className="flex gap-4 items-center mb-8">
<div className="h-px bg-indigo-700 flex-1"></div>
<span className="text-white font-medium bg-indigo-900 px-3 py-1 rounded-lg">“ціна за результат під ключ”</span>
<div className="h-px bg-indigo-700 flex-1"></div>
</div>
<p className="text-indigo-200">Коли це прописано – “доплати з повітря” стають неможливими або передбачуваними.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8">
<h4 className="text-lg font-semibold mb-6">Щоб не було сюрпризів, важливо зафіксувати:</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="bg-emerald-500/20 text-emerald-400 rounded-full p-1 shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-slate-100">параметри отвору і тип підйому</span>
</li>
<li className="flex items-start gap-3">
<div className="bg-emerald-500/20 text-emerald-400 rounded-full p-1 shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-slate-100">що входить в монтаж (не одним рядком)</span>
</li>
<li className="flex items-start gap-3">
<div className="bg-emerald-500/20 text-emerald-400 rounded-full p-1 shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="text-slate-100">автоматика (модель + монтаж + налаштування)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Як виглядає заміна “за 1 день” по-людськи</h2>
<span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shrink-0">1 день</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4">

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center relative">
<div className="text-indigo-900 mb-2 opacity-30 text-4xl absolute -top-4 -left-2 font-bold select-none">1</div>
<iconify-icon className="text-indigo-600 mb-3" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xs sm:text-sm font-medium text-slate-700">Приїзд, захист зони, підготовка</p>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center relative">
<div className="text-indigo-900 mb-2 opacity-30 text-4xl absolute -top-4 -left-2 font-bold select-none">2</div>
<iconify-icon className="text-indigo-600 mb-3" icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xs sm:text-sm font-medium text-slate-700">Демонтаж старих розпашних</p>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center relative">
<div className="text-indigo-900 mb-2 opacity-30 text-4xl absolute -top-4 -left-2 font-bold select-none">3</div>
<iconify-icon className="text-indigo-600 mb-3" icon="solar:garage-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xs sm:text-sm font-medium text-slate-700">Монтаж секційних</p>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center relative">
<div className="text-indigo-900 mb-2 opacity-30 text-4xl absolute -top-4 -left-2 font-bold select-none">4</div>
<iconify-icon className="text-indigo-600 mb-3" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xs sm:text-sm font-medium text-slate-700">Монтаж автоматики</p>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center relative">
<div className="text-indigo-900 mb-2 opacity-30 text-4xl absolute -top-4 -left-2 font-bold select-none">5</div>
<iconify-icon className="text-indigo-600 mb-3" icon="solar:settings-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xs sm:text-sm font-medium text-slate-700">Пусконаладка: налаштування, перевірка стабільної роботи</p>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center relative">
<div className="text-indigo-900 mb-2 opacity-30 text-4xl absolute -top-4 -left-2 font-bold select-none">6</div>
<iconify-icon className="text-indigo-600 mb-3" icon="solar:document-add-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xs sm:text-sm font-medium text-slate-700">Акт і короткий інструктаж: що робити, якщо колись буде збій</p>
</div>
</div>
<div className="mt-8 text-center max-w-2xl mx-auto bg-indigo-50 rounded-xl p-4">
<p className="text-indigo-900 font-medium">Ви не “вникаєте”. Ви просто отримуєте результат:<br/><span className="text-slate-600 font-normal">натиснув – відкрилося. треба закрити – закрилося.</span></p>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight text-center">Для кого це особливо “маст”</h2>
<div className="max-w-xl mx-auto">
<p className="text-slate-600 mb-4">Якщо у вас:</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
<iconify-icon className="text-indigo-500" icon="solar:map-arrow-square-linear" width="20"></iconify-icon>
<span className="text-slate-700">вузький двір або паркування “впритул”</span>
</li>
<li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
<iconify-icon className="text-indigo-500" icon="solar:wind-linear" width="20"></iconify-icon>
<span className="text-slate-700">вітряна місцевість</span>
</li>
<li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
<iconify-icon className="text-indigo-500" icon="solar:snowflake-linear" width="20"></iconify-icon>
<span className="text-slate-700">часті снігопади/намети</span>
</li>
</ul>
<div className="text-center">
<p className="text-lg font-semibold text-indigo-950">то секційні ворота – це не “хочу”. Це нормалізація життя.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50" id="quiz">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
<div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

<div className="bg-indigo-950 p-6 sm:p-8 text-white">
<h2 className="sm:text-2xl text-xl font-semibold mb-2" style={{}}>Чи можна у вас замінити розпашні на секційні за 1 день – і що важливо не проґавити?</h2>
<p className="text-indigo-200 text-sm">Оберіть відповіді. В кінці ви зрозумієте:
                        <br/>– чи реальний сценарій “за 1 день” саме у вашому дворі
                        <br/>– який тип підйому вам підходить
                        <br/>– де можливі доплати і як їх прибрати ще до монтажу
                    </p>
</div>

<div className="p-6 sm:p-8">

<div className="mb-6">
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span id="step-count">Крок 1 з 10</span>
<span id="percent-count">10%</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-600 transition-all duration-300 w-[10%]" id="progress-bar"></div>
</div>
</div>
<form id="quiz-form" onsubmit="event.preventDefault();">

<div className="quiz-step fade-in" data-step="1">
<h3 className="text-lg font-medium text-slate-900 mb-4">1) Яка головна причина, чому вас задовбали розпашні?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q1" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Сніг/лід/намети</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q1" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Вітер смикає створки</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q1" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Немає місця перед гаражем</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q1" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">Замок мерзне/постійні квести</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q1" onchange="nextStep()" type="radio" value="E"/>
<span className="ml-3 text-slate-700">Все разом</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="2">
<h3 className="text-lg font-medium text-slate-900 mb-4">2) Який у вас двір перед гаражем?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q2" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Дуже вузько, розвернутись важко</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q2" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Нормально, але створки все одно заважають</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q2" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Місця достатньо, але хочеться автоматизації</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q2" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">Не знаю, як це правильно оцінити</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="3">
<h3 className="text-lg font-medium text-slate-900 mb-4">3) У вашому районі сильні вітри?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q3" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Так, регулярно</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q3" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Інколи, сезонно</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q3" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Майже ні</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="4">
<h3 className="text-lg font-medium text-slate-900 mb-4">4) Сніг у вас – це…</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q4" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Часто і багато</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q4" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Буває, але не критично</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q4" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Рідко</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="5">
<h3 className="text-lg font-medium text-slate-900 mb-4">5) Що зараз з отвором гаража?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q5" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Проєм “як є”, нічого не переробляв(ла)</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q5" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Є підсилення/перемичка, робили будівельні роботи</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q5" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Не знаю, треба подивитись</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q5" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">Гараж у процесі ремонту</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="6">
<h3 className="text-lg font-medium text-slate-900 mb-4">6) Чи є у гаражі живлення для автоматики?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q6" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Є розетка/кабель біля воріт</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q6" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Є електрика, але треба тягнути</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q6" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Немає – треба робити</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q6" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">Не знаю</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="7">
<h3 className="text-lg font-medium text-slate-900 mb-4">7) Що для вас важливіше після заміни?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q7" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">“Натиснув – відкрилось” без квестів</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q7" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Теплий гараж без продувів/пилу/вологи</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q7" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Тиша (щоб не будити/не дратувало)</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q7" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">Все разом</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="8">
<h3 className="text-lg font-medium text-slate-900 mb-4">8) Який ваш найбільший страх щодо заміни?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q8" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">“Почнуться переробки проєму і доплати”</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q8" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">“Будівельний хаос на тиждень”</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q8" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">“Поставлю – а буде незручно/не під мій двір”</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q8" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">“Потім сервіс – дозвонюйся/чекай”</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q8" onchange="nextStep()" type="radio" value="E"/>
<span className="ml-3 text-slate-700">Все разом</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="9">
<h3 className="text-lg font-medium text-slate-900 mb-4">9) Коли ви хочете зробити заміну?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q9" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">0–7 днів</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q9" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">1–3 тижні</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q9" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">1–2 місяці</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q9" onchange="nextStep()" type="radio" value="D"/>
<span className="ml-3 text-slate-700">Поки просто дивлюсь</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="10">
<h3 className="text-lg font-medium text-slate-900 mb-4">10) Чи готові ви надіслати 4 фото для точного плану “за 1 день”?</h3>
<div className="space-y-3">
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q10" onchange="nextStep()" type="radio" value="A"/>
<span className="ml-3 text-slate-700">Так, надішлю</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q10" onchange="nextStep()" type="radio" value="B"/>
<span className="ml-3 text-slate-700">Можу, але хочу спочатку зрозуміти бюджет</span>
</label>
<label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50">
<input className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600" name="q10" onchange="nextStep()" type="radio" value="C"/>
<span className="ml-3 text-slate-700">Поки ні</span>
</label>
</div>
</div>

<div className="quiz-step hidden fade-in" data-step="final">
<div className="text-center">
<div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-6">Дякуємо! Квіз пройдено.</h3>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 mb-6 text-lg" type="button">
                                    Отримати план заміни за 1 день і список ‘що має бути в під ключ’
                                </button>
<div className="space-y-4 max-w-sm mx-auto">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1 text-left" htmlFor="name">Ім’я</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" id="name" placeholder="Ваше ім’я" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1 text-left" htmlFor="contact">Телефон або Telegram</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" id="contact" placeholder="+380..." type="text"/>
<p className="text-xs text-slate-500 mt-2 text-left">щоб надіслати план і підказати, який тип підйому підходить саме під ваш двір.</p>
</div>
<p className="text-[10px] text-slate-400 mt-4">Ваші дані конфіденційні та використовуються лише для зв'язку по цьому запиту.</p>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-center items-center gap-6">
<button className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Зателефонувати
                </button>
<button className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 font-medium transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                    Telegram
                </button>
</div>
</div>
</footer>


    </>
  );
}
