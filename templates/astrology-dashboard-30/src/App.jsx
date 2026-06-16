import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030014',
surface: '#0B0B15',
primary: '#7c3aed',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(5px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<aside className="w-64 bg-[#050508] border-r border-white/5 flex flex-col z-20 flex-shrink-0">

<div className="h-20 flex items-center px-6 gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
<iconify-icon className="text-white" icon="lucide:moon" width="18"></iconify-icon>
</div>
<div>
<h1 className="font-semibold text-white tracking-tight leading-none">AstroMind</h1>
<p className="text-[10px] text-zinc-500 font-medium tracking-wide mt-0.5">Cosmic Insights</p>
</div>
</div>

<nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto">

<a className="nav-item w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium group" href="index.html">
<iconify-icon icon="lucide:layout-dashboard" width="18"></iconify-icon>
<span>Табло</span>
</a>

<a className="nav-item w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium group" href="generate.html">
<iconify-icon icon="lucide:sparkles" width="18"></iconify-icon>
<span>Генерирай хороскоп</span>
</a>

<a className="nav-item active w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium group" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
<span>Профили</span>
</a>
<a className="nav-item w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium group" href="#">
<iconify-icon icon="lucide:history" width="18"></iconify-icon>
<span>История</span>
</a>

<div className="pt-6 mt-2 pb-2">
<a className="nav-item w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium group" href="#">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon>
<span>Настройки</span>
</a>
<a className="nav-item w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium group" href="#">
<iconify-icon icon="lucide:credit-card" width="18"></iconify-icon>
<span>Монети</span>
</a>
</div>
</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold text-zinc-300 border border-white/10 group-hover:border-purple-500/50 transition-colors">NE</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white truncate">Нов Евгени</p>
<p className="text-[11px] text-zinc-500 truncate">Безплатен план</p>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:chevron-up"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative z-10 bg-[#030014]">
<div className="max-w-[1200px] mx-auto p-8 animate-fade-in pb-20">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Управление на профили</h1>
<p className="text-zinc-500 mt-1 text-sm font-light">Създавай и редактирай профилите във твоя космически кръг.</p>
</div>
<button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium gap-2 shadow-lg shadow-purple-900/20">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                    Нов Профил
                </button>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 space-y-4">

<div className="relative mb-6">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full bg-white/[0.02] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/30 transition-colors" placeholder="Търсене на профили..." type="text"/>
</div>

<div className="glass-panel p-4 rounded-xl border-l-4 border-l-purple-500 relative group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-sm font-bold border border-purple-500/20">
                                NE
                            </div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h3 className="text-white font-medium text-sm">Нов Евгени</h3>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/20">Основен</span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> София, БГ</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="10"></iconify-icon> 12.05.1990</span>
</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel p-4 rounded-xl border-l-4 border-l-transparent hover:border-l-zinc-700 relative group cursor-pointer transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-sm font-bold border border-white/5">
                                PA
                            </div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h3 className="text-zinc-200 font-medium text-sm">Мария Иванова</h3>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-zinc-400 border border-white/10">Съпруга</span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> Пловдив, БГ</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="10"></iconify-icon> 23.08.1992</span>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:edit-2" width="14"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-zinc-400 hover:text-red-400">
<iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl border-l-4 border-l-transparent hover:border-l-zinc-700 relative group cursor-pointer transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-sm font-bold border border-white/5">
                                GP
                            </div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h3 className="text-zinc-200 font-medium text-sm">Георги Петров</h3>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-zinc-400 border border-white/10">Бизнес партньор</span>
</div>
<div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:map-pin" width="10"></iconify-icon> Варна, БГ</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="10"></iconify-icon> 15.11.1988</span>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:edit-2" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 sticky top-8">
<div className="glass-panel rounded-xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-900/10">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<h2 className="text-lg font-medium text-white">Редактиране на профил</h2>
<span className="text-xs text-zinc-500">ID: 8392-A</span>
</div>
<form className="space-y-5">

<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Име на профила</label>
<input className="form-input w-full rounded-lg px-3 py-2 text-sm" placeholder="Въведи име" type="text" value="Нов Евгени"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Връзка</label>
<div className="grid grid-cols-3 gap-2">
<label className="radio-pill cursor-pointer">
<input checked="" className="hidden" name="relation" type="radio"/>
<div className="text-center py-1.5 rounded-md border border-white/10 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/5">
                                                Аз
                                            </div>
</label>
<label className="radio-pill cursor-pointer">
<input className="hidden" name="relation" type="radio"/>
<div className="text-center py-1.5 rounded-md border border-white/10 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/5">
                                                Приятел
                                            </div>
</label>
<label className="radio-pill cursor-pointer">
<input className="hidden" name="relation" type="radio"/>
<div className="text-center py-1.5 rounded-md border border-white/10 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/5">
                                                Съпруг/а
                                            </div>
</label>
<label className="radio-pill cursor-pointer">
<input className="hidden" name="relation" type="radio"/>
<div className="text-center py-1.5 rounded-md border border-white/10 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/5">
                                                Дете
                                            </div>
</label>
<label className="radio-pill cursor-pointer">
<input className="hidden" name="relation" type="radio"/>
<div className="text-center py-1.5 rounded-md border border-white/10 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/5">
                                                Роднина
                                            </div>
</label>
<label className="radio-pill cursor-pointer">
<input className="hidden" name="relation" type="radio"/>
<div className="text-center py-1.5 rounded-md border border-white/10 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-white/5">
                                                Партньор
                                            </div>
</label>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Пол</label>
<div className="flex gap-2">
<label className="radio-pill cursor-pointer flex-1">
<input checked="" className="hidden" name="gender" type="radio"/>
<div className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs text-zinc-400 transition-colors hover:bg-white/5">
<iconify-icon icon="lucide:user" width="14"></iconify-icon>
                                            Мъж
                                        </div>
</label>
<label className="radio-pill cursor-pointer flex-1">
<input className="hidden" name="gender" type="radio"/>
<div className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs text-zinc-400 transition-colors hover:bg-white/5">
<iconify-icon icon="lucide:user" width="14"></iconify-icon>
                                            Жена
                                        </div>
</label>
<label className="radio-pill cursor-pointer flex-1">
<input className="hidden" name="gender" type="radio"/>
<div className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs text-zinc-400 transition-colors hover:bg-white/5">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
                                            Друг
                                        </div>
</label>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Дата на раждане</label>
<div className="relative">
<input className="form-input w-full rounded-lg px-3 py-2 text-sm [color-scheme:dark]" type="date" value="1990-05-12"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Час на раждане</label>
<input className="form-input w-full rounded-lg px-3 py-2 text-sm [color-scheme:dark]" type="time" value="14:30"/>
</div>
</div>

<div className="flex items-center gap-3 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
<div className="relative inline-block w-9 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1f1f2e] appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle" name="unknown_time" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer" htmlFor="toggle"></label>
</input></div>
<label className="text-xs text-zinc-400 cursor-pointer select-none" htmlFor="toggle">Няма наличен час на раждане</label>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Място на раждане</label>
<div className="relative group">
<input className="form-input w-full rounded-lg px-3 py-2 text-sm pr-16" placeholder="Въведи град..." type="text" value="София, България"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<button className="p-1.5 text-zinc-500 hover:text-purple-400 transition-colors rounded hover:bg-white/5" title="Търси координати" type="button">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 hover:text-white transition-colors rounded hover:bg-white/5" title="GPS Локация" type="button">
<iconify-icon icon="lucide:crosshair" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-1 flex gap-2 text-[10px] text-zinc-600 font-mono">
<span>Lat: 42.6977</span>
<span>Long: 23.3219</span>
</div>
</div>

<div className="pt-4 flex gap-3">
<button className="flex-1 btn-primary py-2.5 rounded-lg text-sm font-medium" type="submit">
                                    Запази промените
                                </button>
<button className="px-4 btn-secondary py-2.5 rounded-lg text-sm font-medium" type="button">
                                    Отказ
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
