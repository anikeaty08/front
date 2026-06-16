import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.querySelector('button.md\\:hidden').addEventListener('click', function() {
            const nav = document.querySelector('nav');
            if(nav.classList.contains('hidden')) {
                nav.classList.remove('hidden');
                nav.classList.add('flex', 'absolute', 'top-20', 'left-0', 'right-0', 'flex-col', 'bg-[#0A0C14]', 'border-b', 'border-white/10', 'py-4');
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('flex', 'absolute', 'top-20', 'left-0', 'right-0', 'flex-col', 'bg-[#0A0C14]', 'border-b', 'border-white/10', 'py-4');
            }
        });
        
        // Close mobile menu on click
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                const nav = document.querySelector('nav');
                if(window.innerWidth < 768) {
                    nav.classList.add('hidden');
                    nav.classList.remove('flex', 'absolute', 'top-20', 'left-0', 'right-0', 'flex-col', 'bg-[#0A0C14]', 'border-b', 'border-white/10', 'py-4');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed z-50 bg-[#0A0C14]/90 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="md:px-10 lg:px-20 flex h-20 max-w-[1200px] mx-auto px-5 items-center justify-between">
<a className="text-white text-xl md:text-2xl tracking-tighter uppercase font-manrope font-medium" href="#">
                Triple
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/80 hover:text-white transition-colors font-sans" href="#services">Услуги</a>
<a className="text-sm text-white/80 hover:text-white transition-colors font-sans" href="#packages">Пакеты</a>
<a className="text-sm text-white/80 hover:text-white transition-colors font-sans" href="#works">Работы</a>
<a className="text-sm text-white/80 hover:text-white transition-colors font-sans" href="#about">О нас</a>
<a className="text-sm text-white/80 hover:text-white transition-colors font-sans" href="#contacts">Контакты</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center bg-[#1A35E0] hover:bg-[#2B4AFF] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-200 gap-2 font-sans" href="https://t.me/triple">
                Написать <iconify-icon className="" height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</a>

<button className="md:hidden text-white p-2">
<iconify-icon height="1.5em" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="1.5em"></iconify-icon>
</button>
</div>
</header>

<section className="relative overflow-hidden text-white bg-[#0A0C14] pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center min-h-[90vh]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[400px] bg-[#2B4AFF]/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1A35E0]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-manrope tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 leading-[1.1] sm:leading-[1.05] max-w-4xl mx-auto">
            Мы можем создать для вас:<br className="hidden sm:block"/> сайты, воронки, ботов, дизайн, брендинг.
        </h1>

<p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mb-12 font-normal font-sans mx-auto">
            Берём проект целиком — от стратегии до реализации.<br className="hidden sm:block"/>
            Вы занимаетесь бизнесом, мы строим его digital-основу.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto relative group">
<a className="relative inline-flex items-center justify-center bg-white text-[#0A0C14] hover:bg-gray-200 text-sm sm:text-base font-medium px-8 py-3.5 sm:px-10 sm:py-4 rounded-full transition-all duration-300 gap-2 w-full sm:w-auto font-sans shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]" href="#contacts">
                Обсудить проект <iconify-icon className="" height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-2 text-[11px] sm:text-xs text-[#9CA3AF] font-normal px-6 sm:px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
<span className="font-sans tracking-wide">Отвечаем в течение часа</span>
</div>
<div className="hidden sm:block w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="font-sans tracking-wide">Работаем с 2021 года</span>
</div>
<div className="hidden sm:block w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="font-sans tracking-wide">Беларусь и СНГ</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A35E0] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">

<div className="mb-16 md:mb-20 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A35E0]/[0.08] border border-[#1A35E0]/15 text-[#1A35E0] text-[13px] font-medium tracking-wide mb-6 font-sans shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A35E0] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A35E0]"></span>
</span>
                Для кого мы работаем
            </div>
<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-[#111827] leading-[1.15] font-manrope font-medium mb-6">
                Снимаем головную боль с digital.<br/>
<span className="text-[#9CA3AF]">Вы делаете продукт, мы — конверсию.</span>
</h2>
<p className="text-base md:text-[17px] text-[#6B7280] leading-relaxed font-sans max-w-2xl">
                Берем на себя всю техническую и визуальную рутину. Создаем инфраструктуру, которая приносит деньги, пока вы сфокусированы на своем бизнесе.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative flex flex-col h-full rounded-[24px] bg-white border border-gray-200/80 p-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(26,53,224,0.1)] hover:border-[#1A35E0]/20 transition-all duration-500 hover:-translate-y-1">
<div className="p-6 md:p-8 flex-grow">

<div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F4F6FF] to-white border border-[#1A35E0]/10 shadow-sm flex items-center justify-center text-[#1A35E0] mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg className="lucide lucide-users" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl md:text-[22px] tracking-tight text-[#111827] font-manrope font-medium mb-6">Онлайн-эксперты<br/>и коучи</h3>
<div className="flex items-start gap-3">
<div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></div>
<p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-sans m-0">
                            Запуск на носу, а инфраструктуры нет. Или есть сайт, но он не работает — люди заходят и уходят, не оставив контакт.
                        </p>
</div>
</div>

<div className="p-6 md:p-8 bg-[#F9FAFB] rounded-[18px] border border-gray-100 group-hover:bg-[#F4F6FF]/60 transition-colors duration-500 relative overflow-hidden mt-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A35E0]/0 via-[#1A35E0]/30 to-[#1A35E0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex gap-2 text-[12px] uppercase font-semibold text-[#1A35E0] tracking-wider font-sans mb-3 gap-x-2 gap-y-2 items-center">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
    Решение
</div>
<p className="text-[14px] md:text-[15px] text-[#111827] leading-relaxed font-sans font-medium m-0">
                        Делаем продающие лендинги под запуски и автоматизацию — так чтобы система работала, пока вы заняты контентом.
                    </p>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-[24px] bg-white border border-gray-200/80 p-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(26,53,224,0.1)] hover:border-[#1A35E0]/20 transition-all duration-500 hover:-translate-y-1">
<div className="p-6 md:p-8 flex-grow">

<div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F4F6FF] to-white border border-[#1A35E0]/10 shadow-sm flex items-center justify-center text-[#1A35E0] mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg className="lucide lucide-building-2" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
</div>
<h3 className="text-xl md:text-[22px] tracking-tight text-[#111827] font-manrope font-medium mb-6">Малый и средний<br/>бизнес</h3>
<div className="flex items-start gap-3">
<div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></div>
<p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-sans m-0">
                            Сайт есть, но он устарел и не приносит заявок. Конкуренты выглядят убедительнее — и клиенты уходят к ним.
                        </p>
</div>
</div>

<div className="p-6 md:p-8 bg-[#F9FAFB] rounded-[18px] border border-gray-100 group-hover:bg-[#F4F6FF]/60 transition-colors duration-500 relative overflow-hidden mt-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A35E0]/0 via-[#1A35E0]/30 to-[#1A35E0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex gap-2 text-[12px] uppercase font-semibold text-[#1A35E0] tracking-wider font-sans mb-3 gap-x-2 gap-y-2 items-center">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
    Решение
</div>
<p className="text-[14px] md:text-[15px] text-[#111827] leading-relaxed font-sans font-medium m-0">
                        Строим digital-присутствие, которое работает на вас: сайт, реклама, контент — как единая система, а не набор страниц.
                    </p>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-[24px] bg-white border border-gray-200/80 p-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(26,53,224,0.1)] hover:border-[#1A35E0]/20 transition-all duration-500 hover:-translate-y-1">
<div className="p-6 md:p-8 flex-grow">

<div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F4F6FF] to-white border border-[#1A35E0]/10 shadow-sm flex items-center justify-center text-[#1A35E0] mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="rocket" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(26, 53, 224)'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-xl md:text-[22px] tracking-tight text-[#111827] font-manrope font-medium mb-6">Стартапы и<br/>продукты</h3>
<div className="flex items-start gap-3">
<div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></div>
<p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-sans m-0">
                            Нужно быстро выйти на рынок: показать продукт инвесторам, собрать первых пользователей, проверить гипотезу.
                        </p>
</div>
</div>

<div className="p-6 md:p-8 bg-[#F9FAFB] rounded-[18px] border border-gray-100 group-hover:bg-[#F4F6FF]/60 transition-colors duration-500 relative overflow-hidden mt-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A35E0]/0 via-[#1A35E0]/30 to-[#1A35E0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex gap-2 text-[12px] uppercase font-semibold text-[#1A35E0] tracking-wider font-sans mb-3 gap-x-2 gap-y-2 items-center">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
    Решение 
</div>
<p className="text-[14px] md:text-[15px] text-[#111827] leading-relaxed font-sans font-medium m-0">
                        Делаем MVP-сайты и воронки под первые продажи. Понимаем product-логику — не придётся объяснять с нуля.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden" id="services">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A35E0]/[0.03] blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A35E0]/[0.02] blur-[100px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">

<div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#1A35E0] text-[13px] font-medium tracking-wide mb-6 font-sans shadow-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                Наши Услуги
            </div>
<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-[#111827] leading-[1.15] font-manrope font-medium mb-6">
                Всё, что нужно для роста в digital — <br className="hidden md:block"/><span className="text-[#9CA3AF]">в одних руках.</span>
</h2>
<p className="text-[15px] md:text-[17px] text-[#6B7280] leading-relaxed font-sans max-w-2xl mx-auto">
                Снимаем головную боль с digital-задач. Вы занимаетесь развитием бизнеса, а мы берем на себя всю техническую, смысловую и визуальную рутину.
            </p>
</div>

<div className="mb-16 md:mb-20">

<div className="flex items-center gap-4 mb-8">
<h3 className="text-lg md:text-xl font-manrope font-medium text-[#111827] tracking-tight whitespace-nowrap">Ключевые направления</h3>
<div className="h-[1px] bg-gradient-to-r from-gray-200 to-transparent flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative flex flex-col h-full rounded-[24px] bg-white border border-gray-200/80 p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(26,53,224,0.1)] hover:border-[#1A35E0]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A35E0]/[0.05] to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F4F6FF] to-white border border-[#1A35E0]/10 shadow-sm flex items-center justify-center text-[#1A35E0] mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
</div>
<h3 className="text-xl md:text-[22px] tracking-tight text-[#111827] font-manrope font-medium mb-3">Сайты и лендинги</h3>
<p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-sans mb-6 flex-grow">Лендинг под запуск, корпоративный сайт, страница продукта — от структуры и текстов до готовой публикации.</p>
<div className="bg-[#F9FAFB] p-4 md:p-5 rounded-[16px] border border-gray-100 group-hover:bg-[#F4F6FF]/60 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#1A35E0]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-[13px] md:text-[14px] text-[#111827] font-medium font-sans leading-snug m-0">Не просто красиво. Так чтобы посетитель стал лидом.</p>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-[24px] bg-white border border-gray-200/80 p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(26,53,224,0.1)] hover:border-[#1A35E0]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A35E0]/[0.05] to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F4F6FF] to-white border border-[#1A35E0]/10 shadow-sm flex items-center justify-center text-[#1A35E0] mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-xl md:text-[22px] tracking-tight text-[#111827] font-manrope font-medium mb-3">Telegram-боты и воронки</h3>
<p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-sans mb-6 flex-grow">Автоматический сбор заявок, квалификация лидов, продуманные цепочки прогрева аудитории перед покупкой.</p>
<div className="bg-[#F9FAFB] p-4 md:p-5 rounded-[16px] border border-gray-100 group-hover:bg-[#F4F6FF]/60 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#1A35E0]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-[13px] md:text-[14px] text-[#111827] font-medium font-sans leading-snug m-0">Заявки больше не теряются и не залёживаются непрочитанными.</p>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-[24px] bg-white border border-gray-200/80 p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(26,53,224,0.1)] hover:border-[#1A35E0]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1A35E0]/[0.05] to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F4F6FF] to-white border border-[#1A35E0]/10 shadow-sm flex items-center justify-center text-[#1A35E0] mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
</div>
<h3 className="text-xl md:text-[22px] tracking-tight text-[#111827] font-manrope font-medium mb-3">Копирайтинг и стратегия</h3>
<p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-sans mb-6 flex-grow">Оффер под запуск, продающие тексты для сайта, прогревающие посты в соцсети и скрипты для отдела продаж.</p>
<div className="bg-[#F9FAFB] p-4 md:p-5 rounded-[16px] border border-gray-100 group-hover:bg-[#F4F6FF]/60 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#1A35E0]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-[13px] md:text-[14px] text-[#111827] font-medium font-sans leading-snug m-0">Текст — это не место для заполнения пустоты. Это главный инструмент конверсии.</p>
</div>
</div>
</div>
</div>

<div className="mb-16 md:mb-20">

<div className="flex items-center gap-4 mb-8">
<h3 className="text-lg md:text-xl font-manrope font-medium text-[#111827] tracking-tight whitespace-nowrap">Комплексно с командой</h3>
<div className="h-[1px] bg-gradient-to-r from-gray-200 to-transparent flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group p-5 md:p-6 rounded-[20px] bg-white border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#1A35E0]/30 hover:shadow-[0_10px_30px_rgba(26,53,224,0.06)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-[12px] bg-gray-50 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#1A35E0] group-hover:bg-[#F4F6FF] transition-colors duration-300 mb-4 border border-gray-100 group-hover:border-[#1A35E0]/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h4 className="text-[15px] md:text-base font-medium text-[#111827] mb-2 font-sans tracking-tight">Дизайн и брендинг</h4>
<p className="text-[13px] text-[#6B7280] leading-relaxed font-sans m-0">Логотип, фирменный стиль, презентации. Визуальный язык, работающий на доверие.</p>
</div>

<div className="group p-5 md:p-6 rounded-[20px] bg-white border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#1A35E0]/30 hover:shadow-[0_10px_30px_rgba(26,53,224,0.06)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-[12px] bg-gray-50 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#1A35E0] group-hover:bg-[#F4F6FF] transition-colors duration-300 mb-4 border border-gray-100 group-hover:border-[#1A35E0]/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h4 className="text-[15px] md:text-base font-medium text-[#111827] mb-2 font-sans tracking-tight">Таргетированная реклама</h4>
<p className="text-[13px] text-[#6B7280] leading-relaxed font-sans m-0">ВКонтакте, Instagram, TikTok, Telegram Ads. Настройка, оптимизация под воронку.</p>
</div>

<div className="group p-5 md:p-6 rounded-[20px] bg-white border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#1A35E0]/30 hover:shadow-[0_10px_30px_rgba(26,53,224,0.06)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-[12px] bg-gray-50 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#1A35E0] group-hover:bg-[#F4F6FF] transition-colors duration-300 mb-4 border border-gray-100 group-hover:border-[#1A35E0]/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
</div>
<h4 className="text-[15px] md:text-base font-medium text-[#111827] mb-2 font-sans tracking-tight">SMM — соцсети</h4>
<p className="text-[13px] text-[#6B7280] leading-relaxed font-sans m-0">Контент-план, посты, сторис, рост аудитории. Присутствие, которое строит доверие.</p>
</div>

<div className="group p-5 md:p-6 rounded-[20px] bg-white border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#1A35E0]/30 hover:shadow-[0_10px_30px_rgba(26,53,224,0.06)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-[12px] bg-gray-50 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#1A35E0] group-hover:bg-[#F4F6FF] transition-colors duration-300 mb-4 border border-gray-100 group-hover:border-[#1A35E0]/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M17 3v18"></path><path d="M3 7h18"></path><path d="M3 17h18"></path></svg>
</div>
<h4 className="text-[15px] md:text-base font-medium text-[#111827] mb-2 font-sans tracking-tight">Видео и UGC-контент</h4>
<p className="text-[13px] text-[#6B7280] leading-relaxed font-sans m-0">Короткие видео для соцсетей, обзоры, прогревы под запуски. Форматы, которые смотрят.</p>
</div>
</div>
</div>

<div className="mt-10 md:mt-16 bg-[#0A0C14] rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 border border-[#1A35E0]/20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(26,53,224,0.3)]">

<div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(43,74,255,0.15)_0,rgba(10,12,20,0)_60%)] pointer-events-none blur-3xl"></div>
<div className="absolute bottom-[-50%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(43,74,255,0.1)_0,rgba(10,12,20,0)_60%)] pointer-events-none blur-2xl"></div>
<div className="relative z-10 w-full md:max-w-xl text-left">
<h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 font-manrope font-medium text-white">Не знаете с чего начать?</h3>
<p className="text-[15px] md:text-base text-[#9CA3AF] font-sans leading-relaxed m-0">Расскажите о задаче — предложим оптимальное решение. Без лишних созвонов и коммерческих предложений на 40 страниц.</p>
</div>
<a className="relative z-10 w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-200 text-[#0A0C14] text-[15px] md:text-base font-medium px-8 py-4 rounded-xl transition-all duration-300 gap-2 whitespace-nowrap shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] font-sans" href="https://t.me/triple">
                Написать в Telegram 
                <svg className="text-[#0A0C14]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="md:py-20 lg:py-24 bg-white pt-12 pb-12" id="packages">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">
<h2 className="md:text-3xl lg:text-4xl md:mb-12 text-2xl font-medium text-[#1F2937] tracking-tight font-manrope max-w-2xl mb-8">
            Три уровня входа.<br/>Один подрядчик — полная ответственность.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-start">

<div className="p-5 md:p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white flex flex-col h-full">
<div className="text-[11px] md:text-xs font-semibold tracking-wider text-[#9CA3AF] uppercase mb-2 font-sans">Старт</div>
<h3 className="text-lg md:text-xl lg:text-2xl tracking-tight mb-2 font-manrope font-medium">Онлайн-присутствие с нуля</h3>
<p className="text-[13px] md:text-sm text-[#4B5563] mb-5 font-sans leading-snug">Для тех, кто выходит в digital или обновляет устаревшую основу.</p>
<ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow text-[13px] md:text-sm text-[#1F2937]">
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Лендинг под ключ
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Telegram-бот для сбора заявок
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Базовая SEO-настройка
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Консультация по аналитике
                    </li>
</ul>
<a className="w-full inline-flex items-center justify-center bg-transparent border-[1.5px] border-[#1A35E0] text-[#1A35E0] hover:bg-[#F4F6FF] text-[13px] md:text-sm font-medium px-4 py-2.5 md:py-3 rounded-md transition-colors duration-200 gap-2 font-sans" href="https://t.me/triple">
                    Обсудить <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>

<div className="p-5 md:p-6 lg:p-8 rounded-2xl border-2 border-[#1A35E0] bg-[#F4F6FF]/30 flex flex-col h-full relative shadow-[0_8px_30px_rgba(26,53,224,0.08)] mt-3 md:mt-0">
<div className="absolute -top-3 left-6 bg-[#1A35E0] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 font-sans">
<iconify-icon icon="solar:star-fall-minimalistic-linear" width="1em"></iconify-icon> Популярный
                </div>
<div className="text-[11px] md:text-xs font-semibold tracking-wider text-[#1A35E0] uppercase mb-2 mt-1 font-sans">Запуск</div>
<h3 className="text-lg md:text-xl lg:text-2xl tracking-tight mb-2 font-manrope font-medium">Продукт готов к продажам</h3>
<p className="text-[13px] md:text-sm text-[#4B5563] mb-5 font-sans leading-snug">Для экспертов и команд перед стартом курса, наставничества или нового продукта.</p>
<ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow text-[13px] md:text-sm text-[#1F2937]">
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Продающий лендинг с квизом и страницей «Спасибо»
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Telegram-воронка прогрева
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Копирайтинг: оффер, тексты, серия постов
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Поддержка в день запуска
                    </li>
</ul>
<a className="w-full inline-flex items-center justify-center bg-[#1A35E0] hover:bg-[#2B4AFF] text-white text-[13px] md:text-sm font-medium px-4 py-2.5 md:py-3 rounded-md transition-colors duration-200 gap-2 font-sans" href="https://t.me/triple">
                    Обсудить <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>

<div className="p-5 md:p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white flex flex-col h-full">
<div className="text-[11px] md:text-xs font-semibold tracking-wider text-[#9CA3AF] uppercase mb-2 font-sans">Рост</div>
<h3 className="text-lg md:text-xl lg:text-2xl tracking-tight mb-2 font-manrope font-medium">Стабильный поток клиентов</h3>
<p className="text-[13px] md:text-sm text-[#4B5563] mb-5 font-sans leading-snug">Для бизнеса, которому нужна система привлечения — а не разовая акция.</p>
<ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow text-[13px] md:text-sm text-[#1F2937]">
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Сайт или лендинг под ключ
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Воронка: бот + прогрев + автоответы
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        Настройка и ведение рекламы
                    </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] shrink-0 mt-0.5" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                        SMM: ведение одной соцсети
                    </li>
</ul>
<a className="w-full inline-flex items-center justify-center bg-transparent border-[1.5px] border-[#1A35E0] text-[#1A35E0] hover:bg-[#F4F6FF] text-[13px] md:text-sm font-medium px-4 py-2.5 md:py-3 rounded-md transition-colors duration-200 gap-2 font-sans" href="https://t.me/triple">
                    Обсудить <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 lg:py-20 text-white bg-[#0A0C14]">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">
<h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight mb-3 md:mb-4 max-w-2xl font-manrope font-medium leading-tight">
                Не агентство с очередью.<br/>Не фрилансер, который пропадает.
            </h2>
<p className="text-sm md:text-base lg:text-lg text-[#9CA3AF] mb-8 md:mb-12 font-manrope font-medium">
                Команда, где вы всегда знаете что происходит.
            </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 md:mb-12">

<div className="p-5 md:p-6 lg:p-7 rounded-xl border border-white/10 bg-white/5">
<h3 className="text-base md:text-lg font-medium text-[#9CA3AF] mb-3 md:mb-4 flex items-center gap-2 font-sans leading-snug">
<iconify-icon icon="solar:buildings-2-linear"></iconify-icon> Большое агентство
                    </h3>
<ul className="space-y-2.5 md:space-y-3 text-[13px] md:text-sm text-[#9CA3AF]/80 font-light leading-snug">
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Вы — один из 30 клиентов в очереди
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Три недели согласований до старта
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Никто не видит картину целиком
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Красивая презентация вместо результата
                        </li>
</ul>
</div>

<div className="p-5 md:p-6 lg:p-7 rounded-xl border border-white/10 bg-white/5">
<h3 className="text-base md:text-lg font-medium text-[#9CA3AF] mb-3 md:mb-4 flex items-center gap-2 font-sans leading-snug">
<iconify-icon className="" icon="solar:user-linear"></iconify-icon> Случайный фрилансер
                    </h3>
<ul className="space-y-2.5 md:space-y-3 text-[13px] md:text-sm text-[#9CA3AF]/80 font-light leading-snug">
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Сроки — примерно
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Пропадает после первой правки
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Делает «красиво», не думая о конверсии
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<span className="text-white/30 mt-0.5 font-sans">—</span> Никаких гарантий
                        </li>
</ul>
</div>

<div className="p-5 md:p-6 lg:p-7 rounded-xl border border-[#1A35E0] bg-[#1A35E0]/10 relative shadow-[0_0_40px_rgba(26,53,224,0.1)]">
<div className="absolute -top-2.5 right-4 md:right-5 bg-[#1A35E0] text-white text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded font-sans">TRIPLE</div>
<h3 className="text-base md:text-lg font-medium text-white mb-3 md:mb-4 flex items-center gap-2 font-sans leading-snug">
<iconify-icon className="text-[#1A35E0]" icon="solar:verified-check-linear"></iconify-icon> Подход Triple
                    </h3>
<ul className="space-y-2.5 md:space-y-3 text-[13px] md:text-sm text-white font-light leading-snug">
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] mt-0.5 min-w-[1.2em]" icon="solar:check-read-linear"></iconify-icon> Один контакт — полная картина
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] mt-0.5 min-w-[1.2em]" icon="solar:check-read-linear"></iconify-icon> Сроки фиксируются и соблюдаются
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] mt-0.5 min-w-[1.2em]" icon="solar:check-read-linear"></iconify-icon> Понимаем воронки и конверсию
                        </li>
<li className="flex items-start gap-2.5 font-sans">
<iconify-icon className="text-[#1A35E0] mt-0.5 min-w-[1.2em]" icon="solar:check-read-linear"></iconify-icon> Гарантия возврата при срыве сроков
                        </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-white/10 border-t pt-8 gap-x-6 gap-y-6">
<div className="">
<h4 className="text-sm md:text-base font-normal text-white mb-1.5 flex items-center gap-2 font-sans leading-snug">
<svg className="text-[#1A35E0] shrink-0 lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Скорость без спешки
                    </h4>
<p className="text-[13px] md:text-sm text-[#9CA3AF] font-light font-sans leading-snug">Лендинг — за 4 дня. Полный сайт — за неделю. Это не магия, это процесс отточенный за годы практики.</p>
</div>
<div className="">
<h4 className="text-sm md:text-base font-normal text-white mb-1.5 flex items-center gap-2 font-sans leading-snug">
<svg className="text-[#1A35E0] shrink-0 lucide lucide-target" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Специализация
                    </h4>
<p className="text-[13px] md:text-sm text-[#9CA3AF] font-light font-sans leading-snug">Мы не беремся за всё подряд. Мы знаем digital-продвижение изнутри — знаем что работает, что нет и почему.</p>
</div>
<div className="">
<h4 className="text-sm md:text-base font-normal text-white mb-1.5 flex items-center gap-2 font-sans leading-snug">
<svg className="shrink-0 lucide lucide-handshake w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(26, 53, 224)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Одна точка входа
                    </h4>
<p className="text-[13px] md:text-sm text-[#9CA3AF] font-light font-sans leading-snug">Вы не координируете пять разных подрядчиков. Вы работаете с нами — мы берём на себя всё остальное.</p>
</div>
<div className="">
<h4 className="text-sm md:text-base font-normal text-white mb-1.5 flex items-center gap-2 font-sans leading-snug">
<svg className="text-[#1A35E0] shrink-0 lucide lucide-cpu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg> Современный подход
                    </h4>
<p className="text-[13px] md:text-sm text-[#9CA3AF] font-light font-sans leading-snug">Используем AI-инструменты в работе — не как замену экспертизе, а как способ делать быстрее и точнее.</p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-[#F9FAFB] border-t border-gray-100 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">

<div className="w-full rounded-xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">

<div className="flex flex-col space-y-1.5 p-6 md:p-8 lg:p-10 border-b border-gray-100">
<h3 className="text-xl md:text-2xl lg:text-3xl font-manrope font-medium leading-none tracking-tight text-[#1F2937]">
                    От первого сообщения до результата — пять шагов.
                </h3>
<p className="text-[13px] md:text-sm text-[#4B5563] font-sans mt-2">
                    Прозрачный процесс сотрудничества. Вы всегда знаете, на каком мы этапе и что будет дальше.
                </p>
</div>

<div className="p-6 md:p-8 lg:p-10 lg:pt-12">
<div className="relative">

<div className="hidden lg:block absolute left-[10%] right-[10%] top-[8px] h-[1px] bg-gray-200"></div>
<div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-6">

<div className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 w-full lg:w-1/5 group">

<div className="lg:hidden absolute left-[9px] top-[18px] -bottom-[32px] w-[1px] bg-gray-200 group-hover:bg-[#1A35E0]/30 transition-colors duration-300"></div>

<div className="relative z-10 shrink-0 h-[18px] w-[18px] lg:h-4 lg:w-4 rounded-full border-[2px] border-white bg-[#1A35E0] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 shadow-sm mt-[3px] lg:mt-0">
<div className="h-1.5 w-1.5 lg:h-1 lg:w-1 rounded-full bg-white"></div>
</div>

<div className="flex-1 lg:mt-5">
<div className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#1A35E0] px-2.5 py-0.5 text-[11px] font-medium text-white transition-colors hover:bg-[#1A35E0]/80 mb-2.5 shadow-sm">
                                    Шаг 01
                                </div>
<h4 className="text-sm md:text-base font-medium text-[#1F2937] font-manrope mb-1.5 tracking-tight">Разговор о задаче</h4>
<p className="text-[13px] text-[#4B5563] font-sans leading-relaxed">
                                    30 минут, чтобы разобраться в проекте: кто ваша аудитория, какой продукт, что уже пробовали. Никаких брифов на десять страниц.
                                </p>
</div>
</div>

<div className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 w-full lg:w-1/5 group">

<div className="lg:hidden absolute left-[9px] top-[18px] -bottom-[32px] w-[1px] bg-gray-200 group-hover:bg-[#1A35E0]/30 transition-colors duration-300"></div>

<div className="relative z-10 shrink-0 h-[18px] w-[18px] lg:h-4 lg:w-4 rounded-full border-[2px] border-white bg-[#1A35E0] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 shadow-sm mt-[3px] lg:mt-0">
<div className="h-1.5 w-1.5 lg:h-1 lg:w-1 rounded-full bg-white"></div>
</div>

<div className="flex-1 lg:mt-5">
<div className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#1A35E0] px-2.5 py-0.5 text-[11px] font-medium text-white transition-colors hover:bg-[#1A35E0]/80 mb-2.5 shadow-sm">
                                    Шаг 02
                                </div>
<h4 className="text-sm md:text-base font-medium text-[#1F2937] font-manrope mb-1.5 tracking-tight">Структура и тексты</h4>
<p className="text-[13px] text-[#4B5563] font-sans leading-relaxed">
                                    Предлагаем структуру и пишем тексты. Показываем, обсуждаем, согласовываем — до того как начнётся дизайн.
                                </p>
</div>
</div>

<div className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 w-full lg:w-1/5 group">

<div className="lg:hidden absolute left-[9px] top-[18px] -bottom-[32px] w-[1px] bg-gray-200 group-hover:bg-[#1A35E0]/30 transition-colors duration-300"></div>

<div className="relative z-10 shrink-0 h-[18px] w-[18px] lg:h-4 lg:w-4 rounded-full border-[2px] border-white bg-[#1A35E0] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 shadow-sm mt-[3px] lg:mt-0">
<div className="h-1.5 w-1.5 lg:h-1 lg:w-1 rounded-full bg-white"></div>
</div>

<div className="flex-1 lg:mt-5">
<div className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#1A35E0] px-2.5 py-0.5 text-[11px] font-medium text-white transition-colors hover:bg-[#1A35E0]/80 mb-2.5 shadow-sm">
                                    Шаг 03
                                </div>
<h4 className="text-sm md:text-base font-medium text-[#1F2937] font-manrope mb-1.5 tracking-tight">Дизайн и реализация</h4>
<p className="text-[13px] text-[#4B5563] font-sans leading-relaxed">
                                    Верстаем, собираем, настраиваем. Показываем в процессе — не финальную версию через две недели тишины.
                                </p>
</div>
</div>

<div className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 w-full lg:w-1/5 group">

<div className="lg:hidden absolute left-[9px] top-[18px] -bottom-[32px] w-[1px] bg-gray-200 group-hover:bg-[#1A35E0]/30 transition-colors duration-300"></div>

<div className="relative z-10 shrink-0 h-[18px] w-[18px] lg:h-4 lg:w-4 rounded-full border-[2px] border-white bg-gray-200 group-hover:bg-[#1A35E0] flex items-center justify-center transition-colors duration-300 shadow-sm mt-[3px] lg:mt-0">
<div className="h-1.5 w-1.5 lg:h-1 lg:w-1 rounded-full bg-white"></div>
</div>

<div className="flex-1 lg:mt-5">
<div className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#1F2937] transition-colors group-hover:border-[#1A35E0] group-hover:text-[#1A35E0] mb-2.5">
                                    Шаг 04
                                </div>
<h4 className="text-sm md:text-base font-medium text-[#1F2937] font-manrope mb-1.5 tracking-tight">Правки</h4>
<p className="text-[13px] text-[#4B5563] font-sans leading-relaxed">
                                    Два раунда правок включены в работу. Без дополнительных счётов за каждое изменение.
                                </p>
</div>
</div>

<div className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-0 w-full lg:w-1/5 group">

<div className="relative z-10 shrink-0 h-[18px] w-[18px] lg:h-4 lg:w-4 rounded-full border-[2px] border-white bg-gray-200 group-hover:bg-[#1A35E0] flex items-center justify-center transition-colors duration-300 shadow-sm mt-[3px] lg:mt-0">
<div className="h-1.5 w-1.5 lg:h-1 lg:w-1 rounded-full bg-white"></div>
</div>

<div className="flex-1 lg:mt-5">
<div className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#1F2937] transition-colors group-hover:border-[#1A35E0] group-hover:text-[#1A35E0] mb-2.5">
                                    Шаг 05
                                </div>
<h4 className="text-sm md:text-base font-medium text-[#1F2937] font-manrope mb-1.5 tracking-tight">Сдача и поддержка</h4>
<p className="text-[13px] text-[#4B5563] font-sans leading-relaxed">
                                    Всё работает, передаём доступы. После сдачи разбираем аналитику — что смотреть, на что обращать внимание.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 bg-[#F9FAFB]" id="works">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">
<h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6 md:mb-10 text-[#1F2937] font-manrope font-medium">
                Проекты говорят сами за себя.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgba(26,53,224,0.06)] transition-all duration-300">
<div className="aspect-[2.5/1] md:aspect-[2/1] overflow-hidden flex bg-gray-100 relative items-center justify-center">
<iconify-icon className="text-gray-300" icon="solar:gallery-minimalistic-linear" width="2.5em"></iconify-icon>

</div>
<div className="p-5 md:p-6">
<div className="text-[11px] md:text-xs font-semibold tracking-wider text-[#1A35E0] uppercase mb-1.5 font-sans">Онлайн-коучинг</div>
<h3 className="text-lg md:text-xl tracking-tight mb-2 md:mb-3 font-manrope font-medium">Воронка для запуска наставничества</h3>
<div className="space-y-1.5 text-[13px] md:text-sm mb-4 md:mb-5">
<p className="font-sans leading-snug"><span className="text-[#9CA3AF] font-sans">Задача:</span> Автоматизировать сбор заявок и прогрев аудитории перед вебинаром.</p>
<p className="font-sans leading-snug"><span className="text-[#9CA3AF] font-sans">Сделали:</span> Продающий лендинг + Telegram-бот с цепочкой из 5 сообщений.</p>
</div>
<a className="inline-flex items-center text-[13px] md:text-sm font-medium text-[#1A35E0] hover:text-[#2B4AFF] gap-1 group-hover:gap-2 transition-all font-sans" href="#">
                            Смотреть проект <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgba(26,53,224,0.06)] transition-all duration-300">
<div className="aspect-[2.5/1] md:aspect-[2/1] bg-gray-100 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="solar:gallery-minimalistic-linear" width="2.5em"></iconify-icon>

</div>
<div className="p-5 md:p-6">
<div className="text-[11px] md:text-xs font-semibold tracking-wider text-[#1A35E0] uppercase mb-1.5 font-sans">B2B Услуги</div>
<h3 className="text-lg md:text-xl tracking-tight mb-2 md:mb-3 font-manrope font-medium">Корпоративный сайт юридической фирмы</h3>
<div className="space-y-1.5 text-[13px] md:text-sm mb-4 md:mb-5">
<p className="font-sans leading-snug"><span className="text-[#9CA3AF] font-sans">Задача:</span> Обновить устаревший сайт, повысить доверие, выделить экспертизу.</p>
<p className="font-sans leading-snug"><span className="text-[#9CA3AF] font-sans">Сделали:</span> Строгий многостраничный сайт с SEO-оптимизацией и блогом.</p>
</div>
<a className="inline-flex items-center text-[13px] md:text-sm font-medium text-[#1A35E0] hover:text-[#2B4AFF] gap-1 group-hover:gap-2 transition-all font-sans" href="#">
                            Смотреть проект <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-[#1A35E0] hover:bg-[#2B4AFF] text-white text-[13px] md:text-sm font-medium px-6 py-3 md:px-8 md:py-3.5 rounded-md transition-all duration-200 gap-2 font-sans" href="https://t.me/triple">
                    Хочу такой же результат <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>
</section>


<section className="md:py-32 overflow-visible bg-white border-gray-100 border-t pt-24 pb-24 relative" id="about">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,rgba(26,53,224,0.03)_0,rgba(255,255,255,0)_70%)] rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,rgba(26,53,224,0.02)_0,rgba(255,255,255,0)_70%)] rounded-full blur-3xl pointer-events-none"></div>
<div className="md:px-10 lg:px-20 z-10 max-w-[1200px] mr-auto ml-auto pr-5 pl-5 relative">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

<div className="w-full lg:w-[45%] lg:sticky lg:top-32 order-2 lg:order-1">
<div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-black/5 group">
<img alt="Арсений - Triple" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>

<div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/85 backdrop-blur-md border border-white/60 p-4 sm:p-5 rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between transition-transform duration-500 hover:-translate-y-1">
<div>
<p className="font-manrope text-base sm:text-lg font-semibold text-[#111827] leading-tight tracking-tight mb-0.5">Арсений</p>
<p className="text-[13px] text-[#4B5563] font-sans leading-tight">Продюсер и Founder</p>
</div>
<a className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#1A35E0] hover:bg-[#1A35E0] hover:text-white transition-colors duration-300 cursor-pointer" href="https://t.me/triple">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] order-1 lg:order-2 pt-2 lg:pt-6">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A35E0]/[0.05] border border-[#1A35E0]/10 text-[#1A35E0] text-[13px] font-medium tracking-wide mb-6 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A35E0] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A35E0]"></span>
</span>
                    Знакомство
                </div>
<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight mb-8 text-[#111827] font-manrope font-semibold leading-[1.1]">
                    За Triple стоит человек,<br/>который отвечает за результат лично.
                </h2>
<div className="space-y-6 text-[15px] md:text-base text-[#4B5563] mb-12 font-sans">
<p className="text-lg md:text-xl font-medium text-[#111827] leading-snug">
                        Моя задача — сделать так, чтобы ваш digital-инструмент приносил деньги, а не просто «красиво висел в интернете».
                    </p>
<p className="leading-relaxed">
                        Я начинал с разработки лендингов своими руками. За годы практики прошёл путь до управления комплексными проектами: от веб-сервисов и мобильных приложений до сборки команд под нестандартные задачи стартапов и B2B-сегмента.
                    </p>
<div className="relative py-5 pl-6 pr-4 my-8 border-l-2 border-[#1A35E0] bg-gradient-to-r from-[#1A35E0]/[0.03] to-transparent rounded-r-2xl">
<p className="leading-relaxed text-[#1F2937] font-medium m-0">
                            Сейчас я выступаю как продюсер. Вы получаете <span className="text-[#1A35E0]">одну точку входа</span>: вам не нужно координировать дизайнера, копирайтера и программиста. Вы общаетесь со мной, а я обеспечиваю команду, полную прозрачность процессов и финальный результат.
                        </p>
</div>
</div>

<h3 className="text-lg font-manrope font-semibold text-[#111827] mb-5 tracking-tight">Чем я могу быть полезен:</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-4 gap-y-4">

<div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(26,53,224,0.06)] hover:border-[#1A35E0]/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-[#1A35E0]/[0.05] text-[#1A35E0] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1A35E0] group-hover:text-white transition-all duration-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<h4 className="text-[15px] font-semibold text-[#111827] tracking-tight font-sans mb-1.5">Удалённо, весь мир</h4>
<p className="text-[13px] text-[#4B5563] leading-relaxed font-sans m-0">Нахожусь в Беларуси. Быстро и без бюрократии работаю с клиентами из СНГ и Европы.</p>
</div>

<div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(26,53,224,0.06)] hover:border-[#1A35E0]/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-[#1A35E0]/[0.05] text-[#1A35E0] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1A35E0] group-hover:text-white transition-all duration-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
<path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
<path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
<path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
</svg>
</div>
<h4 className="text-[15px] font-semibold text-[#111827] mb-1.5 font-sans tracking-tight">Глубокая экспертиза</h4>
<p className="text-[13px] text-[#4B5563] leading-relaxed font-sans m-0">В digital с 2021 года. Сотни запущенных воронок, сайтов для B2B и стартапов.</p>
</div>

<div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(26,53,224,0.06)] hover:border-[#1A35E0]/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-[#1A35E0]/[0.05] text-[#1A35E0] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1A35E0] group-hover:text-white transition-all duration-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h4 className="text-[15px] font-semibold text-[#111827] mb-1.5 font-sans tracking-tight">Всегда на связи</h4>
<p className="text-[13px] text-[#4B5563] leading-relaxed font-sans m-0">Никаких пропаданий на неделю. Быстрый ответ и решение вопросов в течение часа.</p>
</div>

<div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(26,53,224,0.06)] hover:border-[#1A35E0]/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-xl bg-[#1A35E0]/[0.05] text-[#1A35E0] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1A35E0] group-hover:text-white transition-all duration-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h4 className="text-[15px] font-semibold text-[#111827] mb-1.5 font-sans tracking-tight">Только результат</h4>
<p className="text-[13px] text-[#4B5563] leading-relaxed font-sans m-0">Четкие сроки и прозрачная смета. Работаем до тех пор, пока бизнес-задача не будет решена.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F9FAFB]">
<div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">
<h2 className="text-3xl md:text-4xl tracking-tight mb-10 md:mb-16 text-[#1F2937] text-center font-manrope font-medium max-w-2xl mx-auto">
                Отвечаем на вопросы,<br className="hidden sm:block"/>которые обычно не задают вслух.
            </h2>
<div className="columns-1 lg:columns-2 gap-4 md:gap-6">

<div className="break-inside-avoid mb-4 md:mb-6">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden block w-full shadow-sm" open="">
<summary className="flex items-start md:items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-[#1F2937] hover:text-[#1A35E0] transition-colors font-sans gap-4">
<span className="flex-1 text-[15px] md:text-base leading-snug pt-0.5 md:pt-0">Почему за 4 дня, если другие делают месяц?</span>
<iconify-icon className="accordion-icon text-[#9CA3AF] transition-transform duration-300 shrink-0 text-xl pt-0.5 md:pt-0" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#4B5563] pt-4 border-t border-gray-50 mx-5 md:mx-6 font-sans leading-relaxed">
                            Отработанный процесс и AI-инструменты. Агентства тратят время на внутренние согласования и очередь из клиентов. Мы работаем фокусированно — ваш проект в приоритете, не двадцатый в списке.
                        </div>
</details>
</div>

<div className="break-inside-avoid mb-4 md:mb-6">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden block w-full shadow-sm">
<summary className="flex items-start md:items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-[#1F2937] hover:text-[#1A35E0] transition-colors font-sans gap-4">
<span className="flex-1 text-[15px] md:text-base leading-snug pt-0.5 md:pt-0">Что если результат не понравится?</span>
<iconify-icon className="accordion-icon text-[#9CA3AF] transition-transform duration-300 shrink-0 text-xl pt-0.5 md:pt-0" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#4B5563] pt-4 border-t border-gray-50 mx-5 md:mx-6 font-sans leading-relaxed">
                            В работу включены два раунда правок — это стандарт, не исключение. Если нарушаем оговорённые сроки, возвращаем часть стоимости автоматически, без переговоров.
                        </div>
</details>
</div>

<div className="break-inside-avoid mb-4 md:mb-6">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden block w-full shadow-sm">
<summary className="flex items-start md:items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-[#1F2937] hover:text-[#1A35E0] transition-colors font-sans gap-4">
<span className="flex-1 text-[15px] md:text-base leading-snug pt-0.5 md:pt-0">На какой платформе делаете сайты?</span>
<iconify-icon className="accordion-icon text-[#9CA3AF] transition-transform duration-300 shrink-0 text-xl pt-0.5 md:pt-0" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#4B5563] pt-4 border-t border-gray-50 mx-5 md:mx-6 font-sans leading-relaxed">
                            Tilda, Webflow или кастомная верстка на выбор клиента. Подбираем под задачу и объясняем преимущества каждого варианта до старта работы.
                        </div>
</details>
</div>

<div className="break-inside-avoid mb-4 md:mb-6">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden block w-full shadow-sm">
<summary className="flex items-start md:items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-[#1F2937] hover:text-[#1A35E0] transition-colors font-sans gap-4">
<span className="flex-1 text-[15px] md:text-base leading-snug pt-0.5 md:pt-0">Как проходит оплата?</span>
<iconify-icon className="accordion-icon text-[#9CA3AF] transition-transform duration-300 shrink-0 text-xl pt-0.5 md:pt-0" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#4B5563] pt-4 border-t border-gray-50 mx-5 md:mx-6 font-sans leading-relaxed">
                            50% до начала, 50% при сдаче. Принимаем BYN, ₽, USDT. Работаем с физическими и юридическими лицами.
                        </div>
</details>
</div>

<div className="break-inside-avoid mb-4 md:mb-6">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden block w-full shadow-sm">
<summary className="flex md:items-center md:p-6 cursor-pointer hover:text-[#1A35E0] transition-colors font-medium text-[#1F2937] font-sans pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start justify-between">
<span className="flex-1 text-[15px] md:text-base leading-snug pt-0.5 md:pt-0">Я не из Беларуси — вы работаете удалённо?</span>
<iconify-icon className="accordion-icon text-[#9CA3AF] transition-transform duration-300 shrink-0 text-xl pt-0.5 md:pt-0" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#4B5563] pt-4 border-t border-gray-50 mx-5 md:mx-6 font-sans leading-relaxed">
                            Полностью удалённо. Большинство клиентов — из России, Казахстана и других стран СНГ. Созвоны в Telegram или Zoom, документы — онлайн.
                        </div>
</details>
</div>

<div className="break-inside-avoid mb-4 md:mb-6">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden block w-full shadow-sm">
<summary className="flex items-start md:items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-[#1F2937] hover:text-[#1A35E0] transition-colors font-sans gap-4">
<span className="flex-1 text-[15px] md:text-base leading-snug pt-0.5 md:pt-0">Могу заказать только одну услугу, например, только бот?</span>
<iconify-icon className="accordion-icon text-[#9CA3AF] transition-transform duration-300 shrink-0 text-xl pt-0.5 md:pt-0" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#4B5563] pt-4 border-t border-gray-50 mx-5 md:mx-6 font-sans leading-relaxed">
                            Да, всё доступно отдельно. Пакеты — для тех, кто хочет комплексное решение и видит всю картину сразу. Если нужен конкретный элемент — обсуждаем именно его.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="md:py-24 overflow-hidden text-white text-center bg-[#0A0C14] pt-16 pb-16 relative" id="contacts">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,53,224,0.15)_0,rgba(10,12,20,1)_50%)] pointer-events-none"></div>
<div className="w-full mx-auto px-5 md:px-10 lg:px-20 relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-3 md:mb-4 font-manrope font-medium">
                Есть проект?
            </h2>
<p className="text-lg md:text-xl text-[#9CA3AF] mb-4 md:mb-6 font-manrope font-medium">
                Расскажите — обсудим за 15 минут.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#1A35E0] hover:bg-[#2B4AFF] text-white text-base font-medium px-8 py-3.5 md:py-4 md:px-10 rounded-md transition-all duration-200 gap-2 shadow-[0_0_40px_rgba(26,53,224,0.2)] hover:shadow-[0_0_60px_rgba(26,53,224,0.3)] font-sans w-full md:w-auto" href="https://t.me/triple">
                    Написать Арсению <iconify-icon className="" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
<div className="text-xs md:text-sm text-[#4B5563] font-sans">
                    Или напишите на email: <a className="text-[#9CA3AF] hover:text-white transition-colors font-sans" href="mailto:hello@triple.by">hello@triple.by</a><br/>
<span className="text-[11px] md:text-xs mt-1 block font-sans">Отвечаю лично в течение часа в рабочие дни.</span>
</div>
</div>
</div>
</section>

<footer className="text-white bg-[#0A0C14] border-white/5 border-t pt-8 pb-6">
<div className="w-full px-5 md:px-10 lg:px-20 mx-auto">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-5">

<div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 text-center lg:text-left">
<div className="text-base tracking-tighter uppercase font-manrope font-medium text-white">Triple</div>
<div className="hidden lg:block w-px h-3 bg-[#4B5563]/50"></div>
<p className="text-[11px] lg:text-xs text-[#4B5563] font-sans m-0">Сайты · Боты · Продвижение · Брендинг</p>
</div>

<div className="flex flex-wrap justify-center lg:gap-x-6 text-xs text-[#9CA3AF] gap-x-4 gap-y-2">
<a className="hover:text-white transition-colors font-sans py-1" href="#services">Услуги</a>
<a className="hover:text-white transition-colors font-sans py-1" href="#packages">Пакеты</a>
<a className="hover:text-white transition-colors font-sans py-1" href="#works">Работы</a>
<a className="hover:text-white transition-colors font-sans py-1" href="#about">О нас</a>
<a className="hover:text-white transition-colors font-sans py-1" href="#contacts">Контакты</a>
</div>

<div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-5 text-xs text-[#9CA3AF]">
<a className="text-white hover:text-[#1A35E0] transition-colors font-sans py-1" href="https://t.me/triple">Telegram</a>
<a className="text-white hover:text-[#1A35E0] transition-colors font-sans py-1" href="mailto:hello@triple.by">Email</a>
<a className="text-white hover:text-[#1A35E0] transition-colors font-sans py-1" href="#">Instagram</a>
</div>
</div>
<div className="border-t border-white/5 pt-4 pb-4 md:pb-0 flex flex-col md:flex-row items-center justify-between text-[11px] md:text-xs text-[#4B5563] gap-3 md:gap-0 text-center md:text-left">
<p className="font-sans m-0">© 2021–2024 Triple Digital. Все права защищены.</p>
<a className="hover:text-white transition-colors font-sans" href="#">Политика конфиденциальности</a>
</div>
</div>
</footer>



    </>
  );
}
