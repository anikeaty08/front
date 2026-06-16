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
stone: {
50: '#F9F8F6', /* Off-white / warm beige base */
100: '#F0EFE9',
200: '#E2E0D6',
800: '#2D2A26', /* Dark charcoal */
900: '#1C1A18',
},
accent: {
500: '#A08D73', /* Muted Gold/Taupe */
600: '#8C7A62',
}
}
}
}
}



        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-overlay');
            
            if (drawer.classList.contains('translate-x-full')) {
                // Open
                drawer.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
            } else {
                // Close
                drawer.classList.add('translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 500);
                document.body.style.overflow = '';
            }
        }

        function addToCart() {
            // Visual feedback
            const badge = document.getElementById('cart-badge');
            badge.classList.remove('opacity-0');
            
            // Open cart after a short delay
            setTimeout(() => {
                const drawer = document.getElementById('cart-drawer');
                if (drawer.classList.contains('translate-x-full')) {
                    toggleCart();
                }
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-40 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-2 text-slate-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl font-serif tracking-tighter font-medium uppercase z-50" href="#">
                AURA
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-accent-500 transition-colors" href="#collections">Collections</a>
<a className="hover:text-accent-500 transition-colors" href="#works">Artworks</a>
<a className="hover:text-accent-500 transition-colors" href="#artists">Artists</a>
<a className="hover:text-accent-500 transition-colors" href="#about">About</a>
</div>

<div className="flex items-center space-x-4">
<button className="p-2 hover:text-accent-500 transition-colors">
<iconify-icon icon="solar:magnifier-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-2 relative hover:text-accent-500 transition-colors group" onclick="toggleCart()">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-1 right-0 w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" id="cart-badge"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Abstract Art" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-50/10 mix-blend-overlay"></div> 
<div className="bg-gradient-to-r from-slate-50/80 via-slate-50/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="animate-fade-in max-w-2xl">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-slate-900 tracking-tight font-serif mb-6">
                    Original Art <br/>
<span className="font-normal italic text-slate-600">That Transforms</span> <br/>
                    Your Space.
                </h1>
<p className="text-lg md:text-xl text-slate-600 font-light max-w-md mb-10 leading-relaxed">
                    Curated collections of contemporary paintings designed to evoke emotion and elevate modern interiors.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-slate-900 text-slate-50 text-sm tracking-widest uppercase hover:bg-accent-600 transition-colors duration-300 text-center" href="#works">
                        Shop Collection
                    </a>
<a className="px-8 py-4 border border-slate-800 text-slate-900 text-sm tracking-widest uppercase hover:bg-slate-800 hover:text-slate-50 transition-colors duration-300 text-center" href="#collections">
                        Explore Paintings
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto" id="collections">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">Curated Collections</h2>
<a className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent-600 transition-colors" href="#">
                View All <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
<img alt="Abstract" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="font-serif text-2xl md:text-3xl italic mb-1">Abstract</h3>
<p className="text-xs uppercase tracking-widest opacity-80">42 Artworks</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
<img alt="Modern Minimalist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=1945&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="font-serif text-2xl md:text-3xl italic mb-1">Modern</h3>
<p className="text-xs uppercase tracking-widest opacity-80">18 Artworks</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
<img alt="Canvas Prints" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="font-serif text-2xl md:text-3xl italic mb-1">Limited Editions</h3>
<p className="text-xs uppercase tracking-widest opacity-80">Exclusive</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="works">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-center mb-16 text-slate-900">Featured Artworks</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Artwork" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-4 uppercase text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center gap-2" onclick="addToCart()">
                            Add To Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-slate-900 tracking-tight leading-none mb-1">Ethereal Morning</h3>
<p className="text-sm text-slate-500">Elena Vossen</p>
</div>
<span className="text-sm font-medium text-slate-900">$1,250</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Artwork" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&amp;w=2066&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-4 uppercase text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center gap-2" onclick="addToCart()">
                            Add To Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-slate-900 tracking-tight leading-none mb-1">Silent Ocean</h3>
<p className="text-sm text-slate-500">Marc Davids</p>
</div>
<span className="text-sm font-medium text-slate-900">$890</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Artwork" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-4 uppercase text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center gap-2" onclick="addToCart()">
                            Add To Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-slate-900 tracking-tight leading-none mb-1">Golden Hour</h3>
<p className="text-sm text-slate-500">Sarah Jenkins</p>
</div>
<span className="text-sm font-medium text-slate-900">$2,100</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Artwork" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-4 uppercase text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center gap-2" onclick="addToCart()">
                            Add To Cart
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl text-slate-900 tracking-tight leading-none mb-1">Urban Decay</h3>
<p className="text-sm text-slate-500">J.K. Lantis</p>
</div>
<span className="text-sm font-medium text-slate-900">$1,450</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-100 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="relative w-full aspect-[4/3] bg-white overflow-hidden shadow-sm">
<img alt="Masterpiece" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-slate-900 text-white text-xs uppercase tracking-widest py-1 px-3">Featured</span>
</div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square bg-white border border-slate-900 cursor-pointer p-0.5">
<img className="w-full h-full object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square bg-slate-200 cursor-pointer overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-200 cursor-pointer overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="mb-2">
<h4 className="text-sm uppercase tracking-widest text-slate-500">New Arrival</h4>
</div>
<h1 className="font-serif text-4xl lg:text-5xl text-slate-900 tracking-tight mb-2">The Abstract Mind No. 4</h1>
<div className="flex items-center gap-2 mb-6">
<p className="text-lg text-slate-600 italic font-serif">by Arthur Pendelton</p>
</div>
<p className="text-2xl font-medium text-slate-900 mb-8">$3,400</p>
<div className="space-y-6 mb-10">

<div className="">
<label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">Dimensions</label>
<div className="flex flex-wrap gap-3">
<button className="px-4 py-2 border border-slate-800 text-slate-900 text-sm">36" x 48"</button>
<button className="px-4 py-2 border border-slate-300 text-slate-400 text-sm hover:border-slate-500 transition-colors">48" x 60"</button>
<button className="px-4 py-2 border border-slate-300 text-slate-400 text-sm hover:border-slate-500 transition-colors">60" x 72"</button>
</div>
</div>

<div>
<label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">Frame Finish</label>
<div className="flex gap-4">
<label className="cursor-pointer flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-300 ring-1 ring-offset-2 ring-slate-800"></div>
<span className="text-sm text-slate-900">Obsidian</span>
</label>
<label className="cursor-pointer flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#C5A065] border border-slate-300"></div>
<span className="text-sm text-slate-500">Gold</span>
</label>
<label className="cursor-pointer flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#E5E0D5] border border-slate-300"></div>
<span className="text-sm text-slate-500">Natural</span>
</label>
</div>
</div>

<div className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-6">
                            Original oil on canvas. A meditation on texture and light, this piece explores the boundaries between chaos and order. Signed by the artist. Certificate of authenticity included.
                        </div>
</div>

<div className="flex gap-4">
<div className="w-24 border border-slate-300 flex items-center justify-between px-3">
<button className="text-slate-400 hover:text-slate-900">-</button>
<span className="text-sm font-medium">1</span>
<button className="text-slate-400 hover:text-slate-900">+</button>
</div>
<button className="flex-1 bg-slate-900 text-white text-sm uppercase tracking-widest py-4 hover:bg-accent-600 transition-colors" onclick="addToCart()">
                            Add to Cart
                        </button>
</div>
<div className="mt-4 text-center">
<button className="text-xs uppercase tracking-widest underline text-slate-500 hover:text-slate-900">Buy Now - $3,400</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="artists">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="w-full md:w-1/2">
<img alt="Artist Studio" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="w-full md:w-1/2">
<h5 className="text-accent-600 text-xs uppercase tracking-widest mb-4">Our Narrative</h5>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6">Honoring the Human Touch.</h2>
<p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                        We believe in the power of the artist's hand. In a world of digital replication, AURA creates a bridge between visionary creators and collectors who seek meaning. Every piece is verified for authenticity and crafted with uncompromising materials.
                    </p>
<a className="inline-flex items-center gap-2 border-b border-slate-900 pb-1 text-slate-900 uppercase tracking-widest text-xs hover:text-accent-600 hover:border-accent-600 transition-colors" href="#">
                        Meet the Artists
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center p-4">
<iconify-icon className="text-slate-800 mb-4" icon="solar:magnifier-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Discover</h4>
<p className="text-sm text-slate-500 leading-relaxed">Browse our curated selection of original works.</p>
</div>

<div className="flex flex-col items-center text-center p-4">
<iconify-icon className="text-slate-800 mb-4" icon="solar:ruler-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Select Size</h4>
<p className="text-sm text-slate-500 leading-relaxed">Choose the perfect dimensions or custom framing.</p>
</div>

<div className="flex flex-col items-center text-center p-4">
<iconify-icon className="text-slate-800 mb-4" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Secure</h4>
<p className="text-sm text-slate-500 leading-relaxed">Encrypted checkout and authenticity guarantee.</p>
</div>

<div className="flex flex-col items-center text-center p-4">
<iconify-icon className="text-slate-800 mb-4" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Deliver</h4>
<p className="text-sm text-slate-500 leading-relaxed">White-glove shipping directly to your door.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-accent-500 opacity-50 mb-8" icon="solar:quote-up-linear" width="40"></iconify-icon>
<h3 className="font-serif text-3xl md:text-4xl leading-tight text-slate-800 mb-8">
                "The piece I purchased completely changed the energy of my living room. The texture, the colors, the frame quality—everything is exquisite."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Isabella M.</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">New York, NY</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-slate-800 pb-20">
<div className="md:col-span-4">
<h2 className="font-serif text-3xl mb-6">Bring Art Into Your Life.</h2>
<p className="text-slate-400 text-sm mb-8 max-w-xs">Join our newsletter for exclusive releases, artist interviews, and exhibition invites.</p>
<form className="flex border-b border-slate-700 pb-2 max-w-xs">
<input className="bg-transparent w-full text-sm outline-none placeholder-slate-600" placeholder="Email Address" type="email"/>
<button className="uppercase text-xs tracking-widest text-slate-400 hover:text-white transition-colors">Join</button>
</form>
</div>
<div className="md:col-span-2"></div>
<div className="md:col-span-2">
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Art Prints</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Support</h4>
<ul className="space-y-4 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Social</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="brandico:pinterest-p" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2023 AURA Gallery. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="cursor-pointer hover:text-slate-400">Privacy</span>
<span className="cursor-pointer hover:text-slate-400">Accessibility</span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-y-0 right-0 z-50 w-full md:w-[450px] bg-white transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xl flex flex-col" id="cart-drawer">

<div className="px-6 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h2 className="font-serif text-xl text-slate-900">Your Collection (1)</h2>
<button className="text-slate-500 hover:text-slate-900 transition-colors" onclick="toggleCart()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">
<div className="flex gap-4">
<div className="w-24 h-32 bg-slate-100 flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-serif text-lg text-slate-900">Ethereal Morning</h3>
<p className="text-sm font-medium">$1,250</p>
</div>
<p className="text-xs text-slate-500 mb-2">24" x 36" / Obsidian Frame</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-slate-200">
<button className="px-2 text-slate-400 hover:text-slate-900">-</button>
<span className="text-xs px-2 py-1">1</span>
<button className="px-2 text-slate-400 hover:text-slate-900">+</button>
</div>
<button className="text-xs text-slate-400 underline hover:text-cyan-900">Remove</button>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-100 p-6 bg-slate-50/30">
<div className="mb-4">
<label className="text-xs uppercase tracking-widest text-slate-500 mb-2 block">Promo Code</label>
<div className="flex">
<input className="w-full bg-white border border-slate-200 text-sm p-3 outline-none focus:border-slate-400" placeholder="Enter code" type="text"/>
<button className="bg-slate-200 text-slate-600 px-4 text-xs uppercase tracking-widest hover:bg-slate-300">Apply</button>
</div>
</div>
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-slate-600">Subtotal</span>
<span className="text-lg font-serif font-medium text-slate-900">$1,250</span>
</div>
<p className="text-xs text-slate-400 text-center mb-4"><iconify-icon className="inline align-middle mr-1" icon="solar:lock-password-linear"></iconify-icon> Secure Checkout</p>
<button className="w-full bg-slate-900 text-white py-4 uppercase text-xs tracking-widest hover:bg-accent-600 transition-colors">
                Checkout
            </button>
</div>
</div>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-500" id="cart-overlay" onclick="toggleCart()"></div>


    </>
  );
}
