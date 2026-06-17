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
      

<div className="bg-[#7bcbc6] text-white text-xs tracking-widest uppercase py-3 text-center font-medium">
        Bespoke Journeys • For Families • Couples • Safari • Worldwide
    </div>

<nav className="bg-white py-6 border-b border-gray-100 sticky top-0 z-50 opacity-95 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

<div className="w-32">
<div className="font-serif text-3xl text-[#6bbdbd] leading-none tracking-tighter">
                    liv <span className="text-sm align-middle italic text-gray-400">&amp;</span><br/>travel
                </div>
</div>

<div className="hidden md:flex space-x-10 text-xs tracking-[0.2em] font-medium text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#">OUR DESTINATIONS</a>
<a className="hover:text-black transition-colors duration-300" href="#">JOURNEYS</a>
<a className="hover:text-black transition-colors duration-300" href="#">SERVICES</a>
<a className="text-black border-b border-black pb-1" href="#">WHO WE ARE</a>
<a className="hover:text-black transition-colors duration-300" href="#">INSPIRATION</a>
</div>

<div>
<a className="border border-gray-300 px-8 py-3 text-xs tracking-[0.15em] hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase font-medium" href="#contact">
                    Enquire
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Boat" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0f4c5c]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f4c5c]/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center text-white max-w-4xl px-6">
<h1 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight mb-6">
                curators of the <br/> <span className="italic">extraordinary.</span>
</h1>
<p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-90 mb-10">
                We don't just plan trips. We craft personal legacies through the lens of discovery, tailored specifically for those who seek depth over distance.
            </p>
<div className="flex justify-center">
<a className="border border-white/60 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0f4c5c] transition-all duration-300 backdrop-blur-sm" href="#story">
                    Read Our Story
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#faf9f6]" id="story">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-8">Our Philosophy</div>
<h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-10 tracking-tight leading-tight">
                travel, perfected — <span className="italic font-light">personally</span>
</h2>
<p className="text-lg leading-relaxed text-gray-500 font-light mb-8">
                Luxury is no longer defined by the thread count of your sheets, but by the rarity of the experience. It is defined by relevance, intention, and the feeling of being truly understood.
            </p>
<p className="text-lg leading-relaxed text-gray-500 font-light">
                We design journeys for those who understand that true luxury is time spent meaningfully — with family, in reflection, or in pursuit of something extraordinary. This isn't travel planning; it's curation, insight, and access, shaped entirely around you.
            </p>
<div className="mt-16">
<img alt="Founder signature" className="h-24 mx-auto opacity-60 grayscale" src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-6">Why Choose Us</div>
<h2 className="font-serif text-4xl text-gray-900 tracking-tight">
                    designed, <span className="italic">differently</span>
</h2>
<p className="mt-4 text-gray-500 italic">Every journey begins with intent — not a destination.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl mx-auto">

<div className="group">
<h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-[#6bbdbd] transition-colors">unrivaled access</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                        We don't optimize for speed. We maintain private collections, invite-only properties, and experiences reserved for those who know who to ask. We hold the keys.
                    </p>
</div>

<div className="group">
<h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-[#6bbdbd] transition-colors">boutique by design</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                        A deliberately small client roster ensures every journey receives the attention, nuance, and craft it deserves. You are never just a booking reference number.
                    </p>
</div>

<div className="group">
<h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-[#6bbdbd] transition-colors">intuitive luxury</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                        Nothing feels forced or formulaic. Every detail anticipates your needs before you articulate them. We listen deeply to understand your preferences.
                    </p>
</div>

<div className="group">
<h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-[#6bbdbd] transition-colors">global guardianship</h3>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                        From departure to return, every element is managed seamlessly and discretely. We provide 24/7 support across all time zones.
                    </p>
</div>
</div>
</div>
</section>

<div className="h-[60vh] w-full relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&amp;w=3000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<section className="py-24 md:py-32 bg-[#faf9f6]" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-6">Get In Touch</div>
<h2 className="font-serif text-5xl text-gray-900 tracking-tight mb-6">
                    begin your <span className="italic">journey.</span>
</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                    Whether you are at the very beginning of refining an existing vision, we invite you to start a conversation. Every journey begins with understanding.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-4 lg:col-start-2 space-y-12">
<div>
<h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Visit Us</h4>
<p className="font-serif text-xl text-gray-800">
                            142 Sloane Avenue,<br/>
                            Kensington, London,<br/>
                            SW3 3AX, United Kingdom
                        </p>
</div>
<div>
<h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Contact</h4>
<p className="font-serif text-xl text-gray-800 hover:text-[#6bbdbd] cursor-pointer transition-colors">
                            hello@livandtravel.com
                        </p>
<p className="font-serif text-xl text-gray-800 mt-2">
                            +44 (0) 20 7123 4567
                        </p>
</div>
<div>
<h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Social</h4>
<div className="flex space-x-6">
<i className="w-5 h-5 text-gray-800 hover:text-[#6bbdbd] cursor-pointer" data-lucide="instagram"></i>
<i className="w-5 h-5 text-gray-800 hover:text-[#6bbdbd] cursor-pointer" data-lucide="facebook"></i>
<i className="w-5 h-5 text-gray-800 hover:text-[#6bbdbd] cursor-pointer" data-lucide="linkedin"></i>
</div>
</div>
</div>

<div className="lg:col-span-6 bg-white p-10 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-gray-500">First Name</label>
<input className="w-full border-b border-gray-200 py-3 text-lg font-serif text-gray-900 focus:outline-none focus:border-[#6bbdbd] bg-transparent transition-colors placeholder-gray-300" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-gray-500">Last Name</label>
<input className="w-full border-b border-gray-200 py-3 text-lg font-serif text-gray-900 focus:outline-none focus:border-[#6bbdbd] bg-transparent transition-colors placeholder-gray-300" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-gray-500">Email Address</label>
<input className="w-full border-b border-gray-200 py-3 text-lg font-serif text-gray-900 focus:outline-none focus:border-[#6bbdbd] bg-transparent transition-colors placeholder-gray-300" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-gray-500">Tell us about your plans</label>
<textarea className="w-full border-b border-gray-200 py-3 text-lg font-serif text-gray-900 focus:outline-none focus:border-[#6bbdbd] bg-transparent transition-colors placeholder-gray-300 resize-none" placeholder="Where would you like to go?" rows="4"></textarea>
</div>
<div className="pt-6">
<button className="w-full bg-[#7bcbc6] text-white py-4 px-8 text-xs tracking-[0.2em] uppercase hover:bg-[#65b3b3] transition-colors duration-300 font-medium" type="button">
                                Send Message
                            </button>
</div>
<p className="text-center text-xs text-gray-400 mt-4 tracking-wide">
                            DISCREET. PERSONAL. NO OBLIGATION.
                        </p>
</form>
</div>
</div>
</div>
</section>

<div className="bg-[#7bcbc6] py-12 border-t border-white/20">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-80 grayscale mix-blend-multiply">

<div className="text-white font-serif italic text-xl">IATA</div>
<div className="text-white font-serif uppercase tracking-widest text-sm pt-1">Traveller Made</div>
<div className="text-white font-serif uppercase tracking-widest text-sm pt-1">Virtuoso</div>
<div className="text-white font-serif italic text-xl">Hillingdon</div>
</div>
</div>

<footer className="bg-[#0b2326] text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-16">

<div className="lg:col-span-1">
<div className="font-serif text-2xl text-[#6bbdbd] leading-none mb-6">
                        liv <span className="text-sm align-middle italic text-gray-500">&amp;</span><br/>travel
                    </div>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                        Bespoke travel experiences, thoughtfully crafted for those who value meaning, discretion, and exceptional service.
                    </p>
<div className="flex space-x-4">
<i className="w-4 h-4 text-gray-500 hover:text-white transition-colors" data-lucide="facebook"></i>
<i className="w-4 h-4 text-gray-500 hover:text-white transition-colors" data-lucide="instagram"></i>
<i className="w-4 h-4 text-gray-500 hover:text-white transition-colors" data-lucide="twitter"></i>
</div>
</div>

<div>
<h5 className="text-xs uppercase tracking-widest text-[#6bbdbd] mb-6">Our Destinations</h5>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Africa</a></li>
<li><a className="hover:text-white transition-colors" href="#">Asia</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Arctic</a></li>
<li><a className="hover:text-white transition-colors" href="#">Antarctica</a></li>
<li><a className="hover:text-white transition-colors" href="#">Indian Ocean</a></li>
<li><a className="hover:text-white transition-colors" href="#">Middle East</a></li>
</ul>
</div>

<div>
<h5 className="text-xs uppercase tracking-widest text-[#6bbdbd] mb-6">Journeys</h5>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Ultra-Luxury Travel</a></li>
<li><a className="hover:text-white transition-colors" href="#">Multi-Gen Family</a></li>
<li><a className="hover:text-white transition-colors" href="#">Honeymoons</a></li>
<li><a className="hover:text-white transition-colors" href="#">Safari &amp; Sea</a></li>
<li><a className="hover:text-white transition-colors" href="#">Solo Adventure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Luxury Wellness</a></li>
</ul>
</div>

<div>
<h5 className="text-xs uppercase tracking-widest text-white mb-6">Sign up for travel inspiration</h5>
<div className="flex flex-col space-y-3">
<input className="bg-[#153438] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#6bbdbd] placeholder-gray-600" placeholder="Email Address" type="email"/>
<button className="bg-[#6bbdbd] text-[#0b2326] px-4 py-3 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors">
                            Subscribe
                        </button>
</div>
<p className="text-[10px] text-gray-600 mt-4 leading-relaxed">
                        By signing up you agree to receive our updates. Unsubscribe at any time.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider font-medium">
<div className="mb-4 md:mb-0">
                    © 2024 Liv &amp; Travel Ltd | All Rights Reserved
                </div>
<div className="flex space-x-8">
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
<div className="mt-4 md:mt-0 flex items-center">
<div className="flex text-[#6bbdbd]">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="ml-2">5.0 Google Reviews</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
