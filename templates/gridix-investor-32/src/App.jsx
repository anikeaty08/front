import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Theme toggle
      const themeToggle = document.getElementById('theme-toggle');
      const body = document.body;
      let isDark = true;

      themeToggle.addEventListener('click', () => {
          isDark = !isDark;
          body.classList.toggle('light', !isDark);
          themeToggle.querySelector('.dark-icon').classList.toggle('hidden', isDark);
          themeToggle.querySelector('.light-icon').classList.toggle('hidden', !isDark);
      });

      // Language toggle
      const langToggle = document.getElementById('lang-toggle');
      const translations = {
          ru: {
              problem: 'Проблема',
              solution: 'Решение',
              market: 'Рынок',
              traction: 'Traction',
              team: 'Команда',
              contact: 'Связаться'
          },
          en: {
              problem: 'Problem',
              solution: 'Solution',
              market: 'Market',
              traction: 'Traction',
              team: 'Team',
              contact: 'Contact'
          }
      };
      let currentLang = 'ru';

      langToggle.addEventListener('click', () => {
          currentLang = currentLang === 'ru' ? 'en' : 'ru';
          langToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
          const t = translations[currentLang];
          const navLinks = document.querySelectorAll('nav a[href^="#"]');
          navLinks.forEach(link => {
              const href = link.getAttribute('href').replace('#', '');
              if (t[href]) link.textContent = t[href];
          });
          const contactBtn = document.querySelector('nav a[href="#contact"].px-4');
          if (contactBtn) contactBtn.textContent = t.contact;
      });

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          });
      });

      // Enhanced Intersection Observer for staggered animations
      const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' };

      const animationObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const section = entry.target;

                  // Animate section container
                  section.style.opacity = '1';
                  section.style.transform = 'translateY(0)';

                  // Animate children with stagger
                  const animateElements = section.querySelectorAll('.animate-on-scroll');
                  animateElements.forEach((el, index) => {
                      setTimeout(() => {
                          el.classList.add('animate-slide-up');
                      }, index * 100);
                  });

                  // Animate cards
                  const cards = section.querySelectorAll('.card-hover, .metric-card, .glass');
                  cards.forEach((card, index) => {
                      setTimeout(() => {
                          card.style.opacity = '1';
                          card.style.transform = 'translateY(0) scale(1)';
                      }, 200 + index * 80);
                  });
              }
          });
      }, observerOptions);

      // Setup initial states and observe
      document.querySelectorAll('section').forEach((section, sectionIndex) => {
          if (sectionIndex > 0) {
              section.style.opacity = '0';
              section.style.transform = 'translateY(40px)';
              section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          }

          // Setup cards initial state
          const cards = section.querySelectorAll('.card-hover, .metric-card');
          cards.forEach(card => {
              card.style.opacity = '0';
              card.style.transform = 'translateY(30px) scale(0.95)';
              card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          });

          animationObserver.observe(section);
      });

      // Make first section visible immediately with entrance animation
      const firstSection = document.querySelector('section');
      firstSection.style.opacity = '1';
      firstSection.style.transform = 'translateY(0)';

      // Parallax effect on scroll
      let ticking = false;
      window.addEventListener('scroll', () => {
          if (!ticking) {
              window.requestAnimationFrame(() => {
                  const scrolled = window.pageYOffset;
                  const floatElements = document.querySelectorAll('.float');
                  floatElements.forEach((el, i) => {
                      const speed = 0.05 + (i * 0.02);
                      el.style.transform = `translateY(${scrolled * speed}px)`;
                  });
                  ticking = false;
              });
              ticking = true;
          }
      });

      // Re-init lucide icons after DOM changes
      setTimeout(() => lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }), 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">
              G
            </span>
</div>
<span className="font-semibold tracking-tight text-lg">GRIDIX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#problem">
            Проблема
          </a>
<a className="hover:text-white transition-colors" href="#solution">
            Решение
          </a>
<a className="hover:text-white transition-colors" href="#market">Рынок</a>
<a className="hover:text-white transition-colors" href="#traction">
            Traction
          </a>
<a className="hover:text-white transition-colors" href="#team">Команда</a>
</div>
<div className="flex items-center gap-3 ml-4">
<button className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-300" id="theme-toggle" title="Toggle theme">
<i className="w-5 h-5 text-zinc-400 hidden dark-icon" data-lucide="sun"></i>
<i className="w-5 h-5 text-zinc-400 light-icon" data-lucide="moon"></i>
</button>
<button className="px-3 py-2 rounded-lg glass text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300" id="lang-toggle">
            EN
          </button>
</div>
<a className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm font-medium" href="#contact">
          Связаться
        </a>
</div>
</nav>

<section className="slide flex items-center justify-center relative overflow-hidden px-6">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl float"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl float" style={{animationDelay: '-3s'}}></div>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Pre-Seed · $150K раунд
        </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
          Экосистема для рынка
          <br/>
<span className="gradient-text">новостроек</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Живой SMART CATALOG + виджеты + кабинеты для застройщиков, агентств и
          агентов. Единая цифровая система продаж недвижимости.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2" href="#solution">
            Узнать больше
            <i className="w-4 h-4" data-lucide="arrow-down"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-white/5 transition-colors font-medium flex items-center justify-center gap-2" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Назначить встречу
          </a>
</div>
</div>
</section>

<section className="slide py-24 px-6 border-t border-zinc-800/50 flex items-center">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="metric-card rounded-2xl p-6 md:p-8 border border-zinc-800/50">
<p className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">
              $16K
            </p>
<p className="text-zinc-400 mt-2 text-sm">Выручка с 1 девелопера</p>
</div>
<div className="metric-card rounded-2xl p-6 md:p-8 border border-zinc-800/50">
<p className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">
              7
            </p>
<p className="text-zinc-400 mt-2 text-sm">Проектов подключено</p>
</div>
<div className="metric-card rounded-2xl p-6 md:p-8 border border-zinc-800/50">
<p className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">
              8+
            </p>
<p className="text-zinc-400 mt-2 text-sm">Агентств в интересе</p>
</div>
<div className="metric-card rounded-2xl p-6 md:p-8 border border-zinc-800/50">
<p className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">
              2
            </p>
<p className="text-zinc-400 mt-2 text-sm">Активных пилота</p>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 flex items-center" id="problem">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Проблема
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Хаос в данных и партнёрском канале
          </h2>
<p className="text-zinc-400 text-lg leading-relaxed">
            Статусы и цены раскиданы по Excel, CRM, PDF и чатам. Сайт и шахматки
            запаздывают. Руководство видит только финансовые отчёты, но не живую
            аналитику.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass rounded-2xl p-6 card-hover">
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-red-400" data-lucide="clock"></i>
</div>
<p className="text-2xl font-semibold tracking-tight mb-2">30-40%</p>
<p className="text-zinc-400 text-sm">
              времени отдела продаж уходит на ответы «что свободно?»
            </p>
</div>
<div className="glass rounded-2xl p-6 card-hover">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-orange-400" data-lucide="user-x"></i>
</div>
<p className="text-2xl font-semibold tracking-tight mb-2">15-35%</p>
<p className="text-zinc-400 text-sm">
              лидов теряются из-за ручной обработки
            </p>
</div>
<div className="glass rounded-2xl p-6 card-hover">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-yellow-400" data-lucide="mail"></i>
</div>
<p className="text-2xl font-semibold tracking-tight mb-2">1-2 ч/день</p>
<p className="text-zinc-400 text-sm">на менеджера — пересылка файлов</p>
</div>
<div className="glass rounded-2xl p-6 card-hover">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="help-circle"></i>
</div>
<p className="text-2xl font-semibold tracking-tight mb-2">
              «Чёрный ящик»
            </p>
<p className="text-zinc-400 text-sm">
              партнёрский канал без прозрачности
            </p>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent flex items-center" id="solution">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Решение
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Живой каталог + экосистема ролей
          </h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Единый источник правды по инвентарю для всех участников рынка
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-6 mb-12">
<div className="glass rounded-2xl p-8 card-hover">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-indigo-400" data-lucide="database"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">
                  SMART CATALOG
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                  Единый каталог проектов, корпусов, этажей и лотов с живыми
                  статусами и ценами. Структурированные данные по всему
                  инвентарю.
                </p>
</div>
</div>
<div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50">
<div className="flex items-center gap-3 text-sm">
<span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">
                  Свободно
                </span>
<span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">
                  Бронь
                </span>
<span className="px-2 py-1 rounded bg-red-500/20 text-red-400">
                  Продано
                </span>
</div>
</div>
</div>
<div className="glass rounded-2xl p-8 card-hover">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-purple-400" data-lucide="layout-grid"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">
                  Виджеты и интеграции
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                  Шахматка и каталог на сайт, мини-лендинги проектов, интеграции
                  с Bitrix24, amoCRM через API.
                </p>
</div>
</div>
<div className="flex gap-3">
<div className="px-3 py-2 rounded-lg bg-zinc-800/50 text-xs text-zinc-400">
                amoCRM
              </div>
<div className="px-3 py-2 rounded-lg bg-zinc-800/50 text-xs text-zinc-400">
                Bitrix24
              </div>
<div className="px-3 py-2 rounded-lg bg-zinc-800/50 text-xs text-zinc-400">
                API
              </div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">
<div className="glass rounded-2xl p-6 card-hover border-t-2 border-t-indigo-500">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-indigo-400" data-lucide="building-2"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2">
              Для застройщиков
            </h3>
<p className="text-zinc-400 text-sm mb-4">
              Управление проектами, ценами, статусами и партнёрами
            </p>
<p className="text-indigo-400 font-medium">~$129-189/мес</p>
</div>
<div className="glass rounded-2xl p-6 card-hover border-t-2 border-t-purple-500">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-purple-400" data-lucide="users"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2">
              Для агентств
            </h3>
<p className="text-zinc-400 text-sm mb-4">
              CRM, команда, воронка и подборки для клиентов
            </p>
<p className="text-purple-400 font-medium">$29/мес</p>
</div>
<div className="glass rounded-2xl p-6 card-hover border-t-2 border-t-emerald-500">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-emerald-400" data-lucide="user"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2">
              Для агентов
            </h3>
<p className="text-zinc-400 text-sm mb-4">
              Личный кабинет с каталогом и простой CRM
            </p>
<p className="text-emerald-400 font-medium">Бесплатно</p>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 flex items-center">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
              Почему сейчас
            </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Рынок готов к стандартизации
            </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="globe"></i>
</div>
<div>
<h4 className="font-medium mb-1">Рост зарубежных сделок</h4>
<p className="text-zinc-400 text-sm">
                    Сложные сделки с рассрочками, разными валютами и месяцами
                    согласований
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-purple-400" data-lucide="smartphone"></i>
</div>
<div>
<h4 className="font-medium mb-1">Ожидания как у финтеха</h4>
<p className="text-zinc-400 text-sm">
                    Покупатели ждут онлайн-опыт уровня маркетплейсов
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-emerald-400" data-lucide="puzzle"></i>
</div>
<div>
<h4 className="font-medium mb-1">Разрозненная цифровизация</h4>
<p className="text-zinc-400 text-sm">
                    Сайт, CRM, личные кабинеты живут отдельно — нет стандарта
                  </p>
</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-8">
<div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
<div className="text-center">
<p className="text-6xl font-semibold tracking-tight gradient-text mb-2">
                  $100B+
                </p>
<p className="text-zinc-400">PropTech рынок к 2030</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent flex items-center" id="market">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Рынок
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            TAM / SAM / SOM
          </h2>
</div>
<div className="flex flex-col items-center">
<div className="relative w-full max-w-2xl">

<div className="glass rounded-full aspect-square flex items-center justify-center p-8">
<div className="glass rounded-full aspect-square w-3/4 flex items-center justify-center p-8">
<div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full aspect-square w-1/2 flex items-center justify-center">
<div className="text-center">
<p className="text-xl md:text-2xl font-semibold tracking-tight">
                      $20-40M
                    </p>
<p className="text-xs text-indigo-200">SOM ARR</p>
</div>
</div>
</div>
</div>

<div className="absolute top-4 left-4 text-sm">
<p className="font-medium">TAM ~$40-100B</p>
<p className="text-zinc-400 text-xs">PropTech / RE Software</p>
</div>
<div className="absolute top-1/4 right-8 text-sm text-right">
<p className="font-medium">SAM ~$2-3B</p>
<p className="text-zinc-400 text-xs">Целевые регионы</p>
</div>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
<div className="text-center p-6">
<i className="w-6 h-6 text-indigo-400 mx-auto mb-3" data-lucide="map-pin"></i>
<p className="font-medium mb-1">Грузия</p>
<p className="text-zinc-400 text-sm">Пилотный рынок</p>
</div>
<div className="text-center p-6">
<i className="w-6 h-6 text-purple-400 mx-auto mb-3" data-lucide="trending-up"></i>
<p className="font-medium mb-1">Казахстан, Турция</p>
<p className="text-zinc-400 text-sm">Следующие рынки</p>
</div>
<div className="text-center p-6">
<i className="w-6 h-6 text-emerald-400 mx-auto mb-3" data-lucide="target"></i>
<p className="font-medium mb-1">ОАЭ</p>
<p className="text-zinc-400 text-sm">Стратегическая цель</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 flex items-center">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Бизнес-модель
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Источники выручки
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass rounded-2xl p-6 card-hover">
<div className="text-3xl font-semibold tracking-tight gradient-text mb-2">
              $129-189
            </div>
<p className="text-sm text-zinc-400 mb-4">/мес за проект</p>
<h3 className="font-medium mb-2">Девелоперы</h3>
<p className="text-zinc-500 text-sm">BASIC/PRO подписка</p>
</div>
<div className="glass rounded-2xl p-6 card-hover">
<div className="text-3xl font-semibold tracking-tight gradient-text mb-2">
              $29
            </div>
<p className="text-sm text-zinc-400 mb-4">/мес за агентство</p>
<h3 className="font-medium mb-2">Агентства</h3>
<p className="text-zinc-500 text-sm">Без лимита пользователей</p>
</div>
<div className="glass rounded-2xl p-6 card-hover">
<div className="text-3xl font-semibold tracking-tight gradient-text mb-2">
              $0
            </div>
<p className="text-sm text-zinc-400 mb-4">бесплатно</p>
<h3 className="font-medium mb-2">Агенты</h3>
<p className="text-zinc-500 text-sm">Создаём сеть снизу</p>
</div>
<div className="glass rounded-2xl p-6 card-hover">
<div className="text-3xl font-semibold tracking-tight gradient-text mb-2">
              +
            </div>
<p className="text-sm text-zinc-400 mb-4">доп. модули</p>
<h3 className="font-medium mb-2">Аналитика, AI</h3>
<p className="text-zinc-500 text-sm">Marketplace и интеграции</p>
</div>
</div>

<div className="mt-16 glass rounded-2xl p-8">
<h3 className="text-xl font-semibold tracking-tight mb-6 text-center">
            Unit Economics — целевые ориентиры
          </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight">85-90%</p>
<p className="text-zinc-400 text-sm mt-1">Gross Margin</p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight">5-7x</p>
<p className="text-zinc-400 text-sm mt-1">LTV/CAC цель</p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight">6-12</p>
<p className="text-zinc-400 text-sm mt-1">мес. payback</p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold tracking-tight">$150-200</p>
<p className="text-zinc-400 text-sm mt-1">ARPA Developer</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent flex items-center" id="traction">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Traction
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Платящий кейс подтверждён
          </h2>
<p className="text-zinc-400 text-lg">
            $16,000 от одного девелопера за 7 проектов
          </p>
</div>
<div className="glass rounded-2xl p-8 md:p-12 mb-12">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-6">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                Подтверждённый кейс
              </div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                Крупный девелопер Грузии
              </h3>
<ul className="space-y-3 text-zinc-400">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
                  7 проектов подключены к GRIDIX
                </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
                  Каталог + шахматка в production
                </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
                  Разработка сайта под кейс клиента
                </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
                  Кастомные доработки
                </li>
</ul>
</div>
<div className="flex items-center justify-center">
<div className="text-center">
<p className="text-6xl md:text-7xl font-semibold tracking-tight gradient-text">
                  $16K
                </p>
<p className="text-zinc-400 mt-2">разовый платёж</p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass rounded-xl p-6 text-center">
<p className="text-3xl font-semibold tracking-tight mb-2">2</p>
<p className="text-zinc-400 text-sm">Пилотных проекта</p>
</div>
<div className="glass rounded-xl p-6 text-center">
<p className="text-3xl font-semibold tracking-tight mb-2">8</p>
<p className="text-zinc-400 text-sm">Агентств в интересе</p>
</div>
<div className="glass rounded-xl p-6 text-center">
<p className="text-3xl font-semibold tracking-tight mb-2">6+</p>
<p className="text-zinc-400 text-sm">Частных агентов</p>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 flex items-center">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Roadmap
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Ключевые вехи
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass rounded-2xl p-8 card-hover relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
<p className="text-indigo-400 font-medium mb-4">6 месяцев</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-indigo-400 flex-shrink-0" data-lucide="circle"></i>
                3-5 платящих девелоперов
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-indigo-400 flex-shrink-0" data-lucide="circle"></i>
                10-15 активных проектов
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-indigo-400 flex-shrink-0" data-lucide="circle"></i>
                MVP кабинетов агентств
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-indigo-400 flex-shrink-0" data-lucide="circle"></i>
                Первые агентства в пилоте
              </li>
</ul>
</div>
<div className="glass rounded-2xl p-8 card-hover relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
<p className="text-purple-400 font-medium mb-4">12 месяцев</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-purple-400 flex-shrink-0" data-lucide="circle"></i>
                10+ платящих девелоперов
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-purple-400 flex-shrink-0" data-lucide="circle"></i>
                30-40 активных проектов
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-purple-400 flex-shrink-0" data-lucide="circle"></i>
                20+ активных агентств
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-purple-400 flex-shrink-0" data-lucide="circle"></i>
                100+ активных агентов
              </li>
</ul>
</div>
<div className="glass rounded-2xl p-8 card-hover relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-emerald-500"></div>
<p className="text-emerald-400 font-medium mb-4">18 месяцев</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-emerald-400 flex-shrink-0" data-lucide="circle"></i>
                Позитивная операционная маржа
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-emerald-400 flex-shrink-0" data-lucide="circle"></i>
                Product-market fit в Грузии
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-emerald-400 flex-shrink-0" data-lucide="circle"></i>
                Первые кейсы в 1-2 странах
              </li>
<li className="flex items-start gap-2">
<i className="w-2 h-2 mt-2 text-emerald-400 flex-shrink-0" data-lucide="circle"></i>
                Готовность к Seed раунду
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent flex items-center">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Инвестиции
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Pre-Seed раунд
          </h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">
<div className="glass rounded-2xl p-8">
<div className="text-center mb-8">
<p className="text-5xl md:text-6xl font-semibold tracking-tight gradient-text">
                $150K
              </p>
<p className="text-zinc-400 mt-2">запрашиваемые инвестиции</p>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/30">
<span className="text-zinc-400">Текущий burn</span>
<span className="font-medium">~$12K/мес</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/30">
<span className="text-zinc-400">Runway</span>
<span className="font-medium">12-18 месяцев</span>
</div>
</div>
</div>
<div className="glass rounded-2xl p-8">
<h3 className="text-lg font-semibold tracking-tight mb-6">
              Use of Funds
            </h3>
<div className="space-y-4">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Продукт и разработка</span>
<span className="text-sm font-medium text-indigo-400">40%</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Продажи и маркетинг</span>
<span className="text-sm font-medium text-purple-400">30%</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Инфраструктура</span>
<span className="text-sm font-medium text-pink-400">20%</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '20%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm">Юридические расходы</span>
<span className="text-sm font-medium text-emerald-400">10%</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 flex items-center" id="team">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Команда
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Кто строит GRIDIX
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass rounded-2xl p-8 card-hover">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
<span className="text-2xl font-semibold text-white">РК</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">
              Рустам Каримов
            </h3>
<p className="text-indigo-400 text-sm mb-4">CEO &amp; Founder</p>
<p className="text-zinc-400 text-sm leading-relaxed">
              7+ лет в зарубежной недвижимости (Грузия, Турция). Автоматизация
              девелоперов, внедрение CRM, построение процессов.
            </p>
</div>
<div className="glass rounded-2xl p-8 card-hover">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="code-2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">CTO</h3>
<p className="text-purple-400 text-sm mb-4">Директор по разработке</p>
<p className="text-zinc-400 text-sm leading-relaxed">
              Архитектура, качество кода и управляемый аутсорс. Опыт разработки
              B2B-продуктов и интеграций.
            </p>
</div>
<div className="glass rounded-2xl p-8 card-hover">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">
              Core-команда
            </h3>
<p className="text-emerald-400 text-sm mb-4">Грузия</p>
<p className="text-zinc-400 text-sm leading-relaxed">
              Фаундер, CTO, маркетинг/PR — в штате. Юрлицо и офис в Грузии. Весь
              код и IP на репозиториях GRIDIX.
            </p>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent flex items-center">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Защита
          </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Сетевые эффекты
          </h2>
</div>
<div className="glass rounded-2xl p-8 md:p-12">
<div className="grid md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4">
<i className="w-8 h-8 text-indigo-400" data-lucide="building-2"></i>
</div>
<p className="font-medium mb-2">Девелоперы</p>
<p className="text-zinc-400 text-sm">Больше проектов в каталоге</p>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
<i className="w-10 h-10 text-white" data-lucide="repeat"></i>
</div>
<p className="font-semibold text-lg tracking-tight mb-2">
                Сетевой Moat
              </p>
<p className="text-zinc-400 text-sm">
                Чем больше участников — тем выше switching cost
              </p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">
<i className="w-8 h-8 text-purple-400" data-lucide="users"></i>
</div>
<p className="font-medium mb-2">Агентства и агенты</p>
<p className="text-zinc-400 text-sm">Сложнее игнорировать GRIDIX</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide py-24 px-6 flex items-center justify-center" id="contact">
<div className="max-w-4xl mx-auto">
<div className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Станьте партнёром
              <br/>
<span className="gradient-text">нового стандарта</span>
</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              GRIDIX — это не ещё один софт, а попытка привести рынок новостроек
              к единому цифровому стандарту. Мы уже доказали, что девелопер
              готов за это платить.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2" href="mailto:rustam@gridix.io">
<i className="w-5 h-5" data-lucide="mail"></i>
                Написать фаундеру
              </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-white/5 transition-colors font-medium flex items-center justify-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="download"></i>
                Скачать PDF
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-800/50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">
                G
              </span>
</div>
<span className="font-semibold tracking-tight">GRIDIX</span>
</div>
<p className="text-zinc-500 text-sm">© 2024 GRIDIX. Грузия</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-400" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-400" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-400" data-lucide="send"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
