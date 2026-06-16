import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const hue = Math.floor(Math.random() * 60) + 240; // Blues and purples
      particle.style.background = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.3 + 0.1})`;
      
      // Random starting position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      particle.style.left = `${startX}%`;
      particle.style.top = `${startY}%`;
      
      // Random movement direction and distance
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200;
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
  }, []);

  return (
    <>
      
<div className="fixed top-0 left-0 w-full h-full" id="particles"></div>
<div className="flex items-center justify-center min-h-screen p-4 relative z-10">
<div className="max-w-sm w-full glass rounded-xl overflow-hidden shadow-2xl">

<div className="px-6 pt-6 pb-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-slow"></div>
<h2 className="text-gray-100 font-medium text-sm">Now Playing</h2>
</div>
<div className="flex space-x-1 h-3">
<div className="equalizer-bar" style={{animationDelay: '0s'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.2s'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.4s'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.1s'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>

<div className="px-6 py-6">
<div className="flex items-center space-x-5">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
<img alt="Album Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<div>
<h3 className="text-white font-semibold">Midnight Dreams</h3>
<p className="text-gray-300 text-sm mt-1">Ethereal Echoes</p>
<div className="flex items-center mt-2">
<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill-rule="evenodd"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill-rule="evenodd"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill-rule="evenodd"></path>
</svg>
<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill-rule="evenodd"></path>
</svg>
<svg className="w-4 h-4 text-gray-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>

<div className="mt-6">
<div className="progress-bar">
<div className="progress"></div>
<div className="progress-thumb"></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-xs text-gray-400">1:45</span>
<span className="text-xs text-gray-400">4:30</span>
</div>
</div>

<div className="flex justify-between items-center mt-6">
<button className="text-gray-300 hover:text-white transition">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-gray-300 hover:text-white transition">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
<button className="text-gray-300 hover:text-white transition">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-gray-300 hover:text-white transition">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="px-6 py-4 bg-white/5">
<h3 className="text-gray-100 text-sm font-medium mb-3">Up Next</h3>
<div className="space-y-3">

<div className="flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Track 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-white text-sm font-medium">Cosmic Waves</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">3:45</div>
</div>

<div className="flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Track 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-white text-sm font-medium">Solar Flare</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">4:12</div>
</div>

<div className="flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
<img alt="Track 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-white text-sm font-medium">Astral Journey</h4>
<p className="text-gray-400 text-xs">Ethereal Echoes</p>
</div>
<div className="text-xs text-gray-400">3:58</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
