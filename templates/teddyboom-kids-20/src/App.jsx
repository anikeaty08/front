import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const byId = (id) => document.getElementById(id);

    // Year
    byId("year").textContent = new Date().getFullYear();

    // Mobile menu
    const mobileMenu = byId("mobileMenu");
    byId("openMenu").addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });

    // Pricing tabs
    const tabHour = byId("tabHour");
    const tabKey = byId("tabKey");
    const pricingHour = byId("pricingHour");
    const pricingKey = byId("pricingKey");

    function setTab(which) {
      const hourActive = which === "hour";
      pricingHour.classList.toggle("hidden", !hourActive);
      pricingKey.classList.toggle("hidden", hourActive);

      tabHour.classList.toggle("bg-white", hourActive);
      tabHour.classList.toggle("text-slate-950", hourActive);
      tabHour.classList.toggle("text-slate-200", !hourActive);

      tabKey.classList.toggle("bg-white", !hourActive);
      tabKey.classList.toggle("text-slate-950", !hourActive);
      tabKey.classList.toggle("text-slate-200", hourActive);
    }
    tabHour.addEventListener("click", () => setTab("hour"));
    tabKey.addEventListener("click", () => setTab("key"));

    // FAQ accordion
    document.querySelectorAll(".faqItem").forEach((item) => {
      const btn = item.querySelector(".faqBtn");
      const body = item.querySelector(".faqBody");
      const icon = item.querySelector(".faqIcon");

      btn.addEventListener("click", () => {
        const isOpen = !body.classList.contains("hidden");
        document.querySelectorAll(".faqBody").forEach(b => b.classList.add("hidden"));
        document.querySelectorAll(".faqIcon").forEach(i => i.setAttribute("icon", "solar:plus-linear"));

        if (!isOpen) {
          body.classList.remove("hidden");
          icon.setAttribute("icon", "solar:minus-linear");
        }
      });
    });

    // Pick loft/package to form
    const leadLoft = byId("leadLoft");
    const leadPackage = byId("leadPackage");

    document.querySelectorAll(".pickLoft").forEach((a) => {
      a.addEventListener("click", () => {
        leadLoft.value = a.getAttribute("data-pick") || "";
      });
    });

    document.querySelectorAll(".pickPackage").forEach((a) => {
      a.addEventListener("click", () => {
        leadPackage.value = a.getAttribute("data-package") || "";
      });
    });

    // Gallery modal
    const modal = byId("galleryModal");
    const galleryTitle = byId("galleryTitle");
    const galleryCta = byId("galleryCta");

    document.querySelectorAll(".openGallery").forEach((btn) => {
      btn.addEventListener("click", () => {
        const loft = btn.getAttribute("data-loft") || "Лофт";
        galleryTitle.textContent = `Фото — ${loft}`;
        leadLoft.value = loft;
        modal.classList.remove("hidden");
        galleryCta.setAttribute("href", "#lead");
      });
    });

    function closeModal() {
      modal.classList.add("hidden");
    }
    byId("closeGallery").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal.querySelector(".absolute")) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    // Phone mask (simple)
    function formatRuPhone(raw) {
      const digits = (raw || "").replace(/\D/g, "").replace(/^8/, "7");
      const d = digits.startsWith("7") ? digits : ("7" + digits);
      const p = d.slice(0, 11);

      const a = p.slice(1, 4);
      const b = p.slice(4, 7);
      const c = p.slice(7, 9);
      const e = p.slice(9, 11);

      let out = "+7";
      if (a) out += " " + a;
      if (b) out += " " + b;
      if (c) out += "-" + c;
      if (e) out += "-" + e;
      return out;
    }

    const phoneInputs = [byId("qPhone"), byId("leadPhone")].filter(Boolean);
    phoneInputs.forEach((inp) => {
      inp.addEventListener("input", () => {
        inp.value = formatRuPhone(inp.value);
      });
    });

    // Quick form -> fill lead + scroll
    byId("quickForm").addEventListener("submit", (e) => {
      e.preventDefault();
      byId("leadDate").value = byId("qDate").value || "";
      byId("leadGuests").value = byId("qGuests").value || "";
      byId("leadPhone").value = byId("qPhone").value || "";
      document.querySelector("#lead").scrollIntoView({ behavior: "smooth", block: "start" });
      byId("leadPhone").focus();
    });

    // Lead form submit (demo)
    byId("leadForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        loft: byId("leadLoft").value.trim(),
        package: byId("leadPackage").value.trim(),
        date: byId("leadDate").value,
        guests: byId("leadGuests").value,
        age: byId("leadAge").value.trim(),
        name: byId("leadName").value.trim(),
        phone: byId("leadPhone").value.trim(),
        note: byId("leadNote").value.trim()
      };

      const missing = [];
      if (!data.date) missing.push("дату");
      if (!data.guests) missing.push("кол-во гостей");
      if (!data.phone || data.phone.length < 10) missing.push("телефон");

      const result = byId("leadResult");
      result.classList.remove("hidden");

      if (missing.length) {
        result.textContent = "Заполните: " + missing.join(", ") + ".";
        result.classList.remove("bg-emerald-500/10");
        result.classList.add("bg-rose-500/10");
        result.classList.remove("ring-emerald-500/20");
        result.classList.add("ring-rose-500/20");
        return;
      }

      // Здесь подключите отправку в CRM/почту/мессенджер (fetch).
      result.textContent = "Заявка сформирована. Мы свяжемся с вами и пришлем 2–3 варианта со стоимостью.";
      result.classList.remove("bg-rose-500/10");
      result.classList.add("bg-emerald-500/10");
      result.classList
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-slate-300" height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Москва • Детские лофты для праздников
          </span>
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-slate-300" height="18" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Ежедневно 10:00–22:00
          </span>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/15" href="#lead">
<iconify-icon className="text-white/90" height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Проверить свободные даты
          </a>
<a className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-white/90" href="tel:+79990000000">
<iconify-icon className="text-slate-900" height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            +7 (999) 000-00-00
          </a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-3" href="#">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-950">
<span className="text-sm font-semibold tracking-tight">TB</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight">TeddyBoom</div>
<div className="text-xs text-slate-400">Лофты для детских праздников</div>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-xs font-medium text-slate-300 hover:text-white" href="#lofts">Лофты</a>
<a className="text-xs font-medium text-slate-300 hover:text-white" href="#packages">Пакеты</a>
<a className="text-xs font-medium text-slate-300 hover:text-white" href="#services">Услуги</a>
<a className="text-xs font-medium text-slate-300 hover:text-white" href="#reviews">Отзывы</a>
<a className="text-xs font-medium text-slate-300 hover:text-white" href="#faq">FAQ</a>
<a className="text-xs font-medium text-slate-300 hover:text-white" href="#contacts">Контакты</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Открыть меню" className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/10 hover:bg-white/15 md:hidden" id="openMenu">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<a className="hidden items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-white/90 md:inline-flex" href="#lead">
            Получить расчет
            <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="hidden border-t border-white/10 bg-slate-950/95" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10" href="#lofts">Лофты</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10" href="#packages">Пакеты</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10" href="#services">Услуги</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10" href="#reviews">Отзывы</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10" href="#faq">FAQ</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10" href="#contacts">Контакты</a>
<a className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90" href="#lead">
            Получить расчет
            <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute -bottom-28 right-0 h-80 w-[32rem] rounded-full bg-cyan-400/15 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20">
<div className="grid items-center gap-10 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Безопасные детские зоны • Чисто • Красиво • Удобно для родителей
          </div>
<h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Детские лофты для дней рождения и праздников — без суеты и «как у всех»
          </h1>
<p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Уютные пространства, фотогеничный интерьер, игровой уголок, зона для застолья, музыка и свет.
            Поможем собрать праздник под ключ или сэкономить — вы выбираете формат.
          </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" href="#lead">
              Подобрать лофт и стоимость
              <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15" href="#lofts">
              Смотреть лофты
              <iconify-icon className="ml-2" height="18" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Вместимость</div>
<div className="mt-1 text-sm font-semibold tracking-tight">до 40 гостей</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Площадь</div>
<div className="mt-1 text-sm font-semibold tracking-tight">от 60 м²</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Формат</div>
<div className="mt-1 text-sm font-semibold tracking-tight">под ключ</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Опции</div>
<div className="mt-1 text-sm font-semibold tracking-tight">аниматоры</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="rounded-xl bg-gradient-to-b from-white/10 to-white/5 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Быстрый расчет</div>
<div className="mt-1 text-xs text-slate-400">Ответим в течение 10–20 минут в рабочее время</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-950">
<iconify-icon height="20" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<form className="mt-4 grid gap-3" id="quickForm">
<div className="grid gap-2 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs text-slate-300">Дата</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="qDate" type="date"/>
</label>
<label className="grid gap-1">
<span className="text-xs text-slate-300">Гостей</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="qGuests" min="1" placeholder="Напр. 15" type="number"/>
</label>
</div>
<label className="grid gap-1">
<span className="text-xs text-slate-300">Телефон</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="qPhone" placeholder="+7 ___ ___-__-__" type="tel"/>
</label>
<div className="grid gap-2 sm:grid-cols-2">
<button className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" type="submit">
                    Получить варианты
                    <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15" href="#contacts">
                    Написать
                    <iconify-icon className="ml-2" height="18" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<p className="text-xs text-slate-500">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
</form>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-3">
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Безопасно
                </div>
<div className="mt-2 text-xs text-slate-400">Детские зоны, мягкие модули, контроль пространства</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon height="18" icon="solar:vacuum-cleaner-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Чисто
                </div>
<div className="mt-2 text-xs text-slate-400">Подготовка и уборка перед/после мероприятия</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Фотозоны
                </div>
<div className="mt-2 text-xs text-slate-400">Свет, декор, «вау»-кадры с праздника</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 grid gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:grid-cols-3 sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Прозрачные условия</div>
<div className="text-xs text-slate-400">Договор, чек, понятные правила</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:ticket-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Гибкие пакеты</div>
<div className="text-xs text-slate-400">От аренды до праздника «под ключ»</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Любят дети</div>
<div className="text-xs text-slate-400">Игры, шоу, аниматоры, сладкий стол</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="lofts">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Наши лофты</h2>
<p className="mt-2 max-w-2xl text-sm text-slate-300">
            Выберите площадку по стилю, площади и локации. Каждый лофт — с продуманной детской зоной и комфортом для взрослых.
          </p>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15" href="#lead">
          Помочь с выбором
          <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-5 lg:grid-cols-3">

<article className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5">
<div className="flex h-full items-end justify-between p-4">
<div className="rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
<span className="font-semibold">Лофт «Светлый»</span> • 80 м²
              </div>
<div className="rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
                до 30 гостей
              </div>
</div>
</div>
<div className="p-5">
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Игровая зона</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Фотозона</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Музыка</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Универсальный интерьер для праздников 3–10 лет. Отлично для шоу-программ и семейных событий.
            </p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-xs text-slate-400">от</div>
<div className="text-lg font-semibold tracking-tight text-white">6 900 ₽/час</div>
</div>
<div className="flex gap-2">
<button className="openGallery inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-white/15" data-loft="Лофт «Светлый»">
                  Фото
                  <iconify-icon className="ml-2" height="18" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="pickLoft inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-white/90" data-pick="Лофт «Светлый»" href="#lead">
                  Выбрать
                </a>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5">
<div className="flex h-full items-end justify-between p-4">
<div className="rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
<span className="font-semibold">Лофт «Сцена»</span> • 100 м²
              </div>
<div className="rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
                до 40 гостей
              </div>
</div>
</div>
<div className="p-5">
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Свет/звук</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Проектор</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Шоу</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Для активных праздников: бумажная дискотека, научное шоу, ведущий, выступления и танцы.
            </p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-xs text-slate-400">от</div>
<div className="text-lg font-semibold tracking-tight text-white">8 900 ₽/час</div>
</div>
<div className="flex gap-2">
<button className="openGallery inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-white/15" data-loft="Лофт «Сцена»">
                  Фото
                  <iconify-icon className="ml-2" height="18" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="pickLoft inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-white/90" data-pick="Лофт «Сцена»" href="#lead">
                  Выбрать
                </a>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5">
<div className="flex h-full items-end justify-between p-4">
<div className="rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
<span className="font-semibold">Лофт «Пастель»</span> • 70 м²
              </div>
<div className="rounded-xl bg-slate-950/70 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
                до 25 гостей
              </div>
</div>
</div>
<div className="p-5">
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Кухня</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Детский уголок</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">Уют</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Идеально для камерного семейного дня рождения. Удобно для малышей и спокойных активностей.
            </p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-xs text-slate-400">от</div>
<div className="text-lg font-semibold tracking-tight text-white">5 900 ₽/час</div>
</div>
<div className="flex gap-2">
<button className="openGallery inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-white/15" data-loft="Лофт «Пастель»">
                  Фото
                  <iconify-icon className="ml-2" height="18" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="pickLoft inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-white/90" data-pick="Лофт «Пастель»" href="#lead">
                  Выбрать
                </a>
</div>
</div>
</div>
</article>
</div>
<div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="grid gap-6 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-8">
<h3 className="text-xl font-semibold tracking-tight text-white">Не уверены, какой лофт подойдет?</h3>
<p className="mt-2 text-sm text-slate-300">
              Подскажем по возрасту детей, количеству гостей, формату (аниматор/шоу/квест), и уложимся в ваш бюджет.
            </p>
</div>
<div className="lg:col-span-4">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" href="#lead">
              Подобрать за 2 минуты
              <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="packages">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Пакеты и стоимость</h2>
<p className="mt-2 max-w-2xl text-sm text-slate-300">
            Можно взять только аренду, а можно — готовый набор с ведущим/аниматором, декором и организацией.
          </p>
</div>
<div className="inline-flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
<button className="tabBtn rounded-lg px-4 py-2 text-xs font-semibold text-slate-950 bg-white" id="tabHour">Аренда</button>
<button className="tabBtn rounded-lg px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white" id="tabKey">Под ключ</button>
</div>
</div>
<div className="mt-8 grid gap-5 lg:grid-cols-3" id="pricingHour">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Базовая аренда</div>
<div className="mt-1 text-xs text-slate-400">Для самостоятельной организации</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:key-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400">от</div>
<div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">5 900 ₽</div>
<div className="mt-1 text-xs text-slate-400">за час • минимально 3 часа</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Лофт и мебель</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Детская зона</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Музыка, базовый свет</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Подготовка/уборка</li>
</ul>
<a className="pickPackage mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" data-package="Базовая аренда" href="#lead">
            Запросить расчет
          </a>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-2 ring-white/20">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Аренда + администратор</div>
<div className="mt-1 text-xs text-slate-400">Чтобы все шло по плану</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-950">
<iconify-icon height="20" icon="solar:user-hand-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400">от</div>
<div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">7 900 ₽</div>
<div className="mt-1 text-xs text-slate-400">за час • популярный выбор</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Все из «Базовой аренды»</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Администратор на площадке</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Помощь со временем и гостями</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Координация подрядчиков</li>
</ul>
<a className="pickPackage mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" data-package="Аренда + администратор" href="#lead">
            Забронировать просмотр
          </a>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Аренда + техника</div>
<div className="mt-1 text-xs text-slate-400">Для шоу и дискотек</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:speaker-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400">от</div>
<div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">9 900 ₽</div>
<div className="mt-1 text-xs text-slate-400">за час • свет, звук, микрофоны</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Лофт + базовая подготовка</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Колонки, микрофон</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Свет/эффекты (по запросу)</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Подключение и проверка</li>
</ul>
<a className="pickPackage mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" data-package="Аренда + техника" href="#lead">
            Получить расчет
          </a>
</div>
</div>
<div className="mt-8 hidden grid gap-5 lg:grid-cols-3" id="pricingKey">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Мини-праздник</div>
<div className="mt-1 text-xs text-slate-400">Быстро, красиво, удобно</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:confetti-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400">от</div>
<div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">39 900 ₽</div>
<div className="mt-1 text-xs text-slate-400">за мероприятие</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Аренда 3 часа</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Аниматор 1 час</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Базовый декор</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Координация</li>
</ul>
<a className="pickPackage mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" data-package="Мини-праздник" href="#lead">
            Узнать детали
          </a>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-2 ring-white/20">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Хит</div>
<div className="mt-1 text-xs text-slate-400">Максимум эмоций для детей</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-950">
<iconify-icon height="20" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400">от</div>
<div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">59 900 ₽</div>
<div className="mt-1 text-xs text-slate-400">за мероприятие</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Аренда 4 часа</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Аниматор 2 часа</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Шоу-программа (на выбор)</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Декор расширенный</li>
</ul>
<a className="pickPackage mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" data-package="Хит" href="#lead">
            Подобрать программу
          </a>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Премиум</div>
<div className="mt-1 text-xs text-slate-400">Декор, шоу, фото — все включено</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400">от</div>
<div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">89 900 ₽</div>
<div className="mt-1 text-xs text-slate-400">за мероприятие</div>
</div>
<ul className="mt-5 grid gap-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Аренда 5 часов</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Ведущий + аниматоры</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Декор «вау»</li>
<li className="flex gap-2"><iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon> Фотограф/контент</li>
</ul>
<a className="pickPackage mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" data-package="Премиум" href="#lead">
            Запросить предложение
          </a>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="services">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Услуги для праздника</h2>
<p className="mt-2 text-sm text-slate-300">
            Собираем событие как конструктор: выбираете услуги — мы организуем, привезем, настроим и проконтролируем.
          </p>
<div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-4">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-slate-950">
<iconify-icon height="22" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Сценарий под возраст</div>
<div className="mt-1 text-xs text-slate-400">3–5 • 6–8 • 9–12 — разные активности и темп</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-slate-950/50 p-4 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Популярно</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Бумажная дискотека</div>
</div>
<div className="rounded-xl bg-slate-950/50 p-4 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Вау-эффект</div>
<div className="mt-1 text-sm font-semibold tracking-tight">Научное шоу</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Аниматоры</div>
<div className="mt-1 text-xs text-slate-400">Персонажи, игры, конкурсы, мини-шоу</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:balloon-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Декор и шары</div>
<div className="mt-1 text-xs text-slate-400">Арки, фотозоны, тематические наборы</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:cake-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Кэнди-бар и торт</div>
<div className="mt-1 text-xs text-slate-400">Вкусно и красиво, по теме праздника</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:camera-add-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Фото/видео</div>
<div className="mt-1 text-xs text-slate-400">Репортаж, контент, мини-ролик</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:music-note-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Диджей и звук</div>
<div className="mt-1 text-xs text-slate-400">Музыка, микрофоны, эффекты, свет</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Фуршет/кейтеринг</div>
<div className="mt-1 text-xs text-slate-400">Меню для детей и взрослых</div>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="grid gap-4 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-8">
<div className="text-sm font-semibold tracking-tight">Соберем праздник под ваш бюджет</div>
<div className="mt-1 text-xs text-slate-400">Оставьте запрос — предложим 2–3 варианта с ценой и наполнением</div>
</div>
<div className="lg:col-span-4">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" href="#lead">
                  Получить варианты
                  <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="reviews">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Отзывы родителей</h2>
<p className="mt-2 max-w-2xl text-sm text-slate-300">
            Здесь — примеры формулировок. Замените на реальные отзывы, скриншоты и ссылки на площадки.
          </p>
</div>
<div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-xs text-slate-200 ring-1 ring-white/10">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Средняя оценка: 4.9/5
        </div>
</div>
<div className="mt-8 grid gap-5 lg:grid-cols-3">
<figure className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<blockquote className="text-sm text-slate-200">
            «Очень чисто, администратор помог со всем, дети не хотели уходить. Фотозона — супер, кадры получились как из студии.»
          </blockquote>
<figcaption className="mt-4 flex items-center justify-between">
<div>
<div className="text-xs font-semibold tracking-tight text-white">Анна</div>
<div className="text-xs text-slate-400">День рождения, 7 лет</div>
</div>
<div className="flex text-slate-200">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<blockquote className="text-sm text-slate-200">
            «Взяли пакет под ключ — и это лучшее решение. Тайминг, аниматор, музыка — все сработало четко, мы просто отдыхали.»
          </blockquote>
<figcaption className="mt-4 flex items-center justify-between">
<div>
<div className="text-xs font-semibold tracking-tight text-white">Игорь</div>
<div className="text-xs text-slate-400">Праздник 12 детей</div>
</div>
<div className="flex text-slate-200">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<blockquote className="text-sm text-slate-200">
            «Удобно, что есть детская зона и отдельная зона для взрослых. В итоге всем было комфортно, и праздник прошел спокойно.»
          </blockquote>
<figcaption className="mt-4 flex items-center justify-between">
<div>
<div className="text-xs font-semibold tracking-tight text-white">Мария</div>
<div className="text-xs text-slate-400">Семейный формат</div>
</div>
<div className="flex text-slate-200">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="faq">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-4">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">FAQ</h2>
<p className="mt-2 text-sm text-slate-300">
            Собрали ответы на самые частые вопросы по аренде, депозиту, времени и условиям.
          </p>
<div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:chat-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Остались вопросы?</div>
<div className="mt-1 text-xs text-slate-400">Напишите — подскажем и пришлем фото/видео лофтов</div>
</div>
</div>
<a className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" href="#contacts">
              Связаться
              <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-8">
<div className="grid gap-3">
<div className="faqItem rounded-2xl bg-white/5 ring-1 ring-white/10">
<button className="faqBtn flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-sm font-semibold tracking-tight text-white">Сколько часов обычно берут?</span>
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon className="faqIcon" height="18" icon="solar:plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faqBody hidden px-5 pb-5 text-sm text-slate-300">
                Чаще всего — 3–4 часа: 30 минут сбор гостей, 60–120 минут программа, время на торт и свободную игру.
              </div>
</div>
<div className="faqItem rounded-2xl bg-white/5 ring-1 ring-white/10">
<button className="faqBtn flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-sm font-semibold tracking-tight text-white">Можно со своей едой и напитками?</span>
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon className="faqIcon" height="18" icon="solar:plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faqBody hidden px-5 pb-5 text-sm text-slate-300">
                Да, в большинстве форматов можно. Уточним ограничения по алкоголю, посуде и уборке в выбранном лофте.
              </div>
</div>
<div className="faqItem rounded-2xl bg-white/5 ring-1 ring-white/10">
<button className="faqBtn flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-sm font-semibold tracking-tight text-white">Есть ли залог/депозит?</span>
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon className="faqIcon" height="18" icon="solar:plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faqBody hidden px-5 pb-5 text-sm text-slate-300">
                Обычно есть возвратный депозит. Размер зависит от лофта и выбранных опций. Все фиксируем в договоре.
              </div>
</div>
<div className="faqItem rounded-2xl bg-white/5 ring-1 ring-white/10">
<button className="faqBtn flex w-full items-center justify-between gap-4 p-5 text-left">
<span className="text-sm font-semibold tracking-tight text-white">Можно ли прийти на просмотр?</span>
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon className="faqIcon" height="18" icon="solar:plus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faqBody hidden px-5 pb-5 text-sm text-slate-300">
                Да. Подберем время, покажем лофт, расскажем по таймингу и по удобной расстановке столов/зон.
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="lead">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Получите 2–3 варианта под ваш праздник</h2>
<p className="mt-2 text-sm text-slate-300">
            Укажете дату и гостей — мы предложим подходящие лофты, стоимость и дополнительные опции.
          </p>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Даты
              </div>
<div className="mt-2 text-xs text-slate-400">Проверим свободные окна</div>
</div>
<div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon height="18" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Бюджет
              </div>
<div className="mt-2 text-xs text-slate-400">Подберем под сумму</div>
</div>
<div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Локация
              </div>
<div className="mt-2 text-xs text-slate-400">Ближе к вам</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<form className="grid gap-3 rounded-2xl bg-slate-950/50 p-5 ring-1 ring-white/10" id="leadForm">
<div className="grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs text-slate-300">Выбранный лофт</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadLoft" placeholder="Если уже выбрали" type="text"/>
</label>
<label className="grid gap-1">
<span className="text-xs text-slate-300">Пакет</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadPackage" placeholder="Аренда / Под ключ" type="text"/>
</label>
</div>
<div className="grid gap-3 sm:grid-cols-3">
<label className="grid gap-1 sm:col-span-1">
<span className="text-xs text-slate-300">Дата</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-white/30" id="leadDate" type="date"/>
</label>
<label className="grid gap-1 sm:col-span-1">
<span className="text-xs text-slate-300">Гостей</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadGuests" min="1" placeholder="Напр. 18" type="number"/>
</label>
<label className="grid gap-1 sm:col-span-1">
<span className="text-xs text-slate-300">Возраст</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadAge" placeholder="Напр. 6 лет" type="text"/>
</label>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs text-slate-300">Имя</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadName" placeholder="Как к вам обращаться" type="text"/>
</label>
<label="grid gap-1"="">
<span className="text-xs text-slate-300">Телефон</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadPhone" placeholder="+7 ___ ___-__-__" type="tel"/>

</label="grid></div>
<label className="grid gap-1">
<span className="text-xs text-slate-300">Комментарий</span>
<input className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-white/30" id="leadNote" placeholder="Напр.: хотим квест + торт, бюджет до ..." type="text"/>
</label>
<div className="grid gap-3 sm:grid-cols-2 sm:items-center">
<button className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" type="submit">
                Отправить запрос
                <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="text-xs text-slate-500">
                Ответим сообщением или звонком. Данные не передаем третьим лицам.
              </div>
</div>
<div className="hidden rounded-xl bg-white/10 px-4 py-3 text-xs text-slate-200 ring-1 ring-white/10" id="leadResult"></div>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="contacts">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Контакты</h2>
<p className="mt-2 text-sm text-slate-300">
            Оставьте заявку или свяжитесь любым удобным способом. Пришлем фото/видео, свободные слоты и точную смету.
          </p>
<div className="mt-6 grid gap-3">
<a className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10" href="tel:+79990000000">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<div>
<div className="text-xs text-slate-400">Телефон</div>
<div className="text-sm font-semibold tracking-tight text-white">+7 (999) 000-00-00</div>
</div>
</div>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<div>
<div className="text-xs text-slate-400">Мессенджеры</div>
<div className="text-sm font-semibold tracking-tight text-white">Написать в WhatsApp / Telegram</div>
</div>
</div>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<div>
<div className="text-xs text-slate-400">Адреса лофтов</div>
<div className="text-sm font-semibold tracking-tight text-white">Уточняются по выбранной площадке</div>
<div className="mt-1 text-xs text-slate-400">Добавьте реальные адреса и схему проезда</div>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-950">
<iconify-icon height="20" icon="solar:shield-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Документы и оплата</div>
<div className="mt-1 text-xs text-slate-400">Договор • чек • предоплата • перенос даты по условиям</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
<div className="flex items-center justify-between border-b border-white/10 p-5">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Карта / схема</div>
<div className="text-xs text-slate-400">Вставьте интерактивную карту или скрин</div>
</div>
<div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10">
<iconify-icon height="18" icon="solar:navigation-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Как добраться
              </div>
</div>
<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5"></div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:parking-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Парковка</div>
<div className="mt-1 text-xs text-slate-400">Подскажем ближайшие варианты</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:sofa-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Комфорт родителей</div>
<div className="mt-1 text-xs text-slate-400">Зона отдыха и столы отдельно</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-950">
<span className="text-sm font-semibold tracking-tight">TB</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">TeddyBoom</div>
<div className="text-xs text-slate-400">Аренда детских лофтов для праздников</div>
</div>
</div>
<div className="flex flex-wrap gap-4 text-xs text-slate-400">
<a className="hover:text-slate-200" href="#faq">FAQ</a>
<a className="hover:text-slate-200" href="#contacts">Контакты</a>
<a className="hover:text-slate-200" href="#">Политика конфиденциальности</a>
</div>
</div>
<div className="mt-6 text-xs text-slate-500">
        © <span id="year"></span> TeddyBoom. Все права защищены.
      </div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="galleryModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative mx-auto flex min-h-dvh max-w-5xl items-center px-4 py-8 sm:px-6 lg:px-8">
<div className="w-full overflow-hidden rounded-3xl bg-slate-950 ring-1 ring-white/10">
<div className="flex items-center justify-between border-b border-white/10 p-5">
<div>
<div className="text-sm font-semibold tracking-tight text-white" id="galleryTitle">Фото</div>
<div className="text-xs text-slate-400">Замените на реальные фото выбранного лофта</div>
</div>
<button aria-label="Закрыть" className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white ring-1 ring-white/10 hover:bg-white/15" id="closeGallery">
<iconify-icon height="22" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
<div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
<div className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10"></div>
<div className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10"></div>
<div className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10"></div>
<div className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10"></div>
<div className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10"></div>
<div className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10"></div>
</div>
<div className="border-t border-white/10 p-5">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90" href="#lead" id="galleryCta">
            Запросить расчет по этому лофту
            <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

    </>
  );
}
