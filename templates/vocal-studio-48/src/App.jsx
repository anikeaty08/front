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



        // Tab Switching Logic
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            const target = document.getElementById('tab-' + tabId);
            if(target) target.classList.add('active');

            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-[#FF6B2B]');
                btn.classList.add('text-gray-500');
            });
            const activeBtn = document.getElementById('nav-' + tabId);
            if(activeBtn) {
                activeBtn.classList.remove('text-gray-500');
                activeBtn.classList.add('text-[#FF6B2B]');
            }
            window.scrollTo(0,0);
        }

        // Toast Notification
        let toastTimeout;
        function showToast(message) {
            const toast = document.getElementById('toast');
            const msgEl = document.getElementById('toast-message');
            msgEl.textContent = message;
            toast.style.transform = 'translate(-50%, 20px)';
            
            // Haptic Feedback Simulation (Visual)
            if(window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(50);
            }

            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.style.transform = 'translate(-50%, -150%)';
            }, 2500);
        }

        // Carousel Logic
        let currentSlide = 0;
        const slides = 3;
        const track = document.getElementById('carousel-track');
        let autoSlideInterval = setInterval(nextSlide, 5000);

        function updateDots() {
            for(let i=0; i<slides; i++) {
                const dot = document.getElementById('dot-'+i);
                if(i === currentSlide) {
                    dot.classList.remove('bg-white/40');
                    dot.classList.add('bg-white');
                } else {
                    dot.classList.add('bg-white/40');
                    dot.classList.remove('bg-white');
                }
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides;
            track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
            updateDots();
        }

        // Manual Swipe Detection
        let touchStartX = 0;
        let touchEndX = 0;
        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(autoSlideInterval);
        }, {passive: true});
        
        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            autoSlideInterval = setInterval(nextSlide, 5000);
        }, {passive: true});

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) nextSlide();
            if (touchEndX > touchStartX + 50) {
                currentSlide = (currentSlide - 1 + slides) % slides;
                track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
                updateDots();
            }
        }

        // Lootbox Logic
        function openLootbox() {
            const modal = document.getElementById('lootbox-modal');
            const content = document.getElementById('lootbox-content');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
        }

        function closeLootbox() {
            const modal = document.getElementById('lootbox-modal');
            const content = document.getElementById('lootbox-content');
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.remove('flex');
                modal.classList.add('hidden');
                showToast('Награда получена!');
            }, 300);
        }

        // Virtual Piano Logic (Web Audio API)
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx;

        function playNote(frequency) {
            if (!audioCtx) audioCtx = new AudioContext();
            if(audioCtx.state === 'suspended') audioCtx.resume();
            
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.value = frequency;

            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 1.2);
        }
    
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
      

<div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] translate-y-[-150%] transition-transform duration-300 flex items-center gap-3 px-4 py-3 bg-[#1A1A1D] border border-[#FF6B2B]/20 rounded-full shadow-2xl shadow-orange-900/20 backdrop-blur-xl" id="toast">
<iconify-icon className="text-[#FF6B2B]" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs text-white font-medium" id="toast-message">Успешно</span>
</div>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="lootbox-modal">
<div className="glass-panel w-full max-w-sm rounded-2xl p-6 text-center border-[#FF6B2B]/30 transform scale-95 transition-transform duration-300" id="lootbox-content">
<div className="w-20 h-20 bg-gradient-to-br from-[#FF6B2B] to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,43,0.3)] animate-pulse">
<iconify-icon className="text-white" icon="lucide:gift" width="40"></iconify-icon>
</div>
<h3 className="text-white text-xl font-heading font-bold mb-2">Награда за активность!</h3>
<p className="text-sm text-gray-400 mb-6">Вы посетили 3 занятия подряд. Вам начислено 50 бонусов.</p>
<button className="w-full bg-[#FF6B2B] text-white py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-orange-500/20" onclick="closeLootbox()">Забрать награду</button>
</div>
</div>

<div className="fixed top-0 left-0 w-full h-[60vh] spotlight-gradient pointer-events-none z-0"></div>

<div className="relative z-10 max-w-md mx-auto px-5 pt-4">

<header className="flex justify-between items-center mb-6 py-2 sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 -mx-5 px-5">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#993A10] p-[1.5px] cursor-pointer" onclick="switchTab('profile')">
<img alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-[#050505]" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div>

<h1 className="text-white text-sm font-heading font-semibold tracking-tight leading-none mb-0.5">Привет, Алексей 👋</h1>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-[#FF6B2B] font-bold bg-[#FF6B2B]/10 px-1.5 py-0.5 rounded">LVL 4</span>
<span className="text-[10px] text-gray-500">•</span>
<span className="text-[10px] text-gray-400">Pro Vocal</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center border border-white/5 transition-all" onclick="showToast('Переход на сайт')">
<iconify-icon className="text-gray-300" icon="lucide:globe" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<a className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center border border-white/5 transition-all" href="tel:+79990000000">
<iconify-icon className="text-gray-300" icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center border border-white/5 transition-all relative" onclick="openLootbox()">
<iconify-icon className="text-gray-300" icon="lucide:bell" strokeWidth="1.5" width="16"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-[#FF6B2B] rounded-full border border-[#050505]"></span>
</button>
</div>
</header>

<div className="tab-content active animate-fade-in" id="tab-home">

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 group shadow-2xl shadow-black/50">
<div className="flex h-full transition-transform duration-500 ease-out w-[300%]" id="carousel-track">
<div className="w-1/3 h-full relative shrink-0" onclick="showToast('Открыть новость')">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20 pr-4">
<span className="text-[9px] bg-[#FF6B2B] text-white font-bold px-2 py-0.5 rounded mb-2 inline-block shadow-lg shadow-orange-500/30">НОВОСТИ</span>
<h2 className="text-white text-lg font-heading font-bold leading-tight">Отчетный концерт <br/>в Декабре!</h2>
</div>
</div>
<div className="w-1/3 h-full relative shrink-0" onclick="showToast('Запись на МК')">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20 pr-4">
<span className="text-[9px] bg-purple-500 text-white font-bold px-2 py-0.5 rounded mb-2 inline-block shadow-lg shadow-purple-500/30">МАСТЕР-КЛАСС</span>
<h2 className="text-white text-lg font-heading font-bold leading-tight">Дыхание диафрагмой<br/>с Еленой В.</h2>
</div>
</div>
<div className="w-1/3 h-full relative shrink-0" onclick="showToast('Условия акции')">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20 pr-4">
<span className="text-[9px] bg-blue-500 text-white font-bold px-2 py-0.5 rounded mb-2 inline-block shadow-lg shadow-blue-500/30">АКЦИЯ</span>
<h2 className="text-white text-lg font-heading font-bold leading-tight">Приведи друга —<br/>получи урок</h2>
</div>
</div>
</div>
<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-30 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/5">
<button className="w-1.5 h-1.5 rounded-full bg-white transition-all" id="dot-0"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all" id="dot-1"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all" id="dot-2"></button>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl mb-8 relative overflow-hidden" onclick="switchTab('profile')">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="text-white text-sm font-bold font-heading">Путь вокалиста</h3>
<p className="text-[10px] text-gray-400">До Lvl 5 осталось 120 XP</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#FF6B2B]/20 flex items-center justify-center animate-pulse">
<iconify-icon className="text-[#FF6B2B]" icon="lucide:zap" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="w-full bg-[#1A1A1D] h-2 rounded-full overflow-hidden mb-1 relative border border-white/5">
<div className="bg-gradient-to-r from-[#FF6B2B] to-purple-500 h-full w-[75%] rounded-full relative z-10"></div>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-4 px-1">
<h3 className="text-white font-heading text-lg font-bold">Мои занятия</h3>
<button className="text-[10px] text-[#FF6B2B] font-semibold bg-[#FF6B2B]/10 px-2.5 py-1 rounded-md active:bg-[#FF6B2B]/20 transition-colors" onclick="switchTab('calendar')">
                        Расписание
                    </button>
</div>
<div className="space-y-3">

<div className="p-3 rounded-xl flex items-center gap-4 border border-white/5 bg-[#101012] opacity-50 grayscale hover:grayscale-0 transition-all active:scale-[0.98]" onclick="showToast('История занятия')">
<div className="bg-white/5 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-gray-500 border border-white/5">
<span className="text-xs font-bold leading-none">20</span>
<span className="text-[9px] font-bold uppercase">Дек</span>
</div>
<div className="flex-1">
<h4 className="text-gray-300 text-xs font-medium strikethrough decoration-gray-600">Групповая практика</h4>
<p className="text-[10px] text-gray-600">15:00 • Завершено</p>
</div>
<div className="p-2">
<iconify-icon className="text-gray-600" icon="lucide:check" width="16"></iconify-icon>
</div>
</div>

<div className="glass-panel-active p-3 rounded-xl flex items-center gap-4 relative overflow-hidden active:scale-[0.98] transition-transform" onclick="showToast('Детали текущего урока')">
<div className="absolute top-0 right-0 p-1">
<span className="text-[8px] font-bold bg-purple-500 text-white px-1.5 py-0.5 rounded-bl-lg">СЕГОДНЯ</span>
</div>
<div className="bg-purple-500/20 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-purple-400 border border-purple-500/20">
<span className="text-xs font-bold leading-none">22</span>
<span className="text-[9px] font-bold uppercase">Дек</span>
</div>
<div className="flex-1">
<h4 className="text-white text-xs font-bold">Постановка голоса</h4>
<p className="text-[10px] text-purple-200/70">19:00 • Зал №2 • Педагог Анна</p>
</div>
<div className="bg-purple-500 p-1.5 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse">
<iconify-icon className="text-white ml-0.5" icon="lucide:play" width="12"></iconify-icon>
</div>
</div>

<div className="glass-panel p-3 rounded-xl flex items-center gap-4 border-l-2 border-l-[#FF6B2B] active:scale-[0.98] transition-transform" onclick="showToast('Детали записи')">
<div className="bg-[#FF6B2B]/10 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-[#FF6B2B]">
<span className="text-xs font-bold leading-none">24</span>
<span className="text-[9px] font-bold uppercase">Дек</span>
</div>
<div className="flex-1">
<h4 className="text-white text-xs font-bold">Индивидуальный вокал</h4>
<p className="text-[10px] text-gray-400">18:00 • Педагог Елена В.</p>
</div>
<iconify-icon className="text-gray-500" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>

<div className="glass-panel p-3 rounded-xl flex items-center gap-4 border-l-2 border-l-[#FF6B2B] active:scale-[0.98] transition-transform" onclick="showToast('Детали записи')">
<div className="bg-[#FF6B2B]/10 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-[#FF6B2B]">
<span className="text-xs font-bold leading-none">27</span>
<span className="text-[9px] font-bold uppercase">Дек</span>
</div>
<div className="flex-1">
<h4 className="text-white text-xs font-bold">Сценическая речь</h4>
<p className="text-[10px] text-gray-400">14:00 • Группа Pro</p>
</div>
<iconify-icon className="text-gray-500" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>

<div className="glass-panel p-3 rounded-xl flex items-center gap-4 border-l-2 border-l-[#FF6B2B] active:scale-[0.98] transition-transform" onclick="showToast('Детали записи')">
<div className="bg-[#FF6B2B]/10 w-12 h-12 rounded-lg flex flex-col items-center justify-center text-[#FF6B2B]">
<span className="text-xs font-bold leading-none">30</span>
<span className="text-[9px] font-bold uppercase">Дек</span>
</div>
<div className="flex-1">
<h4 className="text-white text-xs font-bold">Итоговый прогон</h4>
<p className="text-[10px] text-gray-400">12:00 • Концертный зал</p>
</div>
<iconify-icon className="text-gray-500" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="tab-content animate-fade-in" id="tab-calendar">
<div className="flex justify-between items-center mb-4 px-1">
<h2 className="text-white text-lg font-heading font-bold">Запись</h2>
<span className="text-[10px] bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/5">Декабрь 2023</span>
</div>

<div className="glass-panel p-4 rounded-2xl mb-6 shadow-xl shadow-black/20">
<div className="grid grid-cols-7 gap-1 mb-4 text-center">
<span className="text-[10px] text-gray-500 font-medium">ПН</span>
<span className="text-[10px] text-gray-500 font-medium">ВТ</span>
<span className="text-[10px] text-gray-500 font-medium">СР</span>
<span className="text-[10px] text-gray-500 font-medium">ЧТ</span>
<span className="text-[10px] text-gray-500 font-medium">ПТ</span>
<span className="text-[10px] text-[#FF6B2B] font-bold">СБ</span>
<span className="text-[10px] text-[#FF6B2B] font-bold">ВС</span>
</div>
<div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-xs font-medium text-white mb-2">
<span className="opacity-20 py-1">27</span><span className="opacity-20 py-1">28</span><span className="opacity-20 py-1">29</span><span className="opacity-20 py-1">30</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">1</span>
<span className="text-[#FF6B2B] py-1">2</span>
<span className="text-[#FF6B2B] py-1">3</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">4</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">5</span>
<span className="bg-[#FF6B2B] rounded-full w-7 h-7 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30 text-white font-bold">6</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">7</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">8</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">9</span>
<span className="py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">10</span>
</div>
<div className="h-px bg-white/5 my-4"></div>

<div className="text-center">
<p className="text-xs text-gray-400 mb-3">Свободных слотов: 4</p>
<a className="flex items-center justify-center gap-2 w-full bg-white text-black text-xs font-bold py-3.5 rounded-xl hover:bg-gray-200 active:scale-95 transition-all" href="https://n1066419.yclients.com" target="_blank">
<span>Выбрать время</span>
<iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="glass-panel p-3 rounded-xl flex flex-col justify-center items-center gap-2 text-center active:scale-95 transition-all cursor-pointer hover:bg-white/5" onclick="showToast('Список педагогов')">
<iconify-icon className="text-[#FF6B2B]" icon="lucide:users" width="20"></iconify-icon>
<span className="text-[10px] text-gray-300 font-medium">Мои педагоги</span>
</div>
<div className="glass-panel p-3 rounded-xl flex flex-col justify-center items-center gap-2 text-center active:scale-95 transition-all cursor-pointer hover:bg-white/5" onclick="showToast('История записей')">
<iconify-icon className="text-gray-400" icon="lucide:rotate-ccw" width="20"></iconify-icon>
<span className="text-[10px] text-gray-300 font-medium">Повторить</span>
</div>
</div>
</div>

<div className="tab-content animate-fade-in" id="tab-media">
<h2 className="text-white text-lg font-heading font-bold mb-4">Медиа &amp; Практика</h2>

<div className="glass-panel p-4 rounded-2xl mb-6 relative border-[#FF6B2B]/20 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xs text-white font-bold uppercase tracking-wider flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Пианино
                    </h3>
<iconify-icon className="text-[#FF6B2B]" icon="lucide:headphones" width="14"></iconify-icon>
</div>
<div className="relative h-[120px] flex justify-center select-none overflow-hidden rounded-lg bg-black/50 border border-white/10" id="piano-container">

<div className="flex w-full">
<button className="piano-key-white flex-1 border-r border-gray-300" onclick="playNote(261.63)"></button>
<button className="piano-key-white flex-1 border-r border-gray-300" onclick="playNote(293.66)"></button>
<button className="piano-key-white flex-1 border-r border-gray-300" onclick="playNote(329.63)"></button>
<button className="piano-key-white flex-1 border-r border-gray-300" onclick="playNote(349.23)"></button>
<button className="piano-key-white flex-1 border-r border-gray-300" onclick="playNote(392.00)"></button>
<button className="piano-key-white flex-1 border-r border-gray-300" onclick="playNote(440.00)"></button>
<button className="piano-key-white flex-1" onclick="playNote(493.88)"></button>
</div>

<div className="absolute top-0 left-0 w-full h-full pointer-events-none flex">
<div className="w-[14.28%]"></div>
<button className="piano-key-black w-[8%] -ml-[4%] pointer-events-auto" onclick="playNote(277.18)"></button>
<div className="w-[6.28%]"></div>
<button className="piano-key-black w-[8%] -ml-[4%] pointer-events-auto" onclick="playNote(311.13)"></button>
<div className="w-[20.56%]"></div>
<button className="piano-key-black w-[8%] -ml-[4%] pointer-events-auto" onclick="playNote(369.99)"></button>
<div className="w-[6.28%]"></div>
<button className="piano-key-black w-[8%] -ml-[4%] pointer-events-auto" onclick="playNote(415.30)"></button>
<div className="w-[6.28%]"></div>
<button className="piano-key-black w-[8%] -ml-[4%] pointer-events-auto" onclick="playNote(466.16)"></button>
</div>
</div>
<p className="text-[9px] text-gray-500 text-center mt-2 font-medium">Нажимай для распевки</p>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<button className="glass-panel p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group active:scale-95 text-left" onclick="showToast('Плеер запущен')">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:mic-2" width="16"></iconify-icon>
</div>
<h4 className="text-white text-xs font-bold">Распевки</h4>
<p className="text-[9px] text-gray-400">15 аудио треков</p>
</button>
<button className="glass-panel p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group active:scale-95 text-left" onclick="showToast('Открыты упражнения')">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:wind" width="16"></iconify-icon>
</div>
<h4 className="text-white text-xs font-bold">Дыхание</h4>
<p className="text-[9px] text-gray-400">Практики диафрагмы</p>
</button>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-white text-sm font-bold">Shorts</h3>
<a className="flex gap-1 items-center active:opacity-60" href="#">
<iconify-icon className="text-blue-500" icon="lucide:play-circle" width="14"></iconify-icon>
<span className="text-[10px] text-blue-500 font-bold">Все видео</span>
</a>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 scroll-snap-x -mx-5 px-5 no-scrollbar">

<div className="snap-start min-w-[140px] h-[220px] rounded-xl overflow-hidden relative bg-gray-800 border border-white/10 active:scale-95 transition-transform" onclick="showToast('Видео воспроизводится')">
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-0.5" icon="lucide:play" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
<span className="text-[11px] text-white font-bold leading-tight block">Высокие ноты</span>
<span className="text-[9px] text-gray-400">3 мин</span>
</div>
</div>

<div className="snap-start min-w-[140px] h-[220px] rounded-xl overflow-hidden relative bg-gray-800 border border-white/10 active:scale-95 transition-transform" onclick="showToast('Видео воспроизводится')">
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-0.5" icon="lucide:play" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
<span className="text-[11px] text-white font-bold leading-tight block">Моторчик</span>
<span className="text-[9px] text-gray-400">5 мин</span>
</div>
</div>

<div className="snap-start min-w-[140px] h-[220px] rounded-xl overflow-hidden relative bg-gray-800 border border-white/10 active:scale-95 transition-transform" onclick="showToast('Видео воспроизводится')">
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon className="text-white ml-0.5" icon="lucide:play" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
<span className="text-[11px] text-white font-bold leading-tight block">Снятие зажима</span>
<span className="text-[9px] text-gray-400">2 мин</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content animate-fade-in" id="tab-profile">
<h2 className="text-white text-lg font-heading font-bold mb-4">Мой профиль</h2>
<div className="glass-panel rounded-xl p-4 mb-6 flex items-center gap-4 border-l-2 border-l-[#FF6B2B]">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#993A10] p-0.5">
<img className="w-full h-full rounded-full object-cover border-4 border-[#141416]" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div>
<h3 className="text-white font-bold text-base">Алексей Леонов</h3>
<p className="text-xs text-gray-400 mb-1">+7 (999) 123-45-67</p>
<button className="text-[9px] bg-white/10 px-2 py-1 rounded text-white hover:bg-white/20 transition-colors">Редактировать</button>
</div>
</div>

<div className="bg-[#0A0A0B]/80 rounded-xl p-5 mb-6 relative overflow-hidden border border-white/5 shadow-2xl">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B2B] rounded-full filter blur-[60px] opacity-20 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<p className="text-[10px] text-[#FF6B2B] font-bold uppercase tracking-widest mb-1">Абонемент</p>
<h3 className="text-xl text-white font-heading font-bold tracking-tight">Pro Vocal</h3>
</div>
<div className="bg-white/5 border border-white/5 px-2 py-1 rounded text-right backdrop-blur-sm">
<span className="block text-[9px] text-gray-500 uppercase font-bold">Карта</span>
<span className="text-xs text-white font-mono tracking-wider">#8841</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
<div>
<span className="text-[10px] text-gray-500 block mb-1">Остаток</span>
<div className="flex items-end gap-1.5">
<span className="text-3xl font-heading font-bold text-white leading-none">4</span>
<span className="text-[10px] text-gray-400 mb-1">из 8</span>
</div>
</div>
<div className="text-right">
<span className="text-[10px] text-gray-500 block mb-1">До 24 Дек</span>
<span className="text-[9px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/10">Осталось 12 дней</span>
</div>
</div>
<div className="h-1.5 bg-[#1A1A1D] rounded-full overflow-hidden w-full relative z-10">
<div className="bg-[#FF6B2B] h-full w-[50%] rounded-full shadow-[0_0_10px_rgba(255,107,43,0.4)]"></div>
</div>
<button className="mt-4 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all relative z-10 active:scale-[0.98]" onclick="showToast('Продление абонемента')">
                    Продлить абонемент
                </button>
</div>

<div className="glass-panel p-4 rounded-xl mb-6 bg-gradient-to-br from-[#1A1A1D] to-purple-900/10 border-purple-500/20">
<div className="flex items-start gap-3">
<div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
<iconify-icon icon="lucide:gift" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-bold">Пригласи друга</h4>
<p className="text-[10px] text-gray-400 mb-2">Получите по 1 бесплатному уроку за каждого друга.</p>
<button className="text-[10px] text-white bg-purple-600 px-3 py-1.5 rounded-lg font-bold hover:bg-purple-500 transition-colors" onclick="showToast('Ссылка скопирована')">Скопировать ссылку</button>
</div>
</div>
</div>

<div className="space-y-2">

<button className="w-full flex items-center justify-between p-4 glass-panel rounded-xl group hover:bg-white/5 active:scale-[0.99] transition-all" onclick="showToast('Правила открыты')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:book" width="16"></iconify-icon>
</div>
<span className="text-xs text-white font-medium">Правила студии</span>
</div>
<iconify-icon className="text-gray-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 glass-panel rounded-xl group hover:bg-white/5 active:scale-[0.99] transition-all" onclick="showToast('Чат с поддержкой')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
</div>
<span className="text-xs text-white font-medium">Поддержка</span>
</div>
<iconify-icon className="text-gray-600" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 glass-panel rounded-xl mt-4 border-red-500/10 hover:bg-red-500/5 active:scale-[0.99] transition-all">
<div className="flex items-center gap-3">
<iconify-icon className="text-red-400" icon="lucide:log-out" width="16"></iconify-icon>
<span className="text-xs text-red-400 font-bold">Выйти из аккаунта</span>
</div>
</button>
</div>
</div>
</div>

<nav className="fixed bottom-0 left-0 w-full z-50 px-5 pb-6 pt-6 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent pointer-events-none">
<div className="glass-panel mx-auto max-w-md rounded-2xl h-16 flex items-center justify-around shadow-2xl shadow-black/80 border-[#333] pointer-events-auto backdrop-blur-xl bg-[#141416]/90">
<button className="nav-btn flex flex-col items-center justify-center gap-1 w-12 group text-[#FF6B2B] active:scale-90 transition-transform" id="nav-home" onclick="switchTab('home')">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Главная</span>
</button>
<button className="nav-btn flex flex-col items-center justify-center gap-1 w-12 group text-gray-500 hover:text-white active:scale-90 transition-all" id="nav-calendar" onclick="switchTab('calendar')">
<iconify-icon icon="lucide:calendar-days" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Запись</span>
</button>
<div className="relative -top-6">
<a className="w-14 h-14 rounded-full bg-[#FF6B2B] flex items-center justify-center shadow-[0_4px_20px_rgba(255,107,43,0.4)] hover:scale-105 active:scale-95 transition-transform border-4 border-[#050505]" href="https://t.me/alinabrays" onclick="showToast('Telegram')" target="_blank">
<iconify-icon className="text-white -ml-0.5 mt-0.5" icon="lucide:send" strokeWidth="1.5" width="22"></iconify-icon>
</a>
</div>
<button className="nav-btn flex flex-col items-center justify-center gap-1 w-12 group text-gray-500 hover:text-white active:scale-90 transition-all" id="nav-media" onclick="switchTab('media')">
<iconify-icon icon="lucide:music-4" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Медиа</span>
</button>
<button className="nav-btn flex flex-col items-center justify-center gap-1 w-12 group text-gray-500 hover:text-white active:scale-90 transition-all" id="nav-profile" onclick="switchTab('profile')">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Профиль</span>
</button>
</div>
</nav>


    </>
  );
}
