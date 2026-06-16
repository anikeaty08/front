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
gold: {
100: '#F9F1D8',
200: '#F0E0AA',
300: '#E6C670',
400: '#Cfaa48',
500: '#B08D28',
},
emerald: {
950: '#022c22', // Deep luxury green
900: '#064e3b',
}
},
backgroundImage: {
'luxury-gradient': 'radial-gradient(circle at center top, #064e3b 0%, #020617 60%)',
'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-500/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<button className="md:hidden text-slate-300 hover:text-gold-200 transition-colors">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-200 to-gold-500 flex items-center justify-center text-emerald-950 font-serif font-bold text-lg shadow-[0_0_15px_rgba(240,224,170,0.3)]">
                        J
                    </div>
<span className="font-serif text-2xl text-slate-100 tracking-tight font-semibold">
                        JaMS <span className="text-gold-300 font-sans text-sm tracking-widest uppercase font-medium ml-1">Kart</span>
</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gold-200 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#collections">Collections</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#custom">Custom Design</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4 sm:gap-6">
<button className="text-slate-300 hover:text-gold-200 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="hidden sm:block text-slate-300 hover:text-gold-200 transition-colors relative">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="text-slate-300 hover:text-gold-200 transition-colors relative group">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-2 -right-2 h-4 w-4 bg-gold-400 text-emerald-950 text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
</button>
<button className="hidden sm:block text-slate-300 hover:text-gold-200 transition-colors">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/50 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
<span className="text-xs font-medium text-gold-200 tracking-wide uppercase">New Wedding Collection</span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-white tracking-tight">
                        Timeless Beauty, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-300 to-gold-500">Crafted for You.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Discover authentic Indian craftsmanship with our premium range of certified gold and diamond jewellery. Elegance delivered to your doorstep.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-4 bg-gold-400 hover:bg-gold-300 text-emerald-950 font-semibold rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(207,170,72,0.3)] flex items-center justify-center gap-2">
                            Explore Collection
                            <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 hover:border-gold-300 hover:text-gold-200 text-slate-200 font-medium rounded-lg transition-all backdrop-blur-sm">
                            Custom Design
                        </button>
</div>
<div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
<div className="flex items-center gap-2">
<span className="iconify text-gold-400" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs text-slate-400">BIS Hallmarked</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-gold-400" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs text-slate-400">Insured Delivery</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 border border-white/5 rounded-full scale-[0.8]"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-[0.6]"></div>
<div className="relative w-full max-w-md aspect-[4/5] bg-glass backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-300 text-xs font-medium tracking-wider uppercase mb-1">Featured</p>
<h3 className="font-serif text-2xl text-white">Royal Kundan Set</h3>
</div>
<div className="text-right">
<p className="text-slate-400 text-xs line-through">₹1,25,000</p>
<p className="text-white font-medium text-lg">₹98,500</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-16 z-40 bg-neutral-950/90 backdrop-blur-md border-y border-white/5 py-4 overflow-x-auto no-scrollbar">
<div className="max-w-7xl mx-auto px-4 flex gap-3 min-w-max">
<button className="px-5 py-2 rounded-full bg-gold-400 text-emerald-950 text-sm font-semibold shadow-lg">All Jewellery</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5 text-slate-300 text-sm transition-all whitespace-nowrap">Gold Rings</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5 text-slate-300 text-sm transition-all whitespace-nowrap">Diamond Necklace</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5 text-slate-300 text-sm transition-all whitespace-nowrap">Bridal Sets</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5 text-slate-300 text-sm transition-all whitespace-nowrap">Coins</button>
<button className="px-5 py-2 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-white/5 text-slate-300 text-sm transition-all whitespace-nowrap">Gifts under ₹20k</button>
</div>
</div>

<section className="py-16 md:py-24 relative z-10" id="collections">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-white mb-2 tracking-tight">Trending Now</h2>
<p className="text-slate-400 text-sm">Exquisite pieces loved by our customers.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-gold-300 text-sm hover:text-white transition-colors" href="#">
                    View All <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">

<div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 left-3 z-20 bg-emerald-900/80 backdrop-blur text-xs text-white px-2 py-1 rounded">22k Gold</div>
<button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-neutral-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-400 hover:text-emerald-950">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
</button>
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 relative">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&amp;w=1935&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="p-4 bg-glass backdrop-blur-md absolute bottom-0 w-full border-t border-white/5">
<h3 className="font-serif text-lg text-white leading-tight mb-1 truncate">Emerald Drop Earrings</h3>
<div className="flex items-center justify-between">
<span className="text-gold-200 font-medium">₹45,999</span>
<button className="p-2 bg-white/10 rounded-lg hover:bg-gold-400 hover:text-emerald-950 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-300">
<div className="absolute top-3 left-3 z-20 bg-rose-900/80 backdrop-blur text-xs text-white px-2 py-1 rounded">Best Seller</div>
<button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-neutral-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-400 hover:text-emerald-950">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
</button>
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 relative">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="p-4 bg-glass backdrop-blur-md absolute bottom-0 w-full border-t border-white/5">
<h3 className="font-serif text-lg text-white leading-tight mb-1 truncate">Solitaire Gold Ring</h3>
<div className="flex items-center justify-between">
<span className="text-gold-200 font-medium">₹22,400</span>
<button className="p-2 bg-white/10 rounded-lg hover:bg-gold-400 hover:text-emerald-950 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-300">
<button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-neutral-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-400 hover:text-emerald-950">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
</button>
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 relative">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="p-4 bg-glass backdrop-blur-md absolute bottom-0 w-full border-t border-white/5">
<h3 className="font-serif text-lg text-white leading-tight mb-1 truncate">Temple Necklace</h3>
<div className="flex items-center justify-between">
<span className="text-gold-200 font-medium">₹1,15,000</span>
<button className="p-2 bg-white/10 rounded-lg hover:bg-gold-400 hover:text-emerald-950 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-300">
<button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-neutral-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-400 hover:text-emerald-950">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
</button>
<div className="aspect-[4/5] overflow-hidden bg-neutral-900 relative">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="p-4 bg-glass backdrop-blur-md absolute bottom-0 w-full border-t border-white/5">
<h3 className="font-serif text-lg text-white leading-tight mb-1 truncate">Diamond Bracelet</h3>
<div className="flex items-center justify-between">
<span className="text-gold-200 font-medium">₹68,200</span>
<button className="p-2 bg-white/10 rounded-lg hover:bg-gold-400 hover:text-emerald-950 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<button className="px-6 py-3 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/5 transition-colors">View All Collections</button>
</div>
</div>
</section>

<section className="py-20 relative bg-emerald-950 overflow-hidden" id="custom">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-neutral-950 to-neutral-950 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-gold-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Bespoke Services</span>
<h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 tracking-tight">Design Your Dream Jewellery</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Have a specific design in mind? Upload a reference image or sketch, and our expert craftsmen will bring your vision to life in pure gold and precious stones.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-gold-300">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium">1. Upload Reference</h4>
<p className="text-sm text-slate-500 mt-1">Share images or sketches of what you desire.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-gold-300">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium">2. Expert Consultation</h4>
<p className="text-sm text-slate-500 mt-1">Our designers create a CAD model for your approval.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-gold-300">
<span className="iconify" data-icon="lucide:gem" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium">3. Craftsmanship</h4>
<p className="text-sm text-slate-500 mt-1">Handcrafted with precision and hallmarked certification.</p>
</div>
</div>
</div>
</div>

<div className="bg-glass backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Jewellery Type</label>
<div className="relative">
<select className="w-full bg-neutral-900/50 border border-white/10 text-slate-200 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-gold-400/50 transition-colors text-sm">
<option>Ring</option>
<option>Necklace</option>
<option>Earrings</option>
<option>Bracelet</option>
<option>Other</option>
</select>
<div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Description</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 text-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-400/50 transition-colors text-sm" placeholder="Tell us about the metal, stones, and style..." rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Upload Reference</label>
<div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-gold-400/30 transition-colors cursor-pointer bg-neutral-900/20">
<span className="iconify mx-auto text-slate-500 mb-2" data-icon="lucide:image-plus" data-width="24"></span>
<p className="text-sm text-slate-400">Click to upload image</p>
<p className="text-xs text-slate-600 mt-1">JPG, PNG up to 5MB</p>
</div>
</div>
<div className="pt-2">
<button className="w-full py-3.5 bg-gradient-to-r from-gold-300 to-gold-500 hover:from-gold-200 hover:to-gold-400 text-emerald-950 font-bold rounded-lg shadow-lg transform active:scale-[0.98] transition-all flex justify-center items-center gap-2" type="button">
                                Submit Request
                                <span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-24 md:pb-12 text-slate-400 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-emerald-950 font-serif font-bold text-xs">J</div>
<span className="font-serif text-xl text-white">JaMS Kart</span>
</div>
<p className="text-xs leading-relaxed mb-4">Premium Indian Jewellery store crafted for the modern generation. Certified authenticity.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-slate-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="text-slate-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Shop</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-gold-200 transition-colors" href="#">Gold Jewellery</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Diamond Collection</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Silver Gifts</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Coins</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Support</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-gold-200 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Returns &amp; Exchange</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Secure Payment</h4>
<div className="flex flex-wrap gap-2">
<div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center"><span className="iconify" data-icon="lucide:credit-card" data-width="16"></span></div>
<div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center"><span className="text-[8px] font-bold">UPI</span></div>
<div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center"><span className="text-[8px] font-bold">VISA</span></div>
</div>
<p className="text-[10px] mt-4 text-slate-500">© 2024 JaMS Kart. All rights reserved.</p>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 w-full bg-neutral-950/90 backdrop-blur-lg border-t border-white/10 z-50">
<div className="grid grid-cols-4 h-16">
<a className="flex flex-col items-center justify-center text-gold-400" href="#">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-[10px] mt-1 font-medium">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-400 hover:text-gold-200" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-[10px] mt-1 font-medium">Shop</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-400 hover:text-gold-200" href="#">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-[10px] mt-1 font-medium">Wishlist</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-400 hover:text-gold-200" href="#">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-[10px] mt-1 font-medium">Profile</span>
</a>
</div>
</div>

    </>
  );
}
