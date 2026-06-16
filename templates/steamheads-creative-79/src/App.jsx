import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Fade In Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="blob-bg bg-orange-200 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
<div className="blob-bg bg-rose-200 w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-float" style={{animationDelay: '2s'}}></div>
<div className="blob-bg bg-amber-100 w-64 h-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-[#FFFBF7]/80 border-b border-stone-200/50">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform duration-300">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900">STEAMHEADS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-600 transition-colors" href="#about">Про нас</a>
<a className="hover:text-orange-600 transition-colors" href="#programs">Програми</a>
<a className="hover:text-orange-600 transition-colors" href="#community">Спільнота</a>
<a className="hover:text-orange-600 transition-colors" href="#contact">Контакти</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-stone-900 text-stone-50 text-sm font-medium rounded-full hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-0.5" href="#join">
<span className="">Долучитись</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden p-2 text-stone-600">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center fade-in-section is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-medium mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            Новий набір на весняний семестр
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 mb-6 max-w-4xl leading-[1.1]">
            Де технології зустрічають <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">креативність</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 max-w-2xl mb-10 leading-relaxed font-light">
            SteamHeads — це простір, де інженерія стає мистецтвом. Ми навчаємо створювати майбутнє через код, робототехніку та дизайн.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="px-8 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-stone-200" href="#programs">
                Обрати курс
            </a>
<a className="px-8 py-3 bg-white border border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 hover:border-stone-300 transition-all hover:scale-105 active:scale-95" href="#about">
                Дізнатись більше
            </a>
</div>

<div className="grid grid-cols-3 gap-8 opacity-100 max-w-4xl mt-16 gap-x-8 gap-y-12 px-4">

<div className="group relative h-40 w-full bg-gradient-to-br from-orange-50 via-white to-orange-50/30 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(249,115,22,0.1)] flex items-center justify-center rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-700 ease-out overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:16px_16px] opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-100/60 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-orange-200/40 transition-all duration-700"></div>

<div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping [animation-duration:3s]"></div>
<div className="absolute top-6 right-8 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>

<div className="relative z-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg className="lucide lucide-cpu w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path className="" d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path className="" d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><rect className="" height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>

<div className="group relative h-40 w-full bg-gradient-to-br from-rose-50 via-white to-rose-50/30 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(244,63,94,0.1)] flex items-center justify-center -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-700 ease-out mt-12 overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#fda4af_1px,transparent_1px)] [background-size:12px_12px] group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-rose-100/60 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-rose-200/40 transition-all duration-700"></div>

<div className="absolute top-4 left-8 w-3 h-3 bg-rose-300/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
<div className="absolute bottom-6 right-6 w-2 h-2 bg-rose-400/30 rounded-full animate-bounce [animation-delay:0.5s]"></div>

<div className="relative z-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg className="lucide lucide-palette w-8 h-8 text-rose-400 group-hover:text-rose-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle className="" cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle className="" cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
</div>

<div className="group relative h-40 w-full bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(245,158,11,0.1)] flex items-center justify-center rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-700 ease-out overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#fcd34d_1px,transparent_1px)] [background-size:20px_20px] opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl group-hover:scale-[2.5] transition-transform duration-700"></div>

<div className="absolute top-5 right-5 text-amber-300 opacity-80 animate-pulse">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<div className="absolute bottom-5 left-8 w-1 h-1 bg-amber-400 rounded-full animate-ping [animation-duration:2s]"></div>

<div className="relative z-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg className="lucide lucide-rocket w-8 h-8 text-amber-400 group-hover:text-amber-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path className="" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 fade-in-section" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-orange-200 rounded-3xl rotate-3"></div>
<div className="relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
<div className="flex gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
<svg className="lucide lucide-code-2 w-6 h-6 text-stone-600" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
<svg className="lucide lucide-lightbulb w-6 h-6 text-orange-500" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
<svg className="lucide lucide-heart w-6 h-6 text-rose-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
<h3 className="text-2xl font-semibold text-stone-900 mb-4 tracking-tight">Більше ніж просто курси</h3>
<p className="text-stone-600 leading-relaxed mb-6">
                            Ми віримо, що найкраще навчання відбувається на перетині дисциплін. У SteamHeads ми не просто вчимо писати код чи паяти схеми — ми вчимо мислити системно та креативно вирішувати проблеми.
                        </p>
<div className="flex items-center gap-3 text-sm font-medium text-stone-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Практичний підхід</span>
<span className="w-1 h-1 bg-stone-300 rounded-full"></span>
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Сучасне обладнання</span>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">
                        Наша філософія <span className="text-stone-400">Навчання через створення</span>
</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-flask-conical w-5 h-5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Експерименти</h4>
<p className="text-stone-600 leading-relaxed">Помилки — це частина процесу. Ми створюємо безпечне середовище для тестування найсміливіших ідей.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
<svg className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Командна робота</h4>
<p className="text-stone-600 leading-relaxed">Великі проекти створюються разом. Навчаємо комунікації та soft skills в процесі розробки.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/50 fade-in-section" id="programs">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Наші напрямки</h2>
<p className="text-stone-500 max-w-md">Оберіть шлях, який найбільше запалює вашу цікавість. Від кодингу до 3D-моделювання.</p>
</div>
<a className="group flex items-center gap-2 text-stone-900 font-medium hover:text-orange-600 transition-colors" href="#">
                    Всі програми <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-[#FFF5EE] border border-orange-100 p-8 transition-all hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-bot w-64 h-64 text-orange-500" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="relative h-full flex flex-col justify-between z-10">
<div className="">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
<svg className="lucide lucide-bot w-6 h-6 text-orange-500" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-stone-900 mb-2">Робототехніка &amp; AI</h3>
<p className="text-stone-600 max-w-sm">Створення розумних пристроїв на базі Arduino та Raspberry Pi. Основи штучного інтелекту для підлітків.</p>
</div>
<div className="mt-8">
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-stone-600">
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Програмування C++ / Python
                                </li>
<li className="flex items-center gap-2 text-sm text-stone-600">
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3D друк деталей
                                </li>
<li className="flex items-center gap-2 text-sm text-stone-600">
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Змагання роботів
                                </li>
</ul>
<button className="px-5 py-2.5 bg-white text-stone-900 text-sm font-medium rounded-lg shadow-sm hover:bg-orange-50 transition-colors">Детальніше</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[#FFF0F5] border border-rose-100 p-8 transition-all hover:shadow-xl hover:shadow-rose-100/50 hover:-translate-y-1">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-laptop-2 w-32 h-32 text-rose-500" data-lucide="laptop-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="2" x2="22" y1="20" y2="20"></line></svg>
</div>
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
<svg className="lucide lucide-code w-5 h-5 text-rose-500" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Creative Coding</h3>
<p className="text-sm text-stone-600">Веб-дизайн, анімація та розробка ігор на JS.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-[#FDF5E6] border border-amber-100 p-8 transition-all hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-atom w-32 h-32 text-amber-500" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</div>
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
<svg className="lucide lucide-pen-tool w-5 h-5 text-amber-500" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Science Art</h3>
<p className="text-sm text-stone-600">Поєднання біології, фізики та візуального мистецтва.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-stone-200/60 bg-white/30 fade-in-section">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-200/50">
<div>
<div className="text-4xl font-semibold text-stone-900 mb-1 tracking-tight">500+</div>
<div className="text-sm text-stone-500 font-medium">Випускників</div>
</div>
<div>
<div className="text-4xl font-semibold text-stone-900 mb-1 tracking-tight">24</div>
<div className="text-sm text-stone-500 font-medium">Ментори</div>
</div>
<div>
<div className="text-4xl font-semibold text-stone-900 mb-1 tracking-tight">50+</div>
<div className="text-sm text-stone-500 font-medium">Проектів</div>
</div>
<div>
<div className="text-4xl font-semibold text-stone-900 mb-1 tracking-tight">4.9</div>
<div className="text-sm text-stone-500 font-medium">Рейтинг</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 fade-in-section" id="contact">
<div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-stone-200/40 border border-stone-100">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-3">Приєднуйтесь до SteamHeads</h2>
<p className="text-stone-500">Залиште заявку, і ми допоможемо підібрати ідеальну програму.</p>
</div>
<form className="space-y-6 max-w-md mx-auto">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider ml-1" htmlFor="name">Ім'я</label>
<input className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 block p-3 outline-none transition-all placeholder:text-stone-400" id="name" placeholder="Олексій" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider ml-1" htmlFor="phone">Телефон</label>
<input className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 block p-3 outline-none transition-all placeholder:text-stone-400" id="phone" placeholder="+380" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider ml-1" htmlFor="email">Email</label>
<input className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-400 block p-3 outline-none transition-all placeholder:text-stone-400" id="email" placeholder="hello@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider ml-1">Цікавить напрямок</label>
<div className="grid grid-cols-2 gap-3 mt-1">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="interest" type="radio"/>
<div className="w-full p-3 text-sm text-center bg-white border border-stone-200 rounded-xl peer-checked:bg-orange-50 peer-checked:border-orange-400 peer-checked:text-orange-700 text-stone-600 hover:bg-stone-50 transition-all">
                                Робототехніка
                            </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="w-full p-3 text-sm text-center bg-white border border-stone-200 rounded-xl peer-checked:bg-rose-50 peer-checked:border-rose-400 peer-checked:text-rose-700 text-stone-600 hover:bg-stone-50 transition-all">
                                Дизайн &amp; Арт
                            </div>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full text-white bg-stone-900 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-xl text-sm px-5 py-3.5 text-center transition-all duration-300 shadow-lg shadow-stone-300/50 hover:shadow-orange-200" type="submit">
                        Відправити заявку
                    </button>
<p className="mt-3 text-xs text-center text-stone-400">Ми не передаємо ваші дані третім особам.</p>
</div>
</form>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-6 mt-20">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center text-white">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-stone-900">STEAMHEADS</span>
</a>
<p className="text-sm text-stone-500 mb-4">Розвиваємо майбутнє через інноваційну освіту та креативність.</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Програми</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li className=""><a className="hover:text-orange-600 transition-colors" href="#">Робототехніка</a></li>
<li className=""><a className="hover:text-orange-600 transition-colors" href="#">Game Dev</a></li>
<li className=""><a className="hover:text-orange-600 transition-colors" href="#">Science Art</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Компанія</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Про нас</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Команда</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Блог</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Контакти</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li className="flex items-center gap-2"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Київ, вул. Інноваційна, 1</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> info@steamheads.ua</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +380 44 123 4567</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2023 SteamHeads. Всі права захищено.</p>
<div className="flex gap-6 text-xs text-stone-400">
<a className="hover:text-stone-600" href="#">Політика конфіденційності</a>
<a className="hover:text-stone-600" href="#">Умови використання</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
