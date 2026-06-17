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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Animation
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 50;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Modal Logic
        const modal = document.getElementById('videoModal');
        const modalPanel = document.getElementById('modalPanel');
        const iframe = document.getElementById('youtubeIframe');
        const closeBtn = document.getElementById('closeModalBtn');
        const backdrop = document.getElementById('modalBackdrop');
        const openBtns = document.querySelectorAll('.open-video-btn');

        function openModal(videoId) {
            // Using placeholder VIDEOID or provided ID
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
            // Slight delay for transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalPanel.classList.remove('scale-95');
                modalPanel.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalPanel.classList.remove('scale-100');
            modalPanel.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                iframe.src = ''; // Stop video playing
                document.body.style.overflow = ''; // Restore body scroll
            }, 300); // match transition duration
        }

        openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Get ID from data attribute or use generic placeholder if missing
                const videoId = btn.getAttribute('data-video') || 'VIDEOID'; 
                openModal(videoId);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
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
      

<div className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="videoModal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" id="modalBackdrop"></div>

<div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 pointer-events-none">
<div className="w-full max-w-4xl relative pointer-events-auto scale-95 transition-transform duration-300" id="modalPanel">
<button aria-label="Close modal" className="absolute -top-10 right-0 md:-right-10 text-white/70 hover:text-white transition-colors p-2" id="closeModalBtn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="youtubeIframe" src="" title="YouTube video player"></iframe>
</div>
</div>
</div>
</div>

<section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="reveal z-10">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-tight">
                СИЛЬНІШІ РАЗОМ • БЛАГОДІЙНИЙ КОНЦЕРТ
            </span>
</div>
<h1 className="reveal mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-4xl">
            STRONGER TOGETHER
        </h1>
<p className="reveal mt-4 text-lg md:text-xl text-gray-700 max-w-2xl font-medium">
            A Charity Concert for Ukraine
        </p>
<div className="reveal mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-900">
<iconify-icon className="text-gray-500" icon="solar:calendar-linear" width="18"></iconify-icon>
                10 квітня 2026 • П'ятниця • 20:00
            </div>
<div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-900">
<iconify-icon className="text-gray-500" icon="solar:map-point-linear" width="18"></iconify-icon>
                Wiener Stadthalle, Hall F • Відень
            </div>
</div>
<div className="reveal w-full max-w-md mt-10 z-10">
<a className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full text-base font-semibold transition-all duration-200 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5" href="https://at.mticket.eu">
                Купити квитки 
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-3 text-xs text-gray-500">
                Натискаючи кнопку, ви переходите на сайт mticket.eu для придбання квитків
            </p>
</div>
</section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-gray-200"/></div>

<section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="reveal mb-10 md:mb-14 flex items-center justify-between">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Артисти вечора</h2>
<div className="hidden md:flex gap-2 text-gray-400">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6 no-scrollbar">

<div className="reveal w-[85vw] sm:w-[50vw] md:w-auto shrink-0 snap-center flex flex-col group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative">
<img alt="Max Barskih" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900">Max Barskih</h3>
<p className="text-sm text-gray-500 mt-1 truncate">Один із найуспішніших українських поп-виконавців</p>
<button className="open-video-btn mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors w-fit" data-video="jNQXAC9IVRw">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Відео-запрошення
                </button>
</div>

<div className="reveal w-[85vw] sm:w-[50vw] md:w-auto shrink-0 snap-center flex flex-col group" style={{transitionDelay: '100ms'}}>
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative">
<img alt="Zlata Ognevich" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900">Zlata Ognevich</h3>
<p className="text-sm text-gray-500 mt-1 truncate">Чарівний голос України</p>
<button className="open-video-btn mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors w-fit" data-video="jNQXAC9IVRw">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Відео-запрошення
                </button>
</div>

<div className="reveal w-[85vw] sm:w-[50vw] md:w-auto shrink-0 snap-center flex flex-col group" style={{transitionDelay: '200ms'}}>
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative">
<img alt="Klavdia Petrivna" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900">Klavdia Petrivna</h3>
<p className="text-sm text-gray-500 mt-1 truncate">Феномен нового покоління</p>
<button className="open-video-btn mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors w-fit" data-video="jNQXAC9IVRw">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Відео-запрошення
                </button>
</div>

<div className="reveal w-[85vw] sm:w-[50vw] md:w-auto shrink-0 snap-center flex flex-col group" style={{transitionDelay: '300ms'}}>
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative">
<img alt="Maxim Borodin" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900">Maxim Borodin</h3>
<p className="text-sm text-gray-500 mt-1 truncate">Щирі та глибокі композиції</p>
<button className="open-video-btn mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors w-fit" data-video="jNQXAC9IVRw">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Відео-запрошення
                </button>
</div>
</div>
</section>

<section className="bg-gray-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto">
<h2 className="reveal text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">Разом ми сильніші</h2>
<div className="reveal space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
<p>Благодійний концерт Stronger Together — чудова можливість почути першокласних зірок української музики та долучитися до доброї справи. В цей вечір для вас лунатимуть хіти та пісні, які ви любите.</p>
<p>Ця подія має благодійну мету. Ваш квиток — це не лише емоції, а реальна допомога Україні.</p>
</div>
<div className="reveal mt-10 grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-900">За підтримки фонду<br/><span className="text-gray-500 font-normal">«Повернись живим»</span></p>
</div>
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-400" icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-900">За підтримки Посольства<br/><span className="text-gray-500 font-normal">України в Республіці Австрія</span></p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
<h2 className="reveal text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-10 text-center">Квитки</h2>
<div className="w-full grid sm:grid-cols-2 gap-4 md:gap-6 mb-10">

<div className="reveal bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col hover:border-blue-200 transition-colors">
<h3 className="text-xl font-semibold text-gray-900">Стандарт</h3>
<div className="mt-4 flex items-baseline text-3xl font-semibold tracking-tight text-gray-900">
<span className="text-lg font-medium text-gray-500 mr-2">від</span> €29
                </div>
<ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Доступ до загальної зони</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Вільна посадка</li>
</ul>
</div>

<div className="reveal bg-white border border-blue-200 rounded-3xl p-6 md:p-8 flex flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">Рекомендовано</div>
<h3 className="text-xl font-semibold text-gray-900">Преміум</h3>
<div className="mt-4 flex items-baseline text-3xl font-semibold tracking-tight text-gray-900">
<span className="text-lg font-medium text-gray-500 mr-2">від</span> €49
                </div>
<ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Найкращі місця</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Окремий вхід</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Пріоритетне обслуговування</li>
</ul>
</div>
</div>
<div className="reveal w-full max-w-md text-center z-10">
<a className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full text-base font-semibold transition-all duration-200 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5" href="https://at.mticket.eu">
                Купити квитки на mticket.eu
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-3 text-xs text-gray-500">
                Натискаючи кнопку, ви переходите на сайт mticket.eu для придбання квитків
            </p>
</div>
</section>

<section className="bg-gray-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-200/60">
<div className="max-w-7xl mx-auto">
<h2 className="reveal text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-10">Місце проведення</h2>
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

<div className="reveal lg:col-span-4 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Wiener Stadthalle, Hall F</h3>
<p className="text-sm text-gray-600 mb-6 flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="18"></iconify-icon>
                        Roland-Rainer-Platz 1, 1150 Vienna, Austria
                    </p>
<div className="w-full h-48 sm:h-64 bg-gray-200 rounded-2xl overflow-hidden mb-6 border border-gray-200">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.236968984924!2d16.330456076899453!3d48.20199727125316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07851d7e2f5b%3A0xc67f7e914c6fb73d!2sWiener%20Stadthalle!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat" style={{border: '0'}} width="100%"></iframe>
</div>
<p className="text-xs text-gray-500 flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" width="16"></iconify-icon>
                        Tickets: +01 79 999 79 • stadthalle.com
                    </p>
</div>

<div className="reveal lg:col-span-8 flex flex-col" style={{transitionDelay: '100ms'}}>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">

<div className="w-[75vw] sm:w-[40vw] md:w-[240px] shrink-0 snap-center aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
<img alt="Concert Hall" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="w-[75vw] sm:w-[40vw] md:w-[240px] shrink-0 snap-center aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
<img alt="Stage" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="w-[75vw] sm:w-[40vw] md:w-[240px] shrink-0 snap-center aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
<img alt="Audience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="w-[75vw] sm:w-[40vw] md:w-[240px] shrink-0 snap-center aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
<img alt="Lights" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
<p className="mt-4 text-sm text-gray-500 italic">Wiener Stadthalle — одна з найбільших концертних арен Австрії</p>
</div>
</div>

<div className="reveal mt-16 lg:mt-24 max-w-3xl">
<h4 className="text-lg font-semibold text-gray-900 mb-6">Правила відвідування</h4>
<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200 text-gray-900 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">1</div>
<p className="text-sm text-gray-700">Дітям до 5 років вхід заборонено</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200 text-gray-900 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">2</div>
<p className="text-sm text-gray-700">З 5 років — власний квиток за повною вартістю</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200 text-gray-900 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">3</div>
<p className="text-sm text-gray-700">До 14 років — тільки з супроводом дорослих після 20:00</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200 text-gray-900 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">4</div>
<p className="text-sm text-gray-700">Майте при собі документ, що підтверджує вік дитини</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<p className="reveal text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">Організатори та партнери</p>
<div className="reveal flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-80">

<img alt="Partner Logo" className="h-6 md:h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center text-center">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="reveal z-10">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-tight">
                STRONGER TOGETHER • 10 КВІТНЯ 2026
            </span>
</div>
<h2 className="reveal mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-2xl">
            Не пропустіть цей вечір
        </h2>
<p className="reveal mt-4 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Живий звук, зірки української музики та реальна допомога Україні — все в одному вечорі у Відні.
        </p>
<div className="reveal w-full max-w-md mt-10 z-10">
<a className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full text-base font-semibold transition-all duration-200 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5" href="https://at.mticket.eu">
                Купити квитки 
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-3 text-xs text-gray-500">
                Натискаючи кнопку, ви переходите на сайт mticket.eu для придбання квитків
            </p>
</div>
</section>

<footer className="bg-gray-900 py-8 md:py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
<p className="text-sm text-gray-400">
                © 2026 Stronger Together. Благодійний концерт для України.
            </p>
<a className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 group" href="https://at.mticket.eu">
                Купити квитки 
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</footer>



    </>
  );
}
