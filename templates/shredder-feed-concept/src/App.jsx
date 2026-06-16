import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchView(viewName) {
            const views = ['map', 'stack', 'carousel', 'grid'];
            
            // Toggle view containers
            views.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if (v === viewName) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });

            // Toggle active state on buttons
            views.forEach(v => {
                const btn = document.getElementById(`btn-${v}`);
                if (v === viewName) {
                    btn.classList.remove('text-zinc-400', 'hover:text-white');
                    btn.classList.add('bg-white', 'text-zinc-900', 'shadow-sm');
                } else {
                    btn.classList.add('text-zinc-400', 'hover:text-white');
                    btn.classList.remove('bg-white', 'text-zinc-900', 'shadow-sm');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-zinc-950 min-h-screen relative flex flex-col shadow-2xl overflow-hidden sm:border-x sm:border-zinc-800">

<header className="absolute top-0 w-full z-50 px-5 pt-10 pb-4 flex justify-between items-center bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-transparent backdrop-blur-sm pointer-events-none">

<div className="text-xl tracking-tighter font-semibold uppercase text-white pointer-events-auto">
                VRTX
            </div>

<div className="flex items-center bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/10 pointer-events-auto">
<button className="w-9 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors" id="btn-map" onclick="switchView('map')">
<iconify-icon height="18" icon="solar:map-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-8 flex items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm transition-colors" id="btn-stack" onclick="switchView('stack')">
<iconify-icon height="18" icon="solar:layers-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors" id="btn-carousel" onclick="switchView('carousel')">
<iconify-icon height="18" icon="solar:panorama-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors" id="btn-grid" onclick="switchView('grid')">
<iconify-icon height="18" icon="solar:gallery-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>

<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors pointer-events-auto">
<iconify-icon height="20" icon="solar:tuning-linear" width="20"></iconify-icon>
</button>
</header>

<div className="flex-1 w-full h-full relative">

<div className="hidden absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden" id="view-map">

<img alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200&amp;h=1600"/>

<button className="absolute top-1/3 left-1/4 flex flex-col items-center group hover:scale-105 transition-transform z-10 focus:outline-none">
<div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="w-2.5 h-2.5 bg-white rotate-45 -mt-1.5 rounded-sm shadow-lg"></div>
</button>

<button className="absolute top-1/2 right-1/4 flex flex-col items-center group hover:scale-105 transition-transform z-20 focus:outline-none">
<div className="absolute -top-6 bg-white text-zinc-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">Alex, 28</div>
<div className="w-14 h-14 rounded-full border-2 border-emerald-400 overflow-hidden shadow-[0_0_15px_rgba(52,211,153,0.3)] relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="w-3 h-3 bg-emerald-400 rotate-45 -mt-1.5 rounded-sm shadow-lg"></div>
</button>

<div className="absolute bottom-32 right-5 flex flex-col gap-2 z-30">
<button className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg">
<iconify-icon height="20" icon="solar:add-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg">
<iconify-icon height="20" icon="solar:minus-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:scale-105 transition-transform shadow-lg mt-2">
<iconify-icon height="20" icon="solar:target-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<article className="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden" id="view-stack">

<img alt="Surfing Main" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&amp;fit=crop&amp;q=90&amp;w=1200&amp;h=1600"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

<div className="absolute top-28 left-0 w-full px-5 flex gap-1.5 z-20">
<div className="h-0.5 flex-1 bg-white rounded-full"></div>
<div className="h-0.5 flex-1 bg-white/30 rounded-full"></div>
<div className="h-0.5 flex-1 bg-white/30 rounded-full"></div>
<div className="h-0.5 flex-1 bg-white/30 rounded-full"></div>
</div>

<div className="absolute bottom-0 left-0 w-full px-5 pb-28 z-20 flex flex-col justify-end">

<div className="flex items-center gap-2 mb-4">
<div className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                            Online Now
                        </div>
<div className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-zinc-300 text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:routing-2-linear" width="14"></iconify-icon>
                            2 miles away
                        </div>
</div>

<h1 className="text-3xl font-medium tracking-tighter text-white drop-shadow-lg flex items-center gap-3">
                        Alex Rivera, 28
                        <iconify-icon className="text-blue-400" height="24" icon="solar:verified-check-circle-linear" width="24"></iconify-icon>
</h1>
<p className="text-sm text-zinc-300 mt-2 line-clamp-2 max-w-[90%] leading-relaxed font-normal">
                        Chasing morning swells at Lighthouse Point. Always looking for a reliable crew for dawn patrol and weekend coastal trips.
                    </p>

<div className="flex flex-wrap gap-2 mt-5">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Surfing · Advanced</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Free Diving</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Van Life</span>
</div>

<div className="mt-6">
<h3 className="text-xs font-medium tracking-wide text-zinc-400 uppercase mb-3">Action Reel</h3>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">

<button className="relative shrink-0 w-20 h-24 rounded-xl overflow-hidden border border-white/20 hover:border-white transition-colors focus:outline-none">
<img alt="Action 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>
</button>

<button className="relative shrink-0 w-20 h-24 rounded-xl overflow-hidden border border-white/20 hover:border-white transition-colors focus:outline-none">
<img alt="Action 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544257134-22b64a2d8134?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>
</button>

<button className="relative shrink-0 w-20 h-24 rounded-xl overflow-hidden border border-white/20 hover:border-white transition-colors focus:outline-none">
<img alt="Action 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621258055620-30b1ba50c33a?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>
</button>

<button className="relative shrink-0 w-20 h-24 rounded-xl overflow-hidden border border-white/20 hover:border-white transition-colors focus:outline-none">
<img alt="Action 4" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
<iconify-icon height="10" icon="solar:play-bold" width="10"></iconify-icon>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="absolute right-5 bottom-32 flex flex-col gap-3 z-30">
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all">
<iconify-icon height="22" icon="solar:bookmark-linear" width="22"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
<iconify-icon height="22" icon="solar:chat-round-dots-linear" width="22"></iconify-icon>
</button>
</div>
</article>

<div className="hidden absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden pt-24 pb-28" id="view-carousel">
<div className="w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory no-scrollbar px-[7.5%] gap-4">

<div className="snap-center shrink-0 w-full max-w-[85%] h-[85%] relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
<img className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-20">
<h2 className="text-2xl font-medium tracking-tighter text-white flex items-center gap-2">
                                Alex, 28
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
</h2>
<p className="text-sm text-zinc-300 mt-1 mb-4 flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:routing-2-linear" width="14"></iconify-icon>
                                2 miles away
                            </p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Surfing</span>
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Free Diving</span>
</div>
</div>

<button className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg hover:scale-105 transition-transform z-30">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
</button>
</div>

<div className="snap-center shrink-0 w-full max-w-[85%] h-[85%] relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
<img className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-20">
<h2 className="text-2xl font-medium tracking-tighter text-white flex items-center gap-2">
                                Jordan, 25
                            </h2>
<p className="text-sm text-zinc-300 mt-1 mb-4 flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:routing-2-linear" width="14"></iconify-icon>
                                5 miles away
                            </p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Skating</span>
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Photography</span>
</div>
</div>

<button className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg hover:scale-105 transition-transform z-30">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
</button>
</div>

<div className="snap-center shrink-0 w-full max-w-[85%] h-[85%] relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
<img className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544257134-22b64a2d8134?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-20">
<h2 className="text-2xl font-medium tracking-tighter text-white flex items-center gap-2">
                                Sam, 31
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
</h2>
<p className="text-sm text-zinc-300 mt-1 mb-4 flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:routing-2-linear" width="14"></iconify-icon>
                                8 miles away
                            </p>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium">Snowboarding</span>
</div>
</div>

<button className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg hover:scale-105 transition-transform z-30">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 w-full h-full bg-zinc-950 overflow-y-auto no-scrollbar pt-28 pb-32 px-5" id="view-grid">
<div className="grid grid-cols-2 gap-3">

<button className="relative aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none text-left">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<div className="font-medium text-sm flex items-center gap-1.5 tracking-tight">Alex, 28 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span></div>
<div className="text-xs text-zinc-300 mt-0.5">Surfing</div>
</div>
</button>

<button className="relative aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none text-left">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<div className="font-medium text-sm flex items-center gap-1.5 tracking-tight">Jordan, 25</div>
<div className="text-xs text-zinc-300 mt-0.5">Skating</div>
</div>
</button>

<button className="relative aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none text-left">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544257134-22b64a2d8134?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<div className="font-medium text-sm flex items-center gap-1.5 tracking-tight">Sam, 31 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span></div>
<div className="text-xs text-zinc-300 mt-0.5">Snowboarding</div>
</div>
</button>

<button className="relative aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none text-left">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621258055620-30b1ba50c33a?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<div className="font-medium text-sm flex items-center gap-1.5 tracking-tight">Casey, 26</div>
<div className="text-xs text-zinc-300 mt-0.5">Climbing</div>
</div>
</button>

<button className="relative aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none text-left">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-3 left-3 right-3 text-white">
<div className="font-medium text-sm flex items-center gap-1.5 tracking-tight">Riley, 29</div>
<div className="text-xs text-zinc-300 mt-0.5">Free Diving</div>
</div>
</button>

<button className="relative aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none text-left bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-zinc-500 mb-2" height="32" icon="solar:refresh-circle-linear" width="32"></iconify-icon>
<div className="text-xs font-medium text-zinc-400">Load More</div>
</div>
</button>
</div>
</div>
</div>

<nav className="absolute bottom-0 w-full bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 px-6 py-5 flex justify-between items-center z-50 pb-8 pointer-events-auto">
<button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:home-2-linear" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1.5 text-white transition-colors">
<iconify-icon height="24" icon="solar:compass-linear" width="24"></iconify-icon>
<div className="w-1 h-1 bg-white rounded-full mt-1 absolute -bottom-2"></div>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors relative">
<iconify-icon height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-zinc-950"></span>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors overflow-hidden rounded-full w-6 h-6 border border-zinc-700">
<img alt="You" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</button>
</nav>
</main>


    </>
  );
}
