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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-copy > *", {
      opacity: 0,
      y: 28,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out"
    });

    gsap.from(".hero-visual", {
      opacity: 0,
      y: 40,
      scale: 0.96,
      duration: 1.1,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.05,
        ease: "power3.out"
      });
    });

    gsap.utils.toArray(".trust-item").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 92%"
        },
        opacity: 0,
        y: 18,
        duration: 0.7,
        delay: i * 0.04,
        ease: "power2.out"
      });
    });

    gsap.from(".adv-copy", {
      scrollTrigger: {
        trigger: ".adv-copy",
        start: "top 75%"
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out"
    });

    gsap.from(".adv-panel", {
      scrollTrigger: {
        trigger: ".adv-panel",
        start: "top 75%"
      },
      opacity: 0,
      y: 40,
      scale: 0.98,
      duration: 1,
      ease: "power3.out"
    });

    gsap.utils.toArray(".adv-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 88%"
        },
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: i * 0.05,
        ease: "power3.out"
      });
    });

    gsap.utils.toArray(".doctor-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        },
        opacity: 0,
        y: 28,
        duration: 0.85,
        delay: i * 0.08,
        ease: "power3.out"
      });
    });

    gsap.from(".price-side", {
      scrollTrigger: {
        trigger: ".price-side",
        start: "top 80%"
      },
      opacity: 0,
      x: 30,
      duration: 0.9,
      ease: "power3.out"
    });

    gsap.from(".contact-copy", {
      scrollTrigger: {
        trigger: ".contact-copy",
        start: "top 80%"
      },
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power3.out"
    });

    gsap.from(".contact-map", {
      scrollTrigger: {
        trigger: ".contact-map",
        start: "top 80%"
      },
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 1,
      ease: "power3.out"
    });
  
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
      
<div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_24%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
<span className="text-sm font-semibold tracking-tight">ДМ</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Дента-М</div>
<div className="text-xs text-slate-500">Стоматология в Санкт-Петербурге</div>
</div>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#services">Услуги</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#doctors">Врачи</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#advantages">Преимущества</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#prices">Цены</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#contacts">Контакты</a>
</nav>
<div className="hidden items-center gap-4 md:flex">
<a className="text-sm font-medium text-slate-700" href="tel:+78120000000">+7 (812) 000-00-00</a>
<a className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800" href="#appointment">Записаться</a>
</div>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden" id="menuBtn">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
<div className="hidden border-t border-slate-200 bg-white md:hidden" id="mobileMenu">
<div className="space-y-4 px-6 py-5">
<a className="block text-sm font-medium text-slate-700" href="#services">Услуги</a>
<a className="block text-sm font-medium text-slate-700" href="#doctors">Врачи</a>
<a className="block text-sm font-medium text-slate-700" href="#advantages">Преимущества</a>
<a className="block text-sm font-medium text-slate-700" href="#prices">Цены</a>
<a className="block text-sm font-medium text-slate-700" href="#contacts">Контакты</a>
<div className="flex flex-col gap-3 pt-2">
<a className="text-sm font-medium text-slate-900" href="tel:+78120000000">+7 (812) 000-00-00</a>
<a className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white" href="#appointment">Записаться на приём</a>
</div>
</div>
</div>
</header>
<main>
<section className="relative">
<div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
<div className="hero-copy">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-800">
<span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              Современная стоматология рядом с вами
            </div>
<h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Улыбка, которой
              <span className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">доверяют</span>
</h1>
<p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Терапия, имплантация, ортопедия, хирургия и эстетическая стоматология. Точные диагнозы, деликатное лечение и понятный сервис для взрослых и детей.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800" href="#appointment">
                Записаться на консультацию
                <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900" href="#services">
                Смотреть услуги
              </a>
</div>
<div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-950">15+</div>
<div className="mt-1 text-xs text-slate-500">лет опыта</div>
</div>
<div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-950">5 000+</div>
<div className="mt-1 text-xs text-slate-500">довольных пациентов</div>
</div>
<div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-950">4.9</div>
<div className="mt-1 text-xs text-slate-500">средняя оценка</div>
</div>
</div>
</div>
<div className="hero-visual relative">
<div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-cyan-100 blur-3xl lg:block"></div>
<div className="absolute -right-6 bottom-10 hidden h-36 w-36 rounded-full bg-sky-100 blur-3xl lg:block"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-3 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
<div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-50 via-white to-cyan-50">
<img alt="Современный стоматологический кабинет" className="h-[28rem] w-full object-cover object-center" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10"></div>
<div className="absolute left-4 top-4 rounded-2xl border border-white/60 bg-white/75 p-4 backdrop-blur-xl">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
<iconify-icon height="20" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Безопасные протоколы</div>
<div className="text-xs text-slate-500">Стерильность и контроль качества</div>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 max-w-xs rounded-2xl border border-white/60 bg-white/80 p-4 backdrop-blur-xl">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
<iconify-icon height="20" icon="solar:heart-pulse-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Бережный подход</div>
<p className="mt-1 text-xs leading-5 text-slate-600">
                        Работаем деликатно, объясняем каждый этап лечения и составляем понятный план без лишних процедур.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-slate-200/80 bg-white/70">
<div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
<div className="trust-item flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Гарантия на работы</div>
<div className="text-xs text-slate-500">Официальный договор</div>
</div>
</div>
<div className="trust-item flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Опытные врачи</div>
<div className="text-xs text-slate-500">Практика и повышение квалификации</div>
</div>
</div>
<div className="trust-item flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Современное оборудование</div>
<div className="text-xs text-slate-500">Точная диагностика и лечение</div>
</div>
</div>
<div className="trust-item flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Прозрачные цены</div>
<div className="text-xs text-slate-500">План и стоимость заранее</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="services">
<div className="max-w-2xl">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700">Услуги</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Полный спектр стоматологических решений</h2>
<p className="mt-4 text-base leading-7 text-slate-600">
            От профилактики до комплексного восстановления. Подбираем план лечения под задачу, сроки и бюджет пациента.
          </p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
<div className="service-card rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
<iconify-icon height="24" icon="solar:tooth-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Терапевтическая стоматология</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Лечение кариеса, пульпита, периодонтита, восстановление формы и функции зубов.</p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900" href="#">
              Подробнее
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="service-card rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
<iconify-icon height="24" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Хирургия и имплантация</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Удаление, импланты, костная пластика и комплексное восстановление зубного ряда.</p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900" href="#">
              Подробнее
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="service-card rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
<iconify-icon height="24" icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Эстетика и отбеливание</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Профессиональная гигиена, отбеливание, виниры и художественная реставрация.</p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900" href="#">
              Подробнее
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="service-card rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
<iconify-icon height="24" icon="solar:user-heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Ортопедия и протезирование</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Коронки, мосты, вкладки и протезы для восстановления комфорта и эстетики.</p>
<a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900" href="#">
              Подробнее
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="bg-slate-950 text-white" id="advantages">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
<div className="adv-copy">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Почему выбирают нас</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Сочетание технологии, комфорта и доверия</h2>
<p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Мы делаем лечение спокойным и предсказуемым: тщательно диагностируем, предлагаем несколько сценариев и сопровождаем пациента на каждом этапе.
            </p>
<div className="mt-10 grid gap-4 sm:grid-cols-2">
<div className="adv-card rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
<iconify-icon height="22" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-base font-medium">Понятный план лечения</div>
<p className="mt-2 text-sm leading-6 text-slate-300">Подробно объясняем диагноз, этапы, стоимость и сроки без сложных формулировок.</p>
</div>
<div className="adv-card rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
<iconify-icon height="22" icon="solar:syringe-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-base font-medium">Комфортное лечение</div>
<p className="mt-2 text-sm leading-6 text-slate-300">Используем современные методы анестезии и уделяем внимание спокойствию пациента.</p>
</div>
<div className="adv-card rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
<iconify-icon height="22" icon="solar:stars-line-duotone" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-base font-medium">Эстетичный результат</div>
<p className="mt-2 text-sm leading-6 text-slate-300">Сохраняем естественность улыбки и подбираем решения, которые смотрятся гармонично.</p>
</div>
<div className="adv-card rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
<iconify-icon height="22" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="mt-4 text-base font-medium">Удобный график</div>
<p className="mt-2 text-sm leading-6 text-slate-300">Помогаем подобрать время визита и бережно относимся к расписанию пациента.</p>
</div>
</div>
</div>
<div className="adv-panel rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Первичная консультация</div>
<div className="mt-1 text-xs text-slate-400">Осмотр, рекомендации и предварительный план</div>
</div>
<div className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-300">Онлайн запись</div>
</div>
<div className="mt-8 space-y-4">
<div className="rounded-2xl bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
<iconify-icon height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="text-sm text-slate-300">Индивидуальный подход к каждому случаю</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
<iconify-icon height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="text-sm text-slate-300">Подбор удобного времени приёма</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
<iconify-icon height="20" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="text-sm text-slate-300">Чёткие рекомендации после лечения</div>
</div>
</div>
</div>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100" href="#appointment">
                Получить консультацию
              </a>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="doctors">
<div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
<div className="max-w-2xl">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700">Команда</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Врачи, которым доверяют семьи</h2>
<p className="mt-4 text-base leading-7 text-slate-600">
              Сильная команда специалистов с внимательным подходом, клиническим опытом и ориентацией на долгосрочный результат.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900" href="#appointment">
            Выбрать врача
            <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
<div className="doctor-card overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm">
<img alt="Врач стоматолог" className="h-72 w-full object-cover object-center" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="p-6">
<div className="text-lg font-medium text-slate-950">Анна Сергеевна Миронова</div>
<div className="mt-1 text-sm text-cyan-700">Стоматолог-терапевт</div>
<p className="mt-4 text-sm leading-6 text-slate-600">Лечение кариеса, эстетические реставрации, профессиональная гигиена и профилактика.</p>
</div>
</div>
<div className="doctor-card overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm">
<img alt="Врач имплантолог" className="h-72 w-full object-cover object-center" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="p-6">
<div className="text-lg font-medium text-slate-950">Игорь Павлович Романов</div>
<div className="mt-1 text-sm text-cyan-700">Хирург-имплантолог</div>
<p className="mt-4 text-sm leading-6 text-slate-600">Удаление зубов, имплантация, восстановление жевательной функции и комплексные случаи.</p>
</div>
</div>
<div className="doctor-card overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm">
<img alt="Врач ортопед" className="h-72 w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-6">
<div className="text-lg font-medium text-slate-950">Елена Викторовна Крылова</div>
<div className="mt-1 text-sm text-cyan-700">Стоматолог-ортопед</div>
<p className="mt-4 text-sm leading-6 text-slate-600">Коронки, виниры, протезирование и эстетическое восстановление улыбки.</p>
</div>
</div>
</div>
</section>
<section className="bg-slate-50" id="prices">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
<div className="max-w-2xl">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700">Цены</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Прозрачная стоимость без сюрпризов</h2>
<p className="mt-4 text-base leading-7 text-slate-600">
              Финальная цена зависит от клинической картины, но базовые ориентиры доступны заранее.
            </p>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
<div className="rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-sm">
<div className="overflow-hidden rounded-[1.5rem] border border-slate-200/70">
<div className="grid grid-cols-[1fr_auto] border-b border-slate-200 bg-slate-50 px-5 py-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
<div>Услуга</div>
<div>от</div>
</div>
<div className="divide-y divide-slate-200">
<div className="grid grid-cols-[1fr_auto] items-center px-5 py-4">
<div>
<div className="text-sm font-medium text-slate-900">Консультация стоматолога</div>
<div className="mt-1 text-xs text-slate-500">Осмотр и рекомендации</div>
</div>
<div className="text-sm font-medium text-slate-900">1 000 ₽</div>
</div>
<div className="grid grid-cols-[1fr_auto] items-center px-5 py-4">
<div>
<div className="text-sm font-medium text-slate-900">Лечение кариеса</div>
<div className="mt-1 text-xs text-slate-500">С анестезией и восстановлением</div>
</div>
<div className="text-sm font-medium text-slate-900">4 500 ₽</div>
</div>
<div className="grid grid-cols-[1fr_auto] items-center px-5 py-4">
<div>
<div className="text-sm font-medium text-slate-900">Профессиональная гигиена</div>
<div className="mt-1 text-xs text-slate-500">Комплексная чистка</div>
</div>
<div className="text-sm font-medium text-slate-900">5 500 ₽</div>
</div>
<div className="grid grid-cols-[1fr_auto] items-center px-5 py-4">
<div>
<div className="text-sm font-medium text-slate-900">Имплантация</div>
<div className="mt-1 text-xs text-slate-500">Подбор системы индивидуально</div>
</div>
<div className="text-sm font-medium text-slate-900">от 35 000 ₽</div>
</div>
<div className="grid grid-cols-[1fr_auto] items-center px-5 py-4">
<div>
<div className="text-sm font-medium text-slate-900">Коронка</div>
<div className="mt-1 text-xs text-slate-500">Ортопедическое восстановление</div>
</div>
<div className="text-sm font-medium text-slate-900">от 18 000 ₽</div>
</div>
</div>
</div>
</div>
<div className="price-side rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
<div className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">Быстрая связь</div>
<h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">Получите план лечения и ориентир по стоимости</h3>
<p className="mt-4 text-sm leading-6 text-slate-600">
                Оставьте заявку — администратор свяжется с вами, поможет подобрать врача и удобное время визита.
              </p>
<form className="mt-8 space-y-4" id="appointment">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Ваше имя</label>
<input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white" placeholder="Например, Анна" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Телефон</label>
<input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Что вас интересует</label>
<div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    Консультация, лечение, имплантация, протезирование
                  </div>
</div>
<button className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" type="button">
                  Отправить заявку
                </button>
<p className="text-xs leading-5 text-slate-500">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
</form>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="contacts">
<div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
<div className="contact-copy rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-700">Контакты</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Приезжайте на консультацию</h2>
<p className="mt-4 text-base leading-7 text-slate-600">
              Поможем подобрать удобное время, расскажем о подготовке к приёму и ответим на вопросы.
            </p>
<div className="mt-8 space-y-5">
<div className="flex gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Адрес</div>
<div className="mt-1 text-sm text-slate-600">Санкт-Петербург, удобное расположение рядом с метро</div>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Телефон</div>
<a className="mt-1 block text-sm text-slate-600" href="tel:+78120000000">+7 (812) 000-00-00</a>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
<iconify-icon height="22" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Время работы</div>
<div className="mt-1 text-sm text-slate-600">Ежедневно, с 9:00 до 21:00</div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800" href="#appointment">Записаться</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900" href="#">Построить маршрут</a>
</div>
</div>
<div className="contact-map rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-100 to-slate-50 p-3 shadow-sm">
<div className="flex h-full min-h-[24rem] items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white text-center">
<div className="px-6">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
<iconify-icon height="28" icon="solar:map-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="mt-4 text-lg font-medium text-slate-900">Интерактивная карта</div>
<p className="mt-2 text-sm leading-6 text-slate-500">
                  Здесь можно встроить карту с адресом клиники, маршрутом и отметкой ближайшего метро.
                </p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
<span className="text-sm font-semibold tracking-tight">ДМ</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Дента-М</div>
<div className="text-xs text-slate-500">Современная стоматология</div>
</div>
</div>
<div className="text-xs text-slate-500">© 2026 Все права защищены</div>
</div>
</footer>
</div>


    </>
  );
}
