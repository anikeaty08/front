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
      

<header className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#2C2420]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-serif text-xl tracking-[0.15em] text-[#2C2420] uppercase font-medium" href="#">Conte</a>
<nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide text-[#2C2420]/80">
<a className="hover:text-[#2C2420] transition-colors" href="#problem">The Problem</a>
<a className="hover:text-[#2C2420] transition-colors" href="#difference">Difference</a>
<a className="hover:text-[#2C2420] transition-colors" href="#story">Our Story</a>
</nav>
<a className="bg-[#2C2420] text-[#FAF9F6] text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#4A3B32] transition-colors duration-300" href="#shop">
                Shop
            </a>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Rich espresso extraction" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FAF9F6]">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 drop-shadow-lg fade-in-up">
                Why does home espresso never taste quite right?
            </h1>
<p className="text-lg md:text-xl font-light text-[#FAF9F6]/90 max-w-2xl mx-auto mb-8 tracking-wide fade-in-up delay-100">
                You want rich, bold espresso — but at home it often tastes weak, bitter, or inconsistent.
            </p>
<div className="space-y-4 md:space-y-0 fade-in-up delay-200">
<p className="italic font-serif text-lg mb-8 text-[#FAF9F6]/80">You love espresso. You just don’t love how hard it is to get it right.</p>
<a className="inline-block bg-[#FAF9F6] text-[#2C2420] text-sm md:text-base px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white transition-all transform hover:scale-105 shadow-xl" href="#solution">
                    Discover Better Espresso
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#EBE7DF] px-6" id="problem">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl tracking-tight mb-12 text-[#2C2420] font-medium">You’re Not Alone.</h2>
<div className="grid md:grid-cols-2 gap-8 text-left mb-16">
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#2C2420] opacity-70 shrink-0 mt-1" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-2">Rushed Mornings</h3>
<p className="text-[#2C2420]/70 text-sm leading-relaxed">The delicate process of dialing in a shot ruins your morning flow.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#2C2420] opacity-70 shrink-0 mt-1" height="24" icon="solar:danger-circle-linear" width="24"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-2">Inconsistent Flavor</h3>
<p className="text-[#2C2420]/70 text-sm leading-relaxed">One cup is perfect, the next is sour. Consistency feels impossible.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#2C2420] opacity-70 shrink-0 mt-1" height="24" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-2">Too Complicated</h3>
<p className="text-[#2C2420]/70 text-sm leading-relaxed">You shouldn't need a barista certification to enjoy your kitchen.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#2C2420] opacity-70 shrink-0 mt-1" height="24" icon="solar:cup-first-linear" width="24"></iconify-icon>
<div>
<h3 className="font-serif text-xl mb-2">Bitter or Flat</h3>
<p className="text-[#2C2420]/70 text-sm leading-relaxed">Chasing the "sweet spot" often leads to wasted beans and frustration.</p>
</div>
</div>
</div>
<div className="relative py-8">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-[#2C2420]/10"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-[#EBE7DF] px-4 text-[#2C2420]/60 text-sm tracking-widest uppercase">The Reality</span>
</div>
</div>
<p className="text-xl md:text-2xl font-serif italic text-[#2C2420]/90 mt-6">
                "You want café-quality espresso — without turning your kitchen into one."
            </p>
</div>
</section>

<section className="py-24 bg-[#FAF9F6] px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-center text-3xl md:text-4xl tracking-tight mb-16 font-medium">What You Really Want</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-[#F0EEE6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E6E2D6] transition-colors">
<iconify-icon className="text-[#2C2420]" icon="solar:cup-hot-linear" width="32"></iconify-icon>
</div>
<p className="font-serif text-lg tracking-tight">Bold, Smooth Espresso</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-[#F0EEE6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E6E2D6] transition-colors">
<iconify-icon className="text-[#2C2420]" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<p className="font-serif text-lg tracking-tight">Consistent Results</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-[#F0EEE6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E6E2D6] transition-colors">
<iconify-icon className="text-[#2C2420]" icon="solar:heart-linear" width="32"></iconify-icon>
</div>
<p className="font-serif text-lg tracking-tight">A Simple Ritual</p>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-[#F0EEE6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E6E2D6] transition-colors">
<iconify-icon className="text-[#2C2420]" icon="solar:flag-linear" width="32"></iconify-icon>
</div>
<p className="font-serif text-lg tracking-tight">Italian Experience</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#2C2420] text-[#FAF9F6] px-6 text-center" id="solution">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 font-medium">Better Espresso at Home<br/><span className="text-[#FAF9F6]/50 italic font-serif">Is Possible.</span></h2>
<p className="text-lg md:text-xl font-light text-[#FAF9F6]/80 max-w-xl mx-auto">
                When quality, process, and expertise come together, great espresso doesn’t have to be complicated.
            </p>
</div>
</section>

<section className="py-24 bg-[#FAF9F6] px-6 overflow-hidden">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-[#EBE7DF] rounded-2xl transform rotate-3 scale-95 z-0"></div>
<img alt="Conte Coffee Package Lifestyle" className="relative z-10 w-full rounded-xl shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<span className="text-xs uppercase tracking-[0.2em] text-[#2C2420]/60 mb-4 block">The Solution</span>
<h2 className="text-4xl md:text-6xl tracking-tight mb-8 font-medium">Meet Conte Coffee</h2>
<div className="prose prose-lg text-[#2C2420]/80 mb-10">
<p className="mb-4">Conte Coffee bridges the gap between café-quality espresso and everyday home routines.</p>
<p className="mb-4">Inspired by Italian espresso culture. Crafted for modern life. Designed for people who care about flavor but value simplicity.</p>
</div>
<a className="inline-flex items-center justify-center px-8 py-3 border border-[#2C2420] rounded-full text-[#2C2420] text-sm tracking-wide hover:bg-[#2C2420] hover:text-[#FAF9F6] transition-all duration-300" href="#shop">
                    Explore the Conte Difference
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF] px-6" id="difference">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="flex flex-col gap-4">
<iconify-icon className="text-[#2C2420] mb-2" icon="solar:global-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif tracking-tight">Thoughtful Sourcing</h3>
<p className="text-sm text-[#2C2420]/70 leading-relaxed">
                        We partner directly with heritage farms to secure beans that are forgiving yet flavorful, perfect for home machines.
                    </p>
</div>

<div className="flex flex-col gap-4">
<iconify-icon className="text-[#2C2420] mb-2" icon="solar:tea-cup-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif tracking-tight">Balanced Profiles</h3>
<p className="text-sm text-[#2C2420]/70 leading-relaxed">
                        Roasts developed specifically to minimize acidity and bitterness, ensuring a rich crema every time.
                    </p>
</div>

<div className="flex flex-col gap-4">
<iconify-icon className="text-[#2C2420] mb-2" icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif tracking-tight">Consistency Simplified</h3>
<p className="text-sm text-[#2C2420]/70 leading-relaxed">
                        Precision blending means you don't have to change your grind settings every morning. It just works.
                    </p>
</div>

<div className="flex flex-col gap-4">
<iconify-icon className="text-[#2C2420] mb-2" icon="solar:sun-2-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif tracking-tight">Everyday Rituals</h3>
<p className="text-sm text-[#2C2420]/70 leading-relaxed">
                        Coffee shouldn't be a science experiment. We put the joy back into your morning moment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EB] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-4 mb-12">
<div className="flex text-[#2C2420]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-sm uppercase tracking-widest text-[#2C2420]/60">Loved by home baristas</span>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-white p-8 rounded-2xl shadow-sm border border-[#2C2420]/5 flex flex-col justify-between">
<p className="font-serif text-xl md:text-2xl leading-relaxed text-[#2C2420] mb-6">"Finally found espresso that tastes like a café at home. The crema is unbelievable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#EBE7DF] rounded-full flex items-center justify-center text-xs font-bold text-[#2C2420]">EL</div>
<div>
<p className="text-sm font-semibold">Elena R.</p>
<p className="text-xs text-[#2C2420]/50">Verified Buyer</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-white p-8 rounded-2xl shadow-sm border border-[#2C2420]/5 flex flex-col justify-between">
<p className="font-serif text-xl md:text-2xl leading-relaxed text-[#2C2420] mb-6">"No more bitter mornings. I was about to sell my machine until I tried the Classico blend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#EBE7DF] rounded-full flex items-center justify-center text-xs font-bold text-[#2C2420]">MK</div>
<div>
<p className="text-sm font-semibold">Marcus K.</p>
<p className="text-xs text-[#2C2420]/50">Verified Buyer</p>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-white p-8 rounded-2xl shadow-sm border border-[#2C2420]/5 flex flex-col justify-between">
<p className="font-serif text-xl md:text-2xl leading-relaxed text-[#2C2420] mb-6">"I stopped chasing brands. This just works. Consistent, chocolatey, and smooth."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#EBE7DF] rounded-full flex items-center justify-center text-xs font-bold text-[#2C2420]">SJ</div>
<div>
<p className="text-sm font-semibold">Sarah J.</p>
<p className="text-xs text-[#2C2420]/50">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAF9F6] text-center border-t border-[#2C2420]/5" id="story">
<div className="max-w-2xl mx-auto">
<div className="flex justify-center gap-1 mb-8">
<div className="w-1 h-6 bg-[#009246]"></div> 
<div className="w-1 h-6 bg-[#F1F2F1]"></div> 
<div className="w-1 h-6 bg-[#CE2B37]"></div> 
</div>
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium">Rooted in Tradition. Designed for Today.</h2>
<p className="text-lg text-[#2C2420]/70 font-light leading-relaxed">
                Proud importer of Italy’s finest coffee. Inspired by generations of espresso craftsmanship — refined for the modern home kitchen.
            </p>
</div>
</section>

<section className="py-32 px-6 bg-white flex items-center justify-center">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs uppercase tracking-[0.2em] text-[#2C2420]/40 mb-8 block">Our Promise</span>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#2C2420] leading-tight">
                "Conte Coffee is here to make great espresso feel simple, satisfying, and part of your everyday ritual."
            </h2>
</div>
</section>

<section className="py-32 bg-[#1A1614] text-[#FAF9F6] px-6 relative overflow-hidden" id="shop">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A3B32] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-6xl tracking-tight mb-10 font-medium">Learn What Better Espresso Feels Like</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto bg-[#FAF9F6] text-[#1A1614] px-10 py-5 rounded-full text-base font-medium tracking-wide hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
                    Shop Conte Coffee
                </button>
<button className="w-full sm:w-auto border border-[#FAF9F6]/30 text-[#FAF9F6] px-10 py-5 rounded-full text-base font-medium tracking-wide hover:bg-[#FAF9F6]/10 transition-all">
                    Talk to a Coffee Specialist
                </button>
</div>
<p className="mt-8 text-sm text-[#FAF9F6]/40">Free shipping on orders over $50 • 30-Day Taste Guarantee</p>
</div>
</section>

<footer className="bg-[#151210] text-[#FAF9F6]/60 py-16 px-6 border-t border-[#FAF9F6]/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-sm">
<a className="font-serif text-2xl tracking-widest text-[#FAF9F6] mb-6 block" href="#">CONTE</a>
<div className="flex items-start gap-4 p-4 bg-[#FAF9F6]/5 rounded-xl border border-[#FAF9F6]/5">
<iconify-icon className="text-[#FAF9F6] mt-1" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
<div>
<p className="text-[#FAF9F6] text-sm mb-1 font-medium">Curious or confused?</p>
<p className="text-xs leading-relaxed">Our Coffee Specialists are happy to help you find your perfect match.</p>
</div>
</div>
</div>
<div className="flex gap-16 text-sm">
<div className="flex flex-col gap-4">
<h4 className="text-[#FAF9F6] font-medium tracking-wide">Shop</h4>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Classico Blend</a>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Decaf</a>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Sets</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[#FAF9F6] font-medium tracking-wide">Company</h4>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Our Story</a>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Brew Guides</a>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#FAF9F6]/5 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
<p>© 2024 Conte Coffee. Crafted for Home.</p>
<div className="flex gap-6">
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#FAF9F6] transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 w-14 h-14 bg-[#2C2420] text-[#FAF9F6] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#4A3B32] transition-colors z-50">
<iconify-icon icon="solar:chat-square-call-linear" width="24"></iconify-icon>
</button>

    </>
  );
}
