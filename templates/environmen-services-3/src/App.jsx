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



        lucide.createIcons();
    
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
      

<div className="hidden lg:flex justify-between items-center px-6 py-3 bg-white border-b border-gray-100 text-sm text-[#3f6256] relative z-50">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-[#2d8a4e]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium tracking-wide">Работаем ежедневно: <span className="text-[#0f392b] font-semibold">С 08:00 ДО 22:00</span></span>
</div>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#2d8a4e] text-white p-1.5 rounded-full group-hover:bg-[#236c3d] transition-colors">
<svg className="lucide lucide-send w-3 h-3 fill-current" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<span className="font-medium">Telegram</span>
</a>
<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#2d8a4e] text-white p-1.5 rounded-full group-hover:bg-[#236c3d] transition-colors">
<svg className="lucide lucide-message-circle w-3 h-3 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<span className="font-medium">Whatsapp</span>
</a>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-[#2d8a4e]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-medium">г. Бишкек, ул. Токтогула, 125/1</span>
</div>
</div>

<section className="relative bg-[#0f291e] overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Nature Background" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&amp;w=2568&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-r from-[#0f291e]/90 via-[#0f291e]/60 to-[#0f291e]/30 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f291e]/80 to-transparent"></div>
</div>

<header className="z-20 w-full pt-6 pb-4 relative">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="bg-white p-3 rounded-full shadow-lg">
<svg className="lucide lucide-leaf w-5 h-5 text-[#2d8a4e] stroke-[2]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-serif text-white tracking-wide leading-none">ЭКОРЕГЛАМЕНТ</span>
<span className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Экологические работы</span>
</div>
</div>

<nav className="hidden lg:flex bg-black/20 border-white/10 border rounded-full pt-2.5 pr-8 pb-2.5 pl-8 backdrop-blur-md items-center">
<a className="hover:text-[#4ade80] transition-colors text-sm font-medium text-white pt-1 pr-5 pb-1 pl-5" href="#">Главная</a>
<a className="hover:text-[#4ade80] transition-colors text-sm font-medium text-white/80 pt-1 pr-5 pb-1 pl-5" href="#about">О нас</a>
<a className="hover:text-[#4ade80] transition-colors text-sm font-medium text-white/80 pt-1 pr-5 pb-1 pl-5" href="#services">Услуги</a>
<a className="text-white/80 hover:text-[#4ade80] px-5 py-1 text-sm font-medium transition-colors" href="#contacts">Контакты</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<div className="text-right text-white">
<div className="text-base font-medium leading-none mb-1">+996 (777) 00-00-00</div>
<div className="text-sm font-medium text-white/60 leading-none">+996 (555) 00-00-00</div>
</div>
<div className="bg-[#4ade80] p-3 rounded-full animate-pulse cursor-pointer hover:bg-[#22c55e] transition-colors shadow-[0_0_15px_rgba(74,222,128,0.5)]">
<svg className="lucide lucide-phone w-5 h-5 text-[#0f291e] fill-current" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
</div>

<button className="lg:hidden text-white">
<svg className="lucide lucide-menu w-8 h-8 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>

<div className="z-10 lg:pb-52 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-40 pl-6 relative">
<div className="flex flex-col gap-6">

<div className="grid lg:grid-cols-12 gap-6 items-stretch">

<div className="lg:col-span-4 relative group">
<div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/20 to-[#16a34a]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-300">

<div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4ade80]/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="w-12 h-12 rounded-2xl bg-[#4ade80]/10 flex items-center justify-center border border-[#4ade80]/20 text-[#4ade80]">
<svg className="lucide lucide-trophy w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17"></path><path d="M14 14.66V17"></path><path d="M2 22h20"></path><path d="M18 2h-3a3 3 0 0 0-6 0H6a3 3 0 0 0-3 3v2.4a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V5a3 3 0 0 0-3-3Z"></path></svg>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs font-semibold uppercase tracking-wider">
<span className="">Успех</span>
</div>
</div>
<div className="relative z-10 mt-12">
<span className="block text-7xl font-serif font-semibold text-white tracking-tighter leading-none mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">+100</span>
<span className="block text-white/70 text-lg font-medium leading-snug">Успешно выполненных проектов</span>
</div>
</div>
</div>

<div className="lg:col-span-8 group relative">
<div className="absolute inset-0 bg-gradient-to-r from-[#4ade80]/10 to-[#16a34a]/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
<div className="relative h-full bg-[#0f291e]/40 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-center">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#4ade80]/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">ЭКОРЕГЛАМЕНТ</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-[#4ade80] to-transparent rounded-full mb-8"></div>
<p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
                                    Оказание услуг по разработке экологической документации и сопровождению проектов в соответствии с требованиями законодательства Кыргызской Республики. Подготовка раздела ООС, экологических паспортов, проектов ПДВ, ПНООЛР.
                                </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative p-6 lg:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-[#4ade80] flex items-center justify-center text-[#0f291e] mb-6 shadow-lg shadow-[#4ade80]/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-briefcase" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<p className="text-white font-medium text-lg leading-snug">
                            Практический опыт <span className="text-white/50 block mt-2 text-sm font-normal">сопровождения проектов любой сложности</span>
</p>
</div>

<div className="group relative p-6 lg:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-[#4ade80] flex items-center justify-center text-[#0f291e] mb-6 shadow-lg shadow-[#4ade80]/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-award" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
<p className="text-white font-medium text-lg leading-snug">
                            Наличие сертификатов <span className="text-white/50 block mt-2 text-sm font-normal">на разработку всей экологической документации</span>
</p>
</div>

<div className="group relative p-6 lg:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-[#4ade80] flex items-center justify-center text-[#0f291e] mb-6 shadow-lg shadow-[#4ade80]/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-user-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
</div>
<p className="text-white font-medium text-lg leading-snug">
                            Индивидуальный подход <span className="text-white/50 block mt-2 text-sm font-normal">к каждому проекту и клиенту</span>
</p>
</div>

<div className="group relative p-6 lg:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-[#4ade80] flex items-center justify-center text-[#0f291e] mb-6 shadow-lg shadow-[#4ade80]/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-monitor-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 10 2 2 4-4"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
</div>
<p className="text-white font-medium text-lg leading-snug">
                            Программное обеспечение <span className="text-white/50 block mt-2 text-sm font-normal">УПРЗА «Эколог», «Эколог-Шум», «Отходы»</span>
</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
<svg className="block lg:h-[150px] w-[1062px] h-[100px] relative" data-icon-replaced="true" data-name="Layer 1" preserveaspectratio="none" strokeWidth="2" style={{color: 'rgb(26, 60, 47)', width: '1062px', height: '100px'}} viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
<path className="fill-white" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
<path className="fill-white" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
</svg>
</div>
</section>

<section className="relative bg-white pb-24 z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 -mt-24 lg:-mt-32">

<div className="flex flex-col items-center text-center group">
<div className="bg-[#4ade80] p-6 rounded-full border-[8px] border-white/20 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<svg className="lucide lucide-users w-10 h-10 text-[#0f291e] fill-current" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="text-7xl font-serif text-[#1a3c2f] mb-2 font-medium">100+</div>
<h3 className="text-sm font-bold uppercase tracking-widest text-[#2d8a4e] mb-4">Специалистов в штате</h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Команда профессиональных экологов, инженеров и юристов с многолетним опытом работы.
                    </p>
</div>

<div className="flex flex-col items-center text-center group mt-12 md:mt-0"> 
<div className="bg-[#4ade80] p-6 rounded-full border-[8px] border-white/20 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<svg className="lucide lucide-building-2 w-10 h-10 text-[#0f291e] fill-current" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="text-7xl font-serif text-[#1a3c2f] mb-2 font-medium">500+</div>
<h3 className="text-sm font-bold uppercase tracking-widest text-[#2d8a4e] mb-4">Выполненных проектов</h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Успешное сопровождение экологической документации для крупных промышленных объектов.
                    </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="bg-[#4ade80] p-6 rounded-full border-[8px] border-white/20 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<svg className="lucide lucide-clock w-10 h-10 text-[#0f291e] fill-current" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-7xl font-serif text-[#1a3c2f] mb-2 font-medium">24ч</div>
<h3 className="text-sm font-bold uppercase tracking-widest text-[#2d8a4e] mb-4">Среднее время реакции</h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Оперативная консультация и начало работы над вашим проектом в день обращения.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#0f392b] mb-4">Наши услуги</h2>
<div className="w-24 h-1 bg-[#2d8a4e] mx-auto rounded-full mb-6"></div>
<p className="text-[#3f6256] max-w-2xl mx-auto text-lg">Полный спектр экологического сопровождения для вашего предприятия</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-[#f9fafb] hover:bg-[#f0fdf4] border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 text-[#2d8a4e] shadow-sm group-hover:border-[#2d8a4e]/30 transition-colors">
<svg className="lucide lucide-shield-check w-7 h-7 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-bold text-[#0f392b] mb-3 font-serif">ООС</h3>
<p className="text-base text-gray-600 leading-relaxed">Разработка раздела «Охрана окружающей среды» для проектной документации любых объектов.</p>
</div>

<div className="group relative bg-[#f9fafb] hover:bg-[#f0fdf4] border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 text-[#2d8a4e] shadow-sm group-hover:border-[#2d8a4e]/30 transition-colors">
<svg className="lucide lucide-file-search w-7 h-7 stroke-[1.5]" data-lucide="file-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3 15 18"></path></svg>
</div>
<h3 className="text-xl font-bold text-[#0f392b] mb-3 font-serif">ОВОС</h3>
<p className="text-base text-gray-600 leading-relaxed">Оценка воздействия на окружающую среду. Выявление и прогноз экологических рисков.</p>
</div>

<div className="group relative bg-[#f9fafb] hover:bg-[#f0fdf4] border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 text-[#2d8a4e] shadow-sm group-hover:border-[#2d8a4e]/30 transition-colors">
<svg className="lucide lucide-scan-line w-7 h-7 stroke-[1.5]" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<h3 className="text-xl font-bold text-[#0f392b] mb-3 font-serif">СЗЗ</h3>
<p className="text-base text-gray-600 leading-relaxed">Проект организации санитарно-защитной зоны для промышленных и производственных объектов.</p>
</div>

<div className="group relative bg-[#f9fafb] hover:bg-[#f0fdf4] border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 text-[#2d8a4e] shadow-sm group-hover:border-[#2d8a4e]/30 transition-colors">
<svg className="lucide lucide-wind w-7 h-7 stroke-[1.5]" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<h3 className="text-xl font-bold text-[#0f392b] mb-3 font-serif">ПДВ / ПДС</h3>
<p className="text-base text-gray-600 leading-relaxed">Нормативы предельно допустимых выбросов и сбросов загрязняющих веществ.</p>
</div>

<div className="group relative bg-[#f9fafb] hover:bg-[#f0fdf4] border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 text-[#2d8a4e] shadow-sm group-hover:border-[#2d8a4e]/30 transition-colors">
<svg className="lucide lucide-clipboard-check w-7 h-7 stroke-[1.5]" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-bold text-[#0f392b] mb-3 font-serif">Экологический аудит</h3>
<p className="text-base text-gray-600 leading-relaxed">Паспортизация предприятия и независимая оценка соблюдения нормативов.</p>
</div>

<div className="group relative bg-[#f9fafb] hover:bg-[#f0fdf4] border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 text-[#2d8a4e] shadow-sm group-hover:border-[#2d8a4e]/30 transition-colors">
<svg className="lucide lucide-trash-2 w-7 h-7 stroke-[1.5]" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<h3 className="text-xl font-bold text-[#0f392b] mb-3 font-serif">Отходы</h3>
<p className="text-base text-gray-600 leading-relaxed">Разработка инструкций по обращению с отходами производства и потребления.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="about">

<div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none hidden lg:block">
<svg className="absolute inset-0 h-full w-full text-[#4ade80]/10 fill-current" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L100 0 L100 100 Z"></path>
</svg>
<svg className="absolute inset-0 h-full w-full text-[#22c55e]/10 fill-current translate-x-12" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M20 100 L100 20 L100 100 Z"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-12">
<h2 className="text-5xl font-serif font-medium text-[#84cc16] tracking-tight mb-2 lowercase">о нас</h2>
<div className="w-16 h-1 bg-[#4ade80]"></div>
</div>
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-7 space-y-8">

<div className="flex gap-4">
<div className="mt-1.5 shrink-0 text-[#84cc16]">
<svg className="w-5 h-5" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20h18L12 4z"></path></svg> 
</div>
<p className="text-[#3f6256] text-lg leading-relaxed">
<span className="font-bold text-[#0f392b] border-b-2 border-[#4ade80]/50">ЭКОРЕГЛАМЕНТ</span> — команда <span className="border-b border-dashed border-gray-400/50">сертифицированных</span> специалистов с подтвержденной квалификацией Госстроя Кыргызской Республики. Мы предоставляем комплексные экологические услуги для предприятий, проектных организаций и горнодобывающей отрасли. Наш опыт включает работу с крупными горнодобывающими предприятиями, промышленными объектами, а также сотрудничество с Министерством природных ресурсов и Управлением государственной экологической экспертизы Кыргызской Республики.
                         </p>
</div>

<div className="flex gap-4">
<div className="mt-1.5 shrink-0 text-[#84cc16]">
<svg className="w-5 h-5" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20h18L12 4z"></path></svg>
</div>
<p className="text-[#3f6256] text-lg leading-relaxed">
                            Мы гарантируем профессиональный и индивидуальный подход к каждому проекту, строго <span className="border-b border-dashed border-gray-400/50">соблюдая</span> требования законодательства Кыргызской Республики, нормативы экологической безопасности и лучшие практики государственной экологической экспертизы.
                         </p>
</div>

<div className="flex gap-4">
<div className="mt-1.5 shrink-0 text-[#84cc16]">
<svg className="w-5 h-5" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20h18L12 4z"></path></svg>
</div>
<p className="text-[#3f6256] text-lg leading-relaxed">
                            Мы разработали и успешно <span className="border-b border-dashed border-gray-400/50">согласовали</span> проекты ООС для ведущих горнодобывающих компаний Кыргызстана, включая: <span className="font-semibold text-[#0f392b] border-b border-[#4ade80]/30">Кумтор</span>, <span className="font-semibold text-[#0f392b] border-b border-[#4ade80]/30">Терексай Жаштары</span>, <span className="font-semibold text-[#0f392b] border-b border-[#4ade80]/30">Этибакър Терексай</span>, <span className="font-semibold text-[#0f392b] border-b border-[#4ade80]/30">Алтынкен</span>, Альянс Алтын и другие предприятия.
                         </p>
</div>

<div className="flex gap-4">
<div className="mt-1.5 shrink-0 text-[#84cc16]">
<svg className="w-5 h-5" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20h18L12 4z"></path></svg>
</div>
<p className="text-[#3f6256] text-lg leading-relaxed">
                            Работаем с объектами различного уровня сложности. Используем современные программные продукты: УПРЗА «Эколог» v4, «Эколог-Шум» с дополнительными модулями.
                         </p>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-center relative">

<div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#4ade80]/20 shadow-2xl relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-[#dcfce7] rounded-lg text-[#16a34a]">
<svg className="lucide lucide-briefcase w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<h3 className="text-xl font-serif font-medium text-[#0f392b]">Ключевые партнеры</h3>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="h-20 bg-[#f4f7f5] rounded-xl flex items-center justify-center border border-transparent hover:border-[#4ade80] hover:shadow-md transition-all group cursor-default">
<span className="font-bold text-[#3f6256] group-hover:text-[#16a34a] transition-colors">KUMTOR</span>
</div>
<div className="h-20 bg-[#f4f7f5] rounded-xl flex items-center justify-center border border-transparent hover:border-[#4ade80] hover:shadow-md transition-all group cursor-default text-center px-2">
<span className="font-bold text-[#3f6256] group-hover:text-[#16a34a] transition-colors text-sm">TEREKSAY</span>
</div>
<div className="h-20 bg-[#f4f7f5] rounded-xl flex items-center justify-center border border-transparent hover:border-[#4ade80] hover:shadow-md transition-all group cursor-default">
<span className="font-bold text-[#3f6256] group-hover:text-[#16a34a] transition-colors">ALTYNKEN</span>
</div>
<div className="h-20 bg-[#f4f7f5] rounded-xl flex items-center justify-center border border-transparent hover:border-[#4ade80] hover:shadow-md transition-all group cursor-default">
<span className="font-bold text-[#3f6256] group-hover:text-[#16a34a] transition-colors text-sm text-center">ALLIANCE ALTYN</span>
</div>
</div>
</div>

<svg className="absolute -bottom-12 -right-12 w-64 h-64 text-[#4ade80]/20 fill-current blur-2xl z-0" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,71.6,35.2C61,47.3,51.1,57.9,39.3,64.7C27.5,71.5,13.7,74.5,-0.6,75.6C-15,76.6,-30,75.7,-43.3,69.5C-56.6,63.3,-68.2,51.8,-76.2,38.2C-84.2,24.6,-88.6,8.9,-86.3,-5.7C-84,-20.3,-75,-33.8,-64.1,-44.5C-53.2,-55.2,-40.4,-63.1,-27.1,-70.8C-13.8,-78.5,-0.1,-86,14.2,-86.6C28.5,-87.2,42.8,-80.9,44.7,-76.4Z" fill="#84cc16" transform="translate(100 100)"></path>
</svg>
</div>
</div>
</div>
</section>

<footer className="bg-[#0f291e] text-green-50/80 pt-24 pb-12" id="contacts">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-16">

<div>
<div className="flex items-center gap-3 mb-10">
<div className="bg-[#2d8a4e] text-white p-3 rounded-xl">
<svg className="lucide lucide-leaf w-6 h-6 stroke-[1.5]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-2xl font-serif font-semibold text-white tracking-tight">ЭКОРЕГЛАМЕНТ</span>
</div>
<div className="space-y-8 text-lg">
<div className="flex items-start gap-5">
<svg className="lucide lucide-map-pin w-6 h-6 text-[#2d8a4e] mt-1 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-light">г. Бишкек, ул. Токтогула, 125/1</span>
</div>
<div className="flex items-start gap-5">
<svg className="lucide lucide-phone w-6 h-6 text-[#2d8a4e] mt-1 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div className="flex flex-col font-light">
<a className="hover:text-white transition-colors" href="tel:+996777000000">+996 777 000 000</a>
<a className="hover:text-white transition-colors" href="tel:+996555000000">+996 555 000 000</a>
</div>
</div>
<div className="flex items-start gap-5">
<svg className="lucide lucide-clock w-6 h-6 text-[#2d8a4e] mt-1 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-light">Пн-Пт, 09:00 – 18:00</span>
</div>
</div>
</div>

<div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm">
<h3 className="text-3xl font-serif font-medium text-white mb-8">Оставьте заявку</h3>
<form className="space-y-5">
<div className="">
<input className="placeholder-green-50/30 focus:outline-none focus:border-[#2d8a4e] transition-colors text-white bg-white/5 w-full border-white/10 border rounded-xl pt-4 pr-6 pb-4 pl-6" placeholder="Ваше имя" type="text"/>
</div>
<div className="">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-green-50/30 focus:outline-none focus:border-[#2d8a4e] transition-colors" placeholder="Номер телефона" type="tel"/>
</div>
<button className="w-full bg-[#2d8a4e] hover:bg-[#236c3d] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-900/30 uppercase tracking-widest text-sm hover:-translate-y-0.5">
                            Отправить и получить консультацию
                        </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-white/40">
<p>© 2024 Экорегламент. Все права защищены.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
