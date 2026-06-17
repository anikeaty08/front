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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<a className="flex-shrink-0 font-semibold tracking-tighter text-lg md:text-xl text-slate-900" href="#">SWEETPIX</a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#">Get Started</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                Turn your phone photos into beautiful wall art.
            </h1>
<p className="text-base md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                Stickable, restickable photo tiles. No nails, no damage, no hassle. Create your custom gallery wall in minutes directly from your phone.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors inline-flex items-center justify-center shadow-sm" href="#">
                    Create Your Tiles
                    <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors inline-flex items-center justify-center shadow-sm" href="#">
<iconify-icon className="mr-2 text-lg" icon="solar:apple-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Get the App
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-100 shadow-sm relative z-10">
<img alt="Tile 1" className="rounded-xl shadow-md w-full aspect-square object-cover transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-slate-100" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<img alt="Tile 2" className="rounded-xl shadow-md w-full aspect-square object-cover transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-slate-100" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<img alt="Tile 3" className="rounded-xl shadow-md w-full aspect-square object-cover transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-slate-100" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<img alt="Tile 4" className="rounded-xl shadow-md w-full aspect-square object-cover transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-slate-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Decorating made effortless.</h2>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-normal">Everything you need to create a personalized space, without the commitment of traditional frames.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
<div>
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Stunning Quality</h3>
<p className="text-sm text-slate-500 leading-relaxed">High-resolution printing on glare-free, durable material ensures your memories look vibrant and crisp from any angle.</p>
</div>
<div>
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:sticker-smile-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Stick &amp; Restick</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our proprietary adhesive backing holds strong but leaves absolutely no marks or residue behind. Move them until it's perfect.</p>
</div>
<div className="sm:col-span-2 md:col-span-1">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Free Fast Shipping</h3>
<p className="text-sm text-slate-500 leading-relaxed">Order directly from our app or website and get your custom photo tiles delivered to your doorstep in days, completely free.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-100 overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:mb-24 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">How Sweetpix works</h2>
</div>
<div className="space-y-24 md:space-y-32">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 md:order-2 w-full">
<div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-3xl bg-white shadow-sm border border-slate-100 overflow-hidden p-8 flex items-center justify-center">
<div className="grid grid-cols-3 gap-3 w-full opacity-80">
<div className="aspect-square bg-slate-100 rounded-xl border-2 border-slate-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-xl text-slate-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="aspect-square bg-slate-50 rounded-xl"></div>
<div className="aspect-square bg-slate-50 rounded-xl"></div>
<div className="aspect-square bg-slate-50 rounded-xl"></div>
<div className="aspect-square bg-slate-100 rounded-xl border-2 border-slate-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-xl text-slate-900" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="aspect-square bg-slate-50 rounded-xl"></div>
</div>
</div>
</div>
<div className="flex-1 md:order-1">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 mb-6 shadow-sm">1</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Select your photos</h3>
<p className="text-slate-500 text-base leading-relaxed">Choose your favorite moments directly from your phone's camera roll, Instagram, or Google Photos using our beautifully intuitive app or website interface.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 w-full">
<div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-3xl bg-white shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center p-2">
<img alt="Printing" className="w-full h-full object-cover rounded-2xl opacity-90" src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="flex-1">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 mb-6 shadow-sm">2</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">We print and frame</h3>
<p className="text-slate-500 text-base leading-relaxed">Your selected photos are printed with museum-quality inks on durable, lightweight materials, ensuring vibrant, accurate colors that are built to last.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 md:order-2 w-full">
<div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-3xl bg-white shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center p-8 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
<div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl shadow-lg transform -rotate-6 z-10 border border-slate-100 flex items-center justify-center overflow-hidden">
<img alt="Tile preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div className="w-32 h-32 md:w-40 md:h-40 bg-slate-50 rounded-xl shadow-sm absolute transform rotate-3 right-1/4 bottom-1/4 border border-slate-100 opacity-60"></div>
</div>
</div>
<div className="flex-1 md:order-1">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 mb-6 shadow-sm">3</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Stick, arrange, admire</h3>
<p className="text-slate-500 text-base leading-relaxed">Peel the backing and stick them to your wall. Not quite right? Pull them off and move them around. No nails, no damage, no stress.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="reviews">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="flex justify-center gap-1 mb-8">
<iconify-icon className="text-xl text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-slate-900" icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-2xl md:text-4xl font-medium tracking-tight text-slate-900 mb-10 leading-tight">
                "I was skeptical about the adhesive, but these tiles are genuinely amazing. I've moved them three times to get the perfect grid, and my apartment walls are completely spotless."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<img alt="Sarah J." className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-slate-400" icon="solar:verified-check-bold"></iconify-icon>
                        Verified Buyer
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to transform your walls?</h2>
<p className="text-slate-400 mb-10 text-lg font-normal">Download the Sweetpix app or start creating your custom gallery on the web today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-white text-slate-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors inline-flex items-center justify-center" href="#">
                    Start Creating Now
                </a>
<a className="bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors inline-flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:apple-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Get the iOS App
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-semibold tracking-tighter text-lg text-slate-900">SWEETPIX</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact Support</a>
</div>
<div className="text-sm text-slate-400 font-normal">
                © 2024 Sweetpix. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
