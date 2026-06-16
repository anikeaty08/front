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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-lg font-semibold tracking-tighter" href="#">CLTH.</a>

<nav className="hidden md:flex space-x-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Mens</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Womens</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Journal</a>
</nav>
</div>

<div className="flex items-center space-x-5">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon height="22" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative flex items-center group">
<iconify-icon height="22" icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-900 text-[0.6rem] font-medium text-white group-hover:scale-110 transition-transform">2</span>
</button>

<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 overflow-hidden border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-zinc-400"></span> Fall Collection '24 Available
            </span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 max-w-4xl">
                Redefining basics. <br className="hidden md:block"/> Form meets function.
            </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Mindfully crafted clothing designed for the modern aesthetic. Premium materials, meticulous construction, simplicity in every thread.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
<a className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm flex items-center justify-center gap-2" href="#">
                    Shop Mens <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="bg-white text-zinc-900 border border-zinc-200 px-8 py-3.5 rounded-full text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#">
                    Shop Womens <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-50 rounded-full blur-3xl -z-10 opacity-60"></div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 block" href="#">
<img alt="Mens Collection" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">Menswear</h3>
<p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors flex items-center gap-1.5 w-fit">
                        Explore Collection <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</p>
</div>
</a>

<a className="group relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 block" href="#">
<img alt="Womens Collection" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">Womenswear</h3>
<p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors flex items-center gap-1.5 w-fit">
                        Explore Collection <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</p>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-100">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-1">Curated Essentials</h2>
<p className="text-sm text-zinc-500">The pieces we wear every day.</p>
</div>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors" href="#">Shop All Arrivals</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img alt="Heavyweight Tee" className="object-cover w-full h-full object-center group-hover:opacity-80 transition-opacity duration-300" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>

<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200 text-zinc-900 py-2.5 rounded-lg text-xs font-medium shadow-sm hover:bg-zinc-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Quick Add
                        </button>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate pr-4">Heavyweight Box Tee</h3>
<span className="text-sm font-normal text-zinc-600">$45</span>
</div>
<p className="text-xs text-zinc-500">Washed Black</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">

<span className="absolute top-3 left-3 bg-white border border-zinc-200 text-zinc-900 text-[0.65rem] font-medium px-2 py-0.5 rounded-md z-10">New</span>
<img alt="Knit Sweater" className="object-cover w-full h-full object-center group-hover:opacity-80 transition-opacity duration-300" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200 text-zinc-900 py-2.5 rounded-lg text-xs font-medium shadow-sm hover:bg-zinc-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Quick Add
                        </button>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate pr-4">Merino Knit Sweater</h3>
<span className="text-sm font-normal text-zinc-600">$120</span>
</div>
<p className="text-xs text-zinc-500">Oatmeal</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img alt="Chino Pants" className="object-cover w-full h-full object-center group-hover:opacity-80 transition-opacity duration-300" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200 text-zinc-900 py-2.5 rounded-lg text-xs font-medium shadow-sm hover:bg-zinc-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Quick Add
                        </button>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate pr-4">Everyday Trouser</h3>
<span className="text-sm font-normal text-zinc-600">$85</span>
</div>
<p className="text-xs text-zinc-500">Charcoal</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<img alt="Lightweight Jacket" className="object-cover w-full h-full object-center group-hover:opacity-80 transition-opacity duration-300" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200 text-zinc-900 py-2.5 rounded-lg text-xs font-medium shadow-sm hover:bg-zinc-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-plus-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Quick Add
                        </button>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 truncate pr-4">Nylon Overshirt</h3>
<span className="text-sm font-normal text-zinc-600">$110</span>
</div>
<p className="text-xs text-zinc-500">Olive</p>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-100 bg-zinc-50/50 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-200 text-zinc-800">
<iconify-icon icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Global Delivery</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Complimentary express shipping on all orders over $200 worldwide.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-200 text-zinc-800">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Conscious Craft</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Utilizing organic textiles and recycled fibers in 80% of our collection.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-200 text-zinc-800">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Lifetime Guarantee</h4>
<p className="text-xs text-zinc-500 leading-relaxed">We stand by our construction. Free repairs on hardware for life.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-4 lg:col-span-3">
<a className="text-lg font-semibold tracking-tighter mb-4 block" href="#">CLTH.</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Designing the uniform for the modern minimalist. Thoughtful apparel made to last beyond seasons.
                    </p>
<div className="flex space-x-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Menswear</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Womenswear</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-4 lg:col-span-4">
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-4">Join the Club</h4>
<p className="text-sm text-zinc-500 mb-4">Subscribe for early access to new collections and exclusive releases.</p>
<form className="flex gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400" placeholder="Email address" required="" type="email"/>
<button className="bg-zinc-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-zinc-800 transition-colors flex-shrink-0" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 CLTH Apparel Ltd. All rights reserved.</p>
<div className="flex space-x-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
