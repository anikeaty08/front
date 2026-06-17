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
      

<header className="sticky z-50 border-black/[0.04] flex transition-all bg-white w-full h-20 border-b top-0 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] items-center">
<div className="lg:px-12 flex w-full max-w-7xl mr-auto ml-auto pr-50 pl-50 items-center justify-between">

<a className="text-2xl font-normal text-[#1A1A1A] tracking-tighter font-google-sans-flex" href="#">HIBO</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5F6F5F]">
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#">Home</a>
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#benefits">Benefits</a>
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#how-it-works">How It Works</a>
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#blog">Blog</a>
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#contact">Contact</a>
</nav>

<a className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl hover:bg-[#4A148C] shadow-sm hover:shadow-md hover:shadow-[#6A1B9A]/20 bg-rose-500 font-sans" href="#email-capture">
                Get the Free Guide
            </a>
</div>
</header>

<section className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp'}}>

<div className="bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent relative top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
<div className="max-w-2xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight font-google-sans-flex font-normal">
                    Say Goodbye to the Mid-Morning Slump – Discover the Secret to All-Day Energy!
                </h1>
<p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-google-sans-flex font-normal">
                    Learn How to Beat the Afternoon Crash and Feel Energized All Day Long with These Simple Tips.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-full hover:bg-[#4A148C] shadow-lg shadow-[#6A1B9A]/20 hover:shadow-xl hover:shadow-[#6A1B9A]/30 ring-1 ring-white/10 bg-rose-500 font-sans" href="#email-capture">
                        Get Your Free Guide to Beat the Slump!
                    </a>
</div>
<span className="block mt-4 text-sm text-white/60 font-medium font-sans">
                    No spam. Just energy-boosting tips.
                </span>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A] mb-6 font-google-sans-flex font-normal">
                    Do You Feel Constantly Drained?
                </h2>
<p className="text-lg text-[#5F6F5F] leading-relaxed font-sans">
                    Do you feel like you're constantly fighting fatigue? A poor diet, dehydration, and lack of sleep can cause those dreaded mid-morning slumps and afternoon crashes. But there's a way to break the cycle.
                </p>
</div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/[0.04] aspect-[4/3] w-full">
<img alt="Tired worker at desk" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-black/[0.02]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

<div className="bg-[#F7FAF7] p-6 lg:p-8 rounded-3xl shadow-sm shadow-black/[0.02] border border-black/[0.04] hover:shadow-md hover:shadow-black/[0.04] transition-all duration-300 flex flex-col items-start group">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative">
<img alt="Person drinking water" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl text-[#66BB6A]" icon="solar:cup-water-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1A1A1A] font-google-sans-flex font-normal">Stay Hydrated</h3>
</div>
<p className="text-base text-[#5F6F5F] leading-relaxed font-sans">
                        Start your day with a glass of water, and keep a water bottle on hand to stay hydrated throughout the day. Proper hydration can make a huge difference in how you feel.
                    </p>
</div>

<div className="bg-[#F7FAF7] p-6 lg:p-8 rounded-3xl shadow-sm shadow-black/[0.02] border border-black/[0.04] hover:shadow-md hover:shadow-black/[0.04] transition-all duration-300 flex flex-col items-start group">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative">
<img alt="Healthy superfoods" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl text-[#66BB6A]" icon="solar:apple-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1A1A1A] font-google-sans-flex font-normal">Eat Energizing Foods</h3>
</div>
<p className="text-base text-[#5F6F5F] leading-relaxed font-sans">
                        Reduce processed foods and sugars, and incorporate nutrient-dense superfoods into your meals to maintain stable energy levels.
                    </p>
</div>

<div className="bg-[#F7FAF7] p-6 lg:p-8 rounded-3xl shadow-sm shadow-black/[0.02] border border-black/[0.04] hover:shadow-md hover:shadow-black/[0.04] transition-all duration-300 flex flex-col items-start group">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative">
<img alt="Light exercise" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl text-[#66BB6A]" icon="solar:running-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1A1A1A] font-google-sans-flex font-normal">Exercise Regularly</h3>
</div>
<p className="text-base text-[#5F6F5F] leading-relaxed font-sans">
                        Short bursts of physical activity can help wake you up and get your blood flowing, helping you stay energized.
                    </p>
</div>
</div>

<div className="mt-20 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
<p className="text-lg font-medium text-[#1A1A1A] font-sans">
                    Want to discover more energy-boosting tips? Download our free guide with 5 simple strategies to beat the slump!
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-xl hover:bg-[#4A148C] shadow-lg shadow-[#6A1B9A]/20 hover:shadow-xl hover:shadow-[#6A1B9A]/30 bg-rose-500 font-sans" href="#email-capture">
                    Get the Free Guide
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F7FAF7] relative overflow-hidden" id="benefits">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#2E7D32]/5 aspect-[4/5] w-full lg:order-1 order-2">
<img alt="HIBO Energy Drink" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="ring-inset rounded-[2rem] ring-black/10 ring-1 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="lg:order-2 order-1">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#1A1A1A] mb-6 leading-tight font-google-sans-flex font-normal">
                    Supercharge Your Energy with HIBO!
                </h2>
<p className="text-lg text-[#5F6F5F] leading-relaxed mb-12 font-sans">
                    At HIBO, we understand how important it is to stay energized throughout the day. Our energy-boosting drink is packed with superfoods and hydrating ingredients, providing you with natural energy that lasts longer, helping you avoid those dreaded energy dips.
                </p>
<div className="flex flex-col gap-10">

<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-black/[0.04] flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl text-[#2E7D32]" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl tracking-tight text-[#1A1A1A] mb-2 font-google-sans-flex font-normal">Superfood Ingredients</h3>
<p className="text-base text-[#5F6F5F] leading-relaxed font-sans">
                                Packed with ingredients like spirulina, avocado, and matcha, HIBO helps support sustained energy and keeps your metabolism balanced.
                            </p>
</div>
</div>

<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-black/[0.04] flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl text-[#2E7D32]" icon="solar:droplets-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl tracking-tight text-[#1A1A1A] mb-2 font-google-sans-flex font-normal">Hydration Focus</h3>
<p className="text-base text-[#5F6F5F] leading-relaxed font-sans">
                                With every sip, you're hydrating your body and fueling your energy naturally—no more crashes from sugary drinks.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="email-capture">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
<div className="w-full max-w-[500px] bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/[0.04] border border-black/[0.06] relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A1B9A] to-[#4A148C]"></div>
<div className="text-center mb-8">
<h2 className="text-2xl sm:text-3xl tracking-tight text-[#1A1A1A] mb-3 font-google-sans-flex font-normal">
                        Get Your Free Guide to Beat the Slump!
                    </h2>
<p className="text-sm text-[#5F6F5F] font-sans">Enter your details below to receive instant access.</p>
</div>
<form className="flex flex-col gap-4">
<div>
<label className="sr-only font-sans" htmlFor="name">First Name</label>
<input className="w-full px-4 py-4 rounded-xl border border-black/10 bg-[#F7FAF7]/50 text-[#1A1A1A] placeholder-[#5F6F5F]/60 text-base focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]/20 focus:border-[#6A1B9A] focus:bg-white transition-all" id="name" placeholder="First Name" type="text"/>
</div>
<div>
<label className="sr-only font-sans" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-4 rounded-xl border border-black/10 bg-[#F7FAF7]/50 text-[#1A1A1A] placeholder-[#5F6F5F]/60 text-base focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]/20 focus:border-[#6A1B9A] focus:bg-white transition-all" id="email" placeholder="Email Address" required="" type="email"/>
</div>
<button className="w-full px-6 py-4 mt-2 text-base font-semibold text-white transition-all duration-300 rounded-xl hover:bg-[#4A148C] shadow-md shadow-[#6A1B9A]/10 hover:shadow-lg hover:shadow-[#6A1B9A]/20 active:scale-[0.98] bg-rose-500 font-sans" type="button">
                        Sign Up Now for Energy-Boosting Tips!
                    </button>
</form>
<div className="mt-6 flex items-center justify-center gap-1.5 text-xs font-medium text-[#5F6F5F]">
<iconify-icon className="text-sm" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="font-sans">We respect your privacy.</span>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-[#F7FAF7] border-t border-black/[0.04]">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center gap-6 text-center">
<div className="text-xl tracking-tighter text-[#1A1A1A] font-google-sans-flex font-normal">HIBO</div>
<div className="flex gap-6 text-sm font-medium text-[#5F6F5F]">
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-[#1A1A1A] transition-colors font-sans" href="#">Terms</a>
</div>
<div className="text-sm text-[#5F6F5F] font-sans">
                © 2026 HIBO Energy. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
