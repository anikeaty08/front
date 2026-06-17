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



        lucide.createIcons();
        
        // Like button functionality
        const likeButton = document.getElementById('likeButton');
        const likeCount = document.getElementById('likeCount');
        let liked = false;
        
        if (likeButton && likeCount) {
            likeButton.addEventListener('click', () => {
                liked = !liked;
                const svg = likeButton.querySelector('svg');
                if (liked) {
                    svg.classList.add('fill-purple-600', 'stroke-purple-600');
                    likeCount.textContent = parseInt(likeCount.textContent) + 1;
                } else {
                    svg.classList.remove('fill-purple-600', 'stroke-purple-600');
                    likeCount.textContent = parseInt(likeCount.textContent) - 1;
                }
            });
        }
        
        // Add infinite scroll simulation
        let isLoading = false;
        
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && !isLoading) {
                isLoading = true;
                setTimeout(() => {
                    isLoading = false;
                },
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
      

<header className="fixed top-0 left-0 right-0 z-50 fade-in bg-[#1D203E]/30 border-gray-800 border-b backdrop-blur-lg" style={{animationDelay: '0.1s'}}>
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">

<div className="flex items-center space-x-6">
<h1 className="flex items-center gap-2 text-2xl font-medium text-purple-400 tracking-tight font-jakarta"><svg className="lucide lucide-hexagon w-6 h-6 text-purple-400" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 16V8a2 2 0 0 0-1-1.732l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.732l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></h1>
<nav className="hidden md:flex items-center space-x-6">
<a className="font-medium transition-colors font-geist text-gray-100 hover:text-purple-400" href="#">Discover</a>
<a className="transition-colors font-geist text-gray-400 hover:text-purple-400" href="#">Trending</a>
<a className="transition-colors font-geist text-gray-400 hover:text-purple-400" href="#">Upload</a>
</nav>
</div>

<div className="flex-1 max-w-2xl mr-6 ml-6">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search h-5 w-5 text-gray-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="w-full placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-gray-100 bg-gray-900 border-slate-50/10 border rounded-full pt-3 pr-4 pb-3 pl-10" placeholder="Find creative inspiration" type="text"/>
</div>
</div>

<div className="flex items-center space-x-4">
<button className="p-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-bell h-6 w-6 text-gray-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-2 rounded-full transition-colors hover:bg-gray-900">
<svg className="lucide lucide-message-circle h-6 w-6 text-gray-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</button>
<img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00c49c51-b2f7-421e-bba1-ff3df1af734f_320w.jpg" style={{}}/>
</div>
</div>
</header>

<main className="max-w-7xl mr-auto ml-auto pt-20 pr-4 pl-4">

<div className="mb-8 fade-in" style={{animationDelay: '0.15s'}}>
<div className="w-full bg-gradient-to-t from-[#393D5E]/0 to-[#393D5E] border-slate-50/10 border rounded-[32px] mt-4 shadow-xl">
<div className="md:p-10 flex flex-col md:flex-row gap-8 pt-6 pr-6 pb-6 pl-6">

<div className="relative md:flex-1">
<img alt="Digital Crystalline Sculpture" className="w-full h-full object-cover rounded-[24px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a58a231f-a01b-4174-b390-3f6327e70f3e_800w.jpg" style={{}}/>
<button className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl backdrop-blur flex items-center justify-center ring-1 transition bg-black/80 ring-white/10 hover:bg-black/90" style={{}}>
<svg className="lucide lucide-refresh-ccw w-6 h-6 text-gray-300" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>

<div className="md:w-[42%] flex flex-col gap-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-5">
<button className="flex items-center gap-1 transition text-gray-300 hover:text-purple-400" id="likeButton">
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-lg font-medium select-none font-geist" id="likeCount">47</span>
</button>
<button className="transition text-gray-300 hover:text-gray-100">
<svg className="lucide lucide-share-2 w-6 h-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle className="" cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
<button className="transition text-gray-300 hover:text-gray-100">
<svg className="lucide lucide-more-horizontal w-6 h-6" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex items-center gap-3">
<a className="px-6 py-3 rounded-full text-sm font-medium transition font-geist bg-gray-800 text-gray-100 hover:bg-gray-700" href="#" style={{}}>View</a>
<button className="transition hover:bg-purple-300 text-sm font-semibold text-black font-geist bg-purple-50 rounded-full pt-3 pr-6 pb-3 pl-6">Collect</button>
</div>
</div>

<a className="text-lg font-medium underline underline-offset-4 font-geist text-gray-100" href="#">behanceportfolio.net</a>

<h1 className="text-3xl font-jakarta font-medium text-gray-100">Digital Crystalline Sculpture</h1>

<p className="text-lg leading-8 font-geist text-gray-100">
                            Maya Chen | Digital Sculptor &amp; VFX Artist | Experimental geometric forms inspired by natural crystal structures. Created using Blender and Cinema 4D for emerging tech brand visual identity.
                            <span className="font-medium font-geist text-blue-400">#digitalart #3dsculpture #crystalforms #generative…</span> | Creative Portfolio
                        </p>

<div className="flex items-center gap-4 pt-2">
<img alt="Avatar" className="w-14 h-14 rounded-full object-cover bg-gray-700" src="https://avatars.githubusercontent.com/u/583231?v=4" style={{}}/>
<span className="text-xl font-semibold font-geist text-gray-100">alexstorm</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center space-x-4 mb-8 fade-in" style={{animationDelay: '0.2s'}}>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-gray-100 text-black hover:bg-gray-200">All</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-gray-900 text-gray-300 hover:bg-gray-800">Digital Art</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-gray-900 text-gray-300 hover:bg-gray-800">3D Design</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-gray-900 text-gray-300 hover:bg-gray-800">Illustration</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-gray-900 text-gray-300 hover:bg-gray-800">Motion Graphics</button>
</div>

<div className="masonry" id="aura-emdse782j">

<div className="masonry-item fade-in" style={{animationDelay: '0.3s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Modern interior" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abb07eeb-b372-46b7-8e0b-15e0522a465f_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Zen workspace aesthetic</h3>
<p className="text-sm font-geist text-gray-400">Minimalist productivity space</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '0.4s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Bedroom design" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47fb5290-6bf6-46d6-a208-66202e6c4693_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Dreamy bedroom vibes</h3>
<p className="text-sm font-geist text-gray-400">Soft textures and natural light</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '0.5s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Architecture" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7165d2-bcb9-4827-b502-3489c3ae16a2_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Futuristic building design</h3>
<p className="text-sm font-geist text-gray-400">Innovative structural elements</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '0.6s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Kitchen design" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d062fec-0a26-47e3-857c-f69554167460_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Nordic culinary space</h3>
<p className="text-sm font-geist text-gray-400">Warm wood and ceramic details</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '0.7s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="3D render" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29bd2ab2-eef1-4b99-b139-83aaede71cf2_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Parametric form study</h3>
<p className="text-sm font-geist text-gray-400">Algorithmic design exploration</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '0.8s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Bathroom" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ba266bd-81e8-4c6b-b290-bdcb56dc9f72_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Spa-inspired sanctuary</h3>
<p className="text-sm font-geist text-gray-400">Natural stone and copper fixtures</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '0.9s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Office space" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea3b8c8-5259-449a-a50b-1deb45ee2481_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Creative studio setup</h3>
<p className="text-sm font-geist text-gray-400">Designer's dream workspace</p>
</div>
</div>
</div>

<div className="masonry-item fade-in" style={{animationDelay: '1.0s'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Dining room" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c0a942-8db1-4109-b875-9ccb3cee3299_800w.jpg"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Artisan dining experience</h3>
<p className="text-sm font-geist text-gray-400">Handcrafted furniture showcase</p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
