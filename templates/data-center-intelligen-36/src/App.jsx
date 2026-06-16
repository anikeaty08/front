import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6', // Primary Teal
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
950: '#042f2e',
},
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(20, 184, 166, 0.3)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
'inner-dark': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
}
}
}
}



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}
function toggleTheme() {
if (document.documentElement.classList.contains('dark')) {
document.documentElement.classList.remove('dark');
localStorage.theme = 'light';
} else {
document.documentElement.classList.add('dark');
localStorage.theme = 'dark';
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 transition-colors duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-3">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-gradient-to-tr from-brand-700 to-brand-500 text-white p-1.5 rounded-lg shadow-sm group-hover:shadow-glow transition-all duration-300">
<span className="iconify" data-icon="lucide:globe-2" data-strokeWidth="2" data-width="18"></span>
</div>
<span className="self-center text-sm font-bold whitespace-nowrap text-slate-900 dark:text-white tracking-tight">DC ATLAS</span>
</a>
<div className="hidden lg:flex items-center space-x-1">
<a className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="#map">Map</a>
<a className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="#data">Data</a>
<a className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="#intelligence">Intelligence</a>
<a className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="#knowledge">Knowledge</a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none" onclick="toggleTheme()">
<span className="iconify block dark:hidden" data-icon="lucide:sun" data-width="18"></span>
<span className="iconify hidden dark:block" data-icon="lucide:moon" data-width="18"></span>
</button>
<button className="text-white bg-slate-900 dark:bg-brand-500 dark:text-white hover:bg-slate-800 dark:hover:bg-brand-400 font-medium rounded-full text-xs px-4 py-2 text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" type="button">Start Analysis</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] -z-10"></div>
<div className="absolute top-0 right-0 -z-10 opacity-40 dark:opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2">
<div className="w-[800px] h-[800px] bg-brand-200 dark:bg-brand-900 rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900 text-brand-600 dark:text-brand-300 text-[10px] uppercase font-semibold tracking-wider mb-8 shadow-sm cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Live Intelligence: Q3 2023 Data Update
            </div>
<h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Global infrastructure.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-teal-400 dark:from-brand-400 dark:via-brand-300 dark:to-teal-200">Decoded &amp; Mapped.</span>
</h1>
<p className="max-w-xl text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-light">
                The operating system for the physical internet. Granular telemetry on 1,400+ data centers, fiber routes, and power capacity worldwide.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center py-3.5 px-8 text-sm font-medium text-white dark:text-slate-950 rounded-full bg-slate-900 dark:bg-brand-400 hover:bg-slate-800 dark:hover:bg-brand-300 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5" href="#map">
                    Explore the Map
                    <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="mt-16 w-full max-w-5xl perspective-[2000px]">
<div className="relative bg-slate-900 dark:bg-slate-950 rounded-xl shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(20,184,166,0.1)] border border-slate-800/50 dark:border-slate-800 p-2 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out origin-top">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none z-20"></div>
<div className="bg-slate-800/50 dark:bg-slate-900/50 h-10 rounded-t-lg flex items-center px-4 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
</div>
<div className="mx-auto text-xs font-mono text-slate-400">atlas.dc/global-view</div>
</div>
<div className="grid grid-cols-12 gap-1 p-1 h-[500px] bg-slate-950 rounded-b-lg overflow-hidden relative">
<div className="col-span-2 border-r border-white/5 p-4 hidden md:block">
<div className="space-y-4">
<div className="h-2 w-12 bg-slate-800 rounded"></div>
<div className="space-y-2">
<div className="h-8 w-full bg-brand-900/20 border-l-2 border-brand-500 bg-gradient-to-r from-brand-900/10 to-transparent"></div>
<div className="h-8 w-full hover:bg-white/5 transition-colors"></div>
<div className="h-8 w-full hover:bg-white/5 transition-colors"></div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-10 relative bg-slate-900/50">
<div className="absolute inset-0 bg-grid-dark opacity-30"></div>
<div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_#2dd4bf] animate-pulse"></div>
<div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] z-10"></div>
<div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-brand-500 rounded-full opacity-60"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 dark:bg-black text-white relative overflow-hidden" id="map">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative w-full aspect-square bg-slate-800 dark:bg-slate-900 rounded-2xl border border-slate-700 dark:border-slate-800 shadow-2xl overflow-hidden group">
<div className="absolute inset-0 bg-slate-900 dark:bg-black">
<div className="absolute inset-0 bg-grid-dark opacity-50"></div>
<svg className="absolute inset-0 w-full h-full text-slate-800 dark:text-slate-900 fill-current opacity-50" viewbox="0 0 100 100">
<path d="M10,50 Q30,30 50,50 T90,50" stroke="none"></path>
</svg>
<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-500 rounded-full shadow-[0_0_10px_#14b8a6]"></div>
<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-brand-500 rounded-full shadow-[0_0_10px_#14b8a6]"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none">
<line stroke="#14b8a6" stroke-opacity="0.3" strokeWidth="0.5" x1="25%" x2="75%" y1="25%" y2="66%"></line>
</svg>
</div>
<div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur border border-white/10 rounded-lg p-3 w-48 z-20">
<div className="text-[10px] text-slate-400 uppercase mb-2">Filter View</div>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-brand-500"></div>
<span className="text-xs text-white">&gt; 10MW Capacity</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<span className="text-xs text-slate-400">Under Construction</span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 border border-white/10">
<span className="iconify text-brand-400" data-icon="lucide:map" data-width="24"></span>
</div>
<h2 className="text-sm font-semibold text-brand-400 uppercase tracking-wide mb-3">Interactive Map</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">See every data center on the planet.</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Navigate the global data center landscape visually. Filter facilities by power capacity, operator, certifications, and dozens of other attributes. Zoom from continent-level trends down to individual building specs.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<span className="iconify text-brand-400 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-slate-300">Stop wasting hours cross-referencing spreadsheets.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-brand-400 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-slate-300">Visualize competitive landscapes instantly.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300" id="data">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide mb-3">Core Data Platform</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">The industry's source of truth.</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 lg:p-12 relative overflow-hidden group hover:border-brand-300 dark:hover:border-slate-700 transition-colors">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-lg flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400">
<span className="iconify" data-icon="lucide:database" data-width="20"></span>
</div>
<h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Facility Database</h4>
<p className="text-slate-500 dark:text-slate-400 text-lg mb-6">
                                The most comprehensive data center database available. Every facility includes power specs, building details, certifications, connectivity data, and ownership history.
                            </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">Power Capacity</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">PUE Ratings</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">Connectivity</span>
</div>
<p className="text-sm font-medium text-brand-600 dark:text-brand-400">Due diligence that used to take weeks now takes minutes.</p>
</div>
<div className="relative h-64 lg:h-full bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-4 overflow-hidden">
<div className="absolute inset-x-4 top-4 bottom-0 space-y-3">
<div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-800"></div>
<div>
<div className="h-2 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-12 bg-slate-100 dark:bg-slate-800 rounded"></div>
</div>
</div>
<div className="h-2 w-16 bg-brand-100 dark:bg-brand-900/40 rounded"></div>
</div>
<div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-800"></div>
<div>
<div className="h-2 w-32 bg-slate-200 dark:bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
</div>
</div>
<div className="h-2 w-16 bg-brand-100 dark:bg-brand-900/40 rounded"></div>
</div>
<div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-800"></div>
<div>
<div className="h-2 w-20 bg-slate-200 dark:bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-10 bg-slate-100 dark:bg-slate-800 rounded"></div>
</div>
</div>
<div className="h-2 w-16 bg-brand-100 dark:bg-brand-900/40 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:border-brand-300 dark:hover:border-slate-700 transition-colors flex flex-col">
<div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-lg flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400">
<span className="iconify" data-icon="lucide:building-2" data-width="20"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Company Intelligence</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">
                        Understand the competitive landscape. See which operators dominate which markets, track portfolio growth, and analyze ownership.
                    </p>
<div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-end gap-1 h-16 w-full px-2">
<div className="w-1/5 bg-brand-200 dark:bg-brand-900 h-[30%] rounded-t-sm"></div>
<div className="w-1/5 bg-brand-300 dark:bg-brand-800 h-[50%] rounded-t-sm"></div>
<div className="w-1/5 bg-brand-400 dark:bg-brand-700 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-brand-500 dark:bg-brand-600 h-[80%] rounded-t-sm"></div>
<div className="w-1/5 bg-brand-600 dark:bg-brand-500 h-[65%] rounded-t-sm"></div>
</div>
<p className="text-xs text-center text-slate-400 mt-2">Operator Market Share</p>
</div>
</div>

<div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:border-brand-300 dark:hover:border-slate-700 transition-colors">
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-lg flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Market Analytics</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                                Make informed decisions with comprehensive market analytics. Monitor capacity growth by region, track supply and demand dynamics, and identify emerging markets before your competitors.
                            </p>
<a className="text-brand-600 dark:text-brand-400 text-sm font-medium hover:underline" href="#">View Market Reports →</a>
</div>
<div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 p-4">

<svg className="w-full h-full text-brand-500 overflow-visible" viewbox="0 0 200 100">
<path d="M0,80 C50,80 50,40 100,40 C150,40 150,10 200,10" fill="none" stroke="currentColor" strokeWidth="3"></path>
<circle cx="0" cy="80" fill="currentColor" r="4"></circle>
<circle cx="100" cy="40" fill="currentColor" r="4"></circle>
<circle cx="200" cy="10" fill="currentColor" r="4"></circle>
<rect className="dark:fill-white" fill="#0f172a" height="24" rx="4" width="70" x="140" y="20"></rect>
<text className="dark:fill-slate-900" fill="white" fontFamily="sans-serif" fontSize="10" font-weight="bold" text-anchor="middle" x="175" y="36">+245 MW</text>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="intelligence">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-900/20 blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-900/50 text-brand-300 text-xs font-medium border border-brand-500/30 mb-8">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                Atlas AI
            </span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ask anything. <br/>Get answers instantly.
            </h2>
<p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Skip the manual research. Ask Atlas AI questions like "Which operators have the most capacity in Northern Virginia?" and get sourced answers you can act on.
            </p>
<div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-2 max-w-2xl mx-auto text-left relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-600 rounded-2xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-slate-950 rounded-xl p-6 min-h-[320px] flex flex-col">
<div className="flex-1 space-y-6">
<div className="flex justify-end">
<div className="bg-brand-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm font-medium shadow-md">
                                Show me Tier III certified facilities in APAC under 10MW.
                            </div>
</div>
<div className="flex justify-start gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="iconify text-white" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="bg-slate-900 border border-slate-800 px-5 py-4 rounded-2xl rounded-tl-sm text-sm text-slate-300 shadow-sm leading-relaxed">
<p className="mb-3">I found 42 facilities matching your criteria in the APAC region.</p>
<ul className="list-disc pl-4 space-y-1 mb-3 text-slate-400">
<li><strong className="text-white">Singapore:</strong> 8 facilities (Avg 5MW)</li>
<li><strong className="text-white">Sydney:</strong> 12 facilities (Avg 8MW)</li>
<li><strong className="text-white">Tokyo:</strong> 15 facilities (Avg 6MW)</li>
</ul>
<p>Would you like to export this list to CSV?</p>
</div>
</div>
</div>
</div>
<div className="mt-6 relative">
<input className="w-full bg-slate-900 border border-slate-800 rounded-full py-3.5 px-5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="Ask follow-up question..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<button className="p-1.5 bg-brand-600 text-white rounded-full hover:bg-brand-500 transition-colors shadow-lg">
<span className="iconify" data-icon="lucide:arrow-up" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide mb-3">Cost Estimator</h2>
<h3 className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6">Know your costs before you build.</h3>
<p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                        Model your next data center investment. Input your IT load, redundancy tier, and target market—get construction costs, annual OpEx projections, and exportable reports.
                    </p>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
<span className="text-brand-600 dark:text-brand-400 font-bold">1</span>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white">Configurable Scenarios</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Adjust rack count, power density (kW/rack), and redundancy (N+1, 2N).</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
<span className="text-brand-600 dark:text-brand-400 font-bold">2</span>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white">Real-Time Pricing</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Live feeds from local utility providers and construction indices.</p>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
<div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">TCO Calculator</span>
<div className="flex gap-2 text-[10px] font-medium text-slate-500 dark:text-slate-400">
<span className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded">USD ($)</span>
</div>
</div>
<div className="p-6 space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase">Region</label>
<div className="mt-1 p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded text-sm text-slate-900 dark:text-white flex justify-between items-center">
                                    Northern Virginia <span className="iconify" data-icon="lucide:chevron-down"></span>
</div>
</div>
<div>
<label className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase">Capacity</label>
<div className="mt-1 p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded text-sm text-slate-900 dark:text-white flex justify-between items-center">
                                    250 kW <span className="iconify" data-icon="lucide:chevron-down"></span>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-slate-600 dark:text-slate-400">Power Usage Effectiveness (PUE)</span>
<span className="font-mono text-brand-600 dark:text-brand-400">1.45</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
<div className="bg-brand-500 h-1.5 rounded-full relative" style={{width: '45%'}}></div>
</div>
</div>
<div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 space-y-3 border border-transparent dark:border-slate-800">
<div className="flex justify-between items-center">
<span className="text-sm text-slate-600 dark:text-slate-400">Est. Monthly OpEx</span>
<span className="text-lg font-bold text-slate-900 dark:text-white">$24,500</span>
</div>
</div>
<button className="w-full py-2 bg-brand-600 hover:bg-brand-500 text-white rounded font-medium text-sm transition-colors">Generate Full Report</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" id="knowledge">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">Knowledge Center</h2>
<p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Standards, careers, and learning paths for the data center industry.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition-all flex flex-col h-full" href="#">
<div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-2">Learning Center</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">From curious to expert. Structured learning paths covering data center fundamentals, operations, and design.</p>
<span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">Start Learning →</span>
</a>

<a className="group bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition-all flex flex-col h-full" href="#">
<div className="w-10 h-10 bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-2">Standards Library</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Navigate compliance with confidence. Comprehensive database of certifications like ISO, SOC 2, and Uptime Tiers.</p>
<span className="text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:underline">Browse Standards →</span>
</a>

<a className="group bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition-all flex flex-col h-full" href="#">
<div className="w-10 h-10 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:book-a" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-2">The Glossary</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Speak data center fluently. 200+ terms defined—from PUE to N+1 redundancy, colocation to hyperscale.</p>
<span className="text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:underline">Search Terms →</span>
</a>

<a className="group bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-slate-700 transition-all flex flex-col h-full" href="#">
<div className="w-10 h-10 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-2">Career Intelligence</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Know your worth. Salary data, role descriptions, and career paths for data center professionals.</p>
<span className="text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:underline">View Salary Data →</span>
</a>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1 rounded-md">
<span className="iconify" data-icon="lucide:globe-2" data-width="18"></span>
</div>
<span className="font-bold text-slate-900 dark:text-white tracking-tight">DC ATLAS</span>
</a>
<p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6 leading-relaxed">
                        Data Center Atlas is the leading provider of market intelligence for the digital infrastructure sector.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#map">Interactive Map</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#data">Market Database</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#intelligence">Atlas AI</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">API Access</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Learning Center</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Standards Library</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Glossary</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Career Intel</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
<div className="text-xs text-slate-500 dark:text-slate-500">
                    © 2023 DC Atlas Inc. All rights reserved.
                </div>
<div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
