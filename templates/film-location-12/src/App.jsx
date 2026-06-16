import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        let currentLang = 'ru';
        
        const translations = {
            ru: {
                nav_home: 'Главная',
                nav_movies: 'Фильмы',
                nav_about: 'О проекте',
                hero_title: 'Мир кино\nна карте',
                btn_map: 'Исследовать карту',
                section_recent: 'Новые места',
                link_view_all_loc: 'Все локации',
                section_movies: 'Популярные фильмы',
            },
            en: {
                nav_home: 'Home',
                nav_movies: 'Movies',
                nav_about: 'About',
                hero_title: 'Cinema World\non the map',
                btn_map: 'Explore Map',
                section_recent: 'New Places',
                link_view_all_loc: 'All Locations',
                section_movies: 'Popular Movies',
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            
            const langName = currentLang === 'ru' ? 'RU' : 'EN';
            document.getElementById('current-lang-text').innerText = langName;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerText = translations[currentLang][key];
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="max-w-[1440px] mx-auto px-4 md:px-6 pt-4 md:pt-6 space-y-24">

<header className="relative w-full h-[85vh] min-h-[600px] rounded-3xl overflow-hidden group">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="bg-gradient-to-b from-black/60 via-transparent to-black/80 absolute top-0 right-0 bottom-0 left-0" style={{pointerEvents: 'none'}}>

<input className="peer hidden" id="mobile-menu-toggle" type="checkbox"/>

<label className="absolute top-7 right-28 z-50 md:hidden p-1 text-white cursor-pointer hover:bg-white/10 rounded-full transition-colors" htmlFor="mobile-menu-toggle" style={{pointerEvents: 'auto'}}>
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</label>

<div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white transition-all duration-300 translate-x-full peer-checked:translate-x-0 md:hidden" style={{pointerEvents: 'auto'}}>

<label className="absolute top-7 right-6 p-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors" htmlFor="mobile-menu-toggle">
<svg className="lucide lucide-x w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 12"></path></svg>
</label>

<div className="flex flex-col items-center gap-6">
<a className="text-3xl font-medium tracking-tight hover:text-gray-400 transition-colors" href="#">Главная</a>
<a className="text-3xl font-medium tracking-tight hover:text-gray-400 transition-colors" href="/movies">Фильмы</a>
<a className="text-3xl font-medium tracking-tight hover:text-gray-400 transition-colors" href="#about">О проекте</a>
</div>
<div className="mt-8 pt-8 border-t border-white/10 w-48 flex justify-center gap-6 text-white/50">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</div>

<nav className="relative z-20 w-full px-6 py-6 md:px-10 flex items-center justify-between text-white">

<a className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity" href="#">
<span className="text-xl font-medium tracking-tighter">where<span className="opacity-50">scene</span></span>
</a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide opacity-90">
<a className="hover:text-white/70 transition-colors" data-i18n="nav_home" href="#">Главная</a>
<a className="hover:text-white/70 transition-colors" data-i18n="nav_movies" href="/movies">Фильмы</a>
<a className="hover:text-white/70 transition-colors" data-i18n="nav_about" href="#about">О проекте</a>
</div>

<div className="flex items-center gap-3 cursor-pointer group/lang" onclick="toggleLanguage()">
<span className="text-sm font-medium opacity-80 group-hover/lang:opacity-100 transition-opacity" id="current-lang-text">RU</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/lang:bg-white/20 transition-all">
<svg className="lucide lucide-globe w-4 h-4 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
</nav>

<div className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-10 pb-16 md:pb-20">
<div className="flex flex-col md:flex-row items-end justify-between gap-10">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-8" data-i18n="hero_title">
                            Мир кинона карте
                        </h1>
<div className="flex items-center gap-4">
<a className="h-12 px-6 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#map">
<span data-i18n="btn_map">Исследовать карту</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-white">
<svg className="lucide lucide-play w-4 h-4 ml-0.5 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>

</div>
</div>
</header>

<section className="px-2 md:px-4">
<div className="flex items-end justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-900" data-i18n="section_recent">
                    Новые места
                </h2>
<a className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors" href="#">
<span data-i18n="link_view_all_loc">Все локации</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<article className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Hobbiton" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full text-white">
<div className="flex items-center gap-2 mb-2 opacity-80">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-medium tracking-wide uppercase">Новая Зеландия</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">Хоббитон</h3>
<p className="text-sm text-gray-300 font-light">Властелин Колец</p>
</div>
</article>

<article className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Arvendel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full text-white">
<div className="flex items-center gap-2 mb-2 opacity-80">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-medium tracking-wide uppercase">Новая Зеландия</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">Мост Арвендэйл</h3>
<p className="text-sm text-gray-300 font-light">Властелин Колец</p>
</div>
</article>

<article className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Castle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full text-white">
<div className="flex items-center gap-2 mb-2 opacity-80">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-medium tracking-wide uppercase">Шотландия</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">Замок Дунаднох</h3>
<p className="text-sm text-gray-300 font-light">Гарри Поттер</p>
</div>
</article>

<article className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Wild West" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full text-white">
<div className="flex items-center gap-2 mb-2 opacity-80">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-medium tracking-wide uppercase">Испания</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">Пустыня Табернас</h3>
<p className="text-sm text-gray-300 font-light">Игра Престолов</p>
</div>
</article>
</div>
<div className="md:hidden mt-6 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-200 pb-0.5" href="#">
<span data-i18n="link_view_all_loc">Все локации</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="px-2 md:px-4" id="movies">
<div className="flex items-end justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-900" data-i18n="section_movies">
                    Популярные фильмы
                </h2>
<div className="hidden md:flex gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">

<a className="group block space-y-3" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="LOTR" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">Властелин Колец</h3>
<p className="text-xs text-gray-400 mt-1">128 локаций</p>
</div>
</a>

<a className="group block space-y-3" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="Harry Potter" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">Гарри Поттер</h3>
<p className="text-xs text-gray-400 mt-1">94 локации</p>
</div>
</a>

<a className="group block space-y-3" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="GoT" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">Игра Престолов</h3>
<p className="text-xs text-gray-400 mt-1">210 локаций</p>
</div>
</a>

<a className="group block space-y-3" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="Knives Out" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">Достать ножи</h3>
<p className="text-xs text-gray-400 mt-1">12 локаций</p>
</div>
</a>

<a className="group block space-y-3" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="Pride" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">Гордость и предубеждение</h3>
<p className="text-xs text-gray-400 mt-1">45 локаций</p>
</div>
</a>

<a className="group block space-y-3" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="Schindler" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" src="https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"/>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">Список Шиндлера</h3>
<p className="text-xs text-gray-400 mt-1">8 локаций</p>
</div>
</a>
</div>
</section>

<footer className="border-t border-gray-100 pt-10 pb-2 px-2 md:px-4">
<div className="flex flex-col md:flex-row justify-between gap-10">
<div className="space-y-4 max-w-sm">
<a className="flex items-center gap-1 opacity-100 hover:opacity-80 transition-opacity" href="#">
<span className="text-lg font-medium tracking-tighter">where<span className="opacity-40">scene</span></span>
</a>
<p className="text-sm text-gray-500 font-normal leading-relaxed">
                        Помогаем кинолюбителям находить реальные места съемок их любимых картин. Исследуйте мир через призму кинематографа.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-1">Проект</h4>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Главная</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#movies">Фильмы</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#about">Блог</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-1">Правовое</h4>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Конфиденциальность</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2024 WhereScene Inc.</p>
<div className="flex gap-4">
<a className="hover:text-gray-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-gray-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-gray-900 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
