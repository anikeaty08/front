import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


          function auraSwitchTab(tabId) {
            // Hide all contents
            var contents = document.querySelectorAll('.aura-tab-content');
            for(var i = 0; i < contents.length; i++) {
              contents[i].classList.add('hidden');
            }

            // Show selected content
            var target = document.getElementById('aura-content-' + tabId);
            if(target) target.classList.remove('hidden');

            // Update buttons
            var buttons = document.querySelectorAll('.aura-tab-btn');
            for(var i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('bg-white', 'text-slate-900', 'shadow-sm', 'font-semibold');
              buttons[i].classList.add('text-slate-500', 'font-medium');
            }

            // Active button style
            var activeBtn = document.getElementById('aura-btn-' + tabId);
            if(activeBtn) {
              activeBtn.classList.remove('text-slate-500', 'font-medium');
              activeBtn.classList.add('bg-white', 'text-slate-900', 'shadow-sm', 'font-semibold');
            }
          }
        


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in-view');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.observe-viewport').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>
<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="w-full max-w-7xl mx-auto h-full border-x border-slate-100 grid grid-cols-4">
<div className="border-r border-slate-100 h-full"></div>
<div className="border-r border-slate-100 h-full"></div>
<div className="border-r border-slate-100 h-full"></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex gap-x-2 gap-y-2 items-center">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
</svg>
</div>
<span className="text-[17px] font-semibold tracking-tighter font-geist uppercase">
                Aventra
              </span>
</a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#benefits">
              Benefits
            </a>
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-500" href="#foundations">
              Foundations
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">
              Features
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">
              Pricing
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faqs">
              FAQs
            </a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2.5 rounded-full transition-all">
<iconify-icon icon="solar:figma-linear" width="16"></iconify-icon>
<span>Preview</span>
</button>
<button className="flex items-center gap-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-full transition-all shadow-lg shadow-indigo-600/20">
<span className="">Buy Now</span>
<iconify-icon className="" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>

<div className="md:hidden">
<button className="p-2 text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="hero">
<style>
        @keyframes cursor-move {
          0% { transform: translate(0, 0); }
          25% { transform: translate(120px, 80px); }
          50% { transform: translate(80px, 200px); }
          75% { transform: translate(-40px, 150px); }
          100% { transform: translate(0, 0); }
        }
        .animate-cursor {
          animation: cursor-move 8s infinite ease-in-out;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
        }
      </style>

<div className="blob bg-indigo-200 w-96 h-96 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob bg-blue-100 w-[800px] h-[800px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 opacity-30"></div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">

<div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/60 rounded-full p-1 pr-4 mb-8">
<span className="bg-white text-indigo-600 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm border border-slate-100">
            New
          </span>
<span className="text-sm text-slate-500 font-medium">
            Aventra 3.0 is finally available
          </span>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] font-semibold text-slate-900 tracking-tight max-w-5xl mr-auto mb-8 ml-auto observe-viewport effect-blur-in text-4xl sm:text-5xl">
          Ship premium software and web
          <br className="hidden md:block"/>
          apps with
          <span className="inline-flex items-center gap-3 align-middle border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-2xl px-4 py-1 mx-2 relative top-[-4px]">
<iconify-icon className="text-slate-400 text-3xl md:text-5xl" icon="solar:bolt-bold"></iconify-icon>
<span className="text-slate-400">lightning speed</span>
</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed observe-viewport effect-fade-up delay-100">
          Ship consistent high-quality UI 20x faster with the most powerful
          Figma UI kit &amp; design system for modern teams.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 observe-viewport effect-fade-up delay-200">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3.5 rounded-full transition-all shadow-xl shadow-indigo-600/20">
<span>Buy Now</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-8 py-3.5 rounded-full transition-all">
<iconify-icon icon="solar:figma-linear" width="20"></iconify-icon>
<span>Preview in Figma</span>
</button>
</div>
<p className="text-sm text-slate-400 mb-20">Pay once, Use forever</p>

<div className="relative mx-auto max-w-7xl bg-white rounded-[24px] border border-slate-200 shadow-2xl overflow-hidden text-left observe-viewport effect-pop delay-300">

<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs text-slate-500 w-96 justify-center shadow-sm">
<iconify-icon className="text-slate-400" icon="solar:lock-bold"></iconify-icon>
<span className="">aventra.com</span>
</div>
<div className="flex gap-3 text-slate-400">
<iconify-icon icon="solar:share-linear"></iconify-icon>
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>

<div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
<div className="flex items-center gap-4">
<div className="p-1.5 hover:bg-slate-100 rounded-md transition-colors cursor-pointer">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex gap-1 text-slate-500">
<div className="p-1.5 hover:bg-slate-100 rounded-md cursor-pointer text-slate-900">
<iconify-icon icon="lucide:mouse-pointer-2" width="18"></iconify-icon>
</div>
<div className="p-1.5 hover:bg-slate-100 rounded-md cursor-pointer">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</div>
<div className="p-1.5 hover:bg-slate-100 rounded-md cursor-pointer">
<iconify-icon icon="lucide:type" width="18"></iconify-icon>
</div>
</div>
<div className="text-sm font-medium text-slate-900 ml-4">
                Untitled
              </div>
<span className="text-xs text-slate-400 border border-slate-200 rounded px-1">
                Read-only
              </span>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
<div className="w-7 h-7 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  L
                </div>
</div>
<button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
                Share
              </button>
<div className="text-xs font-medium text-slate-600 flex items-center gap-1">
                61%
                <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="flex h-[700px] bg-slate-50">

<div className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
<div className="p-4 border-b border-slate-100">
<div className="flex items-center justify-between mb-4">
<span className="font-semibold text-xs text-slate-900">
                    Layers
                  </span>
<iconify-icon className="text-slate-400" icon="lucide:search" width="14"></iconify-icon>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 bg-blue-50 text-blue-600 rounded-md text-xs font-medium">
<iconify-icon icon="lucide:layout" width="12"></iconify-icon>
                    Dashboard
                  </div>
<div className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md text-xs">
<iconify-icon icon="lucide:hash" width="12"></iconify-icon>
                    Overview
                  </div>
<div className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md text-xs">
<iconify-icon icon="lucide:credit-card" width="12"></iconify-icon>
                    Cards
                  </div>
<div className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md text-xs">
<iconify-icon icon="lucide:bar-chart-2" width="12"></iconify-icon>
                    Analytics
                  </div>
</div>
</div>
<div className="p-4">
<span className="font-semibold text-xs text-slate-900 block mb-3">
                  Assets
                </span>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
<div className="w-8 h-8 rounded bg-slate-200"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
<div className="w-12 h-4 rounded bg-slate-200"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden relative p-8 md:p-12 flex items-start justify-center">

<div className="bg-white rounded-xl shadow-sm w-full max-w-4xl h-full border border-slate-200 relative transform scale-95 origin-top">

<div className="p-6 border-b border-slate-100 flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold text-slate-900">
                      Dashboard
                    </h3>
<p className="text-sm text-slate-400 mt-1">
                      Welcome back, William
                    </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</div>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:add-circle-bold" width="16"></iconify-icon>
                      Add New
                    </button>
</div>
</div>

<div className="p-6 grid grid-cols-12 gap-6 h-full bg-slate-50/50">

<div className="col-span-12 md:col-span-8 space-y-6">

<div className="grid grid-cols-2 gap-6">

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<p className="text-slate-400 text-xs font-medium mb-1">
                          Total Balance
                        </p>
<h4 className="text-2xl font-bold text-slate-900">
                          $32,492.00
                        </h4>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-green-600">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span>+12% vs last month</span>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:card-transfer-linear" width="20"></iconify-icon>
</div>
<p className="text-slate-400 text-xs font-medium mb-1">
                          Spending Limit
                        </p>
<h4 className="text-2xl font-bold text-slate-900">
                          $5,200.00
                        </h4>
<div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
<div className="h-full bg-indigo-600 w-[65%] rounded-full"></div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h4 className="font-semibold text-slate-900 text-sm">
                          Revenue Flow
                        </h4>
<select className="text-xs bg-slate-50 border-none rounded-lg text-slate-500 py-1 px-2 cursor-pointer focus:ring-0">
<option>This Year</option>
</select>
</div>
<div className="h-40 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-slate-50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-indigo-100 rounded-t-sm h-[75%] relative group cursor-pointer hover:bg-indigo-200 transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            $14,869
                          </div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[65%]"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-slate-400 font-medium">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4">

<div className="relative">
<div className="absolute -inset-1 border-2 border-purple-500 rounded-3xl z-10 pointer-events-none">
<div className="absolute -top-3 left-4 bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
                          My Cards
                        </div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border-2 border-purple-500 rounded-full"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-white border-2 border-purple-500 rounded-full"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border-2 border-purple-500 rounded-full"></div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden h-[460px] flex flex-col">
<div className="p-4 border-b border-slate-50 flex items-center justify-between">
<h4 className="font-semibold text-slate-900 text-sm">
                            My Cards
                          </h4>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="p-4 flex-1 overflow-hidden relative">

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 text-white shadow-lg mb-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="opacity-80" icon="solar:wireless-charge-linear"></iconify-icon>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-red-500/80"></div>
<div className="w-6 h-6 rounded-full bg-orange-400/80"></div>
</div>
</div>
<div className="text-lg font-mono mb-1">$32,492.00</div>
<div className="text-[10px] text-slate-400 mb-4">
                              Current Balance
                            </div>
<div className="flex justify-between items-end">
<div>
<div className="text-[9px] text-slate-400 uppercase tracking-wider">
                                  Card Holder
                                </div>
<div className="text-xs font-medium">
                                  William Ashford
                                </div>
</div>
<div className="text-xs font-mono">12/27</div>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<h5 className="text-xs font-semibold text-slate-700">
                                Recent Transactions
                              </h5>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="solar:bag-3-bold" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-slate-900">
                                  Stripe Deposit
                                </div>
<div className="text-[10px] text-slate-400">
                                  Dec 27, 2024
                                </div>
</div>
<div className="text-xs font-semibold text-green-600">
                                +$220.00
                              </div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-green-500" icon="solar:music-note-bold" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-slate-900">
                                  Spotify Premium
                                </div>
<div className="text-[10px] text-slate-400">
                                  Dec 25, 2024
                                </div>
</div>
<div className="text-xs font-semibold text-slate-900">
                                -$9.99
                              </div>
</div>
</div>

<button className="w-full bg-indigo-600 text-white text-xs font-medium py-2.5 rounded-lg mt-6 shadow-lg shadow-indigo-600/20">
                            New Transfer
                          </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/3 z-50 pointer-events-none animate-cursor drop-shadow-xl">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.65376 12.3673H5.46026L5.31717 12.4976L 1.19841L11.7841 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1"></path>
</svg>
<div className="ml-4 mt-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                  Laila
                </div>
</div>
</div>

<div className="w-64 bg-white border-l border-slate-200 hidden lg:block p-4">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-4 text-xs font-medium text-slate-900 border-b border-transparent">
<span className="border-b-2 border-slate-900 pb-2">Design</span>
<span className="text-slate-400 pb-2">Prototype</span>
</div>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-slate-900">
                      Position
                    </span>
<iconify-icon className="text-slate-400" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="flex items-center gap-2 bg-slate-50 rounded px-2 py-1.5 border border-transparent hover:border-slate-200 hover:bg-white transition-all">
<span className="text-xs text-slate-400 w-4">X</span>
<span className="text-xs text-slate-700">1056</span>
</div>
<div className="flex items-center gap-2 bg-slate-50 rounded px-2 py-1.5 border border-transparent hover:border-slate-200 hover:bg-white transition-all">
<span className="text-xs text-slate-400 w-4">Y</span>
<span className="text-xs text-slate-700">108</span>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 bg-slate-50 rounded px-2 py-1.5 border border-transparent hover:border-slate-200 hover:bg-white transition-all">
<span className="text-xs text-slate-400 w-4">W</span>
<span className="text-xs text-slate-700">352</span>
</div>
<div className="flex items-center gap-2 bg-slate-50 rounded px-2 py-1.5 border border-transparent hover:border-slate-200 hover:bg-white transition-all">
<span className="text-xs text-slate-400 w-4">H</span>
<span className="text-xs text-slate-700">784</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-slate-900">
                      Auto layout
                    </span>
<iconify-icon className="text-slate-400" icon="lucide:plus" width="14"></iconify-icon>
</div>
<div className="bg-slate-50 rounded p-1 flex justify-between mb-2">
<div className="p-1 rounded bg-white shadow-sm">
<iconify-icon className="text-slate-700" icon="lucide:arrow-down" width="14"></iconify-icon>
</div>
<div className="p-1 rounded hover:bg-white/50">
<iconify-icon className="text-slate-400" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
<div className="p-1 rounded hover:bg-white/50">
<iconify-icon className="text-slate-400" icon="lucide:wrap-text" width="14"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center justify-between bg-slate-50 px-2 py-1.5 rounded">
<iconify-icon className="text-slate-400" icon="lucide:align-horizontal-distribute-center" width="12"></iconify-icon>
<span className="text-xs text-slate-700">16</span>
</div>
<div className="flex items-center justify-between bg-slate-50 px-2 py-1.5 rounded">
<iconify-icon className="text-slate-400" icon="lucide:align-vertical-distribute-center" width="12"></iconify-icon>
<span className="text-xs text-slate-700">20</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-slate-900">
                      Fill
                    </span>
<iconify-icon className="text-slate-400" icon="lucide:plus" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-4 bg-white border border-slate-200 rounded"></div>
<span className="text-xs text-slate-700 flex-1">FFFFFF</span>
<span className="text-xs text-slate-400 group-hover:text-slate-600">
                      100%
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-white border-slate-100 border-b pt-12 pb-12 px-6 md:px-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
<p className="uppercase text-sm font-semibold text-slate-500 tracking-wide">
          Trusted by innovative teams worldwide
        </p>
</div>
<div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
<div className="flex animate-infinite-scroll gap-20 w-max px-4">
<div className="flex gap-20 shrink-0 gap-x-20 gap-y-20 items-center">
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="28" icon="logos:stripe"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="26" icon="logos:linear"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="30" icon="logos:airbnb"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="24" icon="logos:vercel"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="30" icon="logos:figma"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="26" icon="logos:discord"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="30" icon="logos:notion"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="28" icon="logos:spotify"></iconify-icon>
</div>
<div aria-hidden="true" className="flex items-center gap-20 shrink-0">
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="28" icon="logos:stripe"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="26" icon="logos:linear"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="30" icon="logos:airbnb"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="24" icon="logos:vercel"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="30" icon="logos:figma"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="26" icon="logos:discord"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="30" icon="logos:notion"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" height="28" icon="logos:spotify"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white py-24 relative" id="features">
<style>
        @keyframes drawLineVertical {
          from { height: 0; opacity: 0; }
          to { height: 100%; opacity: 1; }
        }
        @keyframes drawLineHorizontal {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob-bounce {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-draw-v { animation: drawLineVertical 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-draw-h { animation: drawLineHorizontal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-1 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-fade-2 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .animate-blob { animation: blob-bounce 10s infinite ease-in-out; }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background-color: rgb(239 246 255);
          color: rgb(37 99 235);
          border-color: rgb(191 219 254);
        }
        .intersection-dot {
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);
        }
      </style>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[80px] animate-blob"></div>
<div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px] animate-blob" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20 animate-fade-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-600 text-xs font-semibold uppercase tracking-wider mb-8 hover:border-blue-200 hover:text-blue-600 transition-colors shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
            Benefits
          </div>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Your current workflow is
            <span className="relative inline-block">
<span className="relative z-10">Slowing you down!</span>
<span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100/60 -z-0 rotate-1 rounded-sm"></span>
</span>
</h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            Here is why you need a design system to scale your product without
            the technical debt.
          </p>
</div>

<div className="relative animate-fade-2">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden md:block">

<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent animate-draw-v origin-top"></div>

<div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-draw-h origin-left"></div>
<div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-draw-h origin-left"></div>

<div className="absolute top-1/3 left-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 intersection-dot z-20"></div>
<div className="absolute top-2/3 left-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 intersection-dot z-20"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2">

<div className="feature-card group p-8 md:p-12 relative transition-colors hover:bg-white/50 rounded-3xl observe-viewport effect-fade-up delay-100">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="icon-wrapper w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ease-out">
<iconify-icon icon="solar:bolt-outline" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Build Faster
                  </h3>
<p className="text-slate-500 leading-relaxed text-base">
                    Aventra helps you skip the setup and jump straight into
                    design. All components are ready to use and well-organized
                    from day one.
                  </p>
</div>
</div>
</div>

<div className="feature-card group p-8 md:p-12 relative transition-colors hover:bg-white/50 rounded-3xl observe-viewport effect-fade-up delay-200">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="icon-wrapper w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ease-out">
<iconify-icon icon="solar:document-text-outline" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Stay Consistent
                  </h3>
<p className="text-slate-500 leading-relaxed text-base">
                    Using a design system with unified styles, grids, and
                    variables keeps everything working together, no guessing or
                    manual tweaks.
                  </p>
</div>
</div>
</div>

<div className="feature-card group p-8 md:p-12 relative transition-colors hover:bg-white/50 rounded-3xl observe-viewport effect-fade-up delay-100">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="icon-wrapper w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ease-out">
<iconify-icon icon="solar:box-minimalistic-outline" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Stop Rebuilding the Basics
                  </h3>
<p className="text-slate-500 leading-relaxed text-base">
                    You don't need to remake buttons, forms, or cards from
                    scratch on every project. Aventra gives you everything
                    upfront.
                  </p>
</div>
</div>
</div>

<div className="feature-card group p-8 md:p-12 relative transition-colors hover:bg-white/50 rounded-3xl observe-viewport effect-fade-up delay-200">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="icon-wrapper w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ease-out">
<iconify-icon icon="solar:lightbulb-outline" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Work Smarter, Not Harder
                  </h3>
<p className="text-slate-500 leading-relaxed text-base">
                    A design system saves hours on every project. Spend more
                    time on product thinking, not pushing pixels around.
                  </p>
</div>
</div>
</div>

<div className="feature-card group p-8 md:p-12 relative transition-colors hover:bg-white/50 rounded-3xl observe-viewport effect-fade-up delay-100">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="icon-wrapper w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ease-out">
<iconify-icon icon="solar:chart-2-outline" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Scale Without the Mess
                  </h3>
<p className="text-slate-500 leading-relaxed text-base">
                    As your project grows, so does the design debt. Keep your
                    codebase clean and scalable with pre-built components.
                  </p>
</div>
</div>
</div>

<div className="feature-card group p-8 md:p-12 relative transition-colors hover:bg-white/50 rounded-3xl observe-viewport effect-fade-up delay-200">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="icon-wrapper w-14 h-14 rounded-2xl bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ease-out">
<iconify-icon icon="solar:users-group-rounded-outline" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Get Everyone on the Same Page
                  </h3>
<p className="text-slate-500 leading-relaxed text-base">
                    Designers and developers use the same components and same
                    language. No more confusion during handoffs.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-white py-24 relative" id="features">
<style>
        @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
        @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-1deg); } }
        @keyframes float-3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(0.5deg); } }
        @keyframes slide-up-fade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float-3 5s ease-in-out infinite 1s; }
        .animate-appear { animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        .custom-shadow { box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08); }
        .glass-tab-active { background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      </style>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">

<div className="text-center mb-16 animate-appear">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 text-sm font-medium mb-8">
<iconify-icon className="text-indigo-600" icon="lucide:box" width="16"></iconify-icon>
            Foundations
          </div>

<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-2 text-slate-900">
            We thought of everything
          </h2>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-slate-300 mb-12">
            So you don't have to
          </h2>

<div className="inline-flex items-center bg-slate-100/80 p-1.5 rounded-full mx-auto animate-appear delay-100 relative z-20 flex-wrap justify-center">
<button className="aura-tab-btn px-5 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" onclick="auraSwitchTab('local')">
              Local styles
            </button>
<button className="aura-tab-btn px-5 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" onclick="auraSwitchTab('icons')">
              Icons
            </button>
<button className="aura-tab-btn px-5 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" onclick="auraSwitchTab('tokens')">
              Design tokens
            </button>
<button className="aura-tab-btn px-5 py-2 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm transition-all duration-200" onclick="auraSwitchTab('logos')">
              Logos &amp; Assets
            </button>
</div>
</div>

<div className="bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden relative animate-appear delay-200 min-h-[600px] transition-all duration-300">

<div className="aura-tab-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center md:p-16 lg:p-20 h-full p-6 sm:p-8">

<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                All the assets you need to design faster and save time
              </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-10">
                A complete library of everything you need from 4000+ icons,
                company logos and assets ready to drop into your designs.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
<iconify-icon className="" icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">
                    Brand &amp; integration logos
                  </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Country flags</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">
                    File type and socials icons
                  </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">
                    Credit cards and more
                  </span>
</div>
</div>
</div>

<div className="relative w-full flex items-center justify-center lg:justify-end perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-24 scale-90 opacity-40 blur-[1px] animate-float-3 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-4 h-[400px]">
<div className="h-4 w-1/3 bg-slate-100 rounded mb-4"></div>
<div className="h-8 w-full bg-slate-50 rounded mb-4"></div>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square bg-slate-50 rounded-lg"></div>
<div className="aspect-square bg-slate-50 rounded-lg"></div>
<div className="aspect-square bg-slate-50 rounded-lg"></div>
<div className="aspect-square bg-slate-50 rounded-lg"></div>
</div>
</div>

<div className="absolute right-12 top-1/2 -translate-y-1/2 -translate-x-12 scale-95 opacity-70 animate-float-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 h-[400px]">
<div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-2">
<span className="text-xs font-semibold text-slate-400">
                    Swap instance
                  </span>
</div>
<div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg mb-4">
<iconify-icon className="text-slate-400" icon="lucide:search" width="14"></iconify-icon>
<span className="text-xs text-slate-400">Search...</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-1 text-xs font-medium text-slate-500">
<iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
                    Placeholder
                  </div>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square rounded-xl bg-green-50 flex items-center justify-center text-green-500 hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 hover:scale-110 transition-transform">
<iconify-icon icon="lucide:asterisk" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute right-24 top-1/2 -translate-y-1/2 animate-float-1 w-80 bg-white rounded-2xl border border-slate-200 custom-shadow p-5 z-20">

<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-semibold text-slate-900">
                    Swap instance
                  </h4>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="lucide:x" width="16"></iconify-icon>
</button>
</div>

<div className="relative mb-5">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:search" width="14"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-slate-50 border-none rounded-lg text-sm text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-shadow" placeholder="Search..." type="text"/>
</div>

<div className="space-y-5">

<div className="">
<button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 w-full text-left transition-colors">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
                      Productivity
                    </button>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="logos:gitlab" width="24"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="logos:google-gmail" width="24"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="logos:google-drive" width="24"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="logos:google-maps" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="">
<button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 w-full text-left transition-colors">
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
                      Country Flags
                    </button>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="emojione-v1:flag-for-united-kingdom" width="24"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="emojione-v1:flag-for-european-union" width="24"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="emojione-v1:flag-for-united-states" width="24"></iconify-icon>
</div>
<div className="aspect-square rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:border-blue-200 hover:shadow-md cursor-pointer transition-all duration-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="emojione-v1:flag-for-canada" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="aura-tab-content hidden grid grid-cols-1 lg:grid-cols-2 items-stretch h-full">

<div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                A complete library of everything you need
              </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-10">
                Access 2800+ professional and export ready icons designed and
                optimized for smooth use within Figma and quickly swap icons
                inside components.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2.5" width="18"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">2800+ icons</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2.5" width="18"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">
                    Line &amp; fill styles
                  </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2.5" width="18"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">19+ categories</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2.5" width="18"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">
                    Free for Commercial use
                  </span>
</div>
</div>
</div>

<div className="relative overflow-hidden min-h-[400px] lg:min-h-full bg-slate-50/50">
<div className="absolute inset-0 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center scale-110 -rotate-12 translate-x-12 opacity-80 select-none pointer-events-none">
<div className="grid grid-cols-5 gap-6">

<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:maximize" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:circle" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:crop" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:edit-3" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:droplet" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:move-diagonal-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:paint-bucket" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:ruler" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:scissors" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:contrast" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:power" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:grid-3x3" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:stamp" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:move" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:hexagon" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 rotate-12 transform hover:scale-105 transition-transform">
<iconify-icon icon="lucide:brush" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="aura-tab-content hidden grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-8 md:p-16 lg:p-20 h-full">
<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                Local Styles
              </h3>
<p className="text-lg text-slate-500 leading-relaxed">
                Manage your typography, colors, and effects efficiently.
              </p>
</div>
</div>
<div className="aura-tab-content hidden grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-8 md:p-16 lg:p-20 h-full">
<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                Design Tokens
              </h3>
<p className="text-lg text-slate-500 leading-relaxed">
                Sync your design decisions across all platforms.
              </p>
</div>
</div>
</div>

</div>
</section>
<section className="overflow-hidden bg-white pt-24 pb-24 relative space-y-12" id="features">
<style>
        @keyframes slide-up-fade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-appear { animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .custom-shadow { box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08); }
        .dropdown-shadow { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05); }
      </style>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto px-4 relative">

<div className="text-center mb-16 observe-viewport effect-blur-in">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 text-sm font-medium mb-8">
<iconify-icon className="text-blue-600" icon="lucide:gem" width="16"></iconify-icon>
            Features
          </div>

<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-2 text-slate-900">
            Meticulously crafted and
          </h2>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-slate-400 mb-12">
            Highly customizable
          </h2>
</div>

<div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden relative animate-appear delay-200 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-8 md:p-16 lg:p-20">

<div className="max-w-xl">
<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-900 text-sm font-medium mb-8 border border-slate-100 observe-viewport effect-pop delay-200">
                Smart Components
              </div>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                Smart &amp; powerful components
              </h3>
<p className="text-lg text-slate-500 leading-relaxed mb-10">
                Everything is meticulously designed using the 4 point system and
                auto layout 5.0 with Figma’s best practices to ensure
                scalability and customization.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                    Smart and powerful components with properties
                  </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-600 shrink-0">
<iconify-icon className="" icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                    Nested instances that allows high customization
                  </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                    Base components used to construct main components
                  </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-600 shrink-0">
<iconify-icon className="" icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                    Variants with multiples styles and themes
                  </span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center bg-slate-50/50 rounded-3xl border border-slate-100/50">

<div className="relative bg-white rounded-xl dropdown-shadow w-64 p-2 z-20">

<div className="px-3 py-2 text-xs text-slate-400 font-medium">
                  Sort by
                </div>

<div className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer mb-0.5">
                  Name
                </div>
<div className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer mb-0.5">
                  Type
                </div>

<div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 text-sm text-slate-900 rounded-md font-medium cursor-pointer mb-0.5 relative group">
<span className="">Date added</span>
<iconify-icon className="text-slate-900" icon="lucide:check" width="14"></iconify-icon>

<div className="absolute left-0 top-1/2 -translate-x-full w-8 h-px bg-slate-300 hidden md:block"></div>
<div className="absolute right-0 top-1/2 translate-x-full w-8 h-px bg-slate-300 hidden md:block"></div>
</div>
<div className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer">
                  Date modified
                </div>

<div className="h-px bg-slate-100 my-2 mx-1"></div>

<div className="px-3 py-2 text-xs text-slate-400 font-medium">
                  View as
                </div>

<div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 text-sm text-slate-900 rounded-md font-medium cursor-pointer mb-0.5">
<div className="flex items-center gap-2">
<iconify-icon className="" icon="lucide:list" width="14"></iconify-icon>
<span className="">List view</span>
</div>
<iconify-icon className="text-slate-900" icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer">
<iconify-icon className="" icon="lucide:layout-grid" width="14"></iconify-icon>
<span className="">Grid view</span>
</div>
</div>

<div className="absolute inset-0 pointer-events-none hidden md:block">

<div className="absolute top-[37%] left-[10%] xl:left-[15%] flex items-center">
<div className="bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900 whitespace-nowrap z-10">
                    Menu item
                    <span className="text-slate-400">- Nested</span>
</div>

<div className="w-[50px] lg:w-[80px] h-px bg-slate-300 absolute left-full top-1/2"></div>
</div>

<div className="absolute top-[37%] right-[5%] xl:right-[10%] flex items-center">

<div className="w-[50px] lg:w-[80px] h-px bg-slate-300 absolute right-full top-1/2"></div>
<div className="bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900 whitespace-nowrap z-10">
                    Menu group
                    <span className="text-slate-400">- Nested</span>
</div>
</div>

<div className="absolute bottom-[10%] right-[15%] xl:right-[20%]">
<div className="absolute bottom-full right-1/2 translate-x-8 w-px h-16 bg-slate-300"></div>
<div className="absolute bottom-full mb-16 right-1/2 translate-x-8 w-16 h-px bg-slate-300 origin-right"></div>
<div className="bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900 whitespace-nowrap relative z-10 mt-2">
                    Dropdown menu
                    <span className="text-slate-400">- Main Component</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto px-4 relative">

<div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden relative shadow-sm group">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-8 md:p-12 lg:p-20">

<div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden order-last lg:order-first">

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-blue-50/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute top-[10%] right-[-10%] w-[90%] h-[90%] bg-white rounded-xl border border-slate-200 shadow-lg opacity-40 scale-95 origin-bottom-right transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4">
<div className="p-3 border-b border-slate-100 flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="p-8 space-y-4 opacity-50">
<div className="h-4 w-1/3 bg-slate-100 rounded"></div>
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-white rounded-xl border border-slate-200 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-[52%] flex flex-col overflow-hidden">

<div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between shrink-0">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<div className="flex-1 mx-4">
<div className="bg-slate-50 text-[10px] text-center py-1 rounded-md text-slate-400 font-medium border border-slate-100 flex items-center justify-center gap-1.5">
<iconify-icon icon="lucide:lock" width="8"></iconify-icon>
                      aventra.com
                    </div>
</div>
<div className="flex gap-2 text-slate-300">
<iconify-icon icon="lucide:share" width="12"></iconify-icon>
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-hidden relative bg-white p-6 flex flex-col items-center text-center">

<div className="w-full flex justify-between items-center mb-8 px-2">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center text-white text-[8px]">
<iconify-icon icon="lucide:box" width="10"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-900">
                        Aventra
                      </span>
</div>
<div className="flex gap-3 text-[8px] text-slate-500 font-medium">
<span>Solutions</span>
<span className="">Resources</span>
<span>Pricing</span>
</div>
<div className="bg-blue-600 text-white text-[8px] px-2 py-1 rounded font-medium">
                      Log in
                    </div>
</div>

<div className="space-y-3 max-w-xs mx-auto mb-8 relative z-10">
<div className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
<iconify-icon className="text-slate-400" icon="lucide:shield-check" width="10"></iconify-icon>
                      Trusted by 2M+ users
                    </div>
<h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Smart Financial Solutions Helping You Grow
                    </h3>
<p className="text-[9px] text-slate-500 leading-relaxed px-4">
                      Gain access to powerful tools and insights you need to
                      manage, grow, and optimize finances.
                    </p>
<div className="pt-2 flex justify-center gap-2">
<div className="bg-blue-600 text-white text-[9px] px-3 py-1.5 rounded-md shadow-sm shadow-blue-600/20">
                        Get Started
                      </div>
<div className="bg-white border border-slate-200 text-slate-600 text-[9px] px-3 py-1.5 rounded-md">
                        Learn more
                      </div>
</div>
</div>

<div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-t-xl border border-slate-200 shadow-lg p-3 grid grid-cols-3 gap-3">
<div className="col-span-1 space-y-2">
<div className="h-2 w-12 bg-slate-100 rounded"></div>
<div className="space-y-1">
<div className="h-1.5 w-full bg-slate-50 rounded"></div>
<div className="h-1.5 w-full bg-slate-50 rounded"></div>
<div className="h-1.5 w-2/3 bg-slate-50 rounded"></div>
</div>
</div>
<div className="col-span-2 bg-slate-50 rounded-lg border border-slate-100 p-2 flex items-center justify-center">
<div className="text-center">
<div className="text-[10px] font-bold text-slate-900">
                          $17,292.00
                        </div>
<div className="text-[8px] text-green-600 flex items-center gap-0.5 justify-center mt-0.5">
<iconify-icon icon="lucide:trending-up" width="8"></iconify-icon>
                          +32%
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-xl order-first lg:order-last">
<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-700 text-sm font-medium mb-8 border border-slate-100">
                Sections &amp; Pages
              </div>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Prebuilt pages and app examples
              </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-10">
                Design web pages and apps in seconds with 300+ of prebuilt
                sections, pages and dashboards ready to drop into your project.
              </p>
<div className="grid grid-cols-1 gap-y-6 gap-x-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

<div className="flex items-start gap-3">
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                      Smart page builder component to design in record time
                    </span>
</div>

<div className="flex items-start gap-3">
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                      Customizable dashboards built with auto layout 5.0
                    </span>
</div>

<div className="flex items-start gap-3">
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                      Flexible dashboard widgets with multiple states
                    </span>
</div>

<div className="flex items-start gap-3">
<div className="mt-1 text-blue-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="20"></iconify-icon>
</div>
<span className="text-slate-700 font-medium leading-snug">
                      Fully responsive page sections and landing Pages
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="features">
<style>
        @keyframes cursor-path {
          0% { transform: translate(400px, 300px); opacity: 0; }
          10% { opacity: 1; }
          30% { transform: translate(520px, 260px); } /* Move to dropdown */
          40% { transform: translate(520px, 260px) scale(0.9); } /* Click down */
          45% { transform: translate(520px, 260px) scale(1); } /* Click up */
          70% { transform: translate(520px, 320px); } /* Move to item */
          80% { transform: translate(520px, 320px) scale(0.9); } /* Click down */
          85% { transform: translate(520px, 320px) scale(1); } /* Click up */
          100% { transform: translate(400px, 300px); opacity: 0; }
        }

        @keyframes component-resize {
          0%, 80% { transform: scale(1); }
          85%, 100% { transform: scale(0.95); }
        }

        @keyframes dropdown-open {
          0%, 40% { opacity: 0; visibility: hidden; transform: translateY(-10px); }
          45%, 100% { opacity: 1; visibility: visible; transform: translateY(0); }
        }

        @keyframes selection-highlight {
          0%, 70% { background-color: transparent; color: #334155; }
          75%, 100% { background-color: #3b82f6; color: white; }
        }

        .animate-cursor { animation: cursor-path 8s infinite ease-in-out; }
        .animate-component { animation: component-resize 8s infinite ease-in-out; }
        .animate-dropdown { animation: dropdown-open 8s infinite step-end; }
        .animate-selection { animation: selection-highlight 8s infinite step-end; }

        .f-tab-active { border-left-color: #2563eb; color: #0f172a; }
        .f-tab-inactive { border-left-color: transparent; color: #94a3b8; }
        .f-tab-inactive:hover { color: #475569; border-left-color: #e2e8f0; }

        /* Custom Scrollbar for panel */
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #cbd5e1; }
      </style>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 text-xs font-semibold uppercase tracking-wider mb-6">
<iconify-icon className="text-blue-600" icon="lucide:zap" width="14"></iconify-icon>
            Workflow
          </div>
<h2 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Experience development at warp speed
          </h2>
<p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Transform your design-to-code workflow with intelligent automation
            that saves thousands of hours and delivers pixel-perfect
            consistency.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-4 space-y-2">

<div className="f-tab-active border-l-4 pl-8 py-4 transition-all duration-300 cursor-pointer">
<h3 className="text-2xl font-semibold tracking-tight mb-3">
                Adaptive Component Architecture
              </h3>
<p className="text-base text-slate-500 leading-relaxed">
                Components that automatically adjust to their context with
                lightning precision, maintaining visual harmony across your
                entire application.
              </p>
</div>

<div className="f-tab-inactive border-l-4 pl-8 py-6 transition-all duration-300 cursor-pointer group">
<h3 className="text-2xl font-semibold tracking-tight group-hover:text-slate-700">
                Rapid Page Assembly
              </h3>
</div>
<div className="f-tab-inactive border-l-4 pl-8 py-6 transition-all duration-300 cursor-pointer group">
<h3 className="text-2xl font-semibold tracking-tight group-hover:text-slate-700">
                Instant Theme Switching
              </h3>
</div>
</div>

<div className="lg:col-span-8">
<div className="relative h-[600px] w-full bg-[#F3F6F8] rounded-[32px] border border-slate-200 overflow-hidden shadow-sm flex">

<div className="flex-1 relative flex items-center justify-center p-10 perspective-1000">

<div className="absolute inset-0 pointer-events-none flex items-center justify-center pr-64">
<div className="w-[280px] h-[320px] border border-dashed border-purple-400 rounded-lg animate-component transition-all duration-300 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm">

<div className="absolute -top-3 left-4 bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium shadow-sm">
                      Menu Group
                    </div>

<div className="bg-white rounded-xl border border-slate-200 shadow-xl w-64 overflow-hidden transform transition-transform">
<div className="p-3 border-b border-slate-50 flex items-center justify-between">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                          Navigation
                        </span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors">
<iconify-icon className="text-slate-400" icon="lucide:layout-dashboard" width="16"></iconify-icon>
<span>Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium shadow-sm border border-blue-100">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
<span>Team Members</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors">
<iconify-icon className="text-slate-400" icon="lucide:settings" width="16"></iconify-icon>
<span>Settings</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors">
<iconify-icon className="text-slate-400" icon="lucide:credit-card" width="16"></iconify-icon>
<span>Billing</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-72 bg-white border-l border-slate-200 flex flex-col z-20 shadow-[-10px_0_30px_-10px_rgba(0,0,0,0.05)] hidden md:flex">

<div className="h-12 border-b border-slate-100 flex items-center px-4 gap-6 shrink-0 bg-white">
<span className="text-xs font-semibold text-slate-900 border-b-2 border-slate-900 h-full flex items-center pt-0.5">
                    Design
                  </span>
<span className="text-xs font-medium text-slate-400 h-full flex items-center pt-0.5 hover:text-slate-600 cursor-pointer">
                    Prototype
                  </span>
</div>

<div className="p-4 space-y-6 overflow-y-auto custom-scrollbar flex-1">

<div className="flex items-center justify-between">
<span className="text-xs font-bold text-slate-900">
                      Menu Item
                    </span>
<div className="flex gap-2 text-slate-400">
<iconify-icon className="hover:text-slate-600 cursor-pointer" icon="lucide:copy" width="12"></iconify-icon>
<iconify-icon className="hover:text-slate-600 cursor-pointer" icon="lucide:rotate-cw" width="12"></iconify-icon>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between">
<span className="text-[10px] text-slate-500 font-medium">
                        Variant
                      </span>
</div>
<div className="relative">
<div className="w-full flex items-center justify-between px-2 py-1.5 bg-white border border-slate-200 rounded text-xs text-slate-700 shadow-sm hover:border-slate-300 cursor-pointer transition-colors group">
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-500" icon="lucide:component" width="12"></iconify-icon>
                          Default
                        </div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2 relative z-50">
<div className="flex justify-between">
<span className="text-[10px] text-slate-500 font-medium">
                        Size
                      </span>
</div>
<div className="relative">

<div className="w-full flex items-center justify-between px-2 py-1.5 bg-white border border-slate-200 rounded text-xs text-slate-700 shadow-sm hover:border-slate-300 cursor-pointer peer transition-colors group">
<div className="flex items-center gap-2">
<span className="w-4 h-4 flex items-center justify-center text-[9px] font-bold border border-slate-200 rounded text-slate-500 bg-slate-50">
                            M
                          </span>
                          Medium
                        </div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>

<div className="absolute top-full left-0 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden opacity-0 invisible animate-dropdown origin-top z-50">
<div className="p-1 space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
                            Large
                          </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors animate-selection">
                            Medium
                          </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
                            Small
                          </div>
</div>
</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full my-2"></div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:check-square" width="12"></iconify-icon>
<span className="text-xs text-slate-600 font-medium">
                          Show Icon
                        </span>
</div>
<div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:type" width="12"></iconify-icon>
<span className="text-xs text-slate-600 font-medium">
                          Show Label
                        </span>
</div>
<div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-xs text-slate-600 font-medium">
                          Show Chevron
                        </span>
</div>
<div className="w-8 h-4 bg-slate-200 rounded-full relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="space-y-3 pt-2">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400 w-16 font-medium">
                        Label
                      </span>
<div className="flex-1 bg-white border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-700 hover:border-slate-300 transition-colors cursor-text">
                        Team Members
                      </div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400 w-16 font-medium">
                        Icon
                      </span>
<div className="flex-1 bg-white border border-slate-200 rounded px-2 py-1.5 text-xs text-slate-700 flex items-center gap-2 hover:border-slate-300 transition-colors cursor-pointer">
<iconify-icon icon="lucide:users" width="12"></iconify-icon>
                        users
                      </div>
</div>
</div>
</div>

<div className="mt-auto p-4 border-t border-slate-100 bg-slate-50/50">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
<iconify-icon icon="lucide:code-2" width="14"></iconify-icon>
                    Export Code
                  </button>
</div>
</div>

<div className="absolute top-0 left-0 w-6 h-6 z-50 pointer-events-none animate-cursor filter drop-shadow-md">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.65376 12.3673H5.46026L5.31717 12.4976L 1.19841 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1"></path>
<path d="M5.65376 12.3673L11.4284 21.996L14.7169 16.577L20.8421 16.4836L5.65376 1.48003V12.3673Z" fill="black" stroke="white" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<style className="">
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      </style>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px]"></div>
</div>
<div className="z-10 max-w-7xl mx-auto px-6 relative">
<style>
          @keyframes marquee-up {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          @keyframes marquee-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }
          .animate-marquee-up { animation: marquee-up 40s linear infinite; }
          .animate-marquee-down { animation: marquee-down 40s linear infinite; }
          /* Pause on hover to allow reading */
          .group:hover .animate-marquee-up,
          .group:hover .animate-marquee-down { animation-play-state: paused; }
        </style>

<div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
<iconify-icon className="text-blue-600" icon="lucide:message-square-quote" width="16"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">
              Testimonials
            </span>
</div>
<h2 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Built for Impact,
            <span className="text-slate-400">Proven by designers</span>
</h2>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our community isn't just satisfied, it's thriving. Here's what they
            are saying about their workflow transformation.
          </p>
</div>

<div className="relative h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] group">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">

<div className="relative h-full overflow-hidden">
<div className="absolute inset-x-0 top-0 space-y-6 animate-marquee-up w-full">


<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Saved me so much time on a SaaS dashboard project. The
                    components are clean, responsive, and easy to customize. I
                    was able to deliver a polished design in a fraction of the
                    time it used to take me."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="David" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a1ae5f-c842-4ee9-a912-505fc66a1ee0_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        David Keith
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Product Designer
                      </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "I used to waste so much time fiddling with base components.
                    Now, I just drop in a few blocks, tweak colors, and ship. It
                    even made me enjoy working on admin panels again. Massive
                    time saver."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Scott" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dbcdf02-39a2-4c13-95f7-3118cc995fa0_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Scott Robert
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Design Systems Lead
                      </div>
</div>
</div>
</div>


<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Saved me so much time on a SaaS dashboard project. The
                    components are clean, responsive, and easy to customize. I
                    was able to deliver a polished design in a fraction of the
                    time it used to take me."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="David" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fac4589-f18c-4e9a-b68d-c56fb2ab4a91_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        David Keith
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Product Designer
                      </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "I used to waste so much time fiddling with base components.
                    Now, I just drop in a few blocks, tweak colors, and ship. It
                    even made me enjoy working on admin panels again. Massive
                    time saver."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Scott" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cb06fb2-8ea5-46b1-9e26-541bf8d4e9f7_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Scott Robert
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Design Systems Lead
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-full overflow-hidden hidden md:block">
<div className="absolute inset-x-0 top-0 space-y-6 animate-marquee-down w-full">


<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Saved me days on a client project. Clean, fast, easy to
                    tweak. The system feels incredibly robust yet flexible
                    enough for creative exploration."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Brian" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4c6293b-26ff-4117-9a48-45d8311e3f1a_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Brian Moore
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Freelance Designer
                      </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Aventra has been a lifesaver for our team. Before, our
                    Figma files were a mess and everyone was designing
                    differently. Now we're all on the same page."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Nicole" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b9d8c98-705c-47b5-b1e4-c379f48796be_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Nicole Thomas
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Sr Product Designer
                      </div>
</div>
</div>
</div>


<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Saved me days on a client project. Clean, fast, easy to
                    tweak. The system feels incredibly robust yet flexible
                    enough for creative exploration."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Brian" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Brian Moore
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Freelance Designer
                      </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Aventra has been a lifesaver for our team. Before, our
                    Figma files were a mess and everyone was designing
                    differently. Now we're all on the same page."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Nicole" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3522f16-72f7-40b5-8f7d-fecabaf55ce1_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Nicole Thomas
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Sr Product Designer
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-full overflow-hidden hidden lg:block">
<div className="absolute inset-x-0 top-0 space-y-6 animate-marquee-up w-full" style={{animationDuration: '45s'}}>


<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Aventra completely changed how fast I deliver client work.
                    What used to take me 3–4 days now takes maybe a morning. The
                    components are so clean."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Darryl" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1053970-8b56-4b55-9d7c-4ed16446cb04_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Darryl Shepard
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Freelance Designer
                      </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "This design system is a must-have for any designer! It has
                    dramatically improved my efficiency and allowed me to focus
                    on creativity."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Yusuf" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddc37ed0-cf39-4a27-9409-f680f25cb6d7_320w.jpg"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Yusuf Ahmed
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Frontend Lead
                      </div>
</div>
</div>
</div>


<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "Aventra completely changed how fast I deliver client work.
                    What used to take me 3–4 days now takes maybe a morning. The
                    components are so clean."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Darryl" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99667665-1a71-4064-bf58-4743bb9e0ebc_320w.webp"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Darryl Shepard
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Freelance Designer
                      </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">
<div className="mb-6">
<iconify-icon className="text-slate-300 text-4xl" icon="ri:double-quotes-l"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                    "This design system is a must-have for any designer! It has
                    dramatically improved my efficiency and allowed me to focus
                    on creativity."
                  </p>
<div className="flex items-center gap-3 pt-2 border-t border-slate-50">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
<img alt="Yusuf" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_320w.jpg"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900">
                        Yusuf Ahmed
                      </div>
<div className="text-xs text-slate-500 font-medium">
                        Frontend Lead
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 observe-viewport effect-fade-up">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
<p className="text-lg text-slate-500">
            Pay once, own it forever. No monthly fees.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5 transition-all relative">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900">
                Standard License
              </h3>
<p className="text-slate-500 text-sm mt-1">
                Perfect for solo designers
              </p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl text-slate-900 font-semibold">$89</span>
<span className="text-slate-500">/one-time</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Single User License</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Unlimited Projects</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Lifetime Updates</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Community Support</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-medium rounded-xl border border-slate-200 transition-colors">
              Buy Standard
            </button>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">
              POPULAR
            </div>
<div className="mb-6 relative z-10">
<h3 className="text-lg font-semibold text-white">Team License</h3>
<p className="text-slate-400 text-sm mt-1">
                For startups and agencies
              </p>
</div>
<div className="flex items-baseline gap-1 mb-8 relative z-10">
<span className="text-4xl text-white font-semibold">$249</span>
<span className="text-slate-400">/one-time</span>
</div>
<div className="space-y-4 mb-8 relative z-10">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Unlimited Editors</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="">Team Component Library</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Priority Support</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="">Analytics Dashboard</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/25 transition-all relative z-10">
              Buy Team License
            </button>

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all"></div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-0 pb-10">
<style>
        @keyframes orbit-1 {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          from { transform: rotate(90deg) translateX(120px) rotate(-90deg); }
          to { transform: rotate(450deg) translateX(120px) rotate(-450deg); }
        }
        @keyframes orbit-3 {
          from { transform: rotate(180deg) translateX(120px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(120px) rotate(-540deg); }
        }
        @keyframes orbit-4 {
          from { transform: rotate(270deg) translateX(120px) rotate(-270deg); }
          to { transform: rotate(630deg) translateX(120px) rotate(-630deg); }
        }
        @keyframes orbit-outer-1 {
          from { transform: rotate(45deg) translateX(180px) rotate(-45deg); }
          to { transform: rotate(405deg) translateX(180px) rotate(-405deg); }
        }
        @keyframes orbit-outer-2 {
          from { transform: rotate(225deg) translateX(180px) rotate(-225deg); }
          to { transform: rotate(585deg) translateX(180px) rotate(-585deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        .animate-orbit-1 { animation: orbit-1 20s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 20s linear infinite; }
        .animate-orbit-3 { animation: orbit-3 20s linear infinite; }
        .animate-orbit-4 { animation: orbit-4 20s linear infinite; }
        .animate-orbit-outer-1 { animation: orbit-outer-1 30s linear infinite; }
        .animate-orbit-outer-2 { animation: orbit-outer-2 30s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
      </style>

<section className="overflow-hidden bg-slate-50 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-16 lg:p-20 relative overflow-hidden observe-viewport effect-pop">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl">
<span className="text-slate-400 text-sm font-medium mb-4 block">
                  Become an Affiliate
                </span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                  Join our Affiliate Program
                </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-10">
                  Earn up to
                  <span className="font-semibold text-slate-900">$200</span>
                  with our generous
                  <span className="font-semibold text-slate-900">40%</span>
                  commission for every sale you drive with your referral link.
                </p>
<button className="flex items-center gap-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full transition-all shadow-lg shadow-indigo-600/20">
<span className="">Become an affiliate</span>
<iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center scale-75 md:scale-100 origin-center col-span-2 md:col-span-1">

<div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-slate-200 animate-pulse-ring"></div>

<div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-slate-200"></div>

<div className="absolute w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center z-10">
<div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="lucide:zap" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>

<div className="absolute w-[240px] h-[240px]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit-1">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp"/>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg"/>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit-4">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/840334b9-a7b3-46b9-bc52-858af7161039_320w.jpg"/>
</div>
</div>
</div>

<div className="absolute w-[360px] h-[360px]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit-outer-1">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_320w.jpg"/>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="animate-orbit-outer-2">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
</svg>
</div>
<span className="text-[17px] font-semibold tracking-tighter font-geist uppercase">
                  Aventra
                </span>
</a>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              The most Powerful Figma UI Kit &amp; Design System for designers.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="lucide:dribbble" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="lucide:figma" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="">
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors" href="#">
                  Contact Us
                </a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors flex items-center gap-1" href="#">
                  Become an Affiliate
                  <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors flex items-center gap-1" href="#">
                  Projects
                  <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Socials</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition-colors flex items-center gap-1" href="#">
                  Behance
                  <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors flex items-center gap-1" href="#">
                  Dribbble
                  <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</li>
<li>
<a className="hover:text-indigo-600 transition-colors flex items-center gap-1" href="#">
                  Twitter/X
                  <iconify-icon icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Newsletter</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
              Receive product updates news, exclusive discounts and early
              access.
            </p>
<div className="flex items-center gap-2">
<div className="flex-1 relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:at-sign" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none focus:border-indigo-300 transition-all" placeholder="Enter your email..." type="email"/>
</div>
<button className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-indigo-600/20">
<iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
<p className="text-sm text-slate-400">
            © 2025 Aventra · All rights reserved · Made by
            <a className="hover:text-indigo-600 transition-colors text-slate-600" href="#">
              Sourany
            </a>
</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="text-xs text-slate-400">Built in Aventra</span>
<div className="flex items-center gap-3 text-slate-300">
<iconify-icon icon="lucide:dribbble" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="lucide:figma" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="lucide:twitter" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
