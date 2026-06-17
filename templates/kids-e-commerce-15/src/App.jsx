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
      

<div className="bg-[#FF6B6B] text-white w-full py-2.5 flex justify-center items-center px-4 font-head">
<span className="text-xs font-medium tracking-wide">Free shipping on label kits &amp; orders over $50! ✨</span>
</div>

<header className="sticky top-0 z-50 bg-[#F7F9FC]/90 backdrop-blur-md border-b border-white shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full">

<button className="md:hidden text-[#2D3436] flex items-center active:scale-95 transition-transform">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<a className="font-head text-2xl font-semibold tracking-tighter text-[#2D3436] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" href="#">
                THEWOWKID
            </a>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative">
<input className="w-full bg-white border-2 border-transparent focus:border-[#4ECDC4] rounded-[24px] py-2.5 pl-12 pr-4 text-sm outline-none transition-all shadow-tactile font-body placeholder:text-[#2D3436]/40" placeholder="Search for bottles, labels, toys..." type="text"/>
<iconify-icon className="text-xl text-[#4ECDC4] absolute left-4 top-1/2 -translate-y-1/2" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex text-sm font-medium text-[#2D3436] hover:text-[#4ECDC4] transition-colors items-center gap-1.5" href="#">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Track Order
                </a>
<button className="text-[#2D3436] flex items-center hover:text-[#4ECDC4] transition-colors active:scale-95">
<iconify-icon className="text-2xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-[#2D3436] hidden md:flex items-center hover:text-[#4ECDC4] transition-colors relative active:scale-95">
<iconify-icon className="text-2xl" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#FF6B6B] text-white text-xs font-medium flex items-center justify-center rounded-full">3</span>
</button>
</div>
</div>
</header>
<main className="flex-1 w-full flex flex-col items-center">

<section className="w-full max-w-7xl mx-auto px-6 py-6 md:py-10">
<div className="bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center relative min-h-[65vh] shadow-tactile border-[4px] border-white">
<div className="w-full md:w-[55%] p-8 md:p-16 flex flex-col items-start justify-center z-10">
<div className="bg-[#FFE66D] text-[#2D3436] px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 inline-flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:star-fall-linear"></iconify-icon>
                        New School Year Collection
                    </div>
<h1 className="font-head text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D3436] mb-6 leading-[1.1]">
                        Personalized gear for their biggest adventures.
                    </h1>
<p className="text-base text-[#2D3436]/70 mb-10 max-w-md leading-relaxed font-body">
                        Make sure nothing gets lost again. Premium, durable, and playful essentials customized just for your little explorer.
                    </p>
<button className="font-btn bg-[#FF6B6B] text-white px-8 py-4 rounded-[24px] text-sm font-medium tracking-[1px] uppercase hover:bg-[#ff5252] active:scale-95 transition-all shadow-[0_8px_20px_rgba(255,107,107,0.3)]">
                        Create Your Label Kit
                    </button>
</div>
<div className="w-full md:w-[45%] h-72 md:h-full absolute md:relative bottom-0 right-0">

<div className="w-full h-full relative overflow-hidden bg-[#F7F9FC]">
<img alt="Child wearing personalized backpack" className="w-full h-full object-cover rounded-[20px] md:rounded-l-none object-center" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
<h2 className="font-head text-3xl font-semibold tracking-tight text-[#2D3436] mb-8">Shop by Category</h2>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 h-auto md:h-[500px]">

<div className="group relative md:col-span-2 md:row-span-2 bg-white rounded-[24px] overflow-hidden shadow-tactile border-[3px] border-white shadow-tactile-hover transition-all cursor-pointer h-64 md:h-full flex flex-col justify-end p-6">
<img alt="Waterproof Labels" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1585868846387-73d8389d4fb1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/80 via-transparent to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="font-head text-2xl font-semibold tracking-tight text-white mb-1">Waterproof Labels</h3>
<p className="text-sm text-white/90">Dishwasher &amp; laundry safe</p>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D3436] active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="group relative md:col-span-2 md:row-span-1 bg-[#4ECDC4]/10 rounded-[24px] overflow-hidden shadow-tactile border-[3px] border-white shadow-tactile-hover transition-all cursor-pointer h-56 md:h-full flex p-6 items-center">
<div className="flex-1 z-10">
<span className="bg-[#FF6B6B] text-white px-2.5 py-1 rounded-md text-xs font-medium mb-3 inline-block">Bestseller</span>
<h3 className="font-head text-xl font-semibold tracking-tight text-[#2D3436] mb-1">Insulated Bottles</h3>
<p className="text-xs text-[#2D3436]/70 mb-4">Keeps cold for 24h</p>
<span className="text-sm font-medium text-[#4ECDC4] flex items-center gap-1">Shop now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="w-1/2 h-full relative">
<img alt="Insulated Bottles" className="absolute inset-0 w-full h-full object-contain group-hover:scale-[1.05] transition-transform duration-500 drop-shadow-xl" src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 bg-white rounded-[24px] overflow-hidden shadow-tactile border-[3px] border-white shadow-tactile-hover transition-all cursor-pointer h-48 md:h-full p-5 flex flex-col justify-end">
<img alt="Educational Toys" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/70 to-transparent"></div>
<div className="relative z-10">
<h3 className="font-head text-lg font-semibold tracking-tight text-white mb-0.5">Educational Toys</h3>
<p className="text-xs text-white/80">Learn through play</p>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-1 bg-[#FFE66D]/20 rounded-[24px] overflow-hidden shadow-tactile border-[3px] border-white shadow-tactile-hover transition-all cursor-pointer h-48 md:h-full p-5 flex flex-col items-center justify-center text-center">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#2D3436] mb-3 shadow-sm group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-2xl" icon="solar:tag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-head text-lg font-semibold tracking-tight text-[#2D3436]">Bag Tags</h3>
<p className="text-xs text-[#2D3436]/70">Durable &amp; bright</p>
</div>
</div>
</section>

<section className="w-full bg-white border-y border-[#2D3436]/5 mt-8">
<div className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 flex flex-col items-start">
<h2 className="font-head text-3xl md:text-4xl font-semibold tracking-tight text-[#2D3436] mb-4">See it before you buy.</h2>
<p className="text-sm text-[#2D3436]/70 mb-8 max-w-sm">Type your little one's name below to preview how it will look on our premium waterproof labels.</p>
<div className="w-full max-w-sm relative">
<label className="text-xs font-medium text-[#2D3436] mb-2 block">Enter kid's name</label>
<input className="w-full bg-[#F7F9FC] border-2 border-transparent focus:border-[#4ECDC4] rounded-[16px] py-3.5 px-4 text-sm outline-none transition-all shadow-inner font-body" maxlength="15" oninput="document.getElementById('previewText').textContent = this.value || 'Oliver Smith'" placeholder="e.g. Oliver Smith" type="text"/>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-center items-center p-8 bg-[#F7F9FC] rounded-[32px] border-[4px] border-white shadow-tactile min-h-[250px] relative overflow-hidden">

<div className="absolute top-4 left-4 text-[#FF6B6B]/20"><iconify-icon className="text-4xl" icon="solar:star-circle-linear"></iconify-icon></div>
<div className="absolute bottom-4 right-4 text-[#4ECDC4]/20"><iconify-icon className="text-5xl" icon="solar:planet-linear"></iconify-icon></div>

<div className="bg-white px-8 py-5 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.06)] border-2 border-[#4ECDC4] flex items-center gap-4 transform rotate-[-2deg] hover:rotate-0 transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#FFE66D] flex items-center justify-center text-[#2D3436]">
<iconify-icon className="text-lg" icon="solar:ghost-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-head text-2xl font-semibold tracking-tight text-[#2D3436]" id="previewText">Oliver Smith</span>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-20 text-center">
<h2 className="font-head text-3xl font-semibold tracking-tight text-[#2D3436] mb-2">Wall of Love</h2>
<p className="text-sm text-[#2D3436]/70 mb-10 flex items-center justify-center gap-2">
                Rated 4.9/5 by 10,000+ happy parents 
                <span className="flex text-[#FF6B6B]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-tactile border-[3px] border-white">
<img alt="Customer review" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#2D3436]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<iconify-icon className="text-[#FF6B6B] text-2xl mb-2" icon="solar:heart-bold"></iconify-icon>
<p className="text-white text-xs text-center">"The labels survived a whole year of dishwasher cycles!"</p>
</div>
</div>

<div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-tactile border-[3px] border-white">
<img alt="Customer review" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#2D3436]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<iconify-icon className="text-[#FF6B6B] text-2xl mb-2" icon="solar:heart-bold"></iconify-icon>
<p className="text-white text-xs text-center">"Beautiful bottles, my son loves taking it to school."</p>
</div>
</div>

<div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-tactile border-[3px] border-white">
<img alt="Customer review" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#2D3436]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<iconify-icon className="text-[#FF6B6B] text-2xl mb-2" icon="solar:heart-bold"></iconify-icon>
<p className="text-white text-xs text-center">"Top notch quality and so aesthetic."</p>
</div>
</div>

<div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-tactile border-[3px] border-white">
<img alt="Customer review" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#2D3436]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
<iconify-icon className="text-[#FF6B6B] text-2xl mb-2" icon="solar:heart-bold"></iconify-icon>
<p className="text-white text-xs text-center">"The perfect gift for starting kindergarten!"</p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full bg-white border-t border-[#2D3436]/5 pt-16 pb-8 md:pb-8 pb-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-b border-[#2D3436]/5 pb-12">
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center text-[#4ECDC4]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-head text-sm font-semibold text-[#2D3436]">SSL Secure Checkout</h4>
<p className="text-xs text-[#2D3436]/60">100% protected payments</p>
</div>
</div>
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center text-[#4ECDC4]">
<iconify-icon className="text-2xl" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-head text-sm font-semibold text-[#2D3436]">7-Day Replacement</h4>
<p className="text-xs text-[#2D3436]/60">Hassle-free process</p>
</div>
</div>
<div className="flex items-center gap-4 justify-center md:justify-start">
<div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center text-[#4ECDC4]">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-head text-sm font-semibold text-[#2D3436]">Made in India</h4>
<p className="text-xs text-[#2D3436]/60">Crafted with love</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="font-head text-2xl font-semibold tracking-tighter text-[#2D3436] block mb-4" href="#">
                        THEWOWKID
                    </a>
<p className="text-sm text-[#2D3436]/60">
                        Making school gear exciting. Premium personalized essentials for your little one's biggest adventures.
                    </p>
</div>
<div>
<h4 className="font-head text-sm font-semibold text-[#2D3436] mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Waterproof Labels</a></li>
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Insulated Bottles</a></li>
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Bag Tags</a></li>
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Gift Sets</a></li>
</ul>
</div>
<div>
<h4 className="font-head text-sm font-semibold text-[#2D3436] mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Track Order</a></li>
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">FAQs</a></li>
<li><a className="text-sm text-[#2D3436]/60 hover:text-[#4ECDC4] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-head text-sm font-semibold text-[#2D3436] mb-4">Join the Wow Club</h4>
<p className="text-sm text-[#2D3436]/60 mb-4">Get 10% off your first label kit plus exclusive early access.</p>
<div className="flex flex-col gap-2">
<input className="w-full px-4 py-3 bg-[#F7F9FC] border border-transparent rounded-[16px] text-sm text-[#2D3436] placeholder-[#2D3436]/40 focus:outline-none focus:border-[#4ECDC4] transition-all" placeholder="Email address" type="email"/>
<button className="font-btn bg-[#2D3436] text-white px-4 py-3 rounded-[16px] text-xs font-medium uppercase tracking-[1px] hover:bg-black active:scale-95 transition-all">
                            Subscribe
                        </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#2D3436]/5 text-xs text-[#2D3436]/50">
<p>© 2024 TheWowKid. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="hover:text-[#2D3436] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#2D3436] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-[#2D3436]/5 p-4 md:hidden z-50 flex justify-between items-center shadow-[0_-10px_40px_rgba(45,52,54,0.06)] pb-safe">
<div className="flex flex-col">
<span className="text-xs text-[#2D3436]/60 font-medium">3 Items</span>
<span className="font-head text-sm font-semibold text-[#2D3436]">$86.00</span>
</div>
<button className="font-btn bg-[#FF6B6B] text-white px-6 py-3 rounded-[20px] text-xs font-medium uppercase tracking-[1px] shadow-[0_4px_15px_rgba(255,107,107,0.3)] active:scale-95 transition-all flex items-center gap-2">
            View Cart <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

    </>
  );
}
