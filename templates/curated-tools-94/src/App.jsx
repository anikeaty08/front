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
display: ['Orbitron', 'sans-serif'],
},
animation: {
blob: "blob 7s infinite",
},
keyframes: {
blob: {
"0%": { transform: "translate(0px, 0px) scale(1)" },
"33%": { transform: "translate(30px, -50px) scale(1.1)" },
"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
"100%": { transform: "translate(0px, 0px) scale(1)" },
},
},
},
},
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
      

<nav className="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex-shrink-0 flex items-center cursor-pointer group hover:opacity-80 transition-opacity" href="#">
<svg className="h-10 w-auto" viewbox="0 0 750 300" xmlns="http://www.w3.org/2000/svg">
<defs>

<lineargradient id="plasma" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#00F5FF"></stop>
<stop offset="50%" stop-color="#FF00FF"></stop>
<stop offset="100%" stop-color="#7B2FF7"></stop>
</lineargradient>

<filter height="400%" id="megaGlow" width="400%" x="-200%" y="-200%">
<fegaussianblur result="blur" stddeviation="8"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>

<filter id="storm">
<feturbulence basefrequency="0.02" numoctaves="3" type="fractalNoise">
<animate attributename="baseFrequency" dur="2s" repeatcount="indefinite" values="0.02;0.05;0.02"></animate>
</feturbulence>
<fedisplacementmap in="SourceGraphic" scale="15"></fedisplacementmap>
</filter>
</defs>

<g transform="translate(200 150)">

<polygon fill="none" filter="url(#megaGlow)" points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50" stroke="url(#plasma)" strokeWidth="3">
<animatetransform attributename="transform" dur="25s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
</polygon>

<polygon fill="none" opacity="0.7" points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" stroke="url(#plasma)" strokeWidth="2">
<animatetransform attributename="transform" dur="18s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
</polygon>

<polygon fill="none" opacity="0.5" points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" stroke="url(#plasma)" strokeWidth="2"></polygon>

<g filter="url(#megaGlow)">
<polygon fill="url(#plasma)" points="0,-35 55,0 0,35">
<animatetransform attributename="transform" dur="4s" fill="freeze" from="0" to="720" type="rotate"></animatetransform>
</polygon>
</g>

<path d="M -100 -60 Q 0 -140 100 -60" fill="none" filter="url(#storm)" stroke="#00F5FF" strokeWidth="3">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0;1;0"></animate>
</path>
</g>

<g filter="url(#storm)">
<text fill="url(#plasma)" filter="url(#megaGlow)" fontFamily="Orbitron, Inter, sans-serif" fontSize="100" font-weight="700" x="400" y="180">
                            FreeHub
                          </text>
</g>
</svg>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" href="#">Posts</a>
<a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" href="#">Contribute</a>
<a className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" href="#">Community</a>
</div>

<div className="flex items-center gap-3 sm:gap-4">

<div className="hidden sm:flex items-center relative group">
<iconify-icon className="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-12 py-1.5 text-sm bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 w-48 transition-all hover:bg-slate-100 dark:hover:bg-slate-800" placeholder="Search resources..." type="text"/>
<div className="absolute right-2 text-[10px] border border-slate-200 dark:border-slate-700 rounded px-1.5 text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800">⌘K</div>
</div>

<button aria-label="Toggle Theme" className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-stars-linear" width="20"></iconify-icon>
</button>

<button className="md:hidden text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl -z-10 opacity-40 dark:opacity-20 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur-sm text-slate-600 dark:text-slate-300 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            New resources added daily
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Discover the best <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">curated online tools.</span>
</h1>
<p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            FreeHub is a community-driven directory connecting students, developers, and creatives with high-quality, free and open-source resources.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-slate-900/20 dark:shadow-white/5 flex items-center justify-center gap-2 group" href="#categories">
                Explore Categories
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                Submit Tool
            </a>
</div>
</main>

<section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="categories">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">Browse by Category</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Find exactly what you need for your next project.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors" href="#">
                View all
                <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">AI Tools</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Generative art, text assistants, and automation bots.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-stream-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Streaming</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Live TV, movie platforms, and audio streaming services.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Software &amp; Dev</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">IDEs, frameworks, libraries, and open source utilities.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Privacy</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">VPNs, encrypted messaging, and ad blockers.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Learning</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Courses, ebooks, tutorials, and educational platforms.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Gaming</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Free games, emulators, mods, and gaming utilities.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:book-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Reading</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Libraries, manga readers, and news aggregators.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>

<a className="group p-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden" href="#">
<div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-download-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-200 mb-1">Downloading</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Torrents, file hosting, and download managers.</p>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-slate-300 dark:text-slate-600">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="py-16 bg-white dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Editor's Choice</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">Featured Resources</h2>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="px-3 py-1.5 text-xs font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md shadow-sm transition-colors">All</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md hover:border-slate-300 dark:hover:border-slate-500 transition-colors">Popular</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md hover:border-slate-300 dark:hover:border-slate-500 transition-colors">Newest</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md hover:border-slate-300 dark:hover:border-slate-500 transition-colors">Trending</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="flex flex-col bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 group">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-800 dark:text-white shadow-sm">
<img alt="VS" className="w-6 h-6" src="https://api.iconify.design/logos:visual-studio-code.svg"/>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">VS Code</h3>
<div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
<span>Dev Tool</span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
<span>Microsoft</span>
</div>
</div>
</div>
<button className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">A powerful, lightweight code editor with built-in support for JavaScript, TypeScript and Node.js.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">Free</span>
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">Editor</span>
</div>
<a className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1" href="#">
                            Visit
                            <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</article>

<article className="flex flex-col bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 group">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-800 shadow-sm">
<iconify-icon className="text-purple-500 dark:text-purple-400" icon="solar:figma-file-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Figma</h3>
<div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
<span>Design</span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
<span>Web</span>
</div>
</div>
</div>
<button className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">The leading collaborative interface design tool. Build better products as a team.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">Freemium</span>
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">UI/UX</span>
</div>
<a className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1" href="#">
                            Visit
                            <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</article>

<article className="flex flex-col bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 group">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-bold text-slate-800 shadow-sm">
<iconify-icon className="text-emerald-500 dark:text-emerald-400" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">ProtonMail</h3>
<div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
<span>Privacy</span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
<span>Email</span>
</div>
</div>
</div>
<button className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">Secure email based in Switzerland. Encrypted to keep your communications private.</p>
<div className="flex items-center justify-between mt-auto">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">Free</span>
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-500 dark:text-slate-400">Secure</span>
</div>
<a className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1" href="#">
                            Visit
                            <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 px-4">
<div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900/40 dark:to-slate-900/80 border border-transparent dark:border-white/10 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
<iconify-icon className="text-yellow-300" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-white">Have a tool we should list?</h2>
<p className="text-slate-300 mb-8 max-w-lg mx-auto font-light">Join our community of contributors and help others discover great resources.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<button className="px-6 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors shadow-lg">Submit Resource</button>
<button className="px-6 py-2.5 rounded-lg border border-slate-600 dark:border-slate-500 text-white text-sm font-medium hover:border-slate-500 hover:bg-slate-800/50 transition-colors">Join Discord</button>
</div>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<svg className="h-6 w-auto" viewbox="0 0 750 300" xmlns="http://www.w3.org/2000/svg">
<defs>

<lineargradient id="plasma" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#00F5FF"></stop>
<stop offset="50%" stop-color="#FF00FF"></stop>
<stop offset="100%" stop-color="#7B2FF7"></stop>
</lineargradient>

<filter height="400%" id="megaGlow" width="400%" x="-200%" y="-200%">
<fegaussianblur result="blur" stddeviation="8"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>

<filter id="storm">
<feturbulence basefrequency="0.02" numoctaves="3" type="fractalNoise">
<animate attributename="baseFrequency" dur="2s" repeatcount="indefinite" values="0.02;0.05;0.02"></animate>
</feturbulence>
<fedisplacementmap in="SourceGraphic" scale="15"></fedisplacementmap>
</filter>
</defs>

<g transform="translate(200 150)">

<polygon fill="none" filter="url(#megaGlow)" points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50" stroke="url(#plasma)" strokeWidth="3">
<animatetransform attributename="transform" dur="25s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
</polygon>

<polygon fill="none" opacity="0.7" points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" stroke="url(#plasma)" strokeWidth="2">
<animatetransform attributename="transform" dur="18s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
</polygon>

<polygon fill="none" opacity="0.5" points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" stroke="url(#plasma)" strokeWidth="2"></polygon>

<g filter="url(#megaGlow)">
<polygon fill="url(#plasma)" points="0,-35 55,0 0,35">
<animatetransform attributename="transform" dur="4s" fill="freeze" from="0" to="720" type="rotate"></animatetransform>
</polygon>
</g>

<path d="M -100 -60 Q 0 -140 100 -60" fill="none" filter="url(#storm)" stroke="#00F5FF" strokeWidth="3">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0;1;0"></animate>
</path>
</g>

<g filter="url(#storm)">
<text fill="url(#plasma)" filter="url(#megaGlow)" fontFamily="Orbitron, Inter, sans-serif" fontSize="100" font-weight="700" x="400" y="180">
                                FreeHub
                              </text>
</g>
</svg>
</div>
<p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed mb-4">
                        Curated directory of the best free tools and resources on the internet. Built for the community.
                    </p>
<div className="flex gap-3">
<a className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Categories</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Featured</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Collections</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Community</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Discussions</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Contribute</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Leaderboard</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400 dark:text-slate-500">© 2023 FreeHub Directory. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs text-slate-500 dark:text-slate-400">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
