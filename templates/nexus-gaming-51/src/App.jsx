import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-900">
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-10">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">NEXUS</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="text-white" href="#">Discover</a>
<a className="hover:text-white transition-colors duration-200" href="#">Library</a>
<a className="hover:text-white transition-colors duration-200" href="#">Tournaments</a>
<a className="hover:text-white transition-colors duration-200" href="#">Community</a>
</nav>
</div>

<div className="flex items-center gap-3 sm:gap-5">
<div className="hidden sm:block relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-lg transition-colors group-focus-within:text-white" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="bg-neutral-900/50 border border-neutral-800 text-sm rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:border-neutral-700 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 w-48 lg:w-64 transition-all duration-300" placeholder="Search games, players..." type="text"/>
</div>
<button className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-900 flex items-center justify-center relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full border border-[#0a0a0a]"></span>
</button>
<button className="w-8 h-8 rounded-full border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-colors shrink-0">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</button>
<button className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors rounded-full">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<main className="sm:px-6 lg:px-8 max-w-[85rem] mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 space-y-16">

<section className="overflow-hidden min-h-[450px] flex group bg-neutral-900 h-[65vh] max-h-[600px] border-neutral-800 border rounded-2xl relative items-end">
<img alt="Featured Game" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<section className="relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border-white/10 border rounded-3xl backdrop-blur-lg">
<div className="p-3 sm:p-4">
<div className="relative rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-white/10">
<img alt="Portrait" className="sm:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aee7c414-1804-47c8-ae06-d2543a148ad7_800w.jpg"/>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/60 px-2.5 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<span className="text-[12px] text-neutral-200 font-geist">Available for work</span>
</div>
</div>
<div className="px-2 sm:px-1">
<h2 className="mt-4 text-2xl text-neutral-100 font-geist tracking-tighter">
        Hello I am
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 font-geist tracking-tighter">Johan Beker</span>
</h2>
<p className="mt-1 text-sm text-neutral-400 font-geist">UI/UX Interaction Designer based in Berlin.</p>
<div className="mt-4 flex items-center gap-2.5">
<a className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition" href="#">
<svg className="h-4 w-4 text-neutral-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition" href="#">
<svg className="h-4 w-4 text-neutral-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition" href="#">
<svg className="h-4 w-4 text-neutral-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
</svg>
</a>
<a className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition" href="#">
<svg className="h-4 w-4 text-neutral-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
<div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
<div className="mb-2">
</div>
</div>
</div>
</section>
<div className="z-10 md:p-12 w-full max-w-2xl pt-6 pr-6 pb-6 pl-6 relative space-y-5">
<div className="flex flex-wrap gap-3 gap-x-3 gap-y-3 items-center">
<span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white uppercase tracking-widest">Featured Spotlight</span>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-300">
<iconify-icon className="" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 125K Playing
                    </div>
</div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tight">
                    CYBER<br/>FRONTIER
                </h1>
<p className="text-base text-neutral-400 max-w-lg leading-relaxed hidden sm:block">
                    Explore neon-lit streets, upgrade your cybernetics, and uncover the truth in the ultimate open-world RPG experience. The new expansion is here.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="px-6 py-2.5 bg-white text-neutral-950 text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-bold"></iconify-icon> Play Now
                    </button>
<button className="px-6 py-2.5 bg-neutral-800/40 backdrop-blur-md border border-neutral-700/50 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Wishlist
                    </button>
</div>
</div><div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none z-0 mix-blend-screen"></div><div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[80px] animate-pulse pointer-events-none z-0 mix-blend-screen" style={{animationDelay: '1s'}}></div><div className="absolute top-8 right-8 z-10 hidden lg:flex flex-col items-end gap-3 pointer-events-none">
<div className="flex items-center gap-2.5 bg-[#0a0a0a]/50 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded-full shadow-lg">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</div>
<span className="text-[10px] font-semibold text-indigo-300 uppercase tracking-widest">Network Stable</span>
</div>
<div className="flex items-center gap-1.5 opacity-70">
<div className="h-1 w-16 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/50 w-full animate-pulse"></div>
</div>
<div className="h-1 w-4 bg-neutral-700 rounded-full"></div>
<div className="h-1 w-1.5 bg-neutral-600 rounded-full animate-ping"></div>
</div>
</div><div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-4 pointer-events-none">
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180">Explore</span>
<div className="w-6 h-10 rounded-full border border-neutral-700 flex justify-center pt-2 bg-[#0a0a0a]/50 backdrop-blur-md shadow-lg">
<div className="w-1 h-2 bg-neutral-300 rounded-full animate-bounce"></div>
</div>
</div>
</section>

<section className="">
<div className="flex items-end justify-between mb-6">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-white">Browse Genres</h2>
<p className="text-sm text-neutral-500 mt-1">Discover your next favorite game</p>
</div>
<div className="hidden sm:flex gap-2">
<button className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
<button className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

<a className="group relative h-28 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">Action</span>
</a>

<a className="group relative h-28 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">RPG</span>
</a>

<a className="group relative h-28 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:map-arrow-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">Strategy</span>
</a>

<a className="group relative h-28 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:steering-wheel-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">Racing</span>
</a>

<a className="group relative h-28 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:ghost-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">Indie</span>
</a>

<a className="group relative h-28 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex flex-col items-center justify-center gap-3 hover:border-neutral-700 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:gamepad-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors relative z-10">Casual</span>
</a>
</div>
</section>

<section className="">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white">New &amp; Trending</h2>
<p className="text-sm text-neutral-500 mt-1">The hottest titles right now</p>
</div>
<a className="text-sm font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-1 group" href="#">
                    View All <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col gap-3">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer">
<img alt="Game cover" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="hover:bg-white hover:text-neutral-950 transition-colors text-sm font-medium text-white bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 via-white/0 to-white/10 w-full border-white/20 border rounded-lg py-2.5 backdrop-blur-md">
                                Add to Cart
                            </button>
</div>
<div className="absolute top-3 right-3 px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-md text-xs font-medium text-white">
                            $59.99
                        </div>
</div>
<div className="">
<h3 className="text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors line-clamp-1 cursor-pointer">Starlight Wanderer</h3>
<div className="flex items-center justify-between mt-1.5">
<p className="text-xs text-neutral-500">Sci-Fi RPG</p>
<div className="flex items-center gap-1 text-xs text-neutral-400">
<iconify-icon className="text-white/80" icon="solar:star-bold"></iconify-icon>
<span>4.8</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer">
<img alt="Game cover" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-full py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white hover:text-neutral-950 transition-colors">
                                Add to Cart
                            </button>
</div>
<div className="absolute top-3 right-3 px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-md text-xs font-medium text-white">
                            Free
                        </div>
<div className="absolute top-3 left-3 px-2 py-1 bg-indigo-500 text-white rounded-md text-xs font-medium">
                            Update
                        </div>
</div>
<div className="">
<h3 className="text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors line-clamp-1 cursor-pointer">Apex Protocol</h3>
<div className="flex items-center justify-between mt-1.5">
<p className="text-xs text-neutral-500">Tactical Shooter</p>
<div className="flex items-center gap-1 text-xs text-neutral-400">
<iconify-icon className="text-white/80" icon="solar:star-bold"></iconify-icon>
<span>4.5</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer">
<img alt="Game cover" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-full py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white hover:text-neutral-950 transition-colors">
                                Add to Cart
                            </button>
</div>
<div className="absolute top-3 right-3 px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-md text-xs font-medium text-white">
                            $29.99
                        </div>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors line-clamp-1 cursor-pointer">Elden Crest</h3>
<div className="flex items-center justify-between mt-1.5">
<p className="text-xs text-neutral-500">Dark Fantasy RPG</p>
<div className="flex items-center gap-1 text-xs text-neutral-400">
<iconify-icon className="text-white/80" icon="solar:star-bold"></iconify-icon>
<span>4.9</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer">
<img alt="Game cover" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<button className="w-full py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white hover:text-neutral-950 transition-colors">
                                Add to Cart
                            </button>
</div>
<div className="absolute top-3 right-3 px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-md text-xs font-medium text-neutral-400 line-through">
                            $39.99
                        </div>
<div className="absolute top-3 left-3 px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/20 rounded-md text-xs font-medium">
                            -50%
                        </div>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors line-clamp-1 cursor-pointer">Neon Drift</h3>
<div className="flex items-center justify-between mt-1.5">
<p className="text-xs text-neutral-500">Arcade Racing</p>
<div className="flex items-center gap-1 text-xs text-neutral-400">
<iconify-icon className="text-white/80" icon="solar:star-bold"></iconify-icon>
<span>4.2</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 space-y-6">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-white">Live Tournaments</h2>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Schedule</a>
</div>
<div className="space-y-3">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition-colors cursor-pointer group">
<div className="w-full sm:w-24 h-32 sm:h-20 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center gap-2 mb-1">
<span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-red-500 uppercase tracking-widest">Live Now</span>
</div>
<h4 className="text-base font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Global Championship 2024 - Quarter Finals</h4>
<p className="text-sm text-neutral-500 truncate">Valorant • 125k viewers • English Stream</p>
</div>
<div className="hidden md:flex items-center gap-4 shrink-0">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover" src="https://i.pravatar.cc/150?img=33"/>
<img className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover" src="https://i.pravatar.cc/150?img=12"/>
<div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">+8</div>
</div>
<div className="w-px h-8 bg-neutral-800"></div>
<button className="hover:bg-neutral-200 transition-colors text-sm font-medium text-neutral-950 bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
                                Watch
                            </button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition-colors cursor-pointer group">
<div className="w-full sm:w-24 h-32 sm:h-20 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 min-w-0 space-y-1">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-neutral-500" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Starts in 2 hours</span>
</div>
<h4 className="text-base font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Neon Masters League - Week 5</h4>
<p className="text-sm text-neutral-500 truncate">Neon Drift • $50,000 Prize Pool</p>
</div>
<div className="hidden md:flex items-center gap-4 shrink-0">
<button className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-800 border border-transparent hover:border-neutral-700">
<iconify-icon className="text-lg" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-white">Social</h2>
<div className="p-1 rounded-2xl border border-neutral-800 bg-neutral-900/40">
<div className="flex items-center p-1.5 gap-1 mb-2">
<button className="flex-1 py-1.5 px-3 rounded-lg bg-neutral-800 text-sm font-medium text-white shadow-sm">Online (3)</button>
<button className="flex-1 py-1.5 px-3 rounded-lg text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">Clans</button>
</div>
<div className="p-2 space-y-1">

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border border-neutral-700" src="https://i.pravatar.cc/150?img=68"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0a0a0a] bg-green-500"></span>
</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">Alex Chen</p>
<p className="text-xs text-indigo-300/80">In-game: Cyber Frontier</p>
</div>
</div>
<button className="p-1.5 text-neutral-500 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border border-neutral-700" src="https://i.pravatar.cc/150?img=47"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0a0a0a] bg-green-500"></span>
</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">Sarah Miller</p>
<p className="text-xs text-neutral-500">In Menus</p>
</div>
</div>
<button className="p-1.5 text-neutral-500 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border border-neutral-700 grayscale" src="https://i.pravatar.cc/150?img=12"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0a0a0a] bg-neutral-600"></span>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">David K.</p>
<p className="text-xs text-neutral-600">Offline</p>
</div>
</div>
</div>
</div>
<div className="p-3 mt-2 border-t border-neutral-800/50">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-neutral-950 border border-neutral-800 text-xs rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:border-neutral-700 text-neutral-300 placeholder-neutral-600 transition-colors" placeholder="Find friends..." type="text"/>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 mt-20 bg-[#0a0a0a]">
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<div className="w-1 h-1 rounded-full bg-neutral-800"></div>
<span className="text-sm text-neutral-500">Platform © 2024</span>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Store Policies</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
