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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter uppercase font-medium text-stone-900 flex items-center gap-2" href="#">
<iconify-icon className="text-orange-700" icon="solar:fire-linear" width="24"></iconify-icon>
                El Rincón de Juanjo
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#home">Home</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-orange-700 transition-colors" href="tel:+34981505009">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>Reserve</span>
</a>
<button className="md:hidden text-stone-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Grilled Meat on Fire" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/30"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<span className="inline-block py-1 px-3 rounded-full bg-orange-600/20 text-orange-100 text-xs font-medium tracking-widest uppercase mb-6 border border-orange-500/30 backdrop-blur-sm">
                Melide, Galicia
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-50 font-medium tracking-tight mb-8 leading-[0.9]">
                The Heart of <br/> <span className="italic text-orange-100">Galician Fire</span>
</h1>
<p className="text-stone-200 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
                Experience the finest grilled meats and the traditional Pulpo of Melide in a warm, rustic atmosphere. A culinary landmark on the Camino.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-stone-100 text-stone-900 text-sm font-medium tracking-wide uppercase hover:bg-white transition-colors" href="#menu">
                    View Menu
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-100 text-stone-100 text-sm font-medium tracking-wide uppercase hover:bg-stone-100/10 transition-colors backdrop-blur-sm" href="#location">
                    Find Us
                </a>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="flex items-center gap-2 text-orange-700">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase text-stone-500">Our Tradition</span>
</div>
<h2 className="text-4xl md:text-5xl text-stone-900 font-medium tracking-tight leading-tight">
                        A refuge for pilgrims and <span className="serif italic text-stone-500">food lovers</span>.
                    </h2>
<p className="text-stone-600 leading-loose text-base font-light">
                        Located in <strong>Melide</strong>, the crossroads of the Camino de Santiago, <strong>El Rincón de Juanjo</strong> is renowned for its hospitality and mastery of the grill. 
                    </p>
<p className="text-stone-600 leading-loose text-base font-light">
                        We specialize in the region's culinary treasures: the famous <em>Pulpo á Feira</em> and premium cuts of Galician beef (Vaca Vieja). Our open fire grill brings out the authentic flavors that define our land, serving locals and travelers alike with passion and excellence.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-4 border-t border-stone-200">
<div>
<h4 className="text-2xl text-stone-900 font-serif">Galician</h4>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Origin Meats</p>
</div>
<div>
<h4 className="text-2xl text-stone-900 font-serif">Charcoal</h4>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Traditional Grill</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm relative">

<img alt="Restaurant Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl max-w-xs hidden md:block border border-stone-100">
<p className="font-serif italic text-lg text-stone-800">"The best Chuletón and Pulpo we had on the entire Camino."</p>
<div className="flex gap-1 text-orange-500 mt-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200" id="menu">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-bold tracking-widest uppercase text-orange-700 mb-2 block">The Classics</span>
<h2 className="text-4xl text-stone-900 font-medium tracking-tight serif italic">Our Menu</h2>
<p className="mt-4 text-stone-500 font-light">Authentic Galician flavors.</p>
</div>

<div className="mb-12">
<h3 className="text-xl font-medium text-stone-900 mb-6 flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:leaf-linear"></iconify-icon> 
                    Starters &amp; Tapas
                </h3>
<div className="space-y-6">
<div className="group flex justify-between items-baseline gap-4">
<div className="relative overflow-hidden w-full">
<div className="flex items-baseline gap-2">
<span className="text-stone-800 font-medium group-hover:text-orange-700 transition-colors">Pulpo Á Feira (Melide Style)</span>
<span className="h-px bg-stone-200 flex-grow"></span>
</div>
<p className="text-xs text-stone-500 mt-1 font-light">Traditional octopus with extra virgin olive oil, paprika and coarse salt.</p>
</div>
<span className="text-stone-900 font-medium">18€</span>
</div>
<div className="group flex justify-between items-baseline gap-4">
<div className="relative overflow-hidden w-full">
<div className="flex items-baseline gap-2">
<span className="text-stone-800 font-medium group-hover:text-orange-700 transition-colors">Gambones a la Plancha</span>
<span className="h-px bg-stone-200 flex-grow"></span>
</div>
<p className="text-xs text-stone-500 mt-1 font-light">Grilled king prawns seasoned with garlic and parsley.</p>
</div>
<span className="text-stone-900 font-medium">16€</span>
</div>
<div className="group flex justify-between items-baseline gap-4">
<div className="relative overflow-hidden w-full">
<div className="flex items-baseline gap-2">
<span className="text-stone-800 font-medium group-hover:text-orange-700 transition-colors">Croquetas Caseras</span>
<span className="h-px bg-stone-200 flex-grow"></span>
</div>
<p className="text-xs text-stone-500 mt-1 font-light">Creamy homemade ham or mushroom croquettes.</p>
</div>
<span className="text-stone-900 font-medium">10€</span>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-xl font-medium text-stone-900 mb-6 flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:fire-linear"></iconify-icon> 
                    From The Grill
                </h3>
<div className="space-y-6">
<div className="group flex justify-between items-baseline gap-4">
<div className="relative overflow-hidden w-full">
<div className="flex items-baseline gap-2">
<span className="text-stone-800 font-medium group-hover:text-orange-700 transition-colors">Chuletón de Vaca (1kg)</span>
<span className="h-px bg-stone-200 flex-grow"></span>
</div>
<p className="text-xs text-stone-500 mt-1 font-light">Dry-aged beef steak, grilled over charcoal. Perfect for sharing.</p>
</div>
<span className="text-stone-900 font-medium">48€</span>
</div>
<div className="group flex justify-between items-baseline gap-4">
<div className="relative overflow-hidden w-full">
<div className="flex items-baseline gap-2">
<span className="text-stone-800 font-medium group-hover:text-orange-700 transition-colors">Churrasco de Cerdo</span>
<span className="h-px bg-stone-200 flex-grow"></span>
</div>
<p className="text-xs text-stone-500 mt-1 font-light">Grilled pork ribs, a local classic.</p>
</div>
<span className="text-stone-900 font-medium">14€</span>
</div>
<div className="group flex justify-between items-baseline gap-4">
<div className="relative overflow-hidden w-full">
<div className="flex items-baseline gap-2">
<span className="text-stone-800 font-medium group-hover:text-orange-700 transition-colors">Entrecot de Ternera Gallega</span>
<span className="h-px bg-stone-200 flex-grow"></span>
</div>
<p className="text-xs text-stone-500 mt-1 font-light">Galician veal ribeye steak.</p>
</div>
<span className="text-stone-900 font-medium">22€</span>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-orange-700 hover:border-orange-700 transition-colors" href="#">
                    See Full Wine List
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-4 bg-stone-50" id="gallery">
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4">

<div className="group relative aspect-square overflow-hidden bg-stone-200">
<img alt="Steak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="group relative aspect-square overflow-hidden bg-stone-200">
<img alt="Pulpo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square overflow-hidden bg-stone-200 md:col-span-2">
<img alt="Plated Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square overflow-hidden bg-stone-200 md:col-span-2">
<img alt="Wine and Atmosphere" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-square overflow-hidden bg-stone-200">
<img alt="Grill Fire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="group relative aspect-square overflow-hidden bg-stone-200">
<img alt="Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-300" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div>
<h2 className="text-3xl text-stone-50 font-medium tracking-tight mb-6">Visit Us</h2>
<p className="font-light text-stone-400">Located on the Camiño de Oviedo in Melide, perfect for a stop on the Camino.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-800 rounded-sm text-orange-500">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-1">Address</h4>
<p className="text-sm font-light leading-relaxed">
                                    Rúa Camiño de Oviedo, 6<br/>
                                    15800 Melide, A Coruña<br/>
                                    Galicia, Spain
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-800 rounded-sm text-orange-500">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-1">Opening Hours</h4>
<p className="text-sm font-light leading-relaxed">
                                    Tuesday - Sunday: 12:00 - 16:00, 20:00 - 00:00<br/>
                                    Monday: Closed
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-800 rounded-sm text-orange-500">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-1">Contact</h4>
<p className="text-sm font-light leading-relaxed mb-2">
                                    +34 981 50 50 09
                                </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-green-400 hover:text-green-300 transition-colors" href="#">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
                                    WhatsApp Reservation
                                </a>
</div>
</div>
</div>
</div>

<div className="w-full h-[400px] bg-stone-800 rounded-sm overflow-hidden grayscale invert-[.1]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.4870530756784!2d-8.016629923485756!3d42.91264397114674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e34fa9206775f%3A0xe5e5da4a67500366!2sAsador%20El%20Rinc%C3%B3n%20de%20Juanjo!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 py-12 border-t border-stone-800 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
<div className="text-xl tracking-tighter uppercase font-medium text-stone-50 flex items-center gap-2">
<iconify-icon className="text-orange-700" icon="solar:fire-linear"></iconify-icon>
                El Rincón de Juanjo
            </div>
<div className="max-w-lg mx-auto p-4 border border-stone-800 bg-stone-900/50 rounded-sm">
<p className="text-xs text-stone-500 font-light leading-relaxed">
<strong>IMPORTANT DISCLAIMER:</strong> This is a DEMO website created solely for design proposal purposes. It is not the official website of "Asador El Rincón de Juanjo". No copyright infringement intended.
                </p>
</div>
<p className="text-xs text-stone-600 font-medium tracking-tight">
                © 2023 Website Design Proposal. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
