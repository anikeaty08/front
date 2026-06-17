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



      function openQuestion(){document.getElementById('question-modal').style.display='flex';document.body.style.overflow='hidden';}function closeQuestion(){document.getElementById('question-modal').style.display='none';document.body.style.overflow='';}window.addonContent=window.addonContent||{};window.addonContent.meta={title:'Реклама в Meta Ads',body:['Настройка таргетированной рекламы в Facebook, Instagram и Threads.','Что входит: анализ аудитории (включая эмигрантов), создание креативов, настройка кампаний, A/B тестирование, аналитика и отчётность.','Срок запуска: 5-7 дней. Стоимость: от 22 000 ₽ + рекламный бюджет.']};
    


      // Header scroll
      window.addEventListener('scroll', () => {
        const h = document.getElementById('header');
        if (window.scrollY > 20) h.classList.add('shadow-sm');
        else h.classList.remove('shadow-sm');
      });

      // Modal
      function openModal(pkg) {
        document.getElementById('modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        document.getElementById('modal').style.display = 'none';
        document.body.style.overflow = '';
      }

      // Addon modal
      const addonContent = {
        logo: { title: 'Разработка логотипа', body: ['Авторский логотип, отражающий вашу философию и подход к работе.', 'Что входит: бриф и анализ, 2-3 концепции, доработки, финальные файлы во всех форматах (SVG, PNG, PDF).', 'Срок: 5-7 дней. Стоимость: от 12 000 ₽.'] },
        direct: { title: 'Реклама в Яндекс.Директ', body: ['Настройка контекстной рекламы для быстрого потока клиентов.', 'Что входит: сбор семантики, создание объявлений, настройка кампаний, аналитика и отчётность.', 'Срок запуска: 3-5 дней. Стоимость: от 18 000 ₽ + рекламный бюджет.'] },
        seo: { title: 'SEO — Поисковая оптимизация', body: ['Долгосрочное продвижение в Яндексе и Google.', 'Что входит: технический аудит, семантическое ядро, оптимизация страниц, написание SEO-текстов, наращивание ссылочной массы.', 'Срок: от 3 месяцев. Стоимость: от 25 000 ₽ / мес.'] }
      };
      function openAddon(key) {
        const d = addonContent[key]; if (!d) return;
        document.getElementById('addon-title').textContent = d.title;
        document.getElementById('addon-body').innerHTML = d.body.map(p=>`<p>${p}</p>`).join('');
        document.getElementById('addon-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
      function closeAddon() {
        document.getElementById('addon-modal').style.display = 'none';
        document.body.style.overflow = '';
      }

      // Cookie
      if (!localStorage.getItem('cookieAccepted')) {
        setTimeout(() => { document.getElementById('cookie').style.display = 'block'; }, 800);
      }
      function acceptCookie() {
        localStorage.setItem('cookieAccepted', '1');
        document.getElementById('cookie').style.display = 'none';
      }

      // Portfolio
      const portfolioItems = [
        {title:'Светлана Иванова', cat:'Семейный психолог', g:'linear-gradient(135deg,#F0EBFF 0%,#FBF3EE 100%)'},
        {title:'Ольга Петрова', cat:'Гештальт-терапевт', g:'linear-gradient(135deg,#E8F4F0 0%,#F0EBFF 100%)'},
        {title:'Анна Михайлова', cat:'Детский психолог', g:'linear-gradient(135deg,#FBF3EE 0%,#E8F4F0 100%)'},
        {title:'Мария Соколова', cat:'Психоаналитик', g:'linear-gradient(135deg,#F0EBFF 0%,#E8F0FB 100%)'},
        {title:'Елена Васильева', cat:'КПТ-терапевт', g:'linear-gradient(135deg,#FBF3EE 0%,#F0EBFF 100%)'},
        {title:'Юлия Кузнецова', cat:'Психолог-коуч', g:'linear-gradient(135deg,#E8F4F0 0%,#FBF3EE 100%)'}
      ];
      const track = document.getElementById('portfolio-track');
      function cardHTML(item){
        return `
          <div class="min-w-[85%] sm:min-w-[45%] lg:min-w-[31%] rounded-2xl overflow-hidden border border-stone-100 bg-white">
            <div class="aspect-[4/3] relative overflow-hidden" style="background:${item.g};">
              <div class="absolute inset-x-6 top-6 h-3 bg-white/60 rounded-full"></div>
              <div class="absolute inset-x-6 top-12 bottom-6 bg-white/40 rounded-xl flex items-center justify-center">
                <div class="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
                  <iconify-icon icon="solar:heart-linear" width="28" style="color:#8B7BA8;"></iconify-icon>
                </div>
              </div>
            </div>
            <div class="p-5 flex items-center justify-between gap-3">
              <div>
                <div class="font-semibold text-sm">${item.title}</div>
                <div class="text-xs text-stone-500">${item.cat}</div>
              </div>
              <button class="px-4 py-2 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition whitespace-nowrap">Посмотреть</button>
            </div>
          </div>`;
      }
      portfolioItems.forEach(item => { track.innerHTML += cardHTML(item); });

      // Process slider
      const processSteps = [
        {n:'01', title:'Бриф', items:['Заполняете подробную анкету о практике','Созваниваемся для уточнения деталей','Фиксируем цели и пожелания']},
        {n:'02', title:'Получение контента', items:['Собираем фото и тексты','Помогаем с копирайтингом','Подбираем визуальные образы','Готовим материалы для дизайна']},
        {n:'03', title:'Согласование структуры', items:['Прототип страниц','Логика разделов и блоков','Утверждение карты сайта']},
        {n:'04', title:'Согласование стиля', items:['Подбор палитры и шрифтов','Мудборд и направление','Дизайн-концепция главной','Утверждение визуала']},
        {n:'05', title:'Создание сайта', items:['Дизайн всех страниц','Адаптивная вёрстка','Подключение форм и аналитики','Тестирование и правки']},
        {n:'06', title:'Запуск', items:['Публикация на домене','Передача доступов','Обучение работе с сайтом']}
      ];
      const pTrack = document.getElementById('process-track');
      const slidesPerView = 3;
      const totalSlides = Math.ceil(processSteps.length / slidesPerView);
      for (let i=0; i<totalSlides; i++) {
        const group = processSteps.slice(i*slidesPerView, i*slidesPerView+slidesPerView);
        let html = '<div class="min-w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5 px-1">';
        group.forEach(s => {
          html += `<div class="bg-white border border-stone-100 rounded-2xl p-7"><div class="text-3xl font-semibold tracking-tight mb-4" style="color:#8B7BA8;">${s.n}</div><h3 class="font-semibold mb-3">${s.title}</h3><ul class="space-y-2 text-xs text-stone-600 font-light">${s.items.map(it=>`<li class="flex gap-2"><iconify-icon icon="solar:check-circle-linear" width="14" style="color:#7BA88B;" class="mt-0.5 flex-shrink-0"></iconify-icon><span>${it}</span></li>`).join('')}</ul></div>`;
        });
        html += '</div>';
        pTrack.innerHTML += html;
      }
      let processPos = 0;
      const dotsEl = document.getElementById('process-dots');
      function renderDots(){
        dotsEl.innerHTML = '';
        for (let i=0;i<totalSlides;i++){
          const b = document.createElement('button');
          b.className = 'transition-all rounded-full ' + (i===processPos ? 'w-8 h-2.5 bg-stone-900' : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400');
          b.onclick = () => { processPos = i; updateProcess(); };
          dotsEl.appendChild(b);
        }
      }
      function updateProcess(){
        pTrack.style.transform = `translateX(-${processPos*100}%)`;
        renderDots();
      }
      function slideProcess(dir){
        processPos = (processPos + dir + totalSlides) % totalSlides;
        updateProcess();
      }
      renderDots();

      // Sliders
      const positions = { portfolio: 0, reviews: 0 };
      function slide(id, dir) {
        const t = document.getElementById(id+'-track');
        if (id === 'reviews') {
          positions[id] = (positions[id] + dir + 3) % 3;
          t.style.transform = `translateX(-${positions[id]*100}%)`;
        } else {
          const len = portfolioItems.length;
          positions[id] = (positions[id] + dir + len) % len;
          const card = t.children[0];
          const w = card.offsetWidth + 20;
          t.style.transform = `translateX(-${positions[id]*w}px)`;
        }
      }
    


      function toggleMobileMenu(){
              const m = document.getElementById('mobile-menu');
              const i = document.getElementById('burger-icon');
              m.classList.toggle('hidden');
              const isOpen = !m.classList.contains('hidden');
              if (i) {
                const newIcon = isOpen ? 'solar:close-linear' : 'solar:hamburger-menu-linear';
                i.setAttribute('icon', newIcon);
                if ('icon' in i) { try { i.icon = newIcon; } catch(e){} }
              }
            }
            (function(){
              const sections = ['services','packages','portfolio','reviews','faq','contacts'];
              const links = document.querySelectorAll('.nav-link');
              function setActive(id){
                links.forEach(a => {
                  const href = a.getAttribute('href');
                  if (href === '#' + id) a.classList.add('nav-active');
                  else a.classList.remove('nav-active');
                });
              }
              window.addEventListener('scroll', () => {
                let cur = '';
                const y = window.scrollY + 120;
                sections.forEach(id => {
                  const el = document.getElementById(id);
                  if (el && el.offsetTop <= y) cur = id;
                });
                if (cur) setActive(cur);
              });
            })();
    
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
      

<header className="fixed top-0 left-0 right-0 z-40 glass border-b border-stone-200/50 transition-all" id="header">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-base font-semibold tracking-tight" href="#">
          психо
          <span className="text-purple-400">.</span>
          сайт
        </a>
<nav className="hidden lg:flex items-center gap-8 text-xs text-stone-600">
<a className="nav-link hover:text-stone-900 transition" href="#services">
            Услуга
          </a>
<a className="nav-link hover:text-stone-900 transition" href="#packages">
            Пакеты
          </a>
<a className="nav-link hover:text-stone-900 transition" href="#portfolio">
            Портфолио
          </a>
<a className="nav-link hover:text-stone-900 transition" href="#reviews">
            Отзывы
          </a>
<a className="nav-link hover:text-stone-900 transition" href="#faq">
            Вопросы
          </a>
<a className="nav-link hover:text-stone-900 transition" href="#contacts">
            Контакты
          </a>
</nav>
<div className="flex items-center gap-2">
<a className="flex w-9 h-9 items-center justify-center rounded-full bg-white/60 hover:bg-white border border-stone-200/60 transition" href="https://t.me/" target="_blank">
<iconify-icon icon="mingcute:telegram-line" style={{color: '#5B9BD5'}} width="18"></iconify-icon>
</a>
<a className="flex w-9 h-9 items-center justify-center rounded-full bg-white/60 hover:bg-white border border-stone-200/60 transition" href="https://wa.me/" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#7BA88B'}} width="18"></iconify-icon>
</a>
<button className="px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition" onclick="openModal()">
            Связаться
          </button>
<button aria-label="Меню" className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/60 hover:bg-white border border-stone-200/60 transition" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="burger-icon" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="hidden lg:hidden border-t border-stone-200/50 bg-white/95" id="mobile-menu">
<nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center gap-1 text-sm text-stone-600">
<a className="nav-link px-3 py-2 rounded-lg hover:bg-stone-50 transition" href="#services" onclick="toggleMobileMenu()">
            Услуга
          </a>
<a className="nav-link px-3 py-2 rounded-lg hover:bg-stone-50 transition" href="#packages" onclick="toggleMobileMenu()">
            Пакеты
          </a>
<a className="nav-link px-3 py-2 rounded-lg hover:bg-stone-50 transition" href="#portfolio" onclick="toggleMobileMenu()">
            Портфолио
          </a>
<a className="nav-link px-3 py-2 rounded-lg hover:bg-stone-50 transition" href="#reviews" onclick="toggleMobileMenu()">
            Отзывы
          </a>
<a className="nav-link px-3 py-2 rounded-lg hover:bg-stone-50 transition" href="#faq" onclick="toggleMobileMenu()">
            Вопросы
          </a>
<a className="nav-link px-3 py-2 rounded-lg hover:bg-stone-50 transition" href="#contacts" onclick="toggleMobileMenu()">
            Контакты
          </a>
</nav>
</div>
</header>

<section className="pastel-bg pt-32 pb-24 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-stone-200/60 text-xs text-stone-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          Принимаем заказы на этот месяц
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
          Личный сайт психолога,
          <br/>
          который
          <span className="italic font-light text-purple-400">
            приводит клиентов
          </span>
</h1>
<p className="text-base text-stone-600 max-w-2xl mx-auto mb-10 font-light">
          Разрабатываем и продвигаем сайты, которые передают вашу заботу,
          экспертизу и помогают находить клиентов из поиска
        </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<button className="px-6 py-3.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition" onclick="openModal()">
            Заказать сайт
          </button>
<a className="px-6 py-3.5 rounded-full bg-white/70 border border-stone-200 text-sm font-medium hover:bg-white transition flex items-center justify-center gap-2" href="#packages">
            Посмотреть пакеты
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">120+</div>
<div className="text-xs text-stone-500 mt-1">сайтов запущено</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">7 дней</div>
<div className="text-xs text-stone-500 mt-1">средний срок</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight">4.9 / 5</div>
<div className="text-xs text-stone-500 mt-1">оценка клиентов</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            Что входит
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Состав услуги
          </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#F0EBFF'}}>
<iconify-icon icon="solar:palette-linear" style={{color: '#8B7BA8'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Авторский дизайн</h3>
<p className="text-stone-500 text-xs leading-relaxed font-light">
              Мягкие пастельные тона, типографика и образы, которые отражают
              вашу индивидуальность
            </p>
</div>
<div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#FBF3EE'}}>
<iconify-icon icon="solar:document-text-linear" style={{color: '#C28B7B'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Тексты под ключ</h3>
<p className="text-stone-500 text-xs leading-relaxed font-light">
              Подготовим продающие тексты, основанные на вашем подходе и целевой
              аудитории
            </p>
</div>
<div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#E8F4F0'}}>
<iconify-icon icon="solar:devices-linear" style={{color: '#7BA88B'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Адаптивная вёрстка</h3>
<p className="text-stone-500 text-xs leading-relaxed font-light">
              Сайт идеально работает на всех устройствах: от смартфона до
              большого экрана
            </p>
</div>
<div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#F0EBFF'}}>
<iconify-icon icon="solar:magnifer-linear" style={{color: '#8B7BA8'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">SEO-продвижение</h3>
<p className="text-stone-500 text-xs leading-relaxed font-light">
              Оптимизация под поисковые системы: Яндекс и Google найдут вас по
              запросам клиентов
            </p>
</div>
<div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#FBF3EE'}}>
<iconify-icon icon="solar:calendar-linear" style={{color: '#C28B7B'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Онлайн-запись</h3>
<p className="text-stone-500 text-xs leading-relaxed font-light">
              Подключим календарь и формы для удобной записи клиентов на
              консультации
            </p>
</div>
<div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#E8F4F0'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: '#7BA88B'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Хостинг и поддержка</h3>
<p className="text-stone-500 text-xs leading-relaxed font-light">
              Год бесплатной технической поддержки и обновлений вашего сайта
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50/50" id="packages">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            Тарифы
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Выберите свой пакет
          </h2>
</div>
<div className="grid lg:grid-cols-3 gap-5">

<div className="p-8 rounded-3xl bg-white border border-stone-100">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-2">
              Старт
            </div>
<div className="flex items-end gap-1 mb-1">
<div className="text-3xl font-semibold tracking-tight">29 000 ₽</div>
</div>
<p className="text-xs text-stone-500 mb-7 font-light">
              Сайт-визитка для начинающих специалистов
            </p>
<ul className="space-y-3 mb-8 text-xs">
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#7BA88B'}} width="16"></iconify-icon>
<span>Лендинг (одна страница)</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#7BA88B'}} width="16"></iconify-icon>
<span>Адаптив под мобильные</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#7BA88B'}} width="16"></iconify-icon>
<span>Форма обратной связи</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#7BA88B'}} width="16"></iconify-icon>
<span>Запуск за 5 дней</span>
</li>
</ul>
<button className="w-full py-3 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition" onclick="openModal('Старт')">
              Заказать
            </button>
</div>

<div className="p-8 rounded-3xl border-2 relative" style={{background: 'linear-gradient(180deg,#F0EBFF 0%, #FBF3EE 100%)', borderColor: '#8B7BA8'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium" style={{background: '#8B7BA8', color: 'white'}}>
              Популярный
            </div>
<div className="text-xs uppercase tracking-widest text-stone-600 mb-2">
              Практика
            </div>
<div className="flex items-end gap-1 mb-1">
<div className="text-3xl font-semibold tracking-tight">59 000 ₽</div>
</div>
<p className="text-xs text-stone-600 mb-7 font-light">
              Многостраничный сайт с продвижением
            </p>
<ul className="space-y-3 mb-8 text-xs">
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#8B7BA8'}} width="16"></iconify-icon>
<span>До 5 страниц с уникальным дизайном</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#8B7BA8'}} width="16"></iconify-icon>
<span>Тексты под ключ</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#8B7BA8'}} width="16"></iconify-icon>
<span>Базовое SEO + Яндекс.Метрика</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#8B7BA8'}} width="16"></iconify-icon>
<span>Онлайн-запись</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#8B7BA8'}} width="16"></iconify-icon>
<span>Поддержка 6 месяцев</span>
</li>
</ul>
<button className="w-full py-3 rounded-full text-xs font-medium transition" onclick="openModal('Практика')" style={{background: '#2D2A26', color: 'white'}}>
              Заказать
            </button>
</div>

<div className="p-8 rounded-3xl bg-white border border-stone-100">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-2">
              Эксперт
            </div>
<div className="flex items-end gap-1 mb-1">
<div className="text-3xl font-semibold tracking-tight">119 000 ₽</div>
</div>
<p className="text-xs text-stone-500 mb-7 font-light">
              Персональный бренд + блог + продвижение
            </p>
<ul className="space-y-3 mb-8 text-xs">
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#C28B7B'}} width="16"></iconify-icon>
<span>Все из тарифа Практика</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#C28B7B'}} width="16"></iconify-icon>
<span>Блог и система статей</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#C28B7B'}} width="16"></iconify-icon>
<span>Расширенное SEO 3 месяца</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#C28B7B'}} width="16"></iconify-icon>
<span>Настройка контекстной рекламы</span>
</li>
<li className="flex gap-2.5">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{color: '#C28B7B'}} width="16"></iconify-icon>
<span>Поддержка 12 месяцев</span>
</li>
</ul>
<button className="w-full py-3 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition" onclick="openModal('Эксперт')">
              Заказать
            </button>
</div>
</div>
</div>
</section>
<section className="py-24 px-6" id="addons">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            Дополнительно
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Дополнительные услуги
          </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="p-7 rounded-3xl bg-white border border-stone-100 flex flex-col">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#F0EBFF'}}>
<iconify-icon icon="solar:pen-new-square-linear" style={{color: '#8B7BA8'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Разработка логотипа</h3>
<div className="text-xs text-stone-500 mb-2 font-light">
              От
              <span className="text-stone-900 font-semibold">12 000 ₽</span>
</div>
<p className="text-stone-500 text-xs leading-relaxed font-light mb-6 flex-1">
              Авторский знак, отражающий ваш подход и характер практики.
              Несколько концепций на выбор.
            </p>
<div className="flex gap-2">
<button className="flex-1 py-2.5 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition" onclick="openAddon('logo')">
                Подробнее
              </button>
<button className="flex-1 py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition" onclick="openModal('Логотип')">
                Заказать услугу
              </button>
</div>
</div>
<div className="p-7 rounded-3xl bg-white border border-stone-100 flex flex-col">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#FBF3EE'}}>
<iconify-icon icon="solar:target-linear" style={{color: '#C28B7B'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">Реклама в Яндекс.Директ</h3>
<div className="text-xs text-stone-500 mb-2 font-light">
              От
              <span className="text-stone-900 font-semibold">18 000 ₽</span>
</div>
<p className="text-stone-500 text-xs leading-relaxed font-light mb-6 flex-1">
              Настройка и ведение контекстной рекламы для быстрого потока заявок
              от клиентов.
            </p>
<div className="flex gap-2">
<button className="flex-1 py-2.5 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition" onclick="openAddon('direct')">
                Подробнее
              </button>
<button className="flex-1 py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition" onclick="openModal('Яндекс.Директ')">
                Заказать услугу
              </button>
</div>
</div>
<div className="p-7 rounded-3xl bg-white border border-stone-100 flex flex-col">
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background: '#E8F0FB'}}>
<iconify-icon icon="solar:siren-rounded-linear" style={{color: '#5B9BD5'}} width="22"></iconify-icon>
</div>
<h3 className="font-semibold mb-2">
              Реклама в Meta Ads (Facebook, Instagram, Threads)
            </h3>
<div className="text-xs text-stone-500 mb-2 font-light">
              От
              <span className="text-stone-900 font-semibold">22 000 ₽</span>
</div>
<p className="text-stone-500 text-xs leading-relaxed font-light mb-6 flex-1">
              Настройка таргетированной рекламы в Facebook, Instagram и Threads
              для привлечения клиентов, в том числе из аудитории эмигрантов.
            </p>
<div className="flex gap-2">
<button className="flex-1 py-2.5 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition" onclick="openAddon('meta')">
                Подробнее
              </button>
<button className="flex-1 py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition" onclick="openModal('Meta Ads')">
                Заказать услугу
              </button>
</div>
</div>
</div>
</div>
</section>
<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="addon-modal" style={{background: 'rgba(45, 42, 38, 0.5)', backdropFilter: 'blur(4px)'}}>
<div className="bg-white rounded-3xl max-w-md w-full p-7 fade-in relative max-h-[90vh] overflow-y-auto">
<button className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center transition" onclick="closeAddon()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<h3 className="text-lg font-semibold tracking-tight mb-3" id="addon-title"></h3>
<div className="text-xs text-stone-600 font-light leading-relaxed space-y-2 mb-6" id="addon-body"></div>
<button className="w-full py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition" onclick="closeAddon(); openModal()">
          Заказать услугу
        </button>
</div>
</div>
<section className="py-24 px-6 bg-stone-50/50" id="process">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
              Процесс
            </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Как мы работаем по шагам
            </h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-100 flex items-center justify-center transition" onclick="slideProcess(-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-100 flex items-center justify-center transition" onclick="slideProcess(1)">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-hidden">
<div className="slider-track flex" id="process-track"></div>
</div>
<div className="flex justify-center gap-2 mt-8" id="process-dots"></div>
</div>
</section>
<section className="px-6 py-16">
<div className="max-w-6xl mx-auto">
<div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden" style={{background: 'linear-gradient(135deg,#E8F0FB 0%, #F0EBFF 60%, #FBF3EE 100%)'}}>
<div className="relative grid lg:grid-cols-2 gap-8 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-stone-200/60 text-xs text-stone-700 mb-5">
<iconify-icon icon="solar:gift-linear" style={{color: '#5B9BD5'}} width="14"></iconify-icon>
                Специальное предложение
              </div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight mb-3">
                Бесплатная настройка рекламы в
                <span className="italic font-light text-purple-400">
                  Facebook и Instagram
                </span>
</h3>
<p className="text-sm text-stone-600 font-light">
                Для психологов, работающих с эмигрантами — настроим рекламные
                кампании в Meta бесплатно при 100% предоплате разработки сайта.
              </p>
</div>
<div className="flex lg:justify-end">
<button className="px-6 py-3.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition inline-flex items-center gap-2" onclick="openModal('Бесплатная настройка Meta Ads')">
                Заказать услугу
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="portfolio">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
              Портфолио
            </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Наши работы
            </h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-200 hover:bg-stone-50 flex items-center justify-center transition" onclick="slide('portfolio',-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-200 hover:bg-stone-50 flex items-center justify-center transition" onclick="slide('portfolio',1)">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pl-6">
<div className="slider-track flex gap-5" id="portfolio-track"></div>
</div>
</section>
<section className="px-6 pb-24">
<div className="max-w-6xl mx-auto">
<div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden" style={{background: 'linear-gradient(135deg,#F0EBFF 0%, #FBF3EE 60%, #E8F4F0 100%)'}}>
<div className="relative grid lg:grid-cols-2 gap-8 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-stone-200/60 text-xs text-stone-700 mb-5">
<iconify-icon icon="solar:gift-linear" style={{color: '#8B7BA8'}} width="14"></iconify-icon>
                Акция месяца
              </div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight mb-3">
                Скидка
                <span className="italic font-light text-purple-400">10%</span>
                при полной предоплате
              </h3>
<p className="text-sm text-stone-600 font-light">
                Оплатите проект целиком и получите выгодное предложение, а также
                приоритет в очереди разработки.
              </p>
</div>
<div className="flex lg:justify-end">
<button className="px-6 py-3.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition inline-flex items-center gap-2" onclick="openModal('Акция -10%')">
                Связаться с нами
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50/50" id="reviews">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            Отзывы
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Что говорят клиенты
          </h2>
</div>
<div className="overflow-hidden">
<div className="slider-track flex" id="reviews-track">
<div className="min-w-full px-4">
<div className="bg-white border border-stone-100 rounded-3xl p-10 text-center max-w-2xl mx-auto">
<iconify-icon className="mb-4" icon="solar:quote-up-linear" style={{color: '#8B7BA8'}} width="32"></iconify-icon>
<p className="text-base leading-relaxed mb-6 font-light italic text-stone-700">
                  «Сайт получился именно таким, каким я его представляла —
                  тёплым и уютным. Через две недели после запуска уже пришли
                  первые клиенты с поиска»
                </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full" style={{background: '#F0EBFF'}}></div>
<div className="text-left">
<div className="font-semibold text-xs">Анна К.</div>
<div className="text-xs text-stone-500">Семейный психолог</div>
</div>
</div>
</div>
</div>
<div className="min-w-full px-4">
<div className="bg-white border border-stone-100 rounded-3xl p-10 text-center max-w-2xl mx-auto">
<iconify-icon className="mb-4" icon="solar:quote-up-linear" style={{color: '#C28B7B'}} width="32"></iconify-icon>
<p className="text-base leading-relaxed mb-6 font-light italic text-stone-700">
                  «Работать было приятно с первого касания. Команда
                  внимательная, сделали всё с любовью к деталям. Очень довольна
                  результатом»
                </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full" style={{background: '#FBF3EE'}}></div>
<div className="text-left">
<div className="font-semibold text-xs">Мария Д.</div>
<div className="text-xs text-stone-500">
                      Психолог-консультант
                    </div>
</div>
</div>
</div>
</div>
<div className="min-w-full px-4">
<div className="bg-white border border-stone-100 rounded-3xl p-10 text-center max-w-2xl mx-auto">
<iconify-icon className="mb-4" icon="solar:quote-up-linear" style={{color: '#7BA88B'}} width="32"></iconify-icon>
<p className="text-base leading-relaxed mb-6 font-light italic text-stone-700">
                  «За полгода поток заявок вырос в 3 раза. Спасибо за
                  SEO-оптимизацию — теперь меня находят сами клиенты в поиске»
                </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full" style={{background: '#E8F4F0'}}></div>
<div className="text-left">
<div className="font-semibold text-xs">Елена С.</div>
<div className="text-xs text-stone-500">Гештальт-терапевт</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<button className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center transition" onclick="slide('reviews',-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center transition" onclick="slide('reviews',1)">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
            FAQ
          </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Частые вопросы
          </h2>
</div>
<div className="space-y-3">
<details className="group bg-white border border-stone-100 rounded-2xl p-5">
<summary className="flex items-center justify-between cursor-pointer font-medium text-sm">
              Сколько времени занимает разработка?
              <iconify-icon icon="solar:add-circle-linear" style={{color: '#8B7BA8'}} width="20"></iconify-icon>
</summary>
<p className="text-xs text-stone-600 mt-3 font-light leading-relaxed">
              В зависимости от пакета — от 5 до 21 рабочего дня. Сроки фиксируем
              в договоре, и мы их строго соблюдаем.
            </p>
</details>
<details className="group bg-white border border-stone-100 rounded-2xl p-5">
<summary className="flex items-center justify-between cursor-pointer font-medium text-sm">
              Что нужно от меня для старта?
              <iconify-icon icon="solar:add-circle-linear" style={{color: '#8B7BA8'}} width="20"></iconify-icon>
</summary>
<p className="text-xs text-stone-600 mt-3 font-light leading-relaxed">
              Заполните бриф, пришлите фото и расскажите о себе. Всё остальное —
              наша забота. Поможем с текстами и подбором стиля.
            </p>
</details>
<details className="group bg-white border border-stone-100 rounded-2xl p-5">
<summary className="flex items-center justify-between cursor-pointer font-medium text-sm">
              Можно ли потом самостоятельно редактировать сайт?
              <iconify-icon icon="solar:add-circle-linear" style={{color: '#8B7BA8'}} width="20"></iconify-icon>
</summary>
<p className="text-xs text-stone-600 mt-3 font-light leading-relaxed">
              Да, мы используем удобные платформы с понятным интерфейсом. После
              сдачи проводим обучение по работе с сайтом.
            </p>
</details>
<details className="group bg-white border border-stone-100 rounded-2xl p-5">
<summary className="flex items-center justify-between cursor-pointer font-medium text-sm">
              Гарантируете ли вы рост клиентов?
              <iconify-icon icon="solar:add-circle-linear" style={{color: '#8B7BA8'}} width="20"></iconify-icon>
</summary>
<p className="text-xs text-stone-600 mt-3 font-light leading-relaxed">
              Мы гарантируем технически грамотный сайт и SEO-оптимизацию.
              Результат зависит от ниши, конкуренции и активности — но мы всегда
              рекомендуем эффективные решения.
            </p>
</details>
<details className="group bg-white border border-stone-100 rounded-2xl p-5">
<summary className="flex items-center justify-between cursor-pointer font-medium text-sm">
              Какие гарантии и оплата?
              <iconify-icon icon="solar:add-circle-linear" style={{color: '#8B7BA8'}} width="20"></iconify-icon>
</summary>
<p className="text-xs text-stone-600 mt-3 font-light leading-relaxed">
              Работаем по договору. Предоплата 50%, остаток — после сдачи
              проекта. Все права на сайт переходят вам после полной оплаты.
            </p>
</details>
</div>
</div>
</section>
<section className="px-6 pb-24 -mt-12">
<div className="max-w-3xl mx-auto text-center">
<p className="text-sm text-stone-600 font-light mb-5">
          Не нашли ответа на свой вопрос?
        </p>
<button className="px-6 py-3.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition inline-flex items-center gap-2" onclick="openQuestion()">
          Задать вопрос
          <iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>
</button>
</div>
</section>
<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="question-modal" style={{background: 'rgba(45, 42, 38, 0.5)', backdropFilter: 'blur(4px)'}}>
<div className="bg-white rounded-3xl max-w-md w-full p-8 fade-in relative max-h-[90vh] overflow-y-auto">
<button className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center transition" onclick="closeQuestion()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<h3 className="font-semibold text-lg mb-1 tracking-tight">Задать вопрос</h3>
<p className="text-xs text-stone-500 mb-6 font-light">
          Ответим в течение часа в рабочее время
        </p>
<form className="space-y-4" onsubmit="event.preventDefault(); closeQuestion(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.');">
<div>
<label className="text-xs text-stone-500 mb-1.5 block">Ваше имя</label>
<input className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300" placeholder="Анна" required="" type="text"/>
</div>
<div>
<label className="text-xs text-stone-500 mb-1.5 block">Контакт</label>
<input className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300" placeholder="Email или телефон" required="" type="text"/>
</div>
<div>
<label className="text-xs text-stone-500 mb-1.5 block">
              Ваш вопрос
            </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300 resize-none" placeholder="Напишите ваш вопрос" required="" rows="3"></textarea>
</div>
<label className="flex items-start gap-2.5 cursor-pointer">
<input className="custom-check mt-0.5" required="" type="checkbox"/>
<span className="text-xs text-stone-500 font-light leading-relaxed">
              Я согласен(на) на обработку персональных данных в соответствии с
              <a className="underline" href="#">Политикой конфиденциальности</a>
</span>
</label>
<button className="w-full py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition" type="submit">
            Отправить
          </button>
</form>
</div>
</div>


<section className="py-24 px-6 pastel-bg" id="contacts">
<div className="max-w-5xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
              Контакты
            </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
              Давайте обсудим ваш проект
            </h2>
<p className="text-stone-600 mb-10 font-light">
              Напишите нам удобным способом — ответим в течение часа в рабочее
              время
            </p>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-stone-200/60 hover:bg-white transition" href="mailto:hello@psycho.site">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: '#F0EBFF'}}>
<iconify-icon icon="solar:letter-linear" style={{color: '#8B7BA8'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-500">Email</div>
<div className="font-medium text-sm">hello@psycho.site</div>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-stone-200/60 hover:bg-white transition" href="https://t.me/" target="_blank">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: '#E8F0FB'}}>
<iconify-icon icon="mingcute:telegram-line" style={{color: '#5B9BD5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-500">Telegram</div>
<div className="font-medium text-sm">@psycho_site</div>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-stone-200/60 hover:bg-white transition" href="https://wa.me/" target="_blank">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: '#E8F4F0'}}>
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#7BA88B'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-500">WhatsApp</div>
<div className="font-medium text-sm">+7 999 123 45 67</div>
</div>
</a>
</div>
</div>
<form className="bg-white rounded-3xl p-8 border border-stone-100" onsubmit="event.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.');">
<h3 className="font-semibold text-lg mb-6 tracking-tight">
              Заполните форму
            </h3>
<div className="space-y-4">
<div>
<label className="text-xs text-stone-500 mb-1.5 block">
                  Ваше имя
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300" placeholder="Анна" required="" type="text"/>
</div>
<div>
<label className="text-xs text-stone-500 mb-1.5 block">
                  Контакт
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300" placeholder="Email или телефон" required="" type="text"/>
</div>
<div>
<label className="text-xs text-stone-500 mb-1.5 block">
                  Сообщение
                </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300 resize-none" placeholder="Расскажите о вашем проекте" rows="3"></textarea>
</div>
<label className="flex items-start gap-2.5 cursor-pointer">
<input className="custom-check mt-0.5" required="" type="checkbox"/>
<span className="text-xs text-stone-500 font-light leading-relaxed">
                  Я согласен(на) на обработку персональных данных в соответствии
                  с
                  <a className="underline" href="#">Политикой конфиденциальности</a>
</span>
</label>
<button className="w-full py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition" type="submit">
                Отправить
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-10 px-6 border-t border-stone-200 bg-white">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-stone-900">
            психо
            <span className="text-purple-400">.</span>
            сайт
          </span>
<span>© 2025 Все права защищены</span>
</div>
<a className="hover:text-stone-900 transition" href="#">
          Политика конфиденциальности
        </a>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="modal" style={{background: 'rgba(45, 42, 38, 0.5)', backdropFilter: 'blur(4px)'}}>
<div className="bg-white rounded-3xl max-w-md w-full p-7 fade-in relative max-h-[90vh] overflow-y-auto">
<button className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center transition" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<h3 className="text-lg font-semibold tracking-tight mb-1">
          Оставьте заявку
        </h3>
<p className="text-xs text-stone-500 mb-6 font-light">
          Свяжемся с вами в течение часа
        </p>
<form className="space-y-4" onsubmit="event.preventDefault(); closeModal(); alert('Спасибо! Мы свяжемся с вами.');">
<input id="modal-package" type="hidden"/>
<div>
<label className="text-xs text-stone-500 mb-1.5 block">Имя</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300" required="" type="text"/>
</div>
<div>
<label className="text-xs text-stone-500 mb-1.5 block">
              Контакт для связи
            </label>
<input className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-purple-300" placeholder="Телефон, email или ник" required="" type="text"/>
</div>
<div>
<label className="text-xs text-stone-500 mb-2 block">
              Удобный способ связи
            </label>
<div className="grid grid-cols-3 gap-2">
<div className="radio-card">
<input checked="" id="c1" name="contact" type="radio"/>
<label className="border border-stone-200 rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer transition" htmlFor="c1">
<iconify-icon icon="mingcute:telegram-line" style={{color: '#5B9BD5'}} width="20"></iconify-icon>
<span className="text-xs">Telegram</span>
</label>
</div>
<div className="radio-card">
<input id="c2" name="contact" type="radio"/>
<label className="border border-stone-200 rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer transition" htmlFor="c2">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#7BA88B'}} width="20"></iconify-icon>
<span className="text-xs">WhatsApp</span>
</label>
</div>
<div className="radio-card">
<input id="c3" name="contact" type="radio"/>
<label className="border border-stone-200 rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer transition" htmlFor="c3">
<iconify-icon icon="solar:phone-linear" style={{color: '#C28B7B'}} width="20"></iconify-icon>
<span className="text-xs">Звонок</span>
</label>
</div>
</div>
</div>
<label className="flex items-start gap-2.5 cursor-pointer">
<input className="custom-check mt-0.5" required="" type="checkbox"/>
<span className="text-xs text-stone-500 font-light leading-relaxed">
              Согласен(на) на обработку персональных данных согласно
              <a className="underline" href="#">Политике</a>
</span>
</label>
<button className="w-full py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition" type="submit">
            Отправить заявку
          </button>
</form>
</div>
</div>

<div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-30 bg-white border border-stone-200 rounded-2xl p-5 shadow-lg fade-in" id="cookie" style={{display: 'none'}}>
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:cookie-linear" style={{color: '#C28B7B'}} width="22"></iconify-icon>
<div className="flex-1">
<p className="text-xs text-stone-700 font-light leading-relaxed mb-3">
            Мы используем файлы cookie для улучшения работы сайта. Продолжая, вы
            соглашаетесь с их использованием.
          </p>
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition" onclick="acceptCookie()">
              Принять
            </button>
<button className="px-4 py-1.5 rounded-full border border-stone-200 text-xs font-medium hover:bg-stone-50 transition" onclick="acceptCookie()">
              Отклонить
            </button>
</div>
</div>
</div>
</div>



    </>
  );
}
