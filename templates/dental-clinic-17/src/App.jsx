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
display: ['Montserrat', 'sans-serif'],
ui: ['Manrope', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
brand: {
50: '#F0F5FF',
100: '#E0EAFF',
200: '#C7D9FF',
300: '#A3C2FF',
400: '#759FFF',
500: '#4270FF',
600: '#2550EB',
700: '#193BB8',
800: '#163191',
900: '#162B72',
950: '#0E1943',
},
gray: {
850: '#1f2937',
900: '#111827',
950: '#030712',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // 1. Reveal on Scroll Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });

        // 2. Calculator Logic
        let currentMethod = 'digital';
        let currentGoal = 'alinhamento';
        
        const calcData = {
            'alinhamento': { 
                digital: { cost: 3500, complex: 'Média', gauge: 45, width: '60%' },
                convencional: { cost: 2800, complex: 'Alta', gauge: 80, width: '45%' }
            },
            'implantes': { 
                digital: { cost: 5200, complex: 'Alta', gauge: 75, width: '85%' },
                convencional: { cost: 4500, complex: 'Muito Alta', gauge: 95, width: '70%' }
            },
            'clareamento': { 
                digital: { cost: 1200, complex: 'Baixa', gauge: 15, width: '25%' },
                convencional: { cost: 900, complex: 'Média', gauge: 35, width: '20%' }
            }
        };

        function selectMethod(btn, method) {
            // Remove active style from all buttons
            document.querySelectorAll('.method-btn').forEach(b => {
                b.classList.remove('bg-white', 'shadow-sm', 'text-gray-900', 'border', 'border-gray-200');
                b.classList.add('text-gray-500');
            });
            // Add active style to clicked
            btn.classList.remove('text-gray-500');
            btn.classList.add('bg-white', 'shadow-sm', 'text-gray-900', 'border', 'border-gray-200');
            
            currentMethod = method;
            updateCalculator();
        }

        function updateCalculator() {
            // Get checked radio
            const radios = document.getElementsByName('goal');
            for(let r of radios) { if(r.checked) currentGoal = r.value; }

            const data = calcData[currentGoal][currentMethod];
            
            // Animate Text (Cost)
            const costEl = document.getElementById('cost-display');
            const targetCost = data.cost;
            animateValue(costEl, targetCost);

            // Animate Bar
            const barEl = document.getElementById('cost-bar');
            barEl.style.width = data.width;

            // Animate Gauge
            const gaugeEl = document.getElementById('complexity-gauge');
            const complexText = document.getElementById('complexity-text');
            
            // Convert 0-100 gauge to rotation (-45deg to 225deg approx range of logic)
            // Simplified: Rotate from -45 (empty) to +135 (full)
            // Start at 45deg (css default). Let's just rotate based on percentage relative to base.
            // Let's assume css starts at 45deg (which looks like 12 o'clock in this specific css hack).
            // Actually the CSS hack `rotate-[45deg]` creates a quarter circle if top/right borders are colored.
            // To animate "filling", we rotate it. 
            // 45deg = start. 225deg = end.
            const rotation = 45 + (data.gauge * 1.8); 
            gaugeEl.style.transform = `rotate(${rotation}deg)`;
            
            // Fade text out/in
            complexText.style.opacity = 0;
            setTimeout(() => {
                complexText.innerText = data.complex;
                complexText.style.opacity = 1;
            }, 300);
        }

        function animateValue(obj, end) {
            let startTimestamp = null;
            const duration = 1000;
            const start = parseInt(obj.innerText.replace(/\D/g,'')) || 0;
            
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // Ease out quart
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                
                const current = Math.floor(easeProgress * (end - start) + start);
                obj.innerHTML = `R$ ${current.toLocaleString('pt-BR')}`;
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // 3. Clock & Shiny Buttons
        function updateDateTime() {
            const now = new Date();
            const timeEl = document.getElementById('current-time');
            const dateEl = document.getElementById('current-date');
            
            if(timeEl) timeEl.textContent = now.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit'});
            if(dateEl) dateEl.textContent = now.toLocaleDateString('pt-BR', {timeZone: 'America/Sao_Paulo', day: 'numeric', month: 'long'});
        }

        function initShinyButtons() {
            const handleMouseMove = (e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();
                btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
                btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }
            document.querySelectorAll(".shiny-button").forEach((el) => el.addEventListener("mousemove", handleMouseMove));
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateDateTime();
            setInterval(updateDateTime, 1000);
            initShinyButtons();
            // Initial calc update
            updateCalculator();
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 opacity-40 absolute" data-alpha-mask="79" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 79%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 79%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/orbit-XDLATgFZPQX6SO6dgJGqPwHD/" width="100%"></iframe></div></div>

<div className="fixed inset-0 z-0 pointer-events-none w-full mx-auto">
<div className="w-full h-full grid grid-cols-6 max-w-7xl mx-auto px-6">
<div className="border-l border-r border-gray-100/60 h-full relative"><div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-gray-200 to-transparent"></div></div>
<div className="border-r border-gray-100/60 h-full hidden sm:block"></div>
<div className="border-r border-gray-100/60 h-full hidden md:block"></div>
<div className="border-r border-gray-100/60 h-full hidden lg:block"></div>
<div className="border-r border-gray-100/60 h-full hidden xl:block"></div>
<div className="border-r border-gray-100/60 h-full hidden 2xl:block"></div>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-500 reveal-element">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<nav className="flex items-center justify-between h-20">

<div className="flex items-center gap-3 cursor-pointer z-10 w-48 group">
<div className="text-brand-600 bg-brand-50 p-2 rounded-lg group-hover:bg-brand-100 transition-colors">
<iconify-icon icon="solar:tooth-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-semibold text-xs tracking-tighter text-gray-900 uppercase font-ui">Elizabete Rabuske</span>
<span className="text-[10px] text-gray-400 font-medium tracking-tight font-ui">Odontologia Avançada</span>
</div>
</div>

<div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2 bg-gray-50/50 px-6 py-2 rounded-full border border-gray-100/50">
<a className="text-xs font-medium text-gray-500 hover:text-brand-600 transition-colors font-ui" href="#treatments">Tratamentos</a>
<a className="text-xs font-medium text-gray-500 hover:text-brand-600 transition-colors font-ui" href="#about">A Clínica</a>
<a className="text-xs font-medium text-gray-500 hover:text-brand-600 transition-colors font-ui" href="#calculator">Calculadora</a>
</div>

<div className="flex items-center gap-4 z-10">
<button className="text-gray-400 hover:text-gray-900 transition-colors p-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="hidden sm:flex items-center gap-2 hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shiny-button text-xs font-medium text-white bg-brand-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg shadow-brand-600/20" href="#">
<span className="font-ui">Agendar</span>
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</div>
</header>

<main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-32 lg:mt-44 mb-24">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">

<div className="flex flex-col relative">
<div className="space-y-10 mb-12">

<div className="reveal-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide text-brand-700 uppercase font-ui">Agenda 2024 Aberta</span>
</div>

<div className="space-y-6 reveal-element" style={{transitionDelay: '100ms'}}>
<h1 className="sm:text-6xl lg:text-7xl leading-[0.95] text-5xl text-gray-900 tracking-tighter font-display font-medium">
                            Design de sorrisos <br/> com 
                            <span className="font-medium text-brand-600 font-display pr-2">precisão</span> <br/>
                             e naturalidade.
                        </h1>
<p className="text-base text-gray-500 font-normal leading-relaxed max-w-md tracking-tight font-ui">
                            Combinando tecnologia de ponta com um olhar artístico para revelar a melhor versão do seu sorriso. Odontologia sem excessos.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

<div className="reveal-element flex flex-col bg-white h-44 border border-gray-200 rounded-2xl p-6 shadow-[0px_2px_4px_rgba(0,0,0,0.02),0px_8px_16px_rgba(0,0,0,0.04)] justify-between group hover:border-brand-200 transition-colors" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-brand-600 bg-brand-50 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider font-ui">Horário</span>
</div>
<span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
</div>
<div className="space-y-4">
<div className="flex items-end justify-between border-b border-gray-100 pb-3">
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 font-ui">Semana</span>
<span className="text-xs font-semibold text-gray-900 font-ui">Seg - Sex</span>
</div>
<span className="text-xs font-medium text-gray-500 font-ui">08h - 19h</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-0.5 font-ui">Hoje</span>
<span className="text-[10px] text-gray-500 font-medium capitalize font-ui" id="current-date">Carregando...</span>
</div>
<div className="text-right">
<span className="text-xl font-semibold text-gray-900 tracking-tight tabular-nums font-ui" id="current-time">--:--</span>
</div>
</div>
</div>
</div>

<a className="reveal-element shiny-button group overflow-hidden flex flex-col justify-between shadow-brand-600/20 hover:shadow-brand-600/30 transition-all active:scale-[0.98] text-white bg-brand-600 h-44 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-xl" href="#calculator" style={{transitionDelay: '300ms'}}>
<div className="flex z-10 w-full relative items-start justify-between">
<span className="text-[10px] font-medium opacity-80 uppercase tracking-widest bg-white/10 px-2 py-1 rounded font-ui">Online</span>
<div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
<iconify-icon className="text-white transform group-hover:rotate-45 transition-transform duration-500" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<span className="block leading-tight text-2xl font-medium tracking-tight font-display mb-1">Simular<br/>Tratamento</span>
<span className="text-[10px] opacity-70 font-ui">Resultado em 2 minutos</span>
</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-400/20 rounded-full blur-2xl -mr-10 -mb-10"></div>
</a>
</div>
</div>

<div className="relative h-[640px] w-full lg:ml-auto group reveal-element" style={{transitionDelay: '400ms'}}>

<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200">
<img alt="Odontologia Moderna" className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2668&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md py-2.5 px-5 rounded-full shadow-sm flex items-center gap-3 animate-float border border-white/50">
<div className="bg-brand-50 p-1.5 rounded-full text-brand-600 flex items-center justify-center">
<iconify-icon icon="solar:medal-star-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col leading-none gap-0.5">
<span className="text-[10px] font-bold text-gray-900 uppercase tracking-wide font-ui">Referência</span>
<span className="text-[10px] text-gray-500 font-ui">Odontologia Digital</span>
</div>
</div>

<div className="absolute bottom-8 -left-6 sm:left-8 w-72 bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
<div className="bg-gray-50/50 border-b border-gray-100 px-4 py-3 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider font-ui">Acompanhamento</span>
<div className="w-8"></div>
</div>
<div className="p-5 space-y-4">
<div className="flex gap-4 items-center">
<div className="bg-brand-50 text-brand-600 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 leading-tight font-ui">Harmonização</h4>
<p className="text-[10px] text-gray-500 mt-0.5 font-ui">Sessão 2 de 3 agendada.</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide font-ui">Invisalign</span>
<div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:check-circle-linear" width="10"></iconify-icon>
<span className="text-[9px] font-bold font-ui">Concluído</span>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="overflow-hidden bg-white w-full border-t border-b border-gray-50 py-12 relative">
<div className="absolute inset-0 pointer-events-none z-10 marquee-mask"></div>
<div className="max-w-7xl mx-auto px-6 mb-10 text-center reveal-element">
<p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] font-ui">Parceiros e Convênios</p>
</div>
<div className="flex w-full overflow-hidden whitespace-nowrap group reveal-element" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-24 animate-scroll pl-24 group-hover:[animation-play-state:paused]">
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-pink-600" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">Bradesco</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-blue-600" icon="solar:shield-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">SulAmérica</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-emerald-600" icon="solar:medical-kit-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">Unimed</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-purple-600" icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">Amil Dental</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">MetLife</span>
</div>

<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-pink-600" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">Bradesco</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-blue-600" icon="solar:shield-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">SulAmérica</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-emerald-600" icon="solar:medical-kit-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">Unimed</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-purple-600" icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">Amil Dental</span>
</div>
<div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-gray-800 font-ui">MetLife</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50/50 border-t border-gray-100 relative" id="calculator">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

<div className="text-center mb-16 space-y-4 reveal-element">
<span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold text-brand-600 uppercase tracking-widest shadow-sm font-ui">Calculadora de Tratamento</span>
<h2 className="text-4xl lg:text-5xl tracking-tighter text-gray-900 font-display font-medium">Planeje a jornada do seu sorriso</h2>
<p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed font-ui">Estimativa de custos e tempo baseada nos seus objetivos. Interativo e personalizado.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:h-[600px]">

<div className="lg:col-span-3 flex flex-col gap-4 reveal-element" style={{transitionDelay: '100ms'}}>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-5">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-50 text-[10px] font-bold text-brand-600 border border-brand-100 font-ui">1</span>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide font-ui">Objetivo</h3>
</div>
<div className="space-y-3">
<label className="block cursor-pointer group relative">
<input checked="" className="custom-radio hidden peer" name="goal" onchange="updateCalculator()" type="radio" value="alinhamento"/>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all">
<span className="text-xs font-medium text-gray-600 peer-checked:text-brand-700 font-ui">Alinhamento</span>
<iconify-icon className="text-gray-300 transition-colors opacity-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
<label className="block cursor-pointer group relative">
<input className="custom-radio hidden peer" name="goal" onchange="updateCalculator()" type="radio" value="implantes"/>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all">
<span className="text-xs font-medium text-gray-600 peer-checked:text-brand-700 font-ui">Implantes</span>
<iconify-icon className="text-gray-300 transition-colors opacity-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
<label className="block cursor-pointer group relative">
<input className="custom-radio hidden peer" name="goal" onchange="updateCalculator()" type="radio" value="clareamento"/>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all">
<span className="text-xs font-medium text-gray-600 peer-checked:text-brand-700 font-ui">Clareamento</span>
<iconify-icon className="text-gray-300 transition-colors opacity-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-5">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-50 text-[10px] font-bold text-brand-600 border border-brand-100 font-ui">2</span>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide font-ui">Método</h3>
</div>
<div className="flex bg-gray-100/80 p-1 rounded-xl">
<button className="method-btn flex-1 py-2 text-[10px] font-medium rounded-lg bg-white shadow-sm text-gray-900 transition-all border border-gray-200 font-ui" onclick="selectMethod(this, 'digital')">Digital</button>
<button className="method-btn flex-1 py-2 text-[10px] font-medium rounded-lg text-gray-500 hover:text-gray-900 transition-all font-ui" onclick="selectMethod(this, 'convencional')">Padrão</button>
</div>
</div>
</div>

<div className="lg:col-span-6 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 relative overflow-hidden shadow-xl shadow-brand-900/10 flex flex-col justify-between group reveal-element" style={{transitionDelay: '200ms'}}>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="flex justify-between items-start z-10 text-white/90">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<iconify-icon icon="solar:cube-linear" width="14"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide font-ui">Simulação 3D</span>
</div>
<button className="text-white/60 hover:text-white transition-colors">
<iconify-icon icon="solar:full-screen-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex-1 flex items-center justify-center relative z-10 py-10">
<div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 group-hover:scale-105">

<div className="sonar-circle"></div>
<div className="sonar-circle"></div>
<div className="sonar-circle"></div>

<img alt="3D Scan" className="w-full h-full object-cover rounded-full opacity-60 mix-blend-overlay border-[3px] border-white/20 shadow-2xl animate-pulse-slow relative z-10" src="https://images.unsplash.com/photo-1660737217690-15182b43899e?w=800&amp;q=80"/>

<div className="scan-line top-1/2"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" viewbox="0 0 100 100">

<path className="noodle-path" d="M50,50 Q75,30 85,20"></path>
<path className="noodle-path" d="M50,50 Q25,70 15,80" style={{animationDelay: '1s'}}></path>
<path className="noodle-path" d="M50,50 Q80,70 90,80" style={{animationDelay: '2s'}}></path>
</svg>

<div className="absolute top-[20%] right-[-10%] flex items-center gap-2 animate-[reveal_1s_ease-out_1s_both]">
<div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<span className="bg-black/50 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded border border-white/10 font-ui whitespace-nowrap">+2mm Alinhamento</span>
</div>
<div className="absolute bottom-[20%] left-[-15%] flex items-center flex-row-reverse gap-2 animate-[reveal_1s_ease-out_1.5s_both]">
<div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<span className="bg-black/50 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded border border-white/10 font-ui whitespace-nowrap">Simetria Gengival</span>
</div>
</div>
</div>

<div className="flex gap-4 z-10 justify-center">
<div className="flex gap-2 bg-black/20 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
<button className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:restart-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:play-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-4 reveal-element" style={{transitionDelay: '300ms'}}>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4 font-ui">Complexidade</h3>
<div className="relative flex items-end justify-center h-16 w-32 overflow-hidden mb-2">
<div className="absolute w-32 h-32 border-[8px] border-gray-100 rounded-full top-0"></div>
<div className="absolute w-32 h-32 border-[8px] border-transparent border-t-brand-500 border-r-brand-500 rounded-full top-0 rotate-[45deg] origin-center transition-all duration-1000 ease-out" id="complexity-gauge"></div>
<span className="text-2xl text-gray-900 relative -top-1 font-display font-medium" id="complexity-text">Média</span>
</div>
<p className="text-[10px] text-gray-400 font-ui">Baseada no perfil selecionado</p>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-600" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-xs font-semibold text-gray-900 font-ui">Investimento</h3>
</div>
<div className="mt-2 mb-4">
<span className="text-3xl tracking-tight text-gray-900 font-display font-medium" id="cost-display">R$ 3.500</span>
<span className="text-sm text-gray-400 font-normal font-ui">/estimado</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-[60%] rounded-full transition-all duration-1000 ease-out" id="cost-bar"></div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
<img alt="Doctor" className="w-10 h-10 rounded-full object-cover border border-gray-100" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<p className="text-xs font-semibold text-gray-900 font-ui">Dr. Lucas Meyer</p>
<p className="text-[10px] text-gray-500 font-ui">Especialista sugerido</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-12 reveal-element" style={{transitionDelay: '400ms'}}>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-3.5 px-8 rounded-full shadow-xl shadow-gray-200 transition-all flex items-center gap-3 transform hover:-translate-y-1 font-ui shiny-button">
<iconify-icon icon="solar:calendar-check-linear" width="18"></iconify-icon>
                    Agendar Avaliação do Plano
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal-element">
<span className="text-brand-600 bg-brand-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block border border-brand-100 font-ui">Dúvidas Frequentes</span>
<h2 className="text-3xl tracking-tight text-gray-900 mb-4 font-display font-medium">Perguntas sobre tratamentos</h2>
</div>
<div className="space-y-4">
<details className="group border border-gray-100 rounded-xl bg-gray-50/50 open:bg-white open:shadow-lg open:shadow-gray-200/50 open:border-transparent transition-all duration-300 reveal-element">
<summary className="flex justify-between items-center font-medium cursor-pointer p-5 text-sm text-gray-900 select-none">
<span className="font-ui">Quanto tempo dura o tratamento com alinhadores?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center">
<iconify-icon className="text-gray-400 group-open:text-brand-600" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm px-5 pb-5 leading-relaxed font-ui">
                        O tempo varia de acordo com a complexidade de cada caso. Em média, tratamentos leves duram de 3 a 6 meses, enquanto casos moderados podem levar de 12 a 18 meses. Nossa tecnologia digital permite uma previsão precisa.
                    </div>
</details>
<details className="group border border-gray-100 rounded-xl bg-gray-50/50 open:bg-white open:shadow-lg open:shadow-gray-200/50 open:border-transparent transition-all duration-300 reveal-element" style={{transitionDelay: '100ms'}}>
<summary className="flex justify-between items-center font-medium cursor-pointer p-5 text-sm text-gray-900 select-none">
<span className="font-ui">Aceitam convênios para procedimentos estéticos?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center">
<iconify-icon className="text-gray-400 group-open:text-brand-600" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm px-5 pb-5 leading-relaxed font-ui">
                        Procedimentos puramente estéticos, como lentes de contato e clareamento, geralmente não são cobertos. No entanto, procedimentos funcionais e preventivos são aceitos pela maioria dos nossos parceiros listados acima.
                    </div>
</details>
<details className="group border border-gray-100 rounded-xl bg-gray-50/50 open:bg-white open:shadow-lg open:shadow-gray-200/50 open:border-transparent transition-all duration-300 reveal-element" style={{transitionDelay: '200ms'}}>
<summary className="flex justify-between items-center font-medium cursor-pointer p-5 text-sm text-gray-900 select-none">
<span className="font-ui">Como funciona a consulta de avaliação digital?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center">
<iconify-icon className="text-gray-400 group-open:text-brand-600" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm px-5 pb-5 leading-relaxed font-ui">
                        Utilizamos scanners intraorais 3D que criam um modelo digital da sua arcada em minutos, sem moldes de massa desconfortáveis. Com isso, podemos simular o resultado final antes mesmo de iniciar o tratamento.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-12 px-6 lg:px-8 bg-white border-t border-gray-50">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-[2.5rem] overflow-hidden bg-brand-600 h-[450px] flex items-center justify-center text-center px-6 shadow-2xl shadow-brand-900/20 group reveal-element">

<div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800"></div>

<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

<div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]"></div>
<div className="relative z-10 space-y-8 max-w-2xl">
<h2 className="text-4xl md:text-6xl text-white/90 tracking-tight leading-tight font-display font-medium">
                        Seu sorriso, <br/>
<span className="text-white not-italic font-display font-medium">Nossa Obra de Arte.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-white text-brand-700 hover:bg-brand-50 py-3.5 px-8 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 font-ui shiny-button" href="#">
                            Agendar Visita
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="text-white hover:text-white/80 text-sm font-medium px-4 transition-colors flex items-center gap-2 border border-white/20 rounded-full py-3.5 hover:bg-white/10 backdrop-blur-sm font-ui" href="#">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
                            Ver Galeria de Casos
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 text-white pt-24 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 pb-12 border-b border-gray-900">

<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<div className="text-brand-500">
<iconify-icon icon="solar:tooth-bold" width="24"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tight font-ui">Elizabete Rabuske</span>
</div>
<p className="text-gray-400 text-xs leading-relaxed max-w-xs font-ui">
                        Odontologia avançada com foco em estética, funcionalidade e longevidade. Tecnologia e arte para transformar sorrisos.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6 font-ui">Tratamentos</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Lentes de Contato</a></li>
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Invisalign</a></li>
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Implantes Digitais</a></li>
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Harmonização Orofacial</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6 font-ui">A Clínica</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Sobre Dra. Elizabete</a></li>
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Tecnologia</a></li>
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Depoimentos</a></li>
<li><a className="hover:text-brand-400 transition-colors font-ui" href="#">Carreiras</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6 font-ui">Newsletter</h4>
<p className="text-xs text-gray-500 mb-4 font-ui">Receba novidades e dicas de saúde bucal.</p>
<form className="flex gap-2">
<input className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 w-full transition-all" placeholder="Seu e-mail" type="email"/>
<button className="bg-white hover:bg-brand-600 hover:text-white text-black rounded-lg px-3 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-900 pt-8">
<p className="text-[10px] text-gray-600 font-ui">© 2024 Elizabete Rabuske Odontologia. Todos os direitos reservados.</p>
<div className="flex gap-6 text-[10px] text-gray-600">
<a className="hover:text-gray-400 font-ui" href="#">Privacidade</a>
<a className="hover:text-gray-400 font-ui" href="#">Termos</a>
<a className="hover:text-gray-400 font-ui" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
