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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
},
brand: {
500: '#6366f1',
600: '#4f46e5',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.3s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



      // --- DATA ---
      const historyData = [
          { title: "Omniscient Reader", chapter: "188", time: "2m ago", progress: 75, image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=200&auto=format&fit=crop" },
          { title: "Tower of God", chapter: "550", time: "1d ago", progress: 30, image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=200&auto=format&fit=crop" }
      ];

      const allManhwa = [
          { id: 1, title: "Reaper of the Drifting Moon", chapter: 88, time: "3 hours ago", rating: 4.8, genre: "Murim", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg", tag: "HOT", tagColor: "text-yellow-400" },
          { id: 2, title: "Damn Reincarnation", chapter: 42, time: "5 hours ago", rating: 4.6, genre: "Fantasy", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop", tag: "NEW", tagColor: "text-white bg-indigo-500/90" },
          { id: 3, title: "Mount Hua Sect", chapter: 112, time: "Yesterday", rating: 4.9, genre: "Murim", image: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=400&auto=format&fit=crop" },
          { id: 4, title: "Legend of the Northern Blade", chapter: 175, time: "2 days ago", rating: 4.9, genre: "Murim", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg", tag: "HOT", tagColor: "text-red-400" },
          { id: 5, title: "Nano Machine", chapter: 150, time: "2 days ago", rating: 4.7, genre: "System", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" },
          { id: 6, title: "Eleceed", chapter: 200, time: "3 days ago", rating: 4.8, genre: "Action", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" },
          { id: 7, title: "Solo Leveling: Ragnarok", chapter: 12, time: "1 hour ago", rating: 4.9, genre: "System", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop", tag: "NEW", tagColor: "text-white bg-indigo-500/90" },
          { id: 8, title: "The Beginning After The End", chapter: 180, time: "4 days ago", rating: 4.8, genre: "Fantasy", image: "https://images.unsplash.com/photo-1515536765-9b2a42c4b393?q=80&w=400&auto=format&fit=crop" },
          { id: 9, title: "Lookism", chapter: 450, time: "Today", rating: 4.5, genre: "Action", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
          { id: 10, title: "SSS-Class Suicide Hunter", chapter: 90, time: "Yesterday", rating: 4.8, genre: "System", image: "https://images.unsplash.com/photo-1620503292555-5b06a5203169?q=80&w=400&auto=format&fit=crop", tag: "HOT", tagColor: "text-red-400" },
          { id: 11, title: "Greatest Estate Developer", chapter: 105, time: "2 days ago", rating: 4.9, genre: "Fantasy", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400&auto=format&fit=crop" },
          { id: 12, title: "Murim Login", chapter: 130, time: "3 days ago", rating: 4.7, genre: "Murim", image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=400&auto=format&fit=crop" }
      ];

      const genres = ["Latest", "Trending", "Popular"];
      let activeGenre = "Latest";

      // --- COMPONENTS & RENDERING ---

      function renderHistory() {
          const container = document.getElementById('history-grid');
          container.innerHTML = historyData.map(item => `
              <div onclick="showToast('Resuming ${item.title}', 'success')" class="flex items-center gap-4 bg-zinc-900 border border-white/5 p-3 rounded-xl hover:border-indigo-500/30 transition-all cursor-pointer group hover:bg-zinc-900/80">
                  <div class="w-12 h-16 rounded bg-zinc-800 overflow-hidden flex-shrink-0 relative">
                      <img src="${item.image}" class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500">
                  </div>
                  <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">${item.title}</h3>
                      <p class="text-xs text-zinc-500 mt-1">Chapter ${item.chapter} <span class="text-zinc-700 mx-1">•</span> ${item.time}</p>
                      <div class="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
                          <div class="bg-indigo-500 h-full rounded-full transition-all duration-1000" style="width: ${item.progress}%"></div>
                      </div>
                  </div>
                  <button class="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                      <iconify-icon icon="lucide:play" width="12" fill="currentColor"></iconify-icon>
                  </button>
              </div>
          `).join('');
      }

      function renderTabs() {
          const container = document.getElementById('genre-tabs');
          container.innerHTML = genres.map(genre => `
              <button onclick="setGenre('${genre}')"
                  class="px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  activeGenre === genre
                      ? 'bg-white text-black shadow-md shadow-white/10'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }">
                  ${genre}
              </button>
          `).join('');
      }

      function renderGrid(searchTerm = "") {
          const container = document.getElementById('manhwa-grid');
          const countLabel = document.getElementById('results-count');
          const noResults = document.getElementById('no-results');

          let filtered = [...allManhwa];

          if(searchTerm) {
              filtered = filtered.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
          }

          if(activeGenre === 'Popular') {
               filtered.sort((a,b) => b.rating - a.rating);
          } else if (activeGenre === 'Trending') {
               filtered.sort((a,b) => b.id % 2 - a.id % 2);
          }

          countLabel.textContent = `Showing ${filtered.length} results`;

          if(filtered.length === 0) {
              container.innerHTML = '';
              noResults.classList.remove('hidden');
          } else {
              noResults.classList.add('hidden');
              container.innerHTML = filtered.map(item => `
                  <div class="group relative animate-slide-up">
                      <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-zinc-900 shadow-lg">
                          ${item.tag ? `
                              <div class="absolute top-2 left-2 z-20 px-2 py-1 rounded backdrop-blur-md text-[10px] font-bold border border-white/10 flex items-center gap-1 ${item.tagColor.includes('bg') ? item.tagColor : 'bg-black/60 ' + item.tagColor}">
                                  ${item.tag === 'HOT' ? '<iconify-icon icon="lucide:flame" width="10" fill="currentColor"></iconify-icon>' : ''} ${item.tag}
                              </div>
                          ` : ''}
                          <div class="absolute top-2 right-2 z-20 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur text-[10px] font-bold text-yellow-400 border border-white/10 flex items-center gap-1">
                              <iconify-icon icon="lucide:star" width="10" fill="currentColor"></iconify-icon> ${item.rating}
                          </div>

                          <img src="${item.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-75">

                          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <button onclick="showToast('Opened ${item.title}', 'success')" class="bg-white text-black rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl hover:scale-110">
                                  <iconify-icon icon="lucide:play" width="20" fill="currentColor"></iconify-icon>
                              </button>
                          </div>
                          <div class="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent opacity-60"></div>
                      </div>
                      <div class="flex justify-between items-start">
                           <h3 class="text-sm font-semibold text-white truncate group-hover:text-indigo-400 transition-colors flex-1 pr-2">${item.title}</h3>
                      </div>
                      <div class="flex items-center justify-between mt-1 text-xs text-zinc-500">
                          <span>Ch. ${item.chapter}</span>
                          <span>${item.time}</span>
                      </div>
                  </div>
              `).join('');
          }
      }

      function setGenre(genre) {
          activeGenre = genre;
          renderTabs();
          renderGrid(document.getElementById('search-input').value);
      }

      function toggleBookmark(btn) {
          const span = btn.querySelector('span');
          const icon = btn.querySelector('iconify-icon');

          if(span.innerText === "Bookmark") {
              span.innerText = "Bookmarked";
              btn.classList.add("bg-indigo-600", "border-indigo-500");
              btn.classList.remove("glass-panel");
              icon.setAttribute("icon", "lucide:check");
              showToast("Added to library", "success");
          } else {
              span.innerText = "Bookmark";
              btn.classList.remove("bg-indigo-600", "border-indigo-500");
              btn.classList.add("glass-panel");
              icon.setAttribute("icon", "lucide:bookmark-plus");
              showToast("Removed from library", "info");
          }
      }

      function showToast(message, type = 'info') {
          const container = document.getElementById('toast-container');
          const toast = document.createElement('div');
          let icon = 'info';
          let colorClass = 'bg-zinc-900 border-white/10';

          if (type === 'success') {
              icon = 'check-circle';
              colorClass = 'bg-zinc-900 border-emerald-500/30 text-emerald-400';
          } else if (type === 'error') {
              icon = 'alert-circle';
              colorClass = 'bg-zinc-900 border-red-500/30 text-red-400';
          }

          toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md min-w-[200px] toast-enter ${colorClass}`;
          toast.innerHTML = `
              <iconify-icon icon="lucide:${icon}" width="18"></iconify-icon>
              <span class="text-sm font-medium text-white">${message}</span>
          `;

          container.appendChild(toast);

          requestAnimationFrame(() => {
              toast.classList.add('toast-enter-active');
              toast.classList.remove('toast-enter');
          });

          setTimeout(() => {
              toast.classList.remove('toast-enter-active');
              toast.classList.add('toast-exit');
              setTimeout(() => toast.remove(), 200);
          }, 3000);
      }

      document.addEventListener('DOMContentLoaded', () => {
          renderHistory();
          renderTabs();
          renderGrid();

          const searchInput = document.getElementById('search-input');
          searchInput.addEventListener('input', (e) => {
              renderGrid(e.target.value);
          });

          document.addEventListener('keydown', (e) => {
              if (e.key === '/' && document.activeElement !== searchInput) {
                  e.preventDefault();
                  searchInput.focus();
              }
          });

          document.querySelectorAll('.nav-item').forEach(item => {
              item.addEventListener('click', (e) => {
                  e.preventDefault();
                  document.querySelectorAll('.nav-item').forEach(el => {
                      el.classList.remove('bg-zinc-900/50', 'text-indigo-400', 'border', 'border-indigo-500/10');
                      el.classList.add('text-zinc-400');
                  });

                  const clicked = e.currentTarget;
                  clicked.classList.remove('text-zinc-400');
                  clicked.classList.add('bg-zinc-900/50', 'text-indigo-400', 'border', 'border-indigo-500/10');
              });
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
      
<div className="flex h-screen w-full relative">

<input className="peer hidden" id="mobile-menu-toggle" type="checkbox"/>

<label className="fixed inset-0 bg-black/60 z-40 hidden peer-checked:block lg:hidden backdrop-blur-sm transition-opacity" htmlFor="mobile-menu-toggle"></label>

<aside className="fixed inset-y-0 left-0 z-50 w-64 transform -translate-x-full peer-checked:translate-x-0 lg:static lg:translate-x-0 transition-transform duration-300 ease-out bg-zinc-950 border-r border-white/5 flex flex-col glass-panel lg:bg-transparent lg:backdrop-blur-none lg:border-r lg:border-zinc-900/50">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 group cursor-pointer" onclick="window.location.reload()">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg">
              NEXUS
              <span className="text-zinc-500 text-xs font-normal ml-1" id="version-tag">
                v3.2
              </span>
</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Platform
          </div>
<a className="nav-item active flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-900/50 text-indigo-400 border border-indigo-500/10 group" href="#">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Home</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors group" href="#">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Browse</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors group" href="#">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Trending</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors group" href="#">
<iconify-icon icon="lucide:list" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Manga List</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors group" href="#">
<iconify-icon icon="lucide:trophy" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Popular</span>
</a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Library
          </div>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors group" href="#">
<iconify-icon icon="lucide:bookmark" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">Bookmarks</span>
<span className="ml-auto text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-full" id="bookmark-count">
              12
            </span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-colors group" href="#">
<iconify-icon icon="lucide:history" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium">History</span>
</a>

</nav>

<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors text-left" onclick="showToast('Profile settings coming soon', 'info')">
<img alt="User" className="w-8 h-8 rounded-full ring-2 ring-zinc-800" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate">Jin Woo</div>
<div className="text-xs text-zinc-500 truncate">Premium Member</div>
</div>
<iconify-icon className="text-zinc-500" icon="lucide:settings-2" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 glass-nav absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 lg:px-8">
<div className="flex items-center gap-4 lg:hidden">
<label className="p-2 text-zinc-400 hover:text-white cursor-pointer" htmlFor="mobile-menu-toggle">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</label>
</div>

<div className="flex-1 max-w-xl mx-auto hidden lg:block">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500 group-focus-within:text-indigo-400 transition-colors" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-zinc-800 rounded-full leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:bg-zinc-900 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all" id="search-input" placeholder="Search titles, authors, genres..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-1.5 py-0.5">
                  /
                </span>
</div>
</div>
</div>

<div className="flex items-center gap-3 lg:gap-5">
<button className="text-zinc-400 hover:text-white transition-colors relative" onclick="showToast('No new notifications', 'info')">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-zinc-950 bg-indigo-500 transform translate-x-1/4 -translate-y-1/4"></span>
</button>
<button className="hidden lg:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-indigo-600/20 transition-all transform hover:scale-105 active:scale-95" onclick="showToast('Premium features activated!', 'success')">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
<span>Go Premium</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pt-16 scroll-smooth" id="main-scroll">

<section className="relative h-[65vh] w-full overflow-hidden flex items-end pb-12 lg:pb-20">
<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover object-center opacity-60 scale-105 animate-pulse-slow" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
</div>
<div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end gap-8">

<div className="flex-1 space-y-6 max-w-2xl">
<div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.1s'}}>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white tracking-wider uppercase">
                    Updated Today
                  </span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 tracking-wider uppercase">
                    Rank #1
                  </span>
</div>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Return of the
                  <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Shattered Constellation
                  </span>
</h1>
<p className="text-zinc-300 text-sm lg:text-base leading-relaxed line-clamp-3 max-w-xl animate-slide-up" style={{animationDelay: '0.3s'}}>
                  A mere human who ascended to godhood only to be betrayed. He
                  returns to the past, before his awakening, armed with the
                  knowledge of the future and a burning desire for vengeance.
                  The Constellations are watching.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2 animate-slide-up" style={{animationDelay: '0.4s'}}>
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] active:scale-95" onclick="showToast('Opening Chapter 1...', 'success')">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="20"></iconify-icon>
                    Read Chapter 1
                  </button>
<button className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white glass-panel hover:bg-white/10 transition-colors active:scale-95" id="hero-bookmark-btn" onclick="toggleBookmark(this)">
<iconify-icon icon="lucide:bookmark-plus" strokeWidth="1.5" width="20"></iconify-icon>
<span>Bookmark</span>
</button>
</div>
</div>

<div className="hidden lg:block w-64 h-96 relative flex-shrink-0 perspective-1000 group animate-float">
<div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-2xl transform rotate-6 scale-95 group-hover:rotate-12 transition-transform duration-500"></div>
<div className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-4 hover:rotate-2 border border-white/10">
<img alt="Cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="text-xs font-mono text-indigo-300 mb-1">
                      FANTASY • ACTION
                    </div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 lg:px-12 py-8 border-b border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="lucide:history" strokeWidth="1.5" width="20"></iconify-icon>
                  Continue Reading
                </h2>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">
                  View History -&gt;
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="history-grid">

</div>
</div>
</section>

<section className="px-6 lg:px-12 py-10 min-h-[600px]">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div className="flex items-baseline gap-3">
<h2 className="text-2xl font-semibold text-white tracking-tight">
                    Latest Manhwa
                  </h2>
<span className="text-sm text-zinc-500" id="results-count">
                    Showing all
                  </span>
</div>
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0" id="genre-tabs">

</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8" id="manhwa-grid">

</div>
<div className="hidden text-center py-20" id="no-results">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 mb-4">
<iconify-icon className="text-zinc-600" icon="lucide:search-x" width="32"></iconify-icon>
</div>
<h3 className="text-zinc-400 font-medium">No results found</h3>
<p className="text-zinc-600 text-sm mt-1">
                  Try adjusting your filters or search terms
                </p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12 px-6 lg:px-12 mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-400">
                  © 2024 Nexus Platform. Powered by Vercel.
                </span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">DMCA</a>
</div>
</div>
</footer>
</div>
</main>

<div className="absolute bottom-6 right-6 z-40">
<button className="w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center hover:scale-110 hover:bg-indigo-500 transition-all group relative active:scale-95" onclick="showToast('Resuming last read...', 'success')">
<iconify-icon icon="lucide:book-open" width="24"></iconify-icon>
<div className="absolute bottom-full mb-3 right-0 w-56 bg-zinc-900 border border-white/10 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
<div className="flex justify-between items-start">
<p className="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider font-bold">
                Resume
              </p>
<span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1 rounded">
                78%
              </span>
</div>
<p className="text-sm font-semibold text-white leading-tight">
              Return of the Shattered Constellation
            </p>
<p className="text-xs text-indigo-400 mt-1">Chapter 45</p>
</div>
</button>
</div>

<div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>
</div>


    </>
  );
}
