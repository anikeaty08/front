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



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('invisible', 'opacity-0', 'scale-y-0');
                mobileMenu.classList.add('opacity-100', 'scale-y-100');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                mobileMenu.classList.add('invisible', 'opacity-0', 'scale-y-0');
                mobileMenu.classList.remove('opacity-100', 'scale-y-100');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('border-slate-200/60', 'border-slate-200');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('border-slate-200', 'border-slate-200/60');
            }
        });

        // Pricing Toggle Visual
        const toggleBtn = document.getElementById('billing-toggle');
        const toggleThumb = document.getElementById('billing-toggle-thumb');
        const textMonthly = document.getElementById('billing-monthly');
        const textAnnually = document.getElementById('billing-annually');
        let isAnnual = false;

        toggleBtn.addEventListener('click', () => {
            isAnnual = !isAnnual;
            if (isAnnual) {
                toggleBtn.classList.replace('bg-slate-200', 'bg-emerald-500');
                toggleThumb.classList.add('translate-x-5');
                textMonthly.classList.replace('text-slate-900', 'text-slate-500');
                textAnnually.classList.replace('text-slate-500', 'text-slate-900');
            } else {
                toggleBtn.classList.replace('bg-emerald-500', 'bg-slate-200');
                toggleThumb.classList.remove('translate-x-5');
                textMonthly.classList.replace('text-slate-500', 'text-slate-900');
                textAnnually.classList.replace('text-slate-900', 'text-slate-500');
            }
        });
    
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-2 cursor-pointer group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:shadow-md group-hover:shadow-emerald-500/30 transition-all duration-300 group-active:scale-95">
<iconify-icon className="text-xl" icon="solar:football-linear"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-900 tracking-tighter">TALENT</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" href="#prospects">Prospects</a>
<a className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">

<div className="relative group hidden md:block">
<button className="flex items-center gap-1 p-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors">
                        EN
                        <iconify-icon className="text-xs transition-transform duration-300 group-hover:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute right-0 top-full mt-1 w-32 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
<div className="py-1">
<a className="flex items-center justify-between px-4 py-2 text-sm text-slate-900 bg-slate-50/50" href="#">
                                English
                                <iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</a>
<a className="block px-4 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">Español</a>
<a className="block px-4 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">Français</a>
</div>
</div>
</div>
<button className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors active:scale-95 shadow-sm">
                    Sign In
                </button>

<button className="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg origin-top scale-y-0 opacity-0 invisible transition-all duration-300 ease-in-out" id="mobile-menu">
<div className="p-6 flex flex-col gap-6">
<div className="flex flex-col gap-4 text-base font-medium text-slate-600">
<a className="mobile-link hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="mobile-link hover:text-slate-900 transition-colors" href="#prospects">Prospects</a>
<a className="mobile-link hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-500">Language</span>
<div className="flex gap-2 bg-slate-50 p-1 rounded-lg border border-slate-200/60">
<button className="px-3 py-1 text-xs font-medium bg-white shadow-sm border border-slate-200 rounded text-slate-900">EN</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">ES</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">FR</button>
</div>
</div>
<button className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-xl bg-slate-900 text-white active:scale-95 transition-transform">
                    Sign In
                </button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden bg-white border-b border-slate-200/50">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm hover:border-slate-300 transition-colors cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Live Global Database Updated
                        <iconify-icon className="text-slate-400 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h1 className="text-5xl lg:text-6xl leading-[1.1] font-medium text-slate-900 tracking-tight mb-6">
                        Discover the next generation of <br className="hidden lg:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 relative">
                            football talent.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="text-base md:text-lg text-slate-500 mb-8 max-w-lg leading-relaxed font-normal">
                        Identify elite prospects before the competition. Our advanced analytics and global scouting network bring the world's best hidden talents directly to your dashboard.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 transition-all duration-300 group">
                            Start Scouting Free
                            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-300 group">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Demo
                        </button>
</div>
</div>

<div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
<div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200 transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 ease-out flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')]">

<div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border border-slate-100 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-slate-100 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center animate-pulse">
<iconify-icon className="text-2xl text-emerald-500" icon="solar:radar-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-[25%] left-[20%] group-hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 relative">
<iconify-icon className="text-emerald-600" icon="solar:user-linear"></iconify-icon>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100 tracking-tight">ST • 88</div>
</div>
</div>
<div className="absolute bottom-[30%] right-[25%] group-hover:-translate-y-2 transition-transform duration-500 ease-out delay-75">
<div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 relative">
<span className="text-xs font-medium text-slate-900 tracking-tighter">92 PAC</span>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-200 tracking-tight">RW • 19y</div>
</div>
</div>
<div className="absolute top-[40%] right-[15%] group-hover:-translate-y-2 transition-transform duration-500 ease-out delay-150">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 relative">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 25 30 L 50 50 L 75 60" fill="none" stroke="#10b981" stroke-dasharray="2 2" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Advanced Analytics Ecosystem</h2>
<p className="text-slate-500 text-sm md:text-base font-normal">Everything you need to identify, evaluate, and track elite talent across the globe in one unified workspace.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
<iconify-icon className="text-xl text-slate-600 group-hover:text-emerald-600 transition-colors" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900">Predictive Modeling</h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">Proprietary algorithms project player development trajectories based on thousands of historical data points.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
<iconify-icon className="text-xl text-slate-600 group-hover:text-emerald-600 transition-colors" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900">Global Network</h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">Access live data from over 150 leagues worldwide. Instantly filter by region, contract status, and specific physical traits.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
<iconify-icon className="text-xl text-slate-600 group-hover:text-emerald-600 transition-colors" icon="solar:video-frame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900">Video Integration</h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">Seamlessly watch tagged events directly linked to stats. Evaluate decision-making and off-the-ball movement instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white border-y border-slate-200/50" id="prospects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Featured Prospects</h2>
<p className="text-sm text-slate-500 font-normal">High-potential talents identified by our algorithms this week.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors group">
                        View Database 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="h-40 bg-slate-50 relative flex items-center justify-center group-hover:bg-emerald-50/50 transition-colors border-b border-slate-100">
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white shadow-sm rounded border border-slate-200 text-[10px] font-medium tracking-tight text-slate-600 uppercase">Brazil</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 truncate">L. Ipsum</h3>
<p className="text-xs text-slate-500 mt-0.5 font-normal">CF • 19 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-900 text-sm font-medium border border-slate-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors">84</span>
</div>
<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Pace</span>
<span className="text-slate-900 font-medium">88</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[88%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Shooting</span>
<span className="text-slate-900 font-medium">79</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[79%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Passing</span>
<span className="text-slate-900 font-medium">72</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-400 rounded-full w-[72%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Dribbling</span>
<span className="text-slate-900 font-medium">85</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="h-40 bg-slate-50 relative flex items-center justify-center group-hover:bg-emerald-50/50 transition-colors border-b border-slate-100">
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white shadow-sm rounded border border-slate-200 text-[10px] font-medium tracking-tight text-slate-600 uppercase">France</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 truncate">D. Sit Amet</h3>
<p className="text-xs text-slate-500 mt-0.5 font-normal">CDM • 21 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-900 text-sm font-medium border border-slate-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors">81</span>
</div>
<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Defending</span>
<span className="text-slate-900 font-medium">83</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[83%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Physical</span>
<span className="text-slate-900 font-medium">87</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[87%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Passing</span>
<span className="text-slate-900 font-medium">78</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-400 rounded-full w-[78%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Pace</span>
<span className="text-slate-900 font-medium">68</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full w-[68%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="h-40 bg-slate-50 relative flex items-center justify-center group-hover:bg-emerald-50/50 transition-colors border-b border-slate-100">
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white shadow-sm rounded border border-slate-200 text-[10px] font-medium tracking-tight text-slate-600 uppercase">Spain</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 truncate">C. Adipiscing</h3>
<p className="text-xs text-slate-500 mt-0.5 font-normal">CM • 18 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-900 text-sm font-medium border border-slate-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors">79</span>
</div>
<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Passing</span>
<span className="text-slate-900 font-medium">86</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[86%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Vision</span>
<span className="text-slate-900 font-medium">84</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[84%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Dribbling</span>
<span className="text-slate-900 font-medium">80</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-400 rounded-full w-[80%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Defending</span>
<span className="text-slate-900 font-medium">65</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full w-[65%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col">
<div className="h-40 bg-slate-50 relative flex items-center justify-center group-hover:bg-emerald-50/50 transition-colors border-b border-slate-100">
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-1 bg-white shadow-sm rounded border border-slate-200 text-[10px] font-medium tracking-tight text-slate-600 uppercase">England</div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-base font-medium tracking-tight text-slate-900 truncate">E. Eiusmod</h3>
<p className="text-xs text-slate-500 mt-0.5 font-normal">CB • 20 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-900 text-sm font-medium border border-slate-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors">82</span>
</div>
<div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-auto">
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Defending</span>
<span className="text-slate-900 font-medium">85</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Physical</span>
<span className="text-slate-900 font-medium">86</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[86%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Pace</span>
<span className="text-slate-900 font-medium">75</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-teal-400 rounded-full w-[75%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1.5 uppercase tracking-tight">
<span className="text-slate-500 font-medium">Passing</span>
<span className="text-slate-900 font-medium">69</span>
</div>
<div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full w-[69%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Scouting Plans</h2>
<p className="text-slate-500 text-sm md:text-base font-normal">Choose the perfect tier for your operation, from independent scouts to top-flight technical directors.</p>

<div className="mt-8 flex items-center justify-center gap-4">
<span className="text-sm font-medium text-slate-500" id="billing-monthly">Monthly</span>
<button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" id="billing-toggle" role="switch" type="button">
<span aria-hidden="true" className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" id="billing-toggle-thumb"></span>
</button>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1.5" id="billing-annually">
                            Annually 
                            <span className="text-[10px] py-0.5 px-1.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium tracking-tight">-20%</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-colors duration-300 flex flex-col h-full">
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900">Starter</h3>
<p className="text-xs text-slate-500 mb-6 font-normal">For individual scouts and local agencies.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tight font-medium text-slate-900">$49</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 font-normal flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Access to 3 regional databases</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Basic predictive models</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Up to 100 saved profiles</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-slate-200 font-medium text-sm text-slate-900 hover:bg-slate-50 active:scale-95 transition-all duration-300 mt-auto">Get Started</button>
</div>

<div className="p-8 rounded-3xl border-2 border-slate-900 bg-white relative shadow-xl shadow-slate-200/50 transform lg:-translate-y-4 flex flex-col h-full z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-full tracking-tight shadow-sm">Most Popular</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900">Professional</h3>
<p className="text-xs text-slate-500 mb-6 font-normal">For professional clubs and mid-size agencies.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tight font-medium text-slate-900">$199</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 font-normal flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Full global database access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Advanced AI projections &amp; comparisons</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Unlimited saved profiles</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>10 hours of video integration /mo</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 active:scale-95 transition-all duration-300 shadow-sm mt-auto">Start Free Trial</button>
</div>

<div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-colors duration-300 flex flex-col h-full">
<h3 className="text-lg font-medium tracking-tight mb-2 text-slate-900">Enterprise</h3>
<p className="text-xs text-slate-500 mb-6 font-normal">Custom solutions for top tier organizations.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tight font-medium text-slate-900">Custom</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 font-normal flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Everything in Professional</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Full API Access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Dedicated account manager</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom data source integration</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-slate-200 font-medium text-sm text-slate-900 hover:bg-slate-50 active:scale-95 transition-all duration-300 mt-auto">Contact Sales</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-white">
<iconify-icon className="text-base" icon="solar:football-linear"></iconify-icon>
</div>
<span className="text-base tracking-tighter font-medium text-slate-900">TALENT</span>
</div>
<div className="text-xs text-slate-500 font-normal">
                © 2024 Talent Scouting Platform. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:figma-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
