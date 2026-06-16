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
sans: ['Inter', 'system-ui', 'sans-serif'],
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                class: "text-current" 
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="w-72 border-r border-white/5 bg-zinc-950/50 flex-col hidden lg:flex">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
<i className="w-5 h-5" data-lucide="radar"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-white">OSINT Toolkit</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="history"></i>
                    History
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="bookmark"></i>
                    Saved Tools
                </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Categories</div>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="mail"></i>
                        Email Lookup
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="phone"></i>
                        Phone Lookup
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="user"></i>
                        Username Search
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="globe"></i>
                        Domain/IP
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="shield-alert"></i>
                        Breach Check
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-500 group-hover:text-white" data-lucide="image"></i>
                        Image Search
                    </div>
</a>
</nav>
<div className="p-4 border-t border-white/5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
<span>User Account</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-4 lg:px-8 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-4 flex-1">
<button className="lg:hidden text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<div className="relative w-full max-w-md hidden md:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-lg pl-10 pr-4 py-1.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all" placeholder="Search tools, domains, or functions..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-800 rounded border border-white/5">⌘K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
<button className="text-zinc-400 hover:text-white">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-4 lg:p-8">

<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Explore Tools</h1>
<p className="text-base text-zinc-400 max-w-2xl">Access a curated database of open source intelligence utilities. Search across multiple breaches, domains, and public records.</p>
</div>

<div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-zinc-950 text-sm font-medium shadow-sm ring-1 ring-inset ring-zinc-200">
                        All Tools
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium ring-1 ring-inset ring-white/10 transition-all whitespace-nowrap">
<i className="w-3.5 h-3.5" data-lucide="mail"></i>
                        Email
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium ring-1 ring-inset ring-white/10 transition-all whitespace-nowrap">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
                        Phone
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium ring-1 ring-inset ring-white/10 transition-all whitespace-nowrap">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                        Username
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium ring-1 ring-inset ring-white/10 transition-all whitespace-nowrap">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>
                        Domain
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium ring-1 ring-inset ring-white/10 transition-all whitespace-nowrap">
<i className="w-3.5 h-3.5" data-lucide="shield-alert"></i>
                        Breach
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium ring-1 ring-inset ring-white/10 transition-all whitespace-nowrap">
<i className="w-3.5 h-3.5" data-lucide="image"></i>
                        Image
                    </button>
</div>

<div className="mb-10">
<div className="flex items-center gap-2 mb-4">
<i className="w-4 h-4 text-amber-400" data-lucide="sparkles"></i>
<h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Featured Tools</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="group relative flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" data-lucide="external-link"></i>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-semibold text-lg">
                                    D
                                </div>
<button className="text-amber-400/80 hover:text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</button>
</div>
<div>
<h3 className="font-medium text-zinc-100 mb-1">DeHashed</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/10">
                                        Breach
                                    </span>
</div>
<p className="text-base text-zinc-400 line-clamp-2">Search hacked database entries and view compromised credentials.</p>
</div>
</div>

<div className="group relative flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" data-lucide="external-link"></i>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-semibold text-lg">
                                    G
                                </div>
<button className="text-zinc-600 hover:text-amber-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<div>
<h3 className="font-medium text-zinc-100 mb-1">GeoGuessr</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                                        Geolocation
                                    </span>
</div>
<p className="text-base text-zinc-400 line-clamp-2">Practice geolocation skills and identify locations from imagery.</p>
</div>
</div>

<div className="group relative flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" data-lucide="external-link"></i>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-semibold text-lg">
                                    H
                                </div>
<button className="text-zinc-600 hover:text-amber-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<div>
<h3 className="font-medium text-zinc-100 mb-1">Hunter.io</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/10">
                                        Email
                                    </span>
</div>
<p className="text-base text-zinc-400 line-clamp-2">Find email addresses associated with a specific domain.</p>
</div>
</div>

<div className="group relative flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" data-lucide="external-link"></i>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-semibold text-lg">
                                    N
                                </div>
<button className="text-zinc-600 hover:text-amber-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<div>
<h3 className="font-medium text-zinc-100 mb-1">Numverify</h3>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/10">
                                        Phone
                                    </span>
</div>
<p className="text-base text-zinc-400 line-clamp-2">Validate phone numbers and retrieve carrier information.</p>
</div>
</div>
</div>
</div>

<div className="mb-10">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="grid"></i>
<h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">All Tools</h2>
</div>
<span className="text-xs font-medium text-zinc-500">16 tools available</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    S
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">Sherlock</h3>
<p className="text-xs text-zinc-500 truncate">Username Search</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Hunt down social media accounts by username across social networks.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    S
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">Social Searcher</h3>
<p className="text-xs text-zinc-500 truncate">Social Media</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Real-time search across social media for content and mentions.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    T
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">TinEye</h3>
<p className="text-xs text-zinc-500 truncate">Image Reverse</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Reverse image search engine to find where images appear online.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    W
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">WHOIS Lookup</h3>
<p className="text-xs text-zinc-500 truncate">Domain</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Retrieve domain registration and ownership information.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    H
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">HIBP</h3>
<p className="text-xs text-zinc-500 truncate">Breach Check</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Check if your email or phone number has been in a data breach.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    L
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">LeakCheck</h3>
<p className="text-xs text-zinc-500 truncate">Breach Check</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Search through public database leaks to protect your data.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    N
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">Namechk</h3>
<p className="text-xs text-zinc-500 truncate">Username</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Check username availability across dozens of platforms.</p>
</div>

<div className="group flex flex-col p-5 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-medium text-sm">
                                    P
                                </div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-200 truncate">PimEyes</h3>
<p className="text-xs text-zinc-500 truncate">Face Recognition</p>
</div>
<button className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
</div>
<p className="text-base text-zinc-400 mt-1">Face recognition reverse image search engine.</p>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
