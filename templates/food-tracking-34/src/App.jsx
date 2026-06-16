import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#151515] rounded-[32px] p-6 w-full max-w-md shadow-2xl border border-white/5 flex flex-col">

<div className="flex justify-between items-center text-base">
<div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-2 rounded-full flex items-center gap-2 font-medium">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                em 15 min
            </div>
<div className="flex items-center gap-2 text-slate-300">
<i className="w-5 h-5" data-lucide="clock"></i>
<span>08:30</span>
</div>
</div>

<div className="flex justify-between items-end mt-8 mb-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-1.5">Café da manhã</h2>
<p className="text-base text-slate-400">421 kcal sugerido</p>
</div>
<button className="w-14 h-14 bg-amber-400 text-black rounded-full flex items-center justify-center hover:bg-amber-300 transition-colors shrink-0 shadow-[0_4px_20px_rgba(251,191,36,0.3)]">
<i className="w-7 h-7" data-lucide="plus"></i>
</button>
</div>
<div className="w-full h-px bg-white/10 mb-6"></div>

<div>

<div className="flex w-full h-1.5 gap-1.5 mb-4">
<div className="bg-amber-400 rounded-full w-[45%]"></div>
<div className="bg-fuchsia-500 rounded-full w-[35%]"></div>
<div className="bg-slate-700 rounded-full w-[20%]"></div>
</div>

<div className="flex items-center gap-5 text-sm text-slate-400">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span>Carbo <span className="text-white font-medium ml-0.5">42g</span></span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
<span>Proteína <span className="text-white font-medium ml-0.5">28g</span></span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<span>Gordura <span className="text-white font-medium ml-0.5">14g</span></span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-7 w-full max-w-md shadow-sm border border-slate-200 flex flex-col">

<div className="flex justify-between items-center text-base">
<div className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full flex items-center gap-2 font-medium border border-amber-100">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                em 15 min
            </div>
<div className="flex items-center gap-1.5 text-slate-500">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>08:30</span>
</div>
</div>

<div className="flex justify-between items-end mt-8 mb-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-1">Café da manhã</h2>
<p className="text-base text-slate-500">421 kcal sugerido</p>
</div>
<button className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors shrink-0 shadow-sm">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>
<div className="w-full h-px bg-slate-100 mb-6"></div>

<div>

<div className="flex w-full h-2 gap-1 mb-4">
<div className="bg-amber-400 rounded-full w-[45%]"></div>
<div className="bg-fuchsia-400 rounded-full w-[35%]"></div>
<div className="bg-slate-200 rounded-full w-[20%]"></div>
</div>

<div className="flex items-center justify-between text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span>Carbo <span className="text-slate-900 font-medium">42g</span></span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
<span>Proteína <span className="text-slate-900 font-medium">28g</span></span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<span>Gordura <span className="text-slate-900 font-medium">14g</span></span>
</div>
</div>
</div>
</div>

<div className="bg-transparent rounded-[24px] p-6 w-full max-w-md border-2 border-slate-200 flex flex-col hover:border-slate-300 transition-colors">

<div className="flex justify-between items-center text-sm">
<div className="text-amber-600 flex items-center gap-1.5 font-medium">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                em 15 min
            </div>
<div className="text-slate-400 font-medium">
                08:30
            </div>
</div>

<div className="flex justify-between items-start mt-6">
<div className="pr-4">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-1">Café da manhã</h2>
<p className="text-base text-slate-500">421 kcal sugerido</p>
</div>
<button className="w-10 h-10 border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-all shrink-0">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>

<div className="mt-8">

<div className="flex w-full h-1 rounded-full overflow-hidden mb-3 bg-slate-100">
<div className="bg-blue-500 w-[45%]"></div>
<div className="bg-blue-300 w-[35%]"></div>
<div className="bg-slate-300 w-[20%]"></div>
</div>

<div className="flex items-center gap-6 text-sm text-slate-500">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider mb-0.5">Carbo</span>
<span className="text-slate-900 font-medium text-base">42g</span>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider mb-0.5">Proteína</span>
<span className="text-slate-900 font-medium text-base">28g</span>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider mb-0.5">Gordura</span>
<span className="text-slate-900 font-medium text-base">14g</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-white to-slate-50/50 rounded-[32px] p-7 w-full max-w-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white flex flex-col relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex justify-between items-center text-sm relative z-10">
<div className="bg-white shadow-sm border border-slate-100 text-emerald-600 px-3 py-1.5 rounded-full flex items-center gap-2 font-medium">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                em 15 min
            </div>
<div className="bg-slate-100/80 px-3 py-1.5 rounded-full text-slate-600 font-medium flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
                08:30
            </div>
</div>

<div className="flex justify-between items-end mt-8 mb-6 relative z-10">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-800 mb-1">Café da manhã</h2>
<p className="text-base text-slate-400">421 kcal sugerido</p>
</div>
<button className="w-14 h-14 bg-white shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-slate-50 text-slate-800 rounded-2xl flex items-center justify-center hover:-translate-y-0.5 transition-transform shrink-0">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6 relative z-10"></div>

<div className="relative z-10">

<div className="bg-slate-100 rounded-full p-1 mb-4 flex gap-1">
<div className="bg-emerald-400 h-2 rounded-full w-[45%]"></div>
<div className="bg-teal-300 h-2 rounded-full w-[35%]"></div>
<div className="bg-slate-300 h-2 rounded-full w-[20%]"></div>
</div>

<div className="flex items-center gap-4 text-base">
<div className="bg-white shadow-sm border border-slate-100 rounded-xl px-3 py-2 flex-1 flex flex-col">
<span className="text-xs text-slate-400 mb-0.5 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Carbo</span>
<span className="text-slate-800 font-medium">42g</span>
</div>
<div className="bg-white shadow-sm border border-slate-100 rounded-xl px-3 py-2 flex-1 flex flex-col">
<span className="text-xs text-slate-400 mb-0.5 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-teal-300"></div> Prot</span>
<span className="text-slate-800 font-medium">28g</span>
</div>
<div className="bg-white shadow-sm border border-slate-100 rounded-xl px-3 py-2 flex-1 flex flex-col">
<span className="text-xs text-slate-400 mb-0.5 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Gord</span>
<span className="text-slate-800 font-medium">14g</span>
</div>
</div>
</div>
</div>




    </>
  );
}
