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



    const selectButton = document.getElementById('custom-select-button');
    const optionsList = document.getElementById('custom-select-options');
    const selectedValue = document.getElementById('selected-value');
    const options = optionsList.querySelectorAll('li');

    function closeOptions() {
      optionsList.classList.add('hidden');
      selectButton.setAttribute('aria-expanded', 'false');
    }

    function openOptions() {
      optionsList.classList.remove('hidden');
      selectButton.setAttribute('aria-expanded', 'true');
      optionsList.focus();
    }

    selectButton.addEventListener('click', () => {
      if (optionsList.classList.contains('hidden')) {
        openOptions();
      } else {
        closeOptions();
      }
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(opt => {
          opt.setAttribute('aria-selected', 'false');
        });
        option.setAttribute('aria-selected', 'true');
        selectedValue.textContent = option.textContent.trim();
        closeOptions();
      });
      option.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          option.click();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          let next = option.nextElementSibling;
          if (next) next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          let prev = option.previousElementSibling;
          if (prev) prev.focus();
          else selectButton.focus();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          closeOptions();
          selectButton.focus();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!selectButton.contains(e.target) && !optionsList.contains(e.target)) {
        closeOptions();
      }
    });

    selectButton.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        openOptions();
        if (e.key === 'ArrowDown') {
          options[0].focus();
        } else {
          options[options.length - 1].focus();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeOptions();
      }
    });
  


  import { createIcons } from 'https://unpkg.com/lucide@latest/dist/esm/lucide.js';
  createIcons();
  document.getElementById('year').textContent = new Date().getFullYear();

  // Filter functionality
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.remove('active');
        t.classList.add('bg-stone-800/50', 'text-stone-300');
        t.querySelector('.icon').classList.add('text-stone-400');
      });
      
      // Add active class to clicked tab
      this.classList.add('active');
      this.classList.remove('bg-stone-800/50', 'text-stone-300');
      this.querySelector('.icon').classList.remove('text-stone-400');
      
      // Filter logic would go here
      const filter = this.dataset.filter;
      console.log('Filtering by:', filter);
    });
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
      

<div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-orange-500/20 via-red-400/10 to-transparent blur-3xl opacity-0 animate-fade-in"></div>

<header className="relative z-20 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
<a className="flex items-center gap-2 text-lg font-semibold hover:text-orange-400 transition-colors" href="#">
<i className="h-6 w-6 text-orange-400" data-lucide="sparkles"></i>
<span className="font-geist">Nexus Studio</span>
</a>
<nav className="hidden items-center gap-8 text-sm font-medium md:flex">
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Dashboard</a>
<a className="text-orange-400 font-geist" href="#">Gallery</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Features</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Plans</a>
<button className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/25 font-geist">
        Get Started
      </button>
</nav>
<button className="md:hidden hover:text-orange-400 transition-colors">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative z-10 mx-auto mt-8 max-w-7xl px-4 lg:px-8">
<div className="text-center opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>
<h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl">
<span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent font-playfair">
        Creative Gallery
      </span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-stone-300 font-geist">
      Explore thousands of stunning artworks created by our community of artists using Nexus Studio's AI-powered tools
    </p>
</div>
</section>

<section className="relative z-10 mx-auto mt-12 max-w-7xl px-4 lg:px-8">
<div className="opacity-0 animate-slide-down" style={{animationDelay: '0.6s'}}>

<div className="flex flex-wrap justify-center gap-2 mb-8">
<button className="filter-tab active flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 font-geist" data-filter="all">
<svg className="icon w-[16px] h-[16px]" data-lucide="grid-3x3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10"></path><path d="M5 6h14"></path><rect height="12" rx="2" width="18" x="3" y="10"></rect></svg>
        All Artworks
      </button>
<button className="filter-tab flex items-center gap-2 rounded-full bg-stone-800/50 px-4 py-2 text-sm font-medium text-stone-300 transition-all hover:bg-stone-700/50 hover:text-white hover:scale-105 font-geist" data-filter="portraits">
<svg className="icon w-[16px] h-[16px]" data-lucide="user" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(168, 162, 158)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        Portraits
      </button>
<button className="filter-tab flex items-center gap-2 rounded-full bg-stone-800/50 px-4 py-2 text-sm font-medium text-stone-300 transition-all hover:bg-stone-700/50 hover:text-white hover:scale-105 font-geist" data-filter="landscapes">
<svg className="icon w-[16px] h-[16px]" data-lucide="mountain" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(168, 162, 158)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
        Landscapes
      </button>
<button className="filter-tab flex items-center gap-2 rounded-full bg-stone-800/50 px-4 py-2 text-sm font-medium text-stone-300 transition-all hover:bg-stone-700/50 hover:text-white hover:scale-105 font-geist" data-filter="abstract">
<svg className="icon w-[16px] h-[16px]" data-lucide="palette" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(168, 162, 158)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="16" x="2" y="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect height="6" rx="1" width="4" x="8" y="16"></rect></svg>
        Abstract
      </button>
<button className="filter-tab flex items-center gap-2 rounded-full bg-stone-800/50 px-4 py-2 text-sm font-medium text-stone-300 transition-all hover:bg-stone-700/50 hover:text-white hover:scale-105 font-geist" data-filter="digital">
<svg className="icon w-[16px] h-[16px]" data-lucide="cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(168, 162, 158)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897-10.68-2.913"></path><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path></svg>
        Digital Art
      </button>
<button className="filter-tab flex items-center gap-2 rounded-full bg-stone-800/50 px-4 py-2 text-sm font-medium text-stone-300 transition-all hover:bg-stone-700/50 hover:text-white hover:scale-105 font-geist" data-filter="fantasy">
<svg className="icon w-[16px] h-[16px]" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(168, 162, 158)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h.01"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>
        Fantasy
      </button>
</div>

<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="relative flex-1 max-w-md">
<i className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" data-lucide="search"></i>
<input className="w-full ring-1 ring-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 text-sm font-geist bg-stone-800/50 rounded-full pt-3 pr-4 pb-3 pl-10" placeholder="Search artworks..." type="text"/>
</div>
<div className="flex items-center gap-4 relative">
<button aria-expanded="false" aria-haspopup="listbox" className="flex items-center justify-between rounded-full bg-stone-800/50 px-4 py-3 text-sm ring-1 ring-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 font-geist w-48" id="custom-select-button">
<span className="truncate" id="selected-value">Most Recent</span>
<i className="h-4 w-4 ml-2" data-lucide="chevron-down"></i>
</button>
<ul className="absolute z-20 mt-2 max-h-56 w-48 overflow-auto rounded-2xl bg-stone-800/90 ring-1 ring-white/10 shadow-lg font-geist text-sm text-white hidden" id="custom-select-options" role="listbox" tabindex="-1">
<li aria-selected="true" className="cursor-pointer px-4 py-3 hover:bg-orange-500/40 focus:bg-orange-500/50" role="option" tabindex="0">
      Most Recent
    </li>
<li aria-selected="false" className="cursor-pointer px-4 py-3 hover:bg-orange-500/40 focus:bg-orange-500/50" role="option" tabindex="0">
      Most Popular
    </li>
<li aria-selected="false" className="cursor-pointer px-4 py-3 hover:bg-orange-500/40 focus:bg-orange-500/50" role="option" tabindex="0">
      Most Liked
    </li>
<li aria-selected="false" className="cursor-pointer px-4 py-3 hover:bg-orange-500/40 focus:bg-orange-500/50" role="option" tabindex="0">
      Trending
    </li>
</ul>
<button className="flex items-center gap-2 rounded-full bg-stone-800/50 px-4 py-3 text-sm font-medium ring-1 ring-white/10 transition-all hover:bg-stone-700/50 font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="sliders-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
    Filters
  </button>

</div>
</div>
</div>
</section>

<section className="relative z-10 mx-auto mt-12 max-w-7xl px-4 lg:px-8">
<div className="masonry opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>

<div className="masonry-item group" data-category="portraits">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="AI Portrait" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/video/284fceb7-a583-4e07-a3a9-bb92a95a1b3d/1.mp4?w=800&amp;q=80" style={{height: '300px'}}/>
<div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Ethereal Portrait</h3>
<p className="text-xs text-stone-300 font-geist">by @artisan_ai</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<svg className="w-[12px] h-[12px]" data-lucide="heart" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="">247</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<svg className="w-[12px] h-[12px]" data-lucide="share" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="landscapes">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Mountain Vista" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/75f56835-6654-41e6-8982-4f699e4a413a/0_2.png?w=800&amp;q=80" style={{height: '400px'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Mystic Mountains</h3>
<p className="text-xs text-stone-300 font-geist">by @landscape_dreamer</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>492</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="abstract">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Abstract Flow" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/13e274ee-42da-47e2-858c-a92e991b81f2/0_2.png?w=800&amp;q=80" style={{height: '350px'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-sm font-semibold text-white font-geist">Fluid Dreams</h3>
<p className="text-xs text-stone-300 font-geist">by @abstract_visionary</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>156</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="digital">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Cyberpunk City" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/f4fea9db-6e2f-4e9a-b3c5-2c1fbc385f54/0_0.png?w=800&amp;q=80" style={{height: '450px'}}/>
<div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent bg-cover bg-[url(https://cdn.midjourney.com/6357ecb1-eebf-42de-8749-a08991071794/0_3.png?w=800&amp;q=80)] bg-center"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Neon Metropolis</h3>
<p className="text-xs text-stone-300 font-geist">by @cyber_artist</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>738</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="fantasy">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Dragon's Realm" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/b3fdabe4-5377-4b02-b9be-2502372c003f/0_0.png?w=800&amp;q=80" style={{height: '320px'}}/>
<div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Dragon's Sanctuary</h3>
<p className="text-xs text-stone-300 font-geist">by @fantasy_realm</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>612</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="portraits">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Warrior Portrait" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/f0246e67-b346-4f67-943e-ed3def81b472/0_0.png?w=800&amp;q=80" style={{height: '380px'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Warrior Spirit</h3>
<p className="text-xs text-stone-300 font-geist">by @portrait_master</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>425</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="landscapes">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Ocean Sunset" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/9ab1e503-58f6-48a7-9da6-5b3f8013ba21/0_0.png?w=800&amp;q=80" style={{height: '280px'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Ocean's Edge</h3>
<p className="text-xs text-stone-300 font-geist">by @seascape_ai</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>389</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="masonry-item group" data-category="abstract">
<div className="relative overflow-hidden rounded-2xl bg-stone-900/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-2xl">
<img alt="Geometric Art" className="w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://cdn.midjourney.com/35934ed7-84fc-4579-933c-9d4867325edd/0_0.png?w=800&amp;q=80" style={{height: '360px'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-white font-geist">Geometric Harmony</h3>
<p className="text-xs text-stone-300 font-geist">by @geo_abstract</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="heart"></i>
<span>293</span>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30">
<i className="h-3 w-3" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 mx-auto mt-16 max-w-7xl px-4 text-center lg:px-8">
<div className="opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
<button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-base font-medium shadow-xl transition-all hover:scale-105 hover:shadow-orange-500/25 font-geist">
<i className="h-5 w-5 transition-transform group-hover:rotate-90" data-lucide="plus"></i>
      Load More Artworks
    </button>
<p className="mt-4 text-sm text-stone-400 font-geist">Showing 8 of 15,247 artworks</p>
</div>
</section>

<footer className="relative z-10 mt-32 border-t border-white/10 py-12 opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
<div className="mx-auto max-w-7xl px-4 text-center text-sm text-stone-400 lg:px-8 font-geist">
    © <span id="year"></span> Nexus Studio. All rights reserved.
  </div>
</footer>



    </>
  );
}
