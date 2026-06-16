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



      (function() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        function toggleMenu() {
          if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            body.classList.add('menu-open');
          } else {
            mobileMenu.classList.add('hidden');
            body.classList.remove('menu-open');
          }
        }

        if (menuBtn && mobileMenu && closeBtn) {
          menuBtn.addEventListener('click', toggleMenu);
          closeBtn.addEventListener('click', toggleMenu);
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="z-50 px-4 lg:px-12 flex text-white/90 w-full pt-4 lg:pt-6 pb-6 absolute top-0 left-0 items-center justify-between">
<div className="flex items-center gap-2 relative z-50">
<div className="flex shadow-emerald-500/20 text-white bg-emerald-950 w-8 h-8 rounded-lg shadow-sm items-center justify-center border border-white/10">
<iconify-icon icon="solar:database-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-white tracking-normal" onclick="window.location.href='/home'" role="button">
          Dayta
        </span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-emerald-200 transition-colors text-white/70" href="/about">
          About
        </a>
<a className="hover:text-emerald-200 transition-colors text-white/70" href="/product">
          Product
        </a>
<a className="hover:text-emerald-200 transition-colors text-white/70" href="/pricing">
          Pricing
        </a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="text-sm font-medium hover:text-emerald-200 text-white/70" href="#">
          Sign in
        </a>
<button className="bg-white text-emerald-950 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-gray-100 flex items-center gap-1.5 group">
          Get Started
          <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<button className="lg:hidden flex items-center justify-center text-white/90 hover:text-white p-2 transition-colors relative z-50" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden fixed inset-0 z-[60] bg-stone-50 flex flex-col h-[100dvh] w-screen" id="mobile-menu">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-stone-200 rounded-full"></div>

<div className="flex items-center justify-between px-6 pt-6 pb-2">

<div className="flex items-center gap-2">
<div className="flex text-white bg-emerald-950 w-8 h-8 rounded-lg items-center justify-center shadow-sm">
<iconify-icon icon="solar:database-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900 tracking-normal">
              Dayta
            </span>
</div>

<button className="flex items-center justify-center text-slate-400 hover:text-slate-900 p-2 transition-colors rounded-full hover:bg-slate-100" id="close-menu-btn">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>

<div className="flex-1 flex flex-col justify-center px-6 gap-6 sm:gap-8">
<a className="text-5xl font-bold text-slate-900 tracking-tight hover:text-emerald-600 transition-colors" href="/home">
            Home
          </a>
<a className="text-5xl font-bold text-slate-900 tracking-tight hover:text-emerald-600 transition-colors" href="/about">
            About
          </a>
<a className="text-5xl font-bold text-slate-900 tracking-tight hover:text-emerald-600 transition-colors" href="/product">
            Product
          </a>
<a className="text-5xl font-bold text-slate-900 tracking-tight hover:text-emerald-600 transition-colors" href="/pricing">
            Pricing
          </a>
</div>

<div className="p-6 pb-10 flex flex-col gap-4">
<button className="w-full py-4 rounded-full border border-slate-200 text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-colors">
            Sign in
          </button>
<button className="w-full py-4 rounded-full bg-slate-900 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/10">
            Get Started
            <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="w-full relative">

<div className="absolute top-0 left-0 w-full h-[100vh] md:h-[110vh] lg:h-[135vh] bg-[#022c22] hero-clip -z-10 overflow-hidden">
<div className="absolute inset-0 w-full h-full stripe-gradient opacity-80"></div>
<div className="diagonal-beam blur-3xl"></div>
<div className="diagonal-beam blur-[80px]" style={{animationDelay: '-5s', opacity: '0.6', transform: 'rotate(-35deg) translateY(20%)'}}></div>
<div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] mix-blend-screen floating-blob"></div>
<div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] mix-blend-overlay" style={{animationDirection: 'reverse'}}></div>
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#022c22] to-transparent opacity-80"></div>
</div>

<div className="container lg:px-12 lg:pt-48 mr-auto ml-auto pt-24 pr-4 pb-20 pl-4 relative">

<div className="absolute inset-0 pointer-events-none hidden md:flex justify-between px-6 lg:px-12 max-w-7xl mx-auto opacity-10">
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white hidden md:block"></div>
<div className="w-px h-full bg-white hidden lg:block"></div>
<div className="w-px h-full bg-white"></div>
</div>

<div className="absolute inset-0 pointer-events-none hidden lg:block z-0 overflow-visible">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1200 800">
<defs>
<lineargradient id="beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#34d399" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#34d399" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#34d399" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M 380 550 C 500 550, 600 300, 750 320" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path className="beam-path" d="M 380 550 C 500 550, 600 300, 750 320" fill="none" stroke="#34d399" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 450 550 C 550 550, 600 500, 700 520" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path className="beam-path-fast" d="M 450 550 C 550 550, 600 500, 700 520" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 520 550 C 600 550, 650 450, 750 450" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path className="beam-path" d="M 520 550 C 600 550, 650 450, 750 450" fill="none" stroke="#6ee7b7" strokeLinecap="round" strokeWidth="2" style={{animationDelay: '1s'}}></path>
</svg>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-center relative z-10">

<div className="lg:col-span-5 flex flex-col h-full relative justify-center text-center lg:text-left pt-6 lg:pt-0">
<div className="absolute -left-4 top-0 text-white/10 text-xs font-mono hidden lg:block">
              01
            </div>
<h1 className="leading-[1.1] text-4xl sm:text-5xl lg:text-7xl lg:-translate-y-16 font-semibold text-white tracking-tight mb-4 lg:mb-6 relative">
              Intelligent data to grow your revenue
            </h1>
<p className="leading-relaxed text-base sm:text-lg lg:text-xl font-light text-emerald-50 max-w-lg lg:max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 lg:-translate-y-16">
              Stop guessing. Start growing. Dayta unifies your sales metrics
              into a single source of truth, empowering teams to make decisions
              faster.
            </p>

<div className="hidden sm:flex flex-col sm:flex-row sm:items-center lg:justify-start lg:-translate-y-16 w-full translate-x-12 gap-x-4 gap-y-4 items-center justify-center">
<form className="flex shadow-emerald-900/20 focus-within:ring-2 focus-within:ring-emerald-400/30 transition-all lg:scale-75 lg:origin-left lg:-translate-x-12 bg-green-50 w-full max-w-sm border-slate-100/10 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow scale-100 items-center" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<input className="flex-1 border-none outline-none placeholder:text-slate-500 min-w-0 text-base font-medium text-slate-700 bg-transparent pt-3 pr-2 pb-3 pl-5" placeholder="Email address" required="" type="email"/>
<button className="shrink-0 hover:bg-slate-800 transition-colors flex group text-base font-bold text-white bg-slate-900 rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-1.5 gap-y-1.5 items-center" type="submit">
                  Start now
                  <iconify-icon className="" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</form>
</div>

<div className="flex sm:hidden items-center justify-center gap-4 w-full mb-4">
<button className="bg-white text-emerald-950 px-6 py-3.5 rounded-full text-base font-bold shadow-lg hover:bg-gray-50 transition-colors w-full flex items-center justify-center">
                Start now
              </button>
<button className="bg-transparent text-white px-6 py-3.5 rounded-full text-base font-semibold border border-transparent hover:bg-white/5 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Contact Sales
                <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
<div className="border-white/10 border-t mt-12 lg:mt-16 pt-8 relative">
<div className="flex flex-wrap justify-center lg:justify-start hover:grayscale-0 transition-all duration-500 opacity-60 grayscale gap-x-12 lg:gap-x-16 gap-y-8 items-center">
<div className="relative group">
<svg className="text-white relative z-10 lg:w-[56px] lg:h-[56px]" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path>
</svg>
</div>
<div className="relative group">
<iconify-icon className="text-white relative z-10 lg:w-[72px]" icon="simple-icons:vercel" width="60"></iconify-icon>
</div>
<div className="relative group">
<iconify-icon className="text-white relative z-10 lg:w-[64px]" icon="simple-icons:linear" width="50"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-7 relative perspective-2000 z-10 mt-2 lg:mt-0 items-center justify-center h-[300px] sm:h-[450px] lg:h-[700px]">

<div className="scale-[0.45] sm:scale-[0.65] md:scale-[0.8] lg:scale-100 w-full h-full relative flex items-center justify-center origin-top lg:origin-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/20 blur-[90px] -z-10 rounded-full pointer-events-none"></div>
<div className="transform transition-all duration-700 lg:rotate-y-[-10deg] lg:rotate-x-[6deg] lg:-rotate-z-[3deg] preserve-3d origin-center w-full h-full relative items-start flex justify-center">

<div className="absolute top-[25%] lg:right-[-40px] shadow-2xl overflow-hidden translate-z-[-50px] bg-white w-[700px] h-[500px] z-10 border-white/40 border rounded-xl ring-black/5 ring-1 -translate-y-[45%] lg:translate-x-16">
<div className="flex bg-slate-50/50 h-11 border-slate-100 border-b pr-4 pl-4 backdrop-blur-sm gap-x-2 gap-y-2 items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-rose-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
</div>
<div className="w-1/2 h-6 bg-white border border-slate-200/50 rounded flex items-center px-3 text-[10px] text-slate-400">
                      dayta.io/dashboard/revenue
                    </div>
</div>
<div className="flex h-full bg-white">
<div className="flex flex-col bg-slate-50/30 w-16 border-slate-100 border-r pt-6 pb-6 gap-x-6 gap-y-6 items-center">
<div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon className="" icon="solar:pie-chart-2-bold" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<div className="p-2 text-slate-400 hover:text-slate-900 rounded-md">
<iconify-icon className="" icon="solar:home-2-linear" width="20"></iconify-icon>
</div>
<div className="p-2 text-slate-900 bg-white shadow-sm border border-slate-100 rounded-md">
<iconify-icon className="" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div className="p-2 text-slate-400 hover:text-slate-900 rounded-md">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6 scale-100">
<div className="flex justify-between items-center mb-8">
<div className="">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                            Total Revenue
                          </div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">
                            $842,300.00
                          </div>
</div>
<div className="flex gap-2">
<div className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium bg-white">
                            Export
                          </div>
<div className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-medium">
                            Add Widget
                          </div>
</div>
</div>
<div className="relative w-full h-48 mb-6">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
<div className="w-full h-px border-t border-dashed border-slate-200"></div>
<div className="w-full h-px border-t border-dashed border-slate-200"></div>
<div className="w-full h-px border-t border-dashed border-slate-200"></div>
<div className="w-full h-px border-t border-dashed border-slate-200"></div>
</div>
<svg className="overflow-visible w-[586px] h-[192px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '586px', height: '192px'}} viewbox="0 0 600 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,150 C50,140 100,80 150,90 C200,100 250,50 300,60 C350,70 400,20 450,40 C500,60 550,10 600,30 V200 H0 Z" fill="url(#chartGradient)"></path>
<path className="" d="M0,150 C50,140 100,80 150,90 C200,100 250,50 300,60 C350,70 400,20 450,40 C500,60 550,10 600,30" fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle className="fill-white stroke-emerald-500 stroke-2" cx="300" cy="60" r="4"></circle>
<circle className="fill-white stroke-emerald-500 stroke-2" cx="450" cy="40" r="4"></circle>
</svg>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="text-xs text-slate-500 mb-1">
                            Customers
                          </div>
<div className="text-lg font-bold text-slate-900">
                            2,504
                          </div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="text-xs text-slate-500 mb-1">Churn</div>
<div className="text-lg font-bold text-slate-900">
                            1.2%
                          </div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="text-xs text-slate-500 mb-1">Growth</div>
<div className="text-lg font-bold text-emerald-600">
                            +18%
                          </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[25%] left-[-20px] lg:left-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] flex flex-col overflow-hidden -translate-x-16 -translate-y-1/2 z-30 bg-stone-900 w-[300px] h-[600px] border-stone-900 ring-white/10 ring-1 rounded-[48px] scale-75">
<div className="flex w-full h-8 z-50 absolute top-2 left-0 justify-center">
<div className="w-[90px] h-[24px] bg-black rounded-full flex items-center justify-center relative">
<div className="w-16 h-full bg-gray-900/50 rounded-full blur-[1px]"></div>
</div>
</div>
<div className="flex-1 bg-white w-full h-full rounded-[40px] overflow-hidden flex flex-col relative">
<div className="flex justify-between px-6 pt-3 text-[10px] font-bold text-slate-900">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="lucide:signal" width="10"></iconify-icon>
<iconify-icon icon="lucide:wifi" width="10"></iconify-icon>
<iconify-icon icon="lucide:battery-medium" width="14"></iconify-icon>
</div>
</div>
<div className="px-6 pt-6 pb-2 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon className="" icon="solar:pie-chart-2-bold" width="16"></iconify-icon>
</div>
<span className="font-bold text-slate-900">Dayta</span>
</div>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:bell" width="14"></iconify-icon>
</div>
</div>
<div className="flex flex-col pt-4 pr-6 pb-4 pl-6 gap-x-6 gap-y-6">
<div className="shadow-slate-900/20 text-white bg-slate-900 rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-slate-400">
                            Current Balance
                          </span>
<span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            +2.4%
                          </span>
</div>
<div className="text-3xl font-bold tracking-tight mb-4">
                          $24,500
                        </div>
<div className="h-12 w-full">
<svg className="w-full h-full overflow-visible" viewbox="0 0 200 60">
<path className="" d="M0,40 C40,40 60,20 100,25 C140,30 160,10 200,15" fill="none" stroke="#34d399" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="flex justify-between items-center">
<span className="text-sm font-bold text-slate-900">
                            Recent Transactions
                          </span>
<span className="text-xs text-emerald-600 font-medium">
                            See all
                          </span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-lg">
                            🛍️
                          </div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-900">
                              Shopify Store
                            </div>
<div className="text-[10px] text-slate-500">
                              Today, 2:40 PM
                            </div>
</div>
<div className="text-xs font-bold text-emerald-600">
                            +$124.00
                          </div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-lg">
                            👤
                          </div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-900">
                              New Subscriber
                            </div>
<div className="text-[10px] text-slate-500">
                              Today, 11:20 AM
                            </div>
</div>
<div className="text-xs font-bold text-emerald-600">
                            +$49.00
                          </div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-lg">
                            💳
                          </div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-900">
                              Payout Processed
                            </div>
<div className="text-[10px] text-slate-500">
                              Yesterday
                            </div>
</div>
<div className="text-xs font-bold text-slate-900">
                            -$2,100
                          </div>
</div>
</div>
</div>
<div className="mt-auto border-t border-slate-100 pt-3 pb-6 flex justify-around text-slate-400 bg-white">
<div className="flex flex-col items-center gap-1 text-slate-900">
<iconify-icon icon="solar:home-2-bold" width="20"></iconify-icon>
<span className="text-[9px] font-semibold">Home</span>
</div>
<div className="flex flex-col items-center gap-1 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Stats</span>
</div>
<div className="flex flex-col items-center gap-1 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Wallet</span>
</div>
<div className="flex flex-col items-center gap-1 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Settings</span>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-900/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-16 lg:py-24 bg-white relative border-t border-slate-100">
<div className="container mx-auto px-4 lg:px-12 max-w-7xl">
<div className="mb-12 lg:mb-20 max-w-3xl">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
              Data everywhere.
              <br className="hidden md:block"/>
<span className="text-slate-400">Clarity nowhere.</span>
</h2>
<p className="text-base md:text-xl text-slate-500 font-light leading-relaxed">
              Teams drown in dashboards, spreadsheets, and disconnected tools —
              yet still don’t know what’s really driving growth.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col gap-8">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                The Struggle
              </h3>
<ul className="flex flex-col gap-6">
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 border border-rose-100 group-hover:bg-rose-100 transition-colors">
<iconify-icon icon="lucide:x" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-base lg:text-lg text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                    Revenue data lives in 5 different tools
                  </span>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 border border-rose-100 group-hover:bg-rose-100 transition-colors">
<iconify-icon icon="lucide:x" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-base lg:text-lg text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                    Product metrics don’t connect to customer behavior
                  </span>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 border border-rose-100 group-hover:bg-rose-100 transition-colors">
<iconify-icon icon="lucide:x" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-base lg:text-lg text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                    Reports are slow, manual, and always outdated
                  </span>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 border border-rose-100 group-hover:bg-rose-100 transition-colors">
<iconify-icon icon="lucide:x" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-base lg:text-lg text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                    Leaders make decisions on partial information
                  </span>
</li>
</ul>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full opacity-50 -z-10 transform group-hover:scale-105 transition-transform duration-700"></div>
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 lg:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-500/30">
<div className="absolute top-0 right-0 p-8 opacity-5">
<iconify-icon className="text-emerald-900" icon="solar:stars-bold-duotone" width="160"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    The Dayta Way
                  </h3>
<p className="text-xl md:text-3xl font-medium text-slate-900 leading-snug tracking-tight">
                    Dayta unifies your business data into one
                    <span className="text-emerald-600">
                      real-time intelligence layer
                    </span>
                    — so every team sees what actually matters.
                  </p>
<div className="mt-8 lg:mt-10 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-400 mt-1" icon="solar:user-bold" width="24"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-500 mt-1" icon="solar:user-bold" width="24"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">
                        +5
                      </div>
</div>
<div className="text-sm text-slate-500 font-medium">
                      Aligned and moving faster
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white border-t border-slate-100 relative">
<div className="container mx-auto px-4 lg:px-12 max-w-7xl">
<div className="text-center max-w-2xl mx-auto mb-12 lg:mb-20">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              One platform.
              <br/>
<span className="text-emerald-600">Every signal that matters.</span>
</h2>
<p className="text-base lg:text-lg text-slate-500 font-light">
              The intelligence engine your team needs to understand customers
              and drive revenue.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bento-card group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col h-full">
<div className="bento-icon-bg w-12 h-12 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Real-Time Analytics
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                Live dashboards that show revenue, users, churn, and growth as
                it happens.
              </p>
</div>

<div className="bento-card group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col h-full">
<div className="bento-icon-bg w-12 h-12 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Customer Intelligence
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                See how users behave, convert, and retain — not just what they
                click.
              </p>
</div>

<div className="bento-card group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col h-full">
<div className="bento-icon-bg w-12 h-12 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:banknote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Revenue Tracking
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                Connect subscriptions, upgrades, and payments to real product
                usage.
              </p>
</div>

<div className="bento-card group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm relative overflow-hidden flex flex-col h-full">
<div className="bento-icon-bg w-12 h-12 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
                Automated Insights
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                Dayta surfaces anomalies, trends, and opportunities without
                manual reports.
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-[#f2fcfd] border-t border-slate-200 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>
<div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              From raw data to decisions in minutes
            </h2>
<p className="text-lg text-slate-500 font-light max-w-xl mx-auto">
              Turn the chaos of disconnected tools into a streamlined
              intelligence engine.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">

<div className="flex flex-col gap-6">
<div className="relative bg-white border border-slate-200 rounded-2xl p-2 h-56 lg:h-64 flex items-center justify-center shadow-sm overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center opacity-20 hidden md:flex">
<div className="w-[200px] h-[200px] border border-dashed border-cyan-400 rounded-full animate-spin-slow" style={{animationDuration: '20s'}}></div>
</div>

<div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-12 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
<iconify-icon icon="logos:stripe" width="24"></iconify-icon>
</div>
<div className="absolute bottom-12 left-8 lg:left-12 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
<iconify-icon icon="logos:postgresql" width="24"></iconify-icon>
</div>
<div className="absolute bottom-12 right-8 lg:right-12 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
<iconify-icon icon="logos:hubspot" width="24"></iconify-icon>
</div>

<div className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
<iconify-icon icon="solar:database-bold" width="32"></iconify-icon>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold flex items-center justify-center">
                    1
                  </div>
<h3 className="text-xl font-semibold text-slate-900">Connect</h3>
</div>
<p className="text-slate-500 leading-relaxed font-light text-sm">
                  Plug in Stripe, your product, marketing tools, and databases
                  in minutes.
                </p>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="relative bg-white border border-slate-200 rounded-2xl p-6 h-56 lg:h-64 flex items-center justify-center shadow-sm overflow-hidden group">
<div className="flex items-center gap-4 w-full justify-center scale-90 lg:scale-100">

<div className="flex flex-col gap-2 opacity-50 scale-90">
<div className="w-16 h-2 bg-slate-200 rounded-full"></div>
<div className="w-12 h-2 bg-rose-200 rounded-full"></div>
<div className="w-20 h-2 bg-slate-200 rounded-full"></div>
<div className="w-10 h-2 bg-amber-200 rounded-full"></div>
</div>

<div className="text-cyan-500 flex items-center relative">
<div className="absolute inset-0 bg-cyan-100 blur-xl opacity-50"></div>
<iconify-icon className="relative z-10 animate-pulse" icon="lucide:arrow-right" width="24"></iconify-icon>
</div>

<div className="bg-slate-50 border border-slate-100 rounded-lg p-3 w-32 shadow-sm flex flex-col gap-2">
<div className="flex gap-2 items-center border-b border-slate-100 pb-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<div className="w-16 h-1.5 bg-slate-300 rounded-full"></div>
</div>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-20 h-1.5 bg-slate-200 rounded-full"></div>
</div>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-14 h-1.5 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold flex items-center justify-center">
                    2
                  </div>
<h3 className="text-xl font-semibold text-slate-900">Unify</h3>
</div>
<p className="text-slate-500 leading-relaxed font-light text-sm">
                  Dayta cleans, aligns, and maps all your data into one model.
                </p>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="relative bg-white border border-slate-200 rounded-2xl h-56 lg:h-64 flex items-center justify-center shadow-sm overflow-hidden group">

<div className="w-48 bg-white border border-slate-100 rounded-xl shadow-lg p-4 relative top-4 transition-transform group-hover:-translate-y-2 duration-500">
<div className="flex justify-between items-center mb-4">
<div className="h-2 w-16 bg-slate-200 rounded-full"></div>
<div className="h-4 w-4 text-emerald-500">
<iconify-icon icon="lucide:trending-up"></iconify-icon>
</div>
</div>

<svg className="w-full h-12 overflow-visible" viewbox="0 0 100 40">
<path d="M0,35 C20,35 20,10 40,15 C60,20 60,5 100,0" fill="none" stroke="#06b6d4" strokeLinecap="round" strokeWidth="2"></path>
<circle className="fill-white stroke-cyan-500 stroke-2" cx="100" cy="0" r="3"></circle>
</svg>

<div className="absolute -top-6 -right-8 bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Revenue up 12%
                  </div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold flex items-center justify-center">
                    3
                  </div>
<h3 className="text-xl font-semibold text-slate-900">
                    Understand
                  </h3>
</div>
<p className="text-slate-500 leading-relaxed font-light text-sm">
                  Dashboards, alerts, and AI-powered insights show you what’s
                  happening — and why.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white relative border-t border-slate-100">
<div className="container mx-auto px-4 lg:px-12 max-w-5xl">
<div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Built for modern data-driven teams
            </h2>
<p className="text-base lg:text-lg text-slate-500 font-light">
              Move faster with a platform designed for action, not just
              observation.
            </p>
</div>
<div className="rounded-3xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm text-xs sm:text-sm">

<div className="grid grid-cols-2 font-semibold tracking-wide border-b border-slate-200">
<div className="p-4 lg:p-6 bg-white flex items-center justify-center md:justify-start gap-3 border-r border-slate-100 relative">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
<div className="flex shadow-emerald-500/20 text-white bg-emerald-950 w-6 h-6 rounded-md shadow-sm items-center justify-center">
<iconify-icon icon="solar:database-bold" width="14"></iconify-icon>
</div>
<span className="text-slate-900 text-base lg:text-lg">Dayta</span>
</div>
<div className="p-4 lg:p-6 bg-slate-50 flex items-center justify-center md:justify-start text-slate-400">
<span className="text-sm lg:text-lg">Traditional BI</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 group">
<div className="p-4 lg:p-6 bg-white border-r border-slate-100 flex items-center gap-3 lg:gap-4 text-emerald-950 font-medium transition-colors group-hover:bg-emerald-50/10">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Real-time data</span>
</div>
<div className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4 text-slate-500 font-light bg-slate-50/50">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:x" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Delayed reports</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 group">
<div className="p-4 lg:p-6 bg-white border-r border-slate-100 flex items-center gap-3 lg:gap-4 text-emerald-950 font-medium transition-colors group-hover:bg-emerald-50/10">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Product + revenue unified</span>
</div>
<div className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4 text-slate-500 font-light bg-slate-50/50">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:x" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Separate tools</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 group">
<div className="p-4 lg:p-6 bg-white border-r border-slate-100 flex items-center gap-3 lg:gap-4 text-emerald-950 font-medium transition-colors group-hover:bg-emerald-50/10">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Built for SaaS</span>
</div>
<div className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4 text-slate-500 font-light bg-slate-50/50">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:x" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Built for analysts</span>
</div>
</div>

<div className="grid grid-cols-2 border-b border-slate-100 group">
<div className="p-4 lg:p-6 bg-white border-r border-slate-100 flex items-center gap-3 lg:gap-4 text-emerald-950 font-medium transition-colors group-hover:bg-emerald-50/10">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Zero SQL required</span>
</div>
<div className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4 text-slate-500 font-light bg-slate-50/50">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:x" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Complex queries</span>
</div>
</div>

<div className="grid grid-cols-2 group">
<div className="p-4 lg:p-6 bg-white border-r border-slate-100 flex items-center gap-3 lg:gap-4 text-emerald-950 font-medium transition-colors group-hover:bg-emerald-50/10">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Live dashboards</span>
</div>
<div className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4 text-slate-500 font-light bg-slate-50/50">
<div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:x" strokeWidth="3" width="12"></iconify-icon>
</div>
<span>Static charts</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#001e18] py-20 lg:py-32 overflow-hidden border-t border-white/5">

<div className="absolute inset-0 z-0">

<div className="absolute right-0 top-0 h-full w-2/3 bg-dots opacity-20 [mask-image:linear-gradient(to_left,black,transparent)]"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"></div>
</div>
<div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-24">
<div className="flex flex-col justify-center">
<h3 className="uppercase text-sm font-bold text-emerald-400 tracking-wide mb-6">
                Efficiency
              </h3>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">
                Teams using Dayta move faster
              </h2>
<p className="leading-relaxed text-lg font-light text-slate-400 max-w-xl">
                High-performing teams rely on Dayta to make faster, smarter
                decisions. By unifying revenue, product, and customer data in
                one real-time platform, Dayta eliminates guesswork and gives
                every team a single source of truth.
              </p>
</div>

<div className="relative hidden lg:block h-full min-h-[400px]">

<div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20"></div>
<div className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full opacity-30"></div>
<div className="absolute right-[0px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full opacity-40"></div>

<svg className="overflow-visible absolute top-0 right-0 bottom-0 left-0 w-[544px] h-[400px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '544px', height: '400px'}} viewbox="0 0 600 600">
<path d="M 100 300 Q 300 100 500 300" fill="none" stroke="#10b981" stroke-dasharray="4 4" stroke-opacity="0.4" strokeWidth="1.5"></path>
<circle className="fill-emerald-500 animate-pulse" cx="500" cy="300" r="4"></circle>
<circle className="fill-emerald-500" cx="100" cy="300" r="4"></circle>
<path d="M 150 400 Q 350 500 550 200" fill="none" stroke="#34d399" stroke-opacity="0.2" strokeWidth="1.5"></path>
<circle className="fill-emerald-300" cx="550" cy="200" r="3"></circle>
</svg>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/10 pt-12">

<div className="border-l-2 border-emerald-500 pl-6">
<div className="text-3xl font-bold text-white mb-2 tracking-tight">
                2,500+
              </div>
<p className="text-sm text-slate-400 font-medium">
                Global customers trusting Dayta with their revenue metrics.
              </p>
</div>

<div className="border-l-2 border-emerald-500 pl-6">
<div className="text-3xl font-bold text-white mb-2 tracking-tight">
                80%
              </div>
<p className="text-sm text-slate-400 font-medium">
                Reduction in manual reporting time for finance teams.
              </p>
</div>

<div className="border-l-2 border-emerald-500 pl-6">
<div className="text-3xl font-bold text-white mb-2 tracking-tight">
                99.99%
              </div>
<p className="text-sm text-slate-400 font-medium">
                Historical uptime for our data ingestion API.
              </p>
</div>

<div className="border-l-2 border-emerald-500 pl-6">
<div className="text-3xl font-bold text-white tracking-tight mb-2">
                100%
              </div>
<p className="text-sm font-medium text-slate-400">
                Revenue clarity across product, marketing and finance.
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-stone-50 border-t border-slate-200 overflow-hidden relative">
<div className="container mx-auto px-4 lg:px-12 max-w-7xl mb-12 flex justify-between items-end">
<div>
<p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Community
            </p>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Loved by data teams
            </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-slate-400">
<iconify-icon icon="lucide:quote" width="16"></iconify-icon>
<span className="text-sm font-medium">Real feedback</span>
</div>
</div>
<div className="relative w-full">

<div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-40 bg-gradient-to-r from-stone-50 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-40 bg-gradient-to-l from-stone-50 to-transparent z-10"></div>

<div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">

<div className="w-[300px] sm:w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
<div className="mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">
                        Felix Chen
                      </span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500">@felix_data</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                  "We shipped our analytics revamp 3x faster. The defaults are
                  sensible and secure out of the box."
                </p>
</div>
</div>

<div className="w-[300px] sm:w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
<div className="mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">
                        Sarah Jenkins
                      </span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500">@sarahj_ops</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                  "Smart Connect took minutes to wire into our stack. I was
                  expecting days of setup work."
                </p>
</div>
</div>

<div className="w-[300px] sm:w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
<div className="mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">
                        Marcus West
                      </span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500">@mwest_dev</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                  "The platform feels invisible—just fast, reliable pipelines
                  and clean reporting. Exactly what we needed."
                </p>
</div>
</div>

<div className="w-[300px] sm:w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
<div className="mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">
                        Elena Gomez
                      </span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500">@elenag</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                  "Observability baked in. We finally trust our metrics for
                  decision-making across the entire org."
                </p>
</div>
</div>

<div className="w-[300px] sm:w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
<div className="mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">
                        Felix Chen
                      </span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500">@felix_data</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                  "We shipped our analytics revamp 3x faster. The defaults are
                  sensible and secure out of the box."
                </p>
</div>
</div>
<div className="w-[300px] sm:w-[350px] md:w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
<div className="mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Avatar" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-semibold text-slate-900">
                        Sarah Jenkins
                      </span>
<iconify-icon className="text-blue-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-500">@sarahj_ops</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                  "Smart Connect took minutes to wire into our stack. I was
                  expecting days of setup work."
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white relative">
<div className="container mx-auto px-4 lg:px-12 max-w-7xl">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="flex flex-col gap-6 order-2 lg:order-1">
<span className="text-emerald-600 font-bold uppercase text-xs tracking-widest">
                This removes friction.
              </span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                Enterprise-grade security.
                <span className="text-slate-400">Startup-simple setup.</span>
</h2>
<ul className="flex flex-col gap-4 mt-4">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-600 font-medium">
                    SOC-2 compliant
                  </span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-600 font-medium">
                    Encrypted at rest and in transit
                  </span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-600 font-medium">
                    Read-only integrations
                  </span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-slate-600 font-medium">
                    You own your data
                  </span>
</li>
</ul>
<div className="mt-4 pt-8 border-t border-slate-100">
<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="simple-icons:gdpr" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:iso" width="40"></iconify-icon>
</div>
</div>
</div>

<div className="relative flex justify-center items-center order-1 lg:order-2 h-[300px] lg:h-[400px] bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

<div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0 lock-glow"></div>

<div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105 scale-75 lg:scale-100">

<div className="w-32 h-24 border-[12px] border-slate-300 rounded-t-full mb-[-20px] relative z-0 transition-colors duration-300 group-hover:border-emerald-200"></div>

<div className="w-48 h-40 bg-white rounded-3xl shadow-xl border border-slate-200 flex items-center justify-center relative z-10">

<div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:shield-check" strokeWidth="2" width="32"></iconify-icon>
</div>

<div className="absolute top-4 right-4 flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
</div>

<div className="absolute -bottom-6 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon>
                  Secured
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 relative overflow-hidden bg-slate-950 border-t border-slate-900">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-4 lg:px-12 max-w-4xl relative z-10 text-center">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
            Turn your data into
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              decisions today
            </span>
</h2>
<p className="text-base md:text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto">
            Connect your tools and see your business in real time — no setup
            required.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 group">
              Start free
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
              Book a demo
            </button>
</div>
<div className="mt-12 flex items-center justify-center gap-6 opacity-40 grayscale mix-blend-screen scale-75 md:scale-100">
<iconify-icon className="text-white" icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:shopify" width="80"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:segment" width="80"></iconify-icon>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 lg:pt-20 pb-12">
<div className="container mx-auto px-4 lg:px-12 max-w-7xl">
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-16">

<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex shadow-emerald-500/20 text-white bg-emerald-950 w-8 h-8 rounded-lg shadow-sm items-center justify-center">
<iconify-icon icon="solar:database-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900 tracking-tight" onclick="window.location.href='/home'" role="button">
                  Dayta
                </span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Dayta is a real-time analytics platform that connects your
                product, revenue, and customer data into one powerful decision
                engine.
              </p>
<div className="flex gap-4 mt-6 text-slate-400">
<a className="hover:text-emerald-600 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="hover:text-emerald-600 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="20"></iconify-icon>
</a>
<a className="hover:text-emerald-600 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-bold text-slate-900 mb-4" onclick="window.location.href='/product'" role="button">
                Product
              </h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Integration
                  </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="/pricing">
                    Pricing
                  </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Automations
                  </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Enterprise
                  </a>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold text-slate-900 text-sm mb-4">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Blog
                  </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Careers
                  </a>
</li>
<li className="">
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>

<div className="col-span-2 md:col-span-1">
<h4 className="font-bold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                    Terms
                  </a>
</li>
<li className=""></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="text-xs text-slate-400">
              © 2024 Dayta Inc. All rights reserved.
            </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-500">
                All systems operational
              </span>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
