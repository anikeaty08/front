import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
dark: '#050505',
card: '#0A0A0A'
}
}
}
}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();
// Theme Toggle Script
function toggleTheme() {
const html = document.documentElement;
if (html.classList.contains('dark')) {
html.classList.remove('dark');
localStorage.theme = 'light';
} else {
html.classList.add('dark');
localStorage.theme = 'dark';
}
}
// Check for saved theme preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-tr from-red-600 to-red-400">
<svg className="lucide lucide-network text-white w-4 h-4" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<span className="text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors font-sans font-medium dark:font-light">ApexNeural</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-500 dark:text-gray-400">
<a className="hover:text-black dark:hover:text-white transition-colors font-sans font-normal dark:font-light" href="#">Solutions</a>
<a className="hover:text-black dark:hover:text-white transition-colors font-sans font-normal dark:font-light" href="#">Consulting</a>
<a className="hover:text-black dark:hover:text-white transition-colors font-sans font-normal dark:font-light" href="#">Ecosystems</a>
<a className="hover:text-black dark:hover:text-white transition-colors font-sans font-normal dark:font-light" href="#">Research</a>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" onclick="toggleTheme()">
<svg className="w-5 h-5 hidden dark:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="w-5 h-5 block dark:hidden" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<button className="bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs px-4 py-2 rounded-full transition-all font-sans font-medium dark:font-light">
                    Client Portal
                </button>
</div>
</div>
</nav>

<section className="overflow-hidden min-h-screen flex flex-col pt-32 pb-20 relative items-center justify-start">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-red-500/10 dark:bg-red-600/20 blur-[120px] rounded-[100%]"></div>

<div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/50 dark:via-red-500 to-transparent opacity-60"></div>
</div>
<div className="z-10 text-center max-w-5xl mt-12 mr-auto ml-auto pr-6 pl-6 relative">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll inline-flex gap-2 text-xs font-normal dark:font-light text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                ApexNeural Core v2.0 is live
            </div>
<h1 className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll leading-[1.1] md:text-7xl lg:text-8xl text-5xl text-gray-900 dark:text-white tracking-tighter font-manrope mb-8 font-semibold dark:font-normal">Creating latest solutions that redefine innovation.<br/> </h1>
<p className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll md:text-xl leading-relaxed text-lg font-normal dark:font-light text-gray-500 dark:text-gray-400 max-w-2xl mr-auto mb-10 ml-auto">Stay ahead with AI-powered technology for the future.</p>
<div className="[animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3 bg-gradient-to-b from-red-600 to-red-700 dark:from-red-500 dark:to-red-700 rounded-full text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(220,38,38,0.3)] dark:shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] dark:hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.6)] transition-all overflow-hidden">
<div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full"></div>
<span className="flex items-center gap-2 font-normal dark:font-light relative">Discover Our Solutions <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
<button className="hover:text-black dark:hover:text-white transition-colors text-sm font-normal dark:font-light text-gray-500 dark:text-gray-400 pt-3 pr-8 pb-3 pl-8">Learn more</button>
</div>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll relative z-10 w-full max-w-5xl mx-auto mt-20 px-4">

<div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-[#0A0A0A]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-red-900/10">

<div className="grid grid-cols-4 px-6 py-4 border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
<div className="text-xs text-gray-500 uppercase font-sans font-medium dark:font-light">Module</div>
<div className="text-xs text-gray-500 uppercase text-right font-sans font-medium dark:font-light">Throughput</div>
<div className="text-xs text-gray-500 uppercase text-right font-sans font-medium dark:font-light">Status</div>
<div className="text-xs text-gray-500 uppercase text-right font-sans font-medium dark:font-light">Efficiency</div>
</div>

<div className="divide-y divide-gray-200 dark:divide-white/5">

<div className="grid grid-cols-4 px-6 py-5 group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
<svg className="lucide lucide-cloud w-4 h-4 text-sky-600 dark:text-sky-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div>
<div className="text-sm text-gray-900 dark:text-white font-sans font-medium dark:font-light">Cloud Infrastructure</div>
<div className="text-xs text-gray-500 font-sans font-normal dark:font-light">AWS / Azure / Hybrid</div>
</div>
</div>
<div className="flex items-center justify-end text-sm text-gray-700 dark:text-gray-300 tabular-nums font-sans font-normal dark:font-light">14.2 TB/s</div>
<div className="flex items-center justify-end">
<span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs border border-emerald-200 dark:border-emerald-500/20 font-sans font-medium dark:font-light">Active</span>
</div>
<div className="flex items-center justify-end text-sm text-emerald-600 dark:text-emerald-400 tabular-nums font-sans font-normal dark:font-light">99.9%</div>
</div>

<div className="grid grid-cols-4 px-6 py-5 group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
<svg className="lucide lucide-brain-circuit w-4 h-4 text-red-600 dark:text-red-400" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div>
<div className="text-sm text-gray-900 dark:text-white font-sans font-medium dark:font-light">Neural Processing</div>
<div className="text-xs text-gray-500 font-sans font-normal dark:font-light">Predictive Models</div>
</div>
</div>
<div className="flex items-center justify-end text-sm text-gray-700 dark:text-gray-300 tabular-nums font-sans font-normal dark:font-light">842 M ops</div>
<div className="flex items-center justify-end">
<span className="px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs border border-red-200 dark:border-red-500/20 font-sans font-medium dark:font-light">Learning</span>
</div>
<div className="flex items-center justify-end text-sm text-red-600 dark:text-red-400 tabular-nums font-sans font-normal dark:font-light">94.2%</div>
</div>

<div className="grid grid-cols-4 px-6 py-5 group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
<svg className="lucide lucide-shield-check w-4 h-4 text-purple-600 dark:text-purple-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm text-gray-900 dark:text-white font-sans font-medium dark:font-light">Security Layer</div>
<div className="text-xs text-gray-500 font-sans font-normal dark:font-light">Zero Trust Architecture</div>
</div>
</div>
<div className="flex items-center justify-end text-sm text-gray-700 dark:text-gray-300 tabular-nums font-sans font-normal dark:font-light">0.02 ms</div>
<div className="flex items-center justify-end">
<span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs border border-emerald-200 dark:border-emerald-500/20 font-sans font-medium dark:font-light">Secured</span>
</div>
<div className="flex items-center justify-end text-sm text-emerald-600 dark:text-emerald-400 tabular-nums font-sans font-normal dark:font-light">100%</div>
</div>

<div className="grid grid-cols-4 px-6 py-5 group hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
<svg className="lucide lucide-users w-4 h-4 text-orange-600 dark:text-orange-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-sm text-gray-900 dark:text-white font-sans font-medium dark:font-light">Strategic Talent</div>
<div className="text-xs text-gray-500 font-sans font-normal dark:font-light">Resource Allocation</div>
</div>
</div>
<div className="flex items-center justify-end text-sm text-gray-700 dark:text-gray-300 tabular-nums font-sans font-normal dark:font-light">Global</div>
<div className="flex items-center justify-end">
<span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs border border-emerald-200 dark:border-emerald-500/20 font-sans font-medium dark:font-light">Deployed</span>
</div>
<div className="flex items-center justify-end text-sm text-emerald-600 dark:text-emerald-400 tabular-nums font-sans font-normal dark:font-light">98.5%</div>
</div>
</div>

<div className="px-6 py-4 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/5 flex justify-between items-center">
<span className="text-xs text-gray-500 font-sans font-normal dark:font-light">Real-time system monitoring</span>
<div className="flex gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></div>
<div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
<div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-sm text-gray-500 mb-8 font-sans font-normal dark:font-light">Trusted by innovative leaders worldwide</p>
<div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
<svg className="lucide lucide-hexagon w-6 h-6 fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> <span className="font-sans font-normal dark:font-light">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
<svg className="lucide lucide-triangle w-6 h-6 fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> <span className="font-sans font-normal dark:font-light">DeltaSystems</span>
</div>
<div className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
<svg className="lucide lucide-circle w-6 h-6 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> <span className="font-sans font-normal dark:font-light">OrbitFinance</span>
</div>
<div className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
<svg className="lucide lucide-square w-6 h-6 fill-current" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> <span className="font-sans font-normal dark:font-light">BlockChain</span>
</div>
<div className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
<svg className="lucide lucide-zap w-6 h-6 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="font-sans font-normal dark:font-light">EnergyX</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 dark:via-red-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl md:text-5xl text-gray-900 dark:text-white mb-6 font-manrope tracking-tighter font-semibold dark:font-medium">Built for the <span className="text-red-600 dark:text-red-500 font-manrope tracking-tighter">Intelligent Future</span></h2>
<p className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-lg text-gray-500 dark:text-gray-400 max-w-xl font-sans font-normal dark:font-light">
                    Our transformative ecosystems are designed to solve complex challenges in Healthcare, Finance, and Manufacturing.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll group relative bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-20 dark:opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500">
<div className="w-32 h-32 bg-red-600 blur-[60px] rounded-full"></div>
</div>
<div className="h-12 w-12 rounded-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 group-hover:border-red-500/30 transition-colors shadow-sm dark:shadow-none">
<svg className="lucide lucide-server" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 className="text-xl text-gray-900 dark:text-white mb-3 font-sans font-medium dark:font-light">Cloud Platforms</h3>
<p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-sans font-normal dark:font-light">
                        Scalable architecture that adapts to your business needs. We deploy resilient cloud foundations ensuring 99.99% uptime.
                    </p>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll group relative bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-20 dark:opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500">
<div className="w-32 h-32 bg-red-600 blur-[60px] rounded-full"></div>
</div>
<div className="h-12 w-12 rounded-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 group-hover:border-red-500/30 transition-colors shadow-sm dark:shadow-none">
<svg className="lucide lucide-cpu" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl text-gray-900 dark:text-white mb-3 font-sans font-medium dark:font-light">Advanced AI Solutions</h3>
<p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-sans font-normal dark:font-light">
                        Proprietary neural networks and predictive modeling to automate decision-making and unlock data value.
                    </p>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll group relative bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-20 dark:opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500">
<div className="w-32 h-32 bg-red-600 blur-[60px] rounded-full"></div>
</div>
<div className="h-12 w-12 rounded-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 group-hover:border-red-500/30 transition-colors shadow-sm dark:shadow-none">
<svg className="lucide lucide-users" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl text-gray-900 dark:text-white mb-3 font-sans font-medium dark:font-light">Strategic Talent</h3>
<p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-sans font-normal dark:font-light">
                        Access a global network of specialized consultants. We embed experts into your teams to drive cultural and technical shifts.
                    </p>
</div>
</div>

<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll mt-6 group relative bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 rounded-2xl p-8 md:p-12 hover:border-red-500/30 transition-colors overflow-hidden flex flex-col md:flex-row items-center gap-12">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/5 dark:bg-red-900/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs mb-6 font-sans font-medium dark:font-light">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Consultative Approach
                    </div>
<h3 className="text-3xl text-gray-900 dark:text-white mb-4 font-manrope tracking-tighter font-semibold dark:font-medium">Prioritizing Strategy Above All Else</h3>
<p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 font-sans font-normal dark:font-light">
                        We don't just deliver code; we deliver outcomes. Our customer-first methodology ensures that every technological implementation maps directly to a KPI improvement.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-sans font-normal dark:font-light">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-red-600 dark:text-red-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Bespoke roadmaps for every client
                        </li>
<li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-sans font-normal dark:font-light">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-red-600 dark:text-red-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Regulatory compliance automation
                        </li>
<li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-sans font-normal dark:font-light">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-red-600 dark:text-red-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 24/7 Strategic advisory support
                        </li>
</ul>
</div>
<div className="flex-1 w-full relative">

<div className="relative w-full aspect-square md:aspect-video rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-100/50 dark:from-red-900/20 to-transparent"></div>
<div className="relative z-10 text-center">
<div className="text-5xl text-gray-900 dark:text-white mb-2 font-manrope tracking-tighter font-bold dark:font-normal">84%</div>
<div className="text-sm text-gray-500 uppercase font-sans font-medium dark:font-light">Efficiency Gain</div>
</div>

<div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
<div className="absolute top-10 left-1/2 w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] dark:shadow-[0_0_15px_red]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-20 pb-10 overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none">
<div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-red-500/10 dark:bg-red-600/30 blur-[100px] rounded-[100%]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-20">
<h2 className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-3xl md:text-5xl text-gray-900 dark:text-white mb-6 font-manrope tracking-tighter font-semibold dark:font-medium">Explore Our <span className="text-red-600 dark:text-red-500 font-manrope tracking-tighter">Community</span></h2>
<p className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-lg text-gray-500 dark:text-gray-400 mb-10 font-sans font-normal dark:font-light">
                Join thousands of industry leaders leveraging ApexNeural for their next breakthrough.
            </p>
<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll flex justify-center gap-6">
<a className="p-4 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:border-red-300 dark:hover:border-red-500/50 hover:text-red-600 dark:hover:text-red-400 transition-all text-gray-600 dark:text-white" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-4 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:border-red-300 dark:hover:border-red-500/50 hover:text-red-600 dark:hover:text-red-400 transition-all text-gray-600 dark:text-white" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-4 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:border-red-300 dark:hover:border-red-500/50 hover:text-red-600 dark:hover:text-red-400 transition-all text-gray-600 dark:text-white" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<footer className="relative z-10 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#050505] pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 rounded bg-red-600"></div>
<span className="text-gray-900 dark:text-white font-sans font-medium dark:font-light">ApexNeural</span>
</div>
</div>
<div>
<h4 className="text-gray-900 dark:text-white mb-4 font-sans font-medium dark:font-light">Platform</h4>
<ul className="space-y-2 text-sm text-gray-500 font-normal dark:font-light">
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Cloud Sync</a></li>
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Neural AI</a></li>
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-gray-900 dark:text-white mb-4 font-sans font-medium dark:font-light">Company</h4>
<ul className="space-y-2 text-sm text-gray-500 font-normal dark:font-light">
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">About</a></li>
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-gray-900 dark:text-white mb-4 font-sans font-medium dark:font-light">Legal</h4>
<ul className="space-y-2 text-sm text-gray-500 font-normal dark:font-light">
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Privacy</a></li>
<li><a className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-sans" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-500 dark:text-gray-600 font-normal dark:font-light">
<p className="font-sans">© 2024 ApexNeural Inc. All rights reserved.</p>
<div className="flex gap-4">
<span className="font-sans">System Status: <span className="text-emerald-600 dark:text-emerald-500 font-sans">Operational</span></span>
</div>
</div>
</footer>
</section>


    </>
  );
}
