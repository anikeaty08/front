import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav">
<div className="px-4 md:px-12 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-red-600 font-semibold text-2xl tracking-tighter hover:text-red-500 transition-colors" href="#">NETFLIX</a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="text-white hover:text-neutral-200 transition-colors" href="#">Home</a>
<a className="hover:text-neutral-200 transition-colors" href="#">TV Shows</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Movies</a>
<a className="hover:text-neutral-200 transition-colors" href="#">New &amp; Popular</a>
<a className="hover:text-neutral-200 transition-colors" href="#">My List</a>
</nav>
</div>
<div className="flex items-center gap-5 text-neutral-200">
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="flex items-center gap-2 group">
<div className="w-8 h-8 rounded bg-neutral-800 border border-neutral-700 overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<iconify-icon className="group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="relative w-full overflow-hidden">

<section className="relative h-[85vh] w-full flex items-center">

<div className="absolute inset-0 w-full h-full">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 hero-gradient"></div>

<div className="relative z-10 w-full px-4 md:px-12 pt-32 md:pt-0 max-w-3xl flex flex-col items-start gap-5">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-white/10 backdrop-blur-sm text-xs font-medium text-neutral-300 uppercase tracking-wide">
<iconify-icon className="text-red-500" icon="solar:flame-linear"></iconify-icon>
<span>#1 in Movies Today</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Interstellar <br/> Horizon
                </h1>
<p className="text-base md:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl drop-shadow-md">
                    In a future where Earth is becoming uninhabitable, a team of explorers must travel beyond this galaxy to discover whether mankind has a future among the stars.
                </p>
<div className="flex items-center gap-3 mt-2">
<button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded hover:bg-neutral-200 transition-all active:scale-95 font-medium text-base">
<iconify-icon className="text-black" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        Play
                    </button>
<button className="flex items-center gap-2 bg-neutral-500/30 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 rounded hover:bg-neutral-500/40 transition-all active:scale-95 font-medium text-base">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        More Info
                    </button>
</div>
</div>
</section>

<div className="relative z-20 -mt-24 md:-mt-32 pb-20 flex flex-col gap-10">

<div className="pl-4 md:pl-12 group/row">
<div className="flex items-center gap-2 mb-3 text-neutral-200 hover:text-white transition-colors cursor-pointer group/title">
<h2 className="text-lg md:text-xl font-medium tracking-tight">Trending Now</h2>
<iconify-icon className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-cyan-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pr-12">


<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<div className="flex items-center gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800/80 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-green-400">98% Match</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] border border-white/30 px-1 rounded text-neutral-300">HD</span>
<span className="text-[10px] text-neutral-300">Action</span>
</div>
</div>
</div>
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<div className="flex items-center gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800/80 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-green-400">95% Match</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] border border-white/30 px-1 rounded text-neutral-300">4K</span>
<span className="text-[10px] text-neutral-300">Sci-Fi</span>
</div>
</div>
</div>
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<div className="flex items-center gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800/80 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-green-400">88% Match</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] border border-white/30 px-1 rounded text-neutral-300">HD</span>
<span className="text-[10px] text-neutral-300">Drama</span>
</div>
</div>
</div>
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<div className="flex items-center gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800/80 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-green-400">92% Match</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] border border-white/30 px-1 rounded text-neutral-300">HD</span>
<span className="text-[10px] text-neutral-300">Documentary</span>
</div>
</div>
</div>
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<div className="flex items-center gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800/80 border border-white/20 text-white flex items-center justify-center hover:border-white transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<span className="text-xs font-medium text-green-400">91% Match</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] border border-white/30 px-1 rounded text-neutral-300">HD</span>
<span className="text-[10px] text-neutral-300">Adventure</span>
</div>
</div>
</div>
</div>
</div>

<div className="pl-4 md:pl-12 group/row">
<div className="flex items-center gap-2 mb-3 text-neutral-200 hover:text-white transition-colors cursor-pointer group/title">
<h2 className="text-lg md:text-xl font-medium tracking-tight">Only on Netflix</h2>
<iconify-icon className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-cyan-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pr-12">
<div className="flex-none w-[260px] md:w-[380px] aspect-video relative group cursor-pointer">
<img alt="Original" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-2 left-2">
<img alt="N Logo" className="h-4 md:h-6 drop-shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<h3 className="text-white font-medium text-lg mb-1">Dark Forest</h3>
<p className="text-neutral-400 text-xs line-clamp-2 mb-2">A gripping thriller about survival in the unknown depths of nature.</p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded text-xs font-medium hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon> Play
                                </button>
<button className="p-1 rounded-full border border-neutral-500 hover:border-white text-white">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex-none w-[260px] md:w-[380px] aspect-video relative group cursor-pointer">
<img alt="Original" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-2 left-2">
<img alt="N Logo" className="h-4 md:h-6 drop-shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<h3 className="text-white font-medium text-lg mb-1">Cyber City</h3>
<p className="text-neutral-400 text-xs line-clamp-2 mb-2">Neon lights, dark secrets, and a detective running out of time.</p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded text-xs font-medium hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon> Play
                                </button>
<button className="p-1 rounded-full border border-neutral-500 hover:border-white text-white">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex-none w-[260px] md:w-[380px] aspect-video relative group cursor-pointer">
<img alt="Original" className="w-full h-full object-cover rounded-md border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-black/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-2 left-2">
<img alt="N Logo" className="h-4 md:h-6 drop-shadow-lg" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
<h3 className="text-white font-medium text-lg mb-1">The Last Glitch</h3>
<p className="text-neutral-400 text-xs line-clamp-2 mb-2">In a digital world, one error changes everything.</p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded text-xs font-medium hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon> Play
                                </button>
<button className="p-1 rounded-full border border-neutral-500 hover:border-white text-white">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="pl-4 md:pl-12 group/row">
<div className="flex items-center gap-2 mb-3 text-neutral-200 hover:text-white transition-colors cursor-pointer group/title">
<h2 className="text-lg md:text-xl font-medium tracking-tight">Continue Watching</h2>
<iconify-icon className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-cyan-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pr-12">
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 opacity-60 group-hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute bottom-4 left-4 right-4 h-1 bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-red-600"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
<iconify-icon className="ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 opacity-60 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-1/4 bg-red-600"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
<iconify-icon className="ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex-none w-[160px] md:w-[240px] aspect-[2/3] relative group cursor-pointer">
<img alt="Movie" className="w-full h-full object-cover rounded-md border border-white/10 opacity-60 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-4/5 bg-red-600"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
<iconify-icon className="ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full px-4 md:px-12 py-16 text-neutral-500 text-sm border-t border-white/5 bg-neutral-950">
<div className="max-w-5xl mx-auto flex flex-col gap-6">
<div className="flex items-center gap-4 mb-2">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:facebook-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:twitter-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:youtube-linear" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
<div className="flex flex-col gap-3">
<a className="hover:underline" href="#">Audio Description</a>
<a className="hover:underline" href="#">Investor Relations</a>
<a className="hover:underline" href="#">Legal Notices</a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:underline" href="#">Help Center</a>
<a className="hover:underline" href="#">Jobs</a>
<a className="hover:underline" href="#">Cookie Preferences</a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:underline" href="#">Gift Cards</a>
<a className="hover:underline" href="#">Terms of Use</a>
<a className="hover:underline" href="#">Corporate Information</a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:underline" href="#">Media Center</a>
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Contact Us</a>
</div>
</div>
<button className="border border-neutral-600 text-neutral-400 px-4 py-1.5 hover:text-white text-xs w-fit mt-4">
                Service Code
            </button>
<div className="text-[10px] mt-2">
                © 2023 StreamUI, Inc.
            </div>
</div>
</footer>

    </>
  );
}
