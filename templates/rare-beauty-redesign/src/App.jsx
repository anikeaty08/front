import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                // Add glassy effect
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'border-white/10');
                navbar.classList.remove('border-transparent');
            } else {
                // Remove glassy effect (transparent)
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'border-white/10');
                navbar.classList.add('border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="fixed z-50 w-full top-0 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-neutral-900 hover:text-neutral-600 transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>

<a className="text-xl tracking-tighter font-serif text-[#641c2c] hover:opacity-80 transition-opacity font-semibold" href="#">
                RARE BEAUTY
            </a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-500">
<a className="hover:text-[#641c2c] transition-colors" href="#">Shop</a>
<a className="hover:text-[#641c2c] transition-colors" href="#">Best Sellers</a>
<a className="hover:text-[#641c2c] transition-colors" href="#">Rare Impact</a>
<a className="hover:text-[#641c2c] transition-colors" href="#">About</a>
</div>

<div className="flex items-center gap-6">
<button className="hidden md:block text-neutral-500 hover:text-neutral-900 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="relative text-neutral-500 hover:text-neutral-900 transition-colors mr-2">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#641c2c] rounded-full ring-2 ring-[#FAFAFA]"></span>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white transition-all duration-200 bg-[#641c2c] rounded-full hover:bg-[#4a1320] shadow-sm hover:shadow-md" href="#">
                    Shop New
                </a>
</div>
</div>
</nav>
<main>


<section className="relative w-full pt-28 pb-10 px-4 sm:px-6 lg:px-8">

<div className="relative w-full max-w-[1400px] mx-auto h-[85vh] min-h-[600px] rounded-[40px] overflow-hidden shadow-2xl bg-neutral-900">

<div className="video-wrapper">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/pLifWK6snRg?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=pLifWK6snRg&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;iv_load_policy=3" title="Rare Beauty Background">
</iframe>
</div>


<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pt-20">
<div className="animate-fade-in space-y-8 flex flex-col items-center max-w-4xl">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f3dce0] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#641c2c]"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide">New Soft Pinch Luminous Powder Blush</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white tracking-tight font-serif drop-shadow-md">
                            Makeup made to <br/> <span className="italic text-[#f3dce0]">feel good in.</span>
</h1>

<p className="text-lg text-white/95 max-w-xl font-light leading-relaxed drop-shadow-md">
                            Breaking down unrealistic standards of perfection. Airy, breathable formulas that melt into your skin for a soft, effortless finish. 
                        </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6">
<button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-[#641c2c] transition-all duration-200 bg-white rounded-full hover:bg-[#f8f8f8] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none shadow-md">
                                Shop Best Sellers
                                <i className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-black/20 border border-white/30 backdrop-blur-md rounded-full hover:bg-white/20 hover:border-white focus:outline-none shadow-sm">
                                View Routine
                            </button>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-8 text-white/90">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/10">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
<span className="text-[10px] font-bold uppercase tracking-widest">Vegan</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/10">
<i className="w-3.5 h-3.5" data-lucide="heart-handshake"></i>
<span className="text-[10px] font-bold uppercase tracking-widest">Cruelty Free</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-serif text-neutral-900 tracking-tight font-medium">The Favorites</h2>
<p className="text-neutral-500 text-sm mt-3 font-light">Curated essentials for your daily routine.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-[#641c2c] hover:opacity-80 transition-opacity group" href="#">
                    Shop All <i className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group relative cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F5F5F5]">
<div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-40 bg-gradient-to-b from-[#eeb4b4] to-[#c77d7d] rounded-t-full rounded-b-lg shadow-sm opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
</div>
<button className="absolute bottom-4 right-4 bg-white text-neutral-900 w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#641c2c] hover:text-white z-20">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-semibold text-neutral-900">Soft Pinch Liquid Blush</h3>
<p className="text-sm font-medium text-neutral-900">$23</p>
</div>
<p className="text-xs text-neutral-500 font-medium">Dewy / Matte Finish</p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F5F5F5]">
<div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-44 bg-neutral-800 rounded-sm shadow-sm opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
</div>
<button className="absolute bottom-4 right-4 bg-white text-neutral-900 w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#641c2c] hover:text-white z-20">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-semibold text-neutral-900">Perfect Strokes Mascara</h3>
<p className="text-sm font-medium text-neutral-900">$20</p>
</div>
<p className="text-xs text-neutral-500 font-medium">Universal Volumizing</p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F5F5F5]">
<div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-[#f4a4a4] shadow-sm opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
</div>
<button className="absolute bottom-4 right-4 bg-white text-neutral-900 w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#641c2c] hover:text-white z-20">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-semibold text-neutral-900">Stay Vulnerable Blush</h3>
<p className="text-sm font-medium text-neutral-900">$21</p>
</div>
<p className="text-xs text-neutral-500 font-medium">Melting Cream</p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F5F5F5]">
<div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-36 bg-[#eec8c8] rounded-full shadow-sm opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
</div>
<button className="absolute bottom-4 right-4 bg-white text-neutral-900 w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#641c2c] hover:text-white z-20">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-semibold text-neutral-900">Lip Soufflé Matte Cream</h3>
<p className="text-sm font-medium text-neutral-900">$20</p>
</div>
<p className="text-xs text-neutral-500 font-medium">Hydrating Matte</p>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-24 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-[#F5F5F5]">
<img alt="Rare Beauty Impact" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 grayscale-[10%]" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col space-y-8">
<div className="flex items-center gap-2 text-[#641c2c]">
<i className="w-5 h-5 fill-current" data-lucide="heart"></i>
<span className="text-xs font-bold uppercase tracking-widest">Rare Impact Fund</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight text-neutral-900 leading-tight">
                            We are on a mission to help everyone celebrate what makes them rare.
                        </h2>
<p className="text-neutral-500 text-lg leading-relaxed font-light">
                            1% of all Rare Beauty sales go to the Rare Impact Fund to increase access to mental health services in educational settings. We are committed to raising $100M over the next 10 years.
                        </p>
<div className="pt-6 flex flex-col gap-5">

<div className="w-full">
<div className="flex justify-between text-xs font-semibold mb-3">
<span className="text-neutral-900">Goal: $100M</span>
<span className="text-[#641c2c]">Ongoing</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-2">
<div className="bg-[#641c2c] h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:text-[#641c2c] transition-colors mt-2 group" href="#">
                                Learn about our impact <i className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-xl mx-auto px-6 py-32 text-center">
<h2 className="text-3xl font-serif text-neutral-900 tracking-tight mb-4 font-medium">Join the Community</h2>
<p className="text-neutral-500 text-sm mb-10 font-light">Be the first to know about new collections and exclusive offers.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#641c2c]/10 focus:border-[#641c2c] transition-all shadow-sm" placeholder="Enter your email" type="email"/>
<button className="bg-[#641c2c] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#4a1320] transition-colors shadow-sm" type="submit">
                    Subscribe
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-2">

<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-neutral-300 bg-white checked:border-[#641c2c] checked:bg-[#641c2c] transition-all" id="terms" type="checkbox"/>
<i className="pointer-events-none absolute left-0.5 top-0.5 h-3 w-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
<label className="text-xs text-neutral-400 select-none cursor-pointer hover:text-neutral-600 transition-colors" htmlFor="terms">
                    I agree to the Terms &amp; Privacy Policy
                </label>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-xl tracking-tighter font-serif text-[#641c2c] font-semibold" href="#">RARE BEAUTY</a>
<p className="mt-6 text-sm text-neutral-500 max-w-sm leading-relaxed font-light">
                        Founded by Selena Gomez. Rare Beauty is breaking down unrealistic standards of perfection.
                    </p>
<div className="flex gap-5 mt-8">
<a className="text-neutral-400 hover:text-[#641c2c] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-[#641c2c] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-400 hover:text-[#641c2c] transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
<a className="text-neutral-400 hover:text-[#641c2c] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm text-neutral-900">Shop</h4>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Face</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Lip</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Eye</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Tools</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Online Only</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm text-neutral-900">About</h4>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Our Story</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Rare Impact</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Sustainability</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm text-neutral-900">Support</h4>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">FAQ</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Returns</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Contact Us</a>
<a className="text-xs text-neutral-500 hover:text-[#641c2c] transition-colors font-medium" href="#">Accessibility</a>
</div>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[11px] text-neutral-400 font-medium">© 2024 Rare Beauty. All rights reserved.</p>
<div className="flex gap-8">
<a className="text-[11px] text-neutral-400 hover:text-neutral-600 font-medium" href="#">Privacy Policy</a>
<a className="text-[11px] text-neutral-400 hover:text-neutral-600 font-medium" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
