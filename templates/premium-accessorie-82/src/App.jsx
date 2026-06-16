import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
<a className="text-zinc-50 tracking-tighter text-lg font-medium" href="#">hafiz</a>
<nav className="hidden md:flex gap-8 text-sm font-light text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#categories">Categories</a>
<a className="hover:text-zinc-50 transition-colors" href="#new-arrivals">New Arrivals</a>
<a className="hover:text-zinc-50 transition-colors" href="#materials">Custom Build</a>
<a className="hover:text-zinc-50 transition-colors" href="#reviews">Reviews</a>
</nav>
<div className="flex items-center gap-5 text-sm">
<a className="hidden md:block font-light text-zinc-400 hover:text-zinc-50 transition-colors" href="#">Log In</a>
<a className="hidden md:block font-light text-zinc-400 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon className="text-base mt-1" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-zinc-50 text-black px-3.5 py-1.5 rounded-full font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5" href="#">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                    Cart (0)
                </a>
</div>
</div>
</header>

<main className="pt-40 pb-20 md:pt-56 md:pb-32 px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-light text-zinc-400 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex h-1.5 w-1.5 rounded-full bg-zinc-50 opacity-80 animate-pulse"></span>
            Trending: The Matte Titanium Collection
            <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-4xl md:text-7xl text-zinc-50 font-medium tracking-tight leading-tight max-w-4xl mb-6">
            Accessories engineered for life.
        </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mb-10 leading-relaxed">
            Minimalist design meets aerospace-grade materials. Explore our curated selection of watches, jewelry, bags, and eyewear.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-zinc-50 text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2" href="#new-arrivals">
                Shop the collection
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-transparent border border-white/10 text-zinc-300 px-6 py-2.5 rounded-full text-sm font-light hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2" href="#categories">
<iconify-icon className="text-lg" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Browse categories
            </a>
</div>
</main>

<section className="border-y border-white/5 py-10 bg-white/[0.01]">
<div className="mx-auto max-w-6xl px-6">
<p className="text-center text-xs font-light text-zinc-500 mb-6 tracking-wide uppercase">Featured in and trusted by</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-24 opacity-40">
<span className="text-xl font-medium tracking-tighter">monocle</span>
<span className="text-xl font-medium tracking-tighter">hype.</span>
<span className="text-xl font-medium tracking-tighter">GQ</span>
<span className="text-xl font-medium tracking-tighter">designboom</span>
<span className="text-xl font-medium tracking-tighter">aethr</span>
</div>
</div>
</section>

<section className="py-24 px-6" id="categories">
<div className="mx-auto max-w-6xl">
<h2 className="text-3xl text-zinc-50 font-medium tracking-tight mb-12">Shop by Category</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<a className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 aspect-square flex flex-col items-center justify-center hover:border-white/20 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-500 z-0 absolute" icon="solar:watch-square-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="relative z-20 mt-auto mb-6 text-sm md:text-base font-medium text-zinc-50 tracking-tight">Watches</span>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 aspect-square flex flex-col items-center justify-center hover:border-white/20 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-500 z-0 absolute" icon="solar:diamonds-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="relative z-20 mt-auto mb-6 text-sm md:text-base font-medium text-zinc-50 tracking-tight">Jewelry</span>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 aspect-square flex flex-col items-center justify-center hover:border-white/20 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-500 z-0 absolute" icon="solar:bag-3-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="relative z-20 mt-auto mb-6 text-sm md:text-base font-medium text-zinc-50 tracking-tight">Bags</span>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 aspect-square flex flex-col items-center justify-center hover:border-white/20 transition-all" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-500 z-0 absolute" icon="solar:glasses-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="relative z-20 mt-auto mb-6 text-sm md:text-base font-medium text-zinc-50 tracking-tight">Sunglasses</span>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]" id="new-arrivals">
<div className="mx-auto max-w-6xl">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl text-zinc-50 font-medium tracking-tight mb-2">New Arrivals</h2>
<p className="text-zinc-400 font-light text-sm">The latest additions to our collection.</p>
</div>
<a className="hidden md:flex text-sm font-light text-zinc-400 hover:text-zinc-50 items-center gap-1 transition-colors" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="group border border-white/5 bg-zinc-950/50 rounded-2xl p-4 hover:bg-zinc-900 transition-colors">
<div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-zinc-800" icon="solar:watch-square-linear" strokeWidth="1" width="32"></iconify-icon>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-50 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-50 font-medium tracking-tight">Chronograph Zero</h3>
<span className="text-sm font-light text-zinc-400">$245</span>
</div>
<p className="text-xs font-light text-zinc-500 mb-4">Watches</p>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:text-zinc-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="14"></iconify-icon> Add to cart
                    </button>
</div>

<div className="group border border-white/5 bg-zinc-950/50 rounded-2xl p-4 hover:bg-zinc-900 transition-colors">
<div className="aspect-[4/3] overflow-hidden flex bg-zinc-900 w-full rounded-xl mb-4 relative items-center justify-center">
<iconify-icon className="text-zinc-800" icon="solar:bag-3-linear" strokeWidth="1" width="32"></iconify-icon>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-50 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
<span className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-light bg-zinc-50 text-black">Best Seller</span>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-50 font-medium tracking-tight">Daypack Minimal</h3>
<span className="text-sm font-light text-zinc-400">$180</span>
</div>
<p className="text-xs font-light text-zinc-500 mb-4">Bags</p>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:text-zinc-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="14"></iconify-icon> Add to cart
                    </button>
</div>

<div className="group border border-white/5 bg-zinc-950/50 rounded-2xl p-4 hover:bg-zinc-900 transition-colors">
<div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-zinc-800" icon="solar:glasses-linear" strokeWidth="1" width="32"></iconify-icon>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-50 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base text-zinc-50 font-medium tracking-tight">Aviator Stealth</h3>
<span className="text-sm font-light text-zinc-400">$120</span>
</div>
<p className="text-xs font-light text-zinc-500 mb-4">Sunglasses</p>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:text-zinc-50 transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="14"></iconify-icon> Add to cart
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950/50" id="materials">
<div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 w-full max-w-lg">
<h2 className="text-3xl md:text-4xl text-zinc-50 font-medium tracking-tight mb-6">Build your perfect carry.</h2>
<p className="text-zinc-400 font-light text-base mb-8 leading-relaxed">
                    Customize your daily loadout. Select your preferred base materials, finishes, and add modular attachments to fit your exact lifestyle needs.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-white/10 rounded-full p-1 text-zinc-50">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200">Modular Ecosystem</h4>
<p className="text-sm font-light text-zinc-500 mt-0.5">Magnetic clasps allow pieces to connect seamlessly.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-white/10 rounded-full p-1 text-zinc-50">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200">Custom Finishes</h4>
<p className="text-sm font-light text-zinc-500 mt-0.5">Available in stealth matte, brushed, or polished.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md p-6 rounded-2xl border border-white/10 bg-black shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20"></div>
<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
<div className="flex items-center gap-2 text-zinc-50">
<iconify-icon icon="solar:slider-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
<h4 className="text-sm font-medium">Configure Item</h4>
</div>
<span className="px-2 py-0.5 rounded text-xs font-light bg-green-500/10 text-green-400 border border-green-500/20">In Stock</span>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<p className="text-sm text-zinc-200 font-medium">Add Monogramming</p>
<p className="text-xs text-zinc-500 font-light mt-0.5">Laser engraved initials (+$15)</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-zinc-700 peer-checked:after:bg-zinc-50"></div>
</label>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="text-sm text-zinc-200 font-medium">Strap Length</span>
<span className="text-sm text-zinc-400 font-light">120cm</span>
</div>
<div className="relative w-full h-1 bg-zinc-800 rounded-full">
<div className="absolute top-0 left-0 h-full bg-zinc-300 rounded-full w-2/3"></div>
<div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-50 rounded-full shadow cursor-pointer border-2 border-zinc-900"></div>
</div>
<div className="flex justify-between mt-2 text-xs font-light text-zinc-600">
<span>80cm</span>
<span>140cm</span>
</div>
</div>

<div>
<p className="text-sm text-zinc-200 font-medium mb-2">Hardware Finish</p>
<div className="flex items-center justify-between w-full px-3 py-2 rounded-lg border border-white/10 bg-zinc-900/50 text-sm font-light text-zinc-300 cursor-pointer hover:bg-zinc-900 transition-colors">
<span>Matte Black Titanium</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="reviews">
<div className="mx-auto max-w-6xl">
<h2 className="text-3xl text-zinc-50 font-medium tracking-tight mb-12 text-center">Engineered for perfection.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-950 hover:bg-zinc-900/80 transition-colors">
<div className="flex text-zinc-300 mb-4 gap-0.5">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 leading-relaxed mb-6">"The build quality of the Chronograph Zero is unmatched. It feels substantial without being overly heavy, and the matte finish is incredibly resilient."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">AJ</div>
<div>
<p className="text-xs font-medium text-zinc-200">Alex J.</p>
<p className="text-xs font-light text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-950 hover:bg-zinc-900/80 transition-colors">
<div className="flex text-zinc-300 mb-4 gap-0.5">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 leading-relaxed mb-6">"I've been carrying the Daypack Minimal for six months. The magnetic clasps are a game-changer for quick access. Best bag I've ever owned."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">MR</div>
<div>
<p className="text-xs font-medium text-zinc-200">Marcus R.</p>
<p className="text-xs font-light text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-950 hover:bg-zinc-900/80 transition-colors">
<div className="flex text-zinc-300 mb-4 gap-0.5">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 leading-relaxed mb-6">"Simple, elegant, and durable. The stealth aviators fit perfectly and the polarization is top tier. Worth every single penny."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">SL</div>
<div>
<p className="text-xs font-medium text-zinc-200">Sarah L.</p>
<p className="text-xs font-light text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden bg-black">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-2xl text-center relative z-10">
<h2 className="text-4xl md:text-5xl text-zinc-50 font-medium tracking-tight mb-6">Join the inner circle.</h2>
<p className="text-zinc-400 font-light text-base md:text-lg mb-8">Subscribe for early access to new collections, exclusive drops, and behind-the-scenes engineering content.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-zinc-900/50 border border-white/10 rounded-full px-6 py-3 text-sm font-light text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="Enter your email" required="" type="email"/>
<button className="bg-zinc-50 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="col-span-1 md:col-span-1">
<div className="text-zinc-50 tracking-tighter text-lg font-medium mb-4">hafiz</div>
<p className="text-xs font-light text-zinc-500 leading-relaxed">Engineered accessories for the modern minimalist. Built to outlast.</p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-4">Shop</h4>
<div className="flex flex-col gap-3 text-sm font-light text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Watches</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Jewelry</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Bags</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Sunglasses</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-4">Support</h4>
<div className="flex flex-col gap-3 text-sm font-light text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Contact Us</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Track Order</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Returns</a>
<a className="hover:text-zinc-300 transition-colors" href="#">FAQ</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-4">Legal</h4>
<div className="flex flex-col gap-3 text-sm font-light text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Shipping Policy</a>
</div>
</div>
</div>
<div className="mx-auto max-w-6xl mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-light text-zinc-600">© 2024 hafiz. All rights reserved.</p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" width="18"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
