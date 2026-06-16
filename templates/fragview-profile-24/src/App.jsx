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
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-serif text-xl tracking-tight font-medium text-stone-900" href="#">FRAGVIEW</a>
<div className="hidden md:flex gap-6">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">DISCOVER</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">COMMUNITY</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">JOURNAL</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="p-2 text-stone-500 hover:text-stone-900 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
</button>
<div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden border border-stone-300">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</nav>
<main className="pt-24 pb-20 max-w-6xl mx-auto px-6">

<header className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-end mb-12 pb-8 border-b border-stone-200">

<div className="flex items-center gap-6">
<div className="relative group">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-stone-200 shadow-sm relative z-10">
<img alt="Profile" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<button className="absolute bottom-0 right-0 z-20 bg-stone-900 text-stone-50 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</button>

<div className="absolute -inset-2 border border-stone-200 rounded-full z-0 border-dashed animate-[spin_60s_linear_infinite]"></div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-3">
<h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight leading-none">Isabella Chen</h1>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-[10px] uppercase tracking-wider font-medium text-stone-600">
<iconify-icon icon="solar:verified-check-linear" width="12"></iconify-icon>
                            Member
                        </span>
</div>
<p className="text-stone-500 text-sm max-w-md font-light">Olfactory explorer based in London. Collecting memories through scent.</p>
<div className="flex gap-4 mt-3">
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>London, UK</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Since Dec 2023</span>
</div>
</div>
</div>
</div>

<div className="flex gap-8 md:gap-12 md:px-8 md:border-l md:border-r border-stone-200 h-full items-center justify-center">
<div className="text-center group cursor-default">
<span className="block font-serif text-2xl text-stone-900">14</span>
<span className="text-xs text-stone-500 uppercase tracking-widest group-hover:text-stone-800 transition-colors">Wardrobe</span>
</div>
<div className="text-center group cursor-default">
<span className="block font-serif text-2xl text-stone-900">8</span>
<span className="text-xs text-stone-500 uppercase tracking-widest group-hover:text-stone-800 transition-colors">Reviews</span>
</div>
<div className="text-center group cursor-default">
<span className="block font-serif text-2xl text-stone-900">32</span>
<span className="text-xs text-stone-500 uppercase tracking-widest group-hover:text-stone-800 transition-colors">Reputation</span>
</div>
</div>

<div className="w-full md:w-64 flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Level 3</span>
<span className="text-sm font-serif italic text-stone-900">Scent Enthusiast</span>
</div>
<div className="relative w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-stone-800 w-[65%] rounded-full"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-stone-400">
<span>320 XP</span>
<span>Next Level: 500 XP</span>
</div>
</div>
</header>
<div className="grid lg:grid-cols-12 gap-10">

<div className="lg:col-span-4 flex flex-col gap-8">

<div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-stone-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
<div className="flex items-center gap-2 mb-6 relative z-10">
<iconify-icon className="text-stone-800" icon="solar:compass-linear" width="20"></iconify-icon>
<h2 className="font-serif text-lg font-medium text-stone-900">Next Steps</h2>
</div>
<div className="space-y-4 relative z-10">

<div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-pointer">
<div className="mt-0.5 w-5 h-5 rounded border border-stone-300 flex items-center justify-center bg-white group-hover:border-stone-400 transition-colors">
<div className="w-2.5 h-2.5 rounded-[1px] bg-stone-800 opacity-0 transition-opacity"></div>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-900">Write a fragrance review</p>
<p className="text-xs text-stone-500 mt-0.5">Share your thoughts on a scent.</p>
</div>
<span className="shrink-0 text-[10px] font-semibold bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200">+10 XP</span>
</div>

<div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-pointer">
<div className="mt-0.5 w-5 h-5 rounded border border-stone-300 flex items-center justify-center bg-white group-hover:border-stone-400 transition-colors"></div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-900">Complete your bio</p>
<p className="text-xs text-stone-500 mt-0.5">Tell the community about you.</p>
</div>
<span className="shrink-0 text-[10px] font-semibold bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200">+10 XP</span>
</div>

<div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-pointer">
<div className="mt-0.5 w-5 h-5 rounded border border-stone-300 flex items-center justify-center bg-white group-hover:border-stone-400 transition-colors"></div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-900">Add 3 favorites</p>
<p className="text-xs text-stone-500 mt-0.5">Define your taste profile.</p>
</div>
<span className="shrink-0 text-[10px] font-semibold bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200">+20 XP</span>
</div>
</div>
<div className="mt-6 pt-5 border-t border-stone-100 flex justify-between items-center">
<span className="text-xs text-stone-400">Daily Progress</span>
<a className="text-xs font-medium text-stone-800 hover:text-stone-600 flex items-center gap-1" href="#">
                            View all actions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="p-6 rounded-xl border border-stone-200 border-dashed bg-stone-50/50">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-stone-900">Profile Strength</h3>
<span className="text-xs font-mono text-stone-500">65%</span>
</div>
<div className="w-full bg-stone-200 rounded-full h-1 mb-4">
<div className="bg-stone-400 h-1 rounded-full w-[65%]"></div>
</div>
<p className="text-xs text-stone-500 leading-relaxed mb-4">
                        You're almost an <span className="text-stone-900 font-medium">Insider</span>. Add your signature scent and location to boost your visibility.
                    </p>
<button className="w-full py-2 px-4 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 hover:bg-stone-50 transition-colors shadow-sm">
                        Edit Profile
                    </button>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-10">

<section>
<div className="flex justify-between items-end mb-6">
<h2 className="font-serif text-2xl text-stone-900 tracking-tight">Collection &amp; Badges</h2>
<a className="text-xs text-stone-500 hover:text-stone-900" href="#">View All</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

<div className="group relative flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 mb-3 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-800 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-stone-900">Early Adopter</span>
<span className="text-[10px] text-stone-500 mt-1">Joined 2023</span>

<div className="absolute inset-0 border border-stone-800/10 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
</div>

<div className="group relative flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 mb-3 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-800 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pen-new-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-stone-900">Voice</span>
<span className="text-[10px] text-stone-500 mt-1">First Review</span>
</div>

<div className="group relative flex flex-col items-center justify-center p-6 bg-stone-50 border border-stone-100 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 mb-3 rounded-full border border-stone-200 border-dashed flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-500">Photographer</span>
<span className="text-[10px] text-stone-400 mt-1">2/25 Photos</span>

<div className="absolute top-3 right-3">
<iconify-icon className="text-stone-300" icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col items-center justify-center p-6 bg-stone-50 border border-stone-100 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
<div className="w-10 h-10 mb-3 rounded-full border border-stone-200 border-dashed flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-500">Guide</span>
<span className="text-[10px] text-stone-400 mt-1">12/100 Votes</span>
<div className="absolute top-3 right-3">
<iconify-icon className="text-stone-300" icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</section>

<section>
<div className="flex justify-between items-end mb-6">
<h2 className="font-serif text-2xl text-stone-900 tracking-tight">Recent Contributions</h2>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium rounded-full bg-stone-900 text-stone-50">All</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full text-stone-500 hover:bg-stone-200 transition-colors">Reviews</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full text-stone-500 hover:bg-stone-200 transition-colors">Wardrobe</button>
</div>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex gap-4 items-start">
<div className="w-12 h-16 shrink-0 bg-stone-100 rounded border border-stone-100 flex items-center justify-center overflow-hidden">

<iconify-icon className="text-stone-300" icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<p className="text-sm text-stone-900 font-medium">Reviewed <span className="font-serif italic text-base mx-1">Santal 33</span> by Le Labo</p>
<div className="flex gap-1 mt-1 text-stone-400">
<iconify-icon className="text-stone-800" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-outline" width="12"></iconify-icon>
</div>
</div>
<span className="text-[10px] text-stone-400">2d ago</span>
</div>
<p className="text-xs text-stone-500 mt-2 line-clamp-2">A modern classic for a reason. The sandalwood is creamy and distinct, though I find it projects a bit too loudly in small spaces...</p>
<div className="flex items-center gap-3 mt-3">
<span className="inline-flex items-center gap-1 text-[10px] text-stone-400 font-medium bg-stone-50 px-1.5 py-0.5 rounded border border-stone-100">
<iconify-icon icon="solar:bolt-linear" width="10"></iconify-icon> +15 XP Earned
                                    </span>
<button className="text-[10px] text-stone-500 hover:text-stone-900">Edit</button>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex gap-4 items-center">
<div className="w-10 h-10 shrink-0 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-stone-500">
<iconify-icon icon="solar:bag-heart-linear" width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm text-stone-900">Added <span className="font-serif italic">Gris Charnel</span> to Wardrobe</p>
</div>
<span className="text-[10px] text-stone-400">5d ago</span>
<span className="inline-flex items-center gap-1 text-[10px] text-stone-400 font-medium border border-transparent px-1.5 py-0.5">
                                +1 XP
                            </span>
</div>
</div>
<button className="w-full mt-6 py-3 border-t border-stone-200 text-xs text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-widest">
                        Load More Activity
                    </button>
</section>
</div>
</div>
</main>

    </>
  );
}
