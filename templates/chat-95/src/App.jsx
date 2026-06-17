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



      // -----------------------------------------------------
      // 1. Skrypt obsługujący cennik (istniejący)
      // -----------------------------------------------------
      (function () {
          const section = document.getElementById('pricing');
          if (!section) return;

          const toggles = section.querySelectorAll('.billing-toggle');
          const labels = section.querySelectorAll('.billing-label');
          const priceStacks = section.querySelectorAll('.price-stack');
          const pill = document.getElementById('toggle-pill');

          function setBilling(mode) {
              toggles.forEach((btn) => {
                  const isActive = btn.dataset.billingToggle === mode;

                  if (isActive) {
                      btn.classList.add('text-white');
                      btn.classList.remove('text-zinc-400', 'hover:text-zinc-200');
                      if (pill) {
                          pill.style.width = btn.offsetWidth + 'px';
                          pill.style.transform = `translateX(${btn.offsetLeft - 6}px)`;
                      }
                  } else {
                      btn.classList.remove('text-white');
                      btn.classList.add('text-zinc-400', 'hover:text-zinc-200');
                  }
              });

              const offset = mode === '3msc' ? '0%' : '-50%';
              priceStacks.forEach((stack) => {
                  stack.style.transform = `translateY(${offset})`;
              });

              labels.forEach((el) => {
                  el.textContent = mode === '3msc' ? '3 miesiące' : 'dostęp dożywotni';
              });

              const lifetimeFeatures = section.querySelectorAll('.lifetime-feature');
              if (mode === '3msc') {
                  lifetimeFeatures.forEach(el => {
                      el.classList.add('opacity-30', 'grayscale');
                  });
              } else {
                  lifetimeFeatures.forEach(el => {
                      el.classList.remove('opacity-30', 'grayscale');
                  });
              }
          }

          toggles.forEach((btn) => {
              btn.addEventListener('click', () => {
                  setBilling(btn.dataset.billingToggle);
              });
          });

          setTimeout(() => setBilling('3msc'), 50);
          window.addEventListener('resize', () => {
              const activeMode = section.querySelector('.billing-toggle.text-white')?.dataset.billingToggle || '3msc';
              setBilling(activeMode);
          });
      })();

      // -----------------------------------------------------
      // 2. Skrypt obsługujący przyklejony pasek promocyjny
      // -----------------------------------------------------
      (function() {
          const redirectUrl = "https://eduheros.pl/the-funnelist";
          const cookieName = "promo_expiry_date";

          // Funkcja pobierająca ciasteczko
          function getCookie(name) {
              let value = "; " + document.cookie;
              let parts = value.split("; " + name + "=");
              if (parts.length === 2) return parts.pop().split(";").shift();
          }

          // Funkcja ustawiająca datę końcową: jutro, 23:59:59
          function getDeadline() {
              let savedDate = getCookie(cookieName);
              if (savedDate) return new Date(parseInt(savedDate));

              let now = new Date();
              let deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 23, 59, 59);

              // Zapisz na 2 dni w ciasteczku
              document.cookie = cookieName + "=" + deadline.getTime() + ";path=/;max-age=" + (60*60*48);
              return deadline;
          }

          const deadline = getDeadline();

          // Wyświetlenie daty w tekście (format DD.MM.YYYY)
          const day = ("0" + deadline.getDate()).slice(-2);
          const month = ("0" + (deadline.getMonth() + 1)).slice(-2);
          document.getElementById('target-date-display').innerText = day + "." + month + "." + deadline.getFullYear() + ", 23:59";

          function updateTimer() {
              const now = new Date().getTime();
              const t = deadline - now;

              if (t <= 0) {
                  window.location.href = redirectUrl;
                  return;
              }

              const days = Math.floor(t / (1000 * 60 * 60 * 24));
              const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
              const secs = Math.floor((t % (1000 * 60)) / 1000);

              document.getElementById("days").innerHTML = ("0" + days).slice(-2);
              document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
              document.getElementById("minutes").innerHTML = ("0" + mins).slice(-2);
              document.getElementById("seconds").innerHTML = ("0" + secs).slice(-2);
          }

          setInterval(updateTimer, 1000);
          updateTimer();
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
      

<section className="w-full text-white relative pt-16 md:pt-24 -mt-16 md:-mt-24 pb-16 md:pb-24 -mb-8 md:-mb-16" id="pricing">

<div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 pointer-events-none -z-10 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 opacity-70 blur-[3px]" style={{backgroundImage: 'url(\'https://i.postimg.cc/3ryVtfSC/Pricing-Page-Backdrop-2.jpg\')'}}></div>
<div className="absolute inset-0 bg-zinc-950/80"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
</div>
<div className="max-w-[1000px] mx-auto w-full">

<div className="text-center mb-16 md:mb-20">
<p className="text-sm font-medium tracking-[0.25em] uppercase text-emerald-500 mb-4">
            #Cennik
          </p>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-50 mb-6">
            Wybierz dostęp idealny dla siebie
          </h2>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Zgarnij dostęp do 7 szkoleń 90% taniej i ciesz się dożywotnim
            dostępem przesuwając suwak w prawo
          </p>
</div>

<div className="flex justify-center mb-16">
<div className="relative inline-flex items-center rounded-full bg-zinc-900 border border-zinc-800/80 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">

<div className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_1px_rgba(248,250,252,0.1)] transition-all duration-500 ease-out z-0" id="toggle-pill"></div>
<button className="billing-toggle relative z-10 rounded-full px-8 py-3 text-white font-medium transition-colors duration-300 text-base" data-billing-toggle="3msc" type="button">
              3 Msc
            </button>
<button className="billing-toggle relative z-10 rounded-full px-8 py-3 text-zinc-400 hover:text-zinc-200 transition-colors duration-300 font-medium flex items-center gap-2.5 text-base" data-billing-toggle="lifetime" type="button">
              Na Zawsze
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 uppercase tracking-wide">
                Zaoszczędź
              </span>
</button>
</div>
</div>

<div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto items-stretch">

<div className="rounded-[24px] bg-zinc-900 border border-zinc-800/80 shadow-2xl shadow-black/50 px-8 py-10 md:p-12 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
<div>
<h3 className="text-2xl font-normal tracking-tight mb-3 text-zinc-100">
                Pakiet w cenie standardowej
              </h3>
<p className="text-base text-zinc-400 mb-8 font-light leading-relaxed">
                Cena za pakiet jeśli kupujesz te products osobno z poza oferty
                limitowanej
              </p>
<div className="mb-8 rounded-xl overflow-hidden border border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative group bg-zinc-950/50">
<img alt="Materiały szkoleniowe" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100" src="https://i.postimg.cc/Fs09BHWj/Corrected-Brand-Graphic.jpg"/>
</div>
<div className="mb-10">
<div className="flex items-end gap-2">
<div className="relative h-28 overflow-hidden min-w-[140px]">
<div className="price-stack flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" data-price-stack="starter" style={{transform: 'translateY(0%)'}}>
<div className="h-28 flex items-end pb-1 leading-none text-5xl tracking-tight font-medium text-zinc-50 whitespace-nowrap">
                        2779 zł
                      </div>
<div className="h-28 flex items-end pb-1 leading-none text-5xl tracking-tight font-medium text-zinc-50 whitespace-nowrap">
                        5567 zł
                      </div>
</div>
</div>
<span className="text-base text-zinc-500 font-light pb-1.5 shrink-0">
                    /
                    <span className="billing-label text-zinc-400">3 miesiące</span>
</span>
</div>
</div>
</div>
<div className="space-y-10">
<button className="w-full rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 px-6 py-4 text-base font-normal text-zinc-100 border border-zinc-700/50">
                Kup w normalnej cenie
              </button>
<ul className="space-y-3 text-sm md:text-base text-zinc-300 font-light">
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy Automation Revenue Machine 2h materiałów
                    wartość 297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy AI Ads Factory - Automatyzacje + 2h
                    materiałów wartość 597 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy Traffic Domination System - 2h
                    materiałów wartość 397 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy The Scalling Secret Lab - 2h materiałów
                    wartość 297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy The Conversion OS - 2h materiałów 197
                    PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy AI Web Architect - 3h materiałów 697 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Case Study 207k - 1h materiałów wartość 297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Dostęp do zamkniętej społeczności na whatsapp - wartość 497
                    PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Konsultacja 1:1 z Tomaszem Guzikiem - wartość 1297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Szablony Email i Sms z moich kampanii do skopiowania wartość
                    697 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Dostęp do aktualizacji wartość 297 PLN
                  </span>
</li>
</ul>
</div>
</div>

<div className="relative rounded-[24px] bg-zinc-950 bg-gradient-to-b from-emerald-900/20 via-emerald-950/10 to-transparent border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.15)] px-8 py-10 md:p-12 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] transform-gpu isolate">

<div className="absolute inset-0 z-[-1] rounded-[24px] pointer-events-none">

<div className="lightning-glow-wrapper">
<div className="lightning-glow-layer"></div>
<div className="lightning-glow-layer-2"></div>
</div>

<svg aria-hidden="true" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)', willChange: 'transform'}}>
<rect className="lightning-path" fill="none" height="100%" pathlength="100" rx="24" ry="24" stroke="#00FF88" strokeWidth="2" width="100%" x="0" y="0"></rect>
<rect className="lightning-path-2" fill="none" height="100%" pathlength="100" rx="24" ry="24" stroke="#00FF88" strokeWidth="1.5" width="100%" x="0" y="0"></rect>
</svg>

<div className="absolute inset-0 opacity-40 mix-blend-screen rounded-[24px]" style={{backgroundImage: 'radial-gradient(circle at 0 0, rgba(16, 185, 129, 0.15), transparent 55%), radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.15), transparent 55%)', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)'}}></div>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl font-normal tracking-tight text-zinc-50">
                  Pakiet Limitowany
                </h3>
<span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs tracking-[0.15em] uppercase text-emerald-400 font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  Polecany
                </span>
</div>
<p className="text-base text-zinc-300 mb-8 font-light leading-relaxed">
                Tylko teraz przed upływem czasu z zegara
              </p>
<div className="mb-8 rounded-xl overflow-hidden border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative group bg-zinc-950/50">
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
<img alt="Materiały szkoleniowe VIP" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100" src="https://i.postimg.cc/Fs09BHWj/Corrected-Brand-Graphic.jpg"/>
</div>
<div className="mb-10">
<div className="flex items-end gap-2">
<div className="relative h-28 overflow-hidden shrink-0">
<div className="price-stack flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" data-price-stack="pro" style={{transform: 'translateY(0%)'}}>
<div className="h-28 flex flex-col justify-end pb-1 pr-1">
<div className="flex items-center gap-3 mb-2">
<span className="text-lg md:text-xl text-zinc-500 line-through decoration-emerald-500/50 decoration-2 font-medium leading-none">
                            2779 zł
                          </span>
<span className="text-[11px] md:text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 uppercase tracking-wider leading-none">
                            Taniej o 89%
                          </span>
</div>
<div className="flex items-baseline">
<span className="text-6xl md:text-7xl tracking-tight font-semibold text-white leading-none drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            297 zł
                          </span>
</div>
</div>
<div className="h-28 flex flex-col justify-end pb-1 pr-1">
<div className="flex items-center gap-3 mb-2">
<span className="text-lg md:text-xl text-zinc-500 line-through decoration-emerald-500/50 decoration-2 font-medium leading-none">
                            5567 zł
                          </span>
<span className="text-[11px] md:text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 uppercase tracking-wider leading-none">
                            Taniej o 87%
                          </span>
</div>
<div className="flex items-baseline">
<span className="text-6xl md:text-7xl tracking-tight font-semibold text-white leading-none drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            697 zł
                          </span>
</div>
</div>
</div>
</div>
<span className="text-sm md:text-base text-zinc-400 font-light pb-2 shrink-0">
                    /
                    <span className="billing-label text-zinc-400">3 miesiące</span>
</span>
</div>
</div>
</div>
<div className="relative z-10 space-y-10">
<button className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors duration-300 px-6 py-4 text-lg font-medium text-white shadow-[0_0_30px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2 group">
                Odbierz w symbolicznej cenie
                <iconify-icon className="text-[20px] text-white transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<ul className="space-y-3 text-sm md:text-base text-zinc-200 font-light">
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy Automation Revenue Machine 2h materiałów
                    wartość 297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy AI Ads Factory - Automatyzacje + 2h
                    materiałów wartość 597 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy Traffic Domination System - 2h
                    materiałów wartość 397 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy The Scalling Secret Lab - 2h materiałów
                    wartość 297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy The Conversion OS - 2h materiałów 197
                    PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Program Szkoleniowy AI Web Architect - 3h materiałów 697 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Case Study 207k - 1h materiałów wartość 297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Dostęp do zamkniętej społeczności na whatsapp - wartość 497
                    PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Konsultacja 1:1 z Tomaszem Guzikiem - wartość 1297 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Szablony Email i Sms z moich kampanii do skopiowania wartość
                    697 PLN
                  </span>
</li>
<li className="flex items-start gap-3.5 opacity-30 grayscale transition-all duration-300 lifetime-feature">
<iconify-icon className="text-[20px] text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed">
                    Dostęp do aktualizacji wartość 297 PLN
                  </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-0 md:bottom-8 left-0 md:left-1/2 w-full md:w-max md:max-w-[95vw] md:-translate-x-1/2 bg-zinc-950/95 backdrop-blur-xl border-t md:border border-zinc-800/80 md:rounded-[24px] text-zinc-50 z-[9999] py-5 md:py-5 md:px-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex justify-center items-center" id="sticky-promo-bar">
<div className="w-[90%] md:w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-12">
<div className="text-sm md:text-base font-normal text-center md:text-left text-zinc-300">
          Nie przegap! Oferta kończy się
          <br className="hidden md:block"/>
<span className="font-medium text-emerald-400" id="target-date-display">
            ...
          </span>
          !!!
        </div>
<div className="flex gap-4 md:gap-8 text-center">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight leading-none text-zinc-50" id="days">
              00
            </span>
<span className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-medium">
              dni
            </span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight leading-none text-zinc-50" id="hours">
              00
            </span>
<span className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-medium">
              godzin
            </span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight leading-none text-zinc-50" id="minutes">
              00
            </span>
<span className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-medium">
              minut
            </span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight leading-none text-zinc-50" id="seconds">
              00
            </span>
<span className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-medium">
              sekund
            </span>
</div>
</div>
<a className="w-full md:w-auto bg-[#76ff8a] text-zinc-950 hover:bg-[#5ce671] px-8 py-3.5 md:py-3 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] text-center text-sm shadow-[0_0_20px_rgba(118,255,138,0.2)]" href="https://eduheros.pl/the-funnelist">
          KUP TERAZ!
        </a>
</div>
</div>


    </>
  );
}
