import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
emerald: {
850: '#064E3B',
900: '#022c22',
950: '#011e17',
},
stone: {
50: '#FDFCF8', // Cream/Off-white
900: '#1c1917',
},
gold: {
400: '#D4AF37', // Soft Gold
500: '#C5A028',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
backgroundImage: {
'pattern': "url('https://www.transparenttextures.com/patterns/arabesque.png')"
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-stone-50/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-2 text-stone-600">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>

<div className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-emerald-950 uppercase">
                Mashkoor
            </div>

<nav className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-600">
<a className="hover:text-emerald-900 transition-colors" href="#">Home</a>
<a className="hover:text-emerald-900 transition-colors" href="#">Shop</a>
<a className="hover:text-emerald-900 transition-colors" href="#">Brands</a>
<a className="hover:text-emerald-900 transition-colors" href="#">About</a>
<a className="hover:text-emerald-900 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-5 text-stone-600">
<button className="hover:text-emerald-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="hover:text-emerald-900 transition-colors relative">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-1 -right-1 bg-emerald-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-emerald-950 overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/50 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center z-10">
<span className="inline-block py-1 px-3 rounded-full border border-gold-400/30 text-gold-400 text-xs tracking-widest uppercase mb-6 bg-gold-400/5 backdrop-blur-sm">
                New Collection 2025
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-stone-50 leading-[1.1] tracking-tight mb-6">
                Mashkoor <br/>
<span className="italic text-stone-200">Clothing &amp; Perfumes</span>
</h1>
<p className="text-stone-300 max-w-lg mx-auto text-base md:text-lg font-light mb-10 leading-relaxed">
                Experience the essence of tradition woven with modern luxury. Premium Islamic clothing and authentic Arabic perfumes crafted for the distinguished.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-stone-50 text-emerald-950 text-sm font-medium rounded-full hover:bg-stone-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Shop Collection
                </button>
<button className="w-full sm:w-auto px-8 py-4 border border-stone-600 text-stone-50 text-sm font-medium rounded-full hover:border-stone-400 hover:bg-stone-50/5 transition-all duration-300 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
                    Order on WhatsApp
                </button>
</div>
</div>
</section>

<div className="border-b border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-100">
<div className="flex items-center justify-center gap-4 py-2">
<div className="p-2 bg-stone-50 rounded-full text-emerald-900">
<span className="iconify" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="text-left">
<p className="text-sm font-medium text-stone-900">100% Original</p>
<p className="text-xs text-stone-500">Authentic Arabic Brands</p>
</div>
</div>
<div className="flex items-center justify-center gap-4 py-2">
<div className="p-2 bg-stone-50 rounded-full text-emerald-900">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="text-left">
<p className="text-sm font-medium text-stone-900">Premium Quality</p>
<p className="text-xs text-stone-500">Finest Fabrics &amp; Oils</p>
</div>
</div>
<div className="flex items-center justify-center gap-4 py-2">
<div className="p-2 bg-stone-50 rounded-full text-emerald-900">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="text-left">
<p className="text-sm font-medium text-stone-900">Worldwide Shipping</p>
<p className="text-xs text-stone-500">Express Delivery</p>
</div>
</div>
</div>
</div>
</div>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-emerald-950 tracking-tight mb-2">Curated Categories</h2>
<p className="text-stone-500 font-light">Explore our finest selection of traditional wear and scents.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-emerald-900 hover:text-gold-500 transition-colors group" href="#">
                View All 
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
<img alt="Premium Thobes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<p className="text-gold-400 text-xs tracking-widest uppercase mb-2">Tailored Luxury</p>
<h3 className="text-3xl font-serif text-white tracking-tight mb-2">Premium Thobes</h3>
<button className="mt-2 text-white text-sm border-b border-white/30 pb-1 hover:border-white transition-all">Shop Collection</button>
</div>
</div>

<div className="group relative md:col-span-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
<img alt="Oud &amp; Perfumes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-2xl font-serif text-white tracking-tight">Original Arabic Perfumes</h3>
<p className="text-stone-200 text-sm font-light">Oud, Musk, &amp; Mukhallat</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
<img alt="Abayas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-serif text-white tracking-tight">Elegant Abayas</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-stone-100 flex flex-col justify-center items-center text-center p-6 border border-stone-200 hover:border-gold-400/30 transition-colors">
<div className="mb-4 text-emerald-900 bg-white p-4 rounded-full shadow-sm">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
</div>
<h3 className="text-lg font-serif text-emerald-950 tracking-tight">Accessories</h3>
<p className="text-stone-500 text-xs mt-2">Caps, Tasbeeh &amp; More</p>
<a className="mt-4 text-xs font-medium text-emerald-900 underline underline-offset-4 decoration-emerald-900/30 hover:decoration-emerald-900" href="#">Browse</a>
</div>
</div>
</section>

<section className="py-10 border-t border-b border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 overflow-hidden">
<p className="text-center text-xs text-stone-400 uppercase tracking-widest mb-8">Trusted Brands We Carry</p>
<div className="flex justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto no-scrollbar">

<span className="text-xl font-serif font-bold text-stone-800 shrink-0">AL HARAMAIN</span>
<span className="text-xl font-serif font-bold text-stone-800 shrink-0">RASASI</span>
<span className="text-xl font-serif font-bold text-stone-800 shrink-0">SWISS ARABIAN</span>
<span className="text-xl font-serif font-bold text-stone-800 shrink-0">AJMAL</span>
<span className="text-xl font-serif font-bold text-stone-800 shrink-0">LATTAFA</span>
<span className="text-xl font-serif font-bold text-stone-800 shrink-0">ARD AL ZAAFARAN</span>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-gold-500 text-xs font-medium tracking-widest uppercase block mb-3">Essence of Arabia</span>
<h2 className="text-4xl md:text-5xl font-serif text-emerald-950 tracking-tight mb-4">Signature Scents</h2>
<div className="h-px w-20 bg-emerald-900/20 mx-auto my-6"></div>
<p className="text-stone-500 font-light">Discover our exclusive collection of pure Oud oils and premium blends.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-t-2xl p-4 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
<div className="relative bg-stone-100 rounded-xl overflow-hidden aspect-[4/5] mb-6">
<img alt="Royal Oud" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-medium tracking-wider text-emerald-950 uppercase">Best Seller</div>
</div>
<div className="px-2 pb-4 text-center">
<h3 className="text-xl font-serif text-emerald-950 mb-1 group-hover:text-gold-500 transition-colors">Royal Cambodia Oud</h3>
<p className="text-xs text-stone-400 mb-4">Pure Oil - 3ml</p>
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-emerald-900 font-medium">$120.00</span>
</div>
<button className="w-full py-3 border border-stone-200 text-emerald-950 text-xs font-medium uppercase tracking-wide rounded hover:bg-emerald-950 hover:text-white hover:border-emerald-950 transition-all">Add to Cart</button>
</div>
</div>

<div className="group bg-white rounded-t-2xl p-4 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
<div className="relative bg-stone-100 rounded-xl overflow-hidden aspect-[4/5] mb-6">
<img alt="Amber Musk" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="px-2 pb-4 text-center">
<h3 className="text-xl font-serif text-emerald-950 mb-1 group-hover:text-gold-500 transition-colors">Golden Amber Musk</h3>
<p className="text-xs text-stone-400 mb-4">Eau de Parfum - 100ml</p>
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-emerald-900 font-medium">$85.00</span>
</div>
<button className="w-full py-3 border border-stone-200 text-emerald-950 text-xs font-medium uppercase tracking-wide rounded hover:bg-emerald-950 hover:text-white hover:border-emerald-950 transition-all">Add to Cart</button>
</div>
</div>

<div className="group bg-white rounded-t-2xl p-4 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
<div className="relative bg-stone-100 rounded-xl overflow-hidden aspect-[4/5] mb-6">
<img alt="Black Rose" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur px-2 py-1 rounded text-[10px] font-medium tracking-wider text-white uppercase">New Arrival</div>
</div>
<div className="px-2 pb-4 text-center">
<h3 className="text-xl font-serif text-emerald-950 mb-1 group-hover:text-gold-500 transition-colors">Midnight Rose</h3>
<p className="text-xs text-stone-400 mb-4">Perfume Oil - 12ml</p>
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-stone-400 line-through text-xs">$65.00</span>
<span className="text-emerald-900 font-medium">$55.00</span>
</div>
<button className="w-full py-3 border border-stone-200 text-emerald-950 text-xs font-medium uppercase tracking-wide rounded hover:bg-emerald-950 hover:text-white hover:border-emerald-950 transition-all">Add to Cart</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-emerald-900 transition-colors border-b border-transparent hover:border-emerald-900 pb-0.5" href="#">
                    View Complete Collection
                </a>
</div>
</div>
</section>

<section className="py-20 bg-emerald-950 text-stone-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-850 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Join Our Community</h2>
<p className="text-stone-300 mb-8 font-light">Subscribe to receive updates on new arrivals, special offers, and exclusive events.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="Email address" type="email"/>
<button className="px-6 py-3 bg-gold-400 text-emerald-950 text-sm font-medium rounded-lg hover:bg-gold-500 transition-colors" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div>
<div className="text-2xl font-serif font-medium text-stone-200 mb-6">Mashkoor</div>
<p className="text-sm font-light leading-relaxed mb-6">
                    Redefining modest fashion and fragrance with elegance and authenticity. 
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Shop</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-gold-400 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Thobes &amp; Jubbas</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Abayas</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Arabic Perfumes</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Gift Sets</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-gold-400 transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-start gap-3">
<span className="iconify mt-1 text-gold-400" data-icon="lucide:map-pin" data-width="14"></span>
<span>123 Luxury Lane, Fashion District<br/>Dubai, UAE</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-gold-400" data-icon="lucide:phone" data-width="14"></span>
<span>+971 50 123 4567</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-gold-400" data-icon="lucide:mail" data-width="14"></span>
<span>care@mashkoor.com</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2025 Mashkoor Clothing &amp; Perfumes. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
