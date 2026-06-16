import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-100/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-zinc-500 hover:text-rose-600 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-lg tracking-tighter font-semibold text-zinc-900 uppercase" href="#">
                Pink<span className="text-rose-500">Pineapple</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors" href="#">New Arrivals</a>
<a className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors" href="#">Clothing</a>
<a className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors" href="#">Accessories</a>
<a className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors" href="#">Sale</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-rose-600 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative text-zinc-500 hover:text-rose-600 transition-colors group">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-medium text-white group-hover:bg-rose-600">0</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="bg-gradient-to-b from-rose-50/80 to-white absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-rose-100 shadow-sm mb-6">
<iconify-icon className="text-rose-500" icon="solar:sun-2-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-rose-600 tracking-wide uppercase">New Summer Collection</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 mb-6">
                Tropical vibes for <br className="hidden md:block"/> the bold + chic.
            </h1>
<p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Curated fashion for the island soul. From breezy linens to sunset-ready dresses. Pickup, delivery, and Family Island shipping available.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-lg transition-all shadow-sm shadow-rose-200 flex items-center justify-center gap-2" href="#shop">
                    Shop Collection
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 hover:border-rose-200 text-zinc-700 hover:text-rose-600 text-sm font-medium rounded-lg transition-all shadow-sm flex items-center justify-center gap-2" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                    Order via WhatsApp
                </a>
</div>
</div>
</header>

<section className="border-y border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex items-start gap-4">
<div className="p-2.5 rounded-lg bg-rose-50 text-rose-500">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Pickup &amp; Delivery</h3>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">Local pickup available. Fast delivery to your doorstep.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="p-2.5 rounded-lg bg-rose-50 text-rose-500">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Family Island Shipping 🇧🇸</h3>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">Reliable boat shipping to all major Family Islands.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="p-2.5 rounded-lg bg-rose-50 text-rose-500">
<iconify-icon icon="solar:card-recieved-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Easy Payment</h3>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">DM or WhatsApp to secure your faves instantly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Latest Arrivals</h2>
<p className="text-sm text-zinc-500 mt-2">Fresh styles for the season.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors" href="#">
                    View all
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Pink Dress" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-zinc-900 p-2 rounded-full shadow-lg hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-rose-500 transition-colors">Blush Ruffle Mini</h3>
<p className="text-sm text-zinc-500 mt-1">$65.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Summer Top" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-zinc-900 p-2 rounded-full shadow-lg hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-rose-500 transition-colors">Island Silk Blouse</h3>
<p className="text-sm text-zinc-500 mt-1">$48.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Maxi Dress" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-zinc-900 p-2 rounded-full shadow-lg hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                            New
                        </div>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-rose-500 transition-colors">Sunset Maxi Dress</h3>
<p className="text-sm text-zinc-500 mt-1">$82.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Accessories" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-zinc-900 p-2 rounded-full shadow-lg hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-rose-500 transition-colors">Palm Leaf Tote</h3>
<p className="text-sm text-zinc-500 mt-1">$35.00</p>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-1 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors" href="#">
                    View all products
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-block p-1 rounded-full border-2 border-rose-200 mb-6">
<img alt="Profile" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">@shopthepinkpineapple</h2>
<div className="flex items-center justify-center gap-6 mt-4 text-sm text-zinc-500">
<span> posts</span>
<span> followers</span>
<span> following</span>
</div>
<p className="mt-6 text-zinc-500 max-w-lg mx-auto">
                Join our community of bold + chic babes. Tag us to be featured!
            </p>
<a className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:border-rose-300 hover:text-rose-600 transition-all shadow-sm" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
                Follow on Instagram
            </a>
</div>
</section>

<section className="py-20 bg-rose-500 text-white">
<div className="max-w-xl mx-auto px-6 text-center">
<iconify-icon className="mb-4 text-rose-200" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight mb-3">Get the Island Scoop</h2>
<p className="text-rose-100 mb-8 font-light">Sign up for exclusive drops, sales, and tropical inspiration.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-rose-200 focus:outline-none focus:bg-white/20 focus:border-white transition-all" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-white text-rose-600 font-medium rounded-lg hover:bg-rose-50 transition-colors shadow-sm" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg tracking-tighter font-semibold text-zinc-900 uppercase" href="#">
                        Pink<span className="text-rose-500">Pineapple</span>
</a>
<p className="mt-4 text-xs text-zinc-500 leading-relaxed">
                        Tropical vibes for the bold + chic. <br/>
                        Based in the Bahamas. 🇧🇸
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">Clothing</a></li>
<li><a className="text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Customer Care</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">Order Tracking</a></li>
<li><span className="text-xs text-zinc-400 cursor-not-allowed" title="As per policy">Returns &amp; Refunds (All sales final)</span></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li>
<a className="flex items-center gap-2 text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" width="14"></iconify-icon>
                                WhatsApp Support
                            </a>
</li>
<li>
<a className="flex items-center gap-2 text-xs text-zinc-500 hover:text-rose-500 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                                DM on Instagram
                            </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-zinc-400">
                    © 2023 Pink Pineapple Boutique. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-zinc-400">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
