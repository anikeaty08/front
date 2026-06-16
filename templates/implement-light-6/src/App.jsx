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



        // Theme Toggle
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // Language Switcher Toggle
        const langBtn = document.getElementById('lang-btn');
        const langMenu = document.getElementById('lang-menu');
        
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', () => {
            if (!langMenu.classList.contains('hidden')) {
                langMenu.classList.add('hidden');
            }
        });

        // Mobile Navigation Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = mobileBtn.querySelector('iconify-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMobileMenu() {
            const isExpanded = !mobileMenu.classList.contains('translate-x-full');
            if (isExpanded) {
                mobileMenu.classList.add('translate-x-full');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.remove('translate-x-full');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            }
        }

        mobileBtn.addEventListener('click', toggleMobileMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });

        // Pricing Toggle Logic
        let isAnnual = false;
        const btnMonthly = document.getElementById('btn-monthly');
        const btnAnnually = document.getElementById('btn-annually');
        const slider = document.getElementById('pricing-slider');
        const priceVals = document.querySelectorAll('.price-val');

        function updatePricing() {
            if (isAnnual) {
                slider.style.transform = 'translateX(100%)';
                btnAnnually.classList.replace('text-slate-500', 'text-slate-900');
                btnAnnually.classList.replace('dark:text-slate-400', 'dark:text-white');
                btnMonthly.classList.replace('text-slate-900', 'text-slate-500');
                btnMonthly.classList.replace('dark:text-white', 'dark:text-slate-400');
                priceVals.forEach(val => val.textContent = val.getAttribute('data-annual'));
            } else {
                slider.style.transform = 'translateX(0)';
                btnMonthly.classList.replace('text-slate-500', 'text-slate-900');
                btnMonthly.classList.replace('dark:text-slate-400', 'dark:text-white');
                btnAnnually.classList.replace('text-slate-900', 'text-slate-500');
                btnAnnually.classList.replace('dark:text-white', 'dark:text-slate-400');
                priceVals.forEach(val => val.textContent = val.getAttribute('data-monthly'));
            }
        }

        btnMonthly.addEventListener('click', () => { isAnnual = false; updatePricing(); });
        btnAnnually.addEventListener('click', () => { isAnnual = true; updatePricing(); });

        // Intersection Observer for Stat Bars Animation
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-width');
                    }, 100);
                    statObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-bar').forEach(bar => {
            statObserver.observe(bar);
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('border-transparent', 'border-slate-200/50');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-white/5 transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-teal-600 flex items-center justify-center text-white shadow-sm group-hover:shadow-emerald-500/25 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:football-linear"></iconify-icon>
</div>
<span className="dark:text-white text-lg font-medium text-slate-900 tracking-tighter">TALENT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#prospects">Prospects</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">

<div className="relative hidden sm:block" id="lang-switcher">
<button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-500 dark:text-slate-400 flex items-center gap-1 group" id="lang-btn">
<iconify-icon className="text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors" icon="solar:global-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide">EN</span>
</button>
<div className="hidden absolute top-full right-0 mt-2 w-32 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/50 dark:border-white/10 py-1 origin-top-right transition-all transform z-50" id="lang-menu">
<a className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">English</a>
<a className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Español</a>
<a className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Português</a>
</div>
</div>
<button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-500 dark:text-slate-400 flex items-center justify-center group" id="theme-toggle">
<iconify-icon className="dark:hidden block text-lg group-hover:text-slate-900 transition-colors" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg group-hover:text-white transition-colors" icon="solar:sun-linear"></iconify-icon>
</button>
<button className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity active:scale-95 shadow-sm">
                    Sign In
                </button>

<button className="md:hidden p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-500 dark:text-slate-400 flex items-center justify-center z-50 relative" id="mobile-menu-btn">
<iconify-icon className="text-xl transition-transform duration-300" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-500 ease-[0.16,1,0.3,1] flex flex-col pt-24 px-6 md:hidden" id="mobile-menu">
<div className="flex flex-col gap-6">
<a className="mobile-link text-2xl font-medium tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/5 pb-4" href="#features">Features</a>
<a className="mobile-link text-2xl font-medium tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/5 pb-4" href="#prospects">Prospects</a>
<a className="mobile-link text-2xl font-medium tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/5 pb-4" href="#pricing">Pricing</a>
<div className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-white/5">
<span className="text-base font-medium text-slate-500">Language</span>
<div className="flex gap-4">
<span className="text-sm font-medium text-emerald-500 cursor-pointer">EN</span>
<span className="text-sm font-medium text-slate-400 cursor-pointer">ES</span>
<span className="text-sm font-medium text-slate-400 cursor-pointer">PT</span>
</div>
</div>
</div>
<button className="mt-auto mb-12 w-full py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm hover:opacity-90 transition-opacity active:scale-95 shadow-lg shadow-slate-900/10 dark:shadow-white/10">
            Sign In to Dashboard
        </button>
</div>
<main className="flex-grow pt-16">

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.25] dark:opacity-[0.05]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-8 border border-emerald-100 dark:border-emerald-500/20 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Live Global Database Updated
                    </div>
<h1 className="animate-fade-in-up delay-100 md:text-5xl lg:text-6xl leading-[1.15] dark:text-white text-4xl font-medium text-slate-900 tracking-tight mb-6">
                        Discover the next generation of <br className="hidden lg:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300">football talent.</span>
</h1>
<p className="animate-fade-in-up delay-200 text-base text-slate-500 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
                        Leverage predictive AI and comprehensive global data to identify high-potential prospects before the competition. Designed for modern scouting departments.
                    </p>
<div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-white/10 transition-all duration-300 active:scale-95">
                            Start Scouting
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 active:scale-95 group">
<iconify-icon className="text-lg text-slate-400 group-hover:text-emerald-500 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Platform Demo
                        </button>
</div>
</div>

<div className="animate-fade-in-up delay-300 relative w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-3xl blur-3xl transform group-hover:scale-110 transition-transform duration-1000"></div>
<div className="relative w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 ease-[0.16,1,0.3,1] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950">

<div className="absolute inset-6 border border-slate-700/50 rounded-sm opacity-50"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-700/50 -translate-x-1/2 opacity-50"></div>
<div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-slate-700/50 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

<div className="absolute top-[25%] left-[20%] w-10 h-10 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-white/10 animate-float cursor-pointer hover:bg-white/20 transition-colors">
<iconify-icon className="text-emerald-400" icon="solar:user-linear"></iconify-icon>
</div>

<div className="absolute bottom-[25%] right-[15%] bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl animate-float-delayed">
<div className="flex items-center gap-3 mb-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[10px] font-medium text-white">88</div>
<div className="text-xs font-medium text-slate-200">Proj. Rating</div>
</div>
<div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[88%] shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
</div>
</div>
<div className="absolute top-[40%] right-[30%] w-8 h-8 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-white/10 animate-float-fast">
<iconify-icon className="text-amber-400" icon="solar:star-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-white/5 relative z-20" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">Intelligence Ecosystem</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-light">A unified platform integrating disparate data sources into actionable scouting insights.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-none transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 dark:group-hover:from-emerald-500/10 transition-colors duration-500 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-lg text-emerald-500 dark:text-emerald-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Predictive Modeling</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">Machine learning algorithms forecast career trajectories based on historical benchmark data.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-none transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 dark:group-hover:from-teal-500/10 transition-colors duration-500 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-lg text-teal-500 dark:text-teal-400" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Global Network</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">Access real-time match data across 100+ professional and youth leagues worldwide.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-none transition-all duration-500 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 dark:group-hover:from-indigo-500/10 transition-colors duration-500 pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-lg text-indigo-500 dark:text-indigo-400" icon="solar:video-frame-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-slate-900 dark:text-white">Video Sync</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">Contextualize data points with auto-clipped match footage linked directly to event timelines.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-50 dark:bg-slate-950" id="prospects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">Algorithm Highlights</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 font-light">High-growth prospects flagged by our system this week.</p>
</div>
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                        Explore Database <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-2xl dark:hover:shadow-black/50 cursor-pointer flex flex-col relative">
<div className="h-40 bg-slate-100 dark:bg-slate-800/50 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 dark:group-hover:from-emerald-500/20 dark:group-hover:to-teal-500/20 transition-colors duration-500"></div>
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-600 group-hover:scale-110 group-hover:text-emerald-500/40 transition-all duration-500 relative z-10" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded text-xs font-medium tracking-wide text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 uppercase shadow-sm">BRA</div>
</div>
<div className="p-5 flex-grow flex flex-col bg-white dark:bg-slate-900">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white truncate">L. Silva</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-light">CF • 19 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-500/20 shadow-sm">84</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-auto">
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Pace</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">88</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-0 transition-all duration-1000 ease-out stat-bar" data-width="88%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Shooting</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">79</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full opacity-80 w-0 transition-all duration-1000 ease-out delay-100 stat-bar" data-width="79%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">72</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-teal-400 rounded-full opacity-70 w-0 transition-all duration-1000 ease-out delay-200 stat-bar" data-width="72%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Dribbling</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">85</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-0 transition-all duration-1000 ease-out delay-300 stat-bar" data-width="85%"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-2xl dark:hover:shadow-black/50 cursor-pointer flex flex-col relative">
<div className="h-40 bg-slate-100 dark:bg-slate-800/50 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 dark:group-hover:from-blue-500/20 dark:group-hover:to-indigo-500/20 transition-colors duration-500"></div>
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-600 group-hover:scale-110 group-hover:text-blue-500/40 transition-all duration-500 relative z-10" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded text-xs font-medium tracking-wide text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 uppercase shadow-sm">FRA</div>
</div>
<div className="p-5 flex-grow flex flex-col bg-white dark:bg-slate-900">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white truncate">M. Dubois</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-light">CDM • 21 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-500/20 shadow-sm">81</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-auto">
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Defending</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">83</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full w-0 transition-all duration-1000 ease-out stat-bar" data-width="83%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Physical</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">87</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full w-0 transition-all duration-1000 ease-out delay-100 stat-bar" data-width="87%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">78</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-400 rounded-full opacity-80 w-0 transition-all duration-1000 ease-out delay-200 stat-bar" data-width="78%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Pace</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">68</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full w-0 transition-all duration-1000 ease-out delay-300 stat-bar" data-width="68%"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-2xl dark:hover:shadow-black/50 cursor-pointer flex flex-col relative hidden md:flex">
<div className="h-40 bg-slate-100 dark:bg-slate-800/50 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 dark:group-hover:from-amber-500/20 dark:group-hover:to-orange-500/20 transition-colors duration-500"></div>
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-600 group-hover:scale-110 group-hover:text-amber-500/40 transition-all duration-500 relative z-10" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded text-xs font-medium tracking-wide text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 uppercase shadow-sm">ESP</div>
</div>
<div className="p-5 flex-grow flex flex-col bg-white dark:bg-slate-900">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white truncate">P. Garcia</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-light">CM • 18 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-100 dark:border-amber-500/20 shadow-sm">79</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-auto">
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">86</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 rounded-full w-0 transition-all duration-1000 ease-out stat-bar" data-width="86%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Vision</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">84</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full opacity-90 w-0 transition-all duration-1000 ease-out delay-100 stat-bar" data-width="84%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Dribbling</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">80</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-400 rounded-full opacity-80 w-0 transition-all duration-1000 ease-out delay-200 stat-bar" data-width="80%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Defending</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">65</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full w-0 transition-all duration-1000 ease-out delay-300 stat-bar" data-width="65%"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-2xl dark:hover:shadow-black/50 cursor-pointer flex flex-col relative hidden lg:flex">
<div className="h-40 bg-slate-100 dark:bg-slate-800/50 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/10 group-hover:to-pink-500/10 dark:group-hover:from-rose-500/20 dark:group-hover:to-pink-500/20 transition-colors duration-500"></div>
<iconify-icon className="text-5xl text-slate-300 dark:text-slate-600 group-hover:scale-110 group-hover:text-rose-500/40 transition-all duration-500 relative z-10" icon="solar:user-linear"></iconify-icon>
<div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded text-xs font-medium tracking-wide text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 uppercase shadow-sm">ENG</div>
</div>
<div className="p-5 flex-grow flex flex-col bg-white dark:bg-slate-900">
<div className="flex justify-between items-start mb-5">
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 dark:text-white truncate">J. Smith</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-light">CB • 20 yrs</p>
</div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium border border-rose-100 dark:border-rose-500/20 shadow-sm">82</span>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-auto">
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Defending</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">85</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-400 rounded-full w-0 transition-all duration-1000 ease-out stat-bar" data-width="85%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Physical</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">86</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 rounded-full opacity-90 w-0 transition-all duration-1000 ease-out delay-100 stat-bar" data-width="86%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Pace</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">75</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-400 rounded-full opacity-70 w-0 transition-all duration-1000 ease-out delay-200 stat-bar" data-width="75%"></div>
</div>
</div>
<div className="stat-container">
<div className="flex justify-between text-xs mb-1.5 tracking-tight">
<span className="text-slate-500 dark:text-slate-400">Passing</span>
<span className="text-slate-700 dark:text-slate-300 font-medium">69</span>
</div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full w-0 transition-all duration-1000 ease-out delay-300 stat-bar" data-width="69%"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">Transparent Pricing</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-light mb-8">Scale your scouting operations with flexible plans.</p>

<div className="relative inline-flex p-1 bg-slate-100 dark:bg-slate-800/50 rounded-lg items-center border border-slate-200/50 dark:border-white/5">
<div className="absolute w-1/2 h-8 bg-white dark:bg-slate-700 rounded shadow-sm transition-transform duration-300 ease-in-out left-1 border border-slate-200/50 dark:border-white/5" id="pricing-slider"></div>
<button className="relative z-10 w-28 py-1.5 text-xs font-medium text-slate-900 dark:text-white transition-colors" id="btn-monthly">Monthly</button>
<button className="relative z-10 w-28 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 transition-colors flex items-center justify-center gap-1.5" id="btn-annually">
                            Annually
                            <span className="text-[10px] py-0.5 px-1.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">-20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-950/50 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-300 relative">
<h3 className="text-base font-medium tracking-tight mb-1 text-slate-900 dark:text-white">Starter</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-light">For independent scouts.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tight font-medium text-slate-900 dark:text-white price-val" data-annual="$39" data-monthly="$49">$49</span>
<span className="text-xs text-slate-500 font-medium">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 dark:text-white text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>1 Regional Database</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 dark:text-white text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Basic Projections</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 dark:text-white text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>50 Saved Profiles</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/10 font-medium text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm active:scale-95">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-emerald-500/50 dark:border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/20 relative shadow-xl shadow-emerald-500/5 dark:shadow-none transform md:-translate-y-4 ring-1 ring-emerald-500/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-medium rounded uppercase tracking-wider shadow-sm">Popular</div>
<h3 className="text-base font-medium tracking-tight mb-1 text-slate-900 dark:text-white">Professional</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-light">For clubs and agencies.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tight font-medium text-slate-900 dark:text-white price-val" data-annual="$159" data-monthly="$199">$199</span>
<span className="text-xs text-slate-500 font-medium">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-300 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Global Database Access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Advanced AI Projections</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Unlimited Profiles</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Video Synchronization</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm hover:opacity-90 transition-opacity shadow-sm active:scale-95">Start Trial</button>
</div>

<div className="p-8 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-950/50 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-300 relative">
<h3 className="text-base font-medium tracking-tight mb-1 text-slate-900 dark:text-white">Enterprise</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-light">Custom architecture.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl tracking-tight font-medium text-slate-900 dark:text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Everything in Professional</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>API Access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Dedicated Account Manager</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/10 font-medium text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm active:scale-95">Contact Sales</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-white/5 py-10 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 transition-opacity">
<div className="w-6 h-6 rounded bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900">
<iconify-icon className="text-sm" icon="solar:football-linear"></iconify-icon>
</div>
<span className="text-sm tracking-tighter font-medium text-slate-900 dark:text-white">TALENT</span>
</div>
<div className="text-xs font-light text-slate-500 dark:text-slate-500">
                © 2024 Talent Scouting. All rights reserved.
            </div>
<div className="flex gap-5">
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:figma-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
