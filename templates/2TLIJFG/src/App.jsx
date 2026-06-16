import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
        
        // Simple audio player simulation
        const playButton = document.querySelector('button[class*="bg-emerald"]');
        let isPlaying = false;
        
        playButton.addEventListener('click', () => {
            const icon = playButton.querySelector('i');
            if (isPlaying) {
                icon.setAttribute('data-lucide', 'play');
                isPlaying = false;
            } else {
                icon.setAttribute('data-lucide', 'pause');
                isPlaying = true;
            }
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container mx-auto px-4 py-6 lg:py-8">

<header className="flex items-center justify-between mb-8 opacity-0 animate-fade-in">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="radio"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight">Podwave</h1>
<p className="text-xs text-slate-400">Premium Podcast Platform</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<img alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-slate-700" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=40&amp;q=80"/>
</div>
</header>
<div className="grid lg:grid-cols-3 gap-6 xl:gap-8">

<div className="lg:col-span-2 flex flex-col gap-6">

<section className="rounded-3xl bg-gradient-to-br from-violet-100/95 to-indigo-100/95 text-slate-900 p-6 sm:p-8 lg:p-10 opacity-0 animate-fade-in-up animate-delay-100">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm text-violet-700 text-sm font-medium px-4 py-2 shadow-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                            Weekly Trending
                        </span>
<button className="text-slate-600 hover:text-slate-800 p-2 rounded-lg hover:bg-white/50 transition-colors">
<i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                        Featured podcasts<br className="hidden sm:block"/> this week
                    </h2>
<p className="text-lg text-slate-600 mb-8 max-w-2xl">
                        Handpicked by our editorial team from thousands of creators. Discover stories that inspire, educate, and entertain millions of listeners worldwide.
                    </p>

<div className="space-y-3">
<div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in-up animate-delay-200">
<div className="flex items-center gap-4">
<img alt="The Creative Mind" className="h-14 w-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<h3 className="font-semibold text-slate-900">The Creative Mind</h3>
<p className="text-sm text-slate-600">Sarah Mitchell • 2.1M followers</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Arts &amp; Culture</span>
<span className="text-xs text-slate-500">3 episodes/week</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-amber-500 font-medium">
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<span>4.8</span>
</div>
<button className="text-violet-600 hover:bg-violet-50 font-medium px-4 py-2 rounded-lg border border-violet-200 hover:border-violet-300 transition-colors flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="hidden sm:inline">Subscribe</span>
</button>
</div>
</div>
<div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in-up animate-delay-300">
<div className="flex items-center gap-4">
<img alt="Tech Frontiers Daily" className="h-14 w-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<h3 className="font-semibold text-slate-900">Tech Frontiers Daily</h3>
<p className="text-sm text-slate-600">Marcus Chen • 890K followers</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Technology</span>
<span className="text-xs text-slate-500">Daily episodes</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-amber-500 font-medium">
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<span>4.9</span>
</div>
<button className="text-violet-600 hover:bg-violet-50 font-medium px-4 py-2 rounded-lg border border-violet-200 hover:border-violet-300 transition-colors flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="hidden sm:inline">Subscribe</span>
</button>
</div>
</div>
<div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in-up animate-delay-400">
<div className="flex items-center gap-4">
<img alt="Mindful Mornings" className="h-14 w-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<h3 className="font-semibold text-slate-900">Mindful Mornings</h3>
<p className="text-sm text-slate-600">Elena Rodriguez • 1.5M followers</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Wellness</span>
<span className="text-xs text-slate-500">2 episodes/week</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-amber-500 font-medium">
<i className="w-4 h-4 fill-amber-500" data-lucide="star"></i>
<span>4.7</span>
</div>
<button className="text-violet-600 hover:bg-violet-50 font-medium px-4 py-2 rounded-lg border border-violet-200 hover:border-violet-300 transition-colors flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="hidden sm:inline">Subscribe</span>
</button>
</div>
</div>
</div>
</section>

<div className="grid sm:grid-cols-2 gap-6">

<div className="rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 lg:p-8 opacity-0 animate-fade-in-up animate-delay-500">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center gap-2 rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium text-indigo-300">
<i className="w-3 h-3" data-lucide="activity"></i>
                                Weekly Analytics
                            </span>
<button className="text-slate-400 hover:text-slate-200 p-1 rounded-md hover:bg-slate-700/50 transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold mb-2 tracking-tight">Platform Stats</h3>
<p className="text-slate-400 mb-1">12.5M total plays</p>
<p className="text-sm text-slate-500 mb-6">+23% from last week</p>
<div className="flex gap-2 h-24 items-end mb-6">
<div className="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-sm w-6 h-12 hover:h-16 transition-all duration-300"></div>
<div className="bg-gradient-to-t from-pink-500 to-pink-400 rounded-sm w-6 h-20 hover:h-24 transition-all duration-300"></div>
<div className="bg-gradient-to-t from-sky-500 to-sky-400 rounded-sm w-6 h-8 hover:h-12 transition-all duration-300"></div>
<div className="bg-gradient-to-t from-violet-500 to-violet-400 rounded-sm w-6 h-16 hover:h-20 transition-all duration-300"></div>
<div className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm w-6 h-14 hover:h-18 transition-all duration-300"></div>
<div className="bg-gradient-to-t from-amber-500 to-amber-400 rounded-sm w-6 h-18 hover:h-22 transition-all duration-300"></div>
<div className="bg-gradient-to-t from-rose-500 to-rose-400 rounded-sm w-6 h-10 hover:h-14 transition-all duration-300"></div>
</div>
<button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 group">
                            View Detailed Analytics 
                            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative rounded-3xl overflow-hidden group opacity-0 animate-fade-in-up animate-delay-600">
<img alt="Dr. Amanda Foster" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent"></div>
<div className="relative z-10 p-6 lg:p-8 flex flex-col h-full justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs bg-indigo-500/80 text-white px-2 py-1 rounded-full">Featured Creator</span>
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold mb-2 tracking-tight">Dr. Amanda Foster</h3>
<p className="text-sm text-slate-300 mb-4">Psychology &amp; Mental Health Expert</p>
<p className="text-xs text-slate-400 mb-6">Helping millions understand their minds through evidence-based insights and practical wellness strategies.</p>
</div>
<div>
<div className="flex items-center gap-4 text-sm text-slate-300 mb-4">
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="users"></i> 2.8M followers
                                    </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="mic"></i> 127 episodes
                                    </span>
</div>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="user-plus"></i> Follow Creator
                                </button>
</div>
</div>
</div>
</div>
</div>

<aside className="rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 lg:p-8 flex flex-col opacity-0 animate-fade-in-up animate-delay-700">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        Now Playing
                    </div>
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-slate-200 p-1 rounded-md hover:bg-slate-700/50 transition-colors">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
<button className="text-slate-400 hover:text-slate-200 p-1 rounded-md hover:bg-slate-700/50 transition-colors">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
</div>
<div className="flex-1 flex flex-col">
<img alt="Business Breakthrough" className="rounded-xl w-full aspect-square object-cover mb-6 shadow-lg" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="text-center mb-6">
<h3 className="text-xl font-semibold mb-1 tracking-tight">Business Breakthrough</h3>
<p className="text-sm text-slate-400 mb-1">Entrepreneurship &amp; Innovation</p>
<p className="text-xs text-slate-500">Hosted by James Wilson</p>
</div>

<div className="mb-6">
<div className="h-2 bg-slate-700 rounded-full cursor-pointer group">
<div className="h-2 bg-emerald-400 rounded-full relative group-hover:bg-emerald-300 transition-colors" style={{width: '35%'}}>
<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<div className="flex justify-between text-xs text-slate-400 mt-2">
<span>12:35</span>
<span>36:42</span>
</div>
</div>

<div className="flex items-center justify-center gap-6 mb-8">
<button className="text-slate-400 hover:text-slate-200 p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
<i className="w-6 h-6" data-lucide="rewind"></i>
</button>
<button className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
<i className="w-6 h-6" data-lucide="pause"></i>
</button>
<button className="text-slate-400 hover:text-slate-200 p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
<i className="w-6 h-6" data-lucide="fast-forward"></i>
</button>
</div>

<div className="flex-1">
<h4 className="text-sm font-medium mb-4 text-slate-300">Up Next</h4>
<div className="space-y-2 max-h-64 overflow-y-auto scrollbar-hide">
<div className="flex items-center justify-between bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm transition-colors cursor-pointer opacity-0 animate-fade-in-up animate-delay-800">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-400" data-lucide="play"></i>
<span>Scaling Your Startup in 2024</span>
</div>
<span className="text-slate-400 text-xs">24 min</span>
</div>
<div className="flex items-center justify-between bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm transition-colors cursor-pointer opacity-0 animate-fade-in-up animate-delay-900">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
<span>Modern Investment Strategies</span>
</div>
<span className="text-slate-400 text-xs">31 min</span>
</div>
<div className="flex items-center justify-between bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm transition-colors cursor-pointer opacity-0 animate-fade-in-up animate-delay-1000">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-400" data-lucide="play"></i>
<span>Customer Acquisition Tactics</span>
</div>
<span className="text-slate-400 text-xs">28 min</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>



    </>
  );
}
