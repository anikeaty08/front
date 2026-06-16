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
}
}
}
}



        function pressFlow() {
            return {
                urlInput: '',
                isLoading: false,
                isDark: false,
                
                // Initial Mock Data
                papers: [
                    {
                        title: 'Morning Star',
                        edition: 'Daily Edition',
                        date: 'Oct 24',
                        size: '4MB',
                        image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000&auto=format&fit=crop'
                    },
                    {
                        title: 'The Chronicle',
                        edition: 'Weekly Review',
                        date: 'Oct 23',
                        size: '12MB',
                        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop'
                    },
                    {
                        title: 'Tech Insider',
                        edition: 'Special Edition',
                        date: 'Oct 22',
                        size: '8MB',
                        image: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=1000&auto=format&fit=crop'
                    }
                ],

                initTheme() {
                    // Check local storage or system preference
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark');
                        this.isDark = true;
                    } else {
                        document.documentElement.classList.remove('dark');
                        this.isDark = false;
                    }
                },

                toggleTheme() {
                    this.isDark = !this.isDark;
                    if (this.isDark) {
                        document.documentElement.classList.add('dark');
                        localStorage.theme = 'dark';
                    } else {
                        document.documentElement.classList.remove('dark');
                        localStorage.theme = 'light';
                    }
                },

                addPaper() {
                    if (this.urlInput.trim() === '') return;
                    
                    this.isLoading = true;
                    
                    // Simulate API call/processing
                    setTimeout(() => {
                        const randomTitles = ['The Daily Post', 'Global Outlook', 'Finance Today', 'City Gazette'];
                        const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
                        
                        // Use a random image to simulate fetched content
                        const newPaper = {
                            title: randomTitle,
                            edition: 'Imported PDF',
                            date: 'Just now',
                            size: (Math.random() * 15 + 2).toFixed(1) + 'MB',
                            image: `https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&sig=${Math.random()}`
                        };

                        this.papers.unshift(newPaper);
                        this.urlInput = '';
                        this.isLoading = false;
                    }, 1500);
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden w-64 flex-col border-r border-gray-200 bg-white transition-colors duration-300 dark:border-white/5 dark:bg-[#161616] md:flex">
<div className="flex h-16 items-center px-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-[#D92228] text-white">
<span className="font-medium text-xs">P</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">PressFlow</span>
</div>
</div>
<nav className="flex-1 space-y-1 px-3 py-6">
<a className="group flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2.5 text-slate-900 transition-all dark:bg-white/5 dark:text-white" href="#">
<iconify-icon className="text-[#D92228]" height="20" icon="solar:home-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-normal">Dashboard</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:bg-gray-100 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white" href="#">
<iconify-icon height="20" icon="solar:globus-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-normal">Global Feed</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:bg-gray-100 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white" href="#">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-normal">Saved Issues</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:bg-gray-100 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white" href="#">
<iconify-icon height="20" icon="solar:history-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-normal">History</span>
</a>
</nav>
<div className="border-t border-gray-200 p-4 transition-colors duration-300 dark:border-white/5">
<div className="mb-4 px-2 text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-white/40">Sources</div>
<div className="space-y-3 px-2">
<div className="flex items-center justify-between text-slate-600 dark:text-white/60">
<span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-500"></div> NY Times</span>
<span className="text-xs">12m</span>
</div>
<div className="flex items-center justify-between text-slate-600 dark:text-white/60">
<span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div> Le Monde</span>
<span className="text-xs">1h</span>
</div>
<div className="flex items-center justify-between text-slate-600 dark:text-white/60">
<span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#D92228]"></div> Nikkei</span>
<span className="text-xs">3h</span>
</div>
</div>
<div className="mt-6 flex gap-2">
<button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-xs font-normal text-slate-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
<iconify-icon height="16" icon="solar:settings-linear" width="16"></iconify-icon>
                    Settings
                </button>
<button @click="toggleTheme()" className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
<iconify-icon :icon="isDark ? 'solar:moon-stars-linear' : 'solar:sun-2-linear'" height="16" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex h-full flex-1 flex-col bg-gray-50 transition-colors duration-300 dark:bg-[#161616]">

<header className="flex h-16 items-center justify-between border-b border-gray-200 px-6 transition-colors duration-300 dark:border-white/5 md:px-8">
<div className="flex items-center gap-4 md:hidden">
<button className="text-slate-900 dark:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">PressFlow</span>
</div>
<div className="hidden items-center gap-4 text-slate-400 dark:text-white/40 md:flex">
<span className="text-xs">Last updated: Just now</span>
<span className="h-3 w-px bg-slate-200 dark:bg-white/10"></span>
<div className="flex items-center gap-2 text-xs text-slate-600 dark:text-white">
<iconify-icon height="14" icon="solar:calendar-linear" width="14"></iconify-icon>
<span x-text="new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })"></span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="h-9 w-64 rounded-full border border-gray-200 bg-white pl-9 pr-4 text-xs text-slate-900 placeholder-slate-400 transition-colors focus:border-[#D92228] focus:bg-white focus:outline-none focus:ring-0 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-white/30 dark:focus:bg-[#161616]" placeholder="Search publications..." type="text"/>
</div>
<button @click="toggleTheme()" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-gray-200 dark:text-white/60 dark:hover:bg-white/10 md:hidden">
<iconify-icon :icon="isDark ? 'solar:moon-stars-linear' : 'solar:sun-2-linear'" height="20" width="20"></iconify-icon>
</button>
<button className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-gray-200 dark:text-white/60 dark:hover:bg-white/10">
<div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#D92228] ring-2 ring-gray-50 dark:ring-[#161616]"></div>
<iconify-icon height="20" icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-tr from-[#D92228] to-orange-600 ring-2 ring-gray-50 dark:ring-[#161616]">
<img alt="User" className="h-full w-full object-cover opacity-90" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">

<div className="mx-auto mb-10 max-w-3xl">
<div className="glass-panel group relative flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 transition-all focus-within:ring-1 focus-within:ring-[#D92228]/50 hover:border-slate-300 dark:border-white/20 dark:bg-[rgba(255,255,255,0.03)]">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-[#D92228] dark:bg-white/5">
<iconify-icon height="22" icon="solar:link-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>

<input @keydown.enter="addPaper" className="flex-1 bg-transparent px-4 text-sm font-light text-slate-900 placeholder-slate-400 outline-none dark:text-white dark:placeholder-white/30" placeholder="Paste newspaper PDF URL to analyze..." type="text" x-model="urlInput"/>
<button :disabled="isLoading || urlInput === ''" @click="addPaper" className="flex items-center gap-2 rounded-xl bg-[#D92228] px-5 py-2.5 text-xs font-medium text-white shadow-lg shadow-red-900/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
<span x-text="isLoading ? 'Processing...' : 'Fetch'"></span>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16" x-show="!isLoading"></iconify-icon>
<iconify-icon className="animate-spin" height="16" icon="solar:refresh-circle-linear" width="16" x-show="isLoading"></iconify-icon>
</button>
</div>
<div className="mt-3 flex justify-center gap-6 text-xs text-slate-400 dark:text-white/30">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:file-check-linear" width="12"></iconify-icon> PDF Supported</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon> Virus Scan</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon> Instant Extract</span>
</div>
</div>

<div className="mb-12">
<div className="mb-5 flex items-end justify-between">
<div>
<h2 className="text-xl font-normal tracking-tight text-slate-900 dark:text-white">Latest Edition</h2>
<p className="mt-1 text-xs font-light text-slate-500 dark:text-white/50">Top trending publication today</p>
</div>
<a className="flex items-center gap-1 text-xs text-[#D92228] hover:text-[#D92228]/80 transition-colors" href="#">
                        View Archive <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
<div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#1A1A1A] dark:shadow-none">
<div className="grid gap-0 md:grid-cols-5">
<div className="relative h-64 md:col-span-2 md:h-auto overflow-hidden">
<div className="absolute inset-0 bg-black opacity-[0.03] dark:bg-white dark:opacity-[0.03]"></div>
<img alt="Newspaper Cover" className="h-full w-full object-cover transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs backdrop-blur-md border border-gray-200 shadow-sm text-slate-900 dark:bg-black/60 dark:text-white dark:border-white/10">
                                Front Page
                            </div>
</div>
<div className="flex flex-col justify-between p-6 md:col-span-3 md:p-10">
<div>
<div className="mb-4 flex items-center gap-3">
<span className="rounded bg-[#D92228]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#D92228]">Global Finance</span>
<span className="text-xs text-slate-400 dark:text-white/40">Vol. 24, Issue 902</span>
</div>
<h3 className="mb-3 text-2xl font-normal leading-tight tracking-tight text-slate-900 dark:text-white md:text-3xl">The Financial Daily</h3>
<p className="mb-6 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-white/60">
                                    Markets react to new policy shifts as global trade volumes stabilize. Read the full in-depth analysis of the upcoming quarter's projections and tech sector impacts.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="rounded border border-gray-200 px-2 py-1 text-[10px] text-slate-500 dark:border-white/10 dark:text-white/40">Economy</span>
<span className="rounded border border-gray-200 px-2 py-1 text-[10px] text-slate-500 dark:border-white/10 dark:text-white/40">Tech</span>
<span className="rounded border border-gray-200 px-2 py-1 text-[10px] text-slate-500 dark:border-white/10 dark:text-white/40">Politics</span>
</div>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-gray-200">
<iconify-icon height="16" icon="solar:book-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                    Read Online
                                </button>
<button className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-5 py-2.5 text-xs font-medium text-slate-700 transition-all hover:bg-[#D92228] hover:border-[#D92228] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white">
<iconify-icon height="16" icon="solar:download-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                    Download PDF <span className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity">14MB</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-normal tracking-tight text-slate-900 dark:text-white">Recents</h2>
<span className="text-xs text-slate-400 dark:text-white/40" x-show="papers.length &gt; 0">Showing <span x-text="papers.length"></span> items</span>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<template :key="index" x-htmlFor="(paper, index) in papers">
<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:bg-white/5 dark:group-hover:shadow-[0_20px_40px_-15px_rgba(217,34,40,0.15)]">

<img :className="isDark ? 'opacity-60' : 'opacity-90'" :src="paper.image" alt="News" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80"/>

<div className="absolute inset-0 flex items-center justify-center bg-white/20 dark:bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D92228] text-white shadow-lg transition-transform hover:scale-110">
<iconify-icon height="24" icon="solar:download-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="absolute right-3 top-3 rounded bg-white/80 px-2 py-1 text-[10px] font-medium text-slate-900 backdrop-blur-md shadow-sm dark:bg-black/50 dark:text-white">
                                    PDF
                                </div>

<div className="absolute left-3 top-3 rounded bg-[#D92228] px-2 py-1 text-[10px] font-medium text-white shadow-sm" x-show="index === 0">
                                    NEW
                                </div>
</div>
<div>
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-slate-900 transition-colors group-hover:text-[#D92228] dark:text-white" x-text="paper.title"></h4>
<span className="text-[10px] text-slate-400 dark:text-white/40" x-text="paper.size"></span>
</div>
<div className="mt-1 flex items-center justify-between text-xs text-slate-500 dark:text-white/50">
<span x-text="paper.edition"></span>
<span x-text="paper.date"></span>
</div>
</div>
</div>
</template>

<div className="col-span-full py-10 text-center text-slate-400 dark:text-white/30" x-show="papers.length === 0">
<p>No papers in archive yet.</p>
</div>
</div>
</div>
<footer className="mt-20 border-t border-gray-200 pt-8 text-center transition-colors duration-300 dark:border-white/5">
<p className="text-[10px] text-slate-400 dark:text-white/20">© 2023 PressFlow Aggregator. All rights reserved.</p>
</footer>
</div>
</main>

<div className="pointer-events-none fixed inset-0 z-50 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-0 transition-opacity duration-300 dark:opacity-40"></div>


    </>
  );
}
