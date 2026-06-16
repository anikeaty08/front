import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<main className="relative w-full max-w-md h-screen sm:h-[812px] sm:max-w-[375px] bg-white sm:rounded-[2rem] sm:shadow-2xl sm:border border-gray-200/60 flex flex-col overflow-hidden">

<header className="flex-none px-5 pt-12 pb-5 sm:pt-8 bg-white z-20">
<button className="w-8 h-8 -ml-1.5 rounded-md flex items-center justify-center hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="mt-5">
<h1 className="text-xl font-medium tracking-tight text-gray-900">Select Language</h1>
<p className="text-sm text-gray-500 mt-1">Choose the language for your workspace.</p>
</div>
</header>

<div className="flex-none px-5 pb-4 z-10 bg-white">
<div className="relative flex items-center w-full h-10 rounded-lg bg-gray-50/80 border border-gray-200 focus-within:bg-white focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition-all duration-200">
<iconify-icon className="absolute left-3 text-gray-400 text-base" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full h-full pl-9 pr-4 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400" placeholder="Search..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-5 pb-32 pt-1 border-t border-gray-100">
<div className="flex flex-col gap-3 pt-4">

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input checked="" className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="en"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="UK Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/gb.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">English</span>
<span className="text-xs text-gray-500 mt-0.5">United Kingdom</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="es"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Spain Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/es.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Español</span>
<span className="text-xs text-gray-500 mt-0.5">Spain</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="fr"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="France Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/fr.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Français</span>
<span className="text-xs text-gray-500 mt-0.5">France</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="de"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Germany Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/de.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Deutsch</span>
<span className="text-xs text-gray-500 mt-0.5">Germany</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="it"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Italy Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/it.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Italiano</span>
<span className="text-xs text-gray-500 mt-0.5">Italy</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="pt"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Brazil Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/br.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Português</span>
<span className="text-xs text-gray-500 mt-0.5">Brazil</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="ru"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Russia Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/ru.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Русский</span>
<span className="text-xs text-gray-500 mt-0.5">Russia</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="zh"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="China Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/cn.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">中文 (Simplified)</span>
<span className="text-xs text-gray-500 mt-0.5">China</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="ja"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Japan Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/jp.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">日本語</span>
<span className="text-xs text-gray-500 mt-0.5">Japan</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="ko"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="South Korea Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/kr.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">한국어</span>
<span className="text-xs text-gray-500 mt-0.5">South Korea</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="hi"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="India Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/in.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">हिन्दी</span>
<span className="text-xs text-gray-500 mt-0.5">India</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="tr"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Turkey Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/tr.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Türkçe</span>
<span className="text-xs text-gray-500 mt-0.5">Turkey</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="fa"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Iran Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/ir.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">فارسی</span>
<span className="text-xs text-gray-500 mt-0.5">Iran</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex items-center justify-between p-3.5 rounded-xl border border-gray-200 cursor-pointer group transition-all duration-200 hover:border-gray-300 bg-white shadow-sm hover:shadow">
<input className="peer absolute opacity-0 w-0 h-0" name="app_language" type="radio" value="ar"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-gray-900 pointer-events-none transition-colors"></div>
<div className="flex items-center gap-3.5 z-10">
<div className="flex-none w-7 h-5 rounded-[2px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
<img alt="Saudi Arabia Flag" className="w-full h-full object-cover" src="https://flagcdn.com/w40/sa.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">العربية</span>
<span className="text-xs text-gray-500 mt-0.5">Saudi Arabia</span>
</div>
</div>
<div className="flex-none flex items-center justify-center text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
<button className="pointer-events-auto relative w-full h-12 bg-gray-900 hover:bg-black text-white rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center overflow-hidden group focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
<span className="flex items-center gap-2">
                    Save preferences
                </span>
</button>
</div>
</main>

    </>
  );
}
