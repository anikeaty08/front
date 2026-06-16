import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const track = document.getElementById('slider-track');
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        const counter = document.getElementById('counter');
        const progressBar = document.getElementById('progress');
        
        const totalSlides = 24;
        let currentSlide = 0;

        function updateSlider() {
            // Перемещение
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Счетчик
            counter.innerText = currentSlide + 1;
            
            // Прогресс бар
            progressBar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;

            // Состояние кнопок
            btnPrev.disabled = currentSlide === 0;
            btnNext.disabled = currentSlide === totalSlides - 1;
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        }

        btnNext.addEventListener('click', nextSlide);
        btnPrev.addEventListener('click', prevSlide);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });

        // Init
        updateSlider();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none mix-blend-difference text-white">
<div className="text-sm font-medium tracking-tighter uppercase">NPRO / 2025</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Слайд</span>
<div className="text-sm font-medium tracking-tight bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
<span id="counter">1</span> <span className="text-neutral-500">/ 24</span>
</div>
</div>
</header>

<div className="absolute top-0 left-0 w-full h-px bg-neutral-900 z-50">
<div className="h-full bg-white progress-bar w-0" id="progress"></div>
</div>

<main className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" id="slider-track">

<section className="min-w-full h-full relative flex items-center justify-center p-12 shrink-0">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 object-center mix-blend-screen" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/80"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
<div className="px-3 py-1 text-xs font-medium tracking-tight text-neutral-400 border border-neutral-800 rounded-full mb-8 glass-panel uppercase">
                    Мастер-класс
                </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-6 text-gradient">
                    Нейросети с нуля до PRO
                </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light tracking-tight max-w-2xl">
                    Инструменты, которые меняют правила игры. От идеи до реализации за минуты, а не недели.
                </p>
<div className="mt-12 text-sm text-neutral-500 font-medium tracking-tight flex gap-4 items-center">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> 14.03.2025
                </div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0 bg-[#050505]">
<div className="max-w-7xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-12 text-center text-neutral-200">Трансформация процесса</h2>
<div className="grid grid-cols-2 gap-8 items-stretch">

<div className="glass-panel p-10 rounded-2xl flex flex-col opacity-70">
<div className="flex items-center gap-3 mb-8 text-neutral-500">
<iconify-icon className="text-2xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium tracking-tight">2021: Одно звено в цепи</span>
</div>
<ul className="space-y-6 text-sm text-neutral-400 font-light grow">
<li className="flex gap-4"><iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>Десятки идей игр и фильмов без возможности реализации.</li>
<li className="flex gap-4"><iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>Недели на ресерч, чтение и подготовку презентаций.</li>
<li className="flex gap-4"><iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>Текст без визуала не вызывает интереса у заказчиков.</li>
<li className="flex gap-4"><iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>Выгорание от нехватки наполнения идей контентом.</li>
</ul>
</div>

<div className="glass-panel p-10 rounded-2xl flex flex-col relative overflow-hidden border-neutral-700/50">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-3 mb-8 text-white relative z-10">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium tracking-tight">Сейчас: Мультифункциональная фабрика</span>
</div>
<ul className="space-y-6 text-sm text-neutral-200 font-light grow relative z-10">
<li className="flex gap-4 items-start"><iconify-icon className="text-xl shrink-0 text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Две выставки в Сколково с Нейроартом, аукционы.</li>
<li className="flex gap-4 items-start"><iconify-icon className="text-xl shrink-0 text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Короткометражка — призер иностранного кинофестиваля.</li>
<li className="flex gap-4 items-start"><iconify-icon className="text-xl shrink-0 text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Сокращение работы над проектами с двух недель до пары дней.</li>
<li className="flex gap-4 items-start"><iconify-icon className="text-xl shrink-0 text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Визуализация всего. Идеи за мной, воплощение — за ИИ.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-4xl w-full">
<h2 className="text-4xl font-medium tracking-tighter mb-16 text-gradient">Маршрут на сегодня</h2>
<div className="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-neutral-800">
<div className="flex gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">01</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-medium tracking-tight mb-2">Теория: Под капотом технологий</h3>
<p className="text-sm text-neutral-500 font-light">Эволюция ИИ за 5 лет → как это работает → обзор актуальных инструментов.</p>
</div>
</div>
<div className="flex gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">02</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-medium tracking-tight mb-2">Практика: Action</h3>
<p className="text-sm text-neutral-500 font-light">Создаём портфолио нейрохудожника с нуля в реальном времени.</p>
</div>
</div>
<div className="flex gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pt-3">
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Бонус</h3>
<p className="text-sm text-neutral-400 font-light">Месяц доступа к Gemini 3.1 Pro каждому участнику.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex flex-col p-16 shrink-0 justify-center">
<div className="max-w-7xl w-full mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-4xl font-medium tracking-tighter">Генерация изображений</h2>
<span className="text-sm font-medium tracking-widest text-neutral-600 uppercase">2020 → 2025</span>
</div>
<div className="grid grid-cols-2 gap-12">
<div className="space-y-4">
<div className="aspect-video bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center overflow-hidden group">
<span className="text-xs text-neutral-600 font-mono group-hover:opacity-0 transition-opacity">/папка "эволюция картинок"/2020.jpg</span>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1">Эра сюрреализма</h3>
<p className="text-xs text-neutral-500 font-light">Midjourney beta, DALL-E 1. Неточные формы, абстракции, отсутствие контроля.</p>
</div>
</div>
<div className="space-y-4">
<div className="aspect-video bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center overflow-hidden group relative">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5"></div>
<span className="text-xs text-neutral-600 font-mono group-hover:opacity-0 transition-opacity">/папка "эволюция картинок"/2025.jpg</span>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-1 text-white">Фотореализм и контроль</h3>
<p className="text-xs text-neutral-400 font-light">Flux, Nano Banana 2. Консистенция персонажей, идеальная типографика, управление светом.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-5xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-16 text-center">От автодополнения до размышлений</h2>
<div className="grid grid-cols-4 gap-4">
<div className="glass-panel p-6 rounded-xl flex flex-col opacity-50">
<span className="text-xs font-mono text-neutral-500 mb-4 block">2019</span>
<h4 className="text-base font-medium tracking-tight mb-2">GPT-2</h4>
<p className="text-xs text-neutral-400 font-light">Связный абзац текста. Тогда это казалось магией.</p>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col opacity-70">
<span className="text-xs font-mono text-neutral-500 mb-4 block">2020</span>
<h4 className="text-base font-medium tracking-tight mb-2">GPT-3</h4>
<p className="text-xs text-neutral-400 font-light">Написание простых статей. Паника среди копирайтеров.</p>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col opacity-90">
<span className="text-xs font-mono text-neutral-500 mb-4 block">2022</span>
<h4 className="text-base font-medium tracking-tight mb-2">ChatGPT</h4>
<p className="text-xs text-neutral-400 font-light">1 млн пользователей за 5 дней. ИИ пошел в массы.</p>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col border-neutral-600 bg-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full"></div>
<span className="text-xs font-mono text-white mb-4 block relative z-10">2024–25</span>
<h4 className="text-base font-medium tracking-tight mb-2 text-white relative z-10">GPT-4 / Claude</h4>
<p className="text-xs text-neutral-300 font-light relative z-10">Агентность, написание кода, глубокий ресерч, логика.</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-4xl w-full text-center">
<h2 className="text-4xl font-medium tracking-tighter mb-4">Видео и Музыка</h2>
<p className="text-neutral-500 font-light text-sm mb-16">Последний рубеж пал.</p>
<div className="flex flex-col gap-8 text-left">
<div className="glass-panel p-8 rounded-2xl border-l-2 border-l-white">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xl font-medium tracking-tight">Видео</h3>
<span className="text-xs font-medium bg-neutral-800 px-3 py-1 rounded-full">Runway → Sora → Kling</span>
</div>
<p className="text-sm text-neutral-400 font-light">От 4 секунд искаженного "мусора" до физически корректных 2-минутных кинематографичных сцен.</p>
</div>
<div className="glass-panel p-8 rounded-2xl border-l-2 border-l-neutral-600">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xl font-medium tracking-tight">Музыка</h3>
<span className="text-xs font-medium bg-neutral-800 px-3 py-1 rounded-full">Jukebox → Suno → Udio</span>
</div>
<p className="text-sm text-neutral-400 font-light">От невнятного шума до полноценных студийных треков с вокалом в любом жанре за 30 секунд.</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0 bg-[#050505]">
<div className="max-w-3xl w-full text-center">
<iconify-icon className="text-6xl text-neutral-800 mb-8" icon="solar:globus-linear" strokeWidth="1"></iconify-icon>
<h2 className="text-5xl font-medium tracking-tighter mb-6 text-white leading-tight">Мы живём в переломный момент.</h2>
<p className="text-xl text-neutral-500 font-light tracking-tight mb-12">5 лет назад этого не существовало.</p>
<div className="p-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent max-w-md mx-auto">
<div className="bg-[#050505] py-4 px-6 text-sm text-neutral-300 font-light">
                        Те, кто осваивает инструменты сейчас, получают фундаментальное преимущество на годы вперёд.
                    </div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-5xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-16">Почему прорыв случился именно сейчас?</h2>
<div className="grid grid-cols-3 gap-6 mb-12">
<div className="glass-panel p-8 rounded-xl text-center">
<iconify-icon className="text-3xl mb-4 text-neutral-400" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight mb-2">Данные</h4>
<p className="text-xs text-neutral-500 font-light">Оцифрован практически весь интернет (тексты, картинки).</p>
</div>
<div className="glass-panel p-8 rounded-xl text-center">
<iconify-icon className="text-3xl mb-4 text-neutral-400" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight mb-2">Вычисления</h4>
<p className="text-xs text-neutral-500 font-light">Доступность мощных GPU кластеров для обучения.</p>
</div>
<div className="glass-panel p-8 rounded-xl text-center">
<iconify-icon className="text-3xl mb-4 text-neutral-400" icon="solar:share-circle-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight mb-2">Архитектура</h4>
<p className="text-xs text-neutral-500 font-light">Появление Трансформеров в 2017 году (Attention is All You Need).</p>
</div>
</div>
<div className="text-center text-sm text-neutral-400 font-light">
<span className="text-neutral-200 font-medium">Аналогия:</span> как ребёнок учится говорить, только на триллионах примеров.
                </div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-4xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-12">Один принцип, развёрнутый наоборот</h2>
<div className="space-y-4">
<div className="glass-panel p-6 rounded-xl flex items-center gap-6 opacity-60">
<div className="text-xl font-mono text-neutral-600">01</div>
<div>
<h4 className="text-base font-medium tracking-tight">Классификация</h4>
<p className="text-xs text-neutral-400 font-light">ИИ научился понимать, что на фото кот.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex items-center gap-6 opacity-80">
<div className="text-xl font-mono text-neutral-600">02</div>
<div>
<h4 className="text-base font-medium tracking-tight">Генерация</h4>
<p className="text-xs text-neutral-400 font-light">Процесс развернули: по описанию кота ИИ создаёт шум и собирает из него пиксели.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border-neutral-700 bg-white/5 flex items-center gap-6">
<div className="text-xl font-mono text-white">03</div>
<div>
<h4 className="text-base font-medium tracking-tight text-white">Диалог</h4>
<p className="text-xs text-neutral-300 font-light">Добавили человеческий контекст — появились умные чат-боты.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0 bg-[#0a0a0a]">
<div className="max-w-3xl w-full text-center">
<h2 className="text-4xl font-medium tracking-tighter mb-8 leading-tight">Диалог — это интерфейс,<br/>который все уже знают.</h2>
<div className="flex justify-center gap-8 text-left text-sm mt-12">
<div className="w-1/2 p-6 border border-neutral-800 rounded-xl bg-[#050505]">
<div className="text-neutral-500 mb-2 font-medium tracking-tight">Раньше</div>
<p className="text-neutral-400 font-light">Нужно было уметь программировать, учить синтаксис или знать специальные команды в консоли.</p>
</div>
<div className="w-1/2 p-6 border border-neutral-700 rounded-xl bg-neutral-900/50">
<div className="text-white mb-2 font-medium tracking-tight">Сейчас</div>
<p className="text-neutral-300 font-light">Просто говори что хочешь на своём родном языке. Главный взрыв доступности.</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex flex-col p-16 shrink-0 justify-center">
<h2 className="text-3xl font-medium tracking-tighter mb-10 text-center">Где ИИ работает на вас</h2>
<div className="max-w-6xl w-full mx-auto grid grid-cols-3 gap-4">
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Текст и Анализ</h4>
<p className="text-xs text-neutral-500 font-light">Копирайтинг, брейншторм, саммаризация, поиск.</p>
</div>
<div className="glass-panel p-5 rounded-lg border-neutral-700/50 bg-white/5">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Изображения и Дизайн</h4>
<p className="text-xs text-neutral-400 font-light">Генерация, inpainting, upscale.</p>
</div>
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Видео и Монтаж</h4>
<p className="text-xs text-neutral-500 font-light">Генерация из текста/картинки, умный монтаж.</p>
</div>
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Код и Сайты</h4>
<p className="text-xs text-neutral-500 font-light">Прототипы без кода, рефакторинг, агенты.</p>
</div>
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Продвинутое Видео</h4>
<p className="text-xs text-neutral-500 font-light">Ротоскопинг, трекинг, замена объектов в динамике.</p>
</div>
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Аудио и Голос</h4>
<p className="text-xs text-neutral-500 font-light">Генерация музыки, клонирование голоса (TTS).</p>
</div>
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">3D и Пространства</h4>
<p className="text-xs text-neutral-500 font-light">Генерация 3D-моделей, NeRF, Гауссово сплэттинг.</p>
</div>
<div className="glass-panel p-5 rounded-lg border-neutral-700/50 bg-white/5">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Hardcore Tech</h4>
<p className="text-xs text-neutral-400 font-light">Латентные пространства, GAN-сети, кастомные пайплайны.</p>
</div>
<div className="glass-panel p-5 rounded-lg">
<h4 className="text-sm font-medium tracking-tight mb-1 text-white">Агентные системы</h4>
<p className="text-xs text-neutral-500 font-light">ИИ, который сам планирует шаги и кликает в браузере.</p>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-3xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-12">Уровень зрелости (Production Ready)</h2>
<div className="space-y-3 text-sm">
<div className="flex items-center gap-4 p-4 glass-panel rounded-lg">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium w-24">Картинки</span>
<span className="text-neutral-400 font-light">Зрелый инструмент, высокое качество, стабильность персонажей.</span>
</div>
<div className="flex items-center gap-4 p-4 glass-panel rounded-lg">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium w-24">Текст</span>
<span className="text-neutral-400 font-light">Идеально для черновиков, брейнштормов, перевода и кода.</span>
</div>
<div className="flex items-center gap-4 p-4 glass-panel rounded-lg">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium w-24">Сайты</span>
<span className="text-neutral-400 font-light">Рабочий прототип и деплой за час словами.</span>
</div>
<div className="flex items-center gap-4 p-4 glass-panel rounded-lg opacity-70">
<iconify-icon className="text-yellow-500 text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium w-24">Видео</span>
<span className="text-neutral-400 font-light">Впечатляет, но требует времени на генерацию и отбор удачных дублей.</span>
</div>
<div className="flex items-center gap-4 p-4 glass-panel rounded-lg opacity-60">
<iconify-icon className="text-yellow-500 text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium w-24">Музыка</span>
<span className="text-neutral-400 font-light">Круто для демо и экспериментов, сложно для точного сведения продукта.</span>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0 bg-[#050505]">
<div className="max-w-5xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-4 text-center">Актуальные генераторы изображений</h2>
<p className="text-sm text-neutral-500 font-light text-center mb-12">Midjourney теряет монополию.</p>
<div className="flex flex-wrap justify-center gap-4 mb-10">
<div className="px-6 py-4 glass-panel rounded-xl border-white/20 bg-white/5 text-center w-48">
<h4 className="font-medium tracking-tight text-white mb-1">Nano Banana 2</h4>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Топ контроль</p>
</div>
<div className="px-6 py-4 glass-panel rounded-xl border-white/20 bg-white/5 text-center w-48">
<h4 className="font-medium tracking-tight text-white mb-1">Flux</h4>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Топ реализм</p>
</div>
<div className="px-6 py-4 glass-panel rounded-xl text-center w-48 opacity-80">
<h4 className="font-medium tracking-tight mb-1">Grok</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">Без цензуры</p>
</div>
<div className="px-6 py-4 glass-panel rounded-xl text-center w-48 opacity-80">
<h4 className="font-medium tracking-tight mb-1">Gemini</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">Экосистема</p>
</div>
<div className="px-6 py-4 glass-panel rounded-xl text-center w-48 opacity-80">
<h4 className="font-medium tracking-tight mb-1">RunDiffusion</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">Облачный SD</p>
</div>
<div className="px-6 py-4 border border-neutral-800 rounded-xl text-center w-48 opacity-40 bg-transparent">
<h4 className="font-medium tracking-tight mb-1 line-through decoration-neutral-600">Midjourney</h4>
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">Устаревает</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-6xl w-full">
<h2 className="text-3xl font-medium tracking-tighter mb-10 text-center">Эволюция промптинга</h2>
<div className="grid grid-cols-2 gap-8">

<div className="bg-[#0A0A0A] border border-neutral-800 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-neutral-800"></div>
<div className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-widest">2022: Инженерия и веса</div>
<p className="text-sm font-mono text-neutral-400 leading-relaxed bg-[#111] p-4 rounded border border-neutral-800/50">
                            (masterpiece, best quality:1.2), 1girl, cyberpunk city, neon lights, rain, (8k resolution:1.1), highly detailed, sharp focus, trending on artstation, unreal engine 5 render, volumetric lighting
                        </p>
<ul className="mt-4 space-y-2 text-xs text-neutral-500 font-light">
<li>— Попытка "взломать" алгоритм ключами.</li>
<li>— Использование весов (х:1.2) для акцентов.</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-neutral-600 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
<div className="text-xs font-mono text-white mb-4 uppercase tracking-widest">Сейчас: Естественный язык</div>
<p className="text-sm text-neutral-200 leading-relaxed bg-white/5 p-4 rounded border border-white/10 font-light">
                            "Кинематографичный кадр молодой девушки в неоновом киберпанк-городе. Дождь отражается на ее куртке. Снято на 35мм объектив с малой глубиной резкости."
                        </p>
<ul className="mt-4 space-y-2 text-xs text-neutral-300 font-light">
<li>— Описание ощущения и вайба.</li>
<li>— Модель сама додумывает технические детали.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex flex-col items-center justify-center p-12 shrink-0">
<h2 className="text-3xl font-medium tracking-tighter mb-12">Классификация LLM сегодня</h2>
<div className="max-w-6xl w-full grid grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl flex flex-col">
<div className="h-10 w-10 rounded bg-neutral-800 flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Диалоговые</h3>
<p className="text-xs text-neutral-400 font-light mb-4 grow">Быстрые ответы, генерация текста, брейншторм.</p>
<div className="text-xs font-mono text-neutral-500 bg-neutral-900/50 p-2 rounded">ChatGPT, Claude Sonnet</div>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col border-neutral-600 bg-white/5 relative">
<div className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Тренд</div>
<div className="h-10 w-10 rounded bg-neutral-700 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:global-search-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Deep Research</h3>
<p className="text-xs text-neutral-300 font-light mb-4 grow">Глубокий анализ интернета, чтение сотен страниц, синтез отчета.</p>
<div className="text-xs font-mono text-neutral-400 bg-black/50 p-2 rounded">Perplexity, OpenAI Pro</div>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col border-neutral-600 bg-white/5">
<div className="h-10 w-10 rounded bg-neutral-700 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:robot-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Агентные системы</h3>
<p className="text-xs text-neutral-300 font-light mb-4 grow">ИИ работает за вас: открывает браузер, собирает данные, заполняет таблицы.</p>
<div className="text-xs font-mono text-neutral-400 bg-black/50 p-2 rounded">Manus, AutoGPT</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex flex-col p-16 shrink-0 justify-center bg-[#050505]">
<h2 className="text-3xl font-medium tracking-tighter mb-10">Продвинутая логика промптов</h2>
<div className="max-w-5xl w-full mx-auto grid grid-cols-2 gap-x-12 gap-y-8">
<div>
<h4 className="text-sm font-medium tracking-tight mb-2 text-white">1. Zero-shot vs Few-shot</h4>
<p className="text-xs text-neutral-400 font-light mb-2">Не проси просто сделать. Дай примеры ожидаемого результата в самом промпте (Few-shot). Модель скопирует формат и стиль.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight mb-2 text-white">2. System Prompt (Роли)</h4>
<p className="text-xs text-neutral-400 font-light mb-2"><span className="font-mono bg-neutral-900 px-1 rounded">"Ты Senior Copywriter с 10-летним стажем..."</span> Задает рамки, лексикон и уровень экспертизы до начала задачи.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight mb-2 text-white">3. Chain of Thought (Цепочка мыслей)</h4>
<p className="text-xs text-neutral-400 font-light mb-2">Волшебная фраза: <span className="font-mono bg-neutral-900 px-1 rounded text-white">"Давай рассуждать пошагово"</span>. Заставляет LLM генерировать промежуточные токены, резко повышая логику ответа.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight mb-2 text-white">4. Ограничения и формат</h4>
<p className="text-xs text-neutral-400 font-light mb-2">Четко задай рамки: "Не используй слово Х", "Выведи строго в формате JSON", "Максимум 3 предложения".</p>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-6xl w-full">
<div className="flex justify-between items-end mb-10">
<h2 className="text-3xl font-medium tracking-tighter">Видеогенерация: Что работает</h2>
<span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1 rounded">img2vid &gt; txt2vid</span>
</div>
<div className="flex gap-6 mb-8">
<div className="flex-1 glass-panel p-6 rounded-xl border-t-2 border-t-white bg-white/5">
<h3 className="text-lg font-medium tracking-tight mb-1 text-white">Seedance 2.0</h3>
<p className="text-xs text-neutral-400 font-light">Новый фаворит. Отличная физика движений и консистентность.</p>
</div>
<div className="flex-1 glass-panel p-6 rounded-xl">
<h3 className="text-lg font-medium tracking-tight mb-1">Kling 1.6</h3>
<p className="text-xs text-neutral-500 font-light">Хорош для старта. Дают много бесплатных минут каждый день.</p>
</div>
<div className="flex-1 glass-panel p-6 rounded-xl">
<h3 className="text-lg font-medium tracking-tight mb-1">Runway Gen-3</h3>
<p className="text-xs text-neutral-500 font-light">Лучший контроль движения камеры и таймингов.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl text-sm font-light text-neutral-300 flex justify-between items-center">
<div>
<span className="font-medium text-white block mb-1">Экономика: Токены vs Подписка</span>
<span className="text-xs text-neutral-500">Видео требует много ресурсов. Большинство сервисов продают кредиты/токены за генерацию, а не безлимит.</span>
</div>
<div className="text-right">
<span className="font-medium text-white block mb-1">Лайфхак для монтажа</span>
<span className="text-xs text-neutral-500">Генерируйте фото в Flux → загружайте в видеосеть как первый кадр.</span>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex flex-col items-center justify-center p-12 shrink-0 bg-[#050505]">
<h2 className="text-4xl font-medium tracking-tighter mb-4 text-center">Код без умения кодить</h2>
<p className="text-sm text-neutral-500 font-light mb-16">Пишешь промпт → получаешь готовое приложение.</p>
<div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
<div className="border border-neutral-800 bg-[#0a0a0a] p-6 rounded-xl text-center hover:border-neutral-500 transition-colors">
<h4 className="font-medium tracking-tight text-white mb-2">Lovable</h4>
<p className="text-[10px] text-neutral-500 font-light leading-tight">Генерация React-приложений с отличным дизайном.</p>
</div>
<div className="border border-neutral-800 bg-[#0a0a0a] p-6 rounded-xl text-center hover:border-neutral-500 transition-colors">
<h4 className="font-medium tracking-tight text-white mb-2">v0.dev</h4>
<p className="text-[10px] text-neutral-500 font-light leading-tight">Сайты от создателей Next.js (Vercel). Точный UI.</p>
</div>
<div className="border border-neutral-800 bg-[#0a0a0a] p-6 rounded-xl text-center hover:border-neutral-500 transition-colors">
<h4 className="font-medium tracking-tight text-white mb-2">Bolt.new</h4>
<p className="text-[10px] text-neutral-500 font-light leading-tight">Полноценный full-stack в браузере за пару минут.</p>
</div>
<div className="border border-neutral-800 bg-[#0a0a0a] p-6 rounded-xl text-center hover:border-neutral-500 transition-colors">
<h4 className="font-medium tracking-tight text-white mb-2">Replit</h4>
<p className="text-[10px] text-neutral-500 font-light leading-tight">Агент, который сам пишет, дебажит и деплоит код.</p>
</div>
<div className="border border-neutral-800 bg-[#0a0a0a] p-6 rounded-xl text-center hover:border-neutral-500 transition-colors col-start-2">
<h4 className="font-medium tracking-tight text-white mb-2">Cursor</h4>
<p className="text-[10px] text-neutral-500 font-light leading-tight">IDE на базе ИИ. Будущее программирования.</p>
</div>
<div className="border border-neutral-800 bg-[#0a0a0a] p-6 rounded-xl text-center hover:border-neutral-500 transition-colors">
<h4 className="font-medium tracking-tight text-white mb-2">Claude Code / Base44</h4>
<p className="text-[10px] text-neutral-500 font-light leading-tight">Агенты в терминале, работающие с вашей файловой системой.</p>
</div>
</div>
</section>

<section className="min-w-full h-full flex flex-col items-center justify-center p-12 shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-50 flex items-center justify-center pointer-events-none">
<div className="w-[800px] h-[800px] border border-white/5 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 text-center">
<div className="text-xs font-mono text-neutral-500 mb-6 tracking-widest uppercase">Live Action</div>
<h2 className="text-6xl font-medium tracking-tighter mb-8 text-white">Время собирать.</h2>
<p className="text-lg text-neutral-400 font-light">Создаём портфолио нейрохудожника прямо сейчас.</p>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-4xl w-full">
<span className="text-xs text-neutral-500 font-mono block mb-2">Шаг 1 из 3</span>
<h2 className="text-3xl font-medium tracking-tighter mb-8">Позиционирование (Смысл)</h2>
<div className="glass-panel p-8 rounded-xl border-l-2 border-l-white">
<p className="text-sm text-neutral-300 font-light mb-6">Используем Claude или Gemini для формулировки.</p>
<div className="bg-black/50 p-4 rounded border border-neutral-800 font-mono text-xs text-neutral-400 mb-4">
<span className="text-blue-400">Промпт:</span> "Я занимаюсь генерацией ИИ-арта (киберпанк, неон) и делаю короткие атмосферные видео. Помоги сформулировать емкое позиционирование для лендинга в 1-2 предложения, чтобы это звучало дорого и технологично."
                    </div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0 bg-[#050505]">
<div className="max-w-4xl w-full">
<span className="text-xs text-neutral-500 font-mono block mb-2">Шаг 2 из 3</span>
<h2 className="text-3xl font-medium tracking-tighter mb-8">Визуал и Тексты (Упаковка)</h2>
<div className="grid grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-xl">
<h4 className="font-medium text-white mb-2">Визуал</h4>
<p className="text-xs text-neutral-400 font-light mb-4">Генерируем логотип (минимализм) и фоновый баннер-абстракцию во Flux или Ideogram.</p>
</div>
<div className="glass-panel p-6 rounded-xl">
<h4 className="font-medium text-white mb-2">Тексты</h4>
<p className="text-xs text-neutral-400 font-light mb-4">Просим LLM написать Bio и описания для трех несуществующих (пока) проектов в едином стиле.</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0">
<div className="max-w-4xl w-full">
<span className="text-xs text-neutral-500 font-mono block mb-2">Шаг 3 из 3</span>
<h2 className="text-3xl font-medium tracking-tighter mb-8">Сайт и Деплой (Реализация)</h2>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center font-mono text-xs border border-neutral-700">1</div>
<p>Заходим на <span className="text-white font-medium">Lovable</span> или <span className="text-white font-medium">Bolt.new</span>.</p>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center font-mono text-xs border border-neutral-700">2</div>
<p>Пишем: "Сделай темный минималистичный сайт-портфолио. Слева текст обо мне, справа грид из картинок".</p>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center font-mono text-xs border border-neutral-700">3</div>
<p>Вставляем сгенерированные тексты и ссылки на картинки.</p>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-mono text-xs">4</div>
<p className="text-white">Нажимаем Deploy. Сайт в сети.</p>
</div>
</div>
</div>
</section>

<section className="min-w-full h-full flex items-center justify-center p-12 shrink-0 bg-[#050505]">
<div className="max-w-2xl w-full text-center">
<div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center mb-8">
<iconify-icon className="text-2xl text-black" icon="solar:star-fall-linear"></iconify-icon>
</div>
<h2 className="text-4xl font-medium tracking-tighter mb-4 text-white">Ваш Gemini 3.1 Pro</h2>
<p className="text-neutral-400 font-light mb-8">Месяц продвинутой аналитики, контекста на 2 млн токенов и интеграции с кодом. Бесплатно прямо сейчас.</p>
<div className="glass-panel p-4 rounded-lg text-xs font-mono text-neutral-300 border border-white/20 inline-block">
                    [Инструкция по активации выдается лично]
                </div>
</div>
</section>

<section className="min-w-full h-full flex flex-col items-center justify-center p-12 shrink-0">
<h2 className="text-6xl font-medium tracking-tighter mb-4 text-gradient">Вопросы</h2>
<p className="text-sm text-neutral-500 font-light tracking-widest uppercase mt-8">Спасибо.</p>
</section>
</main>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center text-white backdrop-blur-md disabled:opacity-20 disabled:cursor-not-allowed" id="btn-prev">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors flex items-center justify-center backdrop-blur-md disabled:opacity-20 disabled:cursor-not-allowed" id="btn-next">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>


    </>
  );
}
