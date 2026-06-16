import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function nav(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            // Show target page
            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
            }
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-zinc-900" href="#" onclick="nav('home')">ACCS.</a>
<div className="hidden md:flex gap-6">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="nav('shop')">Shop</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="nav('blog')">Journal</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="nav('contact')">Contact</button>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-600">
<button className="hover:text-zinc-900 transition-colors"><iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="hover:text-zinc-900 transition-colors"><iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon></button>
<button className="hover:text-zinc-900 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bag-2-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-[10px] text-white">2</span>
</button>
</div>
</div>
</nav>

<div className="page-view block" id="page-home">

<header className="relative overflow-hidden pt-16 pb-24 sm:pt-24 lg:pt-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-600">App v2.0 Available</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                        Elevate your aesthetic with premium accessories.
                    </h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg leading-relaxed">
                        Discover curated collections of watches, bags, and eyewear. Shop effortlessly with personalized AI recommendations and lightning-fast delivery.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all">
<iconify-icon className="text-lg" icon="solar:apple-linear"></iconify-icon>
                            App Store
                        </button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-all">
<iconify-icon className="text-lg" icon="solar:play-stream-linear"></iconify-icon>
                            Google Play
                        </button>
</div>
</div>
<div className="relative hidden lg:block h-[600px] w-full rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100">
<img alt="Premium Watch" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</header>

<section className="py-16 bg-zinc-50/50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8 text-center sm:text-left">
<div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-4 mx-auto sm:mx-0">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2">Trendy Accessories</h3>
<p className="text-sm text-zinc-500">Curated weekly by fashion experts to keep your style ahead of the curve.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-4 mx-auto sm:mx-0">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2">Fast Delivery</h3>
<p className="text-sm text-zinc-500">Order before 2 PM and get your accessories delivered by the next working day.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-4 mx-auto sm:mx-0">
<iconify-icon className="text-xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2">Best Deals</h3>
<p className="text-sm text-zinc-500">Exclusive in-app discounts and early access to flash sales globally.</p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-zinc-100 text-center">
<div>
<p className="text-3xl font-medium tracking-tight text-zinc-900 mb-1">15k+</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest">Products</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight text-zinc-900 mb-1">2M+</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest">Customers</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight text-zinc-900 mb-1">&lt;24h</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest">Delivery</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight text-zinc-900 mb-1">4.9</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest">App Rating</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/3">
<h2 className="text-3xl font-medium tracking-tight mb-4">Trending near you</h2>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">Our AI learns your style and location to suggest pieces that fit your immediate environment and upcoming events.</p>
<button className="text-sm font-medium text-white border-b border-zinc-700 hover:border-white pb-1 transition-colors inline-flex items-center gap-2" onclick="nav('shop')">
                            Explore Recommendations <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="w-full lg:w-2/3 flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-8">

<div className="snap-center shrink-0 w-64 rounded-2xl bg-zinc-800/50 p-3 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group">
<div className="h-48 rounded-xl bg-zinc-700 mb-4 overflow-hidden relative">
<img alt="Smart Watch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium mb-1">Minimalist Chrono</h4>
<p className="text-xs text-zinc-400 mb-3">Popular in your area</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">$129</span>
<button className="h-8 w-8 rounded-lg bg-white text-zinc-900 flex items-center justify-center hover:scale-105 transition-transform"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>

<div className="snap-center shrink-0 w-64 rounded-2xl bg-zinc-800/50 p-3 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group">
<div className="h-48 rounded-xl bg-zinc-700 mb-4 overflow-hidden relative">
<img alt="Headphones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-sm font-medium mb-1">Studio Wireless</h4>
<p className="text-xs text-zinc-400 mb-3">Based on your views</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">$249</span>
<button className="h-8 w-8 rounded-lg bg-white text-zinc-900 flex items-center justify-center hover:scale-105 transition-transform"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>

<div className="snap-center shrink-0 w-64 rounded-2xl bg-zinc-800/50 p-3 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group">
<div className="h-48 rounded-xl bg-zinc-700 mb-4 overflow-hidden relative">
<img alt="Sunglasses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="text-sm font-medium mb-1">Classic Aviators</h4>
<p className="text-xs text-zinc-400 mb-3">Summer essentials</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">$89</span>
<button className="h-8 w-8 rounded-lg bg-white text-zinc-900 flex items-center justify-center hover:scale-105 transition-transform"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative h-[400px] w-full bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden flex flex-col items-center justify-center p-8">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/50 pointer-events-none"></div>

<div className="w-full max-w-sm bg-white border border-zinc-200 shadow-xl rounded-2xl p-6 relative z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium">Appearance</span>

<div className="w-10 h-6 bg-zinc-900 rounded-full relative cursor-pointer flex items-center px-1">
<div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform shadow-sm"></div>
</div>
</div>
<div className="w-full h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center px-4 gap-3 cursor-text">
<iconify-icon className="text-xl text-zinc-400" icon="solar:microphone-2-linear"></iconify-icon>
<span className="text-sm text-zinc-400">"Show me black leather bags"</span>
<div className="ml-auto w-1 h-4 bg-zinc-400 animate-pulse"></div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="h-10 w-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Future-ready shopping</h2>
<p className="text-lg text-zinc-500 mb-6">Experience the app in perfect dark mode. Use advanced voice search to find exactly what you're looking for without typing a single letter.</p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium tracking-tight">The Collection</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden group">
<img alt="Watch" className="w-full h-full object-cover group-hover:scale-105 transition-duration-500" src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden group md:mt-8">
<img alt="Bag" className="w-full h-full object-cover group-hover:scale-105 transition-duration-500" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden group">
<img alt="Sunglasses" className="w-full h-full object-cover group-hover:scale-105 transition-duration-500" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden group md:mt-8">
<img alt="Headphones" className="w-full h-full object-cover group-hover:scale-105 transition-duration-500" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-medium tracking-tight text-center mb-12">Loved by thousands</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-zinc-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"The app is incredibly fluid. Found the perfect minimalist watch in minutes and it arrived the next morning. Exceptional experience."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-200"></div>
<div>
<p className="text-xs font-medium">Sarah Jenkins</p>
<p className="text-[10px] text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-zinc-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"Love the AI recommendations. It suggested a bag that perfectly matches a coat I just bought. The UI is just beautiful."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-200"></div>
<div>
<p className="text-xs font-medium">Marcus Doe</p>
<p className="text-[10px] text-zinc-500">Pro Member</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-zinc-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"Best e-commerce app I've used. Clean, no clutter, and the checkout process is literally one tap with Apple Pay."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-200"></div>
<div>
<p className="text-xs font-medium">Elena R.</p>
<p className="text-[10px] text-zinc-500">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="text-3xl font-medium tracking-tight mb-4">Ready to upgrade your style?</h2>
<p className="text-sm text-zinc-500 mb-8">Download the app today and get 15% off your first accessory purchase.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all">
<iconify-icon className="text-lg" icon="solar:apple-linear"></iconify-icon> App Store
                    </button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-all">
<iconify-icon className="text-lg" icon="solar:play-stream-linear"></iconify-icon> Google Play
                    </button>
</div>
<div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-left">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-zinc-400" icon="solar:letter-linear"></iconify-icon>
<h3 className="text-sm font-medium">Join the newsletter</h3>
</div>
<form className="flex gap-2" onsubmit="event.preventDefault()">
<input className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="page-shop">
<header className="py-16 border-b border-zinc-100 bg-zinc-50/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Shop</h1>
<p className="text-sm text-zinc-500 max-w-xl mx-auto">Browse trending accessories: watches, bags, sunglasses, and modern gadgets.</p>
</div>
</header>

<div className="border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-4 overflow-x-auto hide-scrollbar">
<button className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-medium">
                    All Items
                </button>
<button className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 text-xs font-medium transition-colors">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Flash Sale
                </button>
<button className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 text-xs font-medium transition-colors">
<iconify-icon icon="solar:star-linear"></iconify-icon> Best Sellers
                </button>
<button className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 text-xs font-medium transition-colors">
<iconify-icon icon="solar:sparkles-linear"></iconify-icon> New Arrivals
                </button>
</div>
</div>
<section className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center mb-8">
<span className="text-sm text-zinc-500">Showing 24 products</span>
<button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
                        Sort by: Featured <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

<div className="group cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] rounded-2xl bg-zinc-100 mb-4 relative overflow-hidden">
<img alt="Watch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur text-zinc-600 hover:text-zinc-900 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full py-3 bg-zinc-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-xl hover:bg-zinc-900 flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Minimalist Chrono</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon> 4.9 (128)
                                </div>
</div>
<span className="text-sm font-medium text-zinc-900">$129</span>
</div>
</div>

<div className="group cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] rounded-2xl bg-zinc-100 mb-4 relative overflow-hidden">
<img alt="Bag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur text-zinc-600 hover:text-zinc-900 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full py-3 bg-zinc-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-xl hover:bg-zinc-900 flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Leather Tote</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon> 4.8 (84)
                                </div>
</div>
<span className="text-sm font-medium text-zinc-900">$215</span>
</div>
</div>

<div className="group cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] rounded-2xl bg-zinc-100 mb-4 relative overflow-hidden">
<img alt="Sunglasses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur text-zinc-600 hover:text-zinc-900 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute top-3 left-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-medium">Sale</div>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full py-3 bg-zinc-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-xl hover:bg-zinc-900 flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Classic Aviators</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon> 4.5 (42)
                                </div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-zinc-900 block">$89</span>
<span className="text-[10px] text-zinc-400 line-through">$110</span>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="nav('product')">
<div className="aspect-[4/5] rounded-2xl bg-zinc-100 mb-4 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 animate-[pulse_2s_infinite]"></div>
<img alt="Headphones" className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" onload="this.previousElementSibling.style.display='none'" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute z-20 top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur text-zinc-600 hover:text-zinc-900 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute z-20 inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full py-3 bg-zinc-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-xl hover:bg-zinc-900 flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Studio Wireless</h3>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon> 4.9 (210)
                                </div>
</div>
<span className="text-sm font-medium text-zinc-900">$249</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-xl font-medium tracking-tight mb-8 text-center">Shopping Info</h2>
<div className="space-y-4">
<div className="border-b border-zinc-200 pb-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium hover:text-zinc-600">
                            Shipping &amp; Delivery <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
<div className="border-b border-zinc-200 pb-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium hover:text-zinc-600">
                            Returns Policy <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
<div className="border-b border-zinc-200 pb-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium hover:text-zinc-600">
                            Payment Methods <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 text-center border-t border-zinc-100">
<div className="max-w-xl mx-auto px-4">
<h2 className="text-2xl font-medium tracking-tight mb-2">Unlock Member Pricing</h2>
<p className="text-sm text-zinc-500 mb-6">Create an account for personalized recommendations and faster checkout.</p>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">Sign In / Create Account</button>
</div>
</section>
</div>

<div className="page-view hidden" id="page-product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<nav aria-label="Breadcrumb" className="flex text-xs text-zinc-500 mb-8">
<ol className="inline-flex items-center space-x-1 md:space-x-3">
<li><a className="hover:text-zinc-900" href="#" onclick="nav('home')">Home</a></li>
<li><span className="mx-1">/</span></li>
<li><a className="hover:text-zinc-900" href="#" onclick="nav('shop')">Shop</a></li>
<li><span className="mx-1">/</span></li>
<li aria-current="page" className="text-zinc-900 font-medium">Minimalist Chrono</li>
</ol>
</nav>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">

<div className="space-y-4">
<div className="aspect-square rounded-3xl bg-zinc-50 border border-zinc-100 overflow-hidden relative group cursor-zoom-in">
<img alt="Main Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors"></div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square rounded-xl bg-zinc-50 border-2 border-zinc-900 overflow-hidden cursor-pointer"><img alt="Thumb 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/></div>
<div className="aspect-square rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 overflow-hidden cursor-pointer"><img alt="Thumb 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/></div>
<div className="aspect-square rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 overflow-hidden cursor-pointer flex items-center justify-center text-zinc-400"><iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon></div>
<div className="aspect-square rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 overflow-hidden cursor-pointer flex items-center justify-center text-zinc-400"><iconify-icon className="text-2xl" icon="solar:video-frame-linear"></iconify-icon></div>
</div>
</div>

<div className="flex flex-col pt-4">
<div className="flex justify-between items-start mb-4">
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">Minimalist Chrono</h1>
<button className="h-10 w-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="text-2xl font-medium text-zinc-900">$129.00</div>
<div className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-medium">In Stock</div>
</div>
<div className="flex items-center gap-2 mb-8">
<div className="flex text-zinc-900"><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon></div>
<span className="text-xs text-zinc-500 underline cursor-pointer">Read 128 reviews</span>
</div>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed border-b border-zinc-100 pb-8">
                        A sleek, everyday timepiece featuring a matte dial, brushed steel case, and interchangeable straps. Designed for precision and modern aesthetics without the unnecessary clutter.
                    </p>

<div className="mb-8">
<h3 className="text-xs font-medium text-zinc-900 mb-3 uppercase tracking-wider">Color</h3>
<div className="flex gap-3">
<button className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-900 p-0.5"><div className="w-full h-full rounded-full border border-white"></div></button>
<button className="h-8 w-8 rounded-full border border-zinc-200 bg-[#C0A080] hover:border-zinc-400 transition-colors"></button>
<button className="h-8 w-8 rounded-full border border-zinc-200 bg-zinc-200 hover:border-zinc-400 transition-colors"></button>
</div>
</div>

<div className="mt-auto flex gap-4">

<button className="flex-1 bg-zinc-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-md shadow-zinc-900/10 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon> Add to Cart
                        </button>
</div>
<div className="flex items-center justify-center gap-6 mt-6 text-xs text-zinc-500">
<div className="flex items-center gap-1"><iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon> Free Shipping</div>
<div className="flex items-center gap-1"><iconify-icon className="text-base" icon="solar:shield-check-linear"></iconify-icon> 2 Year Warranty</div>
</div>
</div>
</div>
</div>

<section className="border-y border-zinc-100 bg-zinc-50 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<h2 className="text-2xl font-medium tracking-tight mb-4">Aerospace-grade materials</h2>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Crafted from 316L stainless steel, offering exceptional durability and corrosion resistance. The sapphire crystal glass ensures your dial remains scratch-free for life.</p>
</div>
<div className="md:w-1/2 flex justify-center">
<div className="w-64 h-64 rounded-full bg-zinc-200/50 flex items-center justify-center relative backdrop-blur-3xl border border-white/50">
<iconify-icon className="text-6xl text-zinc-400" icon="solar:layers-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-900 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium mb-1">Water Resistant</h4>
<p className="text-xs text-zinc-500">Up to 50 meters (5 ATM). Safe for showering and swimming.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-900 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium mb-1">Quick Release Strap</h4>
<p className="text-xs text-zinc-500">Change your look in seconds without any tools.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-900 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium mb-1">Japanese Movement</h4>
<p className="text-xs text-zinc-500">Reliable quartz movement for absolute precision.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight">Customer Reviews</h2>
<button className="text-sm font-medium border-b border-zinc-900 pb-0.5 hover:text-zinc-600 transition-colors">Write a review</button>
</div>
<div className="space-y-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-1 text-zinc-900">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon><iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-400">2 days ago</span>
</div>
<h4 className="text-sm font-medium mb-2">Exactly what I was looking for</h4>
<p className="text-xs text-zinc-600 mb-4">The weight is perfect, not too heavy but feels premium. The matte finish is gorgeous in person.</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-200"></div>
<span className="text-xs text-zinc-500">Alex M.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-xl font-medium tracking-tight mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border-b border-zinc-200 pb-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium text-zinc-900">
                            Is the strap real leather? <iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<p className="mt-2 text-sm text-zinc-500">Yes, the default strap is made from premium top-grain Italian leather that ages beautifully over time.</p>
</div>
<div className="border-b border-zinc-200 pb-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium text-zinc-600 hover:text-zinc-900">
                            How long does the battery last? <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="page-blog">
<header className="py-20 bg-zinc-50/50 border-b border-zinc-100 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.zinc.100)_0%,transparent_100%)]"></div>
<div className="max-w-3xl mx-auto px-4 relative z-10">
<h1 className="text-4xl font-medium tracking-tight mb-4">Journal</h1>
<p className="text-sm text-zinc-500">Thoughts on design, aesthetics, and modern lifestyle.</p>
</div>
</header>
<section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-16 cursor-pointer group" onclick="nav('blog-post')">
<div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[4/3] md:aspect-auto md:h-full bg-zinc-100 overflow-hidden relative">
<img alt="Fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8 md:p-12">
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-1 rounded-md bg-zinc-100 text-[10px] font-medium text-zinc-600 uppercase tracking-wider">Style Guide</span>
<span className="text-[10px] text-zinc-400">Oct 12, 2023</span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-zinc-600 transition-colors">The Minimalist Wardrobe Essentials for 2024</h2>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Discover how to build a versatile collection of accessories that elevate any outfit, reducing clutter while maximizing aesthetic impact.</p>
<span className="text-xs font-medium inline-flex items-center gap-1 border-b border-zinc-900 pb-0.5">Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer" onclick="nav('blog-post')">
<div className="aspect-[3/2] rounded-2xl bg-zinc-100 mb-4 overflow-hidden">
<img alt="Sneakers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-medium text-zinc-900">Trends</span>
<span className="text-[10px] text-zinc-400">• Sep 28</span>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 group-hover:text-zinc-600 transition-colors">The Return of Retro Footwear</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Why classic silhouettes are dominating the streets again and how to pair them with modern accessories.</p>
</div>

<div className="group cursor-pointer" onclick="nav('blog-post')">
<div className="aspect-[3/2] rounded-2xl bg-zinc-100 mb-4 overflow-hidden">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-medium text-zinc-900">Tech</span>
<span className="text-[10px] text-zinc-400">• Sep 15</span>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 group-hover:text-zinc-600 transition-colors">Integrating Tech into Fashion</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Smartwatches and wearables that don't compromise on aesthetic appeal.</p>
</div>

<div className="group cursor-pointer" onclick="nav('blog-post')">
<div className="aspect-[3/2] rounded-2xl bg-zinc-100 mb-4 overflow-hidden">
<img alt="Workspace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-medium text-zinc-900">Lifestyle</span>
<span className="text-[10px] text-zinc-400">• Aug 30</span>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 group-hover:text-zinc-600 transition-colors">Curating Your Desk Setup</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Desk accessories that boost productivity while maintaining a clean, minimal look.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-white text-center">
<div className="max-w-md mx-auto px-4">
<h2 className="text-2xl font-medium tracking-tight mb-2">Stay inspired</h2>
<p className="text-sm text-zinc-400 mb-6">Get weekly articles on design, style, and exclusive early access to new collections.</p>
<div className="flex gap-2">
<input className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500" placeholder="Your email address" type="email"/>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-colors">Subscribe</button>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="page-blog-post">
<article className="py-12 sm:py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6">

<header className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">Style Guide</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
                        The Minimalist Wardrobe Essentials for 2024
                    </h1>
<div className="flex items-center justify-center gap-4 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden"><img alt="Author" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/></div>
<span>By Jane Doe</span>
</div>
<span>•</span>
<span>Oct 12, 2023</span>
<span>•</span>
<span>5 min read</span>
</div>
</header>

<div className="aspect-video w-full rounded-3xl bg-zinc-100 mb-12 overflow-hidden border border-zinc-100">
<img alt="Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="prose prose-zinc max-w-none text-zinc-600 text-sm sm:text-base leading-relaxed space-y-6">
<p>In a world of constant trends, the true mark of style is restraint. Building a minimalist wardrobe isn't about having fewer items just for the sake of it; it's about curating pieces that serve multiple purposes, elevate your aesthetic, and stand the test of time.</p>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-10 mb-4">1. The Everyday Timepiece</h3>
<p>A watch is more than a tool to tell time—it's the anchor of your daily uniform. Opt for clean lines, neutral dials (black, white, or navy), and interchangeable straps. A steel mesh bracelet offers a modern, industrial feel, while leather brings classic warmth.</p>
<div className="my-8 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-6">
<img alt="Product Mention" className="w-20 h-20 rounded-xl object-cover shrink-0" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Featured: Minimalist Chrono</h4>
<p className="text-xs text-zinc-500 mb-2">The perfect balance of form and function.</p>
<button className="text-xs font-medium text-zinc-900 border-b border-zinc-900 hover:text-zinc-600 transition-colors" onclick="nav('product')">Shop Now</button>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-10 mb-4">2. Structured Carry</h3>
<p>Whether it's a tote, a briefcase, or a crossbody, your bag should maintain its shape even when empty. Structured accessories immediately communicate intention and organization. Look for matte finishes and minimal visible hardware.</p>
<blockquote className="border-l-2 border-zinc-900 pl-6 my-10 italic text-zinc-900 font-medium">
                        "Minimalism is not a lack of something. It's simply the perfect amount of something."
                    </blockquote>
<p>Remember, the goal is versatility. Before adding a new accessory to your collection, ask yourself if it pairs with at least three different outfits you already own. If yes, it’s a worthy investment.</p>
</div>
</div>
</article>

<section className="py-16 border-t border-zinc-100 bg-zinc-50/50">
<div className="max-w-3xl mx-auto px-4 text-center">
<h3 className="text-lg font-medium tracking-tight mb-4">Ready to refine your collection?</h3>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors" onclick="nav('shop')">Explore Essentials</button>
</div>
</section>
</div>

<div className="page-view hidden" id="page-contact">
<header className="py-16 border-b border-zinc-100 bg-zinc-50/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Get in touch</h1>
<p className="text-sm text-zinc-500 max-w-xl mx-auto">Have a question about an order, our products, or just want to say hi? We're here to help.</p>
</div>
</header>
<section className="py-16 sm:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-2xl font-medium tracking-tight mb-8">Contact Information</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-zinc-900" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Email us</h3>
<p className="text-sm text-zinc-500 mb-1">Our friendly team is here to help.</p>
<a className="text-sm font-medium text-zinc-900 hover:underline" href="#">support@accs.co</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-zinc-900" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Office</h3>
<p className="text-sm text-zinc-500 mb-1">Come say hello at our HQ.</p>
<p className="text-sm font-medium text-zinc-900">100 Smith Street<br/>Collingwood VIC 3066 AU</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-zinc-900" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Phone</h3>
<p className="text-sm text-zinc-500 mb-1">Mon-Fri from 8am to 5pm.</p>
<a className="text-sm font-medium text-zinc-900 hover:underline" href="#">+1 (555) 000-0000</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
<form className="space-y-6" onsubmit="event.preventDefault()">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">First name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">Last name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">Email</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">Subject</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-colors text-zinc-600">
<option>General Inquiry</option>
<option>Order Support</option>
<option>Returns &amp; Exchanges</option>
</select>
<iconify-icon className="absolute right-4 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">Message</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-colors resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 hover:-translate-y-0.5 transition-all shadow-md shadow-zinc-900/10" type="submit">Send Message</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-16 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-xl font-medium tracking-tight mb-8 text-center">Quick Answers</h2>
<div className="space-y-4 bg-white p-2 rounded-2xl border border-zinc-100 shadow-sm">
<div className="border-b border-zinc-100 p-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium text-zinc-900">
                            How do I track my order? <iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<p className="mt-2 text-sm text-zinc-500">You can track your order status directly in the ACCS app under your profile, or via the tracking link sent to your email upon dispatch.</p>
</div>
<div className="border-b border-zinc-100 p-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium text-zinc-600 hover:text-zinc-900">
                            Do you ship internationally? <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
<div className="p-4">
<button className="w-full flex justify-between items-center text-left text-sm font-medium text-zinc-600 hover:text-zinc-900">
                            How can I return an item? <iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<span className="text-xl font-semibold tracking-tighter text-zinc-900 mb-4 block">ACCS.</span>
<p className="text-xs text-zinc-500 max-w-xs mb-6">Redefining modern aesthetics through premium, thoughtfully designed accessories.</p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:laptop-linear"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 mb-4 uppercase tracking-wider">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Watches</a></li>
<li><a className="hover:text-zinc-900" href="#">Bags</a></li>
<li><a className="hover:text-zinc-900" href="#">Eyewear</a></li>
<li><a className="hover:text-zinc-900" href="#">New Arrivals</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#" onclick="nav('blog')">Journal</a></li>
<li><a className="hover:text-zinc-900" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900" href="#" onclick="nav('contact')">Contact</a></li>
<li><a className="hover:text-zinc-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900" href="#">Shipping Info</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2024 ACCS. All rights reserved.</p>
<div className="flex gap-2">
<div className="h-6 w-10 rounded border border-zinc-200 flex items-center justify-center text-[8px] font-medium text-zinc-400">VISA</div>
<div className="h-6 w-10 rounded border border-zinc-200 flex items-center justify-center text-[8px] font-medium text-zinc-400">MC</div>
<div className="h-6 w-10 rounded border border-zinc-200 flex items-center justify-center text-[8px] font-medium text-zinc-400">AMEX</div>
<div className="h-6 w-10 rounded border border-zinc-200 bg-zinc-900 text-white flex items-center justify-center text-[8px] font-medium">Pay</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
