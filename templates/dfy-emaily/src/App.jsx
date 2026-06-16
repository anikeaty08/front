import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Init Lucide Icons globally with requested stroke width
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Carousel Data
      const figmaCards = [
          { id: 1, title: '(DT) Detailrs', time: 'Edited 4 hours ago', tag: 'DETAILRS', bg: 'bg-white', textStyle: 'text-emerald-500 font-medium', logoColor: '#10B981', decos: '<div class="absolute right-0 bottom-0 w-32 h-32 border-l border-t border-emerald-100 rounded-tl-full"></div><div class="absolute right-4 bottom-4 w-24 h-24 border-l border-t border-emerald-200 rounded-tl-full"></div>' },
          { id: 2, title: '(BJ) Bukser Jeans', time: 'Edited 5 hours ago', tag: 'BUKSER', bg: 'bg-[#1a2e45]', textStyle: 'text-white tracking-widest font-bold', logoColor: '#3B82F6', decos: '' },
          { id: 3, title: '(GW) Goodweigh', time: 'Edited 4 hours ago', tag: 'Goodweigh', bg: 'bg-[#f8f9f8]', textStyle: 'text-stone-800 font-serif', logoColor: '#F59E0B', decos: '<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-stone-200 rounded-full"></div><div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-stone-300 rounded-full"></div>' }
      ];

      const container = document.getElementById('carousel-container');

      // Inject Cards
      figmaCards.forEach((card, index) => {
          const cardEl = document.createElement('div');
          cardEl.className = 'carousel-item absolute w-[280px] h-[210px] rounded-lg overflow-hidden border border-stone-700 bg-[#222] flex flex-col shadow-2xl transition-all duration-700 ease-out cursor-pointer';
          cardEl.innerHTML = `
              <div class="h-[140px] w-full ${card.bg} relative overflow-hidden flex items-center justify-center p-6">
                  ${card.decos}
                  <span class="text-2xl z-10 ${card.textStyle}">${card.tag}</span>
                  <div class="absolute top-3 right-3 bg-white/90 p-1 rounded-sm shadow-sm z-20">
                      <svg width="10" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 28.5A9.5 9.5 0 1 1 19 9.5A9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
                          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19V57H9.5A9.5 9.5 0 0 1 0 47.5Z" fill="#0ACF83"/>
                          <path d="M19 0L9.5 0A9.5 9.5 0 0 0 0 9.5A9.5 9.5 0 0 0 9.5 19H19V0Z" fill="#F24E1E"/>
                          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF"/>
                          <path d="M38 9.5A9.5 9.5 0 0 0 28.5 0H19V19H28.5A9.5 9.5 0 0 0 38 9.5Z" fill="#F24E1E"/>
                      </svg>
                  </div>
                  <div class="absolute bottom-3 left-3 bg-stone-900 text-[9px] font-mono text-white px-1.5 py-0.5 rounded-sm z-20 uppercase tracking-widest">Figma</div>
              </div>
              <div class="flex-1 px-4 py-3 flex items-center gap-3 bg-[#1e1e1e]">
                  <div class="w-7 h-7 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <i data-lucide="figma" class="w-3.5 h-3.5"></i>
                  </div>
                  <div class="flex flex-col truncate">
                      <h4 class="text-sm font-normal text-stone-200 truncate tracking-tight">${card.title}</h4>
                      <p class="text-xs text-stone-500 truncate mt-0.5">${card.time}</p>
                  </div>
              </div>
          `;
          container.appendChild(cardEl);
      });

      const items = document.querySelectorAll('.carousel-item');
      let currentIndex = 0;

      function updateCarousel() {
          items.forEach((item, index) => {
              if (index === currentIndex) {
                  // Center Active
                  item.className = 'carousel-item absolute w-[280px] h-[210px] rounded-lg overflow-hidden border border-stone-600 bg-[#222] flex flex-col shadow-2xl transition-all duration-700 ease-out z-30 transform translate-x-0 scale-100 opacity-100';
              } else if (index === (currentIndex - 1 + items.length) % items.length) {
                  // Left
                  item.className = 'carousel-item absolute w-[280px] h-[210px] rounded-lg overflow-hidden border border-stone-700 bg-[#222] flex flex-col shadow-xl transition-all duration-700 ease-out z-20 transform -translate-x-[110px] scale-[0.85] opacity-60';
              } else if (index === (currentIndex + 1) % items.length) {
                  // Right
                  item.className = 'carousel-item absolute w-[280px] h-[210px] rounded-lg overflow-hidden border border-stone-700 bg-[#222] flex flex-col shadow-xl transition-all duration-700 ease-out z-20 transform translate-x-[110px] scale-[0.85] opacity-60';
              }
          });
          // Re-init lucide for injected icons
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      window.nextCard = () => {
          currentIndex = (currentIndex + 1) % items.length;
          updateCarousel();
      };

      window.prevCard = () => {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          updateCarousel();
      };

      // Initial setup
      updateCarousel();

      // Auto rotation
      setInterval(window.nextCard, 3500);

      // Infinite Creation Toast Logic
      const toast = document.getElementById('new-file-toast');
      const toastBrand = document.getElementById('toast-brand-name');
      const newBrands = ['ACHATÉ', 'Maen Donati', 'VIRA', 'NOBU', 'Fellos', 'TMD LOCKS'];

      setInterval(() => {
          const randomBrand = newBrands[Math.floor(Math.random() * newBrands.length)];
          toastBrand.textContent = randomBrand;

          toast.classList.remove('opacity-0', 'translate-y-4');
          toast.classList.add('opacity-100', 'translate-y-0');

          setTimeout(() => {
              toast.classList.remove('opacity-100', 'translate-y-0');
              toast.classList.add('opacity-0', 'translate-y-4');
          }, 3000);
      }, 7000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 blur-[100px] overflow-hidden">
<div className="absolute w-full h-full left-0 top-0" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div>

</div>
<div className="fixed -inset-[100px] pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-40">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:100%_40px] animate-[slide-y_15s_linear_infinite]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px)] bg-[size:40px_100%] animate-[slide-x_15s_linear_infinite]"></div>
</div>
<header className="flex md:px-12 bg-[#FDFDFD]/90 w-full h-20 z-50 border-stone-200 border-b mr-auto ml-auto pr-6 pl-6 sticky top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2 text-stone-900">
<span className="text-xl font-normal tracking-wide uppercase tracking-tight">
          DFY
        </span>
<span className="text-stone-400 font-normal">/</span>
<span className="text-base font-normal text-stone-500 uppercase tracking-widest hidden sm:block">
          Hall of Templates
        </span>
</div>
<nav className="hidden lg:flex items-center gap-8 text-base font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">
          Capabilities
        </a>
<a className="hover:text-stone-900 transition-colors" href="#">
          Case Studies
        </a>
<a className="hover:text-stone-900 transition-colors" href="#">
          The System
        </a>
<a className="hover:text-stone-900 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden md:block text-base font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#">
          Portal Login
        </a>
<a className="bg-stone-900 text-white px-5 py-2.5 rounded-sm text-sm font-normal hover:bg-stone-800 transition-colors tracking-widest uppercase shadow-sm" href="#">
          APPLY NOW →
        </a>
<button className="lg:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="flex-1 flex flex-col w-full z-10 relative items-center">
<section className="md:pt-32 flex flex-col text-center bg-white/50 w-full pt-20 pr-6 pb-24 pl-6 relative backdrop-blur-sm items-center">
<div className="flex flex-col w-full max-w-4xl z-20 mr-auto ml-auto relative items-center">
<div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-mono text-stone-500 tracking-widest uppercase">
              ● [SEC-01] White-Label Email Design
            </span>
</div>
<p className="text-sm font-mono text-stone-400 tracking-widest uppercase mb-6">
            The design team your agency doesn't have to hire
          </p>
<h1 className="text-6xl md:text-8xl lg:text-[100px] font-normal text-stone-900 mb-8 leading-[0.9] tracking-tight font-serif">
            Scale Your Email
            <br/>
            Design Output.
            <br/>
<span className="italic text-stone-500">Without the</span>
<br/>
            Overhead.
          </h1>
<p className="text-lg md:text-xl text-stone-500 mb-12 max-w-2xl leading-relaxed font-normal">
            DFY OS 2.0 plugs a fully-managed team of Klaviyo-native email
            designers directly into your agency's production pipeline. Handle 1
            client or 300 — same system, same quality, fraction of the cost.
          </p>
<div className="flex flex-col items-center w-full max-w-md gap-3 mb-24">
<div className="flex w-full bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden p-1">
<input className="flex-1 px-4 py-3 text-base outline-none text-stone-900 placeholder:text-stone-400 font-sans" placeholder="Corporate email address" type="email"/>
<button className="bg-stone-900 text-white px-6 py-3 rounded-sm text-sm font-normal hover:bg-stone-800 transition-colors tracking-widest uppercase whitespace-nowrap">
                BOOK CALL →
              </button>
</div>
<p className="text-sm font-mono text-stone-400">
              No commitment. 20-minute call. We'll show you the system live.
            </p>
</div>
</div>
<div className="w-full max-w-6xl mx-auto z-20">
<div className="w-full flex items-center justify-between text-sm font-mono text-stone-400 tracking-widest uppercase mb-3 px-2">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-stone-500">
                D
              </span>
              DFY OS 2.0 — LIVE PIPELINE
            </div>
</div>
<div className="w-full bg-white border border-stone-200 shadow-xl rounded-xl overflow-hidden flex flex-col relative">
<div className="h-14 border-b border-stone-200 bg-stone-50 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-4 text-stone-500">
<i className="w-5 h-5 cursor-pointer hover:text-stone-900" data-lucide="menu"></i>
<div className="hidden sm:flex items-center text-base font-normal text-stone-400">
                  Agency Pipeline
                  <span className="mx-2">/</span>
<span className="font-normal text-stone-800 tracking-tight">
                    Q3_Campaigns.fig
                  </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center -space-x-1.5 mr-2">
<div className="w-8 h-8 rounded-full bg-[#DBEAFE] border-2 border-white flex items-center justify-center text-sm font-normal text-[#1D4ED8] z-30 shadow-sm relative group cursor-pointer">
                    C
                  </div>
<div className="w-8 h-8 rounded-full bg-[#D1FAE5] border-2 border-white flex items-center justify-center text-sm font-normal text-[#047857] z-20 shadow-sm relative group cursor-pointer">
                    L
                  </div>
<div className="w-8 h-8 rounded-full bg-[#FEF3C7] border-2 border-white flex items-center justify-center text-sm font-normal text-[#D97706] z-10 shadow-sm relative group cursor-pointer">
                    E
                  </div>
</div>
</div>
</div>
<div className="flex h-[400px] lg:h-[500px] w-full bg-[#F8FAFC]">
<div className="flex-1 relative overflow-hidden flex items-center justify-center p-8 bg-dots-figma cursor-crosshair">
<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '1'}}>
<path className="animate-flow" d="M 200 250 Q 300 250 400 250" fill="none" stroke="#10B981" strokeWidth="2"></path>
<path className="animate-flow" d="M 600 250 Q 700 250 800 250" fill="none" stroke="#10B981" strokeWidth="2"></path>
</svg>
<div className="w-full max-w-4xl flex items-center justify-between relative z-10">
<div className="flex flex-col items-center gap-3 w-32 bg-white/80 backdrop-blur border border-stone-200 p-4 rounded-lg shadow-sm">
<div className="w-12 h-12 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-6 h-6" data-lucide="file-plus"></i>
</div>
<span className="text-sm font-mono font-normal text-stone-600 uppercase">
                      Brief
                    </span>
</div>
<div className="relative w-full max-w-[280px] aspect-[4/5] bg-white shadow-md scale-90 sm:scale-100 border border-stone-200 mx-4">
<div className="absolute -inset-0 border-[1.5px] border-[#3B82F6] z-10 pointer-events-none">
<div className="absolute -top-6 -left-[1.5px] bg-[#3B82F6] text-white text-sm px-2 py-0.5 font-mono rounded-t-sm whitespace-nowrap">
                        DFY OS 2.0 Component
                      </div>
</div>
<div className="w-full h-full p-4 flex flex-col gap-4 relative z-0 bg-stone-50">
<div className="w-full h-24 bg-stone-200 rounded-sm"></div>
<div className="flex flex-col gap-2 px-2 mt-2">
<div className="h-3 w-3/4 bg-stone-300 rounded-sm"></div>
<div className="h-2 w-full bg-stone-200 rounded-sm"></div>
<div className="h-2 w-5/6 bg-stone-200 rounded-sm"></div>
</div>
<div className="w-24 h-8 bg-stone-800 rounded-sm mt-4 mx-auto"></div>
</div>
<div className="absolute z-50 pointer-events-none animate-cursor-cam" style={{top: '20%', left: '60%'}}>
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 3.5L18.5 12L11 13.5L7.5 20.5L5.5 3.5Z" fill="#3B82F6" stroke="white" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="bg-[#3B82F6] text-white text-xs px-1.5 py-0.5 rounded-sm mt-1 ml-3 font-mono inline-flex items-center gap-1 shadow-sm">
<span>🇲🇽</span>
                        CAM
                      </div>
</div>
<div className="absolute z-50 pointer-events-none animate-cursor-mic" style={{top: '50%', left: '90%'}}>
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 3.5L18.5 12L11 13.5L7.5 20.5L5.5 3.5Z" fill="#10B981" stroke="white" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="bg-[#10B981] text-white text-xs px-1.5 py-0.5 rounded-sm mt-1 ml-3 font-mono inline-flex items-center gap-1 shadow-sm">
<span>🇨🇴</span>
                        LUIS
                      </div>
</div>
</div>
<div className="flex flex-col items-center gap-3 w-32 bg-white/80 backdrop-blur border border-stone-200 p-4 rounded-lg shadow-sm">
<div className="w-12 h-12 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<span className="text-sm font-mono font-normal text-stone-600 uppercase">
                      Klaviyo Ready
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-t border-stone-200 bg-[#FDFDFD] relative z-10 overflow-hidden min-h-[80vh] flex items-center pt-20 pb-20">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f5f5f4_1px,transparent_1px)] bg-[size:100%_40px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f4_1px,transparent_1px)] bg-[size:40px_100%]" style={{maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full relative z-10 items-center">

<div className="lg:col-span-5 flex flex-col justify-center relative">
<div className="inline-flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-full px-3 py-1 mb-6 self-start shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="text-sm font-mono text-stone-500 tracking-widest uppercase">
                ● [SEC-02] The Agency Bottleneck
              </span>
</div>
<h2 className="text-5xl md:text-6xl font-normal text-stone-900 leading-[1.05] tracking-tight font-serif mb-6">
              Your email revenue grows.
              <br/>
<span className="italic text-stone-500">
                Your design capacity doesn't.
              </span>
</h2>
<p className="text-lg text-stone-500 max-w-md leading-relaxed mb-10 font-normal">
              You scale to 6-8 brands. Clients want more sends. Your in-house
              designer is maxed out. Every new brand means someone else gets
              slower service.
            </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200 shrink-0">
<iconify-icon className="text-xl text-stone-500" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-normal text-stone-900 tracking-tight mb-1">
                    Maxed out output
                  </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Clients want 15–20 sends a month. Your internal team can
                    comfortably produce 4.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200 shrink-0">
<iconify-icon className="text-xl text-stone-500" icon="solar:user-cross-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-normal text-stone-900 tracking-tight mb-1">
                    The Freelancer Trap
                  </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Endless onboarding, quality control, missed deadlines, and
                    severe style inconsistencies.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200 shrink-0">
<iconify-icon className="text-xl text-stone-500" icon="solar:graph-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-normal text-stone-900 tracking-tight mb-1">
                    Leaving money on the table
                  </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Cannot accept $3k/mo retainers because you physically lack
                    the design constraints to deliver.
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 h-[500px] lg:h-auto min-h-[550px] relative perspective-[1200px] flex items-center justify-center w-full">

<div className="relative z-20 w-72 bg-white border border-stone-200 shadow-xl rounded-xl floating-card-1 transform rotate-[-2deg] p-6 flex flex-col group backdrop-blur-md bg-white/95">

<div className="absolute -top-4 -right-4 z-30 drop-shadow-md animate-bounce duration-[3000ms]">
<div className="bg-amber-500 text-white text-xs font-mono px-2 py-0.5 rounded-sm mb-1 ml-4 tracking-wider shadow-sm">
                  DESIGNER
                </div>
<svg className="fill-amber-500 stroke-white stroke-2" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 3.5L18.5 12L11 13.5L7.5 20.5L5.5 3.5Z"></path>
</svg>
</div>
<div className="flex items-center gap-2 text-stone-900 text-sm mb-4 border-b border-stone-100 pb-3">
<iconify-icon className="text-lg text-amber-500" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-normal tracking-tight">
                  Capacity Overload
                </span>
</div>
<div className="mb-5">
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-500 font-normal text-xs">
                    Pipeline Status
                  </span>
<span className="text-amber-500 font-mono text-xs font-normal">
                    115%
                  </span>
</div>
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-400 w-[60%]"></div>
<div className="h-full bg-amber-400 w-[25%]"></div>
<div className="h-full bg-red-400 w-[15%]"></div>
</div>
</div>
<div className="rounded-lg bg-red-50 p-3 border border-red-100 flex items-start gap-2.5">
<iconify-icon className="text-base text-red-500 mt-0.5 shrink-0" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div>
<p className="text-sm font-normal text-red-600 leading-tight tracking-tight">
                    3 campaigns at risk
                  </p>
<p className="text-xs text-red-500/80 mt-1 leading-tight">
                    Missing deadlines. Pending review.
                  </p>
</div>
</div>
</div>

<div className="absolute top-[8%] left-[0%] sm:left-[-10%] w-64 bg-white/95 backdrop-blur-md border border-stone-200 p-4 shadow-lg rounded-xl floating-card-2 z-10 transform -rotate-6">
<div className="flex items-center justify-between mb-3 border-b border-stone-100 pb-2">
<span className="text-sm font-normal text-stone-900 tracking-tight">
                  External QA Log
                </span>
<span className="text-xs text-stone-400 font-mono">Stage 03</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded bg-stone-50 border border-stone-100">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-stone-800 text-xs text-white flex items-center justify-center font-mono tracking-tighter">
                      FW
                    </div>
<span className="text-xs font-normal text-stone-700">
                      Fiverr Designer
                    </span>
</div>
<span className="text-xs font-mono bg-red-50 border border-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Rejected
                  </span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-stone-50 border border-stone-100">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-stone-800 text-xs text-white flex items-center justify-center font-mono tracking-tighter">
                      UD
                    </div>
<span className="text-xs font-normal text-stone-700">
                      Upwork Hourly
                    </span>
</div>
<span className="text-xs font-mono bg-amber-50 border border-amber-100 text-amber-600 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Revision
                  </span>
</div>
</div>
</div>

<div className="absolute bottom-[10%] right-[0%] sm:right-[-5%] w-60 bg-stone-900 border border-stone-800 p-4 shadow-2xl rounded-xl floating-card-3 z-30 transform rotate-6">
<div className="flex items-center gap-2 mb-2 border-b border-stone-800 pb-2">
<iconify-icon className="text-base text-red-400" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-normal text-white tracking-widest uppercase">
                  Growth Stalled
                </span>
</div>
<p className="text-xs text-stone-400 leading-relaxed mt-2">
                Cannot accept $3k/mo retainer. Design delivery cannot be
                guaranteed.
              </p>
<div className="mt-3 w-full bg-red-500/10 border border-red-500/20 px-2 py-1.5 rounded flex items-center justify-between">
<span className="text-xs text-red-400 font-mono uppercase tracking-wider">
                  Status
                </span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col relative z-20 lg:border-l lg:border-stone-200 lg:pl-8 lg:h-[80%] justify-center">
<div className="flex flex-row lg:flex-col justify-around lg:justify-center h-full gap-8 lg:gap-16 w-full mt-10 lg:mt-0">
<div className="group cursor-default text-center lg:text-left">
<span className="block text-5xl md:text-6xl font-normal tracking-tight text-stone-900 group-hover:text-emerald-500 transition-colors duration-300 font-serif">
                  4
                </span>
<span className="text-xs text-stone-500 uppercase tracking-widest mt-3 block lg:border-l-2 border-transparent group-hover:border-emerald-500 lg:pl-2 transition-all">
                  Campaigns
                  <br className="hidden lg:block"/>
                  Max Cap
                </span>
</div>
<div className="group cursor-default text-center lg:text-left">
<span className="block text-5xl md:text-6xl font-normal tracking-tight text-stone-900 group-hover:text-amber-500 transition-colors duration-300 font-serif">
                  6-8
                </span>
<span className="text-xs text-stone-500 uppercase tracking-widest mt-3 block lg:border-l-2 border-transparent group-hover:border-amber-500 lg:pl-2 transition-all">
                  Client
                  <br className="hidden lg:block"/>
                  Ceiling Hit
                </span>
</div>
<div className="group cursor-default text-center lg:text-left hidden md:block">
<div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:border-red-500 group-hover:text-red-500 transition-colors text-stone-400 shadow-sm">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:border-red-500 group-hover:text-red-500 transition-colors text-stone-400 shadow-sm">
<iconify-icon className="text-lg" icon="solar:graph-new-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<p className="text-xs text-stone-500 uppercase tracking-widest leading-relaxed lg:pl-2 lg:border-l-2 border-transparent">
                  Agency
                  <br className="hidden lg:block"/>
                  Scaling Wall
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 border-t border-stone-200 bg-stone-50/90 backdrop-blur relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="md:p-12 flex flex-col lg:flex-row lg:gap-16 bg-white border-stone-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl gap-x-12 gap-y-12 items-center">
<div className="w-full lg:w-1/2 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-full px-3 py-1 mb-2 self-start shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-sm font-mono text-stone-500 tracking-widest uppercase">
                  ● [SEC-03] Infinite Capacity
                </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 leading-[1.05] tracking-tight font-serif mb-2">
                You close the client.
                <br/>
                We generate the files.
              </h2>
<p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal mb-6">
                Klaviyo Agencies just send us the copy brief and the due date,
                we deliver in 24 hrs or less by our army of trained email
                designers.
              </p>
<div className="w-full bg-stone-50 border border-stone-200 rounded-lg overflow-hidden shadow-sm">
<div className="flex flex-col text-base">
<div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
<span className="text-stone-500 flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle"></i>
                      Speed to Scale
                    </span>
<span className="font-medium text-stone-900">Immediate</span>
</div>
<div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-white">
<span className="text-stone-500 flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle"></i>
                      New Client Setup
                    </span>
<span className="font-medium text-stone-900">0 friction</span>
</div>
<div className="flex items-center justify-between px-5 py-4">
<span className="text-stone-500 flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle"></i>
                      Team Overhead
                    </span>
<span className="font-medium text-stone-900">$0 / Zero</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative perspective-1000">
<div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-2xl border border-stone-800 relative w-full h-[450px] flex flex-col">
<div className="h-14 border-b border-[#333] flex items-center justify-between px-5 text-stone-300 bg-[#252525] shrink-0">
<div className="flex items-center gap-3">
<span className="font-normal text-sm tracking-tight text-white">
                      (IN) Inbox OS
                      <i className="inline w-4 h-4 text-stone-500" data-lucide="chevron-down"></i>
</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-blue-600 hover:bg-blue-500 transition-colors text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 cursor-pointer font-normal">
<i className="w-3 h-3" data-lucide="plus"></i>
                      Create
                    </div>
<div className="border border-[#444] hover:bg-[#333] transition-colors text-white text-xs px-3 py-1.5 rounded cursor-pointer hidden sm:block font-normal">
                      Share
                    </div>
</div>
</div>
<div className="flex-1 relative overflow-hidden flex items-center justify-center bg-[#2C2C2C] p-6" id="carousel-container">

</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#333] border border-[#444] text-white text-sm px-4 py-2.5 rounded-full font-normal shadow-2xl opacity-0 translate-y-4 transition-all duration-500 flex items-center gap-2 pointer-events-none z-50 whitespace-nowrap" id="new-file-toast">
<span className="flex h-2 w-2 relative mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                  New client added:
                  <span className="text-blue-400" id="toast-brand-name">
                    ACHATÉ
                  </span>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 -left-5 -right-5 justify-between pointer-events-none z-40 hidden sm:flex">
<button className="pointer-events-auto bg-white border border-stone-200 text-stone-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-stone-50 transition-transform hover:scale-105 active:scale-95 text-stone-600" onclick="prevCard()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="pointer-events-auto bg-white border border-stone-200 text-stone-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-stone-50 transition-transform hover:scale-105 active:scale-95 text-stone-600" onclick="nextCard()">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-32 px-6 border-y border-stone-800 bg-[#131313] relative z-20 overflow-hidden" id="production-record">
<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_60px] animate-[slide-y_20s_linear_infinite]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_100%] animate-[slide-x_20s_linear_infinite]"></div>
</div>
<div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
<div className="text-center mb-24">
<div className="text-xs md:text-sm font-mono text-emerald-500 tracking-[0.25em] uppercase mb-8">
              DFY OS 2.0 · PRODUCTION RECORD · HALL OF TEMPLATES
            </div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-[1.05] tracking-tight font-serif">
              Built by designers who
              <span className="italic text-stone-400">actually ship.</span>
</h2>
<p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed font-normal">
              Real numbers from our production team — verified inside ClickUp,
              every month.
            </p>
</div>
<div className="w-full border border-white/10 bg-[#131313]/80 backdrop-blur-sm relative">
<div className="grid grid-cols-1 md:grid-cols-2 grid-borders relative z-10">
<div className="p-16 flex flex-col items-center justify-center text-center relative group bg-[#131313] hover:bg-[#181818] transition-colors duration-500 overflow-hidden">
<div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-60 group-hover:-translate-x-2 transition-all duration-500">
<svg className="text-stone-400" fill="none" height="60" viewbox="0 0 18 60" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2 C 16 6, 16 10, 9 14 C 2 18, 2 22, 9 26 C 16 30, 16 34, 9 38 C 2 42, 2 46, 9 50 C 16 54, 16 58, 9 62" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-60 group-hover:translate-x-2 transition-all duration-500">
<svg className="text-stone-400" fill="none" height="60" viewbox="0 0 18 60" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2 C 16 6, 16 10, 9 14 C 2 18, 2 22, 9 26 C 16 30, 16 34, 9 38 C 2 42, 2 46, 9 50 C 16 54, 16 58, 9 62" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<h3 className="text-6xl md:text-7xl font-serif text-white mb-4 tracking-tight group-hover:scale-[1.02] transition-transform duration-500">
                  750-1
                  <span className="text-4xl text-stone-500 font-serif">k</span>
</h3>
<p className="text-sm font-mono text-stone-400 tracking-[0.15em] uppercase mb-2">
                  EMAIL DESIGNS / MO
                </p>
<p className="text-xs font-mono text-emerald-500 uppercase tracking-widest">
                  ~45 DAILY · ~225 WEEKLY
                </p>
</div>
<div className="p-16 flex flex-col items-center justify-center text-center relative group bg-[#131313] hover:bg-[#181818] transition-colors duration-500 overflow-hidden">
<div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-60 group-hover:-translate-x-2 transition-all duration-500">
<svg className="text-stone-400" fill="none" height="60" viewbox="0 0 18 60" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2 C 16 6, 16 10, 9 14 C 2 18, 2 22, 9 26 C 16 30, 16 34, 9 38 C 2 42, 2 46, 9 50 C 16 54, 16 58, 9 62" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-60 group-hover:translate-x-2 transition-all duration-500">
<svg className="text-stone-400" fill="none" height="60" viewbox="0 0 18 60" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2 C 16 6, 16 10, 9 14 C 2 18, 2 22, 9 26 C 16 30, 16 34, 9 38 C 2 42, 2 46, 9 50 C 16 54, 16 58, 9 62" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<h3 className="text-6xl md:text-7xl font-serif text-white mb-4 tracking-tight group-hover:scale-[1.02] transition-transform duration-500">
                  300
                  <span className="text-4xl text-stone-500 font-serif">+</span>
</h3>
<p className="text-sm font-mono text-stone-400 tracking-[0.15em] uppercase mb-2">
                  MONTHLY DESIGNS
                </p>
<p className="text-xs font-mono text-emerald-500 uppercase tracking-widest">
                  FROM A SINGLE KLAVIYO AGENCY
                </p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full bg-[#0c0a09] border-t border-stone-800 text-stone-400 py-16 px-6 z-20">
<div className="max-w-7xl mx-auto flex flex-col gap-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-4">
<span className="text-white text-lg font-normal tracking-wide">
              DFY
            </span>
<p className="text-sm font-mono text-stone-500 uppercase tracking-widest leading-relaxed">
              Expert email designers
              <br/>
              for Klaviyo agencies.
            </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-mono text-stone-600 uppercase tracking-widest mb-2">
              Platform
            </span>
<a className="text-sm hover:text-white transition-colors" href="#">
              Capabilities
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              The System
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              Pricing
            </a>
<a className="text-sm hover:text-white transition-colors" href="#">
              Case Studies
            </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-mono text-stone-600 uppercase tracking-widest mb-2">
              Legal
            </span>
<a className="text-sm hover:text-white transition-colors uppercase tracking-wider" href="#">
              Privacy Policy
            </a>
<a className="text-sm hover:text-white transition-colors uppercase tracking-wider" href="#">
              Terms of Service
            </a>
<a className="text-sm hover:text-white transition-colors uppercase tracking-wider mt-2 text-stone-300" href="#">
              Portal Login →
            </a>
</div>
<div className="flex flex-col justify-between md:items-end">
<p className="text-base font-serif italic text-stone-400">
              Made in Mexico.
              <br/>
              Delivered everywhere.
            </p>
</div>
</div>
<div className="w-full border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-sm font-mono text-stone-600 uppercase tracking-widest">
            © 2026 Emaily / DFY. All rights reserved.
          </span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-sm font-mono text-stone-500 uppercase tracking-widest">
              System Operational
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
