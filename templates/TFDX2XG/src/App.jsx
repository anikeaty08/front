import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Mobile menu
      const btn = document.getElementById('mobileMenuBtn');
      const nav = document.getElementById('mobileNav');
      if (btn && nav) {
        btn.addEventListener('click', () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          nav.classList.toggle('hidden');
        });
      }

      // AI mini demo
      const aiSuggest = document.getElementById('aiSuggest');
      const aiClear = document.getElementById('aiClear');
      const aiPrompt = document.getElementById('aiPrompt');
      const aiResult = document.getElementById('aiResult');

      if (aiSuggest) {
        aiSuggest.addEventListener('click', () => {
          const q = (aiPrompt.value || '').trim();
          const sample = "Семья 2+1, 5 ночей, май, вылет из Алматы, бюджет $2k, пляж, all inclusive";
          const text = q.length ? q : sample;
          aiResult.innerHTML =
            '<p class="font-medium text-white">Подбор по запросу:</p>' +
            '<ul class="mt-2 list-disc pl-5 space-y-1">' +
            '<li>Тур 1: Rixos Bab Al Bahr, 5 ночей, AI — $1,980</li>' +
            '<li>Тур 2: JA The Resort, 5 ночей, HB — $1,720</li>' +
            '<li>Добавить: трансфер + страховка (семейный пакет)</li>' +
            '</ul>' +
            '<p class="mt-2 text-white/70 text-xs">Сформировано алгоритмом рекомендаций (демо).</p>';
          aiResult.classList.remove('hidden');
        });
      }
      if (aiClear) {
        aiClear.addEventListener('click', () => {
          aiPrompt.value = '';
          aiResult.classList.add('hidden');
          aiResult.innerHTML = '';
        });
      }

      // Demo form
      const demoForm = document.getElementById('demoForm');
      const toast = document.getElementById('toast');
      if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
          e.preventDefault();
          // Simulate submit
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 3500);
          demoForm.reset();
        });
      }

      // Charts
      function makeGradient(ctx, color) {
        const g = ctx.createLinearGradient(0, 0, 0, 180);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        return g;
      }

      const gmvCtx = document.getElementById('gmvChart')?.getContext('2d');
      if (gmvCtx) {
        const c = 'rgba(34,211,238,0.5)';
        new Chart(gmvCtx, {
          type: 'line',
          data: {
            labels: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            datasets: [{
              label: 'GMV',
              data: [120, 140, 180, 210, 260, 300, 420, 460, 500, 540, 600, 700],
              tension: 0.35,
              borderColor: 'rgba(34,211,238,0.9)',
              backgroundColor: makeGradient(gmvCtx, c),
              pointRadius: 0,
              fill: true
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } }
            }
          }
        });
      }

      const mixCtx = document.getElementById('mixChart')?.getContext('2d');
      if (mixCtx) {
        new Chart(mixCtx, {
          type: 'doughnut',
          data: {
            labels: ['Пакеты', 'Отели', 'Авиа', 'Доп.услуги'],
            datasets: [{
              data: [45, 30, 15, 10],
              backgroundColor: ['#22d3ee','#60a5fa','#c084fc','#34d399'],
              borderColor: 'rgba(255,255,255,0.06)',
              borderWidth: 2
            }]
          },
          options: {
            plugins: { legend: { labels: { color: 'rgba(255,255,255,0.7)' } } },
            cutout: '60%'
          }
        });
      }

      const convCtx = document.getElementById('convChart')?.getContext('2d');
      if (convCtx) {
        new Chart(convCtx, {
          type: 'bar',
          data: {
            labels: ['Поиск','Карточка','Корзина','Оплата','Бронь'],
            datasets: [{
              label: 'Конверсия, %',
              data: [100, 48, 28, 18, 15],
              backgroundColor: 'rgba(96,165,250,0.6)',
              borderRadius: 6
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { ticks: { color: 'rgba(255,255,255,0.6)' }, grid: { display: false } },
              y: { ticks: { color: 'rgba(255,255,255,0.6)' }, grid: { color: 'rgba(255,255,255,0.06)' } }
            }
          }
        });
      }

      // Lucide (optional if using data-lucide icons elsewhere)
      try { lucide?.createIcons?.(); } catch(e) {}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full top-0 left-0 -z-10" data-us-project="98LbxUn5KV3Z8vHICb6u"></div>
</div>

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.18),transparent_55%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/40 to-[#0b1220]"></div>
</div>

<header className="relative z-50 sticky top-0 bg-gray-50/10 border-white/20 border-b shadow-sm backdrop-blur">
<nav aria-label="Главная навигация" className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<div className="inline-flex items-center" style={{width: 'auto', height: 'auto'}}>
<img alt="Логотип Alean" className="h-8 w-auto object-contain" decoding="async" loading="eager" src="https://zhd-bilet.ru/images/icons/alean.svg"/>
</div>
<span className="text-2xl font-semibold tracking-tight"></span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition text-white/80 hover:text-white" href="#value">Ценность</a>
<a className="text-sm font-medium transition text-white/80 hover:text-white" href="#modules">Модули</a>
<a className="text-sm font-medium transition text-white/80 hover:text-white" href="#tech">Техника</a>
<a className="text-sm font-medium transition text-white/80 hover:text-white" href="#ai">ИИ</a>
<a className="text-sm font-medium transition text-white/80 hover:text-white" href="#roadmap">Дорожная карта</a>
<a className="text-sm font-medium transition text-white/80 hover:text-white" href="#kpi">KPI</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition bg-white/5 hover:bg-white/10">
<svg className="lucide lucide-user h-4 w-4 text-slate-300" data-lucide="user" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Войти
            </button>
<button aria-controls="mobileNav" aria-expanded="false" aria-label="Открыть меню" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 bg-white/5 hover:bg-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t pb-4 border-white/10" id="mobileNav">
<div className="pt-3 grid grid-cols-2 gap-2 text-sm">
<a className="rounded-lg px-3 py-2 border bg-white/5 hover:bg-white/10 border-white/10" href="#value">Ценность</a>
<a className="rounded-lg px-3 py-2 border bg-white/5 hover:bg-white/10 border-white/10" href="#modules">Модули</a>
<a className="rounded-lg px-3 py-2 border bg-white/5 hover:bg-white/10 border-white/10" href="#tech">Техника</a>
<a className="rounded-lg px-3 py-2 border bg-white/5 hover:bg-white/10 border-white/10" href="#ai">ИИ</a>
<a className="rounded-lg px-3 py-2 border bg-white/5 hover:bg-white/10 border-white/10" href="#roadmap">Дорожная карта</a>
<a className="rounded-lg px-3 py-2 border bg-white/5 hover:bg-white/10 border-white/10" href="#kpi">KPI</a>
<a className="col-span-2 rounded-lg px-3 py-2 bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-400/20 text-indigo-100" href="#demo">Запросить демо</a>
</div>
</div>
</nav>
</header>

<section className="relative pt-12 pb-32">
<div className="relative max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="max-w-3xl text-center mr-auto ml-auto">
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-1xl font-bold tracking-tight text-center mt-4 mb-4 pt-12 pb-4">Экосистема для роста продаж турагентств</h1>
<p className="sm:text-lg text-base font-medium text-white/95 mt-5 mb-0">Дайте своим агентам технологическое преимущество: White-Lable, единый поиск по эксклюзивному инвентарю, автоматизация бронирований, маркетинг и аналитика. </p>
<div className="flex gap-6 mt-8 mb-20 items-center justify-center">
<div className="">
<p className="text-lg font-semibold text-cyan-100">1 000+ активных агентов</p>
<p className="text-sm font-semibold text-cyan-400">Сеть реселлеров по всему миру</p>
</div>
</div><div className="flex flex-col sm:flex-row gap-3 mt-8 mb-16 justify-center">
<a className="group relative inline-flex items-center gap-2 rounded-3xl px-6 py-3 bg-gradient-to-b from-indigo-500/20 font-medium tracking-tight ring-1 transition to-indigo-600/40 text-indigo-50 ring-indigo-400/10 hover:ring-indigo-400/30" href="#modules">
<span className="relative z-20 flex items-center gap-2">
<svg className="lucide lucide-grid-3x3 h-4 w-4 text-cyan-100/90" data-lucide="grid-3x3" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                Смотреть модули
              </span>
</a>
<a className="inline-flex items-center gap-2 transition border rounded-full px-6 py-3 hover:bg-white/10 text-cyan-100 bg-white/5 border-white/10" href="#demo">
<svg className="lucide lucide-video h-4 w-4 text-slate-200" data-lucide="video" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
              Запросить демо
            </a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
<div className="flex gap-3 border rounded-2xl p-4 backdrop-blur hover:shadow-lg transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-indigo-400/10">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-neutral-400/40 via-cyan-800/50 to-neutral-400/50">
<svg className="lucide lucide-ticket text-slate-50" data-lucide="ticket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight">Личный AI ассистент </p>
<p className="text-xs text-white/70">Снижайте время подбора, повышайте конверсию </p>
</div>
</div>
<div className="flex gap-3 border rounded-2xl p-4 backdrop-blur hover:shadow-lg transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-indigo-400/10">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-neutral-400/40 via-cyan-800/50 to-neutral-400/50">
<svg className="lucide lucide-search text-slate-50" data-lucide="search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight">Единый поиск и бронирование</p>
<p className="text-xs text-white/70">Доступность, цены, бронь — в 2 клика</p>
</div>
</div>
<div className="flex gap-3 hover:shadow-lg transition hover:bg-white/10 hover:border-white/20 hover:shadow-indigo-400/10 bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-neutral-400/40 via-cyan-800/50 to-neutral-400/50">
<svg className="lucide lucide-megaphone text-slate-50" data-lucide="megaphone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight">White‑label маркетинг</p>
<p className="text-xs text-white/70">Готовые витрины, лендинги и материалы</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 pt-18 pb-18 grayscale-0 invert-0 bg-neutral-900" id="value">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">Концепция</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">Ценностное предложение</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">
            «Единый B2B‑портал, который ускоряет продажи агентства: эксклюзивные туры, умный поиск, автоматизация маркетинга и прозрачные финансы в одном кабинете».
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
<div className="rounded-2xl bg-white/[0.04] border p-5 border-white/10">
<div className="flex items-center gap-2">
<p className="text-lg font-semibold tracking-tight">Ключевые преимущества</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-sparkles mt-0.5 text-cyan-400" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Эксклюзивная дистрибуция туров и динамическое ценообразование для партнёров.</li>
<li className="flex gap-2"><svg className="lucide lucide-wand-sparkles mt-0.5 text-cyan-400" data-lucide="wand-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg> Умный поиск (NLP) и рекомендации повышают конверсию и средний чек.</li>
<li className="flex gap-2"><svg className="lucide lucide-layout-template mt-0.5 text-cyan-400" data-lucide="layout-template" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg> White‑label витрины и контент‑студия: продающие лендинги за минуты.</li>
<li className="flex gap-2"><svg className="lucide lucide-wallet mt-0.5 text-cyan-400" data-lucide="wallet" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> Прозрачные финансы: комиссии, счета, выплаты, сверки — без Excel.</li>
<li className="flex gap-2"><svg className="lucide lucide-headphones mt-0.5 text-cyan-400" data-lucide="headphones" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg> Поддержка 24/7 и API‑интеграции с экосистемой агентства.</li>
</ul>
</div>
<div className="rounded-2xl bg-white/[0.04] border p-5 border-white/10">
<div className="flex items-center gap-2">
<p className="text-lg font-semibold tracking-tight">Аудитория и ценность</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-user-check mt-0.5 text-cyan-400" data-lucide="user-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> Владельцы/менеджеры турагентств‑ритейлеров — рост продаж и маржинальности.</li>
<li className="flex gap-2"><svg className="lucide lucide-gauge mt-0.5 text-cyan-400" data-lucide="gauge" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg> Снижение времени брони, меньше ручной рутины, выше NPS клиентов.</li>
<li className="flex gap-2"><svg className="lucide lucide-link mt-0.5 text-cyan-400" data-lucide="link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Технологическое преимущество: API, SSO, CRM‑коннекторы, вебхуки.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 bg-slate-800 pt-14 pb-14" id="modules">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">Архитектура и модули</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">Ключевые модули Личного кабинета агента</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">Стандартные и продвинутые функции экосистемы</p>
</div>
<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-search text-slate-200" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<p className="font-semibold tracking-tight">Поиск и бронирование</p>
</div>
<span className="text-xs text-white/50">Core</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-sliders-horizontal mt-0.5 text-cyan-400" data-lucide="sliders-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg> Фильтры: даты, бюджет, направления, тип тура, провайдер.</li>
<li className="flex gap-2"><svg className="lucide lucide-languages mt-0.5 text-cyan-400" data-lucide="languages" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg> Умный поиск (NLP), синонимы и промо‑запросы.</li>
<li className="flex gap-2"><svg className="lucide lucide-calendar-check-2 mt-0.5 text-cyan-400" data-lucide="calendar-check-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg> Доступность/цена в реальном времени, блокировка мест.</li>
<li className="flex gap-2"><svg className="lucide lucide-file-input mt-0.5 text-cyan-400" data-lucide="file-input" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M2 15h10"></path><path d="m9 18 3-3-3-3"></path></svg> Оформление брони, ваучеры, документы, доп.услуги.</li>
<li className="flex gap-2"><svg className="lucide lucide-history mt-0.5 text-cyan-400" data-lucide="history" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg> История заказов, правки, отмены, обмены.</li>
</ul>
</div>

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-wallet text-slate-200" data-lucide="wallet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<p className="font-semibold tracking-tight">Финансы</p>
</div>
<span className="text-xs text-white/50">Core</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-receipt mt-0.5 text-cyan-400" data-lucide="receipt" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg> Инвойсы, акты, фискальные чеки, автосверки.</li>
<li className="flex gap-2"><svg className="lucide lucide-percent mt-0.5 text-cyan-400" data-lucide="percent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg> Комиссии и маркап, правила скидок, промокоды.</li>
<li className="flex gap-2"><svg className="lucide lucide-credit-card mt-0.5 text-cyan-400" data-lucide="credit-card" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Платежи: карты, BNPL, банковские переводы, гарантии.</li>
<li className="flex gap-2"><svg className="lucide lucide-send-to-back mt-0.5 text-cyan-400" data-lucide="send-to-back" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="14" y="14"></rect><rect height="8" rx="2" width="8" x="2" y="2"></rect><path d="M7 14v1a2 2 0 0 0 2 2h1"></path><path d="M14 7h1a2 2 0 0 1 2 2v1"></path></svg> Выплаты агентам, реконсиляция, мультивалютность.</li>
</ul>
</div>

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-megaphone text-slate-200" data-lucide="megaphone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<p className="font-semibold tracking-tight">Маркетинг</p>
</div>
<span className="text-xs text-white/50">Growth</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-layout-template mt-0.5 text-cyan-400" data-lucide="layout-template" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg> White‑label витрины и виджеты для сайта агентства.</li>
<li className="flex gap-2"><svg className="lucide lucide-images mt-0.5 text-cyan-400" data-lucide="images" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg> Контент‑студия: баннеры, лендинги, PDF‑презентации.</li>
<li className="flex gap-2"><svg className="lucide lucide-mail mt-0.5 text-cyan-400" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Email/SMS кампании, сегментация, UTM‑метки.</li>
<li className="flex gap-2"><svg className="lucide lucide-badge-percent mt-0.5 text-cyan-400" data-lucide="badge-percent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg> Акции и лояльность: промо‑кампании, бандлы, реферальные программы.</li>
</ul>
</div>

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-users text-slate-200" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0- 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<p className="font-semibold tracking-tight">CRM и клиенты</p>
</div>
<span className="text-xs text-white/50">Growth</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-id-card mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path><path d="M10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path><path d="M8 13h4"></path></svg> Профили клиентов, предпочтения, документы и визы.</li>
<li className="flex gap-2"><svg className="lucide lucide-messages-square mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 20l-4 1 1-4"></path><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect ="7"="" rx="1" width="7" x="14" y="14"></rect></svg> История коммуникаций: звонки, email, мессенджеры.</li>
<li className="flex gap-2"><svg className="lucide lucide-filter mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg> Сегменты и списки: VIP, частые, корпоративные.</li>
<li className="flex gap-2"><svg className="lucide lucide-shield-check mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg> GDPR/152‑ФЗ режимы приватности и согласия.</li>
</ul>
</div>

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-life-buoy text-slate-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m4.93 19.07 4.24-4.24"></path></svg>
</div>
<p className="font-semibold tracking-tight">Поддержка и знания</p>
</div>
<span className="text-xs text-white/50">Support</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-headset mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 14v-1a9 9 0 1 1 18 0v1"></path><path d="M21 19a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z"></path><path d="M3 19a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"></path></svg> Тикеты и чат 24/7, SLA‑метрики.</li>
<li className="flex gap-2"><svg className="lucide lucide-book-open mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16a2 2 0 0 0 2 2h7V2H4a2 2 0 0 0-2 2z"></path><path d="M22 4v16a2 2 0 0 1-2 2h-7V2h7a2 2 0 0 1 2 2z"></path></svg> База знаний, макеты писем, шаблоны скриптов.</li>
<li className="flex gap-2"><svg className="lucide lucide-bell-ring mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a6 6 0 0 1 12 0c0 7 3 8 3 8H7s3-1 3-8"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Оповещения по критическим броням и платежам.</li>
</ul>
</div>

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-plug text-slate-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 7V2"></path><path d="M15 7V2"></path><path d="M5 8a7 7 0 0 0 14 0"></path></svg>
</div>
<p className="font-semibold tracking-tight">Интеграции и API</p>
</div>
<span className="text-xs text-white/50">Platform</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-braces mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 4c-1.1 0-2 .9-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path><path d="M17 4c1.1 0 2 .9 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"></path></svg> REST/GraphQL API, SDK для JS и Python.</li>
<li className="flex gap-2"><svg className="lucide lucide-radio-tower mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m4 19 8-17 8 17"></path><path d="M12 3v17"></path><path d="M8 19h8"></path></svg> Вебхуки, события брони/платежей, ретраи.</li>
<li className="flex gap-2"><svg className="lucide lucide-shield mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V6L12 2 4 6v6c0 6 8 10 8 10"></path></svg> SSO (SAML/OAuth), RBAC, аудиты и логирование.</li>
</ul>
</div>

<div className="group rounded-2xl border p-5 transition bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex rounded-xl items-center justify-center bg-white/10">
<svg className="lucide lucide-chart-line text-slate-200" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<p className="font-semibold tracking-tight">Аналитика и отчеты</p>
</div>
<span className="text-xs text-white/50">Insights</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><svg className="lucide lucide-presentation mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M20 7V3"></path><path d="M4 7V3"></path><rect height="12" rx="2" width="20" x="2" y="7"></rect><path d="M12 19v3"></path><path d="m8 22 4-3 4 3"></path></svg> Дашборды по GMV, конверсиям и марже.</li>
<li className="flex gap-2"><svg className="lucide lucide-candlestick-chart mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18"></path><rect height="8" rx="1" width="3" x="7" y="5"></rect><rect height="8" rx="1" width="3" x="14" y="11"></rect></svg> Cohort‑анализ, ABC/XYZ, LTV/Retention.</li>
<li className="flex gap-2"><svg className="lucide lucide-file-down mt-0.5 text-cyan-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M12 18v-6"></path><path d="m15 15-3 3-3-3"></path></svg> Экспорт: CSV, XLSX, Google Sheets, API.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 bg-slate-900 pt-14 pb-14" id="tech">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">Технологии</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">Надежная платформа уровня Enterprise</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">Масштабируемая архитектура, безопасность по умолчанию и открытые интеграции</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-server text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 6h.01"></path><path d="M6 18h.01"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Архитектура</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="">Micro‑frontends, сервисы на Node.js/Go, PostgreSQL + Redis.</li>
<li className="">Kubernetes, autoscaling, CDN, SLA 99.9%.</li>
<li className="">Observability: OpenTelemetry, Grafana, Sentry.</li>
</ul>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-lock text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Безопасность</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li>RBAC, audit‑trail, шифрование в покое и в транзите.</li>
<li className="">OWASP, WAF, секреты в Vault, секрет‑сканинг.</li>
<li className="">Регламенты и DPIA, хранение данных в ЕС/ОАЭ/КЗ.</li>
</ul>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-cable text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 16h6"></path><path d="M2 8h6"></path><path d="M20 16v-5a3 3 0 0 0-3-3H7"></path><path d="M4 8v5a3 3 0 0 0 3 3h10"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Интеграции</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li>SSO, CRM коннекторы (Bitrix24/HubSpot), платежные шлюзы.</li>
<li>Экспорт в BI (Power BI/Looker), вебхуки и ETL.</li>
<li className="">Marketplace расширений и виджетов.</li>
</ul>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-code-2 text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Пример вебхука</p>
</div>
<pre className="mt-3 text-xs leading-relaxed overflow-auto rounded-xl border p-4 border-white/10 bg-black/30 text-white/80"><code className="">{
  "event": "booking.created",
  "version": "1.0",
  "idempotency_key": "bkn_7f2c3c1",
  "timestamp": "2025-08-18T09:21:33Z",
  "data": {
    "booking_id": "BK-284319",
    "agent_id": "AG-9012",
    "status": "pending_payment",
    "total": { "amount": 1240.50, "currency": "USD" },
    "items": [
      { "type": "tour", "sku": "DXB-4N-ALLINC", "qty": 2 },
      { "type": "addon", "sku": "INS-TRAVEL-STD", "qty": 2 }
    ]
  },
  "signature": "t=1723978893,v1=3f1a9d..."
}</code></pre>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-git-merge text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="12" r="3"></circle><path d="M8.7 7.5A6 6 0 0 0 12 12v0a6 6 0 0 1 3.3 4.5"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Пайплайн релизов</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li>CI/CD: GitHub Actions → Canary → Prod, feature flags.</li>
<li>Автотесты, регресс и перформанс‑профилирование.</li>
<li>Blue/Green и миграции БД без простоя.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 bg-slate-800 pt-14 pb-14" id="ai">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">ИИ‑ускорение</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">AI‑ассистенты для поиска, ценообразования и контента</h2>
<p className="sm:text-lg text-base mt-4 text-white/70">Снижайте время подбора, повышайте конверсию и маржинальность с помощью ML</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-sparkle text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v4"></path><path d="M12 17v4"></path><path d="m3 12 4-.5"></path><path d="m17 12 4-.5"></path><path d="m5 19 3-2"></path><path d="m16 7 3-2"></path><path d="m5 5 3 2"></path><path d="m16 17 3 2"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Умный поиск</p>
</div>
<p className="mt-3 text-sm text-white/80">NLP‑интерпретация запросов, синонимы, гео‑понимание намерения, персонализация.</p>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-bot text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="8" y="9"></rect><path d="M9 9V7a3 3 0 0 1 6 0v2"></path><path d="M12 4V2"></path><path d="M8 13H4"></path><path d="M20 13h-4"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Динамические цены</p>
</div>
<p className="mt-3 text-sm text-white/80">ML‑модели эластичности спроса, A/B управление маркапом, защита маржи.</p>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-notebook-pen text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path><path d="M16 6h2a2 2 0 0 1 2 2v3.5"></path><path d="M8 2v4"></path><path d="M8 10h6"></path><path className="" d="M8 14h6"></path><path d="m18 22 4-4"></path><path d="m14 22 4-4"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Генерация контента</p>
</div>
<p className="text-sm mt-3 text-white/80">AI‑описания туров, подбор фото, лендинги под запрос клиента, автопереводы.</p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<p className="text-sm font-semibold tracking-tight">Mini‑демо: опишите запрос клиента</p>
<form aria-label="AI демо формы" className="mt-3 space-y-3" id="aiForm" onsubmit="return false">
<div className="">
<label className="sr-only" htmlFor="aiPrompt">Запрос</label>
<textarea className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 bg-black/30 border-white/10" id="aiPrompt" placeholder="Например: 'семья 2+1, май, бюджет до $2000, пляж, all inclusive, вылет из Алматы'" rows="3"></textarea>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-indigo-500/20 px-4 py-2 text-xs font-medium ring-1 transition to-indigo-600/40 text-indigo-50 ring-indigo-400/20 hover:ring-indigo-400/40" id="aiSuggest">
<svg className="lucide lucide-wand-sparkles" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path></svg>
                  Подобрать
                </button>
<button className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium bg-white/5 hover:bg-white/10 border-white/10" id="aiClear">
<svg className="lucide lucide-eraser" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M17 3H7L1 9l10 12h6l6-6Z"></path><path d="M6 11h8"></path></svg>
                  Очистить
                </button>
</div>
<div className="hidden rounded-lg border p-3 text-sm border-white/10 bg-black/30 text-white/80" id="aiResult"></div>
</form>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<p className="text-sm font-semibold tracking-tight">Как это работает</p>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li>Парсинг запроса → нормализация сущностей (даты, гео, бюджет).</li>
<li>Ранжирование туров по CTR/марже/качеству отзывов.</li>
<li>Генерация краткого предложения и лендинга с кнопкой «Забронировать».</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 bg-slate-900 pt-14 pb-14" id="roadmap">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">План развития</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">Дорожная карта продукта</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">Фокус на стабильности, интеграциях и росте продаж партнеров</p>
</div>
<ol className="mt-10 relative border-l space-y-6 pl-6 border-white/10">
<li className="relative">
<span className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-indigo-500/30 ring-2 ring-indigo-400/40"></span>
<div className="rounded-xl border p-4 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold">Q3 2025 • Базовый портал</p>
<span className="text-[11px] rounded-full px-2 py-0.5 bg-indigo-500/15 border text-indigo-300 border-indigo-400/20">Готово</span>
</div>
<p className="mt-2 text-sm text-white/70">Поиск/бронь, финансы, white‑label витрины, первые интеграции.</p>
</div>
</li>
<li className="relative">
<span className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-indigo-500/30 ring-2 ring-indigo-400/40"></span>
<div className="rounded-xl border p-4 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold">Q4 2025 • AI‑поиск и ценообразование</p>
<span className="text-[11px] rounded-full px-2 py-0.5 bg-cyan-500/15 border text-cyan-300 border-cyan-400/20">В работе</span>
</div>
<p className="mt-2 text-sm text-white/70">NLP‑поиск, рекомендации, A/B инструменты маржи.</p>
</div>
</li>
<li className="relative">
<span className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-indigo-500/30 ring-2 ring-indigo-400/40"></span>
<div className="rounded-xl border p-4 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold">Q1 2026 • Маркетплейс интеграций</p>
<span className="text-[11px] rounded-full px-2 py-0.5 bg-cyan-500/15 border text-cyan-300 border-cyan-400/20">Запланировано</span>
</div>
<p className="mt-2 text-sm text-white/70">Открытый API, вебхуки, SDK и каталог расширений.</p>
</div>
</li>
</ol>
</div>
</section>

<section className="relative sm:py-20 bg-slate-800 pt-14 pb-14" id="kpi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">Метрики</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">Бизнес‑показатели</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">Онлайн‑дашборды с ключевыми KPI вашего агентства</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold tracking-tight">GMV по месяцам</p>
<span className="text-[11px] text-white/60">USD</span>
</div>
<canvas className="mt-4" height="173" id="gmvChart" style={{display: 'block', boxSizing: 'border-box', height: '173px', width: '347px'}} width="347"></canvas>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold tracking-tight">Структура продаж</p>
<span className="text-[11px] text-white/60">Доли</span>
</div>
<canvas className="mt-4" height="347" id="mixChart" style={{display: 'block', boxSizing: 'border-box', height: '347px', width: '347px'}} width="347"></canvas>
</div>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold tracking-tight">Конверсия в бронь</p>
<span className="text-[11px] text-white/60">%</span>
</div>
<canvas className="mt-4" height="173" id="convChart" style={{display: 'block', boxSizing: 'border-box', height: '173px', width: '347px'}} width="347"></canvas>
</div>
</div>
</div>
</section>

<section className="relative sm:py-20 bg-slate-900 pt-14 pb-24" id="demo">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(34,211,238,0.08),transparent_60%)]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto">
<p className="text-xs tracking-wider text-indigo-300/90">Демо</p>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold">Запросите персональную презентацию</h2>
<p className="mt-4 text-base sm:text-lg text-white/70">Оставьте контакты — команда свяжется в течение 24 часов</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<form aria-label="Форма запроса демо" className="lg:col-span-2 rounded-2xl border p-5 bg-white/5 border-white/10" id="demoForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-xs text-white/70" htmlFor="name">Имя и фамилия</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 bg-black/30 border-white/10" id="name" name="name" placeholder="Иван Петров" required="" type="text"/>
</div>
<div className="">
<label className="text-xs text-white/70" htmlFor="email">Рабочая почта</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 bg-black/30 border-white/10" id="email" name="email" placeholder="ivan@company.com" required="" type="email"/>
</div>
<div className="">
<label className="text-xs text-white/70" htmlFor="company">Компания</label>
<input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 bg-black/30 border-white/10" id="company" name="company" placeholder="Voyage Travel" type="text"/>
</div>
<div className="">
<label className="text-xs text-white/70" htmlFor="agents">Кол-во агентов</label>
<select className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 text-sm bg-black/30 border-white/10 border rounded-xl mt-1 mr-4 pt-2 pr-12 pb-2 pl-2" id="agents" name="agents">
<option value="1-5">1–5</option>
<option value="6-20">6–20</option>
<option value="21-50">21–50</option>
<option value="51+">51+</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-white/70" htmlFor="message">Комментарий</label>
<textarea className="mt-1 w-full rounded-xl border px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 bg-black/30 border-white/10" id="message" name="message" placeholder="Нас интересуют white‑label витрины и AI‑поиск..." rows="3"></textarea>
</div>
<div className="smcol-span-2 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-indigo-500/20 px-5 py-2 text-sm font-medium ring-1 transition to-indigo-600/40 text-indigo-50 ring-indigo-400/20 hover:ring-indigo-400/40" type="submit">
<svg className="lucide lucide-send h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                  Отправить
                </button>
</div>
</div>
</form>
<div className="rounded-2xl border p-5 bg-white/5 border-white/10">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-lg inline-flex items-center justify-center bg-white/10">
<svg className="lucide lucide-phone text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.92-5-5a3 3 0 0 0-4.24 0l-1.83 1.83a16 16 0 0 1-7.07-7.07L5.69 4.85a3 3 0 0 0 0-4.24l-5-5"></path></svg>
</span>
<p className="text-sm font-semibold tracking-tight">Контакты</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="">Email: hello@voyagepro.io</li>
<li>Телефон: +971 4 000 00 00</li>
<li>Время: Пн–Пт, 09:00–18:00 (GMT+4)</li>
</ul>
<div className="mt-4 rounded-xl border border-white/ p-3 bg-black/30">
<p className="text-xs text-white/60">Мы ответим в течение рабочего дня и подготовим демо под ваши задачи.</p>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] mx-auto hidden w-full max-w-sm" id="toast">
<div className="mx-4 rounded-xl border bg-indigo-500/15 px-4 py-3 text-sm ring-1 shadow-lg backdrop-blur border-indigo-400/20 text-indigo-100 ring-indigo-400/20">
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
</div>
</section>

<footer className="border-white/10 border-t pt-10 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
<div className="col-span-2 sm:col-span-1">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 rounded-full ring-white/10 bg-cyan-800">
<svg className="lucide lucide-compass text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">VoyagePro</span>
</div>
<p className="mt-2 text-white/60">B2B‑портал для турагентств: продажи, маркетинг и аналитика в одном месте.</p>
</div>
<div>
<p className="font-semibold text-white/90">Продукт</p>
<ul className="mt-2 space-y-1 text-white/70">
<li><a className="hover:text-white" href="#modules">Модули</a></li>
<li><a className="hover:text-white" href="#tech">Техника</a></li>
<li><a className="hover:text-white" href="#ai">ИИ</a></li>
<li><a className="hover:text-white" href="#roadmap">Дорожная карта</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-white/90">Ресурсы</p>
<ul className="mt-2 space-y-1 text-white/70">
<li><a className="hover:text-white" href="#kpi">KPI</a></li>
<li><a className="hover:text-white" href="#demo">Демо</a></li>
<li><a className="hover:text-white" href="#">Документация API</a></li>
</ul>
</div>
<div className="">
<p className="font-semibold text-white/90">Связаться</p>
<ul className="mt-2 space-y-1 text-white/70">
<li><a className="hover:text-white" href="mailto:hello@voyagepro.io">hello@voyagepro.io</a></li>
<li><a className="hover:text-white" href="tel:+97140000000">+971 4 000 00 00</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
<p>© 2025 VoyagePro. Все права защищены.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Политика конфиденциальности</a>
<a className="hover:text-white" href="#">Условия использования</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
