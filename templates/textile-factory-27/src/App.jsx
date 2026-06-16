import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible.
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



document.addEventListener("DOMContentLoaded", () => {
// 1. General Observer (Using user provided script mostly, this remains for counters only)
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
if (entry.target.classList.contains('counter-trigger')) startCounters(entry.target);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".counter-trigger").forEach((el) => observer.observe(el));
// 2. Counters
function startCounters(container) {
container.querySelectorAll('[data-target]').forEach(counter => {
const target = parseFloat(counter.getAttribute('data-target'));
const suffix = counter.getAttribute('data-suffix') || '';
const prefix = counter.getAttribute('data-prefix') || '';
let start = 0;
const duration = 1500;
const startTime = performance.now();
function update(t) {
const p = Math.min((t - startTime) / duration, 1);
const ease = 1 - Math.pow(1 - p, 4);
counter.innerText = prefix + (target * ease).toFixed(target % 1 === 0 ? 0 : 1) + suffix;
if (p < 1) requestAnimationFrame(update);
}
requestAnimationFrame(update);
});
}
// 3. Text Reveal
const textSection = document.getElementById('scroll-reveal-section');
const words = document.querySelectorAll('.reveal-word');
if (textSection) {
window.addEventListener('scroll', () => {
const rect = textSection.getBoundingClientRect();
const winH = window.innerHeight;
const startReveal = winH * 0.9;
const endReveal = winH * 0.4;
let progress = (startReveal - rect.top) / (startReveal - endReveal);
progress = Math.max(0, Math.min(1, progress));
const activeCount = Math.floor(progress * words.length);
words.forEach((w, i) => i < activeCount ? w.classList.add('active') : w.classList.remove('active'));
});
}
// 4. Workflow Steps Observer
const workflowSteps = document.querySelectorAll('.workflow-step-content');
const stepIndicators = document.querySelectorAll('.step-trigger');
const workflowImages = document.querySelectorAll('.workflow-img');
const stepObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const index = entry.target.getAttribute('data-step');
stepIndicators.forEach(ind => {
const line = ind.querySelector('.step-indicator');
const text = ind.querySelector('.step-text');
if(ind.getAttribute('data-step') === index) {
line.classList.add('active');
text.classList.add('active');
} else {
line.classList.remove('active');
text.classList.remove('active');
}
});
workflowImages.forEach(img => {
if(img.getAttribute('data-step') === index) {
img.classList.remove('opacity-0', 'scale-95');
img.classList.add('opacity-100', 'scale-100');
} else {
img.classList.add('opacity-0', 'scale-95');
img.classList.remove('opacity-100', 'scale-100');
}
});
}
});
}, { rootMargin: "-40% 0px -40% 0px" });
workflowSteps.forEach(step => stepObserver.observe(step));
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10"></div>
</div>

<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="border-subtle flex bg-black/90 w-full max-w-5xl border pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center justify-between">
<a className="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs tracking-widest uppercase transition-all text-neutral-300 font-geist" href="#">Gulum.Factory</a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#about">О нас</a>
<a className="hover:text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#services">Услуги</a>
<a className="hover:text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#production">Производство</a>
<a className="hover:text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#portfolio">Портфолио</a>
</div>
<div className="px-6 text-2xl text-white uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                GULUM
            </div>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#advantages">Преимущества</a>
<a className="hover:text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-geist" href="#contact">Контакты</a>
</div>
<a className="group relative bg-white text-black px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-transform overflow-hidden" href="https://wa.me/996558780118?text=Здравствуйте,%20хочу%20получить%20расчет%20стоимости." target="_blank">
<span className="relative z-10 font-geist flex items-center gap-2">
<iconify-icon icon="lucide:message-circle"></iconify-icon> WhatsApp
                </span>
<div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-green-500"></div>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center mb-24 relative space-y-0 items-center justify-center">

<div className="absolute -left-4 md:left-20 top-0 flex flex-col gap-2 opacity-30 hidden lg:flex [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 font-geist">EST. 2018</span>
<div className="w-px h-12 bg-gradient-to-b to-transparent from-neutral-500"></div>
</div>
<div className="flex flex-col z-10 w-full items-center justify-center">
<h1 className="uppercase leading-[0.85] flex flex-wrap justify-center gap-x-4 md:text-8xl md:gap-x-8 text-5xl font-semibold text-white tracking-tighter mt-8 mb-0">
<span className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll tracking-tighter font-space-grotesk font-light">Лидер</span>
<span className="text-gradient [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-light tracking-tighter font-space-grotesk">Производства</span>
</h1>
</div>
<div className="flex flex-col md:flex-row md:mt-12 md:mb-12 z-10 w-full mt-10 mb-8 gap-x-6 gap-y-6 items-center justify-center">

<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll group my-8 relative">
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-[#0a0a0a] transition-colors md:h-16 bg-[#080808] h-12 z-10 border rounded-full mt-[1px] mr-[1px] mb-[1px] ml-[1px] pr-6 pl-3 relative gap-x-4 gap-y-4 items-center">
<div className="md:w-10 md:h-10 overflow-hidden flex border-subtle text-white bg-neutral-900 w-8 h-8 border rounded-full relative items-center justify-center">
<iconify-icon className="text-lg text-white" icon="lucide:scissors"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 font-geist">Локация</span>
<span className="text-xs md:text-sm leading-none text-white font-geist">Бишкек, Кыргызстан</span>
</div>
</div>
</div>
<h2 className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-lg text-neutral-400 tracking-tight font-space-grotesk md:text-3xl max-w-2xl">
                        Одежда Второго Слоя для Российского Бизнеса
                    </h2>
</div>
<div className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll md:text-xl text-xs text-neutral-500 font-space-grotesk text-center max-w-lg">
                    Ваша надежная фабрика. Полный цикл пошива, 100% "белый" импорт с сертификатами ТР ТС.
                </div>
<div className="mt-8 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all font-geist" href="https://wa.me/996558780118?text=Здравствуйте,%20хочу%20получить%20расчет%20стоимости.">
                        Получить Расчет
                        <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto counter-trigger [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll" id="about">

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20 font-geist">01</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="lucide:shirt"></iconify-icon>
<div className="px-2 py-0.5 border border-green-900/30 bg-green-900/10 text-green-400 text-[10px] uppercase tracking-wider font-geist">Мощность</div>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
<span className="" data-suffix="k" data-target="25">25k</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Единиц в месяц</h3>
</div>
</div>

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20 font-geist">02</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="lucide:file-check"></iconify-icon>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-space-grotesk font-light">
<span data-suffix="%" data-target="100">100%</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Белый Импорт (ТР ТС)</h3>
</div>
</div>

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20 font-geist">03</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="lucide:truck"></iconify-icon>
</div>
<div className="">
<div className="text-3xl text-white mb-1 tracking-tighter font-space-grotesk font-light mt-2">
                             ЕАЭС
                        </div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Быстрая Логистика</h3>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-subtle overflow-hidden bg-black pt-32 pb-32 relative" id="advantages">
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-6xl mx-auto text-center leading-tight">
<h2 className="text-3xl md:text-5xl tracking-tight uppercase leading-[1.3] font-semibold text-white">
<span className="reveal-word font-space-grotesk font-light">Почему</span> <span className="reveal-word font-space-grotesk font-light">выбирают</span> <span className="reveal-word font-space-grotesk font-light">Gulum?</span>
<span className="reveal-word inline-flex align-middle bg-white/5 border border-subtle px-4 py-1 mx-1 text-white font-space-grotesk font-light">
<iconify-icon className="text-2xl mr-2 text-neutral-300" icon="lucide:shield-check"></iconify-icon> Белый Импорт
                    </span>
<span className="reveal-word font-space-grotesk font-light">без</span> <span className="reveal-word font-space-grotesk font-light">рисков.</span>
<span className="reveal-word text-black bg-white px-4 py-1 mx-1 font-space-grotesk font-light">Качество</span>
<span className="reveal-word font-space-grotesk font-light">на</span> <span className="reveal-word font-space-grotesk font-light">каждом</span> <span className="reveal-word font-space-grotesk font-light">этапе.</span>
<span className="reveal-word inline-flex align-middle border border-subtle text-white px-4 py-1 mx-1">
<iconify-icon className="text-2xl" icon="lucide:coins"></iconify-icon>
</span>
<span className="reveal-word font-space-grotesk font-light">Выгодная</span> <span className="reveal-word font-space-grotesk font-light">цена</span> <span className="reveal-word font-space-grotesk font-light">из Бишкека.</span>
</h2>
</div>
</div>
</section>

<section className="z-10 border-subtle bg-black border-b relative" id="services">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 lg:h-screen sticky top-0 flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-20 border-r border-subtle/0 lg:border-subtle">
<h2 className="text-5xl md:text-6xl uppercase mb-8 lg:mb-8 text-white tracking-tighter font-space-grotesk font-light">
                        Процесс<br/><span className="text-neutral-600">Работы</span>
</h2>

<div className="space-y-6 relative mb-12 hidden lg:block">

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="1">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div className="">
<h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">01 / Идея и Образцы</h3>
<p className="step-text text-sm text-neutral-500 font-geist">Разработка лекал и утверждение ткани.</p>
</div>
</div>

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="2">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div>
<h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">02 / Производство</h3>
<p className="step-text text-sm text-neutral-500 font-geist">Пошив партии на мощностях Gulum.</p>
</div>
</div>

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="3">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div>
<h3 className="text-xl uppercase tracking-widest text-white font-space-grotesk">03 / Доставка в РФ</h3>
<p className="step-text text-sm text-neutral-500 font-geist">Документы, сертификаты, логистика.</p>
</div>
</div>
</div>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm hidden lg:block">

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="1">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1598300056393-84d5293d941c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="lucide:ruler"></iconify-icon>
<div className="text-xs font-mono text-green-400 uppercase">Разработка Лекал</div>
</div>
</div>

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="2">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="lucide:factory"></iconify-icon>
<div className="text-xs font-mono text-blue-400 uppercase">Пошив Партии</div>
</div>
</div>

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="3">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="lucide:container"></iconify-icon>
<div className="text-xs font-mono text-purple-400 uppercase">Отправка в РФ</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2">

<div className="h-[20vh] hidden lg:block"></div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="1">
<span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">01</span>
<h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">Разработка и Утверждение</h3>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url('https://images.unsplash.com/photo-1598300056393-84d5293d941c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="lucide:ruler"></iconify-icon>
</div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8 font-geist">
                            Мы начинаем с детальной проработки ТЗ. Наши конструкторы создают идеальные лекала, а менеджеры помогают подобрать качественные ткани и фурнитуру на рынках Бишкека.
                        </p>
<ul className="space-y-4 font-geist text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> Консультация по ТЗ</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> Пошив эталонного образца</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> Подбор полотна</li>
</ul>
</div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="2">
<span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">02</span>
<h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">Производство Партии</h3>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url('https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="lucide:factory"></iconify-icon>
</div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8 font-geist">
                            Наше производство оснащено современным оборудованием Juki и Brother. Многоступенчатый контроль качества (ОТК) на каждом этапе гарантирует отсутствие брака.
                        </p>
<ul className="space-y-4 font-geist text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon> Автоматический раскрой</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon> Мощность до 25 000 ед./мес</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon> Брендирование и упаковка</li>
</ul>
</div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20" data-step="3">
<span className="text-6xl text-white/10 font-bold mb-6 font-space-grotesk">03</span>
<h3 className="text-3xl text-white mb-6 font-space-grotesk tracking-tight">Доставка и Документы</h3>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="lucide:container"></iconify-icon>
</div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8 font-geist">
                            Мы готовим полный пакет документов для легальной продажи в РФ: Декларации соответствия ТР ТС, маркировку Честный Знак. Доставка до Москвы за 5-7 дней.
                        </p>
<ul className="space-y-4 font-geist text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check-circle"></iconify-icon> Сертификаты ЕАЭС</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check-circle"></iconify-icon> Быстрая авто-доставка</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="lucide:check-circle"></iconify-icon> "Белый" импорт</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white pt-24 pb-12 border-t border-subtle relative z-10" id="portfolio">
<div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-subtle">
<div className="">
<h2 className="text-5xl md:text-7xl uppercase mb-2 text-white tracking-tighter font-space-grotesk font-light">Портфолио</h2>
<p className="text-xs uppercase tracking-widest text-neutral-500 font-geist">/ Наши работы / Второй слой</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-20 items-stretch">

<div className="flex flex-col gap-1 h-full">
<div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">ТРИКОТАЖ</div>
<img alt="T-Shirt" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Футболки</h3>
</div>
</div>
</div>

<div className="flex flex-col gap-1 h-full aspect-[9/16] md:aspect-auto">

<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">ВТОРОЙ СЛОЙ</div>
<img alt="Shirts" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Рубашки</h3>
</div>
</div>

<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">FASHION</div>
<img alt="Dresses" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Платья</h3>
</div>
</div>

<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">SPORT</div>
<img alt="Hoodie" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Худи &amp; Свитшоты</h3>
</div>
</div>
</div>

<div className="flex flex-col gap-1 h-full">
<div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5 font-geist">CASUAL</div>
<img alt="Jeans/Pants" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-white">Брюки и Шорты</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-subtle overflow-hidden z-10 border-t pt-24 pb-24 relative">
<div className="container mx-auto px-4 max-w-7xl mb-12">
<h2 className="text-3xl md:text-5xl uppercase text-center text-white tracking-tighter font-space-grotesk font-light">
                Нам доверяют <span className="text-neutral-600">Бренды</span>
</h2>
</div>

<div className="marquee-container w-full relative overflow-hidden py-10">
<div className="flex w-[200%] marquee-content hover:[animation-play-state:paused]">

<div className="flex w-1/2 justify-around gap-6 px-4">

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Gulum стали нашим ключевым партнером. Качество пошива отличное, а главное – никаких проблем с документами при ввозе в РФ."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-white font-bold">M</span>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Марина С.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">Основатель, Melon Fashion</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Искали фабрику в Бишкеке долго. Gulum удивили скоростью и прозрачностью. Партия в 5000 футболок отшита за 10 дней."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-white font-bold">W</span>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Алексей К.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">Закупщик, Wildberries Seller</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Отличные цены и качество. Работаем уже второй год, заказываем платья и рубашки. Всегда все в срок."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-white font-bold">L</span>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Елена В.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">Lime Store</div></div>
</div>
</div>
</div>

<div className="flex w-1/2 justify-around gap-6 px-4">

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Gulum стали нашим ключевым партнером. Качество пошива отличное, а главное – никаких проблем с документами при ввозе в РФ."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-white font-bold">M</span>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Марина С.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">Основатель, Melon Fashion</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Искали фабрику в Бишкеке долго. Gulum удивили скоростью и прозрачностью. Партия в 5000 футболок отшита за 10 дней."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-white font-bold">W</span>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Алексей К.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">Закупщик, Wildberries Seller</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300 font-geist">"Отличные цены и качество. Работаем уже второй год, заказываем платья и рубашки. Всегда все в срок."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-white font-bold">L</span>
</div>
<div><div className="text-xs text-white uppercase font-bold font-geist">Елена В.</div><div className="text-[10px] text-neutral-500 uppercase font-geist">Lime Store</div></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-3 mt-8">
<button className="w-2 h-2 bg-white rounded-full"></button>
<button className="w-2 h-2 bg-neutral-800 hover:bg-neutral-600 transition-colors rounded-full"></button>
<button className="w-2 h-2 bg-neutral-800 hover:bg-neutral-600 transition-colors rounded-full"></button>
</div>
</section>

<section className="border-subtle bg-center z-10 border-t pt-32 pb-32 relative">
<div className="container mx-auto px-4 text-center max-w-4xl">
<h2 className="md:text-8xl uppercase text-5xl font-light text-white tracking-tighter font-space-grotesk mix-blend-plus-lighter mb-8">
                Готовы к <span className="text-neutral-600">Сотрудничеству?</span>
</h2>
<p className="text-xl text-neutral-400 font-geist mix-blend-plus-lighter max-w-xl mr-auto mb-10 ml-auto">
                Запустите производство вашей коллекции в Бишкеке с гарантией качества и сроков.
            </p>
<div className="">
<a className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors font-geist" href="#contact">
                    Обсудить Проект
                </a>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-subtle bg-black" id="contact">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="">
<h3 className="text-3xl uppercase text-white mb-6 tracking-tighter font-space-grotesk font-light">Свяжитесь с нами</h3>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed font-geist">
                        Заполните форму, чтобы получить прайс-лист и консультацию технолога. Мы ответим в течение 24 часов.
                    </p>
<div className="space-y-4 font-geist-mono text-sm">
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="lucide:mail"></iconify-icon>
<span className="font-geist">gulum.opt@gmail.com</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="lucide:phone"></iconify-icon>
<span className="font-geist">+996 (558) 780-118</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="lucide:map-pin"></iconify-icon>
<span className="font-geist">Бишкек, Кыргызстан</span>
</div>
</div>
</div>

<div className="">
<form action="mailto:gulum.opt@gmail.com" className="space-y-8" enctype="text/plain" method="post">
<div className="group relative">
<input className="outline-none focus:border-white transition-colors peer placeholder-transparent text-white font-geist-mono bg-transparent w-full border-neutral-800 border-b pt-3 pb-3" id="name" name="name" required="" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="name">Имя</label>
</div>
<div className="group relative">
<input className="outline-none focus:border-white transition-colors peer placeholder-transparent text-white font-geist-mono bg-transparent w-full border-neutral-800 border-b pt-3 pb-3" id="company" name="company" required="" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="company">Название Бренда</label>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-geist-mono peer placeholder-transparent" id="email" name="email" required="" type="email"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="email">Email</label>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="group relative">
<select className="w-full bg-transparent border-b border-neutral-800 py-3 text-neutral-400 outline-none focus:border-white transition-colors font-geist text-sm" name="type">
<option disabled="" selected="" value="">Тип Продукции</option>
<option className="bg-black" value="tshirts">Футболки</option>
<option className="bg-black" value="shirts">Рубашки</option>
<option className="bg-black" value="dresses">Платья</option>
<option className="bg-black" value="hoodies">Худи/Свитшоты</option>
<option className="bg-black" value="other">Другое</option>
</select>
</div>
<div className="group relative">
<select className="w-full bg-transparent border-b border-neutral-800 py-3 text-neutral-400 outline-none focus:border-white transition-colors font-geist text-sm" name="volume">
<option disabled="" selected="" value="">Объем Заказа</option>
<option className="bg-black" value="under1000">До 1000 шт.</option>
<option className="bg-black" value="1000-5000">1000 - 5000 шт.</option>
<option className="bg-black" value="5000plus">Более 5000 шт.</option>
</select>
</div>
</div>
<div className="group relative">
<textarea className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors font-geist-mono peer placeholder-transparent resize-none" id="message" name="message" rows="3"></textarea>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-geist" htmlFor="message">Детали Заказа</label>
</div>
<button className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold hover:text-neutral-300 transition-colors pt-4" type="submit">
<span className="font-geist">Отправить Заявку</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-black pt-12 pb-8 relative z-10">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="text-2xl text-white uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-neutral-500"></div>
                    GULUM
                </div>
<div className="flex gap-8 text-xs font-geist-mono text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors font-geist" href="#about">О нас</a>
<a className="hover:text-white transition-colors font-geist" href="#services">Услуги</a>
<a className="hover:text-white transition-colors font-geist" href="#faq">FAQ</a>
</div>
</div>
<div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
<p className="font-geist">© 2024 Швейная Фабрика Gulum. Бишкек, Кыргызстан.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors flex items-center gap-2 font-geist" href="https://wa.me/996558780118"><iconify-icon className="text-sm" icon="lucide:message-circle"></iconify-icon> WhatsApp</a>
<a className="hover:text-white transition-colors flex items-center gap-2 font-geist" href="#"><iconify-icon className="text-sm" icon="lucide:instagram"></iconify-icon> Instagram</a>
<a className="hover:text-white transition-colors flex items-center gap-2 font-geist" href="#"><iconify-icon className="text-sm" icon="lucide:send"></iconify-icon> Telegram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
