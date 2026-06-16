import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
emerald: {
400: '#34d399',
500: '#10b981',
900: '#064e3b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-white/5 blur-[80px]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-lg">Lease<span className="text-white/50">Calc</span></span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#">Продукти</a>
<a className="text-white font-medium" href="#">Калькулятор</a>
<a className="hover:text-white transition-colors" href="#">Клієнтам</a>
<a className="hover:text-white transition-colors" href="#">Партнерам</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                    Увійти
                </button>
<button className="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/10 transition-all flex items-center gap-2">
                    Зв'язатися
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-28 pb-20 px-4 sm:px-6">
<div className="max-w-7xl mx-auto">

<div className="mb-10 text-center sm:text-left sm:flex sm:items-end sm:justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                        Фінансова Аналітика
                    </div>
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2">
                        Розрахунок <span className="font-serif italic text-emerald-400">лізингу</span>
</h1>
<p className="text-white/60 text-sm sm:text-base max-w-xl">
                        Розрахуйте попередній графік платежів та оцініть ефективність фінансування для вашого бізнесу в реальному часі.
                    </p>
</div>
<div className="mt-6 sm:mt-0 flex gap-2">
<button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 transition-colors" title="Export PDF">
<iconify-icon icon="solar:export-linear" width="20"></iconify-icon>
</button>
<button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 transition-colors" title="Share">
<iconify-icon icon="solar:share-linear" width="20"></iconify-icon>
</button>
<button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 transition-colors" title="Reset">
<iconify-icon icon="solar:restart-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-4 space-y-6">

<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center gap-2 mb-6 text-white/90">
<iconify-icon className="text-emerald-400" icon="solar:settings-linear" width="20"></iconify-icon>
<h2 className="text-lg font-medium tracking-tight">Параметри угоди</h2>
</div>
<div className="space-y-6">

<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1">Тип предмета лізингу</label>
<div className="relative group/select">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none z-10 flex">
<iconify-icon icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
</div>
<select className="w-full bg-black/20 border border-white/10 text-white text-sm rounded-xl py-3 pl-10 pr-4 appearance-none focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer hover:border-white/20">
<option>Виробниче обладнання</option>
<option>Сільгосптехніка</option>
<option>Вантажний транспорт</option>
<option>Легковий автопарк</option>
<option>Медичне обладнання</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/select:text-white/60 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1 flex justify-between">
<span>Вартість об'єкта</span>
<span className="text-emerald-400/80">Гривня (UAH)</span>
</label>
<div className="input-group relative flex items-center bg-black/20 rounded-xl border border-white/10 transition-all">
<span className="pl-4 text-white/40 text-sm">₴</span>
<input className="w-full bg-transparent border-none text-white text-sm py-3 px-2 focus:ring-0 placeholder-white/20 font-medium text-right font-mono" type="text" value="2 500 000"/>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-end">
<label className="text-xs text-white/60 font-medium ml-1">Авансовий платіж</label>
<div className="flex items-center gap-2 bg-black/20 rounded-lg border border-white/10 px-2 py-1">
<input className="w-8 bg-transparent border-none text-right text-xs text-emerald-400 focus:ring-0 p-0 font-mono" type="text" value="30"/>
<span className="text-xs text-white/40">%</span>
</div>
</div>
<input className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" max="70" min="10" type="range" value="30"/>
<div className="flex justify-between text-[10px] text-white/30 uppercase tracking-wider font-medium">
<span>750 000 ₴</span>
<span>Мін. 10%</span>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1">Термін лізингу</label>
<div className="grid grid-cols-4 gap-2">
<button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2 text-xs font-medium text-white/60 transition-all">12 міс</button>
<button className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg py-2 text-xs font-medium text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">24 міс</button>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2 text-xs font-medium text-white/60 transition-all">36 міс</button>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2 text-xs font-medium text-white/60 transition-all">48 міс</button>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1">Графік погашення</label>
<div className="relative group/select">
<select className="w-full bg-black/20 border border-white/10 text-white text-sm rounded-xl py-3 px-4 appearance-none focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer hover:border-white/20">
<option>Класичний (зменшення платежу)</option>
<option>Ануїтет (рівні частини)</option>
<option>Сезонний</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/select:text-white/60 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1">Ставка %</label>
<div className="input-group relative flex items-center bg-black/20 rounded-xl border border-white/10">
<input className="w-full bg-transparent border-none text-white text-sm py-2.5 px-4 focus:ring-0 font-medium text-right font-mono" type="text" value="12.5" />
<span className="pr-4 text-white/40 text-xs">%</span>
</input></div>
</div>
<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1">Комісія</label>
<div className="input-group relative flex items-center bg-black/20 rounded-xl border border-white/10">
<input className="w-full bg-transparent border-none text-white text-sm py-2.5 px-4 focus:ring-0 font-medium text-right font-mono" type="text" value="1.5" />
<span className="pr-4 text-white/40 text-xs">%</span>
</input></div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-white/60 font-medium ml-1">Страхова компанія</label>
<div className="relative group/select">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none z-10 flex">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<select className="w-full bg-black/20 border border-white/10 text-white text-sm rounded-xl py-3 pl-10 pr-4 appearance-none focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer hover:border-white/20">
<option>ARX Insurance (CASCO)</option>
<option>UNIQA Insurance Group</option>
<option>INGO (Страхова Група)</option>
<option>VUSO Insurance</option>
<option>TAS Insurance Group</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/select:text-white/60 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<button className="w-full mt-2 group relative inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 py-3.5 px-6 text-sm font-medium text-black transition-all hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]">
<span className="relative z-10">Розрахувати показники</span>
<iconify-icon className="relative z-10" icon="solar:calculator-minimalistic-linear" width="18"></iconify-icon>
<div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
<p className="text-xs text-white/60 font-medium mb-1">Щомісячний платіж</p>
<div className="flex items-baseline gap-1 mt-2">
<h3 className="text-2xl font-medium tracking-tight text-white font-mono">84 210</h3>
<span className="text-xs text-white/40">₴</span>
</div>
<div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400/80 bg-emerald-400/5 w-fit px-2 py-1 rounded-md border border-emerald-400/10">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                                Включаючи ПДВ
                            </div>
</div>

<div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
<p className="text-xs text-white/60 font-medium mb-1">Загальна переплата</p>
<div className="flex items-baseline gap-1 mt-2">
<h3 className="text-2xl font-medium tracking-tight text-white font-mono">271 040</h3>
<span className="text-xs text-white/40">₴</span>
</div>
<div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/40 w-fit px-0 py-1">
                                10.8% від вартості
                            </div>
</div>

<div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
<p className="text-xs text-white/60 font-medium mb-1">Ефективна ставка</p>
<div className="flex items-baseline gap-1 mt-2">
<h3 className="text-2xl font-medium tracking-tight text-white font-mono">14.2</h3>
<span className="text-xs text-white/40">% річних</span>
</div>
<div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/40 w-fit px-0 py-1">
                                IRR розрахунок
                            </div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Структура платежів</h3>
<div className="flex gap-4 text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-white/60">Тіло кредиту</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-900/50 border border-emerald-500/30"></span>
<span className="text-white/60">Відсотки</span>
</div>
</div>
</div>

<div className="w-full h-48 flex items-end justify-between gap-1 sm:gap-2 px-2">

<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '90%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '60%'}}></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Міс 1</div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '88%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '62%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '86%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '64%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '84%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '66%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '82%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '68%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '80%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '70%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '78%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '72%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '76%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '74%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '74%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '76%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '72%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '78%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '70%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '80%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '68%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '82%'}}></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Міс 12</div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '66%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '84%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '64%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '86%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '62%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '88%'}}></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm relative group" style={{height: '60%'}}>
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all hover:bg-emerald-400" style={{height: '90%'}}></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Фінал</div>
</div>
</div>
<div className="w-full border-t border-white/10 mt-0"></div>
<div className="flex justify-between mt-2 text-[10px] text-white/30 font-mono uppercase">
<span>Початок періоду</span>
<span>Кінець періоду</span>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
<div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Графік платежів</h3>
<button className="text-xs text-emerald-400 hover:text-white transition-colors flex items-center gap-1">
                                Розгорнути все
                                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white/[0.02] border-b border-white/5 text-xs text-white/50">
<th className="py-3 px-6 font-medium font-sans">№ / Дата</th>
<th className="py-3 px-6 font-medium font-sans text-right">Залишок</th>
<th className="py-3 px-6 font-medium font-sans text-right">Тіло</th>
<th className="py-3 px-6 font-medium font-sans text-right">Відсотки</th>
<th className="py-3 px-6 font-medium font-sans text-right text-white/80">Всього</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5 font-mono text-white/80">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-3 px-6 font-sans text-white/60">
<div className="flex flex-col">
<span className="text-white text-xs">01</span>
<span className="text-[10px]">Лист 2023</span>
</div>
</td>
<td className="py-3 px-6 text-right">1 750 000</td>
<td className="py-3 px-6 text-right text-emerald-400/80">72 916</td>
<td className="py-3 px-6 text-right text-white/40">18 229</td>
<td className="py-3 px-6 text-right font-medium text-white">91 145</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-3 px-6 font-sans text-white/60">
<div className="flex flex-col">
<span className="text-white text-xs">02</span>
<span className="text-[10px]">Груд 2023</span>
</div>
</td>
<td className="py-3 px-6 text-right">1 677 084</td>
<td className="py-3 px-6 text-right text-emerald-400/80">72 916</td>
<td className="py-3 px-6 text-right text-white/40">17 469</td>
<td className="py-3 px-6 text-right font-medium text-white">90 385</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-3 px-6 font-sans text-white/60">
<div className="flex flex-col">
<span className="text-white text-xs">03</span>
<span className="text-[10px]">Січ 2024</span>
</div>
</td>
<td className="py-3 px-6 text-right">1 604 168</td>
<td className="py-3 px-6 text-right text-emerald-400/80">72 916</td>
<td className="py-3 px-6 text-right text-white/40">16 710</td>
<td className="py-3 px-6 text-right font-medium text-white">89 626</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-3 px-6 font-sans text-white/60">
<div className="flex flex-col">
<span className="text-white text-xs">04</span>
<span className="text-[10px]">Лют 2024</span>
</div>
</td>
<td className="py-3 px-6 text-right">1 531 252</td>
<td className="py-3 px-6 text-right text-emerald-400/80">72 916</td>
<td className="py-3 px-6 text-right text-white/40">15 950</td>
<td className="py-3 px-6 text-right font-medium text-white">88 866</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-3 px-6 font-sans text-white/60">
<div className="flex flex-col">
<span className="text-white text-xs">05</span>
<span className="text-[10px]">Бер 2024</span>
</div>
</td>
<td className="py-3 px-6 text-right">1 458 336</td>
<td className="py-3 px-6 text-right text-emerald-400/80">72 916</td>
<td className="py-3 px-6 text-right text-white/40">15 190</td>
<td className="py-3 px-6 text-right font-medium text-white">88 106</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] text-center">
<button className="text-xs text-white/40 hover:text-white transition-colors">Показати ще 19 рядків</button>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/10 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white/40 text-sm">
<span>© 2023 LeaseFin Inc.</span>
</div>
<div className="flex gap-6 text-sm text-white/40">
<a className="hover:text-white transition-colors" href="#">Конфіденційність</a>
<a className="hover:text-white transition-colors" href="#">Умови</a>
<a className="hover:text-white transition-colors" href="#">Підтримка</a>
</div>
</div>
</footer>

    </>
  );
}
