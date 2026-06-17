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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchView(view) {
            const publicView = document.getElementById('public-view');
            const adminView = document.getElementById('admin-view');
            const btnPublic = document.getElementById('btn-public');
            const btnAdmin = document.getElementById('btn-admin');

            if (view === 'public') {
                publicView.classList.remove('hidden');
                adminView.classList.add('hidden');
                
                btnPublic.classList.remove('text-gray-500');
                btnPublic.classList.add('text-white', 'bg-white/10');
                
                btnAdmin.classList.remove('text-white', 'bg-white/10');
                btnAdmin.classList.add('text-gray-500');
            } else {
                publicView.classList.add('hidden');
                adminView.classList.remove('hidden');
                
                btnAdmin.classList.remove('text-gray-500');
                btnAdmin.classList.add('text-white', 'bg-white/10');
                
                btnPublic.classList.remove('text-white', 'bg-white/10');
                btnPublic.classList.add('text-gray-500');
            }
        }
    
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
      

<div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#111] border border-white/10 p-1.5 rounded-full shadow-2xl">
<button className="px-4 py-2 rounded-full text-xs font-medium text-white bg-white/10 transition-all hover:bg-white/20" id="btn-public" onclick="switchView('public')">Public View</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-gray-500 hover:text-white transition-all" id="btn-admin" onclick="switchView('admin')">Admin CMS</button>
</div>

<div className="fade-in min-h-screen flex flex-col" id="public-view">

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#08090A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tight text-lg" href="#">PITCH.</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-white hover:text-gray-200 transition-colors" href="#">News</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Leagues</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Teams</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Players</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">FIFA</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-white/5 border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/20 w-64 transition-all" placeholder="Search players, clubs..." type="text"/>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow">

<section className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>
<img alt="Stadium" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full max-w-2xl">
<span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/20 text-[10px] uppercase tracking-wider font-semibold rounded mb-3">Champions League</span>
<h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-3 group-hover:text-gray-200 transition-colors">
                                Tactical masterclass secures semi-final spot in a dramatic night at Wembley.
                            </h1>
<div className="flex items-center gap-3 text-xs text-gray-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-circle-linear"></iconify-icon> Marcus Reed</span>
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2 hrs ago</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="flex items-center justify-between pb-2 border-b border-white/5">
<h3 className="text-sm font-medium text-white tracking-wide">TRENDING NOW</h3>
<iconify-icon className="text-gray-500" icon="solar:graph-up-linear"></iconify-icon>
</div>

<article className="flex gap-4 group cursor-pointer">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-sm font-medium text-gray-200 leading-snug group-hover:text-blue-400 transition-colors mb-1">Transfer Talk: Madrid eyes young Brazilian prodigy.</h4>
<span className="text-[10px] text-gray-500">15 mins ago</span>
</div>
</article>
<article className="flex gap-4 group cursor-pointer">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-sm font-medium text-gray-200 leading-snug group-hover:text-blue-400 transition-colors mb-1">Injury Update: Key striker out for the season.</h4>
<span className="text-[10px] text-gray-500">45 mins ago</span>
</div>
</article>
<article className="flex gap-4 group cursor-pointer">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-sm font-medium text-gray-200 leading-snug group-hover:text-blue-400 transition-colors mb-1">FIFA announces new format for Club World Cup 2025.</h4>
<span className="text-[10px] text-gray-500">1 hr ago</span>
</div>
</article>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
<span className="text-xs font-medium text-gray-500">PREMIER LEAGUE</span>
<span className="text-xs font-medium text-gray-500">LA LIGA</span>
<span className="text-xs font-medium text-gray-500">SERIE A</span>
<span className="text-xs font-medium text-gray-500">BUNDESLIGA</span>
<span className="text-xs font-medium text-gray-500">LIGUE 1</span>
<span className="text-xs font-medium text-gray-500">CHAMPIONS LEAGUE</span>
<span className="text-xs font-medium text-gray-500">WORLD CUP</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="flex items-end justify-between mb-8">
<h2 className="text-xl font-medium text-white tracking-tight">Latest Stories</h2>
<a className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1" href="/news">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col gap-3">
<div className="aspect-video w-full rounded-lg bg-white/5 overflow-hidden border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] text-green-400 font-medium uppercase tracking-wide">Analysis</span>
<h3 className="text-sm font-medium text-white mt-1 leading-snug group-hover:text-green-400 transition-colors">The statistical rise of defensive midfielders.</h3>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-video w-full rounded-lg bg-white/5 overflow-hidden border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<span className="text-[10px] text-purple-400 font-medium uppercase tracking-wide">Interview</span>
<h3 className="text-sm font-medium text-white mt-1 leading-snug group-hover:text-purple-400 transition-colors">"I want to win everything" - Exclusive sit down.</h3>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-video w-full rounded-lg bg-white/5 overflow-hidden border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] text-orange-400 font-medium uppercase tracking-wide">Teams</span>
<h3 className="text-sm font-medium text-white mt-1 leading-snug group-hover:text-orange-400 transition-colors">Rebuilding a dynasty: The new roadmap revealed.</h3>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="aspect-video w-full rounded-lg bg-white/5 overflow-hidden border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] text-blue-400 font-medium uppercase tracking-wide">Official</span>
<h3 className="text-sm font-medium text-white mt-1 leading-snug group-hover:text-blue-400 transition-colors">League schedules confirmed for 2024/25 season.</h3>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-8 mt-auto">
<div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-600">
<p>© 2024 Pitch Inc. All rights reserved.</p>
</div>
</footer>
</div>

<div className="hidden min-h-screen flex bg-[#050505]" id="admin-view">

<aside className="w-64 border-r border-white/5 bg-[#08090A] flex flex-col h-screen sticky top-0">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<span className="text-white font-medium tracking-tight">Pitch. <span className="text-gray-500">Admin</span></span>
</div>
<div className="p-4 flex flex-col gap-1 flex-grow">
<p className="px-3 py-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Content</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white bg-white/5 font-medium border border-white/5 shadow-sm" href="#">
<iconify-icon className="text-white" icon="solar:document-text-linear"></iconify-icon>
                    Posts
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all font-medium" href="#">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                    Players
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all font-medium" href="#">
<iconify-icon icon="solar:shield-star-linear"></iconify-icon>
                    Teams
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all font-medium" href="#">
<iconify-icon icon="solar:cup-linear"></iconify-icon>
                    Leagues
                </a>
<p className="px-3 py-2 mt-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">System</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all font-medium" href="#">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
                    Settings
                </a>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs text-white font-bold">
                        JD
                    </div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">John Doe</span>
<span className="text-[10px] text-gray-500">Editor in Chief</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">
<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#08090A]/50 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-2 text-sm text-gray-500">
<span>Admin</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-white">Posts</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<button className="bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        New Post
                    </button>
</div>
</header>
<div className="p-8 max-w-6xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">Total Views</span>
<iconify-icon className="text-gray-500" icon="solar:eye-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">1.2M</div>
<div className="text-[10px] text-green-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12% this week
                        </div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">Published Posts</span>
<iconify-icon className="text-gray-500" icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">342</div>
<div className="text-[10px] text-gray-500 mt-1">4 pending approval</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">Active Players</span>
<iconify-icon className="text-gray-500" icon="solar:user-id-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">2,405</div>
<div className="text-[10px] text-gray-500 mt-1">Database sync active</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="bg-transparent border border-white/10 rounded-lg py-1.5 pl-8 pr-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/20 w-64" placeholder="Search posts..." type="text"/>
</div>
<div className="h-6 w-[1px] bg-white/10 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-gray-400 hover:text-white transition-colors">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon>
                            Filter
                        </button>
</div>
</div>

<div className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.01]">
<table className="w-full text-left text-xs">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="px-6 py-3 font-medium text-gray-500 w-10">
<div className="w-4 h-4 border border-white/10 rounded bg-transparent flex items-center justify-center cursor-pointer"></div>
</th>
<th className="px-6 py-3 font-medium text-gray-500">Title</th>
<th className="px-6 py-3 font-medium text-gray-500">Author</th>
<th className="px-6 py-3 font-medium text-gray-500">Category</th>
<th className="px-6 py-3 font-medium text-gray-500">Status</th>
<th className="px-6 py-3 font-medium text-gray-500">Date</th>
<th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="w-4 h-4 border border-white/10 rounded bg-transparent flex items-center justify-center cursor-pointer hover:border-gray-400"></div>
</td>
<td className="px-6 py-4">
<div className="text-white font-medium">Tactical masterclass secures semi-final</div>
<div className="text-gray-600 mt-0.5">/news/tactical-masterclass-semi-final</div>
</td>
<td className="px-6 py-4 text-gray-400">Marcus Reed</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/10">UCL</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-gray-300">Published</span>
</span>
</td>
<td className="px-6 py-4 text-gray-500">Oct 24, 2024</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="w-4 h-4 border border-white/10 rounded bg-transparent flex items-center justify-center cursor-pointer hover:border-gray-400"></div>
</td>
<td className="px-6 py-4">
<div className="text-white font-medium">Transfer Talk: Madrid eyes young Brazilian</div>
<div className="text-gray-600 mt-0.5">/news/transfer-talk-madrid</div>
</td>
<td className="px-6 py-4 text-gray-400">Sarah Jenkins</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/10">Transfers</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-gray-300">Published</span>
</span>
</td>
<td className="px-6 py-4 text-gray-500">Oct 23, 2024</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="w-4 h-4 border border-white/10 rounded bg-transparent flex items-center justify-center cursor-pointer hover:border-gray-400"></div>
</td>
<td className="px-6 py-4">
<div className="text-white font-medium">Draft: 5 wonderkids to watch</div>
<div className="text-gray-600 mt-0.5">/news/draft-5-wonderkids</div>
</td>
<td className="px-6 py-4 text-gray-400">Marcus Reed</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/10">Scouting</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
<span className="text-gray-300">Draft</span>
</span>
</td>
<td className="px-6 py-4 text-gray-500">Oct 22, 2024</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>


    </>
  );
}
