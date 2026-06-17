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
      

<header className="relative h-screen min-h-[800px] w-full overflow-hidden text-white">

<div className="absolute inset-0">
<img alt="Luxury Hotel Suite" className="h-full w-full object-cover brightness-75" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0E300E]/40"></div>
</div>

<div className="relative z-10 mx-auto flex max-w-7xl items-start justify-between px-6 pt-8 md:pt-12">
<div className="text-base md:text-lg font-medium tracking-wide text-[#E6E6FA]">New Delhi</div>
<div className="flex flex-col items-center">
<span className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#E6E6FA]/90">Walia</span>
<span className="text-base md:text-xl tracking-[0.1em] uppercase font-display mt-1 text-[#E6E6FA]">Hospitality</span>
</div>
<div className="text-base md:text-lg font-medium tracking-wide text-right hidden md:block text-[#E6E6FA]">Luxury Business Hotel</div>
</div>

<div className="relative z-10 flex h-full flex-col justify-center px-6 pb-20">
<h1 className="mx-auto text-center font-display text-7xl md:text-9xl tracking-tight leading-none text-white drop-shadow-lg">
<span className="block">WALIA</span>
<span className="block ml-[0.5em] text-[#E6E6FA]">SUITES</span>
</h1>
<div className="absolute bottom-12 right-6 md:right-12">
<a className="group flex items-center gap-2 text-base md:text-lg font-medium tracking-widest uppercase text-[#E6E6FA] hover:text-[#A4863D] transition-colors" href="#">
                    Book Your Stay
                    <i className="h-5 w-5 transition-transform group-hover:translate-x-1 stroke-[1.5]" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</header>

<section className="bg-[#E6E6FA] px-6 py-20 md:py-32">
<div className="mx-auto max-w-7xl">
<h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tight uppercase text-[#333333] mb-20 md:max-w-4xl">
                Luxury Suites <br/>
                For People <br/>
<span className="text-[#A4863D]">On The Go</span>
</h2>
</div>
</section>

<section className="bg-[#0E300E] text-[#E6E6FA] px-6 py-20">
<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#E6E6FA]/80">
                What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch.
            </p>
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#E6E6FA]/80">
                What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition.
            </p>
</div>
</section>

<section className="bg-[#E6E6FA] px-6 py-24 md:py-32">
<div className="mx-auto max-w-7xl">
<h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase mb-16 text-center md:text-left text-[#333333]">Rooms &amp; Suites</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col border border-[#333333]/20 hover:border-[#A4863D] transition-colors bg-[#E6E6FA]">
<div className="overflow-hidden aspect-[4/3]">
<img alt="Luxury Room" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-6">
<p className="text-sm font-semibold tracking-widest uppercase text-[#333333]/60">
                                Max 3 Guests /<br/>1 Queen or 2<br/>Single Beds
                            </p>
<div className="flex gap-2 text-[#A4863D]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bed-double"></i>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="armchair"></i>
</div>
</div>
<h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-8 text-[#333333]">Luxury Room</h3>
<div className="mt-auto pt-6 border-t border-[#333333]/10 flex justify-between items-center text-sm tracking-widest uppercase text-[#333333]/70 group-hover:text-[#A4863D] transition-colors">
                            From ₹20,000/Night
                            <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="group flex flex-col border border-[#333333]/20 hover:border-[#A4863D] transition-colors bg-[#E6E6FA]">
<div className="overflow-hidden aspect-[4/3]">
<img alt="Deluxe Room" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-6">
<p className="text-sm font-semibold tracking-widest uppercase text-[#333333]/60">
                                Max 3 Guests /<br/>1 Queen or 2<br/>Single Beds
                            </p>
<div className="flex gap-2 text-[#A4863D]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bed-double"></i>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="armchair"></i>
</div>
</div>
<h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-8 text-[#333333]">Deluxe Room</h3>
<div className="mt-auto pt-6 border-t border-[#333333]/10 flex justify-between items-center text-sm tracking-widest uppercase text-[#333333]/70 group-hover:text-[#A4863D] transition-colors">
                            From ₹25,000/Night
                            <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="group flex flex-col border border-[#333333]/20 hover:border-[#A4863D] transition-colors bg-[#E6E6FA]">
<div className="overflow-hidden aspect-[4/3]">
<img alt="Studio Suite" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-6">
<p className="text-sm font-semibold tracking-widest uppercase text-[#333333]/60">
                                Max 3 Guests /<br/>1 Queen or<br/>King Bed
                            </p>
<div className="flex gap-2 text-[#A4863D]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bed-double"></i>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bath"></i>
</div>
</div>
<h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-8 text-[#333333]">Studio Suite</h3>
<div className="mt-auto pt-6 border-t border-[#333333]/10 flex justify-between items-center text-sm tracking-widest uppercase text-[#333333]/70 group-hover:text-[#A4863D] transition-colors">
                            From ₹30,000/Night
                            <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 bg-[#0E300E] overflow-hidden">
<div className="absolute inset-0">
<img alt="Luxury Room Detail" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E300E] via-transparent to-[#0E300E]"></div>
</div>
<div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-[#E6E6FA]">
<h2 className="font-display text-5xl md:text-7xl tracking-tight uppercase mb-8">Luxury Room</h2>
<p className="text-xl md:text-2xl font-light text-[#E6E6FA]/80 max-w-2xl mx-auto leading-relaxed">
                Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.
            </p>
</div>
</section>

<div className="bg-[#E6E6FA] py-24 px-6 text-center">
<p className="text-xl md:text-2xl text-[#333333] max-w-2xl mx-auto leading-relaxed font-light">
            Showcase the best your property has to offer by highlighting one of your accommodations.
        </p>
</div>

<section className="bg-[#0E300E] px-6 py-20">
<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6">
<div className="aspect-[4/3] w-full overflow-hidden bg-[#333333]">
<img alt="Room Interior" className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[#E6E6FA]/70 text-lg md:text-xl font-light leading-relaxed">
                    An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
                </p>
</div>
<div className="space-y-6">
<div className="aspect-[4/3] w-full overflow-hidden bg-[#333333]">
<img alt="Lounge Area" className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[#E6E6FA]/70 text-lg md:text-xl font-light leading-relaxed">
                    An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
                </p>
</div>
</div>
</section>

<section className="bg-[#E6E6FA] px-6 py-24 md:py-32">
<div className="mx-auto max-w-7xl">
<h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase mb-16 text-[#333333]">Special Offers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#A4863D]/10 p-6 md:p-8 flex flex-col gap-6 border border-[#A4863D]/20">
<div className="aspect-square overflow-hidden bg-[#333333]/10">
<img alt="Dining" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide mb-3 text-[#333333]">Dine &amp; Stay Package</h3>
<p className="text-[#333333]/80 font-light text-lg leading-relaxed">
                            List your offers, promos or special membership privileges and perks here to entice people to book your property.
                        </p>
</div>
</div>

<div className="bg-[#A4863D]/10 p-6 md:p-8 flex flex-col gap-6 border border-[#A4863D]/20">
<div className="aspect-square overflow-hidden bg-[#333333]/10">
<img alt="City Tour" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide mb-3 text-[#333333]">City Tour Package</h3>
<p className="text-[#333333]/80 font-light text-lg leading-relaxed">
                            List your offers, promos or special membership privileges and perks here to entice people to book your property.
                        </p>
</div>
</div>

<div className="bg-[#A4863D]/10 p-6 md:p-8 flex flex-col gap-6 border border-[#A4863D]/20">
<div className="aspect-square overflow-hidden bg-[#333333]/10">
<img alt="Hotel Interior" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=2025&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide mb-3 text-[#333333]">Hotel &amp; Flight Package</h3>
<p className="text-[#333333]/80 font-light text-lg leading-relaxed">
                            List your offers, promos or special membership privileges and perks here to entice people to book your property.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0E300E] text-[#E6E6FA] px-6 py-24 md:py-32 border-b border-[#A4863D]/20">
<div className="mx-auto max-w-7xl">
<h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase mb-16 leading-tight">
                What Our<br/>Guests Say
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="border border-[#A4863D]/30 p-8 md:p-12 hover:border-[#A4863D] transition-colors">
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#E6E6FA]/80 mb-8">
                        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                    </p>
<p className="text-sm tracking-widest uppercase text-[#A4863D]">— Charu Gupta</p>
</div>
<div className="border border-[#A4863D]/30 p-8 md:p-12 hover:border-[#A4863D] transition-colors">
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#E6E6FA]/80 mb-8">
                        "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
                    </p>
<p className="text-sm tracking-widest uppercase text-[#A4863D]">— Neel Thapar</p>
</div>
<div className="border border-[#A4863D]/30 p-8 md:p-12 hover:border-[#A4863D] transition-colors">
<p className="text-xl md:text-2xl font-light leading-relaxed text-[#E6E6FA]/80 mb-8">
                        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                    </p>
<p className="text-sm tracking-widest uppercase text-[#A4863D]">— Jasmeet Kaur</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0E300E] text-[#E6E6FA] px-6 py-24 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mx-auto max-w-7xl relative z-10">
<div className="flex flex-col items-center mb-20 text-[#E6E6FA]">
<span className="text-sm tracking-[0.2em] uppercase opacity-80 text-[#A4863D]">Walia</span>
<span className="text-2xl tracking-[0.15em] uppercase font-display mt-2">Hospitality</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-[#A4863D]/20 pt-16">

<div className="flex flex-col items-center md:items-start gap-4">
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#A4863D]">Location</h4>
<div className="text-lg font-light leading-relaxed text-center md:text-left text-[#E6E6FA]/70">
<p>123 Anywhere St. Any City ST 12345</p>
<p>Tel: 123-456-789</p>
<p>hello@reallygreatsite.com</p>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#A4863D]">Business Hours</h4>
<div className="text-lg font-light leading-relaxed text-center text-[#E6E6FA]/70">
<p>Monday: 8am – 7pm</p>
<p>Tuesday: 8am – 5pm</p>
<p>Wednesday: 8am – 5pm</p>
<p>Thursday: 8am – 7pm</p>
<p>Friday: 8am – 5pm</p>
</div>
</div>

<div className="flex flex-col items-center md:items-end gap-4">
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#A4863D]">Get Social</h4>
<div className="flex gap-4">
<a className="p-2 border border-[#E6E6FA]/20 rounded-full hover:bg-[#A4863D] hover:text-[#0E300E] transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="facebook"></i>
</a>
<a className="p-2 border border-[#E6E6FA]/20 rounded-full hover:bg-[#A4863D] hover:text-[#0E300E] transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i>
</a>
<a className="p-2 border border-[#E6E6FA]/20 rounded-full hover:bg-[#A4863D] hover:text-[#0E300E] transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
