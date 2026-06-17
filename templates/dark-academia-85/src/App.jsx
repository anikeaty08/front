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
theme: {
extend: {
fontFamily: {
serif: ['"Crimson Pro"', 'serif'],
mono: ['"DM Mono"', 'monospace'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
stone: {
850: '#1f1c1a',
900: '#1c1917',
950: '#0c0a09',
},
amber: {
50: '#fffbeb',
950: '#451a03',
}
}
}
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
      

<header className="sticky top-0 z-50 w-full border-b border-stone-800 bg-stone-950/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<span className="iconify text-amber-600 text-2xl" data-height="24" data-icon="lucide:library" data-inline="false" data-width="24"></span>
<a className="text-xl font-semibold tracking-tight text-amber-50 hover:text-amber-500 transition-colors duration-300" href="#">
                    THE ARCHIVE
                </a>
</div>

<nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-stone-400">
<a className="hover:text-amber-500 transition-colors decoration-amber-700 underline-offset-4 hover:underline" href="#home">Home</a>
<a className="hover:text-amber-500 transition-colors decoration-amber-700 underline-offset-4 hover:underline" href="#writing">Writing</a>
<a className="hover:text-amber-500 transition-colors decoration-amber-700 underline-offset-4 hover:underline" href="#travel">Travel</a>
<a className="hover:text-amber-500 transition-colors decoration-amber-700 underline-offset-4 hover:underline" href="#photography">Photography</a>
<a className="hover:text-amber-500 transition-colors decoration-amber-700 underline-offset-4 hover:underline" href="#about">About</a>
</nav>

<div className="flex items-center gap-4">

<div className="hidden lg:flex items-center bg-stone-900 border border-stone-800 rounded-sm px-3 py-1.5 focus-within:border-amber-700 transition-colors group w-48">
<span className="iconify text-stone-500 group-focus-within:text-amber-600" data-icon="lucide:search" data-width="14"></span>
<input className="bg-transparent border-none text-xs font-mono text-stone-300 placeholder-stone-600 focus:ring-0 w-full ml-2 outline-none h-full" placeholder="Search archive..." type="text"/>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-amber-900/50 hover:border-amber-600 rounded-sm bg-amber-950/20 text-amber-500 hover:text-amber-400 font-mono text-xs transition-all uppercase tracking-wider">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
<span>Member Access</span>
</button>

<button className="md:hidden text-stone-400 hover:text-amber-50">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="w-full border-b border-stone-800 flex items-center px-6 py-1 bg-stone-900/50">
<span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest flex items-center gap-2">
                Index <span className="iconify" data-icon="lucide:chevron-right" data-width="10"></span> Current Volume
            </span>
</div>
</header>
<main className="w-full min-h-screen">

<section className="relative py-24 px-6 border-b border-stone-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950" id="home">
<div className="max-w-3xl mx-auto text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800 bg-stone-900/50 text-amber-600 font-mono text-xs tracking-wider uppercase mb-4">
<span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                    Est. 2024
                </div>
<h1 className="text-5xl md:text-7xl font-serif font-medium text-amber-50 tracking-tight leading-[1.1]">
                    The Digital Archive <br/> <span className="text-stone-400 italic font-light">of Curiosity</span>
</h1>
<p className="text-lg md:text-xl text-stone-400 font-serif leading-relaxed max-w-2xl mx-auto">
                    Exploring the intersection of philosophy, classical literature, and modern code. A curated collection of thoughts preserved in digital amber.
                </p>
<div className="pt-8 flex justify-center gap-4">
<button className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-mono text-xs uppercase tracking-widest rounded-sm transition-colors border border-amber-600 shadow-[0_0_15px_-3px_rgba(180,83,9,0.3)]">
                        Start Reading
                    </button>
<button className="px-6 py-3 bg-transparent border border-stone-700 hover:border-amber-700 text-stone-300 hover:text-amber-500 font-mono text-xs uppercase tracking-widest rounded-sm transition-colors">
                        Browse Index
                    </button>
</div>
</div>
</section>

<section className="border-b border-stone-800 bg-stone-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-800">

<a className="group block p-8 hover:bg-stone-800 transition-colors relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-6xl" data-icon="lucide:feather"></span>
</div>
<span className="font-mono text-xs text-amber-700 tracking-widest uppercase mb-2 block">Section A</span>
<h3 className="text-2xl font-serif text-stone-200 group-hover:text-amber-50 mb-2">Essays &amp; Writing</h3>
<p className="text-sm text-stone-500 font-serif italic">Philosophy, critique, and prose.</p>
</a>

<a className="group block p-8 hover:bg-stone-800 transition-colors relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-6xl" data-icon="lucide:camera"></span>
</div>
<span className="font-mono text-xs text-amber-700 tracking-widest uppercase mb-2 block">Section B</span>
<h3 className="text-2xl font-serif text-stone-200 group-hover:text-amber-50 mb-2">Visual Logs</h3>
<p className="text-sm text-stone-500 font-serif italic">Analog photography from the field.</p>
</a>

<a className="group block p-8 hover:bg-stone-800 transition-colors relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-6xl" data-icon="lucide:code"></span>
</div>
<span className="font-mono text-xs text-amber-700 tracking-widest uppercase mb-2 block">Section C</span>
<h3 className="text-2xl font-serif text-stone-200 group-hover:text-amber-50 mb-2">Code Repository</h3>
<p className="text-sm text-stone-500 font-serif italic">Snippets, systems, and logic.</p>
</a>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto" id="writing">
<div className="flex items-center justify-between mb-12 border-b border-stone-800 pb-4">
<h2 className="text-3xl font-serif text-amber-50 tracking-tight">Recent Manuscripts</h2>
<a className="font-mono text-xs text-amber-600 hover:text-amber-500 uppercase tracking-widest flex items-center gap-1" href="#">
                    View Full Index <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Library" className="w-full h-full object-cover sepia-[.3] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Oct 12, 2024</span>
<span>//</span>
<span>Philosophy</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        The Architecture of Silence
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        Exploring how physical spaces influence the quietude of the mind, drawing parallels between ancient libraries and modern minimalism.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Vintage Typewriter" className="w-full h-full object-cover sepia-[.4] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Oct 08, 2024</span>
<span>//</span>
<span>Technology</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Mechanical Keyboards &amp; Ink
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        Why the tactile feedback of old machinery still captivates us in an era of touchscreens and voice commands.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Foggy Forest" className="w-full h-full object-cover sepia-[.2] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Sep 29, 2024</span>
<span>//</span>
<span>Travel</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Notes from the Misty Isles
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        A week spent wandering through the northern highlands, chasing fog and the smell of peat fires.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Old Books" className="w-full h-full object-cover sepia-[.5] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Sep 21, 2024</span>
<span>//</span>
<span>Literature</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Recovering Lost Classics
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        The importance of preserving out-of-print editions and the digital restoration efforts of the 21st century.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Coding" className="w-full h-full object-cover sepia-[.3] opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Sep 15, 2024</span>
<span>//</span>
<span>Code</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Algorithmic Beauty
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        Finding the aesthetic patterns within recursive functions and fractal generation. Code as art.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Statue" className="w-full h-full object-cover sepia-[.6] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Sep 02, 2024</span>
<span>//</span>
<span>History</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Stone &amp; Memory
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        How monuments change meaning over centuries, and what remains when the inscriptions fade.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Coffee" className="w-full h-full object-cover sepia-[.3] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Aug 28, 2024</span>
<span>//</span>
<span>Routine</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        The Morning Ritual
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        Reflections on brewing methods, the chemistry of caffeine, and the quiet hour before the world wakes.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Watch" className="w-full h-full object-cover sepia-[.5] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Aug 14, 2024</span>
<span>//</span>
<span>Time</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Horology &amp; Obsession
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        Understanding the intricate mechanisms of mechanical watches and the philosophy of measured time.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>

<article className="flex flex-col group">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-stone-800 mb-4 bg-stone-900">
<div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Study" className="w-full h-full object-cover sepia-[.4] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
<span className="text-amber-700">Aug 01, 2024</span>
<span>//</span>
<span>Workspace</span>
</div>
<h3 className="text-xl font-serif text-stone-200 group-hover:text-amber-50 leading-snug mb-2 transition-colors">
                        Designing the Dark Mode
                    </h3>
<p className="text-stone-500 text-sm line-clamp-2 mb-3">
                        Why low-light interfaces reduce strain and improve focus, and how to implement them effectively.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-amber-700 hover:text-amber-500 uppercase tracking-wider mt-auto" href="#">
                        Read Entry <span className="iconify ml-1" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</article>
</div>

<div className="mt-20 pt-10 border-t border-stone-800">
<h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-6">Recently Updated in Archive</h4>
<ul className="space-y-3">
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-stone-900 rounded-sm transition-colors border-b border-stone-900 hover:border-stone-800">
<span className="text-stone-300 group-hover:text-amber-50 font-serif text-sm">Draft: The Ethics of AI Art</span>
<span className="text-stone-600 font-mono text-xs">Updated 2h ago</span>
</li>
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-stone-900 rounded-sm transition-colors border-b border-stone-900 hover:border-stone-800">
<span className="text-stone-300 group-hover:text-amber-50 font-serif text-sm">Project: Obsidian Plugin Development</span>
<span className="text-stone-600 font-mono text-xs">Updated 1d ago</span>
</li>
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-stone-900 rounded-sm transition-colors border-b border-stone-900 hover:border-stone-800">
<span className="text-stone-300 group-hover:text-amber-50 font-serif text-sm">Photo Log: Tokyo at Night</span>
<span className="text-stone-600 font-mono text-xs">Updated 3d ago</span>
</li>
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-stone-900 rounded-sm transition-colors border-b border-stone-900 hover:border-stone-800">
<span className="text-stone-300 group-hover:text-amber-50 font-serif text-sm">Review: 'The Glass Bead Game'</span>
<span className="text-stone-600 font-mono text-xs">Updated 5d ago</span>
</li>
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-stone-900 rounded-sm transition-colors border-b border-stone-900 hover:border-stone-800">
<span className="text-stone-300 group-hover:text-amber-50 font-serif text-sm">Notes: Rust Language Basics</span>
<span className="text-stone-600 font-mono text-xs">Updated 1w ago</span>
</li>
</ul>
</div>
</section>

<section className="bg-stone-900 py-20 px-6 border-y border-stone-800" id="photography">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-serif text-amber-50 tracking-tight">Visual Records</h2>
<p className="text-stone-500 mt-2 font-serif italic">Captured on 35mm film.</p>
</div>

<div className="flex gap-2 font-mono text-xs uppercase tracking-wider">
<button className="px-3 py-1 border border-amber-700 text-amber-500 bg-amber-950/20">All</button>
<button className="px-3 py-1 border border-stone-700 text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors">B&amp;W</button>
<button className="px-3 py-1 border border-stone-700 text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors">Landscape</button>
</div>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 01</p>
<p className="font-serif text-stone-300 text-sm mt-1">The texture of old wood.</p>
</div>
</div>

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1542614471-001ccf2b449c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 02</p>
<p className="font-serif text-stone-300 text-sm mt-1">Architectural study, Berlin.</p>
</div>
</div>

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 03</p>
<p className="font-serif text-stone-300 text-sm mt-1">Movement in static space.</p>
</div>
</div>

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 04</p>
<p className="font-serif text-stone-300 text-sm mt-1">Deep space.</p>
</div>
</div>

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full aspect-[3/2] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 05</p>
<p className="font-serif text-stone-300 text-sm mt-1">Nature reclaiming structure.</p>
</div>
</div>

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 06</p>
<p className="font-serif text-stone-300 text-sm mt-1">The texture of the sea.</p>
</div>
</div>

<div className="break-inside-avoid bg-stone-800 p-2 pb-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
<div className="overflow-hidden">
<img className="w-full aspect-square object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 px-2">
<p className="font-mono text-[10px] text-stone-500 tracking-widest uppercase">Fig. 07</p>
<p className="font-serif text-stone-300 text-sm mt-1">Library interiors.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-b border-stone-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
<div className="max-w-2xl mx-auto border border-stone-800 bg-stone-900 p-1">
<div className="border border-stone-800 p-8 flex flex-col items-center text-center">
<span className="iconify text-amber-700 mb-4" data-icon="lucide:mail" data-width="32"></span>
<h3 className="text-2xl font-serif text-amber-50 mb-2">The Weekly Ledger</h3>
<p className="text-stone-500 mb-6 text-sm">Receive a curated summary of new entries, thoughts, and discoveries delivered via electronic mail.</p>
<form className="w-full max-w-sm flex gap-2">
<input className="flex-1 bg-stone-950 border border-stone-800 p-2 text-stone-300 placeholder-stone-700 focus:border-amber-700 focus:outline-none font-mono text-xs" placeholder="email@address.com" type="email"/>
<button className="bg-amber-800 text-amber-100 px-4 py-2 font-mono text-xs uppercase tracking-wider hover:bg-amber-700 transition-colors">Subscribe</button>
</form>
<p className="text-[10px] font-mono text-stone-600 mt-4 uppercase tracking-widest">No spam. Only essential data.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto">
<header className="text-center mb-16">
<div className="flex items-center justify-center gap-4 font-mono text-xs text-amber-600 uppercase tracking-widest mb-6">
<span>Oct 12, 2024</span>
<span className="w-1 h-1 rounded-full bg-stone-600"></span>
<span>12 Min Read</span>
<span className="w-1 h-1 rounded-full bg-stone-600"></span>
<span>Philosophy</span>
</div>
<h1 className="text-4xl md:text-6xl font-serif text-amber-50 leading-tight mb-8">
                    The Weight of History in <br/>Digital Spaces
                </h1>
<div className="w-24 h-px bg-amber-700 mx-auto"></div>
</header>
<article className="prose prose-invert prose-stone prose-lg mx-auto font-serif prose-headings:font-serif prose-headings:text-amber-50 prose-a:text-amber-600">
<p className="first-letter:text-6xl first-letter:font-serif first-letter:text-amber-700 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                    I have often wondered if the internet has a memory, or if it merely has storage. The distinction is subtle but profound. Storage is a warehouse; it is cold, indiscriminate, and purely functional. Memory, on the other hand, is organic. It fades, it distorts, and crucially, it carries emotional weight. When we walk into an old library, we smell the memory of the paper. When we visit a website from 1999, we see only code that has ceased to render correctly.
                </p>
<p>
                    In building this archive, my goal was not to create a slick, modern interface that vanishes into the background, but rather to build something that feels <em>constructed</em>. Something that has edges, borders, and textures. We spend so much of our lives touching glass screens that we have forgotten the tactile resistance of a heavy book cover or the scratch of a fountain pen on parchment.
                </p>
<blockquote className="border-l-2 border-amber-700 pl-6 italic text-stone-400 my-8">
                    "We are drowning in information, while starving for wisdom. The world henceforth will be run by synthesizers, people able to put together the right information at the right time." 
                    <footer className="text-sm not-italic text-stone-500 mt-2 font-mono">— E.O. Wilson</footer>
</blockquote>
<p>
                    The "Dark Academia" aesthetic is more than just tweed jackets and coffee cups; it is a longing for a time when knowledge was a physical pursuit. It required travel, translation, and physical effort. Today, the entirety of human knowledge is available via a search bar, yet we feel less informed than ever. Why? Because there is no friction.
                </p>
<figure className="my-10 bg-stone-900 p-2 border border-stone-800">
<img alt="Old Book Pages" className="w-full h-auto sepia-[.3] opacity-90" src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<figcaption className="text-center font-mono text-xs text-stone-500 mt-2 uppercase tracking-wider">Fig 1.1: The physical decay of information storage.</figcaption>
</figure>
<h3 className="text-2xl font-serif text-amber-100 mt-12 mb-4">The Digital Palimpsest</h3>
<p>
                    A palimpsest is a manuscript page, either from a scroll or a book, from which the text has been scraped or washed off so that the page can be reused for another document. The internet is the ultimate palimpsest. We overwrite our digital selves daily. Tweets are deleted, blogs are abandoned, servers are wiped.
                </p>
<p>
                    To counter this, we must build digital spaces that are designed to age. We must choose fonts that recall the printing press (like the crimson text you are reading now). We must use colors that do not burn the retina but soothe it, like the dim light of a reading lamp. This is not nostalgia for the sake of it; it is a design philosophy rooted in human biology and history.
                </p>
</article>

<div className="mt-20 pt-10 border-t border-stone-800">
<h3 className="font-mono text-lg text-amber-50 mb-8">Marginalia (3 Notes)</h3>
<div className="space-y-8">

<div className="flex gap-4">
<div className="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center text-amber-700 font-serif text-xl border border-stone-700">A</div>
<div className="flex-1">
<div className="flex justify-between items-baseline mb-1">
<span className="text-amber-100 font-serif">Archivist_01</span>
<span className="text-xs font-mono text-stone-600">2 hours ago</span>
</div>
<p className="text-sm text-stone-400 leading-relaxed border-l border-stone-800 pl-3">
                                The concept of 'digital friction' is fascinating. We optimize for speed, but lose retention. Excellent essay.
                            </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center text-stone-500 font-serif text-xl border border-stone-700">M</div>
<div className="flex-1">
<div className="flex justify-between items-baseline mb-1">
<span className="text-amber-100 font-serif">Marcus Aurelius Fan</span>
<span className="text-xs font-mono text-stone-600">5 hours ago</span>
</div>
<p className="text-sm text-stone-400 leading-relaxed border-l border-stone-800 pl-3">
                                I've been trying to replicate this feeling in my Obsidian vault. The typography choices here are spot on.
                            </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center text-stone-500 font-serif text-xl border border-stone-700">S</div>
<div className="flex-1">
<div className="flex justify-between items-baseline mb-1">
<span className="text-amber-100 font-serif">SarahJ</span>
<span className="text-xs font-mono text-stone-600">1 day ago</span>
</div>
<p className="text-sm text-stone-400 leading-relaxed border-l border-stone-800 pl-3">
                                "Storage is a warehouse; memory is organic." I'm stealing this for my thesis.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 py-20 px-6 border-t border-stone-800">
<div className="max-w-7xl mx-auto">
<div className="mb-8">
<h2 className="text-2xl font-serif text-amber-50">Librarian's Dashboard</h2>
<p className="text-stone-500 font-mono text-xs mt-1 uppercase tracking-widest">Restricted Access // Level 4</p>
</div>
<div className="flex flex-col lg:flex-row border border-stone-800 bg-stone-900 min-h-[600px] rounded-sm overflow-hidden">

<aside className="w-full lg:w-64 bg-stone-950 border-b lg:border-b-0 lg:border-r border-stone-800 p-4 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 bg-stone-900 text-amber-500 border-l-2 border-amber-600 font-mono text-xs uppercase tracking-wider" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard"></span> Dashboard
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-400 hover:bg-stone-900 hover:text-stone-200 transition-colors font-mono text-xs uppercase tracking-wider" href="#">
<span className="iconify" data-icon="lucide:pen-tool"></span> Create Entry
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-400 hover:bg-stone-900 hover:text-stone-200 transition-colors font-mono text-xs uppercase tracking-wider" href="#">
<span className="iconify" data-icon="lucide:folder-open"></span> Collections
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-400 hover:bg-stone-900 hover:text-stone-200 transition-colors font-mono text-xs uppercase tracking-wider" href="#">
<span className="iconify" data-icon="lucide:image"></span> Media Assets
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-400 hover:bg-stone-900 hover:text-stone-200 transition-colors font-mono text-xs uppercase tracking-wider mt-auto" href="#">
<span className="iconify" data-icon="lucide:settings"></span> Settings
                        </a>
</aside>

<div className="flex-1 p-6 overflow-x-auto">
<div className="flex justify-between items-center mb-6">
<h3 className="font-serif text-xl text-stone-200">Manifest of Entries</h3>
<button className="bg-amber-800 hover:bg-amber-700 text-white px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span> New Record
                            </button>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone-800 text-stone-500 font-mono text-[10px] uppercase tracking-widest">
<th className="py-3 px-2 font-normal">ID</th>
<th className="py-3 px-2 font-normal">Title</th>
<th className="py-3 px-2 font-normal">Category</th>
<th className="py-3 px-2 font-normal">Date</th>
<th className="py-3 px-2 font-normal">Status</th>
<th className="py-3 px-2 font-normal text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm font-serif text-stone-300 divide-y divide-stone-800">

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0492</td>
<td className="py-3 px-2 text-amber-50">The Weight of History</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Philosophy</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Oct 12</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0491</td>
<td className="py-3 px-2 text-amber-50">Mechanical Keyboards</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Tech</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Oct 08</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0490</td>
<td className="py-3 px-2 text-stone-400 italic">Draft: The Silent City</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Travel</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Oct 05</td>
<td className="py-3 px-2"><span className="text-stone-400 bg-stone-800 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-stone-700">Draft</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0489</td>
<td className="py-3 px-2 text-amber-50">Notes from Misty Isles</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Travel</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Sep 29</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0488</td>
<td className="py-3 px-2 text-amber-50">Recovering Lost Classics</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Lit</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Sep 21</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0487</td>
<td className="py-3 px-2 text-amber-50">Algorithmic Beauty</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Code</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Sep 15</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0486</td>
<td className="py-3 px-2 text-stone-400 italic">Idea: CSS Grids in Print</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Code</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Sep 10</td>
<td className="py-3 px-2"><span className="text-stone-400 bg-stone-800 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-stone-700">Draft</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0485</td>
<td className="py-3 px-2 text-amber-50">Stone &amp; Memory</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">History</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Sep 02</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0484</td>
<td className="py-3 px-2 text-amber-50">The Morning Ritual</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Routine</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Aug 28</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>

<tr className="hover:bg-stone-950/50 transition-colors">
<td className="py-3 px-2 font-mono text-xs text-stone-500">#0483</td>
<td className="py-3 px-2 text-amber-50">Horology &amp; Obsession</td>
<td className="py-3 px-2"><span className="border border-stone-700 rounded-sm px-2 py-0.5 text-[10px] font-mono uppercase text-stone-400">Time</span></td>
<td className="py-3 px-2 font-mono text-xs text-stone-500">Aug 14</td>
<td className="py-3 px-2"><span className="text-green-600 bg-green-900/20 px-2 py-0.5 text-[10px] font-mono uppercase rounded-sm border border-green-900/30">Published</span></td>
<td className="py-3 px-2 text-right"><button className="text-stone-500 hover:text-amber-500"><span className="iconify" data-icon="lucide:more-horizontal"></span></button></td>
</tr>
</tbody>
</table>

<div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-800">
<span className="text-[10px] font-mono text-stone-600 uppercase">Showing 1-10 of 483</span>
<div className="flex gap-2">
<button className="px-2 py-1 border border-stone-800 text-stone-500 hover:text-amber-500 hover:border-amber-700 text-xs font-mono">&lt; Prev</button>
<button className="px-2 py-1 border border-stone-800 text-stone-500 hover:text-amber-500 hover:border-amber-700 text-xs font-mono">Next &gt;</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-800">
<h2 className="text-3xl font-serif text-amber-50 mb-10 border-b border-stone-800 pb-4">Component Archives</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="space-y-4">
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-4">Buttons</h3>
<button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-mono text-xs py-3 px-4 rounded-sm uppercase tracking-widest transition-colors shadow-lg shadow-amber-900/20">Primary Action</button>
<button className="w-full bg-transparent border border-stone-600 hover:border-amber-600 text-stone-300 hover:text-amber-500 font-mono text-xs py-3 px-4 rounded-sm uppercase tracking-widest transition-colors">Secondary Action</button>
<button className="w-full bg-stone-900 border border-stone-800 text-stone-400 font-serif italic py-2 px-4 rounded-sm hover:bg-stone-800 transition-colors text-left flex justify-between items-center group">
<span>Read More</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
</div>

<div className="space-y-4">
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-4">Inputs</h3>
<div>
<label className="block font-mono text-[10px] uppercase text-stone-500 mb-1">Catalog Search</label>
<div className="flex items-center bg-stone-950 border border-stone-800 rounded-sm px-3 py-2 focus-within:border-amber-700 transition-colors">
<span className="iconify text-stone-600" data-icon="lucide:search"></span>
<input className="bg-transparent border-none w-full ml-2 text-sm text-stone-300 placeholder-stone-700 focus:ring-0 outline-none" placeholder="Query..." type="text"/>
</div>
</div>
<div>
<label className="block font-mono text-[10px] uppercase text-stone-500 mb-1">Subscription Email</label>
<input className="w-full bg-stone-900 border border-stone-800 rounded-sm px-3 py-2 text-sm text-stone-300 focus:border-amber-700 outline-none transition-colors" type="email" value="user@archive.com"/>
</div>
</div>

<div className="space-y-4">
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-4">Taxonomy</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 border border-stone-700 rounded-sm text-[10px] font-mono text-stone-400 uppercase tracking-wide">Philosophy</span>
<span className="px-2 py-1 border border-amber-800 rounded-sm text-[10px] font-mono text-amber-600 uppercase tracking-wide bg-amber-950/20">Featured</span>
<span className="px-2 py-1 bg-stone-800 text-[10px] font-mono text-stone-300 rounded-sm uppercase tracking-wide">v1.0.4</span>
</div>
<div className="p-4 border border-stone-800 bg-stone-900 rounded-sm relative">
<div className="absolute -top-2 left-4 bg-stone-950 px-2 font-mono text-[10px] text-amber-600 uppercase">Alert</div>
<p className="text-xs text-stone-400 font-serif">System maintenance scheduled for 03:00 UTC. Archives will be read-only.</p>
</div>
</div>

<div className="space-y-4">
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-4">Controls</h3>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-amber-700 bg-amber-900/40 flex items-center justify-center">
<span className="iconify text-amber-500 text-xs" data-icon="lucide:check"></span>
</div>
<span className="text-sm font-serif text-stone-400 group-hover:text-stone-300">Preserve metadata</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-stone-700 bg-transparent"></div>
<span className="text-sm font-serif text-stone-400 group-hover:text-stone-300">Public visibility</span>
</label>

<div className="flex items-center justify-between">
<span className="text-sm font-serif text-stone-400">Dark Mode</span>
<div className="w-10 h-5 bg-amber-900 rounded-full relative cursor-pointer">
<div className="w-3 h-3 bg-amber-100 rounded-full absolute top-1 right-1 shadow-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 flex justify-center items-center bg-stone-950/80 backdrop-blur-sm">
<div className="w-full max-w-md bg-stone-900 border border-stone-800 p-8 shadow-2xl relative">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-700"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-700"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-700"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-700"></div>
<div className="text-center mb-8">
<span className="iconify mx-auto text-amber-600 mb-4" data-icon="lucide:key" data-width="24"></span>
<h2 className="text-2xl font-serif text-amber-50">Access Archives</h2>
<p className="text-xs font-mono text-stone-500 mt-2 uppercase tracking-widest">Authorized Personnel Only</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-[10px] font-mono uppercase text-stone-500 mb-1">Identity Key (Email)</label>
<input className="w-full bg-stone-950 border border-stone-800 p-3 text-stone-200 focus:border-amber-700 outline-none transition-colors rounded-sm" type="email"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-stone-500 mb-1">Passphrase</label>
<input className="w-full bg-stone-950 border border-stone-800 p-3 text-stone-200 focus:border-amber-700 outline-none transition-colors rounded-sm" type="password"/>
</div>
<button className="w-full bg-amber-800 hover:bg-amber-700 text-amber-50 py-3 font-mono text-xs uppercase tracking-widest transition-colors rounded-sm shadow-lg mt-2">
                        Unlock
                    </button>
</form>
<div className="mt-6 pt-6 border-t border-stone-800 flex justify-between text-[10px] font-mono text-stone-600">
<a className="hover:text-amber-600 transition-colors" href="#">Forgot Credentials?</a>
<a className="hover:text-amber-600 transition-colors" href="#">Request Access</a>
</div>
</div>
</section>
</main>

<footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8 text-stone-500">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-amber-50">
<span className="iconify" data-icon="lucide:library"></span>
<span className="font-bold font-serif text-xl tracking-tight">THE ARCHIVE</span>
</div>
<p className="font-serif text-sm leading-relaxed max-w-sm mb-6 text-stone-400">
                    A digital repository dedicated to the preservation of thought, the beauty of code, and the stillness of the written word. Established 2024.
                </p>
<div className="flex gap-4">
<a className="text-stone-500 hover:text-amber-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-stone-500 hover:text-amber-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:github"></span></a>
<a className="text-stone-500 hover:text-amber-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
</div>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-stone-300 mb-4">Sitemap</h4>
<ul className="space-y-2 font-serif text-sm">
<li><a className="hover:text-amber-600 transition-colors" href="#">Home Index</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Photography</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Code Snippets</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">About the Author</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-stone-300 mb-4">Legal &amp; Meta</h4>
<ul className="space-y-2 font-serif text-sm">
<li><a className="hover:text-amber-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Colophon</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">RSS Feed</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest">
<span>© 2024 The Dark Archive. All rights reserved.</span>
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-900 border border-green-700"></span>
                System Operational
            </span>
</div>
</footer>

    </>
  );
}
