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

<div className="glass sticky top-0 z-40 px-6 py-4 flex items-center">
<button className="mr-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="flex-1 text-center">
<h1 className="text-white font-medium">Now Playing</h1>
</div>
<button>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="px-6 py-6">
<div className="relative w-full h-60 rounded-2xl overflow-hidden mb-6 shadow-2xl">
<img alt="Cosmic Waves" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/10 rounded-full p-2 backdrop-blur-md">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="absolute bottom-3 left-3 flex items-center space-x-2">
<div className="flex space-x-0.5 h-3">
<div className="equalizer-bar" style={{animationDelay: `0s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.2s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.4s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.1s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.3s`}}></div>
</div>
<span className="text-xs text-white font-medium bg-white/10 px-2 py-1 rounded-full backdrop-blur-md">PLAYING</span>
</div>
</div>
<div className="text-center mb-6">
<h2 className="text-2xl font-bold text-white">Cosmic Waves</h2>
<p className="text-gray-300 text-sm mt-1">Ethereal Echoes • Celestial Journey</p>
</div>

<div className="mb-6">
<div className="progress-bar">
<div className="progress"></div>
<div className="progress-thumb"></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-xs text-gray-400">1:25</span>
<span className="text-xs text-gray-400">3:45</span>
</div>
</div>

<div className="flex justify-between items-center mb-8">
<button className="text-gray-300 hover:text-white transition">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-gray-300 hover:text-white transition">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
<button className="text-gray-300 hover:text-white transition">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-gray-300 hover:text-white transition">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="glass rounded-xl p-4 mb-6">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold text-white">Lyrics</h3>
<button className="text-xs text-purple-400">Full Lyrics</button>
</div>
<div className="space-y-3 text-sm">
<p className="text-gray-400">Drifting through the cosmos, endless and vast</p>
<p className="text-gray-400">Celestial bodies moving, incredibly fast</p>
<p className="text-white font-medium">Cosmic waves wash over me</p>
<p className="text-white font-medium">Guiding my journey through infinity</p>
<p className="text-gray-400">Stars illuminate the path ahead...</p>
</div>
</div>

<div className="mb-6">
<h3 className="font-semibold text-white mb-3">From Same Album</h3>
<div className="space-y-2">
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Cosmic Waves" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" />
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Cosmic Waves</h4>
<div className="flex items-center">
<span className="text-xs text-purple-400 mr-2">Now Playing</span>
<div className="flex space-x-0.5 h-2">
<div className="equalizer-bar" style={{animationDelay: `0s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.2s`}}></div>
<div className="equalizer-bar" style={{animationDelay: `0.4s`}}></div>
</div>
</div>
</div>
<div className="text-xs text-gray-400">3:45</div>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Solar Flare" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" />
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Solar Flare</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">4:12</div>
</div>
<div className="glass rounded-lg p-2 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Lunar Tides" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" />
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Lunar Tides</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">3:58</div>
</div>
</div>
</div>
</div>
</div>

<div className="bottom-bar"></div>
</div>
</div>


    </>
  );
}
