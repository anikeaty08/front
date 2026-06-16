import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: { 'shimmer': 'shimmer 2s infinite' },
keyframes: { shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } } }
}
}
}



// Check for saved theme or system preference
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black transition-colors">

<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8.5L14.5 10V14L12 15.5L9.5 14V10L12 8.5Z"></path>
<path d="M12 2L15 3.7V7.1L12 5.4L9 7.1V3.7L12 2Z"></path>
<path d="M12 18.6L15 16.9V20.3L12 22L9 20.3V16.9L12 18.6Z"></path>
<path d="M19.4 6.3L22.4 8L22.4 11.4L19.4 9.7L16.4 11.4L16.4 8L19.4 6.3Z"></path>
<path d="M4.6 6.3L7.6 8L7.6 11.4L4.6 9.7L1.6 11.4L1.6 8L4.6 6.3Z"></path>
<path d="M19.4 14.3L22.4 12.6L22.4 16L19.4 17.7L16.4 16L16.4 12.6L19.4 14.3Z"></path>
<path d="M4.6 14.3L7.6 12.6L7.6 16L4.6 17.7L1.6 16L1.6 12.6L4.6 14.3Z"></path>
</svg>
</div>
<span className="text-slate-900 dark:text-white font-semibold tracking-tight text-sm">BigSplice</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="https://bigsplicer.com/login">Product</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">

<button className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors focus:outline-none" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
<a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors hidden sm:block" href="https://bigsplicer.com/login">Log in</a>
<a className="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm" href="https://bigsplicer.com/login">Start for free</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-60 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-xs font-medium text-slate-500 dark:text-slate-400 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing AI Engine v2
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Work With Huge Data. <br/>
<span className="gradient-text">Instantly.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                BigSplice + AI gives your team super‑fast, ultra low‑cost analytics on massive datasets, with a chat interface that lets anyone "talk" to your data.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="h-12 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-slate-200/50 dark:shadow-none" href="https://bigsplicer.com/login">
                    Start for Free
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="h-12 px-8 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                    Book a Demo
                </button>
</div>

<div className="relative max-w-4xl mx-auto mb-16 group">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-75 transition duration-1000 group-hover:opacity-100"></div>

<div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl dark:shadow-slate-900/50 overflow-hidden aspect-video">
<video autoplay="" className="w-full h-full object-cover" controls="" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/evlprsxkte2ypxiwmzd3u/bigsplicevizv1.mp4?rlkey=8rpv1csni00kxluhwbo56s1mf&amp;e=1&amp;raw=1" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-12">
<div className="flex gap-3">
<div className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Query billions of rows in seconds without blowing up server costs.</p>
</div>
<div className="flex gap-3">
<div className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Ask questions in plain English, get SQL, charts, and answers back.</p>
</div>
<div className="flex gap-3">
<div className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">Built for high‑volume logs, security data, and production traffic.</p>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300" id="developers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400 flex items-center">
<iconify-icon icon="solar:code-linear" width="20"></iconify-icon>
</span>
<span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Engineering</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">Built for Developers</h2>
<p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-12">Keep your current databases and pipelines. BigSplice sits on top, optimising how you query, cache, and explore data.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all group">
<div className="mb-6 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="text-slate-900 dark:text-white flex items-center">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Slash Costs</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">Slash server and querying costs with BigSplice's engine for high‑throughput, read‑heavy workloads.</p>
</div>

<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all group">
<div className="mb-6 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="text-slate-900 dark:text-white flex items-center">
<iconify-icon icon="solar:maximize-square-3-linear" width="20"></iconify-icon>
</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Infinite Scale</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">Scale from millions to billions of events without re‑architecting your stack.</p>
</div>

<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-50 dark:bg-indigo-500/10 blur-[50px] rounded-full"></div>
<div className="mb-6 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="text-slate-900 dark:text-white flex items-center">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 relative z-10">AI to SQL</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 relative z-10">Generate and optimize complex queries with AI in BigSplice, then edit as SQL when you need full control.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 transition-colors duration-300" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6">Impossible performance. Now possible.</h2>
<p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    Connecting AI models to your data requires extreme speed and efficiency. BigSplice reduces latency and cost so you can literally talk to your database.
                </p>
</div>
<div className="grid lg:grid-cols-5 gap-12 items-center">

<div className="lg:col-span-3 order-2 lg:order-1">
<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

<div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-slate-950 overflow-hidden flex flex-col min-h-[500px]">

<div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"></div>
</div>
<div className="ml-4 px-3 py-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                                    bigsplice-prod
                                </div>
</div>

<div className="flex-1 flex flex-col p-6 bg-slate-50/30 dark:bg-slate-950/50">

<div className="space-y-6 flex-1">

<div className="flex justify-end">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[80%] text-sm text-slate-700 dark:text-slate-200">
                                            Find all high-latency requests (&gt;500ms) grouped by region for the last 48 hours. Calculate the cost impact.
                                        </div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">

<div className="bg-emerald-50/50 dark:bg-emerald-900/10 border-b border-emerald-100 dark:border-emerald-900/20 px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
                                                            Complete
                                                        </span>
<span className="text-slate-400 dark:text-slate-600">|</span>
<span className="text-slate-600 dark:text-slate-400">Scanned: <span className="text-slate-900 dark:text-white font-semibold">2.4 TB</span></span>
<span className="text-slate-600 dark:text-slate-400">Time: <span className="text-slate-900 dark:text-white font-semibold">180ms</span></span>
</div>
<div className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded text-[10px] font-bold tracking-wide uppercase">
                                                        Cost: $0.003
                                                    </div>
</div>

<div className="p-4">
<p className="text-sm text-slate-600 dark:text-slate-300 mb-4">I found 14,203 events matching your criteria. High latency is concentrated in <span className="font-medium text-slate-900 dark:text-white">us-east-1</span> (82%).</p>

<div className="h-40 w-full flex items-end justify-between gap-1 mt-4 px-2">
<div className="w-full bg-indigo-200 dark:bg-indigo-900/50 h-[20%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-800 transition"></div>
<div className="w-full bg-indigo-200 dark:bg-indigo-900/50 h-[15%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-800 transition"></div>
<div className="w-full bg-indigo-200 dark:bg-indigo-900/50 h-[10%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-800 transition"></div>
<div className="w-full bg-indigo-600 dark:bg-indigo-500 h-[85%] rounded-t-sm relative group cursor-pointer shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] py-1 px-2 rounded whitespace-nowrap">US-East</div>
</div>
<div className="w-full bg-indigo-200 dark:bg-indigo-900/50 h-[12%] rounded-t-sm relative group cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-800 transition"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 relative">
<div className="absolute inset-0 bg-white/50 dark:bg-slate-950/50 backdrop-blur-[1px] z-10 flex items-center justify-center"></div>
<div className="h-12 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 flex items-center px-4 text-slate-400 text-sm">
                                        Ask a follow-up question...
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-10 order-1 lg:order-2">

<div className="relative pl-6 border-l-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300 group">
<div className="mb-2 flex items-center gap-2">
<span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 p-1.5 rounded-md flex items-center">
<iconify-icon icon="solar:wad-of-money-linear" width="18"></iconify-icon>
</span>
<span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Cost Efficiency</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">Reduce costs by 75-90%</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Run analytical queries on massive datasets without the fear of a massive bill. Our optimized engine dramatically lowers the compute required per query.
                        </p>
</div>

<div className="relative pl-6 border-l-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300 group">
<div className="mb-2 flex items-center gap-2">
<span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 p-1.5 rounded-md flex items-center">
<iconify-icon icon="solar:bolt-circle-linear" width="18"></iconify-icon>
</span>
<span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Latency</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">Heavy reduction in process time</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            What used to take minutes now takes milliseconds. By compressing processing time, we remove the friction between having a question and getting an answer.
                        </p>
</div>

<div className="relative pl-6 border-l-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-300 group">
<div className="mb-2 flex items-center gap-2">
<span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 p-1.5 rounded-md flex items-center">
<iconify-icon icon="solar:robot-2-linear" width="18"></iconify-icon>
</span>
<span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">AI Integration</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">Literally "Talk" to your data</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Connecting AI models to databases was previously too slow and expensive. With BigSplice, AI agents can iterate, query, and visualize data in real-time.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400 flex items-center">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</span>
<span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Social Proof</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-12">Trusted by Industry Leaders</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<div className="absolute top-8 right-8 text-indigo-200 dark:text-indigo-900/40 transform rotate-180">
<iconify-icon icon="solar:quote-up-square-bold" width="48"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Fintech</h3>
<p className="text-lg font-medium text-slate-900 dark:text-white mb-4">Lightning-Fast Trade Execution.</p>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            "Powers algorithmic trading by analyzing billions of market transactions in real-time with sub-500ms latency."
                        </p>
</div>
</div>

<div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<div className="absolute top-8 right-8 text-indigo-200 dark:text-indigo-900/40 transform rotate-180">
<iconify-icon icon="solar:quote-up-square-bold" width="48"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Defense</h3>
<p className="text-lg font-medium text-slate-900 dark:text-white mb-4">Geospatial Intelligence.</p>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            "Processes multi-terabyte satellite metadata instantly, reducing threat assessment time by hundreds of hours."
                        </p>
</div>
</div>

<div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<div className="absolute top-8 right-8 text-indigo-200 dark:text-indigo-900/40 transform rotate-180">
<iconify-icon icon="solar:quote-up-square-bold" width="48"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Healthcare</h3>
<p className="text-lg font-medium text-slate-900 dark:text-white mb-4">Analytics at Scale.</p>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            "Modernized compliance monitoring by querying 300M+ prescription records in milliseconds, replacing legacy systems that took hours."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400 flex items-center">
<iconify-icon icon="solar:case-linear" width="20"></iconify-icon>
</span>
<span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Business Intelligence</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6">Built for CEOs and Leaders</h2>
<p className="text-xl text-slate-600 dark:text-slate-300 italic mb-8 border-l-2 border-emerald-500 pl-6">
                        "From boardroom questions to frontline decisions, you literally talk to your data in BigSplice and get actionable answers."
                    </p>
<ul className="space-y-6">
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-1">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<div>
<h4 className="text-slate-900 dark:text-white font-medium text-sm mb-1">Natural Language Interface</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Ask business questions in natural language inside BigSplice and get clear, visual answers in seconds: no dashboards, no tickets.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-1">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<div>
<h4 className="text-slate-900 dark:text-white font-medium text-sm mb-1">Real-time Insights</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Turn raw logs and security noise into real‑time insights on risk, revenue, and reliability.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-1">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<div>
<h4 className="text-slate-900 dark:text-white font-medium text-sm mb-1">No Big Data Team Required</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Unlock AI‑driven analytics without hiring a big data team.</p>
</div>
</li>
</ul>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950">

<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-xs text-slate-600 dark:text-slate-400 font-medium">JD</div>
<div className="bg-slate-50 dark:bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                                    Show me revenue churn for the EU region over the last 30 days compared to traffic spikes.
                                </div>
</div>
<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center shrink-0 text-white dark:text-black shadow-sm">
<iconify-icon icon="solar:robot-2-linear" width="16"></iconify-icon>
</div>
<div className="bg-white dark:bg-slate-900 rounded-2xl rounded-tr-none p-4 text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm w-full">
<p className="mb-3">Here is the revenue churn vs traffic analysis. A 15% traffic spike on Oct 12th correlates with a 2% churn increase.</p>
<div className="h-32 w-full bg-slate-50 dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700 flex items-end justify-between px-2 pb-2 gap-1 overflow-hidden">

<div className="w-full bg-indigo-500/80 dark:bg-indigo-500 h-[40%] rounded-sm"></div>
<div className="w-full bg-indigo-500/80 dark:bg-indigo-500 h-[60%] rounded-sm"></div>
<div className="w-full bg-indigo-600 dark:bg-indigo-400 h-[90%] rounded-sm"></div>
<div className="w-full bg-indigo-500/80 dark:bg-indigo-500 h-[50%] rounded-sm"></div>
<div className="w-full bg-indigo-500/80 dark:bg-indigo-500 h-[45%] rounded-sm"></div>
<div className="w-full bg-indigo-500/80 dark:bg-indigo-500 h-[60%] rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">Super‑fast, ultra low‑cost querying</h2>
<p className="text-xl text-slate-500 dark:text-slate-400 mb-12">"Think ‘big data warehouse', but without the giant bill."</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center shadow-sm">
<div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400">
<iconify-icon icon="solar:server-square-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-slate-900 dark:text-white font-medium mb-2">Tuned for Scale</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">BigSplice is tuned for massive, append‑only datasets like logs, events, and telemetry.</p>
</div>
<div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center shadow-sm">
<div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-slate-900 dark:text-white font-medium mb-2">Resource Efficiency</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Use far fewer resources for the same workload compared to traditional big data stacks.</p>
</div>
<div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center shadow-sm">
<div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400">
<iconify-icon icon="solar:safe-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-slate-900 dark:text-white font-medium mb-2">Smart Storage</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Smart storage, compression, and indexing in BigSplice keep performance high while costs stay predictable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden text-white shadow-2xl shadow-slate-200/50 dark:shadow-slate-950">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:chart-2-linear" width="14"></iconify-icon>
                            Cost Comparison
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Reduce cloud costs by <span className="text-indigo-400">60-80%</span></h2>
<div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3">
<div className="bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400 shrink-0 mt-0.5 flex items-center">
<iconify-icon icon="solar:arrow-down-circle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-emerald-100 text-base font-medium">Downgrade Server Requirements</p>
<p className="text-emerald-400/80 text-sm mt-1">Due to the BigSplice tool, your company can downgrade your server requirements and save heavily on server rental costs.</p>
</div>
</div>
<p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                            Stop overpaying for idle compute. Compared to standard AWS implementations, BigSplice's specialized engine handles massive read-heavy workloads at a fraction of the cost.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-slate-300 text-sm">Eliminates 80% of compute overhead</span>
</div>
<div className="flex items-center gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-slate-300 text-sm">Highly compressed storage reduces S3 bills</span>
</div>
<div className="flex items-center gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-slate-300 text-sm">Predictable pricing with no surprise overages</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm relative">
<h3 className="text-sm font-medium text-slate-300 mb-8 flex justify-between">
<span>Monthly Infrastructure Cost</span>
<span className="text-slate-500 font-normal text-xs mt-0.5">5TB Log Ingestion / Day</span>
</h3>
<div className="flex items-end gap-8 h-64 w-full px-4">

<div className="w-1/2 flex flex-col gap-3 group h-full justify-end">
<div className="text-center opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400">$10,000</div>
<div className="w-full bg-slate-700/50 rounded-t-lg relative group-hover:bg-slate-700 transition-colors h-[90%] flex flex-col justify-between p-2 overflow-hidden border-t border-x border-white/5">
<div className="w-full border-b border-white/5 h-px absolute top-[20%] left-0"></div>
<div className="w-full border-b border-white/5 h-px absolute top-[40%] left-0"></div>
<div className="w-full border-b border-white/5 h-px absolute top-[60%] left-0"></div>
<div className="w-full border-b border-white/5 h-px absolute top-[80%] left-0"></div>
</div>
<div className="text-center">
<div className="text-sm font-medium text-slate-300">AWS</div>
<div className="text-xs text-slate-500">Standard Setup</div>
</div>
</div>

<div className="w-1/2 flex flex-col gap-3 h-full justify-end relative">

<div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded shadow-sm whitespace-nowrap mb-2">
                                    Save 80%
                                </div>
<div className="text-center text-xs text-indigo-300 font-medium">$2,000</div>
<div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-500 rounded-t-lg h-[18%] shadow-[0_0_40px_-5px_rgba(99,102,241,0.5)] relative overflow-hidden">
<div className="absolute inset-0 bg-white/10"></div>
</div>
<div className="text-center">
<div className="text-sm font-medium text-white">BigSplice</div>
<div className="text-xs text-indigo-300">Optimized</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300" id="pricing">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6">Simple, transparent pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">

<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<h3 className="text-lg font-medium text-slate-900 dark:text-white">Starter</h3>
<p className="text-3xl font-semibold text-slate-900 dark:text-white mt-2 mb-4">$0 <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">/ mo</span></p>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Start free with a BigSplice tier sized for development and small projects.</p>
<a className="w-full py-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center" href="https://bigsplicer.com/login">Get Started</a>
</div>

<div className="p-6 rounded-xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/20 flex flex-col relative shadow-md">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium">Popular</div>
<h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-400">Scale</h3>
<p className="text-3xl font-semibold text-slate-900 dark:text-white mt-2 mb-4">Usage <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">based</span></p>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Pay for data scanned and AI queries, not per‑seat. Scale as you grow.</p>
<a className="w-full py-2 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition font-medium shadow-sm flex items-center justify-center" href="https://bigsplicer.com/login">Start Scaling</a>
</div>

<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
<h3 className="text-lg font-medium text-slate-900 dark:text-white">Enterprise</h3>
<p className="text-3xl font-semibold text-slate-900 dark:text-white mt-2 mb-4">Custom</p>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Custom SLAs, VPC / on‑prem BigSplice deployments, and dedicated support.</p>
<button className="w-full py-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6">Ready to talk to your big data?</h2>
<p className="text-xl text-slate-500 dark:text-slate-400 mb-10">
                "Ship faster, investigate deeper, and stop worrying about big data costs with BigSplice."
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all w-full sm:w-auto shadow-lg shadow-slate-300/50 dark:shadow-slate-900/50 flex items-center justify-center" href="https://bigsplicer.com/login">
                    Get Started in 5 Minutes
                </a>
<button className="h-12 px-8 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm">
                    Talk to the Team
                </button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-black dark:bg-white rounded flex items-center justify-center text-white dark:text-black">

<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8.5L14.5 10V14L12 15.5L9.5 14V10L12 8.5Z"></path>
<path d="M12 2L15 3.7V7.1L12 5.4L9 7.1V3.7L12 2Z"></path>
<path d="M12 18.6L15 16.9V20.3L12 22L9 20.3V16.9L12 18.6Z"></path>
<path d="M19.4 6.3L22.4 8L22.4 11.4L19.4 9.7L16.4 11.4L16.4 8L19.4 6.3Z"></path>
<path d="M4.6 6.3L7.6 8L7.6 11.4L4.6 9.7L1.6 11.4L1.6 8L4.6 6.3Z"></path>
<path d="M19.4 14.3L22.4 12.6L22.4 16L19.4 17.7L16.4 16L16.4 12.6L19.4 14.3Z"></path>
<path d="M4.6 14.3L7.6 12.6L7.6 16L4.6 17.7L1.6 16L1.6 12.6L4.6 14.3Z"></path>
</svg>
</div>
<span className="text-slate-900 dark:text-white font-semibold tracking-tight text-sm">BigSplice</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-slate-900 dark:hover:text-white transition" href="#">Terms</a>
<a className="hover:text-slate-900 dark:hover:text-white transition" href="#">Twitter</a>
<a className="hover:text-slate-900 dark:hover:text-white transition" href="#">GitHub</a>
</div>
<div className="text-sm text-slate-400 dark:text-slate-500">
                © 2024 BigSplice Inc.
            </div>
</div>
</footer>

    </>
  );
}
