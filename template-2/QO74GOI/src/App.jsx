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



document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const toggleIcon = btn => {
    const svg = btn.querySelector('svg');
    svg.setAttribute('data-lucide', svg.getAttribute('data-lucide') === 'play' ? 'pause' : 'play');
    lucide.createIcons();
  };

  ['btnToggle','heroPlay','sidePlay'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => toggleIcon(btn));
  });

  const ctx = document.getElementById('playsChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          data: [150, 230, 340, 420, 380, 310, 470],
          fill: true,
          tension: .4,
          borderColor: '#fff',
          backgroundColor: 'rgba(255,255,255,.08)',
          pointRadius: 3,
          pointBackgroundColor: '#fff'
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.remove('opacity-0','translate-y-4');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: .15 });

  document.querySelectorAll('.animate-fadeIn').forEach(el => {
    el.classList.add('opacity-0','translate-y-4','transition','duration-700');
    observer.observe(el);
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div>

<div className="relative w-full max-w-7xl h-[900px] bg-neutral-950/90 backdrop-blur rounded-2xl shadow-2xl ring-1 ring-white/10 flex flex-col overflow-hidden">

<header className="flex h-11 select-none bg-neutral-950/40 border-neutral-50/10 pr-4 pl-4 backdrop-blur-sm space-x-3 items-center" id="aura-emd6hckln">
<div className="flex space-x-2">
<button aria-label="close" className="w-3.5 h-3.5 rounded-full bg-red-500 hover:brightness-110 transition"></button>
<button aria-label="minimize" className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:brightness-110 transition"></button>
<button aria-label="maximize" className="w-3.5 h-3.5 rounded-full bg-green-500 hover:brightness-110 transition"></button>
</div>
<div className="flex items-center space-x-4 text-gray-400">
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="hidden sm:flex flex-col w-60 bg-neutral-900/80 border-r border-white/5 p-4 space-y-8">

<nav className="space-y-2">
<button className="w-full flex items-center space-x-3 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span>Dashboard</span>
</button>
<button className="w-full flex items-center space-x-3 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition">
<svg className="lucide lucide-radio w-5 h-5" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg><span>Stations</span>
</button>
<button className="w-full flex items-center space-x-3 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition">
<svg className="lucide lucide-music w-5 h-5" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg><span className="">Browse</span>
</button>
</nav>

<div className="space-y-4 flex-1 overflow-auto">
<div className="flex items-center justify-between text-gray-400 text-xs uppercase">
<span>Library</span>
<svg className="lucide lucide-search w-4 h-4 cursor-pointer" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="flex space-x-2 text-xs">
<button className="px-3 py-1 rounded-full bg-white/10">Playlists</button>
<button className="px-3 py-1 rounded-full hover:bg-white/10">Albums</button>
<button className="px-3 py-1 rounded-full hover:bg-white/10">Shows</button>
</div>
<nav className="space-y-1 text-sm">
<button className="w-full flex items-center space-x-3 py-2 px-3 rounded-lg bg-white/5">
<div className="w-7 h-7 bg-pink-500 rounded-sm flex items-center justify-center">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="flex-1 text-left">
<p className="font-medium leading-none">Favorites</p>
<p className="text-gray-400 text-xs">Playlist • 18 tracks</p>
</div>
</button>
<button className="group w-full flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/5">
<img alt="" className="w-7 h-7 rounded-sm object-cover" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=320&q=80" />
<div className="flex-1 text-left">
<p className="font-medium leading-none">Retro Vibes</p>
<p className="text-gray-400 text-xs">Playlist • 54 tracks</p>
</div>
</button>
<button className="group w-full flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white/5">
<img alt="" className="w-7 h-7 rounded-sm object-cover" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=800&q=80" />
<div className="flex-1 text-left">
<p className="font-medium leading-none">Night Lo-Fi</p>
<p className="text-gray-400 text-xs">Playlist • 32 tracks</p>
</div>
</button>
</nav>
</div>
<button className="flex items-center justify-center space-x-2 text-sm font-medium w-full py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><span>Create</span>
</button>
</aside>

<main className="flex-1 relative sm:p-10 bg-neutral-900 pt-6 pr-6 pb-6 pl-6 space-y-10 overflow-y-auto">

<section className="relative overflow-hidden rounded-xl group">
<video autoPlay className="w-full h-60 sm:h-64 object-cover group-hover:scale-105 transition duration-500" loop muted playsInline src="https://cdn.midjourney.com/video/349c53fd-c486-4c6a-967c-26c51833e4a6/3.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h2 className="text-3xl font-semibold tracking-tight">Lost Frequencies</h2>
<p className="text-gray-300">Echoes Tour Live</p>
<div className="mt-4 flex items-center space-x-3">
<button className="py-2 px-5 bg-white text-black rounded-full font-medium flex items-center space-x-2 hover:scale-105 transition" id="heroPlay">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg><span>Play</span>
</button>
<button className="py-2 px-5 bg-white/10 rounded-full font-medium flex items-center space-x-2 hover:bg-white/20 transition">
<svg className="lucide lucide-shuffle w-5 h-5" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg><span>Shuffle</span>
</button>
</div>
</div>
</section>

<section className="space-y-6 animate-fadeIn transition duration-700">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Trending Artists</h3>
<button className="text-sm text-gray-400 hover:text-gray-200">View All</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/30d8bd02-b482-40c8-80d4-a6e9812cf2aa/0_0.png?w=800&q=80" />
<p className="font-medium">Aria Noir</p>
<p className="text-xs text-gray-400">5.8 M Streams</p>
</div>
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/acc17300-b52b-4916-9a87-bccf823ca2c9/0_0.png?w=800&q=80" />
<p className="font-medium">Neon Echo</p>
<p className="text-xs text-gray-400">7.3 M Streams</p>
</div>
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/78e14ce9-43c8-4d98-9a38-f61758091db6/0_2.png?w=800&q=80" />
<p className="font-medium">Pulse Wave</p>
<p className="text-xs text-gray-400">4.9 M Streams</p>
</div>
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/0cbbe345-dc5a-4d8d-b03e-34442264f535/0_0.png?w=800&q=80" />
<p className="font-medium">Echo Valley</p>
<p className="text-xs text-gray-400">6.1 M Streams</p>
</div>
</div>
</section>

<section className="space-y-6 animate-fadeIn transition duration-700">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Featured Artists of the Month</h3>
<button className="text-sm text-gray-400 hover:text-gray-200">See More</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/91d008d5-2a0c-4aa4-9481-145e5a0dbe34/0_2.png?w=800&q=80" />
<p className="font-medium">Emotions</p>
<p className="text-xs text-gray-400">5.8 M Streams</p>
</div>
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/83d61e11-e8c9-40b7-9114-9db2fc5aa9c1/0_0.png?w=800&q=80" />
<p className="font-medium">Reflection</p>
<p className="text-xs text-gray-400">7.3 M Streams</p>
</div>
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/dcf397e3-1d4d-4286-bc04-d999927d58ab/0_1.png?w=800&q=80" />
<p className="font-medium">Dark Room</p>
<p className="text-xs text-gray-400">4.9 M Streams</p>
</div>
<div className="bg-white/5 p-4 rounded-xl group hover:bg-white/10 transition">
<img alt="" className="w-full h-32 object-cover rounded-lg mb-3" src="https://cdn.midjourney.com/63ae032c-6601-4c8a-93f4-2237fa71723e/0_0.png?w=800&q=80" />
<p className="font-medium">Pulse</p>
<p className="text-xs text-gray-400">6.1 M Streams</p>
</div>
</div>
</section>

</main>

<aside className="hidden lg:flex flex-col w-72 bg-neutral-900/80 border-l border-white/5 p-4 space-y-6">
<div className="space-y-3">
<h4 className="font-semibold">Now Spinning</h4>
<div className="relative">
<video autoPlay className="w-full h-48 object-cover rounded-xl" loop muted playsInline src="https://cdn.midjourney.com/video/09d8127a-e098-4830-b7bc-c9df30e8d69e/1.mp4"></video>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/60 backdrop-blur rounded-lg px-2 py-1">
<div>
<p className="text-sm font-medium leading-none">Golden Skyline</p>
<p className="text-xs text-gray-300">Synthwave • 4:12</p>
</div>
<button className="p-2 bg-white rounded-full text-black hover:scale-110 transition" id="sidePlay">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
</div>
<div className="flex justify-center space-x-1">
<span className="w-2 h-2 bg-white rounded-full"></span>
<span className="w-2 h-2 bg-gray-500/60 rounded-full"></span>
<span className="w-2 h-2 bg-gray-500/60 rounded-full"></span>
</div>
</div>
<div className="flex-1 overflow-auto space-y-2">
<h4 className="font-semibold">Queue</h4>
<div className="space-y-1 text-sm">
<div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition">
<div>
<p>Stellar Road</p><p className="text-xs text-gray-400">Galaxy Minds</p>
</div>
<svg className="lucide lucide-heart w-4 h-4 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition">
<div>
<p>Neon Moonlight</p><p className="text-xs text-gray-400">Velvet City</p>
</div>
<svg className="lucide lucide-heart w-4 h-4 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition">
<div className="">
<p className="">Crystal Rain</p><p className="text-xs text-gray-400">Azure Echo</p>
</div>
<svg className="lucide lucide-heart w-4 h-4 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
</div>
</div>
</aside>
</div>

<div className="h-px w-full bg-white/10"></div>

<footer className="bg-neutral-800/60 backdrop-blur text-gray-200 h-20 flex items-center px-4 sm:px-8 space-x-6">
<div className="flex items-center space-x-4 w-1/3 min-w-0">
<img alt="" className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=320&q=80" />
<div className="hidden sm:block truncate">
<p className="text-sm font-medium truncate">Dream Runner</p>
<p className="text-xs text-gray-400 truncate">Nova Pulse</p>
</div>
<svg className="lucide lucide-heart w-4 h-4 text-gray-400 hover:text-gray-100 transition cursor-pointer" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="flex flex-col items-center space-y-2 w-1/3">
<div className="flex items-center space-x-4">
<button className="hover:text-gray-400" id="btnPrev"><svg className="lucide lucide-skip-back w-5 h-5" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg></button>
<button className="p-2 bg-white text-black rounded-full" id="btnToggle"><svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></button>
<button className="hover:text-gray-400" id="btnNext"><svg className="lucide lucide-skip-forward w-5 h-5" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg></button>
</div>
<div className="flex items-center space-x-2 w-full">
<span className="text-xs text-gray-400">0:42</span>
<div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-1/4"></div>
</div>
<span className="text-xs text-gray-400">3:58</span>
</div>
</div>
<div className="hidden sm:flex items-center justify-end space-x-3 w-1/3">
<svg className="lucide lucide-mic w-5 h-5 hover:text-gray-400 cursor-pointer" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<svg className="lucide lucide-list-music w-5 h-5 hover:text-gray-400 cursor-pointer" data-lucide="list-music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15V6"></path><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M12 12H3"></path><path d="M16 6H3"></path><path d="M12 18H3"></path></svg>
<svg className="lucide lucide-monitor-speaker w-5 h-5 hover:text-gray-400 cursor-pointer" data-lucide="monitor-speaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 20H8"></path><path d="M17 9h.01"></path><rect height="16" rx="2" width="10" x="12" y="4"></rect><path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"></path><circle cx="17" cy="15" r="1"></circle></svg>
<div className="flex items-center space-x-1 w-24">
<svg className="lucide lucide-volume-2 w-4 h-4" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-2/3"></div>
</div>
</div>
<svg className="lucide lucide-maximize-2 w-5 h-5 hover:text-gray-400 cursor-pointer" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</div>
</footer>
</div>



    </>
  );
}
