import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
schnapp: {
bg: '#09090b',
card: '#131316',
primary: '#FFD447',
accent: '#FF552B',
border: 'rgba(255, 255, 255, 0.08)',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-schnapp-primary text-black p-1 rounded shadow-sm group-hover:rotate-6 transition-transform">
<iconify-icon icon="solar:gavel-bold-duotone" width="20"></iconify-icon>
</div>
<span className="font-display font-bold text-xl tracking-tight text-white">SCHNAPP<span className="text-schnapp-primary">!</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#auctions">Auktionen</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#demos">UI Demos</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#dashboard">Mein Bereich</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-zinc-400 hover:text-white"><iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon></button>
<div className="h-4 w-px bg-white/10"></div>
<a className="text-sm font-medium text-white hover:text-schnapp-primary transition-colors" href="#">Login</a>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1" href="#">
                        Registrieren <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden text-zinc-400"><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-10 left-1/4 w-96 h-96 bg-schnapp-primary/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-schnapp-accent/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="container mx-auto px-4 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-schnapp-primary/20 bg-schnapp-primary/5 text-schnapp-primary text-xs font-semibold mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-schnapp-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-schnapp-primary"></span>
</span>
                Live-Auktionen v2.0
            </div>
<h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight">
                Dein nächster Deal <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-schnapp-primary to-amber-600">wartet schon.</span>
</h1>
<p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Entdecke exklusive Produkte ab 1€. Transparent, sicher und in Echtzeit. 
                Erlebe das neue Auktionsgefühl.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="btn-schnapp px-8 py-3.5 rounded-full text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,212,71,0.3)]">
                    Jetzt kostenlos starten
                </button>
<button className="px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2 group">
<iconify-icon className="text-lg group-hover:text-schnapp-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon> 
                    Demo ansehen
                </button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-900/30" id="demos">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<div className="text-schnapp-primary text-xs font-mono mb-2">01 — UI DEMO</div>
<h2 className="font-display font-bold text-3xl text-white tracking-tight">Kategorie-Übersicht</h2>
<p className="text-zinc-400 text-sm mt-1">Stöbere durch gefilterte Listen mit Live-Status.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:border-white/20"><iconify-icon icon="solar:sort-vertical-linear"></iconify-icon></button>
<button className="p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:border-white/20"><iconify-icon icon="solar:filter-linear"></iconify-icon></button>
</div>
</div>

<div className="bg-schnapp-bg border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[600px]">

<div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 p-6 flex flex-col gap-8 bg-zinc-950/50 overflow-y-auto">
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Kategorien</h4>
<ul className="space-y-2">
<li className="flex items-center justify-between text-schnapp-primary text-sm font-medium bg-schnapp-primary/10 px-3 py-2 rounded-lg cursor-pointer">
<span>Sneakers</span>
<span className="text-xs opacity-70">128</span>
</li>
<li className="flex items-center justify-between text-zinc-400 text-sm hover:text-white px-3 py-2 cursor-pointer transition-colors">
<span>Electronics</span>
<span className="text-xs opacity-50">42</span>
</li>
<li className="flex items-center justify-between text-zinc-400 text-sm hover:text-white px-3 py-2 cursor-pointer transition-colors">
<span>Watches</span>
<span className="text-xs opacity-50">15</span>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Status</h4>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-600 bg-transparent flex items-center justify-center group-hover:border-schnapp-primary">
<div className="w-2 h-2 bg-schnapp-primary rounded-sm"></div>
</div>
<span className="text-sm text-zinc-300">Live (54)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-600 bg-transparent group-hover:border-zinc-400"></div>
<span className="text-sm text-zinc-400">Coming Soon</span>
</label>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Preislimit</h4>
<div className="h-1 w-full bg-zinc-800 rounded-full relative">
<div className="absolute left-0 top-0 h-full w-1/2 bg-schnapp-primary rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-125 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-zinc-500">
<span>0€</span>
<span>500€</span>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto bg-zinc-900/20 relative">

<div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-schnapp-bg to-transparent z-10 pointer-events-none opacity-50"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group bg-schnapp-card border border-white/5 rounded-xl overflow-hidden hover:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-zinc-800">
<div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 flex items-center gap-1">
<iconify-icon className="text-orange-500" icon="solar:fire-bold"></iconify-icon> 02:45
                                </div>
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-white font-medium text-sm truncate">Nike Dunk Low Retro</h3>
<div className="flex justify-between items-end mt-3">
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wide">Gebot</div>
<div className="text-schnapp-primary font-bold text-lg">€ 85.00</div>
</div>
<button className="h-8 w-8 rounded-full bg-white/5 hover:bg-schnapp-primary hover:text-black flex items-center justify-center transition-colors text-white border border-white/10">
<iconify-icon icon="solar:gavel-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-schnapp-card border border-white/5 rounded-xl overflow-hidden hover:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-zinc-800">
<div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 flex items-center gap-1">
<iconify-icon className="text-blue-400" icon="solar:clock-circle-linear"></iconify-icon> 14:20
                                </div>
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-white font-medium text-sm truncate">Jordan 1 High OG</h3>
<div className="flex justify-between items-end mt-3">
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wide">Gebot</div>
<div className="text-schnapp-primary font-bold text-lg">€ 142.00</div>
</div>
<button className="h-8 w-8 rounded-full bg-white/5 hover:bg-schnapp-primary hover:text-black flex items-center justify-center transition-colors text-white border border-white/10">
<iconify-icon icon="solar:gavel-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-schnapp-card border border-white/5 rounded-xl overflow-hidden hover:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-zinc-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-white font-medium text-sm truncate">Nike Air Force 1</h3>
<div className="flex justify-between items-end mt-3">
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wide">Gebot</div>
<div className="text-schnapp-primary font-bold text-lg">€ 64.50</div>
</div>
<button className="h-8 w-8 rounded-full bg-white/5 hover:bg-schnapp-primary hover:text-black flex items-center justify-center transition-colors text-white border border-white/10">
<iconify-icon icon="solar:gavel-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="container mx-auto px-4">
<div className="text-schnapp-primary text-xs font-mono mb-2">02 — UI DEMO</div>
<h2 className="font-display font-bold text-3xl text-white mb-10 tracking-tight">Live-Auktions Detail</h2>
<div className="bg-schnapp-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">

<div className="relative bg-zinc-900 flex items-center justify-center p-12 overflow-hidden group">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-900 to-zinc-950 opacity-50"></div>
<img className="relative z-10 w-3/4 h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-6 left-6 z-20 flex gap-2">
<span className="bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> LIVE
                            </span>
<span className="bg-black/40 backdrop-blur text-zinc-300 border border-white/10 text-xs font-medium px-3 py-1 rounded-full">
                                Neuware
                            </span>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col justify-between bg-glass">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-schnapp-primary text-xs font-semibold tracking-wider uppercase">Apple Inc.</span>
<div className="flex items-center gap-4 text-zinc-400 text-sm">
<span className="flex items-center gap-1"><iconify-icon icon="solar:eye-linear"></iconify-icon> 24 Watching</span>
</div>
</div>
<h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight tracking-tight">MacBook Pro 14"<br/><span className="text-zinc-500">M2 Max Chip</span></h3>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-black/30 rounded-xl p-4 border border-white/5">
<div className="text-zinc-500 text-xs uppercase mb-1">Verbleibende Zeit</div>
<div className="text-2xl font-mono text-white flex items-center gap-2">
                                        00:04:12
                                    </div>
</div>
<div className="bg-schnapp-primary/10 rounded-xl p-4 border border-schnapp-primary/20">
<div className="text-schnapp-primary/70 text-xs uppercase mb-1">Aktuelles Gebot</div>
<div className="text-2xl font-bold text-schnapp-primary">€ 1.840,00</div>
</div>
</div>

<div className="bg-zinc-900/50 rounded-2xl p-1 border border-white/10 flex items-center mb-6">
<button className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<input className="bg-transparent border-none text-center w-full text-white font-bold text-lg focus:ring-0" type="text" value="€ 1.850,00"/>
<button className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
<button className="bg-schnapp-primary hover:bg-yellow-300 text-black font-bold px-6 py-2.5 rounded-xl ml-2 shadow-lg shadow-yellow-500/10 transition-all transform active:scale-95">
                                    Bieten
                                </button>
</div>
</div>

<div>
<div className="flex gap-6 border-b border-white/10 mb-4">
<button className="text-white text-sm font-medium pb-3 border-b-2 border-schnapp-primary">Gebote (12)</button>
<button className="text-zinc-500 text-sm font-medium pb-3 hover:text-white transition-colors">Details</button>
<button className="text-zinc-500 text-sm font-medium pb-3 hover:text-white transition-colors">Versand</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white">MK</div>
<span className="text-zinc-300">Max K. <span className="text-zinc-500 text-xs ml-1">gerade eben</span></span>
</div>
<span className="font-mono text-white">€ 1.840</span>
</div>
<div className="flex items-center justify-between text-sm opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-teal-500 flex items-center justify-center text-[10px] font-bold text-white">SB</div>
<span className="text-zinc-300">Sarah B. <span className="text-zinc-500 text-xs ml-1">vor 2 min</span></span>
</div>
<span className="font-mono text-white">€ 1.825</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-black" id="dashboard">
<div className="container mx-auto px-4">
<div className="text-schnapp-primary text-xs font-mono mb-2">03 — UI DEMO</div>
<h2 className="font-display font-bold text-3xl text-white mb-10 tracking-tight">Dein Cockpit</h2>
<div className="grid lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">

<div className="lg:col-span-1 bg-schnapp-card border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-8 px-2">
<img className="w-10 h-10 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="text-white text-sm font-bold">Alex Müller</div>
<div className="text-zinc-500 text-xs">Bieter Level 3</div>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm font-medium border border-white/5" href="#"><iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon> Übersicht</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#"><iconify-icon className="text-lg" icon="solar:gavel-linear"></iconify-icon> Meine Gebote</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#"><iconify-icon className="text-lg" icon="solar:bag-heart-linear"></iconify-icon> Gewonnen</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#"><iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon> Zahlungen</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#"><iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Einstellungen</a>
</nav>
</div>
<div className="bg-schnapp-primary/10 rounded-xl p-4 border border-schnapp-primary/20">
<div className="flex items-center gap-2 text-schnapp-primary mb-1">
<iconify-icon icon="solar:crown-star-bold"></iconify-icon> <span className="text-xs font-bold uppercase">Pro Mitglied</span>
</div>
<p className="text-zinc-400 text-xs">Dein Abo läuft noch bis zum 12.10.2024</p>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-6">

<div className="grid sm:grid-cols-3 gap-6">
<div className="bg-zinc-900/50 border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon></div>
<span className="text-green-400 text-xs font-medium flex items-center gap-1">+12% <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
<div className="text-2xl font-bold text-white mb-1">€ 420,50</div>
<div className="text-zinc-500 text-xs">Verfügbares Guthaben</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:gavel-bold"></iconify-icon></div>
<span className="text-zinc-500 text-xs font-medium">Aktiv</span>
</div>
<div className="text-2xl font-bold text-white mb-1">5</div>
<div className="text-zinc-500 text-xs">Laufende Auktionen</div>
</div>
<div className="bg-zinc-900/50 border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon></div>
</div>
<div className="text-2xl font-bold text-white mb-1">12</div>
<div className="text-zinc-500 text-xs">Gewonnene Artikel</div>
</div>
</div>

<div className="bg-schnapp-card border border-white/10 rounded-2xl flex-1 overflow-hidden flex flex-col">
<div className="p-5 border-b border-white/5 flex justify-between items-center">
<h3 className="text-white font-bold text-sm">Letzte Aktivitäten</h3>
<button className="text-zinc-500 hover:text-white text-xs">Alle anzeigen</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-zinc-500 text-xs border-b border-white/5">
<th className="p-4 font-medium uppercase tracking-wider">Artikel</th>
<th className="p-4 font-medium uppercase tracking-wider">Status</th>
<th className="p-4 font-medium uppercase tracking-wider">Gebot</th>
<th className="p-4 font-medium uppercase tracking-wider text-right">Datum</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-white/5 transition-colors border-b border-white/5">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex-shrink-0"></div>
<span className="text-white font-medium">Sony WH-1000XM5</span>
</div>
</td>
<td className="p-4"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-medium">Gewonnen</span></td>
<td className="p-4 text-white">€ 240,00</td>
<td className="p-4 text-zinc-500 text-right">Heute, 14:20</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors border-b border-white/5">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex-shrink-0"></div>
<span className="text-white font-medium">Nintendo Switch OLED</span>
</div>
</td>
<td className="p-4"><span className="bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-xs font-medium">Überboten</span></td>
<td className="p-4 text-white">€ 185,50</td>
<td className="p-4 text-zinc-500 text-right">Gestern</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex-shrink-0"></div>
<span className="text-white font-medium">Logitech MX Master 3</span>
</div>
</td>
<td className="p-4"><span className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded text-xs font-medium">Aktiv</span></td>
<td className="p-4 text-white">€ 45,00</td>
<td className="p-4 text-zinc-500 text-right">12. Okt</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative overflow-hidden bg-zinc-950">

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-schnapp-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="bg-schnapp-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2 items-center">

<div className="p-8 md:p-12 lg:p-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                            Live on Air
                        </div>
<h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight leading-tight">
                            Live-Shopping <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Shows</span>
</h2>
<p className="text-zinc-400 text-base md:text-lg mb-8 max-w-md leading-relaxed">
                            Schau unseren Live-Shows auf <span className="text-white font-medium">WhatNot</span> zu, sichere dir exklusive Produkte &amp; gönn dir <span className="text-schnapp-primary font-medium">15€ Startguthaben</span> über unseren Link.
                        </p>
<a className="btn-schnapp inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm shadow-[0_0_20px_rgba(255,212,71,0.2)] w-full sm:w-auto" href="#">
<iconify-icon className="text-lg" icon="solar:play-stream-bold"></iconify-icon> 
                            Jetzt zu WhatNot &amp; 15€ sichern
                        </a>
</div>

<div className="relative h-[400px] lg:h-full min-h-[400px] bg-zinc-900/50 flex items-center justify-center p-8 overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-80 z-0"></div>

<div className="relative w-56 h-[400px] bg-black border-[4px] border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden transform rotate-6 group-hover:rotate-2 transition-transform duration-700 ease-out z-10">

<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 flex flex-col justify-between p-4 pointer-events-none">

<div className="flex justify-between items-center">
<div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">LIVE</div>
<div className="bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:eye-bold"></iconify-icon> 1.2k
                                    </div>
</div>

<div>
<div className="space-y-2 mb-3">
<div className="text-white text-[10px] bg-black/40 w-fit px-2 py-1 rounded backdrop-blur-sm"><span className="font-bold text-zinc-300">sneaker_fan:</span> Sick drop! 🔥</div>
<div className="text-white text-[10px] bg-black/40 w-fit px-2 py-1 rounded backdrop-blur-sm border border-schnapp-primary/30"><span className="font-bold text-schnapp-primary">Alex:</span> Bietet 120€</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/4 left-1/4 md:left-10 z-20 bg-glass border border-white/10 px-4 py-2 rounded-2xl shadow-xl transform -rotate-12 group-hover:-translate-y-2 transition-transform duration-500 delay-100 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-schnapp-primary/20 text-schnapp-primary flex items-center justify-center">
<iconify-icon icon="solar:tag-price-bold"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Bonus</div>
<div className="text-sm font-bold text-white">+ 15€ Guthaben</div>
</div>
</div>
<div className="absolute bottom-1/4 right-8 z-20 bg-schnapp-primary text-black px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(255,212,71,0.3)] transform rotate-12 group-hover:-translate-y-2 transition-transform duration-500 delay-200 font-display font-bold text-sm flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:verified-check-bold"></iconify-icon> Exklusiv
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
<div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
<div className="w-12 h-12 bg-schnapp-primary/10 rounded-xl flex items-center justify-center text-schnapp-primary text-2xl mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:shield-check-bold"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">100% Käuferschutz</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Jeder Kauf ist abgesichert. Geld zurück, wenn der Artikel nicht der Beschreibung entspricht.</p>
</div>
<div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
<div className="w-12 h-12 bg-schnapp-primary/10 rounded-xl flex items-center justify-center text-schnapp-primary text-2xl mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:verified-check-bold"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">Geprüfte Händler</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Wir verifizieren jeden Verkäufer manuell. Keine Bots, keine Fakes, nur echte Deals.</p>
</div>
<div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
<div className="w-12 h-12 bg-schnapp-primary/10 rounded-xl flex items-center justify-center text-schnapp-primary text-2xl mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:box-bold"></iconify-icon>
</div>
<h3 className="text-white font-bold text-lg mb-2">Schneller Versand</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Versand innerhalb von 24h nach Zahlungseingang. Tracking inklusive.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-950/50" id="faq">
<div className="container mx-auto px-4 max-w-3xl">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">Häufig gestellte Fragen</h2>
<p className="text-zinc-400 text-sm mt-4">Alles was du wissen musst, um direkt durchzustarten.</p>
</div>
<div className="divide-y divide-white/5">

<div className="py-6 group">
<h3 className="text-white font-medium text-lg mb-3 flex items-center justify-between cursor-pointer">
                        Wie funktioniert das Bieten auf SCHNAPP!?
                        <iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Du kannst auf der Artikel-Detailseite dein Gebot abgeben. Gib einfach dein Maximalgebot ein, und unser System bietet automatisch in kleinen Schritten für dich mit, bis dein Limit erreicht ist.</p>
</div>

<div className="py-6 group">
<h3 className="text-white font-medium text-lg mb-3 flex items-center justify-between cursor-pointer">
                        Wann und wie muss ich bezahlen?
                        <iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Nachdem du eine Auktion gewonnen hast, hast du 48 Stunden Zeit, den Artikel zu bezahlen. Wir akzeptieren Kreditkarte, PayPal und Apple/Google Pay. Deine Zahlung wird sicher über unseren Treuhandservice abgewickelt.</p>
</div>

<div className="py-6 group">
<h3 className="text-white font-medium text-lg mb-3 flex items-center justify-between cursor-pointer">
                        Ist der Versand versichert?
                        <iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Ja, alle Sendungen sind standardmäßig bis zu einem Warenwert von 500€ versichert. Bei teureren Artikeln wird automatisch eine Höherversicherung durch den Verkäufer abgeschlossen.</p>
</div>

<div className="py-6 group">
<h3 className="text-white font-medium text-lg mb-3 flex items-center justify-between cursor-pointer">
                        Wie kann ich selbst Artikel verkaufen?
                        <iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Um Verkäufer zu werden, musst du dich einmalig verifizieren. Gehe dazu in deine Kontoeinstellungen unter "Verkäufer werden" und lade die benötigten Dokumente hoch. Die Prüfung dauert in der Regel 24 Stunden.</p>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-schnapp-primary text-black p-1 rounded">
<iconify-icon icon="solar:gavel-bold-duotone" width="16"></iconify-icon>
</div>
<span className="font-display font-bold text-lg text-white">SCHNAPP!</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Die Next-Gen Auktionsplattform für Technik, Fashion und Lifestyle. Fair, Transparent, Schnell.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Plattform</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Live Auktionen</a></li>
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Kategorien</a></li>
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Verkäufer werden</a></li>
<li><a className="hover:text-schnapp-primary transition-colors" href="#">App Download</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Support</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Hilfe Center</a></li>
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Versand &amp; Rückgabe</a></li>
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Gebühren</a></li>
<li><a className="hover:text-schnapp-primary transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wide">Newsletter</h4>
<p className="text-zinc-500 text-xs mb-4">Verpasse keine Deals mehr.</p>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-schnapp-primary" placeholder="E-Mail" type="email"/>
<button className="bg-schnapp-primary text-black rounded-lg px-3 py-2 font-bold hover:bg-yellow-300 transition-colors">
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 SCHNAPP! Auktionshaus GmbH. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Impressum</a>
<a className="hover:text-zinc-400" href="#">Datenschutz</a>
<a className="hover:text-zinc-400" href="#">AGB</a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 z-50 bg-schnapp-primary text-black rounded-full h-14 px-5 flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(255,212,71,0.3)] hover:scale-105 hover:bg-yellow-300 transition-all active:scale-95 group">
<iconify-icon className="text-2xl group-hover:animate-pulse" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="font-semibold text-sm hidden sm:block pr-1">Support</span>
</button>



    </>
  );
}
