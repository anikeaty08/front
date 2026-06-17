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



    // --- Utilities ---
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
    const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

    const state = {
      currentId: null,
      currentTopic: null,
      conversations: {},  // id -> {query, messages: [...], results: [...]}
    };

    // Load from storage
    const STORAGE_KEY = 'rc:conversations:v1';
    const loadState = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) state.conversations = JSON.parse(raw);
      } catch {}
    };
    const saveState = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state.conversations));

    // Icons
    function refreshIcons() {
      try { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } catch {}
    }

    // Toast
    function toast(msg) {
      const t = $('#toast');
      t.textContent = msg;
      t.classList.remove('opacity-0', 'translate-y-2');
      t.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        t.classList.add('opacity-0', 'translate-y-2');
      }, 1600);
    }

    // --- Conversation rendering ---
    function addMsg(role, text) {
      const wrap = document.createElement('div');
      wrap.className = 'flex items-start gap-3';
      if (role === 'user') wrap.classList.add('justify-end');
      const bubble = document.createElement('div');

      if (role === 'user') {
        bubble.className = 'max-w-[80%] rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-rose-500/20 ring-1 ring-white/10 px-3 py-2 text-sm';
      } else {
        bubble.className = 'max-w-[80%] rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white/80';
      }
      bubble.textContent = text;

      if (role === 'assistant') {
        const avatar = document.createElement('div');
        avatar.className = 'shrink-0 h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center';
        avatar.innerHTML = '<i data-lucide="bot" class="h-4 w-4 text-white/80"></i>';
        wrap.appendChild(avatar);
        wrap.appendChild(bubble);
      } else {
        wrap.appendChild(bubble);
        const avatar = document.createElement('div');
        avatar.className = 'shrink-0 h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-white/20 flex items-center justify-center';
        avatar.innerHTML = '<i data-lucide="user" class="h-4 w-4 text-white"></i>';
        wrap.appendChild(avatar);
      }

      $('#chatScroll').appendChild(wrap);
      $('#chatScroll').scrollTop = $('#chatScroll').scrollHeight;
      refreshIcons();

      // Save to state
      if (state.currentId) {
        state.conversations[state.currentId].messages.push({ role, text, t: Date.now() });
        saveState();
      }
    }

    // --- Topic detection and clarifying questions ---
    function detectTopic(q) {
      const s = q.toLowerCase();
      if (s.includes('машин') || s.includes('авто') || s.includes('запчаст')) return 'car';
      if (s.includes('комп') || s.includes('пк') || s.includes('игр') || s.includes('собери')) return 'pc';
      if (s.includes('подар')) return 'gift';
      return 'generic';
    }

    function clarifying(topic) {
      const map = {
        car: [
          'Марка, модель и год выпуска?',
          'Какие именно позиции нужны (фильтры, колодки, дворники и т.д.)?',
          'Ограничение по бюджету и предпочтение брендов?',
        ],
        pc: [
          'Цель: игры, работа, монтаж?',
          'Бюджет и ожидаемая тишина/энергоэффективность?',
          'Нужны ли периферия и корпус, или только «начинка»?',
        ],
        gift: [
          'Кому подарок и по какому поводу?',
          'Примерный бюджет?',
          'Есть ли увлечения, хобби или запреты?',
        ],
        generic: [
          'Опишите цель и ограничения по бюджету.',
          'Есть ли предпочтения брендов или сроков доставки?',
        ]
      };
      return map[topic];
    }

    // --- Analysis helpers (added) ---
    function criteriaByTopic(topic) {
      if (topic === 'car') {
        return [
          'совместимость по модели/году',
          'качество бренда и ресурс',
          'рейтинг и отзывы',
          'цена и наличие',
          'сроки доставки'
        ];
      }
      if (topic === 'pc') {
        return [
          'производительность CPU/GPU',
          'цена за производительность',
          'совместимость и энергопотребление',
          'шум и эффективность охлаждения',
          'скорость накопителя и объём ОЗУ'
        ];
      }
      if (topic === 'gift') {
        return [
          'соответствие интересам получателя',
          'бюджет',
          'универсальность и практичность',
          'рейтинг и отзывы',
          'скорость доставки'
        ];
      }
      return [
        'релевантность задаче',
        'цена/качество',
        'рейтинг и отзывы',
        'доступность и доставка'
      ];
    }

    function generateReason(topic, items) {
      const top = [...items].sort((a,b) => b.rating - a.rating)[0];
      if (topic === 'pc') {
        return `Выбранные позиции дают сбалансированную производительность: «${top.title}» обеспечивает лучший уровень за свою цену, а остальные компоненты совместимы и держат низкий шум и энергопотребление.`;
      }
      if (topic === 'car') {
        return `Подобраны проверенные бренды с высокой совместимостью и отзывами. «${top.title}» выделяется надёжностью, а стоимость всех позиций остаётся в разумных пределах.`;
      }
      if (topic === 'gift') {
        return `Товары универсальны, хорошо дарятся и имеют высокие оценки. «${top.title}» — лучший баланс эмоций и пользы в указанном бюджете.`;
      }
      return `Отобраны варианты с лучшим соотношением цены и рейтинга. «${top.title}» — наиболее выгодная позиция среди просмотренных.`;
    }

    function renderAnalysis(items) {
      const panel = $('#analysisPanel');
      if (!panel) return;
      if (!items || !items.length) {
        panel.classList.add('hidden');
        return;
      }
      panel.classList.remove('hidden');

      const crit = criteriaByTopic(state.currentTopic || 'generic');
      const ulCrit = $('#analysisCriteria');
      const ulComp = $('#analysisCompared');
      ulCrit.innerHTML = '';
      ulComp.innerHTML = '';

      crit.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        ulCrit.appendChild(li);
      });

      items.forEach(it => {
        const li = document.createElement('li');
        li.textContent = it.title;
        ulComp.appendChild(li);
      });

      const viewed = items.length + Math.floor(Math.random() * 15) + 6; // имитируем дополнительный просмотр
      $('#analysisViewed').textContent = viewed.toString();
      $('#analysisReason').textContent = generateReason(state.currentTopic || 'generic', items);
      refreshIcons();
    }

    // --- Search simulation (mock) ---
    function randomPrice(min, max) {
      return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    }
    function sampleProducts(topic) {
      if (topic === 'car') {
        return [
          { title: 'Воздушный фильтр Mann C 25 024', img: 'https://images.unsplash.com/photo-1609770231080-62f628ae4b8f?q=80&w=1200&auto=format&fit=crop', price: randomPrice(800, 2200), rating: 4.7 },
          { title: 'Тормозные колодки Bosch QuietCast', img: 'https://images.unsplash.com/photo-1623742645880-5f4aaf0baf86?q=80&w=1200&auto=format&fit=crop', price: randomPrice(2500, 5200), rating: 4.6 },
          { title: 'Щётки стеклоочистителя Denso Hybrid', img: 'https://images.unsplash.com/photo-1534119414532-1254762ab8e1?q=80&w=1200&auto=format&fit=crop', price: randomPrice(900, 1900), rating: 4.5 },
          { title: 'Масляный фильтр Toyota OEM', img: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=1200&auto=format&fit=crop', price: randomPrice(600, 1500), rating: 4.8 },
        ];
      }
      if (topic === 'pc') {
        return [
          { title: 'CPU AMD Ryzen 5 7600', img: 'https://images.unsplash.com/photo-1612198187579-2c2ad59f0cbc?q=80&w=1200&auto=format&fit=crop', price: randomPrice(15000, 22000), rating: 4.8 },
          { title: 'GPU GeForce RTX 4060 Ti', img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200&auto=format&fit=crop', price: randomPrice(39000, 56000), rating: 4.7 },
          { title: 'SSD NVMe 1TB', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop', price: randomPrice(5000, 9000), rating: 4.6 },
          { title: 'ОЗУ 32GB (2x16) DDR5', img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop', price: randomPrice(8000, 14000), rating: 4.6 },
        ];
      }
      if (topic === 'gift') {
        return [
          { title: 'Мини‑проектор для дома', img: 'https://images.unsplash.com/photo-1512446816042-444d641267ee?q=80&w=1200&auto=format&fit=crop', price: randomPrice(6000, 12000), rating: 4.6 },
          { title: 'Акустическая колонка‑свеча', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200&auto=format&fit=crop',
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(94,29,148,0.35),transparent),radial-gradient(900px_500px_at_-10%_10%,rgba(19,46,131,0.5),transparent),linear-gradient(180deg,rgba(8,13,41,0.85),rgba(8,13,41,0.95))]"></div>
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 backdrop-blur-md ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-sparkle h-5 w-5 text-white" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<span className="text-lg tracking-tight font-semibold">RandomCraft</span>
<span className="hidden sm:inline text-sm text-white/60">умные подборки</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-white/70 hover:text-white transition" href="#">Возможности</a>
<a className="text-white/70 hover:text-white transition" href="#">Как это работает</a>
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" id="openHistory">
<svg className="lucide lucide-history h-4 w-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
            История
          </button>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-[0_8px_30px_rgba(240,46,170,0.35)] hover:brightness-110 transition active:scale-[.98]" id="newQueryBtn">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Новый запрос
          </button>
<button className="md:hidden inline-flex items-center justify-center rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10" id="menuMobile">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
<svg className="lucide lucide-wand-2 h-3.5 w-3.5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
          AI • Поиск с уточнениями
        </div>
<h1 className="mt-4 text-4xl sm:text-5xl tracking-tight font-semibold">
          Подбираем лучшие товары <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-300">по вашему запросу</span>
</h1>
<p className="mt-4 text-white/70">
          Напишите, что нужно: «подбери запчасти для машины», «собери компьютер», «выбери подарок». Ассистент уточнит детали, найдёт оптимальные позиции и вернёт ссылки с нашим реф‑кодом.
        </p>

<div className="mt-6 flex flex-wrap gap-2">
<button className="presetChip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" data-preset="подбери мне запчасти для машины">
<svg className="lucide lucide-car h-4 w-4" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg> Запчасти для машины
          </button>
<button className="presetChip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" data-preset="собери компьютер для игр и работы">
<svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> Собрать ПК
          </button>
<button className="presetChip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" data-preset="выбери подарок на день рождения">
<svg className="lucide lucide-gift h-4 w-4" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg> Подарок
          </button>
</div>

<div className="bg-white/5 ring-white/10 ring-1 rounded-2xl mt-6 pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-rose-500 px-4 py-2 text-sm font-medium tracking-tight shadow-[0_8px_30px_rgba(240,46,170,0.35)] hover:brightness-110 transition" id="tryBtn" onclick="(function(){var c=document.getElementById('chatScroll'); if(c){c.scrollIntoView();} var i=document.getElementById('chatInput'); if(i){i.focus();}})()">
    Попробовать
    <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12  7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/10 to-transparent blur-2xl -z-10"></div>
<div className="rounded-[2rem] overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur">
</div>
</div>
</div>
</section>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
<header className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center ring-1 ring-white/20">
<svg className="lucide lucide-bot h-4 w-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight">Ассистент</div>
<div className="text-xs text-emerald-300/80">онлайн</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="hidden sm:inline text-xs text-white/50">уточняет детали, затем ищет товары</span>
</div>
</header>
<div className="h-[28rem] sm:h-[32rem] overflow-y-auto p-4 space-y-4" id="chatScroll">

<div className="flex items-start gap-3">
<div className="shrink-0 h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-bot h-4 w-4 text-white/80" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="max-w-[80%] rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white/80">
              Привет! Опишите задачу — я задам пару уточнений, выполню поиск и подберу лучшие варианты.
            </div>
</div>
<div className="flex items-start gap-3"><div className="shrink-0 h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center"><svg className="lucide lucide-bot h-4 w-4 text-white/80" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></div><div className="max-w-[80%] rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white/80">Например: могу подобрать запчасти по VIN, собрать ПК под бюджет или предложить подарки по интересам.</div></div><div className="flex items-start gap-3"><div className="shrink-0 h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center"><svg className="lucide lucide-bot h-4 w-4 text-white/80" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></div><div className="max-w-[80%] rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white/80">Например: могу подобрать запчасти по VIN, собрать ПК под бюджет или предложить подарки по интересам.</div></div></div>

<div className="border-t border-white/10 p-3">
<div className="flex items-end gap-2">
<div className="flex-1 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<textarea className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none resize-none" id="chatInput" placeholder="Напишите уточнение или новый запрос..." rows="2"></textarea>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-rose-500 px-4 py-2 text-sm font-medium tracking-tight shadow-[0_8px_30px_rgba(240,46,170,0.35)] hover:brightness-110 transition" id="sendChat">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Отправить
            </button>
</div>

<div className="mt-2 flex flex-wrap gap-2">
<button className="chip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" data-chip="бюджет до 120 000 ₽">
<svg className="lucide lucide-banknote h-3.5 w-3.5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg> бюджет до 120 000 ₽
            </button>
<button className="chip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" data-chip="нужен акцент на тишину и энергоэффективность">
<svg className="lucide lucide-volume-x h-3.5 w-3.5" data-lucide="volume-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413л3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg> тишина/энергоэффективность
            </button>
<button className="chip inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" data-chip="срок доставки до 3 дней">
<svg className="lucide lucide-truck h-3.5 w-3.5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624л-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg> доставка до 3 дней
            </button>
</div>
</div>
</section>

<section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
<header className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="">
<h3 className="text-lg tracking-tight font-semibold">Подборка</h3>
<p className="text-xs text-white/60" id="resultSummary">Результаты появятся после уточнений</p>
</div>
<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" id="sortBtn">
<svg className="lucide lucide-arrow-up-down h-3.5 w-3.5" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
                Сортировка
              </button>
<div className="hidden absolute right-0 mt-2 w-44 rounded-xl bg-[#111635] ring-1 ring-white/10 shadow-xl overflow-hidden" id="sortMenu">
<button className="block w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="rating">По рейтингу</button>
<button className="block w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="price-asc">Цена: по возрастанию</button>
<button className="block w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="price-desc">Цена: по убыванию</button>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" id="shareBtn">
<svg className="lucide lucide-share-2 h-3.5 w-3.5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
              Поделиться
            </button>
<button className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" id="copyLinkBtn">
<svg className="lucide lucide-link h-3.5 w-3.5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07л-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54л-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Скопировать ссылку
            </button>
</div>
</header>
<div className="p-4" id="resultsWrap">

<div className="hidden space-y-3" id="loading">
<div className="h-4 w-40 rounded bg-white/10 animate-pulse"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="h-36 rounded-lg bg-white/10 animate-pulse"></div>
<div className="mt-3 space-y-2">
<div className="h-4 w-3/4 rounded bg-white/10 animate-pulse"></div>
<div className="h-4 w-1/2 rounded bg-white/10 animate-pulse"></div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="h-36 rounded-lg bg-white/10 animate-pulse"></div>
<div className="mt-3 space-y-2">
<div className="h-4 w-3/4 rounded bg-white/10 animate-pulse"></div>
<div className="h-4 w-1/2 rounded bg-white/10 animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-4 mb-4" id="analysisPanel">
<div className="flex items-center justify-between">
<h4 className="text-sm tracking-tight font-medium">Краткий анализ</h4>
</div>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<div className="text-xs text-white/60">Учитывались</div>
<ul className="mt-1 text-sm text-white/80 list-disc list-inside space-y-1" id="analysisCriteria"></ul>
</div>
<div>
<div className="text-xs text-white/60">Сравнивались</div>
<ul className="mt-1 text-sm text-white/80 list-disc list-inside space-y-1" id="analysisCompared"></ul>
</div>
</div>
<div className="mt-3 flex items-center gap-3 text-sm text-white/80">
<div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
<i className="h-3.5 w-3.5" data-lucide="list-checks"></i>
<span>Просмотрено: <span id="analysisViewed">—</span></span>
</div>
</div>
<div className="mt-3">
<div className="text-xs text-white/60">Обоснование</div>
<p className="mt-1 text-sm text-white/80" id="analysisReason"></p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="resultsGrid"></div>
</div>
</section>
</div>
</main>

<aside className="fixed top-0 right-0 h-full w-full sm:w-[24rem] translate-x-full transition-transform duration-300 z-50" id="historyDrawer">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm sm:bg-transparent" id="historyBackdrop"></div>
<div className="ml-auto h-full w-full sm:w-[24rem] bg-[#0e1436]/95 ring-1 ring-white/10 backdrop-blur px-4 py-4 overflow-y-auto">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-history h-5 w-5 text-white/80" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7в5л4 2"></path></svg>
<h4 className="text-lg tracking-tight font-semibold">История запросов</h4>
</div>
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10" id="closeHistory">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-4 space-y-2" id="historyList"><button className="w-full text-left rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition p-3">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-sparkle h-4 w-4" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0л1.051 5.558a2 2 0 0 0 1.594 1.594л5.558 1.051a1 1 0 0 1 0 1.966л-5.558 1.051a2 2 0 0 0-1.594 1.594л-1.051 5.558a1 1 0 0 1-1.966 0л-1.051-5.558a2 2 0 0 0-1.594-1.594л-5.558-1.051a1 1 0 0 1 0-1.966л5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight line-clamp-2">dsadas</div>
<div className="text-xs text-white/50 mt-0.5">Другое <span className="ml-2 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] px-2 py-0.5 ring-1 ring-emerald-300/30">готово</span></div>
</div>
</div>
</button><button className="w-full text-left rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition p-3">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-sparkle h-4 w-4" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0л1.051 5.558a2 2 0 0 0 1.594 1.594л5.558 1.051a1 1 0 0 1 0 1.966л-5.558 1.051a2 2 0 0 0-1.594 1.594л-1.051 5.558a1 1 0 0 1-1.966 0л-1.051-5.558a2 2 0 0 0-1.594-1.594л-5.558-1.051a1 1 0 0 1 0-1.966л5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight line-clamp-2">собери компьютер для игр и работы</div>
<div className="text-xs text-white/50 mt-0.5">Компьютер <span className="ml-2 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] px-2 py-0.5 ring-1 ring-emerald-300/30">готово</span></div>
</div>
</div>
</button></div>
</div>
</aside>

<div className="pointer-events-none fixed bottom-5 inset-x-0 mx-auto w-fit rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur ring-1 ring-white/10 opacity-0 translate-y-2 transition" id="toast">
    Ссылка скопирована
  </div>

    </>
  );
}
