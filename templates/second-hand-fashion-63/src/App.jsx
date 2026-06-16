import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Loader Animation ---
        document.addEventListener('DOMContentLoaded', () => {
            const tl = gsap.timeline();
            
            tl.to("#progress-bar", {
                width: "100%",
                duration: 1.5,
                ease: "power2.inOut"
            })
            .to("#loader", {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut"
            })
            .from("#hero-title div span", {
                yPercent: 100,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out"
            }, "-=0.3")
            .to("#hero-subtitle", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5")
            .to(".float-img", {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.8")
            .to("#hero-btns", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=1");

            // --- Scroll Animations ---
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.utils.toArray('.product-card').forEach((card, i) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power3.out"
                });
            });
        });

        // --- 2. Custom Cursor ---
        const cursor = document.querySelector('#cursor');
        const follower = document.querySelector('#cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0.1});
            gsap.to(follower, {x: e.clientX, y: e.clientY, duration: 0.3});
        });

        // Hover Effect on Links for Cursor
        const hoverables = document.querySelectorAll('a, button, .product-card');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(follower, {scale: 2, borderColor: '#ccf381', duration: 0.3});
                gsap.to(cursor, {scale: 0.5, duration: 0.3});
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(follower, {scale: 1, borderColor: 'rgba(255,255,255,0.3)', duration: 0.3});
                gsap.to(cursor, {scale: 1, duration: 0.3});
            });
        });

        // --- 3. Modal Functionality (Sell Item) ---
        const modal = document.getElementById('sell-modal');
        const openBtns = [document.getElementById('nav-sell-btn'), document.getElementById('hero-sell-btn'), document.getElementById('fab-sell')];
        const closeBtn = document.getElementById('close-modal-btn');
        const closeBg = document.getElementById('close-modal-bg');

        function toggleModal(show) {
            if(show) {
                modal.classList.remove('translate-x-full');
            } else {
                modal.classList.add('translate-x-full');
            }
        }

        openBtns.forEach(btn => {
            if(btn) btn.addEventListener('click', () => toggleModal(true));
        });
        
        closeBtn.addEventListener('click', () => toggleModal(false));
        closeBg.addEventListener('click', () => toggleModal(false));

        // --- 4. Image Upload Simulation ---
        const imgInput = document.getElementById('img-input');
        const imgPreview = document.getElementById('img-preview');
        
        imgInput.addEventListener('change', function(e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imgPreview.src = e.target.result;
                    imgPreview.classList.remove('hidden');
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader-overlay" id="loader">
<div className="flex flex-col items-center">
<h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white animate-pulse">REBORN</h1>
<div className="mt-4 h-[1px] w-32 bg-zinc-800 overflow-hidden">
<div className="h-full bg-[#ccf381] w-0" id="progress-bar"></div>
</div>
</div>
</div>

<div id="cursor"></div>
<div id="cursor-follower"></div>
<div className="noise"></div>

<div className="fixed inset-0 z-50 translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" id="sell-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="close-modal-bg"></div>
<div className="absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#0a0a0a] border-l border-white/10 flex flex-col">

<div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a] z-10">
<h2 className="text-xl font-medium tracking-tight">List an Item</h2>
<button className="p-2 hover:rotate-90 transition-transform duration-300" id="close-modal-btn">
<iconify-icon className="text-zinc-400 hover:text-white" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">

<div className="space-y-3">
<label className="text-sm font-medium text-zinc-400">PHOTOS</label>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-[3/4] border border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#ccf381] hover:bg-white/5 transition-colors group relative overflow-hidden">
<input className="absolute inset-0 opacity-0 cursor-pointer z-20" id="img-input" type="file"/>
<iconify-icon className="text-zinc-500 group-hover:text-[#ccf381] transition-colors mb-2" icon="solar:camera-add-linear" width="24"></iconify-icon>
<span className="text-xs text-zinc-600 group-hover:text-zinc-400">Add Photo</span>
<img className="absolute inset-0 w-full h-full object-cover hidden pointer-events-none" id="img-preview"/>
</div>
<div className="aspect-[3/4] bg-white/5 rounded-lg border border-white/5"></div>
<div className="aspect-[3/4] bg-white/5 rounded-lg border border-white/5"></div>
</div>
</div>

<div className="space-y-6">
<div className="group">
<label className="text-xs tracking-widest text-zinc-500 mb-2 block">TITLE</label>
<input className="w-full bg-transparent border-b border-zinc-800 py-3 text-lg focus:outline-none focus:border-[#ccf381] transition-colors placeholder:text-zinc-700" placeholder="e.g. Vintage Nike Windbreaker" type="text"/>
</div>
<div className="group">
<label className="text-xs tracking-widest text-zinc-500 mb-2 block">DESCRIPTION</label>
<textarea className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-[#ccf381] transition-colors resize-none placeholder:text-zinc-700" placeholder="Describe condition, fit, and details..." rows="4"></textarea>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs tracking-widest text-zinc-500">CATEGORY</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm appearance-none focus:outline-none focus:border-[#ccf381] cursor-pointer">
<option>Tops</option>
<option>Bottoms</option>
<option>Outerwear</option>
<option>Shoes</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs tracking-widest text-zinc-500">SIZE</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm appearance-none focus:outline-none focus:border-[#ccf381] cursor-pointer">
<option>Small</option>
<option>Medium</option>
<option>Large</option>
<option>X-Large</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs tracking-widest text-zinc-500">PRICE</label>
<div className="flex items-center border-b border-zinc-800 focus-within:border-[#ccf381] transition-colors">
<span className="text-zinc-500 text-lg">$</span>
<input className="w-full bg-transparent py-3 pl-2 text-xl font-medium focus:outline-none placeholder:text-zinc-700" placeholder="0.00" type="number"/>
</div>
</div>
</div>

<div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
<button className="w-full py-4 bg-[#ccf381] text-black font-semibold tracking-wide hover:bg-[#bce370] transition-colors flex items-center justify-center gap-2 group">
<iconify-icon icon="solar:tag-linear" width="20"></iconify-icon>
                    LIST ITEM NOW
                </button>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 glass-panel border-b border-white/5 px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-300" id="navbar">
<div className="flex items-center gap-12">
<a className="text-2xl font-bold tracking-tighter hover:text-zinc-300 transition-colors" href="#">REBORN.</a>
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#feed">Shop</a>
<a className="hover:text-white transition-colors" href="#">Brands</a>
<a className="hover:text-white transition-colors" href="#">Curated</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/5 focus-within:border-zinc-500 transition-colors w-64">
<iconify-icon className="text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-white ml-3 w-full placeholder:text-zinc-600" placeholder="Search brands, items..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="relative group">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<button className="relative group">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ccf381] rounded-full"></span>
</button>
<button className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ccf381] transition-colors" id="nav-sell-btn">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                    Sell Now
                </button>
<button className="md:hidden">
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>
<main>

<section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
<div className="w-[500px] h-[500px] bg-[#ccf381] rounded-full blur-[150px] animate-pulse"></div>
</div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-[#ccf381] animate-pulse"></span>
<span className="text-xs font-medium tracking-wider text-zinc-300 uppercase">The Future of Thrifting</span>
</div>
<h1 className="text-[13vw] leading-[0.85] font-semibold tracking-tighter mb-8 mix-blend-difference" id="hero-title">
<div className="overflow-hidden"><span className="block translate-y-full">WEAR.</span></div>
<div className="overflow-hidden"><span className="block translate-y-full text-[#ccf381]">RESELL.</span></div>
<div className="overflow-hidden"><span className="block translate-y-full">REBORN.</span></div>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto mb-12 font-light leading-relaxed opacity-0" id="hero-subtitle">
                    The curated marketplace for streetwear, vintage, and designer pieces. Give your wardrobe a second life.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0" id="hero-btns">
<a className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-[#ccf381] transition-colors flex items-center justify-center gap-2" href="#feed">
                        Start Exploring
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<button className="w-full md:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white hover:bg-white/5 transition-all" id="hero-sell-btn">
                        List an Item
                    </button>
</div>
</div>

<div className="absolute top-1/4 left-[5%] w-48 aspect-[3/4] hidden lg:block opacity-0 float-img" style={{transform: 'rotate(-12deg)'}}>
<img alt="Jacket" className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute bottom-1/4 right-[5%] w-56 aspect-[3/4] hidden lg:block opacity-0 float-img" style={{transform: 'rotate(12deg)'}}>
<img alt="Sneakers" className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-white/10" src="https://images.unsplash.com/photo-1606335543042-57c525922933?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="py-6 border-y border-white/5 bg-[#0a0a0a] overflow-hidden whitespace-nowrap relative">
<div className="inline-flex gap-8 animate-[marquee_20s_linear_infinite]">
<span className="text-2xl font-space text-outline font-bold px-4">SECURE PAYMENTS</span>
<iconify-icon className="text-[#ccf381] text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-2xl font-space text-white font-bold px-4">AUTHENTIC ITEMS</span>
<iconify-icon className="text-[#ccf381] text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-2xl font-space text-outline font-bold px-4">GLOBAL SHIPPING</span>
<iconify-icon className="text-[#ccf381] text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-2xl font-space text-white font-bold px-4">SUSTAINABLE FASHION</span>
<iconify-icon className="text-[#ccf381] text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-2xl font-space text-outline font-bold px-4">SECURE PAYMENTS</span>
<iconify-icon className="text-[#ccf381] text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-2xl font-space text-white font-bold px-4">AUTHENTIC ITEMS</span>
<iconify-icon className="text-[#ccf381] text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>

<section className="py-12 border-b border-white/5" id="feed">
<div className="container mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-medium">Fresh Drops</h2>
<div className="flex gap-2">
<button className="p-2 border border-white/10 rounded hover:bg-white/10 transition-colors"><iconify-icon icon="solar:sort-linear" width="20"></iconify-icon></button>
<button className="p-2 border border-white/10 rounded hover:bg-white/10 transition-colors"><iconify-icon icon="solar:filter-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium whitespace-nowrap">All Items</button>
<button className="px-6 py-2 border border-white/10 hover:border-white/40 text-zinc-300 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Streetwear</button>
<button className="px-6 py-2 border border-white/10 hover:border-white/40 text-zinc-300 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Vintage</button>
<button className="px-6 py-2 border border-white/10 hover:border-white/40 text-zinc-300 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Sneakers</button>
<button className="px-6 py-2 border border-white/10 hover:border-white/40 text-zinc-300 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Luxury</button>
<button className="px-6 py-2 border border-white/10 hover:border-white/40 text-zinc-300 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Y2K</button>
</div>
</div>
</section>

<section className="py-12 bg-zinc-950/50">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12" id="product-grid">

<div className="group cursor-pointer product-card opacity-0 translate-y-10">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-[#ccf381] hover:text-black transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
<span className="text-xs font-medium text-white/90 bg-black/50 px-2 py-1 rounded backdrop-blur">L / 42</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-sm md:text-base text-zinc-200 truncate pr-2">Vintage Black T-Shirt</h3>
<p className="text-xs text-zinc-500 mt-1">@alex_thrift</p>
</div>
<span className="font-semibold text-white">$45</span>
</div>
</div>

<div className="group cursor-pointer product-card opacity-0 translate-y-10">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 z-10">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-[#ccf381] hover:text-black transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-3 left-3">
<span className="bg-[#ccf381] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Rare</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-sm md:text-base text-zinc-200 truncate pr-2">Jordan 1 Retro High</h3>
<p className="text-xs text-zinc-500 mt-1">@sneakerhead99</p>
</div>
<span className="font-semibold text-white">$280</span>
</div>
</div>

<div className="group cursor-pointer product-card opacity-0 translate-y-10">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-[#ccf381] hover:text-black transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-sm md:text-base text-zinc-200 truncate pr-2">Acne Studios Beanie</h3>
<p className="text-xs text-zinc-500 mt-1">@studio_sell</p>
</div>
<span className="font-semibold text-white">$95</span>
</div>
</div>

<div className="group cursor-pointer product-card opacity-0 translate-y-10">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-[#ccf381] hover:text-black transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-sm md:text-base text-zinc-200 truncate pr-2">Carhartt WIP Jacket</h3>
<p className="text-xs text-zinc-500 mt-1">@workwear_vtg</p>
</div>
<span className="font-semibold text-white">$120</span>
</div>
</div>

<div className="group cursor-pointer product-card opacity-0 translate-y-10">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-[#ccf381] hover:text-black transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-sm md:text-base text-zinc-200 truncate pr-2">Black Oversized Hoodie</h3>
<p className="text-xs text-zinc-500 mt-1">@street_finds</p>
</div>
<span className="font-semibold text-white">$55</span>
</div>
</div>

<div className="group cursor-pointer product-card opacity-0 translate-y-10">
<div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-[#ccf381] hover:text-black transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
<span className="text-xs font-medium text-white/90 bg-black/50 px-2 py-1 rounded backdrop-blur">Size 9</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-sm md:text-base text-zinc-200 truncate pr-2">New Balance 550</h3>
<p className="text-xs text-zinc-500 mt-1">@dad_shoes</p>
</div>
<span className="font-semibold text-white">$140</span>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<button className="px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all flex items-center gap-2 group">
                        Load More Items
                        <iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#ccf381] text-black relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
<iconify-icon className="absolute -right-20 -top-20 rotate-12" icon="solar:sticker-smile-circle-linear" width="600"></iconify-icon>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">CLEAN OUT<br/>YOUR CLOSET.</h2>
<p className="text-lg md:text-xl text-black/70 mb-8 max-w-md">Join over 2 million community members giving clothes a second chance. It's fast, easy, and sustainable.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">Start Selling</button>
<button className="border border-black px-8 py-4 rounded-full font-semibold hover:bg-black/5 transition-colors">How it works</button>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-black py-16 border-t border-white/10">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<h2 className="text-3xl font-bold tracking-tighter mb-6">REBORN.</h2>
<p className="text-zinc-500 max-w-xs">The premium marketplace for second-hand fashion. Built for the future of style.</p>
</div>
<div>
<h4 className="font-bold mb-6">Explore</h4>
<ul className="space-y-4 text-zinc-500 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Search</a></li>
<li><a className="hover:text-white transition-colors" href="#">Collections</a></li>
<li><a className="hover:text-white transition-colors" href="#">Brands</a></li>
<li><a className="hover:text-white transition-colors" href="#">Editors Pick</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Company</h4>
<ul className="space-y-4 text-zinc-500 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-zinc-600 text-sm">
<p>© 2024 Reborn Market. School Project.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:camera-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:monitor-camera-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

<button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#ccf381] rounded-full text-black shadow-lg shadow-[#ccf381]/20 flex items-center justify-center z-30" id="fab-sell">
<iconify-icon icon="solar:add-circle-linear" width="30"></iconify-icon>
</button>

<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

    </>
  );
}
