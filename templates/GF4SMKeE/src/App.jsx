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

<div className="glass sticky top-0 z-40 px-6 py-4">
<h1 className="text-xl font-semibold text-white mb-4">Search</h1>

<div className="relative">
<input className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 pl-10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500" placeholder="Artists, songs, or podcasts" type="text"/>
<svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="px-6 pt-4">

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold text-white">Recent Searches</h2>
<button className="text-xs text-purple-400">Clear All</button>
</div>
<div className="space-y-2">
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-purple-600/30 flex items-center justify-center">
<svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Ethereal Echoes</h4>
<p className="text-gray-400 text-xs">Artist</p>
</div>
<button className="text-gray-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Cosmic Waves" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Cosmic Waves</h4>
<p className="text-gray-400 text-xs">Song • Ethereal Echoes</p>
</div>
<button className="text-gray-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Synthwave" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Synthwave</h4>
<p className="text-gray-400 text-xs">Genre</p>
</div>
<button className="text-gray-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-semibold text-white mb-4">Browse All</h2>
<div className="grid grid-cols-2 gap-3">
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-20">
<div className="absolute inset-0 bg-gradient-to-r from-red-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center p-4">
<span className="text-white font-bold">New Releases</span>
</div>
</div>
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-20">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center p-4">
<span className="text-white font-bold">Top Charts</span>
</div>
</div>
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-20">
<div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center p-4">
<span className="text-white font-bold">Genres</span>
</div>
</div>
<div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition cursor-pointer relative h-20">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-600/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center p-4">
<span className="text-white font-bold">Podcasts</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-semibold text-white mb-4">Suggested Artists</h2>
<div className="flex space-x-4 overflow-x-auto pb-3 -mx-1 px-1">
<div className="flex flex-col items-center w-20 flex-shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden mb-2 glass p-0.5">
<img alt="Artist 1" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<p className="text-xs text-white text-center">Luna Eclipse</p>
</div>
<div className="flex flex-col items-center w-20 flex-shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden mb-2 glass p-0.5">
<img alt="Artist 2" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<p className="text-xs text-white text-center">Neon Pulse</p>
</div>
<div className="flex flex-col items-center w-20 flex-shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden mb-2 glass p-0.5">
<img alt="Artist 3" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<p className="text-xs text-white text-center">Ethereal Echoes</p>
</div>
<div className="flex flex-col items-center w-20 flex-shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden mb-2 glass p-0.5">
<img alt="Artist 4" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<p className="text-xs text-white text-center">Cosmic Wanderers</p>
</div>
<div className="flex flex-col items-center w-20 flex-shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden mb-2 glass p-0.5">
<img alt="Artist 5" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<p className="text-xs text-white text-center">Synthwave Collective</p>
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
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Browse</span>
</button>
<button className="flex flex-col items-center text-purple-400">
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
