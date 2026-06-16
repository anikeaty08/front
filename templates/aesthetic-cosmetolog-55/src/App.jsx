import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Hero Scroll Transformation Logic
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight;
            const heroContainer = document.getElementById('hero-image-container');
            const modelImage = document.getElementById('img-model');
            const naturalImage = document.getElementById('img-natural');

            // Fade effect calculation
            // Starts fading in immediately, fully visible by 60% of viewport height
            const opacity = Math.min(Math.max(scrollY / (heroHeight * 0.6), 0), 1);
            
            if (modelImage) {
                modelImage.style.opacity = opacity;
                
                // Subtle zoom effect on scroll
                const scale = 1.05 + (scrollY * 0.0001);
                modelImage.style.transform = `scale(${scale})`;
                naturalImage.style.transform = `scale(${scale})`;
            }

            // Parallax turn off point
            if (scrollY > heroHeight) {
                // Could hide container for performance if needed, but handled by z-index
            }
        });

        // Before/After Slider Logic
        function updateSlider(val) {
            const overlay = document.getElementById('compare-overlay');
            const handle = document.getElementById('slider-handle');
            
            if(overlay && handle) {
                overlay.style.width = `${val}%`;
                handle.style.left = `${val}%`;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-card border-b border-pink-100/50">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-serif tracking-tight text-slate-800 uppercase flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F8DCEB] to-[#F2C7D9] flex items-center justify-center text-white font-serif italic text-sm">S</span>
<span className="font-normal">Secret Body</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#F2C7D9] transition-colors" href="#about">О салоне</a>
<a className="hover:text-[#F2C7D9] transition-colors" href="#services">Услуги</a>
<a className="hover:text-[#F2C7D9] transition-colors" href="#results">Результаты</a>
<a className="hover:text-[#F2C7D9] transition-colors" href="#reviews">Отзывы</a>
</div>
<a className="hidden md:block px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs tracking-wide uppercase font-medium hover:bg-[#F2C7D9] hover:text-slate-900 transition-all duration-300" href="#contact">
                Записаться
            </a>
<button className="md:hidden text-slate-800">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-[120vh] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5] via-[#F8DCEB]/30 to-white z-0"></div>
<div className="opacity-40 z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full blur-[100px] animate-float"></div>
<div className="absolute bottom-40 right-10 w-96 h-96 bg-[#F2C7D9] rounded-full blur-[120px] animate-float-delayed"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 flex items-center justify-center overflow-hidden" id="hero-image-container">

<img alt="Natural beauty" className="absolute w-full h-full object-cover object-center opacity-100 transition-transform duration-100 ease-linear scale-105" id="img-natural" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" style={{transform: 'scale(1.6137)'}}/>

<img alt="Ideal transformation" className="absolute w-full h-full object-cover object-center opacity-0 transition-opacity duration-100 ease-linear scale-105" id="img-model" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{opacity: '1', transform: 'scale(1.6137)'}}/>

<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
</div>

<div className="relative z-20 text-center max-w-4xl px-6 mt-20">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-white mb-6 animate-float">
<svg className="lucide lucide-sparkles w-3 h-3 text-[#F2C7D9]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs uppercase tracking-widest text-slate-500">Премиальная косметология</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-none tracking-tight mb-6">
                Секрет вашего <br/>
<span className="italic font-light text-slate-700">идеального</span> тела
            </h1>
<p className="text-lg md:text-xl text-slate-600 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Почувствуйте магию преображения. От естественной красоты к совершенству линий с помощью передовых технологий.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-slate-900 text-white rounded-full text-sm uppercase tracking-wider hover:bg-[#F2C7D9] hover:text-slate-900 transition-all duration-300 shadow-xl shadow-pink-200/50" href="#services">
                    Выбрать процедуру
                </a>
<button className="px-8 py-4 bg-white/80 backdrop-blur-md text-slate-800 rounded-full text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 border border-white">
                    О нас
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
<span className="text-xs uppercase tracking-widest text-slate-800">Листайте вниз</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-slate-800 to-transparent"></div>
</div>
</header>

<div className="h-[20vh] w-full bg-gradient-to-b from-transparent to-[#FAFAFA] relative z-20"></div>
<main className="relative z-30 bg-[#FAFAFA]">

<section className="py-24 md:py-32 px-6 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1490750967868-58cb75069ed6?auto=format&amp;fit=crop&amp;q=80')] bg-no-repeat bg-contain bg-right-top opacity-5 blur-[2px] parallax-bg"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="relative z-10 rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-pink-100">
<img alt="Interior" className="w-full h-[600px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F8DCEB] rounded-full blur-[40px] -z-10"></div>
<div className="absolute top-20 -right-10 w-32 h-32 bg-[#F2C7D9]/40 rounded-full blur-[30px] z-20"></div>
</div>
<div className="space-y-8">
<span className="text-[#F2C7D9] text-sm font-bold uppercase tracking-widest">Философия</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                            Гармония технологий и <span className="italic text-gold">эстетики</span>
</h2>
<p className="text-slate-600 leading-loose font-light text-lg">
                            Мы верим, что красота — это не только внешность, но и внутреннее состояние. В нашем пространстве инновационные аппаратные методики встречаются с расслабляющей атмосферой спа. Каждая процедура — это шаг к лучшей версии себя, без боли и длительной реабилитации.
                        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
<div className="p-6 rounded-2xl bg-white border border-pink-50 shadow-sm hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-[#F8DCEB]/30 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-award w-6 h-6 stroke-[1.5]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-lg font-serif mb-2 text-slate-800">Экспертность</h3>
<p className="text-sm text-slate-500 font-light">Врачи-косметологи с медицинским образованием.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-pink-50 shadow-sm hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-[#F8DCEB]/30 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sparkle w-6 h-6 stroke-[1.5]" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<h3 className="text-lg font-serif mb-2 text-slate-800">Премиум оборудование</h3>
<p className="text-sm text-slate-500 font-light">Только сертифицированные аппараты из Европы и США.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-[#F2C7D9] text-xs font-bold uppercase tracking-widest mb-3 block">Наши услуги</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900">Искусство преображения</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-transparent via-pink-100 to-pink-200 hover:to-pink-300 transition-all duration-500 h-full">
<div className="relative bg-white rounded-[23px] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-100/60">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
<img alt="RF" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-pink-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-pink-400 transition-colors">RF-лифтинг</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                                Безоперационная подтяжка кожи. Запускает естественную выработку коллагена, возвращая упругость.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">45 мин</span>
<span className="text-sm font-semibold text-slate-800">от 3 500 ₽</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-transparent via-pink-100 to-pink-200 hover:to-pink-300 transition-all duration-500 h-full">
<div className="relative bg-white rounded-[23px] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-100/60">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
<img alt="SMAS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-pink-400 transition-colors">SMAS-лифтинг</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                                Глубокое омоложение на уровне мышечного слоя. Четкий овал лица за одну процедуру.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">60 мин</span>
<span className="text-sm font-semibold text-slate-800">от 15 000 ₽</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-transparent via-pink-100 to-pink-200 hover:to-pink-300 transition-all duration-500 h-full">
<div className="relative bg-white rounded-[23px] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-100/60">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Massage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-pink-400 transition-colors">LPG-массаж</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                                Эффективная борьба с целлюлитом и отеками. Моделирование идеального силуэта.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">30 мин</span>
<span className="text-sm font-semibold text-slate-800">от 1 800 ₽</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-transparent via-pink-100 to-pink-200 hover:to-pink-300 transition-all duration-500 h-full">
<div className="relative bg-white rounded-[23px] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-100/60">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Laser" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-pink-400 transition-colors">Лазерная терапия</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                                Удаление пигментации, сосудов и нежелательных волос. Идеально гладкая и чистая кожа.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">20 мин</span>
<span className="text-sm font-semibold text-slate-800">от 2 000 ₽</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-transparent via-pink-100 to-pink-200 hover:to-pink-300 transition-all duration-500 h-full">
<div className="relative bg-white rounded-[23px] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-100/60">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Micro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=1528&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-pink-400 transition-colors">Микротоки</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                                "Фитнес" для лица. Снятие спазмов, лимфодренаж и улучшение цвета лица.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">40 мин</span>
<span className="text-sm font-semibold text-slate-800">от 2 500 ₽</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#F8DCEB] to-[#F2C7D9] transition-all duration-500 h-full">
<div className="relative bg-gradient-to-br from-[#FFF5F9] to-[#FDEEF6] rounded-[23px] p-8 h-full flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-500">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#F2C7D9] mb-6 shadow-sm">
<svg className="lucide lucide-calendar-heart w-8 h-8 stroke-[1.5]" data-lucide="calendar-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"></path><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</div>
<h3 className="text-2xl font-serif text-slate-800 mb-3">Индивидуальный план</h3>
<p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
                                Не знаете, что выбрать? Наш врач составит программу специально для вас.
                            </p>
<a className="px-8 py-3 bg-slate-900 text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#F2C7D9] hover:text-slate-900 transition-colors" href="#contact">
                                Консультация
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#FAFAFA] pt-24 pr-6 pb-24 pl-6 relative" id="results">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Видимый результат</h2>
<p className="text-slate-500 font-light max-w-lg mx-auto">Передвигайте ползунок, чтобы увидеть эффект после курса процедур.</p>
</div>
<div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(242,199,217,0.4)] group select-none">

<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest z-10">После</div>

<div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white/80" id="compare-overlay" style={{width: '55%'}}>
<img alt="Before" className="absolute top-0 left-0 w-[200%] max-w-none h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-6 left-6 px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest z-10">До</div>
</div>

<input className="cursor-ew-resize z-30 opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" max="100" min="0" oninput="updateSlider(this.value)" type="range" value="50"/>

<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-20 pointer-events-none text-[#F2C7D9]" id="slider-handle" style={{left: '55%'}}>
<svg className="lucide lucide-move-horizontal w-5 h-5" data-lucide="move-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 8 4 4-4 4"></path><path d="M2 12h20"></path><path d="m6 8-4 4 4 4"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-white to-[#FFF5F9]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 space-y-8">
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">Ваш комфорт — наш приоритет</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="min-w-6 min-h-6 w-6 h-6 rounded-full bg-[#F2C7D9]/40 flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3 h-3 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-serif text-slate-800 mb-1">Стерильность и безопасность</h4>
<p className="text-sm font-light text-slate-500">Одноразовые материалы и кварцевание кабинетов после каждого клиента.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="min-w-6 min-h-6 w-6 h-6 rounded-full bg-[#F2C7D9]/40 flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3 h-3 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-serif text-slate-800 mb-1">Без скрытых платежей</h4>
<p className="text-sm font-light text-slate-500">Фиксированные цены на комплексы процедур. Консультация включена.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="min-w-6 min-h-6 w-6 h-6 rounded-full bg-[#F2C7D9]/40 flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3 h-3 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-serif text-slate-800 mb-1">Атмосфера релакса</h4>
<p className="text-sm font-light text-slate-500">Приятная музыка, ароматерапия и вкусный чай после процедуры.</p>
</div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F8DCEB] to-transparent rounded-[3rem] rotate-3 opacity-60"></div>
<img alt="Relax" className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-serif text-slate-900 mb-12 text-center">Истории преображения</h2>
<div className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory no-scrollbar" style={{WebkitOverflowScrolling: 'touch'}}>

<div className="min-w-[85vw] md:min-w-[400px] bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] snap-center flex flex-col">
<div className="flex items-center gap-1 mb-6 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 font-light italic mb-6 leading-relaxed flex-grow">"Я в восторге от курса SMAS-лифтинга! Овал лица подтянулся, кожа стала плотной. Никто не верит, что это без уколов. Спасибо доктору Анне!"</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<h5 className="text-sm font-semibold text-slate-800">Елена В.</h5>
<span className="text-xs text-slate-400">SMAS-лифтинг</span>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] snap-center flex flex-col">
<div className="flex items-center gap-1 mb-6 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 font-light italic mb-6 leading-relaxed flex-grow">"Проходила курс LPG массажа перед отпуском. Результат превзошел ожидания — минус 4 см в талии и очень гладкая кожа. Атмосфера в салоне потрясающая."</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<h5 className="text-sm font-semibold text-slate-800">Мария К.</h5>
<span className="text-xs text-slate-400">LPG Массаж</span>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] snap-center flex flex-col">
<div className="flex items-center gap-1 mb-6 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 font-light italic mb-6 leading-relaxed flex-grow">"Лазерная эпиляция здесь — это действительно не больно! Аппарат новый, мастер очень деликатная. Обязательно приду еще."</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<h5 className="text-sm font-semibold text-slate-800">Ольга С.</h5>
<span className="text-xs text-slate-400">Лазер</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-slate-900 overflow-hidden text-center" id="contact">

<div className="absolute inset-0 z-0">
<div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
<div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-[#F2C7D9] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-900/40 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8DCEB]/10 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<span className="text-[#F2C7D9] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Сделайте первый шаг</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Готовы к идеальному отражению в зеркале?</h2>
<p className="text-slate-300 font-light text-lg mb-12">Запишитесь на консультацию сегодня и получите скидку 15% на первую процедуру.</p>
<button className="btn-breathe relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#F8DCEB] to-[#F2C7D9] rounded-full overflow-hidden group transition-transform">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative text-slate-900 text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                        Записаться онлайн
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</section>

<footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="text-center md:text-left">
<a className="text-2xl font-serif tracking-tighter text-white mb-2 block" href="#">SECRET BODY</a>
<p className="text-slate-500 text-sm font-light">Студия эстетической косметологии</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F2C7D9] hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F2C7D9] hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
<p>© 2023 Secret of the Ideal Body. Все права защищены.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Публичная оферта</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
