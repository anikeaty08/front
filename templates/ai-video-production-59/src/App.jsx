import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 }); // More forgiving threshold
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});
})();



document.addEventListener("DOMContentLoaded", () => {
// 1. Counters
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
startCounters(entry.target);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".counter-trigger").forEach((el) => observer.observe(el));
function startCounters(container) {
container.querySelectorAll('[data-target]').forEach(counter => {
const target = parseFloat(counter.getAttribute('data-target'));
const suffix = counter.getAttribute('data-suffix') || '';
const prefix = counter.getAttribute('data-prefix') || '';
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
// 2. Text Reveal
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
// 3. Workflow Steps
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
      

<div className="fixed top-0 w-full h-screen -z-10">
<div className="absolute inset-0 bg-black"></div>

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>

<div className="opacity-[0.03] absolute inset-0 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
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
<div className="border-subtle flex bg-black/90 w-full max-w-4xl border pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center justify-between">
<a className="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all text-white" href="#">044.STUDIO</a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-semibold" href="#process">Процесс</a>
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-semibold" href="#results">Кейсы</a>
</div>
<div className="px-6 text-sm text-white uppercase flex items-center gap-2 tracking-tight font-bold">
<div className="w-1.5 h-1.5 bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                AI PRODUCTION
            </div>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-white px-4 py-2 text-xs tracking-widest uppercase transition-colors text-neutral-500 font-semibold" href="#contact">Контакты</a>
</div>
<a className="group relative bg-white text-black px-6 py-2 text-xs font-bold tracking-widest uppercase transition-transform overflow-hidden" href="#contact">
<span className="relative z-10">Обсудить</span>
<div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-neutral-200"></div>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center mb-24 relative space-y-0 items-center justify-center">

<div className="absolute -left-4 md:left-10 top-0 flex flex-col gap-2 opacity-30 hidden lg:flex [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Kyiv • 044</span>
<div className="w-px h-12 bg-gradient-to-b to-transparent from-neutral-500"></div>
</div>
<div className="flex flex-col z-10 w-full items-center justify-center max-w-5xl">
<h1 className="uppercase leading-[0.9] flex flex-wrap justify-center gap-x-3 md:text-8xl md:gap-x-6 text-4xl font-semibold text-white tracking-tighter mt-8 mb-4">
<span className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll font-light">Создаем</span>
<span className="text-gradient [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-bold">Креативный</span>
<span className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll font-light">AI-Видеоконтент</span>
<span className="text-neutral-500 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll font-light">Для Брендов</span>
</h1>
</div>
<div className="flex flex-col md:flex-row md:mt-8 md:mb-12 z-10 w-full mt-8 mb-8 gap-x-6 gap-y-6 items-center justify-center">

<div className="[animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll group relative">
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-[#0a0a0a] transition-colors md:h-14 bg-[#080808] h-12 z-10 border rounded-full mt-[1px] mr-[1px] mb-[1px] ml-[1px] pr-6 pl-3 relative gap-x-3 gap-y-4 items-center">
<div className="md:w-8 md:h-8 overflow-hidden flex border-subtle text-white bg-neutral-900 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg)] bg-cover bg-center border rounded-full relative items-center justify-center">
<iconify-icon className="text-sm text-white" icon="solar:videocamera-record-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-[9px] uppercase tracking-widest text-neutral-500">Статус</span>
<span className="text-xs md:text-sm leading-none text-white font-bold">Production Ready</span>
</div>
</div>
</div>
<p className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll md:text-lg text-xs text-neutral-400 text-left max-w-md">
                        ИИ видеопродакшн полного цикла. Мы объединяем классическую режиссуру и генеративные нейросети, чтобы создавать контент, который невозможно игнорировать.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto counter-trigger [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[200px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20">01</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:clock-circle-bold-duotone"></iconify-icon>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-light">
<span data-prefix="" data-suffix="x" data-target="3">3x</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500">Быстрее классического продакшна</h3>
</div>
</div>

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[200px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20">02</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:wallet-money-bold-duotone"></iconify-icon>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-light">
                            -<span className="" data-suffix="%" data-target="60">60%</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500">Оптимизация бюджета</h3>
</div>
</div>

<div className="bg-[#050505] border border-subtle p-8 flex flex-col justify-between min-h-[200px] relative group hover:border-white/10 transition-colors">
<div className="absolute top-4 right-4 text-xs text-white/20">03</div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
<div className="px-2 py-0.5 border border-purple-900/30 bg-purple-900/10 text-purple-400 text-[10px] uppercase tracking-wider">AI</div>
</div>
<div className="">
<div className="text-4xl text-white mb-1 tracking-tighter font-light">
<span data-suffix="%" data-target="100">100%</span>
</div>
<h3 className="text-xs uppercase tracking-widest text-neutral-500">Уникальный визуал</h3>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-subtle overflow-hidden bg-black pt-32 pb-32 relative" id="scroll-reveal-section">
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-6xl mx-auto text-center leading-tight">
<h2 className="text-3xl md:text-5xl tracking-tight uppercase leading-[1.3] font-semibold text-white">
<span className="reveal-word font-light">Мы</span> <span className="reveal-word font-light">не</span> <span className="reveal-word font-light">просто</span>
<span className="reveal-word inline-flex align-middle bg-white/5 border border-subtle px-4 py-1 mx-1 text-white font-light rounded-sm">
<iconify-icon className="text-2xl mr-2 text-neutral-300" icon="solar:code-square-bold-duotone"></iconify-icon> Платформа
                    </span>
<span className="reveal-word font-light">мы</span> <span className="reveal-word font-light">полноценная</span>
<span className="reveal-word text-black bg-white px-4 py-1 mx-1 font-bold rounded-sm">AI Студия</span>
<span className="reveal-word font-light">которая</span> <span className="reveal-word font-light">создает</span> <span className="reveal-word font-light">видео</span> <span className="reveal-word font-light">нового</span>
<span className="reveal-word inline-flex align-middle border border-subtle text-white px-4 py-1 mx-1 rounded-sm">
<iconify-icon className="text-2xl" icon="solar:stars-bold-duotone"></iconify-icon>
</span>
<span className="reveal-word font-light">поколения.</span>
</h2>
</div>
</div>
</section>

<section className="z-10 border-subtle bg-black border-b relative" id="process">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 lg:h-screen sticky top-0 flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-20 border-r border-subtle/0 lg:border-subtle">
<h2 className="text-5xl md:text-7xl uppercase mb-4 lg:mb-4 text-white tracking-tighter font-light">
                        Процесс<br/><span className="text-neutral-600 font-bold">Работы</span>
</h2>
<p className="text-neutral-500 mb-12 max-w-sm">От идеи до финального рендера. Мы берем на себя весь цикл производства, используя передовые нейросети.</p>

<div className="space-y-6 relative mb-12 hidden lg:block">

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="1">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div className="">
<h3 className="text-xl uppercase tracking-widest text-white font-bold">01 / Креатив &amp; Стратегия</h3>
<p className="step-text text-sm text-neutral-500">Разработка концепции и AI-сценария.</p>
</div>
</div>

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="2">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div>
<h3 className="text-xl uppercase tracking-widest text-white font-bold">02 / AI Генерация</h3>
<p className="step-text text-sm text-neutral-500">Midjourney, Runway, Pika, Sora.</p>
</div>
</div>

<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="3">
<div className="h-12 w-[2px] bg-neutral-800 relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-white"></div>
</div>
<div>
<h3 className="text-xl uppercase tracking-widest text-white font-bold">03 / Пост-продакшн</h3>
<p className="step-text text-sm text-neutral-500">Монтаж, цвет, звук, VFX.</p>
</div>
</div>
</div>

<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm hidden lg:block">

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="1">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:document-add-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-green-400 uppercase">Script Analysis...</div>
</div>
</div>

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="2">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ed85ea2-299f-4bb8-845a-a01c814cadc5_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:clapperboard-play-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-blue-400 uppercase">Generating Frames...</div>
</div>
</div>

<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-black" data-step="3">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_1600w.webp)]"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-white mb-2" icon="solar:monitor-play-bold-duotone"></iconify-icon>
<div className="text-xs font-mono text-purple-400 uppercase">Rendering Final...</div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2">
<div className="h-[20vh] hidden lg:block"></div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="1">
<span className="text-6xl text-white/10 font-bold mb-6">01</span>
<h3 className="text-3xl text-white mb-6 tracking-tight font-bold">Креатив и Стратегия</h3>
<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp)]"></div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8">
                            Мы изучаем ваш бренд, задачи и аудиторию. Наши креаторы пишут сценарии, специально адаптированные под возможности нейросетей, чтобы получить максимальное визуальное качество.
                        </p>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Анализ трендов</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Раскадровка (Storyboard)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Промпт-инжиниринг</li>
</ul>
</div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="2">
<span className="text-6xl text-white/10 font-bold mb-6">02</span>
<h3 className="text-3xl text-white mb-6 tracking-tight font-bold">AI Продакшн</h3>
<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ed85ea2-299f-4bb8-845a-a01c814cadc5_1600w.webp)]"></div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8">
                            Магия технологий. Мы используем приватные сервера и кастомные модели для генерации видео, изображений и голоса. То, что раньше требовало съемочной группы, мы создаем в коде.
                        </p>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Генерация Видео (Video-to-Video)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Клонирование голоса</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold-duotone"></iconify-icon> 3D и Анимация</li>
</ul>
</div>

<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20" data-step="3">
<span className="text-6xl text-white/10 font-bold mb-6">03</span>
<h3 className="text-3xl text-white mb-6 tracking-tight font-bold">Пост-продакшн</h3>
<div className="w-full aspect-video bg-neutral-900 border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_1600w.webp)]"></div>
</div>
</div>
<p className="text-neutral-400 leading-relaxed mb-8">
                            AI — это инструмент, а финальный лоск наводит человек. Профессиональный монтаж, цветокоррекция, саунд-дизайн и добавление титров для создания готового продукта.
                        </p>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Монтаж (Editing)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Upscale до 4K</li>
<li className="flex items-center gap-3"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold-duotone"></iconify-icon> Sound Design</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white pt-24 pb-12 border-t border-subtle relative z-10" id="results">
<div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-subtle">
<div className="">
<h2 className="text-5xl md:text-7xl uppercase mb-2 text-white tracking-tighter font-light">Наши<br/><span className="font-bold">Кейсы</span></h2>
<p className="text-xs uppercase tracking-widest text-neutral-500">/ Портфолио / Стили</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-20 items-stretch">

<div className="flex flex-col gap-1 h-full">
<div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5">REELS</div>
<img alt="Mobile" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71ae419e-354a-46fa-ba8f-bf256f56ef97_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-bold text-white">Fashion AI</h3>
</div>
</div>
</div>

<div className="flex flex-col gap-1 h-full aspect-[9/16] md:aspect-auto">
<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5">COMMERCIAL</div>
<img alt="Web" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cb81e0e-22cd-4d0a-ac80-d2e13d53b2fc_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-bold text-white">Product Demo</h3>
</div>
</div>
<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5">MUSIC</div>
<img alt="AI Process" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-bold text-white">Music Video</h3>
</div>
</div>
<div className="relative flex-1 group overflow-hidden border border-subtle bg-white/[0.02]">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5">SOCIAL</div>
<img alt="Data" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5045c0e4-a0e6-44f5-9ce2-f0aeec2f9b70_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-bold text-white">Viral Content</h3>
</div>
</div>
</div>

<div className="flex flex-col gap-1 h-full">
<div className="bg-white/[0.02] border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-white/50 border border-white/5 px-2 py-0.5">BRAND</div>
<img alt="App" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale-0 hover:grayscale duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33ae44b1-a1a2-4c73-9849-2614de959a79_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-bold text-white">Tech Promo</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-subtle overflow-hidden z-10 border-t pt-24 pb-24 relative">
<div className="container mx-auto px-4 max-w-7xl mb-12">
<h2 className="text-3xl md:text-5xl uppercase text-center text-white tracking-tighter font-light">
                Что говорят <span className="text-neutral-600 font-bold">Клиенты</span>
</h2>
</div>

<div className="marquee-container w-full relative overflow-hidden py-10">
<div className="flex w-[200%] marquee-content hover:[animation-play-state:paused]">

<div className="flex w-1/2 justify-around gap-6 px-4">

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300">"Студия 044 полностью переосмыслила наш подход к контенту. AI ролики собрали в 3 раза больше охватов, чем наши обычные съемки."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-xs text-white">M</span>
</div>
<div><div className="text-xs text-white uppercase font-bold">Marketing Director</div><div className="text-[10px] text-neutral-500 uppercase">Fintech Brand</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300">"Скорость поражает. То, на что уходило 2 недели, ребята сделали за 3 дня. Качество генераций на уровне кино."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-xs text-white">A</span>
</div>
<div><div className="text-xs text-white uppercase font-bold">Art Lead</div><div className="text-[10px] text-neutral-500 uppercase">Fashion Agency</div></div>
</div>
</div>

<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300">"Искали способ выделиться в TikTok. AI-аватары и сюрреалистичные фоны от 044.studio сделали наш бренд вирусным."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
<span className="text-xs text-white">C</span>
</div>
<div><div className="text-xs text-white uppercase font-bold">CEO</div><div className="text-[10px] text-neutral-500 uppercase">Tech Startup</div></div>
</div>
</div>
</div>

<div className="flex w-1/2 justify-around gap-6 px-4">
<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300">"Студия 044 полностью переосмыслила наш подход к контенту. AI ролики собрали в 3 раза больше охватов, чем наши обычные съемки."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full"><span className="text-xs text-white">M</span></div>
<div><div className="text-xs text-white uppercase font-bold">Marketing Director</div><div className="text-[10px] text-neutral-500 uppercase">Fintech Brand</div></div>
</div>
</div>
<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300">"Скорость поражает. То, на что уходило 2 недели, ребята сделали за 3 дня. Качество генераций на уровне кино."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full"><span className="text-xs text-white">A</span></div>
<div><div className="text-xs text-white uppercase font-bold">Art Lead</div><div className="text-[10px] text-neutral-500 uppercase">Fashion Agency</div></div>
</div>
</div>
<div className="w-[400px] border border-subtle p-8 bg-[#050505] shrink-0">
<p className="text-sm leading-relaxed mb-6 text-neutral-300">"Искали способ выделиться в TikTok. AI-аватары и сюрреалистичные фоны от 044.studio сделали наш бренд вирусным."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full"><span className="text-xs text-white">C</span></div>
<div><div className="text-xs text-white uppercase font-bold">CEO</div><div className="text-[10px] text-neutral-500 uppercase">Tech Startup</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-subtle bg-center z-10 border-t pt-32 pb-32 relative">
<div className="container mx-auto px-4 text-center max-w-4xl">
<h2 className="md:text-8xl uppercase text-5xl font-light text-white tracking-tighter mix-blend-plus-lighter mb-8">
                Готовы <span className="text-neutral-600 font-bold">Создавать?</span>
</h2>
<p className="text-xl text-neutral-400 mix-blend-plus-lighter max-w-xl mr-auto mb-10 ml-auto">
                Оставьте заявку на бесплатную консультацию и разбор вашего проекта.
            </p>
<div className="">
<a className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors" href="#contact">
                    Начать проект
                </a>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-subtle bg-black" id="contact">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="">
<h3 className="text-3xl uppercase text-white mb-6 tracking-tighter font-light">Свяжитесь с нами</h3>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                        Заполните форму, и мы свяжемся с вами для обсуждения деталей вашего видео-проекта. Мы работаем по всему миру.
                    </p>
<div className="space-y-4 text-sm">
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:letter-bold-duotone"></iconify-icon>
<span>hello@044.studio</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:map-point-bold-duotone"></iconify-icon>
<span>Kyiv, Ukraine / Worldwide</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-lg" icon="brandico:instagram-filled"></iconify-icon>
<span>@044.studio</span>
</div>
</div>
</div>

<div className="">
<form className="space-y-8">
<div className="group relative">
<input className="outline-none focus:border-white transition-colors peer placeholder-transparent text-white bg-transparent w-full border-neutral-800 border-b pt-3 pb-3" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white" htmlFor="name">Имя</label>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors peer placeholder-transparent" id="telegram" required="" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white" htmlFor="telegram">Telegram / Email</label>
</div>
<div className="group relative">
<textarea className="w-full bg-transparent border-b border-neutral-800 py-3 text-white outline-none focus:border-white transition-colors peer placeholder-transparent resize-none" id="message" rows="3"></textarea>
<label className="absolute left-0 -top-3 text-[10px] text-neutral-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-600 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white" htmlFor="message">О проекте</label>
</div>
<button className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold hover:text-neutral-300 transition-colors pt-4" type="submit">
<span>Отправить</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-black pt-12 pb-8 relative z-10">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="text-2xl text-white uppercase flex items-center gap-2 tracking-tighter font-light">
<div className="w-1.5 h-1.5 bg-neutral-500"></div>
                    044.STUDIO
                </div>
<div className="flex gap-8 text-xs text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Telegram</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
</div>
</div>
<div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-600">
<p>© 2024 044.Studio // AI Video Production</p>
<div className="mt-4 md:mt-0">
                    Made with Neural Networks
                </div>
</div>
</div>
</footer>

    </>
  );
}
