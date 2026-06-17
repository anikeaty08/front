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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) lucide.createIcons();
      });

      // Sidebar toggle for mobile
      const toggleSidebar = document.getElementById('toggleSidebar');
      const sidebar = document.getElementById('sidebar');
      if (toggleSidebar && sidebar) {
        toggleSidebar.addEventListener('click', () => {
          sidebar.classList.toggle('hidden');
          sidebar.classList.toggle('col-span-12');
        });
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
      <div className="fixed -z-10 bg-center w-full h-screen bg-cover top-0" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be206780-0f77-4dcc-ac19-c23373954370_3840w.webp")'}}></div>

<div className="aura-background-component fixed -z-0 mix-blend-screen w-full h-screen top-0"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>


<main className="lg:max-w-[1400px] sm:px-6 max-w-[1280px] mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 relative">
<div className="border-gradient before:rounded-[28px] [animation:fadeSlideIn_0.5s_ease-out_0.05s_both] xl:bg-neutral-900/80 bg-neutral-900/80 rounded-[28px] mr-auto ml-auto shadow-[0_20px_120px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">

<div className="flex sm:px-6 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between [animation:fadeSlideIn_0.5s_ease-out_0.1s_both]">
<div className="flex gap-3 items-center [animation:fadeSlideIn_0.5s_ease-out_0.15s_both]">
<div className="flex gap-2 items-center">
<span className="h-3.5 w-3.5 rounded-full bg-red-500/90"></span>
<span className="h-3.5 w-3.5 rounded-full bg-amber-400/90"></span>
<span className="h-3.5 w-3.5 rounded-full bg-emerald-500/90"></span>
</div>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[32px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68306075-daa4-4cfd-81c0-40bc80d6e306_1600w.png)] bg-cover rounded" href="#"></a>
</div>

<div className="flex items-center gap-2 sm:gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both]">
<div className="hidden md:flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5">
<svg className="lucide lucide-search w-4 h-4 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-48 bg-transparent text-sm placeholder:text-slate-500 focus:outline-none" placeholder="Search projects..."/>
</div>
<button className="inline-flex md:hidden items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 text-sm font-geist" id="toggleSidebar">
<svg className="lucide lucide-panel-left-open w-4 h-4" data-lucide="panel-left-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="m14 9 3 3-3 3"></path></svg>
              Menu
            </button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 text-sm">
<svg className="lucide lucide-sparkles w-4 h-4 text-amber-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="hidden sm:inline font-geist">Create</span>
</button>
<button className="inline-flex items-center justify-center rounded-full border-gradient before:rounded-full bg-white/5 p-2">
<img alt="avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af217199-c7df-4e3d-99ba-92399e8072ca_320w.webp"/>
</button>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="col-span-12 md:col-span-3 lg:col-span-3 border-white/5 border-r" id="sidebar">
<div className="p-4 sm:p-6">
<div className="mb-6 [animation:fadeSlideIn_0.5s_ease-out_0.25s_both]">
<h1 className="text-[22px] sm:text-2xl text-white tracking-tighter font-geist font-semibold">Creative Studio</h1>
</div>
<nav className="space-y-6">
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.3s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400 font-geist">Workspace</p>
<ul className="space-y-1">
<li className="">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-home w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        Dashboard
                      </a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-search w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                        Explore
                      </a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-info w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        Documentation
                      </a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.35s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400 font-geist">Collections</p>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        New project
                      </a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-star w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        Starred
                      </a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-library w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
                        All projects
                      </a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.4s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400 font-geist">Gallery</p>
<div className="grid grid-cols-3 gap-2">
<img alt="3D" className="aspect-[4/3] rounded-lg object-cover border-gradient before:rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c33c8405-801f-4e05-abce-3b1b89f1075b_320w.webp"/>
<img alt="render" className="aspect-[4/3] rounded-lg object-cover border-gradient before:rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f679b94-a38d-402a-9941-da09e0296637_320w.webp"/>
<img alt="mountains" className="aspect-[4/3] rounded-lg object-cover border-gradient before:rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bdb17313-e7eb-43d5-99fa-eb9f5e0d19d5_320w.webp"/>
<img alt="face" className="aspect-[4/3] rounded-lg object-cover border-gradient before:rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b7e0161e-629f-4e82-bdc9-6b8675f98315_320w.webp"/>
<img alt="minimal" className="aspect-[4/3] rounded-lg object-cover border-gradient before:rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a916223-1444-45e0-a3b4-2872db0ff05c_320w.webp"/>
<div className="rounded-lg border-gradient before:rounded-lg flex items-center justify-center text-xs text-slate-400 font-geist">+ Add</div>
</div>
</div>
<div className="space-y-1 [animation:fadeSlideIn_0.5s_ease-out_0.45s_both]">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-settings w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Preferences
                  </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 font-geist" href="#">
<svg className="lucide lucide-life-buoy w-4 h-4 text-slate-400 group-hover:text-slate-200" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                    Support
                  </a>
</div>
</nav>
</div>

<div className="sm:p-6 border-white/5 border-t mt-auto pt-4 pr-4 pb-4 pl-4 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both]">
<div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border-gradient before:rounded-xl">
<img alt="profile" className="h-9 w-9 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9bf583f7-9a93-46c4-bb0a-4effddb01c86_320w.webp"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate font-geist">Alex Chen</p>
<p className="text-xs text-slate-400 truncate font-geist">alex@studio.com</p>
</div>
<button className="ml-auto inline-flex items-center justify-center rounded-md border-gradient before:rounded-md bg-white/5 p-1.5">
<svg className="lucide lucide-log-out w-4 h-4 text-slate-400" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</div>
</aside>

<section className="col-span-12 md:col-span-9 lg:col-span-9 relative">
<div className="relative h-full min-h-[720px] flex flex-col">

<div className="flex-1 sm:px-8 overflow-y-auto pt-8 pr-4 pb-8 pl-4 space-y-6">

<div className="flex items-start gap-3 justify-end [animation:fadeSlideIn_0.5s_ease-out_0.55s_both]">
<div className="rounded-2xl bg-white/10 backdrop-blur-sm text-sm px-4 py-2.5 max-w-[75%] shadow-sm border-gradient before:rounded-2xl">
<p className="text-slate-200 font-geist">Generate a cinematic portrait of a woman at sunset on the coast.</p>
</div>
<img alt="me" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/59a49325-7d05-44f4-94c1-8295e25713ed_320w.webp"/>
</div>

<div className="flex items-start gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.6s_both]">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-medium border-gradient before:rounded-full font-geist">AI</div>
<div className="relative">
<div className="border-gradient before:rounded-2xl text-sm bg-black/40 max-w-[680px] rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow backdrop-blur-sm">
<p className="text-slate-200 font-geist">
                        Creating a cinematic scene: A woman in elegant summer attire stands by the shoreline during golden hour, warm sunset light creating a dreamy atmosphere with gentle ocean waves and soft bokeh in the background.
                      </p>
</div>
<div className="-right-12 -translate-y-1/2 hidden flex-col md:flex md:top-1/2 md:right-[-16px] absolute top-1/2 gap-x-2 gap-y-2">
<button className="border-gradient before:rounded-full hover:bg-white/10 bg-white/5 rounded-full pt-2 pr-2 pb-2 pl-2 backdrop-blur-lg">
<svg className="lucide lucide-thumbs-up w-4 h-4 text-slate-300" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</button>
<button className="border-gradient before:rounded-full hover:bg-white/10 bg-white/5 rounded-full pt-2 pr-2 pb-2 pl-2 backdrop-blur-lg">
<svg className="lucide lucide-thumbs-down w-4 h-4 text-slate-300" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
</button>
<button className="border-gradient before:rounded-full hover:bg-white/10 bg-white/5 rounded-full pt-2 pr-2 pb-2 pl-2 backdrop-blur-lg">
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-300" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</div>
</div>

<div className="flex gap-5 pl-11 gap-x-5 gap-y-5 items-end [animation:fadeSlideIn_0.5s_ease-out_0.65s_both]">
<img alt="concept 1" className="w-44 aspect-[3/4] rounded-2xl object-cover shadow-xl ring-1 ring-black/50 border-gradient before:rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0bf364af-8ad0-4435-b229-5c48843e8db2_800w.webp"/>
<img alt="concept 2" className="aspect-[3/4] border-gradient before:rounded-2xl w-44 object-cover ring-black/50 ring-1 rounded-2xl shadow-xl translate-y-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aa1eeb81-ff3c-4af6-a3d3-380bc6ed5f98_800w.webp"/>
<img alt="concept 3" className="w-44 aspect-[3/4] rounded-2xl object-cover shadow-xl ring-1 ring-black/50 border-gradient before:rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/016cc096-bb65-4721-aaed-0b02fb62df45_800w.webp"/>
</div>

<div className="flex gap-3 gap-x-3 gap-y-3 items-start justify-end [animation:fadeSlideIn_0.5s_ease-out_0.7s_both]">
<div className="rounded-2xl bg-white/10 backdrop-blur-sm text-sm px-4 py-2.5 max-w-[75%] shadow-sm border-gradient before:rounded-2xl">
<p className="text-slate-200 font-geist">Perfect! Can you enhance the second one with more dramatic lighting?</p>
</div>
<img alt="me" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3b62420-5c07-4956-9d39-22d810ae74f6_320w.webp"/>
</div>

<div className="flex items-center gap-3 pl-11 [animation:fadeSlideIn_0.5s_ease-out_0.75s_both]">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-medium border-gradient before:rounded-full font-geist">AI</div>
<div className="flex items-center gap-2 text-sm text-slate-300 font-geist">
<svg className="animate-spin h-4 w-4 text-slate-300" viewbox="0 0 24 24">
<circle className="opacity-20" cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-80" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" fill="currentColor"></path>
</svg>
                    Processing enhancement with dramatic lighting...
                  </div>
</div>
</div>

<div className="px-4 sm:px-8 pb-8 [animation:fadeSlideIn_0.5s_ease-out_0.8s_both]">
<div className="mx-auto w-full lg:w-[80%] rounded-2xl border-gradient before:rounded-2xl bg-black/40 backdrop-blur-xl p-3 sm:p-4 shadow-2xl">
<div className="flex items-center gap-2 sm:gap-3 px-2 pb-2">
<button className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-slate-200 font-geist">
<svg className="lucide lucide-equal w-3.5 h-3.5" data-lucide="equal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="9" y2="9"></line><line x1="5" x2="19" y1="15" y2="15"></line></svg>
                      cinematic
                      <svg className="lucide lucide-x w-3.5 h-3.5 text-slate-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-slate-200 font-geist">
                      golden hour
                      <svg className="lucide lucide-x w-3.5 h-3.5 text-slate-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-slate-200 font-geist">
                      portrait
                      <svg className="lucide lucide-x w-3.5 h-3.5 text-slate-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex items-end gap-2 sm:gap-3">
<div className="relative flex-1">
<textarea className="w-full resize-none rounded-xl bg-transparent px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none" placeholder="Describe your vision in detail..." rows="2"></textarea>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center justify-center rounded-xl border-gradient before:rounded-xl bg-white/5 p-2.5">
<svg className="lucide lucide-image-up w-5 h-5 text-slate-300" data-lucide="image-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"></path><path d="m14 19.5 3-3 3 3"></path><path d="M17 22v-5.5"></path><circle cx="9" cy="9" r="2"></circle></svg>
</button>
<button className="inline-flex items-center justify-center rounded-xl border-gradient before:rounded-xl bg-white/5 p-2.5">
<svg className="lucide lucide-mic w-5 h-5 text-slate-300" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="inline-flex items-center justify-center rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-black px-4 py-2.5 text-sm font-medium font-geist">
<svg className="lucide lucide-send w-4 h-4 mr-1.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                        Generate
                      </button>
</div>
</div>
<p className="mt-2 px-1 text-[11px] text-slate-500 font-geist">
                    AI-generated content follows our usage policy and community guidelines. <a className="underline underline-offset-2 font-geist" href="#">Learn more</a>
</p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>


    </>
  );
}
