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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
},
brand: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981',
600: '#059669',
900: '#064e3b',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'spin-slow': 'spin 12s linear infinite',
'spin-reverse-slow': 'spinReverse 15s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(-10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
spinReverse: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(-360deg)' },
}
}
}
}
}



            (function() {
              const counters = document.querySelectorAll('.counter-value');
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 1200;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                      const elapsed = currentTime - startTime;
                      const progress = Math.min(elapsed / duration, 1);
                      const ease = 1 - Math.pow(1 - progress, 4);
                      const current = ease * target;

                      if (target % 1 !== 0) {
                         counter.innerText = current.toFixed(1);
                      } else {
                         counter.innerText = Math.floor(current);
                      }

                      if (progress < 1) {
                        requestAnimationFrame(animate);
                      } else {
                        counter.innerText = target;
                      }
                    };

                    requestAnimationFrame(animate);
                    observer.unobserve(counter);
                  }
                });
              }, { threshold: 0.5 });

              counters.forEach(c => observer.observe(c));
            })();
          


          (function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.remove('opacity-0', 'translate-y-8');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.problem-card').forEach((el) => {
              observer.observe(el);
            });
          })();
        


          (function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.remove('opacity-0', 'translate-y-8');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.solution-card').forEach((el) => {
              observer.observe(el);
            });
          })();
        


          (function() {
            const section = document.querySelector('.insurance-section');
            const steps = section.querySelectorAll('.insurance-step');
            const line = section.querySelector('.insurance-line-fill');

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  steps.forEach((step, index) => {
                    setTimeout(() => {
                      step.classList.remove('opacity-0', 'translate-y-8');
                      step.classList.add('opacity-100', 'translate-y-0');
                    }, index * 200);
                  });

                  if(line) {
                      setTimeout(() => {
                          line.style.width = '100%';
                      }, 400);
                  }

                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

            observer.observe(section);
          })();
        


          (function() {
            const steps = document.querySelectorAll('.process-step');

            const dashDomains = document.getElementById('dash-domains');
            const dashStatus = document.getElementById('dash-status');
            const dashStatusDot = document.getElementById('dash-status-dot');
            const dashStatusText = document.getElementById('dash-status-text');
            const dashCapacity = document.getElementById('dash-capacity');
            const dashCapacityBar = document.getElementById('dash-capacity-bar');
            const dashTimelineLine = document.getElementById('dash-timeline-line');
            const dashHealthStatus = document.getElementById('dash-health-status');

            // State Data
            const states = {
              1: {
                domains: "0",
                status: { text: "Conectando...", color: "bg-slate-100 text-slate-600", dot: "bg-slate-400" },
                capacity: "€0",
                capBar: "0%",
                timeline: "0%",
                healthTitle: "A aguardar conexão...",
                rows: [
                  { opacity: 0.5, badge: "Pendente", badgeColor: "bg-slate-100 text-slate-400", bar: "0%" },
                  { opacity: 0.5, badge: "Pendente", badgeColor: "bg-slate-100 text-slate-400", bar: "0%" },
                  { opacity: 0.5, badge: "...", badgeColor: "bg-slate-100 text-slate-400", bar: "0%" }
                ]
              },
              2: {
                domains: "12",
                status: { text: "Escaneando", color: "bg-amber-50 text-amber-600", dot: "bg-amber-500 animate-pulse" },
                capacity: "€340",
                capBar: "30%",
                timeline: "33%",
                healthTitle: "IA a analisar emails...",
                rows: [
                  { opacity: 1, badge: "Lendo...", badgeColor: "bg-amber-50 text-amber-600", bar: "30%" },
                  { opacity: 1, badge: "Extraindo", badgeColor: "bg-amber-50 text-amber-600", bar: "45%" },
                  { opacity: 1, badge: "Aguardando", badgeColor: "bg-slate-100 text-slate-600", bar: "0%" }
                ]
              },
              3: {
                domains: "12",
                status: { text: "Atenção", color: "bg-blue-50 text-blue-600", dot: "bg-blue-500" },
                capacity: "€340",
                capBar: "30%",
                timeline: "66%",
                healthTitle: "Confirmação WhatsApp",
                rows: [
                  { opacity: 1, badge: "Validado", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" },
                  { opacity: 1, badge: "Confirmar?", badgeColor: "bg-blue-50 text-blue-600", bar: "80%" },
                  { opacity: 1, badge: "Validado", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" }
                ]
              },
              4: {
                domains: "12",
                status: { text: "Sincronizado", color: "bg-emerald-50 text-emerald-600", dot: "bg-emerald-500 animate-pulse" },
                capacity: "€340",
                capBar: "100%",
                timeline: "100%",
                healthTitle: "Enviado à Contabilidade",
                rows: [
                  { opacity: 1, badge: "Enviado", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" },
                  { opacity: 1, badge: "Enviado", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" },
                  { opacity: 1, badge: "Enviado", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" }
                ]
              }
            };

            function updateDashboard(stepIndex) {
              const state = states[stepIndex];

              // Update Stats
              dashDomains.innerText = state.domains;

              dashStatus.className = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-500 ${state.status.color}`;
              dashStatusDot.className = `w-1.5 h-1.5 rounded-full ${state.status.dot}`;
              dashStatusText.innerText = state.status.text;

              dashCapacity.innerText = state.capacity;
              dashCapacityBar.style.width = state.capBar;

              // Update Timeline Line
              dashTimelineLine.style.width = state.timeline;

              // Update Timeline Nodes
              for(let i=1; i<=4; i++) {
                const node = document.getElementById(`node-${i}`);
                const label = document.getElementById(`label-${i}`);

                if(i <= stepIndex) {
                  node.className = "w-3 h-3 rounded-full bg-white border-2 border-brand-600 ring-4 ring-white transition-all duration-300 scale-125 shadow-md shadow-brand-200";
                  label.className = "text-[10px] font-bold text-brand-600 uppercase tracking-wide transition-colors duration-300";
                } else {
                  node.className = "w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300";
                  label.className = "text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300";
                }
              }

              dashHealthStatus.innerText = state.healthTitle;

              state.rows.forEach((row, idx) => {
                const i = idx + 1;
                const img = document.getElementById(`row-img-${i}`);
                const text = document.getElementById(`row-text-${i}`);
                const badge = document.getElementById(`row-badge-${i}`);
                const bar = document.getElementById(`row-bar-${i}`);

                if(row.opacity === 1) {
                  img.classList.remove('opacity-50', 'grayscale');
                  text.classList.remove('text-slate-400');
                  text.classList.add('text-slate-700');
                } else {
                  img.classList.add('opacity-50', 'grayscale');
                  text.classList.add('text-slate-400');
                  text.classList.remove('text-slate-700');
                }

                badge.innerText = row.badge;
                badge.className = `px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 ${row.badgeColor}`;
                bar.style.width = row.bar;
              });
            }

            function setActiveStep(index) {
              steps.forEach(s => {
                const bg = s.querySelector('.active-bg');
                const num = s.querySelector('.step-number');
                const title = s.querySelector('h3');

                bg.classList.remove('opacity-100');
                bg.classList.add('opacity-0');

                num.classList.remove('bg-brand-600', 'text-white');
                num.classList.add('bg-slate-100', 'text-slate-500');

                title.classList.remove('text-brand-600');
                title.classList.add('text-slate-900');
              });

              const activeStep = document.querySelector(`.process-step[data-step="${index}"]`);
              if(activeStep) {
                const bg = activeStep.querySelector('.active-bg');
                const num = activeStep.querySelector('.step-number');
                const title = activeStep.querySelector('h3');

                bg.classList.remove('opacity-0');
                bg.classList.add('opacity-100');

                num.classList.remove('bg-slate-100', 'text-slate-500');
                num.classList.add('bg-brand-600', 'text-white');

                title.classList.remove('text-slate-900');
                title.classList.add('text-brand-600');
              }

              updateDashboard(index);
            }

            steps.forEach(step => {
              step.addEventListener('mouseenter', () => {
                setActiveStep(parseInt(step.dataset.step));
              });
              step.addEventListener('click', () => {
                setActiveStep(parseInt(step.dataset.step));
              });
            });

            setActiveStep(1);
          })();
        


          (function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.remove('opacity-0', 'translate-y-8');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.2 });
            const card = document.getElementById('cta-card-animate');
            if(card) observer.observe(card);
          })();
        


              (function() {
                const filterBtns = document.querySelectorAll('.filter-btn');
                const cards = document.querySelectorAll('.wall-card');

                filterBtns.forEach(btn => {
                  btn.addEventListener('click', () => {
                    filterBtns.forEach(b => {
                       b.classList.remove('bg-slate-900', 'text-white', 'shadow-lg');
                       b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
                    });
                    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                    btn.classList.add('bg-slate-900', 'text-white', 'shadow-lg');

                    const category = btn.getAttribute('data-filter');

          cards.forEach(card => {
                      const cardCategory = card.getAttribute('data-category');

                      if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        // Force reflow to enable transition
                        void card.offsetWidth;
                        card.classList.remove('opacity-0', 'scale-[0.95]');
                        card.classList.add('opacity-100', 'scale-100');
                      } else {
                        card.classList.remove('opacity-100', 'scale-100');
                        card.classList.add('opacity-0', 'scale-[0.95]');
                        setTimeout(() => {
                          if(card.classList.contains('opacity-0')) {
                              card.style.display = 'none';
                          }
                        }, 300);
                      }
                    });
                  });
                });
              })();
        


          (function() {
            const faturasInput = document.getElementById('faturas');
            const tempoInput = document.getElementById('tempo');
            const custoInput = document.getElementById('custo');

            const displayFaturas = document.getElementById('display-faturas');
            const displayTempo = document.getElementById('display-tempo');
            const displayCusto = document.getElementById('display-custo');

            const totalSavingsEl = document.getElementById('total-savings');
            const timeSavingsEl = document.getElementById('time-savings');
            const costSavingsEl = document.getElementById('cost-savings');

            function calculate() {
              const faturas = parseInt(faturasInput.value);
              const tempo = parseInt(tempoInput.value);
              const custo = parseInt(custoInput.value);

              // Update displays
              displayFaturas.innerText = faturas;
              displayTempo.innerText = tempo;
              displayCusto.innerText = '€' + custo;

              // Calculate
              // Time in hours per month
              const hoursPerMonth = (faturas * tempo) / 60;
              const hoursPerYear = hoursPerMonth * 12;

              // Cost per year
              const costPerYear = hoursPerYear * custo;

              // Animate/Update Numbers
              // Using simple formatter for cleaner code
              const fmtMoney = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(costPerYear);

              totalSavingsEl.innerText = fmtMoney;
              costSavingsEl.innerText = fmtMoney;
              timeSavingsEl.innerText = Math.round(hoursPerYear) + 'h';
            }

            [faturasInput, tempoInput, custoInput].forEach(input => {
              input.addEventListener('input', calculate);
            });

            // Init
            calculate();
          })();
        


      lucide.createIcons();
    
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
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-[#FDFBF9]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">

<svg className="" fill="none" height="20" viewbox="0 0 100 100" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M25 25 L50 80 L75 25" stroke="#bef264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
</svg>
</div>
<span className="font-display font-bold text-lg tracking-tight text-slate-900">
              VINC
            </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#calculator">
              Calculadora ROI
            </a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">
              Como Funciona
            </a>
<a className="hover:text-slate-900 transition-colors" href="#integrations">
              Integrações
            </a>
<a className="hover:text-slate-900 transition-colors" href="#results">
              Resultados
            </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
              Preços
            </a>
<a className="inline-flex items-center justify-center text-[13px] hover:bg-slate-800 hover:shadow-md transition-all active:scale-95 font-semibold text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#pricing">Começar </a>
</div>
</div>
</div>
</header>
<main className="sm:pt-32 pt-24">

<section className="overflow-hidden lg:pb-24 -multi pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-10 opacity-60 pointer-events-none">
<div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -multi">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto -multi">

<div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-3 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 transition-transform hover:scale-105 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
<span className="text-[12px] font-medium text-slate-600 tracking-tight">
                Setup em 5 minutos • Lançamento Especial
              </span>
</div>

<h1 className="sm:text-5xl lg:text-6xl text-balance leading-[1.15] text-4xl font-bold text-slate-900 tracking-tight font-display">
              VINC Captura 100% das
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-emerald-800">
                Faturas de compras.
              </span>
</h1>

<p className="text-[16px] sm:text-[18px] leading-relaxed text-balance text-slate-500 max-w-2xl mt-6 shadow-sm">
              Conecte Gmail/Outlook em 3 minutos e a IA VINC encontra todas as
              faturas, organiza tudo e envia para o seu contabilista. Sem
              esforço, sem faturas perdidas.
            </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200" href="#book">
                Começar Teste Grátis
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 transition-all duration-200" href="#how-it-works">
<svg className="lucide lucide-play-circle w-4 h-4 text-slate-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Ver Demo
              </a>
</div>

<div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Felix"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Aneka"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Jude"/>
</div>
<div className="flex flex-col items-start">
<div className="flex gap-0.5 text-amber-500">
<svg className="lucide lucide-star w-3 h-3" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<span className="">+2,000 PMEs usam VINC</span>
</div>
</div>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -multi">
<style>
            @keyframes slideWidth { from { width: 0; } to { width: 100%; } }
            @keyframes fadeInSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes drawLine { from { stroke-dasharray: 100; stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
            .animate-bar-fill { animation: slideWidth 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            .animate-fade-slide { animation: fadeInSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            .animate-path { animation: drawLine 2s ease-out forwards; }
          </style>

<div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md shadow-2xl shadow-slate-200/50 overflow-hidden relative animate-fade-slide">

<div className="flex items-center justify-between border-b border-slate-200/60 p-4 sm:px-6 bg-white/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
</div>
<span className="text-xs font-mono font-medium text-emerald-700 uppercase tracking-wider animate-pulse">
                  Monitorização de Faturas
                </span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-400 font-mono uppercase font-medium">
                  Contabilidade Sincronizada
                </span>
<svg className="text-brand-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>

<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/60 bg-slate-50/30">

<div className="p-6 sm:p-8 flex flex-col justify-between group relative">
<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 space-y-8">
<div className="">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Fontes
                      </h3>
</div>
<div className="font-display font-semibold text-slate-900 text-lg tracking-tight">
                      Email &amp; WhatsApp
                    </div>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-md px-2.5 py-1.5 w-fit shadow-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                      Gmail + Outlook Conectados
                    </div>
</div>
<div className="">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        IA Scan
                      </h3>
</div>
<div className="font-display font-semibold text-slate-900 text-lg tracking-tight">
                      Extração Automática
                    </div>
<div className="mt-1 text-xs font-medium text-slate-500 flex items-center gap-1.5">
<svg className="text-brand-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                      NIF, Data, Valor extraídos
                    </div>

<div className="mt-4 flex gap-1.5">
<div className="h-1.5 flex-1 bg-brand-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 rounded-full animate-bar-fill" style={{width: '100%'}}></div>
</div>
<div className="h-1.5 flex-1 bg-brand-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 rounded-full animate-bar-fill" style={{width: '100%', animationDelay: '0.15s'}}></div>
</div>
<div className="h-1.5 flex-1 bg-brand-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 rounded-full animate-bar-fill" style={{width: '100%', animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 relative bg-white/40">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-bold text-slate-800 tracking-tight">
                    Painel Financeiro
                  </h3>
<span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold text-brand-700 ring-1 ring-inset ring-brand-600/20 uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                    Sync Ativo
                  </span>
</div>
<div className="space-y-8">

<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Faturas Capturadas
                      </span>
<span className="text-xs font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
                        +14%
                      </span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-display font-bold text-slate-900 tracking-tighter counter-value" data-target="100">
                        0
                      </span>
<span className="text-2xl font-display font-bold text-slate-400">
                        %
                      </span>
</div>
<div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
<div className="bg-gradient-to-r from-brand-500 to-brand-600 h-full rounded-full animate-bar-fill" style={{width: '100%'}}></div>
</div>
</div>

<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Poupança Fiscal Estimada
                      </span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display font-bold text-slate-900 tracking-tighter">
                        €
                      </span>
<span className="text-4xl font-display font-bold text-slate-900 tracking-tighter counter-value" data-target="1842">
                        0
                      </span>
</div>

<div className="h-10 w-full mt-2 relative overflow-hidden group/chart cursor-crosshair">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 24">
<path d="M0 20 Q 15 18, 30 12 T 60 8 T 100 4" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path className="animate-path" d="M0 20 Q 15 18, 30 12 T 60 8 T 100 4" fill="none" stroke="#059669" stroke-dasharray="100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle className="fill-brand-600 animate-ping opacity-75" cx="100" cy="4" r="3"></circle>
<circle className="fill-white stroke-brand-600 stroke-2" cx="100" cy="4" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 bg-slate-50/50 flex flex-col">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Integrações Ativas
                </h3>
<div className="space-y-3 flex-1">

<div className="group/item flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-100 hover:-translate-y-0.5 transition-all duration-300">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-50 rounded-lg">
<img alt="Gmail" className="w-4 h-4" src="https://cdn.simpleicons.org/gmail/EA4335"/>
</div>
<span className="text-sm font-semibold text-slate-700">
                        Gmail
                      </span>
</div>
<div className="flex items-center gap-1.5 text-brand-600 bg-brand-50 px-2 py-1 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-[10px] font-bold tracking-wide">
                        LIGADO
                      </span>
</div>
</div>

<div className="group/item flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-100 hover:-translate-y-0.5 transition-all duration-300" style={{transitionDelay: '75ms'}}>
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-50 rounded-lg">
<img alt="Outlook" className="w-4 h-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-sm font-semibold text-slate-700">
                        Outlook
                      </span>
</div>
<div className="flex items-center gap-1.5 text-brand-600 bg-brand-50 px-2 py-1 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-[10px] font-bold tracking-wide">
                        LIGADO
                      </span>
</div>
</div>

<div className="group/item flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-100 hover:-translate-y-0.5 transition-all duration-300" style={{transitionDelay: '150ms'}}>
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-50 rounded-lg">
<img alt="WhatsApp" className="w-4 h-4" src="https://cdn.simpleicons.org/whatsapp/25D366"/>
</div>
<span className="text-sm font-semibold text-slate-700">
                        WhatsApp
                      </span>
</div>
<div className="flex items-center gap-1.5 text-brand-600 bg-brand-50 px-2 py-1 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-[10px] font-bold tracking-wide">
                        LIGADO
                      </span>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 bg-white/50 py-2 rounded-lg border border-slate-100">
<svg className="lucide lucide-activity w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
                  Último scan: Há 5 minutos
                </div>
</div>
</div>
</div>

</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Empresas que já estão economizando tempo e perdas fiscais
          </p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8 group-hover:[animation-play-state:paused]">

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              LusoTech
            </span>

<span className="text-xl font-semibold font-display text-slate-800 italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              MadeiraWorks
            </span>

<span className="text-xl font-bold font-display text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              Vianna
            </span>

<span className="text-xl font-medium font-display text-slate-800 flex items-center gap-1 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              PortoConsult
            </span>

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              ALGARVE
            </span>

<span className="text-xl font-serif font-semibold text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              Lisboa Ventures
            </span>

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              LusoTech
            </span>
<span className="text-xl font-semibold font-display text-slate-800 italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              MadeiraWorks
            </span>
<span className="text-xl font-bold font-display text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              Vianna
            </span>
<span className="text-xl font-medium font-display text-slate-800 flex items-center gap-1 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              PortoConsult
            </span>
<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              ALGARVE
            </span>
<span className="text-xl font-serif font-semibold text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
              Lisboa Ventures
            </span>
</div>
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              O seu negócio perde dinheiro se as faturas
              <span className="relative inline-block text-slate-900">
                não chegam à contabilidade
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 skew-x-[-10deg]"></span>
</span>
              .
            </h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
              Você gasta horas procurando faturas em emails antigos, perde
              prazos de IVA e deixa de deduzir despesas legítimas.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-trending-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
<polyline points="16 17 22 17 22 11"></polyline>
</svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
                  Perdas Fiscais (IRC &amp; IVA)
                </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                  Cada fatura esquecida é dinheiro que você paga a mais em
                  impostos. Deixa de deduzir IVA e aumenta o seu lucro
                  tributável artificialmente.
                </p>
</div>
</div>

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
                  Horas Perdidas Mensalmente
                </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                  Empresários perdem em média 4 horas por mês organizando
                  documentos, fazendo download de PDFs e enviando zips para
                  contabilistas.
                </p>
</div>
</div>

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-file-warning" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
                  Caos Documental
                </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                  Faturas espalhadas entre WhatsApp, Gmail, Outlook e downloads
                  do portal das finanças. Risco elevado de multas da AT.
                </p>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
<div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              Estudos demonstram que empresas em Portugal
              <span className="text-brand-600">perdem muito dinheiro</span>
</h2>
<p className="text-lg text-slate-600 font-medium leading-relaxed">
              Não deixe o seu lucro desaparecer em burocracia.
            </p>
</div>
<div className="space-y-6">

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden">
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 shadow-sm group-hover:scale-110 group-hover:border-brand-100 transition-transform duration-300">
<svg className="lucide lucide-shield-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m2 2 20 20"></path>
</svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  Deduções de IVA Perdidas
                </h3>
<p className="text-slate-600 leading-relaxed">
                  Se não apresenta a fatura, não deduz o IVA. Para uma empresa
                  com €50k de despesas, perder 10% das faturas significa deitar
                  fora milhares de euros.
                </p>
</div>
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 shadow-sm group-hover:scale-110 group-hover:border-brand-100 transition-transform duration-300">
<svg className="lucide lucide-trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 18.5"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  IRC Agravado
                </h3>
<p className="text-slate-600 leading-relaxed">
                  Despesas não documentadas não abatem ao lucro tributável. O
                  seu IRC aumenta desnecessariamente porque a contabilidade não
                  recebeu os papéis.
                </p>
</div>
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 shadow-sm group-hover:scale-110 group-hover:border-brand-100 transition-transform duration-300">
<svg className="lucide lucide-alert-triangle group-hover:animate-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  Risco de Multas da AT
                </h3>
<p className="text-slate-600 leading-relaxed">
                  A falta de organização documental é a principal causa de
                  multas em inspeções tributárias. VINC mantém o seu arquivo
                  digital auditável e seguro.
                </p>
</div>
<div className="absolute top-0 left-0 w-1 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>

</section>

<section className="overflow-hidden insurance-section bg-white border-slate-100 border-b pt-24 pb-24 relative">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-8">
              O tempo que empresas e contabilistas perdem
              <span className="text-brand-600">buscando documentos</span>
              .
            </h2>
<div className="space-y-6 text-lg">
<p className="text-slate-500 font-medium italic">
                "O dia 10 de cada mês não precisa de ser um pesadelo."
              </p>
<p className="text-slate-900 font-semibold text-xl sm:text-2xl leading-relaxed">
                Acabe com os emails de "falta a fatura X". O VINC automatiza a
                recolha e entrega ao contabilista.
              </p>
</div>

<div className="mt-10">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300" href="#book">
                RECUPERAR O MEU TEMPO
                <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="hidden sm:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-slate-100 -z-10">
<div className="h-full bg-gradient-to-r from-red-400 via-brand-400 to-emerald-400 w-0 transition-all duration-[1500ms] ease-out delay-300 insurance-line-fill rounded-full" style={{width: '100%'}}></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">

<div className="insurance-step group flex flex-col transition-all duration-700 text-center opacity-0 translate-y-8 items-center">
<div className="mb-6 relative">
<div className="shadow-red-500/5 flex group-hover:scale-110 transition-transform duration-300 z-10 bg-white w-20 h-20 border-slate-200 border rounded-2xl relative shadow-lg items-center justify-center">
<svg className="text-red-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
<path d="M12 17h.01"></path>
</svg>
</div>

<div className="animate-ping bg-red-50 opacity-75 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>

<div className="-top-3 -right-3 text-[10px] uppercase font-bold text-white tracking-wide bg-red-500 border-white border-2 rounded-full px-2.5 py-1 absolute shadow-sm">
                    Perdida
                  </div>
</div>
<h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                  Fatura Perdida
                </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  Compra online, Uber ou almoço de negócios. O papel ficou no
                  bolso ou o email se perdeu.
                </p>
</div>

<div className="insurance-step group flex flex-col items-center text-center transition-all duration-700 delay-200">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-brand-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-brand-600 group-hover:rotate-180 transition-transform duration-700" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>

<div className="absolute -top-3 -right-3 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
                    Procura
                  </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Procura Manual
                </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  Horas perdidas em portais de fornecedores e caixas de spam à
                  procura do PDF.
                </p>
</div>

<div className="insurance-step group flex flex-col items-center text-center transition-all duration-700 delay-400">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-emerald-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-emerald-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>

<div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
                    Resolvido
                  </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Automação VINC
                </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  A IA deteta, extrai e envia para a contabilidade. Zero esforço
                  humano.
                </p>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-[#FDFBF9] relative overflow-hidden border-b border-slate-100" id="how-it-works">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.2] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
<h2 className="sm:text-4xl text-3xl font-bold text-slate-900 tracking-tight font-display mb-4">Como Funciona ?</h2>
<p className="leading-relaxed text-lg font-medium text-slate-500">
              Do email ao contabilista em piloto automático.
            </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-5 flex flex-col gap-4 relative">
<div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 hidden sm:block -z-10"></div>

<div className="process-step group relative cursor-pointer" data-step="1">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm group-hover:opacity-100 transition-opacity duration-300 -z-10 active-bg opacity-100"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-1">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 step-number bg-brand-600 text-white">
                    1
                  </div>
<div className="">
<h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors text-brand-600">
                      Conexão Segura
                    </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                      Conecte os seus emails (Gmail, Outlook) em 3 minutos.
                      Acesso somente leitura e seguro.
                    </p>
</div>
</div>
</div>

<div className="process-step group relative cursor-pointer" data-step="2">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm transition-opacity duration-300 -z-10 active-bg opacity-0"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-2">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 step-number bg-slate-100 text-slate-500">
                    2
                  </div>
<div className="">
<h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors text-slate-900">
                      IA Escaneia Tudo
                    </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                      A nossa IA monitoriza a sua caixa de entrada, identifica
                      faturas e extrai os dados (NIF, Data, Valor).
                    </p>
</div>
</div>
</div>

<div className="process-step group relative cursor-pointer" data-step="3">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm transition-opacity duration-300 -z-10 active-bg opacity-0"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-3">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 step-number bg-slate-100 text-slate-500">
                    3
                  </div>
<div className="">
<h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors text-slate-900">
                      Validação Simples
                    </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                      Receba um resumo diário no WhatsApp se houver dúvidas.
                      Confirme com um clique.
                    </p>
</div>
</div>
</div>

<div className="process-step group relative cursor-pointer" data-step="4">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm transition-opacity duration-300 -z-10 active-bg opacity-0"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-4">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 step-number bg-slate-100 text-slate-500">
                    4
                  </div>
<div className="">
<h3 className="font-display font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors text-slate-900">
                      Contabilidade Feliz
                    </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                      No final do mês, o seu contabilista recebe um email com
                      todas as faturas organizadas.
                    </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-full min-h-[500px] lg:sticky lg:top-32">
<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">

<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
</div>
<div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    VINC Dashboard
                  </div>
</div>
<div className="p-8 space-y-8">

<div className="grid grid-cols-3 gap-6">

<div className="space-y-1">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Faturas Hoje
                      </div>
<div className="text-3xl font-display font-bold text-slate-900 transition-all duration-500" id="dash-domains">0</div>
</div>

<div className="space-y-1">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Status Sync
                      </div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-500 bg-slate-100 text-slate-600" id="dash-status">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400" id="dash-status-dot"></span>
<span className="" id="dash-status-text">Conectando...</span>
</div>
</div>

<div className="space-y-2">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Poupança Est.
                      </div>
<div className="text-xl font-display font-bold text-slate-900 transition-all duration-500" id="dash-capacity">€0</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 rounded-full w-0 transition-all duration-700 ease-out" id="dash-capacity-bar" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="relative py-4">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>

<div className="absolute top-1/2 left-0 h-0.5 bg-brand-600 -translate-y-1/2 transition-all duration-700 w-0" id="dash-timeline-line" style={{width: '0%'}}></div>
<div className="relative z-10 flex justify-between">

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-white border-2 border-brand-600 ring-4 ring-white transition-all duration-300 scale-125 shadow-md shadow-brand-200" id="node-1"></div>
<span className="text-[10px] font-bold text-brand-600 uppercase tracking-wide transition-colors duration-300" id="label-1">
                          Email
                        </span>
</div>

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300" id="node-2"></div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300" id="label-2">
                          Scan
                        </span>
</div>

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300" id="node-3"></div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300" id="label-3">
                          Validar
                        </span>
</div>

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300" id="node-4"></div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300" id="label-4">
                          Contab.
                        </span>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-xl border border-slate-100 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-white">
<span className="text-xs font-bold text-slate-700">
                        Atividade Recente
                      </span>
<span className="text-[10px] text-slate-400 font-mono" id="dash-health-status">A aguardar conexão...</span>
</div>
<div className="p-4 space-y-4" id="dash-rows">

<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 w-1/3">
<img className="w-4 h-4 transition-all duration-500 opacity-50 grayscale" id="row-img-1" src="https://cdn.simpleicons.org/uber/000000"/>
<span className="font-medium transition-colors duration-500 text-slate-400" id="row-text-1">
                            Uber Trip
                          </span>
</div>
<div className="w-1/3 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 bg-slate-100 text-slate-400" id="row-badge-1">Pendente</span>
</div>
<div className="w-1/3 flex justify-end">
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 transition-all duration-700" id="row-bar-1" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 w-1/3">
<img className="w-4 h-4 transition-all duration-500 opacity-50 grayscale" id="row-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="font-medium transition-colors duration-500 text-slate-400" id="row-text-2">
                            Amazon ES
                          </span>
</div>
<div className="w-1/3 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 bg-slate-100 text-slate-400" id="row-badge-2">Pendente</span>
</div>
<div className="w-1/3 flex justify-end">
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 transition-all duration-700" id="row-bar-2" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 w-1/3">
<div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500 transition-all duration-500 opacity-50 grayscale" id="row-img-3">
                            M
                          </div>
<span className="font-medium transition-colors duration-500 text-slate-400" id="row-text-3">
                            MEO
                          </span>
</div>
<div className="w-1/3 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 bg-slate-100 text-slate-400" id="row-badge-3">...</span>
</div>
<div className="w-1/3 flex justify-end">
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 transition-all duration-700" id="row-bar-3" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-white relative overflow-hidden border-b border-slate-100" id="integrations">
<style>
          @keyframes orbit-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes orbit-counter-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .animate-orbit-ring {
            animation: orbit-rotate 40s linear infinite;
          }
          .animate-orbit-item {
            animation: orbit-counter-rotate 40s linear infinite;
          }
          .group:hover .animate-orbit-ring,
          .group:hover .animate-orbit-item {
            animation-play-state: paused;
          }
        </style>
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] font-sans">
                Integrações
              </span>
</div>
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              Gmail, Outlook, WhatsApp e muito mais.
            </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
              O VINC integra-se com o seu email e comunica consigo via WhatsApp.
              Em breve, conectamos diretamente com o seu programa de faturação.
            </p>
</div>

<div className="sm:h-[450px] flex group select-none w-full h-[320px] max-w-[90vw] mr-auto ml-auto relative items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-slate-100 shadow-[0_0_60px_-15px_rgba(0,0,0,0.05)]"></div>
<div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-slate-100 border-dashed opacity-70"></div>
</div>

<div className="z-20 sm:h-24 sm:w-24 shadow-slate-900/20 flex transition-all duration-300 group-hover:scale-105 group-hover:shadow-brand-500/20 bg-slate-900 w-10 h-20 ring-white ring-4 rounded-2xl relative shadow-2xl items-center justify-center">
<svg fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M25 25 L50 80 L75 25" stroke="#bef264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
</svg>
<div className="-z-10 animate-pulse-slow bg-brand-500/30 w-1 h-1 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-2xl"></div>
</div>

<div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] animate-orbit-ring rounded-full pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
<div className="group/node flex flex-col items-center justify-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-brand-100 relative">
<img alt="Gmail" className="w-8 h-8 object-contain" src="https://cdn.simpleicons.org/gmail/EA4335"/>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
<div className="group/node flex flex-col items-center justify-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-brand-100 relative">
<img alt="Outlook" className="w-8 h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto z-30">
<div className="group/node flex flex-col items-center justify-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-brand-100 relative">
<img alt="WhatsApp" className="w-8 h-8 object-contain" src="https://cdn.simpleicons.org/whatsapp/25D366"/>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
<div className="group/node flex flex-col items-center justify-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-brand-100 relative">
<svg className="w-8 h-8 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="cta-section">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row min-h-[550px] transition-all duration-700 ease-out group/card" id="cta-card-animate">

<div className="flex-1 bg-slate-900 p-10 sm:p-16 flex flex-col justify-center relative z-10">
<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-lg">
<h2 className="sm:text-5xl leading-[1.1] text-4xl font-bold text-white tracking-tight font-display">Contabilista ? Torne-se Parceiro <span className="text-emerald-400">VINC.</span></h2>
<p className="mt-6 text-lg text-slate-400 leading-relaxed font-medium text-balance">
                  Contabilistas e Afiliados: implementem VINC nos vossos
                  clientes e ganhem até
                  <span className="text-white">1000€ por mês</span>
                  em comissões recorrentes.
                </p>
<div className="mt-10 flex flex-col items-start gap-4">
<a className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-300 bg-brand-600 border border-brand-500 rounded-full shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] hover:bg-brand-500 hover:scale-[1.03] active:scale-[0.98] group/btn overflow-hidden" href="#partners">
<span className="relative z-10 tracking-widest uppercase">
                      Candidatura de Parceiro
                    </span>
<div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
</a>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Acesso exclusivo ao portal de parceiros.</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-gradient-to-br from-emerald-50 via-[#E0F2F1] to-slate-100 relative p-10 flex items-center justify-center overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>
<div className="relative w-full max-w-md perspective-1000">

<div className="relative z-20 bg-slate-900 rounded-2xl shadow-2xl shadow-emerald-900/20 border border-slate-800 p-6 sm:p-8 transform rotate-1 transition-transform duration-700 group-hover/card:rotate-0 group-hover/card:translate-y-[-5px]">

<div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-serif italic text-lg border border-white/10">
                      P
                    </div>
<div className="space-y-2 flex-1">
<div className="h-2 w-24 bg-white/20 rounded-full"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="space-y-4">
<div className="h-3 w-full bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="h-3 w-[90%] bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="flex gap-2 pt-2">
<div className="h-8 w-32 bg-emerald-600/20 rounded-lg border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-mono">
                        Comissão: €120
                      </div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-slate-800 rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-50"></div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-[#FDFBF9] relative overflow-hidden border-b border-slate-100" id="love-wall">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-6 cursor-default">
              Resultados Reais
            </div>
<h2 className="sm:text-5xl text-balance text-3xl font-bold text-slate-900 tracking-tight font-display mb-6">
              Uma
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">Gestão sem stress</span>
              .
            </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed text-balance">
              O que dizem os nossos clientes de vários setores.
            </p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12 relative z-20" id="wall-filters">
<button className="filter-btn active group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:scale-105" data-filter="all">
              Todas
            </button>
<button className="filter-btn group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50" data-filter="servicos">
              Serviços
            </button>
<button className="filter-btn group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50" data-filter="construcao">
              Construção
            </button>
<button className="filter-btn group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50" data-filter="marketing">
              Marketing
            </button>
<button className="filter-btn group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50" data-filter="restaurantes">
              Restaurantes
            </button>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" id="wall-grid">

<div className="wall-card group break-inside-avoid relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50" data-category="servicos">
<div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-brand-500 to-teal-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700">
                  Serviços
                </span>
</div>
<blockquote className="text-lg font-medium text-slate-800 leading-relaxed mb-8">
                "Poupámos cerca de 10 horas por mês na organização de faturas. O
                meu contabilista adora receber o relatório do VINC."
              </blockquote>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<div className="h-10 w-10 rounded-full bg-slate-100 overflow-hidden ring-2 ring-white shadow-sm">
<img alt="User" className="h-full w-full object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Felix"/>
</div>
<div>
<div className="font-bold text-sm text-slate-900">João Silva</div>
<div className="text-xs text-slate-500 font-medium">
                    CEO @ TechSolutions
                  </div>
</div>
</div>
</div>

<div className="wall-card group break-inside-avoid relative rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-white" data-category="restaurantes">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Restauração
                </span>
</div>
<blockquote className="leading-relaxed text-base font-medium text-slate-700 mb-6">
                "Tiramos fotos das faturas do Makro e o VINC organiza tudo.
                Nunca mais perdi IVA nas compras."
              </blockquote>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 ring-2 ring-white">
                  MP
                </div>
<div className="">
<div className="font-bold text-xs text-slate-900">
                    Maria Pereira
                  </div>
<div className="text-[10px] text-slate-500 font-medium">
                    Gerente, Tasca da Esquina
                  </div>
</div>
</div>
</div>

<div className="wall-card group break-inside-avoid relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="construcao">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                  Construção
                </span>
</div>
<blockquote className="text-base font-medium text-slate-700 leading-relaxed mb-6">
                "Funciona perfeitamente para faturas de combustível e materiais.
                A equipa manda foto no WhatsApp e está feito."
              </blockquote>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 ring-2 ring-white">
                  RL
                </div>
<div>
<div className="font-bold text-xs text-slate-900">Rui Lopes</div>
<div className="text-[10px] text-slate-500 font-medium">
                    Eng. Civil, BuildCo
                  </div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-white border-slate-100 border-t pt-24 pb-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              Preços Simples
            </h2>
<p className="text-slate-500 text-lg">
              Comece gratuitamente e evolua conforme a sua empresa cresce.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col">
<h3 className="font-bold text-lg text-slate-900 mb-2">Starter</h3>
<div className="text-4xl font-display font-bold text-slate-900 mb-6">
                €19
                <span className="text-base font-medium text-slate-400 font-sans">
                  /mês
                </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Até 50 faturas/mês
                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  1 Conta de Email
                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Exportação CSV/Excel
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-100 text-slate-900 font-semibold text-center rounded-xl hover:bg-slate-200 transition-colors" href="#book">
                Começar Grátis
              </a>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-brand-500/40">
                Popular
              </div>
<h3 className="font-bold text-lg text-white mb-2">Growth</h3>
<div className="text-4xl font-display font-bold text-white mb-6">
                €49
                <span className="text-base font-medium text-slate-400 font-sans">
                  /mês
                </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-5 h-5 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Até 500 faturas/mês
                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-5 h-5 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Integração WhatsApp
                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-5 h-5 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Alertas de Faltas
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-brand-500 text-white font-semibold text-center rounded-xl hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20" href="#book">
                Experimentar 14 Dias
              </a>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col">
<h3 className="font-bold text-lg text-slate-900 mb-2">Business</h3>
<div className="text-4xl font-display font-bold text-slate-900 mb-6">
                €99
                <span className="text-base font-medium text-slate-400 font-sans">
                  /mês
                </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Faturas Ilimitadas
                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Múltiplas Empresas (NIFs)
                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Arquivo Digital Certificado
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-100 text-slate-900 font-semibold text-center rounded-xl hover:bg-slate-200 transition-colors" href="#book">
                Contactar Vendas
              </a>
</div>
</div>
</div>
</section><section className="py-24 bg-slate-900 relative overflow-hidden text-white border-t border-slate-800" id="calculator">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-900/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-emerald-900/20 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-10">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-[10px] font-bold uppercase tracking-widest text-brand-400">
                  ROI Calculator
                </div>
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                  Quanto vale o seu tempo?
                </h2>
<p className="text-slate-400 text-lg leading-relaxed">
                  Simule a poupança anual ao automatizar a gestão de faturas da
                  sua empresa com a VINC.
                </p>
</div>
<div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm space-y-8">

<div>
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-semibold text-slate-300" htmlFor="faturas">
                      Faturas por Mês
                    </label>
<span className="text-brand-400 font-mono font-bold text-lg" id="display-faturas">150</span>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500" id="faturas" max="1000" min="10" step="10" type="range" value="150"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono uppercase">
<span>10</span>
<span>1000+</span>
</div>
</div>

<div className="">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-semibold text-slate-300" htmlFor="tempo">
                      Minutos gastos por fatura
                    </label>
<div className="flex items-baseline gap-1">
<span className="text-brand-400 font-mono font-bold text-lg" id="display-tempo">5</span>
<span className="text-xs text-slate-500">min</span>
</div>
</div>
<p className="text-xs text-slate-500 mb-3 -mt-2">
                    Procurar, descarregar, organizar e enviar.
                  </p>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500" id="tempo" max="15" min="1" step="1" type="range" value="5"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono uppercase">
<span>1 min</span>
<span>15 min</span>
</div>
</div>

<div className="">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-semibold text-slate-300" htmlFor="custo">
                      Custo Hora (Admin/Gestão)
                    </label>
<div className="flex items-baseline gap-1">
<span className="text-brand-400 font-mono font-bold text-lg" id="display-custo">€25</span>
</div>
</div>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500" id="custo" max="100" min="10" step="5" type="range" value="25"/>
</div>
</div>
</div>

<div className="relative">

<div className="relative z-10 bg-gradient-to-br from-brand-600 to-emerald-800 rounded-3xl p-1 shadow-2xl shadow-emerald-900/50 transform hover:scale-[1.01] transition-transform duration-500">
<div className="bg-slate-900 rounded-[22px] p-8 sm:p-12 h-full flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-emerald-200 font-medium text-sm uppercase tracking-widest mb-2">
                      Poupança Anual Estimada
                    </h3>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-6xl sm:text-7xl font-display font-bold text-white tracking-tighter" id="total-savings">3750 €</span>
</div>
<div className="space-y-6 pt-8 border-t border-slate-800">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<span className="text-slate-300 font-medium">
                            Horas Poupas / Ano
                          </span>
</div>
<span className="text-2xl font-bold text-white font-display" id="time-savings">150h</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<span className="text-slate-300 font-medium">
                            Custo Recuperado
                          </span>
</div>
<span className="text-2xl font-bold text-white font-display" id="cost-savings">3750 €</span>
</div>
</div>
</div>

<div className="mt-12 relative z-10">
<a className="w-full inline-flex items-center justify-center bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]" href="#book">
                      Começar a Poupar Agora
                      <svg className="ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="text-center text-xs text-slate-500 mt-4">
                      Teste grátis de 14 dias. Não requer cartão de crédito.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="py-24 bg-[#FDFBF9] relative overflow-hidden border-b border-slate-100" id="founder-story">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<figure className="relative overflow-hidden rounded-[40px] bg-white/80 backdrop-blur-xl ring-1 ring-slate-200/70 border-t border-slate-200/70 shadow-2xl">
<div className="px-5 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 text-center relative z-10">
<div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-800 text-xs px-3 py-1.5 ring-1 ring-brand-200 font-bold uppercase tracking-wider mb-8">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.8 5.5 21 7 14 2 9.3 9 8.5 12 2"></polygon>
</svg>
                Palavra do Fundador
              </div>
<blockquote className="mb-10">
<p className="sm:text-4xl md:text-5xl leading-[1.15] text-2xl font-medium text-slate-900 tracking-tight font-display max-w-4xl mr-auto ml-auto">"A contabilidade não deve ser um peso e stress para nossas empresas. Criamos a VINC para que <span className="text-brand-600 italic font-serif">
                    empreendedores
                  </span> recuperem o seu tempo e <span className="text-brand-600 italic font-serif">
                    contabilistas
                  </span> recebam tudo organizado."</p>
</blockquote>
<div className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden aspect-video shadow-2xl shadow-slate-200/50 group cursor-pointer mb-12 ring-1 ring-slate-200">
<img alt="Office Environment" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
<div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<svg className="text-brand-600 ml-1" fill="currentColor" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
<div className="absolute bottom-6 left-6 text-left">
<div className="text-white font-bold text-lg">
                    A História da VINC
                  </div>
<div className="text-slate-200 text-sm">2 min • Ver vídeo</div>
</div>
</div>
<figcaption className="flex items-center justify-center gap-4">
<img alt="Walter Sousa" className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-md" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Walter&amp;backgroundColor=c0aede"/>
<div className="text-left">
<div className="text-slate-900 font-bold text-lg leading-none">
                    Walter Sousa
                  </div>
<div className="text-slate-500 text-sm font-medium">
                    Fundador &amp; CEO VINC AI
                  </div>
</div>
</figcaption>
</div>
<div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-[50%] bg-gradient-to-t from-brand-100/50 to-transparent blur-3xl"></div>
</figure>
</div>
</section>
<section className="overflow-hidden bg-white border-slate-100 border-b pt-24 pb-24 relative" id="future-integrations">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="mb-20 max-w-3xl mx-auto">
<h2 className="sm:text-4xl text-3xl font-bold text-slate-900 tracking-tight font-display mb-4">Integração em todos os portais e fornecedores</h2>
<p className="text-lg text-slate-500 max-w-2xl mr-auto ml-auto">Em breve, a VINC ligar-se-á diretamente a todos os portais e serviços onde as suas faturas são geradas e não recebemos pdf's por email.</p>
</div>
<div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute z-20 w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-500/20 ring-4 ring-white">
<svg fill="none" height="40" viewbox="0 0 100 100" width="40">
<path d="M25 25 L50 80 L75 25" stroke="#bef264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
</svg>
</div>

<div className="absolute w-[280px] h-[280px] border border-slate-200/60 rounded-full animate-spin-slow" style={{animationDuration: '40s'}}>
<div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-3 rounded-2xl shadow-md border border-slate-100">
<img className="w-6 h-6" src="https://cdn.simpleicons.org/amazon/default"/>
</div>
<div className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-md border border-slate-100">
<img className="w-6 h-6" src="https://cdn.simpleicons.org/stripe/635BFF"/>
</div>
<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white p-3 rounded-2xl shadow-md border border-slate-100">
<img className="w-6 h-6" src="https://cdn.simpleicons.org/uber/000000"/>
</div>
<div className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-md border border-slate-100">
<img className="w-6 h-6" src="https://cdn.simpleicons.org/paypal/00457C"/>
</div>
</div>

<div className="absolute w-[440px] h-[440px] border border-slate-200/40 rounded-full animate-spin-reverse-slow" style={{animationDuration: '55s'}}>
<div className="absolute top-[14%] right-[14%] bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100">
<img className="w-5 h-5" src="https://cdn.simpleicons.org/googleads/4285F4"/>
</div>
<div className="absolute bottom-[14%] left-[14%] bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100">
<img className="w-5 h-5" src="https://cdn.simpleicons.org/meta/0668E1"/>
</div>
<div className="absolute top-[14%] left-[14%] bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100">
<img className="w-5 h-5" src="https://cdn.simpleicons.org/adobe/FF0000"/>
</div>
<div className="absolute bottom-[14%] right-[14%] bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100">
<img className="w-5 h-5" src="https://cdn.simpleicons.org/microsoft/5E5E5E"/>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100">
<img className="w-5 h-5" src="https://cdn.simpleicons.org/amazonaws/232F3E"/>
</div>
</div>

<div className="absolute w-[600px] h-[600px] border border-slate-200/30 dashed rounded-full animate-spin-slow" style={{animationDuration: '80s'}}>
<div className="absolute top-[10%] left-[30%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/hubspot/FF7A59"/>
</div>
<div className="absolute top-[30%] right-[10%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/notion/000000"/>
</div>
<div className="absolute bottom-[20%] right-[20%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/github/181717"/>
</div>
<div className="absolute bottom-[40%] left-[5%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/vercel/000000"/>
</div>
<div className="absolute top-[5%] right-[40%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/openai/412991"/>
</div>
<div className="absolute bottom-[5%] left-[50%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/revolut/0075EB"/>
</div>
<div className="absolute top-[50%] right-[0%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/fiverr/1DBF73"/>
</div>
<div className="absolute top-[50%] left-[0%] bg-white p-2 rounded-xl shadow-sm border border-slate-50 grayscale hover:grayscale-0 transition-all">
<img className="w-4 h-4" src="https://cdn.simpleicons.org/aliexpress/FF4747"/>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden text-white bg-slate-900 pt-24 pb-24 relative" id="contact-partners">
<div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200">
<div className="flex items-center justify-between mb-6">
<div className="">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Suporte &amp; Vendas
                    </p>
<h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                      Fale Connosco
                    </h3>
</div>
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</div>
</div>
<form className="space-y-4">
<div className="">
<label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Nome
                    </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="João Silva" type="text"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Email Profissional
                    </label>
<div className="relative">
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pl-10 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="joao@empresa.com" type="email"/>
<svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Mensagem
                    </label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="Tenho interesse em ser parceiro..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all hover:translate-y-[-1px] shadow-lg shadow-slate-900/10" type="button">
                    Enviar Mensagem
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 pt-8">
<h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 tracking-tight">
                Dúvidas ou
                <span className="text-emerald-400">Parcerias?</span>
</h2>
<p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Tem um escritório de contabilidade ou uma rede de contactos
                empresariais? Torne-se um parceiro VINC e receba comissões
                recorrentes que podem ultrapassar os
                <strong className="text-white">€1000/mês</strong>
                .
              </p>
<div className="grid sm:grid-cols-2 gap-8">
<div className="flex gap-5 group">
<div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/10 transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="8.5" cy="7" r="4"></circle>
<line x1="20" x2="20" y1="8" y2="14"></line>
<line x1="23" x2="17" y1="11" y2="11"></line>
</svg>
</div>
<div className="">
<h4 className="font-bold text-white text-lg">
                      Programa de Afiliados
                    </h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      Ganhe 20% de comissão vitalícia por cada cliente indicado.
                      Painel exclusivo para parceiros.
                    </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div className="">
<h4 className="font-bold text-white text-lg">
                      Suporte Prioritário
                    </h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      Respondemos a todas as dúvidas em menos de 24h úteis.
                      Apoio na configuração inicial.
                    </p>
</div>
</div>
</div>
<div className="mt-10 flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="Support" className="h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Ana"/>
<img alt="Support" className="h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Pedro"/>
<img alt="Support" className="h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://api.dicebear.com/9.x/micah/svg?seed=Sofia"/>
</div>
<div className="text-xs text-slate-500 font-medium">
<span className="text-white">Equipa de Suporte VINC</span>
                  
                  Lisboa, Portugal
                </div>
</div>
</div>
</div>
</div>
</section>

</main>

<footer className="bg-[#FDFBF9] border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
<svg fill="none" height="20" viewbox="0 0 100 100" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M25 25 L50 80 L75 25" stroke="#bef264" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
</svg>
</div>
<span className="font-display font-bold text-xl text-slate-900">
                VINC
              </span>
</a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Ajudamos empresas portuguesas a recuperar tempo e dinheiro
              automatizando a gestão de despesas com Inteligência Artificial.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
<div>
<h3 className="font-bold text-slate-900 text-sm mb-4">Produto</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-brand-600 transition-colors" href="#how-it-works">
                  Como Funciona
                </a>
</li>
<li>
<a className="hover:text-brand-600 transition-colors" href="#integrations">
                  Integrações
                </a>
</li>
<li>
<a className="hover:text-brand-600 transition-colors" href="#pricing">
                  Preços
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-bold text-slate-900 text-sm mb-4">Empresa</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-brand-600 transition-colors" href="#">
                  Sobre
                </a>
</li>
<li>
<a className="hover:text-brand-600 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-brand-600 transition-colors" href="#partners">
                  Parceiros
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-bold text-slate-900 text-sm mb-4">Legal</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-brand-600 transition-colors" href="#">
                  Privacidade
                </a>
</li>
<li>
<a className="hover:text-brand-600 transition-colors" href="#">
                  Termos
                </a>
</li>
<li>
<a className="hover:text-brand-600 transition-colors" href="#">
                  Cookies
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-xs text-slate-400">
            © 2024 VINC AI. Todos os direitos reservados. Feito com ❤️ em
            Portugal.
          </span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600">
              Todos os sistemas operacionais
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
