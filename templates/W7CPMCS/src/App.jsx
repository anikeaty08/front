import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      /* ParticlesJS */
      particlesJS("particles-js", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ["#a855f7", "#14b8a6", "#6366f1"] },
          shape: { type: "circle" },
          opacity: { value: 0.15 },
          size: { value: 3, random: true },
          move: { enable: true, speed: 0.6 },
          line_linked: { enable: false },
        },
        interactivity: { events: { onclick: { enable: false } } },
        retina_detect: true,
      });

      /* Lucide Icons */
      lucide.createIcons();

      /* Chart.js */
      const ctx = document.getElementById("topicsChart");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Понято", "Требует повторения", "Новая тема"],
          datasets: [
            {
              data: [60, 25, 15],
              backgroundColor: ["#4ade80", "#facc15", "#f43f5e"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
        },
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10" id="particles-js"><canvas className="particles-js-canvas-el" height="1923" style={{width: '100%', height: '100%'}} width="1804"></canvas></div>

<header className="mx-auto max-w-7xl px-6 pt-6 flex items-center justify-between border-b border-neutral-800/70">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400">
        edura<span className="text-neutral-400">/one</span>
</h1>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-fuchsia-400 transition-colors duration-200" href="#concept">Концепция</a>
<a className="hover:text-fuchsia-400 transition-colors duration-200" href="#tech">Технологии</a>
<a className="hover:text-fuchsia-400 transition-colors duration-200" href="#workflow">Workflow</a>
<a className="hover:text-fuchsia-400 transition-colors duration-200" href="#demo">Demo</a>
</nav>
<button className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors duration-200 shadow-md shadow-fuchsia-600/30">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
        Войти
      </button>
</header>

<section className="relative max-w-7xl flex flex-col lg:flex-row gap-20 lg:gap-12 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight" style={{lineHeight: '1.15'}}>
          Индивидуальные уроки. <br className="hidden lg:block"/>
          Сильные инструменты. <br className="hidden lg:block"/>
          Никакой суеты.
        </h2>
<p className="text-neutral-400 max-w-lg">
          Платформа для <span className="text-neutral-100">1 на 1</span>
          уроков с интегрированной доской, редактором кода,
          видеосвязью и ИИ-аналитикой. Без поиска студентов и
          платежной рутины — только качественный учебный процесс.
        </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 rounded-md bg-gradient-to-br from-fuchsia-600 to-purple-600 hover:to-purple-500 transition-colors duration-200 text-sm font-medium shadow-lg shadow-fuchsia-600/30">
            Попробовать бесплатно
          </button>
<button className="px-6 py-3 rounded-md border border-neutral-700/80 hover:border-neutral-600 transition-colors duration-200 text-sm font-medium">
            Смотреть демо
          </button>
</div>
</div>
<div className="flex-1 rounded-xl overflow-hidden ring-1 ring-neutral-800/70 shadow-2xl shadow-fuchsia-500/10">
<img alt="Online Lesson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1200&amp;q=80"/>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="p-6 bg-neutral-900/50 rounded-lg ring-1 ring-neutral-800/70 backdrop-blur">
<svg className="lucide lucide-user-plus w-6 h-6 text-fuchsia-400 mb-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">
            Простая регистрация
          </h3>
<p className="text-neutral-400 text-sm">
            Учитель и ученик создают аккаунты за минуту, без документов и
            лишних полей.
          </p>
</div>
<div className="p-6 bg-neutral-900/50 rounded-lg ring-1 ring-neutral-800/70 backdrop-blur">
<svg className="lucide lucide-link-2 w-6 h-6 text-fuchsia-400 mb-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">
            Приглашение по ссылке
          </h3>
<p className="text-neutral-400 text-sm">
            Учитель отправляет уникальную ссылку, а ученик присоединяется в
            один клик.
          </p>
</div>
<div className="p-6 bg-neutral-900/50 rounded-lg ring-1 ring-neutral-800/70 backdrop-blur">
<svg className="lucide lucide-credit-card w-6 h-6 text-fuchsia-400 mb-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">
            Честная подписка
          </h3>
<p className="text-neutral-400 text-sm">
            Платите только при активных 3+ учениках. Всё прозрачно и
            гибко.
          </p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 border-y border-neutral-800/70" id="tech">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400">
        Под капотом
      </h2>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-6">
<h3 className="text-xl font-semibold tracking-tight">
            Клиент (Web)
          </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<svg className="lucide lucide-cpu w-5 h-5 text-fuchsia-400 mt-1" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div>
<p className="font-medium">React + TypeScript</p>
<p className="text-neutral-400 text-sm">
                  Vite и Bun обеспечивают молниеносную разработку.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-video w-5 h-5 text-fuchsia-400 mt-1" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<div>
<p className="font-medium">LiveKit 2.x</p>
<p className="text-neutral-400 text-sm">
                  Низкая задержка и скалируемость видеосвязи.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-pen-tool w-5 h-5 text-fuchsia-400 mt-1" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<div>
<p className="font-medium">tldraw + yjs</p>
<p className="text-neutral-400 text-sm">
                  Совместная доска с оффлайн-поддержкой.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-code w-5 h-5 text-fuchsia-400 mt-1" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<div>
<p className="font-medium">Monaco Editor + Judge0</p>
<p className="text-neutral-400 text-sm">
                  IDE в браузере и безопасная серверная компиляция.
                </p>
</div>
</li>
</ul>
</div>

<div className="space-y-6">
<h3 className="text-xl font-semibold tracking-tight">Сервер</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<svg className="lucide lucide-cloud w-5 h-5 text-fuchsia-400 mt-1" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<div className="">
<p className="font-medium">FastAPI + Beanie</p>
<p className="text-neutral-400 text-sm">
                  Произвольные схемы и мгновенный отклик.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-database w-5 h-5 text-fuchsia-400 mt-1" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<div className="">
<p className="font-medium">MongoDB, Redis</p>
<p className="text-neutral-400 text-sm">
                  Персистентность и кэш мгновенных данных.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-list-checks w-5 h-5 text-fuchsia-400 mt-1" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
<div className="">
<p className="font-medium">RabbitMQ очереди</p>
<p className="text-neutral-400 text-sm">
                  Асинхронная обработка ИИ-задач без узких мест.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-brain-cog w-5 h-5 text-fuchsia-400 mt-1" data-lucide="brain-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="m10.852 9.228-.383-.923"></path><path d="m13.148 14.772.382.924"></path><path d="m13.531 8.305-.383.923"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"></path><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"></path><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"></path><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"></path><path d="M4.5 10.291A4 4 0 0 0 6 18"></path><path d="M6.002 5.125a3 3 0 0 0 .4 1.375"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="">
<p className="font-medium">Real-time AI</p>
<p className="text-neutral-400 text-sm">
                  Транскрипция, генерация заданий, классификация важности.
                </p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16" id="workflow">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400">
        Ключевые сценарии
      </h2>
<ol className="relative border-l border-neutral-800/70 ml-2 space-y-10">

<li className="pl-8">
<span className="absolute -left-[10px] top-1 w-3 h-3 bg-fuchsia-500 rounded-full"></span>
<h4 className="font-semibold tracking-tight mb-2">Регистрация</h4>
<p className="text-neutral-400 text-sm max-w-2xl">
            Учитель создаёт аккаунт, получает уникальную ссылку и рассылает её
            ученикам.
          </p>
</li>

<li className="pl-8">
<span className="absolute -left-[10px] top-1 w-3 h-3 bg-fuchsia-500 rounded-full"></span>
<h4 className="font-semibold tracking-tight mb-2">Планирование</h4>
<p className="text-neutral-400 text-sm max-w-2xl">
            Платформа подсвечивает пересечения расписаний и создаёт
            подтверждения одним кликом.
          </p>
</li>

<li className="pl-8">
<span className="absolute -left-[10px] top-1 w-3 h-3 bg-fuchsia-500 rounded-full"></span>
<h4 className="font-semibold tracking-tight mb-2">Урок в реальном времени</h4>
<p className="text-neutral-400 text-sm max-w-2xl">
            LiveKit-видео, tldraw-доска, Monaco-IDE и aудио-ИИ транскрипция —
            всё в одном окне.
          </p>
</li>

<li className="pl-8">
<span className="absolute -left-[10px] top-1 w-3 h-3 bg-fuchsia-500 rounded-full"></span>
<h4 className="font-semibold tracking-tight mb-2">Пост-обработка</h4>
<p className="text-neutral-400 text-sm max-w-2xl">
            Темы, оценки понимания, генерация домашних заданий — автоматически и
            прозрачно.
          </p>
</li>
</ol>
</section>

<section className="max-w-7xl border-neutral-800/70 border-t mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h3 className="text-2xl font-semibold tracking-tight">
            ИИ-аналитика после урока
          </h3>
<p className="text-neutral-400">
            Платформа транскрибирует аудио, извлекает ключевые темы и предлагает
            задания. Учитель подтверждает — всё остальное происходит без его
            участия.
          </p>
</div>

<div className="ring-1 ring-neutral-800/70 bg-neutral-900/50 rounded-lg pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="">
<canvas className="" height="750" id="topicsChart" style={{display: 'block', boxSizing: 'border-box', height: '478px', width: '478px'}} width="750"></canvas>
</div>
</div>
</div>
</section>

<section className="max-w-7xl text-center mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
        Создайте первый урок<br className="hidden md:block"/>уже сегодня
      </h2>
<button className="px-8 py-4 rounded-md bg-gradient-to-br from-fuchsia-600 to-purple-600 hover:to-purple-500 transition-colors duration-200 text-sm font-medium shadow-lg shadow-fuchsia-600/30">
        Начать бесплатно
      </button>
</section>

<footer className="border-t border-neutral-800/70 py-8 px-6 text-sm text-neutral-500 text-center">
      © 2024 edura/one — Сделано с любовью и TypeScript
    </footer>



    </>
  );
}
