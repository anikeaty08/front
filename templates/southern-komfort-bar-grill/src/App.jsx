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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col group" href="#">
<span className="text-xl md:text-2xl font-serif text-white tracking-tighter group-hover:text-rose-500 transition-colors duration-300 uppercase">Southern Komfort</span>
<span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400 transition-colors">Bar &amp; Grill • Orange, NJ</span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#about">Our Story</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#menu">Menu</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#events">Nightlife</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="tel:+19736729100">
<span className="iconify" data-height="20" data-icon="lucide:phone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="bg-white text-black px-5 py-2 text-xs uppercase tracking-widest font-medium hover:bg-rose-100 transition-colors" href="#reservations">
                    Reserve
                </a>
</div>

<button className="md:hidden text-white">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Bar Ambience" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/90"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-rose-950/20 blur-[120px]"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<div className="flex items-center justify-center gap-3 mb-6 text-amber-500/80">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Experience Southern Luxury</span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-light tracking-tight leading-[0.9] mb-8">
                Soul Food <br/> <span className="italic text-rose-500/90">Meets</span> Nightlife
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Upscale dining in the heart of Essex County. Enjoy signature Southern comfort dishes, crafted cocktails, and a vibrant late-night lounge atmosphere.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-rose-900 text-white text-sm uppercase tracking-widest hover:bg-rose-800 transition-all border border-rose-800/50 shadow-[0_0_20px_rgba(225,29,72,0.1)]" href="#reservations">
                    Book a Table
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-neutral-700 text-neutral-300 text-sm uppercase tracking-widest hover:border-white hover:text-white transition-all backdrop-blur-sm" href="#menu">
                    View Menu
                </a>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 bg-neutral-950/50 backdrop-blur-sm py-4 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-neutral-500 uppercase tracking-wider">
<div className="flex items-center gap-2">
<span className="iconify text-rose-500" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
                    501 Central Ave, Orange, NJ
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-rose-500" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
                    Tue-Wed 1PM-1AM • Thu-Sat 1PM-1:30AM • Sun 1PM-12AM
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-rose-500" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
                    (973) 672-9100
                </div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-3 p-6 border border-white/5 hover:border-rose-900/30 transition-colors group">
<span className="iconify text-neutral-400 group-hover:text-rose-500 transition-colors" data-icon="lucide:martini" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-xl text-white font-serif">Full Bar</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Premium spirits and signature cocktails served until late.</p>
</div>
<div className="space-y-3 p-6 border border-white/5 hover:border-rose-900/30 transition-colors group">
<span className="iconify text-neutral-400 group-hover:text-rose-500 transition-colors" data-icon="lucide:moon" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-xl text-white font-serif">Late Night</h3>
<p className="text-xs text-neutral-500 leading-relaxed">The vibe continues well past midnight with music and energy.</p>
</div>
<div className="space-y-3 p-6 border border-white/5 hover:border-rose-900/30 transition-colors group">
<span className="iconify text-neutral-400 group-hover:text-rose-500 transition-colors" data-icon="lucide:utensils-crossed" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-xl text-white font-serif">Soul Cuisine</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Authentic Southern flavors made to order with love.</p>
</div>
<div className="space-y-3 p-6 border border-white/5 hover:border-rose-900/30 transition-colors group">
<span className="iconify text-neutral-400 group-hover:text-rose-500 transition-colors" data-icon="lucide:calendar-check" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-xl text-white font-serif">Private Events</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Available for catering and private party reservations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-rose-950/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative group">
<img alt="Fine Dining Plate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-rose-900/20 -z-10"></div>
</div>
<div className="space-y-8">
<div className="space-y-2">
<span className="text-rose-500 text-xs uppercase tracking-widest font-medium">Since 2010</span>
<h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight">Southern Hospitality, <br/>Jersey Style.</h2>
</div>
<p className="text-neutral-400 font-light leading-relaxed">
                    Southern Komfort Bar &amp; Grill is more than a restaurant; it’s a destination. Located in Orange, NJ, we blend the warmth of traditional soul food with the electric energy of an upscale lounge. 
                </p>
<p className="text-neutral-400 font-light leading-relaxed">
                    Whether you are craving our famous fried chicken and yams or looking for a sophisticated spot to enjoy happy hour cocktails, Southern Komfort sets the mood with dim lighting, gold accents, and a soundtrack that keeps the vibe right all night long.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<span className="block text-2xl text-white font-serif">4.5k+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Happy Guests</span>
</div>
<div>
<span className="block text-2xl text-white font-serif">$$ - $$$$</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Price Range</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors uppercase text-xs tracking-widest mt-4" href="#menu">
                    Explore Our Offerings 
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<h2 className="text-4xl text-white font-serif tracking-tight">Signature Selections</h2>
<p className="text-neutral-400 font-light">From made-to-order classics to contemporary culinary creations.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-2 group-hover:border-rose-900/50 transition-colors">
<h4 className="text-xl text-white font-serif">SoKo Fried Chicken</h4>
<span className="text-rose-400 font-serif text-lg">$24</span>
</div>
<p className="text-sm text-neutral-500 font-light">Our famous buttermilk brined chicken, crispy skin, served with hot honey.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-2 group-hover:border-rose-900/50 transition-colors">
<h4 className="text-xl text-white font-serif">Candied Yams</h4>
<span className="text-rose-400 font-serif text-lg">$12</span>
</div>
<p className="text-sm text-neutral-500 font-light">Slow-roasted sweet potatoes, brown sugar glaze, cinnamon spice.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-2 group-hover:border-rose-900/50 transition-colors">
<h4 className="text-xl text-white font-serif">Mac &amp; Cheese Skillet</h4>
<span className="text-rose-400 font-serif text-lg">$16</span>
</div>
<p className="text-sm text-neutral-500 font-light">Five-cheese blend, baked golden brown in a cast iron skillet.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-2 group-hover:border-rose-900/50 transition-colors">
<h4 className="text-xl text-white font-serif">Shrimp &amp; Grits</h4>
<span className="text-rose-400 font-serif text-lg">$28</span>
</div>
<p className="text-sm text-neutral-500 font-light">Gulf shrimp, andouille sausage, creamy cheddar grits.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-2 group-hover:border-rose-900/50 transition-colors">
<h4 className="text-xl text-white font-serif">Catfish Platter</h4>
<span className="text-rose-400 font-serif text-lg">$26</span>
</div>
<p className="text-sm text-neutral-500 font-light">Cornmeal crusted catfish fillets, house tartar sauce, coleslaw.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-2 group-hover:border-rose-900/50 transition-colors">
<h4 className="text-xl text-white font-serif">Hennessy Wings</h4>
<span className="text-rose-400 font-serif text-lg">$18</span>
</div>
<p className="text-sm text-neutral-500 font-light">Jumbo wings tossed in our signature cognac glaze.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-8 py-3 border border-neutral-700 text-neutral-300 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all" href="#">
                    View Full Menu
                </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-900/10 blur-[100px] rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<span className="iconify mx-auto text-amber-500 mb-6" data-icon="lucide:quote" data-width="40" style={{strokeWidth: '1'}}></span>
<h3 className="text-2xl md:text-4xl text-white font-serif leading-snug mb-8">
                "The atmosphere is unmatched. Dark, moody, and upscale. The fried chicken is the best I've had in Jersey, and the music keeps the energy high all night."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="flex flex-col items-end border-r border-white/10 pr-4">
<span className="text-white font-medium">Yelp Reviews</span>
<span className="text-xs text-neutral-500">Local Favorite</span>
</div>
<div className="text-left pl-2">
<div className="flex items-center text-rose-500 gap-1 mb-1">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star-half" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="text-white ml-2 text-sm font-semibold">3.1</span>
</div>
<span className="text-xs text-neutral-500 block">Based on 120+ reviews</span>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-2 border-t border-white/5" id="reservations">

<div className="p-12 lg:p-24 bg-neutral-900/20">
<div className="max-w-md mx-auto">
<h2 className="text-3xl text-white font-serif mb-2">Reservations</h2>
<p className="text-neutral-400 font-light mb-8">Secure your table for dinner or bottle service.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Date</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 text-sm focus:border-rose-900 focus:outline-none transition-colors rounded-none" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Guests</label>
<select className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 text-sm focus:border-rose-900 focus:outline-none transition-colors rounded-none appearance-none">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5+ Guests</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 text-sm focus:border-rose-900 focus:outline-none transition-colors rounded-none placeholder-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 text-sm focus:border-rose-900 focus:outline-none transition-colors rounded-none placeholder-neutral-700" placeholder="john@example.com" type="email"/>
</div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-neutral-700 bg-neutral-950 peer-checked:bg-rose-900 peer-checked:border-rose-900 transition-colors"></div>
<span className="iconify absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">Join our VIP list for event updates</span>
</label>
<button className="w-full bg-white text-black py-4 uppercase tracking-widest text-xs font-medium hover:bg-rose-100 transition-colors mt-4" type="submit">
                        Request Reservation
                    </button>
</form>
</div>
</div>

<div className="p-12 lg:p-24 bg-neutral-950 relative overflow-hidden flex flex-col justify-center" id="contact">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 max-w-md mx-auto w-full space-y-12">
<div>
<h3 className="text-xl text-white font-serif mb-4 flex items-center gap-2">
<span className="iconify text-rose-500" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
                        Hours
                    </h3>
<ul className="space-y-2 text-neutral-400 font-light text-sm">
<li className="flex justify-between"><span className="text-neutral-500">Mon</span> <span>Closed</span></li>
<li className="flex justify-between"><span className="text-neutral-500">Tue – Wed</span> <span>1:00 PM – 1:00 AM</span></li>
<li className="flex justify-between"><span className="text-neutral-500">Thu – Sat</span> <span>1:00 PM – 1:30 AM</span></li>
<li className="flex justify-between"><span className="text-neutral-500">Sun</span> <span>1:00 PM – 12:00 AM</span></li>
</ul>
</div>
<div>
<h3 className="text-xl text-white font-serif mb-4 flex items-center gap-2">
<span className="iconify text-rose-500" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
                        Location
                    </h3>
<p className="text-neutral-400 font-light text-sm mb-4">
                        501 Central Ave<br/>
                        Orange, NJ 07050
                    </p>
<a className="text-white border-b border-rose-500 pb-0.5 text-xs uppercase tracking-widest hover:text-rose-500 transition-colors inline-flex items-center gap-1" href="https://maps.google.com" target="_blank">
                        Get Directions <span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</div>
<div>
<h3 className="text-xl text-white font-serif mb-4 flex items-center gap-2">
<span className="iconify text-rose-500" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
                        Contact
                    </h3>
<p className="text-neutral-400 font-light text-sm mb-4">
                        Private Events, Catering &amp; Takeout
                    </p>
<a className="text-2xl text-white font-serif hover:text-rose-500 transition-colors" href="tel:+19736729100">
                        +1 (973) 672-9100
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="text-xl font-serif text-white tracking-tighter mb-2 uppercase">Southern Komfort</span>
<p className="text-xs text-neutral-600">© 2024 Southern Komfort Bar &amp; Grill. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-blue-500 transition-colors" href="https://facebook.com/SoCoCafenj">
<span className="iconify" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-500 hover:text-pink-500 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="flex gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:wifi" data-width="12"></span> Free Wi-Fi</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:car" data-width="12"></span> Street Parking</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:credit-card" data-width="12"></span> Contactless</span>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 md:hidden z-40">
<a className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-900/40" href="#reservations">
<span className="iconify" data-icon="lucide:calendar-days" data-width="20"></span>
</a>
<a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg" href="tel:+19736729100">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</a>
</div>

    </>
  );
}
