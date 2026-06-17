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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-4 h-14 flex items-center justify-between">

<div className="flex items-center gap-4">
<button className="p-2 hover:bg-neutral-800 rounded-md transition-colors text-neutral-400">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#73AF6F]/10 flex items-center justify-center border border-[#73AF6F]/20 group-hover:border-[#73AF6F]/50 transition-all">
<span className="text-[#73AF6F] font-semibold tracking-tighter text-sm">V</span>
</div>
<span className="text-white font-medium tracking-tight text-lg">VIEWPOINT</span>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-2 pl-10 pr-4 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#73AF6F] focus:border-[#73AF6F] transition-all placeholder:text-neutral-600" placeholder="Search creators, videos, or tags..." type="text"/>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-all group">
<i className="w-4 h-4 text-neutral-400 group-hover:text-[#73AF6F] transition-colors" data-lucide="video"></i>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Upload</span>
</button>
<button className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-[#73AF6F] rounded-full border-2 border-neutral-950"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 border border-neutral-700 flex items-center justify-center text-xs font-medium text-white cursor-pointer">
                    JD
                </div>
</div>
</div>
</nav>
<div className="flex pt-14 min-h-screen">

<aside className="hidden lg:flex flex-col w-64 fixed h-[calc(100vh-3.5rem)] border-r border-neutral-800 bg-neutral-950/50 backdrop-blur-sm overflow-y-auto pb-4">
<div className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#73AF6F]/10 text-[#73AF6F] font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
                    Home
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-all text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="compass"></i>
                    Explore
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-all text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="zap"></i>
                    Shorts
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-all text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Subscriptions
                </a>
</div>
<div className="px-4 py-2">
<div className="h-px w-full bg-neutral-800"></div>
</div>
<div className="p-4 space-y-1">
<h3 className="px-3 text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Library</h3>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-all text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="history"></i>
                    History
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-all text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="thumbs-up"></i>
                    Liked Videos
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-all text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="clock"></i>
                    Watch Later
                </a>
</div>
<div className="px-4 py-2">
<div className="h-px w-full bg-neutral-800"></div>
</div>
<div className="p-4 space-y-3">
<h3 className="px-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Following</h3>

<div className="flex items-center justify-between px-3 py-1 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-800"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">TechDaily</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-[#73AF6F]"></div>
</div>
<div className="flex items-center justify-between px-3 py-1 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-800"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">DesignCourse</span>
</div>
</div>
<div className="flex items-center justify-between px-3 py-1 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-800"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">MusicLab</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-[#73AF6F]"></div>
</div>
</div>
<div className="mt-auto p-6">
<div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-900 border border-neutral-800 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#73AF6F]/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
<p className="text-xs font-medium text-white mb-1 relative z-10">Go Premium</p>
<p className="text-[10px] text-neutral-500 mb-3 relative z-10">Ad-free viewing &amp; exclusive content.</p>
<button className="w-full py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors relative z-10">Upgrade</button>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 p-6 overflow-x-hidden">

<section className="mb-12 relative rounded-2xl overflow-hidden border border-neutral-800 isolate">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#73AF6F]/10 via-neutral-950/0 to-neutral-950/0 opacity-50"></div>
<div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#73AF6F]"></span>
<span className="text-xs font-medium text-neutral-400">Platform Update 2.0</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                            Creators, meet your <br/> <span className="text-[#73AF6F]">new home</span>.
                        </h1>
<p className="text-neutral-400 max-w-md text-sm leading-relaxed">
                            Higher revenue share, community-first tools, and a pixel-perfect player. Experience the next generation of video streaming today.
                        </p>
<div className="flex items-center gap-4 pt-2">
<button className="px-5 py-2.5 bg-[#73AF6F] text-neutral-950 font-medium text-sm rounded-lg hover:bg-[#659e61] transition-all shadow-[0_0_20px_-5px_#73AF6F50]">
                                Start Creating
                            </button>
<button className="px-5 py-2.5 bg-transparent border border-neutral-700 text-neutral-300 font-medium text-sm rounded-lg hover:bg-neutral-800 transition-colors">
                                Watch Showreel
                            </button>
</div>
</div>

<div className="relative group">
<div className="aspect-video bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl relative">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950"></div>
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/20 transition-all">
<i className="w-6 h-6 text-white ml-1 fill-white" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden">
<div className="h-full w-1/3 bg-[#73AF6F]"></div>
</div>
<span className="text-[10px] text-white/70 font-mono">04:20</span>
</div>
</div>

<div className="absolute -inset-1 bg-gradient-to-r from-[#73AF6F]/20 to-purple-500/0 rounded-2xl blur-2xl -z-10 opacity-30"></div>
</div>
</div>
</section>

<div className="flex gap-3 overflow-x-auto pb-6 mb-2 scrollbar-hide">
<button className="px-4 py-1.5 rounded-lg bg-white text-neutral-950 text-xs font-medium whitespace-nowrap">All</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium whitespace-nowrap transition-all">Gaming</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium whitespace-nowrap transition-all">Technology</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium whitespace-nowrap transition-all">Music</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium whitespace-nowrap transition-all">Live</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium whitespace-nowrap transition-all">Education</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium whitespace-nowrap transition-all">Design</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">12:04</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Building a SaaS in 24 Hours</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">Alex Codes</span>
<span>14K views • 2 hours ago</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">08:30</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Mountain Photography Essentials</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">Sarah Lens</span>
<span>82K views • 5 hours ago</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">Live</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Cyberpunk Design Systems</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">Neon Studios</span>
<span className="text-[#73AF6F]">Streaming Now</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">24:10</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">The Psychology of Color</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">Creative Minds</span>
<span>230K views • 1 day ago</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">10:05</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Minimalist Desk Setup Tour</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">Tech Space</span>
<span>45K views • 3 days ago</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">15:42</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Synthesizer Sound Design</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">AudioLabs</span>
<span>12K views • 4 days ago</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">05:15</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Future of Transportation</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">City Planning</span>
<span>9K views • 5 days ago</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-neutral-900 mb-3 overflow-hidden relative border border-neutral-800/50">
<img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-neutral-950/80 backdrop-blur-sm rounded text-[10px] font-medium text-white">18:00</div>
</div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 flex-shrink-0 mt-0.5 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-[#73AF6F] transition-colors">Advanced CSS Animations</h3>
<div className="text-xs text-neutral-500 flex flex-col gap-0.5">
<span className="hover:text-neutral-300 transition-colors">DevTips</span>
<span>102K views • 1 week ago</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-neutral-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">© 2024 Viewpoint Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</main>
</div>


    </>
  );
}
