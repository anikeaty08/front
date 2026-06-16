import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const modal = document.getElementById('detail-modal');
        const panel = document.getElementById('detail-panel');

        function openDetailModal() {
            modal.classList.remove('pointer-events-none', 'opacity-0');
            modal.classList.add('opacity-100');
            setTimeout(() => {
                panel.classList.remove('translate-x-full');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeDetailModal() {
            panel.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modal.classList.remove('opacity-100');
                document.body.style.overflow = '';
            }, 300); // match duration
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-40 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-neutral-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-6 h-6 rounded bg-[#293B32] text-white flex items-center justify-center">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-[0.2em] text-[#293B32] uppercase mt-0.5">ObjevPolsko</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Ubytování</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Gastronomie</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Zážitky</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Mapa</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
                    CZ
                </button>
<button className="h-9 px-5 rounded-full bg-[#293B32] text-white text-sm font-medium hover:bg-[#1f2d26] transition-colors flex items-center gap-2">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
                    Přihlásit
                </button>
</div>
</div>
</nav>
<main>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-16">
<div className="absolute inset-0 z-0 bg-neutral-900">

<video autoplay="" className="w-full h-full object-cover object-center scale-105 opacity-80" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-pine-tree-forest-in-the-mountains-1200-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#FDFCFB]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mt-8 w-full">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-3xl mx-auto drop-shadow-sm">
                    Objevte místa v Polsku, která Češi neznají
                </h1>
<p className="text-lg text-white/90 font-light mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
                    Unikátní ubytování, farmy a zážitky jen kousek za hranicemi. Prozkoumejte je díky detailním videím a virtuálním prohlídkám.
                </p>

<div className="bg-white p-2 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto w-full relative z-20">

<div className="flex-1 w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 rounded-2xl transition-colors cursor-text">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear" width="22"></iconify-icon>
<div className="flex flex-col text-left w-full">
<span className="text-xs font-medium text-neutral-800">Lokalita</span>
<input className="text-sm text-neutral-500 bg-transparent border-none outline-none focus:ring-0 p-0 w-full placeholder:text-neutral-400" placeholder="Jeseníky, Orlické hory..." type="text"/>
</div>
</div>
<div className="hidden md:block w-px h-10 bg-neutral-200"></div>

<div className="flex-1 w-full flex items-center justify-between px-4 py-3 hover:bg-neutral-50 rounded-2xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:home-smile-linear" width="22"></iconify-icon>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-800">Typ ubytování</span>
<span className="text-sm text-neutral-500 truncate max-w-[120px]">Všechny typy</span>
</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="hidden md:block w-px h-10 bg-neutral-200"></div>

<div className="flex-1 w-full flex items-center justify-between px-4 py-3 hover:bg-neutral-50 rounded-2xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-800">Hosté</span>
<span className="text-sm text-neutral-500 truncate max-w-[120px]">2 dospělí, 0 dětí</span>
</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="hidden md:block w-px h-10 bg-neutral-200"></div>

<div className="flex-1 w-full flex items-center justify-between px-4 py-3 hover:bg-neutral-50 rounded-2xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:wallet-linear" width="22"></iconify-icon>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-800">Cena / noc</span>
<span className="text-sm text-neutral-500 truncate max-w-[120px]">Do 3 000 Kč</span>
</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>

<button className="w-full md:w-auto h-14 px-8 rounded-2xl bg-[#293B32] text-white text-sm font-medium hover:bg-[#1f2d26] transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md">
<iconify-icon icon="solar:magnifier-linear" width="20"></iconify-icon>
                        Hledat
                    </button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Vybraná místa</h2>
<p className="text-neutral-500 text-sm">Osobně ověřeno a natočeno naším týmem</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer lg:col-span-2 relative bg-white rounded-3xl p-3 border border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]" onclick="openDetailModal()">
<div className="relative w-full h-[320px] rounded-2xl overflow-hidden mb-4">
<img alt="Frydrysówka" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm text-[#293B32] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Naše volba</span>
<span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:videocamera-linear" width="12"></iconify-icon> Video
                            </span>
</div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="text-xl font-medium tracking-tight">Frydrysówka</h3>
<div className="flex items-center gap-1 text-sm">
<iconify-icon className="text-neutral-400" icon="solar:star-linear" width="14"></iconify-icon>
<span>4.9</span>
</div>
</div>
<p className="text-sm text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Slezské Beskydy, 2h z Ostravy
                        </p>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="flex gap-2">
<span className="text-xs bg-neutral-50 text-neutral-600 px-2 py-1 rounded-md border border-neutral-100">Krb</span>
<span className="text-xs bg-neutral-50 text-neutral-600 px-2 py-1 rounded-md border border-neutral-100">Lesní sauna</span>
</div>
<div className="text-right">
<span className="text-sm text-neutral-400">od</span>
<span className="text-lg font-medium tracking-tight ml-1">2 800 Kč</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-3xl p-3 border border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
<div className="relative w-full h-[200px] lg:h-[320px] rounded-2xl overflow-hidden mb-4">
<img alt="Slowhop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:panorama-linear" width="12"></iconify-icon> 360°
                            </span>
</div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-medium tracking-tight">Farma Jizerská</h3>
<div className="flex items-center gap-1 text-sm">
<iconify-icon className="text-neutral-400" icon="solar:star-linear" width="14"></iconify-icon>
<span>4.8</span>
</div>
</div>
<p className="text-sm text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Dolní Slezsko
                        </p>
<div className="flex items-center justify-between border-t border-neutral-100 pt-4">
<div className="text-right w-full">
<span className="text-sm text-neutral-400">od</span>
<span className="text-base font-medium tracking-tight ml-1">1 950 Kč</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-24">
<div className="relative h-[700px] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm flex flex-col md:flex-row">

<div className="absolute md:relative top-4 left-4 bottom-4 md:inset-0 w-[calc(100%-32px)] md:w-80 bg-white/95 backdrop-blur-md md:border-r border-neutral-200 md:rounded-l-3xl md:rounded-r-none rounded-2xl flex flex-col z-10 shadow-lg md:shadow-none pointer-events-auto">
<div className="p-5 flex-1 overflow-y-auto no-scrollbar">
<h3 className="text-lg font-medium tracking-tight mb-4">Filtrování mapy</h3>
<div className="relative mb-6">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifier-linear"></iconify-icon>
<input className="w-full bg-neutral-100 text-sm border-none rounded-xl py-2.5 pl-9 pr-3 outline-none focus:ring-2 focus:ring-[#293B32]/20" placeholder="Hledat region, město..." type="text"/>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-3">Kategorie</p>
<div className="space-y-3 mb-6">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-neutral-300 rounded bg-white group-hover:border-[#293B32] transition-colors">
<input checked="" className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[#293B32] w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-700">Glamping a posedy</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-neutral-300 rounded bg-white group-hover:border-[#293B32] transition-colors">
<input checked="" className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[#293B32] w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-700">Farmy a agroturistika</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-neutral-300 rounded bg-white group-hover:border-[#293B32] transition-colors">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[#293B32] w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-700">Lokální restaurace</span>
</label>
</div>

<p className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-3">Cena za noc</p>
<div className="px-1 mb-6">
<input className="w-full" max="10000" min="500" type="range" value="3000"/>
<div className="flex justify-between items-center mt-2 text-xs text-neutral-500">
<span>500 Kč</span>
<span className="font-medium text-neutral-800">Do 3 000 Kč</span>
</div>
</div>

<p className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-3">Kapacita</p>
<div className="flex gap-2 mb-6">
<button className="flex-1 py-1.5 border border-neutral-200 rounded-lg text-sm text-neutral-600 hover:border-[#293B32] hover:text-[#293B32] transition-colors">1-2</button>
<button className="flex-1 py-1.5 border border-[#293B32] bg-[#293B32]/5 rounded-lg text-sm font-medium text-[#293B32] transition-colors">3-4</button>
<button className="flex-1 py-1.5 border border-neutral-200 rounded-lg text-sm text-neutral-600 hover:border-[#293B32] hover:text-[#293B32] transition-colors">5+</button>
</div>

<p className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-3">Vybavení</p>
<div className="space-y-3 mb-6">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-neutral-300 rounded bg-white group-hover:border-[#293B32] transition-colors">
<input checked="" className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[#293B32] w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-700">Soukromá sauna</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-neutral-300 rounded bg-white group-hover:border-[#293B32] transition-colors">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[#293B32] w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-700">Vířivka / Káď</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-neutral-300 rounded bg-white group-hover:border-[#293B32] transition-colors">
<input checked="" className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[#293B32] w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-700">Domácí mazlíčci povoleni</span>
</label>
</div>
<div className="h-px w-full bg-neutral-100 my-4"></div>

<div className="flex items-center justify-between">
<span className="text-sm text-neutral-700">Pouze s virtuální prohlídkou</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#293B32]"></div>
</label>
</div>
</div>
<div className="p-5 border-t border-neutral-100 bg-white md:rounded-bl-3xl rounded-b-2xl">
<button className="w-full h-11 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
                            Zobrazit 42 výsledků na mapě
                        </button>
</div>
</div>

<div className="flex-1 h-full bg-[#E5E3DF] relative min-h-[500px]">

<img alt="Map" className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer" onclick="openDetailModal()">
<div className="relative w-8 h-8 bg-[#293B32] rounded-full flex items-center justify-center text-white shadow-md pin-pulse z-10">
<iconify-icon icon="solar:home-smile-linear" width="16"></iconify-icon>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white rounded-xl p-2 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-20">
<img className="w-full h-20 object-cover rounded-lg mb-2" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-sm font-medium">Frydrysówka</p>
<p className="text-xs text-neutral-500">2 800 Kč / noc</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F3EF]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Proč plánovat s námi?</h2>
<p className="text-neutral-500 text-sm">Nekupujte zajíce v pytli. Víme, že vizuální zážitek před samotnou cestou je klíčový.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center border border-neutral-200 shadow-sm mb-6 text-[#293B32]">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Autentická videa</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Každé místo natáčíme a tvoříme krátký příběh, abyste nasáli atmosféru ještě z domova.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center border border-neutral-200 shadow-sm mb-6 text-[#293B32]">
<iconify-icon icon="solar:panorama-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">360° Virtuální prohlídky</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Projděte si pokoj, zahradu i okolí pomocí detailních virtuálních prohlídek. Žádná překvapení.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center border border-neutral-200 shadow-sm mb-6 text-[#293B32]">
<iconify-icon icon="solar:map-point-favourite-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Kurátorovaný výběr pro Čechy</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Hledáme skvosty, které nejsou běžně k nalezení. Místa a farmy přátelské k českým hostům.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="relative rounded-3xl overflow-hidden bg-[#293B32] flex flex-col md:flex-row items-center justify-between p-10 md:p-16">
<div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
<svg className="w-full h-full text-white fill-current" preserveaspectratio="none" viewbox="0 0 100 100"><polygon points="0,100 100,0 100,100"></polygon></svg>
</div>
<div className="relative z-10 max-w-xl mb-8 md:mb-0">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Máte ubytování v Polsku?</h2>
<p className="text-white/80 text-sm leading-relaxed mb-8">
                        Získejte hosty z Česka. Přijedeme, natočíme video, vytvoříme 360° prohlídku a ukážeme vaše kouzelné místo české klientele, která miluje objevování.
                    </p>
<button className="h-11 px-6 rounded-full bg-white text-[#293B32] text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
                        Více o spolupráci
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative z-10 w-full md:w-auto flex justify-center">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-64 rotate-3 shadow-2xl">
<div className="bg-black/20 rounded-xl h-32 mb-3 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
<div className="h-3 w-3/4 bg-white/20 rounded mb-2"></div>
<div className="h-3 w-1/2 bg-white/20 rounded"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-[#293B32] text-white flex items-center justify-center">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-[0.2em] text-[#293B32] uppercase mt-0.5">ObjevPolsko</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Platforma spojující české cestovatele s unikátními místy u polských sousedů přes vizuální příběhy.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight mb-4">Objevovat</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Všechna ubytování</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Farmy a agroturistika</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Mapa míst</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Dárkové poukazy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight mb-4">O nás</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Náš příběh</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Jak tvoříme obsah</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Pro majitele ubytování</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight mb-4">Sledujte nás</h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-[#293B32] hover:text-[#293B32] transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-[#293B32] hover:text-[#293B32] transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2024 ObjevPolsko.cz. Všechna práva vyhrazena.</p>
<div className="flex gap-4 text-xs text-neutral-400">
<a className="hover:text-neutral-900" href="#">Podmínky použití</a>
<a className="hover:text-neutral-900" href="#">Ochrana soukromí</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 flex justify-end pointer-events-none transition-opacity duration-300 opacity-0" id="detail-modal">

<div className="transition-opacity duration-300 bg-center cursor-pointer pointer-events-auto bg-cover absolute top-0 right-0 bottom-0 left-0" onclick="closeDetailModal();window.location.href='https://youtu.be/CzcFihPJG8c?si=3PSKC4bB90jiT9cn'" role="button" style={{backgroundImage: 'linear-gradient(rgba(23, 23, 23, 0.4), rgba(23, 23, 23, 0.4)), url(\'Frydrysowka_MainSlider_2.jpg\')'}}></div>

<div className="relative w-full md:w-[600px] lg:w-[800px] bg-white h-full shadow-2xl overflow-y-auto transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto flex flex-col" id="detail-panel">

<div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs font-medium bg-[#293B32]/10 text-[#293B32] px-2 py-1 rounded">Doporučujeme</span>
</div>
<div className="flex items-center gap-3">
<button className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors" onclick="closeDetailModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1">

<div className="relative w-full aspect-video bg-neutral-900 group cursor-pointer">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
<iconify-icon icon="solar:clapperboard-play-linear" width="14"></iconify-icon>
                        Přehrát video (2:14)
                    </div>
</div>
<div className="px-8 py-10">
<div className="mb-10 border-b border-neutral-100 pb-10">
<h1 className="text-4xl font-medium tracking-tight mb-3">Frydrysówka</h1>
<p className="text-neutral-500 flex items-center gap-2 mb-6">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Slezské Beskydy, Polsko • 2 hodiny z Ostravy
                        </p>
<p className="text-sm text-neutral-600 leading-relaxed mb-6">
                            Kouzelná dřevěná chata uprostřed lesů Slezských Beskyd. Frydrysówka je místem, kde se zastavil čas. Ráno vás probudí šumění stromů, večer se zahřejete v lesní sauně s výhledem do údolí. Ideální útočiště pro ty, kteří hledají digitální detox a absolutní klid.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:wifi-router-minimalistic-linear" width="14"></iconify-icon> Rychlá WiFi
                            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:bath-linear" width="14"></iconify-icon> Lesní sauna
                            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:fire-square-linear" width="14"></iconify-icon> Krb
                            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-lg text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:dog-paw-linear" width="14"></iconify-icon> Pet friendly
                            </span>
</div>
</div>

<div className="mb-10">
<h2 className="text-xl font-medium tracking-tight mb-4">Virtuální prohlídka</h2>
<div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center cursor-move" style={{backgroundImage: 'radial-gradient(#d4d4d4 1px, transparent 0)', backgroundSize: '20px 20px'}}>

<div className="text-center">
<iconify-icon className="text-neutral-300 mb-2" icon="solar:panorama-linear" width="48"></iconify-icon>
<p className="text-sm font-medium text-neutral-600 mb-1">Interaktivní 360° model</p>
<p className="text-xs text-neutral-400">Tažením myši se rozhlédnete kolem dokola</p>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur shadow-sm px-4 py-2 rounded-full text-xs font-medium text-neutral-700 flex items-center gap-2 border border-neutral-200">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="14"></iconify-icon> Celoobrazovkový režim
                            </button>
</div>
</div>

<div className="mb-10">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-medium tracking-tight">Galerie</h2>
<button className="text-sm font-medium text-[#293B32] hover:underline">Zobrazit všech 24 fotek</button>
</div>
<div className="grid grid-cols-2 gap-3">
<img alt="Interiér" className="w-full h-40 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Ložnice" className="w-full h-40 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Koupelna" className="w-full h-40 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="relative w-full h-40 rounded-xl overflow-hidden">
<img alt="Okolí" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-sm">+20 dalších</div>
</div>
</div>
</div>

<div className="mb-10">
<h2 className="text-xl font-medium tracking-tight mb-4">V okolí</h2>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon icon="solar:cup-hot-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-800">Kavárna pod Lesem</p>
<p className="text-xs text-neutral-500">Skvělá lokální káva a domácí koláče • 2 km</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon icon="solar:route-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-800">Stezka korunami stromů</p>
<p className="text-xs text-neutral-500">Nádherný výhled na celé pohoří • 5 km</p>
</div>
</li>
</ul>
</div>

<div className="mb-6 bg-neutral-50 rounded-2xl p-6 border border-neutral-100" id="booking-section">
<h2 className="text-xl font-medium tracking-tight mb-4">Rezervovat ubytování</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div className="bg-white p-3 rounded-xl border border-neutral-200 cursor-pointer hover:border-[#293B32] transition-colors">
<span className="text-xs text-neutral-500 block mb-1">Příjezd - Odjezd</span>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-neutral-400" icon="solar:calendar-linear" width="16"></iconify-icon>
                                    15. Kvě - 18. Kvě
                                </div>
</div>
<div className="bg-white p-3 rounded-xl border border-neutral-200 cursor-pointer hover:border-[#293B32] transition-colors">
<span className="text-xs text-neutral-500 block mb-1">Hosté</span>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-neutral-400" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
                                    2 dospělí
                                </div>
</div>
</div>
<div className="space-y-3 mb-6">
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#293B32] focus:ring-1 focus:ring-[#293B32]" placeholder="Jméno a příjmení" type="text"/>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#293B32] focus:ring-1 focus:ring-[#293B32]" placeholder="E-mailová adresa" type="email"/>
<textarea className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#293B32] focus:ring-1 focus:ring-[#293B32] resize-none" placeholder="Zpráva pro majitele (volitelné)" rows="2"></textarea>
</div>
<button className="w-full h-12 rounded-xl bg-[#293B32] text-white text-sm font-medium hover:bg-[#1f2d26] transition-colors flex items-center justify-center gap-2">
                            Odeslat žádost o rezervaci
                        </button>
<p className="text-xs text-neutral-400 text-center mt-3">Zatím nic neplatíte. Majitel vám potvrdí dostupnost.</p>
</div>
</div>
</div>

<div className="sticky bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 px-6 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20">
<div>
<p className="text-lg font-medium tracking-tight">2 800 Kč <span className="text-sm text-neutral-400 font-normal">/ noc</span></p>
<p className="text-xs text-green-600 mt-0.5 flex items-center gap-1 font-medium"><iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Dostupné ve vybraném termínu</p>
</div>
<button className="h-12 px-8 rounded-xl bg-[#293B32] text-white text-sm font-medium hover:bg-[#1f2d26] transition-colors shadow-sm" onclick="document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})">
                    Rezervovat
                </button>
</div>
</div>
</div>



    </>
  );
}
