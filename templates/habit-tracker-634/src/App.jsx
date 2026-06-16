import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen max-w-md mx-auto relative flex flex-col" style={{paddingBottom: 'calc(56px + env(safe-area-inset-bottom))'}}>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/5">
<div className="px-4 pt-3 pb-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center tracking-tight text-[11px] uppercase font-semibold text-neutral-200">HA</div>
<div className="flex-1">
<div className="text-[13px] text-neutral-400">Bonjour</div>
<h1 className="text-[20px] sm:text-[22px] tracking-tight font-semibold">Votre tableau de bord</h1>
</div>
<button aria-label="Notifications" className="h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 1 1 12 0c0 7 3 5 3 9H3c0-4 3-2 3-9"></path>
<path d="M10.3 21a1.7 1.7 0 0 0 3.4 0"></path>
</svg>
</button>
<button className="h-9 w-9 rounded-lg overflow-hidden border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
<img alt="Profil" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
</button>
</div>

<div className="px-4 pb-3 flex gap-3">
<div className="flex-1 flex items-center gap-2 rounded-xl bg-neutral-900/60 border border-white/10 px-3 py-2.5 focus-within:border-white/20">

<svg className="h-[16px] w-[16px] text-neutral-400 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="bg-transparent w-full text-[14px] placeholder:text-neutral-500 focus:outline-none" placeholder="Rechercher une habitude, tâche ou un livre…"/>
</div>
<button aria-label="Filtres" className="px-3 rounded-xl bg-neutral-900/60 border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4H14"></path>
<path d="M10 4H3"></path>
<path d="M21 12h-7"></path>
<path d="M10 12H3"></path>
<path d="M21 20h-7"></path>
<path d="M10 20H3"></path>
<circle cx="12" cy="4" r="2"></circle>
<circle cx="7" cy="12" r="2"></circle>
<circle cx="17" cy="20" r="2"></circle>
</svg>
</button>
</div>
</header>

<section className="px-4 pt-4">
<div className="grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-400">Streak</span>

<svg className="h-[16px] w-[16px] text-orange-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14a3.5 3.5 0 1 0 7 0c0-2.5-2.5-4.5-2.5-7 0-1.5-1-3-2.5-4-1 2-3.5 3.5-3.5 6 0 1.1.4 2.1 1 3"></path>
</svg>
</div>
<div className="mt-2 text-[22px] tracking-tight font-semibold">12</div>
<div className="text-[12px] text-neutral-500">jours d’affilée</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-400">Focus</span>

<svg className="h-[16px] w-[16px] text-cyan-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4"></path>
<path d="M12 14l-2-2 8-8"></path>
<circle cx="12" cy="14" r="8"></circle>
</svg>
</div>
<div className="mt-2 text-[22px] tracking-tight font-semibold">2h 10m</div>
<div className="text-[12px] text-neutral-500">aujourd’hui</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-400">Livres</span>

<svg className="h-[16px] w-[16px] text-violet-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4v16a2 2 0 0 0 2 2h7V4H4a2 2 0 0 0-2 2Z"></path>
<path d="M22 4v16a2 2 0 0 1-2 2h-7V4h7a2 2 0 0 1 2 2Z"></path>
</svg>
</div>
<div className="mt-2 text-[22px] tracking-tight font-semibold">3</div>
<div className="text-[12px] text-neutral-500">en cours</div>
</div>
</div>
</section>

<main className="flex-1 pr-4 pb-4 pl-4">

<div className="mt-5 grid grid-cols-3 gap-1 p-1 rounded-xl border border-white/10 bg-neutral-900/50">
<button className="px-3 py-2 rounded-lg text-[13px] font-medium bg-white/5 border border-white/10 text-neutral-100 shadow-sm">Habitudes</button>
<button className="px-3 py-2 rounded-lg text-[13px] font-medium text-neutral-300 hover:text-neutral-100 hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">Tâches</button>
<button className="px-3 py-2 rounded-lg text-[13px] font-medium text-neutral-300 hover:text-neutral-100 hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">Livres</button>
</div>

<section className="mt-5">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Habitudes d’aujourd’hui</h2>
<button className="text-[13px] text-cyan-300 hover:text-cyan-200 hover:underline underline-offset-4">Voir tout</button>
</div>
<div className="mt-3 space-y-3">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-3">

<div className="relative h-12 w-12 rounded-full" style={{background: 'conic-gradient(#22d3ee 72%, #0f172a 0)'}}>
<div className="absolute inset-[3px] rounded-full bg-neutral-950 border border-white/10"></div>
<div className="absolute inset-0 grid place-items-center">
<span className="text-[11px] text-cyan-300 font-medium">72%</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<h3 className="text-[16px] tracking-tight font-semibold truncate">Méditation</h3>
<span className="px-1.5 py-0.5 rounded-md text-[11px] text-emerald-300 bg-emerald-300/10 border border-emerald-300/20">Focus</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[12px] text-neutral-400">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
<span>Lun à Ven • 10 min</span>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-11 h-6 rounded-full bg-neutral-800 border border-white/10 transition-colors peer-checked:bg-cyan-500/20 peer-checked:border-cyan-400/40"></span>
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-neutral-700 border border-white/10 transition-all peer-checked:translate-x-5 peer-checked:bg-cyan-400/90"></span>
</label>
</div>

<div className="mt-3 flex items-center gap-1.5">
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-cyan-400/15 border border-cyan-400/30 text-cyan-200">L</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-300">M</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-300">M</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-300">J</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-300">V</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-500">S</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-500">D</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-3">
<div className="relative h-12 w-12 rounded-full" style={{background: 'conic-gradient(#a78bfa 40%, #0f172a 0)'}}>
<div className="absolute inset-[3px] rounded-full bg-neutral-950 border border-white/10"></div>
<div className="absolute inset-0 grid place-items-center">
<span className="text-[11px] text-violet-300 font-medium">40%</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<h3 className="text-[16px] tracking-tight font-semibold truncate">Lecture</h3>
<span className="px-1.5 py-0.5 rounded-md text-[11px] text-violet-300 bg-violet-300/10 border border-violet-300/20">Cognitif</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[12px] text-neutral-400">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
<span>Tous les jours • 20 pages</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-11 h-6 rounded-full bg-violet-400/20 border border-violet-400/30 transition-colors peer-checked:bg-violet-400/30 peer-checked:border-violet-300/50"></span>
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-violet-300/80 border border-white/10 transition-all peer-checked:translate-x-5"></span>
</label>
</div>
<div className="mt-3 flex items-center gap-1.5">
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-violet-400/20 border border-violet-400/40 text-violet-200">L</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-violet-400/20 border border-violet-400/40 text-violet-200">M</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-violet-400/20 border border-violet-400/40 text-violet-200">M</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-300">J</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-300">V</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-500">S</div>
<div className="px-2.5 py-1 rounded-lg text-[11px] bg-white/5 border border-white/10 text-neutral-500">D</div>
</div>
</div>
</div>
</section>

<section className="mt-6">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Tâches</h2>
<button className="text-[13px] text-cyan-300 hover:text-cyan-200 hover:underline underline-offset-4">Nouvelle tâche</button>
</div>
<div className="mt-3 space-y-2.5">

<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/60 p-3">

<label className="relative inline-flex items-center cursor-pointer">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<span className="h-5 w-5 rounded-md bg-neutral-800 border border-white/10 grid place-items-center peer-checked:bg-emerald-400 peer-checked:border-emerald-300 transition-colors">

<svg className="h-[12px] w-[12px] text-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
</label>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="text-[14px] font-medium truncate">Rédiger le compte-rendu hebdo</p>
<span className="px-1.5 py-0.5 rounded-md text-[11px] text-amber-300 bg-amber-300/10 border border-amber-300/20">Aujourd’hui</span>
</div>
<div className="mt-0.5 flex items-center gap-2 text-[12px] text-neutral-400">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span>18:00 • Priorité haute</span>
</div>
</div>
<button className="h-8 w-8 rounded-lg border border-white/10 hover:bg-white/5 flex items-center justify-center">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="12" r="1"></circle>
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
</svg>
</button>
</div>

<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<label className="relative inline-flex items-center cursor-pointer">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<span className="h-5 w-5 rounded-md bg-neutral-800 border border-white/10 grid place-items-center peer-checked:bg-cyan-400 peer-checked:border-cyan-300 transition-colors">
<svg className="h-[12px] w-[12px] text-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
</label>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="text-[14px] font-medium truncate">Sport — fractionné 30 min</p>
<span className="px-1.5 py-0.5 rounded-md text-[11px] text-cyan-300 bg-cyan-300/10 border border-cyan-300/20">Forme</span>
</div>
<div className="mt-0.5 flex items-center gap-2 text-[12px] text-neutral-400">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Parc • 07:00</span>
</div>
</div>
<button className="h-8 w-8 rounded-lg border border-white/10 hover:bg-white/5 flex items-center justify-center">

<svg className="h-[18px] w-[18px] text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 4 12 8-12 8Z"></path>
</svg>
</button>
</div>
</div>
</section>

<section className="mt-6">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Livres en cours</h2>
<button className="text-[13px] text-cyan-300 hover:text-cyan-200 hover:underline underline-offset-4">Bibliothèque</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-2.5">
<div className="aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
<img alt="Couverture livre 1" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-2">
<p className="text-[14px] font-medium leading-tight line-clamp-2">Atomic Habits</p>
<p className="text-[12px] text-neutral-400">James Clear</p>
</div>

<div className="mt-2 h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-violet-400" style={{width: '58%'}}></div>
</div>
<div className="mt-1 text-[12px] text-neutral-400">58% • 126/216p</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-2.5">
<div className="aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
<img alt="Couverture livre 2" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-2">
<p className="text-[14px] font-medium leading-tight line-clamp-2">Deep Work</p>
<p className="text-[12px] text-neutral-400">Cal Newport</p>
</div>
<div className="mt-2 h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '24%'}}></div>
</div>
<div className="mt-1 text-[12px] text-neutral-400">24% • 64/270p</div>
</div>
</div>
</section>

<section className="mt-6 mb-2">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Insights</h2>
<button className="text-[13px] hover:text-cyan-200 hover:underline underline-offset-4 text-cyan-300">Détails</button>
</div>
<div className="mt-3 rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2 text-[13px] text-neutral-300">

<svg className="h-[18px] w-[18px] text-emerald-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17 9 11l4 4 7-7"></path>
<path d="M14 7h7v7"></path>
</svg>
<span>+18% d’habitudes complétées cette semaine</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
<div className="text-[11px] text-neutral-400">Habitudes</div>
<div className="mt-1 text-[18px] tracking-tight font-semibold">34</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
<div className="text-[11px] text-neutral-400">Tâches</div>
<div className="mt-1 text-[18px] tracking-tight font-semibold">12</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
<div className="text-[11px] text-neutral-400">Lecture</div>
<div className="mt-1 text-[18px] tracking-tight font-semibold">3h</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-16 right-4 z-40" style={{right: 'calc(16px + env(safe-area-inset-right))', bottom: 'calc(64px + env(safe-area-inset-bottom))'}}>
<div className="flex flex-col items-end gap-2">
<button aria-label="Ajouter" className="h-12 w-12 rounded-xl bg-cyan-400 text-neutral-950 border border-cyan-200/60 shadow-lg shadow-cyan-400/20 hover:brightness-110 active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">

<svg className="h-[22px] w-[22px] mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</button>
</div>
</div>

<nav className="fixed z-50 supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-white/10 border-t right-0 bottom-0 left-0 backdrop-blur" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>
<div className="max-w-md mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-4 py-2">

<button className="flex flex-col items-center gap-1 py-2 rounded-lg text-cyan-300">

<svg className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z"></path>
<path d="M5 19l.8-1.8L8 16l-1.8-.8L5 13l-.8 2.2L2 16l2.2 1.2L5 19z"></path>
<path d="M19 15l.9-2L22 12l-2.1-1-.9-2-.9 2L16 12l2.1 1 .9 2z"></path>
</svg>
<span className="text-[11px] font-medium">Habitudes</span>
</button>

<button className="flex flex-col items-center gap-1 py-2 rounded-lg text-neutral-300 hover:text-white transition-colors">

<svg className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h8"></path>
<path d="M3 12h8"></path>
<path d="M3 18h8"></path>
<path d="m15 6 2 2 4-4"></path>
<path d="m15 12 2 2 4-4"></path>
<path d="m15 18 2 2 4-4"></path>
</svg>
<span className="text-[11px] font-medium">Tâches</span>
</button>

<button className="flex flex-col items-center gap-1 py-2 rounded-lg text-neutral-300 hover:text-white transition-colors">

<svg className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
<path d="M4 4v15.5"></path>
<path d="M20 4v13"></path>
<path d="M6.5 17A2.5 2.5 0 0 0 4 19.5"></path>
</svg>
<span className="text-[11px] font-medium">Livres</span>
</button>

<button className="flex flex-col items-center gap-1 py-2 rounded-lg text-neutral-300 hover:text-white transition-colors">

<svg className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-4 4"></path>
</svg>
<span className="text-[11px] font-medium">Insights</span>
</button>
</div>
</div>
</nav>
</div>

<style className="">
      @media (min-width: 640px) {
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    </style>

    </>
  );
}
