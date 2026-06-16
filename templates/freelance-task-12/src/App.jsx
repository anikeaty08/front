import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full max-w-5xl px-4 sm:px-6 mb-8 flex items-center justify-between z-10">
<div className="flex items-center gap-4">
<button className="h-9 w-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center gap-1 p-1 bg-neutral-900/50 border border-neutral-800 rounded-full">
<button className="px-4 py-1.5 text-xs font-medium text-white bg-neutral-800 rounded-full shadow-sm border border-neutral-700">Профиль</button>
<button className="px-4 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Статистика</button>
<button className="px-4 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Настройки</button>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 text-xs text-neutral-500 border border-neutral-800 rounded-full px-3 py-1.5 bg-neutral-900/50">
<iconify-icon icon="solar:eye-linear" width="14"></iconify-icon>
<span>Виден работодателям</span>
</div>
<button className="h-9 w-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</nav>

<main className="w-full max-w-5xl px-4 sm:px-6">

<div className="bg-[#0A0A0A] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative ring-1 ring-white/5">

<div className="h-48 w-full bg-gradient-to-b from-neutral-800/30 to-transparent relative border-b border-neutral-800/50">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#404040 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute top-6 right-6 flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs font-medium rounded-lg transition-all group">
<iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
<span>Поделиться</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-white text-black border border-white hover:bg-neutral-200 text-xs font-medium rounded-lg transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
<span>Редактировать</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-0">

<aside className="md:col-span-4 p-6 md:p-8 md:border-r border-neutral-800 flex flex-col gap-6 relative">

<div className="-mt-20 mb-2 relative w-fit">
<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border-4 border-[#0A0A0A] flex items-center justify-center text-4xl font-medium text-white shadow-2xl shadow-black/50">
                            TK
                        </div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0A0A0A] rounded-full flex items-center justify-center border border-neutral-800 shadow-sm">
<iconify-icon className="text-white" icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
</div>

<div>
<h1 className="text-2xl font-semibold text-white tracking-tight mb-1">Тимур Камальдинов</h1>
<p className="text-neutral-400 text-sm mb-4">Senior Frontend Engineer</p>
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2.5 text-xs text-neutral-500">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>Санкт-Петербург, Россия</span>
</div>
<div className="flex items-center gap-2.5 text-xs text-neutral-500">
<iconify-icon icon="solar:link-circle-linear" width="14"></iconify-icon>
<a className="hover:text-white transition-colors" href="https://kamaldinov.dev">kamaldinov.dev</a>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 grid grid-cols-2 gap-4">
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Просмотры</div>
<div className="text-lg font-medium text-white flex items-center gap-1">
                                1,248
                                <span className="text-[10px] text-green-500 bg-green-500/10 px-1 rounded">+12%</span>
</div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Рейтинг</div>
<div className="text-lg font-medium text-white">4.9/5</div>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-400">React</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-400">Next.js</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-400">TypeScript</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-400">Architecture</span>
</div>

<button className="w-full py-2.5 rounded-lg border border-neutral-800 text-neutral-400 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-all flex items-center justify-center gap-2 mt-auto">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
                        Скачать мое резюме
                    </button>
</aside>

<div className="md:col-span-8 p-6 md:p-8 bg-[#0A0A0A]">

<div className="flex items-center gap-6 border-b border-neutral-800 pb-1 mb-8 overflow-x-auto">
<button className="pb-3 text-sm font-medium text-white border-b-2 border-white transition-colors whitespace-nowrap">Обзор</button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent transition-colors whitespace-nowrap">Проекты <span className="ml-1 text-[10px] align-top text-neutral-600">42</span></button>
<button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 border-b-2 border-transparent transition-colors whitespace-nowrap">Рекомендации</button>
</div>

<section className="mb-10">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-medium text-white tracking-tight">Обо мне</h2>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:pen-linear" width="14"></iconify-icon>
</button>
</div>
<p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                            Специализируюсь на создании сложных SPA и высоконагруженных интерфейсов. Глубоко понимаю экосистему React и современный Frontend стек. Последние 3 года фокусируюсь на производительности веб-приложений и DX.
                        </p>
</section>

<section className="mb-10">
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-medium text-white tracking-tight">Опыт работы</h2>
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                Добавить
                            </button>
</div>
<div className="relative flex flex-col gap-0">

<div className="timeline-item relative pl-10 pb-8 group">
<div className="absolute left-0 top-0.5 w-5 h-5 rounded-full border border-neutral-700 bg-neutral-900 group-hover:border-white transition-colors z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h3 className="text-sm font-medium text-neutral-200">Yandex</h3>
<span className="text-xs text-neutral-500 font-mono">2021 — Наст. время</span>
</div>
<div className="text-xs text-neutral-500 mb-2">Senior Frontend Developer</div>
<p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                                    Разработка интерфейсов облачной платформы Yandex Cloud. Оптимизация консоли управления, миграция легаси-кода.
                                </p>
</div>

<div className="timeline-item relative pl-10 pb-0 group">
<div className="absolute left-0 top-0.5 w-5 h-5 rounded-full border border-neutral-700 bg-neutral-900 group-hover:border-white transition-colors z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h3 className="text-sm font-medium text-neutral-200">VK</h3>
<span className="text-xs text-neutral-500 font-mono">2019 — 2021</span>
</div>
<div className="text-xs text-neutral-500 mb-2">Middle Frontend Developer</div>
<p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                                    Работа над разделом "Сообщества". Внедрение дизайн-системы VKUI. Ускорение загрузки медиа-контента.
                                </p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-white tracking-tight">Избранные проекты</h2>
<button className="text-xs text-neutral-500 hover:text-white transition-colors">Все проекты</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors group cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
<iconify-icon icon="solar:chart-2-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-xs font-medium text-neutral-200 truncate">FinDash Analytics</h3>
<div className="text-[10px] text-neutral-500">Dashboard</div>
</div>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:menu-dots-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
<span className="text-[10px] text-neutral-400">В продакшене</span>
</div>
</div>
<div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors group cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
<iconify-icon icon="solar:shop-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-xs font-medium text-neutral-200 truncate">E-commerce Kit</h3>
<div className="text-[10px] text-neutral-500">Library</div>
</div>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:menu-dots-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-neutral-400">Open Source</span>
</div>
</div>

<button className="p-3 rounded-xl border border-dashed border-neutral-800 hover:border-neutral-600 text-neutral-600 hover:text-neutral-400 transition-all flex flex-col items-center justify-center gap-1 h-[88px]">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Добавить проект</span>
</button>
</div>
</section>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-neutral-600">
<span>Last updated: 2 hours ago</span>
<span>•</span>
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<span>•</span>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
</div>
</main>

    </>
  );
}
