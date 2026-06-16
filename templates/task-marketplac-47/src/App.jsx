import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212',
950: '#0a0a0a',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 border-r border-neutral-800 bg-neutral-950 flex flex-col items-center py-6 z-20 shrink-0">

<div className="w-8 h-8 mb-8 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            T.
        </div>

<nav className="flex-1 flex flex-col gap-6 w-full px-2">
<button className="group w-full aspect-square flex items-center justify-center rounded-lg bg-neutral-900 text-white relative">
<iconify-icon icon="solar:home-smile-linear" width="22"></iconify-icon>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
</button>
<button className="group w-full aspect-square flex items-center justify-center rounded-lg hover:bg-neutral-900 hover:text-white transition-colors text-neutral-500">
<iconify-icon icon="solar:folder-with-files-linear" width="22"></iconify-icon>
</button>
<button className="group w-full aspect-square flex items-center justify-center rounded-lg hover:bg-neutral-900 hover:text-white transition-colors text-neutral-500">
<iconify-icon icon="solar:wallet-linear" width="22"></iconify-icon>
</button>
<button className="group w-full aspect-square flex items-center justify-center rounded-lg hover:bg-neutral-900 hover:text-white transition-colors text-neutral-500">
<iconify-icon icon="solar:chat-line-linear" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full border border-neutral-950"></span>
</button>
</nav>

<div className="mt-auto flex flex-col gap-6 w-full px-2">
<button className="w-full aspect-square flex items-center justify-center rounded-lg hover:bg-neutral-900 hover:text-white transition-colors text-neutral-500">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-neutral-800 mx-auto border border-neutral-700"></div>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-neutral-950/50 backdrop-blur-sm shrink-0">
<div className="text-sm font-medium text-white">Лента задач</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 transition-colors">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                    Создать задачу
                </button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">

<div className="mb-10 space-y-4">

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</div>
<input className="block w-full pl-12 pr-4 py-3.5 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 focus:bg-neutral-900 transition-all shadow-sm" placeholder="Поиск по стеку, названию или компании..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center">
<div className="bg-neutral-800 text-neutral-400 text-[10px] px-1.5 py-0.5 rounded border border-neutral-700 font-mono">⌘K</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

<div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
<button className="px-4 py-1.5 text-xs font-medium text-white bg-neutral-800 rounded-md shadow-sm transition-all border border-neutral-700/50">Все</button>
<button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-md transition-all">Разработка</button>
<button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-md transition-all">Дизайн</button>
<button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-md transition-all">Маркетинг</button>
</div>

<div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 text-neutral-400 hover:text-white text-xs font-medium transition-all group shrink-0">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300" icon="solar:wallet-linear"></iconify-icon>
                            Бюджет
                            <iconify-icon className="text-neutral-600 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 text-neutral-400 hover:text-white text-xs font-medium transition-all group shrink-0">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300" icon="solar:layers-linear"></iconify-icon>
                            Стек
                            <iconify-icon className="text-neutral-600 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="w-px h-5 bg-neutral-800 mx-1 hidden sm:block"></div>
<button className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all shrink-0">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-5">
<h1 className="text-white text-sm font-medium tracking-tight">Рекомендации <span className="text-neutral-600 ml-2 font-normal text-xs">32 результата</span></h1>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
                        Сначала новые
                        <iconify-icon icon="solar:sort-vertical-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-4 pb-20">

<article className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-black/40 cursor-pointer">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 rounded bg-white text-black flex items-center justify-center font-bold">V</div>
                                    Vercel
                                </div>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-neutral-500">2ч назад</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon> Проверено
                                </div>
</div>
<div>
<h2 className="text-lg text-white font-medium tracking-tight group-hover:text-blue-400 transition-colors">Миграция аналитического дашборда на Next.js 14</h2>
<p className="text-sm text-neutral-400 mt-1 line-clamp-2">Требуется опытный React разработчик для рефакторинга текущего дашборда. Фокус на серверных компонентах для оптимизации производительности.</p>
</div>
<div className="flex flex-wrap gap-2 pt-1">
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">React</span>
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">Next.js 14</span>
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">TypeScript</span>
</div>
</div>
<div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:min-w-[140px] border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6">
<div className="text-right">
<div className="text-xs text-neutral-500 mb-1">Фикс. цена</div>
<div className="text-xl sm:text-2xl font-medium tracking-tight text-white">$2,500</div>
</div>
<button className="bg-white text-neutral-950 text-xs font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group-hover:translate-x-1 duration-200">
                                Откликнуться
                                <iconify-icon className="text-neutral-600" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-black/40 cursor-pointer">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 rounded bg-indigo-500 text-white flex items-center justify-center font-bold text-[10px]">S</div>
                                    Stripe
                                </div>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-neutral-500">5ч назад</span>
</div>
<div>
<h2 className="text-lg text-white font-medium tracking-tight group-hover:text-blue-400 transition-colors">Дизайн иконок для нового финтех продукта</h2>
<p className="text-sm text-neutral-400 mt-1 line-clamp-1">Создание сета из 40 линейных иконок в соответствии с нашим дизайн-китом. Формат SVG и компоненты Figma.</p>
</div>
<div className="flex flex-wrap gap-2 pt-1">
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">Figma</span>
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">Иконографика</span>
</div>
</div>
<div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:min-w-[140px] border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6">
<div className="text-right">
<div className="text-xs text-neutral-500 mb-1">Фикс. цена</div>
<div className="text-xl sm:text-2xl font-medium tracking-tight text-white">$800</div>
</div>
<button className="bg-transparent border border-neutral-700 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors w-full sm:w-auto">
                                Посмотреть
                            </button>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-black/40 cursor-pointer">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-[10px]">R</div>
                                    Raycast
                                </div>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-orange-500 flex items-center gap-1 font-medium">
<iconify-icon icon="solar:fire-linear"></iconify-icon> Срочно
                                </span>
</div>
<div>
<h2 className="text-lg text-white font-medium tracking-tight group-hover:text-blue-400 transition-colors">Исправление критического бага авторизации OAuth</h2>
<p className="text-sm text-neutral-400 mt-1 line-clamp-1">Пользователи испытывают тайм-ауты при входе через Google. Требуется немедленное расследование и патч.</p>
</div>
<div className="flex flex-wrap gap-2 pt-1">
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">Node.js</span>
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">OAuth 2.0</span>
</div>
</div>
<div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:min-w-[140px] border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6">
<div className="text-right">
<div className="text-xs text-neutral-500 mb-1">Почасовая</div>
<div className="text-xl sm:text-2xl font-medium tracking-tight text-white">$120/ч</div>
</div>
<button className="bg-transparent border border-neutral-700 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors w-full sm:w-auto">
                                Откликнуться
                            </button>
</div>
</div>
</article>

<article className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-black/40 cursor-pointer opacity-75 hover:opacity-100">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 rounded bg-purple-500 text-white flex items-center justify-center font-bold text-[10px]">L</div>
                                    Linear
                                </div>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-neutral-500">1д назад</span>
</div>
<div>
<h2 className="text-lg text-white font-medium tracking-tight group-hover:text-blue-400 transition-colors">Техническая документация для API v2</h2>
<p className="text-sm text-neutral-400 mt-1 line-clamp-1">Описать эндпоинты, примеры запросов/ответов и методы аутентификации для обновленного API.</p>
</div>
<div className="flex flex-wrap gap-2 pt-1">
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">Тех. писательство</span>
<span className="px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs">Markdown</span>
</div>
</div>
<div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:min-w-[140px] border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6">
<div className="text-right">
<div className="text-xs text-neutral-500 mb-1">Фикс. цена</div>
<div className="text-xl sm:text-2xl font-medium tracking-tight text-white">$1,200</div>
</div>
<button className="bg-transparent border border-neutral-700 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors w-full sm:w-auto">
                                Посмотреть
                            </button>
</div>
</div>
</article>
</div>

<div className="pt-2 flex justify-center pb-10">
<button className="text-sm font-medium text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
                    Загрузить еще
                </button>
</div>
</main>
</div>

    </>
  );
}
