import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#e0a87e',
50: '#fbf6f3',
100: '#f5ebe3',
200: '#ead0bd',
300: '#deb596',
400: '#e0a87e', // Base
500: '#d18d5e',
600: '#c47648',
700: '#a35e3a',
800: '#854d34',
900: '#6b402e',
},
dark: {
bg: '#121212',
surface: '#1E1E1E',
card: '#2A2A2A'
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
script: ['Satisfy', 'cursive'],
}
}
}
};



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // Initial Load Animation
        window.addEventListener('load', () => {
             document.querySelectorAll('.reveal').forEach((el, index) => {
                 if(el.getBoundingClientRect().top < window.innerHeight) {
                     setTimeout(() => {
                         el.classList.add('active');
                     }, index * 100);
                 }
             });
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-white/60">
<a className="hover:text-brand transition-colors" href="#">Home</a>
<a className="hover:text-brand transition-colors text-white" href="#">Products</a>
<a className="hover:text-brand transition-colors" href="#">Blog</a>
<a className="hover:text-brand transition-colors" href="#">Contacts</a>
</div>

<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
<span className="font-display text-2xl font-bold tracking-widest uppercase text-white">Exery</span>
</div>

<div className="flex items-center gap-6">
<div className="relative group hidden md:block">
<input className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-4 pr-10 text-xs focus:outline-none focus:border-brand w-32 focus:w-48 transition-all duration-300 text-white placeholder-white/30" placeholder="Search..." type="text"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/50" data-lucide="search"></i>
</div>
<button className="text-white/80 hover:text-brand transition-colors relative">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
<button className="text-white/80 hover:text-brand transition-colors relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full text-[8px] flex items-center justify-center text-black font-bold">2</span>
</button>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
<main className="w-full max-w-[1600px] mx-auto pt-24 pb-12 px-4 md:px-8">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 min-h-[600px] md:h-[80vh] max-h-[900px]">

<div className="reveal lg:col-span-5 bg-[#3a3532] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<p className="font-script text-3xl md:text-4xl text-white/80 mb-4 rotate-[-2deg]">Tom Fletcher</p>
<h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight mb-8">
                        Elegant Leather<br/>
<span className="text-white/90">Men's Backpacks</span>
</h1>
<p className="text-white/60 text-sm max-w-sm leading-relaxed mb-10">
                        Crafted from premium full-grain leather, designed for the modern voyager. Durability meets timeless sophisticated aesthetics.
                    </p>
<button className="bg-brand hover:bg-white hover:scale-105 text-black font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(224,168,126,0.3)] w-fit">
                        Explore More
                    </button>
</div>
<div className="mt-auto pt-12 flex items-center gap-3 opacity-60">
<i className="w-4 h-4 text-brand" data-lucide="map-pin"></i>
<span className="text-xs font-medium uppercase tracking-wider">Great Britain, London</span>
</div>
</div>

<div className="reveal delay-100 lg:col-span-7 relative rounded-[2rem] overflow-hidden group h-[500px] lg:h-auto">
<img alt="Leather Backpack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

<div className="absolute top-8 right-8">
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group/btn">
<i className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="absolute bottom-8 right-8 flex flex-col gap-3">
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
<button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center border border-white/10 hover:bg-brand hover:border-brand transition-colors">
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</button>
</div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
<div className="w-1.5 h-6 bg-white rounded-full"></div>
<div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
</div>
</div>
</section>

<section className="reveal delay-200 py-16 px-6 border-b border-white/5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
<i className="w-5 h-5" data-lucide="truck"></i>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-white/70">Free Shipping &amp; Returns</span>
</div>
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
<i className="w-5 h-5" data-lucide="badge-dollar-sign"></i>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-white/70">100% Money Back</span>
</div>
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-white/70">High Quality Material</span>
</div>
<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-all duration-300">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-white/70">Secure Checkout</span>
</div>
</div>
</section>

<section className="py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-8">About Us</h2>
<p className="text-sm font-medium text-white/40 mb-8 border-l-2 border-brand pl-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
<div className="space-y-6 text-white/60 text-sm leading-relaxed">
<p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
<p>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
                        </p>
</div>
</div>

<div className="reveal delay-100 relative">
<div className="absolute -top-4 -right-4 w-24 h-48 bg-brand rounded-r-2xl z-0"></div>
<div className="relative z-10 rounded-2xl overflow-hidden h-[500px]">
<img alt="Man with bag" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="reveal bg-white text-black rounded-[2.5rem] p-8 md:p-12 lg:p-16 mb-24 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">Last Arrivals</h2>
<p className="text-xs text-neutral-500 max-w-xs">Premium selection of our latest handcrafted goods for the season.</p>
</div>
<button className="px-6 py-3 rounded-full bg-brand/20 hover:bg-brand text-black font-semibold text-xs uppercase tracking-wide transition-all duration-300 flex items-center gap-2">
                    All Products
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="bg-neutral-100 rounded-2xl p-6 mb-4 relative aspect-[4/5] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<img alt="Briefcase" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="font-bold text-sm mb-1">Oxford Briefcase</h3>
<p className="text-xs text-neutral-500">Genuine Leather</p>
</div>
<div className="flex items-center gap-3">
<span className="font-bold text-sm">$149</span>
<button className="w-8 h-8 rounded-lg bg-brand/20 hover:bg-brand flex items-center justify-center text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-neutral-100 rounded-2xl p-6 mb-4 relative aspect-[4/5] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<img alt="Rucksack" className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="font-bold text-sm mb-1">Nomad Rucksack</h3>
<p className="text-xs text-neutral-500">Vintage Finish</p>
</div>
<div className="flex items-center gap-3">
<span className="font-bold text-sm">$149</span>
<button className="w-8 h-8 rounded-lg bg-brand/20 hover:bg-brand flex items-center justify-center text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-neutral-100 rounded-2xl p-6 mb-4 relative aspect-[4/5] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<img alt="Backpack" className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="font-bold text-sm mb-1">Urban Explorer</h3>
<p className="text-xs text-neutral-500">Water Resistant</p>
</div>
<div className="flex items-center gap-3">
<span className="font-bold text-sm">$149</span>
<button className="w-8 h-8 rounded-lg bg-brand/20 hover:bg-brand flex items-center justify-center text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-neutral-100 rounded-2xl p-6 mb-4 relative aspect-[4/5] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<img alt="Black Backpack" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="font-bold text-sm mb-1">Midnight Carry</h3>
<p className="text-xs text-neutral-500">Premium Leather</p>
</div>
<div className="flex items-center gap-3">
<span className="font-bold text-sm">$149</span>
<button className="w-8 h-8 rounded-lg bg-brand/20 hover:bg-brand flex items-center justify-center text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="reveal relative h-[400px] rounded-[2.5rem] overflow-hidden flex items-center justify-center text-center px-4 mb-24">
<img alt="Leather texture" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
<div className="relative z-10 max-w-3xl">
<h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tight mb-8 text-white">
                    Fashion is what designers offer you four times a year. And the style is what you choose.
                </h2>
<p className="font-script text-3xl text-brand rotate-[-3deg]">Lauren Hutton</p>
</div>
</section>

<section className="mb-24">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="font-display text-4xl font-bold uppercase mb-2">Our Blog</h2>
<p className="text-xs text-white/50">Insights into leather care, fashion trends, and our journey.</p>
</div>
<button className="px-6 py-3 rounded-full border border-brand text-brand hover:bg-brand hover:text-black font-semibold text-xs transition-all duration-300">
                    Open Page →
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<div className="group reveal cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">30.03</div>
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="font-medium text-lg mb-3 leading-tight group-hover:text-brand transition-colors">Lorem Ipsum is simply dummy text of the printing</h3>
<p className="text-xs text-white/50 mb-6 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
<span className="inline-block px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-all">Read More</span>
</div>
</div>

<div className="group reveal delay-100 cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">25.03</div>
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="font-medium text-lg mb-3 leading-tight group-hover:text-brand transition-colors">The art of maintaining premium leather</h3>
<p className="text-xs text-white/50 mb-6 line-clamp-2">Essential tips to keep your leather goods looking timeless and elegant for years to come.</p>
<span className="inline-block px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-all">Read More</span>
</div>
</div>

<div className="group reveal delay-100 cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">16.03</div>
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&amp;w=2038&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="font-medium text-lg mb-3 leading-tight group-hover:text-brand transition-colors">Style guide: Matching bags with outfits</h3>
<p className="text-xs text-white/50 mb-6 line-clamp-2">How to choose the perfect bag color and style to complement your daily attire.</p>
<span className="inline-block px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-all">Read More</span>
</div>
</div>

<div className="group reveal delay-100 cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">22.03</div>
<img alt="Blog 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&amp;w=2029&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="font-medium text-lg mb-3 leading-tight group-hover:text-brand transition-colors">Travel essentials for the modern man</h3>
<p className="text-xs text-white/50 mb-6 line-clamp-2">A curated list of what to pack in your rucksack for a weekend getaway.</p>
<span className="inline-block px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-all">Read More</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#1a1a1a] border-t border-white/5 pt-16 pb-8">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<span className="font-display text-2xl font-bold tracking-widest uppercase text-white">Exery</span>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-black transition-all" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-black transition-all" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-black transition-all" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>

<div>
<h4 className="font-bold text-sm mb-6 text-white">Help &amp; Information</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-brand transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Delivery &amp; Returns</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Sizing Guide</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-sm mb-6 text-white">About Exery</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-brand transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Investors</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Sustainability</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-sm mb-6 text-white">More from Exery</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-brand transition-colors" href="#">Mobile App</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Gift Vouchers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Black Friday</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30">
<p>Copyright © 2024 Exery. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy &amp; Cookies</a>
<a className="hover:text-white" href="#">Ts&amp;Cs</a>
<a className="hover:text-white" href="#">Accessibility</a>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</footer>


    </>
  );
}
