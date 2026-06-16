import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Walkthrough Logic
        
        // 1. Initial Launch
        setTimeout(() => {
            const launchScreen = document.getElementById('screen-launch');
            const prefsScreen = document.getElementById('screen-prefs');
            
            // Fade out launch
            launchScreen.style.opacity = '0';
            launchScreen.style.pointerEvents = 'none';
            
            // Fade in prefs
            setTimeout(() => {
                prefsScreen.style.opacity = '1';
                prefsScreen.style.pointerEvents = 'auto';
            }, 500);
        }, 2000);

        // 2. Toggle Preferences Visuals
        function togglePref(btn) {
            const indicator = btn.querySelector('.checkbox-indicator');
            const iconContainer = btn.firstElementChild;
            const isSelected = indicator.style.opacity === '1';

            if (!isSelected) {
                indicator.style.opacity = '1';
                indicator.style.transform = 'scale(1)';
                btn.classList.add('border-emerald-200', 'bg-emerald-50/10');
                iconContainer.classList.add('bg-emerald-50', 'text-emerald-600');
                iconContainer.classList.remove('bg-stone-50', 'text-stone-400');
            } else {
                indicator.style.opacity = '0';
                indicator.style.transform = 'scale(0.5)';
                btn.classList.remove('border-emerald-200', 'bg-emerald-50/10');
                iconContainer.classList.remove('bg-emerald-50', 'text-emerald-600');
                iconContainer.classList.add('bg-stone-50', 'text-stone-400');
            }
        }

        // 3. Go To Search
        function goToSearch() {
            const prefsScreen = document.getElementById('screen-prefs');
            const searchScreen = document.getElementById('screen-search');
            
            prefsScreen.style.opacity = '0';
            prefsScreen.style.transform = 'scale(0.95)';
            prefsScreen.style.pointerEvents = 'none';

            setTimeout(() => {
                searchScreen.style.opacity = '1';
                searchScreen.style.pointerEvents = 'auto';
                document.getElementById('search-suggestions').style.opacity = '1';
                
                // Simulate typing interaction automatically for the demo
                setTimeout(simulateSearch, 1500);
            }, 400);
        }

        // 4. Simulate Search & Reveal Map
        function simulateSearch() {
            const input = document.getElementById('search-input');
            const searchContainer = document.getElementById('search-container');
            
            input.focus();
            
            // Wait then transition to map
            setTimeout(() => {
                const searchScreen = document.getElementById('screen-search');
                const mapScreen = document.getElementById('screen-map');

                searchScreen.style.opacity = '0';
                searchScreen.style.transform = 'scale(1.05)';
                searchScreen.style.pointerEvents = 'none';
                
                mapScreen.style.opacity = '1';
                mapScreen.style.pointerEvents = 'auto';
                
                // Re-trigger SVG animation
                const route = document.getElementById('main-route');
                route.style.animation = 'none';
                route.offsetHeight; /* trigger reflow */
                route.style.animation = 'draw 3s ease-out forwards';
                
            }, 1200);
        }

        // Reset for Demo purposes
        function resetFlow() {
            location.reload();
        }

        // Initialize first pref as selected for visual guidance
        setTimeout(() => {
            const firstBtn = document.querySelector('button[onclick="togglePref(this)"]');
            if(firstBtn) togglePref(firstBtn);
        }, 2600);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[390px] h-[844px] bg-stone-50 rounded-[50px] shadow-2xl overflow-hidden border-[8px] border-white ring-1 ring-zinc-200/50">

<div className="absolute top-0 w-full h-14 z-50 flex justify-between items-end px-8 pb-2 text-stone-900 mix-blend-multiply pointer-events-none">
<span className="text-xs font-medium tracking-wide">9:41</span>
<div className="flex gap-1.5 items-center">
<span className="iconify" data-icon="lucide:signal" data-width="14"></span>
<span className="iconify" data-icon="lucide:wifi" data-width="14"></span>
<span className="iconify" data-icon="lucide:battery-medium" data-width="18"></span>
</div>
</div>

<div className="absolute inset-0 z-40 bg-stone-50 flex flex-col items-center justify-center transition-all duration-1000" id="screen-launch">
<div className="flex flex-col items-center gap-6">

<div className="relative w-20 h-20 flex items-center justify-center">
<div className="absolute inset-0 bg-stone-200 rounded-full opacity-20 animate-ping" style={{animationDuration: '3s'}}></div>
<div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white shadow-lg">
<span className="iconify" data-icon="lucide:compass" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
<h1 className="text-3xl font-medium tracking-tight text-stone-900">Pathos</h1>
</div>
</div>

<div className="absolute inset-0 z-30 bg-stone-50 flex flex-col pt-24 px-8 opacity-0 pointer-events-none transition-all duration-700" id="screen-prefs">
<div className="space-y-2 mb-10">
<h2 className="text-2xl font-medium tracking-tight text-stone-900">How would you<br/>like to move?</h2>
<p className="text-sm text-stone-500 font-light leading-relaxed">Select elements to prioritize in your journey.</p>
</div>
<div className="grid grid-cols-2 gap-4">

<button className="group relative flex flex-col items-start p-5 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300" onclick="togglePref(this)">
<div className="w-8 h-8 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center mb-3 transition-colors duration-300">
<span className="iconify" data-icon="lucide:trees" data-width="16"></span>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Parks &amp; Nature</span>
<div className="absolute top-5 right-5 w-5 h-5 rounded-full border border-stone-200 flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 transform scale-50 transition-all group-active:scale-100 checkbox-indicator"></div>
</div>
</button>

<button className="group relative flex flex-col items-start p-5 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300" onclick="togglePref(this)">
<div className="w-8 h-8 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center mb-3 transition-colors duration-300">
<span className="iconify" data-icon="lucide:volume-x" data-width="16"></span>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Quiet Streets</span>
<div className="absolute top-5 right-5 w-5 h-5 rounded-full border border-stone-200 flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 transform scale-50 transition-all checkbox-indicator"></div>
</div>
</button>

<button className="group relative flex flex-col items-start p-5 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300" onclick="togglePref(this)">
<div className="w-8 h-8 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center mb-3 transition-colors duration-300">
<span className="iconify" data-icon="lucide:coffee" data-width="16"></span>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Cafés</span>
<div className="absolute top-5 right-5 w-5 h-5 rounded-full border border-stone-200 flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 transform scale-50 transition-all checkbox-indicator"></div>
</div>
</button>

<button className="group relative flex flex-col items-start p-5 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300" onclick="togglePref(this)">
<div className="w-8 h-8 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center mb-3 transition-colors duration-300">
<span className="iconify" data-icon="lucide:waves" data-width="16"></span>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Waterfront</span>
<div className="absolute top-5 right-5 w-5 h-5 rounded-full border border-stone-200 flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 transform scale-50 transition-all checkbox-indicator"></div>
</div>
</button>
</div>
<div className="mt-auto mb-10">
<button className="w-full h-14 bg-stone-900 text-stone-50 rounded-full font-medium text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2" onclick="goToSearch()">
                    Begin Journey
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="absolute inset-0 z-20 bg-stone-50/50 backdrop-blur-xl flex flex-col items-center justify-center px-8 opacity-0 pointer-events-none transition-all duration-700" id="screen-search">
<div className="w-full max-w-xs space-y-8 transform translate-y-4 transition-transform duration-700" id="search-container">
<div className="text-center space-y-2">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Where does your mind wander?</h3>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</div>
<input className="w-full bg-white border border-stone-200 text-stone-800 placeholder:text-stone-400 text-sm font-light rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-1 focus:ring-stone-300 focus:border-stone-300 transition-all" id="search-input" placeholder="Walk me somewhere peaceful..." type="text"/>
</div>
<div className="flex flex-wrap justify-center gap-2 opacity-0 transition-opacity duration-1000 delay-300" id="search-suggestions">
<span className="px-3 py-1.5 rounded-full bg-white border border-stone-100 text-xs text-stone-500 shadow-sm cursor-pointer hover:bg-stone-50">Botanical Garden</span>
<span className="px-3 py-1.5 rounded-full bg-white border border-stone-100 text-xs text-stone-500 shadow-sm cursor-pointer hover:bg-stone-50">Old Port</span>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 bg-stone-50 opacity-0 pointer-events-none transition-opacity duration-1000" id="screen-map">

<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

<div className="absolute top-1/4 left-[-10%] w-64 h-64 bg-emerald-50 rounded-full blur-2xl opacity-60 mix-blend-multiply"></div>
<div className="absolute bottom-1/3 right-[-10%] w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))'}}>
<defs>
<lineargradient id="scenicGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#34d399"></stop>
<stop offset="100%" stop-color="#059669"></stop>
</lineargradient>
</defs>

<path d="M40 850 L40 600 Q40 500 80 400 L150 200" fill="none" stroke="#e7e5e4" strokeLinecap="round" strokeWidth="6"></path>
<path d="M300 850 L300 500 L200 300" fill="none" stroke="#e7e5e4" strokeLinecap="round" strokeWidth="6"></path>
<path d="M0 650 L390 650" fill="none" stroke="#e7e5e4" strokeLinecap="round" strokeWidth="6"></path>

<path className="path-draw" d="M195 720 C 195 720, 160 650, 140 600 C 120 550, 80 520, 90 450 C 100 380, 200 350, 220 280 C 240 210, 200 150, 195 120" fill="none" id="main-route" stroke="url(#scenicGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>

<circle cx="195" cy="720" fill="white" r="8" stroke="#57534e" strokeWidth="3"></circle>

<circle className="pulse-soft" cx="195" cy="120" fill="#059669" r="8"></circle>
</svg>

<div className="absolute top-16 left-6 right-6 flex justify-between items-start">
<button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center text-stone-600 border border-white/50" onclick="resetFlow()">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
</div>

<div className="absolute bottom-8 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-5 shadow-xl shadow-stone-200/50 transform translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/50">Scenic Route</span>
<span className="text-xs text-stone-400 font-medium">1.2 mi</span>
</div>
<h2 className="text-lg font-medium text-stone-900 tracking-tight">Kensington Gardens</h2>
<p className="text-xs text-stone-500 font-light mt-0.5">Via Serpentine Walk &amp; Flower Walk</p>
</div>
<div className="flex flex-col items-end">
<span className="text-lg font-medium text-stone-900">18 <span className="text-xs font-normal text-stone-500">min</span></span>
<span className="iconify text-emerald-500 mt-1" data-icon="lucide:leaf" data-width="14"></span>
</div>
</div>
<div className="flex gap-3 mt-4 pt-4 border-t border-stone-100">
<button className="flex-1 h-11 bg-stone-900 text-white rounded-2xl font-medium text-sm shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2">
                        Start
                    </button>
<button className="w-11 h-11 bg-stone-100 text-stone-600 rounded-2xl flex items-center justify-center hover:bg-stone-200 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
