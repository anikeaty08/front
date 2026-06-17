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



        function toggleCart() {
            const overlay = document.getElementById('cartOverlay');
            const drawer = document.getElementById('cartDrawer');
            const bg = document.getElementById('cartBg');
            
            if (overlay.classList.contains('invisible')) {
                overlay.classList.remove('invisible');
                setTimeout(() => {
                    drawer.classList.replace('cart-closed', 'cart-open');
                    bg.classList.replace('opacity-0', 'opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                drawer.classList.replace('cart-open', 'cart-closed');
                bg.classList.replace('opacity-100', 'opacity-0');
                setTimeout(() => {
                    overlay.classList.add('invisible');
                    hideCheckout(); // Reset to cart view when closing
                }, 500);
                document.body.style.overflow = '';
            }
        }

        function showCheckout() {
            document.getElementById('cartView').classList.add('checkout-hidden');
            document.getElementById('checkoutView').classList.remove('checkout-hidden');
        }

        function hideCheckout() {
            document.getElementById('checkoutView').classList.add('checkout-hidden');
            document.getElementById('cartView').classList.remove('checkout-hidden');
        }
    
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
      

<div className="fixed inset-0 z-[100] invisible transition-all duration-300" id="cartOverlay">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="cartBg" onclick="toggleCart()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl cart-closed transition-transform duration-500 ease-in-out flex flex-col" id="cartDrawer">

<div className="flex flex-col h-full" id="cartView">
<div className="p-6 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-xl font-semibold tracking-tight">Your Cart</h2>
<span className="px-2 py-0.5 rounded-full bg-slate-100 text-[0.65rem] font-bold text-slate-500 uppercase">1 Item</span>
</div>
<button className="p-2 hover:bg-slate-50 rounded-full transition-colors" onclick="toggleCart()">
<iconify-icon height="24" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6">
<div className="flex gap-6 pb-6 border-b border-slate-50">
<div className="w-24 h-24 bg-slate-50 rounded-2xl flex-shrink-0 relative overflow-hidden flex items-center justify-center">
<div className="w-16 h-16 rounded-full ball-texture shadow-lg scale-110"></div>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight">Official AFCON 2025 Match Ball</h3>
<span className="text-sm font-medium">200 MAD</span>
</div>
<p className="text-xs text-slate-500 mb-4 tracking-wide">Size 5 • Pro Series</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 border border-slate-200 rounded-lg px-2 py-1">
<button className="text-slate-400 hover:text-slate-900"><iconify-icon icon="solar:minus-circle-linear" width="16"></iconify-icon></button>
<span className="text-xs font-medium w-4 text-center">1</span>
<button className="text-slate-400 hover:text-slate-900"><iconify-icon icon="solar:plus-circle-linear" width="16"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-50 space-y-4">
<div className="flex justify-between items-end mb-4">
<span className="text-sm font-semibold">Total</span>
<span className="text-xl font-semibold tracking-tight">200 MAD</span>
</div>
<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group" onclick="showCheckout()">
                        Checkout Now
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col h-full checkout-hidden" id="checkoutView">
<div className="p-6 border-b border-slate-100 flex items-center gap-4">
<button className="p-2 hover:bg-slate-50 rounded-full transition-colors" onclick="hideCheckout()">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<h2 className="text-xl font-semibold tracking-tight">Secure Checkout</h2>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Shipping Information</h3>
<div className="grid gap-3">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="Full Name" type="text"/>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="Email Address" type="email"/>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="Shipping Address (e.g. Ifrane)" type="text"/>
</div>
</div>
<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Payment Details</h3>
<div className="grid gap-3">
<div className="relative">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="Card Number" type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
<iconify-icon className="text-slate-400" icon="solar:card-2-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="MM/YY" type="text"/>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="CVC" type="text"/>
</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-50">
<button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-medium text-sm hover:bg-emerald-700 transition-all">
                        Pay 200 MAD
                    </button>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-red-600" href="#">AFCON<span className="text-emerald-600">25</span></a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#specs">Specs</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
</div>
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors relative" onclick="toggleCart()">
<iconify-icon height="24" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
</button>
</div>
</nav>

<section className="relative pt-12 pb-24 md:pt-24 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Official Match Ball</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                    Engineered for the <span className="text-red-600">Atlas Lions</span> stage.
                </h1>
<p className="text-lg text-slate-500 mb-10 max-w-lg">The pinnacle of football engineering, infused with the vibrant energy of Morocco 2025.</p>
<button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-sm hover:opacity-90 transition-all flex items-center gap-3" onclick="toggleCart()">
                    Buy Now — 200 MAD
                    <iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="relative flex justify-center">
<div className="w-full max-w-md aspect-square rounded-full ball-texture shadow-2xl relative overflow-hidden flex items-center justify-center border-8 border-white/20">
<div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
<span className="relative z-10 text-4xl font-bold tracking-[0.3em] text-white/90 drop-shadow-lg -rotate-12">AFCON25</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Precision Engineering</h2>
<p className="text-slate-500 max-w-md">Every panel is designed to provide stable flight and predictable bounce in all conditions.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-emerald-600 mb-6" icon="solar:wind-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Aerodynamic Stability</h3>
<p className="text-sm text-slate-500 leading-relaxed">Unique debossed grooves reduce air resistance for more accurate long-range passing and shooting.</p>
</div>
<div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-emerald-600 mb-6" icon="solar:umbrella-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Zero Water Absorption</h3>
<p className="text-sm text-slate-500 leading-relaxed">Thermally bonded seamless surface ensures consistent weight even in the heaviest Moroccan rainfall.</p>
</div>
<div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-emerald-600 mb-6" icon="solar:crown-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Elite Tactility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Micro-textured casing provides superior grip and control for the world's most technical players.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="specs">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Technical Specifications</h2>
<div className="space-y-4">
<div className="flex justify-between py-4 border-b border-slate-100">
<span className="text-sm text-slate-500">Official Size</span>
<span className="text-sm font-semibold">Size 5 (FIFA Quality Pro)</span>
</div>
<div className="flex justify-between py-4 border-b border-slate-100">
<span className="text-sm text-slate-500">Weight</span>
<span className="text-sm font-semibold">420 - 440 grams</span>
</div>
<div className="flex justify-between py-4 border-b border-slate-100">
<span className="text-sm text-slate-500">Circumference</span>
<span className="text-sm font-semibold">68.5 - 69.5 cm</span>
</div>
<div className="flex justify-between py-4 border-b border-slate-100">
<span className="text-sm text-slate-500">Construction</span>
<span className="text-sm font-semibold">Thermally Bonded (Seamless)</span>
</div>
<div className="flex justify-between py-4">
<span className="text-sm text-slate-500">Material</span>
<span className="text-sm font-semibold">100% Polyurethane Cover</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 bg-slate-900 rounded-[2.5rem] p-12 aspect-square flex flex-col justify-between text-white overflow-hidden relative">
<div className="relative z-10">
<h3 className="text-xl font-semibold tracking-tight mb-2">Designed for Pro Performance</h3>
<p className="text-slate-400 text-sm">Tested in high-altitude conditions of the Atlas Mountains.</p>
</div>
<iconify-icon className="absolute -bottom-10 -right-10 text-white/5" icon="solar:ranking-linear" width="300"></iconify-icon>
<div className="relative z-10 flex items-center gap-3">
<span className="px-3 py-1 bg-white/10 rounded-full text-[0.65rem] font-bold uppercase tracking-widest border border-white/10">FIFA Approved</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
<div className="p-12 md:p-16">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Visit Our HQ</h2>
<p className="text-slate-500 mb-10 leading-relaxed">Our design studio is nestled in the heart of the Middle Atlas, where precision meets heritage.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-600" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Office Address</h4>
<p className="text-sm text-slate-500">Avenue Hassan II, Al Akhawayn District<br/>Ifrane 53000, Morocco</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Contact Details</h4>
<p className="text-sm text-slate-500">contact@afcon25ball.ma<br/>+212 535 123 456</p>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-auto min-h-[400px] grayscale contrast-125 opacity-90">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13348.694600207865!2d-5.11867185!3d33.5255478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f4194c77c1543%3A0x6336e92c2954a7f!2sIfrane%2C%20Morocco!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xl font-semibold tracking-tighter text-slate-300">AFCON25</span>
<p className="text-xs text-slate-400">Official Licensed Product. Made in Morocco.</p>
<div className="flex gap-6">
<iconify-icon className="text-slate-300" icon="solar:share-circle-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
</div>
</footer>


    </>
  );
}
