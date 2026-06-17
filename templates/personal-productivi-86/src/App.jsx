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
display: ['Rajdhani', 'sans-serif'],
},
colors: {
ps: {
dark: '#0B0E14',
panel: '#151921',
blue: '#0041C2',
cyan: '#00E0FF',
text: '#E2E8F0',
muted: '#94A3B8'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
'slide-up': 'slideUp 0.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseGlow: {
'0%': { boxShadow: '0 0 5px rgba(0, 224, 255, 0.2)' },
'100%': { boxShadow: '0 0 20px rgba(0, 224, 255, 0.6), 0 0 10px rgba(0, 65, 194, 0.4)' }
},
slideUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' }
}
}
}
}
}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Rajdhani', 'sans-serif'],
},
colors: {
liquid: {
blue: '#3b82f6',
light: '#60a5fa',
dark: '#2563eb',
},
glass: {
surface: 'rgba(255, 255, 255, 0.65)',
border: 'rgba(255, 255, 255, 0.9)',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shine': 'shine 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shine: {
'0%': { backgroundPosition: '200% center' },
'100%': { backgroundPosition: '-200% center' },
}
}
}
}
}



      let currentStep = 0;
      const totalSteps = 5;
      const screens = document.querySelectorAll('.screen');
      const progressDots = document.querySelectorAll('[id^="progress-"]');
      const btnNext = document.getElementById('btn-next');
      const btnText = document.getElementById('btn-text');

      function updateView() {
          screens.forEach((screen, index) => {
              if (index === currentStep) {
                  screen.classList.remove('hidden');
                  screen.classList.add('active');
                  // Trigger animation restart
                  screen.style.animation = 'none';
                  screen.offsetHeight; /* trigger reflow */
                  screen.style.animation = null;
              } else {
                  screen.classList.remove('active');
                  // Small delay to allow fade out if we implemented exiting class logic fully
                  // For now, simple switch
              }
          });

          // Update Progress
          progressDots.forEach((dot, index) => {
              if (index === currentStep) {
                  dot.className = 'w-8 h-1 bg-ps-cyan rounded-full transition-all duration-300';
              } else {
                  dot.className = 'w-2 h-1 bg-white/10 rounded-full transition-all duration-300';
              }
          });

          // Update Button Text on last step
          if (currentStep === totalSteps - 1) {
               btnNext.style.display = 'none'; // Hide continue button, use main CTA
          } else {
               btnNext.style.display = 'flex';
               btnText.textContent = "Continue";
          }
      }

      function nextStep() {
          if (currentStep < totalSteps - 1) {
              // Add exit animation to current
              screens[currentStep].classList.remove('active');

              currentStep++;
              updateView();
          }
      }

      // Init
      updateView();
    
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
      

<div className="bg-shapes pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B0E14] to-[#0B0E14]"></div>
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] animate-pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>

<iconify-icon className="shape text-6xl" icon="mdi:triangle-outline" style={{top: '15%', left: '10%', animationDelay: '0s'}}></iconify-icon>
<iconify-icon className="shape text-5xl" icon="mdi:circle-outline" style={{top: '25%', right: '15%', animationDelay: '2s'}}></iconify-icon>
<iconify-icon className="shape text-7xl" icon="mdi:close" style={{bottom: '20%', left: '20%', animationDelay: '4s'}}></iconify-icon>
<iconify-icon className="shape text-4xl" icon="mdi:square-outline" style={{bottom: '30%', right: '10%', animationDelay: '1s'}}></iconify-icon>

<div className="absolute inset-0 opacity-[0.03]" style={{background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%', pointerEvents: 'none'}}></div>
</div>

<main className="flex flex-col w-full h-full max-w-md z-10 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative" id="app-container">

<div className="absolute top-6 left-0 w-full px-6 flex justify-between items-center z-20">
<div className="flex items-center gap-2 opacity-70">
<iconify-icon className="text-ps-cyan" icon="lucide:gamepad-2"></iconify-icon>
<span className="text-[10px] font-mono tracking-widest uppercase">
            RHYTHM_OS v1.0
          </span>
</div>
<div className="flex gap-1">
<div className="w-8 h-1 bg-ps-cyan rounded-full transition-all duration-300" id="progress-1"></div>
<div className="w-2 h-1 bg-white/10 rounded-full transition-all duration-300" id="progress-2"></div>
<div className="w-2 h-1 bg-white/10 rounded-full transition-all duration-300" id="progress-3"></div>
<div className="w-2 h-1 bg-white/10 rounded-full transition-all duration-300" id="progress-4"></div>
<div className="w-2 h-1 bg-white/10 rounded-full transition-all duration-300" id="progress-5"></div>
</div>
</div>

<section className="screen active" data-index="0" style={{}}>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="relative mb-8">
<div className="absolute inset-0 bg-ps-blue/30 blur-xl rounded-full animate-pulse"></div>
<div className="flex animate-float bg-gradient-to-br from-gray-800 to-black w-24 h-24 border-white/10 border rounded-[2rem] relative shadow-2xl items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-ps-cyan/30 rounded-[2rem] animate-[ping_0.6s_ease-out_1_forwards] pointer-events-none"></div>

<div className="absolute inset-0 border-2 border-ps-cyan/40 rounded-[2rem] animate-[ping_0.8s_ease-out_0.1s_1_forwards] opacity-0 pointer-events-none"></div>

<div className="relative z-10 animate-slide-up">
<svg className="text-5xl text-ps-cyan drop-shadow-[0_0_15px_rgba(0,224,255,0.5)] animate-[spin_0.7s_cubic-bezier(0.34,1.56,0.64,1)_1]" data-icon-set="lucide" data-lucide="infinity" height="48" style={{}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<h1 className="text-5xl font-bold font-display tracking-tighter mb-4 text-white drop-shadow-lg">
            ВЕРНИ
            <span className="bg-clip-text text-sky-500 bg-gradient-to-r from-ps-blue to-ps-cyan">
              РИТМ
            </span>
</h1>
<p className="text-ps-muted text-lg max-w-[280px] leading-relaxed">
            Система мягкой подотчетности для восстановления управления жизнью.
          </p>
</div>
</section>

<section className="screen" data-index="1">
<div className="flex-1 flex flex-col justify-center">
<div className="glass-panel rounded-3xl p-6 border-l-4 border-l-red-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon icon="lucide:alert-octagon" width="64"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-red-500 text-xl animate-pulse" icon="lucide:activity"></iconify-icon>
<h2 className="text-xl font-bold font-display uppercase tracking-widest">
                Status: Critical
              </h2>
</div>
<p className="text-slate-300 mb-6 font-light leading-relaxed">
              Знакомо ощущение "Дня сурка"? Система зависла:
            </p>
<ul className="space-y-4 font-mono text-sm">
<li className="flex items-center gap-3 text-red-300">
<iconify-icon icon="lucide:x-circle"></iconify-icon>
<span>Откладывание задач</span>
</li>
<li className="flex items-center gap-3 text-red-300">
<iconify-icon icon="lucide:x-circle"></iconify-icon>
<span>Нет энергии на главное</span>
</li>
<li className="flex items-center gap-3 text-red-300">
<iconify-icon icon="lucide:x-circle"></iconify-icon>
<span>Скроллинг вместо сна</span>
</li>
</ul>
</div>
<p className="mt-6 text-center text-sm font-display uppercase tracking-widest text-ps-muted">
            Ты не ленивый.
            <span className="text-white">Ты потерял ритм.</span>
</p>
</div>
</section>

<section className="screen" data-index="2">
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl font-bold font-display mb-6 text-center">
            ПОЧЕМУ ПРИЛОЖЕНИЯ
            
            НЕ РАБОТАЮТ?
          </h2>
<div className="glass-panel rounded-2xl p-6 mb-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="lucide:smartphone-off"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-sm uppercase tracking-wide mb-1 text-slate-300">
                  Одиночная игра
                </h3>
<p className="text-xs text-ps-muted leading-relaxed">
                  Приложению все равно, сделал ты задачу или нет. Никто не
                  узнает.
                </p>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 border border-ps-blue/30 bg-gradient-to-br from-ps-blue/10 to-transparent">
<div className="flex items-center gap-2 mb-3 text-ps-cyan font-bold font-display uppercase text-xs tracking-widest">
<iconify-icon icon="lucide:users"></iconify-icon>
              Multiplayer Mode
            </div>
<p className="text-sm text-slate-200">
              Ритм — это обязательство перед
              
              . Мягкое социальное давление, которое не дает "слиться".
            </p>
</div>
</div>
</section>

<section className="screen" data-index="3">
<div className="flex-1 flex flex-col justify-center gap-3">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl font-bold font-display">ГЕЙМПЛЕЙ</h2>
<span className="px-2 py-0.5 rounded bg-ps-cyan/20 text-ps-cyan text-[10px] font-mono border border-ps-cyan/30">
              TUTORIAL
            </span>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="text-2xl text-ps-cyan font-display font-bold">01</div>
<div>
<h3 className="text-sm font-bold uppercase">Фокус месяца</h3>
<p className="text-[11px] text-ps-muted">
                Одна главная цель. Не 10, а одна.
              </p>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="text-2xl text-ps-cyan font-display font-bold">02</div>
<div>
<h3 className="text-sm font-bold uppercase">Три задачи</h3>
<p className="text-[11px] text-ps-muted">
                План на неделю. Твой компас.
              </p>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
<div className="text-2xl text-ps-cyan font-display font-bold">03</div>
<div>
<h3 className="text-sm font-bold uppercase">Коннект</h3>
<p className="text-[11px] text-ps-muted">
                Краткий отчет куратору раз в неделю.
              </p>
</div>
</div>
<div className="mt-4 p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between">
<div className="text-xs uppercase font-bold tracking-widest text-slate-400">
              Lives Left
            </div>
<div className="flex gap-1">
<iconify-icon className="text-red-500 animate-pulse" icon="mdi:heart"></iconify-icon>
<iconify-icon className="text-red-500 animate-pulse" icon="mdi:heart"></iconify-icon>
<iconify-icon className="text-red-500 animate-pulse" icon="mdi:heart"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="screen" data-index="4">
<div className="flex-1 flex flex-col justify-center items-center text-center">
<h2 className="text-3xl font-bold font-display mb-2 tracking-tighter">
            READY PLAYER ONE?
          </h2>
<p className="text-ps-muted text-sm mb-8">
            4 недели поддержки. Еженедельная калибровка.
          </p>
<div className="glass-panel p-8 rounded-[2rem] w-full relative overflow-hidden group mb-8">
<div className="absolute inset-0 bg-gradient-to-tr from-ps-blue/20 via-transparent to-ps-cyan/10 opacity-50"></div>
<div className="relative z-10">
<div className="text-5xl font-display font-bold text-white mb-1">
                999 ₽
              </div>
<div className="text-xs text-ps-muted uppercase tracking-widest">
                / месяц
              </div>
</div>
</div>
<button className="w-full py-4 rounded-full bg-white text-black font-bold font-display text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
<span>Start Game</span>
<iconify-icon className="text-sm" icon="lucide:play"></iconify-icon>
</button>
<p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest">
            Cancel Anytime • Secure Payment
          </p>
</div>
</section>

<div className="absolute bottom-8 left-0 w-full px-6 z-20">
<button className="ps-btn flex uppercase animate-pulse-glow group font-bold text-white tracking-widest font-display w-full h-14 rounded-full gap-x-3 gap-y-3 items-center justify-center" id="btn-next" onclick="nextStep()" style={{display: 'flex'}}>
<div className="w-6 h-6 rounded-full border-2 border-ps-cyan flex items-center justify-center">
<iconify-icon className="text-ps-cyan text-sm rotate-45 group-active:scale-90 transition-transform" icon="mdi:close"></iconify-icon>
</div>
<span className="" id="btn-text">Continue</span>
</button>
</div>
</main>


    </>
  );
}
