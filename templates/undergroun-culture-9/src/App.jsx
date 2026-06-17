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



        const track = document.getElementById('slider-track');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const counter = document.getElementById('slide-counter');
        
        let currentSlide = 0;
        const totalSlides = 12;

        function updateSlider() {
            // Update translation
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update counter
            counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && currentSlide > 0) {
                currentSlide--;
                updateSlider();
            } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
            }
        });

        // Initialize state
        updateSlider();
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-[#fafafa]/80 backdrop-blur-md border-b border-zinc-100">
<div className="flex items-center gap-2 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
<span className="tracking-tighter font-medium text-base uppercase">UNDRGRND</span>
</div>
<div className="flex items-center gap-6">
<div className="text-sm font-medium text-zinc-400 tracking-tight" id="slide-counter">
                1 / 12
            </div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" id="prev-btn">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" id="next-btn">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" id="slider-track">

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h1 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Что такое Андерграунд?</h1>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="flex gap-4 items-start">
<iconify-icon className="text-xl text-zinc-400 mt-1 shrink-0" icon="solar:book-bookmark-linear"></iconify-icon>
<div>
<span className="font-medium text-zinc-900">Определение:</span> Андерграунд — это культура «для своих», противопоставляющая себя массовой культуре, официальному искусству и общепринятой идеологии.
                        </div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-xl text-zinc-400 mt-1 shrink-0" icon="solar:bolt-linear"></iconify-icon>
<div>
<span className="font-medium text-zinc-900">Ключевые черты:</span> Нонконформизм, эпатаж, разрыв с традициями, острая критика.
                        </div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-xl text-zinc-400 mt-1 shrink-0" icon="solar:history-linear"></iconify-icon>
<div>
<span className="font-medium text-zinc-900 mb-2 block">Исторические примеры:</span>
<ul className="space-y-3 pl-2 border-l border-zinc-200 ml-2">
<li><span className="text-zinc-800">Прото-андеграунд:</span> Парижская богема XIX века (примат искусства над коммерцией).</li>
<li><span className="text-zinc-800">XX век:</span> Бит-поколение, хиппи, панк-движение в США и Европе.</li>
<li><span className="text-zinc-800">СССР:</span> «Вторая культура» — неофициальное искусство (Лианозовская группа), самиздат, рок-музыка («Аквариум», «Кино»).</li>
</ul>
</div>
</div>
<div className="flex gap-4 items-start pt-4">
<iconify-icon className="text-xl text-zinc-400 mt-1 shrink-0" icon="solar:flag-linear"></iconify-icon>
<div>
<span className="font-medium text-zinc-900">Вывод:</span> Андерграунд — это не просто творчество, а <span className="text-zinc-900">культурная лаборатория</span> и <span className="text-zinc-900">образ жизни</span>, дающий свободу, идентичность и сообщество.
                        </div>
</div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Какие примеры андеграунда вы знаете? Что это слово значит лично для вас?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Почему это может иметь значение для нас?</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="p-5 rounded-xl bg-zinc-100/50 border border-zinc-200/50 text-zinc-800">
<span className="font-medium text-zinc-900">Главная аксиома:</span> Опыт первичен. Все остальное — лишь инструменты для его получения.
                    </div>
<div>
<h3 className="font-medium text-lg text-zinc-900 mb-4 tracking-tight">Философская основа: Американский прагматизм</h3>
<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<div className="text-sm font-medium text-zinc-900 mb-2">Чарльз Пирс</div>
<div className="text-sm text-zinc-500">Значение идеи — в ее практических последствиях.</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<div className="text-sm font-medium text-zinc-900 mb-2">Уильям Джеймс</div>
<div className="text-sm text-zinc-500">Реальность — это «поток сознания», непрерывный личный опыт.</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<div className="text-sm font-medium text-zinc-900 mb-2">Джон Дьюи</div>
<div className="text-sm text-zinc-500">Образование — это сама жизнь. Принцип <span className="text-zinc-800">«обучения через делание»</span>.</div>
</div>
</div>
</div>
<div className="flex gap-4 items-start pt-4 border-t border-zinc-100">
<iconify-icon className="text-xl text-zinc-400 mt-1 shrink-0" icon="solar:lightbulb-linear"></iconify-icon>
<div>
<span className="font-medium text-zinc-900">Вывод:</span> Подлинное развитие происходит не через теорию, а через <span className="text-zinc-900">активную, осмысленную деятельность</span>.
                        </div>
</div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Вспомните, когда вы по-настоящему что-то поняли или чему-то научились. Это было через книги или через практику?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Сообщество как важный элемент опыта</h2>
<div className="space-y-6 text-base font-normal text-zinc-600 leading-relaxed">
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0"></div>
<div><span className="font-medium text-zinc-900">Сообщество как инструмент:</span> Это способ организовать совместный опыт так, чтобы каждый получил больше, чем мог бы в одиночку.</div>
</li>
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0"></div>
<div><span className="font-medium text-zinc-900">Современное понимание:</span> Сообщество — это не территория, а <span className="text-zinc-900">динамическая сеть социальных связей</span>.</div>
</li>
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0"></div>
<div><span className="font-medium text-zinc-900">Роль «слабых связей»:</span> Шапочные знакомые, соседи, бариста — именно они часто источник новой информации и ощущения «своего места».</div>
</li>
</ul>
<div className="mt-8 p-6 bg-white border border-zinc-200 rounded-xl">
<h3 className="font-medium text-sm text-zinc-400 uppercase tracking-widest mb-4">Функции сообщества</h3>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-700">Поддержка</span>
<span className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-700">Идентичность («Кто я?»)</span>
<span className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-700">Социальный капитал</span>
</div>
</div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Приведите пример, когда "слабые связи" — случайный знакомый или сосед — неожиданно вам помогли».</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Город: от пространства опыта к «не-местам»</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="flex gap-4 items-start">
<iconify-icon className="text-xl text-zinc-400 mt-1 shrink-0" icon="solar:city-linear"></iconify-icon>
<div>
<span className="font-medium text-zinc-900">Проблема:</span> Современный мегаполис, обещая возможности, порождает одиночество. Стандартизация и коммерциализация ведут к <span className="text-zinc-900">фальши</span>.
                        </div>
</div>
<div className="pl-9 border-l border-zinc-200 space-y-6">
<div>
<span className="font-medium text-zinc-900 block mb-1">Феномен «не-мест» (Марк Оже):</span>
                            Транзитные, функциональные пространства, лишенные идентичности (аэропорты, супермаркеты, сети отелей). Человек в них — анонимный потребитель.
                        </div>
<div>
<span className="font-medium text-zinc-900 block mb-1">Вытеснение аутентичности (Шэрон Зукин):</span>
                            Уникальные городские пространства (местные магазины, старые кофейни) заменяются сетевыми заведениями. Аутентичность становится товаром.
                        </div>
</div>
<div className="p-5 rounded-xl bg-red-50/50 border border-red-100 text-zinc-800 flex gap-3 items-center">
<iconify-icon className="text-xl text-red-400 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<div><span className="font-medium">Последствия:</span> Пассивность вместо действия, анонимность вместо сообщества, эрозия идентичности.</div>
</div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Какие места в нашем городе вы считаете "живыми", а какие — "не-местами"? В чем разница?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-4xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-6 leading-tight">Андерграунд как альтернатива</h2>
<p className="text-base text-zinc-600 mb-10"><span className="font-medium text-zinc-900">Главная ценность:</span> Андерграунд предлагает структурно иной тип обмена, где сохраняется человечность.</p>
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white mb-8">
<table className="w-full text-left text-sm md:text-base text-zinc-600">
<thead className="bg-zinc-50 border-b border-zinc-200">
<tr>
<th className="py-4 px-6 font-medium text-zinc-900 w-1/2">Городская среда (маски)</th>
<th className="py-4 px-6 font-medium text-zinc-900 w-1/2">Андерграунд (лица)</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6">Кассир улыбается по скрипту.</td>
<td className="py-4 px-6 text-zinc-900">Повар знает, что вы не едите.</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6">Мероприятие — это продукт.</td>
<td className="py-4 px-6 text-zinc-900">Квартирник — это встреча.</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6">Просьба о помощи — это риск.</td>
<td className="py-4 px-6 text-zinc-900">Просьба о помощи — это норма.</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="py-4 px-6">Твоё внимание — это ресурс.</td>
<td className="py-4 px-6 text-zinc-900">Твоё внимание — твоё.</td>
</tr>
</tbody>
</table>
</div>
<div className="text-base text-zinc-600 flex gap-3">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<div><span className="font-medium text-zinc-900">Вывод:</span> «Неэффективность» андеграунда — это не баг, а <span className="font-medium text-zinc-900">фича</span>. Она сохраняет человечность, строя обмен на дарении, взаимопомощи и совместном творчестве.</div>
</div>
<div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Давайте обсудим эти примеры. Где еще мы сталкиваемся с обменом "масками" и где возможен обмен "лицами"?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">За что идет борьба? За наше внимание!</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="text-lg text-zinc-800">
<span className="font-medium text-zinc-900">Внимание — это дефицит.</span> Опыт невозможен без внимания. Это валюта, которой мы «платим» за любое взаимодействие.
                    </div>
<div className="p-5 border-l-2 border-zinc-300 bg-zinc-50 text-zinc-500 italic">
                        «Богатство информации создает бедность внимания» <span className="block text-sm mt-2 text-zinc-400 not-italic">— Герберт Саймон, 1971</span>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-4 tracking-tight">Механизмы захвата:</h3>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<iconify-icon className="text-lg text-zinc-400 mt-1 shrink-0" icon="solar:shop-linear"></iconify-icon>
<div><span className="font-medium text-zinc-800">Бизнес-модели:</span> Монетизация через рекламу.</div>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-lg text-zinc-400 mt-1 shrink-0" icon="solar:smartphone-update-linear"></iconify-icon>
<div><span className="font-medium text-zinc-800">Технологии:</span> Бесконечные ленты, автопроигрывание, персонализированные алгоритмы.</div>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-lg text-zinc-400 mt-1 shrink-0" icon="solar:heart-angle-linear"></iconify-icon>
<div><span className="font-medium text-zinc-800">Психология:</span> Лайки, FOMO (страх упустить), потребность в одобрении.</div>
</li>
</ul>
</div>
<div className="text-zinc-800">
<span className="font-medium">Результат:</span> Утрата равновесия, невроз, неспособность к коллективной деятельности.
                    </div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Чувствуете ли вы, что ваше внимание стало дефицитным ресурсом? Как вы с этим справляетесь?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">«Третьи места»: возвращаем внимание себе</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div>
<span className="font-medium text-zinc-900 block mb-4">Определение (Рэй Ольденбург):</span>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex-1 p-4 rounded-xl border border-zinc-200 bg-white text-center">
<div className="text-xs text-zinc-400 uppercase tracking-widest mb-1">1-е место</div>
<div className="font-medium text-zinc-900">Дом</div>
</div>
<div className="flex-1 p-4 rounded-xl border border-zinc-200 bg-white text-center">
<div className="text-xs text-zinc-400 uppercase tracking-widest mb-1">2-е место</div>
<div className="font-medium text-zinc-900">Работа</div>
</div>
<div className="flex-1 p-4 rounded-xl border border-zinc-300 bg-zinc-100 text-center shadow-inner">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">3-е место</div>
<div className="font-medium text-zinc-900">Неформальные пространства</div>
</div>
</div>
</div>
<ul className="space-y-4 pt-4">
<li className="flex gap-4">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div><span className="font-medium text-zinc-900">Характеристики:</span> Нейтральная территория, «уравнивающий» эффект, разговор как основное занятие, доступность, наличие завсегдатаев.</div>
</li>
<li className="flex gap-4">
<iconify-icon className="text-xl text-zinc-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div><span className="font-medium text-zinc-900">Функция:</span> «Третьи места» — это антитеза «не-местам». Они позволяют «замедлиться», создают условия для живого общения и возвращают внимание человеку.</div>
</li>
</ul>
<div className="p-5 rounded-xl bg-zinc-900 text-zinc-100 mt-4">
<span className="font-medium text-white">Связь:</span> Андеграунд-пространства по своей сути и есть «третьи места».
                    </div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Какие "третьи места" есть в вашей жизни? Если их нет, каким бы было ваше идеальное "третье место"?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Почему «третьи места» создают люди, а не капитал?</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="grid grid-cols-2 gap-4 border-b border-zinc-200 pb-6">
<div>
<div className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Бизнес</div>
<div className="font-medium text-zinc-900">Цель — прибыль.</div>
</div>
<div>
<div className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Сообщество</div>
<div className="font-medium text-zinc-900">Цель — атмосфера и самовыражение.</div>
</div>
</div>
<div>
<h3 className="font-medium text-lg text-zinc-900 mb-4 tracking-tight">Неизбежность провала бизнес-модели:</h3>
<ul className="space-y-5">
<li className="flex gap-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 text-zinc-500 text-xs font-medium shrink-0">1</div>
<div><span className="font-medium text-zinc-800 block">Коммерциализация «убивает вайб»:</span> Требует стандартизации и ориентации на массовый вкус.</div>
</li>
<li className="flex gap-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 text-zinc-500 text-xs font-medium shrink-0">2</div>
<div><span className="font-medium text-zinc-800 block">Невозможность окупаемости без рекламы:</span> Массовая реклама привлекает случайных людей и размывает ядро сообщества.</div>
</li>
<li className="flex gap-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-100 text-zinc-500 text-xs font-medium shrink-0">3</div>
<div><span className="font-medium text-zinc-800 block">Сложность сбора команды «под идею»:</span> Наемный сотрудник работает за зарплату. Энтузиаст вкладывает душу. Таких людей нельзя просто «нанять».</div>
</li>
</ul>
</div>
<div className="p-5 rounded-xl bg-zinc-100/50 border border-zinc-200/50">
<span className="font-medium text-zinc-900">Вывод:</span> Попытка создать «дом для друзей» по бизнес-модели обречена. Нужно <span className="font-medium text-zinc-900">«обыгрывать коммерцию»</span> (донейшн, краудфандинг), чтобы выжить.
                    </div>
</div>
<div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Вспомните место, которое "испортилось" после того, как стало популярным. Что именно в нем изменилось?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-4xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-6 leading-tight">Донейшн: освобождение от диктата капитала</h2>
<p className="text-lg text-zinc-800 font-medium mb-10">Донейшн — это не сбор денег, а инструмент построения сообщества.</p>
<h3 className="font-medium text-sm text-zinc-400 uppercase tracking-widest mb-4">Смена правил игры</h3>
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white mb-10">
<table className="w-full text-left text-sm md:text-base text-zinc-600">
<thead className="bg-zinc-50 border-b border-zinc-200">
<tr>
<th className="py-4 px-6 font-medium text-zinc-900 w-1/2">Старая модель («заработать»)</th>
<th className="py-4 px-6 font-medium text-zinc-900 w-1/2">Новая модель («создать условия»)</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="py-4 px-6">Гость = Клиент</td>
<td className="py-4 px-6 text-zinc-900 font-medium bg-zinc-50/30">Гость = Участник, со-создатель</td>
</tr>
<tr>
<td className="py-4 px-6">Цель = Максимизация выручки</td>
<td className="py-4 px-6 text-zinc-900 font-medium bg-zinc-50/30">Цель = Устойчивость сообщества</td>
</tr>
<tr>
<td className="py-4 px-6">Отношения = Транзакционные</td>
<td className="py-4 px-6 text-zinc-900 font-medium bg-zinc-50/30">Отношения = Партнерские</td>
</tr>
</tbody>
</table>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-4 tracking-tight">Почему это работает:</h3>
<ul className="space-y-3 text-zinc-600">
<li className="flex gap-3 items-center"><iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear"></iconify-icon> Переключает фокус с «купли-продажи» на «совместное создание ценности».</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear"></iconify-icon> Создает общую ответственность: судьба места зависит от каждого.</li>
<li className="flex gap-3 items-center"><iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear"></iconify-icon> Строится на доверии и справедливости: каждый вносит посильный вклад.</li>
</ul>
</div>
<div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Какие чувства у вас вызывает оплата по фиксированной цене и оплата в формате донейшн? В чем для вас разница?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Почему мы сопротивляемся?</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="text-lg">
<span className="font-medium text-zinc-900">Проблема:</span> Мы стесняемся просить о помощи.
                    </div>
<div className="pl-6 border-l-2 border-zinc-200">
<span className="font-medium text-zinc-900 block mb-3">Причины:</span>
<ul className="space-y-3">
<li><span className="text-zinc-800">Стыд бедности/нужды:</span> Просьба о деньгах воспринимается как признак неудачи.</li>
<li><span className="text-zinc-800">Страх быть навязчивым:</span> Боязнь показаться «попрошайкой».</li>
<li><span className="text-zinc-800">Шаблон «услуга-оплата»:</span> Мы привыкли к рыночной модели. Просьба о донейшене ломает этот шаблон.</li>
</ul>
</div>
<div className="p-5 rounded-xl bg-orange-50/50 border border-orange-100 text-zinc-800">
<span className="font-medium text-orange-900 block mb-1">Противоречие:</span> 
                        Призывая гостей «быть собой», но умалчивая о финансовых нуждах, организаторы сами создают фальшь.
                    </div>
<div>
<span className="font-medium text-zinc-900">Последствия:</span> Иерархическая модель «кафе» (клиент-поставщик) разрушает сообщество, ведет к выгоранию организаторов и превращает живое место в стерильную зону обслуживания.
                    </div>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Как вы думаете, почему в нашей культуре так сложно открыто говорить о деньгах и просить о поддержке?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Как сделать правильно: вклад каждого важен</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="p-5 rounded-xl bg-zinc-900 text-white">
<span className="font-medium">Главный принцип:</span> Сделать вклад каждого видимым и ценным, особенно нефинансовый.
                    </div>
<div>
<h3 className="font-medium text-zinc-900 mb-5 tracking-tight">Механизмы справедливости и участия:</h3>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-zinc-200 bg-white">
<iconify-icon className="text-xl text-zinc-400 mb-2" icon="solar:eye-linear"></iconify-icon>
<div className="font-medium text-zinc-900 text-sm mb-1">Прозрачность</div>
<div className="text-sm text-zinc-500">Открытый бюджет, доска задач/проектов.</div>
</div>
<div className="p-4 rounded-xl border border-zinc-200 bg-white">
<iconify-icon className="text-xl text-zinc-400 mb-2" icon="solar:star-linear"></iconify-icon>
<div className="font-medium text-zinc-900 text-sm mb-1">Подсветка вклада</div>
<div className="text-sm text-zinc-500">Публичная благодарность, статусы, визуализация цели.</div>
</div>
<div className="p-4 rounded-xl border border-zinc-200 bg-white">
<iconify-icon className="text-xl text-zinc-400 mb-2" icon="solar:hand-shake-linear"></iconify-icon>
<div className="font-medium text-zinc-900 text-sm mb-1">Альтернативный вклад</div>
<div className="text-sm text-zinc-500">Списки помощи (время, навыки, уборка, рассказ друзьям).</div>
</div>
<div className="p-4 rounded-xl border border-zinc-200 bg-white">
<iconify-icon className="text-xl text-zinc-400 mb-2" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div className="font-medium text-zinc-900 text-sm mb-1">Уровни участия</div>
<div className="text-sm text-zinc-500">Степени вовлеченности: Гость → Участник → Ядро.</div>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-200">
<span className="font-medium text-zinc-900">Вывод:</span> Просьба о поддержке — это не попрошайничество, а <span className="font-medium text-zinc-900">приглашение к совместному действию</span>.
                    </div>
</div>
<div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-300 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base font-medium text-zinc-800 italic leading-relaxed">«Какой нефинансовый вклад вы могли бы или хотели бы внести в проект, который вам дорог?»</p>
</div>
</div>
</section>

<section className="min-w-full h-full pt-28 pb-12 px-6 md:px-12 overflow-y-auto no-scrollbar flex justify-center">
<div className="w-full max-w-3xl flex flex-col justify-center min-h-[80vh] py-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-10 leading-tight">Наш опыт: «Средства определяют цель»</h2>
<div className="space-y-8 text-base font-normal text-zinc-600 leading-relaxed">
<div className="text-lg">
<span className="font-medium text-zinc-900">Итоговый принцип:</span> Не «цель оправдывает средства», а <span className="font-medium text-zinc-900">«средства определяют цель»</span>. То, КАК мы что-то делаем, важнее того, ЧТО мы делаем.
                    </div>
<div className="flex flex-col sm:flex-row gap-6">
<div className="flex-1 p-5 rounded-xl border border-zinc-200 bg-white">
<iconify-icon className="text-xl text-zinc-300 mb-2" icon="solar:close-circle-linear"></iconify-icon>
<div className="text-sm">Используя «грязные» средства (ложь, манипуляции), мы получаем «грязный» результат и разрушаем себя.</div>
</div>
<div className="flex-1 p-5 rounded-xl border border-zinc-300 bg-zinc-50 shadow-sm">
<iconify-icon className="text-xl text-zinc-800 mb-2" icon="solar:check-circle-linear"></iconify-icon>
<div className="text-sm text-zinc-900 font-medium">Используя «благие» средства (честность, уважение, заботу), мы наполняем этим качеством и результат, и сам процесс.</div>
</div>
</div>
<ul className="space-y-4 pt-4">
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0"></div>
<div><span className="font-medium text-zinc-900">Путь к самости:</span> Деятельность, основанная на внутренних ценностях, — это путь к обретению целостности и внутренней гармонии.</div>
</li>
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0"></div>
<div><span className="font-medium text-zinc-900">Призыв к действию:</span> Начать с малого. Практиковать «благие средства» в повседневной жизни. Андеграунд-проект — идеальная площадка для такой практики.</div>
</li>
</ul>
</div>
<div className="mt-16 p-6 md:p-8 rounded-2xl bg-zinc-900 text-white shadow-lg flex gap-4 items-start">
<iconify-icon className="text-2xl text-zinc-400 mt-0.5 shrink-0" icon="solar:chat-round-line-linear"></iconify-icon>
<div>
<span className="text-xs text-zinc-400 uppercase tracking-widest mb-1 block">Финальный вопрос</span>
<p className="text-base md:text-lg font-medium italic leading-relaxed">«Какое одно небольшое действие ("средство") в вашей жизни вы могли бы изменить уже сегодня, чтобы оно лучше соответствовало вашим ценностям ("цели")?»</p>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
