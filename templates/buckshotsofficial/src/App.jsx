import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(5,150,105,0.3)] transition-all hover:scale-105 border border-emerald-400/20" href="https://wa.me/966592351192" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>

<header className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-[#111312]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
                AZIAN HAUZ
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-emerald-400 transition-colors flex flex-col items-center" href="#about">
<span>Story</span>
<span className="text-xs opacity-60 font-light mt-0.5">قصتنا</span>
</a>
<a className="hover:text-emerald-400 transition-colors flex flex-col items-center" href="#menu">
<span>Menu</span>
<span className="text-xs opacity-60 font-light mt-0.5">القائمة</span>
</a>
<a className="hover:text-emerald-400 transition-colors flex flex-col items-center" href="#reviews">
<span>Reviews</span>
<span className="text-xs opacity-60 font-light mt-0.5">التقييمات</span>
</a>
<a className="hover:text-emerald-400 transition-colors flex flex-col items-center" href="#contact">
<span>Visit</span>
<span className="text-xs opacity-60 font-light mt-0.5">الزيارة</span>
</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rtl:space-x-reverse" href="tel:+966592351192">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span dir="ltr">+966 59 235 1192</span>
</a>
<a className="bg-amber-500 text-[#111312] px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]" href="https://azian-hauz.yallaqrcodes.com" target="_blank">
                    Order Now
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Authentic Asian Cuisine" className="w-full h-full object-cover opacity-25 mix-blend-luminosity" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2069&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#111312] via-[#111312]/50 to-[#111312]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

<div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amber-400 backdrop-blur-sm">
<iconify-icon className="text-amber-500 fill-amber-500" icon="solar:star-linear" width="14"></iconify-icon>
<span>4.6 Stars</span>
<span className="text-neutral-400 ml-1">(1,261 Reviews)</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400 backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.1)]">
<iconify-icon icon="solar:cup-star-linear" width="16"></iconify-icon>
                    Best Thai Restaurant - Time Out Riyadh 🇹🇭🔥
                </div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white max-w-4xl leading-[1.1]">
                Authentic Thai &amp; Filipino<br/>
                Flavors in Riyadh.
                <span className="block mt-4 text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500 font-medium">
                    نكهات أصيلة في قلب الرياض
                </span>
</h1>
<p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl font-light">
                Bold spices. Rich tradition. Unforgettable flavor. Experience the perfect blend of Thai heat and comforting Filipino home-style cooking.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] text-center" href="#menu">
                    View Menu / القائمة
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors backdrop-blur-sm flex items-center justify-center gap-2" href="#contact">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Get Directions
                </a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
<div className="flex items-center gap-3 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-amber-400" icon="solar:wallet-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span>$$ Affordable Luxury</span>
</div>
<div className="flex items-center gap-3 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-amber-400" icon="solar:clock-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span>Opens at 4:00 PM Daily</span>
</div>
<div className="flex items-center gap-3 text-neutral-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-amber-400" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span>Al Yarmuk, Riyadh</span>
</div>
</div>
</div>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
<div className="w-12 h-12 rounded-xl bg-[#111312] border border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform group-hover:border-emerald-500/50">
<iconify-icon className="text-emerald-500" icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Dine-In <span className="text-sm text-neutral-500 font-normal ml-2">محلي</span></h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Immerse yourself in our warm, Asian-inspired ambiance. Perfect for family gatherings and weekend dinners.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
<div className="w-12 h-12 rounded-xl bg-[#111312] border border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform group-hover:border-emerald-500/50">
<iconify-icon className="text-emerald-500" icon="solar:steering-wheel-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Drive-Thru <span className="text-sm text-neutral-500 font-normal ml-2">طلب من السيارة</span></h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Craving Pad Thai on the go? Use our convenient drive-thru service for quick, fresh meals without leaving your car.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.03]">
<div className="w-12 h-12 rounded-xl bg-[#111312] border border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform group-hover:border-emerald-500/50">
<iconify-icon className="text-emerald-500" icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Delivery <span className="text-sm text-neutral-500 font-normal ml-2">توصيل</span></h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Safe, fast, and contactless delivery. Enjoy our award-winning dishes from the comfort of your own home.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#111312]" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Where tradition meets<br/><span className="text-emerald-500">modern dining.</span></h2>
<h3 className="text-xl text-neutral-500 font-medium mb-6">حيث تلتقي التقاليد مع الحداثة</h3>
<div className="space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
<p>
                        Azian Hauz is more than just a restaurant; it's a culinary journey. Located in Al Yarmuk, Riyadh, we proudly blend the vibrant, aromatic spices of Thailand with the comforting, rich flavors of Filipino home-style cooking.
                    </p>
<p>
                        Highly rated by over 1,200 guests, we are committed to generous portions, an incredibly friendly staff, and an unforgettable taste. Whether you're here for the iconic Tom Yum or our sweet Mango Sticky Rice, expect an Instagram-worthy experience served with genuine warmth.
                    </p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-[#111312] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-[#111312] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-[#111312] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-sm">
<p className="font-semibold text-white">Join 1,200+ happy guests</p>
<p className="text-amber-500 font-medium text-xs mt-0.5">انضم إلى ضيوفنا السعداء</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-emerald-900/20 via-amber-900/10 to-transparent rounded-3xl blur-2xl"></div>
<img alt="Restaurant interior" className="relative rounded-2xl border border-white/10 shadow-2xl brightness-90 contrast-125" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" />

<div className="absolute -bottom-6 -left-6 bg-[#111312] border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/30">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 font-medium">Signature Dessert</p>
<p className="text-sm font-semibold text-white">Mango Sticky Rice</p>
</div>
</div>
</img></div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#111312] relative overflow-hidden" id="menu">
<div className="absolute right-0 top-1/4 w-96 h-96 bg-rose-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-white/5 pb-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Signature Menu</h2>
<h3 className="text-xl text-neutral-500 font-medium mb-3">القائمة المميزة</h3>
<p className="text-neutral-400 text-sm font-light">Curated Thai &amp; Filipino specialties. Fresh ingredients, bold flavors.</p>
</div>
<a className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 group bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-500/20" href="https://azian-hauz.yallaqrcodes.com" target="_blank">
                    View Full Digital Menu 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform rtl:rotate-180" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">

<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-500" icon="solar:fire-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                        Thai Specialties
                        <span className="text-sm font-normal text-neutral-500 ml-auto">أطباق تايلاندية</span>
</h3>
<div className="space-y-6">
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">Classic Pad Thai</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Rice noodles, egg, peanuts, bean sprouts, tamarind sauce.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">45 SAR</div>
</div>
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">Tom Yum Soup</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Spicy and sour broth with lemongrass, galangal, mushrooms, and shrimp.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">38 SAR</div>
</div>
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">Thai Beef Basil Rice</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Stir-fried minced beef, fresh holy basil, chili, topped with a fried egg.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">42 SAR</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-lg bg-amber-900/30 flex items-center justify-center border border-amber-500/20">
<iconify-icon className="text-amber-500" icon="solar:chef-hat-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                        Filipino Comforts
                        <span className="text-sm font-normal text-neutral-500 ml-auto">أطباق فلبينية</span>
</h3>
<div className="space-y-6">
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">Beef Kare-Kare</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Rich peanut stew with tender beef, eggplant, string beans, and bagoong.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">52 SAR</div>
</div>
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">Chicken Adobo</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Classic slow-cooked chicken in soy sauce, vinegar, garlic, and bay leaves.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">40 SAR</div>
</div>
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">Pancit Canton</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Stir-fried egg noodles with vegetables, chicken, and savory soy-oyster sauce.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">35 SAR</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-lg bg-rose-900/30 flex items-center justify-center border border-rose-500/20">
<iconify-icon className="text-rose-500" icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                        Appetizers
                        <span className="text-sm font-normal text-neutral-500 ml-auto">مقبلات</span>
</h3>
<div className="space-y-6">
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-rose-400 transition-colors">Chicken Satay (4pcs)</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Grilled marinated skewers served with rich peanut sauce.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">28 SAR</div>
</div>
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-rose-400 transition-colors">Vegetable Spring Rolls</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Crispy fried rolls filled with mixed veggies, sweet chili dip.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">22 SAR</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-500" icon="solar:cup-hot-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                        Desserts
                        <span className="text-sm font-normal text-neutral-500 ml-auto">حلويات</span>
</h3>
<div className="space-y-6">
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    Mango Sticky Rice
                                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/20">Popular</span>
</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Sweet coconut sticky rice topped with fresh, ripe mango slices.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">32 SAR</div>
</div>
<div className="group flex justify-between gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
<div>
<h4 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">Mango Cheesecake</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Creamy Asian-inspired cheesecake with a vibrant mango glaze.</p>
</div>
<div className="text-sm font-medium text-amber-400 whitespace-nowrap pt-1">29 SAR</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#0f1110] overflow-hidden relative" id="reviews">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Guest Experiences</h2>
<h3 className="text-xl text-neutral-500 font-medium mb-4">آراء ضيوفنا</h3>
<div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
<iconify-icon className="fill-amber-500" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="fill-amber-500" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="fill-amber-500" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="fill-amber-500" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="fill-amber-500" icon="solar:star-half-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm font-light">4.6 Average across 1,261 reviews</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-sm font-semibold text-emerald-400 border border-emerald-500/20">FA</div>
<div>
<p className="text-sm font-semibold text-white">Faisal A.</p>
<p className="text-xs text-neutral-500">Local Guide</p>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed font-light">"The best Pad Thai I’ve had in Riyadh! The ambiance is wonderful, and the blend of Thai and Filipino dishes makes the menu incredibly unique. Highly recommend the Mango Sticky Rice for dessert."</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center text-sm font-semibold text-amber-400 border border-amber-500/20">SM</div>
<div>
<p className="text-sm font-semibold text-white">Sarah M.</p>
<p className="text-xs text-neutral-500">2 weeks ago</p>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed font-light">"A hidden gem in Al Yarmuk. The Tom Yum soup was perfectly spiced, and the portions are very generous for the price. The staff was incredibly welcoming and attentive throughout our visit."</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-rose-900/30 flex items-center justify-center text-sm font-semibold text-rose-400 border border-rose-500/20">MJ</div>
<div>
<p className="text-sm font-semibold text-white">Mark J.</p>
<p className="text-xs text-neutral-500">1 month ago</p>
</div>
</div>
<p className="text-sm text-neutral-300 leading-relaxed font-light">"Their delivery packaging is top-notch. Food arrived hot, fresh, and the flavors were just as good as dining in. The Chicken Adobo transported me right back to Manila!"</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#111312]" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Reserve your table.</h2>
<h3 className="text-xl text-neutral-500 font-medium mb-6">احجز طاولتك</h3>
<p className="text-neutral-400 text-sm mb-10 font-light">Experience the finest Thai and Filipino dining in Riyadh. Reach out for large party reservations or general inquiries.</p>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-500" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Location <span className="text-xs text-neutral-500 font-normal ml-2">الموقع</span></p>
<p className="text-sm text-neutral-400 mt-1.5 leading-relaxed font-light">Dammam Branch Rd, Al Yarmuk<br/>Riyadh 13243<br/>Saudi Arabia</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-500" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Phone <span className="text-xs text-neutral-500 font-normal ml-2">الهاتف</span></p>
<a className="text-sm text-neutral-400 mt-1.5 hover:text-emerald-400 transition-colors block font-light" dir="ltr" href="tel:+966592351192">+966 59 235 1192</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-500" icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Hours <span className="text-xs text-neutral-500 font-normal ml-2">ساعات العمل</span></p>
<p className="text-sm text-neutral-400 mt-1.5 leading-relaxed font-light">Monday - Sunday<br/>Opens at 4:00 PM</p>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-lg font-semibold text-white mb-6">Quick Reservation <span className="text-sm text-neutral-500 font-normal ml-2">حجز سريع</span></h3>
<form className="space-y-5 relative z-10" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Name / الاسم</label>
<input className="w-full bg-[#111312] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors font-light" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Phone / رقم الجوال</label>
<input className="w-full bg-[#111312] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors font-light" dir="ltr" placeholder="+966 5X XXX XXXX" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Date / التاريخ</label>
<input className="w-full bg-[#111312] border border-white/10 rounded-lg px-4 py-3 text-sm text-neutral-400 focus:outline-none focus:border-emerald-500/50 transition-colors font-light [color-scheme:dark]" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Guests / عدد الأشخاص</label>
<select className="w-full bg-[#111312] border border-white/10 rounded-lg px-4 py-3 text-sm text-neutral-400 focus:outline-none focus:border-emerald-500/50 transition-colors font-light appearance-none">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
</div>
</div>
<button className="w-full bg-emerald-600 text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-emerald-500 transition-colors mt-4 shadow-[0_0_15px_rgba(5,150,105,0.2)]" type="submit">
                        Request Table / اطلب حجز
                    </button>
</form>
</div>
</div>
</section>

<div className="h-64 md:h-96 w-full bg-[#0f1110] relative border-t border-white/5 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f1110] to-transparent"></div>
<div className="text-center relative z-10 p-6 rounded-2xl bg-[#111312]/80 backdrop-blur-sm border border-white/5">
<div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-3 animate-pulse shadow-[0_0_20px_rgba(5,150,105,0.3)]">
<iconify-icon className="text-emerald-400" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-white">Dammam Branch Rd, Al Yarmuk, Riyadh</p>
<a className="text-xs text-amber-500 hover:text-amber-400 transition-colors mt-2 block font-medium" href="https://maps.google.com" target="_blank">Open in Google Maps / افتح في خرائط جوجل</a>
</div>
</div>

<footer className="bg-[#111312] py-12 border-t border-white/5 text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">AZIAN HAUZ</span>
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
</div>
<div className="flex flex-col items-center md:items-start text-xs text-neutral-500 font-light gap-1">
<p>© 2023 Azian Hauz Restaurant. All rights reserved.</p>
<p>مطعم ازيان هاوز التايلاندي والفلبيني</p>
</div>
<div className="flex items-center gap-5 text-neutral-400">
<a className="hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="22"></iconify-icon></a>
<a className="hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="22"></iconify-icon></a>
<a className="hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="solar:map-arrow-up-linear" strokeWidth="1.5" width="22"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
