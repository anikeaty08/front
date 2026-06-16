import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#01ac6a] flex items-center justify-center text-white shadow-lg shadow-green-600/20">
<i className="w-5 h-5 stroke-[3]" data-lucide="check"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-bold tracking-tight text-slate-900">СБЕР</span>
<span className="text-lg font-medium tracking-tight text-slate-500">ЛОГИСТИКА</span>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-24 lg:pt-40 lg:pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-[#01ac6a] text-xs font-semibold uppercase tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01ac6a] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#01ac6a]"></span>
</span>
                        Production Ready
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.05] mb-8">
                        Единая экосистема <br/>
<span className="text-slate-400 font-medium">управления логистикой</span>
</h1>
<p className="text-xl text-slate-500 leading-relaxed font-normal max-w-lg">
                        Полная автоматизация процессов: от интеграции с SAP до управления состояниями заказов и агентской сетью в одном интерфейсе.
                    </p>
<div className="mt-12 flex items-center gap-6 text-sm font-medium text-slate-400">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#01ac6a]" data-lucide="shield-check"></i>
<span>Enterprise Security</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#01ac6a]" data-lucide="zap"></i>
<span>High Load</span>
</div>
</div>
</div>

<div className="lg:col-span-7 perspective-2000 relative h-[600px] w-full flex items-center justify-center lg:justify-end">

<div className="absolute inset-0 bg-gradient-to-tr from-green-50/50 via-transparent to-blue-50/30 rounded-full blur-3xl -z-10 opacity-60"></div>

<div className="absolute top-0 right-0 lg:-right-10 w-full lg:w-[700px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform scale-90 translate-y-[-40px] translate-x-[40px] lg:translate-x-[0px] opacity-90 transition-all hover:translate-y-[-50px] duration-700 z-0">

<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="ml-4 text-xs text-slate-400 font-medium">admin.sberlogistics.ru / sap-integration</div>
</div>

<div className="bg-[#1e88e5] p-5">
<div className="flex justify-between items-center text-white mb-4">
<h3 className="text-lg font-medium">Панель управления <span className="text-white/60 mx-2">→</span> Sap Integration</h3>
<div className="flex gap-3 text-sm">
<span className="opacity-80">Поиск</span>
<i className="w-4 h-4" data-lucide="search"></i>
</div>
</div>

<div className="grid grid-cols-4 gap-4">
<div className="col-span-1">
<label className="block text-[10px] uppercase text-white/70 mb-1 font-semibold tracking-wider">Id запроса</label>
<input className="w-full bg-white/10 border border-white/20 rounded text-white text-sm px-2 py-1.5 focus:outline-none" type="text" value="43512"/>
</div>
<div className="col-span-1">
<label className="block text-[10px] uppercase text-white/70 mb-1 font-semibold tracking-wider">Создан с</label>
<input className="w-full bg-white/10 border border-white/20 rounded text-white text-sm px-2 py-1.5 focus:outline-none" type="text" value="2020-02-10"/>
</div>
<div className="col-span-1">
<label className="block text-[10px] uppercase text-white/70 mb-1 font-semibold tracking-wider">Создан по</label>
<input className="w-full bg-white/10 border border-white/20 rounded text-white text-sm px-2 py-1.5 focus:outline-none" type="text" value="2020-02-27"/>
</div>
<div className="col-span-1 flex items-end">
<button className="w-full bg-white text-[#1e88e5] text-sm font-medium py-1.5 rounded hover:bg-blue-50 transition">Отфильтровать</button>
</div>
</div>
</div>

<div className="p-0">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
<tr>
<th className="px-6 py-3 font-medium">Запрос</th>
<th className="px-6 py-3 font-medium">Статус</th>
<th className="px-6 py-3 font-medium">ID</th>
<th className="px-6 py-3 font-medium text-right">Время</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="bg-blue-50/30">
<td className="px-6 py-3 text-slate-700">transfer-operation</td>
<td className="px-6 py-3"><span className="bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded text-xs font-bold">FAIL</span></td>
<td className="px-6 py-3 text-slate-500">43511</td>
<td className="px-6 py-3 text-right text-slate-400">12:55:34</td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-700">create-order</td>
<td className="px-6 py-3"><span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-bold">OK</span></td>
<td className="px-6 py-3 text-slate-500">43512</td>
<td className="px-6 py-3 text-right text-slate-400">12:58:39</td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-700">update-status</td>
<td className="px-6 py-3"><span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-bold">OK</span></td>
<td className="px-6 py-3 text-slate-500">43513</td>
<td className="px-6 py-3 text-right text-slate-400">13:01:20</td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-700">sync-stock</td>
<td className="px-6 py-3"><span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-bold">OK</span></td>
<td className="px-6 py-3 text-slate-500">43514</td>
<td className="px-6 py-3 text-right text-slate-400">13:05:45</td>
</tr>
</tbody>
</table>
<div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-xs text-[#1e88e5] cursor-pointer hover:underline text-right">
                                Развернуть все ↓
                            </div>
</div>
</div>

<div className="absolute bottom-10 left-0 lg:-left-12 w-full lg:w-[600px] bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden z-20 transition-transform duration-500 hover:scale-[1.02]">

<div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2 text-sm text-slate-500">
<span className="text-blue-500">Панель управления</span>
<span className="text-slate-300">/</span>
<span className="text-blue-500">Пользователи</span>
<span className="text-slate-300">/</span>
<span className="truncate max-w-[100px]">U39102-SBER-LOG</span>
</div>

<div className="bg-green-50 border-l-4 border-[#01ac6a] px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-green-800 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                                Состояние успешно добавлено.
                            </div>
<i className="w-4 h-4 text-green-800 cursor-pointer opacity-50 hover:opacity-100" data-lucide="x"></i>
</div>
<div className="p-8">
<h2 className="text-2xl font-semibold text-slate-800 mb-6 tracking-tight">Управление состояниями</h2>
<div className="grid grid-cols-12 gap-8">

<div className="col-span-8">
<div className="flex justify-between items-end mb-2">
<h4 className="text-sm font-medium text-slate-500 uppercase tracking-wide">Доступные состояния</h4>
</div>
<div className="border rounded-lg overflow-hidden border-slate-100">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500">
<tr>
<th className="px-4 py-2 font-medium w-20">Код</th>
<th className="px-4 py-2 font-medium">Наименование</th>
<th className="px-4 py-2 font-medium">Дата</th>
<th className="w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-4 py-3"><span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-xs font-mono">main</span></td>
<td className="px-4 py-3 font-medium text-slate-700">Основной</td>
<td className="px-4 py-3 text-slate-400 text-xs">18.12.2019</td>
<td className="px-4 py-3"></td>
</tr>
<tr>
<td className="px-4 py-3"><span className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded text-xs font-mono">defect</span></td>
<td className="px-4 py-3 font-medium text-slate-700">Брак</td>
<td className="px-4 py-3 text-slate-400 text-xs">12.02.2020</td>
<td className="px-4 py-3 flex justify-end gap-2">
<button className="text-red-500 hover:text-red-700"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
<button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4" data-lucide="edit-2"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-4 bg-slate-50 rounded-lg p-4 border border-slate-100">
<h4 className="text-sm font-medium text-slate-700 mb-4">Добавить новое</h4>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Код</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-[#01ac6a] focus:ring-1 focus:ring-[#01ac6a] outline-none transition" placeholder="new_state" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Наименование</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-[#01ac6a] focus:ring-1 focus:ring-[#01ac6a] outline-none transition" placeholder="Название" type="text"/>
</div>
<button className="w-full bg-[#01ac6a] hover:bg-[#01965c] text-white text-sm font-medium py-2 rounded transition shadow-lg shadow-green-600/20 mt-2">
                                            Сохранить
                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-[-150px] lg:translate-y-[50px] z-30 group perspective-1000 cursor-pointer">
<div className="w-48 h-48 relative transform-style-3d animate-float transition-transform duration-700 group-hover:scale-110">

<div className="absolute inset-0 bg-[#01ac6a] rounded-2xl shadow-[0_20px_50px_rgba(1,172,106,0.4)] flex items-center justify-center border border-green-400/30 overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-10 -mb-10"></div>
<svg className="absolute w-full h-full opacity-30 p-4" fill="none" stroke="white" strokeWidth="2" viewbox="0 0 100 100">
<path d="M20,20 L80,20 L80,80 L20,80 Z"></path>
<path d="M50,20 L50,80"></path>
<path d="M20,50 L80,50"></path>
<circle cx="50" cy="50" fill="white" r="10"></circle>
</svg>
<div className="relative z-10 text-center">
<i className="w-10 h-10 text-white mx-auto mb-2" data-lucide="box"></i>
<div className="text-white font-bold text-sm tracking-widest">СБЕР</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#01ac6a]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Агентская сеть</h3>
<p className="text-base text-slate-500">
                        Комплексная система мониторинга KPI и отчетности для удаленных агентов в режиме реального времени.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#01ac6a]" data-lucide="package-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Сеть постаматов</h3>
<p className="text-base text-slate-500">
                        Управление жизненным циклом ячеек и пользовательский интерфейс терминалов самообслуживания.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#01ac6a]" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Shiptor Core &amp; SAP</h3>
<p className="text-base text-slate-500">
                        Бесшовная интеграция ядра Shiptor с корпоративной системой SAP для обработки больших данных.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#01ac6a] mb-6">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-sm text-slate-400">© 2024 СберЛогистика. Демонстрация интерфейсов.</p>
</div>
</footer>
<style>
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
    </style>


    </>
  );
}
