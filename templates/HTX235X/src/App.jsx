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
      
    lucide.createIcons();
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs" width="100%"></iframe></div>

<header className="sticky top-0 z-40 backdrop-blur bg-zinc-900/60 border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a className="text-xl font-semibold tracking-tight hover:opacity-80 transition" href="#">NxP</a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-indigo-400 transition" href="#industries">Iparágak</a>
<a className="hover:text-indigo-400 transition" href="#gamification">Gamifikáció</a>
<a className="hover:text-indigo-400 transition" href="#leaderboard">Ranglista</a>
</nav>
<button aria-label="Open menu" className="md:hidden">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/80 to-zinc-950"></div>
</div>
<div className="max-w-4xl mx-auto px-6 py-28 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 fade-in" data-delay="1">
        Szakmai portál <span className="text-indigo-400">gamifikációval</span>
</h1>
<p className="text-zinc-400 text-lg mb-8 fade-in" data-delay="2">
        Fedezd fel, hogyan kapcsolódnak össze a különböző iparágak, építs kapcsolatokat és gyűjts pontokat, jelvényeket a fejlődésedért.
      </p>
<button className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition text-sm px-5 py-3 rounded-md font-medium fade-in" data-delay="3">
        Csatlakozom
        <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="industries">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 slide-up" data-delay="1">Iparági hubok</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border border-zinc-800 rounded-xl p-6 hover:border-indigo-500 transition group slide-up" data-delay="1">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-medium">Gyártás</span>
<i className="w-5 h-5 stroke-[1.5] text-zinc-400 group-hover:text-indigo-400 transition" data-lucide="factory"></i>
</div>
<p className="text-sm text-zinc-400 mb-4">Lean, automatizáció és IoT megoldások egy helyen.</p>
<button className="text-sm font-medium text-indigo-400 hover:underline">Belépés</button>
</div>
<div className="border border-zinc-800 rounded-xl p-6 hover:border-indigo-500 transition group slide-up" data-delay="2">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-medium">Egészségügy</span>
<i className="w-5 h-5 stroke-[1.5] text-zinc-400 group-hover:text-indigo-400 transition" data-lucide="stethoscope"></i>
</div>
<p className="text-sm text-zinc-400 mb-4">Digitális egészség, telemedicina és AI diagnosztika.</p>
<button className="text-sm font-medium text-indigo-400 hover:underline">Belépés</button>
</div>
<div className="border border-zinc-800 rounded-xl p-6 hover:border-indigo-500 transition group slide-up" data-delay="3">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-medium">Fintech</span>
<i className="w-5 h-5 stroke-[1.5] text-zinc-400 group-hover:text-indigo-400 transition" data-lucide="credit-card"></i>
</div>
<p className="text-sm text-zinc-400 mb-4">Blockchain, fizetési megoldások, kiberbiztonság.</p>
<button className="text-sm font-medium text-indigo-400 hover:underline">Belépés</button>
</div>
</div>
</section>

<section className="bg-zinc-900 border-t border-zinc-800" id="gamification">
<div className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 slide-up" data-delay="1">Fejlődj, játssz, nyerj</h2>
<div className="grid md:grid-cols-2 gap-12">

<div className="border border-zinc-800 rounded-xl p-8 relative overflow-hidden slide-up" data-delay="1">
<div className="flex items-center gap-4 mb-6">
<i className="w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="zap"></i>
<span className="text-lg font-medium">Szintlépés</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Gyűjts XP-t tartalom olvasásával, feladatok teljesítésével.</p>

<div className="w-full h-2 rounded bg-zinc-800 mb-4 overflow-hidden">
<div className="h-full bg-indigo-500" style={{width: '63%'}}></div>
</div>
<p className="text-sm text-zinc-400">1 250 / 2 000 XP</p>

<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
</div>

<div className="border border-zinc-800 rounded-xl p-8 slide-up" data-delay="2">
<div className="flex items-center gap-4 mb-6">
<i className="w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="alarm-clock"></i>
<span className="text-lg font-medium">Napi küldetés</span>
</div>
<p className="text-sm text-zinc-400 mb-6">Teljesítsd a napi mini kihívásokat extra jutalmakért.</p>

<ul className="space-y-3">
<li className="flex items-center gap-3">
<input className="peer h-4 w-4 accent-indigo-500 rounded-sm" id="task1" type="checkbox"/>
<label className="text-sm peer-checked:line-through" htmlFor="task1">Olvass el egy cikket a Fintech hubban</label>
</li>
<li className="flex items-center gap-3">
<input className="peer h-4 w-4 accent-indigo-500 rounded-sm" id="task2" type="checkbox"/>
<label className="text-sm peer-checked:line-through" htmlFor="task2">Vegyél részt egy fórum-beszélgetésben</label>
</li>
<li className="flex items-center gap-3">
<input className="peer h-4 w-4 accent-indigo-500 rounded-sm" id="task3" type="checkbox"/>
<label className="text-sm peer-checked:line-through" htmlFor="task3">Küldd be saját esettanulmányodat</label>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="leaderboard">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 slide-up" data-delay="1">Havi ranglista</h2>
<div className="overflow-x-auto slide-up" data-delay="2">
<table className="min-w-full text-left border border-zinc-800 rounded-xl">
<thead className="bg-zinc-900">
<tr className="text-sm text-zinc-400">
<th className="px-4 py-3 font-medium">Helyezés</th>
<th className="px-4 py-3 font-medium">Felhasználó</th>
<th className="px-4 py-3 font-medium">Iparág</th>
<th className="px-4 py-3 font-medium">Pont</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-zinc-800 hover:bg-zinc-900/40 transition">
<td className="px-4 py-3">1.</td>
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span>Kata M.</span>
</td>
<td className="px-4 py-3">Egészségügy</td>
<td className="px-4 py-3 font-medium text-indigo-400">4 560</td>
</tr>
<tr className="border-t border-zinc-800 hover:bg-zinc-900/40 transition">
<td className="px-4 py-3">2.</td>
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span>Bence L.</span>
</td>
<td className="px-4 py-3">Gyártás</td>
<td className="px-4 py-3 font-medium text-indigo-400">4 210</td>
</tr>
<tr className="border-t border-zinc-800 hover:bg-zinc-900/40 transition">
<td className="px-4 py-3">3.</td>
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span>Anna R.</span>
</td>
<td className="px-4 py-3">Fintech</td>
<td className="px-4 py-3 font-medium text-indigo-400">3 980</td>
</tr>
</tbody>
</table>
</div>
</section>

<footer className="border-t border-zinc-800 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
<p>© 2025 NxP • Minden jog fenntartva</p>
<div className="flex gap-4">
<a className="hover:text-indigo-400 transition" href="#">Adatvédelem</a>
<a className="hover:text-indigo-400 transition" href="#">Felhasználási feltételek</a>
<a className="hover:text-indigo-400 transition" href="#">Kapcsolat</a>
</div>
</div>
</footer>


    </>
  );
}
