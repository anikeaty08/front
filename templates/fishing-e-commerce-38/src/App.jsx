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
serif: ['Playfair Display', 'serif'],
},
colors: {
bg: '#050505',
surface: '#0A0A0A',
emerald: {
450: '#10b981', // Custom hue if needed
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Navbar glass effect logic
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('py-2');
                nav.classList.remove('top-8');
                nav.classList.add('top-0');
            } else {
                nav.classList.remove('py-2');
                nav.classList.remove('top-0');
                nav.classList.add('top-8');
            }
        });

        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('translate-x-full');
            
            if (isOpen) {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            } else {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            }
        }

        // Horizontal Scroll Logic for Carousels
        function scrollContainer(id, direction) {
            const container = document.getElementById(id);
            const scrollAmount = 340; // Approx card width
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-emerald-950/20 border-b border-white/5 py-2 text-center relative z-50">
<p className="text-xs font-medium text-emerald-400 tracking-wide uppercase flex items-center justify-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
            Free Worldwide Shipping on Orders Over $500
        </p>
</div>

<nav className="fixed top-8 left-0 w-full z-40 transition-all duration-300" id="navbar">
<div className="glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:anchor-linear"></iconify-icon>
</div>
<span className="font-serif text-xl tracking-tight font-semibold text-white">
                        Aqurain<span className="text-emerald-500">.</span>Tackle
                    </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#shop">Shop Gear</a>
<a className="hover:text-white transition-colors" href="#livestock">Live Stock</a>
<a className="hover:text-white transition-colors" href="#advice">Journal</a>
<a className="hover:text-white transition-colors" href="#about">Our Story</a>
</div>

<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
</button>
<button className="md:hidden text-gray-400 hover:text-white transition-colors ml-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#050505] z-50 transform translate-x-full transition-transform duration-500 flex flex-col pt-32 px-8" id="mobile-menu">
<button className="absolute top-8 right-8 text-gray-400 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 font-serif text-3xl tracking-tight font-medium text-gray-300">
<a className="hover:text-emerald-500 transition-colors" href="#shop" onclick="toggleMobileMenu()">Shop Gear</a>
<a className="hover:text-emerald-500 transition-colors" href="#livestock" onclick="toggleMobileMenu()">Live Stock</a>
<a className="hover:text-emerald-500 transition-colors" href="#advice" onclick="toggleMobileMenu()">Journal</a>
<a className="hover:text-emerald-500 transition-colors" href="#about" onclick="toggleMobileMenu()">About</a>
</div>
<div className="mt-auto mb-12 border-t border-white/10 pt-8">
<p className="text-gray-500 text-sm">Bangkok, Thailand</p>
<p className="text-emerald-500 text-sm mt-2">support@aquraintackle.com</p>
</div>
</div>

<section className="relative w-full h-[95vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Misty Lake Fishing" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{animationPlayState: 'paused'}}/> 
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-emerald-500"></span>
<span className="text-emerald-500 uppercase tracking-[0.2em] text-xs font-semibold">Your Partners in the Deep</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight text-white mb-8">
                    Master <br/>
                    The Waters.
                </h1>
<p className="text-lg md:text-xl text-gray-400 font-light max-w-lg leading-relaxed mb-10">
                    Premium Japanese engineering meets Thai craftsmanship. We provide elite gear for the world's most aggressive freshwater species.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-sm transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group">
                        Explore Collection
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white text-sm font-medium rounded-sm backdrop-blur-sm transition-all duration-300">
                        View Live Stock
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-12 right-12 hidden md:block z-10">
<div className="text-[10px] text-emerald-500/60 font-mono space-y-1 text-right">
<p>LAT: 14°35' N</p>
<p>LON: 100°58' E</p>
<p>TEMP: 28°C</p>
<p>HUM: 82%</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="shop">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">The Arsenal</h2>
<p className="text-gray-400 text-sm max-w-sm">Precision engineered equipment curated for the dedicated monster hunter.</p>
</div>
<a className="text-sm font-medium text-emerald-500 hover:text-emerald-400 flex items-center gap-1 mt-4 md:mt-0" href="#">
                Full Catalogue <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">

<div className="group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-sm border border-white/10 h-[300px] md:h-full">
<img alt="Exotic Species" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 block">Live Import</span>
<h3 className="font-serif text-3xl text-white font-medium mb-2">Exotic Species</h3>
<p className="text-gray-400 text-sm mb-4 line-clamp-2">Sourced responsibly from the Amazon and Mekong basins. Rare genetics for the serious collector.</p>
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur text-white group-hover:bg-emerald-500 group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-2 overflow-hidden rounded-sm border border-white/10 h-[300px] md:h-full">
<img alt="Rods" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1 block">Hardware</span>
<h3 className="font-serif text-2xl text-white font-medium">Rod &amp; Reel</h3>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 overflow-hidden rounded-sm border border-white/10 h-[200px] md:h-full">
<img alt="Lures" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="font-serif text-xl text-white font-medium">Terminal Tackle</h3>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 overflow-hidden rounded-sm border border-white/10 h-[200px] md:h-full">
<img alt="Bait" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="font-serif text-xl text-white font-medium">Organic Bait</h3>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between items-center mb-10">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-white">New Arrivals</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all" onclick="scrollContainer('product-scroll', 'left')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all" onclick="scrollContainer('product-scroll', 'right')">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory" id="product-scroll">

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="aspect-[4/5] bg-[#0c0c0c] relative overflow-hidden rounded-sm mb-4">
<img alt="Line" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-emerald-400">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Lines</p>
<div className="flex justify-between items-start">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-emerald-400 transition-colors">Braided Silk 80lb</h3>
<span className="text-emerald-400 font-semibold">$45.00</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="aspect-[4/5] bg-[#0c0c0c] relative overflow-hidden rounded-sm mb-4">
<img alt="Reel" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-emerald-400">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Reels</p>
<div className="flex justify-between items-start">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-emerald-400 transition-colors">Abyssal 5000 Series</h3>
<span className="text-emerald-400 font-semibold">$289.00</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="aspect-[4/5] bg-[#0c0c0c] relative overflow-hidden rounded-sm mb-4">
<img alt="Lure" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-emerald-400">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Lures</p>
<div className="flex justify-between items-start">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-emerald-400 transition-colors">Deep Diver Minnow</h3>
<span className="text-emerald-400 font-semibold">$18.50</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="aspect-[4/5] bg-[#0c0c0c] relative overflow-hidden rounded-sm mb-4">
<img alt="Hook" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1606103920295-9a091573f160?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-emerald-400">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Accessories</p>
<div className="flex justify-between items-start">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-emerald-400 transition-colors">Titanium Pliers</h3>
<span className="text-emerald-400 font-semibold">$55.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative overflow-hidden" id="livestock">

<span className="absolute -top-10 -left-10 text-[200px] font-serif font-bold text-white/5 select-none whitespace-nowrap z-0">GIANT</span>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="text-center mb-16">
<p className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">The Target</p>
<h2 className="font-serif text-5xl md:text-6xl font-semibold text-white tracking-tight">The Monster Gallery</h2>
</div>
<div className="space-y-24">

<div className="flex flex-col lg:flex-row items-center gap-12 group">
<div className="w-full lg:w-3/5 relative overflow-hidden rounded-sm aspect-video">
<img alt="Mekong Catfish" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                            WEIGHT: ~300KG
                        </div>
</div>
<div className="w-full lg:w-2/5 space-y-6">
<h3 className="font-serif text-4xl font-semibold text-white">Mekong Giant Catfish</h3>
<p className="text-gray-500 italic font-serif text-lg">Pangasianodon gigas</p>
<p className="text-gray-400 font-light leading-relaxed border-l border-emerald-500 pl-6">
                            The critically endangered giant of the Mekong. Known for its brute strength and incredible stamina. We stock certified hatchlings and provide the heavy tackle required to tame the adults.
                        </p>
<a className="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest hover:text-emerald-500 transition-colors" href="#">
                            View Gear Setup <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
<div className="w-full lg:w-3/5 relative overflow-hidden rounded-sm aspect-video">
<img alt="Arapaima" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                            WEIGHT: ~200KG
                        </div>
</div>
<div className="w-full lg:w-2/5 space-y-6 lg:text-right">
<h3 className="font-serif text-4xl font-semibold text-white">Arapaima Gigas</h3>
<p className="text-gray-500 italic font-serif text-lg">Arapaima gigas</p>
<p className="text-gray-400 font-light leading-relaxed border-r lg:border-l-0 lg:border-r border-emerald-500 pr-6 lg:pl-0 lg:pr-6">
                            An ancient air-breathing giant from the Amazon, thriving in Thai waters. Their armored scales require sharpened titanium hooks and heavy shock leaders.
                        </p>
<a className="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest hover:text-emerald-500 transition-colors" href="#">
                            View Gear Setup <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<button className="px-10 py-4 border border-white/10 text-white font-medium text-xs tracking-[0.2em] uppercase hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
                    See Full Inventory
                 </button>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="advice">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase">The Journal</span>
<h2 className="font-serif text-4xl font-semibold text-white mt-2">Expert Advice</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 border border-white/10 hover:border-emerald-500 text-white rounded-full transition-colors" onclick="scrollContainer('journal-scroll', 'left')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="p-2 border border-white/10 hover:border-emerald-500 text-white rounded-full transition-colors" onclick="scrollContainer('journal-scroll', 'right')">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 pb-8 lg:pb-0 no-scrollbar snap-x snap-mandatory" id="journal-scroll">

<article className="min-w-[85vw] md:min-w-[400px] lg:min-w-0 snap-center group cursor-pointer">
<div className="h-64 overflow-hidden relative rounded-sm mb-6">
<div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img alt="Blog 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs">
<span className="text-emerald-500 font-bold uppercase">Technique</span>
<span className="text-gray-600">|</span>
<span className="text-gray-500">Oct 12, 2023</span>
</div>
<h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">Landing the Tiger Shovelnose</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-4">Master the strike patterns of this aggressive river predator. Drag settings and rod angles essential for the fight.</p>
<span className="text-xs font-bold text-white uppercase tracking-wider group-hover:underline decoration-emerald-500 underline-offset-4">Read Article</span>
</article>

<article className="min-w-[85vw] md:min-w-[400px] lg:min-w-0 snap-center group cursor-pointer">
<div className="h-64 overflow-hidden relative rounded-sm mb-6">
<div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img alt="Blog 2" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs">
<span className="text-emerald-500 font-bold uppercase">Bait Prep</span>
<span className="text-gray-600">|</span>
<span className="text-gray-500">Sep 28, 2023</span>
</div>
<h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">Fermented Baits for Reservoirs</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-4">Why 'Lam' and local fruit additives outperform synthetic lures in the deep waters of Srinakarin Dam.</p>
<span className="text-xs font-bold text-white uppercase tracking-wider group-hover:underline decoration-emerald-500 underline-offset-4">Read Article</span>
</article>

<article className="min-w-[85vw] md:min-w-[400px] lg:min-w-0 snap-center group cursor-pointer">
<div className="h-64 overflow-hidden relative rounded-sm mb-6">
<div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img alt="Blog 3" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs">
<span className="text-emerald-500 font-bold uppercase">Gear Setup</span>
<span className="text-gray-600">|</span>
<span className="text-gray-500">Sep 15, 2023</span>
</div>
<h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">The Perfect Shock Leader</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-4">FG Knot vs PR Knot. The essential guide to rigging your terminal tackle for 100kg+ runs.</p>
<span className="text-xs font-bold text-white uppercase tracking-wider group-hover:underline decoration-emerald-500 underline-offset-4">Read Article</span>
</article>
</div>
</div>
</section>

<section className="w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[400px]">
<div className="relative group overflow-hidden h-[300px] md:h-full">
<img alt="Action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="relative group overflow-hidden bg-neutral-900 flex items-center justify-center h-[300px] md:h-full cursor-pointer">
<img alt="Video" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="relative z-10 w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-all">
<iconify-icon className="ml-1" icon="solar:play-linear" width="28"></iconify-icon>
</div>
<p className="absolute bottom-6 left-6 font-bold tracking-wide text-white">WATCH: The 150KG Fight</p>
</div>
<div className="relative group overflow-hidden h-[300px] md:h-full">
<img alt="Action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="bg-emerald-500 p-12 flex flex-col justify-center h-[300px] md:h-full">
<h3 className="font-serif text-3xl font-bold text-black mb-4">Aqurain Live</h3>
<p className="text-black/80 font-medium mb-8 text-sm leading-relaxed">Join our community of elite anglers. Share your catches and get featured on our monthly digest.</p>
<button className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors self-start">
                    Follow Instagram
                </button>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 text-gray-400 text-sm">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<span className="font-serif text-2xl font-bold text-white block mb-6">
                        Aqurain<span className="text-emerald-500">.</span>Tackle
                    </span>
<p className="mb-6 font-light max-w-xs">Supplying the obsessed since 2015. High-performance gear for high-stakes fishing.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs">Shop</h4>
<ul className="space-y-3">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Rods &amp; Reels</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Terminal Tackle</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Baits &amp; Additives</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Expedition Luggage</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Location Guide</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Wholesale</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs">Trust</h4>
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span>Authentic Gear Guarantee</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:delivery-linear"></iconify-icon>
<span>Fast Global Shipping</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:headset-linear"></iconify-icon>
<span>24/7 Expert Support</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2024 Aqurain Tackle Co., Ltd. Bangkok, Thailand.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="group flex items-center bg-white text-black pl-4 pr-2 py-2 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300">
<span className="mr-2 text-xs font-bold hidden group-hover:block whitespace-nowrap overflow-hidden transition-all">Chat with an Expert</span>
<div className="relative w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
<span className="absolute top-0 right-0 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
</span>
</div>
</button>
</div>



    </>
  );
}
