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

        // Toggle Theme Logic
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }

        // Router Logic
        function router(pageId) {
            const sections = document.querySelectorAll('.page-section');
            const target = document.getElementById('page-' + pageId);
            const mainViewport = document.getElementById('main-viewport');

            // Simple Fade Out
            mainViewport.style.opacity = '0';

            setTimeout(() => {
                sections.forEach(sec => sec.classList.add('hidden'));
                if(target) target.classList.remove('hidden');
                mainViewport.scrollTop = 0;
                mainViewport.style.opacity = '1';
            }, 200);
        }
        
        // Init
        document.addEventListener('DOMContentLoaded', () => {
            router('home');
            // Check local storage for theme preference in a real app
        });
    
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
      

<div className="noise-overlay"></div>

<nav className="md:w-20 flex flex-col dark:border-white/10 dark:bg-neutral-950 shrink-0 transition-colors duration-500 z-50 bg-white w-16 h-full border-black/10 border-r pt-8 pb-8 items-center justify-between">

<div className="flex flex-col gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:opacity-70 transition-opacity text-xl font-bold tracking-tighter font-display" href="#" onclick="router('home')">P.</a>
</div>

<div className="flex flex-col gap-8 w-full gap-x-8 gap-y-8 items-center">

<button className="nav-btn group relative flex items-center justify-center w-10 h-10 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all" onclick="router('home')" title="Home">
<svg className="lucide lucide-layout-grid w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect className="" height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>

<button className="nav-btn group flex hover:bg-black/5 dark:hover:bg-white/5 transition-all w-10 h-10 rounded relative items-center justify-center" onclick="router('cinema')" title="Cinema &amp; Analysis">
<svg className="lucide lucide-film group-hover:opacity-100 transition-opacity opacity-60 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path className="" d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</button>

<button className="nav-btn group relative flex items-center justify-center w-10 h-10 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all" onclick="router('atelier')" title="Art Atelier">
<svg className="lucide lucide-palette w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</button>

<button className="nav-btn group relative flex items-center justify-center w-10 h-10 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all" onclick="router('library')" title="Book Library">
<svg className="lucide lucide-book w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</button>

<button className="nav-btn group relative flex items-center justify-center w-10 h-10 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all" onclick="router('inner-circle')" title="Inner Circle">
<svg className="lucide lucide-feather group-hover:opacity-100 transition-opacity opacity-60 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
</button>
</div>

<div className="flex flex-col gap-6 gap-x-6 gap-y-6 items-center">

<button className="group flex hover:bg-black/5 dark:hover:bg-white/5 transition-all w-10 h-10 rounded relative items-center justify-center" onclick="toggleTheme()">
<svg className="lucide lucide-sun w-4 h-4 hidden dark:block opacity-60 group-hover:opacity-100" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="lucide lucide-moon w-4 h-4 block dark:hidden opacity-60 group-hover:opacity-100" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>

<button className="relative group" onclick="alert('Cart functionality would open here')">
<svg className="lucide lucide-shopping-bag w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path className="" d="M3.103 6.034h17.794"></path><path className="" d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-black dark:bg-white rounded-full"></span>
</button>

<button className="relative group" onclick="alert('Cart functionality would open here')">
<svg className="lucide lucide-square-user lucide-shopping-bag opacity-60 group-hover:opacity-100 transition-opacity w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="square-user" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(229, 229, 229)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="12" cy="10" r="3"></circle><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-black dark:bg-white rounded-full"></span>
</button>
</div>
</nav>

<main className="flex-1 h-full overflow-y-auto relative no-scrollbar bg-gray-50 dark:bg-neutral-950 transition-colors duration-500" id="main-viewport" style={{opacity: '1'}}>



<div className="page-section min-h-full md:p-12 pt-8 pr-8 pb-8 pl-8" id="page-home">
<header className="mb-12 fade-in">
<h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-4">The Polymath</h1>
<div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
<span className="">Filmmaker</span>
<span className="opacity-30">/</span>
<span>Artist</span>
<span className="opacity-30">/</span>
<span>Author</span>
<span className="opacity-30">/</span>
<span>Philosopher</span>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 fade-in" style={{animationDelay: '0.1s'}}>

<div className="group relative aspect-[3/4] border border-black/10 dark:border-white/10 cursor-pointer overflow-hidden bg-white dark:bg-black" onclick="router('cinema')">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=1925&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<svg className="lucide lucide-film w-5 h-5 text-white mix-blend-difference" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<span className="bg-red-600 text-white text-[0.6rem] px-2 py-1 uppercase tracking-widest font-bold">New Analysis</span>
</div>
<div className="">
<span className="text-[0.6rem] uppercase tracking-widest text-white mix-blend-difference mb-1 block">The Cinema</span>
<h3 className="font-display text-2xl text-white mix-blend-difference">CharacterPsychology</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] border border-black/10 dark:border-white/10 cursor-pointer overflow-hidden bg-white dark:bg-black" onclick="router('atelier')">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-between p-6">
<svg className="lucide lucide-palette w-5 h-5 text-white mix-blend-difference" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<div>
<span className="text-[0.6rem] uppercase tracking-widest text-white mix-blend-difference mb-1 block">The Atelier</span>
<h3 className="font-display text-2xl text-white mix-blend-difference">Originals&amp; Digital</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] border border-black/10 dark:border-white/10 cursor-pointer overflow-hidden bg-white dark:bg-black" onclick="router('library')">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-between p-6">
<svg className="lucide lucide-book w-5 h-5 text-white mix-blend-difference" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
<div>
<span className="text-[0.6rem] uppercase tracking-widest text-white mix-blend-difference mb-1 block">The Library</span>
<h3 className="font-display text-2xl text-white mix-blend-difference">SignedEditions</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] border border-black/10 dark:border-white/10 cursor-pointer overflow-hidden bg-white dark:bg-black" onclick="router('inner-circle')">
<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-800 dark:to-neutral-900">
</div>
<div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
</div>
<div className="absolute inset-0 flex flex-col justify-between p-6">
<div className="flex justify-between items-start">
<svg className="lucide lucide-feather w-5 h-5 text-neutral-900 dark:text-white" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<svg className="lucide lucide-lock w-4 h-4 opacity-40" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<span className="text-[0.6rem] uppercase tracking-widest opacity-60 mb-1 block">Inner Circle</span>
<h3 className="font-serif text-2xl italic">The Philosophyof Silence</h3>
</div>
</div>
</div>
</div>
</div>



<div className="page-section hidden min-h-full" id="page-cinema">

<div className="sticky top-0 z-30 w-full border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md p-6 flex justify-between items-center">
<h2 className="font-display uppercase tracking-tight text-xl">Cinema</h2>
<div className="flex gap-6 text-xs uppercase tracking-widest font-medium">
<button className="opacity-100 border-b border-current pb-1">All</button>
<button className="opacity-50 hover:opacity-100 transition-opacity">Psychology (YT)</button>
<button className="opacity-50 hover:opacity-100 transition-opacity">Original Films</button>
</div>
</div>

<div className="w-full aspect-video bg-black relative group cursor-pointer border-b border-black/10 dark:border-white/10">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-play w-8 h-8 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
<span className="bg-red-600 text-white px-2 py-1 text-[0.6rem] uppercase tracking-widest font-bold mb-3 inline-block">Latest Analysis</span>
<h3 className="font-display text-4xl text-white uppercase mb-2">The Joker: Chaos as Structure</h3>
<p className="text-white/70 text-sm max-w-2xl">A deep dive into the psychological framework of the modern anti-hero.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/10 dark:border-white/10">

<div className="p-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group cursor-pointer">
<div className="aspect-video bg-neutral-800 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2059&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black text-white text-[0.6rem] uppercase tracking-widest px-2 py-1">Original Short</span>
</div>
<h4 className="font-display text-xl mb-2">Echoes of Brutalism</h4>
<p className="font-serif text-sm opacity-70">A documentary exploring concrete architecture in post-soviet states.</p>
</div>

<div className="p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group cursor-pointer">
<div className="aspect-video bg-neutral-800 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-red-600 text-white text-[0.6rem] uppercase tracking-widest px-2 py-1">Analysis</span>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[0.6rem] px-1">14:20</div>
</div>
<h4 className="font-display text-xl mb-2">Patrick Bateman: The Void</h4>
<p className="font-serif text-sm opacity-70">Analyzing the emptiness of materialism in American Psycho.</p>
</div>
</div>
</div>



<div className="page-section hidden min-h-full" id="page-atelier">
<div className="p-12 border-b border-black/10 dark:border-white/10">
<h1 className="font-display text-6xl uppercase tracking-tighter mb-4">The Atelier</h1>
<p className="font-mono text-xs opacity-60 max-w-md">Curated works. Physical pieces are 1-of-1 originals. Digital assets include usage rights.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 border-b border-black/10 dark:border-white/10">

<div className="lg:col-span-1 border-r border-black/10 dark:border-white/10 p-8 group">
<div className="aspect-[4/5] bg-gray-200 dark:bg-neutral-800 mb-6 relative overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1578321272176-b7bbc0051ead?q=80&amp;w=1973&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black text-[0.6rem] uppercase tracking-widest px-2 py-1">Original 1/1</span>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl italic">Study in Entropy</h3>
<span className="font-mono text-sm">$1,200</span>
</div>
<p className="text-xs opacity-60 mb-6">Oil on Canvas, 24x36"</p>
<button className="w-full py-3 border border-current text-[0.6rem] uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Add to Cart</button>
</div>

<div className="lg:col-span-1 border-r border-black/10 dark:border-white/10 p-8 group">
<div className="aspect-[4/5] bg-gray-200 dark:bg-neutral-800 mb-6 relative overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 hue-rotate-90" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 border border-current bg-transparent backdrop-blur text-[0.6rem] uppercase tracking-widest px-2 py-1">Digital Asset</span>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl italic">Texture Pack Vol. 1</h3>
<span className="font-mono text-sm">$40</span>
</div>
<p className="text-xs opacity-60 mb-6">4K Scans, Commercial License</p>
<button className="w-full py-3 border border-current text-[0.6rem] uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Download</button>
</div>

<div className="lg:col-span-1 p-8 group opacity-60">
<div className="aspect-[4/5] bg-gray-200 dark:bg-neutral-800 mb-6 relative overflow-hidden grayscale">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-neutral-500 text-white text-[0.6rem] uppercase tracking-widest px-2 py-1">Sold Out</span>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl italic">Vespers</h3>
<span className="font-mono text-sm line-through">$850</span>
</div>
<p className="text-xs opacity-60 mb-6">Charcoal on Paper</p>
<button className="w-full py-3 border border-current text-[0.6rem] uppercase tracking-[0.2em] cursor-not-allowed">Unavailable</button>
</div>
</div>
</div>



<div className="page-section hidden min-h-full" id="page-library">
<div className="p-12 flex flex-col md:flex-row justify-between items-end border-b border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0f0f0f]">
<div>
<h1 className="font-display text-6xl uppercase tracking-tighter mb-2">The Library</h1>
<p className="font-mono text-xs opacity-60">Direct from the author.</p>
</div>
</div>
<div className="p-12 max-w-5xl mx-auto">

<div className="flex flex-col md:flex-row gap-12 items-center mb-20">
<div className="w-full md:w-1/3 shadow-2xl shadow-black/20 dark:shadow-black/50 rotate-1 hover:rotate-0 transition-transform duration-500">
<img alt="Book Cover" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-2/3">
<div className="flex items-center gap-3 mb-4">
<span className="text-[0.6rem] uppercase tracking-widest bg-black dark:bg-white text-white dark:text-black px-2 py-1">Signed Edition</span>
<span className="text-[0.6rem] uppercase tracking-widest border border-black/20 dark:border-white/20 px-2 py-1">Hardcover</span>
</div>
<h2 className="font-display text-4xl md:text-5xl uppercase mb-4">The Architecture of Silence</h2>
<p className="font-serif text-lg md:text-xl italic opacity-80 mb-8 leading-relaxed">
                            "A philosophical treatise on the necessity of quiet in a digital age. Exploring how we can reclaim our attention."
                        </p>
<div className="flex gap-6 items-center border-t border-black/10 dark:border-white/10 pt-6">
<span className="font-mono text-2xl">$28.00</span>
<button className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
                                Purchase Copy
                            </button>
</div>
<p className="text-[0.65rem] opacity-50 mt-4">* Includes personal dedication note.</p>
</div>
</div>
</div>
</div>



<div className="page-section hidden min-h-full" id="page-inner-circle">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">

<div className="lg:col-span-8 border-r border-black/10 dark:border-white/10">
<div className="p-12 border-b border-black/10 dark:border-white/10">
<h1 className="font-serif text-5xl italic mb-2">The Journal</h1>
<p className="text-sm font-mono opacity-60">Philosophy, critiques, and thoughts.</p>
</div>

<div className="flex flex-col">

<article className="p-8 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer group" onclick="router('post-free')">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-[0.6rem] uppercase tracking-widest opacity-50">Public Access</span>
</div>
<h2 className="font-display text-2xl mb-2 group-hover:underline decoration-1 underline-offset-4">The Myth of Multitasking</h2>
<p className="font-serif text-lg opacity-70 line-clamp-2">Why the modern brain fails to process distinct streams of information simultaneously.</p>
</article>

<article className="p-8 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer group bg-neutral-50 dark:bg-neutral-900/30" onclick="router('post-gated')">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<svg className="lucide lucide-lock w-3 h-3 text-orange-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-[0.6rem] uppercase tracking-widest opacity-50 text-orange-500 font-bold">Inner Circle</span>
</div>
<span className="text-[0.6rem] font-mono opacity-40">12 min read</span>
</div>
<h2 className="font-display text-2xl mb-2 opacity-80 group-hover:opacity-100">Structuring the Chaos</h2>
<p className="font-serif text-lg opacity-50 line-clamp-2 blur-[2px] select-none">The methodology I use to balance filmmaking, writing, and art without losing sanity...</p>
</article>
</div>
</div>

<div className="lg:col-span-4 bg-neutral-100 dark:bg-neutral-900 p-8 flex flex-col gap-12">

<div className="border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-black">
<h3 className="text-[0.6rem] uppercase tracking-widest mb-4 opacity-50">Membership Status</h3>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center">
<svg className="lucide lucide-user w-5 h-5 opacity-50" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="font-bold text-sm">Guest User</div>
<a className="text-[0.6rem] underline opacity-60 hover:opacity-100" href="#">Log in</a>
</div>
</div>
<button className="w-full py-2 bg-black text-white dark:bg-white dark:text-black text-[0.6rem] uppercase tracking-widest font-bold">Join Inner Circle</button>
</div>

<div className="border border-black/10 dark:border-white/10 p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-message-square w-4 h-4 text-orange-500" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 className="text-[0.6rem] uppercase tracking-widest font-bold">Ask Me Anything</h3>
</div>
<p className="font-serif text-sm italic opacity-70 mb-6">
                            "I answer one member's question every week in the newsletter. What's on your mind?"
                        </p>

<form onsubmit="event.preventDefault(); alert('Only Inner Circle members can submit questions.');">
<textarea className="w-full bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 p-3 text-xs font-mono mb-3 focus:outline-none focus:border-orange-500 transition-colors resize-none h-24" placeholder="Type your question here..."></textarea>
<div className="flex justify-between items-center">
<span className="text-[0.5rem] uppercase opacity-40">Members Only</span>
<button className="px-4 py-2 border border-black/10 dark:border-white/10 text-[0.6rem] uppercase hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors" type="submit">Submit</button>
</div>
</form>

<div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-[1px] flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
<div className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-[0.6rem] uppercase tracking-widest font-bold">Locked</div>
</div>
</div>
</div>
</div>
</div>



<div className="page-section hidden min-h-full bg-white dark:bg-neutral-950" id="page-post-gated">
<div className="max-w-3xl mx-auto py-20 px-8">
<button className="mb-8 text-xs uppercase tracking-widest hover:underline opacity-50" onclick="router('inner-circle')">← Back to Journal</button>
<span className="text-orange-500 text-[0.6rem] uppercase tracking-[0.2em] font-bold block mb-4">Inner Circle Exclusive</span>
<h1 className="font-display text-4xl md:text-6xl mb-8">Structuring the Chaos</h1>
<div className="font-serif text-xl leading-relaxed space-y-6 text-neutral-800 dark:text-neutral-300">
<p>
                        Every creative person I know suffers from the same affliction: the abundance of ideas and the scarcity of time. When you operate across multiple disciplines—film, writing, art—the noise can become deafening.
                    </p>
<p>
                        The solution isn't to do less. It's to create a framework where the disciplines feed each other rather than compete for attention.
                    </p>

<div className="relative mt-12">
<div className="gated-mask space-y-6 opacity-30 select-none filter blur-sm">
<p>
                                Step one is the separation of 'Input' days and 'Output' days. You cannot consume and create in the same breath. 
                            </p>
<p>
                                I use a modified version of the Zettelkasten method, but applied to visual assets. Every film frame I save becomes a potential painting reference. Every painting informs the color grading of my next video.
                            </p>
<p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
</div>

<div className="absolute inset-0 top-0 flex flex-col items-center pt-12">
<div className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-8 shadow-2xl max-w-sm text-center">
<svg className="lucide lucide-lock w-6 h-6 mx-auto mb-4 text-orange-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h3 className="font-display text-lg uppercase mb-2">Continue Reading</h3>
<p className="text-xs opacity-60 mb-6">Join the Inner Circle to access the full archive and the weekly AMA.</p>
<button className="w-full py-3 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-bold mb-3 hover:opacity-80">Subscribe • $5/mo</button>
<button className="text-[0.6rem] uppercase tracking-widest opacity-50 hover:opacity-100">Already a member? Login</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
