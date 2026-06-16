import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const carousel = document.getElementById('carousel');
        let currentSlide = 0;
        const totalSlides = 6;
        let touchStartX = 0;
        let touchEndX = 0;

        function updateDots() {
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.getElementById(`dot-${i}`);
                if (i === currentSlide) {
                    dot.classList.remove('bg-gray-300', 'w-2');
                    dot.classList.add('bg-black', 'w-6');
                } else {
                    dot.classList.remove('bg-black', 'w-6');
                    dot.classList.add('bg-gray-300', 'w-2');
                }
            }
        }

        function moveSlide(index) {
            if (index < 0) index = 0;
            if (index >= totalSlides) index = totalSlides - 1;
            
            currentSlide = index;
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            moveSlide(currentSlide + 1);
        }

        function prevSlide() {
            moveSlide(currentSlide - 1);
        }

        function resetSlides() {
            moveSlide(0);
        }

        // Swipe Navigation
        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});

        document.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});

        function handleSwipe() {
            const threshold = 50;
            if (touchEndX < touchStartX - threshold) {
                nextSlide();
            }
            if (touchEndX > touchStartX + threshold) {
                prevSlide();
            }
        }

        // Init
        updateDots();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-noise" style={{}}></div>

<div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-200/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gray-200/50 rounded-full blur-[100px] pointer-events-none"></div>

<main className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="carousel">

<section className="min-w-full w-full h-full flex flex-col justify-between p-6 overflow-y-auto no-scrollbar relative z-10">
<div className="flex-1 flex flex-col justify-center items-center text-center">

<div className="relative w-24 h-24 mb-10 flex items-center justify-center">
<div className="absolute inset-0 bg-white/50 rounded-full blur-xl animate-pulse"></div>
<div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 pulse-shadow">
<svg className="w-12 h-12 text-orange-500 transform scale-110" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 100 100">
<path className="ekg-path" d="M0 50 L20 50 L30 70 L45 20 L60 80 L75 50 L100 50"></path>
</svg>
</div>
</div>
<div className="inline-flex items-center bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-orange-100 shadow-sm mb-8">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Сервис личной эффективности</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    Верни ритм.<br/><span className="text-gray-400">Без надрыва и гонки.</span>
</h1>
<p className="text-base text-gray-500 max-w-xs mx-auto leading-relaxed">
                    Система мягкой подотчетности, которая поможет вырваться из дня сурка и начать двигаться к целям. Без сложных приложений и марафонов.
                </p>
</div>
<div className="mt-8 pb-4">
<button className="flex hover:bg-gray-800 transition-colors active:scale-95 duration-200 shadow-gray-200/50 text-lg font-medium text-white bg-black w-full h-14 rounded-2xl shadow-xl gap-x-2 gap-y-2 items-center justify-center" onclick="nextSlide()">
                    Начать путь
                    <svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="lucide:arrow-right" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<section className="min-w-full w-full h-full flex flex-col p-6 overflow-y-auto no-scrollbar relative z-10">
<div className="pt-8 pb-4">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">Знакомо ощущение,что жизнь идет мимо?</h2>
<p className="text-gray-500 text-sm mb-6">Обычно это начинается незаметно:</p>
<div className="space-y-3 mb-8">
<div className="glass-panel p-4 rounded-xl flex items-start gap-3">
<div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-red-50 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:x" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-snug">Откладываешь важные задачи, потому что «нет ресурса»</p>
</div>
<div className="glass-panel p-4 rounded-xl flex items-start gap-3">
<div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-red-50 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:x" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-snug">День занят мелочами, а главное так и не сделано</p>
</div>
<div className="glass-panel p-4 rounded-xl flex items-start gap-3">
<div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-red-50 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:x" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-snug">Вечером залипаешь в Reels/Shorts, чтобы заглушить тревогу</p>
</div>
<div className="glass-panel p-4 rounded-xl flex items-start gap-3">
<div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-red-50 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:x" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-snug">В конце недели чувствуешь усталость, но не видишь результата</p>
</div>
</div>
<div className="bg-gray-100/50 border border-gray-200 rounded-2xl p-5 mb-24">
<p className="text-sm text-gray-600">
                        Кажется, что проблема в лени или нехватке времени. 
                        
                    </p>
</div>
</div>
<div className="mt-auto pb-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pt-10 sticky bottom-0">
<button className="w-full bg-black text-white h-14 rounded-2xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors active:scale-95 duration-200" onclick="nextSlide()">
                    Далее
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<section className="min-w-full flex flex-col overflow-y-auto no-scrollbar z-10 w-full h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="pt-8 pb-4">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
<span className="iconify text-orange-600" data-icon="lucide:smartphone-off" data-width="16"></span>
</div>
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Инсайт</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">Почему приложения больше не работают</h2>
<p className="text-gray-600 text-base leading-relaxed mb-6">
                    Ты наверняка пробовал: новый ежедневник, Notion, трекеры привычек. Сначала это вдохновляет. Но через неделю мотивация падает, и ты просто перестаешь туда заходить.
                </p>
<div className="relative pl-4 border-l-2 border-gray-200 mb-8">
<p className="text-gray-800 text-sm font-medium">
                        Проблема не в инструментах. Проблема в том, что ты остаешься с ними один на один. Приложению всё равно, выполнил ты план или нет.
                    </p>
</div>
<div className="glass-panel border-orange-200/50 bg-gradient-to-br from-white to-orange-50/30 p-6 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full filter blur-[40px] opacity-20"></div>
<div className="flex items-center gap-2 mb-3">
<svg aria-hidden="true" data-icon="lucide:lightbulb" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-semibold text-gray-900">Ритм работает иначе</h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Это обязательство перед живым человеком. Раз в неделю ты отправляешь отчет куратору. Это создает мягкое социальное давление, которое не дает «слиться» и возвращает фокус.
                    </p>
</div>
</div>
<div className="mt-auto pb-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pt-10 sticky bottom-0">
<button className="w-full bg-black text-white h-14 rounded-2xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors active:scale-95 duration-200" onclick="nextSlide()">
                    Как это устроено
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<section className="min-w-full flex flex-col overflow-y-auto no-scrollbar z-10 w-full h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="pt-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Как это работает</h2>
<p className="text-gray-500 text-sm mb-8">Простая механика, которая занимает 15 минут в неделю.</p>
<div className="space-y-4 mb-24">

<div className="glass-panel p-5 rounded-2xl transition-transform active:scale-[0.98]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm font-bold">1</div>
<h3 className="font-semibold text-gray-900">Фокус месяца</h3>
</div>
<p className="text-sm text-gray-600 pl-11">
                            В начале мы созваниваемся на 20 минут. Определяем одно главное направление. Не 10 целей, а одну — ту, что действительно важна сейчас.
                        </p>
</div>

<div className="glass-panel p-5 rounded-2xl transition-transform active:scale-[0.98]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-900 flex items-center justify-center text-sm font-bold">2</div>
<h3 className="font-semibold text-gray-900">Три задачи на неделю</h3>
</div>
<p className="text-sm text-gray-600 pl-11">
                            Каждое воскресенье ты пишешь 3 приоритета. Это твой компас. Даже в хаосе будней ты будешь знать, что нужно сделать обязательно.
                        </p>
</div>

<div className="glass-panel p-5 rounded-2xl transition-transform active:scale-[0.98]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-900 flex items-center justify-center text-sm font-bold">3</div>
<h3 className="font-semibold text-gray-900">Обратная связь</h3>
</div>
<p className="text-sm text-gray-600 pl-11">
                            В конце недели ты сдаешь краткий отчет реальному человеку. Мы смотрим прогресс и корректируем курс.
                        </p>
</div>

<div className="glass-panel p-5 rounded-2xl border-orange-200/40 bg-orange-50/20 transition-transform active:scale-[0.98]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold text-gray-900">Механика «Жизней»</h3>
</div>
<p className="text-sm text-gray-600 pl-11">
                            У тебя есть 3 жизни на месяц. Пропустил отчет — жизнь сгорела. Две недели в ритме — жизнь восстановилась. Это игра, а не наказание.
                        </p>
</div>
</div>
</div>
<div className="mt-auto pb-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pt-10 sticky bottom-0">
<button className="w-full bg-black text-white h-14 rounded-2xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors active:scale-95 duration-200" onclick="nextSlide()">
                    Далее
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<section className="min-w-full flex flex-col overflow-y-auto no-scrollbar z-10 w-full h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="pt-8 flex-1">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Ежедневный пульс</h2>
<p className="text-gray-600 text-base mb-8">
                    По желанию ты можешь вести трекер состояния. Это не обязаловка, а способ увидеть связь между твоими действиями и энергией.
                </p>

<div className="relative w-full aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<img alt="Tracker UI" className="object-auto w-full h-full" onerror="this.onerror=null; this.parentNode.innerHTML='&lt;div class=\'w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center p-6 text-gray-400\'&gt;&lt;span class=\'iconify w-12 h-12 mb-2 opacity-50\' data-icon=\'lucide:activity\'&gt;&lt;/span&gt;&lt;span class=\'text-xs font-medium\'&gt;Визуализация&lt;br&gt;ежедневного прогресса&lt;/span&gt;&lt;/div&gt;'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e02bec8-36f5-461e-a97d-cec766ed125d_3840w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
</div>
<p className="text-center text-xs text-gray-400 font-medium">Простой и чистый шаблон, который приятно заполнять.</p>
</div>
<div className="mt-auto pb-4 pt-6">
<button className="w-full bg-black text-white h-14 rounded-2xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors active:scale-95 duration-200" onclick="nextSlide()">
                    К тарифам
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<section className="min-w-full flex flex-col overflow-y-auto no-scrollbar z-10 w-full h-full pt-6 pr-6 pb-6 pl-6 relative justify-center">
<div className="glass-panel rounded-3xl p-8 text-center relative overflow-hidden border-2 border-white/50 shadow-2xl shadow-orange-500/10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 relative z-10">Готов вернуть контроль?</h2>
<p className="text-gray-500 text-sm mb-8 leading-relaxed relative z-10">
                    4 недели поддержки. Еженедельная калибровка. Простой ритуал, меняющий качество жизни.
                </p>
<div className="my-8 relative z-10">
<span className="block text-5xl font-bold tracking-tighter text-gray-900">999 ₽</span>
<span className="text-gray-400 font-medium text-sm mt-1 block">/ месяц</span>
</div>
<button className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-gray-400/20 active:scale-95 relative z-10 group overflow-hidden">
<span className="relative z-10">Начать месяц в Ритме</span>
<div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<p className="text-xs text-gray-400 mt-6 relative z-10">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                    Отмена подписки в любой момент.
                </p>
</div>
<footer className="mt-12 text-center">
<p className="text-xs text-gray-400">© 2024 Ритм. Сервис для спокойного и устойчивого движения.</p>
<div className="flex justify-center gap-2 mt-4">
<button className="p-2 text-gray-300 hover:text-gray-600 transition-colors" onclick="prevSlide()">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 text-gray-300 hover:text-gray-600 transition-colors" onclick="resetSlides()">
<svg aria-hidden="true" data-icon="lucide:rotate-ccw" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></g></svg>
</button>
</div>
</footer>
</section>
</main>

<div className="fixed top-6 left-0 w-full flex justify-center gap-2 z-50 pointer-events-none mix-blend-multiply">
<div className="h-1 bg-black rounded-full transition-all duration-300 w-6" id="dot-0"></div>
<div className="w-2 h-1 bg-gray-300 rounded-full transition-all duration-300" id="dot-1"></div>
<div className="w-2 h-1 bg-gray-300 rounded-full transition-all duration-300" id="dot-2"></div>
<div className="w-2 h-1 bg-gray-300 rounded-full transition-all duration-300" id="dot-3"></div>
<div className="w-2 h-1 bg-gray-300 rounded-full transition-all duration-300" id="dot-4"></div>
<div className="w-2 h-1 bg-gray-300 rounded-full transition-all duration-300" id="dot-5"></div>
</div>


    </>
  );
}
