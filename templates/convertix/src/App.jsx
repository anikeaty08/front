import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                    (function () {
                  const leadsInput = document.getElementById("calc-leads");
                  const convInput = document.getElementById("calc-conv");
                  const checkInput = document.getElementById("calc-check");

                  const leadsValue = document.getElementById("calc-leads-value");
                  const convValue = document.getElementById("calc-conv-value");
                  const checkValue = document.getElementById("calc-check-value");

                  const leadsFill = document.getElementById("calc-leads-fill");
                  const convFill = document.getElementById("calc-conv-fill");
                  const checkFill = document.getElementById("calc-check-fill");

                  const extraCustomersEl = document.getElementById("calc-extra-customers");
                  const extraRevenueEl = document.getElementById("calc-extra-revenue");
                  const leadsSummaryEl = document.getElementById("calc-leads-summary");

                  if (!leadsInput || !convInput || !checkInput) return;

                  function formatNumber(num) {
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                  }

                  function updateFill(input, fillEl) {
                    const min = Number(input.min);
                    const max = Number(input.max);
                    const val = Number(input.value);
                    const percent = ((val - min) / (max - min)) * 100;
                    if (fillEl) fillEl.style.width = percent + "%";
                  }

                  function recalc() {
                    const leads = Number(leadsInput.value || 0);
                    const conv = Number(convInput.value || 0);
                    const check = Number(checkInput.value || 0);

                    if (leadsValue) leadsValue.textContent = leads.toString();
                    if (convValue) convValue.textContent = conv.toString();
                    if (checkValue) checkValue.textContent = formatNumber(check);
                    if (leadsSummaryEl) leadsSummaryEl.textContent = leads + " лидов";

                    updateFill(leadsInput, leadsFill);
                    updateFill(convInput, convFill);
                    updateFill(checkInput, checkFill);

                    const currentRate = conv / 100;
                    const improvedRate = currentRate * 1.3;
                    const extraCustomers = Math.round(leads * (improvedRate - currentRate));
                    const extraRevenue = Math.round(extraCustomers * check);

                    if (extraCustomersEl) extraCustomersEl.textContent = "+" + (extraCustomers > 0 ? extraCustomers : 0);
                    if (extraRevenueEl) extraRevenueEl.textContent = "+" + formatNumber(extraRevenue > 0 ? extraRevenue : 0) + " ₽";
                  }

                  ["input", "change"].forEach(evt => {
                    leadsInput.addEventListener(evt, recalc);
                    convInput.addEventListener(evt, recalc);
                    checkInput.addEventListener(evt, recalc);
                  });

                  recalc();
                })();
              


      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) {
          lucide.createIcons();

          const logoIcon = lucide.createElement("sparkles", { size: 18, strokeWidth: 1.5 });
          const heroPlayIcon = lucide.createElement("play-circle", { size: 16, strokeWidth: 1.5 });
          const userIcon = lucide.createElement("user", { size: 14, strokeWidth: 1.5 });
          const botIcon = lucide.createElement("bot", { size: 14, strokeWidth: 1.5 });
          const funnelIcon = lucide.createElement("funnel", { size: 16, strokeWidth: 1.5 });
          const msgsIcon = lucide.createElement("messages-square", { size: 16, strokeWidth: 1.5 });
          const abIcon = lucide.createElement("split", { size: 16, strokeWidth: 1.5 });

          const logoH = document.getElementById("convertix-logo");
          const logoF = document.getElementById("footer-logo");
          const heroPlay = document.getElementById("hero-play");
          const msgUser = document.getElementById("msg-user");
          const msgAi = document.getElementById("msg-ai");
          const icFunnel = document.getElementById("ic-funnel");
          const icMessages = document.getElementById("ic-messages");
          const icAb = document.getElementById("ic-ab");

          if (logoH) logoH.replaceWith(logoIcon);
          if (logoF) logoF.replaceWith(lucide.createElement("sparkles", { size: 18, strokeWidth: 1.5 }));
          if (heroPlay) heroPlay.replaceWith(heroPlayIcon);
          if (msgUser) msgUser.replaceWith(userIcon);
          if (msgAi) msgAi.replaceWith(botIcon);
          if (icFunnel) icFunnel.replaceWith(funnelIcon);
          if (icMessages) icMessages.replaceWith(msgsIcon);
          if (icAb) icAb.replaceWith(abIcon);
        }

        const canvas = document.getElementById("conversionChart");
        if (canvas && window.Chart) {
          new Chart(canvas.getContext("2d"), {
            type: "line",
            data: {
              labels: ["Подписка", "Прогрев", "TripWire", "Основной продукт"],
              datasets: [
                {
                  label: "До convertix",
                  data: [100, 45, 8, 3],
                  borderColor: "rgba(148,163,184,0.8)",
                  backgroundColor: "rgba(148,163,184,0.2)",
                  borderWidth: 2,
                  tension: 0.35,
                  pointRadius: 3,
                  pointBackgroundColor: "rgba(148,163,184,1)"
                },
                {
                  label: "С convertix",
                  data: [100, 60, 13, 5],
                  borderColor: "rgba(52,211,153,1)",
                  backgroundColor: "rgba(52,211,153,0.16)",
                  borderWidth: 2,
                  tension: 0.35,
                  pointRadius: 3,
                  pointBackgroundColor: "rgba(52,211,153,1)"
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: {
                    color: "#e5e7eb",
                    font: { family: "Inter", weight: 500, size: 11 }
                  }
                },
                tooltip: {
                  backgroundColor: "rgba(15,23,42,0.95)",
                  titleColor: "#fff",
                  bodyColor: "#e
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.04]">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="64" id="grid" patternunits="userSpaceOnUse" width="64">
<path d="M64 0H0v64" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black opacity-80"></div>
</div>

<header className="z-10 [animation:fadeSlideIn_0.8s_ease-out_0s_both] animate-on-scroll animate relative fixed">
<nav className="sm:px-6 lg:px-8 flex max-w-7xl mr-auto ml-auto pt-5 pr-4 pb-5 pl-4 items-center justify-between">
<a className="flex items-center gap-3" href="#top">
<span className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-full backdrop-blur border-gradient" style={{borderRadius: '9999px'}}>
<svg className="lucide lucide-alarm-smoke w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="flashlight-on-outline" fill="none" height="18" id="convertix-logo" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" fill="#ffffff"></path>
<path clip-rule="evenodd" d="M5.955 7.25h12.09c.432 0 .83 0 1.152.043c.355.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.297c0 .325.002.677-.133 1.003c-.136.327-.385.575-.616.805l-.057.056l-3.242 3.243c-.622.621-.775.793-.857.991s-.095.428-.095 1.307V22a.75.75 0 0 1-1.5 0v-4.464c0-.284 0-.544.013-.786H9.737c.013.242.013.502.013.786V22a.75.75 0 0 1-1.5 0v-4.343c0-.879-.013-1.11-.095-1.307c-.082-.198-.236-.37-.857-.991l-3.243-3.243L4 12.06c-.231-.23-.48-.478-.616-.805c-.135-.326-.134-.678-.133-1.003v-.297c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04c.308-.31.684-.422 1.04-.47c.322-.043.72-.043 1.152-.043m9.6 7.134c-.311.31-.582.581-.793.866H9.237c-.21-.285-.481-.555-.793-.867L5.81 11.75h12.38zm3.695-4.134V10c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.037-.167l-.003-.006l-.002-.004l-.001-.003l-.003-.001l-.004-.002l-.006-.003a.7.7 0 0 0-.167-.037c-.21-.028-.505-.03-.997-.03H6c-.493 0-.787.002-.998.03a.7.7 0 0 0-.176.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.029.21-.03.504-.03.997v.25z" fill="#ffffff" fill-rule="evenodd"></path>
<path d="M6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zm12 0a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M12.75 19a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" fill="#ffffff"></path>
</svg>
</span>
<span className="text-base sm:text-lg font-semibold tracking-tight">
            convertix
          </span>
</a>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-all hover:-translate-y-0.5" href="https://ai.alpa.studio" style={{borderRadius: '9999px'}} target="_blank">
            Подробнее о платформе
          </a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all" href="https://t.me/alpastudio" style={{borderRadius: '9999px'}}>
            Получить доступ
          </a>
</div>
</nav>
</header>
<main className="z-10 relative" id="top">

<section className="sm:px-6 lg:px-8 md:pb-24 lg:pt-20 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-16 pl-4">

<div className="mx-auto w-fit mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="inline-flex gap-2 border-gradient text-xs text-neutral-200 bg-white/5 rounded-full pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" style={{borderRadius: '9999px'}}>
<span className="inline-flex items-center justify-center lg:text-[#ffffff] bg-gradient-to-br from-[#299fd9]/50 via-[#152033] to-[#ffffff]/50 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" style={{width: '20px', marginRight: '10px'}}/>
              Telegram
            </span>
<span className="font-medium">Заточен под TripWire онлайн‑школ</span>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate text-center bg-slate-50/0">
<h1 className="leading-tight sm:text-5xl md:text-6xl sm:tracking-tighter lg:text-5xl text-3xl tracking-tight max-w-4xl mr-auto ml-auto" style={{}}>
            Дожимайте
            <span className="text-emerald-400 tracking-tighter" style={{}}>
              до 37%
            </span>
            заявок на TripWire
            <span className="text-emerald-300 tracking-tighter" style={{}}>
              без менеджеров
            </span>
            в Telegram
          </h1>
<p className="sm:text-base md:text-lg text-sm text-neutral-300 max-w-2xl mt-5 mr-auto ml-auto" style={{whiteSpace: 'pre-line'}}>Умный AI робот подключится к реальному Telegram аккаунту, проквалифицирует клиента, сформирует индивидуальные кейсы, закроет возражения и продаст ему TripWire <span className="text-neutral-100">(24/7, Время ответа 40 сек, от 1 до 10 тыс. диалогов)</span></p>

<div className="flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all" href="#cta" style={{borderRadius: '9999px'}}>
              Запросить тест на вашей воронке
            </a>
<div className="inline-block group relative">
<a className="inline-flex gap-2 border-gradient hover:text-white transition-all hover:-translate-y-0.5 text-sm font-medium text-white/80 bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-xl items-center" href="https://t.me/alpastudio" style={{borderRadius: '9999px'}}>
<svg className="" fill="none" height="16" id="hero-play" stroke="currentColor" viewbox="0 0 24 24" width="16"></svg>
                Смотреть демо
              </a>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(52,211,153,.6), rgba(52,211,153,.3) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs sm:text-sm text-neutral-300">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="">
                Первые гипотезы по росту конверсии — через 24 часа
              </span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<span className="">Встраивается в CRM, мессенджеры и лендинги</span>
</div>
</div>
</div>

<div className="md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-14 gap-x-6 gap-y-6 items-stretch justify-center">

<div className="lg:col-span-4 lg:col-start-2 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate flex items-center justify-center" id="demo">
<div className="border-gradient sm:p-3 sm:max-w-xs bg-neutral-900/60 w-full max-w-xs rounded-3xl pt-2 pr-2 pb-2 pl-2 backdrop-blur" style={{borderRadius: '18px'}}>
<div className="overflow-hidden bg-black/60 border border-white/10 rounded-2xl">
<div className="flex border-white/10 border-b pt-2 pr-3 pb-2 pl-3 relative items-center justify-between" style={{direction: 'rtl'}}>
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-400" style={{direction: 'ltr'}}>
<span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<span className="flex items-center gap-2 text-[0.7rem] text-neutral-500" style={{direction: 'ltr'}}>
                    Видео‑демо работы агента
                  </span>
</div>
<div className="relative w-full pt-[200%] bg-black">
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="w-full h-full border-0 absolute top-0 right-0 bottom-0 left-0" src="https://kinescope.io/f4581C4eEmTkwsMYaAQche?autoplay=1" title="Демонстрация работы AI‑агента convertix"></iframe>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 lg:col-start-6 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate flex">
<div className="border-gradient sm:p-6 flex flex-col bg-gradient-to-br from-white/5 via-white/0 to-emerald-500/10 w-full h-full rounded-3xl pt-5 pr-5 pb-5 pl-5 justify-between" style={{borderRadius: '24px'}}>
<div className="">
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex-1 min-w-0">
<p className="text-[0.7rem] text-neutral-400 uppercase tracking-tight">
                      AI‑агент convertix
                    </p>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight mt-1">
                      Как он работает
                    </h3>
</div>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 text-emerald-300 px-3 py-1 text-[0.7rem] border-gradient" style={{borderRadius: '9999px'}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Online
                    </span>
<span className="text-[0.65rem] text-neutral-500 hidden sm:block">
                      Обновляет гипотезы в реальном времени
                    </span>
</div>
</div>
<div className="flex-1 space-y-4 text-sm sm:text-base text-neutral-200">

<div className="border-gradient bg-white/5 rounded-2xl p-3 sm:p-4">
<div className="flex items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="inline-flex items-center justify-center text-[0.7rem] text-neutral-200 bg-black/40 w-6 h-6 border-white/10 border rounded-full" style={{borderRadius: '9999px'}}>
                          1
                        </span>
<span className="">
                          Мы обучаем агента на ваших процессах
                        </span>
</div>
</div>
<p className="text-xs sm:text-sm text-neutral-200">
                      Загружаем диалоги менеджеров, скрипты, сайты и информацию
                      о курсе. На этой базе агент понимает вашу экспертизу,
                      возражения и типичные сценарии продаж.
                    </p>
</div>

<div className="border-gradient bg-white/5 rounded-2xl p-3 sm:p-4">
<div className="flex items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-black/40 border border-white/10 text-[0.7rem] text-neutral-200" style={{borderRadius: '9999px'}}>
                          2
                        </span>
<span className="">Тестируем агента на 20% аудитории</span>
</div>
</div>
<p className="text-xs sm:text-sm text-neutral-200">
                      Подключаем агента к части трафика и действующей воронке.
                      Смотрим, как он ведёт диалоги, сравниваем конверсии и
                      донастраиваем ответы до нужного качества.
                    </p>
</div>

<div className="border-gradient bg-emerald-500/5 border border-emerald-500/30 rounded-2xl p-3 sm:p-4">
<div className="flex items-center justify-between gap-2 mb-2">
<div className="flex items-center gap-2 text-xs text-emerald-200">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-[0.7rem] text-emerald-200" style={{borderRadius: '9999px'}}>
                          3
                        </span>
<span className="">Запускаем полноценную AI‑воронку</span>
</div>
</div>
<p className="text-xs sm:text-sm text-neutral-50">
                      Агент подключается к реальному Telegram‑аккаунту и пишет
                      от имени менеджера. Он инициирует исходящие диалоги,
                      аккуратно уточняет,
                      <span className="text-emerald-300">
                        почему пользователь не купил TripWire
                      </span>
                      , и предлагает релевантные сценарии дожима.
                    </p>
</div>

<div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
<div className="border-gradient rounded-xl bg-white/5 p-3 flex flex-col justify-between">
<div className="">
<p className="text-neutral-300">Ожидаемый рост</p>
<p className="text-xl font-semibold text-emerald-400 tracking-tight mt-1">
                          +12-38%
                        </p>
</div>
<p className="text-[0.7rem] text-neutral-400 mt-1" style={{}}>
                        из лида в покупку (умеет мониторить покупки)
                      </p>
</div>
<div className="border-gradient rounded-xl bg-white/5 p-3 flex flex-col justify-between">
<div className="">
<p className="text-neutral-300">Время запуска</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-sky-400">
                          &lt; 7 дней
                        </p>
</div>
<p className="mt-1 text-[0.7rem] text-neutral-400">
                        от аудита до первых A/B‑тестов
                      </p>
</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-2 items-center">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[0.7rem] text-neutral-300 border-gradient" style={{borderRadius: '9999px'}}>
                  Тон: неагрессивные, экспертные продажи
                </span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[0.7rem] text-neutral-300 border-gradient" style={{borderRadius: '9999px'}}>
                  Работает с RU / EN сегментом
                </span>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-2 text-[0.75rem] sm:text-xs font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all ml-auto" href="#cta" style={{borderRadius: '9999px'}}>
                  Записаться на демо
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 md:pb-24 lg:px-8 lg:pb-0 max-w-7xl mr-auto ml-auto pr-4 pb-16 pl-4" id="benefits">
<div className="border-gradient sm:p-8 lg:p-10 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{background: 'linear-gradient(225deg,rgba(15,23,42,0.7) 0%,rgba(15,23,42,0.9) 45%,rgba(6,95,70,0.3) 100%)', borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 gap-x-4 gap-y-4">
<div className="">
<p className="uppercase text-xs text-emerald-300 tracking-tight">
                Полный функционал агента
              </p>
<h2 className="sm:text-4xl md:text-3xl text-2xl tracking-tighter mt-2">
                Полный функционал convertix
              </h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-md">
              AI-агент работает 24/7, самостоятельно общается с клиентами в
              Telegram и доводит их до оплаты TripWire без участия менеджеров.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-sky-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
<span>Знает клиента</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Находит имя и контакты в Telegram
              </h3>
<p className="text-sm text-neutral-300">
                Агент автоматически определяет username клиента, запоминает его
                имя и всю историю общения для персонализированного подхода к
                каждому лиду.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-emerald-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<span className="">Анализирует этап сделки</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Изучает диалог и подставляет нужный скрипт
              </h3>
<p className="text-sm text-neutral-300">
                Система понимает, на каком этапе воронки находится клиент, и
                подбирает подходящий продающий сценарий в зависимости от его
                действий и возражений.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-purple-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
<span>Гибкая подача</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Печатает естественно, как живой человек
              </h3>
<p className="text-sm text-neutral-300">
                Агент адаптирует длину сообщений, делает паузы между репликами и
                разбивает длинные предложения на несколько коротких для
                естественного общения.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-amber-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span>Сегментация офферов</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Разделяет предложения на несколько касаний
              </h3>
<p className="text-sm text-neutral-300">
                Вместо длинного сообщения со всеми условиями агент дозированно
                предлагает информацию, постепенно разогревая интерес и снимая
                возражения клиента.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-pink-200">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
<span className="">База знаний</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Хранит всю информацию о вашем продукте
              </h3>
<p className="text-sm text-neutral-300">
                Агент использует внутреннюю базу с описанием курсов, программой,
                ценами, преимуществами и ответами на частые вопросы для точных
                консультаций.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 20.66-1-1.73"></path>
<path d="M11 10.27 7 3.34"></path>
<path d="m20.66 17-1.73-1"></path>
<path d="m3.34 7 1.73 1"></path>
<path d="M14 12h8"></path>
<path d="M2 12h2"></path>
<path d="m20.66 7-1.73 1"></path>
<path d="m3.34 17 1.73-1"></path>
<path d="m17 3.34-1 1.73"></path>
<path d="m11 13.73-4 6.93"></path>
</svg>
<span>Инициатива</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Сам начинает диалог с клиентом
              </h3>
<p className="text-sm text-neutral-300">
                Агент первым пишет лиду после подписки или действия на сайте,
                приветствует его и запускает персонализированную цепочку для
                дожима до оплаты TripWire.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-orange-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span>Реальный аккаунт</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Пишет от имени вашего менеджера
              </h3>
<p className="text-sm text-neutral-300">
                Подключается к настоящему Telegram-аккаунту вашей компании,
                поэтому клиенты видят знакомое имя и не подозревают, что
                общаются с AI-агентом.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-indigo-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12h-4V8"></path>
</svg>
<span className="">Контроль оплаты</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Проверяет факт покупки продукта
              </h3>
<p className="text-sm text-neutral-300">
                Агент интегрирован с платёжной системой и CRM, отслеживает
                статус оплаты клодарит за покупку или предлагает помощь при
                проблемах.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-emerald-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Естественная речь</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Общается без эмодзи и канцелярита
              </h3>
<p className="text-sm text-neutral-300">
                Тексты агента звучат как сообщения от реального человека: без
                лишних смайликов, официоза и роботизированных фраз, только живая
                экспертная коммуникация.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-blue-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
</svg>
<span className="">До 4 попыток</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Возвращается в диалог несколько раз
              </h3>
<p className="text-sm text-neutral-300">
                Если клиент не ответил или не купил с первого раза, агент
                возвращается с новыми аргументами и предложениями до 4 раз,
                чтобы максимально дожать лид.
              </p>
</article>

<article className="border-gradient rounded-2xl bg-white/5 p-5 sm:p-6 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-amber-200">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
</svg>
<span>Гибкость</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">
                Можно перебивать и корректировать
              </h3>
<p className="text-sm text-neutral-300">
                Агента легко остановить, изменить сценарий или передать диалог
                живому менеджеру в любой момент — система остаётся полностью под
                вашим контролем.
              </p>
</article>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4" id="how">
<div className="border-gradient sm:p-8 lg:p-10 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{background: 'linear-gradient(225deg,rgba(15,23,42,0.7) 0%,rgba(15,23,42,0.9) 45%,rgba(6,95,70,0.3) 100%)', borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<p className="uppercase text-xs text-emerald-300 tracking-tight">
                Как работает convertix
              </p>
<h2 className="sm:text-4xl md:text-3xl text-2xl tracking-tighter mt-2">
                Пошаговый запуск AI‑агента в вашей воронке
              </h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-md">
              Мы берём на себя аудит, разработку и интеграцию агента в ваши
              текущие процессы, а вы фокусируетесь на продукте и маркетинге.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
<div className="border-gradient rounded-2xl bg-white/5 p-5 flex flex-col gap-2">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-400/10 border border-emerald-400/40 text-xs text-emerald-300 font-semibold tracking-tight">
                01
              </span>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mt-1">
                Анализ вашей воронки и экономики
              </h3>
<p className="text-sm text-neutral-300">
                Разбираем текущие цифры по TripWire, структуру офферов, скрипты
                и CRM, фиксируем целевые KPI по конверсии и марже.
              </p>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-5 flex flex-col gap-2">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-sky-400/10 border border-sky-400/40 text-xs text-sky-300 font-semibold tracking-tight">
                02
              </span>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mt-1">
                Сбор данных и обучение агента
              </h3>
<p className="text-sm text-neutral-300">
                Загружаем диалоги, знания о продуктах и возражениях. Настраиваем
                тон коммуникации под бренд и аудиторию школы.
              </p>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-5 flex flex-col gap-2">
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-400/10 border border-purple-400/40 text-xs text-purple-300 font-semibold tracking-tight">
                03
              </span>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mt-1">
                Пилот и масштабирование
              </h3>
<p className="text-sm text-neutral-300">
                Запускаем тест на части трафика, сравниваем результаты с
                контрольной группой и постепенно масштабируем на всю воронку.
              </p>
</div>
</div>
</div>
</section>


<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4">
<div className="border-gradient sm:p-10 lg:p-14 bg-neutral-950/80 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur" style={{borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
<div className="">
<p className="text-sm text-emerald-300 uppercase tracking-tight font-semibold">
                Почему отделу продаж нужен помощник
              </p>
<h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter">
                Проблемы работы с отделом продаж
              </h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed">
              Ежедневно современный бизнес сталкивается с повторяющимися
              сложностями в продажах. convertix не заменяет людей, а снимает
              рутину и помогает отделу продаж системно повышать конверсию.
            </p>
</div>

<div className="border-gradient sm:p-8 bg-gradient-to-br from-white/5 via-white/0 to-emerald-500/5 rounded-3xl mb-10 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30">
<svg className="text-red-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-neutral-200">
                    Без convertix
                  </h3>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-full bg-neutral-900 rounded-full h-3 overflow-hidden">
<div className="bg-gradient-to-r from-red-500 to-red-400 h-full rounded-full" style={{width: '10%'}}></div>
</div>
<span className="min-w-[60px] text-sm font-semibold text-red-400 text-right">
                      10%
                    </span>
</div>
<p className="text-xs text-neutral-400 pl-1">
                    Конверсия лид → покупка
                  </p>
<div className="mt-6 space-y-2 text-sm text-neutral-400">
<div className="flex items-start gap-2">
<svg className="text-red-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="15" x2="9" y1="9" y2="15"></line>
<line x1="9" x2="15" y1="9" y2="15"></line>
</svg>
<span className="">Потеря до 90% заявок</span>
</div>
<div className="flex items-start gap-2">
<svg className="text-red-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="15" x2="9" y1="9" y2="15"></line>
<line x1="9" x2="15" y1="9" y2="15"></line>
</svg>
<span>Ручная обработка лидов</span>
</div>
<div className="flex items-start gap-2">
<svg className="text-red-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="15" x2="9" y1="9" y2="15"></line>
<line x1="9" x2="15" y1="9" y2="15"></line>
</svg>
<span>Высокие затраты на менеджеров</span>
</div>
</div>
</div>
</div>
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400/30">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-emerald-300">
                    С convertix
                  </h3>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-full bg-neutral-900 rounded-full h-3 overflow-hidden">
<div className="bg-gradient-to-r from-emerald-400 to-emerald-300 h-full rounded-full" style={{width: '48%'}}></div>
</div>
<span className="text-sm font-semibold text-emerald-400 min-w-[60px] text-right">
                      48%
                    </span>
</div>
<p className="text-xs text-emerald-200/60 pl-1">
                    Конверсия лид → покупка
                  </p>
<div className="mt-6 space-y-2 text-sm text-neutral-200">
<div className="flex items-start gap-2">
<svg className="text-emerald-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="16 12 12 8 8 12"></polyline>
<line x1="12" x2="12" y1="16" y2="8"></line>
</svg>
<span className="">
<span className="text-emerald-300 font-semibold">
                          +38% рост
                        </span>
                        конверсии
                      </span>
</div>
<div className="flex items-start gap-2">
<svg className="text-emerald-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="16 12 12 8 8 12"></polyline>
<line className="" x1="12" x2="12" y1="16" y2="8"></line>
</svg>
<span className="">Автоматическая обработка 24/7</span>
</div>
<div className="flex items-start gap-2">
<svg className="text-emerald-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<polyline points="16 12 12 8 8 12"></polyline>
<line x1="12" x2="12" y1="16" y2="8"></line>
</svg>
<span className="">Снижение затрат на персонал</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 text-center">
<p className="text-sm text-emerald-300 font-semibold">
                Результат: до
                <span className="text-2xl text-emerald-400">+38%</span>
                дополнительных оплат TripWire
              </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 text-sm">
<div className="border-gradient rounded-2xl bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-all">
<div className="flex items-start justify-between">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/40 flex-shrink-0">
<svg className="text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-400/10 border border-amber-400/40 text-xs text-amber-300 font-semibold tracking-tight">
                  01
                </span>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Менеджеры теряют или недообрабатывают заявки
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed">
                  Человеческий фактор приводит к потере до 30% потенциальных
                  клиентов из-за забывчивости и перегруженности
                </p>
</div>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-all">
<div className="flex items-start justify-between">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-purple-400/10 border border-purple-400/40 flex-shrink-0">
<svg className="text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 20a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="10" r="4"></circle>
<path d="M20 7h-3"></path>
</svg>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-400/10 border border-purple-400/40 text-xs text-purple-300 font-semibold tracking-tight">
                  02
                </span>
</div>
<div className="">
<h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Сотрудникам стрессово работать с эмоциональными запросами
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed">
                  Эмоциональное выгорание снижает качество общения и мотивацию
                  команды продаж
                </p>
</div>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-all">
<div className="flex items-start justify-between">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-400/10 border border-blue-400/40 flex-shrink-0">
<svg className="text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="1" y2="23"></line>
<path className="" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-400/10 border border-blue-400/40 text-xs text-blue-300 font-semibold tracking-tight">
                  03
                </span>
</div>
<div className="">
<h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Менеджеры выбирают большие чеки, а маленькие игнорят
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed">
                  Фокус на крупных сделках ведёт к упущенной прибыли от
                  массового сегмента
                </p>
</div>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-all">
<div className="flex items-start justify-between">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-pink-400/10 border border-pink-400/40 flex-shrink-0">
<svg className="text-pink-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-pink-400/10 border border-pink-400/40 text-xs text-pink-300 font-semibold tracking-tight">
                  04
                </span>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Людей нужно постоянно мотивировать и контролировать
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed">
                  Затраты времени руководителя на управление командой вместо
                  стратегии роста
                </p>
</div>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-all">
<div className="flex items-start justify-between">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-400/10 border border-orange-400/40 flex-shrink-0">
<svg className="text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="22" x="1" y="4"></rect>
<line x1="1" x2="23" y1="10" y2="10"></line>
</svg>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-400/10 border border-orange-400/40 text-xs text-orange-300 font-semibold tracking-tight">
                  05
                </span>
</div>
<div className="">
<h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Затраты на з/п, найм и обучение менеджеров высокие
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed">
                  Постоянные расходы на персонал съедают до 40% маржинальности
                  отдела продаж
                </p>
</div>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-6 flex flex-col gap-4 hover:bg-white/10 transition-all">
<div className="flex items-start justify-between">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/40 flex-shrink-0">
<svg className="text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
</svg>
</span>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-cyan-400/10 border border-cyan-400/40 text-xs text-cyan-300 font-semibold tracking-tight">
                  06
                </span>
</div>
<div className="">
<h3 className="text-base font-semibold text-neutral-100 mb-2">
                  Сотрудники выгорают и увольняются каждые полгода
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed">
                  Высокая текучка кадров требует постоянного найма и
                  переобучения новых менеджеров
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-start">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<p className="uppercase text-xs text-emerald-300 tracking-tight">
      Для кого
    </p>
<h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl tracking-tighter">
      Онлайн‑школы, которые выросли из «ручных» гипотез
    </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl">
      Если у вас уже есть трафик, базовая воронка и команда
      маркетинга/продаж, convertix помогает выжать больше из текущих
      ресурсов за счёт системной работы нейросети.
    </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
<div className="border-gradient rounded-2xl bg-white/5 p-4">
<p className="text-neutral-200 font-semibold tracking-tight">
          +20–60% к выручке TripWire
        </p>
<p className="mt-2 text-xs text-neutral-400">
          типичный коридор роста после 2–3 итераций тестов агента.
        </p>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-4">
<p className="text-neutral-200 font-semibold tracking-tight">
          1–2 недели
        </p>
<p className="mt-2 text-xs text-neutral-400">
          от подключения до первых стабильных улучшений конверсии.
        </p>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-4">
<p className="text-neutral-200 font-semibold tracking-tight">
          Без найма новых менеджеров
        </p>
<p className="mt-2 text-xs text-neutral-400">
          агент масштабирует коммуникации и тесты, не увеличивая
          нагрузку на команду.
        </p>
</div>
<div className="border-gradient rounded-2xl bg-white/5 p-4">
<p className="text-neutral-200 font-semibold tracking-tight">
          Прозрачная экономика
        </p>
<p className="mt-2 text-xs text-neutral-400">
          каждая гипотеза привязана к KPI по LTV, ROMI и допустимому
          CPA.
        </p>
</div>
</div>
</div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate h-full">
<div className="border-gradient sm:p-8 bg-gradient-to-br from-white/5 via-neutral-900 to-emerald-500/20 h-full rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur flex flex-col justify-between" style={{borderRadius: '24px'}}>
<div className="">
<p className="text-xs text-neutral-400 uppercase tracking-tight mb-4">
          Кейс (пример конфигурации)
        </p>
<p className="sm:text-lg leading-snug text-base text-neutral-50" style={{whiteSpace: 'pre-line'}}>«Я не знаю, почему мы раньше не додумались дожимать лидов на трипваер через AI.

Меня очень впечатлил функционалал вот этого нашего агента. Я думала, это будет реализовано в виде бота, а оказалось, что он может к реальному аккаунту подключаться. Огонь!».</p>
<p className="mt-4 text-xs text-neutral-400">
          *Числа приведены как ориентир по результатам проектов Alpa
          Studio, конкретные результаты зависят от ниши и исходной
          воронки.
        </p>
<div className="mt-5 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-white/10 border border-white/10 overflow-hidden flex-shrink-0" style={{borderRadius: '9999px'}}>
<img alt="Аватар клиента" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91e1cb69-5a8f-4cea-a178-6193e07eafb9_320w.jpg"/>
</div>
<div className="min-w-0">
<p className="truncate text-sm font-medium text-neutral-100 tracking-tight">Полина Пылёва</p><p className="truncate text-xs text-neutral-400" style={{}}>Школа Полины Пылёвой, воронка Троян</p>
</div>
</div>
</div>
<div className="mt-6 border-gradient rounded-2xl bg-black/40 p-4 grid grid-cols-3 gap-3 text-center text-xs">
<div className="">
<p className="text-neutral-400">TripWire конверсия</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-emerald-400">
            +62%
          </p>
</div>
<div className="">
<p className="text-neutral-400">ROMI</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-sky-400">
            x1.8
          </p>
</div>
<div className="">
<p className="text-neutral-400">Тестов в месяц</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-amber-400">
            20+
          </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20" id="cta">
<div className="border-gradient sm:p-8 lg:p-10 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-slate-900 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{borderRadius: '24px'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 items-center">

<div className="">
<p className="text-xs text-emerald-100 uppercase tracking-tight">
                Онлайн‑калькулятор TripWire
              </p>
<h2 className="sm:text-4xl md:text-5xl text-2xl text-white tracking-tighter mt-2" style={{}}>
                Посчитайте, сколько вы могли бы заработать на TripWire с помощью
                convertix
              </h2>
<p className="mt-4 text-sm sm:text-base text-emerald-50/80 max-w-xl">
                Двигайте ползунки: мы покажем, сколько денег вы можете получить
                при росте конверсии на
                <span className="font-semibold text-emerald-200">+30%</span>
                без увеличения трафика.
              </p>
<div className="mt-6 flex flex-wrap gap-3 text-xs text-emerald-50/80"></div>
</div>

<div className="border-gradient sm:p-6 bg-black/60 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="space-y-5 text-sm">

<div className="">
<div className="flex items-center justify-between mb-1">
<label className="block text-xs font-bold text-neutral-300">
                      Сколько у вас лидов в месяц
                    </label>
<span className="text-xs text-emerald-300 font-medium">
<span className="" id="calc-leads-value">500</span>
                      лидов
                    </span>
</div>
<div className="pt-4 pb-2 relative">
<div className="absolute inset-x-0 translate-y-2 h-1.5 rounded-full bg-neutral-900 overflow-hidden">
<div className="bg-gradient-to-r from-emerald-400 to-emerald-300 h-full" id="calc-leads-fill" style={{width: '0%'}}></div>
</div>
<input className="appearance-none cursor-pointer z-10 bg-transparent w-full relative" id="calc-leads" max="1500" min="500" step="50" style={{height: '20px', margin: '0px', padding: '0px'}} type="range" value="500"/>
<style>
                      #calc-leads::-webkit-slider-thumb,
                      #calc-conv::-webkit-slider-thumb,
                      #calc-check::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 18px;
                        height: 18px;
                        border-radius: 9999px;
                        background: linear-gradient(135deg, #6ee7b7, #34d399);
                        border: 2px solid rgba(15, 23, 42, 1);
                        box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.35);
                        cursor: pointer;
                        margin-top: 0;
                      }

                      #calc-leads::-moz-range-thumb,
                      #calc-conv::-moz-range-thumb,
                      #calc-check::-moz-range-thumb {
                        width: 18px;
                        height: 18px;
                        border-radius: 9999px;
                        background: linear-gradient(135deg, #6ee7b7, #34d399);
                        border: 2px solid rgba(15, 23, 42, 1);
                        box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.35);
                        cursor: pointer;
                      }

                      #calc-leads:focus-visible,
                      #calc-conv:focus-visible,
                      #calc-check:focus-visible {
                        outline: none;
                      }
                    </style>
<div className="mt-4 flex justify-between text-[0.65rem] text-neutral-400">
<span className="">500</span>
<span className="">750</span>
<span className="">1000</span>
<span className="">1250</span>
<span className="">1500</span>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-1">
<label className="block text-xs font-bold text-neutral-300">
                      Текущая конверсия в оплату TripWire
                    </label>
<span className="text-xs text-emerald-300 font-medium">
<span className="" id="calc-conv-value">10</span>
                      %
                    </span>
</div>
<div className="pt-4 pb-2 relative">
<div className="absolute inset-x-0 translate-y-2 h-1.5 rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300" id="calc-conv-fill" style={{width: '11.1111%'}}></div>
</div>
<input className="appearance-none cursor-pointer bg-transparent w-full z-10 relative" id="calc-conv" max="50" min="5" step="5" style={{height: '20px', margin: '0px', padding: '0px'}} type="range" value="10"/>
<div className="mt-4 flex justify-between text-[0.65rem] text-neutral-400">
<span className="">5%</span>
<span className="">15%</span>
<span className="">25%</span>
<span className="">35%</span>
<span className="">45%</span>
<span className="">50%</span>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-1">
<label className="block text-xs font-bold text-neutral-300">
                      Средний чек TripWire
                    </label>
<span className="text-xs text-emerald-300 font-medium">
<span id="calc-check-value">5 000</span>
                      ₽
                    </span>
</div>
<div className="relative pt-4 pb-2">
<div className="absolute inset-x-0 translate-y-2 h-1.5 rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300" id="calc-check-fill" style={{width: '16.6667%'}}></div>
</div>
<input className="w-full appearance-none bg-transparent cursor-pointer relative z-10" id="calc-check" max="15000" min="3000" step="500" style={{height: '20px', margin: '0px', padding: '0px'}} type="range" value="5000"/>
<div className="mt-4 flex justify-between text-[0.65rem] text-neutral-400">
<span className="">3 000</span>
<span className="">6 000</span>
<span className="">9 000</span>
<span>12 000</span>
<span>15 000</span>
</div>
</div>
</div>

<div className="mt-4 border-gradient rounded-2xl bg-neutral-900/80 p-4 space-y-3">
<div className="flex items-center justify-between gap-3">
<div className="">
<p className="text-[0.75rem] text-neutral-400 uppercase tracking-tight">
                        Рост конверсии
                      </p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-emerald-400">
                        +30%
                      </p>
</div>
<div className="text-right">
<p className="text-[0.75rem] text-neutral-400 uppercase tracking-tight">
                        Доп. оплачивших TripWire
                      </p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-white" id="calc-extra-customers">+15</p>
</div>
</div>
<div className="h-px bg-white/10"></div>
<div className="flex items-center justify-between gap-3">
<div className="">
<p className="text-[0.75rem] text-neutral-400 uppercase tracking-tight">
                        Лидов в месяц
                      </p>
<p className="text-lg font-medium tracking-tight text-neutral-100" id="calc-leads-summary">500 лидов</p>
</div>
<div className="text-right">
<p className="text-[0.75rem] text-neutral-400 uppercase tracking-tight">
                        Дополнительно заработаете
                      </p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-emerald-300" id="calc-extra-revenue">+75 000 ₽</p>
</div>
</div>
</div>
<p className="text-[0.65rem] text-neutral-500">
                  Расчёт примерный и не учитывает возвраты и апсейлы. На созвоне
                  мы уточним цифры под вашу воронку.
                </p>
<div className="mt-4">
<a className="flex items-center justify-center gap-2 text-[0.75rem] sm:text-xs hover:-translate-y-0.5 transition-all font-semibold text-neutral-900 bg-white w-full h-10 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)]" href="https://t.me/alpastudio" style={{borderRadius: '9999px'}}>
                    Записаться на демо
                  </a>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24" id="faq">
<div className="border-gradient sm:p-8 lg:p-10 bg-neutral-950/70 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
<div className="">
<p className="text-xs text-emerald-300 uppercase tracking-tight">
                FAQ
              </p>
<h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl tracking-tighter">
                Частые вопросы о convertix
              </h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-md">
              Если хотите глубже посмотреть под капот — на сайте Alpa Studio
              расписаны подходы к построению AI‑систем, безопасности и экономике
              проектов.
            </p>
</div>
<div className="space-y-4 text-sm">
<details className="border-gradient bg-white/5 rounded-2xl pt-3 pr-4 pb-3 pl-4">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Это готовый SaaS или кастомное внедрение под школу?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                convertix — это AI‑агент как код, который внедряется в вашу
                систему: CRM, платёжку, аналитика, способы коммуникации с лидом.
                Надстройка и продуктовая логика подбираются и донастраиваются
                индивидуально, чтобы агент работал именно с вашей моделью продаж
                и экономикой.
              </p>
</details>
<details className="border-gradient rounded-2xl bg-white/5 px-4 py-3">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Какие данные вы видите и как они защищены?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                На пилоте мы подключаемся только к необходимым сущностям:
                сделки, оплаты, статусы, базовые события. Доступы ограничены и
                регламентируются договором. Архитектура строится так, чтобы
                чувствительные данные не уходили за рамки согласованных
                контуров.
              </p>
</details>
<details className="border-gradient rounded-2xl bg-white/5 px-4 py-3">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Сколько стоит запуск и сопровождение агента?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                Стоимость зависит от сложности воронки и требуемой глубины
                интеграций. На сайте Alpa Studio описаны общие вилки по
                проектам. На созвоне мы оценим объём работ и предложим формат
                пилота с чёткими метриками окупаемости.
              </p>
</details>
<details className="border-gradient rounded-2xl bg-white/5 px-4 py-3">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Под какие стеки и языки кода вы можете внедрять агента?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                Мы работаем с популярными веб‑стеками (TypeScript/Node.js,
                Python, PHP, Go) и распространёнными CRM. На этапе
                предварительного аудита проверяем совместимость, после чего
                предлагаем архитектурный скетч внедрения convertix в ваш стек.
              </p>
</details>
<details className="border-gradient rounded-2xl bg-white/5 px-4 py-3">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Сколько ресурсов моей команды потребует внедрение?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                Со стороны школы обычно вовлечены владелец или продюсер,
                маркетолог и технический специалист/интегратор на 2–4 часа в
                неделю. Основную работу по архитектуре, настройке и тестам мы
                берём на себя, чтобы команда не выпадала из операционки.
              </p>
</details>
<details className="border-gradient rounded-2xl bg-white/5 px-4 py-3">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Как быстро я увижу финансовый эффект по TripWire?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                Первые гипотезы по росту конверсии появляются в течение 1–2
                недель после старта пилота. Осязаемый прирост выручки вы как
                владелец обычно видите после 2–3 итераций A/B‑тестов, когда
                агент стабильно обрабатывает значимую часть трафика.
              </p>
</details>
<details className="border-gradient rounded-2xl bg-white/5 px-4 py-3">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-neutral-100">
                  Что будет с отделом продаж — не останутся ли люди без работы?
                </span>
<span className="text-neutral-400 text-xs">развернуть</span>
</summary>
<p className="mt-3 text-neutral-300 text-xs sm:text-sm">
                convertix снимает рутину с менеджеров: первичные касания, дожим
                TripWire, ответы на часто задаваемые вопросы. Люди переключаются
                на более маржинальные задачи — работу с основными продуктами,
                апселлами и VIP‑клиентами. Владелец получает более предсказуемую
                воронку без роста FOT.
              </p>
</details>
</div>
</div>
</section>

<footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<div className="border-gradient sm:p-8 lg:p-10 bg-neutral-950/80 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{borderRadius: '24px'}}>
<div className="text-center text-sm text-neutral-400">
            made with ❤️ by
            <a className="text-white hover:text-emerald-400 transition-colors font-medium" href="https://alpa.studio" target="_blank">
              alpa
            </a>
</div>
</div>
</footer>
</main>


    </>
  );
}
