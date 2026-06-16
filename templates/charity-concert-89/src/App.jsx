import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.fade-up').forEach(el => {
                observer.observe(el);
            });
        });

        // Modal Logic
        const modal = document.getElementById('video-modal');
        const modalContent = document.getElementById('modal-content');
        const iframe = document.getElementById('video-iframe');

        function openVideo(videoId) {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Trigger animation
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
            
            document.body.style.overflow = 'hidden';
        }

        function closeVideo() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                iframe.src = '';
                document.body.style.overflow = '';
            }, 200);
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeVideo();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8">
<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,rgba(37,99,235,0.04),transparent_60%)] pointer-events-none"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center fade-up opacity-0 translate-y-8">
<div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 mb-8">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>СИЛЬНІШІ РАЗОМ • БЛАГОДІЙНИЙ КОНЦЕРТ</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4 uppercase">
                Stronger Together
            </h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 font-medium">
                A Charity Concert for Ukraine
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-12 w-full max-w-2xl">
<div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 w-full md:w-auto justify-center">
<iconify-icon className="text-gray-400" icon="solar:calendar-linear"></iconify-icon>
                    10 квітня 2026 • П'ятниця • 20:00
                </div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 w-full md:w-auto justify-center">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                    Wiener Stadthalle, Hall F • Відень
                </div>
</div>
<div className="w-full max-w-md mx-auto flex flex-col items-center">
<a className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 px-8 text-base font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0" href="https://at.mticket.eu">
                    Купити квитки 
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="text-xs text-gray-400 mt-4 max-w-xs">
                    Натискаючи кнопку, ви переходите на сайт mticket.eu для придбання квитків
                </p>
</div>
</div>
</section>

<section className="py-20 px-4 md:px-8 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto fade-up opacity-0 translate-y-8">
<div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center md:text-left">
                    Артисти вечора
                </h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible no-scrollbar">

<div className="snap-start shrink-0 w-[80vw] md:w-auto flex flex-col group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-5 relative">
<img alt="Max Barskih" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">Max Barskih</h3>
<p className="text-sm text-gray-500 truncate mb-4">Один із найуспішніших поп-виконавців</p>
<button className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors w-fit" onclick="openVideo('dQw4w9WgXcQ')">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon> 
                        Відео-запрошення
                    </button>
</div>

<div className="snap-start shrink-0 w-[80vw] md:w-auto flex flex-col group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-5 relative">
<img alt="Zlata Ognevich" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">Zlata Ognevich</h3>
<p className="text-sm text-gray-500 truncate mb-4">Чарівний голос України</p>
<button className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors w-fit" onclick="openVideo('dQw4w9WgXcQ')">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon> 
                        Відео-запрошення
                    </button>
</div>

<div className="snap-start shrink-0 w-[80vw] md:w-auto flex flex-col group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-5 relative">
<img alt="Klavdia Petrivna" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">Klavdia Petrivna</h3>
<p className="text-sm text-gray-500 truncate mb-4">Феномен нового покоління</p>
<button className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors w-fit" onclick="openVideo('dQw4w9WgXcQ')">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon> 
                        Відео-запрошення
                    </button>
</div>

<div className="snap-start shrink-0 w-[80vw] md:w-auto flex flex-col group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-5 relative">
<img alt="Maxim Borodin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">Maxim Borodin</h3>
<p className="text-sm text-gray-500 truncate mb-4">Щирі та глибокі композиції</p>
<button className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors w-fit" onclick="openVideo('dQw4w9WgXcQ')">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon> 
                        Відео-запрошення
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-gray-50">
<div className="max-w-4xl mx-auto fade-up opacity-0 translate-y-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8">
                Разом ми сильніші
            </h2>
<div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed mb-12">
<p>
                    Благодійний концерт Stronger Together — чудова можливість почути першокласних зірок української музики та долучитися до доброї справи. В цей вечір для вас лунатимуть хіти та пісні, які ви любите.
                </p>
<p>
                    Ця подія має благодійну мету. Ваш квиток — це не лише неймовірні емоції, а й реальна підтримка та допомога Україні в найважливіші часи.
                </p>
</div>
<div className="flex flex-col md:flex-row gap-4 border-t border-gray-200 pt-8">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 flex-1">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">За підтримки</p>
<p className="text-sm font-semibold text-gray-900">Фонду «Повернись живим»</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 flex-1">
<div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">За підтримки</p>
<p className="text-sm font-semibold text-gray-900">Посольства України в Австрії</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-white">
<div className="max-w-4xl mx-auto text-center fade-up opacity-0 translate-y-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-12">
                Квитки
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="border border-gray-200 rounded-2xl p-8 flex flex-col text-left hover:border-blue-200 hover:shadow-sm transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10"></div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Стандарт</h3>
<p className="text-sm text-gray-500 mb-8">Доступ до партеру та загальних зон залу.</p>
<div className="mt-auto flex items-baseline gap-1">
<span className="text-sm text-gray-500 font-medium">від</span>
<span className="text-4xl font-semibold tracking-tight text-gray-900">€29</span>
</div>
</div>

<div className="border border-blue-100 rounded-2xl p-8 flex flex-col text-left hover:border-blue-300 hover:shadow-sm transition-all bg-blue-50/30 relative overflow-hidden">
<div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md">Популярне</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Преміум</h3>
<p className="text-sm text-gray-500 mb-8">Найкращі місця з ідеальною видимістю сцени.</p>
<div className="mt-auto flex items-baseline gap-1">
<span className="text-sm text-gray-500 font-medium">від</span>
<span className="text-4xl font-semibold tracking-tight text-gray-900">€49</span>
</div>
</div>
</div>
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 px-10 text-base font-semibold transition-all hover:-translate-y-0.5 shadow-sm" href="https://at.mticket.eu">
                Купити квитки на mticket.eu
                <iconify-icon icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="text-xs text-gray-400 mt-4 max-w-sm mx-auto">
                Натискаючи кнопку, ви переходите на сайт офіційного оператора для безпечного придбання
            </p>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center fade-up opacity-0 translate-y-8">
<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">
                    Місце проведення
                </h2>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                    Wiener Stadthalle, Hall F
                </h3>
<p className="text-base text-gray-600 mb-8 max-w-sm">
                    Roland-Rainer-Platz 1,<br/>
                    1150 Vienna, Austria
                </p>
<div className="flex flex-col gap-2 text-sm text-gray-500">
<div className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                        Tickets: +01 79 999 79
                    </div>
<div className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon icon="solar:global-linear"></iconify-icon>
                        stadthalle.com
                    </div>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden bg-gray-200 border border-gray-200/50 shadow-sm relative">

<div className="absolute inset-0 bg-gray-100 flex items-center justify-center flex-col gap-3">
<iconify-icon className="text-5xl text-gray-300" icon="solar:map-bold-duotone"></iconify-icon>
<span className="text-sm font-medium text-gray-400">Інтерактивна карта</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100">
<div className="max-w-4xl mx-auto fade-up opacity-0 translate-y-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
                Правила відвідування
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:shield-warning-linear"></iconify-icon>
<p className="text-base text-gray-700 font-medium">Дітям до 5 років вхід заборонено</p>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:ticket-linear"></iconify-icon>
<p className="text-base text-gray-700 font-medium">З 5 років — необхідний власний квиток за повною вартістю</p>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<p className="text-base text-gray-700 font-medium">До 14 років — тільки з супроводом дорослих після 20:00</p>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:document-text-linear"></iconify-icon>
<p className="text-base text-gray-700 font-medium">Майте при собі документ, що підтверджує вік дитини</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
<div className="max-w-6xl mx-auto fade-up opacity-0 translate-y-8">
<p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-10">
                Організатори та партнери
            </p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">

<img alt="Partner Logo" className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hidden md:block" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
<img alt="Partner Logo" className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hidden md:block" src="https://at.mticket.eu/themes/kontramarka_2020/img/LRV_TOUR_BLACK.svg"/>
</div>
</div>
</section>

<footer className="bg-[#111827] text-white py-8 px-4 md:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
<p className="text-sm font-semibold tracking-tight uppercase">Stronger Together</p>
<p className="text-xs text-gray-400">© 2026. Благодійний концерт для України.</p>
</div>
<a className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1" href="https://at.mticket.eu">
                Купити квитки <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="video-modal">
<div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm transition-opacity" onclick="closeVideo()"></div>
<div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10 transform transition-transform scale-95 opacity-0" id="modal-content">
<button className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors" onclick="closeVideo()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="video-iframe" src=""></iframe>
</div>
</div>



    </>
  );
}
