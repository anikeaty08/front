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



    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const hue = Math.floor(Math.random() * 60) + 240;
      particle.style.background = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.3 + 0.1})`;
      
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      particle.style.left = `${startX}%`;
      particle.style.top = `${startY}%`;
      
      const tx = (Math.random() - 0.5) * 150;
      const ty = (Math.random() - 0.5) * 150;
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      const duration = Math.random() * 20 + 10;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
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
      
<div className="iphone-frame">
<div className="notch"></div>
<div className="phone-screen">
<div className="status-bar text-white">
<div>9:41</div>
<div className="flex space-x-2">
<span>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path>
</svg>
</span>
<span>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6.67 14.86l3.77 4.7c.8 1 2.32 1 3.12 0l3.77-4.7c3.84-4.79.92-12.86-5.33-12.86S2.83 10.07 6.67 14.86z"></path>
</svg>
</span>
<span>100%</span>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full" id="particles"></div>
<div className="mt-2 pb-20 overflow-y-auto h-[calc(100%-110px)]">

<div className="glass sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
<h1 className="text-xl font-semibold text-white">Browse</h1>
<div className="flex space-x-4">
<button className="p-1">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="p-1">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="px-6 pt-4">

<div className="mb-6">
<h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
<div className="grid grid-cols-2 gap-3">
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-24">
<div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-lg">Pop</span>
</div>
</div>
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-24">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-lg">Electronic</span>
</div>
</div>
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-24">
<div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-lg">Hip Hop</span>
</div>
</div>
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-24">
<div className="absolute inset-0 bg-gradient-to-r from-pink-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-lg">Indie</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold text-white">Featured Playlists</h2>
<a className="text-xs text-purple-400" href="#">See All</a>
</div>
<div className="relative">
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer">
<div className="flex items-center p-3">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Weekly Discover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<div className="ml-4">
<div className="px-2 py-1 bg-purple-500/30 rounded-full text-xs text-purple-300 inline-block mb-1">FEATURED</div>
<h3 className="text-white font-semibold">Weekly Discover</h3>
<p className="text-gray-400 text-sm">Your personal playlist with fresh discoveries and new releases</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold text-white">New Releases</h2>
<a className="text-xs text-purple-400" href="#">See All</a>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="glass rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">
<div className="w-full h-32 rounded-lg overflow-hidden mb-2">
<img alt="Neon Dreams" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<h4 className="font-medium text-sm text-white">Neon Dreams</h4>
<p className="text-gray-400 text-xs">Synthwave Collective</p>
</div>
<div className="glass rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">
<div className="w-full h-32 rounded-lg overflow-hidden mb-2">
<img alt="Midnight Tales" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<h4 className="font-medium text-sm text-white">Midnight Tales</h4>
<p className="text-gray-400 text-xs">Luna Eclipse</p>
</div>
<div className="glass rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">
<div className="w-full h-32 rounded-lg overflow-hidden mb-2">
<img alt="Astral Journey" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<h4 className="font-medium text-sm text-white">Astral Journey</h4>
<p className="text-gray-400 text-xs">Cosmic Wanderers</p>
</div>
<div className="glass rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">
<div className="w-full h-32 rounded-lg overflow-hidden mb-2">
<img alt="Electric Soul" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<h4 className="font-medium text-sm text-white">Electric Soul</h4>
<p className="text-gray-400 text-xs">Neon Pulse</p>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold text-white">Top Charts</h2>
<a className="text-xs text-purple-400" href="#">See All</a>
</div>
<div className="space-y-2">
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-2">
                  1
                </div>
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Neon Dreams" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">After Hours</h4>
<p className="text-gray-400 text-xs">Neon Pulse</p>
</div>
<div className="text-xs text-gray-400">4:18</div>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-2">
                  2
                </div>
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Midnight Tales" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Starlight</h4>
<p className="text-gray-400 text-xs">Luna Eclipse</p>
</div>
<div className="text-xs text-gray-400">3:45</div>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg mr-2">
                  3
                </div>
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Astral Journey" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Cosmic Waves</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">3:58</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass absolute bottom-[20px] left-4 right-4 z-40 px-6 py-3 rounded-xl flex justify-around">
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-purple-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Browse</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Search</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
<div className="bottom-bar"></div>
</div>
</div>


    </>
  );
}
