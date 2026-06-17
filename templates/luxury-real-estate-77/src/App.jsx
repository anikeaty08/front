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



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
colors: {
'brand-gold': '#9D8C65',
'brand-charcoal': '#1C1C1E',
'brand-cream': '#F9F8F6',
'brand-stone': '#E5E2DD',
}
}
}
}



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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tighter font-medium text-brand-charcoal" href="#">
                AURA<span className="text-brand-gold">.</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-brand-gold transition-colors" href="#featured">Residences</a>
<a className="hover:text-brand-gold transition-colors" href="#signature">Signature</a>
<a className="hover:text-brand-gold transition-colors" href="#about">Advisory</a>
<a className="hover:text-brand-gold transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-charcoal border border-stone-300 px-6 py-3 hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-all duration-300" href="#contact">
                    Private Consult
                </a>
<button className="md:hidden text-2xl text-brand-charcoal">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="London Penthouse" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>
</div>

<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto fade-in-up">
<p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-4 text-stone-200">The London Portfolio</p>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 font-medium">
                Curating the Capital’s <br/> <span className="italic text-brand-gold/90">Finest Residences</span>
</h1>
<p className="text-base md:text-lg text-stone-100 font-light max-w-lg mx-auto mb-10 leading-relaxed">
                Discover an exclusive collection of prime properties in Mayfair, Kensington, and the Home Counties.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-brand-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-stone-200 transition-colors" href="#featured">
                    View Signature Collection
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/40 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-brand-charcoal transition-all" href="#contact">
                    Book Consultation
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="lg:py-32 lg:px-12 max-w-screen-2xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="featured">
<div className="flex flex-col md:flex-row gap-6 mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="text-brand-gold text-xs uppercase tracking-widest mb-2 block">Current Listings</span>
<h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-tight">Featured Residences</h2>
</div>
<a className="group flex items-center gap-2 text-sm text-stone-500 hover:text-brand-gold transition-colors" href="#">
                View All Properties 
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

<article className="group cursor-pointer">
<div className="image-zoom-container relative aspect-[4/5] bg-stone-200 mb-6">
<div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">New Instruction</div>
<img alt="Kensington Townhouse" className="image-zoom-target w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-brand-charcoal group-hover:text-brand-gold transition-colors">The Kensington Townhouse</h3>
<span className="font-sans text-lg font-medium">£12,500,000</span>
</div>
<p className="text-stone-500 text-sm mb-4">Phillimore Gardens, London W8</p>
<div className="flex items-center gap-6 text-stone-400 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 5 Beds
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 4 Baths
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 4,200 sq ft
                    </div>
</div>
</article>

<article className="group cursor-pointer">
<div className="image-zoom-container relative aspect-[4/5] bg-stone-200 mb-6">
<img alt="Mayfair Penthouse" className="image-zoom-target w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8a7f45c-73ea-4dfe-97e7-a5bade67b7d1_800w.png"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-brand-charcoal group-hover:text-brand-gold transition-colors">Grosvenor Square Penthouse</h3>
<span className="font-sans text-lg font-medium">£8,950,000</span>
</div>
<p className="text-stone-500 text-sm mb-4">Mayfair, London W1K</p>
<div className="flex gap-6 text-xs text-stone-400 border-stone-200 border-t pt-4 gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 3 Beds
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 3 Baths
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 2,800 sq ft
                    </div>
</div>
</article>

<article className="group cursor-pointer">
<div className="image-zoom-container relative aspect-[4/5] bg-stone-200 mb-6">
<img alt="Cotswolds Estate" className="image-zoom-target w-full h-full object-cover" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-brand-charcoal group-hover:text-brand-gold transition-colors">The Stone Manor</h3>
<span className="font-sans text-lg font-medium">£4,750,000</span>
</div>
<p className="text-stone-500 text-sm mb-4">Kingham, Cotswolds</p>
<div className="flex items-center gap-6 text-stone-400 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 7 Beds
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 5 Baths
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear" width="16"></iconify-icon> 6 Acres
                    </div>
</div>
</article>
</div>
</section>

<section className="py-24 bg-brand-stone/30" id="signature">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="image-zoom-container w-full h-[600px]">
<img alt="Modern Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&amp;q=80"/>
</div>
</div>
<div className="order-1 lg:order-2 lg:pl-12">
<span className="text-brand-gold text-xs uppercase tracking-widest mb-4 block">Signature Collection</span>
<h2 className="font-serif text-4xl lg:text-5xl leading-tight text-brand-charcoal mb-8">
                        Architecture as <br/> <span className="italic">Art Form.</span>
</h2>
<p className="text-stone-600 font-light leading-relaxed mb-8 text-sm md:text-base max-w-md">
                        Our Signature Collection is reserved for properties of historical significance and architectural distinction. From Grade II listed Georgian townhouses to award-winning contemporary glass structures, these homes represent the pinnacle of British real estate.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-stone-700 text-sm">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                            Off-market access to trophy assets
                        </li>
<li className="flex items-center gap-4 text-stone-700 text-sm">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                            Architectural heritage consultation
                        </li>
<li className="flex items-center gap-4 text-stone-700 text-sm">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon>
                            International marketing exposure
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors" href="#">
                        Explore The Collection
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-screen-2xl mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<h3 className="font-serif text-3xl mb-6 text-brand-charcoal">A Boutique Approach to <br/>Global Real Estate.</h3>
<p className="text-stone-600 font-light leading-relaxed mb-6 text-sm">
                    Established for the discerning few, Aura bridges the gap between London’s historic prestige and the dynamic needs of the modern UHNW individual. We are not just agents; we are advisors, partners, and curators.
                </p>
<p className="text-stone-600 font-light leading-relaxed text-sm">
                    Discretion is the cornerstone of our practice. Whether sourcing an investment pied-à-terre in Chelsea or a family estate in Surrey, we navigate the market with silence and precision.
                </p>
<div className="mt-8 pt-8 border-t border-stone-200">
<p className="font-serif italic text-lg text-brand-charcoal">James &amp; Eleanor</p>
<p className="text-xs uppercase tracking-wider text-stone-400 mt-1">Founding Partners</p>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
<div className="group">
<iconify-icon className="text-brand-gold mb-4 group-hover:scale-110 transition-transform" icon="solar:key-linear" width="32"></iconify-icon>
<h4 className="font-serif text-lg mb-2 text-brand-charcoal">Buying Advisory</h4>
<p className="text-stone-500 text-xs leading-relaxed">
                        End-to-end acquisition services. We identify, negotiate, and secure prime properties, often before they reach the open market.
                    </p>
</div>
<div className="group">
<iconify-icon className="text-brand-gold mb-4 group-hover:scale-110 transition-transform" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="font-serif text-lg mb-2 text-brand-charcoal">Discreet Sales</h4>
<p className="text-stone-500 text-xs leading-relaxed">
                        For sellers requiring privacy. We leverage our private network of family offices and buying agents to sell without a digital footprint.
                    </p>
</div>
<div className="group">
<iconify-icon className="text-brand-gold mb-4 group-hover:scale-110 transition-transform" icon="solar:armchair-2-linear" width="32"></iconify-icon>
<h4 className="font-serif text-lg mb-2 text-brand-charcoal">Interior &amp; Staging</h4>
<p className="text-stone-500 text-xs leading-relaxed">
                        Collaboration with London’s top designers to stage properties for maximum impact, or to renovate post-acquisition.
                    </p>
</div>
<div className="group">
<iconify-icon className="text-brand-gold mb-4 group-hover:scale-110 transition-transform" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h4 className="font-serif text-lg mb-2 text-brand-charcoal">Investment Sourcing</h4>
<p className="text-stone-500 text-xs leading-relaxed">
                        Data-driven analysis for high-yield assets in regeneration zones and established blue-chip postcodes.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-charcoal text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-brand-gold/50 mb-8" icon="solar:quote-up-linear" width="48"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl italic font-light leading-relaxed mb-10">
                "The level of service provided by Aura was impeccable. They found us a home in Knightsbridge that wasn't even listed, and managed the entire process with absolute confidentiality."
            </h3>
<div className="flex flex-col items-center">
<span className="text-sm font-semibold tracking-wide">J.M. &amp; S.M.</span>
<span className="text-xs text-stone-400 mt-1 uppercase tracking-widest">Knightsbridge, London</span>
</div>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale">

<div className="flex items-center justify-center gap-2"><iconify-icon icon="solar:buildings-2-linear"></iconify-icon> <span className="font-serif">VOGUE Living</span></div>
<div className="flex items-center justify-center gap-2"><iconify-icon icon="solar:home-linear"></iconify-icon> <span className="font-serif">ELLE Decor</span></div>
<div className="flex items-center justify-center gap-2"><iconify-icon icon="solar:city-linear"></iconify-icon> <span className="font-serif">FT Property</span></div>
<div className="flex items-center justify-center gap-2"><iconify-icon icon="solar:crown-linear"></iconify-icon> <span className="font-serif">Tatler</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-screen-xl mx-auto" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="pr-0 lg:pr-12">
<span className="text-brand-gold text-xs uppercase tracking-widest mb-2 block">Enquiries</span>
<h2 className="font-serif text-4xl text-brand-charcoal mb-8">Begin the Conversation.</h2>
<p className="text-stone-600 font-light mb-10 text-sm leading-relaxed">
                    Whether you are looking to acquire a legacy asset or sell a prized residence, our team is at your disposal. We aim to respond to all enquiries within 4 hours.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-100 rounded-full text-brand-charcoal">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase text-stone-400 tracking-wider mb-1">Telephone</p>
<p className="font-serif text-lg text-brand-charcoal">+44 (0) 20 7123 4567</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-100 rounded-full text-brand-charcoal">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase text-stone-400 tracking-wider mb-1">Email</p>
<p className="font-serif text-lg text-brand-charcoal">private@aura-estates.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-100 rounded-full text-brand-charcoal">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase text-stone-400 tracking-wider mb-1">Office</p>
<p className="font-serif text-lg text-brand-charcoal">42 Berkeley Square,<br/>Mayfair, London W1J 5AW</p>
</div>
</div>
</div>
</div>

<form className="bg-white p-8 md:p-12 border border-stone-100 shadow-xl shadow-stone-200/50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div className="group relative">
<input className="peer w-full border-b border-stone-300 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors bg-transparent placeholder-transparent" id="name" required="" type="text"/>
<label className="absolute left-0 top-2 text-stone-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold cursor-text" htmlFor="name">Full Name</label>
</div>
<div className="group relative">
<input className="peer w-full border-b border-stone-300 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors bg-transparent placeholder-transparent" id="email" required="" type="email"/>
<label className="absolute left-0 top-2 text-stone-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold cursor-text" htmlFor="email">Email Address</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div className="group relative">
<input className="peer w-full border-b border-stone-300 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors bg-transparent placeholder-transparent" id="phone" type="tel"/>
<label className="absolute left-0 top-2 text-stone-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold cursor-text" htmlFor="phone">Phone (Optional)</label>
</div>
<div className="group relative">
<select className="w-full border-b border-stone-300 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold bg-transparent text-sm">
<option className="text-stone-400" disabled="" selected="" value="">Area of Interest</option>
<option value="mayfair">Mayfair &amp; St James's</option>
<option value="kensington">Kensington &amp; Chelsea</option>
<option value="nottinghill">Notting Hill</option>
<option value="country">Country Estates</option>
</select>
</div>
</div>
<div className="mb-10 group relative">
<textarea className="peer w-full border-b border-stone-300 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors bg-transparent placeholder-transparent" id="message" rows="3"></textarea>
<label className="absolute left-0 top-2 text-stone-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold cursor-text" htmlFor="message">Message or Property Details</label>
</div>
<button className="w-full bg-brand-charcoal text-white py-4 px-8 text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold transition-colors duration-300 flex items-center justify-center gap-2" type="submit">
                    Submit Enquiry
                </button>
</form>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<a className="font-serif text-2xl tracking-tighter text-white mb-6 block" href="#">
                    AURA<span className="text-brand-gold">.</span>
</a>
<p className="text-xs leading-relaxed mb-6">
                    Redefining luxury real estate in London and the UK. Dedicated to the extraordinary.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:earth-linear" width="20"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Properties</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-brand-gold transition-colors" href="#">Sales</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">New Developments</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Country Estates</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-brand-gold transition-colors" href="#">About Aura</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Intelligence</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-brand-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Anti-Money Laundering</a></li>
</ul>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-wider">
<p>© 2023 Aura Real Estate Ltd. Registered in England &amp; Wales.</p>
<p className="mt-4 md:mt-0">Designed for the Exceptional</p>
</div>
</footer>

    </>
  );
}
