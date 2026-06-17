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



        lucide.createIcons();
    
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
      

<nav className="bg-black text-white w-full z-50 transition-all duration-300">
<div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl tracking-tighter font-medium flex items-center gap-2" href="#">
<span className="text-white">amazon</span>
<span className="text-zinc-500 text-sm font-normal">premier</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
<a className="hover:text-white transition-colors" href="#">Audio</a>
<a className="hover:text-white transition-colors" href="#">Smart Home</a>
<a className="hover:text-white transition-colors" href="#">Spatial Labs</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>

<div className="flex items-center gap-6">
<button className="text-zinc-300 hover:text-white">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="text-zinc-300 hover:text-white relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>
<button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                    Sign In
                </button>
</div>
</div>
</nav>

<div className="bg-black text-white border-t border-zinc-800">
<div className="max-w-5xl mx-auto py-6 px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
<p className="text-lg font-normal text-zinc-200">
                Prime Exclusive: Experience high-fidelity audio with 20% off for a limited time.
            </p>
<button className="bg-[#FF4500] hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                Claim offer
            </button>
</div>
</div>

<header className="relative w-full h-[90vh] bg-zinc-100 overflow-hidden flex flex-col justify-center">

<img alt="Modern Living Room" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/40"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
<h1 className="text-[12rem] md:text-[20rem] font-normal tracking-tighter leading-none text-black mix-blend-overlay opacity-80 select-none">
                STUDIO
            </h1>
</div>

<div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 h-full flex flex-col justify-between py-12 md:py-20">

<div></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

<div className="max-w-md">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 leading-[1.1]">
                        Immersive sound,<br/>
                        reinvented space.
                    </h2>
</div>

<div className="max-w-md md:ml-auto">
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-zinc-900 mb-4">
                        Introducing Echo Studio. <br/>
                        Five speakers, Dolby Atmos, <br/>
                        lossless clarity.
                    </h3>
<div className="flex items-center gap-4 mt-8">
<button className="bg-white hover:bg-zinc-50 text-black px-6 py-3 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                            Buy Now
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<span className="text-lg font-medium tracking-tight">$199.99</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white py-24 border-b border-zinc-100">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">

<div className="flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
<i className="w-6 h-6" data-lucide="waves"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-3">Spatial Audio</h4>
<p className="text-lg text-zinc-500 leading-relaxed">
                            Automatically senses the acoustics of your space and fine-tunes playback for optimal sound.
                        </p>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-3">Voice Control</h4>
<p className="text-lg text-zinc-500 leading-relaxed">
                            Built-in Alexa hub allows for seamless control of your smart home devices with just your voice.
                        </p>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-3">Lossless High-Res</h4>
<p className="text-lg text-zinc-500 leading-relaxed">
                            Supports 24-bit/192kHz formats for studio-quality fidelity streaming from Amazon Music HD.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7 flex flex-col gap-16">
<div>
<h3 className="text-3xl font-normal tracking-tight text-zinc-900 mb-8">Product Details</h3>
<div className="prose prose-lg text-zinc-500">
<p className="mb-6">
                            Our best-sounding smart speaker ever. Echo Studio creates an immersive, 3-dimensional soundscape, wrapping you in studio-quality audio from every direction. You don't just hear the music, you feel it.
                        </p>
<ul className="space-y-4 list-none pl-0">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span>5 internal speakers for powerful bass and crisp highs.</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span>Dolby Atmos processing technology.</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span>Privacy built-in with microphone off button.</span>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<img alt="Detail 1" className="rounded-2xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Detail 2" className="rounded-2xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="border-t border-zinc-200 pt-12">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-normal tracking-tight">Customer Reviews</h3>
<div className="flex items-center gap-1 text-yellow-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star-half"></i>
<span className="text-zinc-500 text-lg ml-2 font-medium">4.8</span>
</div>
</div>
<div className="space-y-8">

<div className="bg-white p-6 rounded-2xl shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-xs font-semibold">JD</div>
<span className="text-sm font-medium">John Doe</span>
<span className="text-sm text-zinc-400">Verified Purchase</span>
</div>
<h5 className="font-medium mb-2">Incredible soundstage</h5>
<p className="text-zinc-500 text-lg leading-relaxed">
                                 The audio separation is unmatched at this price point. It looks sleek on my media console and the setup was instant.
                             </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="sticky top-24 bg-white rounded-3xl p-8 shadow-xl border border-zinc-100">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Echo Studio</h2>
<p className="text-zinc-500 text-lg mt-1">Charcoal Fabric</p>
</div>
<i className="w-6 h-6 text-zinc-300 hover:text-red-500 cursor-pointer transition-colors" data-lucide="heart"></i>
</div>
<div className="mb-8">
<span className="text-5xl font-medium tracking-tight">$199<span className="text-2xl align-top">99</span></span>
<div className="flex items-center gap-2 mt-2 text-blue-600 font-medium">
<i className="w-4 h-4" data-lucide="truck"></i>
<span>Free One-Day Delivery</span>
</div>
<p className="text-zinc-400 text-sm mt-1">with Amazon Prime</p>
</div>
<div className="space-y-4 mb-8">
<div className="p-4 border border-zinc-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all flex justify-between items-center group">
<span className="font-medium group-hover:text-blue-700">Device Only</span>
<span className="text-zinc-500 group-hover:text-blue-600">$199.99</span>
</div>
<div className="p-4 border border-zinc-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all flex justify-between items-center group">
<span className="font-medium group-hover:text-blue-700">with Smart Bulb</span>
<span className="text-zinc-500 group-hover:text-blue-600">+$10.00</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                            Add to Cart
                        </button>
<button className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 py-4 rounded-full text-lg font-medium transition-colors">
                            Buy Now
                        </button>
</div>
<div className="mt-6 text-center">
<p className="text-sm text-zinc-400 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                            Secure transaction
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-zinc-400 py-20 border-t border-zinc-900">
<div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-sm tracking-tighter">
                    amzn
                </div>
<span className="text-white text-lg font-medium tracking-tight">Amazon Design</span>
</div>
<div className="flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
<p className="text-sm text-zinc-600">
                © 1996-2024, Amazon.com, Inc. or its affiliates
            </p>
</div>
</footer>


    </>
  );
}
