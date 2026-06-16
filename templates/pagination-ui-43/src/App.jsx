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
      
<div className="text-center mb-4">
<h1 className="text-xl font-medium tracking-tight text-zinc-900">Компоненти пагінації</h1>
<p className="text-sm text-zinc-500 mt-2">10 різних стилів для будь-яких потреб</p>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 1: Стандартний</span>
<nav className="flex items-center gap-2">
<button className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 focus:ring-offset-zinc-50">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-1">
<button className="flex items-center justify-center w-8 h-8 rounded-md text-sm font-medium text-zinc-900 bg-zinc-200/60 outline-none">1</button>
<button className="flex items-center justify-center w-8 h-8 rounded-md text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors outline-none">2</button>
<button className="flex items-center justify-center w-8 h-8 rounded-md text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors outline-none">3</button>
<span className="flex items-center justify-center w-8 h-8 text-sm text-zinc-400">...</span>
<button className="flex items-center justify-center w-8 h-8 rounded-md text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors outline-none">8</button>
</div>
<button className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-1 focus:ring-offset-zinc-50">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 2: Мінімалістичний текст</span>
<nav className="flex items-center gap-6">
<button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors outline-none">
<iconify-icon className="text-base" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:block">Назад</span>
</button>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-900 outline-none border-b border-zinc-900 pb-0.5">1</button>
<button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors outline-none border-b border-transparent pb-0.5">2</button>
<button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors outline-none border-b border-transparent pb-0.5">3</button>
<span className="text-sm text-zinc-300 pb-0.5">...</span>
<button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors outline-none border-b border-transparent pb-0.5">10</button>
</div>
<button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors outline-none">
<span className="hidden sm:block">Далі</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 3: Округлий (Pill)</span>
<nav className="flex items-center gap-1">
<button className="flex items-center gap-1 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100 outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-1">
<button className="px-3 py-1.5 rounded-full text-sm font-medium bg-zinc-900 text-white shadow-sm outline-none">1</button>
<button className="px-3 py-1.5 rounded-full text-sm text-zinc-600 hover:bg-zinc-200/60 transition-colors outline-none">2</button>
<button className="px-3 py-1.5 rounded-full text-sm text-zinc-600 hover:bg-zinc-200/60 transition-colors outline-none">3</button>
<span className="px-2 text-sm text-zinc-400">...</span>
<button className="px-3 py-1.5 rounded-full text-sm text-zinc-600 hover:bg-zinc-200/60 transition-colors outline-none">12</button>
</div>
<button className="flex items-center gap-1 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100 outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 4: Плаваючий контейнер</span>
<nav className="inline-flex items-center gap-1 p-1.5 bg-white border border-zinc-200 shadow-sm rounded-full">
<button className="flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden sm:flex items-center">
<button className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium bg-zinc-100 text-zinc-900 outline-none">1</button>
<button className="flex items-center justify-center w-8 h-8 rounded-full text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors outline-none">2</button>
<button className="flex items-center justify-center w-8 h-8 rounded-full text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors outline-none">3</button>
<button className="flex items-center justify-center w-8 h-8 rounded-full text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors outline-none">4</button>
<span className="flex items-center justify-center w-8 h-8 text-sm text-zinc-300">...</span>
</div>
<button className="flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-3xl flex flex-col items-center gap-6 px-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 5: По ширині з лініями</span>
<nav className="flex items-center justify-between w-full border-t border-zinc-200 pt-4">
<div className="flex flex-1">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors outline-none group">
<iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Назад
                </button>
</div>
<div className="hidden sm:flex items-center gap-4">
<button className="text-sm font-medium text-zinc-900 border-t-2 border-zinc-900 -mt-[17px] pt-4 outline-none">1</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-t-2 border-transparent hover:border-zinc-300 -mt-[17px] pt-4 transition-colors outline-none">2</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-t-2 border-transparent hover:border-zinc-300 -mt-[17px] pt-4 transition-colors outline-none">3</button>
<span className="text-sm text-zinc-400 -mt-[17px] pt-4">...</span>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-t-2 border-transparent hover:border-zinc-300 -mt-[17px] pt-4 transition-colors outline-none">8</button>
</div>
<div className="flex flex-1 justify-end">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors outline-none group">
                    Далі
                    <iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6 px-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 6: Мобільний фокус</span>
<nav className="flex items-center justify-between w-full max-w-sm bg-white p-1.5 rounded-lg border border-zinc-200 shadow-sm">
<button className="flex items-center justify-center w-9 h-9 rounded-md bg-white border border-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-200 transition-all outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<span className="text-sm text-zinc-500 px-4">
                Сторінка <span className="font-medium text-zinc-900">4</span> з <span className="font-medium text-zinc-900">20</span>
</span>
<button className="flex items-center justify-center w-9 h-9 rounded-md bg-white border border-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-200 transition-all outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 7: З'єднані блоки (Dashboard)</span>
<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white">
<button className="relative inline-flex items-center rounded-l-md px-3 py-2 text-zinc-400 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 focus:z-20 focus:outline-offset-0 transition-colors">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="relative hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 ring-1 ring-inset ring-zinc-200 focus:z-20 focus:outline-offset-0">1</button>
<button className="relative hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 ring-1 ring-inset ring-zinc-200 focus:z-20 focus:outline-offset-0 transition-colors">2</button>
<button className="relative hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 ring-1 ring-inset ring-zinc-200 focus:z-20 focus:outline-offset-0 transition-colors">3</button>
<span className="relative hidden sm:inline-flex items-center px-4 py-2 text-sm text-zinc-400 ring-1 ring-inset ring-zinc-200">...</span>
<button className="relative hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 ring-1 ring-inset ring-zinc-200 focus:z-20 focus:outline-offset-0 transition-colors">10</button>
<button className="relative inline-flex items-center rounded-r-md px-3 py-2 text-zinc-400 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 focus:z-20 focus:outline-offset-0 transition-colors">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6 px-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 8: Поле введення</span>
<nav className="flex items-center gap-4">
<div className="flex items-center gap-2">
<button className="flex items-center justify-center w-8 h-8 rounded text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex items-center justify-center w-8 h-8 rounded text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="h-6 w-px bg-zinc-200 hidden sm:block"></div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-sm text-zinc-500">Перейти до</span>
<input className="w-12 h-8 rounded-md border-0 py-1.5 bg-white text-center text-sm font-medium text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-inset focus:ring-zinc-900 outline-none transition-all" type="text" value="5"/>
<span className="text-sm text-zinc-500">з 24</span>
</div>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 9: Індикатори-крапки</span>
<nav className="flex items-center gap-6">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors outline-none flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex items-center gap-2.5">
<button aria-label="Сторінка 1" className="w-2 h-2 rounded-full bg-zinc-300 hover:bg-zinc-400 transition-colors outline-none"></button>
<button aria-label="Сторінка 2" className="w-2 h-2 rounded-full bg-zinc-300 hover:bg-zinc-400 transition-colors outline-none"></button>
<button aria-label="Сторінка 3" className="w-2 h-2 rounded-full bg-zinc-900 outline-none ring-2 ring-offset-2 ring-transparent"></button>
<button aria-label="Сторінка 4" className="w-2 h-2 rounded-full bg-zinc-300 hover:bg-zinc-400 transition-colors outline-none"></button>
<button aria-label="Сторінка 5" className="w-2 h-2 rounded-full bg-zinc-300 hover:bg-zinc-400 transition-colors outline-none"></button>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors outline-none flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

<div className="w-full max-w-4xl flex flex-col items-center gap-6 mb-20">
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Варіант 10: З крайніми сторінками</span>
<nav className="flex items-center gap-1 text-sm bg-white border border-zinc-100 shadow-sm p-1 rounded-lg">
<button className="hidden sm:flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors rounded-md outline-none" title="Перша сторінка">
<iconify-icon className="text-base" icon="solar:double-alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors rounded-md outline-none">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Назад</span>
</button>
<div className="mx-3 flex items-center justify-center font-medium text-zinc-900 bg-zinc-100 rounded-md w-8 h-8">
                1
            </div>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors rounded-md outline-none">
<span className="hidden sm:inline">Далі</span>
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden sm:flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors rounded-md outline-none" title="Остання сторінка">
<iconify-icon className="text-base" icon="solar:double-alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</div>

    </>
  );
}
