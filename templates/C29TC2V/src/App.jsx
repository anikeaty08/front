import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Add scroll effects
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('bg-[#1D203E]/90');
            } else {
                header.classList.remove('bg-[#1D203E]/90');
            }
        });

        // Add staggered fade-in animation for masonry items
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        });

        document.querySelectorAll('.masonry-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(item);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 fade-in bg-[#1D203E]/30 border-gray-800 border-b backdrop-blur" style={{animationDelay: '0.1s'}}>
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">

<div className="flex items-center space-x-6">
<h1 className="flex items-center gap-2 text-2xl font-medium text-purple-400 tracking-tight font-jakarta"><svg className="lucide lucide-hexagon w-6 h-6 text-purple-400" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></h1>
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
<svg className="lucide lucide-message-circle h-6 w-6 text-gray-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</button>
<img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00c49c51-b2f7-421e-bba1-ff3df1af734f_320w.jpg" style={{}}/>
</div>
</div>
</header>

<section className="fade-in pt-20 pr-4 pb-8 pl-4" style={{animationDelay: '0.12s'}}>
<div className="max-w-7xl mt-6 mr-auto ml-auto">
<div className="flex mb-8 items-end justify-between">
<h1 className="lg:text-5xl text-4xl font-semibold text-gray-100 tracking-tight font-jakarta">Top creative boards</h1>
<button className="flex items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium transition font-geist text-gray-200 hover:bg-gray-700">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                    Download All
                </button>
</div>
<div className="flex overflow-x-auto pb-4 space-x-6">

<article className="w-80 shrink-0">
<div className="grid grid-cols-3 grid-rows-2 h-48 gap-0.5 overflow-hidden rounded-xl">
<img alt="" className="col-span-2 row-span-2 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abb07eeb-b372-46b7-8e0b-15e0522a465f_800w.jpg" style={{}}/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a8b15b5-e61b-4c25-bdb7-fe972df7fe45_320w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef020f3d-5097-4840-a617-2997e6cdad6e_320w.jpg"/>
</div>
<h2 className="mt-4 text-xl font-semibold text-gray-100 font-geist">Fashion Trends </h2>
<p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gray-400 font-geist">
                        Curated by StyleHub
                    </p>
<p className="mt-1 text-sm text-gray-500 font-geist">4.2k Pins • 73 sections • Updated 5d ago</p>
</article>

<article className="w-80 shrink-0">
<div className="grid grid-cols-3 grid-rows-2 h-48 gap-0.5 rounded-xl overflow-hidden">
<img alt="" className="col-span-2 row-span-2 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7165d2-bcb9-4827-b502-3489c3ae16a2_800w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/489e6f55-4412-442e-bdaf-7f484900e708_320w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00c49c51-b2f7-421e-bba1-ff3df1af734f_320w.jpg" style={{}}/>
</div>
<h2 className="mt-4 text-xl font-semibold text-gray-100 font-geist">Aesthetic Vibes </h2>
<p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gray-400 font-geist">
                        Curated by MoodBoard
                    </p>
<p className="mt-1 text-sm text-gray-500 font-geist">4.1k Pins • 139 sections • Updated 6d ago</p>
</article>

<article className="w-80 shrink-0">
<div className="grid grid-cols-3 grid-rows-2 h-48 gap-0.5 rounded-xl overflow-hidden">
<img alt="" className="col-span-2 row-span-2 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26832f9e-37e2-475e-ad52-1cbaedf724ea_800w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/448aceb8-23eb-4731-b45a-2ef0d01382ff_320w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cd768e7-ecfe-40cd-ab23-1e0a62b36ed9_320w.jpg"/>
</div>
<h2 className="mt-4 text-xl font-semibold text-gray-100 font-geist">Beauty Inspirations </h2>
<p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gray-400 font-geist">
                        Curated by GlowUp
                    </p>
<p className="mt-1 text-sm text-gray-500 font-geist">7.9k Pins • 190 sections • Updated 4d ago</p>
</article>

<article className="w-80 shrink-0">
<div className="grid grid-cols-3 grid-rows-2 h-48 gap-0.5 rounded-xl overflow-hidden">
<img alt="" className="col-span-2 row-span-2 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16e0bbc9-74d7-4a0a-b5a5-8c32f537825c_800w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e86c3104-8199-47cc-b038-e03c9379dc06_320w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8e9bf8b-f280-490f-8aad-54be215b6433_320w.jpg"/>
</div>
<h2 className="mt-4 text-xl font-semibold text-gray-100 font-geist">Delicious Recipes </h2>
<p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gray-400 font-geist">
                        Curated by Foodies
                    </p>
<p className="mt-1 text-sm text-gray-500 font-geist">11.6k Pins • 305 sections • Updated yesterday</p>
</article>

<article className="w-80 shrink-0">
<div className="grid grid-cols-3 grid-rows-2 h-48 gap-0.5 rounded-xl overflow-hidden">
<img alt="" className="col-span-2 row-span-2 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71da56cd-3bf3-436f-a7c3-3a6f9672ca78_800w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f09193c9-6355-4bd1-b913-9c5728e4dd03_320w.jpg"/>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb724d1c-3844-4a38-b93d-5dc2355546bc_320w.jpg"/>
</div>
<h2 className="mt-4 text-xl font-semibold text-gray-100 font-geist">Creative Artworks <span>🎨</span></h2>
<p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gray-400 font-geist">
                        Curated by ArtSpace
                    </p>
<p className="mt-1 text-sm text-gray-500 font-geist">3.5k Pins • 72 sections • Updated 3d ago</p>
</article>
</div>
</div>
</section>

<main className="max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="fade-in mb-12" style={{animationDelay: '0.15s'}}>
<div className="w-full bg-gradient-to-t from-[#393D5E]/0 to-[#393D5E] border-slate-50/10 border rounded-[32px] mt-4 shadow-xl">
<div className="md:p-10 flex flex-col md:flex-row gap-8 pt-6 pr-6 pb-6 pl-6">

<div className="relative md:flex-1">
<img alt="Digital Crystalline Sculpture" className="w-full h-full object-cover rounded-[24px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a58a231f-a01b-4174-b390-3f6327e70f3e_800w.jpg" style={{}}/>
<button className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl backdrop-blur flex items-center justify-center ring-1 transition bg-black/80 ring-white/10 hover:bg-black/90" style={{}}>
<svg className="lucide lucide-refresh-ccw w-6 h-6 text-gray-300" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>

<div className="md:flex-1 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 font-jakarta">Discover your next creative spark</h2>
<p className="text-lg text-gray-300 mb-6 font-geist">Explore millions of ideas and inspirations from creators around the world. Build boards, save ideas, and turn inspiration into reality.</p>
<div className="flex flex-wrap gap-3">
<button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition font-geist">
                                Get started
                            </button>
<button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-full font-medium transition border border-gray-700 font-geist">
                                Learn more
                            </button>
</div>
</div>
</div>
</div>
</div><div className="flex fade-in mb-8 space-x-4 items-center justify-center" style={{animationDelay: '0.2s'}}>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-gray-100 text-black hover:bg-gray-200">All</button>
<button className="transition-colors hover:bg-gray-800 text-sm font-medium text-gray-300 font-geist bg-gray-900 border-neutral-50/10 border rounded-full pt-2 pr-6 pb-2 pl-6">Digital Art</button>
<button className="transition-colors hover:bg-gray-800 text-sm font-medium text-gray-300 font-geist bg-gray-900 border-neutral-50/10 border rounded-full pt-2 pr-6 pb-2 pl-6">3D Design</button>
<button className="transition-colors hover:bg-gray-800 text-sm font-medium text-gray-300 font-geist bg-gray-900 border-neutral-50/10 border rounded-full pt-2 pr-6 pb-2 pl-6">Illustration</button>
<button className="transition-colors hover:bg-gray-800 text-sm font-medium text-gray-300 font-geist bg-gray-900 border-neutral-50/10 border rounded-full pt-2 pr-6 pb-2 pl-6">Motion Graphics</button>
</div>

<div className="masonry fade-in" style={{animationDelay: '0.2s'}}>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Modern interior" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8f607a9-ba3f-4a7c-badb-cf0ecbf0c2ef_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium text-gray-100 font-geist mb-2">Calm modern workspace</h3>
<p className="text-sm font-geist text-gray-400">Clean and focused environment</p>
</div>
</div>
</div>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Mountain View" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a40bff5-bbf9-4bda-b05d-e479626177de_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Mountain Landscape</h3>
<p className="text-sm font-geist text-gray-400">Nature photography</p>
</div>
</div>
</div>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Modern interior" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48933b0d-af9c-47d1-bdc1-e0133dfc4f97_800w.jpg" style={{}}/>
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
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Interior Design" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c7bb6b6-6dc6-4648-bf8d-2108fd09ab1c_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Interior Design</h3>
<p className="text-sm font-geist text-gray-400">Home decor ideas</p>
</div>
</div>
</div>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Nature" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/defe56a1-14e2-45ae-937e-80a44411e48a_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Forest Path</h3>
<p className="text-sm font-geist text-gray-400">Nature wanderlust</p>
</div>
</div>
</div>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Fashion" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ba266bd-81e8-4c6b-b290-bdcb56dc9f72_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Fashion Style</h3>
<p className="text-sm font-geist text-gray-400">Style inspiration</p>
</div>
</div>
</div>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Technology" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65e5d0f0-a5eb-4753-82ae-6c1026ca3333_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Tech Innovation</h3>
<p className="text-sm font-geist text-gray-400">Future technology</p>
</div>
</div>
</div>
<div className="masonry-item fade-in" style={{animationDelay: '0.3s', opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#393D5E] rounded-2xl shadow-sm">
<div className="relative">
<img alt="Travel" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c0a942-8db1-4109-b875-9ccb3cee3299_800w.jpg" style={{}}/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="hover:bg-purple-300 text-sm font-medium text-black font-geist bg-purple-50 rounded-full pt-2 pr-4 pb-2 pl-4">Collect</button>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="font-medium mb-2 font-geist text-gray-100">Ocean Views</h3>
<p className="text-sm font-geist text-gray-400">Travel destinations</p>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-16 border-t border-gray-800 bg-gray-900/50 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="">
<h3 className="font-semibold text-gray-100 mb-4 font-geist">Company</h3>
<ul className="space-y-2">
<li className=""><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">About</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Press</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-gray-100 mb-4 font-geist">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Help Center</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">API</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Blog</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-gray-100 mb-4 font-geist">Legal</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Privacy</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Terms</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Guidelines</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold text-gray-100 mb-4 font-geist">Social</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Twitter</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Instagram</a></li>
<li><a className="text-gray-400 hover:text-purple-400 transition-colors font-geist" href="#">Facebook</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8 text-center">
<p className="text-gray-400 font-geist">© 2024 Pinboard. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
