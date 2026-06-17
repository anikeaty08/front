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
      

<nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 uppercase text-sm font-semibold text-stone-900 tracking-tight group" href="#">
<iconify-icon className="text-stone-900 group-hover:rotate-12 transition-transform duration-300" icon="lucide:feather" strokeWidth="1.5" width="18"></iconify-icon>
                Skin's Whisper
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#products">Products</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About Us</a>
<a className="hover:text-stone-900 transition-colors" href="#blog">Blog</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 text-xs font-medium rounded-full hover:bg-stone-800 transition-all" href="#shop">
                Shop Skincare
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-stone-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-40 md:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Premium Quality
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-stone-900 tracking-tight">
                    Unveil Your Skin's <br/>
<span className="text-stone-500">Natural Radiance</span>
</h1>
<p className="text-lg text-stone-500 max-w-md leading-relaxed">
                    Experience transformative skincare that combines natural ingredients with advanced science. Get glowing, healthy skin without harsh chemicals or complicated routines.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-stone-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2">
                        Discover Our Products
                    </button>
<button className="bg-white border border-stone-200 text-stone-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-all flex items-center justify-center">
                        Learn More
                    </button>
</div>
<div className="flex items-center gap-6 pt-6 text-xs font-medium text-stone-500 border-t border-stone-200/60">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon>
                        Dermatologist-tested
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon>
                        Cruelty-free
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="lucide:check" width="14"></iconify-icon>
                        Sustainably sourced
                    </div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden bg-stone-200 shadow-2xl shadow-stone-200/50">

<img alt="Close-up highly detailed shot of female skin with freckles and pipette with serum" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa3d9efc-c455-4cfa-b810-dcf149bc181e_800w.jpg" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-white/20 shadow-xl max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-stone-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-medium">+2k</div>
</div>
<div className="text-xs font-medium text-stone-900">Trusted by thousands</div>
</div>
<div className="flex text-yellow-500 gap-0.5">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white" id="why-choose">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Why Choose Skin's Whisper?</h2>
<p className="text-stone-500">Experience the perfect blend of nature and science tailored for your skin's unique needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all text-stone-900">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Natural Ingredients</h3>
<p className="text-sm text-stone-500 leading-relaxed">Carefully selected botanical extracts and natural compounds that work in harmony with your skin's biology.</p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all text-stone-900">
<iconify-icon icon="lucide:flask-conical" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Science-Backed Formula</h3>
<p className="text-sm text-stone-500 leading-relaxed">Advanced formulations developed with dermatological research to deliver proven, visible results.</p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all text-stone-900">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">No Harsh Chemicals</h3>
<p className="text-sm text-stone-500 leading-relaxed">Free from parabens, sulfates, and synthetic fragrances. Gentle enough for even the most sensitive skin.</p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all text-stone-900">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Cruelty-Free</h3>
<p className="text-sm text-stone-500 leading-relaxed">Never tested on animals. We believe in ethical beauty that respects all living beings.</p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all text-stone-900">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Sustainable</h3>
<p className="text-sm text-stone-500 leading-relaxed">Eco-friendly packaging and sustainably sourced ingredients for a better planet.</p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all text-stone-900">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Dermatologist-Tested</h3>
<p className="text-sm text-stone-500 leading-relaxed">Rigorously tested by dermatologists to ensure safety and effectiveness for all skin types.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="approach">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-stone-200 rounded-full blur-3xl opacity-60"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-lg">
<img alt="Autumn cosmetics skin care, basic beauty care for fall season" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20 shadow-sm">
<div className="text-2xl font-semibold text-stone-900">100%</div>
<div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Natural Origin</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Our Approach</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
                    Where Nature Meets <br/>
                    Advanced Skincare Science
                </h2>
<p className="text-stone-600 mb-8 leading-relaxed">
                    At Skin's Whisper, we believe that the best skincare comes from understanding both the wisdom of nature and the breakthroughs of modern science. Every product is crafted with premium botanical ingredients enhanced by cutting-edge dermatological research.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center mt-0.5">
<iconify-icon className="text-stone-800" icon="lucide:check" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Proven Results</h4>
<p className="text-sm text-stone-500">Clinical studies show visible improvements in skin texture and radiance within weeks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center mt-0.5">
<iconify-icon className="text-stone-800" icon="lucide:droplet" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Deep Hydration</h4>
<p className="text-sm text-stone-500">Advanced moisture-locking technology keeps your skin hydrated all day long.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center mt-0.5">
<iconify-icon className="text-stone-800" icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Radiant Glow</h4>
<p className="text-sm text-stone-500">Natural ingredients work together to reveal your skin's inner luminosity.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors" href="#">
                        Learn More About Our Story
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-3">Your Complete Skincare Routine</h2>
<p className="text-stone-500">Simple, effective steps to transform your skin</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-stone-100 -z-10"></div>

<div className="relative bg-white pt-4">
<div className="flex md:mx-0 text-lg font-medium text-white bg-stone-900 w-12 h-12 rounded-full ring-white ring-4 mr-auto mb-6 ml-auto items-center justify-center">1</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium text-stone-900 mb-2">Cleanse</h3>
<p className="text-sm text-stone-500 leading-relaxed">Gently remove impurities and prepare your skin for treatment.</p>
</div>
</div>

<div className="relative bg-white pt-4">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center text-lg font-medium mb-6 ring-4 ring-white mx-auto md:mx-0 border border-stone-200">2</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium text-stone-900 mb-2">Apply Serum</h3>
<p className="text-sm text-stone-500 leading-relaxed">Targeted treatment with concentrated active ingredients.</p>
</div>
</div>

<div className="relative bg-white pt-4">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center text-lg font-medium mb-6 ring-4 ring-white mx-auto md:mx-0 border border-stone-200">3</div>
<div className="md:text-left text-center">
<h3 className="text-lg font-medium text-stone-900 mb-2">Moisturize</h3>
<p className="text-sm text-stone-500 leading-relaxed">Lock in hydration and nourish your skin deeply.</p>
</div>
</div>

<div className="relative bg-white pt-4">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center text-lg font-medium mb-6 ring-4 ring-white mx-auto md:mx-0 border border-stone-200">4</div>
<div className="text-center md:text-left">
<h3 className="text-lg font-medium text-stone-900 mb-2">Protect</h3>
<p className="text-sm text-stone-500 leading-relaxed">Shield your skin from environmental damage daily.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 bg-white border border-stone-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors" href="#shop">
                    Shop the Collection
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-7xl mx-auto bg-stone-900 rounded-3xl overflow-hidden shadow-2xl text-white">
<div className="grid md:grid-cols-2">
<div className="relative h-96 md:h-auto">
<img alt="Happy woman applying hydrating moisturizer on her face sitting in bathroom" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ed8a4e0-c091-498f-81e0-345b028ddac7_1600w.jpg"/>
<div className="md:bg-gradient-to-r bg-gradient-to-t from-stone-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 flex gap-4">
<div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
<div className="text-2xl font-semibold mb-0.5">100%</div>
<div className="text-[10px] text-stone-300 uppercase tracking-wide">Natural Ingredients</div>
</div>
<div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
<div className="text-2xl font-semibold mb-0.5">0</div>
<div className="text-[10px] text-stone-300 uppercase tracking-wide">Harsh Chemicals</div>
</div>
</div>
</div>
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="inline-block text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2">Special Offer</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Ready to Transform Your Skin?</h2>
<p className="text-stone-300 mb-8 leading-relaxed max-w-md">
                        Join thousands who have discovered the power of natural, science-backed skincare. Experience the difference that premium, natural skincare can make.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-stone-300 mb-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="lucide:check-circle" width="16"></iconify-icon>
                            Dermatologist-tested
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="lucide:check-circle" width="16"></iconify-icon>
                            Cruelty-free &amp; eco-friendly
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="lucide:check-circle" width="16"></iconify-icon>
                            Visible results in weeks
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="lucide:check-circle" width="16"></iconify-icon>
                            Satisfaction guaranteed
                        </div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-stone-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-stone-100 transition-colors">
                            Browse Products
                        </button>
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-white border border-stone-700 hover:border-stone-500 transition-colors">
                            Contact Us
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 pt-20 pb-10 px-6 border-t border-stone-900">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2 text-white text-sm font-semibold tracking-tight uppercase" href="#">
<iconify-icon className="text-white" icon="lucide:feather" strokeWidth="1.5" width="18"></iconify-icon>
                        Skin's Whisper
                    </a>
<p className="text-sm leading-relaxed max-w-xs">
                        Natural, science-backed skincare that reveals your skin's true radiance. Crafted with care for your health and the planet.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-white font-medium mb-6 text-sm">Quick Links</h4>
<ul className="text-sm space-y-4">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Products</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Customer Service</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Stay Connected</h4>
<p className="text-sm mb-4">Subscribe to get special offers and skincare tips.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition-all placeholder:text-stone-600" placeholder="Your email address" type="email"/>
<button className="w-full bg-white text-stone-950 text-sm font-medium px-4 py-3 rounded-lg hover:bg-stone-200 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div>© 2025 Skin's Whisper. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
