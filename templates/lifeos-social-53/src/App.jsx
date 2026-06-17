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
      

<div className="w-full max-w-md h-full relative flex flex-col bg-[#09090b] shadow-2xl overflow-hidden sm:border-x sm:border-zinc-800">

<div className="px-6 pt-3 pb-2 flex justify-between items-center text-[11px] font-medium text-zinc-500 z-50 select-none">
<span className="tracking-wide">09:30</span>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:cloud-sun" data-width="12"></span>
<span className="iconify" data-icon="lucide:wifi" data-width="12"></span>
<span className="iconify" data-icon="lucide:battery-medium" data-width="14"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-28 px-4">

<section className="mt-2 mb-6">
<div className="ai-border p-4 rounded-xl relative overflow-hidden group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400 animate-pulse-subtle" data-icon="lucide:sparkles" data-width="16"></span>
<h2 className="text-xs font-semibold text-white tracking-wide uppercase">LifeAI Insight</h2>
</div>
<span className="text-[9px] text-zinc-500 bg-zinc-800/50 px-1.5 py-0.5 rounded border border-zinc-700/50">Canlı Analiz</span>
</div>
<p className="text-xs text-zinc-300 leading-relaxed">
                        Günaydın Atlas. Uyku verilerine göre enerjin %85. Bugün "Yazılım Projesi" görevine odaklanmak için harika bir gün. Ailenle bağın bu hafta %5 düştü, akşam anneni aramayı unutma.
                    </p>

<div className="mt-3 flex gap-2">
<button className="flex items-center gap-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors">
<span className="iconify" data-icon="lucide:check-circle" data-width="12"></span> Planı Onayla
                        </button>
<button className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors">
                            Hatırlat
                        </button>
</div>
</div>
</section>

<section className="mb-6 overflow-x-auto no-scrollbar">
<div className="flex gap-4 min-w-max px-1">

<div className="flex flex-col items-center gap-1.5 cursor-pointer">
<div className="relative w-14 h-14">
<div className="absolute inset-0 border border-dashed border-zinc-600 rounded-full"></div>
<div className="absolute inset-1 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-black rounded-full flex items-center justify-center">
<span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
</div>
</div>
<span className="text-[10px] text-zinc-400">Durum Ekle</span>
</div>

<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="story-ring-active">
<div className="w-[52px] h-[52px] rounded-full bg-zinc-800 border-2 border-black overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center bg-purple-900/30 text-purple-200 font-bold text-xs">EŞ</div>
</div>
</div>
<span className="text-[10px] text-white font-medium">Elif ❤️</span>
</div>

<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="story-ring-active">
<div className="w-[52px] h-[52px] rounded-full bg-zinc-800 border-2 border-black overflow-hidden flex items-center justify-center">
<span className="text-[10px] text-zinc-400">Can</span>
</div>
</div>
<span className="text-[10px] text-zinc-400">Can_Y</span>
</div>

<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="story-ring-viewed">
<div className="w-[52px] h-[52px] rounded-full bg-zinc-800 border-2 border-black overflow-hidden flex items-center justify-center">
<span className="text-[10px] text-zinc-400">Mert</span>
</div>
</div>
<span className="text-[10px] text-zinc-400">Kardeş</span>
</div>
</div>
</section>

<section className="glass-panel p-4 rounded-xl mb-6 flex justify-between items-center">
<div className="flex gap-3 items-center">
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="iconify text-zinc-400" data-icon="lucide:user" data-width="24"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">Atlas Yılmaz</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-medium flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span> Ofiste
                            </span>
<span className="text-[9px] text-zinc-500">Lv. 29 Mimar</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] text-zinc-500 mb-0.5">Sosyal Puan</div>
<div className="text-sm font-bold text-white font-mono">948<span className="text-zinc-600">/1000</span></div>
</div>
</section>

<section className="mb-6">
<div className="flex justify-between items-end mb-3">
<h2 className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:network" data-width="14"></span> 
                        Aile Ağı &amp; İlişkiler
                    </h2>
<button className="text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors">Ağacı Gör</button>
</div>

<div className="glass-panel p-0 rounded-xl overflow-hidden mb-3 relative group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="p-3 border-b border-white/5 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:home" data-width="12"></span>
</div>
<span className="text-xs font-semibold text-zinc-200">Yılmaz Malikanesi</span>
<span className="text-[9px] bg-zinc-800 text-zinc-500 px-1 rounded border border-zinc-700">Seviye 4</span>
</div>
<span className="text-[10px] text-emerald-400 font-mono font-medium">+₺124k Kasa</span>
</div>

<div className="bg-purple-500/5 p-2 flex items-center gap-3">
<div className="flex-1">
<div className="flex justify-between text-[9px] mb-1">
<span className="text-purple-300">Aktif Görev: Evi Yenile</span>
<span className="text-zinc-500">3/5 Oy</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[60%] rounded-full"></div>
</div>
</div>
<button className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-[9px] text-white hover:bg-zinc-700 transition-colors">Oy Ver</button>
</div>
</div>

<div className="space-y-2">

<div className="glass-card-highlight p-2.5 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300 border border-zinc-700">EL</div>
<div className="absolute -bottom-1 -right-1 bg-rose-500 text-[8px] text-black font-bold px-1 rounded-full border border-[#09090b]">❤️</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h4 className="text-xs font-medium text-zinc-200 truncate">Elif (Eş)</h4>
<span className="text-[9px] text-rose-400 font-medium">Ruh Eşi</span>
</div>

<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-rose-500 to-pink-500 w-[92%] rounded-full"></div>
</div>
<p className="text-[9px] text-zinc-500 mt-1 truncate">Son: "Akşam yemeği için alışveriş..."</p>
</div>
<button className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-zinc-400">
<span className="iconify" data-icon="lucide:message-circle" data-width="14"></span>
</button>
</div>

<div className="glass-panel p-2.5 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-zinc-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500 border border-zinc-700">MT</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h4 className="text-xs font-medium text-zinc-300">Mert (Kardeş)</h4>
<span className="text-[9px] text-blue-400">Yakın</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[65%] rounded-full"></div>
</div>

<div className="flex items-center gap-1 mt-1">
<span className="iconify text-amber-500" data-icon="lucide:zap" data-width="8"></span>
<span className="text-[8px] text-zinc-500">Pasif Etki: Girişimci Bonusu (+%5 Gelir)</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-6">
<div className="flex justify-between items-center mb-3">
<h2 className="text-sm font-medium text-white tracking-tight">LifeQuests (Günlük)</h2>
<span className="text-[10px] text-zinc-500">Tamamlanan: 2/5</span>
</div>
<div className="space-y-2">

<div className="group flex items-center gap-3 glass-panel p-3 rounded-xl border-l-2 border-l-blue-500 hover:bg-zinc-800/80 transition-all cursor-pointer">
<div className="w-5 h-5 rounded border border-zinc-600 flex items-center justify-center group-hover:border-blue-500 transition-colors">

</div>
<div className="flex-1">
<h4 className="text-xs font-medium text-zinc-200">2.5 Litre Su İç</h4>
<p className="text-[10px] text-zinc-500">Sağlık +2, Enerji +5</p>
</div>
<div className="text-right">
<span className="block text-[10px] font-bold text-blue-400">20 XP</span>
</div>
</div>

<div className="group flex items-center gap-3 glass-panel p-3 rounded-xl border-l-2 border-l-emerald-500 bg-emerald-900/10 hover:bg-zinc-800/80 transition-all cursor-pointer opacity-60">
<div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div className="flex-1">
<h4 className="text-xs font-medium text-zinc-400 line-through">Yatırım Portföyünü Kontrol Et</h4>
<p className="text-[10px] text-zinc-600">Ekonomi +5</p>
</div>
<div className="text-right">
<span className="block text-[10px] font-bold text-zinc-600">Tamamlandı</span>
</div>
</div>

<div className="group flex items-center gap-3 glass-panel p-3 rounded-xl border-l-2 border-l-amber-500 hover:bg-zinc-800/80 transition-all cursor-pointer">
<div className="w-5 h-5 rounded border border-zinc-600 flex items-center justify-center group-hover:border-amber-500 transition-colors">
</div>
<div className="flex-1">
<h4 className="text-xs font-medium text-zinc-200">Kardeşinle İletişime Geç</h4>
<p className="text-[10px] text-zinc-500">Aile Bağı +15 XP</p>
</div>
<div className="text-right">
<span className="block text-[10px] font-bold text-amber-400">50 XP</span>
</div>
</div>
</div>
</section>

<section className="mb-20">
<h2 className="text-sm font-medium text-white tracking-tight mb-3">Sosyal Akış (Çevre)</h2>
<div className="relative pl-4 border-l border-zinc-800 space-y-6">

<div className="relative">
<div className="absolute -left-[21px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-zinc-300">Can_Y</span>
<span className="text-[9px] text-zinc-600">1s önce</span>
</div>
<div className="glass-panel p-2.5 rounded-lg rounded-tl-none">
<p className="text-[11px] text-zinc-400">Bugün 10km koşu hedefini tamamladım! 🏃‍♂️ Bacaklar yanıyor ama değdi. #Spor #LifeQuest</p>
<div className="mt-2 flex gap-3">
<button className="flex items-center gap-1 text-[9px] text-zinc-500 hover:text-rose-400 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="10"></span> Tebrik Et
                                </button>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-indigo-400">Sistem (Kariyer)</span>
<span className="text-[9px] text-zinc-600">3s önce</span>
</div>
<div className="glass-panel p-2.5 rounded-lg rounded-tl-none border-l border-l-indigo-500/50">
<p className="text-[11px] text-zinc-400">"Kıdemli Mimar" rolünde terfi barajı aşıldı! Yönetici ile görüşme planla.</p>
</div>
</div>
</div>
</section>
</div>

<div className="absolute bottom-0 w-full glass z-50 px-2 pb-5 pt-3">
<nav className="flex justify-around items-end w-full max-w-sm mx-auto">

<button className="group flex flex-col items-center gap-1 p-2 w-14">
<div className="w-10 h-10 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-zinc-800 transition-colors">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:layout-grid" data-width="18"></span>
</div>
<span className="text-[9px] font-medium text-zinc-500 group-hover:text-zinc-300">Home</span>
</button>

<button className="group flex flex-col items-center gap-1 p-2 w-14">
<div className="w-10 h-10 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-zinc-800 transition-colors relative">
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#09090b]"></span>
<span className="iconify text-zinc-400 group-hover:text-rose-400 transition-colors" data-icon="lucide:users" data-width="18"></span>
</div>
<span className="text-[9px] font-medium text-zinc-500 group-hover:text-zinc-300">Aile</span>
</button>

<button className="group flex flex-col items-center gap-1 -mt-6">
<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105 transition-transform border-4 border-[#09090b]">
<span className="iconify" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<span className="text-[9px] font-bold text-indigo-300">LifeAI</span>
</button>

<button className="group flex flex-col items-center gap-1 p-2 w-14">
<div className="w-10 h-10 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-zinc-800 transition-colors">
<span className="iconify text-zinc-400 group-hover:text-emerald-400 transition-colors" data-icon="lucide:target" data-width="18"></span>
</div>
<span className="text-[9px] font-medium text-zinc-500 group-hover:text-zinc-300">Görev</span>
</button>

<button className="group flex flex-col items-center gap-1 p-2 w-14">
<div className="w-10 h-10 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-zinc-800 transition-colors">
<span className="iconify text-zinc-400 group-hover:text-amber-400 transition-colors" data-icon="lucide:wallet-cards" data-width="18"></span>
</div>
<span className="text-[9px] font-medium text-zinc-500 group-hover:text-zinc-300">Cüzdan</span>
</button>
</nav>

<div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-zinc-800 rounded-full"></div>
</div>
</div>

    </>
  );
}
