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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();

        function switchView(viewName) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.remove('active');
                view.style.display = 'none';
            });

            // Show selected view
            const selectedView = document.getElementById(`view-${viewName}`);
            if (selectedView) {
                // Reset display property based on view type
                if (viewName === 'dashboard') {
                    selectedView.style.display = 'grid'; // Maintain grid layout for dashboard
                } else {
                    selectedView.style.display = 'flex'; // Flex for others
                }
                
                // Trigger reflow for animation
                void selectedView.offsetWidth;
                
                selectedView.classList.add('active');
                
                // Re-trigger animations for child elements
                const animatedElements = selectedView.querySelectorAll('.pop-in');
                animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; /* trigger reflow */
                    el.style.animation = null; 
                });
            }

            // Update Nav Buttons
            const buttons = document.querySelectorAll('nav button');
            buttons.forEach(btn => {
                btn.classList.remove('ring-sky-300', 'bg-sky-50');
                if(btn.id === `nav-${viewName}`) {
                    btn.classList.add('ring-sky-300');
                    // Keep original colors but add ring
                } else {
                    btn.classList.remove('ring-sky-300');
                }
            });
        }
    
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
      

<nav className="fixed left-4 bottom-4 md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-50 flex flex-row md:flex-col gap-3 md:gap-5 p-2 md:p-3 rounded-full glass-panel border-white/60 pop-in delay-100 items-center justify-center w-[calc(100%-2rem)] md:w-auto">
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shadow-sm group relative btn-squish ring-2 ring-transparent ring-offset-2 transition-all active-nav" id="nav-dashboard" onclick="switchView('dashboard')" title="Dashboard">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" data-lucide="layout-grid"></svg>
<span className="hidden md:block absolute left-14 bg-slate-800 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 tooltip-pop pointer-events-none shadow-lg tracking-wide">HOME</span>
</button>
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-sm group relative btn-squish ring-2 ring-transparent ring-offset-2 transition-all" id="nav-achievements" onclick="switchView('achievements')" title="Prêmios">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" data-lucide="medal"></svg>
<span className="hidden md:block absolute left-14 bg-slate-800 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 tooltip-pop pointer-events-none shadow-lg tracking-wide">PRÊMIOS</span>
</button>
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shadow-sm group relative btn-squish ring-2 ring-transparent ring-offset-2 transition-all" id="nav-settings" onclick="switchView('settings')" title="Ajustes">
<svg className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" data-lucide="settings-2"></svg>
<span className="hidden md:block absolute left-14 bg-slate-800 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 tooltip-pop pointer-events-none shadow-lg tracking-wide">AJUSTES</span>
</button>
</nav>


<main className="w-full max-w-[1200px] h-auto md:h-full md:max-h-[850px] relative md:ml-20 rounded-[2rem] md:rounded-[3rem] bg-white/40 border border-white/60 shadow-2xl p-4 md:p-6 lg:p-8 overflow-hidden backdrop-blur-sm transition-all duration-500">

<div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-300 pointer-events-none"></div>

<div className="view-section active grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-auto lg:grid-rows-3 gap-4 md:gap-5 lg:gap-6 h-full pb-16 md:pb-0 overflow-y-auto md:overflow-hidden pr-1 md:pr-0" id="view-dashboard">

<section className="glass-panel md:col-span-2 md:row-span-2 lg:row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-[2rem] relative group cursor-pointer pop-in delay-100 min-h-[300px]">
<div className="perspective-container w-full h-full flex items-center justify-center scale-75 md:scale-90 lg:scale-100">
<div className="relative w-full h-full rotate-3d flex items-center justify-center">
<div className="breathe relative z-20 w-64 h-40 bg-gradient-to-b from-slate-50 to-slate-200 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-4 border-white flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
<div className="w-40 h-24 bg-sky-50 rounded-2xl border-2 border-white/50 shadow-inner flex items-center justify-center overflow-hidden relative">
<i className="w-12 h-12 text-sky-300/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-lucide="steering-wheel"></i>
<div className="absolute -inset-full rotate-45 bg-gradient-to-r from-transparent via-white/60 to-transparent w-[200%] h-[200%] animate-[spin_4s_linear_infinite] opacity-50"></div>
</div>
<div className="absolute -bottom-4 left-8 w-10 h-10 bg-slate-800 rounded-full border-4 border-slate-300 shadow-lg"></div>
<div className="absolute -bottom-4 right-8 w-10 h-10 bg-slate-800 rounded-full border-4 border-slate-300 shadow-lg"></div>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/10 blur-xl rounded-[100%] transition-all duration-500 group-hover:w-40 group-hover:blur-md"></div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center">
<span className="px-4 py-2 bg-white/60 rounded-full text-xs font-bold text-slate-500 tracking-widest uppercase backdrop-blur-sm shadow-sm border border-white">Eco Mode: ON</span>
</div>
</section>

<section className="glass-panel rounded-[2rem] p-5 md:p-6 md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-2 flex flex-col justify-between relative overflow-hidden pop-in delay-200 min-h-[220px]">
<div className="flex items-center justify-between mb-2">
<div className="p-2 bg-indigo-50 rounded-full text-indigo-500">
<svg className="w-4 h-4" data-lucide="music"></svg>
</div>
<div className="flex gap-1 h-4 items-end">
<div className="w-1 bg-indigo-400 rounded-full animate-[bounce_1s_infinite] h-2"></div>
<div className="w-1 bg-indigo-400 rounded-full animate-[bounce_1.2s_infinite] h-4"></div>
<div className="w-1 bg-indigo-400 rounded-full animate-[bounce_0.8s_infinite] h-3"></div>
</div>
</div>
<div className="flex flex-row md:flex-col items-center flex-1 justify-center gap-4 md:gap-5 z-10 my-2 group">
<div className="w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-slate-200 shadow-xl relative overflow-hidden transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 border-4 border-white flex-shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-white/90 font-bold text-xs md:text-lg tracking-widest mix-blend-overlay">M83</div>
</div>
<div className="flex flex-col text-left md:text-center justify-center">
<span className="text-sm md:text-base font-bold text-slate-700 leading-tight line-clamp-1">Midnight City</span>
<span className="text-xs font-medium text-slate-400 mt-1">Hurry Up, We're Dreaming</span>
</div>
</div>
<div className="flex items-center justify-around px-1 mt-2 md:mt-0">
<button className="text-slate-400 hover:text-indigo-500 transition-colors btn-squish p-2"><svg className="w-5 h-5 fill-current" data-lucide="skip-back"></svg></button>
<button className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-200 btn-squish hover:bg-indigo-600 active:translate-y-1 transition-all">
<svg className="w-5 h-5 fill-current ml-1" data-lucide="play"></svg>
</button>
<button className="text-slate-400 hover:text-indigo-500 transition-colors btn-squish p-2"><svg className="w-5 h-5 fill-current" data-lucide="skip-forward"></svg></button>
</div>
</section>

<section className="glass-panel rounded-[2rem] p-5 md:p-6 md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-2 relative flex flex-col pop-in delay-300 min-h-[300px]">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Ranking</h3>
<div className="bg-yellow-100 p-1.5 rounded-lg text-yellow-600">
<svg className="w-4 h-4" data-lucide="trophy"></svg>
</div>
</div>
<div className="flex flex-col gap-3 overflow-y-auto no-scrollbar pr-1 flex-1">

<details className="group bg-white/60 rounded-2xl border border-white shadow-sm cursor-pointer overflow-hidden open:bg-white/90 transition-colors duration-300">
<summary className="flex items-center gap-3 p-2.5 md:p-3 select-none">
<div className="relative transition-transform group-hover:scale-105 duration-300">
<img className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-50 object-cover border-2 border-yellow-300" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full font-black text-yellow-900 border-2 border-white shadow-sm">1</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h4 className="text-xs md:text-sm font-bold text-slate-700">Jade S.</h4>
<span className="text-xs font-bold text-slate-600 bg-yellow-100 px-1.5 py-0.5 rounded text-[10px]">12k</span>
</div>
</div>
</summary>
<div className="p-3 pt-0 border-t border-slate-100 bg-slate-50/50">
<div className="grid grid-cols-3 gap-2 mt-2">
<div className="text-center"><span className="block text-[9px] text-slate-400">Tempo</span><span className="text-xs font-bold text-slate-700">12h</span></div>
<div className="text-center"><span className="block text-[9px] text-slate-400">Km</span><span className="text-xs font-bold text-slate-700">450</span></div>
<div className="text-center"><span className="block text-[9px] text-slate-400">Score</span><span className="text-xs font-bold text-slate-700">98</span></div>
</div>
</div>
</details>

<details className="group bg-white/40 rounded-2xl border border-white/50 cursor-pointer overflow-hidden open:bg-white/90 transition-colors duration-300">
<summary className="flex items-center gap-3 p-2.5 md:p-3 select-none">
<div className="relative">
<img className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 object-cover border-2 border-slate-300" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
<div className="absolute -top-1 -right-1 bg-slate-300 text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full font-black text-slate-700 border-2 border-white shadow-sm">2</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h4 className="text-xs md:text-sm font-bold text-slate-700">Marc D.</h4>
<span className="text-xs font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">10k</span>
</div>
</div>
</summary>
</details>

<details className="group bg-white/40 rounded-2xl border border-white/50 cursor-pointer overflow-hidden open:bg-white/90 transition-colors duration-300">
<summary className="flex items-center gap-3 p-2.5 md:p-3 select-none">
<div className="relative">
<img className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 object-cover border-2 border-orange-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
<div className="absolute -top-1 -right-1 bg-orange-300 text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full font-black text-orange-900 border-2 border-white shadow-sm">3</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<h4 className="text-xs md:text-sm font-bold text-slate-700">Ana P.</h4>
<span className="text-xs font-bold text-slate-600 bg-orange-100 px-1.5 py-0.5 rounded text-[10px]">9.2k</span>
</div>
</div>
</summary>
</details>
</div>
</section>

<section className="glass-panel rounded-[2rem] p-4 md:p-5 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col relative overflow-hidden pop-in delay-300 min-h-[160px]">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500 text-white shadow-md">
<svg className="w-4 h-4" data-lucide="message-square-quote"></svg>
</div>
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Feed de Mensagens</h3>
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest block md:hidden">Feed</h3>
</div>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 items-center h-full mask-linear-gradient">
<div className="flex-shrink-0 w-64 bg-white/50 border border-white rounded-2xl p-3 flex gap-3 shadow-sm transition-transform hover:scale-105 cursor-default">
<img className="w-8 h-8 rounded-full bg-sky-100 border border-white shadow-sm flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"/>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-slate-700">Roberto K.</span>
<span className="text-[9px] text-slate-400">10m</span>
</div>
<p className="text-[11px] leading-tight text-slate-600 truncate">Alguém viu o trânsito?</p>
</div>
</div>
<div className="flex-shrink-0 w-56 bg-white/50 border border-white rounded-2xl p-3 flex gap-3 shadow-sm transition-transform hover:scale-105 cursor-default">
<img className="w-8 h-8 rounded-full bg-pink-100 border border-white shadow-sm flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"/>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-slate-700">Sara M.</span>
<span className="text-[9px] text-slate-400">22m</span>
</div>
<p className="text-[11px] leading-tight text-slate-600">Meta batida! 🚀</p>
</div>
</div>
</div>
</section>

<section className="glass-panel rounded-[2rem] p-4 md:p-6 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col justify-center overflow-hidden pop-in delay-400 min-h-[160px]">
<div className="flex justify-between items-end mb-4">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Recentes</h3>
<button className="text-[10px] text-sky-600 font-bold hover:bg-sky-50 px-2 py-1 rounded-lg transition-colors">VER TUDO</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="list-item-hover flex items-center gap-3 md:gap-4 p-2.5 md:p-3 bg-white/40 rounded-2xl border border-white cursor-pointer group">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border-2 border-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
<svg className="w-5 h-5 md:w-6 md:h-6" data-lucide="map-pin"></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-slate-700">Centro</span>
<span className="text-[10px] text-slate-400 font-medium">Hoje, 08:30</span>
</div>
<span className="ml-auto text-xs font-black text-emerald-600 bg-emerald-100/50 px-2 py-1 rounded-lg">+120</span>
</div>
<div className="list-item-hover flex items-center gap-3 md:gap-4 p-2.5 md:p-3 bg-white/40 rounded-2xl border border-white cursor-pointer group hidden md:flex">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border-2 border-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
<svg className="w-5 h-5 md:w-6 md:h-6" data-lucide="briefcase"></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-slate-700">Trabalho</span>
<span className="text-[10px] text-slate-400 font-medium">Ontem</span>
</div>
<span className="ml-auto text-xs font-black text-emerald-600 bg-emerald-100/50 px-2 py-1 rounded-lg">+80</span>
</div>
</div>
</section>
</div>

<div className="view-section flex-col h-full overflow-hidden relative" id="view-achievements">

<header className="flex items-center justify-between mb-6 pop-in">
<div className="flex items-center gap-3">
<div className="p-3 bg-amber-100 rounded-[1.2rem] text-amber-600 shadow-sm rotate-3">
<svg className="w-6 h-6 stroke-[2.5]" data-lucide="crown"></svg>
</div>
<div>
<h1 className="text-2xl font-black text-slate-700 tracking-tight">Galeria de Prêmios</h1>
<p className="text-xs font-medium text-slate-400">Colecione todos os selos!</p>
</div>
</div>
<div className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-sm flex items-center gap-2">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nível 12</span>
<div className="w-24 h-3 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full relative">
<div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto pb-20 no-scrollbar p-2">

<div className="nintendo-card bg-white rounded-[2rem] p-4 flex flex-col items-center justify-center gap-3 border-[3px] border-sky-100 shadow-lg relative group cursor-pointer pop-in delay-100 h-44">
<div className="absolute inset-0 bg-sky-50 rounded-[1.8rem] transform scale-[0.9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 relative z-10 group-hover:rotate-12 transition-transform duration-300">
<svg className="w-10 h-10 stroke-[2.5]" data-lucide="wind"></svg>
<div className="absolute -bottom-1 -right-1 bg-yellow-400 border-2 border-white w-6 h-6 rounded-full flex items-center justify-center">
<svg className="w-3 h-3 text-white fill-current" data-lucide="star"></svg>
</div>
</div>
<div className="text-center z-10">
<h3 className="font-bold text-slate-700 text-sm">Velocista</h3>
<p className="text-[10px] text-slate-400 font-medium">Média acima de 25km/h</p>
</div>
</div>

<div className="nintendo-card bg-white rounded-[2rem] p-4 flex flex-col items-center justify-center gap-3 border-[3px] border-emerald-100 shadow-lg relative group cursor-pointer pop-in delay-200 h-44">
<div className="absolute inset-0 bg-emerald-50 rounded-[1.8rem] transform scale-[0.9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 relative z-10 group-hover:-rotate-12 transition-transform duration-300">
<svg className="w-10 h-10 stroke-[2.5]" data-lucide="leaf"></svg>
</div>
<div className="text-center z-10">
<h3 className="font-bold text-slate-700 text-sm">Eco Hero</h3>
<p className="text-[10px] text-slate-400 font-medium">100km sem emissão</p>
</div>
</div>

<div className="nintendo-card bg-white rounded-[2rem] p-4 flex flex-col items-center justify-center gap-3 border-[3px] border-purple-100 shadow-lg relative group cursor-pointer pop-in delay-300 h-44">
<div className="absolute inset-0 bg-purple-50 rounded-[1.8rem] transform scale-[0.9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 relative z-10 group-hover:scale-110 transition-transform duration-300">
<svg className="w-10 h-10 stroke-[2.5]" data-lucide="zap"></svg>
</div>
<div className="text-center z-10">
<h3 className="font-bold text-slate-700 text-sm">Energia Max</h3>
<p className="text-[10px] text-slate-400 font-medium">Carga regenerada</p>
</div>
</div>

<div className="bg-slate-100 rounded-[2rem] p-4 flex flex-col items-center justify-center gap-3 border-[3px] border-dashed border-slate-200 relative opacity-60 grayscale pop-in delay-400 h-44">
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
<svg className="w-8 h-8" data-lucide="lock"></svg>
</div>
<div className="text-center">
<h3 className="font-bold text-slate-500 text-sm">Maratonista</h3>
<p className="text-[10px] text-slate-400 font-medium">Bloqueado</p>
</div>
</div>

<div className="bg-slate-100 rounded-[2rem] p-4 flex flex-col items-center justify-center gap-3 border-[3px] border-dashed border-slate-200 relative opacity-60 grayscale pop-in delay-400 h-44">
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
<svg className="w-8 h-8" data-lucide="lock"></svg>
</div>
<div className="text-center">
<h3 className="font-bold text-slate-500 text-sm">Noite</h3>
<p className="text-[10px] text-slate-400 font-medium">Bloqueado</p>
</div>
</div>
</div>
</div>

<div className="view-section flex-col h-full overflow-hidden relative" id="view-settings">

<header className="flex items-center justify-between mb-6 pop-in">
<div className="flex items-center gap-3">
<div className="p-3 bg-slate-200 rounded-[1.2rem] text-slate-600 shadow-sm -rotate-2">
<svg className="w-6 h-6 stroke-[2.5]" data-lucide="sliders-horizontal"></svg>
</div>
<div>
<h1 className="text-2xl font-black text-slate-700 tracking-tight">Configurações</h1>
<p className="text-xs font-medium text-slate-400">Personalize sua experiência</p>
</div>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pb-20 no-scrollbar pr-2">

<div className="md:col-span-2 bg-white/70 rounded-[2.5rem] p-6 border-2 border-white shadow-sm flex flex-col md:flex-row items-center gap-6 pop-in delay-100">
<div className="relative group cursor-pointer">
<img className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="absolute bottom-0 right-0 bg-sky-500 text-white p-2 rounded-full border-4 border-white shadow-md group-hover:rotate-12 transition-transform">
<svg className="w-4 h-4" data-lucide="pencil"></svg>
</div>
</div>
<div className="flex-1 text-center md:text-left space-y-2">
<h2 className="text-xl font-black text-slate-700">Olá, Motorista!</h2>
<div className="flex flex-wrap gap-2 justify-center md:justify-start">
<span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold">Pro Member</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">ID: #8392</span>
</div>
</div>
</div>

<div className="bg-white/70 rounded-[2.5rem] p-6 border-2 border-white shadow-sm flex flex-col justify-center gap-6 pop-in delay-200">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Sistema</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-indigo-100 text-indigo-500 rounded-xl"><svg className="w-5 h-5" data-lucide="bell"></svg></div>
<span className="font-bold text-slate-700">Notificações</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-100 text-emerald-500 rounded-xl"><svg className="w-5 h-5" data-lucide="leaf"></svg></div>
<span className="font-bold text-slate-700">Modo Eco</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-rose-100 text-rose-500 rounded-xl"><svg className="w-5 h-5" data-lucide="map"></svg></div>
<span className="font-bold text-slate-700">GPS Voz</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle3" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle3"></label>
</div>
</div>
</div>

<div className="bg-white/70 rounded-[2.5rem] p-6 border-2 border-white shadow-sm flex flex-col justify-center gap-6 pop-in delay-300">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Preferências</h3>
<div className="space-y-3">
<div className="flex justify-between text-xs font-bold text-slate-600">
<span>Volume</span>
<span>80%</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="80"/>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs font-bold text-slate-600">
<span>Brilho do Painel</span>
<span>Auto</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="60"/>
</div>
<button className="mt-2 w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-red-50 hover:text-red-500 transition-colors border-2 border-transparent hover:border-red-100">
                        Sair da Conta
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
