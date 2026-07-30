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
      
    const apps = [
      {
        name: "Farfaucet",
        url: "https://farfaucet.xyz/",
        img: "https://pbs.twimg.com/profile_images/1759655992154720256/rx3B_1VR_400x400.jpg",
        tags: ['#Utility', 'hot'],
        tagStyles: ['bg-purple-900 text-purple-300', 'bg-gray-800 text-gray-400'],
        desc: "🚰 Instantly claim free testnet tokens on Farcaster. One tap, no hassle.",
        details: "Farfaucet makes it easy to get testnet tokens for development or demoing on Farcaster. Fast, free, and easy to use.",
        tagLabels: ['#Utility', 'hot']
      },
      {
        name: "DegenStats",
        url: "https://degenstats.xyz/",
        img: "https://pbs.twimg.com/profile_images/1728514314305255424/0wqQXy0H_400x400.jpg",
        tags: ['#Analytics', 'new'],
        tagStyles: ['bg-purple-900 text-purple-300', 'bg-gray-800 text-gray-400'],
        desc: "📈 Track your $DEGEN performance, wallet leaderboards, and community analytics.",
        details: "DegenStats offers in-depth analytics for $DEGEN holders, including wallet rankings, performance charts, and community stats.",
        tagLabels: ['#Analytics', 'new']
      }
    ];

    function openModal(index) {
      const app = apps[index];
      document.getElementById('modal-content').innerHTML = `
        <div class="flex items-center gap-4 mb-3">
          <img src="${app.img}" class="w-12 h-12 rounded-xl border border-gray-700 bg-black" alt="${app.name}">
          <div>
            <div class="font-semibold text-gray-100 text-lg">${app.name}</div>
            <div class="flex gap-2 mt-1">
              ${app.tagLabels.map((tag, i) =>
                `<span class="${app.tagStyles[i]} text-xs px-2 py-0.5 rounded">${tag}</span>`
              ).join('')}
            </div>
          </div>
        </div>
        <p class="text-gray-300 text-sm mb-4">${app.details}</p>
        <a href="${app.url}" target="_blank" class="block w-full text-center bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full py-2 text-base shadow transition">
          🚀 Launch ${app.name}
        </a>
      `;
      document.getElementById('modal-overlay').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      document.getElementById('modal-overlay').classList.add('hidden');
      document.body.style.overflow = '';
    }
    // Close modal on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
    // Prevent scroll on modal open
    document.getElementById('modal-overlay').addEventListener('click', e => {
      if (e.target.id === 'modal-overlay') closeModal();
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
      

<div className="relative w-[370px] h-[770px] rounded-[40px] shadow-2xl border-2 border-gray-800 bg-black flex flex-col overflow-hidden">

<div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-2 rounded-xl bg-gray-700 opacity-60 z-10"></div>

<div className="flex items-center justify-between px-4 pt-5 pb-3 bg-gradient-to-r from-gray-900 to-gray-800 shadow">
<div className="flex items-center gap-2">
<button className="text-gray-300 bg-gray-700 bg-opacity-40 rounded-full p-1 hover:bg-opacity-60">
<svg className="w-5 h-5" fill="none" height="22" stroke="currentColor" viewBox="0 0 24 24" width="22"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-white text-lg font-semibold tracking-tight">mini app monday</span>
</div>
<div>
<img alt="Luciano" className="w-8 h-8 rounded-full ring-2 ring-gray-900 border border-gray-700 shadow" src="https://i.imgur.com/6VBx3io.png" />
</div>
</div>

<main className="flex-1 px-3 pb-28 pt-2 overflow-y-auto relative">

<div className="bg-gray-900 rounded-2xl shadow mb-4 px-4 py-3 border border-gray-800">
<div className="flex items-center gap-3 mb-2">
<img alt="Luciano" className="w-8 h-8 rounded-full border border-gray-700" src="https://i.imgur.com/6VBx3io.png" />
<div>
<span className="font-semibold text-gray-200 text-sm">Luciano</span>
<div className="text-xs text-gray-500">@luciano</div>
</div>
</div>
<p className="text-sm text-gray-300 leading-[1.45]">
          ✨ Welcome to <span className="font-semibold text-purple-400">mini app monday</span>! Discover two awesome Farcaster Mini Apps this week: tap a card for details and try them out!
        </p>
</div>

<div className="flex flex-col gap-4">

<button className="text-left bg-gray-900 rounded-2xl shadow border border-gray-800 px-4 py-3 transition hover:ring-2 hover:ring-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full relative group" onClick={(e) => { openModal(0) }}>
<span className="absolute inset-0"></span>
<div className="flex items-center gap-3">
<img alt="Farfaucet" className="w-10 h-10 rounded-lg border border-gray-700 bg-black" src="https://pbs.twimg.com/profile_images/1759655992154720256/rx3B_1VR_400x400.jpg" />
<div className="flex-1">
<div className="font-semibold text-gray-100 text-base group-hover:text-purple-400">Farfaucet</div>
<div className="flex flex-wrap gap-2 mt-1">
<span className="bg-purple-900 text-purple-300 text-xs px-2 py-0.5 rounded">#Utility</span>
<span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded">hot</span>
</div>
</div>
</div>
<p className="text-gray-300 text-sm mt-2">
            🚰 Instantly claim free testnet tokens on Farcaster. One tap, no hassle.
          </p>
</button>

<button className="text-left bg-gray-900 rounded-2xl shadow border border-gray-800 px-4 py-3 transition hover:ring-2 hover:ring-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full relative group" onClick={(e) => { openModal(1) }}>
<span className="absolute inset-0"></span>
<div className="flex items-center gap-3">
<img alt="DegenStats" className="w-10 h-10 rounded-lg border border-gray-700 bg-black" src="https://pbs.twimg.com/profile_images/1728514314305255424/0wqQXy0H_400x400.jpg" />
<div className="flex-1">
<div className="font-semibold text-gray-100 text-base group-hover:text-purple-400">DegenStats</div>
<div className="flex flex-wrap gap-2 mt-1">
<span className="bg-purple-900 text-purple-300 text-xs px-2 py-0.5 rounded">#Analytics</span>
<span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded">new</span>
</div>
</div>
</div>
<p className="text-gray-300 text-sm mt-2">
            📈 Track your $DEGEN performance, wallet leaderboards, and community analytics.
          </p>
</button>
</div>
</main>

<div className="absolute left-0 bottom-0 w-full px-3 pb-5 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center bg-gray-900 border border-gray-800 rounded-full shadow px-3 py-2 gap-2">
<img alt="Luciano" className="w-8 h-8 rounded-full border border-gray-700" src="https://i.imgur.com/6VBx3io.png" />
<input className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500 text-gray-200 px-1" placeholder="Share your thoughts..." />
<button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-4 py-1.5 text-sm font-semibold shadow">
          Post
        </button>
</div>
</div>

<div className="hidden fade-in absolute inset-0 z-40 flex items-center justify-center bg-black/60" id="modal-overlay">
<div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl w-[90%] max-w-sm p-6 relative" id="modal-card">
<button className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 rounded-full p-1" onClick={(e) => { closeModal() }}>
<svg fill="none" height="20" stroke="currentColor" width="20"><path d="M6 6l8 8M6 14L14 6" strokeLinecap="round" strokeWidth="2"></path></svg>
</button>

<div id="modal-content"></div>
</div>
</div>
</div>


    </>
  );
}
