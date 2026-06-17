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


(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KL4WGX7R');


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons();

    // 1. Cookie Banner Logic
    document.addEventListener("DOMContentLoaded", function() {
        if (!localStorage.getItem('cookiesAccepted')) {
            document.getElementById('cookieBanner').classList.remove('hidden');
        }
    });

    function acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieBanner').classList.add('hidden');
    }

    function closeCookies() {
        document.getElementById('cookieBanner').classList.add('hidden');
    }

    // 2. Audio Player Logic
    const audio = document.getElementById('approachAudio');
    const iconPlay = document.getElementById('iconPlay');
    const iconPause = document.getElementById('iconPause');
    let isPlaying = false;

    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
            iconPlay.classList.remove('hidden');
            iconPause.classList.add('hidden');
        } else {
            audio.play();
            iconPlay.classList.add('hidden');
            iconPause.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    }

    // ==================== VIDEO MODAL LOGIC ====================

const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');

// Відкриття
function openVideoModal(src) {
    if (!videoModal || !videoFrame) return;
    
    videoFrame.src = src;                    // завантажуємо відео
    videoModal.classList.remove('hidden');
    videoModal.classList.add('flex');
    
    // Force reflow — щоб анімація opacity завжди працювала
    requestAnimationFrame(() => {
        videoModal.classList.remove('opacity-0');
    });
}

// Примусове закриття
function closeVideoModal() {
    if (!videoModal || !videoFrame) return;
    
    videoModal.classList.add('opacity-0');
    
    setTimeout(() => {
        // Найкращий спосіб повністю зупинити YouTube (краще ніж "")
        videoFrame.src = 'about:blank';
        
        videoModal.classList.add('hidden');
        videoModal.classList.remove('flex');
    }, 350);
}

// Клік по backdrop
function handleBackdropClick(e) {
    if (e.target === videoModal) {
        closeVideoModal();
    }
}

// ДЕЛЕГУВАННЯ КЛІКІВ — ловимо кнопку по data-атрибуту
document.addEventListener('click', function(e) {
    const btn = e.target.closest('button[data-video-src]');
    if (btn) {
        e.preventDefault();           // на всяк випадок (якщо раптом <a>)
        e.stopImmediatePropagation();
        openVideoModal(btn.dataset.videoSrc);
    }
});

// Прив'язуємо обробник backdrop (один раз)
if (videoModal) {
    videoModal.addEventListener('click', handleBackdropClick);
}

// Кнопка закриття (залишаємо як є)
window.closeModalForce = closeVideoModal; // якщо потрібен глобальний доступ

    // 4. Lightbox Logic
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
    }

    function closeLightbox() {
        lightbox.classList.add('opacity-0');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightboxImg.src = "";
        }, 300);
    }

    // 5. Accordion Logic
    function toggleAccordion(id) {
        const content = document.getElementById(id);
        const icon = document.getElementById('icon-' + id);
        const isOpen = content.classList.contains('grid-rows-[1fr]');
        
        if (isOpen) {
            content.classList.remove('grid-rows-[1fr]');
            content.classList.add('grid-rows-[0fr]');
            if(icon) icon.classList.remove('rotate-180', 'bg-black', 'text-white');
        } else {
            content.classList.remove('grid-rows-[0fr]');
            content.classList.add('grid-rows-[1fr]');
            if(icon) {
                if(icon.tagName === 'I') icon.classList.add('rotate-180');
                else icon.classList.add('bg-black', 'text-white');
            }
        }
    }

    // 6. General Slider Logic
    const sliders = {};

    function moveSlider(trackId, direction) {
        const track = document.getElementById(trackId);
        if (!sliders[trackId]) sliders[trackId] = 0;
        
        const slides = track.children;
        const totalSlides = slides.length;
        
        sliders[trackId] += direction;
        
        if (sliders[trackId] < 0) sliders[trackId] = totalSlides - 1;
        if (sliders[trackId] >= totalSlides) sliders[trackId] = 0;
        
        track.style.transform = `translateX(-${sliders[trackId] * 100}%)`;
    }



    // Зчитуємо UTM з URL і вставляємо в поля
    const params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(utm => {
        const el = document.getElementById(utm);
        if (el) el.value = params.get(utm) || '';
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
      

<noscript><iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-KL4WGX7R" style={{display: 'none', visibility: 'hidden'}} width="0"></iframe></noscript>


<div className="fixed bottom-6 left-6 z-[100] max-w-sm bg-white border border-black/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-6 hidden" id="cookieBanner">
<h3 className="text-sm font-semibold mb-2 tracking-tight">Ми використовуємо Cookies 🍪</h3>
<p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            Цей сайт використовує файли cookie для покращення користувацького досвіду та аналітики відповідно до вимог GDPR.
        </p>
<div className="flex gap-3">
<button className="bg-black text-white px-5 py-2.5 text-xs font-medium hover:bg-neutral-800 transition-colors rounded-sm" onclick="acceptCookies()">Зрозуміло</button>
<button className="px-5 py-2.5 text-xs font-medium text-neutral-500 hover:text-black transition-colors rounded-sm border border-neutral-200 hover:border-black/20" onclick="closeCookies()">Сховати</button>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center modal-backdrop opacity-0 transition-opacity duration-300" id="videoModal" onclick="addEventListener">
<div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl mx-4" onclick="event.stopPropagation()">
<button className="absolute -top-12 right-0 text-white hover:opacity-70 flex items-center gap-2" onclick="closeModalForce()">
<span className="text-sm tracking-tight">Закрити</span>
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="videoFrame" src="" title="Video player"></iframe>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center modal-backdrop opacity-0 transition-opacity duration-300" id="lightboxModal" onclick="closeLightbox()">
<button className="absolute top-6 right-6 text-white hover:opacity-70 z-50">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<img alt="Full view" className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" id="lightboxImage" onclick="event.stopPropagation()" src=""/>
</div>

<nav className="fixed z-50 flex text-white mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="w-32">
<img alt="Dream Day" className="w-full h-auto" src="https://andreykos.com/lp/test-aura/logo-txt-white.svg"/>
</div>
<button className="hidden md:flex items-center gap-2 text-sm tracking-tight hover:opacity-70 transition-opacity">
<span className="">Menu</span>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover brightness-[0.60]" loop="" muted="" playsinline="">
<source src="https://framerusercontent.com/assets/x8NtqGduXG5VYzOp1lKdaeXTY.mp4" type="video/mp4"/>
</video>
</div>

<div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center gap-6">
<h2 className="text-xs md:text-sm font-normal tracking-widest uppercase opacity-80 animate-fade-up">
                Організація преміальних весіль в Італії
            </h2>
<div className="max-w-6xl mx-auto flex flex-col gap-4 animate-fade-up delay-100">
<h1 className="md:text-6xl lg:text-8xl leading-[0.9] text-4xl font-medium tracking-tighter">Створення весілля як кіношедевра в Італії</h1>
<p className="text-lg md:text-2xl lg:text-3xl font-light tracking-tight text-white/90 max-w-4xl mx-auto leading-snug">
                    технічна точність, управління бюджетом та італійська візуальна естетика під ключ
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-fade-up delay-200">
<button className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium tracking-tight hover:bg-neutral-200 transition-colors duration-300">
                    Як ми працюємо
                </button>


<button className="flex hover:bg-white/10 transition-all duration-300 group text-sm font-medium text-white tracking-tight border-white/30 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm gap-x-3 items-center" data-video-src="https://www.youtube.com/embed/0T-Np-hEL1Y?autoplay=1" type="button">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="play-circle"></i>
    Шоуріл
</button>
</div>
</div>
</header>

<section className="bg-[#FDFBF7] py-24 lg:py-32">
<div className="container mx-auto px-6 max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

<div className="lg:col-span-5 flex gap-4 md:gap-6">
<div className="flex flex-col gap-4 w-1/2 mt-12">

<div className="aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-neutral-200 rounded-sm">
<img alt="Eugenia" className="w-full h-full object-cover" src="https://framerusercontent.com/images/SUp9ozYNjWO2ub5fVnEVhcW9XXA.png"/>
</div>
<span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold text-center">Eugenia / Founder</span>
</div>
<div className="flex flex-col gap-4 w-1/2">

<div className="aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-neutral-200 rounded-sm">
<img alt="Angelina" className="w-full h-full object-cover" src="https://framerusercontent.com/images/SoSl3PaCXADSsmKqIQByHEXY18.png"/>
</div>
<span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold text-center">Angelina / Founder</span>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center h-full pt-8">
<h2 className="md:text-6xl leading-[0.95] text-4xl font-medium tracking-tighter mb-4">Про нас</h2>
<div className="space-y-6 text-base md:text-lg leading-relaxed text-neutral-600 font-light max-w-2xl text-justify">
<p className="">
                            We believe great weddings are equal parts emotion and execution. Every project begins with listening — to your love story, your vision, and your dreams.
                        </p>
<p className="">
                            From there, we combine local expertise, creative flair, and flawless coordination to build wedding experiences that not only look stunning, but feel perfectly you. Our process is personal, transparent, and stress-free — tailored to meet the unique needs of each couple and celebration.
                        </p>
<p className="">
                            We partner with adventurous couples, romantic dreamers, and busy professionals who value planning as peace of mind.
                        </p>
</div>

<div className="mt-12">
<button className="bg-white border border-neutral-200 px-6 py-4 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group rounded-sm min-w-[280px]" id="audioBtn" onclick="toggleAudio()">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">

<iconify-icon className="ml-0.5 text-white" icon="solar:play-linear" id="iconPlay" width="18"></iconify-icon>
<iconify-icon className="hidden text-white" icon="solar:pause-linear" id="iconPause" width="18"></iconify-icon>
</div>
<span className="text-xs font-bold uppercase tracking-widest text-black">Listen to our approach</span>
</button>
<audio id="approachAudio" src="https://ua-zvuk.net/uploads/files/2026-02/1770941756_yaktak-kola-na-bezzvuchniy-ost-mavkaspravzhniy-mif.mp3"></audio>
</div>
</div>
</div>
</div>
</section>

<section className="text-black bg-white relative">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col lg:pr-20 lg:border-r lg:pb-20 border-black/5 pt-20 pb-10 justify-center">
<span className="uppercase block text-xs font-medium text-neutral-400 tracking-widest mb-4">How we work / stage 1</span>
<h2 className="md:text-6xl leading-[0.95] text-4xl font-medium tracking-tighter mb-4">Перше побачення з вашою мрією</h2>
<h3 className="md:text-2xl text-xl font-normal text-neutral-400 tracking-tight mb-8">Знайомство та концепція</h3>
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-600">Все починається з щирої розмови. На першій онлайн-зустрічі ми не просто слухаємо — ми відчуваємо вашу історію та бачення. На основі ваших побажань ми розробимо мудборд — ваш особистий гайд, який допоможе побачити майбутнє свято ще до його початку.</p>
<div className="hidden lg:block mt-12">
<i className="text-neutral-300 animate-pulse w-8 h-8" data-lucide="mouse-pointer-2"></i>
</div>
</div>

<div className="lg:w-1/2 py-20 lg:pl-20 flex flex-col gap-24">

<div className="flex flex-col gap-6" id="process-accordion">

<div className="border-b border-black/10 pb-4">
<button className="flex items-center justify-between w-full text-left py-2 group" onclick="toggleAccordion('process-0')">
<h4 className="md:text-2xl group-hover:text-neutral-600 transition-colors text-xl font-medium tracking-tight pr-4">Навіщо ви детально розписуєте кожен крок?</h4>
<span className="text-xs font-mono border border-black/20 rounded-full px-2 py-1 ml-2 transition-transform duration-300" id="icon-process-0">01</span>
</button>
<div className="grid grid-rows-[1fr] accordion-content overflow-hidden" id="process-0">
<div className="min-h-0">
<div className="pt-6 pb-2">
<div className="aspect-video w-full mb-6 overflow-hidden">
<img alt="Process" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-base text-neutral-600 leading-relaxed font-light">
                                            Ми хочемо, щоб сайт працював як ваш персональний менеджер 24/7, заздалегідь відповідаючи на питання.
                                        </p>
</div>
</div>
</div>
</div>

<div className="border-b border-black/10 pb-4">
<button className="flex items-center justify-between w-full text-left py-2 group" onclick="toggleAccordion('process-1')">
<h4 className="text-xl md:text-2xl font-medium tracking-tight pr-4 group-hover:text-neutral-600 transition-colors">Специфічні побажання</h4>
<span className="text-xs font-mono border border-black/20 rounded-full px-2 py-1 ml-2 transition-transform duration-300" id="icon-process-1">02</span>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden" id="process-1">
<div className="min-h-0">
<div className="pt-6 pb-2">
<p className="text-base text-neutral-600 leading-relaxed font-light">
                                            Фіксуємо ваше побажання в месенджері чи на пошті та демонструємо, як саме ми його реалізували.
                                        </p>
</div>
</div>
</div>
</div>

<div className="border-b border-black/10 pb-4">
<button className="flex items-center justify-between w-full text-left py-2 group" onclick="toggleAccordion('process-2')">
<h4 className="text-xl md:text-2xl font-medium tracking-tight pr-4 group-hover:text-neutral-600 transition-colors">Управління бюджетом</h4>
<span className="text-xs font-mono border border-black/20 rounded-full px-2 py-1 ml-2 transition-transform duration-300" id="icon-process-2">03</span>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden" id="process-2">
<div className="min-h-0">
<div className="pt-6 pb-2">
<p className="text-base text-neutral-600 leading-relaxed font-light">
                                            Управління бюджетом та фінансова прозорість — наш пріоритет.
                                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h4 className="text-xl md:text-2xl font-medium tracking-tight mb-8">Реалізовуємо ваші побажання</h4>
<div className="relative group">
<div className="overflow-hidden w-full aspect-[4/3] bg-[#F5F5F5] relative rounded-sm">
<div className="flex transition-transform duration-500 ease-out h-full" id="work-slider-track">
<div className="w-full h-full flex-shrink-0"><img alt="Slide 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/></div>
<div className="w-full h-full flex-shrink-0"><img alt="Slide 2" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
</div>
<button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors" onclick="moveSlider('work-slider-track', -1)"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors" onclick="moveSlider('work-slider-track', 1)"><i className="w-6 h-6" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>

<div className="mt-8">
<h5 className="text-sm font-medium uppercase tracking-widest mb-8 border-b border-black/10 pb-4">Відгуки клієнтів</h5>
<div className="relative overflow-hidden w-full">
<div className="flex transition-transform duration-500 ease-out" id="reviews-slider-track">

<div className="w-full flex-shrink-0 pr-4">
<div className="grid grid-cols-2 gap-6 items-start">
<div className="w-full aspect-[9/16] cursor-zoom-in overflow-hidden relative group rounded-sm" onclick="openLightbox('https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=1740&amp;auto=format&amp;fit=crop')">
<img alt="Review 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="text-white w-6 h-6" data-lucide="maximize-2"></i>
</div>
</div>
<div className="flex flex-col justify-center h-full">
<div className="mb-4">
<i className="w-6 h-6 text-neutral-300 mb-4" data-lucide="quote"></i>
<p className="text-base md:text-lg leading-relaxed font-light">
                                                    «Мене вразила системність та точність. Я бачила кожен етап підготовки в реальному часі, це було неймовірно спокійно.»
                                                </p>
</div>
<div className="mt-auto">
<p className="font-medium text-sm">Олена &amp; Марко</p>
<p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Весілля в Тоскані</p>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 pr-4">
<div className="grid grid-cols-2 gap-6 items-start">
<div className="w-full aspect-[9/16] cursor-zoom-in overflow-hidden relative group rounded-sm" onclick="openLightbox('https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')">
<img alt="Review 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="text-white w-6 h-6" data-lucide="maximize-2"></i>
</div>
</div>
<div className="flex flex-col justify-center h-full">
<div className="mb-4">
<i className="w-6 h-6 text-neutral-300 mb-4" data-lucide="quote"></i>
<p className="text-base md:text-lg leading-relaxed font-light">
                                                    «Жодних сюрпризів з бюджетом. Повна прозорість та увага до найменших деталей декору.»
                                                </p>
</div>
<div className="mt-auto">
<p className="font-medium text-sm">Юлія &amp; Алекс</p>
<p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Озеро Комо</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-2 mt-6 justify-end">
<button className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors" onclick="moveSlider('reviews-slider-track', -1)"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors" onclick="moveSlider('reviews-slider-track', 1)"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#F9F9F9] border-black/5 border-t pt-20 pb-20">
<div className="container max-w-6xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="md:text-5xl leading-[0.95] text-3xl font-medium tracking-tighter mb-6">Порівняння локацій в Італії</h2>
<p className="text-neutral-600 font-light text-lg">
                    Ми підібрали найкращі локації під різні бюджети та формати. Від камерних вілл до королівських замків — вибір за вами.
                </p>
</div>

<div className="mb-24">
<h3 className="text-xl font-medium tracking-tight mb-8">Локації по бюджету</h3>
<div className="flex flex-col gap-0 border-t border-black/10">

<div className="border-b border-black/10">
<button className="flex group hover:bg-white transition-colors w-full pt-6 pr-4 pb-6 pl-4 items-center justify-between" onclick="toggleAccordion('loc-smart')">
<div className="flex items-center gap-6">
<span className="text-2xl font-medium tracking-tight">SMART</span>
<span className="text-sm font-mono bg-neutral-200 px-2 py-1 rounded text-neutral-600">€10k - €20k</span>
</div>
<i className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down" id="icon-loc-smart"></i>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden bg-white" id="loc-smart">
<div className="min-h-0 px-4 pb-8">
<p className="text-neutral-500 mb-8 pt-4 border-t border-dashed border-neutral-200">
                                    Всього ми маємо 8 локацій у цій категорії, серед яких 4 ексклюзивні. Нижче приклади 2 найбільш актуальних локацій. Більше локацій ви зможете отримати, коли залишите заявку на консультацію.
                                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<div className="aspect-video bg-neutral-100 overflow-hidden rounded-sm">
<img alt="Loc 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline">
<h4 className="text-lg font-semibold">Villa Intima</h4>
<span className="text-xs text-neutral-400">Tuscany</span>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">Затишна вілла для камерного весілля з басейном та садом оливкових дерев.</p>
<div className="grid grid-cols-2 text-xs text-neutral-500 mt-2 gap-y-1">
<span>Гості: до 20</span>
<span>Проживання: 12 осіб</span>
<span>Сезон: Травень-Вересень</span>
<span>Оренда: від €3,500</span>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="aspect-video bg-neutral-100 overflow-hidden rounded-sm">
<img alt="Loc 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline">
<h4 className="text-lg font-semibold">Casa Verde</h4>
<span className="text-xs text-neutral-400">Umbria</span>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">Автентичний фермерський будинок з панорамним видом на долину.</p>
<div className="grid grid-cols-2 text-xs text-neutral-500 mt-2 gap-y-1">
<span>Гості: до 30</span>
<span>Проживання: 18 осіб</span>
<span>Сезон: Весна-Осінь</span>
<span>Оренда: від €4,200</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-black/10">
<button className="flex items-center justify-between w-full py-6 group hover:bg-white transition-colors px-4" onclick="toggleAccordion('loc-classic')">
<div className="flex items-center gap-6">
<span className="text-2xl font-medium tracking-tight">CLASSIC</span>
<span className="text-sm font-mono bg-neutral-200 px-2 py-1 rounded text-neutral-600">€30k - €50k</span>
</div>
<i className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down" id="icon-loc-classic"></i>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden bg-white" id="loc-classic">
<div className="min-h-0 px-4 pb-8">
<p className="text-neutral-500 mb-8 pt-4 border-t border-dashed border-neutral-200">
                                    Всього ми маємо 12 локацій у цій категорії. Нижче приклади найпопулярніших.
                                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<div className="aspect-video bg-neutral-100 overflow-hidden rounded-sm">
<img alt="Loc Classic 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold">Borgo Antico</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Історичний маєток з власним виноградником та панорамним басейном.</p>
<div className="grid grid-cols-2 text-xs text-neutral-500 mt-2 gap-y-1">
<span>Гості: 30-60</span>
<span>Проживання: 30 осіб</span>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="aspect-video bg-neutral-100 overflow-hidden rounded-sm">
<img alt="Loc Classic 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold">Villa Rosa</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Елегантна вілла біля озера Гарда з великим садом для церемонії.</p>
<div className="grid grid-cols-2 text-xs text-neutral-500 mt-2 gap-y-1">
<span>Гості: до 80</span>
<span>Проживання: 20 осіб</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-black/10">
<button className="flex items-center justify-between w-full py-6 group hover:bg-white transition-colors px-4" onclick="toggleAccordion('loc-premium')">
<div className="flex items-center gap-6">
<span className="text-2xl font-medium tracking-tight">PREMIUM</span>
<span className="text-sm font-mono bg-neutral-200 px-2 py-1 rounded text-neutral-600">€80k+</span>
</div>
<i className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down" id="icon-loc-premium"></i>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden bg-white" id="loc-premium">
<div className="min-h-0 px-4 pb-8">
<p className="text-neutral-500 mb-8 pt-4 border-t border-dashed border-neutral-200">
                                    Ексклюзивні замки та приватні острови. Доступно 5 унікальних локацій.
                                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<div className="aspect-video bg-neutral-100 overflow-hidden rounded-sm">
<img alt="Loc Premium 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold">Grand Castello</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Королівський замок на озері Комо. Приватний причал, вертолітний майданчик.</p>
<div className="grid grid-cols-2 text-xs text-neutral-500 mt-2 gap-y-1">
<span>Гості: 100+</span>
<span>Ексклюзивність: 100%</span>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="aspect-video bg-neutral-100 overflow-hidden rounded-sm">
<img alt="Loc Premium 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold">Amalfi Palace</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Палац на скелі з видом на все узбережжя Амальфі.</p>
<div className="grid grid-cols-2 text-xs text-neutral-500 mt-2 gap-y-1">
<span>Гості: до 150</span>
<span>Сервіс: 5 Stars</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-24">
<h3 className="text-xl font-medium tracking-tight mb-8">Відгуки про локації</h3>
<div className="relative overflow-hidden w-full bg-white p-6 md:p-10 border border-neutral-200 rounded-sm">
<div className="flex transition-transform duration-500 ease-out" id="loc-review-track">

<div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="aspect-[9/16] md:aspect-video w-full overflow-hidden rounded-sm cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=1738&amp;auto=format&amp;fit=crop')">
<img alt="Loc Review 1" className="w-full h-full object-cover hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=1738&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<h4 className="text-lg font-semibold mb-2">Villa Intima</h4>
<div className="flex text-yellow-400 mb-4 text-xs gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-600 italic leading-relaxed">"Це місце перевершило всі наші очікування. Захід сонця над оливковим гаєм — це те, що ми запам'ятаємо на все життя."</p>
<div className="mt-6 text-sm font-medium">– Анна та Дмитро</div>
</div>
</div>

<div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="aspect-[9/16] md:aspect-video w-full overflow-hidden rounded-sm cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=1740&amp;auto=format&amp;fit=crop')">
<img alt="Loc Review 2" className="w-full h-full object-cover hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-lg font-semibold mb-2">Grand Castello</h4>
<div className="flex text-yellow-400 mb-4 text-xs gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-600 italic leading-relaxed">"Відчуття справжньої казки. Персонал, атмосфера, краєвиди — все на найвищому рівні. Рекомендуємо на 100%."</p>
<div className="mt-6 text-sm font-medium">– Крістіна та Майкл</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex gap-2">
<button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors" onclick="moveSlider('loc-review-track', -1)"><i className="w-3 h-3" data-lucide="arrow-left"></i></button>
<button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors" onclick="moveSlider('loc-review-track', 1)"><i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>

<div className="">
<h3 className="text-xl font-medium tracking-tight mb-8">Часті запитання</h3>
<div className="flex flex-col gap-4">
<div className="border border-neutral-200 rounded-sm p-4 bg-white">
<button className="flex text-lg font-medium text-left w-full items-center justify-between" onclick="toggleAccordion('faq-1')">
<span className="">Чи можна привезти свого фотографа?</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="plus"></i>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden" id="faq-1">
<div className="min-h-0 pt-4 text-neutral-600 text-sm font-light">
                                Так, звичайно. Ми відкриті до співпраці з вашими підрядниками, однак також можемо порекомендувати перевірених місцевих професіоналів.
                            </div>
</div>
</div>
<div className="border border-neutral-200 rounded-sm p-4 bg-white">
<button className="flex items-center justify-between w-full text-left font-medium text-lg" onclick="toggleAccordion('faq-2')">
<span className="">Скільки часу потрібно на підготовку?</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="plus"></i>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden" id="faq-2">
<div className="min-h-0 pt-4 text-neutral-600 text-sm font-light">
                                Ідеальний термін — 6-12 місяців. Це дозволяє забронювати найкращі дати та локації. Проте ми маємо досвід організації весіль і за 3 місяці.
                            </div>
</div>
</div>
<div className="border border-neutral-200 rounded-sm p-4 bg-white">
<button className="flex items-center justify-between w-full text-left font-medium text-lg" onclick="toggleAccordion('faq-3')">
<span className="">Як відбувається оплата підрядників?</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="plus"></i>
</button>
<div className="grid grid-rows-[0fr] accordion-content overflow-hidden" id="faq-3">
<div className="min-h-0 pt-4 text-neutral-600 text-sm font-light">
                                Всі оплати прозорі. Ви підписуєте договори напряму або через нас, зі збереженням всіх чеків та інвойсів у спільній папці.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-32 bg-white border-black/5 border-t pt-24 pb-24">
<div className="container max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 gap-12 items-end">

<div className="justify-between">
<h2 className="md:text-5xl leading-[0.95] text-4xl font-medium tracking-tighter mb-6">
                        Зробіть перший крок до вашого весілля-кіношедевра
                    </h2>
<p className="leading-relaxed text-lg font-light text-neutral-600 mb-10">
                        Залиште заявку на безкоштовну консультацію та отримайте після зідзвону персоналізовану
                        презентацію-гайд.
                    </p>
<div className="bg-[#F9F9F9] border-black/5 border rounded-sm p-6">
<div className="flex gap-3 text-sm font-medium mb-6 gap-x-3 gap-y-3 items-center">
<i className="w-5 h-5" data-lucide="file-plus"></i>
                            Що входить у презентацію:
                        </div>
<div className="flex gap-6 items-start">
<div className="w-1/3 aspect-[9/16] overflow-hidden rounded-sm bg-neutral-200 flex-shrink-0">
<img alt="Preview" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<ul className="w-2/3 text-sm text-neutral-600 space-y-4 pt-2">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-black flex-shrink-0" data-lucide="check-circle"></i>
<span className="leading-snug">Добірка ексклюзивних локацій (вілли, шато)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-black flex-shrink-0" data-lucide="check-circle"></i>
<span className="leading-snug">Візуальний мудборд для натхнення</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-black flex-shrink-0" data-lucide="check-circle"></i>
<span className="leading-snug">Попередній розрахунок бюджету</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-black flex-shrink-0" data-lucide="check-circle"></i>
<span className="leading-snug">Таймінг підготовки</span>
</li>
</ul>
</div>
</div>
</div>

<div className="md:p-10 bg-white border-black/10 border pt-8 pr-8 pb-8 pl-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-sm">
<form action="send.php" className="space-y-6" id="lead-form" method="POST">

<input id="utm_source" name="utm_source" type="hidden"/>
<input id="utm_medium" name="utm_medium" type="hidden"/>
<input id="utm_campaign" name="utm_campaign" type="hidden"/>
<input id="utm_content" name="utm_content" type="hidden"/>
<input id="utm_term" name="utm_term" type="hidden"/>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Ім'я</label>
<input className="w-full py-3 input-underline text-black placeholder-neutral-300 bg-transparent text-lg" name="Name" placeholder="Ваше ім'я" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Контакт</label>
<input className="w-full py-3 input-underline text-black placeholder-neutral-300 bg-transparent text-lg" name="Contact" placeholder="WhatsApp / Телефон" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Дата</label>
<input className="w-full py-3 input-underline text-black placeholder-neutral-300 bg-transparent text-lg" name="Date" placeholder="Орієнтовна дата" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Гості</label>
<input className="w-full py-3 input-underline text-black placeholder-neutral-300 bg-transparent text-lg" name="Guests" placeholder="Кількість гостей" type="text"/>
</div>
</div>
<button className="hover:bg-neutral-800 transition-colors flex group text-sm font-medium text-white tracking-tight bg-black w-full rounded-sm mt-8 py-4 items-center justify-center gap-2" type="submit">
<span>Відправити заявку</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-[10px] text-neutral-400 text-center pt-2">
                            Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних.
                        </p>
</form>
</div>
</div>
</div>
</section>
<footer className="bg-[#000000] text-gray-400 pt-20 pb-10 border-t border-gray-800 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="flex flex-col gap-6">
<a href="#">
<img alt="Dream Day" className="h-8" src="https://andreykos.com/lp/test-aura/logo-txt-white.svg"/>
</a>
<p className="text-xs text-gray-500 max-w-xs font-light">Swiss Precision meets Italian Aesthetic. Creating cinematic weddings across Italy.</p>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-600">Навігація</span>
<a className="text-sm font-light hover:text-white transition-colors" href="#">Головна</a>
<a className="text-sm font-light hover:text-white transition-colors" href="#stages">Етапи</a>
<a className="text-sm font-light hover:text-white transition-colors" href="#">Локації</a>
<a className="text-sm font-light hover:text-white transition-colors" href="#">Перший крок</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-600">Контакти</span>
<a className="text-sm font-light hover:text-white transition-colors" href="mailto:hello@dreamday.it">hello@dreamday.it</a>
<a className="text-sm font-light hover:text-white transition-colors" href="tel:+39000000000">+39 000 000 000</a>
<div className="flex gap-4 mt-2">
<a className="hover:opacity-50 transition-opacity" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:opacity-50 transition-opacity" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider border-t border-gray-800 pt-8">
<span>© 2026 Dream Day Italy. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-gray-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>




    </>
  );
}
