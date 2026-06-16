import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        // Init Lenis for Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Parallax Logic
        const blobs = document.querySelectorAll('.parallax-blob');

        function raf(time) {
            lenis.raf(time);
            
            // Apply Parallax based on scrollY
            const scrollY = window.scrollY;
            blobs.forEach(blob => {
                const speed = parseFloat(blob.getAttribute('data-speed') || 0);
                // Move blobs slowly down/up as user scrolls
                blob.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            });

            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[100]">
<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
</div>

<div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">

<div className="parallax-blob absolute top-[-10%] left-[-10%] will-change-transform" data-speed="0.15">
<div className="w-[600px] h-[600px] bg-[#5EA500] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.12] animate-blob"></div>
</div>

<div className="parallax-blob absolute top-[30%] right-[-15%] will-change-transform" data-speed="0.08">
<div className="w-[500px] h-[500px] bg-[#5EA500] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.1] animate-blob delay-2000"></div>
</div>

<div className="parallax-blob absolute bottom-[-10%] left-[10%] will-change-transform" data-speed="0.12">
<div className="w-[700px] h-[700px] bg-[#5EA500] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.08] animate-blob delay-4000"></div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-[#020204]/70 backdrop-blur-xl border-white/5 reveal-on-scroll is-visible">
<div className="flex items-center gap-2 cursor-pointer group">
<img alt="Garna" className="h-6 brightness-0 invert opacity-90" src="https://cdn.prod.website-files.com/690b359fa4596a165b817850/690bc0b0ffe87a569a869134_Logo_garna.svg"/>
</div>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-white/5 border-white/5">
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Решения</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">Цены</a>
<a className="px-4 py-1.5 text-xs rounded-full transition-all text-slate-300 hover:text-white hover:bg-white/5 active:scale-95" href="#">О нас</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 text-[11px] transition-all text-slate-400 hover:text-white active:scale-95">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:log-in" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Вход</span>
</button>
<div className="h-4 w-px hidden lg:block bg-white/10"></div>
<button className="group relative text-xs font-semibold bg-[#0a0a0c] border px-4 py-2 rounded-md transition-all overflow-hidden hover:border-[#5EA500]/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(94,165,0,0.2)] text-white border-white/10 active:scale-95">
<span className="btn-content-slide">
<span className="btn-text-original">Регистрация</span>
<span className="btn-text-hover text-[#5EA500]">Начать →</span>
</span>
</button>
</div>
</nav>

<main className="flex flex-col overflow-hidden w-full z-10 pt-32 pb-20 relative items-center">

<div className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none bg-animate-enter">
<div className="relative w-full h-full bg-fade-mask">
<div className="w-full h-full filter hue-rotate-[230deg] saturate-[150%] opacity-60">
<div className="absolute w-full h-full left-0 top-0" data-us-project="TIWE0oFfvUmetsFoxL6u"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#020204]/80 via-transparent to-[#020204] z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#020204] via-transparent to-[#020204] z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#020204] to-transparent z-10"></div>
</div>



<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5EA500]/20 bg-[#5EA500]/10 text-[11px] font-semibold mb-8 shadow-[0_0_20px_rgba(94,165,0,0.15)] text-[#d9f99d] is-visible">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#5EA500]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#5EA500]"></span>
</span>
<span>ЕДИНАЯ ПЛАТФОРМА ДЛЯ БИЗНЕСА</span>
</div>
<h1 className="reveal-on-scroll delay-100 md:text-7xl text-4xl font-semibold text-white tracking-tight mb-6 leading-[1.1] drop-shadow-2xl is-visible">
                Глобальные решения для <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">выплаты зарплат.</span>
</h1>
<p className="reveal-on-scroll delay-200 leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-slate-400 is-visible">
                Один перевод — бесконечные возможности. Проводите выплаты в 150+ странах с минимальными усилиями и полной автоматизацией.
            </p>
<div className="reveal-on-scroll delay-300 flex flex-col md:flex-row items-center justify-center gap-5 is-visible">
<div className="btn-glow-border group cursor-pointer w-full md:w-auto">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-[#0a0a0c] text-sm font-semibold rounded-[5px] transition-all hover:bg-[#121215] text-white">
<span className="btn-content-slide">
<span className="btn-text-original">Сделайте первый шаг</span>
<span className="btn-text-hover text-[#5EA500]">Регистрация</span>
</span>
</button>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-300 relative w-full max-w-5xl mx-auto mt-16 px-6 perspective-[2000px] z-20 is-visible">
<div className="glass-panel rounded-xl p-1.5 rotate-x-6 origin-center animate-float border-[#5EA500]/10">
<div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-lg border border-white/5 overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] text-[#5EA500] font-mono">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
                            GLOBAL PAYROLL ACTIVE
                        </div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="col-span-1 space-y-6">
<div>
<p className="text-xs text-slate-500 mb-1">Общий баланс</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white font-mono">$142,850.00</span>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-[#5EA500]/10 flex items-center justify-center text-[#5EA500]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<p className="text-xs text-white font-semibold">Auto-Payouts</p>
<p className="text-[10px] text-slate-500">Processing Batch #4092</p>
</div>
</div>
<div className="w-full bg-slate-800/50 h-1 rounded-full overflow-hidden">
<div className="bg-[#5EA500] w-3/4 h-full"></div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2">
<div className="flex justify-between items-center mb-4">
<p className="text-xs text-slate-500">Последние транзакции</p>
<span className="text-[10px] text-slate-600">Всего 150+ стран</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-[10px]">US</div>
<div className="">
<p className="text-xs text-white">Contractor Payment</p>
<p className="text-[10px] text-slate-500">USA • Bank Transfer</p>
</div>
</div>
<span className="text-xs text-white font-mono">$2,400.00</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-[10px]">UK</div>
<div>
<p className="text-xs text-white">Freelance Services</p>
<p className="text-[10px] text-slate-500">UK • Faster Payments</p>
</div>
</div>
<span className="text-xs text-white font-mono">£1,850.00</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#5EA500]/10 flex items-center justify-center text-[#5EA500] font-bold text-[10px]">TR</div>
<div>
<p className="text-xs text-white">Crypto Payout</p>
<p className="text-[10px] text-slate-500">USDT • TRC20</p>
</div>
</div>
<span className="text-xs text-white font-mono">15,000.00 USDT</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-sm mt-20 z-20 is-visible">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="p-8 text-center group hover:bg-white/[0.02] transition-colors">
<p className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500 tracking-tight">300+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest">Компаний с нами</p>
</div>
<div className="p-8 text-center group hover:bg-white/[0.02] transition-colors">
<p className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500 tracking-tight">24/7</p>
<p className="text-xs text-slate-500 uppercase tracking-widest">Доступность выплат</p>
</div>
<div className="p-8 text-center group hover:bg-white/[0.02] transition-colors">
<p className="text-4xl font-bold text-[#5EA500] mb-2 group-hover:scale-110 transition-transform duration-500 tracking-tight">98%</p>
<p className="text-xs text-slate-500 uppercase tracking-widest">Успешность выплат</p>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mt-32 relative z-20 w-full">
<div className="mb-12 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Современная платформа</h2>
<p className="text-slate-400 max-w-xl font-light">Мы упрощаем процесс начисления средств, предлагая гибкие и надежные решения для компаний всех размеров.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="reveal-on-scroll glass-panel p-6 rounded-xl md:col-span-2 group hover:border-white/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Автоматизация выплат</h3>
<p className="text-sm text-slate-400">Автоматизируйте глобальные выплаты с помощью гибкой платформы, которая берёт рутину на себя.</p>
</div>

<div className="reveal-on-scroll delay-100 glass-panel p-6 rounded-xl md:col-span-1 group hover:border-white/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Глобальный охват</h3>
<p className="text-sm text-slate-400">150+ стран, местные валюты и криптовалюта.</p>
</div>

<div className="reveal-on-scroll delay-200 glass-panel p-6 rounded-xl md:col-span-1 group hover:border-white/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-[#5EA500]/10 flex items-center justify-center text-[#5EA500] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Без скрытых комиссий</h3>
<p className="text-sm text-slate-400">Прозрачные тарифы, нулевые затраты на подключение.</p>
</div>

<div className="reveal-on-scroll glass-panel p-6 rounded-xl md:col-span-2 group hover:border-white/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Умное финансирование</h3>
<p className="text-sm text-slate-400">Garna предоставляет авансы по зарплатам, которые возмещаются в любой удобный момент. 0% по умолчанию или покрытие комиссий за сотрудников.</p>
</div>

<div className="reveal-on-scroll delay-100 glass-panel p-6 rounded-xl md:col-span-3 group hover:border-white/20 transition-all flex flex-col md:flex-row items-center gap-6">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Оптимизированные процессы</h3>
<p className="text-sm text-slate-400">Упростите глобальные выплаты, экономя время. Все результаты работы сотрудников принадлежат только вам (Полное право собственности).</p>
</div>
<div className="flex-1 w-full p-4 bg-white/5 rounded-lg border border-white/5">
<div className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-[#5EA500] iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>Простая настройка</span>
</div>
<div className="h-px bg-white/5 my-3"></div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-[#5EA500] iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>Один контракт</span>
</div>
<div className="h-px bg-white/5 my-3"></div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-[#5EA500] iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>Никакой бюрократии</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mt-32 relative z-20 w-full">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Как начать</h2>
<p className="text-slate-400 font-light">Начните использовать Garna всего в несколько шагов</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative group reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-white text-lg font-bold mb-6 relative z-10 group-hover:border-[#5EA500] group-hover:text-[#5EA500] transition-colors shadow-[0_0_0_8px_rgba(2,2,4,1)]">1</div>
<h3 className="text-white font-semibold mb-2">Настройте аккаунт</h3>
<p className="text-xs text-slate-500">Быстрая регистрация и верификация вашего бизнеса.</p>
</div>

<div className="relative group reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-white text-lg font-bold mb-6 relative z-10 group-hover:border-[#5EA500] group-hover:text-[#5EA500] transition-colors shadow-[0_0_0_8px_rgba(2,2,4,1)]">2</div>
<h3 className="text-white font-semibold mb-2">Пригласите команду</h3>
<p className="text-xs text-slate-500">Добавьте сотрудников через email или API интеграцию.</p>
</div>

<div className="relative group reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-white text-lg font-bold mb-6 relative z-10 group-hover:border-[#5EA500] group-hover:text-[#5EA500] transition-colors shadow-[0_0_0_8px_rgba(2,2,4,1)]">3</div>
<h3 className="text-white font-semibold mb-2">Пополните баланс</h3>
<p className="text-xs text-slate-500">Банковский перевод, крипта или карта.</p>
</div>

<div className="relative group reveal-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-white text-lg font-bold mb-6 relative z-10 group-hover:border-[#5EA500] group-hover:text-[#5EA500] transition-colors shadow-[0_0_0_8px_rgba(2,2,4,1)]">4</div>
<h3 className="text-white font-semibold mb-2">Отправляйте выплаты</h3>
<p className="text-xs text-slate-500">Мгновенные переводы по всему миру.</p>
</div>
</div>
</div>

<div className="w-full bg-white/[0.02] border-y border-white/5 mt-32 py-24 relative z-20">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Платите сотрудникам заранее</h2>
<p className="text-slate-400 mb-8 font-light leading-relaxed">В вашем доступе удобные выплаты, которые вы можете провести заранее с комфортными методами возврата.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-[#5EA500]/10 flex items-center justify-center text-[#5EA500] shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Гибкий возврат</h4>
<p className="text-xs text-slate-500 mt-1">Возмещайте позже на гибких условиях. Выберите график: 30, 60 или 90 дней.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-[#5EA500]/10 flex items-center justify-center text-[#5EA500] shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:banknote" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Крупные лимиты</h4>
<p className="text-xs text-slate-500 mt-1">Авансы от $10K до $1M с быстрым рассмотрением заявки.</p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-2 rounded-xl border-[#5EA500]/20 rotate-1 reveal-on-scroll delay-200">
<div className="bg-[#0a0a0a] rounded-lg p-6 border border-white/5">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-mono text-slate-500">EARLY PAYOUT REQUEST</span>
<span className="px-2 py-0.5 rounded bg-[#5EA500]/20 text-[#5EA500] text-[10px]">APPROVED</span>
</div>
<div className="text-3xl font-bold text-white mb-1 tracking-tight">$50,000.00</div>
<div className="text-xs text-slate-500 mb-6">Available Advance Limit</div>
<div className="w-full h-1 bg-slate-800 rounded-full mb-4">
<div className="w-1/3 bg-[#5EA500] h-full rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 font-mono">
<span>0% Interest</span>
<span>30 Days Term</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto px-6 mt-32 mb-20 relative z-20 w-full">
<h2 className="text-3xl font-semibold text-center text-white mb-12 tracking-tight reveal-on-scroll">Часто задаваемые вопросы</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-lg overflow-hidden reveal-on-scroll">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-sm font-semibold text-white hover:bg-white/5 transition-colors">
<span>Как начать работу с Garna?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-slate-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        Зарегистрируйтесь на нашей платформе, свяжитесь с отделом продаж и начните обрабатывать выплаты всего в несколько шагов.
                    </div>
</details>
<details className="group glass-panel rounded-lg overflow-hidden reveal-on-scroll delay-100">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-sm font-semibold text-white hover:bg-white/5 transition-colors">
<span>Какие методы оплаты поддерживает Garna?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-slate-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        Мы предлагаем банковские переводы в долларах, местных валютах, электронных кошельках и криптовалюте (USDT, BTC, ETH).
                    </div>
</details>
<details className="group glass-panel rounded-lg overflow-hidden reveal-on-scroll delay-200">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-sm font-semibold text-white hover:bg-white/5 transition-colors">
<span>Можно ли платить контракторам в крипте?</span>
<svg aria-hidden="true" className="iconify transition-transform duration-300 group-open:rotate-180 text-slate-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        Да, Garna полностью поддерживает выплаты в стейблкоинах (USDT, USDC) и основных криптовалютах.
                    </div>
</details>
</div>
</div>

<footer className="w-full border-t border-white/5 bg-[#020204] py-12 relative z-20 reveal-on-scroll">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<img alt="Garna" className="h-5 brightness-0 invert opacity-50 grayscale" src="https://cdn.prod.website-files.com/690b359fa4596a165b817850/690bc0b0ffe87a569a869134_Logo_garna.svg"/>
<span className="text-xs text-slate-600">© 2024 Garna Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-600 hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="text-xs text-slate-600 hover:text-white transition-colors" href="#">Условия использования</a>
<a className="text-xs text-slate-600 hover:text-white transition-colors" href="#">Связь</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
