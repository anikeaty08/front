import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0f0f0f',
surfaceHighlight: '#1a1a1a',
primary: '#6366f1', // Indigo
accent: '#a855f7', // Purple
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-200 transition-colors">LUMINA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#browse">Browse</a>
<a className="hover:text-white transition-colors" href="#categories">Categories</a>
<a className="hover:text-white transition-colors" href="#creators">Creators</a>
<a className="hover:text-white transition-colors" href="#software">Software</a>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-medium text-white transition-all">
<span>Sign In</span>
</button>

<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-16">

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
<div className="max-w-4xl mx-auto space-y-8 animate-float">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                    v2.0 Now Available for macOS
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 pb-2">
                    Premium Live Wallpapers<br/>for Your Desktop
                </h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
                    Transform your workspace with cinematic, high-performance animated backgrounds. 
                    Compatible with Wallpaper Engine and Lumina Desktop.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#browse">
<iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
                        Browse Wallpapers
                    </a>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass hover:bg-white/10 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:fire-linear" width="18"></iconify-icon>
                        Trending Now
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500">
<span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
<iconify-icon className="animate-bounce" icon="solar:mouse-minimalistic-linear" width="20"></iconify-icon>
</div>
</section>

<section className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-y border-white/5 py-4" id="browse">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
<button className="px-4 py-1.5 rounded-lg bg-white text-black text-xs font-medium whitespace-nowrap">
                        All
                    </button>
<button className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors whitespace-nowrap">
                        Anime
                    </button>
<button className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors whitespace-nowrap">
                        Cyberpunk
                    </button>
<button className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors whitespace-nowrap">
                        Nature
                    </button>
<button className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors whitespace-nowrap">
                        Minimal
                    </button>
</div>

<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
<span>Resolution: 4K</span>
</button>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="relative w-full md:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-white/5 border border-white/5 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Search wallpapers..." type="text"/>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<article className="group relative glass-card rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[16/9] bg-neutral-900 relative overflow-hidden">
<img alt="Neon City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>

<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] font-medium text-white">
                            4K • MP4
                        </div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Neon Rain City</h3>
<p className="text-xs text-neutral-500 mt-0.5">By CyberArtist</p>
</div>
<button className="text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Loop</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Cyberpunk</span>
</div>
</div>
</div>
</article>

<article className="group relative glass-card rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[16/9] bg-neutral-900 relative overflow-hidden">
<img alt="Mountain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] font-medium text-white">
                            2K • WEBM
                        </div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Ethereal Peaks</h3>
<p className="text-xs text-neutral-500 mt-0.5">By NatureLoops</p>
</div>
<button className="text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Relaxing</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Nature</span>
</div>
</div>
</div>
</article>

<article className="group relative glass-card rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[16/9] bg-neutral-900 relative overflow-hidden">
<img alt="Tech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] font-medium text-white">
                            4K • MP4
                        </div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Retro Console</h3>
<p className="text-xs text-neutral-500 mt-0.5">By PixelMage</p>
</div>
<button className="text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Gaming</span>
</div>
</div>
</div>
</article>

<article className="group relative glass-card rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[16/9] bg-neutral-900 relative overflow-hidden">
<img alt="Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] font-medium text-white">
                            8K • MOV
                        </div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Deep Orbit</h3>
<p className="text-xs text-neutral-500 mt-0.5">By AstroX</p>
</div>
<button className="text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Space</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Dark</span>
</div>
</div>
</div>
</article>

<article className="group relative glass-card rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[16/9] bg-neutral-900 relative overflow-hidden">
<img alt="Abstract" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] font-medium text-white">
                            4K • MP4
                        </div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Fluid Gradient</h3>
<p className="text-xs text-neutral-500 mt-0.5">By MotionLab</p>
</div>
<button className="text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Abstract</span>
</div>
</div>
</div>
</article>

<article className="group relative glass-card rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[16/9] bg-neutral-900 relative overflow-hidden">
<img alt="Gaming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-[10px] font-medium text-white">
                            1080p • MP4
                        </div>
</div>
<div className="p-4 relative">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Setup Minimal</h3>
<p className="text-xs text-neutral-500 mt-0.5">By TechFlow</p>
</div>
<button className="text-neutral-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5">Minimal</span>
</div>
</div>
</div>
</article>
</div>

<div className="flex justify-center mt-16">
<button className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 text-sm text-neutral-300 transition-all flex items-center gap-2">
<iconify-icon className="animate-spin-slow" icon="solar:restart-linear" width="16"></iconify-icon>
                    Load More Wallpapers
                </button>
</div>
</section>

<section className="border-t border-white/5 bg-surfaceHighlight/30 backdrop-blur-3xl py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-8 relative group rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
<div className="aspect-video w-full bg-neutral-900 relative">

<img alt="Featured" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 video-overlay opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
<div className="w-1/3 h-full bg-indigo-500"></div>
</div>
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-4">
<iconify-icon icon="solar:pause-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:volume-cross-linear" width="20"></iconify-icon>
<span className="text-xs font-mono">00:15 / 00:45</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:maximize-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/20 uppercase tracking-wider">Featured</span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-white">Cyber Samurai 2077</h2>
<div className="flex items-center gap-3 mt-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Creator" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div>
<p className="text-sm text-white">NeonDreams</p>
<p className="text-xs text-neutral-500">PRO Creator</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-neutral-500 mb-1">Resolution</p>
<p className="text-sm font-medium text-white">3840 x 2160</p>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-neutral-500 mb-1">FPS</p>
<p className="text-sm font-medium text-white">60</p>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-neutral-500 mb-1">Format</p>
<p className="text-sm font-medium text-white">MP4 (H.264)</p>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<p className="text-xs text-neutral-500 mb-1">Size</p>
<p className="text-sm font-medium text-white">145 MB</p>
</div>
</div>
<div className="space-y-3">
<button className="w-full py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:download-minimalistic-bold" width="20"></iconify-icon>
                                Download Wallpaper
                            </button>
<button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon>
                                Add to Collection
                            </button>
</div>
<div className="pt-4 border-t border-white/5">
<p className="text-xs text-neutral-500 leading-relaxed">
                                High-quality loop featuring a futuristic samurai in a rainy neon city. Optimized for minimal CPU usage.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6" id="categories">
<h2 className="text-2xl font-medium tracking-tight text-white mb-8">Popular Categories</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-white/5" href="#">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="text-sm font-medium text-white tracking-wide">Gaming</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-white/5" href="#">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="text-sm font-medium text-white tracking-wide">Neon</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-white/5" href="#">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="text-sm font-medium text-white tracking-wide">Nature</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-white/5" href="#">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="text-sm font-medium text-white tracking-wide">Abstract</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-white/5" href="#">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1570284613060-766c33850e00?q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="text-sm font-medium text-white tracking-wide">Cars</span>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-white/5" href="#">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="text-sm font-medium text-white tracking-wide">Anime</span>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-900 border border-white/5 p-12 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"></div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white relative z-10">Creator? Join the Platform.</h2>
<p className="text-neutral-400 mt-4 max-w-lg mx-auto text-sm relative z-10">Upload your own live wallpapers, earn from downloads, and build your following.</p>
<button className="mt-8 px-8 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors relative z-10">
                    Start Uploading
                </button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:monitor-camera-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300">LUMINA</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">DMCA</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:discord" width="16"></iconify-icon></a>
</div>
</div>
<div className="mt-8 text-center text-[10px] text-neutral-600">
                © 2024 Lumina Live Wallpapers. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
