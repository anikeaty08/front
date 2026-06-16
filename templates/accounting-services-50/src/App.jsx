import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
{
"@context": "https://schema.org",
"@type": "FinancialService",
"name": "Finami / F.N.M. s.r.o.",
"description": "Najväčší výber poistných a finančných produktov. Hypotéka, poistenie a investície — všetko na jednom mieste.",
"url": "https://www.finami.sk"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (() => {
      const toggle = document.getElementById('mobile-menu-toggle');
      const menu = document.getElementById('mobile-menu');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');

      if (!toggle || !menu || toggle.dataset.bound === 'true') return;
      toggle.dataset.bound = 'true';

      function setMenuState(isOpen) {
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        if (isOpen) {
          menu.classList.remove('max-h-0', 'opacity-0');
          menu.classList.add('max-h-[420px]', 'opacity-100');
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
        } else {
          menu.classList.add('max-h-0', 'opacity-0');
          menu.classList.remove('max-h-[420px]', 'opacity-100');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      }

      let isOpen = false;
      setMenuState(false);

      toggle.addEventListener('click', () => {
        isOpen = !isOpen;
        setMenuState(isOpen);
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
          isOpen = false;
          setMenuState(false);
        }
      });
    })();
  


    (function() {
          const checkChart = setInterval(() => {
              if (typeof Chart !== 'undefined') {
                  clearInterval(checkChart);
                  renderChart();
              } else if (!document.getElementById('chartjs-lib')) {
                  const script = document.createElement('script');
                  script.id = 'chartjs-lib';
                  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
                  document.head.appendChild(script);
              }
          }, 50);

          function renderChart() {
              const canvas = document.getElementById('chart-starlight-aura-emmxvdx2om6gbbtg');
              if (!canvas) return;
              const ctx = canvas.getContext('2d');
              
              const gradient = ctx.createLinearGradient(0, 0, 0, 64);
              gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
              gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

              new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ['1', '2', '3', '4', '5', '6', '7'],
                      datasets: [{
                          data: [4200, 5800, 5100, 8400, 7900, 10500, 12450],
                          borderColor: '#10b981',
                          borderWidth: 2,
                          tension: 0.4,
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          fill: true,
                          backgroundColor: gradient
                      }]
                  },
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      animation: { duration: 1500, easing: 'easeOutQuart' },
                      layout: { padding: { top: 5, bottom: 0, left: 0, right: 0 } },
                      plugins: { legend: { display: false }, tooltip: { enabled: false } },
                      scales: {
                          x: { display: false, grid: { display: false } },
                          y: { display: false, min: 3000, grid: { display: false } }
                      },
                      interaction: { intersect: false, mode: 'index' }
                  }
              });
          }
      })();
  


    (function() {
      const canvas = document.getElementById('canvas-aura');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      let width, height, time = 0;

      function resize() {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }

      window.addEventListener('resize', resize);
      resize();

      function animate() {
        time += 0.002;
        ctx.fillStyle = '#FAFAFA';
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'multiply';

        const numFolds = 15;
        for (let i = 0; i < numFolds; i++) {
          const normalizedX = i / numFolds;
          const xPos = (normalizedX * width) + Math.sin(time * 2 + i) * (width * 0.1);
          const foldWidth = (width / numFolds) * 4;
          const waveIntensity = (Math.sin(time * 2 + i * 0.5) + 1) * 0.5;

          const grad = ctx.createLinearGradient(0, 0, 0, height);
          grad.addColorStop(0, `rgba(250, 250, 250, 0)`);
          grad.addColorStop(0.5, `rgba(64, 128, 255, ${waveIntensity * 0.08})`);
          grad.addColorStop(1, `rgba(64, 128, 255, ${waveIntensity * 0.15})`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(xPos - foldWidth, 0);
          ctx.bezierCurveTo(xPos, height * 0.3, xPos - foldWidth, height * 0.7, xPos + foldWidth, height);
          ctx.lineTo(xPos + foldWidth * 2, height);
          ctx.bezierCurveTo(xPos + foldWidth, height * 0.7, xPos + foldWidth * 2, height * 0.3, xPos + foldWidth, 0);
          ctx.fill();
        }

        ctx.globalCompositeOperation = 'source-over';
        requestAnimationFrame(animate);
      }

      animate();
    })();
  


        document.addEventListener('DOMContentLoaded', () => {
          const pProp = document.getElementById('calc-property');
          const pDur = document.getElementById('calc-duration');
          const pInc = document.getElementById('calc-income');
          
          const valProp = document.getElementById('val-property');
          const valOwn = document.getElementById('val-own');
          const valDur = document.getElementById('val-duration');
          const valInc = document.getElementById('val-income');
          
          const resPay = document.getElementById('res-payment');
          const resMax = document.getElementById('res-max');
          const resLoan = document.getElementById('res-loan');
          
          function format(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          }

          function calculate() {
            const property = parseFloat(pProp.value);
            const duration = parseFloat(pDur.value);
            const income = parseFloat(pInc.value);
            
            const ownFunds = property * 0.2;
            const loanAmount = property - ownFunds;
            
            // Interest rate assumption: 4.0%
            const r = 0.04 / 12;
            const n = duration * 12;
            
            const payment = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            
            // DTI (Debt to Income) limit in SK is 8x yearly income max usually
            const maxMortgage = income * 12 * 8;
            
            valProp.innerText = format(property);
            valOwn.innerText = format(ownFunds);
            valDur.innerText = duration;
            valInc.innerText = format(income);
            
            resPay.innerText = format(Math.round(payment));
            resLoan.innerText = format(loanAmount);
            resMax.innerText = format(maxMortgage);
            
            if (loanAmount > maxMortgage) {
              resLoan.classList.add('text-red-500');
            } else {
              resLoan.classList.remove('text-red-500');
            }
          }
          
          pProp.addEventListener('input', calculate);
          pDur.addEventListener('input', calculate);
          pInc.addEventListener('input', calculate);
          
          calculate();
        });
      


        (function () {
          const script = document.currentScript;
          const section = script ? script.closest('section') : null;
          if (!section) return;

          const counters = section.querySelectorAll('.stat-counter');
          let hasAnimated = false;

          function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

          function animateCounter(el, duration) {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const startTime = performance.now();
            function tick(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = easeOutQuart(progress);
              el.textContent = Math.floor(target * eased);
              if (progress < 1) { requestAnimationFrame(tick); } else { el.textContent = target; }
            }
            requestAnimationFrame(tick);
          }

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach((el, index) => { animateCounter(el, 1800 + index * 120); });
                observer.unobserve(section);
              }
            });
          }, { threshold: 0.28 });

          observer.observe(section);
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 border-b border-slate-200/60 top-0 right-0 left-0 bg-white/80 backdrop-blur-2xl transition-all duration-300" id="site-nav">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative flex h-20 items-center justify-between">

<div className="flex items-center shrink-0 z-20">
<a className="flex items-center group transition-transform duration-300 active:scale-95 text-2xl font-semibold tracking-tight text-slate-900" href="#">
          Finami<span className="text-[#4080FF]">.</span>
</a>
</div>

<div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center z-10">
<div className="flex items-center p-1 border border-slate-200/80 bg-white/80 backdrop-blur-md rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200" href="#sluzby">
            Služby
          </a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200" href="#kalkulacka">
            Kalkulačka
          </a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200" href="#referencie">
            Referencie
          </a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200" href="#kontakt">
            Kontakt
          </a>
</div>
</div>

<div className="flex gap-3 sm:gap-5 items-center ml-auto z-20">
<a className="group inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#4080FF] hover:shadow-[0_8px_20px_-6px_rgba(64,128,255,0.4)] hover:-translate-y-0.5 sm:px-6 text-sm font-medium text-white bg-slate-900 h-11 rounded-full pr-5 pl-5" href="#kontakt">
<span className="hidden sm:inline">Konzultácia</span>
<span className="sm:hidden">Začať</span>
<iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button aria-expanded="false" aria-label="Toggle menu" className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors active:scale-95" data-bound="true" id="mobile-menu-toggle" type="button">
<iconify-icon className="text-xl block" icon="solar:hamburger-menu-linear" id="menu-icon-open"></iconify-icon>
<iconify-icon className="text-xl hidden" icon="solar:close-circle-linear" id="menu-icon-close"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-out" id="mobile-menu">
<div className="pb-5 pt-2">
<div className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_12px_30px_-12px_rgba(15,23,42,0.08)] p-3 flex flex-col gap-1">
<a className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors" href="#sluzby">Služby</a>
<a className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors" href="#kalkulacka">Kalkulačka</a>
<a className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors" href="#referencie">Referencie</a>
<a className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors" href="#kontakt">Kontakt</a>
</div>
</div>
</div>
</div>

</nav>

<header className="lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAFAFA] pt-24 pb-16 relative">
<canvas className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60" height="808" id="canvas-aura" width="1512"></canvas>
<div className="grid lg:grid-cols-2 max-w-7xl z-10 mx-auto px-6 relative gap-12 items-center">

<div className="max-w-2xl">
<h1 className="lg:text-[4rem] leading-[1.05] text-5xl font-medium text-slate-900 tracking-tight mb-8">
        Hypotéka, poistenie a
        <br/>
<span className="text-[#4080FF]">investície na jednom mieste</span>
</h1>
<p className="text-xl sm:text-2xl text-slate-500 mb-10 leading-relaxed max-w-xl font-light tracking-tight">
        Bezplatné poradenstvo od certifikovaných finančných poradcov. Bez záväzkov, bez podpisu.
      </p>
<div className="flex flex-col sm:flex-row gap-5 sm:items-center items-start mb-6">
<a aria-label="Action Button" className="group outline-none cursor-pointer transition-transform duration-200 active:scale-95 bg-transparent border-0 p-0 relative" href="#kontakt">
<div className="absolute inset-0 -m-3 rounded-full bg-[#4080FF]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"></div>
<div className="absolute inset-0 -m-6 rounded-full bg-[#4080FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"></div>
<div className="relative z-10 flex items-center justify-center p-2 rounded-full transition-all duration-300 group-hover:shadow-[#4080FF]/20" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 100%);
                   box-shadow: inset 0 4px 6px rgba(255, 255, 255, 0.95), inset 0 -5px 8px rgba(0, 0, 0, 0.08), 0 12px 24px -6px rgba(0, 0, 0, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4);
                   backdrop-filter: blur(12px);">
<div className="flex overflow-hidden transition-all duration-300 rounded-full px-8 py-3.5 relative items-center justify-center bg-[#4080FF]" style="background: linear-gradient(180deg,#5992FF 0%,#4080FF 100%);
                     box-shadow: inset 0 2px 4px rgba(255,255,255,0.45), inset 0 -3px 6px rgba(0,0,0,0.35), 0 6px 14px rgba(64,128,255,0.35);">
<span className="text-white text-sm font-medium tracking-wide drop-shadow-md relative z-20 pointer-events-none">
                Získať bezplatnú konzultáciu
              </span>
</div>
</div>
</a>
<a className="relative group outline-none cursor-pointer px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium tracking-wide hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow active:scale-95" href="#kalkulacka">
          Hypotekárna kalkulačka
          <iconify-icon className="text-lg text-slate-400 group-hover:text-slate-700 transition-all" icon="solar:calculator-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#10b981] text-base" icon="solar:check-circle-linear"></iconify-icon> Zadarmo</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#10b981] text-base" icon="solar:shield-check-linear"></iconify-icon> Bez záväzkov</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#10b981] text-base" icon="solar:buildings-linear"></iconify-icon> 15+ bankových partnerov</div>
</div>
</div>

<div className="hidden lg:block z-10 w-full h-[600px] relative">
<style>
        @keyframes dashSlideIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardSlideIn {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      </style>
<div className="-translate-y-1/2 lg:left-16 w-[860px] h-[540px] absolute top-1/2 left-8">

<div className="absolute inset-0 bg-gradient-to-tr from-[#4080FF]/20 via-transparent to-[#10b981]/10 blur-3xl rounded-full z-0 pointer-events-none -translate-x-10 translate-y-10">
</div>

<div className="flex flex-col overflow-hidden z-10 transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.14)] bg-gradient-to-b from-white to-slate-50 w-[740px] h-[540px] border-slate-200/60 border rounded-[2rem] absolute top-0 right-0 backdrop-blur-md" style={{boxShadow: '0 30px 60px -15px rgba(15,23,42,0.10), 0 10px 24px -10px rgba(15,23,42,0.08), inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.04)', animation: 'dashSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}>

<div className="h-12 bg-gradient-to-b from-slate-50/90 to-slate-100/50 border-b border-slate-200/80 flex items-center px-4 shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
<div className="flex gap-2 w-20 pl-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_1px_rgba(0,0,0,0.1),inset_0_-1px_1px_rgba(0,0,0,0.05)]"></div>
<div className="w-3 h-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_1px_rgba(0,0,0,0.1),inset_0_-1px_1px_rgba(0,0,0,0.05)]"></div>
<div className="w-3 h-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_1px_rgba(0,0,0,0.1),inset_0_-1px_1px_rgba(0,0,0,0.05)]"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-slate-100/80 border border-slate-200/80 rounded-xl py-1.5 px-4 flex items-center gap-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_0_rgba(255,255,255,1)] w-[290px] justify-center">
<iconify-icon className="text-xs text-slate-400" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs text-slate-500 font-light tracking-wide">moje.financie.sk</span>
</div>
</div>
<div className="w-20"></div>
</div>

<div className="flex-1 bg-transparent pt-8 pr-8 pb-8 pl-8">

<div className="flex items-start justify-between mb-8">
<div className="">
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-[#4080FF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_0_12px_rgba(64,128,255,0.65)]"></div>
<span className="text-[10px] uppercase tracking-[0.24em] text-slate-400 font-medium">Prehľad portfólia</span>
</div>
<h2 className="text-3xl leading-none font-medium text-slate-900 tracking-tight">
            Celkový majetok
          </h2>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-[0.24em] text-slate-400 font-medium mb-2">Aktuálna hodnota</p>
<p className="text-2xl font-medium tracking-tight text-slate-900">285 400 €</p>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="rounded-2xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 px-5 py-4 shadow-[0_3px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.02)]">
<p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">Hodnota nehnuteľnosti</p>
<p className="text-lg font-medium text-slate-900 tracking-tight">210 000 €</p>
</div>
<div className="rounded-2xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 px-5 py-4 shadow-[0_3px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.02)]">
<p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">Zostatok hypotéky</p>
<p className="text-lg font-medium text-slate-900 tracking-tight">135 200 €</p>
</div>
<div className="rounded-2xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 px-5 py-4 shadow-[0_3px_8px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.02)]">
<p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">Investície (ETF)</p>
<p className="text-lg font-medium text-slate-900 tracking-tight">75 400 €</p>
</div>
</div>

<div className="rounded-[1.75rem] border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/30 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,1)]">
<div className="grid grid-cols-12 gap-4 px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-slate-400 border-b border-slate-200/60 bg-slate-100/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] font-medium">
<div className="col-span-5">Produkt</div>
<div className="col-span-3">Stav</div>
<div className="col-span-2 text-right">Úrok / Zisk</div>
<div className="col-span-2 text-right">Suma</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center bg-blue-50/30 hover:bg-blue-50/50 transition-colors border-b border-slate-100/80">
<div className="col-span-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-50 to-blue-100/60 border border-blue-200/50 flex items-center justify-center text-[#4080FF] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.04),inset_0_-1px_1px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-lg" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div>
<p className="text-slate-900 text-base font-medium leading-none tracking-tight">Hypotéka VÚB</p>
<p className="text-xs text-slate-400 mt-1">Refinancované</p>
</div>
</div>
<div className="col-span-3 text-[#4080FF] text-sm font-medium">Aktívne</div>
<div className="col-span-2 text-right text-slate-900 text-sm font-medium">3.89 % p.a.</div>
<div className="col-span-2 text-right text-slate-900 text-sm font-medium">135 200 €</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-slate-50/70 transition-colors border-b border-slate-100/80">
<div className="col-span-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-b from-emerald-50 to-emerald-100/60 border border-emerald-200/50 flex items-center justify-center text-[#10b981] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.04),inset_0_-1px_1px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<p className="text-slate-900 text-base font-medium leading-none tracking-tight">S&amp;P 500 ETF</p>
</div>
</div>
<div className="col-span-3 text-[#10b981] text-sm font-medium">Rastúce</div>
<div className="col-span-2 text-right text-slate-700 text-sm font-medium">+ 8.4 %</div>
<div className="col-span-2 text-right text-slate-700 text-sm font-medium">75 400 €</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-slate-50/70 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-50 to-amber-100/60 border border-amber-200/50 flex items-center justify-center text-amber-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.04),inset_0_-1px_1px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<p className="text-slate-900 text-base font-medium leading-none tracking-tight">Životné poistenie</p>
</div>
</div>
<div className="col-span-3 text-[#4080FF] text-sm font-medium">Aktívne</div>
<div className="col-span-2 text-right text-slate-700 text-sm font-medium">-</div>
<div className="col-span-2 text-right text-slate-700 text-sm font-medium">45 € / mes</div>
</div>
</div>
</div>
</div>

<div className="transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.16)] cursor-pointer group bg-neutral-50 w-[340px] z-20 border-slate-200/60 border rounded-[2rem] px-7 py-7 absolute top-14 left-0" style={{boxShadow: '0 24px 48px -12px rgba(15,23,42,0.14), 0 10px 20px -10px rgba(15,23,42,0.08), inset 0 2px 2px rgba(255,255,255,1), inset 0 -1px 2px rgba(0,0,0,0.03)', animation: 'cardSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards'}}>
<div className="flex items-start justify-between mb-5">
<div className="flex items-center gap-3">
<div className="">
<h3 className="text-base font-medium tracking-tight text-slate-900 group-hover:text-[#4080FF] transition-colors">
          Výnos z investícií</h3>
<p className="text-[9px] uppercase tracking-widest text-slate-400 font-medium mt-0.5">Zložené úročenie</p>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-gradient-to-b from-emerald-50 to-emerald-100/80 flex items-center justify-center text-[#10b981] border border-emerald-200/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.05),inset_0_-1px_1px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-xs" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
<div className="mb-2">
<p className="text-3xl font-medium tracking-tight text-slate-900 leading-none drop-shadow-sm">+ 12 450 €</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-gradient-to-b from-emerald-50 to-emerald-100/50 px-1.5 py-0.5 rounded-md border border-emerald-200/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.04)]">
<iconify-icon className="text-[10px]" icon="solar:trend-up-linear"></iconify-icon>
        Zhodnotenie
      </span>
<span className="text-[10px] font-normal text-slate-400">za posledný rok</span>
</div>
</div>
<div className="relative h-16 w-full mb-5 -ml-1">
<canvas className="" id="chart-starlight-aura-emmxvdx2om6gbbtg"></canvas>
</div>
<div className="space-y-3 text-xs">
<div className="flex justify-between items-center py-2.5 border-t border-slate-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
<span className="text-slate-500 font-normal">Suma vkladov</span>
<span className="font-medium text-slate-900 text-[10px] tracking-wide">62 950 €</span>
</div>
<div className="flex justify-between items-center py-2.5 border-t border-slate-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
<span className="text-slate-500 font-normal">Doba sporenia</span>
<span className="font-medium text-slate-900 text-[10px]">8 rokov</span>
</div>
</div>

</div>
</div>
</div>
</div>

</header>

<section className="overflow-hidden sm:py-32 sm:px-8 text-slate-800 pt-24 pr-4 pb-24 pl-4 relative" id="sluzby" style={{backgroundColor: '#f8fafc'}}>
<style>
        .skeuo-plate {
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04), 0 2px 5px rgba(15, 23, 42, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(148, 163, 184, 0.05);
        }
        .skeuo-text-raised { color: #334155; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7); }
        .skeuo-text-engraved { color: #64748b; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.55); }
      </style>
<div className="max-w-7xl mx-auto relative z-10">

<div className="max-w-3xl mb-20 text-center mx-auto">
<h4 className="text-[#4080FF] font-medium mb-8 text-[10px] tracking-widest uppercase inline-flex items-center justify-center px-6 py-2.5 rounded-full" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 6px 16px rgba(15,23,42,0.03), inset 0 1px 0 rgba(255,255,255,0.9)'}}>
<div className="w-1.5 h-1.5 rounded-full mr-3" style={{background: '#4080FF', boxShadow: '0 0 6px rgba(64,128,255,0.35), inset 0 1px 1px rgba(255,255,255,0.55)'}}></div>
            Naše Služby
          </h4>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-800 mb-8 skeuo-text-raised">
            Komplexný prístup k vašim
            <span className="text-[#4080FF]">financiám</span>
</h2>
</div>

<div className="grid md:grid-cols-3 gap-8 items-stretch">

<div className="skeuo-plate rounded-[2rem] p-10 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center relative bg-white border border-slate-100 shadow-sm mb-8 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-[#4080FF]" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-800 tracking-tight mb-4 skeuo-text-raised">Hypotéky</h3>
<p className="text-slate-500 font-normal leading-relaxed skeuo-text-engraved text-sm flex-1">
              Nájdeme najlepšiu hypotéku z 15+ bánk. Porovnáme úroky, vybavíme za vás byrokraciu a ušetríme vám tisíce eur na preplatení.
            </p>
</div>

<div className="skeuo-plate rounded-[2rem] p-10 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center relative bg-white border border-slate-100 shadow-sm mb-8 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-[#4080FF]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-800 tracking-tight mb-4 skeuo-text-raised">Poistenie</h3>
<p className="text-slate-500 font-normal leading-relaxed skeuo-text-engraved text-sm flex-1">
              Životné, majetkové aj auto poistenie na mieru. Ochránime to najcennejšie tak, aby ste neplatili za zbytočnosti.
            </p>
</div>

<div className="skeuo-plate rounded-[2rem] p-10 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center relative bg-white border border-slate-100 shadow-sm mb-8 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-[#4080FF]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-800 tracking-tight mb-4 skeuo-text-raised">Investície</h3>
<p className="text-slate-500 font-normal leading-relaxed skeuo-text-engraved text-sm flex-1">
              ETF, podielové fondy, dôchodkové sporenie. Budujte svoj majetok efektívne pre bezpečný a kľudný dôchodok.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-slate-100" id="kalkulacka">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Zistite koľko si môžete požičať</h2>
<p className="text-slate-500">Spočítajte si orientačnú mesačnú splátku a maximálnu výšku hypotéky.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col gap-8">

<div>
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-medium text-slate-700">Hodnota nehnuteľnosti</label>
<div className="text-2xl font-medium text-[#4080FF] tracking-tight"><span id="val-property">200 000</span> €</div>
</div>
<input id="calc-property" max="500000" min="50000" step="5000" type="range" value="200000"/>
<div className="flex justify-between text-[10px] text-slate-400 font-medium mt-2">
<span>50 000 €</span>
<span>500 000 €</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-medium text-slate-700">Vlastné zdroje (20%)</label>
<div className="text-lg font-medium text-slate-900"><span id="val-own">40 000</span> €</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-medium text-slate-700">Doba splácania</label>
<div className="text-2xl font-medium text-[#4080FF] tracking-tight"><span id="val-duration">30</span> rokov</div>
</div>
<input id="calc-duration" max="30" min="10" step="1" type="range" value="30"/>
<div className="flex justify-between text-[10px] text-slate-400 font-medium mt-2">
<span>10 rokov</span>
<span>30 rokov</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-medium text-slate-700">Čistý mesačný príjem</label>
<div className="text-2xl font-medium text-[#4080FF] tracking-tight"><span id="val-income">1 500</span> €</div>
</div>
<input id="calc-income" max="5000" min="800" step="50" type="range" value="1500"/>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 shadow-sm flex flex-col h-full justify-center text-center">
<p className="text-[10px] font-medium tracking-widest uppercase text-slate-400 mb-2">Odhadovaná mesačná splátka</p>
<div className="text-6xl font-medium tracking-tight text-slate-900 mb-8"><span id="res-payment">764</span> €</div>
<div className="w-full h-px bg-slate-200 mb-8"></div>
<div className="grid grid-cols-2 gap-4 mb-10 text-left">
<div>
<p className="text-[10px] uppercase text-slate-500 font-medium mb-1">Max. hypotéka (DTI)</p>
<p className="text-xl font-medium text-slate-900"><span id="res-max">144 000</span> €</p>
</div>
<div>
<p className="text-[10px] uppercase text-slate-500 font-medium mb-1">Požadovaná výška</p>
<p className="text-xl font-medium text-slate-900"><span id="res-loan">160 000</span> €</p>
</div>
</div>
<a className="w-full py-4 rounded-xl bg-[#4080FF] text-white font-medium hover:opacity-90 transition-colors shadow-md" href="#kontakt">Získať bezplatnú konzultáciu</a>
<p className="text-[10px] text-slate-400 mt-4 leading-tight">Výpočet je orientačný (počíta s úrokom 4.0%). Skutočné podmienky závisia od konkrétnej banky a vašej finančnej situácie.</p>
</div>
</div>
</div>

</section>

<section className="py-24 bg-slate-50 border-b border-slate-100 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-center text-slate-900 mb-16">Ako to funguje?</h2>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xl font-medium text-[#4080FF] shadow-sm mb-6 group-hover:border-[#4080FF]/50 transition-colors">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Vyplňte formulár</h3>
<p className="text-sm text-slate-500">Zaberie to len 2 minúty online. Jednoducho a z pohodlia vášho domova.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xl font-medium text-[#4080FF] shadow-sm mb-6 group-hover:border-[#4080FF]/50 transition-colors">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Konzultácia zadarmo</h3>
<p className="text-sm text-slate-500">Spojíme sa, zanalyzujeme vašu situáciu a navrhneme to najlepšie riešenie na mieru.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#4080FF] border border-[#4080FF] flex items-center justify-center text-xl font-medium text-white shadow-md mb-6 transition-transform group-hover:scale-110">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Podpis a hotovo</h3>
<p className="text-sm text-slate-500">Vybavíme všetko za vás. Vy už len podpíšete zmluvy a čerpáte výhody.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-gradient-to-br from-white via-[#FAFAFA] to-[#F1F5F9] border-slate-200 border rounded-[3rem] mt-24 mr-6 mb-24 ml-6 pt-24 pb-24 relative shadow-sm">
<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-pricing-grid"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h5 className="text-[#4080FF] font-medium mb-8 tracking-widest uppercase text-[10px] flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
              Dôveryhodný partner
            </h5>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 text-slate-900 leading-tight">
              Zastupujeme <span className="text-[#4080FF]">vás</span>,<br/>nie finančné inštitúcie
            </h2>
<p className="text-slate-500 text-lg leading-relaxed font-normal max-w-[500px]">
              Vďaka nezávislosti a silným partnerstvám na trhu dokážeme vyrokovať podmienky, aké by ste ako jednotlivec v banke získať nemohli.
            </p>
</div>

<div className="grid grid-cols-2 gap-12 bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-200/60 shadow-sm">
<div className="">
<div className="text-4xl lg:text-5xl font-medium mb-3 tracking-tight text-slate-900 flex items-baseline">
<span className="stat-counter" data-target="500">0</span>
<span className="text-2xl lg:text-3xl text-[#4080FF] ml-1 font-medium">+</span>
</div>
<p className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">Spokojných klientov</p>
</div>
<div>
<div className="text-4xl lg:text-5xl font-medium mb-3 tracking-tight text-slate-900 flex items-baseline">
<span className="stat-counter" data-target="15">0</span>
</div>
<p className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">Rokov na trhu</p>
</div>
<div className="">
<div className="text-4xl lg:text-5xl font-medium mb-3 tracking-tight text-slate-900 flex items-baseline">
<span className="stat-counter" data-target="15">0</span>
<span className="text-2xl lg:text-3xl text-[#4080FF] ml-1 font-medium">+</span>
</div>
<p className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">Bankových partnerov</p>
</div>
<div className="">
<div className="text-4xl lg:text-5xl font-medium mb-3 tracking-tight text-slate-900 flex items-baseline">
<span className="stat-counter" data-target="98">0</span>
<span className="text-xl lg:text-2xl text-[#4080FF] ml-1 font-medium">%</span>
</div>
<p className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">Odporúča ďalej</p>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 bg-white" id="referencie">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-center text-slate-900 mb-16">Čo o nás hovoria klienti</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col relative">
<iconify-icon className="text-4xl text-slate-200 absolute top-8 right-8" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-slate-600 font-medium mb-8 relative z-10 leading-relaxed pt-4">"Ušetrili sme 180€ mesačne na hypotéke. Odporúčam každému."</p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#4080FF] font-medium">JN</div>
<div>
<p className="text-sm font-medium text-slate-900">Ján Novák</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Bratislava</p>
</div>
</div>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col relative">
<iconify-icon className="text-4xl text-slate-200 absolute top-8 right-8" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-slate-600 font-medium mb-8 relative z-10 leading-relaxed pt-4">"Vybavili mi poistenie do 2 dní. Profesionálny prístup."</p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#10b981] font-medium">MK</div>
<div>
<p className="text-sm font-medium text-slate-900">Mária Kováčová</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Košice</p>
</div>
</div>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col relative">
<iconify-icon className="text-4xl text-slate-200 absolute top-8 right-8" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-slate-600 font-medium mb-8 relative z-10 leading-relaxed pt-4">"Konečne rozumiem kde mi idú peniaze. Skvelý poradca."</p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-medium">PH</div>
<div>
<p className="text-sm font-medium text-slate-900">Peter Horváth</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Žilina</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200/60">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-center text-slate-900 mb-16">Časté otázky (FAQ)</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
              Je poradenstvo naozaj zadarmo?
              <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Áno, naše služby sú pre vás úplne bezplatné. Sme platení z provízií od finančných inštitúcií, ktoré zastupujeme (napr. bánk a poisťovní), za sprostredkovanie produktu. Pre vás sa tak cena produktu nijako nezvyšuje.</p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
              Ako dlho trvá vybavenie hypotéky?
              <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Celý proces od prvej konzultácie až po čerpanie úveru zvyčajne trvá 2 až 4 týždne. Závisí to od rýchlosti dodania podkladov a aktuálnych schvaľovacích procesov v danej banke.</p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
              S ktorými bankami spolupracujete?
              <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Sme nezávislí a spolupracujeme s viac ako 15 bankovými a finančnými inštitúciami na Slovensku. To nám umožňuje porovnať prakticky celý trh a vybrať pre vás to najlepšie riešenie.</p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
              Čo potrebujem na prvú konzultáciu?
              <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Na prvú konzultáciu nepotrebujete nič špeciálne. Stačí mať základnú predstavu o vašich príjmoch, výdavkoch a cieľoch, ktoré chcete s financiami dosiahnuť.</p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
              Viete pomôcť aj s refinancovaním?
              <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Samozrejme, refinancovanie starých a nevýhodných úverov je jednou z našich hlavných služieb. Často vieme klientom znížiť úrokovú sadzbu a ušetriť desiatky až stovky eur mesačne.</p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
              Kde sa nachádza vaša kancelária?
              <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Pôsobíme primárne online, takže vám vieme pomôcť bez ohľadu na to, kde na Slovensku sa nachádzate. Osobné stretnutie je samozrejme taktiež možné po vzájomnej dohode.</p>
</details>
</div>
</div>
</section>

<section className="antialiased overflow-hidden selection:bg-[#4080FF]/30 selection:text-blue-200 lg:py-32 py-20 text-slate-300 relative bg-[#0f172a]" id="kontakt">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(64,128,255,0.15),transparent_60%)] blur-[100px]"></div>
<div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_60%)] blur-[100px]"></div>
<div className="absolute inset-0" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px), linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)', maskImage: 'radial-gradient(circle at center,black 40%,transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center,black 40%,transparent 80%)'}}></div>
</div>
<main className="z-10 flex w-full relative items-center justify-center">
<div className="max-w-[1280px] w-full mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col items-start space-y-8 max-w-xl relative z-20">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#4080FF]/10 border border-[#4080FF]/20 text-blue-300 text-[10px] font-medium shadow-[0_0_15px_rgba(64,128,255,0.15)] backdrop-blur-md uppercase tracking-wide">
                    Úvodná konzultácia zdarma
                </div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white">
                    Pripravte sa na <br className="hidden sm:block"/>
                    lepšiu finančnú <br className="hidden sm:block"/>
<span className="text-[#4080FF]">budúcnosť.</span>
</h2>
<p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light max-w-[440px]">
                    Vyplňte kontaktný formulár a náš špecialista sa vám ozve do 24 hodín pre dohodnutie nezáväzného stretnutia alebo online hovoru.
                </p>
<div className="flex items-center gap-6 pt-4 border-t border-white/10 w-full mt-4">
<div className="flex flex-col">
<span className="text-[10px] uppercase text-slate-500 tracking-wider">Píšte nám</span>
<span className="text-white">marek.murko@finami.sk</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-slate-500 tracking-wider">Volajte nám</span>
<span className="text-white">+421 907 787 808</span>
</div>
</div>
</div>

<div className="relative w-full max-w-[500px] mx-auto z-20">
<form className="flex flex-col gap-4 w-full bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
<h3 className="text-xl font-medium text-white mb-2">Vyplňte formulár</h3>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-400 px-1">Meno a priezvisko</label>
<input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#4080FF] focus:bg-white/10 transition-colors" placeholder="Ján Novák" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-400 px-1">Telefónne číslo</label>
<input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#4080FF] focus:bg-white/10 transition-colors" placeholder="+421 9xx xxx xxx" type="tel"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-400 px-1">Email</label>
<input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#4080FF] focus:bg-white/10 transition-colors" placeholder="jan.novak@email.sk" type="email"/>
</div>
<div className="flex flex-col gap-1.5 relative">
<label className="text-xs text-slate-400 px-1">Čo potrebujem?</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#4080FF] appearance-none focus:bg-white/10 transition-colors cursor-pointer">
<option className="text-slate-900" disabled="" selected="" value="">Vyberte možnosť...</option>
<option className="text-slate-900" value="hypoteka">Hypotéka</option>
<option className="text-slate-900" value="poistenie">Poistenie</option>
<option className="text-slate-900" value="investicie">Investície</option>
<option className="text-slate-900" value="refinancovanie">Refinancovanie</option>
<option className="text-slate-900" value="ine">Iné</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#4080FF] text-white font-medium text-sm py-4 rounded-xl mt-4 hover:opacity-90 transition-colors shadow-lg shadow-[#4080FF]/20 active:scale-95" type="button">Získať bezplatnú konzultáciu</button>
<p className="text-[10px] text-slate-500 text-center mt-2">Vaše údaje sú v bezpečí. Nezasielame spam.</p>
</form>
</div>
</div>
</main>
</section>

<footer className="bg-white border-slate-200 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2 flex flex-col gap-6 gap-x-6 gap-y-6">
<a className="text-2xl font-semibold tracking-tight text-slate-900 w-fit" href="#">
              Finami<span className="text-[#4080FF]">.</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Najväčší výber poistných a finančných produktov. Pomáhame klientom na celom Slovensku budovať majetok, chrániť príjem a získať najlepšie hypotéky.
            </p>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="">
<h3 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Služby</h3>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Hypotéky a refinancovanie</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Životné poistenie</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Majetkové poistenie</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Investovanie do ETF</a></li>
</ul>
</div>

<div className="">
<h3 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">O nás</h3>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Kto sme</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Referencie</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#">Blog a tipy</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#4080FF] transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>

<div className="">
<h3 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Kontakt</h3>
<ul className="space-y-3">
<li className="text-xs text-slate-500">marek.murko@finami.sk</li>
<li className="text-xs text-slate-500">+421 907 787 808</li>
<li className="text-xs text-slate-500 mt-2">Finami / F.N.M. s.r.o.</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
<p className="text-[10px] text-slate-400">
              © 2024 Finami / F.N.M. s.r.o. Všetky práva vyhradené.
            </p>
<div className="flex items-center gap-4 md:border-l md:border-slate-200 md:pl-6">
<a className="text-[10px] text-slate-400 hover:text-slate-600 transition-colors" href="#">Ochrana osobných údajov</a>
<a className="text-[10px] text-slate-400 hover:text-slate-600 transition-colors" href="#">Obchodné podmienky</a>
</div>
</div>

<div className="flex items-center gap-4 text-sm">
<a className="text-slate-400 hover:text-[#4080FF] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
