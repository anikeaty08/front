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



        // Iconify Lucide Initialization
        lucide.createIcons();

        // Builder Logic
        let selectedOptions = [];

        function toggleOption(element, name) {
            const index = selectedOptions.indexOf(name);
            const checkbox = element.querySelector('.checkbox');
            const checkIcon = element.querySelector('.checkbox i');

            if (index > -1) {
                // Deselect
                selectedOptions.splice(index, 1);
                element.classList.remove('glass-active');
                checkbox.classList.remove('bg-emerald-500', 'border-emerald-500');
                checkbox.classList.add('border-white/20');
                checkIcon.classList.add('opacity-0');
            } else {
                // Select
                if (selectedOptions.length < 2) {
                    selectedOptions.push(name);
                    element.classList.add('glass-active');
                    checkbox.classList.remove('border-white/20');
                    checkbox.classList.add('bg-emerald-500', 'border-emerald-500');
                    checkIcon.classList.remove('opacity-0');
                } else {
                    // Animation for limit reached
                    element.classList.add('animate-pulse');
                    setTimeout(() => element.classList.remove('animate-pulse'), 500);
                }
            }

            updateUI();
        }

        function updateUI() {
            // Update Counter
            const counter = document.getElementById('counter');
            counter.innerText = `${selectedOptions.length} / 2`;
            
            // Update Text
            const textDisplay = document.getElementById('selection-text');
            if(selectedOptions.length === 0) textDisplay.innerText = "Выберите 2 опции...";
            else if(selectedOptions.length === 1) textDisplay.innerText = "Ещё одну...";
            else textDisplay.innerHTML = "<span class='text-emerald-400'>Идеально! Ваш MIX собран.</span>";
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter">M</div>
<span className="text-white font-semibold tracking-tight text-lg">MEGA</span>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors" href="#download">
<span>Скачать Mega24</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex uppercase text-xs font-medium text-emerald-400 tracking-wide bg-emerald-500/10 border-emerald-500/30 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Новый конструктор
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                MIX: Твой тариф — <br/>
<span className="text-gradient">твой выбор</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Возьми мощную базу и <span className="text-white font-medium">бесплатно добавь 2 опции</span> на свой вкус. Будь гибким, плати только за то, что нужно тебе.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]" onclick="document.getElementById('builder').scrollIntoView()">
<svg className="lucide lucide-sliders-horizontal w-5 h-5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                    Собрать свой тариф
                </button>
<button className="w-full sm:w-auto px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                    Условия тарифа
                </button>
</div>
</div>

<div className="mt-20 relative h-64 md:h-80 w-full max-w-5xl mx-auto perspective-1000 group">
<div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 opacity-80 group-hover:gap-6 transition-all duration-700 ease-out">

<div className="w-24 h-24 md:w-32 md:h-32 glass rounded-2xl flex flex-col items-center justify-center text-emerald-400 -rotate-12 translate-y-4 shadow-2xl">
<svg className="lucide lucide-music w-8 h-8 md:w-10 md:h-10 mb-2" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-xs">Music</span>
</div>
<div className="w-28 h-28 md:w-40 md:h-40 bg-[#0A0A0B] border border-emerald-500/50 rounded-3xl flex flex-col items-center justify-center text-white z-10 shadow-[0_0_50px_-10px_rgba(16,185,129,0.2)]">
<span className="text-4xl md:text-5xl font-bold tracking-tighter">MIX</span>
</div>
<div className="w-24 h-24 md:w-32 md:h-32 glass rounded-2xl flex flex-col items-center justify-center text-purple-400 rotate-12 translate-y-4 shadow-2xl">
<svg className="lucide lucide-film w-8 h-8 md:w-10 md:h-10 mb-2" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<span className="text-xs">Cinema</span>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-white/5 bg-white/[0.02]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Идеальная база</h2>
<p className="text-slate-400">Всё необходимое уже включено в стартовый пакет.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-wifi w-6 h-6" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">50 ГБ</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Интернета</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/10 opacity-50"></div>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform z-10">
<svg className="lucide lucide-share-2 w-6 h-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div className="text-sm font-semibold text-emerald-400 uppercase tracking-wide z-10 pt-2">Бесплатная раздача</div>
<div className="text-xs text-slate-500 font-medium z-10">Wi-Fi</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-infinity w-6 h-6" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<div className="text-xl font-semibold text-white tracking-tight">Безлимит</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Внутри сети</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-phone-call w-6 h-6" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">30 мин</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Вне сети</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/5 transition-colors group col-span-2 md:col-span-1">
<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-tv w-6 h-6" data-lucide="tv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2-5 5-5-5"></path><rect height="15" rx="2" width="20" x="2" y="7"></rect></svg>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">50+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">ТВ Каналов</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="builder">
<div className="absolute inset-0 bg-emerald-900/5 radial-gradient opacity-50"></div>
<div className="max-w-5xl mx-auto relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-2">Собери свой MIX</h2>
<p className="text-lg text-slate-400">Выбери любые <span className="text-emerald-400 font-medium">2 опции бесплатно</span>. Остальные можно докупить.</p>
</div>
<div className="bg-white/5 rounded-full px-5 py-2 border border-white/10 flex items-center gap-3">
<span className="text-sm text-slate-400">Выбрано:</span>
<span className="text-emerald-400 font-semibold text-lg" id="counter">0 / 2</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'WhatsApp')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">WhatsApp</div>
<div className="text-xs text-slate-500">Безлимит</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Instagram')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-camera w-5 h-5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="font-medium text-white text-sm mb-1">Instagram</div>
<div className="text-xs text-slate-500">Безлимит</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'YouTube')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="font-medium text-white text-sm mb-1">YouTube</div>
<div className="text-xs text-slate-500">+10 ГБ</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'TikTok')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-slate-700/50 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-music-2 w-5 h-5" data-lucide="music-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">TikTok</div>
<div className="text-xs text-slate-500">Безлимит</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Yandex')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="font-medium text-white text-sm mb-1">Яндекс</div>
<div className="text-xs text-slate-500">Подписка Плюс</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Gaming')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-gamepad-2 w-5 h-5" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">PUBG/Dota</div>
<div className="text-xs text-slate-500">Безлимит</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Telegram')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">Telegram</div>
<div className="text-xs text-slate-500">Безлимит</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Data')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">+30 ГБ</div>
<div className="text-xs text-slate-500">В любое время</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Megogo')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clapperboard w-5 h-5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">Megogo</div>
<div className="text-xs text-slate-500">Кино и ТВ</div>
</button>

<button className="option-card group glass p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden" onclick="toggleOption(this, 'Night')">
<div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center checkbox transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-10 h-10 rounded-xl bg-slate-500/20 text-slate-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<div className="font-medium text-white text-sm mb-1">Ночь</div>
<div className="text-xs text-slate-500">Безлимит 4G</div>
</button>
</div>

<div className="sticky bottom-6 z-30">
<div className="glass bg-[#0A0A0B]/90 backdrop-blur-xl rounded-2xl p-6 border-t border-emerald-500/20 shadow-2xl shadow-emerald-900/20">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<div className="text-sm text-slate-400 mb-1">Итого за 28 дней:</div>
<div className="flex items-baseline gap-2 justify-center md:justify-start">
<span className="text-4xl font-bold text-white tracking-tight">540 c</span>
<span className="text-sm text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded-md">всего 19 с/день</span>
</div>
</div>
<div className="flex-1 w-full md:w-auto px-4 hidden md:block">
<div className="text-sm text-slate-500 text-center" id="selection-text">
                                Выберите 2 опции для максимальной выгоды
                            </div>
</div>
<button className="w-full md:w-auto bg-white text-black hover:bg-slate-200 font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Подключить за 540 с
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-transparent to-[#050506]">
<div className="max-w-4xl mx-auto text-center px-6">
<div className="w-16 h-16 bg-emerald-500 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold mb-8 shadow-lg shadow-emerald-500/20">M</div>
<h3 className="text-2xl font-semibold text-white mb-6">Управляй тарифом в Mega24</h3>
<p className="text-slate-400 mb-8 max-w-md mx-auto">Более 100 000 абонентов уже собрали свой MIX. Скачай приложение, чтобы настроить тариф за пару кликов.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors w-48 justify-center">
<svg className="lucide lucide-apple w-6 h-6" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="text-left">
<div className="text-[10px] text-slate-400 uppercase leading-none">Download on</div>
<div className="text-sm font-semibold text-white leading-none mt-1">App Store</div>
</div>
</button>
<button className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors w-48 justify-center">
<svg className="lucide lucide-play w-6 h-6 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="text-left">
<div className="text-[10px] text-slate-400 uppercase leading-none">Get it on</div>
<div className="text-sm font-semibold text-white leading-none mt-1">Google Play</div>
</div>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-500 text-sm">© 2024 MEGA. Все права защищены.</div>
<div className="flex gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Помощь</a>
<a className="hover:text-white transition-colors" href="#">Карта покрытия</a>
<a className="hover:text-white transition-colors" href="#">Контакты</a>
</div>
</div>
</footer>


    </>
  );
}
