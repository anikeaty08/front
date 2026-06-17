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
      
<div className="flex w-full max-w-[1280px] h-full relative">

<header className="hidden sm:flex flex-col items-end sm:w-[88px] xl:w-[275px] h-screen sticky top-0 z-50 px-2 select-none">
<div className="flex flex-col h-full w-full xl:items-start items-center justify-between pb-4">

<div className="w-full mt-1 xl:ml-0 flex flex-col items-center xl:items-start space-y-2">

<a className="p-3 mb-2 rounded-full hover:bg-neutral-900 transition-colors w-min flex items-center justify-center" href="#">
<span className="text-3xl font-medium tracking-tighter leading-none">X</span>
</a>


<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full transition-colors" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:home" data-strokeWidth="2.5"></span> 
<span className="hidden xl:block text-xl font-bold tracking-tight">Home</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:search" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">Explore</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:bell" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">Notifications</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">Messages</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:square-slash" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">Grok</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:users" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">Communities</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:user" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">Profile</span>
</a>
<a className="group flex items-center gap-4 px-3 py-3 w-min xl:w-auto rounded-full hover:bg-neutral-900 transition-colors text-neutral-100" href="#">
<span className="iconify text-3xl sm:text-2xl" data-icon="lucide:more-horizontal" data-strokeWidth="1.5"></span>
<span className="hidden xl:block text-xl font-normal text-neutral-100">More</span>
</a>

<button className="mt-4 bg-white hover:bg-neutral-200 text-black rounded-full w-[52px] h-[52px] xl:w-[90%] xl:h-[52px] flex items-center justify-center transition-colors shadow-lg shadow-white/10">
<span className="hidden xl:block text-lg font-bold">Post</span>
<span className="block xl:hidden iconify text-2xl" data-icon="lucide:feather" data-strokeWidth="2"></span>
</button>
</div>

<div className="mb-4 w-full flex items-center xl:justify-between p-3 rounded-full hover:bg-neutral-900 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">

<span className="iconify text-neutral-400" data-icon="lucide:user" data-width="24"></span>
</div>
<div className="hidden xl:block text-sm">
<p className="font-bold leading-tight">User</p>
<p className="text-neutral-500 leading-tight">@username</p>
</div>
</div>
<span className="hidden xl:block iconify text-neutral-500" data-icon="lucide:more-horizontal"></span>
</div>
</div>
</header>

<main className="flex-1 w-full sm:max-w-[600px] border-x border-neutral-800 min-h-screen">

<div className="sticky top-0 z-40 bg-black/75 backdrop-blur-md border-b border-neutral-800">
<div className="block sm:hidden absolute left-4 top-4">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
<span className="text-xs font-bold">U</span>
</div>
</div>
<div className="block sm:hidden absolute top-3 left-0 right-0 mx-auto w-min">
<span className="text-2xl font-medium tracking-tighter">X</span>
</div>
<div className="block sm:hidden absolute right-4 top-4">
<span className="iconify text-xl" data-icon="lucide:settings" data-strokeWidth="1.5"></span>
</div>
<div className="flex w-full pt-14 sm:pt-0">
<div className="flex-1 hover:bg-neutral-900/50 cursor-pointer transition-colors h-[53px] flex flex-col justify-center items-center relative">
<span className="font-semibold text-sm">For you</span>
<div className="absolute bottom-0 w-14 h-1 bg-sky-500 rounded-full"></div>
</div>
<div className="flex-1 hover:bg-neutral-900/50 cursor-pointer transition-colors h-[53px] flex justify-center items-center text-neutral-500 font-medium text-sm">
                        Following
                    </div>
</div>
</div>

<div className="hidden sm:block border-b border-neutral-800 p-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex-shrink-0 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:user"></span>
</div>
<div className="flex-1 pt-2">
<textarea className="w-full bg-transparent text-xl placeholder-neutral-500 focus:outline-none resize-none overflow-hidden h-12" placeholder="What is happening?!"></textarea>
<div className="mt-2 text-sky-500 font-bold text-sm border-b border-neutral-800 pb-3 mb-3 flex items-center gap-2">
<span className="iconify text-sky-500" data-icon="lucide:globe" data-width="14"></span>
                            Everyone can reply
                        </div>
<div className="flex justify-between items-center">
<div className="flex gap-1 text-sky-500 -ml-2">
<button className="p-2 rounded-full hover:bg-sky-500/10 transition-colors"><span className="iconify" data-icon="lucide:image" data-strokeWidth="1.5" data-width="20"></span></button>
<button className="p-2 rounded-full hover:bg-sky-500/10 transition-colors"><span className="iconify" data-icon="lucide:file-type-gif" data-strokeWidth="1.5" data-width="20"></span></button>
<button className="p-2 rounded-full hover:bg-sky-500/10 transition-colors"><span className="iconify" data-icon="lucide:list-todo" data-strokeWidth="1.5" data-width="20"></span></button>
<button className="p-2 rounded-full hover:bg-sky-500/10 transition-colors"><span className="iconify" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="20"></span></button>
<button className="p-2 rounded-full hover:bg-sky-500/10 transition-colors"><span className="iconify" data-icon="lucide:calendar-clock" data-strokeWidth="1.5" data-width="20"></span></button>
<button className="p-2 rounded-full hover:bg-sky-500/10 transition-colors opacity-50"><span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="20"></span></button>
</div>
<button className="px-4 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full text-sm transition-colors opacity-50 cursor-not-allowed">
                                Post
                            </button>
</div>
</div>
</div>
</div>

<div className="h-12 border-b border-neutral-800 flex items-center justify-center text-sky-500 text-sm hover:bg-neutral-900/40 cursor-pointer transition-colors">
                Show 36 posts
            </div>

<article className="p-4 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors cursor-pointer">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center font-bold text-white">
                        V
                    </div>
<div className="flex-1 w-full min-w-0">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm truncate">
<span className="font-bold text-neutral-100 hover:underline">Vercel</span>
<span className="iconify text-sky-500" data-fill="currentColor" data-icon="lucide:badge-check" data-width="14"></span>
<span className="text-neutral-500">@vercel</span>
<span className="text-neutral-500">·</span>
<span className="text-neutral-500 hover:underline">2h</span>
</div>
<button className="text-neutral-500 hover:text-sky-500 p-1 rounded-full hover:bg-sky-500/10 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
<div className="mt-1 text-sm text-neutral-100 leading-normal">
                            Ship faster. <br/>
                            The Next.js 14 release includes Turbopack, Server Actions stable, and more.
                        </div>
<div className="mt-3 rounded-2xl border border-neutral-800 overflow-hidden">
<div className="h-48 bg-neutral-900 flex items-center justify-center text-neutral-600 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black">
<span className="iconify" data-icon="lucide:triangle" data-width="48"></span>
</div>
</div>

<div className="mt-3 flex justify-between items-center text-neutral-500 max-w-md">
<button className="group flex items-center gap-1 hover:text-sky-500 transition-colors -ml-2 p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">24</span>
</button>
<button className="group flex items-center gap-1 hover:text-emerald-500 transition-colors p-2 rounded-full hover:bg-emerald-500/10">
<span className="iconify" data-icon="lucide:repeat-2" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">182</span>
</button>
<button className="group flex items-center gap-1 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-pink-600/10">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">1.2k</span>
</button>
<button className="group flex items-center gap-1 hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">48k</span>
</button>
<div className="flex">
<button className="group hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:bookmark" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="group hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:share" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>
</article>

<article className="p-4 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors cursor-pointer">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-black font-bold">
                        D
                    </div>
<div className="flex-1 w-full min-w-0">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm truncate">
<span className="font-bold text-neutral-100 hover:underline">Design Daily</span>
<span className="text-neutral-500">@designdaily</span>
<span className="text-neutral-500">·</span>
<span className="text-neutral-500 hover:underline">5h</span>
</div>
<button className="text-neutral-500 hover:text-sky-500 p-1 rounded-full hover:bg-sky-500/10 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
<div className="mt-1 text-sm text-neutral-100 leading-normal">
                            Minimalism isn't about removing things you love. It's about removing the things that distract you from the things you love. <span className="text-sky-500">#design #ui</span>
</div>
<div className="mt-3 flex justify-between items-center text-neutral-500 max-w-md">
<button className="group flex items-center gap-1 hover:text-sky-500 transition-colors -ml-2 p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">4</span>
</button>
<button className="group flex items-center gap-1 hover:text-emerald-500 transition-colors p-2 rounded-full hover:bg-emerald-500/10">
<span className="iconify" data-icon="lucide:repeat-2" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">12</span>
</button>
<button className="group flex items-center gap-1 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-pink-600/10">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">89</span>
</button>
<button className="group flex items-center gap-1 hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">2.1k</span>
</button>
<div className="flex">
<button className="group hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:bookmark" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="group hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:share" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>
</article>

<article className="p-4 border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors cursor-pointer">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-orange-600 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        S
                    </div>
<div className="flex-1 w-full min-w-0">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-sm truncate">
<span className="font-bold text-neutral-100 hover:underline">Stripe</span>
<span className="iconify text-sky-500" data-fill="currentColor" data-icon="lucide:badge-check" data-width="14"></span>
<span className="text-neutral-500">@stripe</span>
<span className="text-neutral-500">·</span>
<span className="text-neutral-500 hover:underline">8h</span>
</div>
<button className="text-neutral-500 hover:text-sky-500 p-1 rounded-full hover:bg-sky-500/10 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
<div className="mt-1 text-sm text-neutral-100 leading-normal">
                            New: Financial Connections is now available in the UK 🇬🇧
                        </div>
<div className="mt-3 flex justify-between items-center text-neutral-500 max-w-md">
<button className="group flex items-center gap-1 hover:text-sky-500 transition-colors -ml-2 p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">15</span>
</button>
<button className="group flex items-center gap-1 hover:text-emerald-500 transition-colors p-2 rounded-full hover:bg-emerald-500/10">
<span className="iconify" data-icon="lucide:repeat-2" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">40</span>
</button>
<button className="group flex items-center gap-1 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-pink-600/10">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">305</span>
</button>
<button className="group flex items-center gap-1 hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs">10k</span>
</button>
<div className="flex">
<button className="group hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:bookmark" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="group hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10">
<span className="iconify" data-icon="lucide:share" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>
</article>
<div className="h-96"></div> 
</main>

<aside className="hidden lg:flex flex-col w-[350px] pl-8 py-1 h-screen sticky top-0 overflow-y-auto">

<div className="sticky top-0 bg-black z-20 pb-2 pt-1">
<div className="group bg-neutral-900 focus-within:bg-black focus-within:border-sky-500 border border-transparent rounded-full flex items-center px-4 py-2.5 transition-colors">
<span className="iconify text-neutral-500 group-focus-within:text-sky-500" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
<input className="bg-transparent text-sm ml-4 focus:outline-none text-white w-full placeholder-neutral-500" placeholder="Search" type="text"/>
</div>
</div>

<div className="bg-neutral-900 rounded-2xl p-4 mt-4 border border-transparent">
<h2 className="font-bold text-xl leading-tight mb-2">Subscribe to Premium</h2>
<p className="text-sm font-medium leading-tight text-neutral-200 mb-2.5">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
<button className="bg-sky-500 hover:bg-sky-600 transition-colors text-white font-bold rounded-full px-5 py-2 text-sm">Subscribe</button>
</div>

<div className="bg-neutral-900 rounded-2xl mt-4 border border-transparent pt-3 pb-1">
<h2 className="font-bold text-xl px-4 pb-2">What's happening</h2>
<div className="hover:bg-neutral-800/50 transition-colors px-4 py-3 cursor-pointer">
<div className="flex justify-between text-xs text-neutral-500 mb-0.5">
<span>Technology · Trending</span>
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="font-bold text-base leading-tight">Tailwind CSS</div>
<div className="text-xs text-neutral-500 mt-0.5">145k posts</div>
</div>
<div className="hover:bg-neutral-800/50 transition-colors px-4 py-3 cursor-pointer">
<div className="flex justify-between text-xs text-neutral-500 mb-0.5">
<span>Sports · Trending</span>
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="font-bold text-base leading-tight">Formula 1</div>
<div className="text-xs text-neutral-500 mt-0.5">52k posts</div>
</div>
<div className="hover:bg-neutral-800/50 transition-colors px-4 py-3 cursor-pointer">
<div className="flex justify-between text-xs text-neutral-500 mb-0.5">
<span>Business · Trending</span>
<span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span>
</div>
<div className="font-bold text-base leading-tight">Nvidia</div>
<div className="text-xs text-neutral-500 mt-0.5">320k posts</div>
</div>
<div className="px-4 py-4 text-sky-500 text-sm hover:text-sky-400 cursor-pointer transition-colors">
                    Show more
                </div>
</div>

<div className="bg-neutral-900 rounded-2xl mt-4 border border-transparent pt-3 pb-1">
<h2 className="font-bold text-xl px-4 pb-2">Who to follow</h2>
<div className="hover:bg-neutral-800/50 transition-colors px-4 py-3 cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-xs">L</div>
<div>
<div className="font-bold text-sm hover:underline">Linear</div>
<div className="text-neutral-500 text-sm">@linear</div>
</div>
</div>
<button className="bg-white hover:bg-neutral-200 text-black font-bold text-sm px-4 py-1.5 rounded-full transition-colors">Follow</button>
</div>
<div className="hover:bg-neutral-800/50 transition-colors px-4 py-3 cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-xs">R</div>
<div>
<div className="font-bold text-sm hover:underline">React</div>
<div className="text-neutral-500 text-sm">@reactjs</div>
</div>
</div>
<button className="bg-white hover:bg-neutral-200 text-black font-bold text-sm px-4 py-1.5 rounded-full transition-colors">Follow</button>
</div>
<div className="px-4 py-4 text-sky-500 text-sm hover:text-sky-400 cursor-pointer transition-colors">
                    Show more
                </div>
</div>
<footer className="p-4 text-xs text-neutral-500 leading-relaxed">
<nav className="flex flex-wrap gap-x-3 gap-y-1">
<a className="hover:underline" href="#">Terms of Service</a>
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Cookie Policy</a>
<a className="hover:underline" href="#">Accessibility</a>
<a className="hover:underline" href="#">Ads info</a>
<div className="flex items-center gap-1 cursor-pointer hover:underline">More <span className="iconify" data-icon="lucide:more-horizontal" data-width="12"></span></div>
<span>© 2024 X Corp.</span>
</nav>
</footer>
</aside>

<nav className="sm:hidden fixed bottom-0 w-full bg-black border-t border-neutral-800 flex justify-between items-center px-6 py-3 pb-5 z-50">
<a className="text-neutral-50" href="#"><span className="iconify" data-icon="lucide:home" data-strokeWidth="2.5" data-width="26"></span></a>
<a className="text-neutral-500" href="#"><span className="iconify" data-icon="lucide:search" data-strokeWidth="2" data-width="26"></span></a>
<a className="text-neutral-500" href="#"><span className="iconify" data-icon="lucide:users" data-strokeWidth="2" data-width="26"></span></a>
<a className="text-neutral-500" href="#"><span className="iconify" data-icon="lucide:bell" data-strokeWidth="2" data-width="26"></span></a>
<a className="text-neutral-500" href="#"><span className="iconify" data-icon="lucide:mail" data-strokeWidth="2" data-width="26"></span></a>
</nav>

<button className="sm:hidden fixed bottom-20 right-4 bg-sky-500 text-white p-3.5 rounded-full shadow-lg shadow-sky-500/20 z-40">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="2.5" data-width="24"></span>
</button>
</div>

    </>
  );
}
