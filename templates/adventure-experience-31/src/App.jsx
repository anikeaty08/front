import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function hideAll() {
const views = ['home', 'athletes-list', 'athlete-detail', 'trips-list', 'trip-detail'];
views.forEach(id => {
const el = document.getElementById(id);
if(el) {
el.style.opacity = '0';
setTimeout(() => el.classList.add('hidden'), 300);
}
});
}
function showView(id) {
hideAll();
const el = document.getElementById(id);
setTimeout(() => {
el.classList.remove('hidden');
void el.offsetWidth; // Trigger reflow
el.style.opacity = '1';
window.scrollTo({top: 0, behavior: 'smooth'});
}, 300);
}
function showHome() { showView('home'); }
function showList() { showView('athletes-list'); }
function showDetail() { showView('athlete-detail'); }
function showTripsList() { showView('trips-list'); }
function showTripDetail() { showView('trip-detail'); }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
<div className="pointer-events-auto glass-panel rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-sm transition-transform hover:scale-[1.01] duration-300">
<a className="px-5 py-2.5 rounded-full hover:bg-black/5 transition-all flex items-center gap-2 group" href="#" onclick="showHome()">
<span className="text-sm font-semibold tracking-tight text-black">loaf.</span>
</a>
<div className="h-4 w-px bg-black/10 mx-1"></div>
<div className="flex items-center">
<button className="px-4 py-2 rounded-full text-stone-500 hover:text-black hover:bg-black/5 transition-all text-xs font-medium" onclick="showList()">Athletes</button>
<button className="px-4 py-2 rounded-full text-stone-500 hover:text-black hover:bg-black/5 transition-all text-xs font-medium" onclick="showTripsList()">Expeditions</button>
<button className="px-4 py-2 rounded-full text-stone-500 hover:text-black hover:bg-black/5 transition-all text-xs font-medium">Shop</button>
</div>
<div className="h-4 w-px bg-black/10 mx-1"></div>
<button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 text-stone-500 transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</button>
</div>
</nav>

<div className="min-h-screen pt-32 pb-24 px-6 transition-opacity duration-500 ease-in-out opacity-1" id="home">
<div className="max-w-[1200px] mx-auto">

<div className="text-center mb-16 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[11px] uppercase tracking-wider font-semibold mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Community for the curious
                </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-black leading-[0.9] mb-6">
                    Endurance <br/> as an Art Form.
                </h1>
<p className="text-lg text-stone-500 max-w-lg mx-auto leading-relaxed">
                    We document the intersection of human performance and natural aesthetics. Join the club.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[240px] animate-fade-up" style={{animationDelay: '0.1s'}}>

<div className="bento-card group cursor-pointer relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[32px] overflow-hidden bg-stone-900" onclick="showTripDetail()">
<img alt="Expedition" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6">
<div className="glass-panel-dark px-3 py-1 rounded-full text-[10px] font-mono text-white uppercase tracking-widest inline-block border border-white/10">Featured Expedition</div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-end justify-between">
<div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-1">Dolomites Traverse</h3>
<p className="text-white/60 text-sm">7 Days. High Altitude. Sep 2024.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bento-card group cursor-pointer relative col-span-1 row-span-2 rounded-[32px] overflow-hidden bg-stone-100" onclick="showList()">
<img alt="Athlete" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
<div className="absolute bottom-6 left-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-mono text-white/80">THE TEAM</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Meet the<br/>Athletes</h3>
</div>
</div>

<div className="bento-card group cursor-pointer relative col-span-1 row-span-1 rounded-[32px] overflow-hidden bg-orange-500 hover:bg-orange-600 transition-colors p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white text-2xl" icon="solar:bag-heart-linear"></iconify-icon>
<iconify-icon className="text-white text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div>
<div className="text-white/80 text-xs font-mono mb-1">NEW DROP</div>
<h3 className="text-xl font-medium text-white tracking-tight">Tech Wear</h3>
</div>
</div>

<div className="bento-card relative col-span-1 row-span-1 rounded-[32px] bg-white border border-stone-200 p-6 flex flex-col justify-center items-center text-center">
<div className="text-4xl font-semibold text-black tracking-tighter mb-1">2,401</div>
<div className="text-xs text-stone-500 font-mono uppercase tracking-widest">Loaf Members</div>
<div className="mt-3 flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=3"/>
<div className="w-6 h-6 rounded-full border border-white bg-stone-100 flex items-center justify-center text-[8px] font-bold text-stone-500">+</div>
</div>
</div>

<div className="bento-card relative col-span-1 md:col-span-2 rounded-[32px] bg-stone-50 border border-stone-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-left space-y-2">
<h3 className="text-2xl font-medium text-black tracking-tight">Sunday Loaf.</h3>
<p className="text-stone-500 text-sm max-w-xs">Weekly dispatch on training, recovery, and finding the flow state.</p>
</div>
<div className="flex w-full md:w-auto bg-white p-1.5 rounded-full border border-stone-200 shadow-sm focus-within:ring-2 ring-black/5 transition-all">
<input className="bg-transparent px-4 py-2 outline-none text-sm w-full md:w-48 placeholder:text-stone-400" placeholder="your@email.com" type="email"/>
<button className="bg-black text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-stone-800 transition-colors">Join</button>
</div>
</div>

<div className="bento-card group cursor-pointer relative col-span-1 md:col-span-2 rounded-[32px] overflow-hidden border border-stone-200" onclick="showTripsList()">

<div className="absolute inset-0 bg-[#F5F5F0]" style={{backgroundImage: 'radial-gradient(#d6d6d4 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<iconify-icon icon="solar:earth-linear" width="180"></iconify-icon>
</div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-mono text-stone-500 uppercase">Live Tracking</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-4xl font-medium text-black tracking-tighter">Next Up:</div>
<div className="text-4xl font-medium text-stone-400 tracking-tighter">Patagonia</div>
</div>
<div className="hidden md:block text-right">
<div className="text-xs text-stone-500 font-mono">DISTANCE</div>
<div className="text-lg font-medium">124km</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-black/5 pt-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
<p className="text-center text-xs font-mono text-stone-400 uppercase tracking-widest mb-8">Trusted by athletes from</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">

<span className="font-bold text-xl tracking-tighter">SALOMON</span>
<span className="font-bold text-xl tracking-tighter italic">ARC'TERYX</span>
<span className="font-bold text-xl tracking-tighter">The North Face</span>
<span className="font-bold text-xl tracking-tighter">PATAGONIA</span>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen pt-40 pb-24 px-6 transition-opacity duration-500 ease-in-out opacity-0" id="athletes-list">
<div className="max-w-[1200px] mx-auto mb-20">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-black/5">
<div className="max-w-xl space-y-4">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[11px] uppercase tracking-wider font-semibold">
<iconify-icon icon="solar:flame-linear" width="12"></iconify-icon>
                        Human Performance
                    </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black leading-[0.95]">The Athletes.</h1>
</div>
<p className="text-stone-500 font-normal leading-relaxed text-sm md:text-base max-w-sm text-balance">Blueprints for resilience. We document the individuals redefining the physics of human endurance.</p>
</div>
</div>
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-pointer flex flex-col gap-5" onclick="showDetail()">
<div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-stone-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
<img alt="Elena" className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-[11px] font-semibold uppercase tracking-wider text-black">Ultra Running</span>
</div>
</div>
</div>
<div className="space-y-1 px-1">
<div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2"><span>01 / CHAMONIX</span><span>[ACTIVE]</span></div>
<h2 className="text-xl font-medium tracking-tight text-black group-hover:text-orange-600 transition-colors">Elena Cross</h2>
</div>
</div>
</div>
</div>

<div className="hidden transition-opacity duration-500 ease-in-out opacity-0" id="athlete-detail">
<button className="fixed top-24 left-6 z-40 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-xs font-medium border border-stone-200 hover:bg-white hover:scale-105 transition-all flex items-center gap-2 shadow-sm" onclick="showList()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
        </button>
<div className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden">
<div className="absolute inset-0 bg-stone-900">
<img alt="Elena Hero" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFC] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 md:pb-24">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-8 space-y-6">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-[#1a1a1a] mix-blend-color-burn leading-none -ml-1">Elena Cross</h1>
<p className="text-xl md:text-2xl font-light text-stone-600 max-w-xl leading-relaxed">Ultra-Endurance Specialist based in the French Alps.</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen pt-40 pb-24 px-6 transition-opacity duration-500 ease-in-out opacity-0" id="trips-list">

<div className="max-w-[1200px] mx-auto mb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-black/5">
<div className="max-w-xl space-y-4">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[11px] uppercase tracking-wider font-semibold">
<iconify-icon icon="solar:mountains-linear" width="12"></iconify-icon>
                        2024 Season
                    </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black leading-[0.95]">
                        The Expeditions.
                    </h1>
</div>
<p className="text-stone-500 font-normal leading-relaxed text-sm md:text-base max-w-sm text-balance">
                    Curated suffering in beautiful places. Small teams, high technicality, zero compromise on aesthetics.
                </p>
</div>

<div className="flex gap-4 pt-6 overflow-x-auto no-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-medium border border-black">All Regions</button>
<button className="px-4 py-1.5 rounded-full bg-white text-stone-500 hover:text-black hover:bg-stone-50 transition-colors text-xs font-medium border border-stone-200">The Alps</button>
<button className="px-4 py-1.5 rounded-full bg-white text-stone-500 hover:text-black hover:bg-stone-50 transition-colors text-xs font-medium border border-stone-200">Patagonia</button>
</div>
</div>

<div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-8">
<div className="group cursor-pointer relative h-[500px] md:h-[600px] w-full rounded-[32px] overflow-hidden" onclick="showTripDetail()">
<div className="absolute inset-0 bg-stone-900 transition-transform duration-700 ease-out group-hover:scale-105">
<img alt="Dolomites" className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="glass-panel-dark px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-[11px] font-semibold uppercase tracking-wider text-white">Open for Booking</span>
</div>
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 text-xs font-mono text-white/70">
<span className="border border-white/20 px-2 py-1 rounded">SEP 14 — SEP 21</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> ITALY</span>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white group-hover:text-orange-100 transition-colors">
                            Dolomites Traverse.
                        </h2>
<div className="flex flex-col md:flex-row md:items-center justify-between border-t border-white/20 pt-6 mt-2 gap-4">
<p className="text-white/80 font-light max-w-lg text-lg line-clamp-2">
                                A 7-day high-altitude crossing. Technical trails, historic Via Ferratas, and the finest rifugios.
                            </p>
<div className="text-right hidden md:block">
<div className="text-xs uppercase tracking-widest text-white/50 mb-1">Price</div>
<div className="text-2xl font-mono text-white">$3,450</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative h-[450px] w-full rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<div className="absolute inset-0 bg-stone-900">
<img alt="Iceland" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="glass-panel-dark px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
<span className="text-[11px] font-semibold uppercase tracking-wider text-white">Waitlist Only</span>
</div>
</div>
<div>
<div className="text-xs font-mono text-white/70 mb-2">OCT 02 — OCT 09</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Iceland Highlands.</h2>
</div>
</div>
</div>
<div className="group relative h-[450px] w-full rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<div className="absolute inset-0 bg-stone-900">
<img alt="Patagonia" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="glass-panel-dark px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
<span className="text-[11px] font-semibold uppercase tracking-wider text-white">Coming Soon</span>
</div>
</div>
<div>
<div className="text-xs font-mono text-white/70 mb-2">DEC 2024</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Patagonia Circuit.</h2>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden transition-opacity duration-500 ease-in-out opacity-0" id="trip-detail">
<button className="fixed top-24 left-6 z-40 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-xs font-medium border border-stone-200 hover:bg-white hover:scale-105 transition-all flex items-center gap-2 shadow-sm" onclick="showTripsList()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Expeditions
        </button>

<div className="relative w-full h-screen overflow-hidden">
<div className="absolute inset-0 bg-stone-900">
<img alt="Dolomites" className="w-full h-full object-cover opacity-90 scale-105 animate-[fadeUp_20s_infinite_alternate]" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 md:pb-20">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
<div className="space-y-4 max-w-3xl">
<div className="flex items-center gap-3 text-white/80 mb-2">
<span className="text-xs font-mono uppercase tracking-widest border border-white/20 px-2 py-1 rounded">Expedition 04</span>
<span className="text-xs font-mono uppercase tracking-widest bg-orange-500 text-black px-2 py-1 rounded">Open for Booking</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.9]">
                            Dolomites <br /> Traverse.
                        </br></h1>
<p className="text-lg md:text-xl text-stone-300 font-light max-w-lg leading-relaxed pt-4">
                            A 7-day high-altitude crossing of the Italian Alps. Technical trails, historic Via Ferratas, and the finest rifugios in Europe.
                        </p>
</div>
<div className="hidden md:flex gap-8 text-white">
<div>
<div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Total Distance</div>
<div className="text-3xl font-mono font-normal">85<span className="text-sm text-white/50 ml-1">km</span></div>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Vertical Gain</div>
<div className="text-3xl font-mono font-normal">4.2<span className="text-sm text-white/50 ml-1">km</span></div>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Duration</div>
<div className="text-3xl font-mono font-normal">07<span className="text-sm text-white/50 ml-1">days</span></div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-0 z-40 bg-[#FDFDFC]/90 backdrop-blur-md border-b border-stone-200">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
<a className="text-sm font-medium text-black hover:text-orange-600 transition-colors whitespace-nowrap" href="#overview">Overview</a>
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors whitespace-nowrap" href="#itinerary">Itinerary</a>
</div>
<div className="hidden md:flex items-center gap-4">
<span className="text-xs font-mono text-stone-500">NEXT DEPARTURE: SEP 14</span>
<button className="bg-black text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors">
                        Reserve Spot
                    </button>
</div>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-8 space-y-24">
<section className="space-y-8" id="overview">
<h2 className="text-4xl font-medium tracking-tight text-black">Jagged peaks, silent valleys.</h2>
<div className="prose prose-stone prose-lg text-stone-500 font-light leading-loose prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-black max-w-none">
<p className="text-xl md:text-2xl text-black leading-relaxed">
                                This isn't just a hike. It's a study in verticality. We traverse the spine of the Dolomites, moving from the lush meadows of Alpe di Siusi to the lunar landscapes of the Rosengarten group.
                            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-64 md:h-80">
<div className="rounded-2xl overflow-hidden h-full">
<img alt="Hut" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden h-full hidden md:block">
<img alt="Trail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden h-full">
<img alt="Map" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
</div>
<div className="lg:col-span-4 space-y-8">
<div className="sticky top-24 space-y-6">
<div className="glass-panel p-6 rounded-2xl shadow-sm">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-3xl font-semibold text-black tracking-tight">$3,450</div>
<div className="text-xs text-stone-500 font-mono mt-1">PER PERSON / ALL INCLUSIVE</div>
</div>
</div>
<button className="w-full py-3 bg-black text-white rounded-xl font-medium text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group">
                                Request Booking
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-stone-200 mt-20 bg-stone-50">
<div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<span className="text-sm tracking-tight font-semibold text-black">loaf.</span>
<span className="text-xs text-stone-400">© 2024</span>
</div>
<div className="flex gap-6">
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:text-black hover:border-black transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:text-black hover:border-black transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
