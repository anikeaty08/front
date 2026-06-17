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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
brand: {
bg: '#0F0F10',
card: '#151618',
input: '#0F1012',
accent: '#FF6A55',
warnBg: '#2A1F0A',
warnText: '#FFC27A',
errorBg: '#2A1010',
errorText: '#FF9B9B',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="flex flex-col gap-4 w-full max-w-[1440px]">
<div className="text-xs font-mono text-white/45 tracking-widest uppercase">Screen 01 / 2D Viewer</div>
<div className="w-[1440px] h-[900px] bg-brand-bg rounded-[16px] border border-[rgba(255,255,255,0.08)] flex flex-col overflow-hidden shadow-2xl shrink-0">

<div className="h-16 border-b border-[rgba(255,255,255,0.08)] px-6 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-[8px] bg-brand-accent/10 flex items-center justify-center text-brand-accent font-semibold tracking-tighter text-sm">PE</div>
<span className="text-sm font-medium tracking-tight">PrideEasyBox <span className="text-white/45 font-normal ml-1">v1.1</span></span>
</div>
<div className="flex items-center gap-6">

<div className="flex bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] p-1 w-32">
<button className="flex-1 text-xs bg-brand-card shadow-sm border border-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.92)] rounded-[8px] py-1 font-medium">2D</button>
<button className="flex-1 text-xs text-white/45 hover:text-[rgba(255,255,255,0.92)] transition-colors rounded-[8px] py-1 font-medium">3D</button>
</div>
<div className="h-4 w-px bg-[rgba(255,255,255,0.08)]"></div>

<div className="flex items-center gap-2">
<span className="text-xs text-white/45 mr-2">Слой:</span>
<div className="flex gap-1">
<button className="h-6 px-2.5 rounded-full bg-brand-accent text-white text-xs font-medium flex items-center justify-center">1</button>
<button className="h-6 px-2.5 rounded-full bg-brand-card border border-[rgba(255,255,255,0.08)] text-white/65 hover:text-white text-xs font-medium flex items-center justify-center transition-colors">2</button>
<button className="h-6 px-2.5 rounded-full bg-brand-card border border-[rgba(255,255,255,0.08)] text-white/65 hover:text-white text-xs font-medium flex items-center justify-center transition-colors">3</button>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 mr-4">
<div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
<span className="text-xs font-mono text-white/65">JOB-8A9F2</span>
</div>
<button className="h-9 px-4 rounded-[12px] bg-white/5 hover:bg-white/10 border border-[rgba(255,255,255,0.08)] text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        JSON
                    </button>
<button className="h-9 px-5 rounded-[12px] bg-brand-accent hover:bg-[#ff8070] text-sm font-medium text-white transition-colors flex items-center gap-2">
                        Сгенерировать
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-1 overflow-hidden p-6 gap-4">

<div className="w-[320px] flex flex-col gap-4 overflow-y-auto pr-2 shrink-0 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-thumb]:bg-white/10 [&amp;::-webkit-scrollbar-thumb]:rounded-full">

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Геометрия (Pallet)</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Пресет</label>
<div className="relative">
<select className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm appearance-none focus:outline-none focus:border-brand-accent transition-colors">
<option>EUR (1200×800)</option>
<option>FIN (1200×1000)</option>
<option>Custom</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-white/45 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Ширина X</label>
<div className="relative">
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm focus:outline-none focus:border-brand-accent transition-colors" type="text" value="1200"/>
<span className="absolute right-3 top-2.5 text-xs text-white/45">мм</span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Глубина Y</label>
<div className="relative">
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm focus:outline-none focus:border-brand-accent transition-colors" type="text" value="800"/>
<span className="absolute right-3 top-2.5 text-xs text-white/45">мм</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Макс. высота</label>
<div className="relative">
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm focus:outline-none focus:border-brand-accent transition-colors" type="text" value="1500"/>
<span className="absolute right-3 top-2.5 text-xs text-white/45">мм</span>
</div>
</div>
</div>
</div>

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Коробка</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">X</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm text-center focus:outline-none focus:border-brand-accent transition-colors" type="text" value="300"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Y</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm text-center focus:outline-none focus:border-brand-accent transition-colors" type="text" value="400"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Z</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm text-center text-brand-warnText border-brand-warnText/50 focus:outline-none focus:border-brand-warnText transition-colors" type="text" value="300"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3 pt-2 border-t border-[rgba(255,255,255,0.04)]">
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Зазор X</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm focus:outline-none focus:border-brand-accent transition-colors" type="text" value="10"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Зазор Y</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm focus:outline-none focus:border-brand-accent transition-colors" type="text" value="10"/>
</div>
</div>
</div>

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Настройка слоёв</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 justify-between">
<label className="text-xs text-white/65 font-medium">Всего слоёв</label>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-[8px] bg-white/5 hover:bg-white/10 flex items-center justify-center text-lg border border-[rgba(255,255,255,0.08)]">-</button>
<span className="text-sm font-mono w-6 text-center">6</span>
<button className="w-8 h-8 rounded-[8px] bg-white/5 hover:bg-white/10 flex items-center justify-center text-lg border border-[rgba(255,255,255,0.08)]">+</button>
</div>
</div>
<div className="flex bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] p-1">
<button className="flex-1 text-[11px] text-white/45 hover:text-white py-1.5 font-medium rounded-[8px] transition-colors">Одинаковые</button>
<button className="flex-1 text-[11px] bg-brand-card shadow-sm border border-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.92)] py-1.5 font-medium rounded-[8px]">Чередование</button>
<button className="flex-1 text-[11px] text-white/45 hover:text-white py-1.5 font-medium rounded-[8px] transition-colors">По слоям</button>
</div>
<div className="flex flex-col gap-2 p-3 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px]">
<div className="flex items-center justify-between">
<span className="text-xs text-white/65">Паттерн нечетных (1, 3, 5)</span>
<span className="text-xs font-mono text-brand-accent">ID 1</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-white/65">Паттерн четных (2, 4, 6)</span>
<span className="text-xs font-mono text-brand-accent">ID 2</span>
</div>
</div>
</div>

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5 mb-8">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Движение</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<label className="text-xs text-white/65 font-medium w-20">VJ Pick</label>
<input className="flex-1 h-1 bg-white/10 rounded-full appearance-none outline-none accent-brand-accent" max="100" min="1" type="range" value="20"/>
<span className="text-xs font-mono w-8 text-right">20%</span>
</div>
<div className="flex items-center gap-4">
<label className="text-xs text-white/65 font-medium w-20">VJ Place</label>
<input className="flex-1 h-1 bg-white/10 rounded-full appearance-none outline-none accent-brand-accent" max="100" min="1" type="range" value="30"/>
<span className="text-xs font-mono w-8 text-right">30%</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#111214] rounded-[16px] border border-[rgba(255,255,255,0.08)] relative overflow-hidden flex items-center justify-center p-8">

<div className="absolute inset-0" style={{backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'}}></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-brand-accent/20"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-brand-accent/20"></div>

<div className="relative w-[600px] h-[400px] border-2 border-dashed border-white/20 bg-brand-bg/50 flex flex-wrap content-start items-start gap-1 p-1">

<div className="absolute -bottom-6 -left-6 flex items-end">
<div className="w-8 h-px bg-brand-accent relative"><span className="absolute right-0 -bottom-4 text-[10px] text-brand-accent font-mono">X</span></div>
<div className="h-8 w-px bg-brand-accent relative origin-bottom-left"><span className="absolute -top-4 -left-1.5 text-[10px] text-brand-accent font-mono">Y</span></div>
</div>
<div className="absolute -bottom-6 right-0 text-[10px] text-white/30 font-mono">1200мм</div>
<div className="absolute top-0 -left-10 text-[10px] text-white/30 font-mono rotate-180" style={{writingMode: 'vertical-rl'}}>800мм</div>

<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm relative group">
<span className="text-xs font-mono text-white/45 group-hover:text-white transition-colors">1</span>
<div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-brand-accent/50 opacity-0 group-hover:opacity-100"></div>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">2</span>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">3</span>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">4</span>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">5</span>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">6</span>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">7</span>
</div>
<div className="w-[145px] h-[195px] bg-[#1C1E22] border border-white/10 rounded-[4px] flex items-center justify-center hover:border-brand-accent/50 transition-colors shadow-sm">
<span className="text-xs font-mono text-white/45">8</span>
</div>
</div>

<div className="absolute bottom-6 bg-brand-bg/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-2 flex items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-[#1C1E22] border border-white/20 rounded-[2px]"></div>
<span className="text-white/65">8 коробок</span>
</div>
<div className="w-px h-3 bg-[rgba(255,255,255,0.1)]"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/45" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-white/65">Заполнение 98%</span>
</div>
</div>
</div>

<div className="w-[320px] shrink-0 flex flex-col gap-4">

<div className="bg-brand-warnBg border border-brand-warnText/20 rounded-[12px] p-4 flex gap-3 items-start shadow-sm">
<iconify-icon className="text-brand-warnText text-lg shrink-0 mt-0.5" icon="solar:danger-triangle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-brand-warnText">Превышение высоты</span>
<span className="text-xs text-brand-warnText/80 leading-relaxed">Расчетная высота сборки (1800 мм) превышает заданный лимит паллеты (1500 мм).</span>
<button className="text-xs text-brand-warnText font-medium text-left mt-1 underline underline-offset-2 hover:text-brand-warnText/80 transition-colors">Игнорировать ограничение</button>
</div>
</div>

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col flex-1 relative overflow-hidden">
<div className="flex flex-col mb-6 gap-1 relative z-10">
<div className="flex items-center justify-between">
<span className="text-xs font-mono text-brand-accent tracking-widest uppercase">Layer 1/6</span>
<span className="text-xs bg-white/5 px-2 py-0.5 rounded-full border border-white/10 text-white/65">ID 1</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight mt-2">8 коробок</h2>
<p className="text-sm text-white/45">В текущем слое</p>
</div>
<div className="flex flex-col gap-3 relative z-10 text-sm">
<div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
<span className="text-white/65">Всего слоёв</span>
<span className="font-medium text-[rgba(255,255,255,0.92)]">6</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
<span className="text-white/65">Общая высота</span>
<span className="font-medium text-brand-warnText">1800 мм</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
<span className="text-white/65">Паллета</span>
<span className="font-mono text-xs text-[rgba(255,255,255,0.92)]">1200×800</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
<span className="text-white/65">Размер коробки</span>
<span className="font-mono text-xs text-[rgba(255,255,255,0.92)]">300×400×300</span>
</div>
</div>
<div className="mt-auto flex flex-col gap-3 relative z-10 pt-6">
<button className="w-full h-11 rounded-[12px] bg-brand-accent/50 text-white/50 cursor-not-allowed text-sm font-medium flex items-center justify-center gap-2">
                                Сгенерировать код
                                <iconify-icon icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-[11px] text-center text-brand-warnText/60">Исправьте ошибки перед генерацией</p>
</div>

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-warnBg/20 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 w-full max-w-[1440px]">
<div className="text-xs font-mono text-white/45 tracking-widest uppercase">Screen 01.5 / 3D Viewer</div>
<div className="w-[1440px] h-[900px] bg-brand-bg rounded-[16px] border border-[rgba(255,255,255,0.08)] flex flex-col overflow-hidden shadow-2xl shrink-0">

<div className="h-16 border-b border-[rgba(255,255,255,0.08)] px-6 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-[8px] bg-brand-accent/10 flex items-center justify-center text-brand-accent font-semibold tracking-tighter text-sm">PE</div>
<span className="text-sm font-medium tracking-tight">PrideEasyBox <span className="text-white/45 font-normal ml-1">v1.1</span></span>
</div>
<div className="flex items-center gap-6">

<div className="flex bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] p-1 w-32">
<button className="flex-1 text-xs text-white/45 hover:text-[rgba(255,255,255,0.92)] transition-colors rounded-[8px] py-1 font-medium">2D</button>
<button className="flex-1 text-xs bg-brand-card shadow-sm border border-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.92)] rounded-[8px] py-1 font-medium">3D</button>
</div>
<div className="h-4 w-px bg-[rgba(255,255,255,0.08)]"></div>

<div className="flex items-center gap-2">
<span className="text-xs text-white/45 mr-2">Слой:</span>
<div className="flex gap-1">
<button className="h-6 px-3 rounded-full bg-brand-card border border-[rgba(255,255,255,0.08)] text-white/65 hover:text-white text-xs font-medium flex items-center justify-center transition-colors">Все</button>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 mr-4">
<div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
<span className="text-xs font-mono text-white/65">JOB-8A9F2</span>
</div>
<button className="h-9 px-4 rounded-[12px] bg-white/5 hover:bg-white/10 border border-[rgba(255,255,255,0.08)] text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        JSON
                    </button>
<button className="h-9 px-5 rounded-[12px] bg-brand-accent hover:bg-[#ff8070] text-sm font-medium text-white transition-colors flex items-center gap-2">
                        Сгенерировать
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-1 overflow-hidden p-6 gap-4">

<div className="w-[320px] flex flex-col gap-4 overflow-y-auto pr-2 shrink-0 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-thumb]:bg-white/10 [&amp;::-webkit-scrollbar-thumb]:rounded-full">

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Геометрия (Pallet)</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Пресет</label>
<div className="relative">
<select className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm appearance-none focus:outline-none focus:border-brand-accent transition-colors">
<option>EUR (1200×800)</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-white/45 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Коробка</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">X</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm text-center focus:outline-none focus:border-brand-accent transition-colors" type="text" value="300"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Y</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm text-center focus:outline-none focus:border-brand-accent transition-colors" type="text" value="400"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-white/65 font-medium">Z</label>
<input className="w-full h-9 bg-brand-input border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 text-sm text-center text-brand-warnText border-brand-warnText/50 focus:outline-none focus:border-brand-warnText transition-colors" type="text" value="300"/>
</div>
</div>
</div>
<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col gap-5">
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-semibold tracking-tight">Настройка слоёв</span>
<iconify-icon className="text-white/45 group-hover:text-white transition-colors" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 justify-between">
<label className="text-xs text-white/65 font-medium">Всего слоёв</label>
<div className="flex items-center gap-2">
<span className="text-sm font-mono w-6 text-center text-brand-warnText">6</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#111214] rounded-[16px] border border-[rgba(255,255,255,0.08)] relative overflow-hidden flex items-center justify-center p-8" style={{perspective: '2000px'}}>

<div className="absolute inset-0" style={{backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'}}></div>

<div className="relative w-[300px] h-[200px]" style={{transform: 'scale(0.9) translateY(40px) rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0" style={{transform: 'translateZ(-30px)', transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-black/60 blur-[30px]" style={{transform: 'translateZ(-20px)', width: '120%', height: '120%', top: '-10%', left: '-10%'}}></div>

<div className="absolute inset-0 bg-[#2A2118] border border-[#4A3A2A]" style={{transform: 'translateZ(30px)'}}></div>

<div className="absolute left-0 bottom-0 w-[300px] h-[30px] bg-[#221812] border-t border-[#4A3A2A] origin-bottom" style={{transform: 'rotateX(-90deg)'}}></div>

<div className="absolute top-0 right-0 w-[30px] h-[200px] bg-[#18110D] border-t border-[#4A3A2A] origin-right" style={{transform: 'rotateY(90deg)'}}></div>
</div>

<div className="absolute inset-0" style={{transform: 'translateZ(0px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[#2A2D32] border border-[rgba(255,255,255,0.15)]" style={{transform: 'translateZ(75px)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px)), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute left-0 bottom-0 w-[300px] h-[75px] bg-[#1C1E22] border border-[rgba(255,255,255,0.15)] origin-bottom" style={{transform: 'rotateX(-90deg)', backgroundSize: '75px 75px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute top-0 right-0 w-[75px] h-[200px] bg-[#151618] border border-[rgba(255,255,255,0.15)] origin-right" style={{transform: 'rotateY(90deg)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
</div>

<div className="absolute inset-0" style={{transform: 'translateZ(78px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[#2A2D32] border border-[rgba(255,255,255,0.15)]" style={{transform: 'translateZ(75px)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px)), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute left-0 bottom-0 w-[300px] h-[75px] bg-[#1C1E22] border border-[rgba(255,255,255,0.15)] origin-bottom" style={{transform: 'rotateX(-90deg)', backgroundSize: '75px 75px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute top-0 right-0 w-[75px] h-[200px] bg-[#151618] border border-[rgba(255,255,255,0.15)] origin-right" style={{transform: 'rotateY(90deg)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
</div>

<div className="absolute inset-0" style={{transform: 'translateZ(156px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[#2A2D32] border border-[rgba(255,255,255,0.15)]" style={{transform: 'translateZ(75px)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px)), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute left-0 bottom-0 w-[300px] h-[75px] bg-[#1C1E22] border border-[rgba(255,255,255,0.15)] origin-bottom" style={{transform: 'rotateX(-90deg)', backgroundSize: '75px 75px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute top-0 right-0 w-[75px] h-[200px] bg-[#151618] border border-[rgba(255,255,255,0.15)] origin-right" style={{transform: 'rotateY(90deg)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
</div>

<div className="absolute inset-0" style={{transform: 'translateZ(234px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[#2A2D32] border border-[rgba(255,255,255,0.15)]" style={{transform: 'translateZ(75px)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px)), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute left-0 bottom-0 w-[300px] h-[75px] bg-[#1C1E22] border border-[rgba(255,255,255,0.15)] origin-bottom" style={{transform: 'rotateX(-90deg)', backgroundSize: '75px 75px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute top-0 right-0 w-[75px] h-[200px] bg-[#151618] border border-[rgba(255,255,255,0.15)] origin-right" style={{transform: 'rotateY(90deg)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
</div>

<div className="absolute inset-0" style={{transform: 'translateZ(312px)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[#2A2D32] border border-[rgba(255,255,255,0.15)]" style={{transform: 'translateZ(75px)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px)), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute left-0 bottom-0 w-[300px] h-[75px] bg-[#1C1E22] border border-[rgba(255,255,255,0.15)] origin-bottom" style={{transform: 'rotateX(-90deg)', backgroundSize: '75px 75px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
<div className="absolute top-0 right-0 w-[75px] h-[200px] bg-[#151618] border border-[rgba(255,255,255,0.15)] origin-right" style={{transform: 'rotateY(90deg)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.05) calc(100% - 1px))'}}></div>
</div>

<div className="absolute inset-0" style={{transform: 'translateZ(390px)', transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-brand-warnBg border border-brand-warnText/50 flex items-center justify-center" style={{transform: 'translateZ(75px)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,194,122,0.15) calc(100% - 1px)), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,194,122,0.15) calc(100% - 1px))'}}>
<span className="text-brand-warnText/80 font-mono text-xl tracking-widest uppercase font-semibold">Limit Exceeded</span>
</div>

<div className="absolute left-0 bottom-0 w-[300px] h-[75px] bg-[#221508] border border-brand-warnText/50 origin-bottom" style={{transform: 'rotateX(-90deg)', backgroundSize: '75px 75px', backgroundImage: 'linear-gradient(to right, transparent calc(100% - 1px), rgba(255,194,122,0.15) calc(100% - 1px))'}}></div>

<div className="absolute top-0 right-0 w-[75px] h-[200px] bg-[#180E04] border border-brand-warnText/50 origin-right" style={{transform: 'rotateY(90deg)', backgroundSize: '75px 100px', backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,194,122,0.15) calc(100% - 1px))'}}></div>
</div>
</div>

<div className="absolute bottom-6 bg-brand-bg/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-2 flex items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/45" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-white/65">48 коробок</span>
</div>
<div className="w-px h-3 bg-[rgba(255,255,255,0.1)]"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-warnText" icon="solar:ruler-angular-linear"></iconify-icon>
<span className="text-brand-warnText">Высота 1800 мм (Max 1500 мм)</span>
</div>
</div>
</div>

<div className="w-[320px] shrink-0 flex flex-col gap-4">

<div className="bg-brand-warnBg border border-brand-warnText/20 rounded-[12px] p-4 flex gap-3 items-start shadow-sm">
<iconify-icon className="text-brand-warnText text-lg shrink-0 mt-0.5" icon="solar:danger-triangle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-brand-warnText">Превышение высоты</span>
<span className="text-xs text-brand-warnText/80 leading-relaxed">Слой 6 превышает допустимую высоту паллеты.</span>
<button className="text-xs text-brand-warnText font-medium text-left mt-1 underline underline-offset-2 hover:text-brand-warnText/80 transition-colors">Удалить верхний слой</button>
</div>
</div>

<div className="bg-brand-card border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 flex flex-col flex-1 relative overflow-hidden">
<div className="flex flex-col mb-6 gap-1 relative z-10">
<div className="flex items-center justify-between">
<span className="text-xs font-mono text-white/45 tracking-widest uppercase">Summary</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight mt-2 text-brand-warnText">48 коробок</h2>
<p className="text-sm text-white/45">Во всех слоях</p>
</div>
<div className="flex flex-col gap-3 relative z-10 text-sm">
<div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
<span className="text-white/65">Всего слоёв</span>
<span className="font-medium text-[rgba(255,255,255,0.92)]">6</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.04)]">
<span className="text-white/65">Общая высота</span>
<span className="font-medium text-brand-warnText">1800 мм</span>
</div>
</div>
<div className="mt-auto flex flex-col gap-3 relative z-10 pt-6">
<button className="w-full h-11 rounded-[12px] bg-brand-accent/50 text-white/50 cursor-not-allowed text-sm font-medium flex items-center justify-center gap-2">
                                Сгенерировать код
                                <iconify-icon icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-warnBg/20 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 w-full max-w-[1440px]">
<div className="text-xs font-mono text-white/45 tracking-widest uppercase">Screen 02 / Code Viewer</div>
<div className="w-[1440px] h-[900px] bg-brand-bg rounded-[16px] border border-[rgba(255,255,255,0.08)] flex overflow-hidden shadow-2xl shrink-0">

<div className="w-64 border-r border-[rgba(255,255,255,0.08)] bg-brand-card flex flex-col p-4 shrink-0">
<div className="text-xs font-semibold text-white/45 uppercase tracking-wider mb-4 px-3">View Content</div>
<div className="flex flex-col gap-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-sm text-white/65 hover:bg-white/5 transition-colors text-left">
<iconify-icon className="text-brand-warnText" icon="solar:danger-triangle-linear"></iconify-icon>
                        Warnings <span className="ml-auto text-[10px] bg-brand-warnBg text-brand-warnText px-1.5 rounded-full border border-brand-warnText/20">1</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-sm text-[rgba(255,255,255,0.92)] bg-white/10 border border-white/5 transition-colors text-left font-medium shadow-sm">
<iconify-icon icon="solar:code-file-linear"></iconify-icon>
                        Program Code (JSON)
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-sm text-white/65 hover:bg-white/5 transition-colors text-left">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
                        Checklist
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-sm text-white/65 hover:bg-white/5 transition-colors text-left">
<iconify-icon icon="solar:target-linear"></iconify-icon>
                        Teach Points
                    </button>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0F1012]">
<div className="h-14 border-b border-[rgba(255,255,255,0.04)] px-6 flex items-center justify-between bg-brand-card/50">
<span className="text-sm font-mono text-white/65">config_job_8A9F2.json</span>
<div className="flex gap-3">
<button className="text-xs font-medium text-[rgba(255,255,255,0.92)] hover:text-white px-3 py-1.5 rounded-[8px] bg-white/5 border border-white/10 flex items-center gap-2">
<iconify-icon icon="solar:copy-linear"></iconify-icon> Copy
                        </button>
<button className="text-xs font-medium text-[rgba(255,255,255,0.92)] hover:text-white px-3 py-1.5 rounded-[8px] bg-white/5 border border-white/10 flex items-center gap-2">
<iconify-icon icon="solar:download-linear"></iconify-icon> Download
                        </button>
</div>
</div>
<div className="flex-1 p-6 overflow-y-auto font-mono text-sm leading-relaxed text-white/80 [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:bg-white/10 [&amp;::-webkit-scrollbar-thumb]:rounded-full whitespace-pre">
<span className="text-[#89DDFF]">{</span>
<span className="text-[#F07178]">"meta"</span><span className="text-[#89DDFF]">: {</span>
<span className="text-[#F07178]">"job_id"</span>: <span className="text-[#C3E88D]">"8A9F2"</span>,
    <span className="text-[#F07178]">"robot_model"</span>: <span className="text-[#C3E88D]">"Regal/MOKA"</span>,
    <span className="text-[#F07178]">"process_no"</span>: <span className="text-[#F78C6C]">1</span>,
    <span className="text-[#F07178]">"tool_id"</span>: <span className="text-[#F78C6C]">1</span>,
    <span className="text-[#F07178]">"user_pallet_id"</span>: <span className="text-[#F78C6C]">2</span>
<span className="text-[#89DDFF]">}</span>,
  <span className="text-[#F07178]">"pallet"</span><span className="text-[#89DDFF]">: {</span>
<span className="text-[#F07178]">"width_mm"</span>: <span className="text-[#F78C6C]">1200</span>,
    <span className="text-[#F07178]">"depth_mm"</span>: <span className="text-[#F78C6C]">800</span>,
    <span className="text-[#F07178]">"max_height_mm"</span>: <span className="text-[#F78C6C]">1500</span>
<span className="text-[#89DDFF]">}</span>,
  <span className="text-[#F07178]">"box"</span><span className="text-[#89DDFF]">: {</span>
<span className="text-[#F07178]">"size_x_mm"</span>: <span className="text-[#F78C6C]">300</span>,
    <span className="text-[#F07178]">"size_y_mm"</span>: <span className="text-[#F78C6C]">400</span>,
    <span className="text-[#F07178]">"size_z_mm"</span>: <span className="text-[#F78C6C]">300</span> <span className="text-white/30">// modified from 120</span>,
    <span className="text-[#F07178]">"clear_x_mm"</span>: <span className="text-[#F78C6C]">10</span>,
    <span className="text-[#F07178]">"clear_y_mm"</span>: <span className="text-[#F78C6C]">10</span>
<span className="text-[#89DDFF]">}</span>,
  <span className="text-[#F07178]">"layers"</span><span className="text-[#89DDFF]">: {</span>
<span className="text-[#F07178]">"count"</span>: <span className="text-[#F78C6C]">6</span>,
    <span className="text-[#F07178]">"duplicate"</span>: <span className="text-[#C3E88D]">"alternate"</span>,
    <span className="text-[#F07178]">"layer_patterns"</span>: <span className="text-[#89DDFF]">[</span><span className="text-[#F78C6C]">1</span>, <span className="text-[#F78C6C]">2</span>, <span className="text-[#F78C6C]">1</span>, <span className="text-[#F78C6C]">2</span>, <span className="text-[#F78C6C]">1</span>, <span className="text-[#F78C6C]">2</span><span className="text-[#89DDFF]">]</span>
<span className="text-[#89DDFF]">}</span>,
  <span className="text-[#F07178]">"teach_points"</span><span className="text-[#89DDFF]">: {</span>
</div></div></div></div>
    </>
  );
}
