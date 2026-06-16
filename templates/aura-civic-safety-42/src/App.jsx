import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Simple page switcher
      const sections = document.querySelectorAll(".page-section");
      const navLinks = document.querySelectorAll("[data-page]");
      function showPage(id) {
        sections.forEach((s) => {
          s.classList.toggle("hidden", s.id !== "page-" + id);
        });
        navLinks.forEach((btn) => {
          if (!btn.classList.contains("nav-link")) return;
          const active = btn.getAttribute("data-page") === id;
          btn.classList.toggle("text-slate-200", active);
          btn.classList.toggle("text-sky-400", active);
          btn.classList.toggle("text-slate-400", !active);
        });
        const mobileNav = document.getElementById("mobileNav");
        if (mobileNav) mobileNav.classList.add("hidden");
      }
      navLinks.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const page = e.currentTarget.getAttribute("data-page");
          if (!page) return;
          showPage(page);
        });
      });
      // Mobile nav toggle
      const mobileToggle = document.getElementById("mobileNavToggle");
      if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
          const mobileNav = document.getElementById("mobileNav");
          if (!mobileNav) return;
          mobileNav.classList.toggle("hidden");
        });
      }
      // Default page
      showPage("home");
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex-1 flex flex-col bg-slate-950">

<header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 lg:px-6">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-sky-500/90 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
              AR
            </div>
<div className="flex flex-col">
<span className="text-base md:text-lg font-semibold tracking-tight text-slate-50">
                Aura
              </span>
<span className="text-xs md:text-sm text-slate-400">
                Онлайн-приём обращений о нарушениях ПДД
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<button className="nav-link hover:text-sky-400 transition-colors text-slate-200 text-sky-400" data-page="home">
              Главная
            </button>
<button className="nav-link hover:text-sky-400 transition-colors text-slate-400" data-page="report" style={{}}>Сообщить о нарушении</button>
<button className="nav-link text-slate-400 hover:text-sky-400 transition-colors" data-page="status">
              Проверить статус
            </button>
<button className="nav-link text-slate-400 hover:text-sky-400 transition-colors" data-page="profile">
              Личный кабинет
            </button>
<button className="nav-link text-slate-400 hover:text-sky-400 transition-colors" data-page="admin">
              Админ-панель
            </button>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/60 hover:border-sky-500/70 hover:bg-slate-900/90 text-xs md:text-sm text-slate-100 px-3 py-1.5 transition-colors" data-page="status">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
              Статус
            </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-xs md:text-sm font-medium tracking-tight text-slate-950 px-3.5 py-1.5 md:px-4 md:py-2 transition-colors shadow-sm shadow-sky-500/40" data-page="report">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:alert-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
              Сообщить
            </button>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-900/70 text-slate-200 w-8 h-8" id="mobileNavToggle">
<iconify-icon className="w-4 h-4" icon="lucide:menu" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="md:hidden border-t border-slate-800/80 bg-slate-950/98 backdrop-blur hidden" id="mobileNav">
<div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1 text-xs">
<button className="nav-link text-left w-full py-1.5 hover:text-sky-400 text-slate-200 text-sky-400" data-page="home">
              Главная
            </button>
<button className="nav-link text-left w-full py-1.5 hover:text-sky-400 text-slate-400" data-page="report">
              Сообщить о нарушении
            </button>
<button className="nav-link text-left w-full py-1.5 text-slate-400 hover:text-sky-400" data-page="status">
              Проверить статус
            </button>
<button className="nav-link text-left w-full py-1.5 text-slate-400 hover:text-sky-400" data-page="profile">
              Личный кабинет
            </button>
<button className="nav-link text-left w-full py-1.5 text-slate-400 hover:text-sky-400" data-page="admin">
              Админ-панель
            </button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 md:py-10 lg:py-12 flex flex-col gap-10 md:gap-12">

<section className="page-section flex flex-col gap-10 md:gap-12" id="page-home">

<div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 md:gap-10 items-center">
<div className="flex flex-col gap-x-6 gap-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/80 text-xs text-sky-200/90 px-2.5 py-1 w-max">
<span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-sky-500/90 text-slate-950 font-semibold tracking-tight text-[0.625rem]">
                    •
                  </span>
<span className="">Городская служба цифрового контроля дорожной безопасности</span>
</div>
<div className="flex flex-col gap-3">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                    Сообщите о нарушении ПДД онлайн
                  </h1>
<p className="text-sm md:text-base text-slate-300 max-w-xl">
                    Быстрая и удобная подача обращений о нарушениях правил дорожного движения.
                    Ваше сообщение поможет сделать дороги безопаснее. Обращения обрабатываются
                    в официальном порядке.
                  </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-xs md:text-sm font-medium tracking-tight text-slate-950 px-4 py-2 md:px-5 md:py-2.5 transition-colors shadow-sm shadow-sky-500/40" data-page="report">
<iconify-icon className="w-4 h-4" icon="lucide:alert-triangle" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Сообщить о нарушении
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/60 hover:border-sky-500/70 hover:bg-slate-900/90 text-xs md:text-sm text-slate-100 px-4 py-2 md:px-5 md:py-2.5 transition-colors" data-page="status">
<iconify-icon className="w-4 h-4" icon="lucide:search-check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Проверить статус обращения
                  </button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs md:text-sm">
<div className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-3 flex flex-col gap-1">
<span className="text-[0.7rem] uppercase tracking-[0.08em] text-slate-400">
                      Обращений за месяц
                    </span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-sky-400">
                      12 482
                    </span>
<span className="text-[0.7rem] text-emerald-400/90">
                      +18% к прошлому месяцу
                    </span>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-3 flex flex-col gap-1">
<span className="text-[0.7rem] uppercase tracking-[0.08em] text-slate-400">
                      Рассмотрено обращений
                    </span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-slate-50">
                      97%
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      В течение 10 рабочих дней
                    </span>
</div>
<div className="hidden sm:flex rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-3 flex-col gap-1">
<span className="text-[0.7rem] uppercase tracking-[0.08em] text-slate-400">
                      Среднее время подачи
                    </span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-slate-50">
                      3 минуты
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      С любого устройства
                    </span>
</div>
</div>
</div>

<div className="flex flex-col gap-4 md:gap-5">
<div className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 shadow-lg shadow-sky-900/40 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-sky-500/90 flex items-center justify-center">
<iconify-icon className="w-3.5 h-3.5 text-slate-950" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-slate-50">
                          Защита и конфиденциальность
                        </span>
<span className="text-[0.7rem] text-slate-400">
                          Данные передаются по защищённым каналам
                        </span>
</div>
</div>
<span className="text-[0.7rem] text-emerald-400">
                      SSL 256-bit
                    </span>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="flex items-start gap-2">
<div className="mt-[2px] text-sky-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:building-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-50">
                          Официальная обработка
                        </span>
<span className="text-slate-400">
                          Обращения направляются в уполномоченные органы.
                        </span>
</div>
</div>
<div className="flex items-start gap-2">
<div className="mt-[2px] text-sky-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:user-minus" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-50">
                          Возможна анонимность
                        </span>
<span className="text-slate-400">
                          Вы можете не указывать свои данные.
                        </span>
</div>
</div>
</div>
<div className="border-t border-slate-800/80 pt-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<span className="text-xs text-slate-300">
                        Быстрая проверка статуса обращения
                      </span>
<span className="text-[0.7rem] text-slate-400">
                        Без регистрации
                      </span>
</div>
<form className="status-quick-form flex items-center gap-2" data-page="status">
<div className="flex-1">
<input className="w-full rounded-md border border-slate-700 bg-slate-950/90 text-xs text-slate-100 placeholder:text-slate-500 px-2.5 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Номер обращения" type="text"/>
</div>
<button className="inline-flex items-center justify-center rounded-md bg-slate-100 text-slate-950 hover:bg-slate-200 text-xs font-medium tracking-tight px-3 py-1.5 transition-colors" type="button">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-5 md:py-4 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium tracking-tight text-slate-100">
                      Частые типы нарушений
                    </span>
<button className="text-[0.7rem] text-sky-400 hover:text-sky-300" data-page="report">
                      Сообщить →
                    </button>
</div>
<div className="grid grid-cols-2 gap-2 text-[0.7rem]">
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center text-sky-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:car" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                          Превышение скорости
                        </span>
<span className="text-slate-400">
                          Опасная езда, обгон с нарушениями
                        </span>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center text-sky-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:traffic-cone" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                          Нарушение разметки
                        </span>
<span className="text-slate-400">
                          Выезд на встречную, сплошная линия
                        </span>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center text-sky-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:parking-square" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                          Неправильная парковка
                        </span>
<span className="text-slate-400">
                          Тротуары, пешеходные переходы
                        </span>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-2">
<div className="h-6 w-6 rounded-md bg-slate-900 flex items-center justify-center text-sky-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:alert-octagon" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                          Проезд на красный
                        </span>
<span className="text-slate-400">
                          Игнорирование сигналов светофора
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="flex flex-col gap-4">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
<div className="flex flex-col gap-1.5">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-50">
                    Как это работает
                  </h2>
<p className="text-sm md:text-base text-slate-300 max-w-2xl">
                    Процесс занимает несколько минут. Вы можете подать обращение анонимно
                    или указать свои данные для обратной связи.
                  </p>
</div>
</div>
<div className="grid md:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm">
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500/90 text-[0.7rem] font-semibold tracking-tight text-slate-950">
                      1
                    </div>
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:mouse-pointer-click" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-medium tracking-tight text-slate-100">
                      Заполните форму
                    </h3>
<p className="text-slate-400">
                      Укажите тип нарушения, дату, время и место, опишите ситуацию и добавьте доказательства.
                    </p>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500/40 text-[0.7rem] font-semibold tracking-tight text-sky-100">
                      2
                    </div>
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:upload-cloud" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-medium tracking-tight text-slate-100">
                      Отправьте обращение
                    </h3>
<p className="text-slate-400">
                      Система присвоит уникальный номер. При желании укажите контакты для обратной связи.
                    </p>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500/40 text-[0.7rem] font-semibold tracking-tight text-sky-100">
                      3
                    </div>
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:scale" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-medium tracking-tight text-slate-100">
                      Официальное рассмотрение
                    </h3>
<p className="text-slate-400">
                      Обращение поступает в уполномоченный орган, где проходит проверку и оценку.
                    </p>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-500/40 text-[0.7rem] font-semibold tracking-tight text-sky-100">
                      4
                    </div>
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-medium tracking-tight text-slate-100">
                      Отслеживайте статус
                    </h3>
<p className="text-slate-400">
                      Используйте номер обращения или личный кабинет, чтобы следить за ходом рассмотрения.
                    </p>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-5 md:gap-6 items-start">
<div className="flex flex-col gap-3">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-50">
                  Доверие и безопасность
                </h2>
<p className="text-sm md:text-base text-slate-300 max-w-2xl">
                  Мы уделяем особое внимание защите ваших данных и прозрачности обработки обращений.
                  Сервис разработан при участии специалистов по информационной безопасности и
                  дорожному движению.
                </p>
<div className="grid sm:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
<div className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-3 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:lock" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium tracking-tight text-slate-100">
                        Защита данных
                      </span>
</div>
<p className="text-slate-400">
                      Персональные данные, если вы их указываете, шифруются и используются только
                      для связи по обращению.
                    </p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-3 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:file-badge" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium tracking-tight text-slate-100">
                        Официальный статус
                      </span>
</div>
<p className="text-slate-400">
                      Каждое сообщение регистрируется и может быть использовано в рамках
                      официальных проверок.
                    </p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-3 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:user-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium tracking-tight text-slate-100">
                        Анонимные обращения
                      </span>
</div>
<p className="text-slate-400">
                      Вы можете не оставлять контакты. Это не снижает важность и приоритет
                      вашего сообщения.
                    </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-2">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium tracking-tight text-slate-100">
                      Статистика сервиса
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      Данные обновляются ежедневно
                    </span>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950/70 text-[0.7rem] text-slate-300 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Онлайн
                  </span>
</div>
<div className="grid grid-cols-3 gap-3 text-xs">
<div className="flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">
                      Всего обращений
                    </span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-slate-50">
                      324 815
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      С момента запуска
                    </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">
                      Рассмотрено
                    </span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-emerald-400">
                      298 430
                    </span>
<span className="text-[0.7rem] text-emerald-400/90">
                      92% обращений
                    </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">
                      Приняты меры
                    </span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-sky-400">
                      71%
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      По итогам проверок
                    </span>
</div>
</div>
<div className="mt-1 border-t border-slate-800/80 pt-3 flex items-center justify-between gap-2 text-[0.7rem]">
<div className="flex items-center gap-1.5 text-slate-400">
<iconify-icon className="w-3.5 h-3.5 text-slate-500" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                      Сервис не заменяет вызов экстренных служб при авариях.
                    </span>
</div>
<a className="text-sky-400 hover:text-sky-300" href="#">
                    Правила использования
                  </a>
</div>
</div>
</section>
</section>

<section className="page-section flex-col gap-8 hidden" id="page-report">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="flex flex-col gap-1.5">
<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50">
                  Сообщить о нарушении ПДД
                </h1>
<p className="text-sm md:text-base text-slate-300 max-w-2xl">
                  Пожалуйста, заполните форму максимально подробно. Это поможет более точно
                  оценить ситуацию и принять меры.
                </p>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<iconify-icon className="w-3.5 h-3.5 text-sky-400" icon="lucide:shield" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Ваши данные защищены и не передаются третьим лицам без оснований.</span>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-6">

<form className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-5">

<div className="grid md:grid-cols-3 gap-4">
<div className="md:col-span-1 flex flex-col gap-1.5 text-xs md:text-sm">
<label className="text-slate-100 font-medium tracking-tight">
                      Тип нарушения
                    </label>
<select className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option value="">Выберите из списка</option>
<option>Превышение скорости</option>
<option>Нарушение разметки / выезд на встречную</option>
<option>Неправильная парковка</option>
<option>Проезд на запрещающий сигнал</option>
<option>Опасное маневрирование</option>
<option>Иное нарушение</option>
</select>
</div>
<div className="flex flex-col gap-1.5 text-xs md:text-sm">
<label className="text-slate-100 font-medium tracking-tight">
                      Дата
                    </label>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" type="date"/>
</div>
<div className="flex flex-col gap-1.5 text-xs md:text-sm">
<label className="text-slate-100 font-medium tracking-tight">
                      Время
                    </label>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" type="time"/>
</div>
</div>

<div className="flex flex-col gap-1.5 text-xs md:text-sm">
<label className="text-slate-100 font-medium tracking-tight">
                    Место нарушения
                  </label>
<div className="grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] gap-3">
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Город, улица, дом, ориентиры..." type="text"/>
<div className="grid grid-cols-2 gap-2">
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Координаты (широта)" type="text"/>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Координаты (долгота)" type="text"/>
</div>
</div>
<span className="text-[0.7rem] text-slate-400">
                    Уточните направление движения или ближайшие перекрёстки, если это возможно.
                  </span>
</div>

<div className="flex flex-col gap-1.5 text-xs md:text-sm">
<label className="text-slate-100 font-medium tracking-tight">
                    Описание ситуации
                  </label>
<textarea className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Опишите, что произошло: поведение водителя, обстоятельства, возможные последствия..." rows="4"></textarea>
<div className="flex items-center justify-between gap-2 text-[0.7rem] text-slate-400">
<span>Не указывайте лишние персональные данные третьих лиц.</span>
<span>Минимум 20 символов</span>
</div>
</div>

<div className="flex flex-col gap-1.5 text-xs md:text-sm">
<div className="flex items-center justify-between gap-2">
<label className="text-slate-100 font-medium tracking-tight">
                      Транспортное средство
                    </label>
<span className="text-[0.7rem] text-slate-400">
                      Если несколько — укажите главное
                    </span>
</div>
<div className="grid md:grid-cols-4 gap-3">
<div className="md:col-span-1 flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">Госномер</span>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="А123БВ777" type="text"/>
</div>
<div className="md:col-span-1 flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">Марка</span>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Марка" type="text"/>
</div>
<div className="md:col-span-1 flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">Модель</span>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Модель" type="text"/>
</div>
<div className="md:col-span-1 flex flex-col gap-1">
<span className="text-[0.7rem] text-slate-400">Цвет</span>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Цвет" type="text"/>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5 text-xs md:text-sm">
<label className="text-slate-100 font-medium tracking-tight">
                    Фото и видео доказательства
                  </label>
<div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-3">
<label className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-slate-700 bg-slate-950/80 px-3 py-6 cursor-pointer hover:border-sky-500/70 hover:bg-slate-900/80 transition-colors">
<iconify-icon className="w-5 h-5 text-sky-400" icon="lucide:image-up" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col items-center gap-0.5 text-[0.7rem]">
<span className="font-medium tracking-tight text-slate-100">
                          Загрузите файлы или перетащите их сюда
                        </span>
<span className="text-slate-400">
                          Фото и видео, до 100 МБ, форматы JPG, PNG, MP4
                        </span>
</div>
<input className="hidden" multiple="" type="file"/>
</label>
<div className="flex flex-col gap-2 text-[0.7rem] text-slate-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5 text-amber-300" icon="lucide:shield-alert" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                          Не публикуйте материалы в открытом доступе до завершения проверки.
                        </span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5 text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                          Файлы должны чётко показывать номер, место и характер нарушения.
                        </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 border-t border-slate-800/80 pt-3">
<div className="flex items-center justify-between gap-2">
<span className="text-xs md:text-sm font-medium tracking-tight text-slate-100">
                      Способ подачи обращения
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      Выберите, указывать ли контактные данные
                    </span>
</div>
<div className="grid md:grid-cols-2 gap-3 text-xs md:text-sm">

<label className="group flex items-start gap-2 rounded-md border border-slate-800 bg-slate-950/80 px-3 py-3 cursor-pointer hover:border-sky-500/70 hover:bg-slate-900/80 transition-colors">
<input checked="" className="mt-1 h-3.5 w-3.5 accent-sky-500" name="identityMode" type="radio" value="anonymous"/>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-100">
                          Анонимно
                        </span>
<span className="text-slate-400 text-[0.7rem] md:text-xs">
                          Контактные данные не указываются, с вами не смогут связаться для уточнения.
                        </span>
</div>
</label>

<label className="group flex items-start gap-2 rounded-md border border-slate-800 bg-slate-950/80 px-3 py-3 cursor-pointer hover:border-sky-500/70 hover:bg-slate-900/80 transition-colors">
<input className="mt-1 h-3.5 w-3.5 accent-sky-500" name="identityMode" type="radio" value="named"/>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-100">
                          С указанием контактов
                        </span>
<span className="text-slate-400 text-[0.7rem] md:text-xs">
                          Позволяет сотрудникам связаться с вами при необходимости уточнения информации.
                        </span>
</div>
</label>
</div>

<div className="grid md:grid-cols-3 gap-3 text-xs md:text-sm">
<div className="flex flex-col gap-1.5">
<label className="text-slate-100 font-medium tracking-tight">
                        ФИО
                      </label>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Иванов Иван Иванович" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-slate-100 font-medium tracking-tight">
                        Электронная почта
                      </label>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="example@mail.ru" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-slate-100 font-medium tracking-tight">
                        Телефон
                      </label>
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="+7 ___ ___‑__‑__" type="tel"/>
</div>
</div>

<div className="flex flex-col gap-2 text-[0.7rem] text-slate-400">
<label className="inline-flex items-start gap-2 cursor-pointer">
<input className="mt-[3px] h-3.5 w-3.5 accent-sky-500" type="checkbox"/>
<span>
                        Я подтверждаю достоверность изложенной информации и
                        соглашаюсь на обработку персональных данных в соответствии
                        с действующим законодательством.
                      </span>
</label>
</div>
</div>

<div className="flex items-center justify-between gap-3 pt-2">
<div className="flex flex-col gap-1 text-[0.7rem] text-slate-400">
<span>
                      После отправки вы получите номер обращения для отслеживания статуса.
                    </span>
<button className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300" data-page="status" type="button">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Перейти к проверке статуса</span>
</button>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-xs md:text-sm font-medium tracking-tight text-slate-950 px-4 py-2 md:px-5 md:py-2.5 transition-colors shadow-sm shadow-sky-500/40" type="submit">
<iconify-icon className="w-4 h-4" icon="lucide:send" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Отправить обращение
                  </button>
</div>
</form>

<aside className="flex flex-col gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 md:px-4 md:py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:circle-help" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium tracking-tight text-slate-100">
                      Когда использовать онлайн‑обращение
                    </span>
</div>
<ul className="flex flex-col gap-1.5 text-slate-300 list-disc list-inside">
<li>Вы стали свидетелем опасного поведения на дороге.</li>
<li>На участке регулярно нарушаются правила движения.</li>
<li>Необходимо зафиксировать систематическое нарушение.</li>
</ul>
<div className="mt-1 flex items-start gap-2 text-[0.7rem] text-amber-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:alert-triangle" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                      В случае аварии или угрозы жизни и здоровью немедленно звоните в
                      экстренные службы по номеру 112.
                    </span>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:clock-3" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium tracking-tight text-slate-100">
                      Сроки рассмотрения
                    </span>
</div>
<div className="flex flex-col gap-1.5 text-slate-300">
<p>
                      Стандартный срок рассмотрения обращения — до 10 рабочих дней.
                    </p>
<p>
                      В отдельных случаях срок может быть увеличен, о чём вы будете
                      уведомлены в личном кабинете или по указанным контактам.
                    </p>
</div>
<div className="mt-1 flex items-center justify-between gap-2 text-[0.7rem] text-slate-400">
<span>Последнее обновление регламента: 12.10.2025</span>
<a className="text-sky-400 hover:text-sky-300" href="#">
                      Подробнее о регламенте
                    </a>
</div>
</div>
</aside>
</div>
</section>

<section className="page-section hidden flex-col gap-8" id="page-status">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="flex flex-col gap-1.5">
<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50">
                  Проверка статуса обращения
                </h1>
<p className="text-sm md:text-base text-slate-300 max-w-2xl">
                  Введите номер обращения, который вы получили при отправке сообщения.
                  Если вы авторизованы, вы также можете просмотреть все обращения
                  в личном кабинете.
                </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/80 hover:border-sky-500/70 hover:bg-slate-900/80 text-xs md:text-sm text-slate-100 px-3.5 py-1.5 md:px-4 md:py-2 transition-colors" data-page="profile">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:user" style={{strokeWidth: '1.5'}}></iconify-icon>
                Открыть личный кабинет
              </button>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6 items-start">

<div className="flex flex-col gap-4">
<form className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex flex-col gap-1.5">
<label className="text-slate-100 font-medium tracking-tight">
                      Номер обращения
                    </label>
<div className="grid sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] gap-3">
<input className="w-full rounded-md border border-slate-700 bg-slate-950 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 px-2.5 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Например: AUR-2025-10-12345" type="text"/>
<button className="inline-flex items-center justify-center gap-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-xs md:text-sm font-medium tracking-tight text-slate-950 px-4 py-2 md:px-5 md:py-2.5 transition-colors shadow-sm shadow-sky-500/40" type="submit">
<iconify-icon className="w-4 h-4" icon="lucide:search-check" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Проверить статус
                      </button>
</div>
<span className="text-[0.7rem] text-slate-400">
                      Если вы потеряли номер, авторизуйтесь в личном кабинете для просмотра всех обращений.
                    </span>
</div>
</form>

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-sky-500/90 text-[0.7rem] font-semibold tracking-tight text-slate-950">
                        A
                      </span>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                          Обращение AUR-2025-10-12345
                        </span>
<span className="text-[0.7rem] text-slate-400">
                          Отправлено 22.10.2025 в 18:42
                        </span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/50 text-[0.7rem] text-amber-200 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                        На рассмотрении
                      </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-3 mt-2">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">
                        Тип нарушения
                      </span>
<span className="text-slate-100">
                        Неправильная парковка
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">
                        Место
                      </span>
<span className="text-slate-100">
                        г. Москва, ул. Примерная, д. 10
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">
                        Ожидаемый срок
                      </span>
<span className="text-slate-100">
                        До 02.11.2025
                      </span>
</div>
</div>
<div className="mt-2 border-t border-slate-800/80 pt-3 flex flex-col gap-1.5">
<span className="text-[0.7rem] text-slate-400">
                      Последнее обновление статуса:
                    </span>
<div className="flex items-start gap-2">
<iconify-icon className="w-3.5 h-3.5 text-sky-400 mt-[1px]" icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs md:text-sm text-slate-200">
                        Сотрудник дорожной инспекции запросил дополнительные материалы. Прикреплённые
                        вами файлы находятся на проверке. При необходимости с вами свяжутся по указанному телефону.
                      </p>
</div>
</div>
<div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[0.7rem]">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:paperclip" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Файлы: 3 вложения</span>
</div>
<button className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:external-link" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Открыть подробности</span>
</button>
</div>
</div>
</div>

<aside className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 md:px-4 md:py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-sky-400" icon="lucide:list-checks" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium tracking-tight text-slate-100">
                    Этапы рассмотрения обращения
                  </span>
</div>
<ol className="flex flex-col gap-2 text-slate-300">
<li className="flex gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-100">
                        Принято
                      </span>
<span className="text-[0.7rem]">
                        Обращению присвоен номер, оно зарегистрировано в системе.
                      </span>
</div>
</li>
<li className="flex gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-300"></span>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-100">
                        На рассмотрении
                      </span>
<span className="text-[0.7rem]">
                        Специалисты анализируют материалы и сопоставляют их с камерой наблюдения
                        и другими источниками.
                      </span>
</div>
</li>
<li className="flex gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-100">
                        Решение принято
                      </span>
<span className="text-[0.7rem]">
                        По результатам проверки принято процессуальное решение. Подробности
                        доступны в личном кабинете.
                      </span>
</div>
</li>
<li className="flex gap-2">
<span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<div className="flex flex-col gap-0.5">
<span className="font-medium tracking-tight text-slate-100">
                        Закрыто
                      </span>
<span className="text-[0.7rem]">
                        Рассмотрение обращения завершено, материалы перенесены в архив.
                      </span>
</div>
</li>
</ol>
</aside>
</div>
</section>

<section className="page-section hidden flex-col gap-8" id="page-profile">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="flex flex-col gap-1.5">
<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50">
                  Личный кабинет
                </h1>
<p className="text-sm md:text-base text-slate-300 max-w-2xl">
                  Здесь вы можете управлять своими обращениями, просматривать статусы и
                  получать уведомления о ходе их рассмотрения.
                </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 text-[0.7rem] md:text-xs text-emerald-200 px-3 py-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Авторизован как: citizen@example.ru
              </button>
</div>
<div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-6 items-start">

<aside className="flex flex-col gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 md:px-4 md:py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300 text-slate-950 flex items-center justify-center font-semibold tracking-tight">
                      ИИ
                    </div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                        Иван Иванов
                      </span>
<span className="text-[0.7rem] text-slate-400">
                        Зарегистрирован 15.03.2024
                      </span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-1 text-[0.7rem] text-slate-300">
<div className="flex flex-col gap-0.5">
<span className="text-slate-400">Электронная почта</span>
<span>citizen@example.ru</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-slate-400">Телефон</span>
<span>+7 900 123‑45‑67</span>
</div>
</div>
<div className="mt-2 border-t border-slate-800/80 pt-3 flex items-center justify-between gap-2 text-[0.7rem]">
<div className="flex items-center gap-1.5 text-slate-400">
<iconify-icon className="w-3.5 h-3.5 text-sky-400" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Двухфакторная аутентификация включена</span>
</div>
<button className="text-sky-400 hover:text-sky-300">
                      Настройки
                    </button>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center justify-between gap-2">
<span className="font-medium tracking-tight text-slate-100">
                      Краткая статистика
                    </span>
<button className="text-[0.7rem] text-sky-400 hover:text-sky-300">
                      Экспорт
                    </button>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Всего</span>
<span className="text-lg font-semibold tracking-tight text-slate-50">
                        18
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">В работе</span>
<span className="text-lg font-semibold tracking-tight text-amber-300">
                        4
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Завершено</span>
<span className="text-lg font-semibold tracking-tight text-emerald-400">
                        13
                      </span>
</div>
</div>
<div className="mt-1 flex flex-col gap-1.5 text-[0.7rem] text-slate-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:info" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                        Завершённые обращения хранятся в архиве не менее 3 лет.
                      </span>
</div>
</div>
</div>
</aside>

<section className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-4 text-xs md:text-sm">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tight text-slate-100">
                      Ваши обращения
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      Последние 6 месяцев
                    </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<select className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option>Все статусы</option>
<option>На рассмотрении</option>
<option>Принято решение</option>
<option>Закрыто</option>
</select>
<select className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option>Все типы</option>
<option>Скорость</option>
<option>Парковка</option>
<option>Светофор</option>
<option>Иное</option>
</select>
</div>
</div>
<div className="overflow-x-auto rounded-xl border border-slate-800">
<table className="min-w-full text-[0.7rem] md:text-xs text-left">
<thead className="bg-slate-900/90 text-slate-400">
<tr>
<th className="py-2.5 px-3 font-medium">Номер</th>
<th className="py-2.5 px-3 font-medium">Дата</th>
<th className="py-2.5 px-3 font-medium">Тип</th>
<th className="py-2.5 px-3 font-medium">Место</th>
<th className="py-2.5 px-3 font-medium">Статус</th>
<th className="py-2.5 px-3 font-medium text-right">Действия</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/80">
<tr className="hover:bg-slate-900/70">
<td className="py-2.5 px-3 text-slate-100">
                          AUR-2025-10-12345
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          22.10.2025
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          Парковка
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          Москва, ул. Примерная, 10
                        </td>
<td className="py-2.5 px-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-[0.7rem] text-amber-200 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                            На рассмотрении
                          </span>
</td>
<td className="py-2.5 px-3 text-right">
<button className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:eye" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Открыть</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-900/70">
<td className="py-2.5 px-3 text-slate-100">
                          AUR-2025-09-09821
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          30.09.2025
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          Скорость
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          МКАД, 45 км
                        </td>
<td className="py-2.5 px-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[0.7rem] text-emerald-200 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                            Закрыто
                          </span>
</td>
<td className="py-2.5 px-3 text-right">
<button className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:eye" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Открыть</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-900/70">
<td className="py-2.5 px-3 text-slate-100">
                          AUR-2025-09-07764
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          18.09.2025
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          Светофор
                        </td>
<td className="py-2.5 px-3 text-slate-300">
                          Санкт‑Петербург, Невский пр.
                        </td>
<td className="py-2.5 px-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[0.7rem] text-emerald-200 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                            Решение принято
                          </span>
</td>
<td className="py-2.5 px-3 text-right">
<button className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:eye" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Открыть</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between gap-3 text-[0.7rem] text-slate-400">
<span>Показаны 3 из 18 обращений</span>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/80 text-slate-200 hover:border-sky-500/70 hover:bg-slate-900/80 w-6 h-6">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-sky-500/70 bg-sky-500/10 text-sky-200 w-6 h-6">
                      1
                    </button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/80 text-slate-200 hover:border-sky-500/70 hover:bg-slate-900/80 w-6 h-6">
                      2
                    </button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/80 text-slate-200 hover:border-sky-500/70 hover:bg-slate-900/80 w-6 h-6">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</section>
</div>
</section>

<section className="page-section hidden flex-col gap-8" id="page-admin">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="flex flex-col gap-1.5">
<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-50">
                  Административная панель
                </h1>
<p className="text-sm md:text-base text-slate-300 max-w-2xl">
                  Панель для сотрудников, отвечающих за обработку обращений. Просматривайте
                  новые сообщения, меняйте статусы и оставляйте служебные комментарии.
                </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[0.7rem] text-emerald-200 px-3 py-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Дежурная смена · инспектор ID‑204
                </span>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/80 hover:border-sky-500/70 hover:bg-slate-900/80 text-[0.7rem] text-slate-100 px-3 py-1.5 transition-colors">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:log-out" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Выйти
                </button>
</div>
</div>
<div className="grid xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-6 items-start">

<aside className="flex flex-col gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 md:px-4 md:py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center justify-between gap-2">
<span className="font-medium tracking-tight text-slate-100">
                      Краткая статистика
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      Обновлено 5 мин назад
                    </span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Новые</span>
<span className="text-lg font-semibold tracking-tight text-slate-50">
                        24
                      </span>
<span className="text-[0.7rem] text-amber-300">
                        Требуют регистрации
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">В работе</span>
<span className="text-lg font-semibold tracking-tight text-sky-400">
                        86
                      </span>
<span className="text-[0.7rem] text-slate-400">
                        Назначено инспекторам
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Просрочены</span>
<span className="text-lg font-semibold tracking-tight text-rose-300">
                        5
                      </span>
<span className="text-[0.7rem] text-rose-300">
                        Требуется внимание
                      </span>
</div>
</div>
<div className="mt-2 flex items-center gap-2 text-[0.7rem] text-slate-400">
<iconify-icon className="w-3.5 h-3.5 text-rose-300" icon="lucide:alert-octagon" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                      3 обращения без назначенного исполнителя более 24 часов.
                    </span>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex items-center justify-between gap-2">
<span className="font-medium tracking-tight text-slate-100">
                      Фильтр обращений
                    </span>
<button className="text-[0.7rem] text-sky-400 hover:text-sky-300">
                      Сбросить
                    </button>
</div>
<div className="grid md:grid-cols-2 gap-3">
<div className="flex flex-col gap-1.5">
<span className="text-[0.7rem] text-slate-400">Статус</span>
<select className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option>Все</option>
<option>Новые</option>
<option>В работе</option>
<option>Решение принято</option>
<option>Закрыто</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[0.7rem] text-slate-400">Тип нарушения</span>
<select className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option>Все</option>
<option>Скорость</option>
<option>Разметка</option>
<option>Парковка</option>
<option>Светофор</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[0.7rem] text-slate-400">Период</span>
<select className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option>Сегодня</option>
<option>Последние 7 дней</option>
<option>Последние 30 дней</option>
<option>Произвольный</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-[0.7rem] text-slate-400">Исполнитель</span>
<input className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 placeholder:text-slate-500 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="ID или ФИО" type="text"/>
</div>
</div>
<button className="inline-flex items-center justify-center gap-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-[0.7rem] font-medium tracking-tight text-slate-950 px-3 py-1.5 transition-colors">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:filter" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Применить фильтр
                  </button>
</div>
</aside>

<section className="flex flex-col gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tight text-slate-100">
                        Обращения
                      </span>
<span className="text-[0.7rem] text-slate-400">
                        115 в выборке
                      </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 text-[0.7rem] text-slate-300 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Авто‑распределение
                      </div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/80 hover:border-sky-500/70 hover:bg-slate-900/80 text-[0.7rem] text-slate-100 px-2.5 py-1.5 transition-colors">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Выгрузить CSV
                      </button>
</div>
</div>
<div className="overflow-x-auto rounded-xl border border-slate-800">
<table className="min-w-full text-[0.7rem] md:text-xs text-left">
<thead className="bg-slate-900/90 text-slate-400">
<tr>
<th className="py-2.5 px-3 font-medium">Номер</th>
<th className="py-2.5 px-3 font-medium">Получено</th>
<th className="py-2.5 px-3 font-medium">Тип</th>
<th className="py-2.5 px-3 font-medium">Статус</th>
<th className="py-2.5 px-3 font-medium">Исполнитель</th>
<th className="py-2.5 px-3 font-medium text-right">Срок</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/80">
<tr className="hover:bg-slate-900/70 cursor-pointer">
<td className="py-2.5 px-3 text-slate-100">
                            AUR-2025-10-13001
                          </td>
<td className="py-2.5 px-3 text-slate-300">
                            23.10 · 09:14
                          </td>
<td className="py-2.5 px-3 text-slate-300">
                            Скорость
                          </td>
<td className="py-2.5 px-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-[0.7rem] text-amber-200 px-2 py-0.5">
                              Новое
                            </span>
</td>
<td className="py-2.5 px-3 text-slate-400">
                            Не назначен
                          </td>
<td className="py-2.5 px-3 text-right text-amber-300">
                            Сегодня, 18:00
                          </td>
</tr>
<tr className="hover:bg-slate-900/70 cursor-pointer">
<td className="py-2.5 px-3 text-slate-100">
                            AUR-2025-10-12987
                          </td>
<td className="py-2.5 px-3 text-slate-300">
                            23.10 · 08:02
                          </td>
<td className="py-2.5 px-3 text-slate-300">
                            Парковка
                          </td>
<td className="py-2.5 px-3">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/40 text-[0.7rem] text-sky-200 px-2 py-0.5">
                              В работе
                            </span>
</td>
<td className="py-2.5 px-3 text-slate-300">
                            ID‑204
                          </td>
<td className="py-2.5 px-3 text-right text-slate-300">
                            Завтра
                          </td>
</tr>
<tr className="hover:bg-slate-900/70 cursor-pointer">
<td className="py-2.5 px-3 text-slate-100">
                            AUR-2025-10-12912
                          </td>
<td className="py-2.5 px-3 text-slate-300">
                            22.10 · 20:17
                          </td>
<td className="py-2.5 px-3 text-slate-300">
                            Светофор
                          </td>
<td className="py-2.5 px-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[0.7rem] text-emerald-200 px-2 py-0.5">
                              Решение
                            </span>
</td>
<td className="py-2.5 px-3 text-slate-300">
                            ID‑178
                          </td>
<td className="py-2.5 px-3 text-right text-emerald-300">
                            Выполнено
                          </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-3 text-xs md:text-sm">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-sky-500/90 text-[0.7rem] font-semibold tracking-tight text-slate-950">
                        A
                      </span>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-slate-100">
                          AUR-2025-10-12987
                        </span>
<span className="text-[0.7rem] text-slate-400">
                          Поступило 23.10.2025 в 08:02 от зарегистрированного пользователя
                        </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/80 hover:border-sky-500/70 hover:bg-slate-900/80 text-[0.7rem] text-slate-100 px-2.5 py-1.5 transition-colors">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:share-2" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Открыть в системе
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/40 bg-rose-500/10 text-[0.7rem] text-rose-100 px-2.5 py-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:flag" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Отметить как срочное
                      </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-3 mt-1">
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Тип нарушения</span>
<span className="text-slate-100">
                        Неправильная парковка (пешеходный переход)
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Место</span>
<span className="text-slate-100">
                        Москва, ул. Примерная, 10
                      </span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[0.7rem] text-slate-400">Госномер</span>
<span className="text-slate-100">
                        А123БВ777, серый седан
                      </span>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-4 mt-2">
<div className="flex flex-col gap-2">
<span className="text-[0.7rem] text-slate-400">
                        Описание обращения
                      </span>
<p className="text-xs md:text-sm text-slate-200">
                        Транспортное средство припарковано на пешеходном переходе, создаёт
                        помеху обзору для водителей и пешеходов. Нарушение носит
                        систематический характер — аналогичная ситуация наблюдается
                        ежедневно в вечернее время.
                      </p>
<div className="mt-1 flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-700 px-2 py-0.5">
<iconify-icon className="w-3 h-3" icon="lucide:camera" style={{strokeWidth: '1.5'}}></iconify-icon>
                          2 фото
                        </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-700 px-2 py-0.5">
<iconify-icon className="w-3 h-3" icon="lucide:video" style={{strokeWidth: '1.5'}}></iconify-icon>
                          1 видео
                        </span>
</div>
</div>

<div className="flex flex-col gap-2">
<span className="text-[0.7rem] text-slate-400">
                        Управление статусом
                      </span>
<div className="flex flex-col gap-2">
<select className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60">
<option>В работе</option>
<option>Запрос доп. материалов</option>
<option>Решение принято</option>
<option>Закрыто</option>
</select>
<textarea className="rounded-md border border-slate-700 bg-slate-950 text-[0.7rem] text-slate-100 placeholder:text-slate-500 px-2 py-1.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/60" placeholder="Служебный комментарий (виден только сотрудникам)..." rows="3"></textarea>
<div className="flex items-center justify-between gap-2 text-[0.7rem]">
<div className="flex items-center gap-1.5 text-slate-400">
<iconify-icon className="w-3.5 h-3.5 text-sky-400" icon="lucide:user" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Исполнитель: ID‑204</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-[0.7rem] font-medium tracking-tight text-slate-950 px-3 py-1.5 transition-colors">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:save" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Сохранить
                          </button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</section>
</div>
</main>
<footer className="border-t border-slate-800/80 bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.7rem] text-slate-500">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tight text-slate-200">
              Aura
            </span>
<span>Цифровой сервис для повышения безопасности на дорогах.</span>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="hover:text-sky-300" href="#">Политика обработки данных</a>
<a className="hover:text-sky-300" href="#">Пользовательское соглашение</a>
<span className="text-slate-600">
              © 2025, Городская служба дорожной безопасности
            </span>
</div>
</div>
</footer>
</div>


    </>
  );
}
