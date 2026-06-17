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



        // Initialize Lucide Icons with 1.5 stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<header className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Restaurant Ambiance" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-12">
<img alt="The Lost Yeti Logo" className="h-24 md:h-32 w-auto mb-12 object-contain filter drop-shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<h1 className="font-['Forum'] text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6">Our Menu</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-light leading-relaxed">
                Explore bold flavours, creative dishes, and expertly crafted drinks.
            </p>
<a className="inline-flex items-center gap-2 bg-[#C65A1E] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#A34A18] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(198,90,30,0.2)]" href="#book-table">
                Book a Table
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</header>

<div className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-y border-zinc-800/50">
<nav className="max-w-6xl mx-auto px-6">
<ul className="flex overflow-x-auto py-5 gap-8 text-lg font-medium text-zinc-400 no-scrollbar items-center">
<li><a className="whitespace-nowrap hover:text-white transition-colors duration-200" href="#small-plates">Small Plates</a></li>
<li><a className="whitespace-nowrap hover:text-white transition-colors duration-200" href="#sushi">Sushi &amp; Rolls</a></li>
<li><a className="whitespace-nowrap hover:text-white transition-colors duration-200" href="#mains">Main Courses</a></li>
<li><a className="whitespace-nowrap hover:text-white transition-colors duration-200" href="#desserts">Desserts</a></li>
<li><a className="whitespace-nowrap hover:text-white transition-colors duration-200" href="#drinks">Drinks</a></li>
</ul>
</nav>
</div>
<main className="max-w-6xl mx-auto px-6 py-24 space-y-32">

<section className="scroll-mt-32" id="small-plates">
<div className="mb-12 flex items-center gap-4">
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Small Plates &amp; Starters</h2>
<div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="group flex gap-6 p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-300">
<div className="h-28 w-28 rounded-xl overflow-hidden shrink-0 bg-zinc-800 relative">
<img alt="Pork Skewers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<div className="flex justify-between items-start gap-4 mb-2">
<h3 className="font-['Forum'] text-2xl text-zinc-100 tracking-tight leading-tight">Pork Skewers</h3>
<span className="text-[#C65A1E] text-lg font-medium shrink-0">£12</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Char-grilled with a sticky soy and ginger glaze, finished with toasted sesame and pickled radish.</p>
</div>
</article>

<article className="group flex gap-6 p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-300">
<div className="h-28 w-28 rounded-xl overflow-hidden shrink-0 bg-zinc-800 relative">
<img alt="Smashocado" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<div className="flex justify-between items-start gap-4 mb-2">
<h3 className="font-['Forum'] text-2xl text-zinc-100 tracking-tight leading-tight">Smashocado</h3>
<span className="text-[#C65A1E] text-lg font-medium shrink-0">£9</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Smashed avocado on artisan sourdough, chilli flakes, lime, and micro coriander.</p>
</div>
</article>

<article className="group flex gap-6 p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-300">
<div className="h-28 w-28 rounded-xl overflow-hidden shrink-0 bg-zinc-800 relative">
<img alt="Tuna Taco" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<div className="flex justify-between items-start gap-4 mb-2">
<h3 className="font-['Forum'] text-2xl text-zinc-100 tracking-tight leading-tight">Tuna Taco</h3>
<span className="text-[#C65A1E] text-lg font-medium shrink-0">£14</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Crispy wonton shell, sashimi-grade tuna, yuzu mayo, and fresh jalapeño.</p>
</div>
</article>

<article className="group flex gap-6 p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-300">
<div className="h-28 w-28 rounded-xl overflow-hidden shrink-0 bg-zinc-800 relative">
<img alt="Grilled Corn Salad" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center flex-grow">
<div className="flex justify-between items-start gap-4 mb-2">
<h3 className="font-['Forum'] text-2xl text-zinc-100 tracking-tight leading-tight">Grilled Corn Salad</h3>
<span className="text-[#C65A1E] text-lg font-medium shrink-0">£8</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Charred sweetcorn, cotija cheese, smoked paprika, and lime crema.</p>
</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="sushi">
<div className="mb-12 flex items-center gap-4">
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Sushi &amp; Rolls</h2>
<div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/20 overflow-hidden hover:border-[#C65A1E]/30 transition-all duration-500">
<div className="h-56 w-full relative overflow-hidden bg-zinc-800">
<img alt="Tuna Roll" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-['Forum'] text-2xl text-white tracking-tight">Tuna Roll</h3>
<span className="text-[#C65A1E] text-lg font-medium">£16</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Spicy tuna, cucumber, topped with seared tuna, avocado, and unagi sauce.</p>
</div>
</article>

<article className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/20 overflow-hidden hover:border-[#C65A1E]/30 transition-all duration-500">
<div className="h-56 w-full relative overflow-hidden bg-zinc-800">
<img alt="Shadow Claw Roll" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-['Forum'] text-2xl text-white tracking-tight">Shadow Claw Roll</h3>
<span className="text-[#C65A1E] text-lg font-medium">£18</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Soft shell crab tempura, asparagus, black tobiko, and spicy truffle mayo.</p>
</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="mains">
<div className="mb-12 flex items-center gap-4">
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Main Courses</h2>
<div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<article className="group flex flex-col md:flex-row gap-8 items-center p-6 rounded-3xl border border-zinc-800/40 bg-gradient-to-br from-zinc-900/50 to-zinc-950 hover:border-zinc-700 transition-colors duration-500">
<div className="h-64 w-full md:w-64 shrink-0 rounded-2xl overflow-hidden bg-zinc-800 relative shadow-2xl">
<img alt="Grilled Chicken" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex flex-col flex-grow w-full">
<h3 className="font-['Forum'] text-3xl text-white tracking-tight mb-2">Signature Grilled Chicken</h3>
<p className="text-lg text-zinc-400 font-light mb-6 leading-relaxed">Half free-range chicken marinated in our secret blend of spices, char-grilled to perfection. Served with roasted root vegetables and a rich jus.</p>
<div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800/50">
<span className="text-[#C65A1E] text-xl font-medium">£24</span>
<button className="text-sm font-medium text-zinc-300 hover:text-white uppercase tracking-wider flex items-center gap-2 transition-colors">
                                Add to Order <i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col md:flex-row gap-8 items-center p-6 rounded-3xl border border-zinc-800/40 bg-gradient-to-br from-zinc-900/50 to-zinc-950 hover:border-zinc-700 transition-colors duration-500">
<div className="h-64 w-full md:w-64 shrink-0 rounded-2xl overflow-hidden bg-zinc-800 relative shadow-2xl">
<img alt="Pan Seared Salmon" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-grow w-full">
<h3 className="font-['Forum'] text-3xl text-white tracking-tight mb-2">Pan Seared Salmon</h3>
<p className="text-lg text-zinc-400 font-light mb-6 leading-relaxed">Crispy skin Atlantic salmon fillet resting on a bed of delicate lemon risotto, finished with green oil and crispy capers.</p>
<div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800/50">
<span className="text-[#C65A1E] text-xl font-medium">£28</span>
<button className="text-sm font-medium text-zinc-300 hover:text-white uppercase tracking-wider flex items-center gap-2 transition-colors">
                                Add to Order <i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="desserts">
<div className="mb-12 flex items-center gap-4">
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Desserts</h2>
<div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/80 transition-all duration-300">
<div className="flex justify-between items-start mb-3">
<h3 className="font-['Forum'] text-2xl text-white tracking-tight">Key Lime Cheesecake</h3>
<span className="text-[#C65A1E] text-lg font-medium">£10</span>
</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">Deconstructed cheesecake with toasted graham cracker crumble and torched meringue.</p>
</article>
</div>
</section>

<section className="scroll-mt-32" id="drinks">
<div className="mb-16 flex items-center gap-4">
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight">Drinks &amp; Cocktails</h2>
<div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">

<div>
<h3 className="font-['Forum'] text-3xl text-[#C65A1E] tracking-tight mb-8 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="martini"></i> Signature Cocktails
                    </h3>
<div className="space-y-6">
<div className="group">
<div className="flex items-baseline gap-4 mb-1">
<h4 className="font-['Forum'] text-xl text-zinc-100 group-hover:text-white transition-colors">The Lost Yeti Old Fashioned</h4>
<div className="flex-grow border-b border-dotted border-zinc-700/50"></div>
<span className="text-zinc-300 text-lg">£14</span>
</div>
<p className="text-base text-zinc-500 font-light">Bourbon, smoked maple syrup, angostura &amp; orange bitters.</p>
</div>
<div className="group">
<div className="flex items-baseline gap-4 mb-1">
<h4 className="font-['Forum'] text-xl text-zinc-100 group-hover:text-white transition-colors">Himalayan Sunset</h4>
<div className="flex-grow border-b border-dotted border-zinc-700/50"></div>
<span className="text-zinc-300 text-lg">£12</span>
</div>
<p className="text-base text-zinc-500 font-light">Tequila blanco, blood orange, lime, agave, chilli salt rim.</p>
</div>
</div>
</div>

<div>
<h3 className="font-['Forum'] text-3xl text-[#C65A1E] tracking-tight mb-8 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="wine"></i> Wine
                    </h3>
<div className="space-y-6">
<div className="group">
<div className="flex items-baseline gap-4 mb-1">
<h4 className="font-['Forum'] text-xl text-zinc-100 group-hover:text-white transition-colors">Malbec, Mendoza</h4>
<div className="flex-grow border-b border-dotted border-zinc-700/50"></div>
<span className="text-zinc-300 text-lg">£9 / £36</span>
</div>
<p className="text-base text-zinc-500 font-light">Argentina. Notes of dark plum and vanilla.</p>
</div>
<div className="group">
<div className="flex items-baseline gap-4 mb-1">
<h4 className="font-['Forum'] text-xl text-zinc-100 group-hover:text-white transition-colors">Sauvignon Blanc, Marlborough</h4>
<div className="flex-grow border-b border-dotted border-zinc-700/50"></div>
<span className="text-zinc-300 text-lg">£10 / £38</span>
</div>
<p className="text-base text-zinc-500 font-light">New Zealand. Crisp, zesty, tropical fruits.</p>
</div>
</div>
</div>

<div>
<h3 className="font-['Forum'] text-3xl text-[#C65A1E] tracking-tight mb-8 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="beer"></i> Beer
                    </h3>
<div className="space-y-6">
<div className="group">
<div className="flex items-baseline gap-4 mb-1">
<h4 className="font-['Forum'] text-xl text-zinc-100 group-hover:text-white transition-colors">Local Craft IPA</h4>
<div className="flex-grow border-b border-dotted border-zinc-700/50"></div>
<span className="text-zinc-300 text-lg">£6.5</span>
</div>
<p className="text-base text-zinc-500 font-light">Guernsey brewed, hoppy and citrusy. Pint.</p>
</div>
</div>
</div>

<div>
<h3 className="font-['Forum'] text-3xl text-[#C65A1E] tracking-tight mb-8 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="cup-soda"></i> Soft Drinks
                    </h3>
<div className="space-y-6">
<div className="group">
<div className="flex items-baseline gap-4 mb-1">
<h4 className="font-['Forum'] text-xl text-zinc-100 group-hover:text-white transition-colors">House Lemonade</h4>
<div className="flex-grow border-b border-dotted border-zinc-700/50"></div>
<span className="text-zinc-300 text-lg">£4</span>
</div>
<p className="text-base text-zinc-500 font-light">Freshly squeezed lemons, mint, sparkling water.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="border-t border-zinc-900 bg-zinc-950 py-24 relative overflow-hidden" id="book-table">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C65A1E]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-['Forum'] text-4xl md:text-5xl text-white tracking-tight mb-6">Ready to experience it in person?</h2>
<p className="text-lg text-zinc-400 font-light mb-10 max-w-xl mx-auto">Join us at The Lost Yeti for an unforgettable dining experience in the heart of Guernsey.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto bg-[#C65A1E] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#A34A18] transition-all duration-300 shadow-[0_0_20px_rgba(198,90,30,0.2)]" href="#">
                    Book a Table
                </a>
<a className="w-full sm:w-auto bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-zinc-800 transition-all duration-300" href="#">
                    View Lunch Menu
                </a>
</div>
</div>
</section>

<footer className="bg-black border-t border-zinc-900 py-16">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-2">
<img alt="The Lost Yeti Logo" className="h-16 w-auto mb-6 object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<p className="text-base text-zinc-500 font-light max-w-sm">Premium dining and expertly crafted cocktails. A culinary sanctuary in Guernsey.</p>
</div>

<div>
<h4 className="font-['Forum'] text-xl text-white mb-6 tracking-tight">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-500 hover:text-[#C65A1E] transition-colors" href="#">Home</a></li>
<li><a className="text-base text-zinc-500 hover:text-[#C65A1E] transition-colors" href="#">Menu</a></li>
<li><a className="text-base text-zinc-500 hover:text-[#C65A1E] transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-zinc-500 hover:text-[#C65A1E] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-['Forum'] text-xl text-white mb-6 tracking-tight">Visit Us</h4>
<address className="not-italic space-y-4 text-base text-zinc-500 font-light">
<p>12 High Street<br/>St Peter Port<br/>Guernsey</p>
<p><a className="hover:text-[#C65A1E] transition-colors" href="mailto:hello@thelostyeti.gg">hello@thelostyeti.gg</a></p>
<p><a className="hover:text-[#C65A1E] transition-colors" href="tel:+441481123456">+44 1481 123 456</a></p>
</address>
<div className="flex gap-4 mt-8">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-600 font-light">© 2023 The Lost Yeti. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
