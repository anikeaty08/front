import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
lucide.createIcons({ attrs: { stroke: "#E8BA84", "stroke-width": 1.5 } });
// Edit buttons (purely visual, placeholder handlers)
const editButtons = document.querySelectorAll("[data-edit-section]");
editButtons.forEach(btn => {
btn.addEventListener("click", () => {
const section = btn.getAttribute("data-edit-section");
console.log("Edit section:", section);
});
});
// Toggle Extra Options switch (visual)
const toggle = document.querySelector("[data-extra-toggle]");
if (toggle) {
toggle.addEventListener("click", () => {
const knob = toggle.querySelector("[data-toggle-knob]");
const bg = toggle.querySelector("[data-toggle-bg]");
const isOn = toggle.getAttribute("data-state") === "on";
if (isOn) {
toggle.setAttribute("data-state", "off");
knob.classList.remove("translate-x-5");
knob.classList.add("translate-x-0");
bg.classList.remove("from-[#D1B280]/80","to-[#E8BA84]/80");
bg.classList.add("from-[#3A2D23]","to-[#211711]");
} else {
toggle.setAttribute("data-state", "on");
knob.classList.remove("translate-x-0");
knob.classList.add("translate-x-5");
bg.classList.remove("from-[#3A2D23]","to-[#211711]");
bg.classList.add("from-[#D1B280]/80","to-[#E8BA84]/80");
}
});
}
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full min-h-screen flex flex-col relative overflow-hidden">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-70 mix-blend-screen">
<div className="absolute -top-36 left-4 sm:left-16 w-72 h-72 bg-[radial-gradient(circle,_rgba(232,186,132,0.22),_transparent_62%)] blur-3xl"></div>
<div className="absolute top-1/3 right-[-60px] w-80 h-80 bg-[radial-gradient(circle,_rgba(120,83,52,0.55),_transparent_65%)] blur-3xl"></div>
<div className="absolute bottom-[-40px] left-10 w-80 h-80 bg-[radial-gradient(circle,_rgba(60,40,28,0.7),_transparent_68%)] blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0),_rgba(0,0,0,0.80))]"></div>
</div>

<header className="relative z-10 px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl border border-[rgba(255,214,168,0.28)] bg-[rgba(58,45,35,0.65)] shadow-[0_8px_30px_rgba(0,0,0,0.55)] flex items-center justify-center tracking-[0.16em] text-[11px] uppercase text-[#E8BA84] font-[500]">
          SC
        </div>
<div className="flex flex-col">
<span className="text-[11px] font-[400] tracking-[0.24em] uppercase text-[#9A8A78]">Финальный шаг</span>
<span className="text-[13px] font-[400] text-[#C9B8A4]">Проверьте всё перед отправкой</span>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,168,0.20)] bg-[rgba(38,30,24,0.82)] px-4 py-1.5 text-[12px] font-[400] text-[#C9B8A4] shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-[rgba(58,45,35,0.9)] hover:border-[rgba(255,214,168,0.35)] hover:text-[#ECE4D9] hover:shadow-[0_0_22px_rgba(232,186,132,0.35)] transition-all duration-200 backdrop-blur-xl">
<i className="w-3.5 h-3.5 text-[#E8BA84]" data-lucide="shield-check"></i>
<span>Как мы бережно храним ваши слова</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,168,0.25)] bg-[rgba(22,16,12,0.96)] px-3.5 py-1.5 text-[11px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(39,29,22,0.98)] hover:border-[rgba(255,214,168,0.36)] hover:text-[#ECE4D9] hover:shadow-[0_0_16px_rgba(232,186,132,0.5)] transition-all duration-200">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
<span>Черновик</span>
</button>
</div>
</header>
<main className="relative z-10 flex-1 flex flex-col items-center">
<section className="w-full max-w-6xl px-5 sm:px-8 md:px-10 pt-9 sm:pt-12 pb-20 mx-auto">

<div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
<h1 className="font-['Cormorant_Garamond'] text-[26px] sm:text-[30px] md:text-[34px] leading-[1.25] tracking-tight text-[#ECE4D9] mb-4">
            Финальный обзор перед созданием Слова.
          </h1>
<p className="font-['Inter'] text-[14px] sm:text-[15px] leading-relaxed text-[#C9B8A4] max-w-2xl mx-auto">
            Ещё раз посмотрите на сообщение, адресатов и настройки доставки. Это спокойный момент, чтобы что‑то уточнить или поправить, прежде чем Слово станет частью чьей‑то памяти.
          </p>
</div>

<div className="relative rounded-[26px] border border-[rgba(255,214,168,0.20)] bg-[linear-gradient(to_bottom,rgba(58,45,35,0.76),rgba(22,16,11,0.9))] shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl px-4 sm:px-6 md:px-8 py-7 sm:py-8">

<div aria-hidden="true" className="pointer-events-none absolute inset-x-3 sm:inset-x-4 top-0 h-16 bg-[radial-gradient(ellipse_at_top,rgba(255,214,168,0.26),transparent_65%)] opacity-70"></div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">

<div className="space-y-5 md:space-y-6 lg:col-span-2">

<section className="relative rounded-[24px] border border-[rgba(255,214,168,0.20)] bg-[linear-gradient(to_bottom,rgba(70,53,39,0.78),rgba(30,22,17,0.95))] shadow-[0_14px_40px_rgba(0,0,0,0.65)] px-4 sm:px-5 py-4.5 sm:py-5 overflow-hidden">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,186,132,0.32),transparent_70%)] opacity-50"></div>
<div className="relative flex items-start justify-between gap-4 mb-3.5">
<div className="flex items-center gap-2.5 sm:gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full border border-[rgba(255,214,168,0.36)] bg-[rgba(37,27,21,0.96)] shadow-[0_8px_22px_rgba(0,0,0,0.75)] flex items-center justify-center">
<i className="w-4.5 h-4.5 text-[#ECE4D9] drop-shadow-[0_0_7px_rgba(255,238,210,0.9)]" data-lucide="message-circle"></i>
</div>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,230,196,0.7),transparent_72%)] opacity-70"></div>
</div>
<div>
<h2 className="font-['Cormorant_Garamond'] text-[19px] sm:text-[20px] leading-snug tracking-tight text-[#ECE4D9]">
                        Ваше сообщение
                      </h2>
<p className="font-['Inter'] text-[12px] leading-relaxed text-[#C9B8A4]">
                        Текст или видео, которое получат ваши близкие.
                      </p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,214,168,0.30)] bg-[rgba(30,22,17,0.96)] px-3 py-1 text-[11px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(52,39,30,0.98)] hover:border-[rgba(255,214,168,0.45)] hover:text-[#ECE4D9] hover:shadow-[0_0_16px_rgba(232,186,132,0.5)] transition-all duration-200" data-edit-section="message" type="button">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i>
<span>Редактировать</span>
</button>
</div>

<div className="relative mt-1 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-5">

<div className="flex-1">
<div className="rounded-[18px] border border-[rgba(255,214,168,0.32)] bg-[rgba(31,23,18,0.95)] shadow-[0_10px_28px_rgba(0,0,0,0.7)] px-3.5 sm:px-4 py-3.5 sm:py-4">
<div className="flex items-center justify-between mb-2.5">
<div className="flex items-center gap-2 text-[11px] font-['Inter'] text-[#9A8A78]">
<i className="w-3.5 h-3.5" data-lucide="align-left"></i>
<span>Текст Слова</span>
</div>
<span className="text-[11px] font-['Inter'] text-[#9A8A78]">≈ 4–5 минут вслух</span>
</div>
<p className="font-['Inter'] text-[13px] leading-relaxed text-[#C9B8A4]">
                        Спасибо, что ты рядом со мной во всех сложных и светлых моментах. Мне важно, чтобы у тебя всегда оставалось это Слово — как тихое напоминание о том, как я тебя ценю. Когда будет трудно или одиноко, просто включи его и вспомни, что ты не один(а)…
                      </p>
<button className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,214,168,0.24)] bg-[rgba(40,30,23,0.96)] px-3 py-1.5 text-[11px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(60,45,34,0.98)] hover:border-[rgba(255,214,168,0.4)] hover:text-[#ECE4D9] hover:shadow-[0_0_14px_rgba(232,186,132,0.45)] transition-all duration-200">
<i className="w-3.5 h-3.5" data-lucide="play"></i>
<span>Прослушать, как это будет звучать</span>
</button>
</div>
</div>

<div className="w-full lg:w-64 xl:w-72">
<div className="relative rounded-[20px] border border-[rgba(255,214,168,0.32)] bg-[linear-gradient(to_bottom,rgba(41,31,25,0.95),rgba(16,11,9,0.98))] shadow-[0_12px_34px_rgba(0,0,0,0.78)] overflow-hidden">
<div className="h-36 sm:h-40 bg-[url('https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&amp;fit=crop&amp;w=900&amp;q=80')] bg-cover bg-center opacity-80"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.75))]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-11 h-11 rounded-full border border-[rgba(255,214,168,0.7)] bg-[rgba(0,0,0,0.65)] flex items-center justify-center shadow-[0_0_22px_rgba(232,186,132,0.7)] hover:shadow-[0_0_32px_rgba(232,186,132,0.95)] hover:scale-[1.03] transition-all duration-200">
<i className="w-5 h-5 text-[#E8BA84]" data-lucide="play"></i>
</button>
</div>
<div className="relative px-3.5 py-3 border-t border-[rgba(255,214,168,0.24)] bg-[rgba(22,16,12,0.96)]">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[11px] font-['Inter'] text-[#9A8A78]">Видео‑Слово</span>
<span className="text-[13px] font-['Inter'] text-[#C9B8A4]">02:47 · Тихий голос, мягкий свет</span>
</div>
<button className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[rgba(255,214,168,0.36)] bg-[rgba(34,25,19,0.98)] hover:bg-[rgba(64,48,36,0.98)] hover:border-[rgba(255,214,168,0.55)] hover:shadow-[0_0_16px_rgba(232,186,132,0.6)] transition-all duration-200">
<i className="w-3.5 h-3.5" data-lucide="corner-up-left"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative rounded-[24px] border border-[rgba(255,214,168,0.20)] bg-[linear-gradient(to_bottom,rgba(54,42,34,0.88),rgba(22,17,13,0.97))] shadow-[0_14px_40px_rgba(0,0,0,0.68)] px-4 sm:px-5 py-4.5 sm:py-5 overflow-hidden">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(209,178,128,0.34),transparent_72%)] opacity-45"></div>
<div className="relative flex items-start justify-between gap-4 mb-3">
<div className="flex items-center gap-2.5 sm:gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full border border-[rgba(255,214,168,0.34)] bg-[rgba(37,27,21,0.96)] shadow-[0_8px_22px_rgba(0,0,0,0.75)] flex items-center justify-center">
<i className="w-4.5 h-4.5 text-[#E8BA84] drop-shadow-[0_0_6px_rgba(232,186,132,0.7)]" data-lucide="users"></i>
</div>
</div>
<div>
<h2 className="font-['Cormorant_Garamond'] text-[19px] sm:text-[20px] leading-snug tracking-tight text-[#ECE4D9]">
                        Получатели
                      </h2>
<p className="font-['Inter'] text-[12px] leading-relaxed text-[#C9B8A4]">
                        Люди, которые получат это Слово, и их контакты.
                      </p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,214,168,0.28)] bg-[rgba(30,22,17,0.96)] px-3 py-1 text-[11px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(52,39,30,0.98)] hover:border-[rgba(255,214,168,0.45)] hover:text-[#ECE4D9] hover:shadow-[0_0_16px_rgba(232,186,132,0.5)] transition-all duration-200" data-edit-section="recipients" type="button">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i>
<span>Изменить</span>
</button>
</div>
<div className="relative mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

<div className="flex items-center gap-3 rounded-[18px] border border-[rgba(255,214,168,0.24)] bg-[rgba(33,25,20,0.98)] px-3.5 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.7)]">
<div className="relative">
<img alt="Получатель" className="w-9 h-9 rounded-full object-cover border border-[rgba(255,214,168,0.5)] shadow-[0_0_12px_rgba(0,0,0,0.8)]" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[rgba(22,16,12,0.98)] border border-[rgba(255,214,168,0.9)] flex items-center justify-center shadow-[0_0_10px_rgba(232,186,132,0.8)]">
<i className="w-2.5 h-2.5 text-[#E8BA84]" data-lucide="heart"></i>
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<div className="truncate">
<p className="font-['Inter'] text-[13px] text-[#ECE4D9] truncate">Мама · Ольга</p>
<p className="font-['Inter'] text-[11px] text-[#C9B8A4] truncate">+7 (900) 123‑45‑67</p>
</div>
<span className="ml-2 inline-flex items-center px-2 py-[2px] rounded-full border border-[rgba(255,214,168,0.35)] bg-[rgba(47,34,27,0.95)] text-[10px] font-['Inter'] uppercase tracking-[0.14em] text-[#E8BA84]">
                          Основная
                        </span>
</div>
</div>
</div>

<div className="flex items-center gap-3 rounded-[18px] border border-[rgba(255,214,168,0.20)] bg-[rgba(28,21,17,0.98)] px-3.5 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.7)]">
<div className="relative">
<img alt="Получатель" className="w-9 h-9 rounded-full object-cover border border-[rgba(255,214,168,0.45)] shadow-[0_0_12px_rgba(0,0,0,0.8)]" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[rgba(22,16,12,0.98)] border border-[rgba(255,214,168,0.7)] flex items-center justify-center">
<i className="w-2.5 h-2.5 text-[#D1B280]" data-lucide="sparkles"></i>
</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-['Inter'] text-[13px] text-[#ECE4D9] truncate">Брат · Андрей</p>
<p className="font-['Inter'] text-[11px] text-[#C9B8A4] truncate">andrey@example.com</p>
</div>
</div>

<div className="flex items-center gap-3 rounded-[18px] border border-[rgba(255,214,168,0.18)] bg-[rgba(26,19,15,0.96)] px-3.5 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.65)]">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-[rgba(44,33,26,0.98)] border border-[rgba(255,214,168,0.4)] flex items-center justify-center text-[11px] font-['Inter'] text-[#E8BA84] tracking-[0.14em] uppercase">
                        DR
                      </div>
</div>
<div className="flex-1 min-w-0">
<p className="font-['Inter'] text-[13px] text-[#ECE4D9] truncate">Друг · Максим</p>
<p className="font-['Inter'] text-[11px] text-[#C9B8A4] truncate">Отправка по ссылке</p>
</div>
</div>

<div className="flex items-center gap-2 rounded-[14px] border border-[rgba(255,214,168,0.18)] bg-[rgba(22,16,12,0.96)] px-3 py-2 text-[11px] font-['Inter'] text-[#9A8A78]">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Вы сможете добавить или удалить получателей и после создания Слова — ссылки останутся актуальными.</span>
</div>
</div>
</section>
</div>

<div className="space-y-5 md:space-y-6">

<section className="relative rounded-[24px] border border-[rgba(255,214,168,0.20)] bg-[linear-gradient(to_bottom,rgba(57,44,34,0.9),rgba(19,14,11,0.98))] shadow-[0_14px_40px_rgba(0,0,0,0.7)] px-4 sm:px-5 py-4.5 sm:py-5 overflow-hidden">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,186,132,0.3),transparent_70%)] opacity-45"></div>
<div className="relative flex items-start justify-between gap-3 mb-3.5">
<div className="flex items-center gap-2.5">
<div className="relative">
<div className="w-9 h-9 rounded-full border border-[rgba(255,214,168,0.34)] bg-[rgba(37,27,21,0.96)] shadow-[0_8px_22px_rgba(0,0,0,0.75)] flex items-center justify-center">
<i className="w-4.5 h-4.5 text-[#E8BA84] drop-shadow-[0_0_6px_rgba(232,186,132,0.7)]" data-lucide="calendar-clock"></i>
</div>
</div>
<div>
<h2 className="font-['Cormorant_Garamond'] text-[19px] sm:text-[20px] leading-snug tracking-tight text-[#ECE4D9]">
                        График доставки
                      </h2>
<p className="font-['Inter'] text-[12px] leading-relaxed text-[#C9B8A4]">
                        Когда и как будет открыто ваше Слово.
                      </p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,214,168,0.26)] bg-[rgba(30,22,17,0.96)] px-3 py-1 text-[11px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(52,39,30,0.98)] hover:border-[rgba(255,214,168,0.4)] hover:text-[#ECE4D9] hover:shadow-[0_0_16px_rgba(232,186,132,0.5)] transition-all duration-200" data-edit-section="schedule" type="button">
<i className="w-3.5 h-3.5" data-lucide="edit-3"></i>
<span>Настроить</span>
</button>
</div>
<div className="relative space-y-3.5">
<div className="rounded-[16px] border border-[rgba(255,214,168,0.26)] bg-[rgba(30,23,18,0.98)] px-3.5 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.7)]">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[12px] font-['Inter'] text-[#C9B8A4]">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Основная дата раскрытия</span>
</div>
<span className="text-[11px] font-['Inter'] text-[#9A8A78]">Местное время</span>
</div>
<p className="mt-1.5 font-['Inter'] text-[13px] text-[#ECE4D9]">
                      21 июня 2030 · 10:00
                    </p>
</div>
<div className="rounded-[16px] border border-[rgba(255,214,168,0.20)] bg-[rgba(26,19,15,0.98)] px-3.5 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.65)]">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 text-[12px] font-['Inter'] text-[#C9B8A4]">
<i className="w-4 h-4" data-lucide="unlock"></i>
<span>Условие доступа</span>
</div>
</div>
<p className="mt-1.5 font-['Inter'] text-[13px] text-[#ECE4D9]">
                      По ссылке + уведомление по SMS / e‑mail
                    </p>
</div>
<div className="flex items-start gap-2 rounded-[14px] border border-[rgba(255,214,168,0.18)] bg-[rgba(22,16,12,0.96)] px-3 py-2.5 text-[11px] font-['Inter'] text-[#9A8A78]">
<i className="w-3.5 h-3.5 mt-[2px]" data-lucide="alert-circle"></i>
<span>Если вы измените график позже, все получатели увидят только актуальную версию — без истории изменений.</span>
</div>
</div>
</section>

<section className="relative rounded-[24px] border border-[rgba(255,214,168,0.22)] bg-[linear-gradient(to_bottom,rgba(45,35,29,0.92),rgba(13,10,9,0.98))] shadow-[0_16px_44px_rgba(0,0,0,0.8)] px-4 sm:px-5 py-4.5 sm:py-5 overflow-hidden">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,186,132,0.52),transparent_72%)] opacity-50"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-[-1px] rounded-[24px] border border-[rgba(232,186,132,0.54)] shadow-[0_0_26px_rgba(232,186,132,0.65)] opacity-65"></div>
<div className="relative flex items-start justify-between gap-3 mb-3.5">
<div className="flex items-center gap-2.5">
<div className="relative">
<div className="w-9 h-9 rounded-full border border-[rgba(255,214,168,0.55)] bg-[rgba(37,27,21,0.96)] shadow-[0_10px_26px_rgba(0,0,0,0.85)] flex items-center justify-center">
<i className="w-4.5 h-4.5 text-[#ECE4D9] drop-shadow-[0_0_8px_rgba(255,245,230,0.9)]" data-lucide="sparkles"></i>
</div>
</div>
<div>
<h2 className="font-['Cormorant_Garamond'] text-[19px] sm:text-[20px] leading-snug tracking-tight text-[#ECE4D9]">
                        Дополнительные опции
                      </h2>
<p className="font-['Inter'] text-[12px] leading-relaxed text-[#C9B8A4]">
                        Как именно будет храниться и звучать ваше Слово.
                      </p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,214,168,0.3)] bg-[rgba(30,22,17,0.98)] px-3 py-1 text-[11px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(52,39,30,0.98)] hover:border-[rgba(255,214,168,0.45)] hover:text-[#ECE4D9] hover:shadow-[0_0_16px_rgba(232,186,132,0.6)] transition-all duration-200" data-edit-section="extras" type="button">
<i className="w-3.5 h-3.5" data-lucide="sliders-horizontal"></i>
<span>Настроить</span>
</button>
</div>
<div className="relative space-y-3.5">

<div className="flex items-center justify-between gap-3 rounded-[16px] border border-[rgba(255,214,168,0.3)] bg-[rgba(22,16,12,0.98)] px-3.5 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.75)]">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<p className="font-['Inter'] text-[13px] text-[#ECE4D9]">Тихий режим раскрытия</p>
<span className="inline-flex items-center px-2 py-[2px] rounded-full border border-[rgba(255,214,168,0.45)] bg-[rgba(47,35,27,0.98)] text-[10px] font-['Inter'] uppercase tracking-[0.16em] text-[#E8BA84]">
                          Рекомендуем
                        </span>
</div>
<p className="mt-1 font-['Inter'] text-[11px] text-[#C9B8A4]">
                        Получатели увидят Слово без резких уведомлений, в мягком формате приглашения.
                      </p>
</div>
<button className="relative inline-flex items-center cursor-pointer select-none" data-extra-toggle="" data-state="on" type="button">
<span className="w-11 h-6 rounded-full bg-gradient-to-r from-[#D1B280]/80 to-[#E8BA84]/80 shadow-[0_0_16px_rgba(232,186,132,0.8)] transition-all duration-200 flex items-center px-[3px]" data-toggle-bg="">
<span className="w-5 h-5 rounded-full bg-[#1A1410] shadow-[0_0_10px_rgba(0,0,0,0.8)] transform translate-x-5 transition-transform duration-200" data-toggle-knob=""></span>
</span>
</button>
</div>

<div className="space-y-2.5 rounded-[16px] border border-[rgba(255,214,168,0.22)] bg-[rgba(24,18,14,0.97)] px-3.5 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.7)]">
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 text-[#D1B280]" data-lucide="lock"></i>
<div>
<p className="font-['Inter'] text-[13px] text-[#ECE4D9]">Защита паролем</p>
<p className="font-['Inter'] text-[11px] text-[#C9B8A4]">
                          Доступ к Слову только с кодом, который вы передадите лично.
                        </p>
</div>
</div>
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 text-[#D1B280]" data-lucide="repeat"></i>
<div>
<p className="font-['Inter'] text-[13px] text-[#ECE4D9]">Повторные напоминания</p>
<p className="font-['Inter'] text-[11px] text-[#C9B8A4]">
                          Напомнить получателям о Слове деликатным письмом через 7 и 30 дней.
                        </p>
</div>
</div>
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 text-[#D1B280]" data-lucide="archive"></i>
<div>
<p className="font-['Inter'] text-[13px] text-[#ECE4D9]">Долгосрочное хранение</p>
<p className="font-['Inter'] text-[11px] text-[#C9B8A4]">
                          Слово останется доступным не менее 10 лет, даже если вы перестанете пользоваться сервисом.
                        </p>
</div>
</div>
</div>
<div className="flex items-start gap-2 rounded-[14px] border border-[rgba(255,214,168,0.22)] bg-[rgba(18,13,10,0.98)] px-3 py-2.5 text-[11px] font-['Inter'] text-[#9A8A78]">
<i className="w-3.5 h-3.5 mt-[2px]" data-lucide="shield"></i>
<span>Вы всегда сможете отозвать или переписать Слово — получатели увидят только последнюю версию.</span>
</div>
</div>
</section>
</div>
</div>

<div className="mt-7 sm:mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-[rgba(255,214,168,0.18)] pt-4">
<div className="flex items-center gap-2 text-[12px] font-['Inter'] text-[#9A8A78]">
<div className="w-2.5 h-2.5 rounded-full bg-[#E8BA84] shadow-[0_0_12px_rgba(232,186,132,0.95)]"></div>
<span>После создания вы получите приватную ссылку на Слово и краткую памятку по его хранению.</span>
</div>
<div className="flex items-center gap-2 text-[11px] font-['Inter'] text-[#9A8A78]">
<i className="w-3.5 h-3.5" data-lucide="eye-off"></i>
<span>Никто, кроме вас и выбранных людей, не увидит содержимое без вашего явного разрешения.</span>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 w-full px-5 sm:px-10 pb-6 sm:pb-7">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(255,214,168,0.16)] pt-4">
<div className="flex items-center gap-2 text-[11px] font-['Inter'] text-[#9A8A78]">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Вы всегда сможете вернуться и что‑то изменить — даже после создания Слова.</span>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,214,168,0.22)] bg-[rgba(22,16,12,0.94)] px-4 py-1.75 text-[12px] font-['Inter'] text-[#C9B8A4] hover:bg-[rgba(39,29,22,0.98)] hover:border-[rgba(255,214,168,0.36)] hover:text-[#ECE4D9] hover:shadow-[0_0_18px_rgba(232,186,132,0.5)] transition-all duration-200">
<i className="w-3.5 h-3.5" data-lucide="chevron-left"></i>
<span>Назад</span>
</button>

<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D1B280] to-[#E8BA84] px-5 sm:px-6 py-2.5 text-[13px] font-['Inter'] font-[500] text-[#1A1410] shadow-[0_0_24px_rgba(232,186,132,0.85)] hover:shadow-[0_0_36px_rgba(232,186,132,1)] hover:-translate-y-[1px] transition-all duration-200">
<span>Создать Слово</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</footer>
</div>

    </>
  );
}
