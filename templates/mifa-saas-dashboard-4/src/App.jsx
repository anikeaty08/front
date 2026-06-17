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
colors: {
brand: {
orange: '#FF6A00',
dark: '#0F172A',
}
},
letterSpacing: {
tighter: '-0.04em',
widest: '0.2em',
}
}
}
}

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
      
<div className="flex min-h-screen relative" style={{background: 'radial-gradient(circle at top right, rgba(255,106,0,0.08), transparent 40%), #F8FAFC'}}>

<button className="lg:hidden fixed top-4 left-4 z-50 bg-[#0F172A] text-white p-2 rounded-lg shadow-lg">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<aside className="w-72 bg-[#0F172A] hidden lg:flex flex-col fixed h-full z-20 shadow-2xl border-r border-slate-800/50">

<div className="p-8">
<div className="flex items-center gap-3">
<div className="flex bg-white w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c30845c3-1384-4f85-915e-4d783efc342b_320w.webp)] bg-cover bg-center border-[#FF6A00] rounded-xl border-b-4 shadow-[0_0_15px_rgba(255,106,0,0.3)] items-center justify-center">
<iconify-icon className="text-[#FF6A00]" height="24" icon="solar:mountains-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-extrabold tracking-tighter text-xl leading-none">MIFA</span>
<span className="text-xs text-[#FF6A00] font-semibold tracking-widest mt-0.5 uppercase scale-90 origin-left">Built to exist</span>
</div>
</div>
</div>

<div className="px-4 mb-6">
<button className="w-full bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700/50 p-3 rounded-xl flex items-center justify-between group">
<div className="flex flex-col items-start text-left">
<span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-0.5">Proyecto</span>
<span className="text-white font-semibold text-sm tracking-tight">Mifa Test</span>
</div>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>

<nav className="flex-1 px-4 space-y-2 overflow-y-auto">

<button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 bg-gradient-to-r from-[#FF6A00] to-[#FF8A00] text-white shadow-lg shadow-orange-900/20 group">
<iconify-icon height="20" icon="solar:home-2-linear" width="20"></iconify-icon>
<span className="font-semibold text-sm tracking-tight">Inicio</span>
<iconify-icon className="ml-auto opacity-70" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-slate-800/50 group">
<iconify-icon className="text-slate-500 group-hover:text-[#FF6A00] transition-colors" height="20" icon="solar:box-linear" width="20"></iconify-icon>
<span className="font-semibold text-sm tracking-tight">Mi proyecto</span>
</button>
<button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-slate-800/50 group">
<iconify-icon className="text-slate-500 group-hover:text-[#FF6A00] transition-colors" height="20" icon="solar:dollar-minimalistic-linear" width="20"></iconify-icon>
<span className="font-semibold text-sm tracking-tight">Fondos</span>
</button>
<button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-slate-800/50 group">
<iconify-icon className="text-slate-500 group-hover:text-[#FF6A00] transition-colors" height="20" icon="solar:bill-list-linear" width="20"></iconify-icon>
<span className="font-semibold text-sm tracking-tight">Facturación</span>
</button>
<button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-slate-800/50 group">
<iconify-icon className="text-slate-500 group-hover:text-[#FF6A00] transition-colors" height="20" icon="solar:user-linear" width="20"></iconify-icon>
<span className="font-semibold text-sm tracking-tight">Perfil</span>
</button>
</nav>

<div className="p-6 border-t border-slate-800/50 space-y-6">
<button className="w-full flex items-center gap-3 px-2 text-slate-400 hover:text-white transition-colors relative group">
<iconify-icon className="group-hover:text-[#FF6A00] transition-colors" height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Notificaciones</span>
<span className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FF6A00] text-white text-xs flex items-center justify-center rounded-full font-extrabold border-2 border-[#0F172A] scale-90">3</span>
</button>
<div className="flex items-center gap-3 bg-slate-800/40 p-3 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white font-extrabold text-sm border-2 border-slate-700 shadow-lg">
                        MD
                    </div>
<div className="flex flex-col overflow-hidden">
<span className="text-white font-semibold text-xs truncate w-24">Matias Devia</span>
<span className="text-xs text-[#FF6A00] font-extrabold uppercase tracking-widest scale-90 origin-left">VIP Member</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 p-6 lg:p-10 min-h-screen overflow-y-auto relative z-10">

<header className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-t-[6px] border-[#FF6A00] mb-12 animate-[fadeIn_0.6s_ease-out]">
<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-orange-50 rounded-lg text-[#FF6A00]">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-extrabold text-[#0F172A] uppercase tracking-tight">Mifa Test - Progress</h2>
</div>
<button className="px-6 py-3 bg-gradient-to-r from-[#FF6A00] to-[#FF8A00] text-white font-semibold rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm tracking-tight w-full sm:w-auto">
                        View Progress
                        <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative pt-2">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-widest">Estatus de ejecución</span>
<span className="text-sm font-semibold text-slate-400 italic">4% completado</span>
</div>
<div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-[3px] border border-slate-50 ring-1 ring-slate-100">
<div className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8A00] rounded-full w-[4%] shadow-sm relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full blur-[2px]"></div>
</div>
</div>
</div>
</header>

<section className="space-y-12">

<div className="space-y-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-3xl text-slate-800" height="32" icon="solar:rocket-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-extrabold text-[#0F172A] uppercase tracking-tight">Tu primer avance</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">

<div className="group bg-white rounded-[20px] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200 hover:scale-[1.01] cursor-pointer">

<div className="h-48 relative overflow-hidden bg-[#0F172A] flex items-center justify-center group-hover:brightness-110 transition-all">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<h4 className="relative z-10 text-white text-2xl font-extrabold tracking-tighter uppercase italic px-6 text-center transform group-hover:scale-105 transition-transform">Introducción</h4>
<div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
<iconify-icon className="text-white" height="16" icon="solar:mountains-linear" width="16"></iconify-icon>
</div>
</div>

<div className="p-6">
<div className="flex items-start justify-between mb-3 gap-2">
<h5 className="font-bold text-base text-[#0F172A] tracking-tight leading-snug group-hover:text-[#FF6A00] transition-colors">Proyecto Ganador V2</h5>
<iconify-icon className="text-emerald-500 shrink-0 mt-1" height="18" icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-extrabold uppercase tracking-widest mb-6">T</p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden ring-1 ring-slate-50">
<div className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8A00] w-[15%] rounded-full"></div>
</div>
<span className="text-xs font-extrabold text-slate-400 tabular-nums">15%</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-3xl text-slate-800" height="32" icon="solar:money-bag-linear" width="32"></iconify-icon>
<h3 className="text-xl font-extrabold text-[#0F172A] uppercase tracking-tight">De $0 a 5K USD en 90 días</h3>
</div>

<div className="bg-white border-2 border-dashed border-slate-200 rounded-[24px] p-12 lg:p-20 flex flex-col items-center justify-center text-center group hover:border-[#FF6A00]/30 transition-colors">
<div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-300 group-hover:text-[#FF6A00] transition-colors" height="32" icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<p className="text-slate-400 font-semibold tracking-tight mb-2">No courses found in this section</p>
<p className="text-xs text-slate-300 max-w-xs mx-auto mb-6">Start exploring our catalog to populate this area with your learning path.</p>
<button className="text-[#FF6A00] text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform bg-orange-50 px-4 py-2 rounded-full hover:bg-orange-100">
                            Explorar catálogo 
                            <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<div className="fixed bottom-10 right-10 z-30">
<button className="bg-[#0F172A] text-white px-6 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-widest shadow-2xl border-b-4 border-[#FF6A00] hover:-translate-y-1 hover:shadow-orange-900/30 transition-all active:translate-y-0 active:border-b-0 active:mt-1 flex items-center gap-2">
<iconify-icon className="text-[#FF6A00]" height="16" icon="solar:stars-linear" width="16"></iconify-icon>
                Mejorar Plan
            </button>
</div>
</div>

    </>
  );
}
