import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Global icon stroke width (Solar Linear)
    (function () {
      const applyStroke = () => {
        document.querySelectorAll('iconify-icon').forEach(ic => {
          if (!ic.getAttribute('stroke-width')) ic.setAttribute('stroke-width', '1.5');
        });
      };
      applyStroke();
      const mo = new MutationObserver(applyStroke);
      mo.observe(document.body, { childList: true, subtree: true });
    })();

    // Mobile menu
    (function () {
      const btn = document.getElementById('mobileMenuBtn');
      const menu = document.getElementById('mobileMenu');
      if (!btn || !menu) return;

      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });

      menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => menu.classList.add('hidden'));
      });
    })();

    // Reveal on scroll (fade-up)
    (function () {
      const els = Array.from(document.querySelectorAll('.reveal'));
      els.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4');
        el.style.transition = 'opacity 700ms ease, transform 700ms ease';
      });

      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      els.forEach(el => io.observe(el));
    })();

    // Accordion: chat example
    (function () {
      const btn = document.getElementById('chatAccordionBtn');
      const panel = document.getElementById('chatAccordion');
      const chevron = document.getElementById('chatChevron');
      if (!btn || !panel || !chevron) return;

      btn.addEventListener('click', () => {
        const open = panel.classList.toggle('hidden') === false;
        chevron.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    })();

    // RACI Data
    const raci = {
      sales: [
        { process: 'Лид→ТЗ→КП', gd: 'I', kd: 'A', td: 'C', pm: 'C', ots: 'I', opd: 'I', service: 'I' },
        { process: 'Защита КП (Gate 2)', gd: 'C', kd: 'A', td: 'C', pm: 'I', ots: 'I', opd: 'I', service: 'I' },
        { process: 'Договор', gd: 'I', kd: 'A', td: 'C', pm: 'C', ots: 'I', opd: 'I', service: 'I' },
        { process: 'Handover Продажи→ПМ', gd: 'I', kd: 'R', td: 'C', pm: 'A', ots: 'I', opd: 'I', service: 'I' }
      ],
      project: [
        { process: 'План-график/координация', gd: 'I', kd: 'I', td: 'C', pm: 'A', ots: 'C', opd: 'I', service: 'I' },
        { process: 'CR (изменения)', gd: 'I', kd: 'I', td: 'C', pm: 'A', ots: 'C', opd: 'I', service: 'I' },
        { process: 'Задачи в цех/распределение', gd: 'I', kd: 'I', td: 'C', pm: 'C', ots: 'A', opd: 'R', service: 'I' },
        { process: 'Pre-FAT', gd: 'I', kd: 'I', td: 'C', pm: 'C', ots: 'A', opd: 'R', service: 'I' },
        { process: 'FAT организация', gd: 'I', kd: 'I', td: 'C', pm: 'A', ots: 'C', opd: 'I', service: 'I' },
        { process: 'FAT техрезультат', gd: 'I', kd: 'I', td: 'A', pm: 'C', ots: 'R', opd: 'C', service: 'I' }
      ],
      kit: [
        { process: 'Комплектация выставка', gd: 'I', kd: 'I', td: 'C', pm: 'C', ots: 'C', opd: 'A', service: 'I' },
        { process: 'Комплектация командировка (оборудование+инструмент+материалы)', gd: 'I', kd: 'I', td: 'C', pm: 'C', ots: 'C', opd: 'A', service: 'R' },
        { process: 'Packing list перед отгрузкой', gd: 'I', kd: 'I', td: 'C', pm: 'C', ots: 'C', opd: 'A', service: 'I' },
        { process: 'Допуск к отгрузке (техника)', gd: 'I', kd: 'I', td: 'C', pm: 'I', ots: 'A', opd: 'R', service: 'I' }
      ],
      service: [
        { process: 'Монтаж/ПНР/SAT', gd: 'I', kd: 'I', td: 'C', pm: 'A', ots: 'C', opd: 'I', service: 'R' },
        { process: 'Сервис: обращение→решение', gd: 'I', kd: 'I', td: 'C', pm: 'I', ots: 'C', opd: 'I', service: 'A' },
        { process: 'База знаний/known issues', gd: 'I', kd: 'I', td: 'C', pm: 'I', ots: 'C', opd: 'I', service: 'A' }
      ]
    };

    const roleOrder = ['gd','kd','td','pm','ots','opd','service'];

    function badge(letter) {
      const base = "inline-flex items-center justify-center rounded-full border text-xs font-medium w-8 h-8";
      const variants = {
        R: "bg-zinc-900 text-white border-zinc-900",
        A: "bg-orange-500 text-white border-orange-500",
        C: "bg-white text-zinc-900 border-zinc-200",
        I: "bg-zinc-50 text-zinc-600 border-zinc-200"
      };
      const cls = `${base} ${variants[letter] || variants.I}`;
      return `<span class="${cls}">${letter}</span>`;
    }

    function rowHtml(item) {
      const cells = roleOrder.map(k => `<td class="px-3 py-3 align-middle">${badge(item[k])}</td>`).join('');
      return `
        <tr class="border-t border-zinc-200 hover:bg-zinc-50/70 transition">
          <td class="px-6 py-3 text-sm text-zinc-800">${item.process}</td>
          ${cells}
        </tr>
      `;
    }

    function mobileAccordionHtml(item, idx) {
      const id = `macc_${idx}_${item.process.replaceAll(' ', '_').replaceAll('→','_').replaceAll('/','_')}`;
      const rows = [
        ['ГД', item.gd],
        ['КД', item.kd],
        ['ТД', item.td],
        ['ПМ', item.pm],
        ['ОТС', item.ots],
        ['ОПД', item.opd],
        ['Сервис', item.service],
      ].map(([name, val]) => {
        return `
          <div class="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-3 py-2">
            <span class="text-xs text-zinc-600">${name}</span>
            ${badge(val)}
          </div>
        `;
      }).join('');

      return `
        <div class="rounded-3xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 overflow-hidden">
          <button data-acc="${id}" class="w-full inline-flex items-center justify-between px-4 py-3 text-sm font-medium tracking-tight text-zinc-900 hover:bg-zinc-50 transition">
            <span class="text-left">${item.process}</span>
            <iconify-icon data-acc-icon="${id}" icon="solar:alt-arrow-down-linear" style="font-size: 1.125rem;" width="18" height="18" class="text-zinc-500 transition"></iconify-icon>
          </button>
          <div id="${id}" class="hidden border-t border-zinc-200 bg-zinc-50 p-4">
            <div class="grid gap-2">
              ${rows}
            </div>
          </div>
        </div>
      `;
    }

    function setActiveTab(tabKey) {
      // Buttons
      document.querySelectorAll('.raci-tab').forEach(btn => {
        const isActive = btn.getAttribute('data-tab') === tabKey;
        btn.classList.toggle('bg-zinc-900', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('text-zinc-700', !isActive);
        btn.classList.toggle('hover:bg-zinc-50', !isActive);
        btn.classList.toggle('rounded-xl', true);
      });

      // Table
      const body = document.getElementById('raciBody');
      const data = raci[tabKey] || [];
      body.innerHTML = data.map(rowHtml).join('');

      // Mobile accordions
      const m = document.getElementById('raciMobileAccordions');
      if (m) {
        m.innerHTML = data.map((it, idx) => mobileAccordionHtml(it, idx)).join('');

        m.querySelectorAll('button[data-acc]').forEach(b => {
          b.addEventListener('click', () => {
            const id = b.getAttribute('data-acc');
            const panel = document.getElementById(id);
            const icon = m.querySelector(`[data-acc-icon="${id}"]`);
            const open = panel.classList.toggle('hidden') === false;
            if (icon) icon.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
          });
        });
      }
    }

    (function init
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>
<div className="absolute top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-zinc-900/5 blur-3xl"></div>
</div>

<header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5">
<span className="text-sm font-medium tracking-tight text-zinc-900">PA</span>
</div>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight text-zinc-900">Прайд‑Автоматикс</div>
<div className="text-xs text-zinc-500">Внутренние стандарты</div>
</div>
</div>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition" href="#roles">Карта ролей</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition" href="#rule">Передача задач</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition" href="#raci">RACI</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition" href="#sla">SLA</a>
</nav>
<div className="flex items-center gap-2">
<button className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" id="mobileMenuBtn">
<iconify-icon height="18" icon="solar:hamburger-menu-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
<span className="ml-2">Меню</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-zinc-900/10 hover:bg-zinc-800 transition" href="#roles">
<iconify-icon height="18" icon="solar:map-point-wave-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
            Открыть карту ролей
          </a>
</div>
</div>

<div className="md:hidden hidden pb-5" id="mobileMenu">
<div className="grid gap-2">
<a className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#roles">Карта ролей</a>
<a className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#rule">Единое правило</a>
<a className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#raci">RACI</a>
<a className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#sla">SLA и инциденты</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-14 pb-10 sm:pt-20 sm:pb-14">
<div className="grid grid-cols-12 gap-8 items-start">
<div className="col-span-12 lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm shadow-zinc-900/5">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            High‑tech minimal · внутренний стандарт
          </div>
<h1 className="mt-5 text-4xl sm:text-5xl font-medium tracking-tight text-zinc-950">
            Семинар: роли, взаимодействие и стандарты сервиса
          </h1>
<p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Единые правила: кто за что отвечает, как задачи попадают в цех, как мы сдаём проекты и держим сервис.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-zinc-900/15 hover:bg-zinc-800 transition" href="#roles">
<iconify-icon height="18" icon="solar:map-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
              Открыть карту ролей
              <iconify-icon className="opacity-70 group-hover:translate-x-0.5 transition" height="18" icon="solar:arrow-right-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#raci">
<iconify-icon height="18" icon="solar:table-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
              Смотреть RACI
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-500/30 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm shadow-orange-500/10 hover:bg-orange-500/5 transition" href="#sla">
<iconify-icon height="18" icon="solar:clock-circle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
              Стандарты сервиса (SLA)
            </a>
</div>
<div className="mt-8 flex items-center gap-2 text-xs text-zinc-500">
<span className="inline-flex h-5 items-center rounded-full border border-zinc-200 bg-white px-2 shadow-sm shadow-zinc-900/5">
              Версия: 2026.02
            </span>
<span className="text-zinc-300">|</span>
<span>Внутренний стандарт Прайд‑Автоматикс</span>
</div>
</div>
<div className="col-span-12 lg:col-span-5">
<div className="rounded-3xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/10 overflow-hidden">
<div className="p-6 sm:p-7">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight text-zinc-900">Навигация по смыслу</div>
<div className="text-xs text-zinc-500">1 страница · 6 блоков</div>
</div>
<div className="mt-5 grid gap-3">
<a className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#roles">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight text-zinc-900">Карта ролей</div>
<div className="text-xs text-zinc-500">границы и ответственность</div>
</div>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-700 transition" height="18" icon="solar:arrow-right-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#rule">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white">
<iconify-icon height="18" icon="solar:shield-warning-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight text-zinc-900">Единое правило</div>
<div className="text-xs text-zinc-500">как задачи попадают в цех</div>
</div>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-700 transition" height="18" icon="solar:arrow-right-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" href="#sla">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-zinc-900 border border-zinc-200">
<iconify-icon height="18" icon="solar:headphones-round-sound-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight text-zinc-900">SLA и поток инцидента</div>
<div className="text-xs text-zinc-500">приоритеты, скорость, фиксация</div>
</div>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-700 transition" height="18" icon="solar:arrow-right-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-700">
<iconify-icon height="18" icon="solar:lightbulb-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div className="text-xs text-zinc-600 leading-relaxed">
                    Короткая идея страницы: <span className="text-zinc-900 font-medium">единообразный вход задач</span>, прозрачные роли, и сервис по измеримым скоростям.
                  </div>
</div>
</div>
</div>
<div className="border-t border-zinc-200 bg-white">
<div className="px-6 sm:px-7 py-4 flex items-center justify-between text-xs text-zinc-500">
<span>Обновления: через ПМ/ГД</span>
<span className="inline-flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  актуально
                </span>
</div>
</div>
</div>
<div className="mt-4 hidden lg:block text-xs text-zinc-500">
            Подсказка: наведи на карточки — они «заполняются» и подсвечиваются линией.
          </div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-zinc-200/70"></div>
</div>

<section className="scroll-mt-24" id="roles">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="grid grid-cols-12 gap-8 items-end">
<div className="col-span-12 lg:col-span-8">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5">
<iconify-icon height="18" icon="solar:diagram-up-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">Карта ролей</h2>
<p className="mt-2 text-sm sm:text-base text-zinc-600">Кто за что отвечает — и где проходит граница.</p>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4">
<div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-600 shadow-sm shadow-zinc-900/5">
<span className="text-zinc-900 font-medium">Hover:</span> лёгкий подъём, заливка, оранжевая линия.
          </div>
</div>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">ГД</div>
<div className="mt-1 text-sm text-zinc-600">Владелец системы и приоритетов.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:crown-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Стратегия</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Оргструктура</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Финальные решения / эскалации</span></li>
</ul>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не управляет ежедневной работой цеха.
            </div>
</div>
</article>
<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">КД</div>
<div className="mt-1 text-sm text-zinc-600">Выручка и машина продаж.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:cart-2-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Лид → ТЗ → КП → договор</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Защита КП</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Handover в ПМ</span></li>
</ul>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не рулит цехом и техархитектурой.
            </div>
</div>
</article>
<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">ТД</div>
<div className="mt-1 text-sm text-zinc-600">Архитектура и стандарты.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:settings-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Техрешения</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Допуск нестандартов</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Обучение, сложные кейсы</span></li>
</ul>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не ведёт проект как ПМ.
            </div>
</div>
</article>
<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">ПМ</div>
<div className="mt-1 text-sm text-zinc-600">Сроки и коммуникация с клиентом.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>План</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>CR (изменения)</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Организация FAT/SAT, закрытие</span></li>
</ul>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не ставит задачи исполнителям в цех напрямую.
            </div>
</div>
</article>
<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">ОТС</div>
<div className="mt-1 text-sm text-zinc-600">Диспетчер цеха + качество.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:route-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Задачи в цех</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Распределение нагрузки</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Pre‑FAT, допуск к FAT/отгрузке</span></li>
</ul>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не дисциплина и не «порядок» — это ОПД.
            </div>
</div>
</article>
<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">ОПД</div>
<div className="mt-1 text-sm text-zinc-600">Порядок/дисциплина/5S + комплектность.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:checklist-minimalistic-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Порядок</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Контроль исполнения</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>Комплектация на выезды/отгрузку</span></li>
</ul>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не принимает технические решения.
            </div>
</div>
</article>
<article className="reveal group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10 xl:col-span-2">
<div className="absolute inset-0 bg-zinc-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>
<div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500/0 transition duration-300 group-hover:bg-orange-500/90"></div>
<div className="relative">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-950">Сервис</div>
<div className="mt-1 text-sm text-zinc-600">Реакция, восстановление, база кейсов.</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5 text-zinc-800">
<iconify-icon height="18" icon="solar:headphones-round-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/5">
<div className="text-xs text-zinc-500">Отвечает</div>
<div className="mt-1 text-sm text-zinc-800">SLA</div>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/5">
<div className="text-xs text-zinc-500">Отвечает</div>
<div className="mt-1 text-sm text-zinc-800">Диагностика, выезды</div>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/5">
<div className="text-xs text-zinc-500">Отвечает</div>
<div className="mt-1 text-sm text-zinc-800">База знаний / known issues</div>
</div>
</div>
<div className="mt-5 text-xs text-zinc-500">
              Граница: не меняет техархитектуру без ТД.
            </div>
</div>
</article>
</div>

<div className="reveal mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Мини‑схема взаимодействия</div>
<div className="mt-1 text-xs text-zinc-500">Три зоны, один поток передачи задач</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 shadow-sm shadow-zinc-900/5">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              единый вход в цех
            </span>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-zinc-200">
<iconify-icon height="18" icon="solar:buildings-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Office</div>
<div className="text-xs text-zinc-500">ГД · КД · ТД · ПМ · Сервис</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-5 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500/70"></div>
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-zinc-200">
<iconify-icon height="18" icon="solar:factory-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Workshop</div>
<div className="text-xs text-zinc-500">ОТС · ОПД · исполнители</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-zinc-200">
<iconify-icon height="18" icon="solar:user-circle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Client</div>
<div className="text-xs text-zinc-500">FAT · SAT · сервисные обращения</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-3 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2"><iconify-icon height="16" icon="solar:arrow-left-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon>обратная связь</span>
<span className="text-zinc-300">•</span>
<span className="inline-flex items-center gap-2">передача задач<iconify-icon height="16" icon="solar:arrow-right-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon></span>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-zinc-200/70"></div>
</div>

<section className="scroll-mt-24" id="rule">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="grid grid-cols-12 gap-8 items-start">
<div className="col-span-12 lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">Единое правило передачи задач в цех</h2>
<p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Чтобы сохранить прозрачные приоритеты, качество и предсказуемость — вход задач должен быть единым.
          </p>
<div className="reveal mt-6 rounded-3xl border border-orange-500/25 bg-white p-6 shadow-sm shadow-orange-500/10 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500"></div>
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-sm shadow-orange-500/20">
<iconify-icon height="18" icon="solar:lock-keyhole-minimalistic-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-xs text-zinc-500">Большое правило</div>
<div className="mt-1 text-2xl sm:text-3xl font-medium tracking-tight text-zinc-950">
                  Любые задачи в цех — только через ОТС.
                </div>
</div>
</div>
</div>
<div className="reveal mt-6 grid grid-cols-1 gap-4">
<div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
<iconify-icon height="18" icon="solar:danger-triangle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Запрещено</div>
<div className="text-xs text-zinc-500">чтобы не ломать приоритеты и ответственность</div>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
<span>Ставить задачи напрямую исполнителям</span>
</li>
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
<span>Менять приоритеты в обход ОТС</span>
</li>
<li className="flex gap-2">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
<span>Выдёргивать людей из задач без согласования</span>
</li>
</ul>
</div>
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm shadow-zinc-900/10">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
<iconify-icon height="18" icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Замещение</div>
<div className="text-xs text-zinc-500">когда ОТС недоступен</div>
</div>
</div>
<div className="mt-4 text-sm text-zinc-700 leading-relaxed">
                Если ОТС отсутствует — функции входа задач выполняет <span className="font-medium text-zinc-900">ОПД</span>.
                <div className="mt-2 text-xs text-zinc-500">
                  Ограничение: без техрешений и без изменения ТЗ.
                </div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7">
<div className="reveal rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm shadow-zinc-900/10 overflow-hidden">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Поток (4 шага)</div>
<div className="mt-1 text-xs text-zinc-500">одинаково для проектов, сервисных задач и нестандартов</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 shadow-sm shadow-zinc-900/5">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  фиксируется статус
                </span>
</div>
</div>
<div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-3">
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-500">Шаг 01</div>
<iconify-icon className="text-zinc-500" height="18" icon="solar:document-text-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-medium tracking-tight text-zinc-900">Запрос/задача</div>
<div className="mt-2 text-xs text-zinc-500">ГД / КД / ТД / ПМ / Сервис</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-5 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500/70"></div>
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-500">Шаг 02</div>
<iconify-icon className="text-zinc-500" height="18" icon="solar:inbox-in-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-medium tracking-tight text-zinc-900">ОТС принимает</div>
<div className="mt-2 text-xs text-zinc-500">и уточняет входные данные</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-500">Шаг 03</div>
<iconify-icon className="text-zinc-500" height="18" icon="solar:users-group-rounded-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-medium tracking-tight text-zinc-900">Распределяет</div>
<div className="mt-2 text-xs text-zinc-500">по исполнителям цеха</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-500">Шаг 04</div>
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="mt-2 text-sm font-medium tracking-tight text-zinc-900">Контроль + статус</div>
<div className="mt-2 text-xs text-zinc-500">прозрачно для офисных ролей</div>
</div>
</div>
<div className="mt-7 flex items-center justify-center gap-3 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2"><iconify-icon height="16" icon="solar:arrow-right-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon>передача</span>
<span className="text-zinc-300">•</span>
<span className="inline-flex items-center gap-2">приоритет<iconify-icon height="16" icon="solar:sort-by-time-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon></span>
<span className="text-zinc-300">•</span>
<span className="inline-flex items-center gap-2">качество<iconify-icon height="16" icon="solar:shield-check-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon></span>
</div>
</div>
<div className="reveal mt-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700">
<iconify-icon height="18" icon="solar:info-circle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div className="text-sm text-zinc-700 leading-relaxed">
                Если кажется, что «быстрее напрямую» — это почти всегда <span className="font-medium text-zinc-900">дороже по потере фокуса</span> и ломает приоритеты.
                Правило существует, чтобы скорость была <span className="font-medium text-zinc-900">системной</span>, а не случайной.
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-zinc-200/70"></div>
</div>

<section className="scroll-mt-24" id="raci">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="grid grid-cols-12 gap-8 items-start">
<div className="col-span-12 lg:col-span-7">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">RACI по ключевым процессам</h2>
<p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Быстро свериться «кто делает», «кто отвечает» и «кого нужно согласовать/информировать».
          </p>
</div>
<div className="col-span-12 lg:col-span-5">
<div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
<iconify-icon height="18" icon="solar:book-bookmark-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Легенда RACI</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-xs text-zinc-600">
<div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span className="font-medium text-zinc-900">R</span> — делает
                  </div>
<div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span className="font-medium text-zinc-900">A</span> — отвечает
                  </div>
<div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span className="font-medium text-zinc-900">C</span> — согласует
                  </div>
<div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span className="font-medium text-zinc-900">I</span> — информируется
                  </div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-zinc-500 leading-relaxed">
              Примечание: таблица — базовая. В отдельных проектах допускаются уточнения через ТД/ПМ, но принцип «вход в цех через ОТС» сохраняется.
            </div>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex flex-wrap gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm shadow-zinc-900/5">
<button className="raci-tab inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition bg-zinc-900 text-white" data-tab="sales">
<iconify-icon height="18" icon="solar:bag-2-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
            Продажи → Проект
          </button>
<button className="raci-tab inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition text-zinc-700 hover:bg-zinc-50" data-tab="project">
<iconify-icon height="18" icon="solar:layers-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
            Проект → Цех → FAT
          </button>
<button className="raci-tab inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition text-zinc-700 hover:bg-zinc-50" data-tab="kit">
<iconify-icon height="18" icon="solar:box-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
            Комплектность/Выезды/Отгрузка
          </button>
<button className="raci-tab inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition text-zinc-700 hover:bg-zinc-50" data-tab="service">
<iconify-icon height="18" icon="solar:headphones-round-sound-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
            SAT и Сервис
          </button>
</div>
</div>

<div className="reveal mt-6 rounded-3xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/10 overflow-hidden">
<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
<div className="text-sm font-medium tracking-tight text-zinc-900">Матрица ответственности</div>
<div className="text-xs text-zinc-500">На мобильном — используйте горизонтальный скролл</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-[64rem] w-full text-left">
<thead className="bg-zinc-50">
<tr className="text-xs text-zinc-500">
<th className="px-6 py-3 font-medium">Процесс</th>
<th className="px-3 py-3 font-medium">ГД</th>
<th className="px-3 py-3 font-medium">КД</th>
<th className="px-3 py-3 font-medium">ТД</th>
<th className="px-3 py-3 font-medium">ПМ</th>
<th className="px-3 py-3 font-medium">ОТС</th>
<th className="px-3 py-3 font-medium">ОПД</th>
<th className="px-3 py-3 font-medium">Сервис</th>
</tr>
</thead>
<tbody className="text-sm" id="raciBody">

</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-zinc-200 bg-white text-xs text-zinc-500">
<span className="font-medium text-zinc-900">Подсказка:</span> если видите конфликт (две «A») — поднимайте на ТД/ГД для фиксации правила.
        </div>
</div>

<div className="mt-6 md:hidden grid gap-3">
<div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/10">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight text-zinc-900">Мобильный режим</div>
<span className="inline-flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="16" icon="solar:smartphone-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon>
              компактно
            </span>
</div>
<div className="mt-2 text-xs text-zinc-500 leading-relaxed">
            Таблица доступна скроллом. Если нужно — откройте детали процесса через аккордеоны ниже (по текущей вкладке).
          </div>
<div className="mt-4 grid gap-2" id="raciMobileAccordions">

</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px bg-zinc-200/70"></div>
</div>

<section className="scroll-mt-24" id="sla">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="grid grid-cols-12 gap-8 items-start">
<div className="col-span-12 lg:col-span-6">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-950">Сервис: стандарты и целевые скорости (SLA)</h2>
<p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Приоритеты P1/P2/P3, ориентиры по реакции и решению, и единый поток инцидента.
          </p>
<div className="reveal mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-zinc-200 text-zinc-700">
<iconify-icon height="18" icon="solar:pen-new-square-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Editable в макете</div>
<div className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  Тексты в карточках ниже — обычный контент (можно править без «жёстких» элементов).
                </div>
</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<article className="reveal group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500"></div>
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs text-zinc-500">Приоритет</div>
<div className="mt-1 text-2xl font-medium tracking-tight text-zinc-950">P1</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-sm shadow-orange-500/20">
<iconify-icon height="18" icon="solar:siren-rounded-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<div className="mt-3 text-sm text-zinc-700">Остановка производства / безопасность</div>
<div className="mt-4 space-y-2 text-xs text-zinc-600">
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>реакция</span><span className="font-medium text-zinc-900">15 минут</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>первичная диагностика</span><span className="font-medium text-zinc-900">30–60 минут</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>план восстановления</span><span className="font-medium text-zinc-900">до 2 часов</span>
</div>
</div>
<div className="mt-4 text-xs text-zinc-500">эскалация: ТД/ОТС/ПМ по необходимости</div>
</article>
<article className="reveal group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500/70"></div>
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs text-zinc-500">Приоритет</div>
<div className="mt-1 text-2xl font-medium tracking-tight text-zinc-950">P2</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-800">
<iconify-icon height="18" icon="solar:bolt-circle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<div className="mt-3 text-sm text-zinc-700">Снижение производительности / нестабильность</div>
<div className="mt-4 space-y-2 text-xs text-zinc-600">
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>реакция</span><span className="font-medium text-zinc-900">1 час</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>план решения</span><span className="font-medium text-zinc-900">до 8 часов</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>решение</span><span className="font-medium text-zinc-900">1–2 дня</span>
</div>
</div>
</article>
<article className="reveal group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-900/10 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500/50"></div>
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs text-zinc-500">Приоритет</div>
<div className="mt-1 text-2xl font-medium tracking-tight text-zinc-950">P3</div>
</div>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-800">
<iconify-icon height="18" icon="solar:question-circle-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
</div>
<div className="mt-3 text-sm text-zinc-700">Вопрос/настройка/консультация</div>
<div className="mt-4 space-y-2 text-xs text-zinc-600">
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>реакция</span><span className="font-medium text-zinc-900">4 часа</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2">
<span>решение</span><span className="font-medium text-zinc-900">до 3 рабочих дней</span>
</div>
</div>
</article>
</div>
</div>
</div>

<div className="reveal mt-10 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm shadow-zinc-900/10">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Поток инцидента (flow)</div>
<div className="mt-1 text-xs text-zinc-500">одинаково для P1/P2/P3 — различаются скорости и эскалации</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 shadow-sm shadow-zinc-900/5">
<iconify-icon height="16" icon="solar:ticket-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon>
              всё через тикет
            </span>
</div>
</div>
<div className="mt-7 grid grid-cols-1 md:grid-cols-6 gap-3">
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
<div className="text-xs text-zinc-500">01</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Сообщение клиента/ЦИК</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-4 relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-0.5 bg-orange-500/70"></div>
<div className="text-xs text-zinc-500">02</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Регистрация (тикет)</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
<div className="text-xs text-zinc-500">03</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Классификация P1/P2/P3</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">04</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Диагностика</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
<div className="text-xs text-zinc-500">05</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Решение / временный обход</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">06</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Закрытие + запись в базу знаний</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-3 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2">реакция<iconify-icon height="16" icon="solar:arrow-right-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon></span>
<span className="text-zinc-300">•</span>
<span className="inline-flex items-center gap-2">прозрачность<iconify-icon height="16" icon="solar:eye-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon></span>
<span className="text-zinc-300">•</span>
<span className="inline-flex items-center gap-2">накопление знаний<iconify-icon height="16" icon="solar:folder-with-files-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon></span>
</div>
</div>

<div className="reveal mt-8 grid grid-cols-12 gap-4 items-start">
<div className="col-span-12 lg:col-span-7">
<div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm shadow-zinc-900/10">
<div className="flex items-start justify-between gap-4">
<div>
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
<iconify-icon height="18" icon="solar:chatbot-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Чат‑бот сервиса</div>
<div className="mt-1 text-xs text-zinc-500">ускоряет сбор данных и первичный разбор</div>
</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-zinc-700">
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>быстрая диагностика</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>подсказки по мануалам</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>шаблоны ответов</span></li>
<li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></span><span>сбор данных (фото/логи)</span></li>
</ul>
</div>
<div className="hidden sm:flex flex-col items-end gap-2">
<div className="text-xs text-zinc-500">Снижение времени на «уточнения»</div>
<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/5 px-3 py-1 text-xs text-zinc-700">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  меньше пинг‑понга
                </div>
</div>
</div>
<div className="mt-6">
<button className="w-full group inline-flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm shadow-zinc-900/5 hover:bg-zinc-50 transition" id="chatAccordionBtn">
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
                  Показать пример переписки
                </span>
<iconify-icon className="text-zinc-500 transition" height="18" icon="solar:alt-arrow-down-linear" id="chatChevron" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</button>
<div className="hidden mt-3 rounded-3xl border border-zinc-200 bg-zinc-50 p-5" id="chatAccordion">
<div className="space-y-3 text-sm">
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-zinc-200 text-zinc-700">
<iconify-icon height="18" icon="solar:user-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="flex-1 rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">Клиент</div>
<div className="mt-1 text-zinc-800">Линия встала, HMI показывает ошибку связи с ПЛК.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-zinc-900 text-white">
<iconify-icon height="18" icon="solar:chatbot-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="flex-1 rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">Бот</div>
<div className="mt-1 text-zinc-800">
                        Уточните, пожалуйста: <span className="font-medium text-zinc-900">с какого времени</span> проблема и есть ли <span className="font-medium text-zinc-900">срабатывание аварии</span>? Пришлите фото экрана и лог (кнопка «Экспорт»).
                      </div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-zinc-200 text-zinc-700">
<iconify-icon height="18" icon="solar:user-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="flex-1 rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">Клиент</div>
<div className="mt-1 text-zinc-800">С 10:12. Авария не горит. Фото и лог отправил.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-zinc-900 text-white">
<iconify-icon height="18" icon="solar:headphones-round-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</div>
<div className="flex-1 rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">Сервис</div>
<div className="mt-1 text-zinc-800">
                        Классифицируем как <span className="font-medium text-zinc-900">P1</span>. Запускаем удалённую диагностику, ориентир — первичная оценка в течение 30–60 минут.
                      </div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-zinc-500">
                  Пример иллюстративный — формулировки можно стандартизировать и вынести в шаблоны.
                </div>
</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-5">
<div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm shadow-zinc-900/10">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
<iconify-icon height="18" icon="solar:target-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight text-zinc-900">Контрольные точки сервиса</div>
<div className="mt-1 text-xs text-zinc-500">чтобы SLA были измеримыми</div>
</div>
</div>
<div className="mt-5 grid gap-3">
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
<div className="text-xs text-zinc-500">Вход</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Тикет обязателен</div>
<div className="mt-1 text-xs text-zinc-500">без тикета — нет SLA, нет истории</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-4">
<div className="text-xs text-zinc-500">Классификация</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">P1/P2/P3</div>
<div className="mt-1 text-xs text-zinc-500">определяет скорость и эскалации</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
<div className="text-xs text-zinc-500">Выход</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-900">Закрытие + база знаний</div>
<div className="mt-1 text-xs text-zinc-500">фиксируем решение и «known issues»</div>
</div>
</div>
<div className="mt-5 rounded-3xl border border-orange-500/25 bg-orange-500/5 p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-orange-600" height="18" icon="solar:bell-linear" style={{fontSize: '1.125rem'}} width="18"></iconify-icon>
<div className="text-xs text-zinc-700 leading-relaxed">
                  Если сервис требует вмешательства в архитектуру — подключаем <span className="font-medium text-zinc-900">ТД</span> (и фиксируем решение в стандартах).
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200/70 bg-white/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid grid-cols-12 gap-6 items-start">
<div className="col-span-12 md:col-span-7">
<div className="text-sm font-medium tracking-tight text-zinc-900">Внутренний стандарт | Прайд‑Автоматикс</div>
<div className="mt-2 text-xs text-zinc-500 leading-relaxed">
            Контакт по изменениям регламента: ПМ/ГД (заполнить позже)
          </div>
</div>
<div className="col-span-12 md:col-span-5 md:text-right">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-600 shadow-sm shadow-zinc-900/5">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            Версия 2026.02 · обновляйте правила единообразно
          </div>
</div>
</div>
<div className="mt-8 h-px bg-zinc-200/70"></div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:copyright-linear" style={{fontSize: '1rem'}} width="16"></iconify-icon>
<span>Прайд‑Автоматикс · внутреннее использование</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-zinc-800 transition" href="#roles">Наверх</a>
<span className="text-zinc-300">|</span>
<a className="hover:text-zinc-800 transition" href="#raci">RACI</a>
<span className="text-zinc-300">|</span>
<a className="hover:text-zinc-800 transition" href="#sla">SLA</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
