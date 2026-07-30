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
<svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path>
</svg>
</span>
<span>
<svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6.67 14.86l3.77 4.7c.8 1 2.32 1 3.12 0l3.77-4.7c3.84-4.79.92-12.86-5.33-12.86S2.83 10.07 6.67 14.86z"></path>
</svg>
</span>
<span>100%</span>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full" id="particles"></div>
<div className="mt-2 pb-20 overflow-y-auto h-[calc(100%-110px)]">

<div className="glass sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-slow"></div>
<h1 className="ml-2 text-xl font-semibold text-white">Harmony</h1>
</div>
<div className="flex space-x-4">
<button className="p-1">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="p-1">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="px-6 pt-4">

<div className="mb-6">
<h2 className="text-2xl font-bold text-white">Good Evening</h2>
<p className="text-gray-400 text-sm">Discover your perfect sound</p>
</div>

<div className="glass rounded-xl p-4 mb-6 relative overflow-hidden">
<div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-purple-500/20 to-transparent"></div>
<div className="flex items-center">
<div className="mr-4 relative">
<div className="w-16 h-16 rounded-lg overflow-hidden">
<img alt="Album Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" />
</div>
<div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
<div className="flex space-x-0.5 h-2">
<div className="equalizer-bar" style={{animationDelay: `0s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.2s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.4s`}}></div>
</div>
</div>
</div>
<div>
<p className="text-xs text-purple-300">CURRENTLY PLAYING</p>
<h3 className="font-semibold text-white">Midnight Dreams</h3>
<p className="text-gray-400 text-sm">Ethereal Echoes</p>
</div>
<div className="ml-auto">
<button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-semibold text-white">For You</h3>
<a className="text-xs text-purple-400" href="#">See All</a>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="glass rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">
<div className="w-full h-28 rounded-lg overflow-hidden mb-2">
<img alt="Daily Mix" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" />
</div>
<h4 className="font-medium text-sm text-white">Daily Mix</h4>
<p className="text-gray-400 text-xs">Based on your recent listening</p>
</div>
<div className="glass rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">
<div className="w-full h-28 rounded-lg overflow-hidden mb-2">
<img alt="New Releases" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" />
</div>
<h4 className="font-medium text-sm text-white">New Releases</h4>
<p className="text-gray-400 text-xs">This week's top new albums</p>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-semibold text-white">Recently Played</h3>
<a className="text-xs text-purple-400" href="#">See All</a>
</div>
<div className="space-y-2">
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
<img alt="Cosmic Waves" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" />
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Cosmic Waves</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">3:45</div>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
<img alt="Solar Flare" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" />
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Solar Flare</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">4:12</div>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
<img alt="Night Drive" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" />
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Night Drive</h4>
<p className="text-gray-400 text-xs">Synthwave Dreams</p>
</div>
<div className="text-xs text-gray-400">3:22</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass absolute bottom-[20px] left-4 right-4 z-40 px-6 py-3 rounded-xl flex justify-around">
<button className="flex flex-col items-center text-purple-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Browse</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Search</span>
</button>
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
