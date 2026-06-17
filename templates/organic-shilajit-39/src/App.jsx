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



        function toggleLogin() {
            const modal = document.getElementById('login-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');
            
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                    panel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
                }, 10);
            } else {
                // Close
                backdrop.classList.add('opacity-0');
                panel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                panel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
<span className="font-serif font-semibold text-lg">M</span>
</div>
<span className="text-lg font-medium tracking-tight text-white">MARKHOR<span className="text-amber-500">.</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-amber-400 transition-colors" href="#product">Product</a>
<a className="hover:text-amber-400 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-amber-400 transition-colors" href="#about">Sourcing</a>
</div>

<div className="flex items-center gap-4">

<button className="hidden sm:flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" onclick="toggleLogin()">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
                    Login
                </button>
<button className="relative group pl-4 border-l border-white/10">
<div className="absolute -inset-2 bg-amber-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<iconify-icon className="text-white relative" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white font-bold">1</span>
</button>
</div>
</div>
</nav>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="login-modal" role="dialog">

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

<div className="relative transform overflow-hidden rounded-2xl glass-panel text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md border border-white/10 bg-[#0a0a0a]" id="modal-panel">

<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors" onclick="toggleLogin()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="p-8">
<div className="text-center mb-8">
<div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
<span className="font-serif font-semibold text-xl">M</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Welcome Back</h3>
<p className="text-sm text-neutral-500 mt-2">Sign in to access your orders and subscription.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide" htmlFor="email">Email Address</label>
<div className="relative">
<input className="block w-full rounded-lg border border-white/10 bg-neutral-900 py-3 pl-10 pr-3 text-sm text-white placeholder-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors" id="email" placeholder="name@example.com" type="email"/>
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide" htmlFor="password">Password</label>
<a className="text-xs text-amber-500 hover:text-amber-400" href="#">Forgot?</a>
</div>
<div className="relative">
<input className="block w-full rounded-lg border border-white/10 bg-neutral-900 py-3 pl-10 pr-3 text-sm text-white placeholder-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors" id="password" placeholder="••••••••" type="password"/>
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<button className="w-full gold-gradient-bg text-black font-semibold h-11 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_-3px_rgba(251,191,36,0.3)] mt-6 text-sm" type="submit">
                                Sign In
                            </button>
<div className="text-center mt-6">
<p className="text-xs text-neutral-500">
                                    Don't have an account? 
                                    <a className="text-white hover:text-amber-500 transition-colors ml-1 font-medium" href="#">Create Account</a>
</p>
</div>
</form>
</div>
<div className="border-t border-white/5 bg-white/5 p-4 text-center">
<p className="text-[10px] text-neutral-500 flex items-center justify-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Secure Encryption
                        </p>
</div>
</div>
</div>
</div>
</div>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium tracking-wide uppercase">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                    100% Certified Organic Resin
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Pure Power <br/>
<span className="font-serif italic text-amber-500/90">From Nature.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                    Sourced from the pristine heights of the Karakoram. Markhor Shilajit restores your energy, immunity, and vitality naturally.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="gold-gradient-bg text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-all duration-300 w-full sm:w-auto text-center" href="#product">
                        Shop Premium Resin
                    </a>
<a className="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2" href="#benefits">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Learn More
                    </a>
</div>
<div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-neutral-500 text-xs">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
<span>Free Shipping</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Lab Tested</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:wad-of-money-linear" width="16"></iconify-icon>
<span>Cash on Delivery</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute border border-white/5 rounded-full w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"></div>
<div className="absolute border border-white/5 rounded-full w-[400px] h-[400px] sm:w-[700px] sm:h-[700px]"></div>

<div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 glass-panel rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-black">

<div className="w-48 h-12 bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 rounded-sm shadow-lg mb-[-10px] z-20"></div>

<div className="w-48 h-48 bg-black border-x border-b border-white/10 rounded-b-xl relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-90"></div>

<div className="relative z-10 text-center border border-amber-500/30 p-4 w-36 h-32 flex flex-col items-center justify-center bg-[#0a0a0a]">
<div className="text-amber-500 mb-1">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-serif tracking-widest text-xs uppercase mb-1">Markhor</h3>
<p className="text-[10px] text-amber-500 tracking-wider uppercase">Premium Shilajit</p>
<p className="text-[8px] text-neutral-500 mt-2">15g / 0.5oz</p>
</div>
</div>

<div className="absolute -right-6 top-10 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                        Best Seller
                    </div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="benefits">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white mb-4 tracking-tight">Why Choose Markhor?</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Nature's most potent adaptogen, refined for the modern lifestyle.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
<iconify-icon icon="solar:bolt-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Boosts Energy</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Rich in fulvic acid, it helps mitochondria produce energy more efficiently, reducing fatigue and boosting stamina.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
<iconify-icon icon="solar:brain-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Mental Clarity</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Enhances cognitive function, memory, and focus. Used for centuries to clear brain fog and sharpen the mind.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
<iconify-icon icon="solar:shield-star-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Immune Support</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Packed with over 84 minerals and trace elements that strengthen your body's natural defense mechanisms.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="product">
<div className="max-w-6xl mx-auto px-6">
<div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
<div className="grid lg:grid-cols-2">

<div className="bg-[#0f0f0f] p-12 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-white/5">
<div className="relative w-full aspect-square max-w-sm flex items-center justify-center bg-radial-gradient">

<div className="w-64 h-64 rounded-full bg-amber-900/20 blur-3xl absolute"></div>
<div className="relative z-10 w-48 h-48 bg-black rounded-lg border border-amber-500/20 flex flex-col items-center justify-center shadow-2xl">
<div className="w-full h-8 bg-gradient-to-r from-amber-200 to-amber-500 absolute top-0 rounded-t-lg"></div>
<span className="font-serif text-2xl text-amber-500 tracking-widest mt-4">MARKHOR</span>
<span className="text-[10px] text-neutral-500 tracking-[0.2em] uppercase mt-1">Himalayan Resin</span>
</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col justify-center">
<div className="mb-2 flex items-center gap-2">
<span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Top Rated</span>
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-neutral-500">(240+ Reviews)</span>
</div>
<h2 className="text-3xl font-medium text-white mb-2 tracking-tight">Markhor Premium Shilajit Resin</h2>
<p className="text-neutral-400 text-sm mb-6">15 Grams Jar • 30 Day Supply</p>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-3xl font-semibold text-white">Rs. 2,999</span>
<span className="text-lg text-neutral-600 line-through decoration-1">Rs. 4,500</span>
<span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded">Save 33%</span>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Gold Grade (High Potency)</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Spoon Included</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Lab Tested for Purity</span>
</div>
</div>

<div className="space-y-4">
<button className="w-full gold-gradient-bg text-black font-semibold h-14 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]">
<span>Order Now - Cash on Delivery</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<a className="w-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-medium h-12 rounded-lg hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2" href="https://wa.me/923001234567">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
<span>Order via WhatsApp</span>
</a>
</div>
<p className="mt-6 text-xs text-neutral-500 text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                            Delivered in 2-4 working days across Pakistan
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-amber-500 mb-6 text-5xl" icon="solar:mountains-linear"></iconify-icon>
<h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Sourced from the Roof of the World</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-12 font-light">
                Markhor Shilajit is harvested by hand from the high-altitude rocks of the Himalayas and Karakoram ranges (16,000ft+). 
                We use a traditional, chemical-free purification method using spring water and sun drying to ensure you get the purest resin possible.
                Unlike powders or capsules, our resin preserves the bioactive properties of the minerals.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">16K+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Feet Altitude</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">84+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Minerals</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Pure Resin</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">3rd</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Party Tested</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-8">
<h2 className="text-3xl font-medium text-white tracking-tight">How to Use</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-medium shrink-0">1</div>
<div>
<h4 className="text-white font-medium mb-1">Measure</h4>
<p className="text-sm text-neutral-400">Take a pea-sized amount (300-500mg) using the included spoon.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-medium shrink-0">2</div>
<div>
<h4 className="text-white font-medium mb-1">Dissolve</h4>
<p className="text-sm text-neutral-400">Mix into warm water, milk, or tea. Do not use boiling water.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-medium shrink-0">3</div>
<div>
<h4 className="text-white font-medium mb-1">Consume</h4>
<p className="text-sm text-neutral-400">Drink every morning on an empty stomach for best results.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 bg-neutral-900 rounded-2xl h-[400px] w-full flex items-center justify-center border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544253327-046645391629?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-white text-6xl mb-4" icon="solar:cup-hot-linear"></iconify-icon>
<p className="text-white font-medium">Daily Morning Ritual</p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 border-t border-white/5 pt-16 pb-8" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-500 text-black">
<span className="font-serif font-bold text-xs">M</span>
</div>
<span className="text-base font-bold tracking-tight text-white">MARKHOR</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        Bringing you the purest, most potent Shilajit resin from Pakistan's northern mountains. Elevate your health naturally.
                    </p>
</div>

<div>
<h4 className="text-white font-medium mb-4">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-amber-400 transition" href="#">Track Order</a></li>
<li><a className="hover:text-amber-400 transition" href="#">Shipping Policy</a></li>
<li><a className="hover:text-amber-400 transition" href="#">Returns</a></li>
<li><a className="hover:text-amber-400 transition" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            +92 300 1234567
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            hello@markhorshilajit.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            Islamabad, Pakistan
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-neutral-600 text-xs">© 2023 Markhor Shilajit. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-400">
<div className="flex flex-col items-center">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
<span className="text-[9px] uppercase mt-1">COD</span>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex gap-2">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
