import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => { const modal = document.getElementById('profile-modal'); const backdrop = document.getElementById('modal-backdrop'); const panel = document.getElementById('modal-panel'); const closeBtn = document.getElementById('close-modal'); const modalBanner = document.getElementById('modal-banner'); const modalAvatar = document.getElementById('modal-avatar'); const modalName = document.getElementById('modal-name'); const modalHandle = document.getElementById('modal-handle'); const openModal = (card) => { const img = card.querySelector('img').src; const name = card.querySelector('h3').textContent; const handle = card.querySelector('p.text-xs').textContent; modalBanner.src = img; modalAvatar.src = img; modalName.textContent = name; modalHandle.textContent = handle; modal.classList.remove('hidden'); setTimeout(() => { backdrop.classList.remove('opacity-0'); panel.classList.remove('translate-y-10', 'opacity-0'); }, 10); }; const closeModal = () => { backdrop.classList.add('opacity-0'); panel.classList.add('translate-y-10', 'opacity-0'); setTimeout(() => { modal.classList.add('hidden'); }, 300); }; document.querySelectorAll('main .grid a.group').forEach(card => { card.addEventListener('click', (e) => { e.preventDefault(); openModal(card); }); }); closeBtn.addEventListener('click', closeModal); backdrop.addEventListener('click', closeModal); document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); }); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<aside className="hidden lg:flex flex-col w-64 border-r border-neutral-900 fixed h-screen bg-[#030303] z-50">

<div className="h-16 flex items-center px-6 border-b border-neutral-900">
<span className="text-lg font-semibold tracking-tighter text-white">
          OFL
        </span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-widest">
          Discover
        </div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm text-white bg-neutral-900/50 rounded-md border border-neutral-800/50 hover:border-neutral-700 transition-all" href="#">
<span className="iconify" data-icon="lucide:compass" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Explore</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:flame" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Trending</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">New Arrivals</span>
</a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-widest">
          Library
        </div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:bookmark" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Saved</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:history" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">History</span>
</a>
</nav>

<div className="p-4 border-t border-neutral-900">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-neutral-900 transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 flex items-center justify-center text-xs font-medium text-white ring-2 ring-black">
            JD
          </div>
<div className="flex-1 text-left">
<div className="text-sm font-medium text-white">John Doe</div>
<div className="text-xs text-neutral-500">Premium Member</div>
</div>
<span className="iconify text-neutral-500" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 lg:ml-64 relative min-h-screen">

<header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#030303]/80 border-b border-neutral-900">
<div className="flex items-center justify-between h-16 px-4 md:px-8">

<div className="flex lg:hidden items-center gap-4">
<button className="text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
<span className="text-lg font-semibold tracking-tighter text-white">
              OFL
            </span>
</div>

<div className="hidden md:flex flex-1 max-w-lg relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-neutral-500 group-focus-within:text-white transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
</div>
<input className="block w-full pl-10 pr-3 py-2 text-sm bg-neutral-900/50 border border-neutral-800 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 transition-all" placeholder="Search creators, tags, or leaks..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-xs text-neutral-600 border border-neutral-800 rounded px-1.5 py-0.5">
                ⌘K
              </span>
</div>
</div>

<div className="flex items-center gap-3 md:gap-6">
<button className="text-neutral-400 hover:text-white transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-black"></span>
</button>
<button className="md:hidden text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</button>
</div>
</div>

<div className="px-4 md:px-8 py-3 flex items-center gap-3 overflow-x-auto no-scrollbar border-b border-neutral-900 bg-[#030303]/50">
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-black bg-white rounded-full border border-white hover:bg-neutral-200 transition-colors">
            All Profiles
          </button>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 bg-neutral-900/50 rounded-full border border-neutral-800 hover:text-white hover:border-neutral-600 transition-all">
            Free Access
          </button>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 bg-neutral-900/50 rounded-full border border-neutral-800 hover:text-white hover:border-neutral-600 transition-all">
            VIP Only
          </button>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 bg-neutral-900/50 rounded-full border border-neutral-800 hover:text-white hover:border-neutral-600 transition-all">
            Recently Leaked
          </button>
<div className="w-px h-4 bg-neutral-800 mx-1"></div>

<label className="flex items-center cursor-pointer group">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 rounded-full peer peer-checked:bg-neutral-600 transition-colors"></div>
<div className="absolute left-1 top-1 w-3 h-3 bg-neutral-400 rounded-full transition-transform peer-checked:translate-x-full peer-checked:bg-white"></div>
</div>
<span className="ml-2 text-xs text-neutral-400 group-hover:text-white transition-colors">
              Verified Only
            </span>
</label>
</div>
</header>

<div className="p-4 md:p-8 space-y-8">

<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-medium tracking-tight text-white">
              Trending Profiles
            </h2>
<p className="text-sm text-neutral-500 mt-1">
              The most viewed content in the last 24 hours.
            </p>
</div>
<div className="flex gap-2">
<button className="p-2 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:bg-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
</button>
<button className="p-2 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:bg-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:list" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#">
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black bg-white/90 backdrop-blur-sm rounded">
                  New
                </span>
</div>
<div className="absolute top-3 right-3 z-20">
<div className="p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:bookmark" data-width="14"></span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Sarah Miller
                  </h3>
<span className="iconify text-blue-400" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-xs text-neutral-400 mb-3">@sarahm_official</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:image" data-width="12"></span>
<span>142</span>
</div>
<div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
<span className="iconify" data-icon="lucide:unlock" data-width="12"></span>
<span>Free</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '50ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
<div className="absolute top-3 right-3 z-20">
<div className="p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:bookmark" data-width="14"></span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Elena Kors
                  </h3>
<span className="iconify text-blue-400" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-xs text-neutral-400 mb-3">@elenak</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:video" data-width="12"></span>
<span>28</span>
</div>
<div className="flex items-center gap-1 text-xs text-amber-400 font-medium">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
<span>VIP</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '100ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white bg-red-600/80 backdrop-blur-sm rounded">
                  Hot
                </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Jade Williams
                  </h3>
</div>
<p className="text-xs text-neutral-400 mb-3">@jadewill</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:folder-open" data-width="12"></span>
<span>1.2k Files</span>
</div>
<div className="flex items-center gap-1 text-xs text-neutral-300 font-medium">
<span>Updated 2h</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '150ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Monica Bell
                  </h3>
<span className="iconify text-blue-400" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-xs text-neutral-400 mb-3">@monicab</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:image" data-width="12"></span>
<span>89</span>
</div>
<div className="flex items-center gap-1 text-xs text-amber-400 font-medium">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
<span>Premium</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '200ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Chloe D.
                  </h3>
</div>
<p className="text-xs text-neutral-400 mb-3">@chloexx</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:file" data-width="12"></span>
<span>450</span>
</div>
<div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
<span className="iconify" data-icon="lucide:unlock" data-width="12"></span>
<span>Public</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '250ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Ruby Rose
                  </h3>
<span className="iconify text-blue-400" data-icon="lucide:badge-check" data-width="16"></span>
</div>
<p className="text-xs text-neutral-400 mb-3">@ruby_exclusive</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:film" data-width="12"></span>
<span>56</span>
</div>
<div className="flex items-center gap-1 text-xs text-neutral-300 font-medium">
<span>Updated 5m</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '300ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Katy Perry
                  </h3>
</div>
<p className="text-xs text-neutral-400 mb-3">@katyp</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:image" data-width="12"></span>
<span>300+</span>
</div>
<div className="flex items-center gap-1 text-xs text-amber-400 font-medium">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
<span>VIP</span>
</div>
</div>
</div>
</div>
</a>

<a className="group relative block bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 fade-in" href="#" style={{animationDelay: '350ms'}}>
<div className="aspect-[3/4] w-full overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black bg-emerald-400 rounded">
                  Free
                </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-white tracking-tight">
                    Alice Wonder
                  </h3>
</div>
<p className="text-xs text-neutral-400 mb-3">@alicew</p>
<div className="flex items-center justify-between pt-3 border-t border-white/10">
<div className="flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:folder" data-width="12"></span>
<span>Mega Pack</span>
</div>
<div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
<span className="iconify" data-icon="lucide:unlock" data-width="12"></span>
<span>Unlocked</span>
</div>
</div>
</div>
</div>
</a>
</div>

<div className="flex justify-center mt-12 mb-8">
<button className="px-6 py-2.5 text-xs font-medium text-neutral-300 border border-neutral-800 bg-neutral-900/50 rounded-full hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all flex items-center gap-2">
<span>Load more profiles</span>
<span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</button>
</div>
</div>
</main>
<div aria-modal="true" className="fixed inset-0 z-[100] hidden" id="profile-modal" role="dialog">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="modal-backdrop"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
<div className="relative w-full max-w-lg bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-2xl shadow-black overflow-hidden transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-auto flex flex-col max-h-[85vh]" id="modal-panel">
<button className="absolute top-4 right-4 z-20 p-2 bg-black/40 text-white rounded-full hover:bg-neutral-800 transition-colors backdrop-blur-md" id="close-modal">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<div className="h-32 bg-neutral-800 relative">
<img className="w-full h-full object-cover opacity-50" id="modal-banner" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
</div>
<div className="px-6 relative -mt-10 flex-shrink-0">
<div className="flex justify-between items-end">
<div className="relative">
<div className="w-20 h-20 rounded-full p-1 bg-[#0a0a0a]">
<img className="w-full h-full rounded-full object-cover" id="modal-avatar" src=""/>
</div>
</div>
<button className="mb-2 px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
                Subscribe
              </button>
</div>
<div className="mt-3">
<div className="flex items-center gap-2">
<h2 className="text-xl font-semibold text-white tracking-tight" id="modal-name"></h2>
<span className="iconify text-blue-400" data-icon="lucide:badge-check" data-width="18"></span>
</div>
<p className="text-sm text-neutral-500" id="modal-handle"></p>
</div>
<div className="flex gap-6 mt-4 pb-6 border-b border-neutral-800">
<div className="text-center">
<div className="text-white font-semibold text-sm">142</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Posts
                </div>
</div>
<div className="text-center">
<div className="text-white font-semibold text-sm">25.4k</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Likes
                </div>
</div>
<div className="text-center">
<div className="text-white font-semibold text-sm">5.2k</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Fans
                </div>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 bg-[#0a0a0a]">
<div className="grid grid-cols-3 gap-2">
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
<span className="iconify text-neutral-700" data-icon="lucide:lock" data-width="20"></span>
</div>
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
<span className="iconify text-neutral-700" data-icon="lucide:lock" data-width="20"></span>
</div>
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
<span className="iconify text-neutral-700" data-icon="lucide:lock" data-width="20"></span>
</div>
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
<span className="iconify text-neutral-700" data-icon="lucide:lock" data-width="20"></span>
</div>
<div className="aspect-square bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
<span className="iconify text-neutral-700" data-icon="lucide:lock" data-width="20"></span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
