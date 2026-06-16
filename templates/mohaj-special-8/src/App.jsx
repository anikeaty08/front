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
serif: ['Lora', 'serif'],
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
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
amber: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
700: '#b45309',
800: '#92400e',
900: '#78350f',
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
      

<header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-serif text-xl tracking-tight font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">MOHAJ</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Martyrs Archive</a>
<a className="text-sm font-medium text-stone-900 transition-colors border-b border-amber-600 pb-0.5" href="#">Dossiers</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Timeline</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Map</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<a className="text-xs font-medium bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-colors shadow-sm" href="#">
                    Sign In
                </a>
</div>
</div>
</header>

<section className="relative w-full h-[60vh] min-h-[500px] mt-16 flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 z-0">
<img alt="Theology of Resistance" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 img-fade-overlay mix-blend-multiply"></div>
<div className="absolute inset-0 bg-stone-900/30"></div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-start justify-center h-full pt-12">

<div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-amber-50 rounded-sm mb-6 border border-amber-500/30 shadow-lg">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Featured Dossier</span>
</div>

<h1 className="font-serif text-4xl md:text-6xl text-stone-50 font-medium tracking-tight leading-[1.1] mb-4 max-w-4xl drop-shadow-sm">
                The Theology of Resistance: <br/><span className="text-stone-200 italic font-normal">Understanding the Core Beliefs</span>
</h1>

<p className="text-stone-200 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-8 drop-shadow-md">
                An in-depth exploration of the spiritual foundations, historic texts, and moral imperatives that drive the evolving geography of resistance.
            </p>

<a className="group flex items-center gap-3 px-6 py-3 bg-[#FDFCF8] text-stone-900 hover:bg-amber-50 transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 border border-white/20" href="#">
<span className="text-sm font-semibold tracking-wide">Read Dossier</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<div className="sticky top-16 z-40 bg-[#FDFCF8]/95 backdrop-blur-xl border-b border-stone-200 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">

<div className="relative w-full md:w-1/3 min-w-[280px]">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full bg-stone-100 border border-stone-200 rounded-md py-2 pl-10 pr-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 transition-all" placeholder="Search dossiers by topic..." type="text"/>
</div>

<div className="hidden md:block w-px h-6 bg-stone-200"></div>

<div className="w-full overflow-x-auto no-scrollbar flex items-center gap-2 pb-1 md:pb-0 fade-mask">
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-stone-900 text-stone-50 text-xs font-medium border border-stone-900 shadow-sm">
                    All Topics
                </button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs font-medium border border-stone-200 hover:border-amber-400 hover:text-amber-800 transition-all">
                    Commanders
                </button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs font-medium border border-stone-200 hover:border-amber-400 hover:text-amber-800 transition-all">
                    Women in Resistance
                </button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs font-medium border border-stone-200 hover:border-amber-400 hover:text-amber-800 transition-all">
                    Strategic Studies
                </button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs font-medium border border-stone-200 hover:border-amber-400 hover:text-amber-800 transition-all">
                    Arts &amp; Media
                </button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs font-medium border border-stone-200 hover:border-amber-400 hover:text-amber-800 transition-all">
                    Theology
                </button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-stone-600 text-xs font-medium border border-stone-200 hover:border-amber-400 hover:text-amber-800 transition-all">
                    Archives
                </button>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 py-12 space-y-16">


<section className="space-y-6">
<div className="flex items-end justify-between border-b border-stone-200 pb-2">
<div>
<h2 className="font-serif text-2xl text-stone-900 font-medium tracking-tight">Trending Now</h2>
<p className="text-xs text-stone-500 mt-1">Most read analyses this week</p>
</div>
<a className="text-xs font-medium text-amber-700 hover:text-amber-800 flex items-center gap-1 mb-1" href="#">
                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory">

<article className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer">
<div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="space-y-2 pr-4">
<div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
<span className="text-amber-700 uppercase tracking-wider text-[10px]">Strategic Studies</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> 8 min read</span>
</div>
<h3 className="font-serif text-xl text-stone-900 font-medium leading-tight group-hover:text-amber-700 transition-colors">
                            Cyber Warfare: The New Frontline
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            How digital infrastructure has become the primary target in modern asymmetric conflicts across the region.
                        </p>
</div>
</article>

<article className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer">
<div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2 pr-4">
<div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
<span className="text-amber-700 uppercase tracking-wider text-[10px]">History</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> 15 min read</span>
</div>
<h3 className="font-serif text-xl text-stone-900 font-medium leading-tight group-hover:text-amber-700 transition-colors">
                            The Archives of 1982
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Uncovering previously classified documents that shed light on the formation of early resistance cells in the south.
                        </p>
</div>
</article>

<article className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer">
<div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2 pr-4">
<div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
<span className="text-amber-700 uppercase tracking-wider text-[10px]">Arts &amp; Media</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> 6 min read</span>
</div>
<h3 className="font-serif text-xl text-stone-900 font-medium leading-tight group-hover:text-amber-700 transition-colors">
                            Poetry in the Trenches
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Analyzing the handwritten verses found in the pockets of martyrs and their impact on morale.
                        </p>
</div>
</article>
</div>
</section>

<section className="space-y-6">
<div className="flex items-end justify-between border-b border-stone-200 pb-2">
<div>
<h2 className="font-serif text-2xl text-stone-900 font-medium tracking-tight">Deep Dives: Commanders of the North</h2>
<p className="text-xs text-stone-500 mt-1">Biographical studies and strategic legacy</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:border-stone-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:border-stone-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory">

<article className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer">
<div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2 pr-4">
<div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
<span className="text-amber-700 uppercase tracking-wider text-[10px]">Biography</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon> 4 Related Martyrs</span>
</div>
<h3 className="font-serif text-xl text-stone-900 font-medium leading-tight group-hover:text-amber-700 transition-colors">
                            The Shadow Strategist
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            A comprehensive look at the tactical innovations introduced by Commander H. during the 2006 offensive.
                        </p>
</div>
</article>

<article className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer">
<div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2 pr-4">
<div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
<span className="text-amber-700 uppercase tracking-wider text-[10px]">Legacy</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon> 12 Related Martyrs</span>
</div>
<h3 className="font-serif text-xl text-stone-900 font-medium leading-tight group-hover:text-amber-700 transition-colors">
                            The Architect of Tunnels
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Engineering feats that changed the landscape of defensive warfare in the northern sector.
                        </p>
</div>
</article>

<article className="flex-none w-[85vw] md:w-[400px] snap-center group cursor-pointer">
<div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2 pr-4">
<div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
<span className="text-amber-700 uppercase tracking-wider text-[10px]">Letters</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon> Family Interviews</span>
</div>
<h3 className="font-serif text-xl text-stone-900 font-medium leading-tight group-hover:text-amber-700 transition-colors">
                            Letters from the Front
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                             Personal correspondence revealing the human side of command decisions.
                        </p>
</div>
</article>
</div>
</section>

<section className="pt-8 border-t border-stone-200">
<div className="mb-8">
<h2 className="font-serif text-2xl text-stone-900 font-medium tracking-tight">Browse All Dossiers</h2>
<p className="text-xs text-stone-500 mt-1">Curated collection of 142 articles</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<article className="group cursor-pointer">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-stone-900/80 text-white text-[10px] px-2 py-1 rounded-sm backdrop-blur-sm">Premium</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-stone-500">
<span className="text-amber-700 uppercase tracking-wider text-[10px] font-semibold">Sociology</span>
<span>Oct 12, 2023</span>
</div>
<h3 className="font-serif text-lg text-stone-900 font-medium leading-snug group-hover:text-amber-700 transition-colors">
                            The Role of Community Support
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            How civilian infrastructure supports the resilience of combat units during prolonged sieges.
                        </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-stone-500">
<span className="text-amber-700 uppercase tracking-wider text-[10px] font-semibold">Media</span>
<span>Sep 28, 2023</span>
</div>
<h3 className="font-serif text-lg text-stone-900 font-medium leading-snug group-hover:text-amber-700 transition-colors">
                            Visual Language of Victory
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Deconstructing the posters and murals that define the aesthetic of resistance in urban centers.
                        </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-stone-500">
<span className="text-amber-700 uppercase tracking-wider text-[10px] font-semibold">Education</span>
<span>Sep 15, 2023</span>
</div>
<h3 className="font-serif text-lg text-stone-900 font-medium leading-snug group-hover:text-amber-700 transition-colors">
                            Schools Under Fire
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Educational continuity in conflict zones: A case study of the 1990s curriculum adjustments.
                        </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-stone-500">
<span className="text-amber-700 uppercase tracking-wider text-[10px] font-semibold">Technology</span>
<span>Aug 30, 2023</span>
</div>
<h3 className="font-serif text-lg text-stone-900 font-medium leading-snug group-hover:text-amber-700 transition-colors">
                            Signal Intelligence 101
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            A breakdown of early radio encryption methods used during the initial phases of organization.
                        </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-stone-500">
<span className="text-amber-700 uppercase tracking-wider text-[10px] font-semibold">Nature</span>
<span>Aug 12, 2023</span>
</div>
<h3 className="font-serif text-lg text-stone-900 font-medium leading-snug group-hover:text-amber-700 transition-colors">
                            Terrain as a Weapon
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Geography is destiny: How the valley typography influenced the outcome of major skirmishes.
                        </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-[3/2] overflow-hidden rounded-sm shadow-sm mb-4">
<img alt="Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-stone-500">
<span className="text-amber-700 uppercase tracking-wider text-[10px] font-semibold">Archive</span>
<span>Jul 22, 2023</span>
</div>
<h3 className="font-serif text-lg text-stone-900 font-medium leading-snug group-hover:text-amber-700 transition-colors">
                            The Lost Diaries
                        </h3>
<p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                            Restoring water-damaged journals recovered from abandoned outposts in the eastern sector.
                        </p>
</div>
</article>
</div>

<div className="mt-16 flex justify-center">
<nav className="flex items-center gap-1 bg-white border border-stone-200 rounded-full px-2 py-1 shadow-sm">
<button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center text-stone-900 font-medium text-xs bg-stone-100 rounded-full">1</button>
<button className="w-8 h-8 flex items-center justify-center text-stone-500 font-medium text-xs hover:bg-stone-50 rounded-full transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center text-stone-500 font-medium text-xs hover:bg-stone-50 rounded-full transition-colors">3</button>
<span className="text-stone-300 px-1">...</span>
<button className="w-8 h-8 flex items-center justify-center text-stone-500 font-medium text-xs hover:bg-stone-50 rounded-full transition-colors">12</button>
<button className="w-8 h-8 flex items-center justify-center text-stone-900 hover:text-amber-700 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</nav>
</div>
</section>
</main>

<footer className="bg-stone-900 text-stone-400 py-12 mt-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<span className="font-serif text-2xl text-stone-100 tracking-tight font-bold">MOHAJ</span>
<p className="mt-4 text-xs max-w-xs leading-relaxed">
                    Documenting the history, biography, and geography of resistance. A digital archive dedicated to preservation and education.
                </p>
</div>
<div>
<h4 className="text-stone-100 text-xs font-semibold uppercase tracking-wider mb-4">Sections</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-amber-500 transition-colors" href="#">Martyrs Archive</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Special Dossiers</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Interactive Map</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Timeline</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-100 text-xs font-semibold uppercase tracking-wider mb-4">Connect</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-amber-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Submit Material</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Login</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[10px]">
<p>© 2023 Mohaj Archives. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
