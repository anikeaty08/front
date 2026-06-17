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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



        lucide.createIcons();

        function showProfile(name, avatar, posts, vids) {
            // Populate data
            document.getElementById('profile-name').innerText = name;
            document.getElementById('profile-avatar').src = avatar;
            document.getElementById('profile-posts').innerText = posts;

            // Transition
            const home = document.getElementById('home-view');
            const profile = document.getElementById('profile-view');
            
            home.style.opacity = '0';
            setTimeout(() => {
                home.classList.add('hidden');
                profile.classList.remove('hidden');
                // Force reflow
                void profile.offsetWidth;
                profile.style.opacity = '1';
                
                // Re-init icons for the new view just in case
                lucide.createIcons();
            }, 300);
        }

        function showHome() {
            const home = document.getElementById('home-view');
            const profile = document.getElementById('profile-view');

            profile.style.opacity = '0'; // If we added opacity transition to profile
            profile.classList.add('hidden');
            home.classList.remove('hidden');
            setTimeout(() => {
                home.style.opacity = '1';
            }, 50);
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-600/5 rounded-full blur-[100px]"></div>
</div>

<aside className="hidden md:flex flex-col w-64 h-full border-r border-white/5 bg-zinc-900/40 backdrop-blur-xl z-20 relative">
<div className="p-5 flex items-center gap-3 cursor-pointer" onclick="showHome()">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<i className="text-white w-5 h-5" data-lucide="aperture"></i>
</div>
<span className="font-semibold text-zinc-100 tracking-tight text-lg">OFL.</span>
</div>
<nav className="flex-1 px-3 space-y-1 overflow-y-auto">
<div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Discover</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-zinc-100 border border-white/5 shadow-sm transition-all hover:bg-white/10" onclick="showHome()">
<i className="w-4 h-4 text-indigo-400" data-lucide="layout-grid"></i>
<span className="text-sm font-medium">Browse All</span>
</button>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4 group-hover:text-orange-400 transition-colors" data-lucide="flame"></i>
<span className="text-sm font-medium">Trending</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4 group-hover:text-yellow-400 transition-colors" data-lucide="sparkles"></i>
<span className="text-sm font-medium">New Arrivals</span>
</a>
<div className="mt-6 px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Collections</div>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="folder-heart"></i>
<span className="text-sm font-medium">Favorites</span>
</div>
<span className="text-xs text-zinc-600 bg-zinc-900/50 px-1.5 py-0.5 rounded border border-white/5">12</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="lock"></i>
<span className="text-sm font-medium">Purchased</span>
</div>
</a>
</nav>
<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/5 transition-all group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<span className="text-xs font-medium text-zinc-300">GU</span>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-zinc-200">Guest User</span>
<span className="text-xs text-zinc-500">Upgrade Plan</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative z-10 overflow-hidden bg-zinc-950">

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-full pl-10 pr-4 py-2 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-600" placeholder="Search creators..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>
</div>
</header>

<div className="flex-1 flex flex-col overflow-hidden transition-opacity duration-300" id="home-view">

<div className="flex flex-col border-b border-white/5 bg-zinc-900/20 backdrop-blur-sm z-20">
<div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-medium border border-indigo-500 shadow-sm shadow-indigo-500/20">All</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10 text-xs font-medium transition-all">Popular</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10 text-xs font-medium transition-all">Newest</button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">4,231 active creators</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

<div className="group relative bg-zinc-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer" onclick="showProfile('Bella Azure', 'https://ui-avatars.com/api/?name=BA&amp;background=6366f1&amp;color=fff', '42', '8')">
<div className="aspect-[3/4] w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-2 left-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-500 text-white shadow-sm">NEW</span>
</div>
</div>
<div className="absolute bottom-0 w-full p-3 z-10">

<div className="flex items-center gap-3 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-zinc-900 shadow-sm" src="https://ui-avatars.com/api/?name=Bella+Azure&amp;background=6366f1&amp;color=fff&amp;size=64"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h3 className="text-sm font-medium text-white tracking-tight truncate">Bella Azure</h3>
<i className="w-3 h-3 text-indigo-400 fill-indigo-400/10" data-lucide="check-circle-2"></i>
</div>
<p className="text-[10px] text-zinc-400 truncate">@bella_azure</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500 border-t border-white/5 pt-2">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="image"></i> 42</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="video"></i> 8</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer" onclick="showProfile('Sarah V.', 'https://ui-avatars.com/api/?name=SV&amp;background=10b981&amp;color=fff', '156', '12')">
<div className="aspect-[3/4] w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-2 left-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 backdrop-blur-md">ONLINE</span>
</div>
</div>
<div className="absolute bottom-0 w-full p-3 z-10">
<div className="flex items-center gap-3 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-zinc-900 shadow-sm" src="https://ui-avatars.com/api/?name=Sarah+V&amp;background=10b981&amp;color=fff&amp;size=64"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h3 className="text-sm font-medium text-white tracking-tight truncate">Sarah V.</h3>
<i className="w-3 h-3 text-zinc-500" data-lucide="check-circle-2"></i>
</div>
<p className="text-[10px] text-zinc-400 truncate">@sarahv_official</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500 border-t border-white/5 pt-2">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="image"></i> 156</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="video"></i> 12</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer" onclick="showProfile('Ruby Rose', 'https://ui-avatars.com/api/?name=RR&amp;background=ec4899&amp;color=fff', '220', '41')">
<div className="aspect-[3/4] w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-700 to-indigo-900/30 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-2 left-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/20 backdrop-blur-md">HOT</span>
</div>
</div>
<div className="absolute bottom-0 w-full p-3 z-10">
<div className="flex items-center gap-3 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-zinc-900 shadow-sm" src="https://ui-avatars.com/api/?name=Ruby+Rose&amp;background=ec4899&amp;color=fff&amp;size=64"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h3 className="text-sm font-medium text-white tracking-tight truncate">Ruby Rose</h3>
<i className="w-3 h-3 text-indigo-400 fill-indigo-400/10" data-lucide="check-circle-2"></i>
</div>
<p className="text-[10px] text-zinc-400 truncate">@ruby_rose</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500 border-t border-white/5 pt-2">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="image"></i> 220</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="video"></i> 41</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer" onclick="showProfile('Jessy', 'https://ui-avatars.com/api/?name=JC&amp;background=f59e0b&amp;color=fff', '89', '4')">
<div className="aspect-[3/4] w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-700 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
</div>
<div className="absolute bottom-0 w-full p-3 z-10">
<div className="flex items-center gap-3 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-zinc-900 shadow-sm" src="https://ui-avatars.com/api/?name=Jessy+C&amp;background=f59e0b&amp;color=fff&amp;size=64"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h3 className="text-sm font-medium text-white tracking-tight truncate">Jessy</h3>
</div>
<p className="text-[10px] text-zinc-400 truncate">@jessy_cake</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500 border-t border-white/5 pt-2">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="image"></i> 89</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="video"></i> 4</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer" onclick="showProfile('Mikaela', 'https://ui-avatars.com/api/?name=MK&amp;background=8b5cf6&amp;color=fff', '120', '15')">
<div className="aspect-[3/4] w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
</div>
<div className="absolute bottom-0 w-full p-3 z-10">
<div className="flex items-center gap-3 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-zinc-900 shadow-sm" src="https://ui-avatars.com/api/?name=Mikaela&amp;background=8b5cf6&amp;color=fff&amp;size=64"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1">
<h3 className="text-sm font-medium text-white tracking-tight truncate">Mikaela</h3>
</div>
<p className="text-[10px] text-zinc-400 truncate">@mik_mik</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500 border-t border-white/5 pt-2">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="image"></i> 120</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col overflow-y-auto scroll-smooth bg-zinc-950 absolute inset-0 z-40" id="profile-view">

<div className="fixed top-20 left-6 z-50">
<button className="p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-black/70 transition-all group" onclick="showHome()">
<i className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
</button>
</div>

<div className="h-64 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-purple-900/40"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-zinc-950/0 to-zinc-950/0"></div>
<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
</div>

<div className="px-6 relative -mt-16 mb-8 flex flex-col md:flex-row items-end md:items-center gap-6">

<div className="relative">
<img className="w-32 h-32 rounded-full border-4 border-zinc-950 shadow-2xl bg-zinc-800 object-cover" id="profile-avatar" src=""/>
<div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-zinc-950" title="Online"></div>
</div>

<div className="flex-1 pb-2">
<div className="flex items-center gap-2 mb-1">
<h1 className="text-3xl font-bold text-white tracking-tight" id="profile-name">Name</h1>
<i className="w-6 h-6 text-indigo-400 fill-indigo-400/10" data-lucide="check-circle-2"></i>
</div>
<p className="text-zinc-400 text-sm max-w-md mb-3">Creating digital art and exclusive content. Join my premium tier for daily updates! 📸✨</p>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
<span className="text-white"><span className="font-bold" id="profile-posts">42</span> posts</span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="text-white"><span className="font-bold">12.5k</span> likes</span>
<span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="text-white"><span className="font-bold">2.1k</span> fans</span>
</div>
</div>

<div className="flex items-center gap-3 pb-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium text-sm transition-all shadow-lg shadow-indigo-500/20">
                        Subscribe $4.99
                    </button>
<button className="p-2.5 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
<button className="p-2.5 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
</div>
</div>

<div className="px-6 border-b border-white/5 mb-6 sticky top-0 bg-zinc-950/90 backdrop-blur-xl z-30 pt-2">
<div className="flex items-center gap-8">
<button className="pb-3 border-b-2 border-indigo-500 text-indigo-400 text-sm font-medium">All Posts</button>
<button className="pb-3 border-b-2 border-transparent text-zinc-400 hover:text-white text-sm font-medium transition-colors">Photos <span className="text-xs bg-white/10 px-1.5 rounded ml-1">12</span></button>
<button className="pb-3 border-b-2 border-transparent text-zinc-400 hover:text-white text-sm font-medium transition-colors">Videos <span className="text-xs bg-white/10 px-1.5 rounded ml-1">4</span></button>
<button className="pb-3 border-b-2 border-transparent text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"><i className="w-3 h-3" data-lucide="lock"></i> Premium</button>
</div>
</div>

<div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-600 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 rounded bg-black/40 backdrop-blur-md text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="pin"></i> PINNED
                        </span>
</div>
<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-sm text-white font-medium truncate">Welcome to my page! ✨</p>
<span className="text-xs text-zinc-400">2 days ago</span>
</div>
</div>

<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-indigo-900/20 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex justify-between items-end">
<div>
<p className="text-sm text-white font-medium truncate">Backstage peek</p>
<span className="text-xs text-zinc-400">5 hours ago</span>
</div>
<div className="flex items-center gap-1 text-xs text-white/80">
<i className="w-3.5 h-3.5" data-lucide="heart"></i> 240
                             </div>
</div>
</div>
</div>

<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group border border-amber-500/20">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-40"></div>
<div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-white" data-lucide="lock"></i>
</div>
<h3 className="text-white font-semibold text-sm mb-1">Exclusive Video</h3>
<p className="text-zinc-400 text-xs mb-4">Unlock to see the full 4k video shoot.</p>
<button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1">
                            Unlock for $10.00
                        </button>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">PREMIUM</span>
</div>
</div>

<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-sm text-white font-medium truncate">Sunday vibes ☀️</p>
<span className="text-xs text-zinc-400">1 day ago</span>
</div>
</div>

<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/5">

<div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 blur-xl opacity-30"></div>
<div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-white" data-lucide="lock"></i>
</div>
<h3 className="text-white font-semibold text-sm mb-1">Photoset #42</h3>
<p className="text-zinc-400 text-xs mb-4">15 High-res images.</p>
<button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1">
                            Unlock for $5.00
                        </button>
</div>
</div>

<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-zinc-700 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-sm text-white font-medium truncate">New outfit!</p>
<span className="text-xs text-zinc-400">3 days ago</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
