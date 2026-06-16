import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // 1. Автоматичний розрахунок відступів для карток-модулів
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.module-card');
    cards.forEach((card, index) => {
      card.style.top = `calc(2.5rem + ${index * 4}rem)`;
      card.style.zIndex = 10 + index;
    });
  });

  // 2. Акордеон всередині модулів
  function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');
    const isOpen = content.style.gridTemplateRows === "1fr";
    content.style.gridTemplateRows = isOpen ? "0fr" : "1fr";
    arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  }

  // 3. Відкриття попапу
  function openReviews(moduleName) {
    const modal = document.getElementById('modal-reviews');
    document.getElementById('modal-title').innerText = 'Відгуки про ' + moduleName;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  // 4. Закриття попапу (по кнопці)
  function closeModal() {
    const modal = document.getElementById('modal-reviews');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'auto';
  }

  // 5. Закриття попапу по кліку на порожній фон навколо Bento
  function closeModalOutside(event) {
    if (event.target.id === 'modal-reviews') {
      closeModal();
    }
  }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="md:px-12 lg:px-24 overflow-hidden bg-[#050505] border-gray-900 border-b pt-32 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-white opacity-[0.02] blur-[8rem] pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10">
<div className="lg:w-1/4">
<div className="text-xs tracking-widest text-gray-500 uppercase flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 block"></span> Навчання
        </div>
</div>
<div className="lg:w-3/4">

<div className="inline-flex gap-3 border-gray-800 border rounded-full mb-2 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<span className="flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
<span className="text-xs text-gray-300 font-medium tracking-wide">Режим Аркада: 3 рівня складності</span>
</div>
<div className="inline-flex items-center gap-3 border border-gray-800 rounded-full px-4 py-2 mb-8 bg-white/[0.02] backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
<span className="text-xs text-gray-300 font-medium tracking-wide">Окремі модулі</span>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-8">
          Натаргетигрував 3.0
        </h1>

<p className="md:text-lg leading-relaxed text-base text-gray-400 max-w-2xl mb-10">
          Якщо ви новачок або з нуля — обирайте режим Аркаду і проходьте курс в тому ж порядку, в якому ви будете надавати клієнту послугу. Якщо ви вже маєте певний досвід і хочете закрити точковий запит — купуйте потрібний модуль.
        </p>


<div className="flex flex-col sm:flex-row gap-4 mb-20">
<button className="bg-white text-black font-medium text-sm px-8 py-3.5 rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center gap-2">
            Що на курсі
            <iconify-icon className="" height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
<button className="bg-transparent border border-gray-800 text-white font-medium text-sm px-8 py-3.5 rounded-xl hover:bg-white/5 transition-colors flex justify-center items-center">
            Тарифи
          </button>
</div><div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

<div className="group hover:border-gray-700 hover:bg-white/[0.03] transition-all cursor-default overflow-hidden bg-gradient-to-b from-white/[0.015] to-transparent border-gray-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-3 mb-1">
<div className="text-gray-500 group-hover:text-red-500 transition-colors">
<iconify-icon className="" height="1.5em" icon="solar:laptop-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-gray-200 font-medium text-sm tracking-tight flex-1">Практичні та сучасні уроки</h3>
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-800/50 mt-3">
                          лорем іпсум
                        </p>
</div>
</div>
</div>

<div className="group hover:border-gray-700 hover:bg-white/[0.03] transition-all cursor-default overflow-hidden bg-gradient-to-b from-white/[0.015] to-transparent border-gray-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-3 mb-1">
<div className="text-gray-500 group-hover:text-red-500 transition-colors">
<iconify-icon className="" height="1.5em" icon="solar:chart-square-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-gray-200 font-medium text-sm tracking-tight flex-1">Трекінг прогресу навчання</h3>
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-800/50 mt-3">
                          лорем іпсум
                        </p>
</div>
</div>
</div>

<div className="group p-6 border border-gray-800/60 rounded-2xl bg-gradient-to-b from-white/[0.015] to-transparent hover:border-gray-700 hover:bg-white/[0.03] transition-all cursor-default relative overflow-hidden">
<div className="flex items-center gap-3 mb-1">
<div className="text-gray-500 group-hover:text-red-500 transition-colors">
<iconify-icon className="" height="1.5em" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-gray-200 font-medium text-sm tracking-tight flex-1">Робота з ШІ та подіями сайтів</h3>
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-800/50 mt-3">
                          лорем іпсум
                        </p>
</div>
</div>
</div>

<div className="group p-6 border border-gray-800/60 rounded-2xl bg-gradient-to-b from-white/[0.015] to-transparent hover:border-gray-700 hover:bg-white/[0.03] transition-all cursor-default relative overflow-hidden">
<div className="flex items-center gap-3 mb-1">
<div className="text-gray-500 group-hover:text-red-500 transition-colors">
<iconify-icon height="1.5em" icon="solar:layers-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<h3 className="text-gray-200 font-medium text-sm tracking-tight flex-1">Комплексна система роботи</h3>
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-800/50 mt-3">
                          лорем іпсум
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-900">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
<div className="lg:w-1/4">
<div className="text-xs tracking-widest text-gray-500 uppercase flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 block"></span> Ціль програми
        </div>
</div>
<div className="lg:w-3/4">
<h2 className="leading-tight md:text-4xl lg:text-5xl text-3xl font-medium tracking-tight mb-10">
          Трансформувати підхід до управління та стати керівником, який приведе бізнес до результату
        </h2><p className="md:text-lg leading-relaxed text-base text-gray-400 max-w-2xl mb-10">
          Якщо ви новачок або з нуля — обирайте режим Аркаду і проходьте курс в тому ж порядку, в якому ви будете надавати клієнту послугу. Якщо ви вже маєте певний досвід і хочете закрити точковий запит — купуйте потрібний модуль.
        </p>
<div className="flex flex-col">
<div className="group flex flex-col md:flex-row md:items-center py-6 border-b border-gray-800 gap-4 md:gap-8 transition-colors hover:bg-white/5 px-4 -mx-4">
<div className="md:w-5/12 text-gray-500 text-sm md:text-base transition-colors group-hover:text-gray-300">Розвиток компанії йде хаотично</div>
<div className="hidden md:flex justify-center text-gray-600 w-10 group-hover:text-red-600 transition-colors">→</div>
<div className="md:w-6/12 text-gray-200 text-sm md:text-base">Маю чіткий план розвитку на 1-3 роки</div>
</div>
<div className="group flex flex-col md:flex-row md:items-center py-6 border-b border-gray-800 gap-4 md:gap-8 transition-colors hover:bg-white/5 px-4 -mx-4">
<div className="md:w-5/12 text-gray-500 text-sm md:text-base transition-colors group-hover:text-gray-300">Не розумію як контролювати ключові напрямки</div>
<div className="hidden md:flex justify-center text-gray-600 w-10 group-hover:text-red-600 transition-colors">→</div>
<div className="md:w-6/12 text-gray-200 text-sm md:text-base">Маю чітко визначені метрики для продажів, маркетингу, HR, фінансів та інших відділів.</div>
</div>
</div>
</div>
</div>
</section>
<section className="md:px-12 lg:px-24 bg-[#050505] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">

<div className="lg:w-1/4">
<div className="uppercase flex sticky text-xs text-gray-500 tracking-widest top-10 items-center">
<span className="w-1.5 h-1.5 block bg-red-600 rounded-full"></span>
                Що всередині
            </div>
</div>

<div className="lg:w-3/4">
<h2 className="md:text-4xl lg:text-5xl text-3xl font-medium text-white tracking-tight mb-10">
                Програма курсу
            </h2><p className="md:text-lg leading-relaxed text-base text-gray-400 max-w-2xl mb-10">
          Якщо ви новачок або з нуля — обирайте режим Аркаду і проходьте курс в тому ж порядку, в якому ви будете надавати клієнту послугу. Якщо ви вже маєте певний досвід і хочете закрити точковий запит — купуйте потрібний модуль.
        </p>
<div className="relative">

<div className="module-card sticky bg-[#0d0d0d] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl mb-12" style={{top: 'calc(2.5rem)', zIndex: '10'}}>
<div className="mb-10">
<div className="text-sm text-gray-500 mb-4">Модуль 1</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                            Новий погляд на роль CEO: Як стати лідером
                        </h3>
</div>
<div className="flex justify-between items-end mb-6">
<div className="">
<p className="text-sm text-gray-500 mb-1">Наповнення:</p>
<p className="text-lg text-white font-medium">2 уроки</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-400 mb-1">
                                Оцінка: <span className="text-white font-medium">5.5/7</span>
</p>
<button className="text-sm text-red-600 font-medium underline decoration-red-600/30 hover:text-red-400" onclick="openReviews('Модуль 1')">
                                Відкрити відгуки
                            </button>
</div>
</div>
<div className="w-full h-[1px] bg-gray-800 mb-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group">
<button className="flex items-start gap-4 w-full text-left text-gray-400 group-hover:text-white transition-all" onclick="toggleAccordion(this)">
<span className="text-gray-700 font-mono text-lg">[1]</span>
<span className="leading-tight flex-1 text-lg">Чим має займатися CEO?</span>
<span className="text-gray-700 transition-transform duration-300 arrow">↓</span>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-500">
<div className="overflow-hidden">
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                        Урок 1
                                    </div>
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                      Урок 2
                                    </div>
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                      Урок 3
                                    </div>
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                      Урок 4
                                    </div>
</div>
</div>
</div>

<div className="group">
<button className="flex items-start gap-4 w-full text-left text-gray-400 group-hover:text-white transition-all" onclick="toggleAccordion(this)">
<span className="text-gray-700 font-mono text-lg">[2]</span>
<span className="leading-tight flex-1 text-lg">Хард і софт скіли лідера</span>
<span className="transition-transform duration-300 arrow text-gray-700">↓</span>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-500">
<div className="overflow-hidden">
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                        Урок 1.
                                    </div>
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                      Урок 2.
                                    </div>
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                      Урок 3.
                                    </div>
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                      Урок 4.
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="module-card sticky bg-[#121212] rounded-2xl border border-gray-800 p-8 md:p-12 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] mb-12" style={{top: 'calc(6.5rem)', zIndex: '11'}}>
<div className="mb-10">
<div className="text-sm text-gray-500 mb-4">Модуль 2</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                            Ефективна взаємодія: Від акціонерів до команди
                        </h3>
</div>
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-sm text-gray-500 mb-1">Наповнення:</p>
<p className="text-lg text-white font-medium">4 уроки</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-400 mb-1">
                                Оцінка: <span className="text-white font-medium">6.1/7</span>
</p>
<button className="text-sm text-red-600 font-medium underline decoration-red-600/30 hover:text-red-400" onclick="openReviews('Модуль 2')">
                                Відкрити відгуки
                            </button>
</div>
</div>
<div className="w-full h-[1px] bg-gray-800 mb-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group">
<button className="flex items-start gap-4 w-full text-left text-gray-400 group-hover:text-white transition-all" onclick="toggleAccordion(this)">
<span className="text-gray-700 font-mono text-lg">[1]</span>
<span className="text-lg leading-tight flex-1">Взаємодія з акціонерами</span>
<span className="text-gray-700 transition-transform duration-300 arrow">↓</span>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-500">
<div className="overflow-hidden">
<div className="pt-6 pl-10 space-y-3 text-sm text-gray-500">
                                        Деталі взаємодії...
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-900">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
<div className="lg:w-1/4">
<div className="text-xs tracking-widest text-gray-500 uppercase flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 block"></span> Результат
        </div>
</div>
<div className="lg:w-3/4">
<h2 className="text-3xl font-medium tracking-tight mb-10 md:text-4xl lg:text-5xl">В результаті NEO CEO ви:</h2><p className="md:text-lg leading-relaxed text-base text-gray-400 max-w-2xl mb-10">
          Якщо ви новачок або з нуля — обирайте режим Аркаду і проходьте курс в тому ж порядку, в якому ви будете надавати клієнту послугу. Якщо ви вже маєте певний досвід і хочете закрити точковий запит — купуйте потрібний модуль.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
<div className="group flex items-start gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-4 -mx-4">
<span className="text-gray-500 group-hover:text-red-600 transition-colors">→</span>
<p className="text-gray-400 text-sm leading-relaxed transition-colors group-hover:text-gray-200">Визначите власні зони росту, щоб знати, на чому фокусуватися для управління.</p>
</div>
<div className="group flex items-start gap-4 py-8 border-b border-gray-800 transition-colors hover:bg-white/5 px-4 -mx-4">
<span className="text-gray-500 group-hover:text-red-600 transition-colors">→</span>
<p className="text-gray-400 text-sm leading-relaxed transition-colors group-hover:text-gray-200">Сформуєте план перших кроків і стратегію розвитку компанії на рік вперед.</p>
</div>
</div>
<div className="mt-20">
<button className="btn-transition bg-[#ff0000] border-2 border-[#ff0000] text-white font-medium py-5 px-14 flex items-center gap-8 hover:bg-transparent hover:text-[#ff0000] group">
            ЗАПИСАТИСЯ 
            <span className="text-2xl font-light transition-transform group-hover:translate-x-2">→</span>
</button>
</div>
</div>
</div>
</section>


    </>
  );
}
