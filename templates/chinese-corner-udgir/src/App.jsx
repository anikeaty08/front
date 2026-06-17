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
      

<nav className="fixed z-50 glass-nav w-full top-0">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-2 items-center">
<span className="icon-[lucide--utensils-crossed] text-red-500 text-xl"></span>
<a className="text-lg font-semibold text-white tracking-tight" href="/#">CHINESE CORNER</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 hover:bg-neutral-200 transition-colors text-xs font-semibold text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="tel:+910000000000">
<span className="">Call Now !</span>
<span className="icon-[lucide--phone] w-3 h-3"></span>
</a>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">wertyuiowertyui</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-neutral-300 hover:text-white" href="#home">Home</a>
<a className="text-neutral-300 hover:text-white" href="#menu">Menu</a>
<a className="text-neutral-300 hover:text-white" href="#contact">Location</a>
</div>
</nav>

<section className="flex hero-bg text-center h-screen pr-4 pl-4 relative items-center justify-center" id="home">
<div className="relative z-10 max-w-4xl mx-auto">
<div className="flex items-center justify-center gap-2 mb-4">
<div className="h-[1px] w-12 bg-red-600"></div>
<span className="text-red-500 text-xs font-semibold tracking-widest uppercase">The Authentic Taste of Udgir</span>
<div className="h-[1px] w-12 bg-red-600"></div>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-2">
                New Hotel Chinese Corner
            </h1>
<h2 className="text-xl md:text-2xl text-neutral-400 font-medium tracking-tight mb-8">
               न्यू होटल चाइनीस कॉर्नर
            </h2>
<p className="text-neutral-300 max-w-lg mx-auto mb-10 text-sm md:text-base leading-relaxed">
                Experience premium Indo-Chinese cuisine in the heart of Udgir. From spicy Schezwan to crispy Manchurian, we serve flavors that linger.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="hover:bg-red-700 transition-colors sm:w-auto flex items-center justify-center gap-2 text-sm font-medium text-white bg-red-600 w-full rounded-full pt-3 pr-5 pb-3 pl-10" href="#menu">
                    View Menu <span className="icon-[lucide--arrow-down] w-4 h-4"></span>
</a>
<a className="px-8 py-3 bg-transparent border border-neutral-700 text-white text-sm font-medium rounded-full hover:border-white transition-colors w-full sm:w-auto" href="#contact">
                    Visit Us
                </a>
</div>
</div>
</section>

<section className="bg-neutral-950 border-neutral-900 border-b pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="overflow-hidden aspect-video md:aspect-square bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9787dac-8564-405d-8848-e1fcf637eac3_3840w.png?w=800&amp;q=80)] bg-contain border-white/5 border rounded-2xl relative">
<div className="bg-gradient-to-t from-black/60 to-transparent opacity-100 invisible absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="">
<span className="uppercase block text-xs font-semibold text-red-500 tracking-wider mb-2">About Us</span>
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Excellence in Udgir</h2>
<p className="leading-relaxed text-sm text-neutral-400 mb-6 relative ml-1 mt-10 left-1 md:text-base">Located at Dr. Babasaheb Ambedkar Chowk, Udgir. 
Hotel Chinese Corner has become a landmark for food lovers. We specialize in authentic preparation methods using fresh ingredients to bring you the perfect blend of Indian spices and Chinese techniques.</p>
<ul className="mb-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="bg-neutral-800 p-1 rounded-full"><span className="icon-[lucide--check] text-red-500 w-3 h-3 block"></span></span>
                            Hygienic Kitchen &amp; Fresh Ingredients
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="bg-neutral-800 p-1 rounded-full"><span className="icon-[lucide--check] text-red-500 w-3 h-3 block"></span></span>
                            Budget Friendly (₹1–200 range)
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="bg-neutral-800 p-1 rounded-full"><span className="icon-[lucide--check] text-red-500 w-3 h-3 block"></span></span>
                            Open daily until 11:30 PM
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="menu">

<div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Menu</h2>
<p className="text-neutral-400 text-sm">Delicious starters and main courses prepared fresh.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12">

<div className="">
<div className="flex items-center gap-3 mb-8">
<span className="icon-[lucide--leaf] text-green-500 w-5 h-5"></span>
<h3 className="text-xl font-medium text-white tracking-tight">Veg Starters</h3>
</div>
<div className="space-y-4">
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div className="">
<h4 className="text-white font-medium text-sm">Veg Manchurian</h4>
<span className="text-neutral-500 text-xs">Deep fried veg balls in spicy sauce</span>
</div>
<span className="text-sm font-semibold text-amber-400">₹70</span>
</div>
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div>
<h4 className="text-white font-medium text-sm">Gobi Manchurian</h4>
<span className="text-neutral-500 text-xs">Crispy cauliflower florets</span>
</div>
<span className="text-amber-400 font-semibold text-sm">₹90</span>
</div>
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div>
<h4 className="text-white font-medium text-sm">Veg Spring Roll</h4>
<span className="text-neutral-500 text-xs">Crispy rolls with veg filling</span>
</div>
<span className="text-amber-400 font-semibold text-sm">₹70</span>
</div>
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div className="">
<h4 className="text-white font-medium text-sm">Paneer Chilli</h4>
<span className="text-neutral-500 text-xs">Spicy cottage cheese cubes</span>
</div>
<span className="text-amber-400 font-semibold text-sm">₹130</span>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-8">
<span className="icon-[lucide--drumstick] text-red-500 w-5 h-5"></span>
<h3 className="text-xl font-medium text-white tracking-tight">Non-Veg Starters</h3>
</div>
<div className="space-y-4">
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div className="">
<h4 className="text-white font-medium text-sm">Chicken Manchurian</h4>
<span className="text-neutral-500 text-xs">Succulent chicken in tangy sauce</span>
</div>
<span className="text-sm font-semibold text-amber-400">₹120</span>
</div>
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div className="">
<h4 className="text-white font-medium text-sm">Chicken 65</h4>
<span className="text-neutral-500 text-xs">Spicy deep-fried chicken</span>
</div>
<span className="text-amber-400 font-semibold text-sm">₹130</span>
</div>
<div className="menu-card flex transition-colors duration-200 bg-neutral-900/50 border-white/5 border rounded-xl px-4 py-4 items-center justify-between">
<div className="">
<h4 className="text-white font-medium text-sm">Chicken Chilli</h4>
<span className="text-neutral-500 text-xs">Wok tossed spicy chicken</span>
</div>
<span className="text-amber-400 font-semibold text-sm">₹150</span>
</div><div className="menu-card flex transition-colors duration-200 bg-neutral-900/50 border-white/5 border rounded-xl px-4 py-4 items-center justify-between">
<div className="">
<h4 className="text-sm font-medium text-white">Chicken Lollipop</h4>
<span className="text-neutral-500 text-xs">Wok tossed spicy chicken</span>
</div>
<span className="text-amber-400 font-semibold text-sm">₹150</span>
</div>
</div>
</div>

<div className="md:col-span-2 mt-8 gap-x-4 gap-y-4">
<div className="flex gap-3 mb-8 gap-x-3 gap-y-3 items-center justify-center">
<span className="icon-[lucide--utensils] text-amber-500 w-5 h-5"></span>
<h3 className="text-xl font-medium text-white tracking-tight">Main Course</h3>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div className="">
<h4 className="text-white font-medium text-sm">Veg Fried Rice</h4>
</div>
<span className="text-sm font-semibold text-amber-400" style={{}}>₹50</span>
</div>
<div className="menu-card bg-neutral-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center transition-colors duration-200">
<div className="">
<h4 className="text-white font-medium text-sm">Veg Hakka Noodles</h4>
</div>
<span className="text-amber-400 font-semibold text-sm">₹90</span>
</div>
<div className="menu-card flex transition-colors duration-200 bg-neutral-900/50 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="">
<h4 className="text-white font-medium text-sm">Chicken Fried Rice</h4>
</div>
<span className="text-sm font-semibold text-amber-400" style={{}}>₹120</span>
</div>
<div className="menu-card flex transition-colors duration-200 bg-neutral-900/50 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="">
<h4 className="text-white font-medium text-sm">Chicken Hakka Noodles</h4>
</div>
<span className="text-amber-400 font-semibold text-sm">₹130</span>
</div>
<div className="menu-card flex transition-colors duration-200 bg-neutral-900/50 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="">
<h4 className="text-sm font-medium text-white" style={{}}>Chicken cheese Shawarma</h4>
</div>
<span className="text-sm font-semibold text-amber-400" style={{}}>₹150</span>
</div><div className="menu-card flex transition-colors duration-200 bg-neutral-900/50 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="">
<h4 className="text-sm font-medium text-white">Chicken Jumbo Shawarma</h4>
</div>
<span className="text-sm font-semibold text-amber-400">₹160</span>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-4">
<div className="mt-8 flex flex-wrap justify-center gap-4">
<div className="bg-neutral-800/50 px-4 py-2 rounded-lg text-xs text-neutral-400 border border-neutral-800">
      Plain Rice <span className="text-white ml-2">₹60</span>
</div>
<div className="bg-neutral-800/50 px-4 py-2 rounded-lg text-xs text-neutral-400 border border-neutral-800">
      Extra Gravy <span className="text-white ml-2">₹20</span>
</div>
</div>
</div></div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-900" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight text-center mb-12">What Our Customers Say</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
<div className="flex gap-1 text-amber-400 mb-4">
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
</div>
<p className="text-neutral-300 text-sm mb-4">"Best Chinese food in Udgir! The Chicken 65 is crispy and spicy, exactly how I like it. Service is very fast."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">R</div>
<span className="text-sm font-medium text-white">Rahul Patil</span>
</div>
</div>

<div className="hover:border-neutral-700 transition-colors bg-neutral-900 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-1 text-amber-400 mb-4">
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
</div>
<p className="text-neutral-300 text-sm mb-4">"Great place for a quick dinner with family. The Manchurian is soft and tasty. Prices are very reasonable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">S</div>
<span className="text-sm font-medium text-white">Sameer Khan</span>
</div>
</div>

<div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
<div className="flex gap-1 text-amber-400 mb-4">
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star] w-4 h-4 fill-current"></span>
<span className="icon-[lucide--star-half] w-4 h-4 fill-current"></span>
</div>
<p className="text-neutral-300 text-sm mb-4">"Veg Hakka Noodles were authentic. Good hygiene maintained. Highly recommended for students."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">A</div>
<span className="text-sm font-medium text-white">Amit Deshmukh</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24" id="contact">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2">
<div className="gap-x-12 gap-y-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6" style={{}}>Visit Us</h2>
<div className="space-y-8 gap-x-4 gap-y-4">
<div className="flex gap-4">
<div className="flex flex-shrink-0 bg-center bg-neutral-900 opacity-100 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae3c126d-4d42-4da4-82fa-12f089e0ccb0_320w.png?w=800&amp;q=80)] bg-cover border-neutral-800 border rounded-full items-center justify-center">
<span className="icon-[lucide--map-pin] bg-center text-red-500 w-5 h-5"></span>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Address</h3>
<p className="leading-relaxed text-sm text-neutral-400">
  Babasaheb Ambedkar Chowk, 01, Udgir–Bidar Road,
  Jijau Nagar, Ramchandra Nagar, Udgir,
  Maharashtra 413517
</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4">
<div className="flex flex-shrink-0 bg-slate-50 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62e9d302-ec31-4b63-a62a-dd2caaa1d346_320w.png?w=800&amp;q=80)] bg-cover bg-center border-neutral-800 border rounded-full items-center justify-center">
<span className="icon-[lucide--clock] text-red-500 w-5 h-5"></span>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Timings</h3>
<p className="text-neutral-400 text-sm">Open Daily</p>
<p className="text-sm text-neutral-400">Closes at 11:30 PM</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4">
<div className="flex flex-shrink-0 bg-gray-50 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c475796-7f9d-47be-ac1a-bebf18cc5e11_320w.png?w=800&amp;q=80)] bg-cover bg-center border-neutral-800 border rounded-full items-center justify-center">
<span className="icon-[lucide--phone] text-red-500 w-5 h-5"></span>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Contact</h3>
<div className="flex flex-wrap gap-4 mt-2">
<a className="inline-flex items-center gap-2 hover:bg-green-700 transition-colors text-xs font-semibold text-white bg-green-600 rounded-lg pt-2 pr-5 pb-2 pl-5" href="#">
<span className="icon-[lucide--message-circle] w-4 h-4"></span> WhatsApp
                                    </a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-200 transition-colors text-xs font-semibold text-black bg-white rounded-lg mx-1 pt-2 pr-5 pb-2 pl-5" href="#">
<span className="icon-[lucide--phone-call] w-4 h-4"></span> Call Now
                                    </a>
</div>
</div>
</div>
</div>
</div>

<div className="lg:h-auto overflow-hidden w-full h-80 border-neutral-800 border rounded-2xl pt-100 pr-100 pb-100 pl-100 gap-x-12 gap-y-12">
<iframe allowfullscreen="" className="hover:grayscale-0 transition-all duration-500 grayscale" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.267678912345!2d77.1111!3d18.3942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcmf7e8a9a9a9a9%3A0x123456789abcdef!2sUdgir%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '10'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-neutral-900 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h3 className="text-white font-semibold text-lg tracking-tight">Hotel Chinese Corner</h3>
<p className="text-xs text-neutral-500 mt-1" style={{}}>© 2025. All rights reserved.</p><p className="text-xs text-neutral-500 mt-1">👨‍💻 Developer: Gajanan Waichale    |   📞 Contact No: 9209696001</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="icon-[lucide--facebook] w-5 h-5"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="icon-[lucide--instagram] w-5 h-5"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="icon-[lucide--twitter] w-5 h-5"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
