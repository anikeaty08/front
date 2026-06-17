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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: '#FF5500',
},
animation: {
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
'flow': 'flow 1.5s linear infinite',
'float': 'float 6s ease-in-out infinite',
'bounce-small': 'bounce-small 1s infinite'
},
keyframes: {
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
},
flow: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
},
'bounce-small': {
'0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
'50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
}
}
}
}
}



      if (localStorage.theme === 'dark') {
          document.documentElement.classList.add('dark')
      } else {
          document.documentElement.classList.remove('dark')
          if(!('theme' in localStorage)) localStorage.theme = 'light';
      }
    


        const content = document.getElementById('app-content');
        let calculatorState = { step: 1, building: null, roof: null, kwh: 4000 };
        
        function router(route) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                const tplId = 'tpl-' + route;
                const template = document.getElementById(tplId);
                if(template) {
                    content.innerHTML = template.innerHTML;
                    initAnimations();
                    if(route === 'calculator') resetCalculator();
                    const menu = document.getElementById('mobile-menu');
                    if (menu && !menu.classList.contains('translate-x-full')) toggleMobileMenu();
                } else {
                    router('home'); 
                }
            }, 50);
        }
        
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('mobile-menu-icon');
            const body = document.body;
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                icon.setAttribute('icon', 'solar:close-circle-linear');
                body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                body.style.overflow = '';
            }
        }

        function toggleDarkMode() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }
        
        function toggleAccordion(btn) {
            const content = btn.nextElementSibling;
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const allContent = document.querySelectorAll('.accordion-content');
            const allBtns = document.querySelectorAll('.accordion-btn');
            allContent.forEach(el => el.classList.remove('open'));
            allBtns.forEach(el => el.setAttribute('aria-expanded', 'false'));
            if (!isExpanded) {
                btn.setAttribute('aria-expanded', 'true');
                content.classList.add('open');
            }
        }

        function resetCalculator() {
            calculatorState = { step: 1, building: null, roof: null, kwh: 4000 };
            updateProgress(1);
        }

        window.selectOption = function(step, value) {
            if(value === 'back') {
                const prev = step - 1;
                switchStep(prev);
                updateProgress(prev);
                return;
            }
            if(step === 1) calculatorState.building = value;
            if(step === 2) calculatorState.roof = value;
            const next = step + 1;
            switchStep(next);
            updateProgress(next);
        }

        window.updateSlider = function(val) {
            calculatorState.kwh = val;
            const display = document.getElementById('kwh-display');
            if(display) display.innerText = parseInt(val).toLocaleString('de-DE');
        }

        function switchStep(stepNum) {
            for(let i=1; i<=5; i++) {
                const el = document.getElementById('step-' + i);
                if(el) {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                }
            }
            const currentEl = document.getElementById('step-' + stepNum);
            if(currentEl) {
                currentEl.classList.remove('hidden');
                currentEl.classList.add('flex');
            }
        }

        function updateProgress(step) {
            for(let i=1; i<=4; i++) {
                const bar = document.getElementById('prog-' + i);
                if(!bar) continue;
                if(i <= step) {
                    bar.classList.remove('bg-gray-200', 'dark:bg-slate-700');
                    bar.classList.add('bg-[#FF5500]');
                } else {
                    bar.classList.add('bg-gray-200', 'dark:bg-slate-700');
                    bar.classList.remove('bg-[#FF5500]');
                }
            }
        }

        window.runCalculation = function() {
            switchStep(4);
            updateProgress(4);
            const texts = ["Analysiere Standortdaten...", "Simuliere Sonnenstand...", "Berechne Dachfläche...", "Optimiere Komponenten..."];
            const textEl = document.getElementById('loading-text');
            let idx = 0;
            const interval = setInterval(() => {
                idx++;
                if(idx < texts.length && textEl) textEl.innerText = texts[idx];
            }, 600);
            setTimeout(() => { clearInterval(interval); showResults(); }, 2500);
        }

        function showResults() {
            switchStep(5);
            triggerConfetti();
            animateNumbers();
        }

        function triggerConfetti() {
            var duration = 3000;
            var end = Date.now() + duration;
            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FF5500', '#ffffff', '#FF9900'] });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FF5500', '#ffffff', '#FF9900'] });
                if (Date.now() < end) requestAnimationFrame(frame);
            }());
        }

        function animateNumbers() {
            const counters = document.querySelectorAll('.counter');
            const currencyCounters = document.querySelectorAll('.counter-currency');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 1500; 
                const startTime = performance.now();
                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    counter.innerText = Math.floor(ease * target) + "%";
                    if (progress < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
            });
            currencyCounters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 1500;
                const startTime = performance.now();
                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    counter.innerText = Math.floor(ease * target).toLocaleString('de-DE') + "€";
                    if (progress < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
            });
        }

        function initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('active');
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }
        
        // Sticky CTA Visibility Logic (Updated for Mobile)
        window.addEventListener('scroll', () => {
            const cta = document.getElementById('sticky-cta');
            if (!cta) return;
            // Lower threshold (150px) so it appears sooner on mobile
            if (window.scrollY > 150) {
                cta.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
            } else {
                cta.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const hash = window.location.hash.replace('#', '');
            router(hash || 'home');
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
      


<nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 md:px-6 transition-all duration-300" id="navbar">
<div className="glass border border-gray-200/60 dark:border-gray-800 rounded-full shadow-lg dark:shadow-none pl-4 pr-2 md:pl-6 md:pr-2 py-3 flex items-center justify-between">
<a className="flex items-center gap-3 text-gray-900 dark:text-white group cursor-pointer" href="#" onclick="event.preventDefault(); window.location.reload();">
<div className="text-gray-900 dark:text-white flex items-center justify-center group-hover:text-[#FF5500] transition-colors">
<iconify-icon className="text-2xl" icon="solar:structure-linear"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tighter">1618 HAUS</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
<button className="hover:text-gray-900 dark:hover:text-white transition-colors" onclick="router('home')">Home</button>
<button className="hover:text-gray-900 dark:hover:text-white transition-colors" onclick="router('solutions')">Lösungen</button>
<button className="hover:text-gray-900 dark:hover:text-white transition-colors" onclick="router('ansatz')">Ansatz</button>
<button className="hover:text-gray-900 dark:hover:text-white transition-colors" onclick="router('system')">System</button>
<button className="hover:text-gray-900 dark:hover:text-white transition-colors" onclick="router('beispiele')">Beispiele</button>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onclick="toggleDarkMode()" title="Toggle Theme">
<iconify-icon className="hidden dark:block text-xl" icon="solar:sun-2-linear"></iconify-icon>
<iconify-icon className="dark:hidden text-xl" icon="solar:moon-linear"></iconify-icon>
</button>
<button className="hidden lg:flex bg-[#FF5500] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:scale-105" onclick="router('calculator')">
            Jetzt berechnen
          </button>
<button aria-label="Menu" className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-1 focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" id="mobile-menu-icon"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed right-4 z-50 transform translate-y-24 opacity-0 transition-all duration-500 pointer-events-none" id="sticky-cta" style={{bottom: 'calc(1.5rem + env(safe-area-inset-bottom))'}}>
<button className="pointer-events-auto flex items-center gap-2 md:gap-3 bg-[#FF5500] hover:bg-orange-600 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-2xl shadow-orange-900/40 hover:scale-105 transition-transform font-bold text-xs md:text-sm tracking-wide border border-white/10 backdrop-blur-md" onclick="router('calculator')">
<iconify-icon className="text-lg md:text-xl" icon="solar:calculator-minimalistic-linear"></iconify-icon>
<span>ENERGIE BERECHNEN</span>
</button>
</div>

<div className="fixed inset-0 z-[60] bg-white/98 dark:bg-[#020617]/98 backdrop-blur-2xl transform translate-x-full transition-transform duration-500 lg:hidden flex flex-col justify-center items-center gap-8" id="mobile-menu">
<nav className="flex flex-col items-center gap-6 text-xl font-medium text-gray-900 dark:text-white text-center">
<button className="hover:text-[#FF5500] transition-colors" onclick="toggleMobileMenu(); router('home')">Home</button>
<button className="hover:text-[#FF5500] transition-colors" onclick="toggleMobileMenu(); router('solutions')">Lösungen</button>
<button className="hover:text-[#FF5500] transition-colors" onclick="toggleMobileMenu(); router('ansatz')">Ansatz</button>
<button className="hover:text-[#FF5500] transition-colors" onclick="toggleMobileMenu(); router('system')">System</button>
<button className="hover:text-[#FF5500] transition-colors" onclick="toggleMobileMenu(); router('beispiele')">Beispiele</button>
</nav>
<div className="flex flex-col gap-4 w-full max-w-xs px-6">
<button className="w-full bg-[#FF5500] text-white px-6 py-4 rounded-xl font-bold shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2 hover:scale-105 transition-transform" onclick="toggleMobileMenu(); router('calculator')">
<iconify-icon className="text-xl" icon="solar:calculator-minimalistic-bold"></iconify-icon>
<span>Potenzial berechnen</span>
</button>
</div>
</div>

<main className="flex-grow pt-28 md:pt-32 min-h-screen" id="app-content">

</main>

<footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 mt-0 reveal">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20 text-center md:text-left">
<div className="max-w-sm mx-auto md:mx-0">
<a className="flex items-center justify-center md:justify-start gap-2 mb-6 text-gray-900 dark:text-white" href="#" onclick="event.preventDefault(); router('home')">
<iconify-icon className="text-3xl" icon="solar:structure-bold-duotone"></iconify-icon>
<span className="text-2xl font-bold tracking-tighter">1618 HAUS</span>
</a>
<p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
              Ganzheitliche Energiesysteme für eine unabhängige Zukunft. Planung, Hardware und Handwerk aus einer Hand.
            </p>
</div>
<div className="grid grid-cols-2 gap-12 text-sm text-center md:text-left">
<div>
<h4 className="font-bold text-gray-900 dark:text-white mb-6">Plattform</h4>
<ul className="space-y-4 text-gray-500 dark:text-gray-400 font-medium">
<li><button className="hover:text-[#FF5500]" onclick="router('solutions')">Lösungen</button></li>
<li><button className="hover:text-[#FF5500]" onclick="router('ansatz')">Unser Ansatz</button></li>
<li><button className="hover:text-[#FF5500]" onclick="router('system')">Technologie</button></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 dark:text-white mb-6">Rechtliches</h4>
<ul className="space-y-4 text-gray-500 dark:text-gray-400 font-medium">
<li><button className="hover:text-[#FF5500]" onclick="router('impressum')">Impressum</button></li>
<li><button className="hover:text-[#FF5500]" onclick="router('datenschutz')">Datenschutz</button></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400 font-medium">© 2024 1618 Haus GmbH. Made in Cologne.</p>
</div>
</div>
</footer>

<template id="tpl-home">
<div>
<section className="w-full px-4 md:px-6 lg:px-8 pb-12 reveal active">
<div className="max-w-[1400px] mx-auto bg-[#FF5500] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-orange-900/20 dark:shadow-none min-h-[650px] lg:min-h-[700px] flex items-center">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-fast"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 dark:bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
<div className="w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="pl-6 md:pl-12 lg:pl-16 pr-6 md:pr-12 pt-12 pb-12 lg:pb-0 flex flex-col gap-8 text-center md:text-left items-center md:items-start">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 w-fit">
<div className="text-white flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:structure-bold-duotone"></iconify-icon></div>
<span className="text-xs font-medium text-white tracking-wide uppercase">Systemintegrator 2.0</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05]">
                  Energie.<br/><span className="text-white/60">Ganzheitlich.</span><br/>Gedacht.
                </h1>
<p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-md leading-relaxed mx-auto md:mx-0">
                  Wir planen Photovoltaik, Wärme und Speicher als ein intelligentes Ökosystem. Für maximale Unabhängigkeit.
                </p>
<div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mt-4 w-full md:w-auto">
<button className="w-full sm:w-auto bg-white text-[#FF5500] px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-black/10 flex items-center justify-center gap-2 group" onclick="router('calculator')">
<span>POTENZIAL BERECHNEN</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-colors" onclick="router('system')">
                    System ansehen
                  </button>
</div>
</div>
<div className="relative h-full min-h-[450px] lg:min-h-[700px] flex items-center justify-center lg:justify-end">
<div className="lg:absolute lg:left-0 w-[92%] md:w-[80%] lg:w-[130%] transform lg:translate-x-[5%] bg-white/95 dark:bg-[#0F172A]/95 rounded-2xl lg:rounded-l-3xl shadow-2xl shadow-black/20 p-2 overflow-hidden border-y border-l border-white/20 dark:border-slate-700/50 backdrop-blur-md mx-auto lg:mx-0 animate-float">
<div className="bg-gray-50 dark:bg-[#1E293B] rounded-xl lg:rounded-l-2xl overflow-hidden h-full min-h-[400px] p-6 md:p-8 border border-gray-100 dark:border-slate-700 flex flex-col justify-between">
<div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-slate-700 pb-4">
<div>
<h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
<iconify-icon className="text-[#FF5500]" icon="solar:home-wifi-bold-duotone"></iconify-icon>
                          Smart Connect
                        </h3>
<p className="text-xs text-gray-400 font-medium mt-1">Standort: Köln, NRW</p>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Live</span>
</div>
</div>
<div className="flex-grow flex items-end justify-between gap-2 h-32 mb-8 px-2 relative">
<div className="w-full bg-orange-100 dark:bg-orange-500/10 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-orange-100 dark:bg-orange-500/10 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-orange-200 dark:bg-orange-500/20 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-orange-300 dark:bg-orange-500/30 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-[#FF5500] h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(255,85,0,0.5)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#FF5500]">8.2 kW</div>
</div>
<div className="w-full bg-orange-200 dark:bg-orange-500/20 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-orange-100 dark:bg-orange-500/10 h-[30%] rounded-t-sm"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white dark:bg-[#020617] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-gray-400 uppercase font-bold">Produktion</span>
<iconify-icon className="text-[#FF5500]" icon="solar:sun-2-bold"></iconify-icon>
</div>
<span className="text-2xl font-bold text-gray-900 dark:text-white">8.2<span className="text-xs text-gray-400 ml-1">kW</span></span>
<div className="w-full h-1 bg-gray-100 dark:bg-slate-800 mt-3 rounded-full overflow-hidden energy-line">
<div className="h-full w-full bg-[#FF5500]/20"></div>
</div>
</div>
<div className="bg-white dark:bg-[#020617] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-gray-400 uppercase font-bold">Autarkie</span>
<iconify-icon className="text-blue-500" icon="solar:shield-check-bold"></iconify-icon>
</div>
<span className="text-2xl font-bold text-gray-900 dark:text-white">96<span className="text-xs text-gray-400 ml-1">%</span></span>
<div className="w-full h-1 bg-gray-100 dark:bg-slate-800 mt-3 rounded-full overflow-hidden">
<div className="h-full w-[96%] bg-blue-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-100 dark:border-slate-800 py-10 reveal">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#FF5500]" icon="solar:shield-check-bold"></iconify-icon><span className="font-bold text-xs md:text-sm uppercase tracking-wider">Meisterbetrieb</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#FF5500]" icon="solar:verified-check-bold"></iconify-icon><span className="font-bold text-xs md:text-sm uppercase tracking-wider">TÜV Zertifiziert</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#FF5500]" icon="solar:users-group-rounded-bold"></iconify-icon><span className="font-bold text-xs md:text-sm uppercase tracking-wider">500+ Projekte</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#FF5500]" icon="solar:clock-circle-bold"></iconify-icon><span className="font-bold text-xs md:text-sm uppercase tracking-wider">10 Jahre Garantie</span></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 md:py-32 reveal">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-center md:text-left">
<span className="text-[#FF5500] font-bold text-xs tracking-widest uppercase mb-6 block">Das Kernproblem</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">Warum Insellösungen<br/><span className="text-gray-400 dark:text-gray-500">heute scheitern.</span></h2>
<p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 font-medium">
                Wer Heizung, PV und Mobilität getrennt plant, verliert bis zu 40% Effizienz. Wir verbinden das Fachhandwerk zu einer starken Gemeinschaft für integrierte Lösungen.
              </p>
<div className="grid grid-cols-2 gap-6 text-left">
<div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl">
<div className="text-3xl font-bold text-red-500 mb-1">-35%</div>
<div className="text-xs text-gray-500 font-medium">Energieverlust bei getrennten Systemen</div>
</div>
<div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl">
<div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2030</div>
<div className="text-xs text-gray-500 font-medium">Pflicht für Smart Meter und Steuerung</div>
</div>
</div>
</div>
<div className="relative mt-8 lg:mt-0">
<div className="gradient-border-card bg-gray-50 dark:bg-slate-900 p-3 overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-none rotate-2 hover:rotate-0 transition-all duration-500">
<div className="bg-white dark:bg-slate-950 rounded-[1.3rem] overflow-hidden relative h-[400px] md:h-[500px]">
<img alt="Modern House" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100 dark:border-slate-800 reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Der feine Unterschied</h2>
<p className="text-gray-500 dark:text-gray-400">Warum integrierte Planung den Unterschied macht.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="p-8 rounded-3xl bg-gray-50 dark:bg-slate-900/50 border border-transparent dark:border-slate-800">
<div className="flex items-center gap-3 mb-6 opacity-50">
<iconify-icon className="text-2xl" icon="solar:close-circle-bold"></iconify-icon>
<h3 className="font-bold text-lg">Konventionell</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-gray-500 dark:text-gray-400"><iconify-icon className="text-red-400 mt-1" icon="solar:close-square-linear"></iconify-icon> <span>3-4 verschiedene Ansprechpartner</span></li>
<li className="flex gap-3 text-gray-500 dark:text-gray-400"><iconify-icon className="text-red-400 mt-1" icon="solar:close-square-linear"></iconify-icon> <span>Komponenten sprechen nicht miteinander</span></li>
<li className="flex gap-3 text-gray-500 dark:text-gray-400"><iconify-icon className="text-red-400 mt-1" icon="solar:close-square-linear"></iconify-icon> <span>Undurchsichtige Gesamtkosten</span></li>
<li className="flex gap-3 text-gray-500 dark:text-gray-400"><iconify-icon className="text-red-400 mt-1" icon="solar:close-square-linear"></iconify-icon> <span>Kein zentrales Energiemanagement</span></li>
</ul>
</div>
<div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-3 mb-6 text-[#FF5500]">
<iconify-icon className="text-2xl" icon="solar:check-circle-bold"></iconify-icon>
<h3 className="font-bold text-lg">1618 Ansatz</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-gray-900 dark:text-white font-medium"><iconify-icon className="text-[#FF5500] mt-1" icon="solar:check-square-bold"></iconify-icon> <span>Ein Ansprechpartner für alles</span></li>
<li className="flex gap-3 text-gray-900 dark:text-white font-medium"><iconify-icon className="text-[#FF5500] mt-1" icon="solar:check-square-bold"></iconify-icon> <span>Abgestimmtes Hardware-Ökosystem</span></li>
<li className="flex gap-3 text-gray-900 dark:text-white font-medium"><iconify-icon className="text-[#FF5500] mt-1" icon="solar:check-square-bold"></iconify-icon> <span>Festpreisgarantie nach Audit</span></li>
<li className="flex gap-3 text-gray-900 dark:text-white font-medium"><iconify-icon className="text-[#FF5500] mt-1" icon="solar:check-square-bold"></iconify-icon> <span>KI-basiertes Energiemanagement</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-gray-50 dark:bg-[#0B1121] reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Das 1618 System</h2>
<p className="text-gray-500 dark:text-gray-400 max-w-lg">Hardware-Agnostisch. Intelligent vernetzt. Alles aus einer Hand.</p>
</div>
<button className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 px-6 py-3 rounded-full text-sm font-bold hover:border-[#FF5500] transition-colors shadow-sm" onclick="router('system')">Details ansehen</button>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group gradient-border-card p-8 bg-white dark:bg-slate-900 h-full flex flex-col justify-between min-h-[340px] hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="w-14 h-14 bg-orange-50 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center text-[#FF5500] mb-8 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:solar-power-bold-duotone"></iconify-icon>
</div>
<h3 className="font-bold text-2xl tracking-tight mb-3 text-gray-900 dark:text-white">Erzeugung</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-sm">Glas-Glas Module der Tier-1 Klasse. Höchste Effizienz auch bei diffusem Licht in NRW.</p>
</div>
</div>
<div className="group gradient-border-card p-8 bg-white dark:bg-slate-900 h-full flex flex-col justify-between min-h-[340px] hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform"><iconify-icon className="text-3xl" icon="solar:temperature-bold-duotone"></iconify-icon></div>
<h3 className="font-bold text-2xl tracking-tight mb-3 text-gray-900 dark:text-white">Thermik</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-sm">Wärmepumpen (Propan R290), die PV-Überschuss intelligent in Puffer speichern.</p>
</div>
</div>
<div className="group gradient-border-card p-8 bg-white dark:bg-slate-900 h-full flex flex-col justify-between min-h-[340px] hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-8 group-hover:scale-110 transition-transform"><iconify-icon className="text-3xl" icon="solar:server-square-bold-duotone"></iconify-icon></div>
<h3 className="font-bold text-2xl tracking-tight mb-3 text-gray-900 dark:text-white">Intelligence</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-sm">Unser EMS (Energy Management System) verteilt Energie automatisch dorthin, wo sie gebraucht wird.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050914] relative overflow-hidden reveal">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 mb-6">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-bold text-white uppercase tracking-wider">Available on iOS &amp; Android</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Volle Kontrolle.<br/>In Ihrer Tasche.</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">Unser Energy OS visualisiert Ihre Energieflüsse in Echtzeit. Steuern Sie Wallbox, Prioritäten und Speicher bequem vom Sofa aus.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FF5500]"><iconify-icon className="text-2xl" icon="solar:chart-square-bold-duotone"></iconify-icon></div>
<div>
<h4 className="text-white font-bold">Echtzeit Analyse</h4>
<p className="text-sm text-gray-500">Sekundengenaue Daten zu Produktion und Verbrauch.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FF5500]"><iconify-icon className="text-2xl" icon="solar:bolt-circle-bold-duotone"></iconify-icon></div>
<div>
<h4 className="text-white font-bold">Smart Charging</h4>
<p className="text-sm text-gray-500">Laden Sie Ihr E-Auto automatisch nur mit Überschuss.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden transform rotate-3">
<div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[10px] top-[124px] rounded-r-lg"></div>
<div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#0F172A] relative">
<div className="p-6 pt-12 pb-4 flex justify-between items-center text-white">
<span className="font-bold">Home</span>
<iconify-icon icon="solar:settings-linear"></iconify-icon>
</div>
<div className="px-6 space-y-4">
<div className="bg-gradient-to-br from-[#FF5500] to-orange-600 rounded-2xl p-6 text-white shadow-lg shadow-orange-900/50">
<div className="text-xs opacity-80 mb-1">Aktuelle Leistung</div>
<div className="text-3xl font-bold">8.4 kW</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800 p-4 rounded-2xl">
<iconify-icon className="text-green-400 mb-2" icon="solar:battery-charge-linear"></iconify-icon>
<div className="text-xs text-gray-400">Batterie</div>
<div className="font-bold text-white">94%</div>
</div>
<div className="bg-slate-800 p-4 rounded-2xl">
<iconify-icon className="text-blue-400 mb-2" icon="solar:home-angle-linear"></iconify-icon>
<div className="text-xs text-gray-400">Haus</div>
<div className="font-bold text-white">0.4 kW</div>
</div>
</div>
<div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
<div className="text-xs text-gray-400 mb-3">Energiefluss</div>
<div className="h-24 flex items-end justify-between gap-1">
<div className="w-full bg-slate-700 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-700 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-[#FF5500] rounded-t-sm h-[80%]"></div>
<div className="w-full bg-slate-700 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-700 rounded-t-sm h-[60%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 reveal">
<div className="lg:col-span-2 text-center md:text-left mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">Der Weg zur Energie-Autarkie.</h2>
<p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">Ein stringenter Prozess. Von der ersten Datenanalyse bis zur Wartung.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-100 dark:bg-slate-800 -z-10"></div>
<div className="group text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-[#FF5500] flex items-center justify-center text-[#FF5500] font-bold mb-6 relative z-10 mx-auto md:mx-0 shadow-lg shadow-orange-500/20">1</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Digitale Analyse</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Erstellung eines digitalen Zwillings Ihres Gebäudes zur exakten Ertragssimulation.</p>
</div>
<div className="group text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 group-hover:border-[#FF5500] transition-colors flex items-center justify-center text-gray-400 mb-6 relative z-10 mx-auto md:mx-0">2</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">System Design</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Auswahl der optimalen Komponenten. Wir sind herstellerunabhängig.</p>
</div>
<div className="group text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 group-hover:border-[#FF5500] transition-colors flex items-center justify-center text-gray-400 mb-6 relative z-10 mx-auto md:mx-0">3</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Installation</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Umsetzung durch unsere zertifizierten lokalen Meisterbetriebe in Ihrer Region.</p>
</div>
<div className="group text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 group-hover:border-[#FF5500] transition-colors flex items-center justify-center text-gray-400 mb-6 relative z-10 mx-auto md:mx-0">4</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Monitoring</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">KI-gesteuerte Optimierung und Fernwartung im laufenden Betrieb.</p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 dark:bg-[#020617] reveal">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16 text-gray-900 dark:text-white">Das sagen unsere Bauherren</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
<div className="flex gap-1 text-[#FF5500] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"Endlich jemand, der das Ganze als System versteht. Die Abstimmung zwischen Wärmepumpe und PV funktioniert tadellos."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"><img alt="User" src="https://randomuser.me/api/portraits/men/32.jpg"/></div>
<div>
<div className="font-bold text-sm text-gray-900 dark:text-white">Thomas Weber</div>
<div className="text-xs text-gray-500">München</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
<div className="flex gap-1 text-[#FF5500] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"Die digitale Planung war beeindruckend genau. Die Ertragsprognose wurde im ersten Jahr sogar leicht übertroffen."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"><img alt="User" src="https://randomuser.me/api/portraits/women/44.jpg"/></div>
<div>
<div className="font-bold text-sm text-gray-900 dark:text-white">Sarah K.</div>
<div className="text-xs text-gray-500">Hamburg</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
<div className="flex gap-1 text-[#FF5500] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"Professionelle Abwicklung und saubere Installation. Auch der Support nach Inbetriebnahme ist top."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"><img alt="User" src="https://randomuser.me/api/portraits/men/86.jpg"/></div>
<div>
<div className="font-bold text-sm text-gray-900 dark:text-white">Michael B.</div>
<div className="text-xs text-gray-500">Köln</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Häufige Fragen</h2>
<p className="text-gray-500 mt-4">Alles, was Sie für den Start wissen müssen.</p>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
<button aria-expanded="false" className="accordion-btn w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-bold text-gray-900 dark:text-white pr-4">Wie lange dauert die Installation?</span>
<iconify-icon className="accordion-icon text-gray-400 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 text-sm text-gray-500 pb-6">In der Regel dauert die Installation der Komponenten 2-3 Tage. Die Netz-Anmeldung erfolgt parallel durch uns.</div>
</div>
</div>
<div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
<button aria-expanded="false" className="accordion-btn w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-bold text-gray-900 dark:text-white pr-4">Sind die Module hagelfest?</span>
<iconify-icon className="accordion-icon text-gray-400 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 text-sm text-gray-500 pb-6">Ja, wir verwenden ausschließlich Glas-Glas Module mit Hagelwiderstandsklasse 4 (bis 40mm Korngröße).</div>
</div>
</div>
<div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
<button aria-expanded="false" className="accordion-btn w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-bold text-gray-900 dark:text-white pr-4">Gibt es eine Garantie?</span>
<iconify-icon className="accordion-icon text-gray-400 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 text-sm text-gray-500 pb-6">Wir gewähren 10 Jahre Systemgarantie auf die Installation sowie bis zu 30 Jahre Produktgarantie der Hersteller.</div>
</div>
</div>
<div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
<button aria-expanded="false" className="accordion-btn w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-bold text-gray-900 dark:text-white pr-4">Ist mein Haus geeignet?</span>
<iconify-icon className="accordion-icon text-gray-400 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 text-sm text-gray-500 pb-6">Fast jedes Haus profitiert. Wir prüfen Statik und Elektrik im Vorfeld.</div>
</div>
</div>
<div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
<button aria-expanded="false" className="accordion-btn w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-bold text-gray-900 dark:text-white pr-4">Wie hoch ist die Ersparnis?</span>
<iconify-icon className="accordion-icon text-gray-400 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 text-sm text-gray-500 pb-6">Typischerweise zwischen 2.000€ und 4.500€ pro Jahr, je nach Verbrauchsprofil.</div>
</div>
</div>
<div className="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900">
<button aria-expanded="false" className="accordion-btn w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-bold text-gray-900 dark:text-white pr-4">Kann ich Komponenten nachrüsten?</span>
<iconify-icon className="accordion-icon text-gray-400 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-6 text-sm text-gray-500 pb-6">Ja, unser System ist modular. Sie können erst PV installieren und später die Wärmepumpe ergänzen.</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] p-10 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5500]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FF5500]/30 transition-colors duration-1000"></div>
<div className="relative z-10 max-w-3xl">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">Energie neu denken.</h2>
<p className="text-gray-300 text-lg md:text-xl font-medium mb-12 leading-relaxed">Kein Verkaufsgespräch. Sondern eine fundierte Analyse Ihres Potenzials. Starten Sie jetzt die Simulation für Ihr Gebäude.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#FF5500] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-900/50 flex items-center justify-center gap-3" onclick="router('calculator')">
<span>Berechnung starten</span>
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all" onclick="router('beispiele')">
                        Referenzen ansehen
                    </button>
</div>
</div>
</div>
</div>
</section>
</div>
</template>
<template id="tpl-solutions">
<div>
<section className="bg-gray-50 dark:bg-[#0B1121] pt-32 pb-20 px-6 reveal active">
<div className="max-w-5xl mx-auto text-center md:text-left">
<span className="text-[#FF5500] font-bold text-xs tracking-widest uppercase mb-6 block">Unsere Lösungen</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">Architektur<br/>statt Produktverkauf.</h1>
<p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">Wir verkaufen keine Einzelteile. Wir designen Energie-Architekturen, die physikalisch und ökonomisch funktionieren.</p>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 py-20 reveal">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Die System-Lücke schließen.</h2>
<p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Herkömmliche Anbieter optimieren nur ihr Gewerk. Der Heizungsbauer dimensioniert die Wärmepumpe zu groß (Sicherheit), der Solarteur plant den Speicher zu klein (Kosten).</p>
<div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm">
<div className="flex items-center gap-4 mb-2">
<iconify-icon className="text-red-500 text-2xl" icon="solar:danger-triangle-bold"></iconify-icon>
<span className="font-bold text-gray-900 dark:text-white">Konventioneller Verlust</span>
</div>
<p className="text-sm text-gray-500">Bis zu 35% Energieverlust durch fehlende Kommunikation zwischen Komponenten.</p>
</div>
</div>
<div className="space-y-4">
<div className="gradient-border-card p-6 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform">
<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white flex items-center gap-2"><iconify-icon className="text-[#FF5500]" icon="solar:bolt-circle-bold-duotone"></iconify-icon> 1. Sektorenkopplung</h3>
<p className="text-sm text-gray-500">Wir verbinden Strom, Wärme und Mobilität physikalisch und digital.</p>
</div>
<div className="gradient-border-card p-6 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform">
<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:battery-charge-bold-duotone"></iconify-icon> 2. Thermische Speicherung</h3>
<p className="text-sm text-gray-500">Nutzung des Estrichs und Warmwasserspeichers als "Batterie" bei Stromüberschuss.</p>
</div>
<div className="gradient-border-card p-6 bg-white dark:bg-slate-900 hover:scale-[1.02] transition-transform">
<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:graph-up-bold-duotone"></iconify-icon> 3. Prädiktive Steuerung</h3>
<p className="text-sm text-gray-500">Die Heizung weiß dank Wetterdaten heute schon, wie viel Sonne morgen scheint.</p>
</div>
</div>
</div>
</section>
<section className="bg-gray-50 dark:bg-[#0B1121] py-24 reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center md:text-left mb-12">
<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Einsatzbereiche</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
<iconify-icon className="text-4xl text-[#FF5500] mb-6" icon="solar:home-add-bold-duotone"></iconify-icon>
<h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Einfamilienhaus</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Die Komplettlösung für Eigenheimbesitzer, die Unabhängigkeit suchen.</p>
<ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
<li className="flex gap-2"><iconify-icon className="text-[#FF5500]" icon="solar:check-circle-linear"></iconify-icon> Autarkie bis 85%</li>
<li className="flex gap-2"><iconify-icon className="text-[#FF5500]" icon="solar:check-circle-linear"></iconify-icon> Notstrom-Absicherung</li>
<li className="flex gap-2"><iconify-icon className="text-[#FF5500]" icon="solar:check-circle-linear"></iconify-icon> E-Auto Ladung</li>
</ul>
</div>
<div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
<iconify-icon className="text-4xl text-blue-500 mb-6" icon="solar:city-bold-duotone"></iconify-icon>
<h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Mehrfamilienhaus</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Komplexe Abrechnungsmodelle und Mieterstrom einfach gemacht.</p>
<ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Mieterstrom-Modelle</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Zentrales Management</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Abrechnungsservice</li>
</ul>
</div>
<div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
<iconify-icon className="text-4xl text-gray-500 mb-6" icon="solar:factory-bold-duotone"></iconify-icon>
<h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Gewerbe</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Reduzierung der Lastspitzen und Optimierung der Betriebskosten.</p>
<ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
<li className="flex gap-2"><iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Peak Shaving</li>
<li className="flex gap-2"><iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> ESG-Konformität</li>
<li className="flex gap-2"><iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Flotten-Elektrifizierung</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-6 reveal">
<h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Offene Standards</h2>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="font-bold text-2xl text-gray-400">MODBUS TCP</div>
<div className="font-bold text-2xl text-gray-400">EEBUS</div>
<div className="font-bold text-2xl text-gray-400">SG READY</div>
<div className="font-bold text-2xl text-gray-400">KNX</div>
<div className="font-bold text-2xl text-gray-400">MQTT</div>
</div>
</section>
<section className="py-20 reveal">
<div className="max-w-7xl mx-auto px-6 text-center">
<button className="bg-[#FF5500] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20" onclick="router('calculator')">Lösung konfigurieren</button>
</div>
</section>
</div>
</template>
<template id="tpl-ansatz">
<div>
<section className="max-w-5xl mx-auto px-6 pt-32 pb-20 reveal active text-center md:text-left">
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-8">Unser Ansatz:<br/>Consulting statt Sales.</h1>
<p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">Wir verstehen uns nicht als Verkäufer, sondern als Energie-Architekten. Jedes Projekt beginnt mit einem weißen Blatt Papier und einer genauen Analyse.</p>
</section>
<section className="max-w-7xl mx-auto px-6 pb-24 reveal">
<div className="space-y-16">
<div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-gray-100 dark:border-slate-800 pt-12">
<div className="text-[#FF5500] font-bold text-6xl opacity-20 text-center md:text-left">01</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Digitale Zwillings-Simulation</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">Wir erstellen ein 3D-Modell Ihres Hauses und simulieren den Sonnenverlauf über 365 Tage mit historischen Wetterdaten Ihres Standorts. Wir raten nicht, wir rechnen.</p>
<div className="flex gap-2 justify-center md:justify-start">
<span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs font-mono">PV*SOL Premium</span>
<span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs font-mono">LiDAR Daten</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-gray-100 dark:border-slate-800 pt-12">
<div className="text-[#FF5500] font-bold text-6xl opacity-20 text-center md:text-left">02</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hardware-Agnostisches Sourcing</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">Wir haben kein Lager, das leer werden muss. Wir wählen die Technologie, die für Ihr spezifisches Projekt am besten ist. Ob Glas-Glas Module, Optimierer bei Verschattung oder Low-Noise Wärmepumpen.</p>
</div>
</div>
<div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-gray-100 dark:border-slate-800 pt-12">
<div className="text-[#FF5500] font-bold text-6xl opacity-20 text-center md:text-left">03</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Meister-Qualität</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">Keine Sub-Sub-Unternehmer. Wir arbeiten mit festen, auditierten Partnerbetrieben aus der Region. Ein Bauleiter von 1618 Haus überwacht die kritischen Phasen.</p>
</div>
</div>
</div>
</section>
<section className="bg-gray-50 dark:bg-[#0B1121] py-24 reveal">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Unsere Werte</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-white dark:bg-slate-900 rounded-3xl">
<h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Transparenz</h4>
<p className="text-sm text-gray-500">Keine versteckten Kosten. Festpreisgarantie nach Planung.</p>
</div>
<div className="p-8 bg-white dark:bg-slate-900 rounded-3xl">
<h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Nachhaltigkeit</h4>
<p className="text-sm text-gray-500">Wir verbauen Komponenten, die auf Langlebigkeit ausgelegt sind.</p>
</div>
<div className="p-8 bg-white dark:bg-slate-900 rounded-3xl">
<h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Partnerschaft</h4>
<p className="text-sm text-gray-500">Wir bleiben auch nach der Installation Ihr Ansprechpartner.</p>
</div>
</div>
</div>
</section>
</div>
</template>
<template id="tpl-system">
<div>
<section className="max-w-6xl mx-auto px-6 pt-32 pb-20 reveal active text-center">
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-6">Das Ökosystem</h1>
<p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Komponenten, die eine Sprache sprechen. Wir integrieren die besten Technologien am Markt zu einem funktionierenden Ganzen.</p>
</section>
<section className="max-w-7xl mx-auto px-6 pb-24 space-y-24 reveal">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-gray-50 dark:bg-slate-900 h-80 rounded-3xl flex items-center justify-center border border-gray-100 dark:border-slate-800">
<iconify-icon className="text-9xl text-gray-300 dark:text-slate-700" icon="solar:solar-power-bold-duotone"></iconify-icon>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Erzeugung (PV)</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">N-Type TopCon Technologie für höhere Effizienz bei diffusem Licht. Bifaziale Module nutzen auch Lichtreflexionen von der Rückseite. Wir setzen auf Full-Black Module für maximale Ästhetik.</p>
<ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 inline-block text-left">
<li>• 30 Jahre Leistungsgarantie</li>
<li>• Hagelwiderstandsklasse 4</li>
<li>• Anti-Reflex-Beschichtung</li>
</ul>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="md:order-2 bg-gray-50 dark:bg-slate-900 h-80 rounded-3xl flex items-center justify-center border border-gray-100 dark:border-slate-800">
<iconify-icon className="text-9xl text-blue-300 dark:text-blue-900" icon="solar:battery-charge-bold-duotone"></iconify-icon>
</div>
<div className="md:order-1 text-center md:text-left">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Speicher &amp; Management</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">LFP-Zellchemie (Lithium-Eisen-Phosphat) für maximale Sicherheit und Langlebigkeit (&gt;6000 Zyklen). Der Hybrid-Wechselrichter steuert die Energieflüsse intelligent und schaltet bei Netzausfall in &lt;10ms um.</p>
<ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 inline-block text-left">
<li>• Modulare Erweiterbarkeit</li>
<li>• Notstromfähig (3-phasig)</li>
<li>• 10 Jahre Systemgarantie</li>
</ul>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-gray-50 dark:bg-slate-900 h-80 rounded-3xl flex items-center justify-center border border-gray-100 dark:border-slate-800">
<iconify-icon className="text-9xl text-orange-300 dark:text-orange-900" icon="solar:temperature-bold-duotone"></iconify-icon>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Thermik (Wärmepumpe)</h3>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">Modulierende Wärmepumpen (Propan R290), die per SG-Ready Schnittstelle bei PV-Überschuss die Vorlauftemperatur anheben und Energie puffern. Leise wie ein Flüstern.</p>
<ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 inline-block text-left">
<li>• Natürliches Kältemittel</li>
<li>• Hohe Vorlauftemperaturen (75°C)</li>
<li>• Smart-Grid Ready</li>
</ul>
</div>
</div>
</section>
<section className="bg-gray-900 text-white py-24 reveal">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold mb-8">Die App: Totale Kontrolle.</h2>
<p className="text-gray-400 max-w-2xl mx-auto mb-12">Sehen Sie in Echtzeit, was Ihr Haus produziert und verbraucht. Steuern Sie Wallbox und Heizung von unterwegs.</p>
<div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-4 border border-gray-700">
<div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
<span className="text-gray-600 font-mono text-sm">[App Interface Mockup Visualization]</span>
</div>
</div>
</div>
</section>
</div>
</template>
<template id="tpl-beispiele">
<div>
<section className="max-w-6xl mx-auto px-6 pt-32 pb-20 reveal active text-center md:text-left">
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-12">Real-World Performance</h1>
<div className="space-y-16">
<div className="gradient-border-card bg-white dark:bg-slate-900 p-8 shadow-sm">
<div className="flex flex-col md:flex-row justify-between mb-8">
<div>
<h3 className="text-2xl font-bold text-gray-900 dark:text-white">EFH Müller, Köln</h3>
<p className="text-gray-500 text-sm">Sanierung Baujahr 1978</p>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<div className="text-center md:text-right">
<div className="text-2xl font-bold text-[#FF5500]">82%</div>
<div className="text-xs text-gray-400 uppercase">Autarkie</div>
</div>
<div className="text-center md:text-right">
<div className="text-2xl font-bold text-gray-900 dark:text-white">3.400€</div>
<div className="text-xs text-gray-400 uppercase">Sparnis / Jahr</div>
</div>
</div>
</div>
<div className="w-full h-64 bg-gray-100 dark:bg-slate-800 rounded-xl mb-8 overflow-hidden">
<img alt="Reference House" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid md:grid-cols-3 gap-6 text-sm text-gray-500">
<div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
<div className="font-bold mb-1 text-gray-900 dark:text-white">Vorher</div>
                        Ölheizung (3000L), Strom 4500kWh<br/>Kosten: ~4.800€ / Jahr
                     </div>
<div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
<div className="font-bold mb-1 text-gray-900 dark:text-white">System</div>
                        18kWp PV, 15kWh Speicher,<br/>Wärmepumpe 12kW
                     </div>
<div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
<div className="font-bold mb-1 text-gray-900 dark:text-white">Nachher</div>
                        Stromkosten Restbezug: ~600€<br/>Wartung: ~200€
                     </div>
</div>
</div>
<div className="gradient-border-card bg-white dark:bg-slate-900 p-8 shadow-sm">
<div className="flex flex-col md:flex-row justify-between mb-8">
<div>
<h3 className="text-2xl font-bold text-gray-900 dark:text-white">Neubau K., Bonn</h3>
<p className="text-gray-500 text-sm">KfW 40+ Standard</p>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<div className="text-center md:text-right">
<div className="text-2xl font-bold text-[#FF5500]">91%</div>
<div className="text-xs text-gray-400 uppercase">Autarkie</div>
</div>
</div>
</div>
<div className="w-full h-64 bg-gray-100 dark:bg-slate-800 rounded-xl mb-8 overflow-hidden">
<img alt="Reference House 2" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="grid md:grid-cols-3 gap-6 text-sm text-gray-500">
<div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
<div className="font-bold mb-1 text-gray-900 dark:text-white">Ziel</div>
                        Maximale Unabhängigkeit &amp; E-Mobilität
                     </div>
<div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
<div className="font-bold mb-1 text-gray-900 dark:text-white">System</div>
                        24kWp Full-Black, 22kWh Speicher,<br/>2x Wallbox
                     </div>
<div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
<div className="font-bold mb-1 text-gray-900 dark:text-white">Ergebnis</div>
                        Beide Autos fahren 9 Monate/Jahr<br/>rein mit Sonnenstrom.
                     </div>
</div>
</div>
</div>
</section>
</div>
</template>
<template id="tpl-calculator">

<div className="min-h-screen py-32 flex flex-col items-center justify-center px-4 reveal active relative bg-gray-50 dark:bg-transparent overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-1/4 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
<div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]"></div>
</div>
<div className="mb-8 text-center relative z-10">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">Potenzial-Analyse</h1>
<div className="flex gap-2 justify-center mt-4" id="calc-progress">
<div className="h-1.5 w-8 rounded-full bg-[#FF5500] transition-all duration-300" id="prog-1"></div>
<div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-slate-700 transition-all duration-300" id="prog-2"></div>
<div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-slate-700 transition-all duration-300" id="prog-3"></div>
<div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-slate-700 transition-all duration-300" id="prog-4"></div>
</div>
</div>

<div className="w-full max-w-4xl bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl relative transition-all duration-500 z-10 h-auto min-h-[500px] flex flex-col justify-center" id="calc-container">
<div className="p-8 md:p-12 transition-all duration-500" id="step-1">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Welches Gebäude besitzen Sie?</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">

<button className="calc-card group relative min-h-[14rem] md:h-56 rounded-3xl border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-200 active:scale-95" onclick="selectOption(1, 'efh')">
<div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-4xl text-[#FF5500]" icon="solar:home-smile-bold-duotone"></iconify-icon>
</div>
<span className="font-bold text-lg text-gray-900 dark:text-white">Einfamilienhaus</span>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]">
<iconify-icon className="text-2xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</button>
<button className="calc-card group relative min-h-[14rem] md:h-56 rounded-3xl border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-200 active:scale-95" onclick="selectOption(1, 'mfh')">
<div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-4xl text-blue-500" icon="solar:city-bold-duotone"></iconify-icon>
</div>
<span className="font-bold text-lg text-gray-900 dark:text-white">Gewerbe / MFH</span>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]">
<iconify-icon className="text-2xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="p-8 md:p-12 hidden transition-all duration-500 w-full flex-col justify-center" id="step-2">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Welche Dachform?</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
<button className="calc-card group relative min-h-[14rem] md:h-56 rounded-3xl border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-200 active:scale-95" onclick="selectOption(2, 'schraeg')">
<div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-4xl text-gray-600 dark:text-gray-300" icon="solar:home-angle-bold-duotone"></iconify-icon>
</div>
<span className="font-bold text-lg text-gray-900 dark:text-white">Schrägdach</span>
</button>
<button className="calc-card group relative min-h-[14rem] md:h-56 rounded-3xl border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-200 active:scale-95" onclick="selectOption(2, 'flach')">
<div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-4xl text-gray-600 dark:text-gray-300" icon="solar:box-minimalistic-bold-duotone"></iconify-icon>
</div>
<span className="font-bold text-lg text-gray-900 dark:text-white">Flachdach</span>
</button>
</div>
<div className="text-center mt-8">
<button className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 font-bold transition-colors" onclick="selectOption(2, 'back')">Zurück</button>
</div>
</div>
<div className="p-8 md:p-12 hidden transition-all duration-500 w-full flex-col justify-center" id="step-3">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Ihr Stromverbrauch</h3>
<p className="text-center text-gray-500 mb-10">Schätzung pro Jahr in kWh</p>
<div className="max-w-xl mx-auto w-full">
<div className="mb-12 relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 blur-xl"></div>
<span className="text-7xl font-bold text-[#FF5500] tabular-nums tracking-tighter relative z-10" id="kwh-display">4.000</span>
</div>
<div className="px-4 mb-8 relative">
<input className="w-full accent-[#FF5500] z-20 relative" max="12000" min="1500" oninput="updateSlider(this.value)" step="100" type="range" value="4000"/>
<div className="flex justify-between text-xs font-bold text-gray-400 mt-4 uppercase tracking-wider">
<span>Single (1.500)</span>
<span>Familie+E-Auto (12.000)</span>
</div>
</div>
<div className="flex justify-center gap-4 mt-8">
<button className="px-6 py-3 rounded-full text-gray-500 font-bold hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors" onclick="selectOption(3, 'back')">Zurück</button>
<button className="bg-[#FF5500] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 hover:scale-105 flex items-center gap-2" onclick="runCalculation()">
<span>Analyse starten</span>
<iconify-icon icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="p-8 md:p-12 hidden transition-all duration-500 w-full flex-col justify-center items-center text-center" id="step-4">
<div className="relative w-24 h-24 mb-8">
<div className="absolute inset-0 border-4 border-gray-100 dark:border-slate-800 rounded-full"></div>
<div className="absolute inset-0 border-4 border-[#FF5500] rounded-full border-t-transparent animate-spin"></div>
<div className="absolute inset-0 flex items-center justify-center text-[#FF5500]">
<iconify-icon className="text-4xl animate-pulse" icon="solar:bolt-circle-bold-duotone"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2" id="loading-text">Analysiere Standortdaten...</h3>
<div className="w-64 h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mt-4">
<div className="h-full bg-[#FF5500] animate-flow w-full origin-left scale-x-50"></div>
</div>
</div>
<div className="p-8 md:p-12 hidden text-center w-full flex-col justify-center" id="step-5">
<div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-small">
<iconify-icon className="text-3xl" icon="solar:confetti-minimalistic-bold-duotone"></iconify-icon>
</div>
<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Potenzial erkannt!</h3>
<p className="text-gray-500 mb-8 font-medium">Das 1618 System ist ideal für Ihr Gebäude.</p>
<div className="grid grid-cols-2 gap-4 mb-6 max-w-lg mx-auto w-full">
<div className="p-5 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
<div className="text-3xl font-bold text-[#FF5500] mb-1 counter" data-target="86">0%</div>
<div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Mögliche Autarkie</div>
</div>
<div className="p-5 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
<div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 counter-currency" data-target="2450">0€</div>
<div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Ersparnis / Jahr</div>
</div>
</div>
<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 p-4 rounded-xl text-sm text-blue-800 dark:text-blue-300 mb-8 text-left max-w-lg mx-auto">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl mt-0.5 flex-shrink-0" icon="solar:info-circle-bold"></iconify-icon>
<div>
<strong>Empfehlung:</strong> <br />
                        12kWp PV + 10kWh Speicher + Wärmepumpe.
                    </br></div>
</div>
</div>
<div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
<button className="w-full bg-[#FF5500] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-transform hover:scale-[1.02] shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group" onclick="router('contact')">
<span>Kostenloses Angebot</span>
<iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="text-xs font-bold text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase tracking-wider transition-colors py-2" onclick="router('calculator')">Neu berechnen</button>
</div>
</div>
</div>
</div>
</template>
<template id="tpl-impressum">
<section className="max-w-3xl mx-auto px-6 pt-32 pb-20 reveal active">
<h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Impressum</h1>
<div className="prose dark:prose-invert text-gray-500">
<p className="mb-4"><strong>1618 Haus GmbH</strong><br/>Energieallee 1<br/>50667 Köln</p>
<p className="mb-4">Vertreten durch die Geschäftsführung.<br/>Handelsregister: HRB 12345, Amtsgericht Köln</p>
<p>Kontakt:<br/>Telefon: +49 221 12345678<br/>E-Mail: hello@1618haus.de</p>
</div>
</section>
</template>
<template id="tpl-datenschutz">
<section className="max-w-3xl mx-auto px-6 pt-32 pb-20 reveal active">
<h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Datenschutz</h1>
<div className="prose dark:prose-invert text-gray-500">
<p>Der Schutz Ihrer Daten ist uns wichtig. Diese minimalistische Demo erhebt keine echten Daten.</p>
</div>
</section>
</template>
<template id="tpl-contact">
<div className="min-h-screen flex flex-col items-center justify-center">
<section className="max-w-xl mx-auto px-6 reveal active text-center">
<div className="w-20 h-20 bg-orange-100 dark:bg-orange-500/10 text-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-4xl" icon="solar:letter-bold-duotone"></iconify-icon>
</div>
<h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Anfrage erhalten</h1>
<p className="text-gray-500 dark:text-gray-400 mb-8">Vielen Dank für Ihr Interesse. In einer echten Anwendung würden wir uns nun bei Ihnen melden.</p>
<button className="text-[#FF5500] font-bold hover:underline" onclick="router('home')">Zurück zur Startseite</button>
</section>
</div>
</template>


    </>
  );
}
