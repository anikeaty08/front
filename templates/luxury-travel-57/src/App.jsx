import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
}
},
height: {
'dvh': '100dvh'
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const listView = document.getElementById('list-view');
            const mapView = document.getElementById('map-view');
            const toggleBtn = document.getElementById('mobile-toggle-btn');
            const toggleIcon = document.getElementById('toggle-icon');
            const toggleText = document.getElementById('toggle-text');
            const scrollContainer = document.getElementById('scroll-container');
            const header = document.getElementById('main-header');

            let isMapView = false;

            // Mobile Map Toggle Logic
            toggleBtn.addEventListener('click', () => {
                isMapView = !isMapView;
                
                if (isMapView) {
                    listView.classList.add('hidden');
                    mapView.classList.remove('hidden');
                    toggleText.textContent = 'List View';
                    toggleIcon.setAttribute('data-icon', 'lucide:list');
                } else {
                    listView.classList.remove('hidden');
                    mapView.classList.add('hidden');
                    toggleText.textContent = 'Map View';
                    toggleIcon.setAttribute('data-icon', 'lucide:map');
                }
            });

            // Scroll Logic for Shrinking Header
            scrollContainer.addEventListener('scroll', () => {
                const scrollTop = scrollContainer.scrollTop;
                
                if (scrollTop > 20) {
                    header.classList.add('header-collapsed');
                } else {
                    header.classList.remove('header-collapsed');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-[480px] flex flex-col h-full bg-white border-r border-stone-200 relative z-20 shadow-xl shadow-stone-200/50 transition-all" id="list-view">

<header className="px-6 py-6 border-b border-stone-100 bg-white/95 backdrop-blur-md sticky top-0 z-30 transition-all duration-300" id="main-header">
<div className="flex justify-between items-center mb-6" id="header-logo-section">

<div className="font-serif text-xl font-medium tracking-tight text-stone-900 flex items-center gap-2">
<span className="iconify text-stone-900" data-icon="lucide:compass" data-width="20"></span>
                    ATLAS &amp; CO.
                </div>
<button className="p-2 hover:bg-stone-50 rounded-full transition-colors duration-300">
<span className="iconify text-stone-500" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>

<div className="relative group">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-stone-800 transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
<input className="w-full bg-stone-50 hover:bg-stone-100 focus:bg-white border border-stone-200 rounded-lg py-3 pl-10 pr-4 text-sm font-light placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-300 transition-all duration-300 shadow-sm" placeholder="Search destinations..." type="text"/>
</div>

<div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
<button className="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 bg-stone-900 text-white rounded-full text-xs font-medium tracking-wide transition-transform hover:scale-105 shadow-sm">
<span className="iconify" data-icon="lucide:bed-double" data-width="14"></span>
                    Stays
                </button>
<button className="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 bg-white border border-stone-200 text-stone-600 rounded-full text-xs font-medium tracking-wide hover:border-stone-400 hover:text-stone-900 transition-all">
<span className="iconify" data-icon="lucide:utensils" data-width="14"></span>
                    Dining
                </button>
<button className="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 bg-white border border-stone-200 text-stone-600 rounded-full text-xs font-medium tracking-wide hover:border-stone-400 hover:text-stone-900 transition-all">
<span className="iconify" data-icon="lucide:wine" data-width="14"></span>
                    Bar
                </button>
<button className="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 bg-white border border-stone-200 text-stone-600 rounded-full text-xs font-medium tracking-wide hover:border-stone-400 hover:text-stone-900 transition-all">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                    Spa
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 py-4 space-y-10 scroll-smooth" id="scroll-container">

<section>
<div className="flex justify-between items-baseline mb-4">
<h2 className="font-serif text-xl text-stone-900 font-normal">Premier Stays</h2>
<span className="text-xs text-stone-400 font-sans tracking-wide">4 NEARBY</span>
</div>

<article className="group mb-8 cursor-pointer">
<div className="relative overflow-hidden rounded-md aspect-[16/9] mb-3">
<img alt="Hotel Interior" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-stone-900 px-2 py-1 rounded text-xs font-medium tracking-tight shadow-sm">
                            $850 / night
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">The Ritz-Carlton</h3>
<p className="text-xs text-stone-500 font-light mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> 
                                Central District, 0.4 mi
                            </p>
</div>
<div className="flex items-center gap-1 text-stone-900">
<span className="text-xs font-medium">4.9</span>
<span className="iconify text-stone-900" data-fill="currentColor" data-icon="lucide:star" data-width="10"></span>
</div>
</div>
<div className="mt-3 flex gap-2">
<span className="px-2 py-0.5 border border-stone-200 text-[10px] text-stone-500 rounded uppercase tracking-wider">Pool</span>
<span className="px-2 py-0.5 border border-stone-200 text-[10px] text-stone-500 rounded uppercase tracking-wider">Spa</span>
<span className="px-2 py-0.5 border border-stone-200 text-[10px] text-stone-500 rounded uppercase tracking-wider">Valet</span>
</div>
</article>

<article className="group mb-8 cursor-pointer">
<div className="relative overflow-hidden rounded-md aspect-[16/9] mb-3">
<img alt="Hotel Interior" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-stone-900 px-2 py-1 rounded text-xs font-medium tracking-tight shadow-sm">
                            $620 / night
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">Hotel Aman</h3>
<p className="text-xs text-stone-500 font-light mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> 
                                Financial District, 1.2 mi
                            </p>
</div>
<div className="flex items-center gap-1 text-stone-900">
<span className="text-xs font-medium">4.8</span>
<span className="iconify text-stone-900" data-fill="currentColor" data-icon="lucide:star" data-width="10"></span>
</div>
</div>
</article>
</section>
<div className="h-px bg-stone-100 w-full"></div>

<section>
<div className="flex justify-between items-baseline mb-4">
<h2 className="font-serif text-xl text-stone-900 font-normal">Fine Dining</h2>
<span className="text-xs text-stone-400 font-sans tracking-wide">3 NEARBY</span>
</div>

<article className="group mb-6 cursor-pointer flex gap-4 items-center">
<div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
<img alt="Restaurant Dish" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-serif text-base text-stone-900 truncate">Le Bernardin</h3>
<div className="flex gap-0.5">
<span className="iconify text-stone-900" data-fill="currentColor" data-icon="lucide:star" data-width="8"></span>
<span className="iconify text-stone-900" data-fill="currentColor" data-icon="lucide:star" data-width="8"></span>
<span className="iconify text-stone-900" data-fill="currentColor" data-icon="lucide:star" data-width="8"></span>
</div>
</div>
<p className="text-xs text-stone-500 mb-2">French Seafood • $$$$</p>
<p className="text-[10px] text-stone-400 leading-relaxed line-clamp-2">
                            Known for exquisite seafood preparations and elegant service in a modern setting.
                        </p>
</div>
</article>

<article className="group mb-6 cursor-pointer flex gap-4 items-center">
<div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
<img alt="Restaurant Interior" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-serif text-base text-stone-900 truncate">Nobu Downtown</h3>
</div>
<p className="text-xs text-stone-500 mb-2">Japanese Fusion • $$$</p>
<p className="text-[10px] text-stone-400 leading-relaxed line-clamp-2">
                            Upscale Japanese-Peruvian dishes served in a chic, cavernous space.
                        </p>
</div>
</article>

<article className="group mb-6 cursor-pointer flex gap-4 items-center opacity-50">
<div className="w-20 h-20 bg-stone-200 rounded flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="h-4 bg-stone-200 rounded w-2/3 mb-2"></div>
<div className="h-3 bg-stone-100 rounded w-1/3 mb-2"></div>
<div className="h-2 bg-stone-100 rounded w-full"></div>
</div>
</article>
</section>

<footer className="pt-8 pb-20 md:pb-4 text-center">
<p className="text-[10px] text-stone-400 uppercase tracking-widest">Atlas &amp; Co. Luxury Travel</p>
</footer>
</div>
</aside>

<main className="hidden md:block relative flex-1 bg-stone-100 h-full w-full map-bg" id="map-view">

<div className="w-full h-full relative" style={{transform: 'scale(1.2)', transformOrigin: 'center'}}>

<div className="map-road w-full h-4 top-1/3 rotate-2"></div>
<div className="map-road w-4 h-full left-1/4 -rotate-2"></div>
<div className="map-road w-full h-3 bottom-1/4 -rotate-1"></div>
<div className="map-road w-3 h-full right-1/3 rotate-3"></div>

<div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-tl-[100px] pointer-events-none"></div>

<div className="absolute top-10 left-10 w-64 h-48 bg-green-50/50 rounded-[40px] pointer-events-none"></div>

<div className="absolute top-[35%] left-[45%] z-20 cursor-pointer group transform transition-transform hover:scale-105">
<div className="relative flex flex-col items-center">
<div className="bg-stone-900 text-white px-4 py-2 rounded-lg shadow-2xl flex items-center gap-3 min-w-max border border-stone-700">
<span className="font-serif font-medium text-sm">$850</span>
<div className="h-3 w-px bg-stone-700"></div>
<span className="text-xs font-sans tracking-wide">The Ritz-Carlton</span>
</div>

<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-stone-900 -mt-px"></div>
</div>
</div>

<div className="absolute top-[55%] left-[25%] z-10 cursor-pointer group transform transition-transform hover:scale-110">
<div className="bg-white hover:bg-stone-50 text-stone-900 px-3 py-1.5 rounded-lg shadow-lg border border-stone-200 flex items-center gap-2">
<span className="font-sans font-medium text-xs">$620</span>
</div>
<div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-stone-200 mx-auto -mt-px"></div>
</div>

<div className="absolute top-[30%] left-[55%] z-10 cursor-pointer group transform transition-transform hover:scale-110">
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-colors">
<span className="iconify" data-icon="lucide:utensils" data-width="14"></span>
</div>
</div>

<div className="absolute bottom-[40%] left-[35%] z-10 cursor-pointer group transform transition-transform hover:scale-110">
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-colors">
<span className="iconify" data-icon="lucide:utensils" data-width="14"></span>
</div>
</div>
</div>

<div className="absolute bottom-24 md:bottom-8 right-8 flex flex-col gap-2">
<button className="w-10 h-10 bg-white border border-stone-200 rounded-lg shadow-sm flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="w-10 h-10 bg-white border border-stone-200 rounded-lg shadow-sm flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<span className="iconify" data-icon="lucide:minus" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="w-10 h-10 mt-2 bg-stone-900 border border-stone-900 rounded-lg shadow-lg flex items-center justify-center text-white hover:bg-stone-800 transition-colors">
<span className="iconify" data-icon="lucide:navigation" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>

<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-stone-200 p-3 rounded-lg shadow-sm flex gap-4 text-xs font-medium text-stone-600">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-stone-900"></div>
<span>Stay</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full border border-stone-400 bg-white"></div>
<span>Dine</span>
</div>
</div>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-50">
<button className="bg-stone-900 text-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-sm font-medium tracking-wide border border-stone-800 transition-transform active:scale-95" id="mobile-toggle-btn">
<span className="iconify" data-icon="lucide:map" data-width="16" id="toggle-icon"></span>
<span id="toggle-text">Map View</span>
</button>
</div>



    </>
  );
}
