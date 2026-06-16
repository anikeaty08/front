import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
<h1 className="text-xl font-semibold text-white">Profile</h1>
<button className="p-2 glass rounded-full">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="px-6 pt-4">

<div className="flex flex-col items-center mb-8">
<div className="w-24 h-24 rounded-full overflow-hidden glass p-1 mb-4">
<img alt="Profile Picture" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<h2 className="text-xl font-bold text-white mb-1">Alex Morgan</h2>
<p className="text-gray-400 text-sm mb-3">@alexmorgan</p>
<div className="flex space-x-3">
<button className="bg-purple-600 text-white text-xs px-4 py-2 rounded-full font-medium">Edit Profile</button>
<button className="glass text-white text-xs px-4 py-2 rounded-full font-medium">Share Profile</button>
</div>
</div>

<div className="glass rounded-xl p-4 mb-6">
<div className="grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-gray-300 uppercase tracking-wide">Following</p>
<p className="text-white font-semibold mt-1">187</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-300 uppercase tracking-wide">Followers</p>
<p className="text-white font-semibold mt-1">4.2K</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-300 uppercase tracking-wide">Playlists</p>
<p className="text-white font-semibold mt-1">24</p>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-lg font-semibold text-white mb-4">Listening Activity</h3>
<div className="glass rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-medium text-white">This Month</h4>
<span className="text-xs text-purple-400">342 hours</span>
</div>
<div className="space-y-3">
<div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>Pop</span>
<span>Electronic</span>
<span>Indie</span>
<span>Hip Hop</span>
</div>
</div>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mr-2">
<svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-xs text-gray-300">Top Artist</p>
<p className="text-sm text-white font-medium">Ethereal Echoes</p>
</div>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mr-2">
<svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-xs text-gray-300">Top Song</p>
<p className="text-sm text-white font-medium">Cosmic Waves</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-white">My Playlists</h3>
<a className="text-xs text-purple-400" href="#">See All</a>
</div>
<div className="space-y-3">
<div className="glass rounded-lg p-3 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
<img alt="Chill Vibes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Chill Vibes</h4>
<p className="text-gray-400 text-xs">32 songs • 2 hours 15 min</p>
</div>
<div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
<div className="glass rounded-lg p-3 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
<img alt="Night Drive" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Night Drive</h4>
<p className="text-gray-400 text-xs">18 songs • 1 hour 24 min</p>
</div>
<div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
<div className="glass rounded-lg p-3 flex items-center hover:bg-white/10 transition cursor-pointer">
<div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
<img alt="Workout Mix" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
<div className="ml-3 flex-grow">
<h4 className="text-sm font-medium text-white">Workout Mix</h4>
<p className="text-gray-400 text-xs">25 songs • 1 hour 42 min</p>
</div>
<div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
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
<button className="flex flex-col items-center text-gray-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Search</span>
</button>
<button className="flex flex-col items-center text-purple-400">
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
