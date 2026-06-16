import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const isOpen = !menu.classList.contains('hidden');
            const icon = btn.querySelector('iconify-icon');
            if (isOpen) {
                icon.setAttribute('icon', 'solar:close-square-linear');
            } else {
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        });

        // Hero Slider Logic
        let heroCurrentIndex = 0;
        const heroSlider = document.getElementById('hero-slider');
        const totalSlides = 3; // Manually set for this example

        function moveHero(direction) {
            heroCurrentIndex += direction;
            if (heroCurrentIndex < 0) heroCurrentIndex = totalSlides - 1;
            if (heroCurrentIndex >= totalSlides) heroCurrentIndex = 0;
            
            heroSlider.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
        }

        // Auto slide hero every 5 seconds
        setInterval(() => {
            moveHero(1);
        }, 5000);

        // General Scroll Container Logic (for Products & Reviews)
        function scrollContainer(id, scrollAmount) {
            const container = document.getElementById(id);
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 border-zinc-900 bg-black/80" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">
<div className="flex flex-shrink-0 items-center">
<a className="group flex items-center gap-2" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded transition-transform group-hover:scale-105 bg-zinc-100 text-black" style={{}}>
<span className="font-medium text-xs">N</span>
</div>
<span className="text-lg font-semibold tracking-tighter text-zinc-100" style={{}}>NAVBAR.</span>
</a>
</div>
<div className="hidden md:flex md:items-center md:gap-8">
<a className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100" href="#" style={{}}>Home</a>
<a className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100" href="#" style={{}}>Product</a>
<a className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100" href="#" style={{}}>Service</a>
<a className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100" href="#" style={{}}>Login</a>
</div>
<div className="flex items-center gap-3 md:gap-4 flex-1 justify-end md:flex-none">
<div className="relative w-full max-w-[180px] sm:max-w-[240px] group">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 group-focus-within:text-zinc-800 transition-colors text-zinc-600" style={{}}>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="block w-full rounded-md border py-1.5 pl-9 pr-3 text-sm placeholder:text-zinc-400 focus:border-zinc-300 focus:bg-white focus:outline-none focus:ring-0 transition-all duration-200 border-zinc-800 bg-zinc-950 text-zinc-100" placeholder="Search..." style={{}} type="text"/>
</div>
<button className="relative flex h-9 w-9 items-center justify-center rounded-md text-zinc-500 transition-all hover:bg-zinc-900 hover:text-zinc-100" style={{}}>
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-black" style={{}}></span>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-500 md:hidden transition-all hover:bg-zinc-900 hover:text-zinc-100" id="mobile-menu-btn" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden border-t md:hidden border-zinc-900 bg-black" id="mobile-menu" style={{}}>
<div className="space-y-1 px-4 py-4">
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-400 hover:bg-zinc-950 hover:text-zinc-100" href="#" style={{}}>
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="18"></iconify-icon> Home
                </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-400 hover:bg-zinc-950 hover:text-zinc-100" href="#" style={{}}>
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="18"></iconify-icon> Product
                </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-400 hover:bg-zinc-950 hover:text-zinc-100" href="#" style={{}}>
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon> Service
                </a>
</div>
</div>
</nav>
<main className="flex-grow pt-10 pb-10 space-y-20">

<section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative group h-[400px] sm:h-[500px] w-full overflow-hidden rounded-2xl border border-zinc-800" style={{}}>

<div className="flex h-full w-full transition-transform duration-500 ease-out" id="hero-slider">

<div className="relative min-w-full flex-shrink-0 bg-zinc-950" style={{}}>
<img alt="Office" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col sm:p-12 bg-gradient-to-t to-transparent from-white/60 pt-8 pr-8 pb-8 pl-12 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="mb-2 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-md border-black/20 bg-black/10 text-black">New Arrival</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">Workspace Essentials</h2>
<p className="mt-2 max-w-lg text-zinc-800" style={{}}>Elevate your productivity with our curated collection of minimal desk accessories.</p>
</div>
</div>

<div className="relative min-w-full flex-shrink-0 bg-zinc-900" style={{}}>
<img alt="Abstract" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-8 sm:p-12 from-white/60">
<span className="mb-2 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-md border-black/20 bg-black/10 text-black">Featured</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">Modern Living</h2>
<p className="mt-2 max-w-lg text-zinc-800" style={{}}>Design focused furniture for the contemporary home.</p>
</div>
</div>

<div className="relative min-w-full flex-shrink-0 bg-zinc-900" style={{}}>
<img alt="Tech" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-8 sm:p-12 from-white/60">
<span className="mb-2 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-md border-black/20 bg-black/10 text-black">Limited</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">Audio Precision</h2>
<p className="mt-2 max-w-lg text-zinc-800" style={{}}>Experience sound like never before with our premium audio gear.</p>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex gap-2">
<button className="flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors border-black/10 bg-white/20 text-black hover:bg-white/40" onclick="moveHero(-1)">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors border-black/10 bg-white/20 text-black hover:bg-white/40" onclick="moveHero(1)">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-6 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100" style={{}}>Trending Items</h3>
<p className="text-sm text-zinc-500" style={{}}>Curated selections for this week.</p>
</div>
<div className="flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full border transition-all border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700 hover:text-zinc-100" onclick="scrollContainer('product-scroll', -300)" style={{}}>
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full border transition-all border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700 hover:text-zinc-100" onclick="scrollContainer('product-scroll', 300)" style={{}}>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="no-scrollbar flex gap-4 overflow-x-auto snap-x-mandatory scroll-smooth pb-4 px-1" id="product-scroll">

<a className="snap-center block min-w-[260px] w-[260px] flex-shrink-0 rounded-xl border p-3 hover:shadow-sm transition-all group border-zinc-800 bg-black hover:border-zinc-700" href="#" style={{}}>
<div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-900" style={{}}>
<img alt="Product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-zinc-100" style={{}}>Nike Air Red</h4>
<p className="text-xs text-zinc-500" style={{}}>Footwear</p>
</div>
<span className="text-sm font-semibold text-zinc-100" style={{}}>$120</span>
</div>
</a>

<a className="snap-center block min-w-[260px] w-[260px] flex-shrink-0 rounded-xl border p-3 hover:shadow-sm transition-all group border-zinc-800 bg-black hover:border-zinc-700" href="#" style={{}}>
<div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-900" style={{}}>
<img alt="Product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-zinc-100" style={{}}>Analog Watch</h4>
<p className="text-xs text-zinc-500" style={{}}>Accessories</p>
</div>
<span className="text-sm font-semibold text-zinc-100" style={{}}>$250</span>
</div>
</a>

<a className="snap-center block min-w-[260px] w-[260px] flex-shrink-0 rounded-xl border p-3 hover:shadow-sm transition-all group border-zinc-800 bg-black hover:border-zinc-700" href="#" style={{}}>
<div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-900" style={{}}>
<img alt="Product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-zinc-100" style={{}}>Headphones</h4>
<p className="text-xs text-zinc-500" style={{}}>Audio</p>
</div>
<span className="text-sm font-semibold text-zinc-100" style={{}}>$340</span>
</div>
</a>

<a className="snap-center block min-w-[260px] w-[260px] flex-shrink-0 rounded-xl border p-3 hover:shadow-sm transition-all group border-zinc-800 bg-black hover:border-zinc-700" href="#" style={{}}>
<div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-900" style={{}}>
<img alt="Product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-zinc-100" style={{}}>Linen Shirt</h4>
<p className="text-xs text-zinc-500" style={{}}>Clothing</p>
</div>
<span className="text-sm font-semibold text-zinc-100" style={{}}>$85</span>
</div>
</a>

<a className="snap-center block min-w-[260px] w-[260px] flex-shrink-0 rounded-xl border p-3 hover:shadow-sm transition-all group border-zinc-800 bg-black hover:border-zinc-700" href="#" style={{}}>
<div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-900" style={{}}>
<img alt="Product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors text-zinc-100" style={{}}>Sunglasses</h4>
<p className="text-xs text-zinc-500" style={{}}>Summer</p>
</div>
<span className="text-sm font-semibold text-zinc-100" style={{}}>$199</span>
</div>
</a>
</div>
</section>

<section className="border-y py-16 bg-zinc-950 border-zinc-900" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8 flex items-end justify-between">
<h3 className="text-lg font-semibold tracking-tight text-zinc-100" style={{}}>Client Feedback</h3>
<div className="flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full border transition-all border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700 hover:text-zinc-100" onclick="scrollContainer('review-scroll', -340)" style={{}}>
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full border transition-all border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700 hover:text-zinc-100" onclick="scrollContainer('review-scroll', 340)" style={{}}>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="no-scrollbar flex gap-6 overflow-x-auto snap-x-mandatory scroll-smooth pb-4" id="review-scroll">

<div className="snap-center min-w-[320px] sm:min-w-[400px] flex-shrink-0 rounded-xl border p-6 shadow-sm border-zinc-800 bg-black" style={{}}>
<div className="flex items-center gap-1 mb-4 text-zinc-100" style={{}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-zinc-400">"The quality of the components exceeded my expectations. The design is minimal yet functional, exactly what I needed for my setup."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium bg-zinc-800" style={{}}>JD</div>
<div>
<div className="text-xs font-semibold text-zinc-100" style={{}}>John Doe</div>
<div className="text-[10px] text-zinc-500" style={{}}>Product Manager</div>
</div>
</div>
</div>

<div className="snap-center min-w-[320px] sm:min-w-[400px] flex-shrink-0 rounded-xl border p-6 shadow-sm border-zinc-800 bg-black" style={{}}>
<div className="flex items-center gap-1 mb-4 text-zinc-100" style={{}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>"Shipping was incredibly fast. The packaging was eco-friendly which I appreciate. Highly recommended."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium bg-zinc-800" style={{}}>AS</div>
<div>
<div className="text-xs font-semibold text-zinc-100" style={{}}>Alice Smith</div>
<div className="text-[10px] text-zinc-500" style={{}}>Designer</div>
</div>
</div>
</div>

<div className="snap-center min-w-[320px] sm:min-w-[400px] flex-shrink-0 rounded-xl border p-6 shadow-sm border-zinc-800 bg-black" style={{}}>
<div className="flex items-center gap-1 mb-4 text-zinc-100" style={{}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>"Customer support helped me find exactly what I was looking for. The interface is smooth and very user friendly."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium bg-zinc-800" style={{}}>MK</div>
<div>
<div className="text-xs font-semibold text-zinc-100" style={{}}>Mike K.</div>
<div className="text-[10px] text-zinc-500" style={{}}>Developer</div>
</div>
</div>
</div>

<div className="snap-center min-w-[320px] sm:min-w-[400px] flex-shrink-0 rounded-xl border p-6 shadow-sm border-zinc-800 bg-black" style={{}}>
<div className="flex items-center gap-1 mb-4 text-zinc-100" style={{}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>"Absolutely love the attention to detail. Every pixel seems perfectly placed in their software suite."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium bg-zinc-800" style={{}}>EL</div>
<div>
<div className="text-xs font-semibold text-zinc-100" style={{}}>Emma L.</div>
<div className="text-[10px] text-zinc-500" style={{}}>Architect</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
